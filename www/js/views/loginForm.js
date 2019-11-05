import m from "mithril";

import { login } from "../models/login.js";


const loginForm = {
    //sets user info to default and token to default if something were to go wrong
    oninit: function(){
        login.initUser(),
        login.token == ""
    },
    //creates a view with login inputs that are sanetized
    view: function () {
        return [
            m("form", {
                //on submit the app will run the login function to try a login. if the login fails it will return an error message
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
