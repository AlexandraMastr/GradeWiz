/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var FE = Object.create;
    var Cn = Object.defineProperty;
    var qE = Object.getOwnPropertyDescriptor;
    var GE = Object.getOwnPropertyNames;
    var kE = Object.getPrototypeOf, XE = Object.prototype.hasOwnProperty;
    var he = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports), Le = (e, t) => {
        for (var n in t) {Cn(e, n, {get: t[n], enumerable: !0})}
    }, ua = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") {for (let i of GE(t)) {!XE.call(e, i) && i !== n && Cn(e, i, {
            get: () => t[i],
            enumerable: !(r = qE(t, i)) || r.enumerable
        });}}
        return e
    };
    var ce = (e, t, n) => (n = e != null ? FE(kE(e)) : {}, ua(t || !e || !e.__esModule ? Cn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e)), je = e => ua(Cn({}, "__esModule", {value: !0}), e);
    var Wr = f(() => {
        "use strict";
        window.tram = function (e) {
            function t(c, v) {
                var T = new ye.Bare;
                return T.init(c, v)
            }

            function n(c) {
                return c.replace(/[A-Z]/g, function (v) {
                    return "-" + v.toLowerCase()
                })
            }

            function r(c) {
                var v = parseInt(c.slice(1), 16), T = v >> 16 & 255, b = v >> 8 & 255, P = 255 & v;
                return [T, b, P]
            }

            function i(c, v, T) {
                return "#" + (1 << 24 | c << 16 | v << 8 | T).toString(16).slice(1)
            }

            function o() {
            }

            function a(c, v) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof v + "] " + v)
            }

            function s(c, v, T) {
                l("Units do not match [" + c + "]: " + v + ", " + T)
            }

            function u(c, v, T) {
                if (v !== void 0 && (T = v), c === void 0) {
                    return T;
                }
                var b = T;
                return st.test(c) || !Ke.test(c) ? b = parseInt(c, 10) : Ke.test(c) && (b = 1e3 * parseFloat(c)), 0 > b && (b = 0), b === b ? b : T
            }

            function l(c) {
                Y.debug && window && window.console.warn(c)
            }

            function y(c) {
                for (var v = -1, T = c ? c.length : 0, b = []; ++v < T;) {
                    var P = c[v];
                    P && b.push(P)
                }
                return b
            }

            var g = function (c, v, T) {
                    function b(te) {
                        return typeof te == "object"
                    }

                    function P(te) {
                        return typeof te == "function"
                    }

                    function C() {
                    }

                    function Z(te, J) {
                        function G() {
                            var we = new re;
                            return P(we.init) && we.init.apply(we, arguments), we
                        }

                        function re() {
                        }

                        J === T && (J = te, te = Object), G.Bare = re;
                        var oe, me = C[c] = te[c], Fe = re[c] = G[c] = new C;
                        return Fe.constructor = G, G.mixin = function (we) {
                            return re[c] = G[c] = Z(G, we)[c], G
                        }, G.open = function (we) {
                            if (oe = {}, P(we) ? oe = we.call(G, Fe, me, G, te) : b(we) && (oe = we), b(oe)) {for (var Jt in oe) {v.call(oe, Jt) && (Fe[Jt] = oe[Jt]);}}
                            return P(Fe.init) || (Fe.init = te), G
                        }, G.open(J)
                    }

                    return Z
                }("prototype", {}.hasOwnProperty), p = {
                    ease: ["ease", function (c, v, T, b) {
                        var P = (c /= b) * c, C = P * c;
                        return v + T * (-2.75 * C * P + 11 * P * P + -15.5 * C + 8 * P + .25 * c)
                    }], "ease-in": ["ease-in", function (c, v, T, b) {
                        var P = (c /= b) * c, C = P * c;
                        return v + T * (-1 * C * P + 3 * P * P + -3 * C + 2 * P)
                    }], "ease-out": ["ease-out", function (c, v, T, b) {
                        var P = (c /= b) * c, C = P * c;
                        return v + T * (.3 * C * P + -1.6 * P * P + 2.2 * C + -1.8 * P + 1.9 * c)
                    }], "ease-in-out": ["ease-in-out", function (c, v, T, b) {
                        var P = (c /= b) * c, C = P * c;
                        return v + T * (2 * C * P + -5 * P * P + 2 * C + 2 * P)
                    }], linear: ["linear", function (c, v, T, b) {
                        return T * c / b + v
                    }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (c, v, T, b) {
                        return T * (c /= b) * c + v
                    }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (c, v, T, b) {
                        return -T * (c /= b) * (c - 2) + v
                    }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (c, v, T, b) {
                        return (c /= b / 2) < 1 ? T / 2 * c * c + v : -T / 2 * (--c * (c - 2) - 1) + v
                    }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (c, v, T, b) {
                        return T * (c /= b) * c * c + v
                    }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (c, v, T, b) {
                        return T * ((c = c / b - 1) * c * c + 1) + v
                    }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (c, v, T, b) {
                        return (c /= b / 2) < 1 ? T / 2 * c * c * c + v : T / 2 * ((c -= 2) * c * c + 2) + v
                    }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (c, v, T, b) {
                        return T * (c /= b) * c * c * c + v
                    }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (c, v, T, b) {
                        return -T * ((c = c / b - 1) * c * c * c - 1) + v
                    }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (c, v, T, b) {
                        return (c /= b / 2) < 1 ? T / 2 * c * c * c * c + v : -T / 2 * ((c -= 2) * c * c * c - 2) + v
                    }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (c, v, T, b) {
                        return T * (c /= b) * c * c * c * c + v
                    }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (c, v, T, b) {
                        return T * ((c = c / b - 1) * c * c * c * c + 1) + v
                    }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (c, v, T, b) {
                        return (c /= b / 2) < 1 ? T / 2 * c * c * c * c * c + v : T / 2 * ((c -= 2) * c * c * c * c + 2) + v
                    }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (c, v, T, b) {
                        return -T * Math.cos(c / b * (Math.PI / 2)) + T + v
                    }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (c, v, T, b) {
                        return T * Math.sin(c / b * (Math.PI / 2)) + v
                    }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (c, v, T, b) {
                        return -T / 2 * (Math.cos(Math.PI * c / b) - 1) + v
                    }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (c, v, T, b) {
                        return c === 0 ? v : T * Math.pow(2, 10 * (c / b - 1)) + v
                    }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (c, v, T, b) {
                        return c === b ? v + T : T * (-Math.pow(2, -10 * c / b) + 1) + v
                    }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (c, v, T, b) {
                        return c === 0 ? v : c === b ? v + T : (c /= b / 2) < 1 ? T / 2 * Math.pow(2, 10 * (c - 1)) + v : T / 2 * (-Math.pow(2, -10 * --c) + 2) + v
                    }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (c, v, T, b) {
                        return -T * (Math.sqrt(1 - (c /= b) * c) - 1) + v
                    }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (c, v, T, b) {
                        return T * Math.sqrt(1 - (c = c / b - 1) * c) + v
                    }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (c, v, T, b) {
                        return (c /= b / 2) < 1 ? -T / 2 * (Math.sqrt(1 - c * c) - 1) + v : T / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + v
                    }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (c, v, T, b, P) {
                        return P === void 0 && (P = 1.70158), T * (c /= b) * c * ((P + 1) * c - P) + v
                    }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (c, v, T, b, P) {
                        return P === void 0 && (P = 1.70158), T * ((c = c / b - 1) * c * ((P + 1) * c + P) + 1) + v
                    }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (c, v, T, b, P) {
                        return P === void 0 && (P = 1.70158), (c /= b / 2) < 1 ? T / 2 * c * c * (((P *= 1.525) + 1) * c - P) + v : T / 2 * ((c -= 2) * c * (((P *= 1.525) + 1) * c + P) + 2) + v
                    }]
                }, E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                }, I = document, _ = window, A = "bkwld-tram", m = /[\-\.0-9]/g, x = /[A-Z]/, S = "number", D = /^(rgb|#)/,
                q = /(em|cm|mm|in|pt|pc|px)$/, L = /(em|cm|mm|in|pt|pc|px|%)$/, B = /(deg|rad|turn)$/, H = "unitless",
                W = /(all|none) 0s ease 0s/, K = /^(width|height)$/, k = " ", w = I.createElement("a"),
                h = ["Webkit", "Moz", "O", "ms"], R = ["-webkit-", "-moz-", "-o-", "-ms-"], N = function (c) {
                    if (c in w.style) {return {dom: c, css: c};}
                    var v, T, b = "", P = c.split("-");
                    for (v = 0; v < P.length; v++) {b += P[v].charAt(0).toUpperCase() + P[v].slice(1);}
                    for (v = 0; v < h.length; v++) {if (T = h[v] + b, T in w.style) {return {dom: T, css: R[v] + c}}}
                }, X = t.support = {
                    bind: Function.prototype.bind,
                    transform: N("transform"),
                    transition: N("transition"),
                    backface: N("backface-visibility"),
                    timing: N("transition-timing-function")
                };
            if (X.transition) {
                var $ = X.timing.dom;
                if (w.style[$] = p["ease-in-back"][0], !w.style[$]) {for (var Q in E) {p[Q][0] = E[Q]}}
            }
            var ae = t.frame = function () {
                var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                return c && X.bind ? c.bind(_) : function (v) {
                    _.setTimeout(v, 16)
                }
            }(), ge = t.now = function () {
                var c = _.performance, v = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return v && X.bind ? v.bind(c) : Date.now || function () {
                    return +new Date
                }
            }(), Se = g(function (c) {
                function v(ee, ue) {
                    var Ee = y(("" + ee).split(k)), le = Ee[0];
                    ue = ue || {};
                    var Oe = U[le];
                    if (!Oe) {return l("Unsupported property: " + le);}
                    if (!ue.weak || !this.props[le]) {
                        var ke = Oe[0], Pe = this.props[le];
                        return Pe || (Pe = this.props[le] = new ke.Bare), Pe.init(this.$el, Ee, Oe, ue), Pe
                    }
                }

                function T(ee, ue, Ee) {
                    if (ee) {
                        var le = typeof ee;
                        if (ue || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), le == "number" && ue) {return this.timer = new ie({
                            duration: ee,
                            context: this,
                            complete: C
                        }), void (this.active = !0);}
                        if (le == "string" && ue) {
                            switch (ee) {
                                case "hide":
                                    G.call(this);
                                    break;
                                case "stop":
                                    Z.call(this);
                                    break;
                                case "redraw":
                                    re.call(this);
                                    break;
                                default:
                                    v.call(this, ee, Ee && Ee[1])
                            }
                            return C.call(this)
                        }
                        if (le == "function") {return void ee.call(this, this);}
                        if (le == "object") {
                            var Oe = 0;
                            Fe.call(this, ee, function (_e, ME) {
                                _e.span > Oe && (Oe = _e.span), _e.stop(), _e.animate(ME)
                            }, function (_e) {
                                "wait" in _e && (Oe = u(_e.wait, 0))
                            }), me.call(this), Oe > 0 && (this.timer = new ie({
                                duration: Oe,
                                context: this
                            }), this.active = !0, ue && (this.timer.complete = C));
                            var ke = this, Pe = !1, Rn = {};
                            ae(function () {
                                Fe.call(ke, ee, function (_e) {
                                    _e.active && (Pe = !0, Rn[_e.name] = _e.nextStyle)
                                }), Pe && ke.$el.css(Rn)
                            })
                        }
                    }
                }

                function b(ee) {
                    ee = u(ee, 0), this.active ? this.queue.push({options: ee}) : (this.timer = new ie({
                        duration: ee,
                        context: this,
                        complete: C
                    }), this.active = !0)
                }

                function P(ee) {
                    return this.active ? (this.queue.push({
                        options: ee,
                        args: arguments
                    }), void (this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
                }

                function C() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var ee = this.queue.shift();
                        T.call(this, ee.options, !0, ee.args)
                    }
                }

                function Z(ee) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var ue;
                    typeof ee == "string" ? (ue = {}, ue[ee] = 1) : ue = typeof ee == "object" && ee != null ? ee : this.props, Fe.call(this, ue, we), me.call(this)
                }

                function te(ee) {
                    Z.call(this, ee), Fe.call(this, ee, Jt, NE)
                }

                function J(ee) {
                    typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                }

                function G() {
                    Z.call(this), this.el.style.display = "none"
                }

                function re() {
                    this.el.offsetHeight
                }

                function oe() {
                    Z.call(this), e.removeData(this.el, A), this.$el = this.el = null
                }

                function me() {
                    var ee, ue, Ee = [];
                    this.upstream && Ee.push(this.upstream);
                    for (ee in this.props) {ue = this.props[ee], ue.active && Ee.push(ue.string);}
                    Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[X.transition.dom] = Ee)
                }

                function Fe(ee, ue, Ee) {
                    var le, Oe, ke, Pe, Rn = ue !== we, _e = {};
                    for (le in ee) {ke = ee[le], le in de ? (_e.transform || (_e.transform = {}), _e.transform[le] = ke) : (x.test(le) && (le = n(le)), le in U ? _e[le] = ke : (Pe || (Pe = {}), Pe[le] = ke));}
                    for (le in _e) {
                        if (ke = _e[le], Oe = this.props[le], !Oe) {
                            if (!Rn) {continue;}
                            Oe = v.call(this, le)
                        }
                        ue.call(this, Oe, ke)
                    }
                    Ee && Pe && Ee.call(this, Pe)
                }

                function we(ee) {
                    ee.stop()
                }

                function Jt(ee, ue) {
                    ee.set(ue)
                }

                function NE(ee) {
                    this.$el.css(ee)
                }

                function Ge(ee, ue) {
                    c[ee] = function () {
                        return this.children ? DE.call(this, ue, arguments) : (this.el && ue.apply(this, arguments), this)
                    }
                }

                function DE(ee, ue) {
                    var Ee, le = this.children.length;
                    for (Ee = 0; le > Ee; Ee++) {ee.apply(this.children[Ee], ue);}
                    return this
                }

                c.init = function (ee) {
                    if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Y.keepInherited && !Y.fallback) {
                        var ue = M(this.el, "transition");
                        ue && !W.test(ue) && (this.upstream = ue)
                    }
                    X.backface && Y.hideBackface && d(this.el, X.backface.css, "hidden")
                }, Ge("add", v), Ge("start", T), Ge("wait", b), Ge("then", P), Ge("next", C), Ge("stop", Z), Ge("set", te), Ge("show", J), Ge("hide", G), Ge("redraw", re), Ge("destroy", oe)
            }), ye = g(Se, function (c) {
                function v(T, b) {
                    var P = e.data(T, A) || e.data(T, A, new Se.Bare);
                    return P.el || P.init(T), b ? P.start(b) : P
                }

                c.init = function (T, b) {
                    var P = e(T);
                    if (!P.length) {return this;}
                    if (P.length === 1) {return v(P[0], b);}
                    var C = [];
                    return P.each(function (Z, te) {
                        C.push(v(te, b))
                    }), this.children = C, this
                }
            }), O = g(function (c) {
                function v() {
                    var C = this.get();
                    this.update("auto");
                    var Z = this.get();
                    return this.update(C), Z
                }

                function T(C, Z, te) {
                    return Z !== void 0 && (te = Z), C in p ? C : te
                }

                function b(C) {
                    var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                    return (Z ? i(Z[1], Z[2], Z[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }

                var P = {duration: 500, ease: "ease", delay: 0};
                c.init = function (C, Z, te, J) {
                    this.$el = C, this.el = C[0];
                    var G = Z[0];
                    te[2] && (G = te[2]), j[G] && (G = j[G]), this.name = G, this.type = te[1], this.duration = u(Z[1], this.duration, P.duration), this.ease = T(Z[2], this.ease, P.ease), this.delay = u(Z[3], this.delay, P.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = K.test(this.name), this.unit = J.unit || this.unit || Y.defaultUnit, this.angle = J.angle || this.angle || Y.defaultAngle, Y.fallback || J.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + k + this.duration + "ms" + (this.ease != "ease" ? k + p[this.ease][0] : "") + (this.delay ? k + this.delay + "ms" : ""))
                }, c.set = function (C) {
                    C = this.convert(C, this.type), this.update(C), this.redraw()
                }, c.transition = function (C) {
                    this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = v.call(this))), this.nextStyle = C
                }, c.fallback = function (C) {
                    var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    C = this.convert(C, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), C == "auto" && (C = v.call(this))), this.tween = new ne({
                        from: Z,
                        to: C,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, c.get = function () {
                    return M(this.el, this.name)
                }, c.update = function (C) {
                    d(this.el, this.name, C)
                }, c.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, d(this.el, this.name, this.get()));
                    var C = this.tween;
                    C && C.context && C.destroy()
                }, c.convert = function (C, Z) {
                    if (C == "auto" && this.auto) {return C;}
                    var te, J = typeof C == "number", G = typeof C == "string";
                    switch (Z) {
                        case S:
                            if (J) {return C;}
                            if (G && C.replace(m, "") === "") {return +C;}
                            te = "number(unitless)";
                            break;
                        case D:
                            if (G) {
                                if (C === "" && this.original) {return this.original;}
                                if (Z.test(C)) {return C.charAt(0) == "#" && C.length == 7 ? C : b(C)}
                            }
                            te = "hex or rgb string";
                            break;
                        case q:
                            if (J) {return C + this.unit;}
                            if (G && Z.test(C)) {return C;}
                            te = "number(px) or string(unit)";
                            break;
                        case L:
                            if (J) {return C + this.unit;}
                            if (G && Z.test(C)) {return C;}
                            te = "number(px) or string(unit or %)";
                            break;
                        case B:
                            if (J) {return C + this.angle;}
                            if (G && Z.test(C)) {return C;}
                            te = "number(deg) or string(angle)";
                            break;
                        case H:
                            if (J || G && L.test(C)) {return C;}
                            te = "number(unitless) or string(unit or %)"
                    }
                    return a(te, C), C
                }, c.redraw = function () {
                    this.el.offsetHeight
                }
            }), F = g(O, function (c, v) {
                c.init = function () {
                    v.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), D))
                }
            }), z = g(O, function (c, v) {
                c.init = function () {
                    v.init.apply(this, arguments), this.animate = this.fallback
                }, c.get = function () {
                    return this.$el[this.name]()
                }, c.update = function (T) {
                    this.$el[this.name](T)
                }
            }), V = g(O, function (c, v) {
                function T(b, P) {
                    var C, Z, te, J, G;
                    for (C in b) {J = de[C], te = J[0], Z = J[1] || C, G = this.convert(b[C], te), P.call(this, Z, G, te)}
                }

                c.init = function () {
                    v.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && Y.perspective && (this.current.perspective = Y.perspective, d(this.el, this.name, this.style(this.current)), this.redraw()))
                }, c.set = function (b) {
                    T.call(this, b, function (P, C) {
                        this.current[P] = C
                    }), d(this.el, this.name, this.style(this.current)), this.redraw()
                }, c.transition = function (b) {
                    var P = this.values(b);
                    this.tween = new se({
                        current: this.current,
                        values: P,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var C, Z = {};
                    for (C in this.current) {Z[C] = C in P ? P[C] : this.current[C];}
                    this.active = !0, this.nextStyle = this.style(Z)
                }, c.fallback = function (b) {
                    var P = this.values(b);
                    this.tween = new se({
                        current: this.current,
                        values: P,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, c.update = function () {
                    d(this.el, this.name, this.style(this.current))
                }, c.style = function (b) {
                    var P, C = "";
                    for (P in b) {C += P + "(" + b[P] + ") ";}
                    return C
                }, c.values = function (b) {
                    var P, C = {};
                    return T.call(this, b, function (Z, te, J) {
                        C[Z] = te, this.current[Z] === void 0 && (P = 0, ~Z.indexOf("scale") && (P = 1), this.current[Z] = this.convert(P, J))
                    }), C
                }
            }), ne = g(function (c) {
                function v(G) {
                    te.push(G) === 1 && ae(T)
                }

                function T() {
                    var G, re, oe, me = te.length;
                    if (me) {for (ae(T), re = ge(), G = me; G--;) {oe = te[G], oe && oe.render(re)}}
                }

                function b(G) {
                    var re, oe = e.inArray(G, te);
                    oe >= 0 && (re = te.slice(oe + 1), te.length = oe, re.length && (te = te.concat(re)))
                }

                function P(G) {
                    return Math.round(G * J) / J
                }

                function C(G, re, oe) {
                    return i(G[0] + oe * (re[0] - G[0]), G[1] + oe * (re[1] - G[1]), G[2] + oe * (re[2] - G[2]))
                }

                var Z = {ease: p.ease[1], from: 0, to: 1};
                c.init = function (G) {
                    this.duration = G.duration || 0, this.delay = G.delay || 0;
                    var re = G.ease || Z.ease;
                    p[re] && (re = p[re][1]), typeof re != "function" && (re = Z.ease), this.ease = re, this.update = G.update || o, this.complete = G.complete || o, this.context = G.context || this, this.name = G.name;
                    var oe = G.from, me = G.to;
                    oe === void 0 && (oe = Z.from), me === void 0 && (me = Z.to), this.unit = G.unit || "", typeof oe == "number" && typeof me == "number" ? (this.begin = oe, this.change = me - oe) : this.format(me, oe), this.value = this.begin + this.unit, this.start = ge(), G.autoplay !== !1 && this.play()
                }, c.play = function () {
                    this.active || (this.start || (this.start = ge()), this.active = !0, v(this))
                }, c.stop = function () {
                    this.active && (this.active = !1, b(this))
                }, c.render = function (G) {
                    var re, oe = G - this.start;
                    if (this.delay) {
                        if (oe <= this.delay) {return;}
                        oe -= this.delay
                    }
                    if (oe < this.duration) {
                        var me = this.ease(oe, 0, 1, this.duration);
                        return re = this.startRGB ? C(this.startRGB, this.endRGB, me) : P(this.begin + me * this.change), this.value = re + this.unit, void this.update.call(this.context, this.value)
                    }
                    re = this.endHex || this.begin + this.change, this.value = re + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, c.format = function (G, re) {
                    if (re += "", G += "", G.charAt(0) == "#") {return this.startRGB = r(re), this.endRGB = r(G), this.endHex = G, this.begin = 0, void (this.change = 1);}
                    if (!this.unit) {
                        var oe = re.replace(m, ""), me = G.replace(m, "");
                        oe !== me && s("tween", re, G), this.unit = oe
                    }
                    re = parseFloat(re), G = parseFloat(G), this.begin = this.value = re, this.change = G - re
                }, c.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var te = [], J = 1e3
            }), ie = g(ne, function (c) {
                c.init = function (v) {
                    this.duration = v.duration || 0, this.complete = v.complete || o, this.context = v.context, this.play()
                }, c.render = function (v) {
                    var T = v - this.start;
                    T < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }), se = g(ne, function (c, v) {
                c.init = function (T) {
                    this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
                    var b, P;
                    for (b in T.values) {P = T.values[b], this.current[b] !== P && this.tweens.push(new ne({
                        name: b,
                        from: this.current[b],
                        to: P,
                        duration: T.duration,
                        delay: T.delay,
                        ease: T.ease,
                        autoplay: !1
                    }));}
                    this.play()
                }, c.render = function (T) {
                    var b, P, C = this.tweens.length, Z = !1;
                    for (b = C; b--;) {P = this.tweens[b], P.context && (P.render(T), this.current[P.name] = P.value, Z = !0);}
                    return Z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }, c.destroy = function () {
                    if (v.destroy.call(this), this.tweens) {
                        var T, b = this.tweens.length;
                        for (T = b; T--;) {this.tweens[T].destroy();}
                        this.tweens = null, this.current = null
                    }
                }
            }), Y = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !X.transition,
                agentTests: []
            };
            t.fallback = function (c) {
                if (!X.transition) {return Y.fallback = !0;}
                Y.agentTests.push("(" + c + ")");
                var v = new RegExp(Y.agentTests.join("|"), "i");
                Y.fallback = v.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function (c) {
                return new ne(c)
            }, t.delay = function (c, v, T) {
                return new ie({complete: v, duration: c, context: T})
            }, e.fn.tram = function (c) {
                return t.call(null, this, c)
            };
            var d = e.style, M = e.css, j = {transform: X.transform && X.transform.css}, U = {
                color: [F, D],
                background: [F, D, "background-color"],
                "outline-color": [F, D],
                "border-color": [F, D],
                "border-top-color": [F, D],
                "border-right-color": [F, D],
                "border-bottom-color": [F, D],
                "border-left-color": [F, D],
                "border-width": [O, q],
                "border-top-width": [O, q],
                "border-right-width": [O, q],
                "border-bottom-width": [O, q],
                "border-left-width": [O, q],
                "border-spacing": [O, q],
                "letter-spacing": [O, q],
                margin: [O, q],
                "margin-top": [O, q],
                "margin-right": [O, q],
                "margin-bottom": [O, q],
                "margin-left": [O, q],
                padding: [O, q],
                "padding-top": [O, q],
                "padding-right": [O, q],
                "padding-bottom": [O, q],
                "padding-left": [O, q],
                "outline-width": [O, q],
                opacity: [O, S],
                top: [O, L],
                right: [O, L],
                bottom: [O, L],
                left: [O, L],
                "font-size": [O, L],
                "text-indent": [O, L],
                "word-spacing": [O, L],
                width: [O, L],
                "min-width": [O, L],
                "max-width": [O, L],
                height: [O, L],
                "min-height": [O, L],
                "max-height": [O, L],
                "line-height": [O, H],
                "scroll-top": [z, S, "scrollTop"],
                "scroll-left": [z, S, "scrollLeft"]
            }, de = {};
            X.transform && (U.transform = [V], de = {
                x: [L, "translateX"],
                y: [L, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [S],
                scaleX: [S],
                scaleY: [S],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }), X.transform && X.backface && (de.z = [L, "translateZ"], de.rotateZ = [B], de.scaleZ = [S], de.perspective = [q]);
            var st = /ms/, Ke = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var la = f((_F, ca) => {
        "use strict";
        var VE = window.$, UE = Wr() && VE.tram;
        ca.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}, n = Array.prototype, r = Object.prototype, i = Function.prototype, o = n.push, a = n.slice,
                s = n.concat, u = r.toString, l = r.hasOwnProperty, y = n.forEach, g = n.map, p = n.reduce,
                E = n.reduceRight, I = n.filter, _ = n.every, A = n.some, m = n.indexOf, x = n.lastIndexOf,
                S = Array.isArray, D = Object.keys, q = i.bind, L = e.each = e.forEach = function (h, R, N) {
                    if (h == null) {return h;}
                    if (y && h.forEach === y) {h.forEach(R, N);} else if (h.length === +h.length) {
                        for (var X = 0, $ = h.length; X < $; X++) {if (R.call(N, h[X], X, h) === t) {return}}
                    } else {for (var Q = e.keys(h), X = 0, $ = Q.length; X < $; X++) {if (R.call(N, h[Q[X]], Q[X], h) === t) {return;}}}
                    return h
                };
            e.map = e.collect = function (h, R, N) {
                var X = [];
                return h == null ? X : g && h.map === g ? h.map(R, N) : (L(h, function ($, Q, ae) {
                    X.push(R.call(N, $, Q, ae))
                }), X)
            }, e.find = e.detect = function (h, R, N) {
                var X;
                return B(h, function ($, Q, ae) {
                    if (R.call(N, $, Q, ae)) {return X = $, !0}
                }), X
            }, e.filter = e.select = function (h, R, N) {
                var X = [];
                return h == null ? X : I && h.filter === I ? h.filter(R, N) : (L(h, function ($, Q, ae) {
                    R.call(N, $, Q, ae) && X.push($)
                }), X)
            };
            var B = e.some = e.any = function (h, R, N) {
                R || (R = e.identity);
                var X = !1;
                return h == null ? X : A && h.some === A ? h.some(R, N) : (L(h, function ($, Q, ae) {
                    if (X || (X = R.call(N, $, Q, ae))) {return t}
                }), !!X)
            };
            e.contains = e.include = function (h, R) {
                return h == null ? !1 : m && h.indexOf === m ? h.indexOf(R) != -1 : B(h, function (N) {
                    return N === R
                })
            }, e.delay = function (h, R) {
                var N = a.call(arguments, 2);
                return setTimeout(function () {
                    return h.apply(null, N)
                }, R)
            }, e.defer = function (h) {
                return e.delay.apply(e, [h, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function (h) {
                var R, N, X;
                return function () {
                    R || (R = !0, N = arguments, X = this, UE.frame(function () {
                        R = !1, h.apply(X, N)
                    }))
                }
            }, e.debounce = function (h, R, N) {
                var X, $, Q, ae, ge, Se = function () {
                    var ye = e.now() - ae;
                    ye < R ? X = setTimeout(Se, R - ye) : (X = null, N || (ge = h.apply(Q, $), Q = $ = null))
                };
                return function () {
                    Q = this, $ = arguments, ae = e.now();
                    var ye = N && !X;
                    return X || (X = setTimeout(Se, R)), ye && (ge = h.apply(Q, $), Q = $ = null), ge
                }
            }, e.defaults = function (h) {
                if (!e.isObject(h)) {return h;}
                for (var R = 1, N = arguments.length; R < N; R++) {
                    var X = arguments[R];
                    for (var $ in X) {h[$] === void 0 && (h[$] = X[$])}
                }
                return h
            }, e.keys = function (h) {
                if (!e.isObject(h)) {return [];}
                if (D) {return D(h);}
                var R = [];
                for (var N in h) {e.has(h, N) && R.push(N);}
                return R
            }, e.has = function (h, R) {
                return l.call(h, R)
            }, e.isObject = function (h) {
                return h === Object(h)
            }, e.now = Date.now || function () {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/, W = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
                K = /\\|'|\r|\n|\u2028|\u2029/g, k = function (h) {
                    return "\\" + W[h]
                }, w = /^\s*(\w|\$)+\s*$/;
            return e.template = function (h, R, N) {
                !R && N && (R = N), R = e.defaults({}, R, e.templateSettings);
                var X = RegExp([(R.escape || H).source, (R.interpolate || H).source, (R.evaluate || H).source].join("|") + "|$", "g"),
                    $ = 0, Q = "__p+='";
                h.replace(X, function (ye, O, F, z, V) {
                    return Q += h.slice($, V).replace(K, k), $ = V + ye.length, O ? Q += `'+
((__t=(` + O + `))==null?'':_.escape(__t))+
'` : F ? Q += `'+
((__t=(` + F + `))==null?'':__t)+
'` : z && (Q += `';
` + z + `
__p+='`), ye
                }), Q += `';
`;
                var ae = R.variable;
                if (ae) {
                    if (!w.test(ae)) {throw new Error("variable is not a bare identifier: " + ae)}
                } else {Q = `with(obj||{}){
` + Q + `}
`, ae = "obj";}
                Q = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Q + `return __p;
`;
                var ge;
                try {
                    ge = new Function(R.variable || "obj", "_", Q)
                } catch (ye) {
                    throw ye.source = Q, ye
                }
                var Se = function (ye) {
                    return ge.call(this, ye, e)
                };
                return Se.source = "function(" + ae + `){
` + Q + "}", Se
            }, e
        }()
    });
    var Ue = f((IF, ya) => {
        "use strict";
        var fe = {}, At = {}, St = [], Kr = window.Webflow || [], ut = window.jQuery, Ve = ut(window),
            BE = ut(document), Ye = ut.isFunction, Xe = fe._ = la(), da = fe.tram = Wr() && ut.tram, Ln = !1, jr = !1;
        da.config.hideBackface = !1;
        da.config.keepInherited = !0;
        fe.define = function (e, t, n) {
            At[e] && ga(At[e]);
            var r = At[e] = t(ut, Xe, n) || {};
            return pa(r), r
        };
        fe.require = function (e) {
            return At[e]
        };

        function pa(e) {
            fe.env() && (Ye(e.design) && Ve.on("__wf_design", e.design), Ye(e.preview) && Ve.on("__wf_preview", e.preview)), Ye(e.destroy) && Ve.on("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && HE(e)
        }

        function HE(e) {
            if (Ln) {
                e.ready();
                return
            }
            Xe.contains(St, e.ready) || St.push(e.ready)
        }

        function ga(e) {
            Ye(e.design) && Ve.off("__wf_design", e.design), Ye(e.preview) && Ve.off("__wf_preview", e.preview), Ye(e.destroy) && Ve.off("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && WE(e)
        }

        function WE(e) {
            St = Xe.filter(St, function (t) {
                return t !== e.ready
            })
        }

        fe.push = function (e) {
            if (Ln) {
                Ye(e) && e();
                return
            }
            Kr.push(e)
        };
        fe.env = function (e) {
            var t = window.__wf_design, n = typeof t < "u";
            if (!e) {return n;}
            if (e === "design") {return n && t;}
            if (e === "preview") {return n && !t;}
            if (e === "slug") {return n && window.__wf_slug;}
            if (e === "editor") {return window.WebflowEditor;}
            if (e === "test") {return window.__wf_test;}
            if (e === "frame") {return window !== window.top}
        };
        var Pn = navigator.userAgent.toLowerCase(),
            ha = fe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            zE = fe.env.chrome = /chrome/.test(Pn) && /Google/.test(navigator.vendor) && parseInt(Pn.match(/chrome\/(\d+)\./)[1], 10),
            KE = fe.env.ios = /(ipod|iphone|ipad)/.test(Pn);
        fe.env.safari = /safari/.test(Pn) && !zE && !KE;
        var zr;
        ha && BE.on("touchstart mousedown", function (e) {
            zr = e.target
        });
        fe.validClick = ha ? function (e) {
            return e === zr || ut.contains(e, zr)
        } : function () {
            return !0
        };
        var Ea = "resize.webflow orientationchange.webflow load.webflow", jE = "scroll.webflow " + Ea;
        fe.resize = Yr(Ve, Ea);
        fe.scroll = Yr(Ve, jE);
        fe.redraw = Yr();

        function Yr(e, t) {
            var n = [], r = {};
            return r.up = Xe.throttle(function (i) {
                Xe.each(n, function (o) {
                    o(i)
                })
            }), e && t && e.on(t, r.up), r.on = function (i) {
                typeof i == "function" && (Xe.contains(n, i) || n.push(i))
            }, r.off = function (i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = Xe.filter(n, function (o) {
                    return o !== i
                })
            }, r
        }

        fe.location = function (e) {
            window.location = e
        };
        fe.env() && (fe.location = function () {
        });
        fe.ready = function () {
            Ln = !0, jr ? YE() : Xe.each(St, fa), Xe.each(Kr, fa), fe.resize.up()
        };

        function fa(e) {
            Ye(e) && e()
        }

        function YE() {
            jr = !1, Xe.each(At, pa)
        }

        var Et;
        fe.load = function (e) {
            Et.then(e)
        };

        function va() {
            Et && (Et.reject(), Ve.off("load", Et.resolve)), Et = new ut.Deferred, Ve.on("load", Et.resolve)
        }

        fe.destroy = function (e) {
            e = e || {}, jr = !0, Ve.triggerHandler("__wf_destroy"), e.domready != null && (Ln = e.domready), Xe.each(At, ga), fe.resize.off(), fe.scroll.off(), fe.redraw.off(), St = [], Kr = [], Et.state() === "pending" && va()
        };
        ut(fe.ready);
        va();
        ya.exports = window.Webflow = fe
    });
    var Ia = f((TF, _a) => {
        "use strict";
        var ma = Ue();
        ma.define("brand", _a.exports = function (e) {
            var t = {}, n = document, r = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function () {
                var E = r.attr("data-wf-status"), I = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && a.hostname !== I && (E = !0), E && !s && (l = l || g(), p(), setTimeout(p, 500), e(n).off(u, y).on(u, y))
            };

            function y() {
                var E = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", E ? "display: none !important;" : "")
            }

            function g() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(I, _), E[0]
            }

            function p() {
                var E = i.children(o), I = E.length && E.get(0) === l, _ = ma.env("editor");
                if (I) {
                    _ && E.remove();
                    return
                }
                E.length && E.remove(), _ || i.append(l)
            }

            return t
        })
    });
    var ba = f((bF, Ta) => {
        "use strict";
        var $E = Ue();
        $E.define("focus-visible", Ta.exports = function () {
            function e(n) {
                var r = !0, i = !1, o = null, a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

                function s(S) {
                    return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList" in S && "contains" in S.classList)
                }

                function u(S) {
                    var D = S.type, q = S.tagName;
                    return !!(q === "INPUT" && a[D] && !S.readOnly || q === "TEXTAREA" && !S.readOnly || S.isContentEditable)
                }

                function l(S) {
                    S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
                }

                function y(S) {
                    S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
                }

                function g(S) {
                    S.metaKey || S.altKey || S.ctrlKey || (s(n.activeElement) && l(n.activeElement), r = !0)
                }

                function p() {
                    r = !1
                }

                function E(S) {
                    s(S.target) && (r || u(S.target)) && l(S.target)
                }

                function I(S) {
                    s(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function () {
                        i = !1
                    }, 100), y(S.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (r = !0), A())
                }

                function A() {
                    document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
                }

                function m() {
                    document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
                }

                function x(S) {
                    S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (r = !1, m())
                }

                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", p, !0), document.addEventListener("pointerdown", p, !0), document.addEventListener("touchstart", p, !0), document.addEventListener("visibilitychange", _, !0), A(), n.addEventListener("focus", E, !0), n.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") {try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }}
            }

            return {ready: t}
        })
    });
    var wa = f((AF, Sa) => {
        "use strict";
        var Aa = Ue();
        Aa.define("focus", Sa.exports = function () {
            var e = [], t = !1;

            function n(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function r(a) {
                var s = a.target, u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                r(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Aa.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }

            return {ready: o}
        })
    });
    var Ra = f((SF, xa) => {
        "use strict";
        var $r = window.jQuery, $e = {}, Nn = [], Oa = ".w-ix", Dn = {
            reset: function (e, t) {
                t.__wf_intro = null
            }, intro: function (e, t) {
                t.__wf_intro || (t.__wf_intro = !0, $r(t).triggerHandler($e.types.INTRO))
            }, outro: function (e, t) {
                t.__wf_intro && (t.__wf_intro = null, $r(t).triggerHandler($e.types.OUTRO))
            }
        };
        $e.triggers = {};
        $e.types = {INTRO: "w-ix-intro" + Oa, OUTRO: "w-ix-outro" + Oa};
        $e.init = function () {
            for (var e = Nn.length, t = 0; t < e; t++) {
                var n = Nn[t];
                n[0](0, n[1])
            }
            Nn = [], $r.extend($e.triggers, Dn)
        };
        $e.async = function () {
            for (var e in Dn) {
                var t = Dn[e];
                Dn.hasOwnProperty(e) && ($e.triggers[e] = function (n, r) {
                    Nn.push([t, r])
                })
            }
        };
        $e.async();
        xa.exports = $e
    });
    var Fn = f((wF, La) => {
        "use strict";
        var Qr = Ra();

        function Ca(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
        }

        var QE = window.jQuery, Mn = {}, Pa = ".w-ix", ZE = {
            reset: function (e, t) {
                Qr.triggers.reset(e, t)
            }, intro: function (e, t) {
                Qr.triggers.intro(e, t), Ca(t, "COMPONENT_ACTIVE")
            }, outro: function (e, t) {
                Qr.triggers.outro(e, t), Ca(t, "COMPONENT_INACTIVE")
            }
        };
        Mn.triggers = {};
        Mn.types = {INTRO: "w-ix-intro" + Pa, OUTRO: "w-ix-outro" + Pa};
        QE.extend(Mn.triggers, ZE);
        La.exports = Mn
    });
    var Zr = f((OF, Na) => {
        var JE = typeof global == "object" && global && global.Object === Object && global;
        Na.exports = JE
    });
    var Be = f((xF, Da) => {
        var ev = Zr(), tv = typeof self == "object" && self && self.Object === Object && self,
            nv = ev || tv || Function("return this")();
        Da.exports = nv
    });
    var wt = f((RF, Ma) => {
        var rv = Be(), iv = rv.Symbol;
        Ma.exports = iv
    });
    var ka = f((CF, Ga) => {
        var Fa = wt(), qa = Object.prototype, ov = qa.hasOwnProperty, av = qa.toString,
            en = Fa ? Fa.toStringTag : void 0;

        function sv(e) {
            var t = ov.call(e, en), n = e[en];
            try {
                e[en] = void 0;
                var r = !0
            } catch {
            }
            var i = av.call(e);
            return r && (t ? e[en] = n : delete e[en]), i
        }

        Ga.exports = sv
    });
    var Va = f((PF, Xa) => {
        var uv = Object.prototype, cv = uv.toString;

        function lv(e) {
            return cv.call(e)
        }

        Xa.exports = lv
    });
    var ct = f((LF, Ha) => {
        var Ua = wt(), fv = ka(), dv = Va(), pv = "[object Null]", gv = "[object Undefined]",
            Ba = Ua ? Ua.toStringTag : void 0;

        function hv(e) {
            return e == null ? e === void 0 ? gv : pv : Ba && Ba in Object(e) ? fv(e) : dv(e)
        }

        Ha.exports = hv
    });
    var Jr = f((NF, Wa) => {
        function Ev(e, t) {
            return function (n) {
                return e(t(n))
            }
        }

        Wa.exports = Ev
    });
    var ei = f((DF, za) => {
        var vv = Jr(), yv = vv(Object.getPrototypeOf, Object);
        za.exports = yv
    });
    var nt = f((MF, Ka) => {
        function mv(e) {
            return e != null && typeof e == "object"
        }

        Ka.exports = mv
    });
    var ti = f((FF, Ya) => {
        var _v = ct(), Iv = ei(), Tv = nt(), bv = "[object Object]", Av = Function.prototype, Sv = Object.prototype,
            ja = Av.toString, wv = Sv.hasOwnProperty, Ov = ja.call(Object);

        function xv(e) {
            if (!Tv(e) || _v(e) != bv) {return !1;}
            var t = Iv(e);
            if (t === null) {return !0;}
            var n = wv.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && ja.call(n) == Ov
        }

        Ya.exports = xv
    });
    var $a = f(ni => {
        "use strict";
        Object.defineProperty(ni, "__esModule", {value: !0});
        ni.default = Rv;

        function Rv(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }
    });
    var Qa = f((ii, ri) => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {value: !0});
        var Cv = $a(), Pv = Lv(Cv);

        function Lv(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof ri < "u" ? Ot = ri : Ot = Function("return this")();
        var Nv = (0, Pv.default)(Ot);
        ii.default = Nv
    });
    var oi = f(tn => {
        "use strict";
        tn.__esModule = !0;
        tn.ActionTypes = void 0;
        tn.default = ts;
        var Dv = ti(), Mv = es(Dv), Fv = Qa(), Za = es(Fv);

        function es(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var Ja = tn.ActionTypes = {INIT: "@@redux/INIT"};

        function ts(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
                if (typeof n != "function") {throw new Error("Expected the enhancer to be a function.");}
                return n(ts)(e, t)
            }
            if (typeof e != "function") {throw new Error("Expected the reducer to be a function.");}
            var i = e, o = t, a = [], s = a, u = !1;

            function l() {
                s === a && (s = a.slice())
            }

            function y() {
                return o
            }

            function g(_) {
                if (typeof _ != "function") {throw new Error("Expected listener to be a function.");}
                var A = !0;
                return l(), s.push(_), function () {
                    if (A) {
                        A = !1, l();
                        var x = s.indexOf(_);
                        s.splice(x, 1)
                    }
                }
            }

            function p(_) {
                if (!(0, Mv.default)(_)) {throw new Error("Actions must be plain objects. Use custom middleware for async actions.");}
                if (typeof _.type > "u") {throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');}
                if (u) {throw new Error("Reducers may not dispatch actions.");}
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var A = a = s, m = 0; m < A.length; m++) {A[m]();}
                return _
            }

            function E(_) {
                if (typeof _ != "function") {throw new Error("Expected the nextReducer to be a function.");}
                i = _, p({type: Ja.INIT})
            }

            function I() {
                var _, A = g;
                return _ = {
                    subscribe: function (x) {
                        if (typeof x != "object") {throw new TypeError("Expected the observer to be an object.");}

                        function S() {
                            x.next && x.next(y())
                        }

                        S();
                        var D = A(S);
                        return {unsubscribe: D}
                    }
                }, _[Za.default] = function () {
                    return this
                }, _
            }

            return p({type: Ja.INIT}), r = {
                dispatch: p,
                subscribe: g,
                getState: y,
                replaceReducer: E
            }, r[Za.default] = I, r
        }
    });
    var si = f(ai => {
        "use strict";
        ai.__esModule = !0;
        ai.default = qv;

        function qv(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {
            }
        }
    });
    var is = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = Uv;
        var ns = oi(), Gv = ti(), XF = rs(Gv), kv = si(), VF = rs(kv);

        function rs(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function Xv(e, t) {
            var n = t && t.type, r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Vv(e) {
            Object.keys(e).forEach(function (t) {
                var n = e[t], r = n(void 0, {type: ns.ActionTypes.INIT});
                if (typeof r > "u") {throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');}
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {type: i}) > "u") {throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ns.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")}
            })
        }

        function Uv(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1) {var a;}
            var s;
            try {
                Vv(n)
            } catch (u) {
                s = u
            }
            return function () {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0], y = arguments[1];
                if (s) {throw s;}
                if (!1) {var g;}
                for (var p = !1, E = {}, I = 0; I < o.length; I++) {
                    var _ = o[I], A = n[_], m = l[_], x = A(m, y);
                    if (typeof x > "u") {
                        var S = Xv(_, y);
                        throw new Error(S)
                    }
                    E[_] = x, p = p || x !== m
                }
                return p ? E : l
            }
        }
    });
    var as = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = Bv;

        function os(e, t) {
            return function () {
                return t(e.apply(void 0, arguments))
            }
        }

        function Bv(e, t) {
            if (typeof e == "function") {return os(e, t);}
            if (typeof e != "object" || e === null) {throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');}
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i], a = e[o];
                typeof a == "function" && (r[o] = os(a, t))
            }
            return r
        }
    });
    var fi = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = Hv;

        function Hv() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {t[n] = arguments[n];}
            if (t.length === 0) {return function (o) {
                return o
            };}
            if (t.length === 1) {return t[0];}
            var r = t[t.length - 1], i = t.slice(0, -1);
            return function () {
                return i.reduceRight(function (o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    });
    var ss = f(di => {
        "use strict";
        di.__esModule = !0;
        var Wv = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])}
            }
            return e
        };
        di.default = Yv;
        var zv = fi(), Kv = jv(zv);

        function jv(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function Yv() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {t[n] = arguments[n];}
            return function (r) {
                return function (i, o, a) {
                    var s = r(i, o, a), u = s.dispatch, l = [], y = {
                        getState: s.getState, dispatch: function (p) {
                            return u(p)
                        }
                    };
                    return l = t.map(function (g) {
                        return g(y)
                    }), u = Kv.default.apply(void 0, l)(s.dispatch), Wv({}, s, {dispatch: u})
                }
            }
        }
    });
    var pi = f(qe => {
        "use strict";
        qe.__esModule = !0;
        qe.compose = qe.applyMiddleware = qe.bindActionCreators = qe.combineReducers = qe.createStore = void 0;
        var $v = oi(), Qv = xt($v), Zv = is(), Jv = xt(Zv), ey = as(), ty = xt(ey), ny = ss(), ry = xt(ny), iy = fi(),
            oy = xt(iy), ay = si(), zF = xt(ay);

        function xt(e) {
            return e && e.__esModule ? e : {default: e}
        }

        qe.createStore = Qv.default;
        qe.combineReducers = Jv.default;
        qe.bindActionCreators = ty.default;
        qe.applyMiddleware = ry.default;
        qe.compose = oy.default
    });
    var He, gi, Qe, sy, uy, qn, cy, hi = he(() => {
        "use strict";
        He = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, gi = {ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE"}, Qe = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, sy = {X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS"}, uy = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, qn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, cy = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var xe, ly, Gn = he(() => {
        "use strict";
        xe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, ly = {ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT"}
    });
    var fy, us = he(() => {
        "use strict";
        fy = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var dy, py, gy, hy, Ey, vy, yy, Ei, cs = he(() => {
        "use strict";
        Gn();
        ({
            TRANSFORM_MOVE: dy,
            TRANSFORM_SCALE: py,
            TRANSFORM_ROTATE: gy,
            TRANSFORM_SKEW: hy,
            STYLE_SIZE: Ey,
            STYLE_FILTER: vy,
            STYLE_FONT_VARIATION: yy
        } = xe), Ei = {[dy]: !0, [py]: !0, [gy]: !0, [hy]: !0, [Ey]: !0, [vy]: !0, [yy]: !0}
    });
    var Ie = {};
    Le(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => My,
        IX2_ANIMATION_FRAME_CHANGED: () => Ry,
        IX2_CLEAR_REQUESTED: () => wy,
        IX2_ELEMENT_STATE_CHANGED: () => Dy,
        IX2_EVENT_LISTENER_ADDED: () => Oy,
        IX2_EVENT_STATE_CHANGED: () => xy,
        IX2_INSTANCE_ADDED: () => Py,
        IX2_INSTANCE_REMOVED: () => Ny,
        IX2_INSTANCE_STARTED: () => Ly,
        IX2_MEDIA_QUERIES_DEFINED: () => qy,
        IX2_PARAMETER_CHANGED: () => Cy,
        IX2_PLAYBACK_REQUESTED: () => Ay,
        IX2_PREVIEW_REQUESTED: () => by,
        IX2_RAW_DATA_IMPORTED: () => my,
        IX2_SESSION_INITIALIZED: () => _y,
        IX2_SESSION_STARTED: () => Iy,
        IX2_SESSION_STOPPED: () => Ty,
        IX2_STOP_REQUESTED: () => Sy,
        IX2_TEST_FRAME_RENDERED: () => Gy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Fy
    });
    var my, _y, Iy, Ty, by, Ay, Sy, wy, Oy, xy, Ry, Cy, Py, Ly, Ny, Dy, My, Fy, qy, Gy, ls = he(() => {
        "use strict";
        my = "IX2_RAW_DATA_IMPORTED", _y = "IX2_SESSION_INITIALIZED", Iy = "IX2_SESSION_STARTED", Ty = "IX2_SESSION_STOPPED", by = "IX2_PREVIEW_REQUESTED", Ay = "IX2_PLAYBACK_REQUESTED", Sy = "IX2_STOP_REQUESTED", wy = "IX2_CLEAR_REQUESTED", Oy = "IX2_EVENT_LISTENER_ADDED", xy = "IX2_EVENT_STATE_CHANGED", Ry = "IX2_ANIMATION_FRAME_CHANGED", Cy = "IX2_PARAMETER_CHANGED", Py = "IX2_INSTANCE_ADDED", Ly = "IX2_INSTANCE_STARTED", Ny = "IX2_INSTANCE_REMOVED", Dy = "IX2_ELEMENT_STATE_CHANGED", My = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Fy = "IX2_VIEWPORT_WIDTH_CHANGED", qy = "IX2_MEDIA_QUERIES_DEFINED", Gy = "IX2_TEST_FRAME_RENDERED"
    });
    var Ae = {};
    Le(Ae, {
        ABSTRACT_NODE: () => Fm,
        AUTO: () => Sm,
        BACKGROUND: () => mm,
        BACKGROUND_COLOR: () => ym,
        BAR_DELIMITER: () => xm,
        BORDER_COLOR: () => _m,
        BOUNDARY_SELECTOR: () => By,
        CHILDREN: () => Rm,
        COLON_DELIMITER: () => Om,
        COLOR: () => Im,
        COMMA_DELIMITER: () => wm,
        CONFIG_UNIT: () => Qy,
        CONFIG_VALUE: () => Ky,
        CONFIG_X_UNIT: () => jy,
        CONFIG_X_VALUE: () => Hy,
        CONFIG_Y_UNIT: () => Yy,
        CONFIG_Y_VALUE: () => Wy,
        CONFIG_Z_UNIT: () => $y,
        CONFIG_Z_VALUE: () => zy,
        DISPLAY: () => Tm,
        FILTER: () => gm,
        FLEX: () => bm,
        FONT_VARIATION_SETTINGS: () => hm,
        HEIGHT: () => vm,
        HTML_ELEMENT: () => Dm,
        IMMEDIATE_CHILDREN: () => Cm,
        IX2_ID_DELIMITER: () => ky,
        OPACITY: () => pm,
        PARENT: () => Lm,
        PLAIN_OBJECT: () => Mm,
        PRESERVE_3D: () => Nm,
        RENDER_GENERAL: () => Gm,
        RENDER_PLUGIN: () => Xm,
        RENDER_STYLE: () => km,
        RENDER_TRANSFORM: () => qm,
        ROTATE_X: () => sm,
        ROTATE_Y: () => um,
        ROTATE_Z: () => cm,
        SCALE_3D: () => am,
        SCALE_X: () => rm,
        SCALE_Y: () => im,
        SCALE_Z: () => om,
        SIBLINGS: () => Pm,
        SKEW: () => lm,
        SKEW_X: () => fm,
        SKEW_Y: () => dm,
        TRANSFORM: () => Zy,
        TRANSLATE_3D: () => nm,
        TRANSLATE_X: () => Jy,
        TRANSLATE_Y: () => em,
        TRANSLATE_Z: () => tm,
        WF_PAGE: () => Xy,
        WIDTH: () => Em,
        WILL_CHANGE: () => Am,
        W_MOD_IX: () => Uy,
        W_MOD_JS: () => Vy
    });
    var ky, Xy, Vy, Uy, By, Hy, Wy, zy, Ky, jy, Yy, $y, Qy, Zy, Jy, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm,
        pm, gm, hm, Em, vm, ym, mm, _m, Im, Tm, bm, Am, Sm, wm, Om, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, qm, Gm, km, Xm,
        fs = he(() => {
            "use strict";
            ky = "|", Xy = "data-wf-page", Vy = "w-mod-js", Uy = "w-mod-ix", By = ".w-dyn-item", Hy = "xValue", Wy = "yValue", zy = "zValue", Ky = "value", jy = "xUnit", Yy = "yUnit", $y = "zUnit", Qy = "unit", Zy = "transform", Jy = "translateX", em = "translateY", tm = "translateZ", nm = "translate3d", rm = "scaleX", im = "scaleY", om = "scaleZ", am = "scale3d", sm = "rotateX", um = "rotateY", cm = "rotateZ", lm = "skew", fm = "skewX", dm = "skewY", pm = "opacity", gm = "filter", hm = "font-variation-settings", Em = "width", vm = "height", ym = "backgroundColor", mm = "background", _m = "borderColor", Im = "color", Tm = "display", bm = "flex", Am = "willChange", Sm = "AUTO", wm = ",", Om = ":", xm = "|", Rm = "CHILDREN", Cm = "IMMEDIATE_CHILDREN", Pm = "SIBLINGS", Lm = "PARENT", Nm = "preserve-3d", Dm = "HTML_ELEMENT", Mm = "PLAIN_OBJECT", Fm = "ABSTRACT_NODE", qm = "RENDER_TRANSFORM", Gm = "RENDER_GENERAL", km = "RENDER_STYLE", Xm = "RENDER_PLUGIN"
        });
    var ds = {};
    Le(ds, {
        ActionAppliesTo: () => ly,
        ActionTypeConsts: () => xe,
        EventAppliesTo: () => gi,
        EventBasedOn: () => Qe,
        EventContinuousMouseAxes: () => sy,
        EventLimitAffectedElements: () => uy,
        EventTypeConsts: () => He,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => fy,
        QuickEffectDirectionConsts: () => cy,
        QuickEffectIds: () => qn,
        ReducedMotionTypes: () => Ei
    });
    var Ne = he(() => {
        "use strict";
        hi();
        Gn();
        us();
        cs();
        ls();
        fs();
        Gn();
        hi()
    });
    var Vm, ps, gs = he(() => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: Vm} = Ie), ps = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Vm:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Rt = f(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {value: !0});
        var Um = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e
        } : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ve.clone = Xn;
        ve.addLast = vs;
        ve.addFirst = ys;
        ve.removeLast = ms;
        ve.removeFirst = _s;
        ve.insert = Is;
        ve.removeAt = Ts;
        ve.replaceAt = bs;
        ve.getIn = Vn;
        ve.set = Un;
        ve.setIn = Bn;
        ve.update = Ss;
        ve.updateIn = ws;
        ve.merge = Os;
        ve.mergeDeep = xs;
        ve.mergeIn = Rs;
        ve.omit = Cs;
        ve.addDefaults = Ps;
        var hs = "INVALID_ARGS";

        function Es(e) {
            throw new Error(e)
        }

        function vi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }

        var Bm = {}.hasOwnProperty;

        function Xn(e) {
            if (Array.isArray(e)) {return e.slice();}
            for (var t = vi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }

        function De(e, t, n) {
            var r = n;
            r == null && Es(hs);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) {a[s - 3] = arguments[s];}
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var y = vi(l);
                    if (y.length) {for (var g = 0; g <= y.length; g++) {
                        var p = y[g];
                        if (!(e && r[p] !== void 0)) {
                            var E = l[p];
                            t && kn(r[p]) && kn(E) && (E = De(e, t, r[p], E)), !(E === void 0 || E === r[p]) && (i || (i = !0, r = Xn(r)), r[p] = E)
                        }
                    }}
                }
            }
            return r
        }

        function kn(e) {
            var t = typeof e > "u" ? "undefined" : Um(e);
            return e != null && (t === "object" || t === "function")
        }

        function vs(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function ys(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function ms(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function _s(e) {
            return e.length ? e.slice(1) : e
        }

        function Is(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }

        function Ts(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function bs(e, t, n) {
            if (e[t] === n) {return e;}
            for (var r = e.length, i = Array(r), o = 0; o < r; o++) {i[o] = e[o];}
            return i[t] = n, i
        }

        function Vn(e, t) {
            if (!Array.isArray(t) && Es(hs), e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i], n === void 0) {return n}
                }
                return n
            }
        }

        function Un(e, t, n) {
            var r = typeof t == "number" ? [] : {}, i = e ?? r;
            if (i[t] === n) {return i;}
            var o = Xn(i);
            return o[t] = n, o
        }

        function As(e, t, n, r) {
            var i = void 0, o = t[r];
            if (r === t.length - 1) {i = n;} else {
                var a = kn(e) && kn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = As(a, t, n, r + 1)
            }
            return Un(e, o, i)
        }

        function Bn(e, t, n) {
            return t.length ? As(e, t, n, 0) : n
        }

        function Ss(e, t, n) {
            var r = e?.[t], i = n(r);
            return Un(e, t, i)
        }

        function ws(e, t, n) {
            var r = Vn(e, t), i = n(r);
            return Bn(e, t, i)
        }

        function Os(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) {s[u - 6] = arguments[u];}
            return s.length ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s)) : De(!1, !1, e, t, n, r, i, o)
        }

        function xs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) {s[u - 6] = arguments[u];}
            return s.length ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s)) : De(!1, !0, e, t, n, r, i, o)
        }

        function Rs(e, t, n, r, i, o, a) {
            var s = Vn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, y = Array(l > 7 ? l - 7 : 0), g = 7; g < l; g++) {y[g - 7] = arguments[g];}
            return y.length ? u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(y)) : u = De(!1, !1, s, n, r, i, o, a), Bn(e, t, u)
        }

        function Cs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++) {if (Bm.call(e, n[i])) {
                r = !0;
                break
            }}
            if (!r) {return e;}
            for (var o = {}, a = vi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Ps(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) {s[u - 6] = arguments[u];}
            return s.length ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s)) : De(!0, !1, e, t, n, r, i, o)
        }

        var Hm = {
            clone: Xn,
            addLast: vs,
            addFirst: ys,
            removeLast: ms,
            removeFirst: _s,
            insert: Is,
            removeAt: Ts,
            replaceAt: bs,
            getIn: Vn,
            set: Un,
            setIn: Bn,
            update: Ss,
            updateIn: ws,
            merge: Os,
            mergeDeep: xs,
            mergeIn: Rs,
            omit: Cs,
            addDefaults: Ps
        };
        ve.default = Hm
    });
    var Ns, Wm, zm, Km, jm, Ym, Ls, Ds, Ms = he(() => {
        "use strict";
        Ne();
        Ns = ce(Rt()), {
            IX2_PREVIEW_REQUESTED: Wm,
            IX2_PLAYBACK_REQUESTED: zm,
            IX2_STOP_REQUESTED: Km,
            IX2_CLEAR_REQUESTED: jm
        } = Ie, Ym = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Ls = Object.create(null, {
            [Wm]: {value: "preview"},
            [zm]: {value: "playback"},
            [Km]: {value: "stop"},
            [jm]: {value: "clear"}
        }), Ds = (e = Ym, t) => {
            if (t.type in Ls) {
                let n = [Ls[t.type]];
                return (0, Ns.setIn)(e, [n], {...t.payload})
            }
            return e
        }
    });
    var Re, $m, Qm, Zm, Jm, e_, t_, n_, r_, i_, o_, Fs, a_, qs, Gs = he(() => {
        "use strict";
        Ne();
        Re = ce(Rt()), {
            IX2_SESSION_INITIALIZED: $m,
            IX2_SESSION_STARTED: Qm,
            IX2_TEST_FRAME_RENDERED: Zm,
            IX2_SESSION_STOPPED: Jm,
            IX2_EVENT_LISTENER_ADDED: e_,
            IX2_EVENT_STATE_CHANGED: t_,
            IX2_ANIMATION_FRAME_CHANGED: n_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: r_,
            IX2_VIEWPORT_WIDTH_CHANGED: i_,
            IX2_MEDIA_QUERIES_DEFINED: o_
        } = Ie, Fs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, a_ = 20, qs = (e = Fs, t) => {
            switch (t.type) {
                case $m: {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0, Re.merge)(e, {hasBoundaryNodes: n, reducedMotion: r})
                }
                case Qm:
                    return (0, Re.set)(e, "active", !0);
                case Zm: {
                    let {payload: {step: n = a_}} = t;
                    return (0, Re.set)(e, "tick", e.tick + n)
                }
                case Jm:
                    return Fs;
                case n_: {
                    let {payload: {now: n}} = t;
                    return (0, Re.set)(e, "tick", n)
                }
                case e_: {
                    let n = (0, Re.addLast)(e.eventListeners, t.payload);
                    return (0, Re.set)(e, "eventListeners", n)
                }
                case t_: {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0, Re.setIn)(e, ["eventState", n], r)
                }
                case r_: {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0, Re.setIn)(e, ["playbackState", n], r)
                }
                case i_: {
                    let {width: n, mediaQueries: r} = t.payload, i = r.length, o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = r[a];
                        if (n >= u && n <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0, Re.merge)(e, {viewportWidth: n, mediaQueryKey: o})
                }
                case o_:
                    return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Xs = f((d2, ks) => {
        function s_() {
            this.__data__ = [], this.size = 0
        }

        ks.exports = s_
    });
    var Hn = f((p2, Vs) => {
        function u_(e, t) {
            return e === t || e !== e && t !== t
        }

        Vs.exports = u_
    });
    var nn = f((g2, Us) => {
        var c_ = Hn();

        function l_(e, t) {
            for (var n = e.length; n--;) {if (c_(e[n][0], t)) {return n;}}
            return -1
        }

        Us.exports = l_
    });
    var Hs = f((h2, Bs) => {
        var f_ = nn(), d_ = Array.prototype, p_ = d_.splice;

        function g_(e) {
            var t = this.__data__, n = f_(t, e);
            if (n < 0) {return !1;}
            var r = t.length - 1;
            return n == r ? t.pop() : p_.call(t, n, 1), --this.size, !0
        }

        Bs.exports = g_
    });
    var zs = f((E2, Ws) => {
        var h_ = nn();

        function E_(e) {
            var t = this.__data__, n = h_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }

        Ws.exports = E_
    });
    var js = f((v2, Ks) => {
        var v_ = nn();

        function y_(e) {
            return v_(this.__data__, e) > -1
        }

        Ks.exports = y_
    });
    var $s = f((y2, Ys) => {
        var m_ = nn();

        function __(e, t) {
            var n = this.__data__, r = m_(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }

        Ys.exports = __
    });
    var rn = f((m2, Qs) => {
        var I_ = Xs(), T_ = Hs(), b_ = zs(), A_ = js(), S_ = $s();

        function Ct(e) {
            var t = -1, n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        Ct.prototype.clear = I_;
        Ct.prototype.delete = T_;
        Ct.prototype.get = b_;
        Ct.prototype.has = A_;
        Ct.prototype.set = S_;
        Qs.exports = Ct
    });
    var Js = f((_2, Zs) => {
        var w_ = rn();

        function O_() {
            this.__data__ = new w_, this.size = 0
        }

        Zs.exports = O_
    });
    var tu = f((I2, eu) => {
        function x_(e) {
            var t = this.__data__, n = t.delete(e);
            return this.size = t.size, n
        }

        eu.exports = x_
    });
    var ru = f((T2, nu) => {
        function R_(e) {
            return this.__data__.get(e)
        }

        nu.exports = R_
    });
    var ou = f((b2, iu) => {
        function C_(e) {
            return this.__data__.has(e)
        }

        iu.exports = C_
    });
    var Ze = f((A2, au) => {
        function P_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }

        au.exports = P_
    });
    var yi = f((S2, su) => {
        var L_ = ct(), N_ = Ze(), D_ = "[object AsyncFunction]", M_ = "[object Function]",
            F_ = "[object GeneratorFunction]", q_ = "[object Proxy]";

        function G_(e) {
            if (!N_(e)) {return !1;}
            var t = L_(e);
            return t == M_ || t == F_ || t == D_ || t == q_
        }

        su.exports = G_
    });
    var cu = f((w2, uu) => {
        var k_ = Be(), X_ = k_["__core-js_shared__"];
        uu.exports = X_
    });
    var du = f((O2, fu) => {
        var mi = cu(), lu = function () {
            var e = /[^.]+$/.exec(mi && mi.keys && mi.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

        function V_(e) {
            return !!lu && lu in e
        }

        fu.exports = V_
    });
    var _i = f((x2, pu) => {
        var U_ = Function.prototype, B_ = U_.toString;

        function H_(e) {
            if (e != null) {
                try {
                    return B_.call(e)
                } catch {
                }
                try {
                    return e + ""
                } catch {
                }
            }
            return ""
        }

        pu.exports = H_
    });
    var hu = f((R2, gu) => {
        var W_ = yi(), z_ = du(), K_ = Ze(), j_ = _i(), Y_ = /[\\^$.*+?()[\]{}|]/g, $_ = /^\[object .+?Constructor\]$/,
            Q_ = Function.prototype, Z_ = Object.prototype, J_ = Q_.toString, eI = Z_.hasOwnProperty,
            tI = RegExp("^" + J_.call(eI).replace(Y_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function nI(e) {
            if (!K_(e) || z_(e)) {return !1;}
            var t = W_(e) ? tI : $_;
            return t.test(j_(e))
        }

        gu.exports = nI
    });
    var vu = f((C2, Eu) => {
        function rI(e, t) {
            return e?.[t]
        }

        Eu.exports = rI
    });
    var lt = f((P2, yu) => {
        var iI = hu(), oI = vu();

        function aI(e, t) {
            var n = oI(e, t);
            return iI(n) ? n : void 0
        }

        yu.exports = aI
    });
    var Wn = f((L2, mu) => {
        var sI = lt(), uI = Be(), cI = sI(uI, "Map");
        mu.exports = cI
    });
    var on = f((N2, _u) => {
        var lI = lt(), fI = lI(Object, "create");
        _u.exports = fI
    });
    var bu = f((D2, Tu) => {
        var Iu = on();

        function dI() {
            this.__data__ = Iu ? Iu(null) : {}, this.size = 0
        }

        Tu.exports = dI
    });
    var Su = f((M2, Au) => {
        function pI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }

        Au.exports = pI
    });
    var Ou = f((F2, wu) => {
        var gI = on(), hI = "__lodash_hash_undefined__", EI = Object.prototype, vI = EI.hasOwnProperty;

        function yI(e) {
            var t = this.__data__;
            if (gI) {
                var n = t[e];
                return n === hI ? void 0 : n
            }
            return vI.call(t, e) ? t[e] : void 0
        }

        wu.exports = yI
    });
    var Ru = f((q2, xu) => {
        var mI = on(), _I = Object.prototype, II = _I.hasOwnProperty;

        function TI(e) {
            var t = this.__data__;
            return mI ? t[e] !== void 0 : II.call(t, e)
        }

        xu.exports = TI
    });
    var Pu = f((G2, Cu) => {
        var bI = on(), AI = "__lodash_hash_undefined__";

        function SI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = bI && t === void 0 ? AI : t, this
        }

        Cu.exports = SI
    });
    var Nu = f((k2, Lu) => {
        var wI = bu(), OI = Su(), xI = Ou(), RI = Ru(), CI = Pu();

        function Pt(e) {
            var t = -1, n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        Pt.prototype.clear = wI;
        Pt.prototype.delete = OI;
        Pt.prototype.get = xI;
        Pt.prototype.has = RI;
        Pt.prototype.set = CI;
        Lu.exports = Pt
    });
    var Fu = f((X2, Mu) => {
        var Du = Nu(), PI = rn(), LI = Wn();

        function NI() {
            this.size = 0, this.__data__ = {hash: new Du, map: new (LI || PI), string: new Du}
        }

        Mu.exports = NI
    });
    var Gu = f((V2, qu) => {
        function DI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }

        qu.exports = DI
    });
    var an = f((U2, ku) => {
        var MI = Gu();

        function FI(e, t) {
            var n = e.__data__;
            return MI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }

        ku.exports = FI
    });
    var Vu = f((B2, Xu) => {
        var qI = an();

        function GI(e) {
            var t = qI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }

        Xu.exports = GI
    });
    var Bu = f((H2, Uu) => {
        var kI = an();

        function XI(e) {
            return kI(this, e).get(e)
        }

        Uu.exports = XI
    });
    var Wu = f((W2, Hu) => {
        var VI = an();

        function UI(e) {
            return VI(this, e).has(e)
        }

        Hu.exports = UI
    });
    var Ku = f((z2, zu) => {
        var BI = an();

        function HI(e, t) {
            var n = BI(this, e), r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }

        zu.exports = HI
    });
    var zn = f((K2, ju) => {
        var WI = Fu(), zI = Vu(), KI = Bu(), jI = Wu(), YI = Ku();

        function Lt(e) {
            var t = -1, n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        Lt.prototype.clear = WI;
        Lt.prototype.delete = zI;
        Lt.prototype.get = KI;
        Lt.prototype.has = jI;
        Lt.prototype.set = YI;
        ju.exports = Lt
    });
    var $u = f((j2, Yu) => {
        var $I = rn(), QI = Wn(), ZI = zn(), JI = 200;

        function eT(e, t) {
            var n = this.__data__;
            if (n instanceof $I) {
                var r = n.__data__;
                if (!QI || r.length < JI - 1) {return r.push([e, t]), this.size = ++n.size, this;}
                n = this.__data__ = new ZI(r)
            }
            return n.set(e, t), this.size = n.size, this
        }

        Yu.exports = eT
    });
    var Ii = f((Y2, Qu) => {
        var tT = rn(), nT = Js(), rT = tu(), iT = ru(), oT = ou(), aT = $u();

        function Nt(e) {
            var t = this.__data__ = new tT(e);
            this.size = t.size
        }

        Nt.prototype.clear = nT;
        Nt.prototype.delete = rT;
        Nt.prototype.get = iT;
        Nt.prototype.has = oT;
        Nt.prototype.set = aT;
        Qu.exports = Nt
    });
    var Ju = f(($2, Zu) => {
        var sT = "__lodash_hash_undefined__";

        function uT(e) {
            return this.__data__.set(e, sT), this
        }

        Zu.exports = uT
    });
    var tc = f((Q2, ec) => {
        function cT(e) {
            return this.__data__.has(e)
        }

        ec.exports = cT
    });
    var rc = f((Z2, nc) => {
        var lT = zn(), fT = Ju(), dT = tc();

        function Kn(e) {
            var t = -1, n = e == null ? 0 : e.length;
            for (this.__data__ = new lT; ++t < n;) {this.add(e[t])}
        }

        Kn.prototype.add = Kn.prototype.push = fT;
        Kn.prototype.has = dT;
        nc.exports = Kn
    });
    var oc = f((J2, ic) => {
        function pT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) {if (t(e[n], n, e)) {return !0;}}
            return !1
        }

        ic.exports = pT
    });
    var sc = f((e1, ac) => {
        function gT(e, t) {
            return e.has(t)
        }

        ac.exports = gT
    });
    var Ti = f((t1, uc) => {
        var hT = rc(), ET = oc(), vT = sc(), yT = 1, mT = 2;

        function _T(e, t, n, r, i, o) {
            var a = n & yT, s = e.length, u = t.length;
            if (s != u && !(a && u > s)) {return !1;}
            var l = o.get(e), y = o.get(t);
            if (l && y) {return l == t && y == e;}
            var g = -1, p = !0, E = n & mT ? new hT : void 0;
            for (o.set(e, t), o.set(t, e); ++g < s;) {
                var I = e[g], _ = t[g];
                if (r) {var A = a ? r(_, I, g, t, e, o) : r(I, _, g, e, t, o);}
                if (A !== void 0) {
                    if (A) {continue;}
                    p = !1;
                    break
                }
                if (E) {
                    if (!ET(t, function (m, x) {
                        if (!vT(E, x) && (I === m || i(I, m, n, r, o))) {return E.push(x)}
                    })) {
                        p = !1;
                        break
                    }
                } else if (!(I === _ || i(I, _, n, r, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }

        uc.exports = _T
    });
    var lc = f((n1, cc) => {
        var IT = Be(), TT = IT.Uint8Array;
        cc.exports = TT
    });
    var dc = f((r1, fc) => {
        function bT(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (r, i) {
                n[++t] = [i, r]
            }), n
        }

        fc.exports = bT
    });
    var gc = f((i1, pc) => {
        function AT(e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (r) {
                n[++t] = r
            }), n
        }

        pc.exports = AT
    });
    var mc = f((o1, yc) => {
        var hc = wt(), Ec = lc(), ST = Hn(), wT = Ti(), OT = dc(), xT = gc(), RT = 1, CT = 2, PT = "[object Boolean]",
            LT = "[object Date]", NT = "[object Error]", DT = "[object Map]", MT = "[object Number]",
            FT = "[object RegExp]", qT = "[object Set]", GT = "[object String]", kT = "[object Symbol]",
            XT = "[object ArrayBuffer]", VT = "[object DataView]", vc = hc ? hc.prototype : void 0,
            bi = vc ? vc.valueOf : void 0;

        function UT(e, t, n, r, i, o, a) {
            switch (n) {
                case VT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {return !1;}
                    e = e.buffer, t = t.buffer;
                case XT:
                    return !(e.byteLength != t.byteLength || !o(new Ec(e), new Ec(t)));
                case PT:
                case LT:
                case MT:
                    return ST(+e, +t);
                case NT:
                    return e.name == t.name && e.message == t.message;
                case FT:
                case GT:
                    return e == t + "";
                case DT:
                    var s = OT;
                case qT:
                    var u = r & RT;
                    if (s || (s = xT), e.size != t.size && !u) {return !1;}
                    var l = a.get(e);
                    if (l) {return l == t;}
                    r |= CT, a.set(e, t);
                    var y = wT(s(e), s(t), r, i, o, a);
                    return a.delete(e), y;
                case kT:
                    if (bi) {return bi.call(e) == bi.call(t)}
            }
            return !1
        }

        yc.exports = UT
    });
    var jn = f((a1, _c) => {
        function BT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) {e[i + n] = t[n];}
            return e
        }

        _c.exports = BT
    });
    var Te = f((s1, Ic) => {
        var HT = Array.isArray;
        Ic.exports = HT
    });
    var Ai = f((u1, Tc) => {
        var WT = jn(), zT = Te();

        function KT(e, t, n) {
            var r = t(e);
            return zT(e) ? r : WT(r, n(e))
        }

        Tc.exports = KT
    });
    var Ac = f((c1, bc) => {
        function jT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }

        bc.exports = jT
    });
    var Si = f((l1, Sc) => {
        function YT() {
            return []
        }

        Sc.exports = YT
    });
    var wi = f((f1, Oc) => {
        var $T = Ac(), QT = Si(), ZT = Object.prototype, JT = ZT.propertyIsEnumerable,
            wc = Object.getOwnPropertySymbols, eb = wc ? function (e) {
                return e == null ? [] : (e = Object(e), $T(wc(e), function (t) {
                    return JT.call(e, t)
                }))
            } : QT;
        Oc.exports = eb
    });
    var Rc = f((d1, xc) => {
        function tb(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) {r[n] = t(n);}
            return r
        }

        xc.exports = tb
    });
    var Pc = f((p1, Cc) => {
        var nb = ct(), rb = nt(), ib = "[object Arguments]";

        function ob(e) {
            return rb(e) && nb(e) == ib
        }

        Cc.exports = ob
    });
    var sn = f((g1, Dc) => {
        var Lc = Pc(), ab = nt(), Nc = Object.prototype, sb = Nc.hasOwnProperty, ub = Nc.propertyIsEnumerable,
            cb = Lc(function () {
                return arguments
            }()) ? Lc : function (e) {
                return ab(e) && sb.call(e, "callee") && !ub.call(e, "callee")
            };
        Dc.exports = cb
    });
    var Fc = f((h1, Mc) => {
        function lb() {
            return !1
        }

        Mc.exports = lb
    });
    var Yn = f((un, Dt) => {
        var fb = Be(), db = Fc(), kc = typeof un == "object" && un && !un.nodeType && un,
            qc = kc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt, pb = qc && qc.exports === kc,
            Gc = pb ? fb.Buffer : void 0, gb = Gc ? Gc.isBuffer : void 0, hb = gb || db;
        Dt.exports = hb
    });
    var $n = f((E1, Xc) => {
        var Eb = 9007199254740991, vb = /^(?:0|[1-9]\d*)$/;

        function yb(e, t) {
            var n = typeof e;
            return t = t ?? Eb, !!t && (n == "number" || n != "symbol" && vb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        Xc.exports = yb
    });
    var Qn = f((v1, Vc) => {
        var mb = 9007199254740991;

        function _b(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mb
        }

        Vc.exports = _b
    });
    var Bc = f((y1, Uc) => {
        var Ib = ct(), Tb = Qn(), bb = nt(), Ab = "[object Arguments]", Sb = "[object Array]", wb = "[object Boolean]",
            Ob = "[object Date]", xb = "[object Error]", Rb = "[object Function]", Cb = "[object Map]",
            Pb = "[object Number]", Lb = "[object Object]", Nb = "[object RegExp]", Db = "[object Set]",
            Mb = "[object String]", Fb = "[object WeakMap]", qb = "[object ArrayBuffer]", Gb = "[object DataView]",
            kb = "[object Float32Array]", Xb = "[object Float64Array]", Vb = "[object Int8Array]",
            Ub = "[object Int16Array]", Bb = "[object Int32Array]", Hb = "[object Uint8Array]",
            Wb = "[object Uint8ClampedArray]", zb = "[object Uint16Array]", Kb = "[object Uint32Array]", pe = {};
        pe[kb] = pe[Xb] = pe[Vb] = pe[Ub] = pe[Bb] = pe[Hb] = pe[Wb] = pe[zb] = pe[Kb] = !0;
        pe[Ab] = pe[Sb] = pe[qb] = pe[wb] = pe[Gb] = pe[Ob] = pe[xb] = pe[Rb] = pe[Cb] = pe[Pb] = pe[Lb] = pe[Nb] = pe[Db] = pe[Mb] = pe[Fb] = !1;

        function jb(e) {
            return bb(e) && Tb(e.length) && !!pe[Ib(e)]
        }

        Uc.exports = jb
    });
    var Wc = f((m1, Hc) => {
        function Yb(e) {
            return function (t) {
                return e(t)
            }
        }

        Hc.exports = Yb
    });
    var Kc = f((cn, Mt) => {
        var $b = Zr(), zc = typeof cn == "object" && cn && !cn.nodeType && cn,
            ln = zc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt, Qb = ln && ln.exports === zc,
            Oi = Qb && $b.process, Zb = function () {
                try {
                    var e = ln && ln.require && ln.require("util").types;
                    return e || Oi && Oi.binding && Oi.binding("util")
                } catch {
                }
            }();
        Mt.exports = Zb
    });
    var Zn = f((_1, $c) => {
        var Jb = Bc(), eA = Wc(), jc = Kc(), Yc = jc && jc.isTypedArray, tA = Yc ? eA(Yc) : Jb;
        $c.exports = tA
    });
    var xi = f((I1, Qc) => {
        var nA = Rc(), rA = sn(), iA = Te(), oA = Yn(), aA = $n(), sA = Zn(), uA = Object.prototype,
            cA = uA.hasOwnProperty;

        function lA(e, t) {
            var n = iA(e), r = !n && rA(e), i = !n && !r && oA(e), o = !n && !r && !i && sA(e), a = n || r || i || o,
                s = a ? nA(e.length, String) : [], u = s.length;
            for (var l in e) {(t || cA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || aA(l, u))) && s.push(l);}
            return s
        }

        Qc.exports = lA
    });
    var Jn = f((T1, Zc) => {
        var fA = Object.prototype;

        function dA(e) {
            var t = e && e.constructor, n = typeof t == "function" && t.prototype || fA;
            return e === n
        }

        Zc.exports = dA
    });
    var el = f((b1, Jc) => {
        var pA = Jr(), gA = pA(Object.keys, Object);
        Jc.exports = gA
    });
    var er = f((A1, tl) => {
        var hA = Jn(), EA = el(), vA = Object.prototype, yA = vA.hasOwnProperty;

        function mA(e) {
            if (!hA(e)) {return EA(e);}
            var t = [];
            for (var n in Object(e)) {yA.call(e, n) && n != "constructor" && t.push(n);}
            return t
        }

        tl.exports = mA
    });
    var vt = f((S1, nl) => {
        var _A = yi(), IA = Qn();

        function TA(e) {
            return e != null && IA(e.length) && !_A(e)
        }

        nl.exports = TA
    });
    var fn = f((w1, rl) => {
        var bA = xi(), AA = er(), SA = vt();

        function wA(e) {
            return SA(e) ? bA(e) : AA(e)
        }

        rl.exports = wA
    });
    var ol = f((O1, il) => {
        var OA = Ai(), xA = wi(), RA = fn();

        function CA(e) {
            return OA(e, RA, xA)
        }

        il.exports = CA
    });
    var ul = f((x1, sl) => {
        var al = ol(), PA = 1, LA = Object.prototype, NA = LA.hasOwnProperty;

        function DA(e, t, n, r, i, o) {
            var a = n & PA, s = al(e), u = s.length, l = al(t), y = l.length;
            if (u != y && !a) {return !1;}
            for (var g = u; g--;) {
                var p = s[g];
                if (!(a ? p in t : NA.call(t, p))) {return !1}
            }
            var E = o.get(e), I = o.get(t);
            if (E && I) {return E == t && I == e;}
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var A = a; ++g < u;) {
                p = s[g];
                var m = e[p], x = t[p];
                if (r) {var S = a ? r(x, m, p, t, e, o) : r(m, x, p, e, t, o);}
                if (!(S === void 0 ? m === x || i(m, x, n, r, o) : S)) {
                    _ = !1;
                    break
                }
                A || (A = p == "constructor")
            }
            if (_ && !A) {
                var D = e.constructor, q = t.constructor;
                D != q && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof q == "function" && q instanceof q) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }

        sl.exports = DA
    });
    var ll = f((R1, cl) => {
        var MA = lt(), FA = Be(), qA = MA(FA, "DataView");
        cl.exports = qA
    });
    var dl = f((C1, fl) => {
        var GA = lt(), kA = Be(), XA = GA(kA, "Promise");
        fl.exports = XA
    });
    var gl = f((P1, pl) => {
        var VA = lt(), UA = Be(), BA = VA(UA, "Set");
        pl.exports = BA
    });
    var Ri = f((L1, hl) => {
        var HA = lt(), WA = Be(), zA = HA(WA, "WeakMap");
        hl.exports = zA
    });
    var tr = f((N1, Tl) => {
        var Ci = ll(), Pi = Wn(), Li = dl(), Ni = gl(), Di = Ri(), Il = ct(), Ft = _i(), El = "[object Map]",
            KA = "[object Object]", vl = "[object Promise]", yl = "[object Set]", ml = "[object WeakMap]",
            _l = "[object DataView]", jA = Ft(Ci), YA = Ft(Pi), $A = Ft(Li), QA = Ft(Ni), ZA = Ft(Di), yt = Il;
        (Ci && yt(new Ci(new ArrayBuffer(1))) != _l || Pi && yt(new Pi) != El || Li && yt(Li.resolve()) != vl || Ni && yt(new Ni) != yl || Di && yt(new Di) != ml) && (yt = function (e) {
            var t = Il(e), n = t == KA ? e.constructor : void 0, r = n ? Ft(n) : "";
            if (r) {switch (r) {
                case jA:
                    return _l;
                case YA:
                    return El;
                case $A:
                    return vl;
                case QA:
                    return yl;
                case ZA:
                    return ml
            }}
            return t
        });
        Tl.exports = yt
    });
    var Cl = f((D1, Rl) => {
        var Mi = Ii(), JA = Ti(), e0 = mc(), t0 = ul(), bl = tr(), Al = Te(), Sl = Yn(), n0 = Zn(), r0 = 1,
            wl = "[object Arguments]", Ol = "[object Array]", nr = "[object Object]", i0 = Object.prototype,
            xl = i0.hasOwnProperty;

        function o0(e, t, n, r, i, o) {
            var a = Al(e), s = Al(t), u = a ? Ol : bl(e), l = s ? Ol : bl(t);
            u = u == wl ? nr : u, l = l == wl ? nr : l;
            var y = u == nr, g = l == nr, p = u == l;
            if (p && Sl(e)) {
                if (!Sl(t)) {return !1;}
                a = !0, y = !1
            }
            if (p && !y) {return o || (o = new Mi), a || n0(e) ? JA(e, t, n, r, i, o) : e0(e, t, u, n, r, i, o);}
            if (!(n & r0)) {
                var E = y && xl.call(e, "__wrapped__"), I = g && xl.call(t, "__wrapped__");
                if (E || I) {
                    var _ = E ? e.value() : e, A = I ? t.value() : t;
                    return o || (o = new Mi), i(_, A, n, r, o)
                }
            }
            return p ? (o || (o = new Mi), t0(e, t, n, r, i, o)) : !1
        }

        Rl.exports = o0
    });
    var Fi = f((M1, Nl) => {
        var a0 = Cl(), Pl = nt();

        function Ll(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Pl(e) && !Pl(t) ? e !== e && t !== t : a0(e, t, n, r, Ll, i)
        }

        Nl.exports = Ll
    });
    var Ml = f((F1, Dl) => {
        var s0 = Ii(), u0 = Fi(), c0 = 1, l0 = 2;

        function f0(e, t, n, r) {
            var i = n.length, o = i, a = !r;
            if (e == null) {return !o;}
            for (e = Object(e); i--;) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {return !1}
            }
            for (; ++i < o;) {
                s = n[i];
                var u = s[0], l = e[u], y = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) {return !1}
                } else {
                    var g = new s0;
                    if (r) {var p = r(l, y, u, e, t, g);}
                    if (!(p === void 0 ? u0(y, l, c0 | l0, r, g) : p)) {return !1}
                }
            }
            return !0
        }

        Dl.exports = f0
    });
    var qi = f((q1, Fl) => {
        var d0 = Ze();

        function p0(e) {
            return e === e && !d0(e)
        }

        Fl.exports = p0
    });
    var Gl = f((G1, ql) => {
        var g0 = qi(), h0 = fn();

        function E0(e) {
            for (var t = h0(e), n = t.length; n--;) {
                var r = t[n], i = e[r];
                t[n] = [r, i, g0(i)]
            }
            return t
        }

        ql.exports = E0
    });
    var Gi = f((k1, kl) => {
        function v0(e, t) {
            return function (n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }

        kl.exports = v0
    });
    var Vl = f((X1, Xl) => {
        var y0 = Ml(), m0 = Gl(), _0 = Gi();

        function I0(e) {
            var t = m0(e);
            return t.length == 1 && t[0][2] ? _0(t[0][0], t[0][1]) : function (n) {
                return n === e || y0(n, e, t)
            }
        }

        Xl.exports = I0
    });
    var dn = f((V1, Ul) => {
        var T0 = ct(), b0 = nt(), A0 = "[object Symbol]";

        function S0(e) {
            return typeof e == "symbol" || b0(e) && T0(e) == A0
        }

        Ul.exports = S0
    });
    var rr = f((U1, Bl) => {
        var w0 = Te(), O0 = dn(), x0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, R0 = /^\w*$/;

        function C0(e, t) {
            if (w0(e)) {return !1;}
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || O0(e) ? !0 : R0.test(e) || !x0.test(e) || t != null && e in Object(t)
        }

        Bl.exports = C0
    });
    var zl = f((B1, Wl) => {
        var Hl = zn(), P0 = "Expected a function";

        function ki(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") {throw new TypeError(P0);}
            var n = function () {
                var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
                if (o.has(i)) {return o.get(i);}
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o, a
            };
            return n.cache = new (ki.Cache || Hl), n
        }

        ki.Cache = Hl;
        Wl.exports = ki
    });
    var jl = f((H1, Kl) => {
        var L0 = zl(), N0 = 500;

        function D0(e) {
            var t = L0(e, function (r) {
                return n.size === N0 && n.clear(), r
            }), n = t.cache;
            return t
        }

        Kl.exports = D0
    });
    var $l = f((W1, Yl) => {
        var M0 = jl(),
            F0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            q0 = /\\(\\)?/g, G0 = M0(function (e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(F0, function (n, r, i, o) {
                    t.push(i ? o.replace(q0, "$1") : r || n)
                }), t
            });
        Yl.exports = G0
    });
    var Xi = f((z1, Ql) => {
        function k0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) {i[n] = t(e[n], n, e);}
            return i
        }

        Ql.exports = k0
    });
    var rf = f((K1, nf) => {
        var Zl = wt(), X0 = Xi(), V0 = Te(), U0 = dn(), B0 = 1 / 0, Jl = Zl ? Zl.prototype : void 0,
            ef = Jl ? Jl.toString : void 0;

        function tf(e) {
            if (typeof e == "string") {return e;}
            if (V0(e)) {return X0(e, tf) + "";}
            if (U0(e)) {return ef ? ef.call(e) : "";}
            var t = e + "";
            return t == "0" && 1 / e == -B0 ? "-0" : t
        }

        nf.exports = tf
    });
    var af = f((j1, of) => {
        var H0 = rf();

        function W0(e) {
            return e == null ? "" : H0(e)
        }

        of.exports = W0
    });
    var pn = f((Y1, sf) => {
        var z0 = Te(), K0 = rr(), j0 = $l(), Y0 = af();

        function $0(e, t) {
            return z0(e) ? e : K0(e, t) ? [e] : j0(Y0(e))
        }

        sf.exports = $0
    });
    var qt = f(($1, uf) => {
        var Q0 = dn(), Z0 = 1 / 0;

        function J0(e) {
            if (typeof e == "string" || Q0(e)) {return e;}
            var t = e + "";
            return t == "0" && 1 / e == -Z0 ? "-0" : t
        }

        uf.exports = J0
    });
    var ir = f((Q1, cf) => {
        var eS = pn(), tS = qt();

        function nS(e, t) {
            t = eS(t, e);
            for (var n = 0, r = t.length; e != null && n < r;) {e = e[tS(t[n++])];}
            return n && n == r ? e : void 0
        }

        cf.exports = nS
    });
    var or = f((Z1, lf) => {
        var rS = ir();

        function iS(e, t, n) {
            var r = e == null ? void 0 : rS(e, t);
            return r === void 0 ? n : r
        }

        lf.exports = iS
    });
    var df = f((J1, ff) => {
        function oS(e, t) {
            return e != null && t in Object(e)
        }

        ff.exports = oS
    });
    var gf = f((eq, pf) => {
        var aS = pn(), sS = sn(), uS = Te(), cS = $n(), lS = Qn(), fS = qt();

        function dS(e, t, n) {
            t = aS(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i;) {
                var a = fS(t[r]);
                if (!(o = e != null && n(e, a))) {break;}
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && lS(i) && cS(a, i) && (uS(e) || sS(e)))
        }

        pf.exports = dS
    });
    var Ef = f((tq, hf) => {
        var pS = df(), gS = gf();

        function hS(e, t) {
            return e != null && gS(e, t, pS)
        }

        hf.exports = hS
    });
    var yf = f((nq, vf) => {
        var ES = Fi(), vS = or(), yS = Ef(), mS = rr(), _S = qi(), IS = Gi(), TS = qt(), bS = 1, AS = 2;

        function SS(e, t) {
            return mS(e) && _S(t) ? IS(TS(e), t) : function (n) {
                var r = vS(n, e);
                return r === void 0 && r === t ? yS(n, e) : ES(t, r, bS | AS)
            }
        }

        vf.exports = SS
    });
    var ar = f((rq, mf) => {
        function wS(e) {
            return e
        }

        mf.exports = wS
    });
    var Vi = f((iq, _f) => {
        function OS(e) {
            return function (t) {
                return t?.[e]
            }
        }

        _f.exports = OS
    });
    var Tf = f((oq, If) => {
        var xS = ir();

        function RS(e) {
            return function (t) {
                return xS(t, e)
            }
        }

        If.exports = RS
    });
    var Af = f((aq, bf) => {
        var CS = Vi(), PS = Tf(), LS = rr(), NS = qt();

        function DS(e) {
            return LS(e) ? CS(NS(e)) : PS(e)
        }

        bf.exports = DS
    });
    var ft = f((sq, Sf) => {
        var MS = Vl(), FS = yf(), qS = ar(), GS = Te(), kS = Af();

        function XS(e) {
            return typeof e == "function" ? e : e == null ? qS : typeof e == "object" ? GS(e) ? FS(e[0], e[1]) : MS(e) : kS(e)
        }

        Sf.exports = XS
    });
    var Ui = f((uq, wf) => {
        var VS = ft(), US = vt(), BS = fn();

        function HS(e) {
            return function (t, n, r) {
                var i = Object(t);
                if (!US(t)) {
                    var o = VS(n, 3);
                    t = BS(t), n = function (s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }

        wf.exports = HS
    });
    var Bi = f((cq, Of) => {
        function WS(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {if (t(e[o], o, e)) {return o;}}
            return -1
        }

        Of.exports = WS
    });
    var Rf = f((lq, xf) => {
        var zS = /\s/;

        function KS(e) {
            for (var t = e.length; t-- && zS.test(e.charAt(t));) {;}
            return t
        }

        xf.exports = KS
    });
    var Pf = f((fq, Cf) => {
        var jS = Rf(), YS = /^\s+/;

        function $S(e) {
            return e && e.slice(0, jS(e) + 1).replace(YS, "")
        }

        Cf.exports = $S
    });
    var sr = f((dq, Df) => {
        var QS = Pf(), Lf = Ze(), ZS = dn(), Nf = 0 / 0, JS = /^[-+]0x[0-9a-f]+$/i, ew = /^0b[01]+$/i,
            tw = /^0o[0-7]+$/i, nw = parseInt;

        function rw(e) {
            if (typeof e == "number") {return e;}
            if (ZS(e)) {return Nf;}
            if (Lf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Lf(t) ? t + "" : t
            }
            if (typeof e != "string") {return e === 0 ? e : +e;}
            e = QS(e);
            var n = ew.test(e);
            return n || tw.test(e) ? nw(e.slice(2), n ? 2 : 8) : JS.test(e) ? Nf : +e
        }

        Df.exports = rw
    });
    var qf = f((pq, Ff) => {
        var iw = sr(), Mf = 1 / 0, ow = 17976931348623157e292;

        function aw(e) {
            if (!e) {return e === 0 ? e : 0;}
            if (e = iw(e), e === Mf || e === -Mf) {
                var t = e < 0 ? -1 : 1;
                return t * ow
            }
            return e === e ? e : 0
        }

        Ff.exports = aw
    });
    var Hi = f((gq, Gf) => {
        var sw = qf();

        function uw(e) {
            var t = sw(e), n = t % 1;
            return t === t ? n ? t - n : t : 0
        }

        Gf.exports = uw
    });
    var Xf = f((hq, kf) => {
        var cw = Bi(), lw = ft(), fw = Hi(), dw = Math.max;

        function pw(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) {return -1;}
            var i = n == null ? 0 : fw(n);
            return i < 0 && (i = dw(r + i, 0)), cw(e, lw(t, 3), i)
        }

        kf.exports = pw
    });
    var Wi = f((Eq, Vf) => {
        var gw = Ui(), hw = Xf(), Ew = gw(hw);
        Vf.exports = Ew
    });
    var Hf = {};
    Le(Hf, {
        ELEMENT_MATCHES: () => vw,
        FLEX_PREFIXED: () => zi,
        IS_BROWSER_ENV: () => We,
        TRANSFORM_PREFIXED: () => dt,
        TRANSFORM_STYLE_PREFIXED: () => cr,
        withBrowser: () => ur
    });
    var Bf, We, ur, vw, zi, dt, Uf, cr, lr = he(() => {
        "use strict";
        Bf = ce(Wi()), We = typeof window < "u", ur = (e, t) => We ? e() : t, vw = ur(() => (0, Bf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), zi = ur(() => {
            let e = document.createElement("i"), t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                n = "";
            try {
                let {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) {return o}
                }
                return n
            } catch {
                return n
            }
        }, "flex"), dt = ur(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"], n = "Transform", {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0) {return o}
                }
            }
            return "transform"
        }, "transform"), Uf = dt.split("transform")[0], cr = Uf ? Uf + "TransformStyle" : "transformStyle"
    });
    var Ki = f((vq, Yf) => {
        var yw = 4, mw = .001, _w = 1e-7, Iw = 10, gn = 11, fr = 1 / (gn - 1), Tw = typeof Float32Array == "function";

        function Wf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function zf(e, t) {
            return 3 * t - 6 * e
        }

        function Kf(e) {
            return 3 * e
        }

        function dr(e, t, n) {
            return ((Wf(t, n) * e + zf(t, n)) * e + Kf(t)) * e
        }

        function jf(e, t, n) {
            return 3 * Wf(t, n) * e * e + 2 * zf(t, n) * e + Kf(t)
        }

        function bw(e, t, n, r, i) {
            var o, a, s = 0;
            do {a = t + (n - t) / 2, o = dr(a, r, i) - e, o > 0 ? n = a : t = a;} while (Math.abs(o) > _w && ++s < Iw);
            return a
        }

        function Aw(e, t, n, r) {
            for (var i = 0; i < yw; ++i) {
                var o = jf(t, n, r);
                if (o === 0) {return t;}
                var a = dr(t, n, r) - e;
                t -= a / o
            }
            return t
        }

        Yf.exports = function (t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) {throw new Error("bezier x values must be in [0, 1] range");}
            var o = Tw ? new Float32Array(gn) : new Array(gn);
            if (t !== n || r !== i) {for (var a = 0; a < gn; ++a) {o[a] = dr(a * fr, t, r);}}

            function s(u) {
                for (var l = 0, y = 1, g = gn - 1; y !== g && o[y] <= u; ++y) {l += fr;}
                --y;
                var p = (u - o[y]) / (o[y + 1] - o[y]), E = l + p * fr, I = jf(E, t, r);
                return I >= mw ? Aw(u, E, t, r) : I === 0 ? E : bw(u, l, l + fr, t, r)
            }

            return function (l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : dr(s(l), n, i)
            }
        }
    });
    var En = {};
    Le(En, {
        bounce: () => aO,
        bouncePast: () => sO,
        ease: () => Sw,
        easeIn: () => ww,
        easeInOut: () => xw,
        easeOut: () => Ow,
        inBack: () => Qw,
        inCirc: () => Kw,
        inCubic: () => Lw,
        inElastic: () => eO,
        inExpo: () => Hw,
        inOutBack: () => Jw,
        inOutCirc: () => Yw,
        inOutCubic: () => Dw,
        inOutElastic: () => nO,
        inOutExpo: () => zw,
        inOutQuad: () => Pw,
        inOutQuart: () => qw,
        inOutQuint: () => Xw,
        inOutSine: () => Bw,
        inQuad: () => Rw,
        inQuart: () => Mw,
        inQuint: () => Gw,
        inSine: () => Vw,
        outBack: () => Zw,
        outBounce: () => $w,
        outCirc: () => jw,
        outCubic: () => Nw,
        outElastic: () => tO,
        outExpo: () => Ww,
        outQuad: () => Cw,
        outQuart: () => Fw,
        outQuint: () => kw,
        outSine: () => Uw,
        swingFrom: () => iO,
        swingFromTo: () => rO,
        swingTo: () => oO
    });

    function Rw(e) {
        return Math.pow(e, 2)
    }

    function Cw(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function Pw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function Lw(e) {
        return Math.pow(e, 3)
    }

    function Nw(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Dw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Mw(e) {
        return Math.pow(e, 4)
    }

    function Fw(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function qw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Gw(e) {
        return Math.pow(e, 5)
    }

    function kw(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Xw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Vw(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Uw(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Bw(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Hw(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Ww(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function zw(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Kw(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function jw(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Yw(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function $w(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Qw(e) {
        let t = rt;
        return e * e * ((t + 1) * e - t)
    }

    function Zw(e) {
        let t = rt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Jw(e) {
        let t = rt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function eO(e) {
        let t = rt, n = 0, r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }

    function tO(e) {
        let t = rt, n = 0, r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }

    function nO(e) {
        let t = rt, n = 0, r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }

    function rO(e) {
        let t = rt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function iO(e) {
        let t = rt;
        return e * e * ((t + 1) * e - t)
    }

    function oO(e) {
        let t = rt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function aO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function sO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }

    var hn, rt, Sw, ww, Ow, xw, ji = he(() => {
        "use strict";
        hn = ce(Ki()), rt = 1.70158, Sw = (0, hn.default)(.25, .1, .25, 1), ww = (0, hn.default)(.42, 0, 1, 1), Ow = (0, hn.default)(0, 0, .58, 1), xw = (0, hn.default)(.42, 0, .58, 1)
    });
    var Qf = {};
    Le(Qf, {applyEasing: () => cO, createBezierEasing: () => uO, optimizeFloat: () => vn});

    function vn(e, t = 5, n = 10) {
        let r = Math.pow(n, t), i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function uO(e) {
        return (0, $f.default)(...e)
    }

    function cO(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : vn(n ? t > 0 ? n(t) : t : t > 0 && e && En[e] ? En[e](t) : t)
    }

    var $f, Yi = he(() => {
        "use strict";
        ji();
        $f = ce(Ki())
    });
    var ed = {};
    Le(ed, {createElementState: () => Jf, ixElements: () => bO, mergeActionState: () => $i});

    function Jf(e, t, n, r, i) {
        let o = n === lO ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Gt.mergeIn)(e, [r], {id: r, ref: t, refId: o, refType: n})
    }

    function $i(e, t, n, r, i) {
        let o = SO(i);
        return (0, Gt.mergeIn)(e, [t, TO, n], r, o)
    }

    function SO(e) {
        let {config: t} = e;
        return AO.reduce((n, r) => {
            let i = r[0], o = r[1], a = t[i], s = t[o];
            return a != null && s != null && (n[o] = s), n
        }, {})
    }

    var Gt, mq, lO, _q, fO, dO, pO, gO, hO, EO, vO, yO, mO, _O, IO, Zf, TO, bO, AO, td = he(() => {
        "use strict";
        Gt = ce(Rt());
        Ne();
        ({
            HTML_ELEMENT: mq,
            PLAIN_OBJECT: lO,
            ABSTRACT_NODE: _q,
            CONFIG_X_VALUE: fO,
            CONFIG_Y_VALUE: dO,
            CONFIG_Z_VALUE: pO,
            CONFIG_VALUE: gO,
            CONFIG_X_UNIT: hO,
            CONFIG_Y_UNIT: EO,
            CONFIG_Z_UNIT: vO,
            CONFIG_UNIT: yO
        } = Ae), {
            IX2_SESSION_STOPPED: mO,
            IX2_INSTANCE_ADDED: _O,
            IX2_ELEMENT_STATE_CHANGED: IO
        } = Ie, Zf = {}, TO = "refState", bO = (e = Zf, t = {}) => {
            switch (t.type) {
                case mO:
                    return Zf;
                case _O: {
                    let {
                        elementId: n,
                        element: r,
                        origin: i,
                        actionItem: o,
                        refType: a
                    } = t.payload, {actionTypeId: s} = o, u = e;
                    return (0, Gt.getIn)(u, [n, r]) !== r && (u = Jf(u, r, a, n, o)), $i(u, n, s, i, o)
                }
                case IO: {
                    let {elementId: n, actionTypeId: r, current: i, actionItem: o} = t.payload;
                    return $i(e, n, r, i, o)
                }
                default:
                    return e
            }
        };
        AO = [[fO, hO], [dO, EO], [pO, vO], [gO, yO]]
    });
    var nd = f(Qi => {
        "use strict";
        Object.defineProperty(Qi, "__esModule", {value: !0});

        function wO(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        wO(Qi, {
            clearPlugin: function () {
                return NO
            }, createPluginInstance: function () {
                return PO
            }, getPluginConfig: function () {
                return OO
            }, getPluginDestination: function () {
                return CO
            }, getPluginDuration: function () {
                return xO
            }, getPluginOrigin: function () {
                return RO
            }, renderPlugin: function () {
                return LO
            }
        });
        var OO = e => e.value, xO = (e, t) => {
            if (t.config.duration !== "auto") {return null;}
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }, RO = e => e || {value: 0}, CO = e => ({value: e.value}), PO = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        }, LO = (e, t, n) => {
            if (!e) {return;}
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }, NO = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    });
    var id = f(Zi => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", {value: !0});

        function DO(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        DO(Zi, {
            clearPlugin: function () {
                return HO
            }, createPluginInstance: function () {
                return UO
            }, getPluginConfig: function () {
                return GO
            }, getPluginDestination: function () {
                return VO
            }, getPluginDuration: function () {
                return kO
            }, getPluginOrigin: function () {
                return XO
            }, renderPlugin: function () {
                return BO
            }
        });
        var MO = e => document.querySelector(`[data-w-id="${e}"]`), FO = () => window.Webflow.require("spline"),
            qO = (e, t) => e.filter(n => !t.includes(n)), GO = (e, t) => e.value[t], kO = () => null,
            rd = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }), XO = (e, t) => {
                let n = t.config.value, r = Object.keys(n);
                if (e) {
                    let o = Object.keys(e), a = qO(r, o);
                    return a.length ? a.reduce((u, l) => (u[l] = rd[l], u), e) : e
                }
                return r.reduce((o, a) => (o[a] = rd[a], o), {})
            }, VO = e => e.value, UO = (e, t) => {
                let n = t?.config?.target?.pluginElement;
                return n ? MO(n) : null
            }, BO = (e, t, n) => {
                let r = FO(), i = r.getInstance(e), o = n.config.target.objectId, a = s => {
                    if (!s) {throw new Error("Invalid spline app passed to renderSpline");}
                    let u = o && s.findObjectById(o);
                    if (!u) {return;}
                    let {PLUGIN_SPLINE: l} = t;
                    l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                };
                i ? a(i.spline) : r.setLoadHandler(e, a)
            }, HO = () => null
    });
    var od = f(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {value: !0});

        function WO(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        WO(to, {
            clearPlugin: function () {
                return ex
            }, createPluginInstance: function () {
                return ZO
            }, getPluginConfig: function () {
                return jO
            }, getPluginDestination: function () {
                return QO
            }, getPluginDuration: function () {
                return YO
            }, getPluginOrigin: function () {
                return $O
            }, renderPlugin: function () {
                return JO
            }
        });
        var Ji = "--wf-rive-fit", eo = "--wf-rive-alignment", zO = e => document.querySelector(`[data-w-id="${e}"]`),
            KO = () => window.Webflow.require("rive"), jO = (e, t) => e.value.inputs[t], YO = () => null,
            $O = (e, t) => {
                if (e) {return e;}
                let n = {}, {inputs: r = {}} = t.config.value;
                for (let i in r) {r[i] == null && (n[i] = 0);}
                return n
            }, QO = e => e.value.inputs ?? {}, ZO = (e, t) => {
                if ((t.config?.target?.selectorGuids || []).length > 0) {return e;}
                let r = t?.config?.target?.pluginElement;
                return r ? zO(r) : null
            }, JO = (e, {PLUGIN_RIVE: t}, n) => {
                let r = KO(), i = r.getInstance(e), o = r.rive.StateMachineInputType, {
                    name: a,
                    inputs: s = {}
                } = n.config.value || {};

                function u(l) {
                    if (l.loaded) {y();} else {
                        let g = () => {
                            y(), l?.off("load", g)
                        };
                        l?.on("load", g)
                    }

                    function y() {
                        let g = l.stateMachineInputs(a);
                        if (g != null) {
                            if (l.isPlaying || l.play(a, !1), Ji in s || eo in s) {
                                let p = l.layout, E = s[Ji] ?? p.fit, I = s[eo] ?? p.alignment;
                                (E !== p.fit || I !== p.alignment) && (l.layout = p.copyWith({fit: E, alignment: I}))
                            }
                            for (let p in s) {
                                if (p === Ji || p === eo) {continue;}
                                let E = g.find(I => I.name === p);
                                if (E != null) {switch (E.type) {
                                    case o.Boolean: {
                                        if (s[p] != null) {
                                            let I = !!s[p];
                                            E.value = I
                                        }
                                        break
                                    }
                                    case o.Number: {
                                        let I = t[p];
                                        I != null && (E.value = I);
                                        break
                                    }
                                    case o.Trigger: {
                                        s[p] && E.fire();
                                        break
                                    }
                                }}
                            }
                        }
                    }
                }

                i?.rive ? u(i.rive) : r.setLoadHandler(e, u)
            }, ex = (e, t) => null
    });
    var ro = f(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {value: !0});
        Object.defineProperty(no, "normalizeColor", {
            enumerable: !0, get: function () {
                return tx
            }
        });
        var ad = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function tx(e) {
            let t, n, r, i = 1, o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof ad[o] == "string" ? ad[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), n = parseInt(u[1] + u[1], 16), r = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), n = parseInt(u.substring(2, 4), 16), r = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100, g = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * g - 1)) * y, E = p * (1 - Math.abs(l / 60 % 2 - 1)), I = g - p / 2, _, A, m;
                l >= 0 && l < 60 ? (_ = p, A = E, m = 0) : l >= 60 && l < 120 ? (_ = E, A = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, A = p, m = E) : l >= 180 && l < 240 ? (_ = 0, A = E, m = p) : l >= 240 && l < 300 ? (_ = E, A = 0, m = p) : (_ = p, A = 0, m = E), t = Math.round((_ + I) * 255), n = Math.round((A + I) * 255), r = Math.round((m + I) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100, g = parseFloat(u[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * g - 1)) * y, E = p * (1 - Math.abs(l / 60 % 2 - 1)), I = g - p / 2, _, A, m;
                l >= 0 && l < 60 ? (_ = p, A = E, m = 0) : l >= 60 && l < 120 ? (_ = E, A = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, A = p, m = E) : l >= 180 && l < 240 ? (_ = 0, A = E, m = p) : l >= 240 && l < 300 ? (_ = E, A = 0, m = p) : (_ = p, A = 0, m = E), t = Math.round((_ + I) * 255), n = Math.round((A + I) * 255), r = Math.round((m + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r)) {throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);}
            return {red: t, green: n, blue: r, alpha: i}
        }
    });
    var sd = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {value: !0});

        function nx(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        nx(io, {
            clearPlugin: function () {
                return fx
            }, createPluginInstance: function () {
                return ux
            }, getPluginConfig: function () {
                return ix
            }, getPluginDestination: function () {
                return sx
            }, getPluginDuration: function () {
                return ox
            }, getPluginOrigin: function () {
                return ax
            }, renderPlugin: function () {
                return lx
            }
        });
        var rx = ro(), ix = (e, t) => e.value[t], ox = () => null, ax = (e, t) => {
            if (e) {return e;}
            let n = t.config.value, r = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null) {return {size: parseInt(i, 10)};}
            if (n.unit === "%" || n.unit === "-") {return {size: parseFloat(i)};}
            if (n.red != null && n.green != null && n.blue != null) {return (0, rx.normalizeColor)(i)}
        }, sx = e => e.value, ux = () => null, cx = {
            color: {
                match: ({red: e, green: t, blue: n, alpha: r}) => [e, t, n, r].every(i => i != null),
                getValue: ({red: e, green: t, blue: n, alpha: r}) => `rgba(${e}, ${t}, ${n}, ${r})`
            }, size: {
                match: ({size: e}) => e != null, getValue: ({size: e}, t) => {
                    switch (t) {
                        case "-":
                            return e;
                        default:
                            return `${e}${t}`
                    }
                }
            }
        }, lx = (e, t, n) => {
            let {target: {objectId: r}, value: {unit: i}} = n.config, o = t.PLUGIN_VARIABLE,
                a = Object.values(cx).find(s => s.match(o, i));
            a && document.documentElement.style.setProperty(r, a.getValue(o, i))
        }, fx = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    });
    var cd = f(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {value: !0});
        Object.defineProperty(oo, "pluginMethodMap", {
            enumerable: !0, get: function () {
                return Ex
            }
        });
        var pr = (Ne(), je(ds)), dx = gr(nd()), px = gr(id()), gx = gr(od()), hx = gr(sd());

        function ud(e) {
            if (typeof WeakMap != "function") {return null;}
            var t = new WeakMap, n = new WeakMap;
            return (ud = function (r) {
                return r ? n : t
            })(e)
        }

        function gr(e, t) {
            if (!t && e && e.__esModule) {return e;}
            if (e === null || typeof e != "object" && typeof e != "function") {return {default: e};}
            var n = ud(t);
            if (n && n.has(e)) {return n.get(e);}
            var r = {__proto__: null}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
            }}
            return r.default = e, n && n.set(e, r), r
        }

        var Ex = new Map([[pr.ActionTypeConsts.PLUGIN_LOTTIE, {...dx}], [pr.ActionTypeConsts.PLUGIN_SPLINE, {...px}], [pr.ActionTypeConsts.PLUGIN_RIVE, {...gx}], [pr.ActionTypeConsts.PLUGIN_VARIABLE, {...hx}]])
    });
    var ld = {};
    Le(ld, {
        clearPlugin: () => fo,
        createPluginInstance: () => yx,
        getPluginConfig: () => so,
        getPluginDestination: () => co,
        getPluginDuration: () => vx,
        getPluginOrigin: () => uo,
        isPluginType: () => mt,
        renderPlugin: () => lo
    });

    function mt(e) {
        return ao.pluginMethodMap.has(e)
    }

    var ao, _t, so, uo, vx, co, yx, lo, fo, po = he(() => {
        "use strict";
        lr();
        ao = ce(cd());
        _t = e => t => {
            if (!We) {return () => null;}
            let n = ao.pluginMethodMap.get(t);
            if (!n) {throw new Error(`IX2 no plugin configured for: ${t}`);}
            let r = n[e];
            if (!r) {throw new Error(`IX2 invalid plugin method: ${e}`);}
            return r
        }, so = _t("getPluginConfig"), uo = _t("getPluginOrigin"), vx = _t("getPluginDuration"), co = _t("getPluginDestination"), yx = _t("createPluginInstance"), lo = _t("renderPlugin"), fo = _t("clearPlugin")
    });
    var dd = f((xq, fd) => {
        function mx(e, t) {
            return e == null || e !== e ? t : e
        }

        fd.exports = mx
    });
    var gd = f((Rq, pd) => {
        function _x(e, t, n, r) {
            var i = -1, o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o;) {n = t(n, e[i], i, e);}
            return n
        }

        pd.exports = _x
    });
    var Ed = f((Cq, hd) => {
        function Ix(e) {
            return function (t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (n(o[u], u, o) === !1) {break}
                }
                return t
            }
        }

        hd.exports = Ix
    });
    var yd = f((Pq, vd) => {
        var Tx = Ed(), bx = Tx();
        vd.exports = bx
    });
    var go = f((Lq, md) => {
        var Ax = yd(), Sx = fn();

        function wx(e, t) {
            return e && Ax(e, t, Sx)
        }

        md.exports = wx
    });
    var Id = f((Nq, _d) => {
        var Ox = vt();

        function xx(e, t) {
            return function (n, r) {
                if (n == null) {return n;}
                if (!Ox(n)) {return e(n, r);}
                for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;) {;}
                return n
            }
        }

        _d.exports = xx
    });
    var ho = f((Dq, Td) => {
        var Rx = go(), Cx = Id(), Px = Cx(Rx);
        Td.exports = Px
    });
    var Ad = f((Mq, bd) => {
        function Lx(e, t, n, r, i) {
            return i(e, function (o, a, s) {
                n = r ? (r = !1, o) : t(n, o, a, s)
            }), n
        }

        bd.exports = Lx
    });
    var wd = f((Fq, Sd) => {
        var Nx = gd(), Dx = ho(), Mx = ft(), Fx = Ad(), qx = Te();

        function Gx(e, t, n) {
            var r = qx(e) ? Nx : Fx, i = arguments.length < 3;
            return r(e, Mx(t, 4), n, i, Dx)
        }

        Sd.exports = Gx
    });
    var xd = f((qq, Od) => {
        var kx = Bi(), Xx = ft(), Vx = Hi(), Ux = Math.max, Bx = Math.min;

        function Hx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) {return -1;}
            var i = r - 1;
            return n !== void 0 && (i = Vx(n), i = n < 0 ? Ux(r + i, 0) : Bx(i, r - 1)), kx(e, Xx(t, 3), i, !0)
        }

        Od.exports = Hx
    });
    var Cd = f((Gq, Rd) => {
        var Wx = Ui(), zx = xd(), Kx = Wx(zx);
        Rd.exports = Kx
    });

    function Pd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function jx(e, t) {
        if (Pd(e, t)) {return !0;}
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) {return !1;}
        let n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) {return !1;}
        for (let i = 0; i < n.length; i++) {if (!Object.hasOwn(t, n[i]) || !Pd(e[n[i]], t[n[i]])) {return !1;}}
        return !0
    }

    var Eo, Ld = he(() => {
        "use strict";
        Eo = jx
    });
    var $d = {};
    Le($d, {
        cleanupHTMLElement: () => WR,
        clearAllStyles: () => HR,
        clearObjectCache: () => fR,
        getActionListProgress: () => KR,
        getAffectedElements: () => Io,
        getComputedStyle: () => mR,
        getDestinationValues: () => wR,
        getElementId: () => hR,
        getInstanceId: () => pR,
        getInstanceOrigin: () => TR,
        getItemConfigByKey: () => SR,
        getMaxDurationItemIndex: () => Yd,
        getNamespacedParameterId: () => $R,
        getRenderType: () => zd,
        getStyleProp: () => OR,
        mediaQueriesEqual: () => ZR,
        observeStore: () => yR,
        reduceListToGroup: () => jR,
        reifyState: () => ER,
        renderHTMLElement: () => xR,
        shallowEqual: () => Eo,
        shouldAllowMediaQuery: () => QR,
        shouldNamespaceEventParameter: () => YR,
        stringifyTarget: () => JR
    });

    function fR() {
        hr.clear()
    }

    function pR() {
        return "i" + dR++
    }

    function hR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t) {return r.id}
        }
        return "e" + gR++
    }

    function ER({events: e, actionLists: t, site: n} = {}) {
        let r = (0, mr.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}), a[u][s.id] = s, a
        }, {}), i = n && n.mediaQueries, o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function yR({store: e, select: t, onChange: n, comparator: r = vR}) {
        let {getState: i, subscribe: o} = e, a = o(u), s = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            r(l, s) || (s = l, n(s, e))
        }

        return a
    }

    function Md(e) {
        let t = typeof e;
        if (t === "string") {return {id: e};}
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s}
        }
        return {}
    }

    function Io({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i}) {
        if (!i) {throw new Error("IX2 missing elementApi");}
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0) {return o.reduce((w, h) => w.concat(Io({
            config: {target: h},
            event: t,
            eventTarget: n,
            elementRoot: r,
            elementApi: i
        })), []);}
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: y,
            matchSelector: g,
            elementContains: p,
            isSiblingNode: E
        } = i, {target: I} = e;
        if (!I) {return [];}
        let {id: _, objectId: A, selector: m, selectorGuids: x, appliesTo: S, useEventTarget: D} = Md(I);
        if (A) {return [hr.has(A) ? hr.get(A) : hr.set(A, {}).get(A)];}
        if (S === gi.PAGE) {
            let w = a(_);
            return w ? [w] : []
        }
        let L = (t?.action?.config?.affectedElements ?? {})[_ || m] || {}, B = !!(L.id || L.selector), H, W, K,
            k = t && s(Md(t.target));
        if (B ? (H = L.limitAffectedElements, W = k, K = s(L)) : W = K = s({
            id: _,
            selector: m,
            selectorGuids: x
        }), t && D) {
            let w = n && (K || D === !0) ? [n] : u(k);
            if (K) {
                if (D === uR) {return u(K).filter(h => w.some(R => p(h, R)));}
                if (D === Nd) {return u(K).filter(h => w.some(R => p(R, h)));}
                if (D === Dd) {return u(K).filter(h => w.some(R => E(R, h)))}
            }
            return w
        }
        return W == null || K == null ? [] : We && r ? u(K).filter(w => r.contains(w)) : H === Nd ? u(W, K) : H === sR ? l(u(W)).filter(g(K)) : H === Dd ? y(u(W)).filter(g(K)) : u(K)
    }

    function mR({element: e, actionItem: t}) {
        if (!We) {return {};}
        let {actionTypeId: n} = t;
        switch (n) {
            case Bt:
            case Ht:
            case Wt:
            case zt:
            case Ir:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function TR(e, t = {}, n = {}, r, i) {
        let {getStyle: o} = i, {actionTypeId: a} = r;
        if (mt(a)) {return uo(a)(t[a], r);}
        switch (r.actionTypeId) {
            case Xt:
            case Vt:
            case Ut:
            case In:
                return t[r.actionTypeId] || To[r.actionTypeId];
            case Tn:
                return _R(t[r.actionTypeId], r.config.filters);
            case bn:
                return IR(t[r.actionTypeId], r.config.fontVariations);
            case Bd:
                return {value: (0, it.default)(parseFloat(o(e, vr)), 1)};
            case Bt: {
                let s = o(e, Je), u = o(e, et), l, y;
                return r.config.widthUnit === pt ? l = Fd.test(s) ? parseFloat(s) : parseFloat(n.width) : l = (0, it.default)(parseFloat(s), parseFloat(n.width)), r.config.heightUnit === pt ? y = Fd.test(u) ? parseFloat(u) : parseFloat(n.height) : y = (0, it.default)(parseFloat(u), parseFloat(n.height)), {
                    widthValue: l,
                    heightValue: y
                }
            }
            case Ht:
            case Wt:
            case zt:
                return VR({element: e, actionTypeId: r.actionTypeId, computedStyle: n, getStyle: o});
            case Ir:
                return {value: (0, it.default)(o(e, yr), n.display)};
            case lR:
                return t[r.actionTypeId] || {value: 0};
            default:
                return
        }
    }

    function wR({element: e, actionItem: t, elementApi: n}) {
        if (mt(t.actionTypeId)) {return co(t.actionTypeId)(t.config);}
        switch (t.actionTypeId) {
            case Xt:
            case Vt:
            case Ut:
            case In: {
                let {xValue: r, yValue: i, zValue: o} = t.config;
                return {xValue: r, yValue: i, zValue: o}
            }
            case Bt: {
                let {getStyle: r, setStyle: i, getProperty: o} = n, {
                    widthUnit: a,
                    heightUnit: s
                } = t.config, {widthValue: u, heightValue: l} = t.config;
                if (!We) {return {widthValue: u, heightValue: l};}
                if (a === pt) {
                    let y = r(e, Je);
                    i(e, Je, ""), u = o(e, "offsetWidth"), i(e, Je, y)
                }
                if (s === pt) {
                    let y = r(e, et);
                    i(e, et, ""), l = o(e, "offsetHeight"), i(e, et, y)
                }
                return {widthValue: u, heightValue: l}
            }
            case Ht:
            case Wt:
            case zt: {
                let {rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = n, l = u(e, s), y = (0, kd.normalizeColor)(l);
                    return {rValue: y.red, gValue: y.green, bValue: y.blue, aValue: y.alpha}
                }
                return {rValue: r, gValue: i, bValue: o, aValue: a}
            }
            case Tn:
                return t.config.filters.reduce(bR, {});
            case bn:
                return t.config.fontVariations.reduce(AR, {});
            default: {
                let {value: r} = t.config;
                return {value: r}
            }
        }
    }

    function zd(e) {
        if (/^TRANSFORM_/.test(e)) {return Vd;}
        if (/^STYLE_/.test(e)) {return mo;}
        if (/^GENERAL_/.test(e)) {return yo;}
        if (/^PLUGIN_/.test(e)) {return Ud}
    }

    function OR(e, t) {
        return e === mo ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function xR(e, t, n, r, i, o, a, s, u) {
        switch (s) {
            case Vd:
                return NR(e, t, n, i, a);
            case mo:
                return UR(e, t, n, i, o, a);
            case yo:
                return BR(e, i, a);
            case Ud: {
                let {actionTypeId: l} = i;
                if (mt(l)) {return lo(l)(u, t, i)}
            }
        }
    }

    function NR(e, t, n, r, i) {
        let o = LR.map(s => {
            let u = To[s], {
                xValue: l = u.xValue,
                yValue: y = u.yValue,
                zValue: g = u.zValue,
                xUnit: p = "",
                yUnit: E = "",
                zUnit: I = ""
            } = t[s] || {};
            switch (s) {
                case Xt:
                    return `${Qx}(${l}${p}, ${y}${E}, ${g}${I})`;
                case Vt:
                    return `${Zx}(${l}${p}, ${y}${E}, ${g}${I})`;
                case Ut:
                    return `${Jx}(${l}${p}) ${eR}(${y}${E}) ${tR}(${g}${I})`;
                case In:
                    return `${nR}(${l}${p}, ${y}${E})`;
                default:
                    return ""
            }
        }).join(" "), {setStyle: a} = i;
        It(e, dt, i), a(e, dt, o), FR(r, n) && a(e, cr, rR)
    }

    function DR(e, t, n, r) {
        let i = (0, mr.default)(t, (a, s, u) => `${a} ${u}(${s}${PR(u, n)})`, ""), {setStyle: o} = r;
        It(e, yn, r), o(e, yn, i)
    }

    function MR(e, t, n, r) {
        let i = (0, mr.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "), {setStyle: o} = r;
        It(e, mn, r), o(e, mn, i)
    }

    function FR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Xt && r !== void 0 || e === Vt && r !== void 0 || e === Ut && (t !== void 0 || n !== void 0)
    }

    function XR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }

    function VR({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let i = _o[t], o = r(e, i), a = GR.test(o) ? o : n[i], s = XR(kR, a).split(_n);
        return {
            rValue: (0, it.default)(parseInt(s[0], 10), 255),
            gValue: (0, it.default)(parseInt(s[1], 10), 255),
            bValue: (0, it.default)(parseInt(s[2], 10), 255),
            aValue: (0, it.default)(parseFloat(s[3]), 1)
        }
    }

    function UR(e, t, n, r, i, o) {
        let {setStyle: a} = o;
        switch (r.actionTypeId) {
            case Bt: {
                let {widthUnit: s = "", heightUnit: u = ""} = r.config, {widthValue: l, heightValue: y} = n;
                l !== void 0 && (s === pt && (s = "px"), It(e, Je, o), a(e, Je, l + s)), y !== void 0 && (u === pt && (u = "px"), It(e, et, o), a(e, et, y + u));
                break
            }
            case Tn: {
                DR(e, n, r.config, o);
                break
            }
            case bn: {
                MR(e, n, r.config, o);
                break
            }
            case Ht:
            case Wt:
            case zt: {
                let s = _o[r.actionTypeId], u = Math.round(n.rValue), l = Math.round(n.gValue),
                    y = Math.round(n.bValue), g = n.aValue;
                It(e, s, o), a(e, s, g >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${g})`);
                break
            }
            default: {
                let {unit: s = ""} = r.config;
                It(e, i, o), a(e, i, n.value + s);
                break
            }
        }
    }

    function BR(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
            case Ir: {
                let {value: i} = t.config;
                i === iR && We ? r(e, yr, zi) : r(e, yr, i);
                return
            }
        }
    }

    function It(e, t, n) {
        if (!We) {return;}
        let r = Wd[t];
        if (!r) {return;}
        let {getStyle: i, setStyle: o} = n, a = i(e, kt);
        if (!a) {
            o(e, kt, r);
            return
        }
        let s = a.split(_n).map(Hd);
        s.indexOf(r) === -1 && o(e, kt, s.concat(r).join(_n))
    }

    function Kd(e, t, n) {
        if (!We) {return;}
        let r = Wd[t];
        if (!r) {return;}
        let {getStyle: i, setStyle: o} = n, a = i(e, kt);
        !a || a.indexOf(r) === -1 || o(e, kt, a.split(_n).map(Hd).filter(s => s !== r).join(_n))
    }

    function HR({store: e, elementApi: t}) {
        let {ixData: n} = e.getState(), {events: r = {}, actionLists: i = {}} = n;
        Object.keys(r).forEach(o => {
            let a = r[o], {config: s} = a.action, {actionListId: u} = s, l = i[u];
            l && qd({actionList: l, event: a, elementApi: t})
        }), Object.keys(i).forEach(o => {
            qd({actionList: i[o], elementApi: t})
        })
    }

    function qd({actionList: e = {}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e;
        r && r.forEach(o => {
            Gd({actionGroup: o, event: t, elementApi: n})
        }), i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                Gd({actionGroup: s, event: t, elementApi: n})
            })
        })
    }

    function Gd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            mt(o) ? s = u => fo(o)(u, i) : s = jd({effect: zR, actionTypeId: o, elementApi: n}), Io({
                config: a,
                event: t,
                elementApi: n
            }).forEach(s)
        })
    }

    function WR(e, t, n) {
        let {setStyle: r, getStyle: i} = n, {actionTypeId: o} = t;
        if (o === Bt) {
            let {config: a} = t;
            a.widthUnit === pt && r(e, Je, ""), a.heightUnit === pt && r(e, et, "")
        }
        i(e, kt) && jd({effect: Kd, actionTypeId: o, elementApi: n})(e)
    }

    function zR(e, t, n) {
        let {setStyle: r} = n;
        Kd(e, t, n), r(e, t, ""), t === dt && r(e, cr, "")
    }

    function Yd(e) {
        let t = 0, n = 0;
        return e.forEach((r, i) => {
            let {config: o} = r, a = o.delay + o.duration;
            a >= t && (t = a, n = i)
        }), n
    }

    function KR(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e, {actionItem: i, verboseTimeElapsed: o = 0} = t,
            a = 0, s = 0;
        return n.forEach((u, l) => {
            if (r && l === 0) {return;}
            let {actionItems: y} = u, g = y[Yd(y)], {config: p, actionTypeId: E} = g;
            i.id === g.id && (s = a + o);
            let I = zd(E) === yo ? 0 : p.duration;
            a += p.delay + I
        }), a > 0 ? vn(s / a) : 0
    }

    function jR({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e, o = [],
            a = s => (o.push((0, _r.mergeIn)(s, ["config"], {delay: 0, duration: 0})), s.id === t);
        return r && r.some(({actionItems: s}) => s.some(a)), i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some(({actionItems: l}) => l.some(a))
        }), (0, _r.setIn)(n, ["actionLists"], {[e.id]: {id: e.id, actionItemGroups: [{actionItems: o}]}})
    }

    function YR(e, {basedOn: t}) {
        return e === He.SCROLLING_IN_VIEW && (t === Qe.ELEMENT || t == null) || e === He.MOUSE_MOVE && t === Qe.ELEMENT
    }

    function $R(e, t) {
        return e + cR + t
    }

    function QR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function ZR(e, t) {
        return Eo(e && e.sort(), t && t.sort())
    }

    function JR(e) {
        if (typeof e == "string") {return e;}
        if (e.pluginElement && e.objectId) {return e.pluginElement + vo + e.objectId;}
        if (e.objectId) {return e.objectId;}
        let {id: t = "", selector: n = "", useEventTarget: r = ""} = e;
        return t + vo + n + vo + r
    }

    var it, mr, Er, _r, kd, Yx, $x, Qx, Zx, Jx, eR, tR, nR, rR, iR, vr, yn, mn, Je, et, Xd, oR, aR, Nd, sR, Dd, uR, yr,
        kt, pt, _n, cR, vo, Vd, yo, mo, Ud, Xt, Vt, Ut, In, Bd, Tn, bn, Bt, Ht, Wt, zt, Ir, lR, Hd, _o, Wd, hr, dR, gR,
        vR, Fd, _R, IR, bR, AR, SR, To, RR, CR, PR, LR, qR, GR, kR, jd, Qd = he(() => {
            "use strict";
            it = ce(dd()), mr = ce(wd()), Er = ce(Cd()), _r = ce(Rt());
            Ne();
            Ld();
            Yi();
            kd = ce(ro());
            po();
            lr();
            ({
                BACKGROUND: Yx,
                TRANSFORM: $x,
                TRANSLATE_3D: Qx,
                SCALE_3D: Zx,
                ROTATE_X: Jx,
                ROTATE_Y: eR,
                ROTATE_Z: tR,
                SKEW: nR,
                PRESERVE_3D: rR,
                FLEX: iR,
                OPACITY: vr,
                FILTER: yn,
                FONT_VARIATION_SETTINGS: mn,
                WIDTH: Je,
                HEIGHT: et,
                BACKGROUND_COLOR: Xd,
                BORDER_COLOR: oR,
                COLOR: aR,
                CHILDREN: Nd,
                IMMEDIATE_CHILDREN: sR,
                SIBLINGS: Dd,
                PARENT: uR,
                DISPLAY: yr,
                WILL_CHANGE: kt,
                AUTO: pt,
                COMMA_DELIMITER: _n,
                COLON_DELIMITER: cR,
                BAR_DELIMITER: vo,
                RENDER_TRANSFORM: Vd,
                RENDER_GENERAL: yo,
                RENDER_STYLE: mo,
                RENDER_PLUGIN: Ud
            } = Ae), {
                TRANSFORM_MOVE: Xt,
                TRANSFORM_SCALE: Vt,
                TRANSFORM_ROTATE: Ut,
                TRANSFORM_SKEW: In,
                STYLE_OPACITY: Bd,
                STYLE_FILTER: Tn,
                STYLE_FONT_VARIATION: bn,
                STYLE_SIZE: Bt,
                STYLE_BACKGROUND_COLOR: Ht,
                STYLE_BORDER: Wt,
                STYLE_TEXT_COLOR: zt,
                GENERAL_DISPLAY: Ir,
                OBJECT_VALUE: lR
            } = xe, Hd = e => e.trim(), _o = Object.freeze({[Ht]: Xd, [Wt]: oR, [zt]: aR}), Wd = Object.freeze({
                [dt]: $x,
                [Xd]: Yx,
                [vr]: vr,
                [yn]: yn,
                [Je]: Je,
                [et]: et,
                [mn]: mn
            }), hr = new Map;
            dR = 1;
            gR = 1;
            vR = (e, t) => e === t;
            Fd = /px/, _R = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = RR[r.type]), n), e || {}), IR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = CR[r.type] || r.defaultValue || 0), n), e || {});
            bR = (e, t) => (t && (e[t.type] = t.value || 0), e), AR = (e, t) => (t && (e[t.type] = t.value || 0), e), SR = (e, t, n) => {
                if (mt(e)) {return so(e)(n, t);}
                switch (e) {
                    case Tn: {
                        let r = (0, Er.default)(n.filters, ({type: i}) => i === t);
                        return r ? r.value : 0
                    }
                    case bn: {
                        let r = (0, Er.default)(n.fontVariations, ({type: i}) => i === t);
                        return r ? r.value : 0
                    }
                    default:
                        return n[t]
                }
            };
            To = {
                [Xt]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}),
                [Vt]: Object.freeze({xValue: 1, yValue: 1, zValue: 1}),
                [Ut]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}),
                [In]: Object.freeze({xValue: 0, yValue: 0})
            }, RR = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }), CR = Object.freeze({wght: 0, opsz: 0, wdth: 0, slnt: 0}), PR = (e, t) => {
                let n = (0, Er.default)(t.filters, ({type: r}) => r === e);
                if (n && n.unit) {return n.unit;}
                switch (e) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            }, LR = Object.keys(To);
            qR = "\\(([^)]+)\\)", GR = /^rgb/, kR = RegExp(`rgba?${qR}`);
            jd = ({effect: e, actionTypeId: t, elementApi: n}) => r => {
                switch (t) {
                    case Xt:
                    case Vt:
                    case Ut:
                    case In:
                        e(r, dt, n);
                        break;
                    case Tn:
                        e(r, yn, n);
                        break;
                    case bn:
                        e(r, mn, n);
                        break;
                    case Bd:
                        e(r, vr, n);
                        break;
                    case Bt:
                        e(r, Je, n), e(r, et, n);
                        break;
                    case Ht:
                    case Wt:
                    case zt:
                        e(r, _o[t], n);
                        break;
                    case Ir:
                        e(r, yr, n);
                        break
                }
            }
        });
    var Tt = f(bo => {
        "use strict";
        Object.defineProperty(bo, "__esModule", {value: !0});

        function eC(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        eC(bo, {
            IX2BrowserSupport: function () {
                return tC
            }, IX2EasingUtils: function () {
                return rC
            }, IX2Easings: function () {
                return nC
            }, IX2ElementsReducer: function () {
                return iC
            }, IX2VanillaPlugins: function () {
                return oC
            }, IX2VanillaUtils: function () {
                return aC
            }
        });
        var tC = Kt((lr(), je(Hf))), nC = Kt((ji(), je(En))), rC = Kt((Yi(), je(Qf))), iC = Kt((td(), je(ed))),
            oC = Kt((po(), je(ld))), aC = Kt((Qd(), je($d)));

        function Zd(e) {
            if (typeof WeakMap != "function") {return null;}
            var t = new WeakMap, n = new WeakMap;
            return (Zd = function (r) {
                return r ? n : t
            })(e)
        }

        function Kt(e, t) {
            if (!t && e && e.__esModule) {return e;}
            if (e === null || typeof e != "object" && typeof e != "function") {return {default: e};}
            var n = Zd(t);
            if (n && n.has(e)) {return n.get(e);}
            var r = {__proto__: null}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
            }}
            return r.default = e, n && n.set(e, r), r
        }
    });
    var br, ot, sC, uC, cC, lC, fC, dC, Tr, Jd, pC, gC, Ao, hC, EC, vC, yC, ep, tp = he(() => {
        "use strict";
        Ne();
        br = ce(Tt()), ot = ce(Rt()), {
            IX2_RAW_DATA_IMPORTED: sC,
            IX2_SESSION_STOPPED: uC,
            IX2_INSTANCE_ADDED: cC,
            IX2_INSTANCE_STARTED: lC,
            IX2_INSTANCE_REMOVED: fC,
            IX2_ANIMATION_FRAME_CHANGED: dC
        } = Ie, {
            optimizeFloat: Tr,
            applyEasing: Jd,
            createBezierEasing: pC
        } = br.IX2EasingUtils, {RENDER_GENERAL: gC} = Ae, {
            getItemConfigByKey: Ao,
            getRenderType: hC,
            getStyleProp: EC
        } = br.IX2VanillaUtils, vC = (e, t) => {
            let {
                position: n,
                parameterId: r,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: y,
                skipToValue: g
            } = e, {parameters: p} = t.payload, E = Math.max(1 - a, .01), I = p[r];
            I == null && (E = 1, I = s);
            let _ = Math.max(I, 0) || 0, A = Tr(_ - n), m = y ? g : Tr(n + A * E), x = m * 100;
            if (m === n && e.current) {return e;}
            let S, D, q, L;
            for (let H = 0, {length: W} = i; H < W; H++) {
                let {keyframe: K, actionItems: k} = i[H];
                if (H === 0 && (S = k[0]), x >= K) {
                    S = k[0];
                    let w = i[H + 1], h = w && x !== K;
                    D = h ? w.actionItems[0] : null, h && (q = K / 100, L = (w.keyframe - K) / 100)
                }
            }
            let B = {};
            if (S && !D) {for (let H = 0, {length: W} = o; H < W; H++) {
                let K = o[H];
                B[K] = Ao(u, K, S.config)
            }} else if (S && D && q !== void 0 && L !== void 0) {
                let H = (m - q) / L, W = S.config.easing, K = Jd(W, H, l);
                for (let k = 0, {length: w} = o; k < w; k++) {
                    let h = o[k], R = Ao(u, h, S.config), $ = (Ao(u, h, D.config) - R) * K + R;
                    B[h] = $
                }
            }
            return (0, ot.merge)(e, {position: m, current: B})
        }, yC = (e, t) => {
            let {
                active: n,
                origin: r,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: l,
                destinationKeys: y,
                pluginDuration: g,
                instanceDelay: p,
                customEasingFn: E,
                skipMotion: I
            } = e, _ = u.config.easing, {duration: A, delay: m} = u.config;
            g != null && (A = g), m = p ?? m, a === gC ? A = 0 : (o || I) && (A = m = 0);
            let {now: x} = t.payload;
            if (n && r) {
                let S = x - (i + m);
                if (s) {
                    let H = x - i, W = A + m, K = Tr(Math.min(Math.max(0, H / W), 1));
                    e = (0, ot.set)(e, "verboseTimeElapsed", W * K)
                }
                if (S < 0) {return e;}
                let D = Tr(Math.min(Math.max(0, S / A), 1)), q = Jd(_, D, E), L = {}, B = null;
                return y.length && (B = y.reduce((H, W) => {
                    let K = l[W], k = parseFloat(r[W]) || 0, h = (parseFloat(K) - k) * q + k;
                    return H[W] = h, H
                }, {})), L.current = B, L.position = D, D === 1 && (L.active = !1, L.complete = !0), (0, ot.merge)(e, L)
            }
            return e
        }, ep = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case sC:
                    return t.payload.ixInstances || Object.freeze({});
                case uC:
                    return Object.freeze({});
                case cC: {
                    let {
                            instanceId: n,
                            elementId: r,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: y,
                            origin: g,
                            destination: p,
                            immediate: E,
                            verbose: I,
                            continuous: _,
                            parameterId: A,
                            actionGroups: m,
                            smoothing: x,
                            restingValue: S,
                            pluginInstance: D,
                            pluginDuration: q,
                            instanceDelay: L,
                            skipMotion: B,
                            skipToValue: H
                        } = t.payload, {actionTypeId: W} = i, K = hC(W), k = EC(K, W),
                        w = Object.keys(p).filter(R => p[R] != null && typeof p[R] != "string"), {easing: h} = i.config;
                    return (0, ot.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: g,
                        destination: p,
                        destinationKeys: w,
                        immediate: E,
                        verbose: I,
                        current: null,
                        actionItem: i,
                        actionTypeId: W,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: K,
                        isCarrier: y,
                        styleProp: k,
                        continuous: _,
                        parameterId: A,
                        actionGroups: m,
                        smoothing: x,
                        restingValue: S,
                        pluginInstance: D,
                        pluginDuration: q,
                        instanceDelay: L,
                        skipMotion: B,
                        skipToValue: H,
                        customEasingFn: Array.isArray(h) && h.length === 4 ? pC(h) : void 0
                    })
                }
                case lC: {
                    let {instanceId: n, time: r} = t.payload;
                    return (0, ot.mergeIn)(e, [n], {active: !0, complete: !1, start: r})
                }
                case fC: {
                    let {instanceId: n} = t.payload;
                    if (!e[n]) {return e;}
                    let r = {}, i = Object.keys(e), {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== n && (r[s] = e[s])
                    }
                    return r
                }
                case dC: {
                    let n = e, r = Object.keys(e), {length: i} = r;
                    for (let o = 0; o < i; o++) {
                        let a = r[o], s = e[a], u = s.continuous ? vC : yC;
                        n = (0, ot.set)(n, a, u(s, t))
                    }
                    return n
                }
                default:
                    return e
            }
        }
    });
    var mC, _C, IC, np, rp = he(() => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: mC, IX2_SESSION_STOPPED: _C, IX2_PARAMETER_CHANGED: IC} = Ie), np = (e = {}, t) => {
            switch (t.type) {
                case mC:
                    return t.payload.ixParameters || {};
                case _C:
                    return {};
                case IC: {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r, e
                }
                default:
                    return e
            }
        }
    });
    var ap = {};
    Le(ap, {default: () => bC});
    var ip, op, TC, bC, sp = he(() => {
        "use strict";
        ip = ce(pi());
        gs();
        Ms();
        Gs();
        op = ce(Tt());
        tp();
        rp();
        ({ixElements: TC} = op.IX2ElementsReducer), bC = (0, ip.combineReducers)({
            ixData: ps,
            ixRequest: Ds,
            ixSession: qs,
            ixElements: TC,
            ixInstances: ep,
            ixParameters: np
        })
    });
    var cp = f((nG, up) => {
        var AC = ct(), SC = Te(), wC = nt(), OC = "[object String]";

        function xC(e) {
            return typeof e == "string" || !SC(e) && wC(e) && AC(e) == OC
        }

        up.exports = xC
    });
    var fp = f((rG, lp) => {
        var RC = Vi(), CC = RC("length");
        lp.exports = CC
    });
    var pp = f((iG, dp) => {
        var PC = "\\ud800-\\udfff", LC = "\\u0300-\\u036f", NC = "\\ufe20-\\ufe2f", DC = "\\u20d0-\\u20ff",
            MC = LC + NC + DC, FC = "\\ufe0e\\ufe0f", qC = "\\u200d", GC = RegExp("[" + qC + PC + MC + FC + "]");

        function kC(e) {
            return GC.test(e)
        }

        dp.exports = kC
    });
    var Tp = f((oG, Ip) => {
        var hp = "\\ud800-\\udfff", XC = "\\u0300-\\u036f", VC = "\\ufe20-\\ufe2f", UC = "\\u20d0-\\u20ff",
            BC = XC + VC + UC, HC = "\\ufe0e\\ufe0f", WC = "[" + hp + "]", So = "[" + BC + "]",
            wo = "\\ud83c[\\udffb-\\udfff]", zC = "(?:" + So + "|" + wo + ")", Ep = "[^" + hp + "]",
            vp = "(?:\\ud83c[\\udde6-\\uddff]){2}", yp = "[\\ud800-\\udbff][\\udc00-\\udfff]", KC = "\\u200d",
            mp = zC + "?", _p = "[" + HC + "]?",
            jC = "(?:" + KC + "(?:" + [Ep, vp, yp].join("|") + ")" + _p + mp + ")*", YC = _p + mp + jC,
            $C = "(?:" + [Ep + So + "?", So, vp, yp, WC].join("|") + ")",
            gp = RegExp(wo + "(?=" + wo + ")|" + $C + YC, "g");

        function QC(e) {
            for (var t = gp.lastIndex = 0; gp.test(e);) {++t;}
            return t
        }

        Ip.exports = QC
    });
    var Ap = f((aG, bp) => {
        var ZC = fp(), JC = pp(), eP = Tp();

        function tP(e) {
            return JC(e) ? eP(e) : ZC(e)
        }

        bp.exports = tP
    });
    var wp = f((sG, Sp) => {
        var nP = er(), rP = tr(), iP = vt(), oP = cp(), aP = Ap(), sP = "[object Map]", uP = "[object Set]";

        function cP(e) {
            if (e == null) {return 0;}
            if (iP(e)) {return oP(e) ? aP(e) : e.length;}
            var t = rP(e);
            return t == sP || t == uP ? e.size : nP(e).length
        }

        Sp.exports = cP
    });
    var xp = f((uG, Op) => {
        var lP = "Expected a function";

        function fP(e) {
            if (typeof e != "function") {throw new TypeError(lP);}
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }

        Op.exports = fP
    });
    var Oo = f((cG, Rp) => {
        var dP = lt(), pP = function () {
            try {
                var e = dP(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {
            }
        }();
        Rp.exports = pP
    });
    var xo = f((lG, Pp) => {
        var Cp = Oo();

        function gP(e, t, n) {
            t == "__proto__" && Cp ? Cp(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
        }

        Pp.exports = gP
    });
    var Np = f((fG, Lp) => {
        var hP = xo(), EP = Hn(), vP = Object.prototype, yP = vP.hasOwnProperty;

        function mP(e, t, n) {
            var r = e[t];
            (!(yP.call(e, t) && EP(r, n)) || n === void 0 && !(t in e)) && hP(e, t, n)
        }

        Lp.exports = mP
    });
    var Fp = f((dG, Mp) => {
        var _P = Np(), IP = pn(), TP = $n(), Dp = Ze(), bP = qt();

        function AP(e, t, n, r) {
            if (!Dp(e)) {return e;}
            t = IP(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = bP(t[i]), l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype") {return e;}
                if (i != a) {
                    var y = s[u];
                    l = r ? r(y, u, s) : void 0, l === void 0 && (l = Dp(y) ? y : TP(t[i + 1]) ? [] : {})
                }
                _P(s, u, l), s = s[u]
            }
            return e
        }

        Mp.exports = AP
    });
    var Gp = f((pG, qp) => {
        var SP = ir(), wP = Fp(), OP = pn();

        function xP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i;) {
                var a = t[r], s = SP(e, a);
                n(s, a) && wP(o, OP(a, e), s)
            }
            return o
        }

        qp.exports = xP
    });
    var Xp = f((gG, kp) => {
        var RP = jn(), CP = ei(), PP = wi(), LP = Si(), NP = Object.getOwnPropertySymbols, DP = NP ? function (e) {
            for (var t = []; e;) {RP(t, PP(e)), e = CP(e);}
            return t
        } : LP;
        kp.exports = DP
    });
    var Up = f((hG, Vp) => {
        function MP(e) {
            var t = [];
            if (e != null) {for (var n in Object(e)) {t.push(n);}}
            return t
        }

        Vp.exports = MP
    });
    var Hp = f((EG, Bp) => {
        var FP = Ze(), qP = Jn(), GP = Up(), kP = Object.prototype, XP = kP.hasOwnProperty;

        function VP(e) {
            if (!FP(e)) {return GP(e);}
            var t = qP(e), n = [];
            for (var r in e) {r == "constructor" && (t || !XP.call(e, r)) || n.push(r);}
            return n
        }

        Bp.exports = VP
    });
    var zp = f((vG, Wp) => {
        var UP = xi(), BP = Hp(), HP = vt();

        function WP(e) {
            return HP(e) ? UP(e, !0) : BP(e)
        }

        Wp.exports = WP
    });
    var jp = f((yG, Kp) => {
        var zP = Ai(), KP = Xp(), jP = zp();

        function YP(e) {
            return zP(e, jP, KP)
        }

        Kp.exports = YP
    });
    var $p = f((mG, Yp) => {
        var $P = Xi(), QP = ft(), ZP = Gp(), JP = jp();

        function eL(e, t) {
            if (e == null) {return {};}
            var n = $P(JP(e), function (r) {
                return [r]
            });
            return t = QP(t), ZP(e, n, function (r, i) {
                return t(r, i[0])
            })
        }

        Yp.exports = eL
    });
    var Zp = f((_G, Qp) => {
        var tL = ft(), nL = xp(), rL = $p();

        function iL(e, t) {
            return rL(e, nL(tL(t)))
        }

        Qp.exports = iL
    });
    var eg = f((IG, Jp) => {
        var oL = er(), aL = tr(), sL = sn(), uL = Te(), cL = vt(), lL = Yn(), fL = Jn(), dL = Zn(), pL = "[object Map]",
            gL = "[object Set]", hL = Object.prototype, EL = hL.hasOwnProperty;

        function vL(e) {
            if (e == null) {return !0;}
            if (cL(e) && (uL(e) || typeof e == "string" || typeof e.splice == "function" || lL(e) || dL(e) || sL(e))) {return !e.length;}
            var t = aL(e);
            if (t == pL || t == gL) {return !e.size;}
            if (fL(e)) {return !oL(e).length;}
            for (var n in e) {if (EL.call(e, n)) {return !1;}}
            return !0
        }

        Jp.exports = vL
    });
    var ng = f((TG, tg) => {
        var yL = xo(), mL = go(), _L = ft();

        function IL(e, t) {
            var n = {};
            return t = _L(t, 3), mL(e, function (r, i, o) {
                yL(n, i, t(r, i, o))
            }), n
        }

        tg.exports = IL
    });
    var ig = f((bG, rg) => {
        function TL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;) {;}
            return e
        }

        rg.exports = TL
    });
    var ag = f((AG, og) => {
        var bL = ar();

        function AL(e) {
            return typeof e == "function" ? e : bL
        }

        og.exports = AL
    });
    var ug = f((SG, sg) => {
        var SL = ig(), wL = ho(), OL = ag(), xL = Te();

        function RL(e, t) {
            var n = xL(e) ? SL : wL;
            return n(e, OL(t))
        }

        sg.exports = RL
    });
    var lg = f((wG, cg) => {
        var CL = Be(), PL = function () {
            return CL.Date.now()
        };
        cg.exports = PL
    });
    var pg = f((OG, dg) => {
        var LL = Ze(), Ro = lg(), fg = sr(), NL = "Expected a function", DL = Math.max, ML = Math.min;

        function FL(e, t, n) {
            var r, i, o, a, s, u, l = 0, y = !1, g = !1, p = !0;
            if (typeof e != "function") {throw new TypeError(NL);}
            t = fg(t) || 0, LL(n) && (y = !!n.leading, g = "maxWait" in n, o = g ? DL(fg(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

            function E(L) {
                var B = r, H = i;
                return r = i = void 0, l = L, a = e.apply(H, B), a
            }

            function I(L) {
                return l = L, s = setTimeout(m, t), y ? E(L) : a
            }

            function _(L) {
                var B = L - u, H = L - l, W = t - B;
                return g ? ML(W, o - H) : W
            }

            function A(L) {
                var B = L - u, H = L - l;
                return u === void 0 || B >= t || B < 0 || g && H >= o
            }

            function m() {
                var L = Ro();
                if (A(L)) {return x(L);}
                s = setTimeout(m, _(L))
            }

            function x(L) {
                return s = void 0, p && r ? E(L) : (r = i = void 0, a)
            }

            function S() {
                s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0
            }

            function D() {
                return s === void 0 ? a : x(Ro())
            }

            function q() {
                var L = Ro(), B = A(L);
                if (r = arguments, i = this, u = L, B) {
                    if (s === void 0) {return I(u);}
                    if (g) {return clearTimeout(s), s = setTimeout(m, t), E(u)}
                }
                return s === void 0 && (s = setTimeout(m, t)), a
            }

            return q.cancel = S, q.flush = D, q
        }

        dg.exports = FL
    });
    var hg = f((xG, gg) => {
        var qL = pg(), GL = Ze(), kL = "Expected a function";

        function XL(e, t, n) {
            var r = !0, i = !0;
            if (typeof e != "function") {throw new TypeError(kL);}
            return GL(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), qL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }

        gg.exports = XL
    });
    var vg = {};
    Le(vg, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => Sr,
        clearRequested: () => fN,
        elementStateChanged: () => qo,
        eventListenerAdded: () => Ar,
        eventStateChanged: () => Do,
        instanceAdded: () => Mo,
        instanceRemoved: () => Fo,
        instanceStarted: () => wr,
        mediaQueriesDefined: () => ko,
        parameterChanged: () => jt,
        playbackRequested: () => cN,
        previewRequested: () => uN,
        rawDataImported: () => Co,
        sessionInitialized: () => Po,
        sessionStarted: () => Lo,
        sessionStopped: () => No,
        stopRequested: () => lN,
        testFrameRendered: () => dN,
        viewportWidthChanged: () => Go
    });
    var Eg, VL, UL, BL, HL, WL, zL, KL, jL, YL, $L, QL, ZL, JL, eN, tN, nN, rN, iN, oN, aN, sN, Co, Po, Lo, No, uN, cN,
        lN, fN, Ar, dN, Do, Sr, jt, Mo, wr, Fo, qo, Yt, Go, ko, Or = he(() => {
            "use strict";
            Ne();
            Eg = ce(Tt()), {
                IX2_RAW_DATA_IMPORTED: VL,
                IX2_SESSION_INITIALIZED: UL,
                IX2_SESSION_STARTED: BL,
                IX2_SESSION_STOPPED: HL,
                IX2_PREVIEW_REQUESTED: WL,
                IX2_PLAYBACK_REQUESTED: zL,
                IX2_STOP_REQUESTED: KL,
                IX2_CLEAR_REQUESTED: jL,
                IX2_EVENT_LISTENER_ADDED: YL,
                IX2_TEST_FRAME_RENDERED: $L,
                IX2_EVENT_STATE_CHANGED: QL,
                IX2_ANIMATION_FRAME_CHANGED: ZL,
                IX2_PARAMETER_CHANGED: JL,
                IX2_INSTANCE_ADDED: eN,
                IX2_INSTANCE_STARTED: tN,
                IX2_INSTANCE_REMOVED: nN,
                IX2_ELEMENT_STATE_CHANGED: rN,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: iN,
                IX2_VIEWPORT_WIDTH_CHANGED: oN,
                IX2_MEDIA_QUERIES_DEFINED: aN
            } = Ie, {reifyState: sN} = Eg.IX2VanillaUtils, Co = e => ({
                type: VL,
                payload: {...sN(e)}
            }), Po = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
                type: UL,
                payload: {hasBoundaryNodes: e, reducedMotion: t}
            }), Lo = () => ({type: BL}), No = () => ({type: HL}), uN = ({rawData: e, defer: t}) => ({
                type: WL,
                payload: {defer: t, rawData: e}
            }), cN = ({
                          actionTypeId: e = xe.GENERAL_START_ACTION,
                          actionListId: t,
                          actionItemId: n,
                          eventId: r,
                          allowEvents: i,
                          immediate: o,
                          testManual: a,
                          verbose: s,
                          rawData: u
                      }) => ({
                type: zL,
                payload: {
                    actionTypeId: e,
                    actionListId: t,
                    actionItemId: n,
                    testManual: a,
                    eventId: r,
                    allowEvents: i,
                    immediate: o,
                    verbose: s,
                    rawData: u
                }
            }), lN = e => ({type: KL, payload: {actionListId: e}}), fN = () => ({type: jL}), Ar = (e, t) => ({
                type: YL,
                payload: {target: e, listenerParams: t}
            }), dN = (e = 1) => ({type: $L, payload: {step: e}}), Do = (e, t) => ({
                type: QL,
                payload: {stateKey: e, newState: t}
            }), Sr = (e, t) => ({type: ZL, payload: {now: e, parameters: t}}), jt = (e, t) => ({
                type: JL,
                payload: {key: e, value: t}
            }), Mo = e => ({type: eN, payload: {...e}}), wr = (e, t) => ({
                type: tN,
                payload: {instanceId: e, time: t}
            }), Fo = e => ({type: nN, payload: {instanceId: e}}), qo = (e, t, n, r) => ({
                type: rN,
                payload: {elementId: e, actionTypeId: t, current: n, actionItem: r}
            }), Yt = ({actionListId: e, isPlaying: t}) => ({
                type: iN,
                payload: {actionListId: e, isPlaying: t}
            }), Go = ({width: e, mediaQueries: t}) => ({
                type: oN,
                payload: {width: e, mediaQueries: t}
            }), ko = () => ({type: aN})
        });
    var Ce = {};
    Le(Ce, {
        elementContains: () => Uo,
        getChildElements: () => TN,
        getClosestElement: () => An,
        getProperty: () => vN,
        getQuerySelector: () => Vo,
        getRefType: () => Bo,
        getSiblingElements: () => bN,
        getStyle: () => EN,
        getValidDocument: () => mN,
        isSiblingNode: () => IN,
        matchSelector: () => yN,
        queryDocument: () => _N,
        setStyle: () => hN
    });

    function hN(e, t, n) {
        e.style[t] = n
    }

    function EN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function vN(e, t) {
        return e[t]
    }

    function yN(e) {
        return t => t[Xo](e)
    }

    function Vo({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(yg) !== -1) {
                let r = e.split(yg), i = r[0];
                if (n = r[1], i !== document.documentElement.getAttribute(_g)) {return null}
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }

    function mN(e) {
        return e == null || e === document.documentElement.getAttribute(_g) ? document : null
    }

    function _N(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Uo(e, t) {
        return e.contains(t)
    }

    function IN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function TN(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: i} = e[n], {length: o} = i;
            if (o) {for (let a = 0; a < o; a++) {t.push(i[a])}}
        }
        return t
    }

    function bN(e = []) {
        let t = [], n = [];
        for (let r = 0, {length: i} = e; r < i; r++) {
            let {parentNode: o} = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) {continue;}
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null;) {e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling}
        }
        return t
    }

    function Bo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? pN : gN : null
    }

    var mg, Xo, yg, pN, gN, _g, An, Ig = he(() => {
        "use strict";
        mg = ce(Tt());
        Ne();
        ({ELEMENT_MATCHES: Xo} = mg.IX2BrowserSupport), {
            IX2_ID_DELIMITER: yg,
            HTML_ELEMENT: pN,
            PLAIN_OBJECT: gN,
            WF_PAGE: _g
        } = Ae;
        An = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) {return null;}
            let n = e;
            do {
                if (n[Xo] && n[Xo](t)) {return n;}
                n = n.parentNode
            } while (n != null);
            return null
        }
    });
    var Ho = f((PG, bg) => {
        var AN = Ze(), Tg = Object.create, SN = function () {
            function e() {
            }

            return function (t) {
                if (!AN(t)) {return {};}
                if (Tg) {return Tg(t);}
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
        bg.exports = SN
    });
    var xr = f((LG, Ag) => {
        function wN() {
        }

        Ag.exports = wN
    });
    var Cr = f((NG, Sg) => {
        var ON = Ho(), xN = xr();

        function Rr(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }

        Rr.prototype = ON(xN.prototype);
        Rr.prototype.constructor = Rr;
        Sg.exports = Rr
    });
    var Rg = f((DG, xg) => {
        var wg = wt(), RN = sn(), CN = Te(), Og = wg ? wg.isConcatSpreadable : void 0;

        function PN(e) {
            return CN(e) || RN(e) || !!(Og && e && e[Og])
        }

        xg.exports = PN
    });
    var Lg = f((MG, Pg) => {
        var LN = jn(), NN = Rg();

        function Cg(e, t, n, r, i) {
            var o = -1, a = e.length;
            for (n || (n = NN), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && n(s) ? t > 1 ? Cg(s, t - 1, n, r, i) : LN(i, s) : r || (i[i.length] = s)
            }
            return i
        }

        Pg.exports = Cg
    });
    var Dg = f((FG, Ng) => {
        var DN = Lg();

        function MN(e) {
            var t = e == null ? 0 : e.length;
            return t ? DN(e, 1) : []
        }

        Ng.exports = MN
    });
    var Fg = f((qG, Mg) => {
        function FN(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }

        Mg.exports = FN
    });
    var kg = f((GG, Gg) => {
        var qN = Fg(), qg = Math.max;

        function GN(e, t, n) {
            return t = qg(t === void 0 ? e.length - 1 : t, 0), function () {
                for (var r = arguments, i = -1, o = qg(r.length - t, 0), a = Array(o); ++i < o;) {a[i] = r[t + i];}
                i = -1;
                for (var s = Array(t + 1); ++i < t;) {s[i] = r[i];}
                return s[t] = n(a), qN(e, this, s)
            }
        }

        Gg.exports = GN
    });
    var Vg = f((kG, Xg) => {
        function kN(e) {
            return function () {
                return e
            }
        }

        Xg.exports = kN
    });
    var Hg = f((XG, Bg) => {
        var XN = Vg(), Ug = Oo(), VN = ar(), UN = Ug ? function (e, t) {
            return Ug(e, "toString", {configurable: !0, enumerable: !1, value: XN(t), writable: !0})
        } : VN;
        Bg.exports = UN
    });
    var zg = f((VG, Wg) => {
        var BN = 800, HN = 16, WN = Date.now;

        function zN(e) {
            var t = 0, n = 0;
            return function () {
                var r = WN(), i = HN - (r - n);
                if (n = r, i > 0) {
                    if (++t >= BN) {return arguments[0]}
                } else {t = 0;}
                return e.apply(void 0, arguments)
            }
        }

        Wg.exports = zN
    });
    var jg = f((UG, Kg) => {
        var KN = Hg(), jN = zg(), YN = jN(KN);
        Kg.exports = YN
    });
    var $g = f((BG, Yg) => {
        var $N = Dg(), QN = kg(), ZN = jg();

        function JN(e) {
            return ZN(QN(e, void 0, $N), e + "")
        }

        Yg.exports = JN
    });
    var Jg = f((HG, Zg) => {
        var Qg = Ri(), eD = Qg && new Qg;
        Zg.exports = eD
    });
    var th = f((WG, eh) => {
        function tD() {
        }

        eh.exports = tD
    });
    var Wo = f((zG, rh) => {
        var nh = Jg(), nD = th(), rD = nh ? function (e) {
            return nh.get(e)
        } : nD;
        rh.exports = rD
    });
    var oh = f((KG, ih) => {
        var iD = {};
        ih.exports = iD
    });
    var zo = f((jG, sh) => {
        var ah = oh(), oD = Object.prototype, aD = oD.hasOwnProperty;

        function sD(e) {
            for (var t = e.name + "", n = ah[t], r = aD.call(ah, t) ? n.length : 0; r--;) {
                var i = n[r], o = i.func;
                if (o == null || o == e) {return i.name}
            }
            return t
        }

        sh.exports = sD
    });
    var Lr = f((YG, uh) => {
        var uD = Ho(), cD = xr(), lD = 4294967295;

        function Pr(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = lD, this.__views__ = []
        }

        Pr.prototype = uD(cD.prototype);
        Pr.prototype.constructor = Pr;
        uh.exports = Pr
    });
    var lh = f(($G, ch) => {
        function fD(e, t) {
            var n = -1, r = e.length;
            for (t || (t = Array(r)); ++n < r;) {t[n] = e[n];}
            return t
        }

        ch.exports = fD
    });
    var dh = f((QG, fh) => {
        var dD = Lr(), pD = Cr(), gD = lh();

        function hD(e) {
            if (e instanceof dD) {return e.clone();}
            var t = new pD(e.__wrapped__, e.__chain__);
            return t.__actions__ = gD(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }

        fh.exports = hD
    });
    var hh = f((ZG, gh) => {
        var ED = Lr(), ph = Cr(), vD = xr(), yD = Te(), mD = nt(), _D = dh(), ID = Object.prototype,
            TD = ID.hasOwnProperty;

        function Nr(e) {
            if (mD(e) && !yD(e) && !(e instanceof ED)) {
                if (e instanceof ph) {return e;}
                if (TD.call(e, "__wrapped__")) {return _D(e)}
            }
            return new ph(e)
        }

        Nr.prototype = vD.prototype;
        Nr.prototype.constructor = Nr;
        gh.exports = Nr
    });
    var vh = f((JG, Eh) => {
        var bD = Lr(), AD = Wo(), SD = zo(), wD = hh();

        function OD(e) {
            var t = SD(e), n = wD[t];
            if (typeof n != "function" || !(t in bD.prototype)) {return !1;}
            if (e === n) {return !0;}
            var r = AD(n);
            return !!r && e === r[0]
        }

        Eh.exports = OD
    });
    var Ih = f((ek, _h) => {
        var yh = Cr(), xD = $g(), RD = Wo(), Ko = zo(), CD = Te(), mh = vh(), PD = "Expected a function", LD = 8,
            ND = 32, DD = 128, MD = 256;

        function FD(e) {
            return xD(function (t) {
                var n = t.length, r = n, i = yh.prototype.thru;
                for (e && t.reverse(); r--;) {
                    var o = t[r];
                    if (typeof o != "function") {throw new TypeError(PD);}
                    if (i && !a && Ko(o) == "wrapper") {var a = new yh([], !0)}
                }
                for (r = a ? r : n; ++r < n;) {
                    o = t[r];
                    var s = Ko(o), u = s == "wrapper" ? RD(o) : void 0;
                    u && mh(u[0]) && u[1] == (DD | LD | ND | MD) && !u[4].length && u[9] == 1 ? a = a[Ko(u[0])].apply(a, u[3]) : a = o.length == 1 && mh(o) ? a[s]() : a.thru(o)
                }
                return function () {
                    var l = arguments, y = l[0];
                    if (a && l.length == 1 && CD(y)) {return a.plant(y).value();}
                    for (var g = 0, p = n ? t[g].apply(this, l) : y; ++g < n;) {p = t[g].call(this, p);}
                    return p
                }
            })
        }

        _h.exports = FD
    });
    var bh = f((tk, Th) => {
        var qD = Ih(), GD = qD();
        Th.exports = GD
    });
    var Sh = f((nk, Ah) => {
        function kD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
        }

        Ah.exports = kD
    });
    var Oh = f((rk, wh) => {
        var XD = Sh(), jo = sr();

        function VD(e, t, n) {
            return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = jo(n), n = n === n ? n : 0), t !== void 0 && (t = jo(t), t = t === t ? t : 0), XD(jo(e), t, n)
        }

        wh.exports = VD
    });
    var Fh, qh, Gh, kh, UD, BD, HD, WD, zD, KD, jD, YD, $D, QD, ZD, JD, eM, tM, nM, Xh, Vh, rM, iM, oM, Uh, aM, sM, Bh,
        uM, Yo, Hh, xh, Rh, Wh, wn, cM, tt, zh, lM, Me, ze, On, Kh, $o, Ch, Qo, fM, Sn, dM, pM, gM, jh, Ph, hM, Lh, EM,
        vM, yM, Nh, Dr, Mr, Dh, Mh, Yh, $h = he(() => {
            "use strict";
            Fh = ce(bh()), qh = ce(or()), Gh = ce(Oh());
            Ne();
            Zo();
            Or();
            kh = ce(Tt()), {
                MOUSE_CLICK: UD,
                MOUSE_SECOND_CLICK: BD,
                MOUSE_DOWN: HD,
                MOUSE_UP: WD,
                MOUSE_OVER: zD,
                MOUSE_OUT: KD,
                DROPDOWN_CLOSE: jD,
                DROPDOWN_OPEN: YD,
                SLIDER_ACTIVE: $D,
                SLIDER_INACTIVE: QD,
                TAB_ACTIVE: ZD,
                TAB_INACTIVE: JD,
                NAVBAR_CLOSE: eM,
                NAVBAR_OPEN: tM,
                MOUSE_MOVE: nM,
                PAGE_SCROLL_DOWN: Xh,
                SCROLL_INTO_VIEW: Vh,
                SCROLL_OUT_OF_VIEW: rM,
                PAGE_SCROLL_UP: iM,
                SCROLLING_IN_VIEW: oM,
                PAGE_FINISH: Uh,
                ECOMMERCE_CART_CLOSE: aM,
                ECOMMERCE_CART_OPEN: sM,
                PAGE_START: Bh,
                PAGE_SCROLL: uM
            } = He, Yo = "COMPONENT_ACTIVE", Hh = "COMPONENT_INACTIVE", {COLON_DELIMITER: xh} = Ae, {getNamespacedParameterId: Rh} = kh.IX2VanillaUtils, Wh = e => t => typeof t == "object" && e(t) ? !0 : t, wn = Wh(({
                                                                                                                                                                                                                            element: e,
                                                                                                                                                                                                                            nativeEvent: t
                                                                                                                                                                                                                        }) => e === t.target), cM = Wh(({
                                                                                                                                                                                                                                                            element: e,
                                                                                                                                                                                                                                                            nativeEvent: t
                                                                                                                                                                                                                                                        }) => e.contains(t.target)), tt = (0, Fh.default)([wn, cM]), zh = (e, t) => {
                if (t) {
                    let {ixData: n} = e.getState(), {events: r} = n, i = r[t];
                    if (i && !fM[i.eventTypeId]) {return i}
                }
                return null
            }, lM = ({store: e, event: t}) => {
                let {action: n} = t, {autoStopEventId: r} = n.config;
                return !!zh(e, r)
            }, Me = ({store: e, event: t, element: n, eventStateKey: r}, i) => {
                let {action: o, id: a} = t, {actionListId: s, autoStopEventId: u} = o.config, l = zh(e, u);
                return l && $t({
                    store: e,
                    eventId: u,
                    eventTarget: n,
                    eventStateKey: u + xh + r.split(xh)[1],
                    actionListId: (0, qh.default)(l, "action.config.actionListId")
                }), $t({store: e, eventId: a, eventTarget: n, eventStateKey: r, actionListId: s}), xn({
                    store: e,
                    eventId: a,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: s
                }), i
            }, ze = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r, On = {handler: ze(tt, Me)}, Kh = {
                ...On,
                types: [Yo, Hh].join(" ")
            }, $o = [{target: window, types: "resize orientationchange", throttle: !0}, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Ch = "mouseover mouseout", Qo = {types: $o}, fM = {PAGE_START: Bh, PAGE_FINISH: Uh}, Sn = (() => {
                let e = window.pageXOffset !== void 0,
                    n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                    scrollTop: e ? window.pageYOffset : n.scrollTop,
                    stiffScrollTop: (0, Gh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                    scrollWidth: n.scrollWidth,
                    scrollHeight: n.scrollHeight,
                    clientWidth: n.clientWidth,
                    clientHeight: n.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), dM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), pM = ({
                                                                                                                            element: e,
                                                                                                                            nativeEvent: t
                                                                                                                        }) => {
                let {type: n, target: r, relatedTarget: i} = t, o = e.contains(r);
                if (n === "mouseover" && o) {return !0;}
                let a = e.contains(i);
                return !!(n === "mouseout" && o && a)
            }, gM = e => {
                let {element: t, event: {config: n}} = e, {clientWidth: r, clientHeight: i} = Sn(), o = n.scrollOffsetValue,
                    u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
                return dM(t.getBoundingClientRect(), {left: 0, top: u, right: r, bottom: i - u})
            }, jh = e => (t, n) => {
                let {type: r} = t.nativeEvent, i = [Yo, Hh].indexOf(r) !== -1 ? r === Yo : n.isActive,
                    o = {...n, isActive: i};
                return (!n || o.isActive !== n.isActive) && e(t, o) || o
            }, Ph = e => (t, n) => {
                let r = {elementHovered: pM(t)};
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
            }, hM = e => (t, n) => {
                let r = {...n, elementVisible: gM(t)};
                return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
            }, Lh = e => (t, n = {}) => {
                let {stiffScrollTop: r, scrollHeight: i, innerHeight: o} = Sn(), {
                        event: {
                            config: a,
                            eventTypeId: s
                        }
                    } = t, {scrollOffsetValue: u, scrollOffsetUnit: l} = a, y = l === "PX", g = i - o,
                    p = Number((r / g).toFixed(2));
                if (n && n.percentTop === p) {return n;}
                let E = (y ? u : o * (u || 0) / 100) / g, I, _, A = 0;
                n && (I = p > n.percentTop, _ = n.scrollingDown !== I, A = _ ? p : n.anchorTop);
                let m = s === Xh ? p >= A + E : p <= A - E,
                    x = {...n, percentTop: p, inBounds: m, anchorTop: A, scrollingDown: I};
                return n && m && (_ || x.inBounds !== n.inBounds) && e(t, x) || x
            }, EM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, vM = e => (t, n) => {
                let r = {finished: document.readyState === "complete"};
                return r.finished && !(n && n.finshed) && e(t), r
            }, yM = e => (t, n) => {
                let r = {started: !0};
                return n || e(t), r
            }, Nh = e => (t, n = {clickCount: 0}) => {
                let r = {clickCount: n.clickCount % 2 + 1};
                return r.clickCount !== n.clickCount && e(t, r) || r
            }, Dr = (e = !0) => ({
                ...Kh,
                handler: ze(e ? tt : wn, jh((t, n) => n.isActive ? On.handler(t, n) : n))
            }), Mr = (e = !0) => ({
                ...Kh,
                handler: ze(e ? tt : wn, jh((t, n) => n.isActive ? n : On.handler(t, n)))
            }), Dh = {
                ...Qo, handler: hM((e, t) => {
                    let {elementVisible: n} = t, {event: r, store: i} = e, {ixData: o} = i.getState(), {events: a} = o;
                    return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === Vh === n ? (Me(e), {
                        ...t,
                        triggered: !0
                    }) : t
                })
            }, Mh = .05, Yh = {
                [$D]: Dr(),
                [QD]: Mr(),
                [YD]: Dr(),
                [jD]: Mr(),
                [tM]: Dr(!1),
                [eM]: Mr(!1),
                [ZD]: Dr(),
                [JD]: Mr(),
                [sM]: {types: "ecommerce-cart-open", handler: ze(tt, Me)},
                [aM]: {types: "ecommerce-cart-close", handler: ze(tt, Me)},
                [UD]: {
                    types: "click", handler: ze(tt, Nh((e, {clickCount: t}) => {
                        lM(e) ? t === 1 && Me(e) : Me(e)
                    }))
                },
                [BD]: {
                    types: "click", handler: ze(tt, Nh((e, {clickCount: t}) => {
                        t === 2 && Me(e)
                    }))
                },
                [HD]: {...On, types: "mousedown"},
                [WD]: {...On, types: "mouseup"},
                [zD]: {
                    types: Ch, handler: ze(tt, Ph((e, t) => {
                        t.elementHovered && Me(e)
                    }))
                },
                [KD]: {
                    types: Ch, handler: ze(tt, Ph((e, t) => {
                        t.elementHovered || Me(e)
                    }))
                },
                [nM]: {
                    types: "mousemove mouseout scroll",
                    handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i}, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                                basedOn: a,
                                selectedAxis: s,
                                continuousParameterGroupId: u,
                                reverse: l,
                                restingState: y = 0
                            } = n, {clientX: g = o.clientX, clientY: p = o.clientY, pageX: E = o.pageX, pageY: I = o.pageY} = r,
                            _ = s === "X_AXIS", A = r.type === "mouseout", m = y / 100, x = u, S = !1;
                        switch (a) {
                            case Qe.VIEWPORT: {
                                m = _ ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break
                            }
                            case Qe.PAGE: {
                                let {scrollLeft: D, scrollTop: q, scrollWidth: L, scrollHeight: B} = Sn();
                                m = _ ? Math.min(D + E, L) / L : Math.min(q + I, B) / B;
                                break
                            }
                            case Qe.ELEMENT:
                            default: {
                                x = Rh(i, u);
                                let D = r.type.indexOf("mouse") === 0;
                                if (D && tt({element: t, nativeEvent: r}) !== !0) {break;}
                                let q = t.getBoundingClientRect(), {left: L, top: B, width: H, height: W} = q;
                                if (!D && !EM({left: g, top: p}, q)) {break;}
                                S = !0, m = _ ? (g - L) / H : (p - B) / W;
                                break
                            }
                        }
                        return A && (m > 1 - Mh || m < Mh) && (m = Math.round(m)), (a !== Qe.ELEMENT || S || S !== o.elementHovered) && (m = l ? 1 - m : m, e.dispatch(jt(x, m))), {
                            elementHovered: S,
                            clientX: g,
                            clientY: p,
                            pageX: E,
                            pageY: I
                        }
                    }
                },
                [uM]: {
                    types: $o, handler: ({store: e, eventConfig: t}) => {
                        let {continuousParameterGroupId: n, reverse: r} = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: a
                        } = Sn(), s = i / (o - a);
                        s = r ? 1 - s : s, e.dispatch(jt(n, s))
                    }
                },
                [oM]: {
                    types: $o,
                    handler: ({element: e, store: t, eventConfig: n, eventStateKey: r}, i = {scrollPercent: 0}) => {
                        let {
                            scrollLeft: o,
                            scrollTop: a,
                            scrollWidth: s,
                            scrollHeight: u,
                            clientHeight: l
                        } = Sn(), {
                            basedOn: y,
                            selectedAxis: g,
                            continuousParameterGroupId: p,
                            startsEntering: E,
                            startsExiting: I,
                            addEndOffset: _,
                            addStartOffset: A,
                            addOffsetValue: m = 0,
                            endOffsetValue: x = 0
                        } = n, S = g === "X_AXIS";
                        if (y === Qe.VIEWPORT) {
                            let D = S ? o / s : a / u;
                            return D !== i.scrollPercent && t.dispatch(jt(p, D)), {scrollPercent: D}
                        } else {
                            let D = Rh(r, p), q = e.getBoundingClientRect(), L = (A ? m : 0) / 100, B = (_ ? x : 0) / 100;
                            L = E ? L : 1 - L, B = I ? B : 1 - B;
                            let H = q.top + Math.min(q.height * L, l), K = q.top + q.height * B - H, k = Math.min(l + K, u),
                                h = Math.min(Math.max(0, l - H), k) / k;
                            return h !== i.scrollPercent && t.dispatch(jt(D, h)), {scrollPercent: h}
                        }
                    }
                },
                [Vh]: Dh,
                [rM]: Dh,
                [Xh]: {
                    ...Qo, handler: Lh((e, t) => {
                        t.scrollingDown && Me(e)
                    })
                },
                [iM]: {
                    ...Qo, handler: Lh((e, t) => {
                        t.scrollingDown || Me(e)
                    })
                },
                [Uh]: {types: "readystatechange IX2_PAGE_UPDATE", handler: ze(wn, vM(Me))},
                [Bh]: {types: "readystatechange IX2_PAGE_UPDATE", handler: ze(wn, yM(Me))}
            }
        });
    var pE = {};
    Le(pE, {
        observeRequests: () => GM,
        startActionGroup: () => xn,
        startEngine: () => Vr,
        stopActionGroup: () => $t,
        stopAllActionGroups: () => lE,
        stopEngine: () => Ur
    });

    function GM(e) {
        bt({store: e, select: ({ixRequest: t}) => t.preview, onChange: VM}), bt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: UM
        }), bt({store: e, select: ({ixRequest: t}) => t.stop, onChange: BM}), bt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: HM
        })
    }

    function kM(e) {
        bt({
            store: e, select: ({ixSession: t}) => t.mediaQueryKey, onChange: () => {
                Ur(e), aE({store: e, elementApi: Ce}), Vr({store: e, allowEvents: !0}), sE()
            }
        })
    }

    function XM(e, t) {
        let n = bt({
            store: e, select: ({ixSession: r}) => r.tick, onChange: r => {
                t(r), n()
            }
        })
    }

    function VM({rawData: e, defer: t}, n) {
        let r = () => {
            Vr({store: n, rawData: e, allowEvents: !0}), sE()
        };
        t ? setTimeout(r, 0) : r()
    }

    function sE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function UM(e, t) {
        let {
            actionTypeId: n,
            actionListId: r,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0
        } = e, {rawData: y} = e;
        if (r && i && y && s) {
            let g = y.actionLists[r];
            g && (y = OM({actionList: g, actionItemId: i, rawData: y}))
        }
        if (Vr({store: t, rawData: y, allowEvents: a, testManual: u}), r && n === xe.GENERAL_START_ACTION || Jo(n)) {
            $t({store: t, actionListId: r}), cE({store: t, actionListId: r, eventId: o});
            let g = xn({store: t, eventId: o, actionListId: r, immediate: s, verbose: l});
            l && g && t.dispatch(Yt({actionListId: r, isPlaying: !s}))
        }
    }

    function BM({actionListId: e}, t) {
        e ? $t({store: t, actionListId: e}) : lE({store: t}), Ur(t)
    }

    function HM(e, t) {
        Ur(t), aE({store: t, elementApi: Ce})
    }

    function Vr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Co(t)), i.active || (e.dispatch(Po({
            hasBoundaryNodes: !!document.querySelector(qr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), n && ($M(e), WM(), e.getState().ixSession.hasDefinedMediaQueries && kM(e)), e.dispatch(Lo()), zM(e, r))
    }

    function WM() {
        let {documentElement: e} = document;
        e.className.indexOf(Qh) === -1 && (e.className += ` ${Qh}`)
    }

    function zM(e, t) {
        let n = r => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(Sr(r, o)), t ? XM(e, n) : requestAnimationFrame(n))
        };
        n(window.performance.now())
    }

    function Ur(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach(KM), PM(), e.dispatch(No())
        }
    }

    function KM({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }

    function jM({
                    store: e,
                    eventStateKey: t,
                    eventTarget: n,
                    eventId: r,
                    eventConfig: i,
                    actionListId: o,
                    parameterGroup: a,
                    smoothing: s,
                    restingValue: u
                }) {
        let {ixData: l, ixSession: y} = e.getState(), {events: g} = l, p = g[r], {eventTypeId: E} = p, I = {}, _ = {},
            A = [], {continuousActionGroups: m} = a, {id: x} = a;
        xM(E, i) && (x = RM(t, x));
        let S = y.hasBoundaryNodes && n ? An(n, qr) : null;
        m.forEach(D => {
            let {keyframe: q, actionItems: L} = D;
            L.forEach(B => {
                let {actionTypeId: H} = B, {target: W} = B.config;
                if (!W) {return;}
                let K = W.boundaryMode ? S : null, k = LM(W) + ea + H;
                if (_[k] = YM(_[k], q, B), !I[k]) {
                    I[k] = !0;
                    let {config: w} = B;
                    Gr({config: w, event: p, eventTarget: n, elementRoot: K, elementApi: Ce}).forEach(h => {
                        A.push({element: h, key: k})
                    })
                }
            })
        }), A.forEach(({element: D, key: q}) => {
            let L = _[q], B = (0, at.default)(L, "[0].actionItems[0]", {}), {actionTypeId: H} = B,
                K = (H === xe.PLUGIN_RIVE ? (B.config?.target?.selectorGuids || []).length === 0 : Xr(H)) ? na(H)(D, B) : null,
                k = ta({element: D, actionItem: B, elementApi: Ce}, K);
            ra({
                store: e,
                element: D,
                eventId: r,
                actionListId: o,
                actionItem: B,
                destination: k,
                continuous: !0,
                parameterId: x,
                actionGroups: L,
                smoothing: s,
                restingValue: u,
                pluginInstance: K
            })
        })
    }

    function YM(e = [], t, n) {
        let r = [...e], i;
        return r.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = r.length, r.push({
            keyframe: t,
            actionItems: []
        })), r[i].actionItems.push(n), r
    }

    function $M(e) {
        let {ixData: t} = e.getState(), {eventTypeMap: n} = t;
        uE(e), (0, Qt.default)(n, (i, o) => {
            let a = Yh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            nF({logic: a, store: e, events: i})
        });
        let {ixSession: r} = e.getState();
        r.eventListeners.length && ZM(e)
    }

    function ZM(e) {
        let t = () => {
            uE(e)
        };
        QM.forEach(n => {
            window.addEventListener(n, t), e.dispatch(Ar(window, [n, t]))
        }), t()
    }

    function uE(e) {
        let {ixSession: t, ixData: n} = e.getState(), r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: i} = n;
            e.dispatch(Go({width: r, mediaQueries: i}))
        }
    }

    function nF({logic: e, store: t, events: n}) {
        rF(n);
        let {types: r, handler: i} = e, {ixData: o} = t.getState(), {actionLists: a} = o, s = JM(n, tF);
        if (!(0, eE.default)(s)) {return;}
        (0, Qt.default)(s, (g, p) => {
            let E = n[p], {action: I, id: _, mediaQueries: A = o.mediaQueryKeys} = E, {actionListId: m} = I.config;
            NM(A, o.mediaQueryKeys) || t.dispatch(ko()), I.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(S => {
                let {continuousParameterGroupId: D} = S, q = (0, at.default)(a, `${m}.continuousParameterGroups`, []),
                    L = (0, Jh.default)(q, ({id: W}) => W === D), B = (S.smoothing || 0) / 100,
                    H = (S.restingState || 0) / 100;
                L && g.forEach((W, K) => {
                    let k = _ + ea + K;
                    jM({
                        store: t,
                        eventStateKey: k,
                        eventTarget: W,
                        eventId: _,
                        eventConfig: S,
                        actionListId: m,
                        parameterGroup: L,
                        smoothing: B,
                        restingValue: H
                    })
                })
            }), (I.actionTypeId === xe.GENERAL_START_ACTION || Jo(I.actionTypeId)) && cE({
                store: t,
                actionListId: m,
                eventId: _
            })
        });
        let u = g => {
            let {ixSession: p} = t.getState();
            eF(s, (E, I, _) => {
                let A = n[I], m = p.eventState[_], {action: x, mediaQueries: S = o.mediaQueryKeys} = A;
                if (!kr(S, p.mediaQueryKey)) {return;}
                let D = (q = {}) => {
                    let L = i({store: t, element: E, event: A, eventConfig: q, nativeEvent: g, eventStateKey: _}, m);
                    DM(L, m) || t.dispatch(Do(_, L))
                };
                x.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(D) : D()
            })
        }, l = (0, iE.default)(u, qM), y = ({target: g = document, types: p, throttle: E}) => {
            p.split(" ").filter(Boolean).forEach(I => {
                let _ = E ? l : u;
                g.addEventListener(I, _), t.dispatch(Ar(g, [I, _]))
            })
        };
        Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e)
    }

    function rF(e) {
        if (!FM) {return;}
        let t = {}, n = "";
        for (let r in e) {
            let {eventTypeId: i, target: o} = e[r], a = Vo(o);
            t[a] || (i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) && (t[a] = !0, n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n, document.body.appendChild(r)
        }
    }

    function cE({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: i} = e.getState(), {actionLists: o, events: a} = r, s = a[n], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, at.default)(u, "actionItemGroups[0].actionItems", []),
                y = (0, at.default)(s, "mediaQueries", r.mediaQueryKeys);
            if (!kr(y, i.mediaQueryKey)) {return;}
            l.forEach(g => {
                let {config: p, actionTypeId: E} = g,
                    I = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                        target: s.target,
                        targets: s.targets
                    } : p, _ = Gr({config: I, event: s, elementApi: Ce}), A = Xr(E);
                _.forEach(m => {
                    let x = A ? na(E)(m, g) : null;
                    ra({
                        destination: ta({element: m, actionItem: g, elementApi: Ce}, x),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: x
                    })
                })
            })
        }
    }

    function lE({store: e}) {
        let {ixInstances: t} = e.getState();
        (0, Qt.default)(t, n => {
            if (!n.continuous) {
                let {actionListId: r, verbose: i} = n;
                ia(n, e), i && e.dispatch(Yt({actionListId: r, isPlaying: !1}))
            }
        })
    }

    function $t({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState(), s = a.hasBoundaryNodes && n ? An(n, qr) : null;
        (0, Qt.default)(o, u => {
            let l = (0, at.default)(u, "actionItem.config.target.boundaryMode"), y = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && y) {
                if (s && l && !Uo(s, u.element)) {return;}
                ia(u, e), u.verbose && e.dispatch(Yt({actionListId: i, isPlaying: !1}))
            }
        })
    }

    function xn({
                    store: e,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o = 0,
                    immediate: a,
                    verbose: s
                }) {
        let {ixData: u, ixSession: l} = e.getState(), {events: y} = u,
            g = y[t] || {}, {mediaQueries: p = u.mediaQueryKeys} = g,
            E = (0, at.default)(u, `actionLists.${i}`, {}), {actionItemGroups: I, useFirstGroupAsInitialState: _} = E;
        if (!I || !I.length) {return !1;}
        o >= I.length && (0, at.default)(g, "config.loop") && (o = 0), o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && Jo(g.action?.actionTypeId) ? g.config.delay : void 0,
            x = (0, at.default)(I, [o, "actionItems"], []);
        if (!x.length || !kr(p, l.mediaQueryKey)) {return !1;}
        let S = l.hasBoundaryNodes && n ? An(n, qr) : null, D = AM(x), q = !1;
        return x.forEach((L, B) => {
            let {config: H, actionTypeId: W} = L, K = Xr(W), {target: k} = H;
            if (!k) {return;}
            let w = k.boundaryMode ? S : null;
            Gr({config: H, event: g, eventTarget: n, elementRoot: w, elementApi: Ce}).forEach((R, N) => {
                let X = K ? na(W)(R, L) : null, $ = K ? MM(W)(R, L) : null;
                q = !0;
                let Q = D === B && N === 0, ae = SM({element: R, actionItem: L}),
                    ge = ta({element: R, actionItem: L, elementApi: Ce}, X);
                ra({
                    store: e,
                    element: R,
                    actionItem: L,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: Q,
                    computedStyle: ae,
                    destination: ge,
                    immediate: a,
                    verbose: s,
                    pluginInstance: X,
                    pluginDuration: $,
                    instanceDelay: m
                })
            })
        }), q
    }

    function ra(e) {
        let {store: t, computedStyle: n, ...r} = e, {
                element: i,
                actionItem: o,
                immediate: a,
                pluginInstance: s,
                continuous: u,
                restingValue: l,
                eventId: y
            } = r, g = !u, p = TM(), {ixElements: E, ixSession: I, ixData: _} = t.getState(),
            A = IM(E, i), {refState: m} = E[A] || {}, x = Bo(i), S = I.reducedMotion && Ei[o.actionTypeId], D;
        if (S && u) {switch (_.events[y]?.eventTypeId) {
            case He.MOUSE_MOVE:
            case He.MOUSE_MOVE_IN_VIEWPORT:
                D = l;
                break;
            default:
                D = .5;
                break
        }}
        let q = wM(i, m, n, o, Ce, s);
        if (t.dispatch(Mo({
            instanceId: p,
            elementId: A,
            origin: q,
            refType: x,
            skipMotion: S,
            skipToValue: D, ...r
        })), fE(document.body, "ix2-animation-started", p), a) {
            iF(t, p);
            return
        }
        bt({store: t, select: ({ixInstances: L}) => L[p], onChange: dE}), g && t.dispatch(wr(p, I.tick))
    }

    function ia(e, t) {
        fE(document.body, "ix2-animation-stopping", {instanceId: e.id, state: t.getState()});
        let {elementId: n, actionItem: r} = e, {ixElements: i} = t.getState(), {ref: o, refType: a} = i[n] || {};
        a === oE && CM(o, r, Ce), t.dispatch(Fo(e.id))
    }

    function fE(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function iF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(wr(t, 0)), e.dispatch(Sr(performance.now(), n));
        let {ixInstances: r} = e.getState();
        dE(r[t], e)
    }

    function dE(e, t) {
        let {
                active: n,
                continuous: r,
                complete: i,
                elementId: o,
                actionItem: a,
                actionTypeId: s,
                renderType: u,
                current: l,
                groupIndex: y,
                eventId: g,
                eventTarget: p,
                eventStateKey: E,
                actionListId: I,
                isCarrier: _,
                styleProp: A,
                verbose: m,
                pluginInstance: x
            } = e, {ixData: S, ixSession: D} = t.getState(), {events: q} = S,
            L = q && q[g] ? q[g] : {}, {mediaQueries: B = S.mediaQueryKeys} = L;
        if (kr(B, D.mediaQueryKey) && (r || n || i)) {
            if (l || u === _M && i) {
                t.dispatch(qo(o, s, l, a));
                let {ixElements: H} = t.getState(), {ref: W, refType: K, refState: k} = H[o] || {}, w = k && k[s];
                (K === oE || Xr(s)) && bM(W, k, w, g, a, A, Ce, u, x)
            }
            if (i) {
                if (_) {
                    let H = xn({
                        store: t,
                        eventId: g,
                        eventTarget: p,
                        eventStateKey: E,
                        actionListId: I,
                        groupIndex: y + 1,
                        verbose: m
                    });
                    m && !H && t.dispatch(Yt({actionListId: I, isPlaying: !1}))
                }
                ia(e, t)
            }
        }
    }

    var Jh, at, eE, tE, nE, rE, Qt, iE, Fr, mM, Jo, ea, qr, oE, _M, Qh, Gr, IM, ta, bt, TM, bM, aE, AM, SM, wM, OM, xM,
        RM, kr, CM, PM, LM, NM, DM, Xr, na, MM, Zh, FM, qM, QM, JM, eF, tF, Zo = he(() => {
            "use strict";
            Jh = ce(Wi()), at = ce(or()), eE = ce(wp()), tE = ce(Zp()), nE = ce(eg()), rE = ce(ng()), Qt = ce(ug()), iE = ce(hg());
            Ne();
            Fr = ce(Tt());
            Or();
            Ig();
            $h();
            mM = Object.keys(qn), Jo = e => mM.includes(e), {
                COLON_DELIMITER: ea,
                BOUNDARY_SELECTOR: qr,
                HTML_ELEMENT: oE,
                RENDER_GENERAL: _M,
                W_MOD_IX: Qh
            } = Ae, {
                getAffectedElements: Gr,
                getElementId: IM,
                getDestinationValues: ta,
                observeStore: bt,
                getInstanceId: TM,
                renderHTMLElement: bM,
                clearAllStyles: aE,
                getMaxDurationItemIndex: AM,
                getComputedStyle: SM,
                getInstanceOrigin: wM,
                reduceListToGroup: OM,
                shouldNamespaceEventParameter: xM,
                getNamespacedParameterId: RM,
                shouldAllowMediaQuery: kr,
                cleanupHTMLElement: CM,
                clearObjectCache: PM,
                stringifyTarget: LM,
                mediaQueriesEqual: NM,
                shallowEqual: DM
            } = Fr.IX2VanillaUtils, {
                isPluginType: Xr,
                createPluginInstance: na,
                getPluginDuration: MM
            } = Fr.IX2VanillaPlugins, Zh = navigator.userAgent, FM = Zh.match(/iPad/i) || Zh.match(/iPhone/), qM = 12;
            QM = ["resize", "orientationchange"];
            JM = (e, t) => (0, tE.default)((0, rE.default)(e, t), nE.default), eF = (e, t) => {
                (0, Qt.default)(e, (n, r) => {
                    n.forEach((i, o) => {
                        let a = r + ea + o;
                        t(i, r, a)
                    })
                })
            }, tF = e => {
                let t = {target: e.target, targets: e.targets};
                return Gr({config: t, elementApi: Ce})
            }
        });
    var EE = f(aa => {
        "use strict";
        Object.defineProperty(aa, "__esModule", {value: !0});

        function oF(e, t) {
            for (var n in t) {Object.defineProperty(e, n, {enumerable: !0, get: t[n]})}
        }

        oF(aa, {
            actions: function () {
                return uF
            }, destroy: function () {
                return hE
            }, init: function () {
                return dF
            }, setEnv: function () {
                return fF
            }, store: function () {
                return Br
            }
        });
        var aF = pi(), sF = cF((sp(), je(ap))), oa = (Zo(), je(pE)), uF = lF((Or(), je(vg)));

        function cF(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function gE(e) {
            if (typeof WeakMap != "function") {return null;}
            var t = new WeakMap, n = new WeakMap;
            return (gE = function (r) {
                return r ? n : t
            })(e)
        }

        function lF(e, t) {
            if (!t && e && e.__esModule) {return e;}
            if (e === null || typeof e != "object" && typeof e != "function") {return {default: e};}
            var n = gE(t);
            if (n && n.has(e)) {return n.get(e);}
            var r = {__proto__: null}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
            }}
            return r.default = e, n && n.set(e, r), r
        }

        var Br = (0, aF.createStore)(sF.default);

        function fF(e) {
            e() && (0, oa.observeRequests)(Br)
        }

        function dF(e) {
            hE(), (0, oa.startEngine)({store: Br, rawData: e, allowEvents: !0})
        }

        function hE() {
            (0, oa.stopEngine)(Br)
        }
    });
    var _E = f((pk, mE) => {
        "use strict";
        var vE = Ue(), yE = EE();
        yE.setEnv(vE.env);
        vE.define("ix2", mE.exports = function () {
            return yE
        })
    });
    var TE = f((gk, IE) => {
        "use strict";
        var Zt = Ue();
        Zt.define("links", IE.exports = function (e, t) {
            var n = {}, r = e(window), i, o = Zt.env(), a = window.location, s = document.createElement("a"),
                u = "w--current", l = /index\.(html|php)$/, y = /\/$/, g, p;
            n.ready = n.design = n.preview = E;

            function E() {
                i = o && Zt.env("design"), p = Zt.env("slug") || a.pathname || "", Zt.scroll.off(_), g = [];
                for (var m = document.links, x = 0; x < m.length; ++x) {I(m[x]);}
                g.length && (Zt.scroll.on(_), _())
            }

            function I(m) {
                if (!m.getAttribute("hreflang")) {
                    var x = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = x, !(x.indexOf(":") >= 0)) {
                        var S = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) {return;}
                            var D = e(s.hash);
                            D.length && g.push({link: S, sec: D, active: !1});
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var q = s.href === a.href || x === p || l.test(x) && y.test(p);
                            A(S, u, q)
                        }
                    }
                }
            }

            function _() {
                var m = r.scrollTop(), x = r.height();
                t.each(g, function (S) {
                    if (!S.link.attr("hreflang")) {
                        var D = S.link, q = S.sec, L = q.offset().top, B = q.outerHeight(), H = x * .5,
                            W = q.is(":visible") && L + B - H >= m && L + H <= m + x;
                        S.active !== W && (S.active = W, A(D, u, W))
                    }
                })
            }

            function A(m, x, S) {
                var D = m.hasClass(x);
                S && D || !S && !D || (S ? m.addClass(x) : m.removeClass(x))
            }

            return n
        })
    });
    var AE = f((hk, bE) => {
        "use strict";
        var Hr = Ue();
        Hr.define("scroll", bE.exports = function (e) {
            var t = {WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll"}, n = window.location,
                r = I() ? null : window.history, i = e(window), o = e(document), a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (w) {
                    window.setTimeout(w, 15)
                }, u = Hr.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])", y = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
                p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}', E = document.createElement("style");
            E.appendChild(document.createTextNode(p));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }

            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function A(w) {
                return _.test(w.hash) && w.host + w.pathname === n.host + n.pathname
            }

            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function S(w, h) {
                var R;
                switch (h) {
                    case "add":
                        R = w.attr("tabindex"), R ? w.attr("data-wf-tabindex-swap", R) : w.attr("tabindex", "-1");
                        break;
                    case "remove":
                        R = w.attr("data-wf-tabindex-swap"), R ? (w.attr("tabindex", R), w.removeAttr("data-wf-tabindex-swap")) : w.removeAttr("tabindex");
                        break
                }
                w.toggleClass("wf-force-outline-none", h === "add")
            }

            function D(w) {
                var h = w.currentTarget;
                if (!(Hr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(h.className))) {
                    var R = A(h) ? h.hash : "";
                    if (R !== "") {
                        var N = e(R);
                        N.length && (w && (w.preventDefault(), w.stopPropagation()), q(R, w), window.setTimeout(function () {
                            L(N, function () {
                                S(N, "add"), N.get(0).focus({preventScroll: !0}), S(N, "remove")
                            })
                        }, w ? 0 : 300))
                    }
                }
            }

            function q(w) {
                if (n.hash !== w && r && r.pushState && !(Hr.env.chrome && n.protocol === "file:")) {
                    var h = r.state && r.state.hash;
                    h !== w && r.pushState({hash: w}, "", w)
                }
            }

            function L(w, h) {
                var R = i.scrollTop(), N = B(w);
                if (R !== N) {
                    var X = H(w, R, N), $ = Date.now(), Q = function () {
                        var ae = Date.now() - $;
                        window.scroll(0, W(R, N, ae, X)), ae <= X ? s(Q) : typeof h == "function" && h()
                    };
                    s(Q)
                }
            }

            function B(w) {
                var h = e(l), R = h.css("position") === "fixed" ? h.outerHeight() : 0, N = w.offset().top - R;
                if (w.data("scroll") === "mid") {
                    var X = i.height() - R, $ = w.outerHeight();
                    $ < X && (N -= Math.round((X - $) / 2))
                }
                return N
            }

            function H(w, h, R) {
                if (x()) {return 0;}
                var N = 1;
                return a.add(w).each(function (X, $) {
                    var Q = parseFloat($.getAttribute("data-scroll-time"));
                    !isNaN(Q) && Q >= 0 && (N = Q)
                }), (472.143 * Math.log(Math.abs(h - R) + 125) - 2e3) * N
            }

            function W(w, h, R, N) {
                return R > N ? h : w + (h - w) * K(R / N)
            }

            function K(w) {
                return w < .5 ? 4 * w * w * w : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1
            }

            function k() {
                var {WF_CLICK_EMPTY: w, WF_CLICK_SCROLL: h} = t;
                o.on(h, g, D), o.on(w, y, function (R) {
                    R.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }

            return {ready: k}
        })
    });
    var wE = f((Ek, SE) => {
        "use strict";
        var pF = Ue();
        pF.define("touch", SE.exports = function (e) {
            var t = {}, n = window.getSelection;
            e.event.special.tap = {bindType: "click", delegateType: "click"}, t.init = function (o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new r(o) : null
            };

            function r(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, y;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", p, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", p, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", I, !1);

                function g(A) {
                    var m = A.touches;
                    m && m.length > 1 || (a = !0, m ? (s = !0, l = m[0].clientX) : l = A.clientX, y = l)
                }

                function p(A) {
                    if (a) {
                        if (s && A.type === "mousemove") {
                            A.preventDefault(), A.stopPropagation();
                            return
                        }
                        var m = A.touches, x = m ? m[0].clientX : A.clientX, S = x - y;
                        y = x, Math.abs(S) > u && n && String(n()) === "" && (i("swipe", A, {direction: S > 0 ? "right" : "left"}), I())
                    }
                }

                function E(A) {
                    if (a && (a = !1, s && A.type === "mouseup")) {
                        A.preventDefault(), A.stopPropagation(), s = !1;
                        return
                    }
                }

                function I() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", p, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", p, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", I, !1), o = null
                }

                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {originalEvent: a});
                e(a.target).trigger(u, s)
            }

            return t.instance = t.init(document), t
        })
    });
    var xE = f((vk, OE) => {
        "use strict";
        var sa = Ue(), gF = (e, t, n, r) => {
            let i = document.createElement("div");
            t.appendChild(i), turnstile.render(i, {
                sitekey: e, callback: function (o) {
                    n(o)
                }, "error-callback": function () {
                    r()
                }
            })
        };
        sa.define("forms", OE.exports = function (e, t) {
            let n = "TURNSTILE_LOADED";
            var r = {}, i = e(document), o, a = window.location, s = window.XDomainRequest && !window.atob,
                u = ".w-form", l, y = /e(-)?mail/i, g = /^\S+@\S+$/, p = window.alert, E = sa.env(), I, _, A;
            let m = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"), x;
            var S = /list-manage[1-9]?.com/i, D = t.debounce(function () {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function () {
                L(), q(), !E && !I && H()
            };

            function q() {
                l = e("html").attr("data-wf-site"), _ = "https://webflow.com/api/v1/form/" + l, s && _.indexOf("https://webflow.com") >= 0 && (_ = _.replace("https://webflow.com", "https://formdata.webflow.com")), A = `${_}/signFile`, o = e(u + " form"), o.length && o.each(B)
            }

            function L() {
                m && (x = document.createElement("script"), x.src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(x), x.onload = () => {
                    i.trigger(n)
                })
            }

            function B(O, F) {
                var z = e(F), V = e.data(F, u);
                V || (V = e.data(F, u, {form: z})), W(V);
                var ne = z.closest("div.w-form");
                V.done = ne.find("> .w-form-done"), V.fail = ne.find("> .w-form-fail"), V.fileUploads = ne.find(".w-file-upload"), V.fileUploads.each(function (Y) {
                    ge(Y, V)
                }), m && (V.wait = !1, K(V), i.on(typeof turnstile < "u" ? "ready" : n, function () {
                    gF(m, F, Y => {
                        V.turnstileToken = Y, W(V)
                    }, () => {
                        K(V)
                    })
                }));
                var ie = V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
                V.done.attr("aria-label") || V.form.attr("aria-label", ie), V.done.attr("tabindex", "-1"), V.done.attr("role", "region"), V.done.attr("aria-label") || V.done.attr("aria-label", ie + " success"), V.fail.attr("tabindex", "-1"), V.fail.attr("role", "region"), V.fail.attr("aria-label") || V.fail.attr("aria-label", ie + " failure");
                var se = V.action = z.attr("action");
                if (V.handler = null, V.redirect = z.attr("data-redirect"), S.test(se)) {
                    V.handler = $;
                    return
                }
                if (!se) {
                    if (l) {
                        V.handler = X;
                        return
                    }
                    D()
                }
            }

            function H() {
                I = !0, i.on("submit", u + " form", function (Y) {
                    var d = e.data(this, u);
                    d.handler && (d.evt = Y, d.handler(d))
                });
                let O = ".w-checkbox-input", F = ".w-radio-input", z = "w--redirected-checked",
                    V = "w--redirected-focus", ne = "w--redirected-focus-visible",
                    ie = ":focus-visible, [data-wf-focus-visible]", se = [["checkbox", O], ["radio", F]];
                i.on("change", u + ' form input[type="checkbox"]:not(' + O + ")", Y => {
                    e(Y.target).siblings(O).toggleClass(z)
                }), i.on("change", u + ' form input[type="radio"]', Y => {
                    e(`input[name="${Y.target.name}"]:not(${O})`).map((M, j) => e(j).siblings(F).removeClass(z));
                    let d = e(Y.target);
                    d.hasClass("w-radio-input") || d.siblings(F).addClass(z)
                }), se.forEach(([Y, d]) => {
                    i.on("focus", u + ` form input[type="${Y}"]:not(` + d + ")", M => {
                        e(M.target).siblings(d).addClass(V), e(M.target).filter(ie).siblings(d).addClass(ne)
                    }), i.on("blur", u + ` form input[type="${Y}"]:not(` + d + ")", M => {
                        e(M.target).siblings(d).removeClass(`${V} ${ne}`)
                    })
                })
            }

            function W(O) {
                var F = O.btn = O.form.find(':input[type="submit"]');
                O.wait = O.btn.attr("data-wait") || null, O.success = !1, F.prop("disabled", !!(m && !O.turnstileToken)), O.label && F.val(O.label)
            }

            function K(O) {
                var F = O.btn, z = O.wait;
                F.prop("disabled", !0), z && (O.label = F.val(), F.val(z))
            }

            function k(O, F) {
                var z = null;
                return F = F || {}, O.find(':input:not([type="submit"]):not([type="file"])').each(function (V, ne) {
                    var ie = e(ne), se = ie.attr("type"),
                        Y = ie.attr("data-name") || ie.attr("name") || "Field " + (V + 1);
                    Y = encodeURIComponent(Y);
                    var d = ie.val();
                    if (se === "checkbox") {d = ie.is(":checked");} else if (se === "radio") {
                        if (F[Y] === null || typeof F[Y] == "string") {return;}
                        d = O.find('input[name="' + ie.attr("name") + '"]:checked').val() || null
                    }
                    typeof d == "string" && (d = e.trim(d)), F[Y] = d, z = z || N(ie, se, Y, d)
                }), z
            }

            function w(O) {
                var F = {};
                return O.find(':input[type="file"]').each(function (z, V) {
                    var ne = e(V), ie = ne.attr("data-name") || ne.attr("name") || "File " + (z + 1),
                        se = ne.attr("data-value");
                    typeof se == "string" && (se = e.trim(se)), F[ie] = se
                }), F
            }

            let h = {_mkto_trk: "marketo"};

            function R() {
                return document.cookie.split("; ").reduce(function (F, z) {
                    let V = z.split("="), ne = V[0];
                    if (ne in h) {
                        let ie = h[ne], se = V.slice(1).join("=");
                        F[ie] = se
                    }
                    return F
                }, {})
            }

            function N(O, F, z, V) {
                var ne = null;
                return F === "password" ? ne = "Passwords cannot be submitted." : O.attr("required") ? V ? y.test(O.attr("type")) && (g.test(V) || (ne = "Please enter a valid email address for: " + z)) : ne = "Please fill out the required field: " + z : z === "g-recaptcha-response" && !V && (ne = "Please confirm you\u2019re not a robot."), ne
            }

            function X(O) {
                ae(O), Q(O)
            }

            function $(O) {
                W(O);
                var F = O.form, z = {};
                if (/^https/.test(a.href) && !/^https/.test(O.action)) {
                    F.attr("method", "post");
                    return
                }
                ae(O);
                var V = k(F, z);
                if (V) {return p(V);}
                K(O);
                var ne;
                t.each(z, function (d, M) {
                    y.test(M) && (z.EMAIL = d), /^((full[ _-]?)?name)$/i.test(M) && (ne = d), /^(first[ _-]?name)$/i.test(M) && (z.FNAME = d), /^(last[ _-]?name)$/i.test(M) && (z.LNAME = d)
                }), ne && !z.FNAME && (ne = ne.split(" "), z.FNAME = ne[0], z.LNAME = z.LNAME || ne[1]);
                var ie = O.action.replace("/post?", "/post-json?") + "&c=?", se = ie.indexOf("u=") + 2;
                se = ie.substring(se, ie.indexOf("&", se));
                var Y = ie.indexOf("id=") + 3;
                Y = ie.substring(Y, ie.indexOf("&", Y)), z["b_" + se + "_" + Y] = "", e.ajax({
                    url: ie,
                    data: z,
                    dataType: "jsonp"
                }).done(function (d) {
                    O.success = d.result === "success" || /already/.test(d.msg), O.success || console.info("MailChimp error: " + d.msg), Q(O)
                }).fail(function () {
                    Q(O)
                })
            }

            function Q(O) {
                var F = O.form, z = O.redirect, V = O.success;
                if (V && z) {
                    sa.location(z);
                    return
                }
                O.done.toggle(V), O.fail.toggle(!V), V ? O.done.focus() : O.fail.focus(), F.toggle(!V), W(O)
            }

            function ae(O) {
                O.evt && O.evt.preventDefault(), O.evt = null
            }

            function ge(O, F) {
                if (!F.fileUploads || !F.fileUploads[O]) {return;}
                var z, V = e(F.fileUploads[O]), ne = V.find("> .w-file-upload-default"),
                    ie = V.find("> .w-file-upload-uploading"), se = V.find("> .w-file-upload-success"),
                    Y = V.find("> .w-file-upload-error"), d = ne.find(".w-file-upload-input"),
                    M = ne.find(".w-file-upload-label"), j = M.children(), U = Y.find(".w-file-upload-error-msg"),
                    de = se.find(".w-file-upload-file"), st = se.find(".w-file-remove-link"),
                    Ke = de.find(".w-file-upload-file-name"), c = U.attr("data-w-size-error"),
                    v = U.attr("data-w-type-error"), T = U.attr("data-w-generic-error");
                if (E || M.on("click keydown", function (J) {
                    J.type === "keydown" && J.which !== 13 && J.which !== 32 || (J.preventDefault(), d.click())
                }), M.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), st.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), E) {d.on("click", function (J) {
                    J.preventDefault()
                }), M.on("click", function (J) {
                    J.preventDefault()
                }), j.on("click", function (J) {
                    J.preventDefault()
                });} else {
                    st.on("click keydown", function (J) {
                        if (J.type === "keydown") {
                            if (J.which !== 13 && J.which !== 32) {return;}
                            J.preventDefault()
                        }
                        d.removeAttr("data-value"), d.val(""), Ke.html(""), ne.toggle(!0), se.toggle(!1), M.focus()
                    }), d.on("change", function (J) {
                        z = J.target && J.target.files && J.target.files[0], z && (ne.toggle(!1), Y.toggle(!1), ie.toggle(!0), ie.focus(), Ke.text(z.name), te() || K(F), F.fileUploads[O].uploading = !0, Se(z, C))
                    });
                    var b = M.outerHeight();
                    d.height(b), d.width(1)
                }

                function P(J) {
                    var G = J.responseJSON && J.responseJSON.msg, re = T;
                    typeof G == "string" && G.indexOf("InvalidFileTypeError") === 0 ? re = v : typeof G == "string" && G.indexOf("MaxFileSizeError") === 0 && (re = c), U.text(re), d.removeAttr("data-value"), d.val(""), ie.toggle(!1), ne.toggle(!0), Y.toggle(!0), Y.focus(), F.fileUploads[O].uploading = !1, te() || W(F)
                }

                function C(J, G) {
                    if (J) {return P(J);}
                    var re = G.fileName, oe = G.postData, me = G.fileId, Fe = G.s3Url;
                    d.attr("data-value", me), ye(Fe, oe, z, re, Z)
                }

                function Z(J) {
                    if (J) {return P(J);}
                    ie.toggle(!1), se.css("display", "inline-block"), se.focus(), F.fileUploads[O].uploading = !1, te() || W(F)
                }

                function te() {
                    var J = F.fileUploads && F.fileUploads.toArray() || [];
                    return J.some(function (G) {
                        return G.uploading
                    })
                }
            }

            function Se(O, F) {
                var z = new URLSearchParams({name: O.name, size: O.size});
                e.ajax({type: "GET", url: `${A}?${z}`, crossDomain: !0}).done(function (V) {
                    F(null, V)
                }).fail(function (V) {
                    F(V)
                })
            }

            function ye(O, F, z, V, ne) {
                var ie = new FormData;
                for (var se in F) {ie.append(se, F[se]);}
                ie.append("file", z, V), e.ajax({
                    type: "POST",
                    url: O,
                    data: ie,
                    processData: !1,
                    contentType: !1
                }).done(function () {
                    ne(null)
                }).fail(function (Y) {
                    ne(Y)
                })
            }

            return r
        })
    });
    var CE = f((yk, RE) => {
        "use strict";
        var gt = Ue(), hF = Fn(), be = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        gt.define("navbar", RE.exports = function (e, t) {
            var n = {}, r = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, y, g = gt.env(),
                p = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", I = "w--open",
                _ = "w--nav-dropdown-open", A = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open",
                x = "w--nav-link-open", S = hF.triggers, D = e();
            n.ready = n.design = n.preview = q, n.destroy = function () {
                D = e(), L(), u && u.length && u.each(K)
            };

            function q() {
                l = g && gt.env("design"), y = gt.env("editor"), s = e(document.body), u = o.find(E), u.length && (u.each(W), L(), B())
            }

            function L() {
                gt.resize.off(H)
            }

            function B() {
                gt.resize.on(H)
            }

            function H() {
                u.each(O)
            }

            function W(d, M) {
                var j = e(M), U = e.data(M, E);
                U || (U = e.data(M, E, {
                    open: !1,
                    el: j,
                    config: {},
                    selectedIdx: -1
                })), U.menu = j.find(".w-nav-menu"), U.links = U.menu.find(".w-nav-link"), U.dropdowns = U.menu.find(".w-dropdown"), U.dropdownToggle = U.menu.find(".w-dropdown-toggle"), U.dropdownList = U.menu.find(".w-dropdown-list"), U.button = j.find(".w-nav-button"), U.container = j.find(".w-container"), U.overlayContainerId = "w-nav-overlay-" + d, U.outside = Se(U);
                var de = j.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), U.button.attr("style", "-webkit-user-select: text;"), U.button.attr("aria-label") == null && U.button.attr("aria-label", "menu"), U.button.attr("role", "button"), U.button.attr("tabindex", "0"), U.button.attr("aria-controls", U.overlayContainerId), U.button.attr("aria-haspopup", "menu"), U.button.attr("aria-expanded", "false"), U.el.off(E), U.button.off(E), U.menu.off(E), h(U), l ? (k(U), U.el.on("setting" + E, R(U))) : (w(U), U.button.on("click" + E, ae(U)), U.menu.on("click" + E, "a", ge(U)), U.button.on("keydown" + E, N(U)), U.el.on("keydown" + E, X(U))), O(d, M)
            }

            function K(d, M) {
                var j = e.data(M, E);
                j && (k(j), e.removeData(M, E))
            }

            function k(d) {
                d.overlay && (Y(d, !0), d.overlay.remove(), d.overlay = null)
            }

            function w(d) {
                d.overlay || (d.overlay = e(p).appendTo(d.el), d.overlay.attr("id", d.overlayContainerId), d.parent = d.menu.parent(), Y(d, !0))
            }

            function h(d) {
                var M = {}, j = d.config || {}, U = M.animation = d.el.attr("data-animation") || "default";
                M.animOver = /^over/.test(U), M.animDirect = /left$/.test(U) ? -1 : 1, j.animation !== U && d.open && t.defer(Q, d), M.easing = d.el.attr("data-easing") || "ease", M.easing2 = d.el.attr("data-easing2") || "ease";
                var de = d.el.attr("data-duration");
                M.duration = de != null ? Number(de) : 400, M.docHeight = d.el.attr("data-doc-height"), d.config = M
            }

            function R(d) {
                return function (M, j) {
                    j = j || {};
                    var U = i.width();
                    h(d), j.open === !0 && ie(d, !0), j.open === !1 && Y(d, !0), d.open && t.defer(function () {
                        U !== i.width() && Q(d)
                    })
                }
            }

            function N(d) {
                return function (M) {
                    switch (M.keyCode) {
                        case be.SPACE:
                        case be.ENTER:
                            return ae(d)(), M.preventDefault(), M.stopPropagation();
                        case be.ESCAPE:
                            return Y(d), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                        case be.HOME:
                        case be.END:
                            return d.open ? (M.keyCode === be.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0, $(d), M.preventDefault(), M.stopPropagation()) : (M.preventDefault(), M.stopPropagation())
                    }
                }
            }

            function X(d) {
                return function (M) {
                    if (d.open) {switch (d.selectedIdx = d.links.index(document.activeElement), M.keyCode) {
                        case be.HOME:
                        case be.END:
                            return M.keyCode === be.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0, $(d), M.preventDefault(), M.stopPropagation();
                        case be.ESCAPE:
                            return Y(d), d.button.focus(), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_LEFT:
                        case be.ARROW_UP:
                            return d.selectedIdx = Math.max(-1, d.selectedIdx - 1), $(d), M.preventDefault(), M.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                            return d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1), $(d), M.preventDefault(), M.stopPropagation()
                    }}
                }
            }

            function $(d) {
                if (d.links[d.selectedIdx]) {
                    var M = d.links[d.selectedIdx];
                    M.focus(), ge(M)
                }
            }

            function Q(d) {
                d.open && (Y(d, !0), ie(d, !0))
            }

            function ae(d) {
                return a(function () {
                    d.open ? Y(d) : ie(d)
                })
            }

            function ge(d) {
                return function (M) {
                    var j = e(this), U = j.attr("href");
                    if (!gt.validClick(M.currentTarget)) {
                        M.preventDefault();
                        return
                    }
                    U && U.indexOf("#") === 0 && d.open && Y(d)
                }
            }

            function Se(d) {
                return d.outside && o.off("click" + E, d.outside), function (M) {
                    var j = e(M.target);
                    y && j.closest(".w-editor-bem-EditorOverlay").length || ye(d, j)
                }
            }

            var ye = a(function (d, M) {
                if (d.open) {
                    var j = M.closest(".w-nav-menu");
                    d.menu.is(j) || Y(d)
                }
            });

            function O(d, M) {
                var j = e.data(M, E), U = j.collapsed = j.button.css("display") !== "none";
                if (j.open && !U && !l && Y(j, !0), j.container.length) {
                    var de = z(j);
                    j.links.each(de), j.dropdowns.each(de)
                }
                j.open && se(j)
            }

            var F = "max-width";

            function z(d) {
                var M = d.container.css(F);
                return M === "none" && (M = ""), function (j, U) {
                    U = e(U), U.css(F, ""), U.css(F) === "none" && U.css(F, M)
                }
            }

            function V(d, M) {
                M.setAttribute("data-nav-menu-open", "")
            }

            function ne(d, M) {
                M.removeAttribute("data-nav-menu-open")
            }

            function ie(d, M) {
                if (d.open) {return;}
                d.open = !0, d.menu.each(V), d.links.addClass(x), d.dropdowns.addClass(_), d.dropdownToggle.addClass(A), d.dropdownList.addClass(m), d.button.addClass(I);
                var j = d.config, U = j.animation;
                (U === "none" || !r.support.transform || j.duration <= 0) && (M = !0);
                var de = se(d), st = d.menu.outerHeight(!0), Ke = d.menu.outerWidth(!0), c = d.el.height(), v = d.el[0];
                if (O(0, v), S.intro(0, v), gt.redraw.up(), l || o.on("click" + E, d.outside), M) {
                    P();
                    return
                }
                var T = "transform " + j.duration + "ms " + j.easing;
                if (d.overlay && (D = d.menu.prev(), d.overlay.show().append(d.menu)), j.animOver) {
                    r(d.menu).add(T).set({
                        x: j.animDirect * Ke,
                        height: de
                    }).start({x: 0}).then(P), d.overlay && d.overlay.width(Ke);
                    return
                }
                var b = c + st;
                r(d.menu).add(T).set({y: -b}).start({y: 0}).then(P);

                function P() {
                    d.button.attr("aria-expanded", "true")
                }
            }

            function se(d) {
                var M = d.config, j = M.docHeight ? o.height() : s.height();
                return M.animOver ? d.menu.height(j) : d.el.css("position") !== "fixed" && (j -= d.el.outerHeight(!0)), d.overlay && d.overlay.height(j), j
            }

            function Y(d, M) {
                if (!d.open) {return;}
                d.open = !1, d.button.removeClass(I);
                var j = d.config;
                if ((j.animation === "none" || !r.support.transform || j.duration <= 0) && (M = !0), S.outro(0, d.el[0]), o.off("click" + E, d.outside), M) {
                    r(d.menu).stop(), v();
                    return
                }
                var U = "transform " + j.duration + "ms " + j.easing2, de = d.menu.outerHeight(!0),
                    st = d.menu.outerWidth(!0), Ke = d.el.height();
                if (j.animOver) {
                    r(d.menu).add(U).start({x: st * j.animDirect}).then(v);
                    return
                }
                var c = Ke + de;
                r(d.menu).add(U).start({y: -c}).then(v);

                function v() {
                    d.menu.height(""), r(d.menu).set({
                        x: 0,
                        y: 0
                    }), d.menu.each(ne), d.links.removeClass(x), d.dropdowns.removeClass(_), d.dropdownToggle.removeClass(A), d.dropdownList.removeClass(m), d.overlay && d.overlay.children().length && (D.length ? d.menu.insertAfter(D) : d.menu.prependTo(d.parent), d.overlay.attr("style", "").hide()), d.el.triggerHandler("w-close"), d.button.attr("aria-expanded", "false")
                }
            }

            return n
        })
    });
    var LE = f((mk, PE) => {
        "use strict";
        var ht = Ue(), EF = Fn();
        ht.define("tabs", PE.exports = function (e) {
            var t = {}, n = e.tram, r = e(document), i, o, a = ht.env, s = a.safari, u = a(), l = "data-w-tab",
                y = "data-w-pane", g = ".w-tabs", p = "w--current", E = "w--tab-active", I = EF.triggers, _ = !1;
            t.ready = t.design = t.preview = A, t.redraw = function () {
                _ = !0, A(), _ = !1
            }, t.destroy = function () {
                i = r.find(g), i.length && (i.each(S), m())
            };

            function A() {
                o = u && ht.env("design"), i = r.find(g), i.length && (i.each(D), ht.env("preview") && !_ && i.each(S), m(), x())
            }

            function m() {
                ht.redraw.off(t.redraw)
            }

            function x() {
                ht.redraw.on(t.redraw)
            }

            function S(k, w) {
                var h = e.data(w, g);
                h && (h.links && h.links.each(I.reset), h.panes && h.panes.each(I.reset))
            }

            function D(k, w) {
                var h = g.substr(1) + "-" + k, R = e(w), N = e.data(w, g);
                if (N || (N = e.data(w, g, {
                    el: R,
                    config: {}
                })), N.current = null, N.tabIdentifier = h + "-" + l, N.paneIdentifier = h + "-" + y, N.menu = R.children(".w-tab-menu"), N.links = N.menu.children(".w-tab-link"), N.content = R.children(".w-tab-content"), N.panes = N.content.children(".w-tab-pane"), N.el.off(g), N.links.off(g), N.menu.attr("role", "tablist"), N.links.attr("tabindex", "-1"), q(N), !o) {
                    N.links.on("click" + g, B(N)), N.links.on("keydown" + g, H(N));
                    var X = N.links.filter("." + p), $ = X.attr(l);
                    $ && W(N, {tab: $, immediate: !0})
                }
            }

            function q(k) {
                var w = {};
                w.easing = k.el.attr("data-easing") || "ease";
                var h = parseInt(k.el.attr("data-duration-in"), 10);
                h = w.intro = h === h ? h : 0;
                var R = parseInt(k.el.attr("data-duration-out"), 10);
                R = w.outro = R === R ? R : 0, w.immediate = !h && !R, k.config = w
            }

            function L(k) {
                var w = k.current;
                return Array.prototype.findIndex.call(k.links, h => h.getAttribute(l) === w, null)
            }

            function B(k) {
                return function (w) {
                    w.preventDefault();
                    var h = w.currentTarget.getAttribute(l);
                    h && W(k, {tab: h})
                }
            }

            function H(k) {
                return function (w) {
                    var h = L(k), R = w.key, N = {
                        ArrowLeft: h - 1,
                        ArrowUp: h - 1,
                        ArrowRight: h + 1,
                        ArrowDown: h + 1,
                        End: k.links.length - 1,
                        Home: 0
                    };
                    if (R in N) {
                        w.preventDefault();
                        var X = N[R];
                        X === -1 && (X = k.links.length - 1), X === k.links.length && (X = 0);
                        var $ = k.links[X], Q = $.getAttribute(l);
                        Q && W(k, {tab: Q})
                    }
                }
            }

            function W(k, w) {
                w = w || {};
                var h = k.config, R = h.easing, N = w.tab;
                if (N !== k.current) {
                    k.current = N;
                    var X;
                    k.links.each(function (O, F) {
                        var z = e(F);
                        if (w.immediate || h.immediate) {
                            var V = k.panes[O];
                            F.id || (F.id = k.tabIdentifier + "-" + O), V.id || (V.id = k.paneIdentifier + "-" + O), F.href = "#" + V.id, F.setAttribute("role", "tab"), F.setAttribute("aria-controls", V.id), F.setAttribute("aria-selected", "false"), V.setAttribute("role", "tabpanel"), V.setAttribute("aria-labelledby", F.id)
                        }
                        F.getAttribute(l) === N ? (X = F, z.addClass(p).removeAttr("tabindex").attr({"aria-selected": "true"}).each(I.intro)) : z.hasClass(p) && z.removeClass(p).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(I.outro)
                    });
                    var $ = [], Q = [];
                    k.panes.each(function (O, F) {
                        var z = e(F);
                        F.getAttribute(l) === N ? $.push(F) : z.hasClass(E) && Q.push(F)
                    });
                    var ae = e($), ge = e(Q);
                    if (w.immediate || h.immediate) {
                        ae.addClass(E).each(I.intro), ge.removeClass(E), _ || ht.redraw.up();
                        return
                    } else {
                        var Se = window.scrollX, ye = window.scrollY;
                        X.focus(), window.scrollTo(Se, ye)
                    }
                    ge.length && h.outro ? (ge.each(I.outro), n(ge).add("opacity " + h.outro + "ms " + R, {fallback: s}).start({opacity: 0}).then(() => K(h, ge, ae))) : K(h, ge, ae)
                }
            }

            function K(k, w, h) {
                if (w.removeClass(E).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }), h.addClass(E).each(I.intro), ht.redraw.up(), !k.intro) {return n(h).set({opacity: 1});}
                n(h).set({opacity: 0}).redraw().add("opacity " + k.intro + "ms " + k.easing, {fallback: s}).start({opacity: 1})
            }

            return t
        })
    });
    Ia();
    ba();
    wa();
    Fn();
    _E();
    TE();
    AE();
    wE();
    xE();
    CE();
    LE();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
    {
        "events": {
            "e-3": {
                "id": "e-3",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-4"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3ad23e59-0bca-046f-42f5-eda8e18985a2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3ad23e59-0bca-046f-42f5-eda8e18985a2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731587886378
            },
            "e-4": {
                "id": "e-4",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-3"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3ad23e59-0bca-046f-42f5-eda8e18985a2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3ad23e59-0bca-046f-42f5-eda8e18985a2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731587886378
            },
            "e-5": {
                "id": "e-5",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-48"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|17dd173c-4b3f-02d4-903a-844827c843d9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|17dd173c-4b3f-02d4-903a-844827c843d9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731587888309
            },
            "e-6": {
                "id": "e-6",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-47"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|17dd173c-4b3f-02d4-903a-844827c843d9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|17dd173c-4b3f-02d4-903a-844827c843d9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731587888309
            },
            "e-13": {
                "id": "e-13",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-14"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d486",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d486",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731588484612
            },
            "e-14": {
                "id": "e-14",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-13"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d486",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d486",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731588484612
            },
            "e-15": {
                "id": "e-15",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-16"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d48f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d48f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731588484612
            },
            "e-16": {
                "id": "e-16",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-15"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d48f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|ec1c0f50-9aa4-b5ca-7b21-93abcf03d48f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731588484612
            },
            "e-17": {
                "id": "e-17",
                "animationType": "custom",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-24"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06b1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06b1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1591184415943
            },
            "e-18": {
                "id": "e-18",
                "animationType": "custom",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-19"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06a8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06a8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1591184406003
            },
            "e-19": {
                "id": "e-19",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-18"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06a8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06a8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1591184406003
            },
            "e-20": {
                "id": "e-20",
                "animationType": "custom",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-23"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee069e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee069e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1581565606175
            },
            "e-23": {
                "id": "e-23",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-20"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee069e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee069e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1581565606173
            },
            "e-24": {
                "id": "e-24",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-17"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06b1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|e7895696-a6bf-fbf2-4f2c-91ac36ee06b1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1591184415942
            },
            "e-29": {
                "id": "e-29",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-30"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbaba",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbaba",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-30": {
                "id": "e-30",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-29"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbaba",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbaba",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-31": {
                "id": "e-31",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-32"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbac4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbac4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-32": {
                "id": "e-32",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-31"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbac4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbac4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-33": {
                "id": "e-33",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-34"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbacd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbacd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-34": {
                "id": "e-34",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-33"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbacd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbacd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-35": {
                "id": "e-35",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-36"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbad6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbad6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-36": {
                "id": "e-36",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-35"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbad6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|d5e7a6ce-3f25-4ea2-adb3-b116a06bbad6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599793091
            },
            "e-37": {
                "id": "e-37",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-38"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a07599",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a07599",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599952027
            },
            "e-38": {
                "id": "e-38",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-37"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a07599",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a07599",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599952027
            },
            "e-39": {
                "id": "e-39",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-40"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a075a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a075a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599952027
            },
            "e-40": {
                "id": "e-40",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-39"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a075a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "6734e03710981908f2e45ffc|3066aaaf-fe60-a059-ff11-eb4de0a075a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731599952027
            },
            "e-41": {
                "id": "e-41",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-42"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e6221a8d-ea23-5511-b161-f3f71d0f0f22",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763317951
            },
            "e-42": {
                "id": "e-42",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-41"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e6221a8d-ea23-5511-b161-f3f71d0f0f22",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763317951
            },
            "e-43": {
                "id": "e-43",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-44"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|2d0d369d-3ff7-0989-0bcb-ee391ed2a9b6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763318704
            },
            "e-44": {
                "id": "e-44",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-43"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|2d0d369d-3ff7-0989-0bcb-ee391ed2a9b6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763318704
            },
            "e-45": {
                "id": "e-45",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-46"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9184fac5-a12a-1727-7d14-957cd7ba2386",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763320748
            },
            "e-46": {
                "id": "e-46",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-45"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9184fac5-a12a-1727-7d14-957cd7ba2386",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763320748
            },
            "e-47": {
                "id": "e-47",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-48"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|2fcceb6d-554b-0ba9-ae46-8ec3ecdeca6a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763321236
            },
            "e-48": {
                "id": "e-48",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-47"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|2fcceb6d-554b-0ba9-ae46-8ec3ecdeca6a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763321236
            },
            "e-49": {
                "id": "e-49",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-50"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|c0b298b9-4413-4a07-26d7-2862be006b6c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763321630
            },
            "e-50": {
                "id": "e-50",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-49"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|c0b298b9-4413-4a07-26d7-2862be006b6c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763321630
            },
            "e-51": {
                "id": "e-51",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-52"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|99d6e293-18dc-6ad6-e1b7-2dfc06e9ee52",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763780802
            },
            "e-52": {
                "id": "e-52",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-51"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|99d6e293-18dc-6ad6-e1b7-2dfc06e9ee52",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763780802
            },
            "e-53": {
                "id": "e-53",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-54"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|1af12aab-4cba-bc29-2972-69ea5be6e911",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763797569
            },
            "e-54": {
                "id": "e-54",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-53"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|1af12aab-4cba-bc29-2972-69ea5be6e911",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763797569
            },
            "e-55": {
                "id": "e-55",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-56"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a0d0fb22-7e6f-1f11-237f-7f16587fc394",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763810974
            },
            "e-56": {
                "id": "e-56",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-55"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a0d0fb22-7e6f-1f11-237f-7f16587fc394",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763810974
            },
            "e-57": {
                "id": "e-57",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-58"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e8187873-e714-de1e-2a3d-fd89c80e85c2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763811460
            },
            "e-58": {
                "id": "e-58",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-57"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e8187873-e714-de1e-2a3d-fd89c80e85c2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763811460
            },
            "e-59": {
                "id": "e-59",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-60"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9a9ee329-9048-010f-d984-840d6fb48414",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763811827
            },
            "e-60": {
                "id": "e-60",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-59"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9a9ee329-9048-010f-d984-840d6fb48414",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763811827
            },
            "e-61": {
                "id": "e-61",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-62"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|36aec3fa-2a93-bc53-4b68-fcfa28b8a3ac",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763813200
            },
            "e-62": {
                "id": "e-62",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-61"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|36aec3fa-2a93-bc53-4b68-fcfa28b8a3ac",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763813200
            },
            "e-63": {
                "id": "e-63",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-64"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|b3a6e840-eac7-4984-4666-9bcf8e3e692b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763813768
            },
            "e-64": {
                "id": "e-64",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-63"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|b3a6e840-eac7-4984-4666-9bcf8e3e692b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763813768
            },
            "e-65": {
                "id": "e-65",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-66"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9bae6773-92a0-4b29-c81a-898173c0033b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763975848
            },
            "e-66": {
                "id": "e-66",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-65"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|9bae6773-92a0-4b29-c81a-898173c0033b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763975848
            },
            "e-71": {
                "id": "e-71",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-72"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d0d1cb76-88d6-d297-408a-a50dfb60b5e2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986531
            },
            "e-72": {
                "id": "e-72",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-71"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|d0d1cb76-88d6-d297-408a-a50dfb60b5e2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986531
            },
            "e-73": {
                "id": "e-73",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-74"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|7b68300b-138c-93a5-10f1-0e2021894b2a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986748
            },
            "e-74": {
                "id": "e-74",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-73"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|7b68300b-138c-93a5-10f1-0e2021894b2a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986748
            },
            "e-75": {
                "id": "e-75",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-76"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|650e3c43-af8d-252c-de8e-b613c100ba68",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986936
            },
            "e-76": {
                "id": "e-76",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-75"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|650e3c43-af8d-252c-de8e-b613c100ba68",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763986936
            },
            "e-77": {
                "id": "e-77",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-78"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|aa075153-eb3f-2fb2-2e00-f3dd53e3e414",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763987117
            },
            "e-78": {
                "id": "e-78",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-77"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|aa075153-eb3f-2fb2-2e00-f3dd53e3e414",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763987117
            },
            "e-79": {
                "id": "e-79",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-80"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|31914341-5f2a-3613-2a6d-aed83aa3a624",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763992239
            },
            "e-80": {
                "id": "e-80",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-79"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|31914341-5f2a-3613-2a6d-aed83aa3a624",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731763992239
            },
            "e-81": {
                "id": "e-81",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-82"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552936",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-82": {
                "id": "e-82",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-81"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552936",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-83": {
                "id": "e-83",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-84"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552940",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-84": {
                "id": "e-84",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-83"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552940",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-85": {
                "id": "e-85",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-86"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552949",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-86": {
                "id": "e-86",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-85"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552949",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-87": {
                "id": "e-87",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-88"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552952",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-88": {
                "id": "e-88",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-87"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552952",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-89": {
                "id": "e-89",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-90"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e3655295b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-90": {
                "id": "e-90",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-89"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e3655295b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-91": {
                "id": "e-91",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-92"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552964",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-92": {
                "id": "e-92",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-91"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552964",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-93": {
                "id": "e-93",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-94"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e3655296d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-94": {
                "id": "e-94",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-93"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e3655296d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-95": {
                "id": "e-95",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-96"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552976",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-96": {
                "id": "e-96",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-95"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|8e6bba6d-149f-8e88-dea8-fb1e36552976",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764109527
            },
            "e-97": {
                "id": "e-97",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-98"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1520",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-98": {
                "id": "e-98",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-97"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1520",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-99": {
                "id": "e-99",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-100"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f152a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-100": {
                "id": "e-100",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-99"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f152a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-101": {
                "id": "e-101",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-102"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1533",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-102": {
                "id": "e-102",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-101"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1533",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-103": {
                "id": "e-103",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-104"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f153c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-104": {
                "id": "e-104",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-103"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f153c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-105": {
                "id": "e-105",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-106"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1545",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-106": {
                "id": "e-106",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-105"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1545",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-107": {
                "id": "e-107",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-108"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f154e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-108": {
                "id": "e-108",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-107"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f154e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-109": {
                "id": "e-109",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-110"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1557",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-110": {
                "id": "e-110",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-109"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1557",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-111": {
                "id": "e-111",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-112"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1560",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-112": {
                "id": "e-112",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-111"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1560",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-113": {
                "id": "e-113",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-114"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1569",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-114": {
                "id": "e-114",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-113"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1569",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-115": {
                "id": "e-115",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-116"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1572",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-116": {
                "id": "e-116",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-115"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|e13f87e8-9f31-bdea-2177-bed3f19f1572",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764112466
            },
            "e-117": {
                "id": "e-117",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-118"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c765",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-118": {
                "id": "e-118",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-117"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c765",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-119": {
                "id": "e-119",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-120"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c76f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-120": {
                "id": "e-120",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-119"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c76f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-121": {
                "id": "e-121",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-122"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c778",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-122": {
                "id": "e-122",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-121"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c778",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-123": {
                "id": "e-123",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-124"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c781",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-124": {
                "id": "e-124",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-123"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c781",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-125": {
                "id": "e-125",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-126"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c78a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-126": {
                "id": "e-126",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-125"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c78a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-127": {
                "id": "e-127",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-128"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c793",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-128": {
                "id": "e-128",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-127"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c793",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-129": {
                "id": "e-129",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-130"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c79c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-130": {
                "id": "e-130",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-129"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c79c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-131": {
                "id": "e-131",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-132"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c7a5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-132": {
                "id": "e-132",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-131"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|de69fe2d-d972-8005-bc64-638cb374c7a5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764119056
            },
            "e-133": {
                "id": "e-133",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-134"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649547",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-134": {
                "id": "e-134",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-133"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649547",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-135": {
                "id": "e-135",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-136"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649551",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-136": {
                "id": "e-136",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-135"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649551",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-137": {
                "id": "e-137",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-138"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b64955a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-138": {
                "id": "e-138",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-137"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b64955a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-139": {
                "id": "e-139",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-140"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649563",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-140": {
                "id": "e-140",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-139"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649563",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-141": {
                "id": "e-141",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-142"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b64956c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-142": {
                "id": "e-142",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-141"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b64956c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-143": {
                "id": "e-143",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-144"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649575",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-144": {
                "id": "e-144",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-143"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|a3a22965-15cb-c4cd-ee79-3e4c2b649575",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764166540
            },
            "e-145": {
                "id": "e-145",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-146"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b18",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-146": {
                "id": "e-146",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-145"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b18",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-147": {
                "id": "e-147",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-148"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b22",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-148": {
                "id": "e-148",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-147"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b22",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-149": {
                "id": "e-149",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-150"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b2b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-150": {
                "id": "e-150",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-149"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b2b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-151": {
                "id": "e-151",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-152"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b34",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-152": {
                "id": "e-152",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-151"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6734e03710981908f2e45ffc|da30592c-8f26-c92b-cf71-124320bc1b34",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731764315501
            },
            "e-215": {
                "id": "e-215",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-216"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552936",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-216": {
                "id": "e-216",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-215"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552936",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-217": {
                "id": "e-217",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-218"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552940",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-218": {
                "id": "e-218",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-217"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552940",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-219": {
                "id": "e-219",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-220"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552949",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-220": {
                "id": "e-220",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-219"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552949",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-221": {
                "id": "e-221",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-222"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552952",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-222": {
                "id": "e-222",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-221"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552952",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-223": {
                "id": "e-223",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-224"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e3655295b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-224": {
                "id": "e-224",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-223"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e3655295b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-225": {
                "id": "e-225",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-226"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552964",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-226": {
                "id": "e-226",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-225"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552964",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-227": {
                "id": "e-227",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-228"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e3655296d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-228": {
                "id": "e-228",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-227"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e3655296d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-229": {
                "id": "e-229",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-230"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552976",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-230": {
                "id": "e-230",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-229"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|8e6bba6d-149f-8e88-dea8-fb1e36552976",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-231": {
                "id": "e-231",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-232"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1520",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-232": {
                "id": "e-232",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-231"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1520",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-233": {
                "id": "e-233",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-234"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f152a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-234": {
                "id": "e-234",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-233"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f152a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-235": {
                "id": "e-235",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-236"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1533",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-236": {
                "id": "e-236",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-235"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1533",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-237": {
                "id": "e-237",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-238"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f153c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-238": {
                "id": "e-238",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-237"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f153c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-239": {
                "id": "e-239",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-240"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1545",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-240": {
                "id": "e-240",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-239"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1545",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-241": {
                "id": "e-241",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-242"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f154e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-242": {
                "id": "e-242",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-241"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f154e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-243": {
                "id": "e-243",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-244"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1557",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-244": {
                "id": "e-244",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-243"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1557",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-245": {
                "id": "e-245",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-246"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1560",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-246": {
                "id": "e-246",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-245"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1560",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-247": {
                "id": "e-247",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-248"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1569",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-248": {
                "id": "e-248",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-247"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1569",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-249": {
                "id": "e-249",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-250"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1572",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-250": {
                "id": "e-250",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-249"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|e13f87e8-9f31-bdea-2177-bed3f19f1572",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-251": {
                "id": "e-251",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-252"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c765",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-252": {
                "id": "e-252",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-251"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c765",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-253": {
                "id": "e-253",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-254"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c76f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-254": {
                "id": "e-254",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-253"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c76f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-255": {
                "id": "e-255",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-256"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c778",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-256": {
                "id": "e-256",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-255"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c778",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-257": {
                "id": "e-257",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-258"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c781",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-258": {
                "id": "e-258",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-257"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c781",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-259": {
                "id": "e-259",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-260"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c78a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-260": {
                "id": "e-260",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-259"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c78a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-261": {
                "id": "e-261",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-262"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c793",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-262": {
                "id": "e-262",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-261"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c793",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-263": {
                "id": "e-263",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-264"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c79c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-264": {
                "id": "e-264",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-263"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c79c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-265": {
                "id": "e-265",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-5",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-266"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c7a5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-266": {
                "id": "e-266",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-6",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-265"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|de69fe2d-d972-8005-bc64-638cb374c7a5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731767930822
            },
            "e-267": {
                "id": "e-267",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-268"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc02419a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-268": {
                "id": "e-268",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-267"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc02419a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-269": {
                "id": "e-269",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-270"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-270": {
                "id": "e-270",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-269"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241a3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-271": {
                "id": "e-271",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-272"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241ac",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-272": {
                "id": "e-272",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-271"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241ac",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-273": {
                "id": "e-273",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-274"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241b5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            },
            "e-274": {
                "id": "e-274",
                "name": "",
                "animationType": "preset",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-273"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "6738ae7a667430263ca377d2|7771388c-f1ce-0e1f-a573-6cd7cc0241b5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1731768831337
            }
        },
        "actionLists": {
            "a": {
                "id": "a",
                "title": "Number box hover",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-6",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".number",
                                "selectorGuids": ["060f0d59-9f04-8737-bb60-8ede4124c92f"]
                            },
                            "filters": [{"type": "grayscale", "filterId": "71c4", "value": 100, "unit": "%"}]
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".number",
                                "selectorGuids": ["060f0d59-9f04-8737-bb60-8ede4124c92f"]
                            },
                            "yValue": -40,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-7",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".number",
                                "selectorGuids": ["060f0d59-9f04-8737-bb60-8ede4124c92f"]
                            },
                            "filters": [{"type": "grayscale", "filterId": "3d82", "value": 0, "unit": "%"}]
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1731584641479
            }, "a-2": {
                "id": "a-2",
                "title": "Number box out",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-block",
                                "selectorGuids": ["4a928d01-2ad7-fbdc-ffcf-eba061441475"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-2-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".number",
                                "selectorGuids": ["060f0d59-9f04-8737-bb60-8ede4124c92f"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1731584641479
            }, "a-6": {
                "id": "a-6",
                "title": "(CLICK) FAQ Question [close]",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 300,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".faq-content",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d00"]
                            },
                            "heightValue": 0,
                            "widthUnit": "PX",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 300,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".plus-icon",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d01"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-6-n-3",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 350,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".faq-question-wrap",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d02"]
                            },
                            "globalSwatchId": "",
                            "rValue": 140,
                            "bValue": 255,
                            "gValue": 84,
                            "aValue": 0.15
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1581565609522
            }, "a-5": {
                "id": "a-5",
                "title": "(CLICK) FAQ Question",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".faq-content",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d00"]
                            },
                            "heightValue": 0,
                            "widthUnit": "PX",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 800,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".faq-content",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d00"]
                            },
                            "widthUnit": "PX",
                            "heightUnit": "AUTO",
                            "locked": false
                        }
                    }, {
                        "id": "a-5-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 800,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".plus-icon",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d01"]
                            },
                            "zValue": 135,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-5-n-4",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".faq-question-wrap",
                                "selectorGuids": ["8533abc2-7ab5-59bf-51b9-859853035d02"]
                            },
                            "globalSwatchId": "",
                            "rValue": 140,
                            "bValue": 255,
                            "gValue": 84,
                            "aValue": 1
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1581565609522
            }
        },
        "site": {
            "mediaQueries": [{"key": "main", "min": 992, "max": 10000}, {
                "key": "medium",
                "min": 768,
                "max": 991
            }, {"key": "small", "min": 480, "max": 767}, {"key": "tiny", "min": 0, "max": 479}]
        }
    }
);
