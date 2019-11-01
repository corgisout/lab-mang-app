"use strict";

import m from "mithril";

let login = {
    baseUrl: "http://api.invproj.nicklaspoke.se/",
    token: "",
    onebooking: [],
    allBookings: [],
    currentUser: { userId: "", password: "" },
    initUser: function() {
        login.currentUser = { userId: "", password: "" };
    },
    login: function() {
        return m.request({
            method: "POST",
            url: "http://api.invproj.nicklaspoke.se/login",
            data: {
                userId: login.currentUser.userId,
                password: login.currentUser.password
            }
        }).then(function(result){
            if (typeof(result.data) !== "undefined"){
                login.token = result.data.token;
                m.route.set("/barcode");
            } else {
                alert(result.errors.details);
            }
        });
    },
    GetBookings: function(){
        return m.request({
            method: "GET",
            url: "http://api.invproj.nicklaspoke.se/booking",
            headers: {
                "x-access-token": login.token
            }
        }).then(function(result){

            login.allBookings = result
        })
    },

    checkout: function(){
        return m.request({
            method: "PUT",
            url: "http://api.invproj.nicklaspoke.se/booking/checkout",
            data: {
                barcode: login.onebooking[0].barcode,
            },
            headers: {
                "x-access-token": login.token
            }
        }).then(function(result){
            console.log("works")
        })
    },
    return: function(){
        return m.request({
            method: "PUT",
            url: "http://api.invproj.nicklaspoke.se/booking/return",
            data: {
                barcode: login.onebooking[0].barcode,
            },
            headers: {
                "x-access-token": login.token
            }
        }).then(function(result){
            console.log("works")
        })
    },
    logout: function(){
        login.token = ""
        m.route.set("/home");
    },
}

export { login };
