sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "EmployeesList";

    Opa5.createPageObjects({
        onTheEmployeesPage: {

            actions: {},

            assertions: {

                iShouldSeeTheEmployeesListView: function () {
                    return this.waitFor({
                        controlType: "sap.m.Page",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },

                iShouldFindTheTable: function (sTableID) {
                    return this.waitFor({
                        id: sTableID,
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, `The ${sTableID} table is displayed`);
                            const iItemsCount = oTable.getItems().length;
                            Opa5.assert.notStrictEqual(iItemsCount, 0, `Table has : ${iItemsCount} items`);
                        },
                        errorMessage: `Did not find the ${sTableID} table`
                    });
                },

                iShouldSeeTheColumn: function (sColumnID) {
                    return this.waitFor({
                        id: sColumnID,
                        controlType: "sap.m.Column",
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, `Column ${sColumnID} is displayed`);
                        },
                        errorMessage: `Did not find the column ${sColumnID}`
                    });
                }

            }
        }
    });

});