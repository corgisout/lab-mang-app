import m from "mithril";

import { login } from "../models/login.js";


const returnbooking = {
    oninit: function(vnode){
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
    view: function () {
        return [
            m("div.slide-up", [
            m("div.test", login.allBookings.map(function(data){
                return m("p.line", [
                    data.status == 3 ?m("p",  m("a[href='/singlebooking/" + data.id + "']", {oncreate: m.route.link}, data.equipment_name)): null,
            ]);
            })),
        ])
        ];
    }
};


export { returnbooking };
