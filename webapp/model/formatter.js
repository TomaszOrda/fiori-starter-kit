sap.ui.define([], 
function () {
    "use strict";

    return {
        formatName : function(sFirstName, sLastName){
            return `${sFirstName[0]}. ${sLastName}`
        },
        formatEmployeeOrders : function(oOrders){
            //this does not seem fail safe, in odatav4 i would have no need for such aggregation
            return `${Object.keys(oOrders).length}`
        }
    };

});