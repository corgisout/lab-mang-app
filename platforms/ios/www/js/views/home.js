import m from "mithril";

import { login } from "../models/login.js";


const home = {
    oncreate: function() {
       login.token = ""
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
        console.log(login.token)
        return [
            m("div.slide-up", [
            m("h1.title", "Login to scan"),
            m("input[value=login][type=submit]a[href='/loginForm'].button green-button", {oncreate: m.route.link}, "login"),
        ])
        ];
    }
};
export { home };
