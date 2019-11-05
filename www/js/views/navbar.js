import m from "mithril";

import { login } from "../models/login.js";

//navbar and header for the app
var navbar = {
    view: function (vnode) {
        return [
            //header if you want to change the logo just change to src for the image
            m("header.header", [
                m("img.imglogo",{src:"img/bthlogo.png",width:'100px',height:'100px'}),
                m("h1.logo","SERL Sweden"),
                login.token != ""?m("button.button", {
                    onclick: () => {login.logout()}
                }, "logout"): null,

            ]),
            //footer with navbar options that only show up if user is logged in
            m("div.layout", vnode.children),
            login.token != ""?m("footer.footer", [
                m("a[href='/borrowbooking']", {oncreate: m.route.link}, "borrow"),
                m("a[href='/returnbooking']", {oncreate: m.route.link}, "return"),
            ]): null,
        ];
    }
};


export { navbar };
