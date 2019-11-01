import m from "mithril";

import { login } from "../models/login.js";


const singlebooking = {
    oninit: function(vnode){
        login.onebooking = login.allBookings.filter(word => word.id == vnode.attrs.id)
        login.GetBookings();
    },
    onbeforeremove: function(vnode) {
    vnode.dom.classList.add("slide-down");
    return new Promise(function(resolve) {
        setTimeout(function() {
            vnode.dom.classList.remove("slide-down");
            resolve();
        }, 250);
    });
    },
    view: function (vnode) {
        console.log(vnode.attrs.id)
        return [
            m("div.slide-up", [
            m("p", login.onebooking[0].equipment_name),
            m("button.button", {
                onclick: () => {startScan()}
            }, "Scan")
        ])
        ];
    }
};

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
