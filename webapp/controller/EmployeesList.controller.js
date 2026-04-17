sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
], (Controller, Formatter) => {
    "use strict";
    return Controller.extend("stk.starterkit.controller.EmployeesList", {
        formatter:Formatter,
        onGoToCustomersList (oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomersList", {});
        },
        onMotivate (oEvent) {
            const sEmployeeID = oEvent.getSource().getBindingContext().getObject().CustomerID; 
            alert(`Motivate ${sEmployeeID}`)
        },
        onFire (oEvent) {
            const sEmployeeID = oEvent.getSource().getBindingContext().getObject().CustomerID; 
            alert(`Fire ${sEmployeeID}`)
        },
        onInit() {
        }
    });
});