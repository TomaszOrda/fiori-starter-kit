sap.ui.define([], 
function () {
    "use strict";

    return {
        formatName : function(sFirstNames, sLastName){
            const sInitials = sFirstNames.split(" ").map((sFirstName) => sFirstName[0]+".").join(" ");
            return `${sInitials} ${sLastName}`
        },
        formatEmployeeOrders : function(oOrders){
            return `${oOrders.length}`
        }
    };

});