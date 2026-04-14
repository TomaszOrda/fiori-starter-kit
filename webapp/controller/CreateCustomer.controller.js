sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CreateCustomer", {
        onConfirmCreateCustomer(){
            const sId = this.byId("customerIdInput").getValue();
            const sName = this.byId("customerNameInput").getValue();
            this.getView().getModel().create("/Customers", {
                CustomerID: sId,
                CompanyName: sName
            });
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomersList", {});
        },
        onInit() {
        }
    });
});