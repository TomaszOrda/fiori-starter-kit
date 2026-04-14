sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerDetails", {

        _onPatternMatched(oEvent){
            this.getView().bindElement({
                path:`/Customers('${oEvent.getParameter("arguments").CustomerID}')`,
                parameters: {
                    expand: "Orders,Orders/Order_Details"
                }
            })
        },
        onInit() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
        }
    });
});