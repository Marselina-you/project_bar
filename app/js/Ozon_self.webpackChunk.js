(self.webpackChunk_ozon_ozon_ru = self.webpackChunk_ozon_ozon_ru || []).push([["plugins"], {
    "074d7": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>y
        });
        var r = n("2f977")
          , o = n("f9266")
          , c = n("dad8b")
          , l = n("ff287")
          , f = n.n(l)
          , d = n("4dffc")
          , h = n("ecdbe")
          , v = function() {
            return v = Object.assign || function(e) {
                for (var s, i = 1, t = arguments.length; i < t; i++)
                    for (var p in s = arguments[i])
                        Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                return e
            }
            ,
            v.apply(this, arguments)
        };
        const y = function(e) {
            var t = e.store
              , n = e.$config
              , l = e.$composerRouter
              , y = f()(t.state, "layoutTrackingInfo", {})
              , w = f()(t.state, "browser", {})
              , m = f()(t.state, "browser.isBot", !1)
              , E = n.get("gtmOn")
              , O = "prod" === n.get("env") || !1
              , x = f()(t.state, "experimentsConfig", {})
              , I = (0,
            h.s)(x)
              , R = (0,
            h.U)(x)
              , k = {
                layoutTrackingInfo: y,
                browser: w,
                ecommerceExperiments: R
            };
            r.yD.init(k, {
                namespace: "bx",
                dev: !O,
                manager: Boolean(f()(t.state, "o3Params.x-o3-tracker-manager")),
                eventTemplate: function() {
                    return v(v({}, (0,
                    d.mK)(k)), {
                        page: {
                            current: y.pageType,
                            layoutId: y.layoutId,
                            layoutVersion: y.layoutVersion,
                            ruleId: y.ruleId
                        }
                    })
                }
            });
            var T = (0,
            c.rV)((0,
            o.TRACKER_KEY_WITH_PREFIX)("customReferrer"))
              , S = f()(window, "performance.navigation.type")
              , A = l.current
              , _ = 1 === S && T ? T : document.referrer;
            if (r.yD.sendDLPageEvents(t.state, A, _),
            E && !m) {
                var j = n.get("gtmKey")
                  , C = f()(t.state, "browser.cspNonce")
                  , P = document.createElement("script");
                P.setAttribute("nonce", C),
                P.setAttribute("data-nonce", C),
                P.setAttribute("id", "nonceGtm"),
                document.body.appendChild(P),
                window.onAppReady((function() {
                    return setTimeout((function() {
                        var script = document.createElement("script");
                        script.setAttribute("nonce", C);
                        var code = document.createTextNode("(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=d.querySelector('[nonce]');\n      n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer', '" + j + "');\n      ");
                        script.appendChild(code),
                        document.body.appendChild(script)
                    }
                    ), I)
                }
                ))
            }
        }
    }
    ,
    ecdbe: (e,t,n)=>{
        "use strict";
        n.d(t, {
            s: ()=>o,
            U: ()=>c
        });
        var r = n("54922");
        function o(e) {
            return Object.keys(e).filter((function(e) {
                return e.includes("gtmDelay")
            }
            )).map((function(e) {
                return parseInt(e.split("gtmDelay")[1])
            }
            )).sort((function(a, b) {
                return a - b
            }
            ))[0] || 500
        }
        function c(e) {
            for (var t = {}, i = 0; i < r.rr.length; i++) {
                var n = r.rr[i];
                void 0 !== e[n] && (t[n] = e[n])
            }
            return t
        }
    }
    ,
    40070: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n("51715")
          , o = n("38132")
          , c = n("92004")
          , l = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , f = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const d = function(e, t) {
            return l(void 0, void 0, void 0, (function() {
                var n, l;
                return f(this, (function(f) {
                    return n = new c.j(e),
                    l = (0,
                    o.e)(r, n),
                    t("api", l),
                    [2]
                }
                ))
            }
            ))
        }
    }
    ,
    a3afc: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>f
        });
        var r = n("60552")
          , o = n("81ad5")
          , c = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , l = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const f = function(e) {
            var t = e.store
              , n = e.$api
              , f = e.$composerRouter;
            r.Z.register({
                showAuthModal: function(e) {
                    return c(void 0, void 0, void 0, (function() {
                        return l(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, t.dispatch("composer/GET_MODAL", {
                                    url: e,
                                    options: {
                                        notCentered: !0
                                    }
                                })];
                            case 1:
                                return n.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getAuthMethodData: function(e) {
                    return c(void 0, void 0, void 0, (function() {
                        var t, r, o;
                        return l(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                return [4, n.composer.action.get({
                                    name: "authorizationMethod",
                                    query: {
                                        redirect_uri: e || location.pathname + location.search + location.hash
                                    }
                                })];
                            case 1:
                                return t = c.sent(),
                                r = t.method,
                                o = t.url,
                                [2, {
                                    method: r,
                                    url: o
                                }]
                            }
                        }
                        ))
                    }
                    ))
                },
                redirectToAuth: function(e) {
                    return c(void 0, void 0, void 0, (function() {
                        return l(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, f.redirect(e, o.Zp.SELF)];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            })
        }
    }
    ,
    60552: (e,t,n)=>{
        "use strict";
        var r;
        n.d(t, {
            Z: ()=>l
        }),
        function(e) {
            e.MODAL = "modal",
            e.REDIRECT = "redirect"
        }(r || (r = {}));
        var o = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , c = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , l = new (function() {
            function e() {}
            return e.prototype.register = function(e) {
                var t = e.showAuthModal
                  , n = e.getAuthMethodData
                  , r = e.redirectToAuth;
                this.showAuthModal = t,
                this.getAuthMethodData = n,
                this.redirectToAuth = r
            }
            ,
            e.prototype.showModal = function(e) {
                return o(this, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return [2, this.showAuthForm(e)]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.showAuthForm = function(e) {
                return o(this, void 0, void 0, (function() {
                    var t, n, o;
                    return c(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, this.getAuthMethodData(e)];
                        case 1:
                            return t = c.sent(),
                            n = t.method,
                            o = t.url,
                            n !== r.REDIRECT ? [3, 3] : [4, this.redirectToAuth(o)];
                        case 2:
                            return c.sent(),
                            [3, 5];
                        case 3:
                            return [4, this.showAuthModal(o)];
                        case 4:
                            c.sent(),
                            c.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }())
    }
    ,
    "0c76f": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>v
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("d336c")
          , l = n.n(c)
          , f = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , d = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , h = "perfomanceSessionId";
        function v(e) {
            var t = e.store
              , n = e.$config;
            return f(this, void 0, void 0, (function() {
                var path, e, r, c, f, v, y, w, m, E, O, x, object, I, R;
                return d(this, (function(d) {
                    return n.get("isModern") && (path = n.get("clientMetricsEndpoint"),
                    e = new (l())(path),
                    r = o()(t, "state.segments", []).includes(2682),
                    c = o()(t, "state.userToken", ""),
                    (f = localStorage.getItem(h)) || (f = Math.random().toString(16).substring(2, 16) + "-" + Math.random().toString(16).substring(2, 16),
                    localStorage.setItem(h, f)),
                    v = o()(t, "state.browser.isMobile") ? "MOBILE_WEB" : "WEB",
                    y = o()(t, "state.browser.isBot"),
                    w = o()(t, "state.experimentsConfig.trackResources", !1),
                    m = o()(t, "state.experimentsConfig.trackCdnImages", !1),
                    E = function() {
                        return {
                            domainName: "ozon.ru",
                            namespace: "bx",
                            userToken: c,
                            sessionId: f,
                            platform: v,
                            isTrustedUser: r,
                            screenResolutionX: o()(window, "screen.width"),
                            screenResolutionY: o()(window, "screen.height"),
                            screenPixelDensity: o()(window, "devicePixelRatio"),
                            userAgent: navigator.userAgent
                        }
                    }
                    ,
                    O = function() {
                        return {
                            clientId: o()(t, "state.userInfo.user.userId"),
                            regionId: o()(t, "state.location.current.areaId")
                        }
                    }
                    ,
                    x = function() {
                        return {
                            current: o()(t, "state.pageInfo.pageType"),
                            currentUrl: o()(t, "state.pageInfo.url"),
                            spa: o()(t, "state.browser.useSpa"),
                            layoutId: o()(t, "state.pageInfo.layoutId"),
                            layoutVersion: o()(t, "state.pageInfo.layoutVersion"),
                            inlineGallery: o()(t, "state.experimentsConfig.inlineGallery", !1),
                            disableGalleryImage: o()(t, "state.experimentsConfig.disableGalleryImage", !1),
                            referrer: document.referrer
                        }
                    }
                    ,
                    object = {
                        type: "APPLICATION"
                    },
                    I = {
                        spaTransitionUrl: "composer-api.bx/page/json/v2",
                        paginationUrl: "composer-api.bx/page/json/v2"
                    },
                    R = o()(t, "state.o3Params.x-o3-sitespeed-enable"),
                    window.__ClientMetricsInit__ = {
                        customMarksNames: ["RENDER_TIME"],
                        endpoint: e,
                        getAttributes: E,
                        object,
                        getUser: O,
                        getPage: x,
                        isBot: y,
                        trackJs: w,
                        trackImages: w,
                        trackCdnImages: m,
                        settings: I,
                        isSiteSpeed: R
                    }),
                    [2]
                }
                ))
            }
            ))
        }
    }
    ,
    "6d584": ()=>{
        "use strict";
        var e;
        "function" != typeof (e = window.Element.prototype).matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) {
            for (var element = this, t = (element.document || element.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== element; )
                ++n;
            return Boolean(t[n])
        }
        ),
        "function" != typeof e.closest && (e.closest = function(e) {
            for (var element = this; element && 1 === element.nodeType; ) {
                if (element.matches(e))
                    return element;
                element = element.parentNode
            }
            return null
        }
        )
    }
    ,
    "118db": ()=>{
        "use strict";
        function e(e, t) {
            var n = document.createEvent("CustomEvent");
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            },
            n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            n
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }
    ,
    "8322b": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>v
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("2dfb5")
          , l = n("ecd6c")
          , f = n("8eb4b")
          , d = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , h = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const v = function(e) {
            var t = e.$logger
              , n = e.store
              , r = e.$config
              , v = o()(n.state, "o3Params." + f.t);
            ("true" === (0,
            c.ej)(f.t) || v) && function(e, t) {
                d(this, void 0, void 0, (function() {
                    var n, r, o, c;
                    return h(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return f.trys.push([0, 4, , 5]),
                            n = t.get("devtoolHost"),
                            [4, fetch("https://" + n + "/public/manifest.json", {
                                method: "GET",
                                cache: "no-cache"
                            }).then((function(e) {
                                return e.json()
                            }
                            ))];
                        case 1:
                            return (r = f.sent()) && r["cdt.js"] ? (o = "https://" + n + "/public/" + r["cdt.js"],
                            [4, (0,
                            l.mb)(o, !0).then((function(e) {
                                void 0 === e && (e = []),
                                e[0].parentNode && e[0].parentNode.removeChild(e[0])
                            }
                            ))]) : [3, 3];
                        case 2:
                            f.sent(),
                            f.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            return c = f.sent(),
                            e.log({
                                level: "error",
                                message: c.toString(),
                                zone: "debug-toolbar"
                            }),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }(t, r)
        }
    }
    ,
    fff59: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>w
        });
        var r = n("2dfb5")
          , o = n("ff287")
          , c = n.n(o)
          , l = n("6e29b")
          , f = n("65306")
          , d = n("2b41b")
          , h = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , v = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , y = function(s, e) {
            var t = {};
            for (var p in s)
                Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
            if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                    e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]])
            }
            return t
        };
        const w = function(e) {
            var t = e.store
              , n = e.$logger;
            return h(void 0, void 0, void 0, (function() {
                var e, o, h, w, m, E, i, O, x, I, R, k;
                return v(this, (function(v) {
                    e = (0,
                    r.ej)("ap_visited"),
                    o = c()(t.state, "debug") || {},
                    t.dispatch("userInfo/SET_ADULT_COOKIE", Boolean((0,
                    r.ej)("ap_visited"))),
                    e && (h = location.hostname.split("."),
                    (0,
                    r.d8)("ap_visited", e, {
                        domain: "." + h.slice(-2).join(".")
                    })),
                    w = c()(t, "state.client.trackingVersion", "v2"),
                    m = c()(t, "state.trackingPayloads", {}),
                    d.Z.setVersion(w),
                    d.Z.setTrackingPayloads(m),
                    console.log("--DEBUG_INFO--", JSON.parse(JSON.stringify(o))),
                    E = c()(t, "state.jsCookie") || [];
                    try {
                        for (i = 0; i < E.length; i++)
                            O = (0,
                            r.Qc)(E[i]),
                            x = O.key,
                            I = O.value,
                            R = y(O, ["key", "value"]),
                            (0,
                            r.d8)(x, I, R)
                    } catch (e) {
                        (k = new l.H(f._.COOKIE_SET_ERROR)).setPayloadValue("exception", e),
                        n.error(k)
                    }
                    return window.serverTiming = c()(t, "state.serverTiming"),
                    window.history && (window.history.scrollRestoration = "auto"),
                    [2]
                }
                ))
            }
            ))
        }
    }
    ,
    "595ff": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n("a4df2")
          , o = n("0190b");
        const c = function(e) {
            "x-o3-ui-tests"in e.store.state.o3Params ? r.default.directive("qa", o.Z) : r.default.directive("qa", {})
        }
    }
    ,
    "461d1": (e,t,n)=>{
        "use strict";
        n.d(t, {
            f: ()=>o,
            W: ()=>c
        });
        var r = !1;
        function o(e) {
            var t = e.store;
            r = "x-o3-ui-tests"in t.state.o3Params
        }
        function c(e) {
            return r ? e : void 0
        }
    }
    ,
    67437: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>f
        });
        var r = n("bc3e5")
          , o = n("f0ed0")
          , c = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , l = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const f = function(e) {
            var t = e.$logger
              , f = e.$config
              , d = e.store;
            return c(void 0, void 0, void 0, (function() {
                var e;
                return l(this, (function(h) {
                    switch (h.label) {
                    case 0:
                        if (!r.u)
                            return [2];
                        h.label = 1;
                    case 1:
                        return h.trys.push([1, 3, , 4]),
                        [4, (0,
                        r.ZA)(d.state, f, {
                            to: window.location.pathname
                        })];
                    case 2:
                        return h.sent() === r.ey.REGISTER && window.onAppReady((function() {
                            setTimeout((function() {
                                return c(void 0, void 0, void 0, (function() {
                                    var e, c, f, d, h;
                                    return l(this, (function(l) {
                                        switch (l.label) {
                                        case 0:
                                            return l.trys.push([0, 2, , 3]),
                                            e = n("ec49d").Z,
                                            c = new e("/st/network-cache/service-worker.js",{
                                                scope: "/"
                                            }),
                                            f = window,
                                            d = "$workbox",
                                            [4, c.register()];
                                        case 1:
                                            return f[d] = l.sent() || {},
                                            [3, 3];
                                        case 2:
                                            return h = l.sent(),
                                            t.error({
                                                exception: h,
                                                message: o.ZP.SW.ERROR_REGISTERING_SW
                                            }),
                                            [3, 3];
                                        case 3:
                                            return (0,
                                            r.tj)({
                                                action: "PURGE_SW_PAGINATOR_CACHE"
                                            }),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), 1e3)
                        }
                        )),
                        [3, 4];
                    case 3:
                        return e = h.sent(),
                        t.error({
                            exception: e,
                            message: o.ZP.SW.ERROR_SW
                        }),
                        [3, 4];
                    case 4:
                        return navigator.serviceWorker.onmessage = function(e) {
                            switch (e.data.action) {
                            case "REDIRECT":
                                window.location.assign(e.data.href);
                                break;
                            case "RELOAD":
                                window.location.reload();
                                break;
                            case "EXCEPTION":
                                t.error({
                                    exception: e.data.exception,
                                    message: e.data.message || o.ZP.SW.ERROR_SW,
                                    zone: "sw"
                                })
                            }
                        }
                        ,
                        [2]
                    }
                }
                ))
            }
            ))
        }
    }
    ,
    53820: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c,
            i: ()=>l
        });
        var r = ""
          , o = "";
        const c = function(e) {
            r = e.$config.get("videoUploadWS"),
            o = e.$config.get("videoUploadXHR")
        };
        function l() {
            return {
                wsdUrl: r,
                requestUrl: o
            }
        }
    }
    ,
    f2644: (e,t,n)=>{
        "use strict";
        var r;
        n.d(t, {
            Y2: ()=>c,
            sL: ()=>o,
            Nn: ()=>l
        });
        var o, c = 4;
        !function(e) {
            e.COMMUNICATION = "CHAT",
            e.LVS = "LVS"
        }(o || (o = {}));
        var l = ((r = {})[o.COMMUNICATION] = {
            namespace: o.COMMUNICATION,
            url: "?version=2"
        },
        r[o.LVS] = {
            namespace: o.LVS,
            url: "?version=2"
        },
        r)
    }
    ,
    "62e6c": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n("713f4")
          , o = n("8d3e6");
        const c = new o.WebSocketClient((0,
        r.i)())
    }
    ,
    "713f4": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>h,
            i: ()=>v
        });
        var r = n("f2644")
          , o = n("ff287")
          , c = n.n(o)
          , l = function() {
            return l = Object.assign || function(e) {
                for (var s, i = 1, t = arguments.length; i < t; i++)
                    for (var p in s = arguments[i])
                        Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                return e
            }
            ,
            l.apply(this, arguments)
        }
          , f = {}
          , d = !1;
        const h = function(e) {
            var t = e.$config.get("chatNotificationWS");
            Object.keys(r.Nn).forEach((function(e) {
                f[e] = l(l({}, r.Nn[e]), {
                    url: t + r.Nn[e].url
                })
            }
            )),
            d = c()(e.store, "state.browser.disableWebSocket", !1)
        };
        function v() {
            return {
                config: f,
                reconnectionAttempts: r.Y2,
                disableWebSocket: d
            }
        }
    }
    ,
    cdaff: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n("a4df2")
          , o = function(s, e) {
            var t = {};
            for (var p in s)
                Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
            if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                    e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]])
            }
            return t
        };
        const c = function(e, t) {
            var n = e.store
              , c = {
                add: function(e, t, n) {
                    var r = void 0 === n ? {} : n
                      , o = r.once
                      , c = r.before;
                    this[e] || (this[e] = []),
                    this[e].push({
                        once: o,
                        before: c,
                        callback: t
                    })
                },
                remove: function(e, t) {
                    var n = this[e];
                    if (n && Array.isArray(n)) {
                        var r = n.findIndex((function(e) {
                            return e.callback === t
                        }
                        ));
                        r >= 0 && n.splice(r, 1)
                    }
                }
            };
            n.subscribeAction({
                before: function(e) {
                    var t = e.type
                      , n = o(e, ["type"]);
                    c[t] && c[t].forEach((function(e) {
                        var r = e.once
                          , o = e.callback;
                        e.before && (o(n),
                        r && c.remove(t, o))
                    }
                    ))
                },
                after: function(e) {
                    var t = e.type
                      , n = o(e, ["type"]);
                    c[t] && c[t].forEach((function(e) {
                        var r = e.once
                          , o = e.callback;
                        e.before || (o(n),
                        r && c.remove(t, o))
                    }
                    ))
                }
            });
            var l = function(e, t, n) {
                void 0 === n && (n = {});
                var o = Array.isArray(e) ? e : [e];
                this instanceof r.default || console.warn("When plugin error: Context should be instance of Vue class"),
                o.forEach((function(e) {
                    "string" == typeof e && c.add(e, t, n)
                }
                ))
            };
            l.unsubscribe = function(e, t) {
                (Array.isArray(e) ? e : [e]).forEach((function(e) {
                    "string" == typeof e && c.remove(e, t)
                }
                ))
            }
            ,
            l.once = function(e, t) {
                l(e, t, {
                    once: !0
                })
            }
            ,
            l.before = function(e, t) {
                l(e, t, {
                    before: !0
                })
            }
            ,
            t("when", l)
        }
    }
    ,
    "9c5a6": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>T
        });
        var r = n("5eabe")
          , o = n("8fd32")
          , c = n("f0ed0")
          , l = n("ff287")
          , f = n.n(l);
        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var v = {
            requests: 5,
            debug: 4,
            info: 3,
            warning: 2,
            error: 1,
            critical: 0
        }
          , y = ["url", "exception", "stackTrace", "userId", "uuid", "abGroup", "payload", "message", "zone", "serviceName", "browser", "platform", "isMobile", "errorCode", "traceId", "xcid", "layoutId", "traceId", "experimentsConfig", "pageType", "disallowNames", "component", "placeholderName", "serviceName", "error", "vertical", "stateId", "widget", "requestUrl", "method", "isMobile", "isModern"]
          , w = function(e) {
            return e instanceof Error ? {
                message: e.toString(),
                stackTrace: e.stack
            } : {}
        }
          , m = function() {
            var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {};
            if ("function" == typeof data.toLoggerMessage) {
                var t = data.toLoggerMessage()
                  , n = t.payload
                  , r = void 0 === n ? {} : n
                  , c = t.message
                  , l = void 0 === c ? {} : c;
                e.message = r.serviceName ? l.value + " from service " + r.serviceName : l.value,
                e.zone = l.zone,
                e.errorCode = l.errorCode,
                e.stack = data.stack,
                e.stackTrace = data.stack,
                e.exception = data.toString(),
                e.serviceName = r.serviceName,
                e.uuid = r.uuid,
                e.requestUrl = r.requestUrl,
                e.method = r.method,
                e.component = r.component,
                e.placeholderName = r.placeholderName,
                e.disallowNames = r.disallowNames,
                e.error = r.error,
                e.vertical = r.vertical,
                e.stateId = r.stateId,
                e.widget = r.widget
            } else
                data instanceof Error ? Object.assign(e, w(data)) : "object" === (0,
                o.Z)(data) ? (Object.assign(e, data),
                "object" === (0,
                o.Z)(data.message) && (e.message = data.serviceName ? data.message.value + " from service " + data.serviceName : data.message.value,
                e.zone = data.message.zone,
                e.errorCode = data.message.errorCode)) : e.payload = JSON.stringify(data, null, " ");
            return e
        };
        const base = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = {}
              , r = function() {
                var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , r = {}
                  , o = {}
                  , l = e.store || {};
                n = void 0 === n ? data.level : n;
                try {
                    var d = f()(l.state, "browser") || {}
                      , w = f()(l.state, "debug") || {}
                      , E = f()(l.state, "pageInfo") || {}
                      , O = f()(l.state, "browser.age") || "";
                    Object.assign(r, {
                        browser: d.browser,
                        os: d.os,
                        platform: f()(l.state, "client.platform"),
                        version: d.version,
                        isMobile: Boolean(d.isMobile),
                        traceId: w.composer && w.composer.traceId,
                        xcid: w.xcid,
                        experimentsConfig: f()(l.state, "experimentsConfig", {}),
                        url: e.$composerRouter.current,
                        pageType: E.pageType,
                        layoutId: E.layoutId,
                        isModern: "modern" === O
                    })
                } catch (e) {
                    t({
                        message: c.ZP.LOGGER.GETTING_STORE_FIELDS_ERROR,
                        exception: e,
                        level: v.critical
                    })
                }
                try {
                    Object.assign(r, {
                        userId: f()(l, "state.userInfo.user.userId")
                    })
                } catch (e) {
                    t({
                        message: c.ZP.LOGGER.GETTING_STORE_FIELDS_ERROR,
                        exception: e,
                        level: v.critical
                    })
                }
                try {
                    Object.assign(r, m(data))
                } catch (e) {
                    t({
                        message: c.ZP.LOGGER.PARSING_ERROR,
                        exception: e,
                        level: v.critical
                    })
                }
                y.forEach((function(e) {
                    return r[e] && (o[e] = r[e])
                }
                )),
                t(h(h({}, o), {}, {
                    level: v[n] || Number(n) || v.info
                }))
            };
            return Object.keys(v).forEach((function(e) {
                n[e] = function(data) {
                    return r(data, v[e])
                }
            }
            )),
            n.log = r,
            n.ERRORS = c.ZP,
            n
        };
        var E = n("a4df2")
          , O = n("672d5")
          , x = n("d336c")
          , I = n.n(x)
          , R = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), c = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    c.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return c
        }
          , k = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
                e = e.concat(R(arguments[i]));
            return e
        };
        const T = function(e, t) {
            var n, r, o, c = e.$config, l = e.store, path = c.get("gatewayApi"), d = new (I())(path), h = c.get("logLevel"), v = c.get("gatewayToken"), y = f()(l.state.browser, "isBot"), w = new O.ClientLogger({
                level: h,
                apiUrl: d,
                token: v,
                isBot: y
            }), m = base(e, w.log.bind(w));
            n = function(e) {
                var t = e.message
                  , n = e.exception
                  , r = document.location.toString();
                m.error({
                    message: t || (n ? n.message : "Unhandled error"),
                    url: r,
                    exception: n
                })
            }
            ,
            r = window.onerror,
            o = E.default.config.errorHandler,
            window.onerror = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var o = R(e, 5)
                  , c = o[0]
                  , l = (o[1],
                o[2],
                o[3],
                o[4]);
                r && r.apply(void 0, k(e)),
                n({
                    message: c,
                    exception: l
                })
            }
            ,
            E.default.config.errorHandler = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var r = R(e, 1)[0];
                o && o.apply(void 0, k(e)),
                n({
                    exception: r
                })
            }
            ,
            t("logger", m)
        }
    }
    ,
    ec9f8: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>f
        });
        var r = n("a4df2")
          , o = n("54efe")
          , c = n("2f977")
          , l = n("60c86");
        const f = function() {
            var e = o.F.getInstance().getContext(l.Dj.MODAL);
            e.on(l.wL.END_ROUTE_LOADING, (function() {
                c.yD.setPageInit(!0)
            }
            )),
            e.on(l.wL.AFTER_ROUTE_ENTER, (function() {
                r.default.nextTick().then((function() {
                    c.yD.sendDLWidgetsEvents()
                }
                ))
            }
            ))
        }
    }
    ,
    a44b1: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>f
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("54efe")
          , l = n("60c86");
        const f = function(e) {
            var t = e.store;
            c.F.getInstance().getContext(l.Dj.MODAL).on(l.wL.BEFORE_ROUTE_LEAVE, (function() {
                if (!o()(t, "state.shared.layoutModalOptions.showModal", !1)) {
                    t.commit("setLayoutModalOptions", {
                        options: {
                            showModal: !0
                        }
                    }, {
                        root: !0
                    })
                }
            }
            ))
        }
    }
    ,
    f3655: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>v
        });
        var r = n("a4df2")
          , o = n("54efe")
          , c = n("2f977")
          , l = n("60c86")
          , f = n("ff287")
          , d = n.n(f)
          , h = n("ecdbe");
        const v = function(e) {
            var t = e.store
              , n = o.F.getInstance().getContext(l.Dj.PAGE);
            n.on(l.wL.BEFORE_ROUTE_LEAVE, (function() {
                c.yD.sendTrackerPageClose()
            }
            )),
            n.on(l.wL.AFTER_ROUTE_ENTER, (function(e) {
                var n = e.to
                  , o = e.from;
                r.default.nextTick().then((function() {
                    var e = d()(t.state, "layoutTrackingInfo", {})
                      , r = d()(t.state, "experimentsConfig", {})
                      , l = d()(t.state, "browser", {})
                      , f = (0,
                    h.U)(r);
                    c.yD.setState({
                        layoutTrackingInfo: e,
                        browser: l,
                        ecommerceExperiments: f
                    }),
                    c.yD.sendTrackerPageView({
                        page: {
                            current: e.pageType,
                            currentUrl: n,
                            layoutId: e.layoutId,
                            layoutVersion: e.layoutVersion,
                            ruleId: e.ruleId
                        }
                    }),
                    c.yD.sendDLPageEvents(t.state, n, o, c.Y$.PAGE_VIEW),
                    c.yD.sendDLWidgetsEvents()
                }
                ))
            }
            ))
        }
    }
    ,
    "19c04": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>l
        });
        var r = n("54efe")
          , o = n("f6caa")
          , c = n("60c86");
        const l = function(e) {
            var t = e.store
              , n = r.F.getInstance()
              , l = n.getContext(c.Dj.PAGE);
            function f() {
                var e = n.getParams().fullPath;
                (0,
                o.W)(e)
            }
            l.on(c.wL.AFTER_ROUTE_ENTER, (function(e) {
                var t = e.to;
                return (0,
                o.W)(t)
            }
            )),
            l.on(c.wL.AFTER_URL_CHANGE, (function(e) {
                var t = e.to;
                return (0,
                o.W)(t)
            }
            )),
            t.$when("DO_CHECK_SCROLL", f),
            "complete" === document.readyState ? f() : window.addEventListener("load", f)
        }
    }
    ,
    "39c7d": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>h
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("54efe")
          , l = n("81ad5")
          , f = n("07d81")
          , d = n("60c86");
        const h = function(e) {
            var t = e.store;
            c.F.getInstance().getContext(d.Dj.PAGE).on(d.wL.BEFORE_ROUTE_LEAVE, (function(e) {
                var n = e.to
                  , r = o()(t.state, "browser.useSpa");
                if ((0,
                f.B)(n) || !r)
                    return window.location.assign(n),
                    {
                        status: l.T5.LOADING_CANCELLED
                    }
            }
            ))
        }
    }
    ,
    "6bdfb": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>f
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("54efe")
          , l = n("60c86");
        const f = function(e) {
            var t = e.store
              , n = c.F.getInstance().getContext(l.Dj.PAGE)
              , r = document.querySelector("html");
            null !== r.getAttribute("data-n-head-ssr") && r.removeAttribute("data-n-head-ssr"),
            n.on(l.wL.END_ROUTE_LOADING, (function() {
                var e = (o()(t, "state.seo") || {}).title
                  , title = void 0 === e ? "OZON.ru" : e;
                title && (document.title = title)
            }
            ))
        }
    }
    ,
    e8708: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n("54efe")
          , o = n("60c86");
        const c = function() {
            r.F.getInstance().getContext(o.Dj.PAGE).on(o.wL.BEFORE_ROUTE_LEAVE, (function() {
                performance && performance.mark && performance.mark("spaTransitionStart")
            }
            ))
        }
    }
    ,
    "578dd": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>R
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("2dfb5")
          , l = n("a63b0")
          , f = n("54efe")
          , d = n("60c86")
          , h = n("d336c")
          , v = n.n(h)
          , y = n("2f977")
          , w = n("65306")
          , m = n("81ad5")
          , E = function() {
            return E = Object.assign || function(e) {
                for (var s, i = 1, t = arguments.length; i < t; i++)
                    for (var p in s = arguments[i])
                        Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                return e
            }
            ,
            E.apply(this, arguments)
        }
          , O = /^(\/product)|(^\/context\/detail\/id)/i
          , x = w.nf.MS_IN_HOUR / 2
          , I = "tryToAppTime";
        const R = function(e) {
            var t = e.store;
            f.F.getInstance().getContext(d.Dj.PAGE).on(d.wL.BEFORE_ROUTE_LEAVE, (function(e) {
                var n = e.to
                  , r = t.state
                  , f = r.browser
                  , d = r.experimentsConfig
                  , h = localStorage.getItem(I);
                h || localStorage.setItem(I, String(Date.now()));
                var w = !h || Date.now() - Number(h) > x
                  , R = Boolean((0,
                c.ej)("toApp") || 0)
                  , k = o()(f, "isMobile", !1)
                  , T = o()(d, "forceToApp", !1)
                  , S = new (v())(n,!0)
                  , A = O.test(S.pathname);
                if (w && localStorage.removeItem(I),
                k && w && !R && T && A)
                    return function(e, t) {
                        e.set("protocol", "https"),
                        e.set("host", "m.ozon.ru"),
                        e.set("query", E(E({}, (0,
                        l.parse)(e.query)), {
                            from: "WebToApp2",
                            mwId: t
                        })),
                        window.location.href = e.toString()
                    }(S, y.yD.pageViewId),
                    {
                        status: m.T5.LOADING_CANCELLED
                    }
            }
            ))
        }
    }
    ,
    c7a3c: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>h
        });
        var r = n("54efe")
          , o = n("bc3e5")
          , c = n("f0ed0")
          , l = n("60c86")
          , f = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , d = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const h = function(e) {
            var t = e.$logger
              , h = e.$config
              , v = e.store;
            r.F.getInstance().getContext(l.Dj.PAGE).on(l.wL.BEFORE_ROUTE_LEAVE, (function(e) {
                var r = e.to;
                return f(this, void 0, void 0, (function() {
                    var e, l, f, y, w, m, E;
                    return d(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            if (!o.u)
                                return [2];
                            d.label = 1;
                        case 1:
                            return d.trys.push([1, 7, , 8]),
                            [4, (0,
                            o.ZA)(v.state, h, {
                                to: r
                            })];
                        case 2:
                            if (!(e = d.sent()) || e === o.ey.UNREGISTER)
                                return [2];
                            if (e !== o.ey.REGISTER)
                                return [3, 6];
                            d.label = 3;
                        case 3:
                            return d.trys.push([3, 5, , 6]),
                            l = n("ec49d").Z,
                            f = new l("/st/network-cache/service-worker.js",{
                                scope: "/"
                            }),
                            y = window,
                            w = "$workbox",
                            [4, f.register()];
                        case 4:
                            return y[w] = d.sent(),
                            [3, 6];
                        case 5:
                            return m = d.sent(),
                            t.error({
                                exception: m,
                                message: c.ZP.SW.ERROR_REGISTERING_SW_ON_SPA
                            }),
                            [3, 6];
                        case 6:
                            return e === o.ey.ALIVE && (0,
                            o.tj)({
                                action: "PURGE_SW_PAGINATOR_CACHE"
                            }),
                            [3, 8];
                        case 7:
                            return E = d.sent(),
                            t.error({
                                exception: E,
                                message: c.ZP.SW.ERROR_SW_ON_SPA
                            }),
                            [3, 8];
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ))
        }
    }
    ,
    "7845d": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>l
        });
        var r = n("ff287")
          , o = n.n(r)
          , c = n("54efe");
        const l = function(e, t) {
            var n = e.store
              , r = e.req
              , l = o()(r, "body.pageInfo.url") || "/"
              , f = o()(n, "state.o3Params.x-o3-sitespeed-enable")
              , d = new c.F({
                baseUrl: l,
                app: e
            });
            f && (window.$ComposerRouter = d),
            t("composerRouter", d)
        }
    }
    ,
    "5a7e0": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n("8fd32")
          , o = n("16444")
          , c = n("8f7bb")
          , l = n("06c58")
          , f = function() {
            function e() {
                (0,
                o.Z)(this, e),
                this.value = {},
                this.subject = new l.X(this.value)
            }
            return (0,
            c.Z)(e, [{
                key: "next",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("object" !== (0,
                    r.Z)(e))
                        throw new Error("Type of value for subject must be object");
                    this.value = Object.assign(this.value, e),
                    t || this.flush()
                }
            }, {
                key: "replace",
                value: function(e) {
                    if ("object" !== (0,
                    r.Z)(e))
                        throw new Error("Type of value for subject must be object");
                    this.value = e,
                    this.flush()
                }
            }, {
                key: "flush",
                value: function() {
                    this.subject.next(this.value)
                }
            }, {
                key: "asObservable",
                value: function() {
                    return this.subject.asObservable()
                }
            }]),
            e
        }();
        const d = function(e, t) {
            t("stateObserver", new f)
        }
    }
    ,
    "6bbd9": (e,t,n)=>{
        "use strict";
        n.d(t, {
            a: ()=>c
        });
        var r = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , o = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , c = new function() {
            var e = this;
            this.register = function(t) {
                var n = t.apiGetSuggestions
                  , r = t.apiChangeLocation
                  , o = t.logError;
                e.apiGetSuggestions = n,
                e.apiChangeLocation = r,
                e.logError = o
            }
            ,
            this.getSuggestions = function(t) {
                return r(e, void 0, void 0, (function() {
                    return o(this, (function(e) {
                        try {
                            return [2, this.apiGetSuggestions(t)]
                        } catch (e) {
                            return this.logError(e),
                            [2, []]
                        }
                        return [2]
                    }
                    ))
                }
                ))
            }
            ,
            this.changeLocation = function(t, n) {
                return r(e, void 0, void 0, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.apiChangeLocation(t.areaId, n.areaId)];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
    }
    ,
    d1d81: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n("6bbd9")
          , o = n("ff287")
          , c = n.n(o)
          , l = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, c) {
                function l(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function f(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, f)
                }
                d((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , f = function(e, body) {
            var t, n, r, g, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, c[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = o.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        o.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(c);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        const d = function(e) {
            var t = e.$api
              , n = e.$logger
              , o = e.$composerRouter
              , d = e.store;
            r.a.register({
                apiGetSuggestions: function(e) {
                    return l(void 0, void 0, void 0, (function() {
                        var n;
                        return f(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return e ? [2, t.location.search.get({
                                    query: e
                                })] : (n = c()(d, "state.browser.ip"),
                                [4, t.location.current.get({
                                    ip: n
                                })]);
                            case 1:
                                return [2, r.sent().suggested]
                            }
                        }
                        ))
                    }
                    ))
                },
                logError: function(e) {
                    return n.error({
                        exception: e
                    })
                },
                apiChangeLocation: function(e) {
                    return l(void 0, void 0, void 0, (function() {
                        return f(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, t.location.user.post({
                                    areaId: e
                                })];
                            case 1:
                                return n.sent(),
                                [4, o.refresh()];
                            case 2:
                                return n.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            })
        }
    }
}]);
