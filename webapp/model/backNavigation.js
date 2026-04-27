sap.ui.define([], 
function () {
    "use strict";

    return {
        handleNavButtonPress: function(oController, sFallbackNavigation){
                //https://learning.sap.com/courses/developing-uis-with-sapui5-1/routing-back_c9b9f625-a6c1-4b54-9d32-8196143d5ee5
                var oHistory = sap.ui.core.routing.History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = oController.getOwnerComponent().getRouter();
                    oRouter.navTo(sFallbackNavigation, {}, true);
                }
        }
    };

});