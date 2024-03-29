import m from "mithril";

import { login } from "../models/login.js";


var navbar = {
    view: function (vnode) {
        return [
            m("header.header", [
                m("img.imglogo",{src:"img/bthlogo.png",width:'100px',height:'100px'}),
                m("h1.logo","SERL Sweden"),
                login.token != ""?m("button.button", {
                    onclick: () => {login.logout()}
                }, "logout"): null,

            ]),
            m("div.layout", vnode.children),
            login.token != ""?m("footer.footer", [
                m("a[href='/barcode']", {oncreate: m.route.link}, "borrow"),
                m("a[href='/returnbooking']", {oncreate: m.route.link}, "return"),
            ]): null,
        ];
    }
};


export { navbar };
