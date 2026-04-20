sap.ui.define([], 
function () {
    "use strict";

    return {
        formatName : function(sFirstNames, sLastName){
            const sInitials = sFirstNames.split(" ").map((sFirstName) => sFirstName[0]+".").join(" ");
            return `${sInitials} ${sLastName}`
        },
        formatEmployeeOrders : function(oOrders){
            //this does not seem fail safe, in odatav4 i would have no need for such aggregation
            return `${Object.keys(oOrders).length}`
        }
    };

});