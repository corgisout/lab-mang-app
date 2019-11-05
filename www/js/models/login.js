"use strict";

import m from "mithril";

let login = {
    baseUrl: "http://api.invproj.nicklaspoke.se/",
    token: "",
    onebooking: [],
    allBookings: [],
    currentUser: { userId: "", password: "" },
    //function to init new user.
    initUser: function() {
        login.currentUser = { userId: "", password: "" };
    },
    //login function sets the route to borrowbooking
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
                m.route.set("/borrowbooking");
            } else {
                alert(result.errors.details);
            }
        });
    },
    //function to get bookings of logged in user returns object with booking info
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
    //function to check out equipment moves checked out equipment to return
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
    //function to return already borrowed equipment
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
    //reset user so new user can log in and sets path to home
    logout: function(){
        login.token = ""
        m.route.set("/home");
    },
}

export { login };
