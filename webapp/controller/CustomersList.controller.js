sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/export/Spreadsheet",
], (Controller, Sorter, Filter, FilterOperator, Spreadsheet) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomersList", {
        
        onGoToEmployees (oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("EmployeesList", {});
        },
        onCreate (oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CreateCustomer", {});
        },
        onCustomerPress (oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            const oNavigationParameters = {
                CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
            }
            oRouter.navTo("CustomerDetails", oNavigationParameters);
        },

        onSortByCountry: function() {
            const oTable = this.byId("customersTable");
            const oBinding = oTable.getBinding("items");
            const bSortDescending = oBinding.aSorters[0] ? !oBinding.aSorters[0].bDescending : false;
            const oSorter = new Sorter(`Country`, bSortDescending);
            // Sort by company name if country is equal
            const oSorterSecondary = new Sorter(`CompanyName`, false);
            oBinding.sort([oSorter, oSorterSecondary]);
        },

        setCompanyFilter: function(oEvent){
            const oTable = this.getView().byId("customersTable");
            const oBinding = oTable.getBinding("items");
            const sCompanyName = oEvent.getSource().getValue();
            //Could use FilterOperator.StartsWith
            const oFilter = new Filter(`CompanyName`, FilterOperator.Contains, sCompanyName);
            oBinding.filter([oFilter]);
            this.updateNoCustomers()
        },

        onPressGenerateExcelReport: function(){
            //We need to download from model. View is not reliable!
            const oModel = this.getOwnerComponent().getModel();
            const oServiceUrl = oModel.getServiceUrl();
            const oEntity = oModel.getServiceMetadata()
                                  .dataServices
                                  .schema[0]
                                  .entityType
                                  .find((oEntity) => oEntity.name === "Customer")
                                  .property;
            const aCols = oEntity.map((oProp) => ({
                label: oProp.name,
                type: oProp.type,
                property: oProp.name
            }));
            const oSettings = {
                workbook: { columns: aCols },
                dataSource: {
                    type: "OData",
                    dataUrl: `${oServiceUrl}/Customers`,
                    serviceUrl: oServiceUrl,
                    headers: {
                        Accept: "application/json",
                        "Accept-Language": "en",
                        DataServiceVersion: "2.0",
                        Connection: "keep-alive"
                    }
                },
                fileName: "Customers.xlsx",
                worker: true,
                sizeLimit:500
            };
            const oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function(){
                oSheet.destroy();
            });
        },

        onTableUpdateFinished(){
            this.updateNoCustomers(this.byId("CustomersTable").getItems().length)
        },

        updateNoCustomers: function(iNoCustomers){
            const oCustomersModel = this.getOwnerComponent().getModel("CustomersProperties");
            oCustomersModel.setProperty("/noCustomers", iNoCustomers)
        },
        onInit() {
            const oCustomersModel = this.getOwnerComponent().getModel("CustomersProperties");
            oCustomersModel.setProperty("/noCustomers", 0);
        }
    });
});