//home page view
import m from "mithril";

import { login } from "../models/login.js";


const home = {
    //sets login token to default if something goes wrong
    oncreate: function() {
       login.token = ""
    },
    //gives animation to page
    onbeforeremove: function(vnode) {
    vnode.dom.classList.add("slide-down");
    return new Promise(function(resolve) {
        setTimeout(function() {
            vnode.dom.classList.remove("slide-down");
            resolve();
        }, 250);
    });
    },
    //creates view elements on page
    view: function () {
        return [
            m("div.slide-up", [
            m("h1.title", "Login to scan"),
            m("input[value=login][type=submit]a[href='/loginForm'].button green-button", {oncreate: m.route.link}, "login"),
        ])
        ];
    }
};
export { home };
