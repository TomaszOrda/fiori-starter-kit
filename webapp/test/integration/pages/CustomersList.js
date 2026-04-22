sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "CustomersList";

    Opa5.createPageObjects({
        onTheCustomersListPage: {

            actions: {
                iPressControl: function (sID) {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        id: sID,
                        viewName: sViewName,
                        actions: new Press(),
                        success: function() {
                            Opa5.assert.ok(true, `Succesfully pressed ${sID}`);
                        },
                        errorMessage: "Count not ifnd the Control"
                    })
                }

            },

            assertions: {

                iShouldSeeTheCustomersListView: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id:"page",
                        // id: "customersTable",
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },

                iShouldFindTheTable: function () {
                    return this.waitFor({
                        id: "CustomersTable",
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, "The table is displayed");
                            const iItemsCount = oTable.getItems().length;
                            Opa5.assert.notStrictEqual(iItemsCount, 0, `Table has : ${iItemsCount} items`);
                        },
                        errorMessage: "Did not find the table"
                    });
                },

                
                iShouldFindTheCarousel: function () {
                    return this.waitFor({
                        controlType: "sap.m.Carousel",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The carousel is displayed");
                        },
                        errorMessage: "Did not find the carousel"
                    });
                },
                
                iShouldFindTheSortButton: function () {
                    return this.waitFor({
                        id: "SortCountryButton",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The sort button is displayed");
                        },
                        errorMessage: "Did not find the sort button"
                    });
                },
                
                iShouldFindTheExportButton: function () {
                    return this.waitFor({
                        id: "ExportCSVButton",
                        viewName: sViewName,
                        matchers: new sap.ui.test.matchers.I18NText({
                            propertyName: "text",
                            key: "exportCustomersData"
                        }),
                        success: function () {
                            Opa5.assert.ok(true, "The export button is displayed");
                        },
                        errorMessage: "Did not find the export button"
                    });
                },

                iShouldFindTheEmployeesButton: function () {
                    return this.waitFor({
                        id: "goToEmployees",
                        viewName: sViewName,
                        matchers: new sap.ui.test.matchers.I18NText({
                            propertyName: "text",
                            key: "goToEmployeesList"
                        }),
                        success: function () {
                            Opa5.assert.ok(true, "The employees list navigation button is displayed");
                        },
                        errorMessage: "Did not find the employees list navigation button"
                    });
                },

            }
        }
    });

});