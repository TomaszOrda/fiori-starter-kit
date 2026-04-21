sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "CustomersList";

    Opa5.createPageObjects({
        onTheCustomersListPage: {

            actions: {},

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
                }

            }
        }
    });

});