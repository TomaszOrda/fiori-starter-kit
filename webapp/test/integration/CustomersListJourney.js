/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
    "./pages/CustomersList"
], function (opaTest) {
    "use strict";

    QUnit.module("CustomersList Journey");

    opaTest("Should see the initial page of the app with elements", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Then.onTheCustomersListPage.iShouldSeeTheCustomersListView();
        Then.onTheCustomersListPage.iShouldFindTheTable();
        Then.onTheCustomersListPage.iShouldFindTheCarousel();

        // Cleanup
        Then.iTeardownMyApp();
    });

});
