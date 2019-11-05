import m from "mithril";

import { login } from "../models/login.js";


const borrowbooking = {
    //get all bookings
    oninit: function(vnode){
        login.GetBookings();
    },
    //animations for page
    onbeforeremove: function(vnode) {
    vnode.dom.classList.add("slide-down");
    return new Promise(function(resolve) {
        setTimeout(function() {
            vnode.dom.classList.remove("slide-down");
            resolve();
        }, 250);
    });
    },
    //creates a list of all bookings that are borrowed
    view: function () {
        return [
            m("div.slide-up", [
            m("div.test", login.allBookings.map(function(data){
                return data.status == 2 ?m("p", [
                    data.status == 2 ?m("p",  m("a[href='/singlebooking/" + data.id + "']", {oncreate: m.route.link}, data.equipment_name)): null,
            ]): null;
            })),
        ])
        ];
    }
};


export { borrowbooking };
