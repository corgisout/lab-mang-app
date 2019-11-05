/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import m from "mithril";
import { home } from "./views/home.js";
import { navbar } from "./views/navbar.js";
import { loginForm } from "./views/loginForm.js";
import { borrowbooking } from "./views/borrowbooking.js";
import { singlebooking } from "./views/singlebooking.js";
import { returnbooking } from "./views/returnbooking.js";


var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render : function () {
                    return m(navbar, m(home));
                }
            },
            "/loginForm": {
                render : function () {
                    return m(navbar, m(loginForm));
                }
            },
            "/borrowbooking": {
                render : function () {
                    return m(navbar ,m(borrowbooking));
                }
            },
            "/returnbooking": {
                render : function () {
                    return m(navbar ,m(returnbooking));
                }
            },
            "/singlebooking/:id": {
                render : function (vnode) {
                    return m(navbar ,m(singlebooking, vnode.attrs));
                }
            },
        });
    }
};

app.initialize();
