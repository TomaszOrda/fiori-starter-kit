/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList",
    "./pages/EmployeesList",
], function (opaTest) {
    "use strict";

    QUnit.module("Employees Journey");

    opaTest("Should see the initial page of the app, then go to Employees page and check it with elements", function (Given, When, Then) {

        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Then.onTheCustomersListPage.iShouldSeeTheCustomersListView();
        Then.onTheCustomersListPage.iShouldFindTheEmployeesButton();
        When.onTheCustomersListPage.iPressControl("goToEmployees");
        Then.onTheEmployeesPage.iShouldSeeTheEmployeesListView();
        Then.onTheEmployeesPage.iShouldFindTheTable("employeesTable");
        Then.onTheEmployeesPage.iShouldSeeTheColumn("ContactNameColumn");
        Then.onTheEmployeesPage.iShouldSeeTheColumn("EmployeeTitleColumn");
        Then.onTheEmployeesPage.iShouldSeeTheColumn("EmployeeOrdersColumn");
        Then.onTheEmployeesPage.iShouldSeeTheColumn("ActionsColumn");

        // Cleanup
        Then.iTeardownMyApp();
    });
});
``