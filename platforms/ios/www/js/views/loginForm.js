import m from "mithril";

import { login } from "../models/login.js";


const loginForm = {
    oninit: function(){
        login.initUser(),
        login.token == ""
    },
    view: function () {
        return [
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    login.login();
                }
            } , [
            m("label.input-label", "username"),
            m("input.input[type=text][placeholder=username].username", {
                oninput: function (e) {
                    login.currentUser.userId = e.target.value;
                },
                value: login.currentUser.userId
            }),
            m("label.input-label", "password"),
            m("input.input[type=password][placeholder=password].password", {
                oninput: function (e) {
                    login.currentUser.password = e.target.value;
                },
                value: login.currentUser.password
            }),
            m("input[type=submit][value=login].button green-button", "login")
        ])
    ];
    }
};

export { loginForm };
