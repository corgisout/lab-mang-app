import m from "mithril";

import { login } from "../models/login.js";


const singlebooking = {
    //gets all bookings
    oninit: function(vnode){
        login.onebooking = login.allBookings.filter(word => word.id == vnode.attrs.id)
        login.GetBookings();
    },
    //animation for page
    onbeforeremove: function(vnode) {
    vnode.dom.classList.add("slide-down");
    return new Promise(function(resolve) {
        setTimeout(function() {
            vnode.dom.classList.remove("slide-down");
            resolve();
        }, 250);
    });
    },
    //show only selected booking from earlier borrow or return page
    view: function (vnode) {
        console.log(vnode.attrs.id)
        return [
            m("div.slide-up", [
            m("p", login.onebooking[0].equipment_name),
            //creates button the start scan
            m("button.button", {
                onclick: () => {startScan()}
            }, "Scan")
        ])
        ];
    }
};
//scanning to check if the barcode is right if nor return error message
function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (login.onebooking[0].barcode == result.text){
                if (login.onebooking[0].status == 2){
                    login.checkout()
                    alert("item borrowed");
                    m.route.set("/barcode");
                }else if(login.onebooking[0].status == 3){
                    login.return()
                    alert("item returned");
                    m.route.set("/returnbooking");
                }else{
                    alert("wrong status")
                }
        } else {
            alert("wrong barcode")
        }
       },
       function (error) {
           alert("Scanning failed: " + error);
       },
       {
           resultDisplayDuration: 0,
       }
	);

}

export { singlebooking };
