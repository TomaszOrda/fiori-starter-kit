sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment"
], (Controller, Formatter, Fragment) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerDetails", {
        formatter:Formatter,
        _onPatternMatched(oEvent){
            this.getView().bindElement({
                path:`/Customers('${oEvent.getParameter("arguments").CustomerID}')`,
                // parameters: {
                //     expand: "Orders,Orders/Order_Details"
                // }
            })
        },
        onShowContactInfo: function(){
            var oView = this.getView();
            if(!this.byId('contactDialog')){
                Fragment.load({
                    id: oView.getId(),
                    name: "stk.starterkit.view.ContactInfoDialog",
                    //This allowes dialog to use onCloseContactInfo function
                    controller: this
                }).then(function (oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
                
                // The above is equivalent to the below, but the pressShowContactInfo function would have to be async
                // From what i have read, .then registers somewhere an async function to be called
                // Just as if we had a singleton that from time to time would call all the async functions that it gathered over time and then would simply send the function to this singleton

                // const oDialog = await Fragment.load({..});
                // oView.addDependent(oDialog);
                // oDialog.open();
            }else{
                //The contactDialog gets killed only after the view is, 
                // so we might have the same contactDialog handling different users
                this.byId("contactDialog").open();
            }
        },
        onCloseContactInfo : function (){
            this.byId("contactDialog").close();
        },
        onInit() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
        }
    });
});