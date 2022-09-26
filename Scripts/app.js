"use strict";
//IIFE -- Immmediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
    // First method of using functions
    function Start() {
        console.log("App Started!");
        // LoadData("GET", "./Data/contacts.json", function(XHR){
        //     console.log(XHR);
        // });
        $.getJSON("./Data/contacts.json", function (DataSource) {
            console.log(DataSource.ContactList[0]);
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map