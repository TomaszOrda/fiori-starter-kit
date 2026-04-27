sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "stk/starterkit/model/backNavigation",
], (Controller, Formatter, BackNavigation) => {
    "use strict";
    return Controller.extend("stk.starterkit.controller.EmployeesList", {
        formatter:Formatter,
        handleNavButtonPress(){ 
            BackNavigation.handleNavButtonPress(this, "CustomersList")
        },
        onGoToCustomersList (oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomersList", {});
        },
        onMotivate (oEvent) {
            const oEmployee = oEvent.getSource().getBindingContext().getObject();
            const sEmail = `${oEmployee.FirstName}.${oEmployee.LastName}@example.com`;
            const sSubject = "Good job!";
            const oModel = new sap.ui.model.json.JSONModel();
            let sBody = "";

            oModel.loadData(
                "motivationalAPI", 
                {
                    method:"getQuote",
                    lang:"en",
                    format:"json",
                    key:"motivational"
                }
                ).then(function (){
                    const { quoteText, quoteAuthor } = oModel.getData(); 
                    sBody = `${quoteText}` + (quoteAuthor ? ` — ${quoteAuthor}` : ``);
                }).catch(function (){
                    sBody = "You are doing well, thanks!";
                }).finally(function (){
                    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody); 
                });
        },
        onFire (oEvent) {
            const oEmployee = oEvent.getSource().getBindingContext().getObject();
            const sEmail = `${oEmployee.FirstName}.${oEmployee.LastName}@example.com`;
            const sSubject = "We are disappointed!";
            const oModel = new sap.ui.model.json.JSONModel();
            let sBody = "";
            
            oModel.loadData(
                "insultAPI", 
                {},
                ).then(function (){
                    sBody = oModel.getData().insult;
                }).catch(function (){
                    sBody = "Do better next time...";
                }).finally(function (){
                    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody); 
                });
        },
        onInit() {
        }
    });
});