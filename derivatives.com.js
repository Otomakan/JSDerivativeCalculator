try {
    (function(t, r) {
        "use strict";
        if (typeof define === "function" && define.amd) {
            define(r)
        } else if (typeof exports === "object") {
            module.exports = r()
        } else {
            t.returnExports = r()
        }
    })(this, function() {
        var t = Array;
        var r = t.prototype;
        var e = Object;
        var n = e.prototype;
        var i = Function;
        var a = i.prototype;
        var o = String;
        var f = o.prototype;
        var u = Number;
        var l = u.prototype;
        var s = r.slice;
        var c = r.splice;
        var v = r.push;
        var h = r.unshift;
        var p = r.concat;
        var y = r.join;
        var d = a.call;
        var g = a.apply;
        var w = Math.max;
        var b = Math.min;
        var T = n.toString;
        var m = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
        var D;
        var S = Function.prototype.toString,
            x = /^\s*class /,
            O = function isES6ClassFn(t) {
                try {
                    var r = S.call(t);
                    var e = r.replace(/\/\/.*\n/g, "");
                    var n = e.replace(/\/\*[.\s\S]*\*\//g, "");
                    var i = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return x.test(i)
                } catch (a) {
                    return false
                }
            },
            j = function tryFunctionObject(t) {
                try {
                    if (O(t)) {
                        return false
                    }
                    S.call(t);
                    return true
                } catch (r) {
                    return false
                }
            },
            E = "[object Function]",
            I = "[object GeneratorFunction]",
            D = function isCallable(t) {
                if (!t) {
                    return false
                }
                if (typeof t !== "function" && typeof t !== "object") {
                    return false
                }
                if (m) {
                    return j(t)
                }
                if (O(t)) {
                    return false
                }
                var r = T.call(t);
                return r === E || r === I
            };
        var M;
        var U = RegExp.prototype.exec,
            F = function tryRegexExec(t) {
                try {
                    U.call(t);
                    return true
                } catch (r) {
                    return false
                }
            },
            N = "[object RegExp]";
        M = function isRegex(t) {
            if (typeof t !== "object") {
                return false
            }
            return m ? F(t) : T.call(t) === N
        };
        var C;
        var k = String.prototype.valueOf,
            A = function tryStringObject(t) {
                try {
                    k.call(t);
                    return true
                } catch (r) {
                    return false
                }
            },
            R = "[object String]";
        C = function isString(t) {
            if (typeof t === "string") {
                return true
            }
            if (typeof t !== "object") {
                return false
            }
            return m ? A(t) : T.call(t) === R
        };
        var P = e.defineProperty && function() {
            try {
                var t = {};
                e.defineProperty(t, "x", {
                    enumerable: false,
                    value: t
                });
                for (var r in t) {
                    return false
                }
                return t.x === t
            } catch (n) {
                return false
            }
        }();
        var $ = function(t) {
            var r;
            if (P) {
                r = function(t, r, n, i) {
                    if (!i && r in t) {
                        return
                    }
                    e.defineProperty(t, r, {
                        configurable: true,
                        enumerable: false,
                        writable: true,
                        value: n
                    })
                }
            } else {
                r = function(t, r, e, n) {
                    if (!n && r in t) {
                        return
                    }
                    t[r] = e
                }
            }
            return function defineProperties(e, n, i) {
                for (var a in n) {
                    if (t.call(n, a)) {
                        r(e, a, n[a], i)
                    }
                }
            }
        }(n.hasOwnProperty);
        var J = function isPrimitive(t) {
            var r = typeof t;
            return t === null || r !== "object" && r !== "function"
        };
        var Y = u.isNaN || function isActualNaN(t) {
            return t !== t
        };
        var Z = {
            ToInteger: function ToInteger(t) {
                var r = +t;
                if (Y(r)) {
                    r = 0
                } else if (r !== 0 && r !== 1 / 0 && r !== -(1 / 0)) {
                    r = (r > 0 || -1) * Math.floor(Math.abs(r))
                }
                return r
            },
            ToPrimitive: function ToPrimitive(t) {
                var r, e, n;
                if (J(t)) {
                    return t
                }
                e = t.valueOf;
                if (D(e)) {
                    r = e.call(t);
                    if (J(r)) {
                        return r
                    }
                }
                n = t.toString;
                if (D(n)) {
                    r = n.call(t);
                    if (J(r)) {
                        return r
                    }
                }
                throw new TypeError
            },
            ToObject: function(t) {
                if (t == null) {
                    throw new TypeError("can't convert " + t + " to object")
                }
                return e(t)
            },
            ToUint32: function ToUint32(t) {
                return t >>> 0
            }
        };
        var z = function Empty() {};
        $(a, {
            bind: function bind(t) {
                var r = this;
                if (!D(r)) {
                    throw new TypeError("Function.prototype.bind called on incompatible " + r)
                }
                var n = s.call(arguments, 1);
                var a;
                var o = function() {
                    if (this instanceof a) {
                        var i = g.call(r, this, p.call(n, s.call(arguments)));
                        if (e(i) === i) {
                            return i
                        }
                        return this
                    } else {
                        return g.call(r, t, p.call(n, s.call(arguments)))
                    }
                };
                var f = w(0, r.length - n.length);
                var u = [];
                for (var l = 0; l < f; l++) {
                    v.call(u, "$" + l)
                }
                a = i("binder", "return function (" + y.call(u, ",") + "){ return binder.apply(this, arguments); }")(o);
                if (r.prototype) {
                    z.prototype = r.prototype;
                    a.prototype = new z;
                    z.prototype = null
                }
                return a
            }
        });
        var G = d.bind(n.hasOwnProperty);
        var B = d.bind(n.toString);
        var H = d.bind(s);
        var W = g.bind(s);
        var L = d.bind(f.slice);
        var X = d.bind(f.split);
        var q = d.bind(f.indexOf);
        var K = d.bind(v);
        var Q = d.bind(n.propertyIsEnumerable);
        var V = d.bind(r.sort);
        var _ = t.isArray || function isArray(t) {
            return B(t) === "[object Array]"
        };
        var tt = [].unshift(0) !== 1;
        $(r, {
            unshift: function() {
                h.apply(this, arguments);
                return this.length
            }
        }, tt);
        $(t, {
            isArray: _
        });
        var rt = e("a");
        var et = rt[0] !== "a" || !(0 in rt);
        var nt = function properlyBoxed(t) {
            var r = true;
            var e = true;
            var n = false;
            if (t) {
                try {
                    t.call("foo", function(t, e, n) {
                        if (typeof n !== "object") {
                            r = false
                        }
                    });
                    t.call([1], function() {
                        "use strict";
                        e = typeof this === "string"
                    }, "x")
                } catch (i) {
                    n = true
                }
            }
            return !!t && !n && r && e
        };
        $(r, {
            forEach: function forEach(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = -1;
                var i = Z.ToUint32(e.length);
                var a;
                if (arguments.length > 1) {
                    a = arguments[1]
                }
                if (!D(t)) {
                    throw new TypeError("Array.prototype.forEach callback must be a function")
                }
                while (++n < i) {
                    if (n in e) {
                        if (typeof a === "undefined") {
                            t(e[n], n, r)
                        } else {
                            t.call(a, e[n], n, r)
                        }
                    }
                }
            }
        }, !nt(r.forEach));
        $(r, {
            map: function map(r) {
                var e = Z.ToObject(this);
                var n = et && C(this) ? X(this, "") : e;
                var i = Z.ToUint32(n.length);
                var a = t(i);
                var o;
                if (arguments.length > 1) {
                    o = arguments[1]
                }
                if (!D(r)) {
                    throw new TypeError("Array.prototype.map callback must be a function")
                }
                for (var f = 0; f < i; f++) {
                    if (f in n) {
                        if (typeof o === "undefined") {
                            a[f] = r(n[f], f, e)
                        } else {
                            a[f] = r.call(o, n[f], f, e)
                        }
                    }
                }
                return a
            }
        }, !nt(r.map));
        $(r, {
            filter: function filter(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = Z.ToUint32(e.length);
                var i = [];
                var a;
                var o;
                if (arguments.length > 1) {
                    o = arguments[1]
                }
                if (!D(t)) {
                    throw new TypeError("Array.prototype.filter callback must be a function")
                }
                for (var f = 0; f < n; f++) {
                    if (f in e) {
                        a = e[f];
                        if (typeof o === "undefined" ? t(a, f, r) : t.call(o, a, f, r)) {
                            K(i, a)
                        }
                    }
                }
                return i
            }
        }, !nt(r.filter));
        $(r, {
            every: function every(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = Z.ToUint32(e.length);
                var i;
                if (arguments.length > 1) {
                    i = arguments[1]
                }
                if (!D(t)) {
                    throw new TypeError("Array.prototype.every callback must be a function")
                }
                for (var a = 0; a < n; a++) {
                    if (a in e && !(typeof i === "undefined" ? t(e[a], a, r) : t.call(i, e[a], a, r))) {
                        return false
                    }
                }
                return true
            }
        }, !nt(r.every));
        $(r, {
            some: function some(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = Z.ToUint32(e.length);
                var i;
                if (arguments.length > 1) {
                    i = arguments[1]
                }
                if (!D(t)) {
                    throw new TypeError("Array.prototype.some callback must be a function")
                }
                for (var a = 0; a < n; a++) {
                    if (a in e && (typeof i === "undefined" ? t(e[a], a, r) : t.call(i, e[a], a, r))) {
                        return true
                    }
                }
                return false
            }
        }, !nt(r.some));
        var it = false;
        if (r.reduce) {
            it = typeof r.reduce.call("es5", function(t, r, e, n) {
                return n
            }) === "object"
        }
        $(r, {
            reduce: function reduce(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = Z.ToUint32(e.length);
                if (!D(t)) {
                    throw new TypeError("Array.prototype.reduce callback must be a function")
                }
                if (n === 0 && arguments.length === 1) {
                    throw new TypeError("reduce of empty array with no initial value")
                }
                var i = 0;
                var a;
                if (arguments.length >= 2) {
                    a = arguments[1]
                } else {
                    do {
                        if (i in e) {
                            a = e[i++];
                            break
                        }
                        if (++i >= n) {
                            throw new TypeError("reduce of empty array with no initial value")
                        }
                    } while (true)
                }
                for (; i < n; i++) {
                    if (i in e) {
                        a = t(a, e[i], i, r)
                    }
                }
                return a
            }
        }, !it);
        var at = false;
        if (r.reduceRight) {
            at = typeof r.reduceRight.call("es5", function(t, r, e, n) {
                return n
            }) === "object"
        }
        $(r, {
            reduceRight: function reduceRight(t) {
                var r = Z.ToObject(this);
                var e = et && C(this) ? X(this, "") : r;
                var n = Z.ToUint32(e.length);
                if (!D(t)) {
                    throw new TypeError("Array.prototype.reduceRight callback must be a function")
                }
                if (n === 0 && arguments.length === 1) {
                    throw new TypeError("reduceRight of empty array with no initial value")
                }
                var i;
                var a = n - 1;
                if (arguments.length >= 2) {
                    i = arguments[1]
                } else {
                    do {
                        if (a in e) {
                            i = e[a--];
                            break
                        }
                        if (--a < 0) {
                            throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    } while (true)
                }
                if (a < 0) {
                    return i
                }
                do {
                    if (a in e) {
                        i = t(i, e[a], a, r)
                    }
                } while (a--);
                return i
            }
        }, !at);
        var ot = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
        $(r, {
            indexOf: function indexOf(t) {
                var r = et && C(this) ? X(this, "") : Z.ToObject(this);
                var e = Z.ToUint32(r.length);
                if (e === 0) {
                    return -1
                }
                var n = 0;
                if (arguments.length > 1) {
                    n = Z.ToInteger(arguments[1])
                }
                n = n >= 0 ? n : w(0, e + n);
                for (; n < e; n++) {
                    if (n in r && r[n] === t) {
                        return n
                    }
                }
                return -1
            }
        }, ot);
        var ft = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
        $(r, {
            lastIndexOf: function lastIndexOf(t) {
                var r = et && C(this) ? X(this, "") : Z.ToObject(this);
                var e = Z.ToUint32(r.length);
                if (e === 0) {
                    return -1
                }
                var n = e - 1;
                if (arguments.length > 1) {
                    n = b(n, Z.ToInteger(arguments[1]))
                }
                n = n >= 0 ? n : e - Math.abs(n);
                for (; n >= 0; n--) {
                    if (n in r && t === r[n]) {
                        return n
                    }
                }
                return -1
            }
        }, ft);
        var ut = function() {
            var t = [1, 2];
            var r = t.splice();
            return t.length === 2 && _(r) && r.length === 0
        }();
        $(r, {
            splice: function splice(t, r) {
                if (arguments.length === 0) {
                    return []
                } else {
                    return c.apply(this, arguments)
                }
            }
        }, !ut);
        var lt = function() {
            var t = {};
            r.splice.call(t, 0, 0, 1);
            return t.length === 1
        }();
        $(r, {
            splice: function splice(t, r) {
                if (arguments.length === 0) {
                    return []
                }
                var e = arguments;
                this.length = w(Z.ToInteger(this.length), 0);
                if (arguments.length > 0 && typeof r !== "number") {
                    e = H(arguments);
                    if (e.length < 2) {
                        K(e, this.length - t)
                    } else {
                        e[1] = Z.ToInteger(r)
                    }
                }
                return c.apply(this, e)
            }
        }, !lt);
        var st = function() {
            var r = new t(1e5);
            r[8] = "x";
            r.splice(1, 1);
            return r.indexOf("x") === 7
        }();
        var ct = function() {
            var t = 256;
            var r = [];
            r[t] = "a";
            r.splice(t + 1, 0, "b");
            return r[t] === "a"
        }();
        $(r, {
            splice: function splice(t, r) {
                var e = Z.ToObject(this);
                var n = [];
                var i = Z.ToUint32(e.length);
                var a = Z.ToInteger(t);
                var f = a < 0 ? w(i + a, 0) : b(a, i);
                var u = b(w(Z.ToInteger(r), 0), i - f);
                var l = 0;
                var s;
                while (l < u) {
                    s = o(f + l);
                    if (G(e, s)) {
                        n[l] = e[s]
                    }
                    l += 1
                }
                var c = H(arguments, 2);
                var v = c.length;
                var h;
                if (v < u) {
                    l = f;
                    var p = i - u;
                    while (l < p) {
                        s = o(l + u);
                        h = o(l + v);
                        if (G(e, s)) {
                            e[h] = e[s]
                        } else {
                            delete e[h]
                        }
                        l += 1
                    }
                    l = i;
                    var y = i - u + v;
                    while (l > y) {
                        delete e[l - 1];
                        l -= 1
                    }
                } else if (v > u) {
                    l = i - u;
                    while (l > f) {
                        s = o(l + u - 1);
                        h = o(l + v - 1);
                        if (G(e, s)) {
                            e[h] = e[s]
                        } else {
                            delete e[h]
                        }
                        l -= 1
                    }
                }
                l = f;
                for (var d = 0; d < c.length; ++d) {
                    e[l] = c[d];
                    l += 1
                }
                e.length = i - u + v;
                return n
            }
        }, !st || !ct);
        var vt = r.join;
        var ht;
        try {
            ht = Array.prototype.join.call("123", ",") !== "1,2,3"
        } catch (pt) {
            ht = true
        }
        if (ht) {
            $(r, {
                join: function join(t) {
                    var r = typeof t === "undefined" ? "," : t;
                    return vt.call(C(this) ? X(this, "") : this, r)
                }
            }, ht)
        }
        var yt = [1, 2].join(undefined) !== "1,2";
        if (yt) {
            $(r, {
                join: function join(t) {
                    var r = typeof t === "undefined" ? "," : t;
                    return vt.call(this, r)
                }
            }, yt)
        }
        var dt = function push(t) {
            var r = Z.ToObject(this);
            var e = Z.ToUint32(r.length);
            var n = 0;
            while (n < arguments.length) {
                r[e + n] = arguments[n];
                n += 1
            }
            r.length = e + n;
            return e + n
        };
        var gt = function() {
            var t = {};
            var r = Array.prototype.push.call(t, undefined);
            return r !== 1 || t.length !== 1 || typeof t[0] !== "undefined" || !G(t, 0)
        }();
        $(r, {
            push: function push(t) {
                if (_(this)) {
                    return v.apply(this, arguments)
                }
                return dt.apply(this, arguments)
            }
        }, gt);
        var wt = function() {
            var t = [];
            var r = t.push(undefined);
            return r !== 1 || t.length !== 1 || typeof t[0] !== "undefined" || !G(t, 0)
        }();
        $(r, {
            push: dt
        }, wt);
        $(r, {
            slice: function(t, r) {
                var e = C(this) ? X(this, "") : this;
                return W(e, arguments)
            }
        }, et);
        var bt = function() {
            try {
                [1, 2].sort(null);
                [1, 2].sort({});
                return true
            } catch (t) {}
            return false
        }();
        var Tt = function() {
            try {
                [1, 2].sort(/a/);
                return false
            } catch (t) {}
            return true
        }();
        var mt = function() {
            try {
                [1, 2].sort(undefined);
                return true
            } catch (t) {}
            return false
        }();
        $(r, {
            sort: function sort(t) {
                if (typeof t === "undefined") {
                    return V(this)
                }
                if (!D(t)) {
                    throw new TypeError("Array.prototype.sort callback must be a function")
                }
                return V(this, t)
            }
        }, bt || !mt || !Tt);
        var Dt = !Q({
            toString: null
        }, "toString");
        var St = Q(function() {}, "prototype");
        var xt = !G("x", "0");
        var Ot = function(t) {
            var r = t.constructor;
            return r && r.prototype === t
        };
        var jt = {
            $window: true,
            $console: true,
            $parent: true,
            $self: true,
            $frame: true,
            $frames: true,
            $frameElement: true,
            $webkitIndexedDB: true,
            $webkitStorageInfo: true,
            $external: true
        };
        var Et = function() {
            if (typeof window === "undefined") {
                return false
            }
            for (var t in window) {
                try {
                    if (!jt["$" + t] && G(window, t) && window[t] !== null && typeof window[t] === "object") {
                        Ot(window[t])
                    }
                } catch (r) {
                    return true
                }
            }
            return false
        }();
        var It = function(t) {
            if (typeof window === "undefined" || !Et) {
                return Ot(t)
            }
            try {
                return Ot(t)
            } catch (r) {
                return false
            }
        };
        var Mt = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
        var Ut = Mt.length;
        var Ft = function isArguments(t) {
            return B(t) === "[object Arguments]"
        };
        var Nt = function isArguments(t) {
            return t !== null && typeof t === "object" && typeof t.length === "number" && t.length >= 0 && !_(t) && D(t.callee)
        };
        var Ct = Ft(arguments) ? Ft : Nt;
        $(e, {
            keys: function keys(t) {
                var r = D(t);
                var e = Ct(t);
                var n = t !== null && typeof t === "object";
                var i = n && C(t);
                if (!n && !r && !e) {
                    throw new TypeError("Object.keys called on a non-object")
                }
                var a = [];
                var f = St && r;
                if (i && xt || e) {
                    for (var u = 0; u < t.length; ++u) {
                        K(a, o(u))
                    }
                }
                if (!e) {
                    for (var l in t) {
                        if (!(f && l === "prototype") && G(t, l)) {
                            K(a, o(l))
                        }
                    }
                }
                if (Dt) {
                    var s = It(t);
                    for (var c = 0; c < Ut; c++) {
                        var v = Mt[c];
                        if (!(s && v === "constructor") && G(t, v)) {
                            K(a, v)
                        }
                    }
                }
                return a
            }
        });
        var kt = e.keys && function() {
            return e.keys(arguments).length === 2
        }(1, 2);
        var At = e.keys && function() {
            var t = e.keys(arguments);
            return arguments.length !== 1 || t.length !== 1 || t[0] !== 1
        }(1);
        var Rt = e.keys;
        $(e, {
            keys: function keys(t) {
                if (Ct(t)) {
                    return Rt(H(t))
                } else {
                    return Rt(t)
                }
            }
        }, !kt || At);
        var Pt = new Date(-0xc782b5b342b24).getUTCMonth() !== 0;
        var $t = new Date(-0x55d318d56a724);
        var Jt = new Date(14496624e5);
        var Yt = $t.toUTCString() !== "Mon, 01 Jan -45875 11:59:59 GMT";
        var Zt;
        var zt;
        var Gt = $t.getTimezoneOffset();
        if (Gt < -720) {
            Zt = $t.toDateString() !== "Tue Jan 02 -45875";
            zt = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Jt.toString())
        } else {
            Zt = $t.toDateString() !== "Mon Jan 01 -45875";
            zt = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Jt.toString())
        }
        var Bt = d.bind(Date.prototype.getFullYear);
        var Ht = d.bind(Date.prototype.getMonth);
        var Wt = d.bind(Date.prototype.getDate);
        var Lt = d.bind(Date.prototype.getUTCFullYear);
        var Xt = d.bind(Date.prototype.getUTCMonth);
        var qt = d.bind(Date.prototype.getUTCDate);
        var Kt = d.bind(Date.prototype.getUTCDay);
        var Qt = d.bind(Date.prototype.getUTCHours);
        var Vt = d.bind(Date.prototype.getUTCMinutes);
        var _t = d.bind(Date.prototype.getUTCSeconds);
        var tr = d.bind(Date.prototype.getUTCMilliseconds);
        var rr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var er = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var nr = function daysInMonth(t, r) {
            return Wt(new Date(r, t, 0))
        };
        $(Date.prototype, {
            getFullYear: function getFullYear() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Bt(this);
                if (t < 0 && Ht(this) > 11) {
                    return t + 1
                }
                return t
            },
            getMonth: function getMonth() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Bt(this);
                var r = Ht(this);
                if (t < 0 && r > 11) {
                    return 0
                }
                return r
            },
            getDate: function getDate() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Bt(this);
                var r = Ht(this);
                var e = Wt(this);
                if (t < 0 && r > 11) {
                    if (r === 12) {
                        return e
                    }
                    var n = nr(0, t + 1);
                    return n - e + 1
                }
                return e
            },
            getUTCFullYear: function getUTCFullYear() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Lt(this);
                if (t < 0 && Xt(this) > 11) {
                    return t + 1
                }
                return t
            },
            getUTCMonth: function getUTCMonth() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Lt(this);
                var r = Xt(this);
                if (t < 0 && r > 11) {
                    return 0
                }
                return r
            },
            getUTCDate: function getUTCDate() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Lt(this);
                var r = Xt(this);
                var e = qt(this);
                if (t < 0 && r > 11) {
                    if (r === 12) {
                        return e
                    }
                    var n = nr(0, t + 1);
                    return n - e + 1
                }
                return e
            }
        }, Pt);
        $(Date.prototype, {
            toUTCString: function toUTCString() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = Kt(this);
                var r = qt(this);
                var e = Xt(this);
                var n = Lt(this);
                var i = Qt(this);
                var a = Vt(this);
                var o = _t(this);
                return rr[t] + ", " + (r < 10 ? "0" + r : r) + " " + er[e] + " " + n + " " + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT"
            }
        }, Pt || Yt);
        $(Date.prototype, {
            toDateString: function toDateString() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = this.getDay();
                var r = this.getDate();
                var e = this.getMonth();
                var n = this.getFullYear();
                return rr[t] + " " + er[e] + " " + (r < 10 ? "0" + r : r) + " " + n
            }
        }, Pt || Zt);
        if (Pt || zt) {
            Date.prototype.toString = function toString() {
                if (!this || !(this instanceof Date)) {
                    throw new TypeError("this is not a Date object.")
                }
                var t = this.getDay();
                var r = this.getDate();
                var e = this.getMonth();
                var n = this.getFullYear();
                var i = this.getHours();
                var a = this.getMinutes();
                var o = this.getSeconds();
                var f = this.getTimezoneOffset();
                var u = Math.floor(Math.abs(f) / 60);
                var l = Math.floor(Math.abs(f) % 60);
                return rr[t] + " " + er[e] + " " + (r < 10 ? "0" + r : r) + " " + n + " " + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT" + (f > 0 ? "-" : "+") + (u < 10 ? "0" + u : u) + (l < 10 ? "0" + l : l)
            };
            if (P) {
                e.defineProperty(Date.prototype, "toString", {
                    configurable: true,
                    enumerable: false,
                    writable: true
                })
            }
        }
        var ir = -621987552e5;
        var ar = "-000001";
        var or = Date.prototype.toISOString && new Date(ir).toISOString().indexOf(ar) === -1;
        var fr = Date.prototype.toISOString && new Date(-1).toISOString() !== "1969-12-31T23:59:59.999Z";
        var ur = d.bind(Date.prototype.getTime);
        $(Date.prototype, {
            toISOString: function toISOString() {
                if (!isFinite(this) || !isFinite(ur(this))) {
                    throw new RangeError("Date.prototype.toISOString called on non-finite value.")
                }
                var t = Lt(this);
                var r = Xt(this);
                t += Math.floor(r / 12);
                r = (r % 12 + 12) % 12;
                var e = [r + 1, qt(this), Qt(this), Vt(this), _t(this)];
                t = (t < 0 ? "-" : t > 9999 ? "+" : "") + L("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
                for (var n = 0; n < e.length; ++n) {
                    e[n] = L("00" + e[n], -2)
                }
                return t + "-" + H(e, 0, 2).join("-") + "T" + H(e, 2).join(":") + "." + L("000" + tr(this), -3) + "Z"
            }
        }, or || fr);
        var lr = function() {
            try {
                return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(ir).toJSON().indexOf(ar) !== -1 && Date.prototype.toJSON.call({
                    toISOString: function() {
                        return true
                    }
                })
            } catch (t) {
                return false
            }
        }();
        if (!lr) {
            Date.prototype.toJSON = function toJSON(t) {
                var r = e(this);
                var n = Z.ToPrimitive(r);
                if (typeof n === "number" && !isFinite(n)) {
                    return null
                }
                var i = r.toISOString;
                if (!D(i)) {
                    throw new TypeError("toISOString property is not callable")
                }
                return i.call(r)
            }
        }
        var sr = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15;
        var cr = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
        var vr = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
        if (vr || cr || !sr) {
            var hr = Math.pow(2, 31) - 1;
            var pr = Y(new Date(1970, 0, 1, 0, 0, 0, hr + 1).getTime());
            Date = function(t) {
                var r = function Date(e, n, i, a, f, u, l) {
                    var s = arguments.length;
                    var c;
                    if (this instanceof t) {
                        var v = u;
                        var h = l;
                        if (pr && s >= 7 && l > hr) {
                            var p = Math.floor(l / hr) * hr;
                            var y = Math.floor(p / 1e3);
                            v += y;
                            h -= y * 1e3
                        }
                        c = s === 1 && o(e) === e ? new t(r.parse(e)) : s >= 7 ? new t(e, n, i, a, f, v, h) : s >= 6 ? new t(e, n, i, a, f, v) : s >= 5 ? new t(e, n, i, a, f) : s >= 4 ? new t(e, n, i, a) : s >= 3 ? new t(e, n, i) : s >= 2 ? new t(e, n) : s >= 1 ? new t(e instanceof t ? +e : e) : new t
                    } else {
                        c = t.apply(this, arguments)
                    }
                    if (!J(c)) {
                        $(c, {
                            constructor: r
                        }, true)
                    }
                    return c
                };
                var e = new RegExp("^" + "(\\d{4}|[+-]\\d{6})" + "(?:-(\\d{2})" + "(?:-(\\d{2})" + "(?:" + "T(\\d{2})" + ":(\\d{2})" + "(?:" + ":(\\d{2})" + "(?:(\\.\\d{1,}))?" + ")?" + "(" + "Z|" + "(?:" + "([-+])" + "(\\d{2})" + ":(\\d{2})" + ")" + ")?)?)?)?" + "$");
                var n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
                var i = function dayFromMonth(t, r) {
                    var e = r > 1 ? 1 : 0;
                    return n[r] + Math.floor((t - 1969 + e) / 4) - Math.floor((t - 1901 + e) / 100) + Math.floor((t - 1601 + e) / 400) + 365 * (t - 1970)
                };
                var a = function toUTC(r) {
                    var e = 0;
                    var n = r;
                    if (pr && n > hr) {
                        var i = Math.floor(n / hr) * hr;
                        var a = Math.floor(i / 1e3);
                        e += a;
                        n -= a * 1e3
                    }
                    return u(new t(1970, 0, 1, 0, 0, e, n))
                };
                for (var f in t) {
                    if (G(t, f)) {
                        r[f] = t[f]
                    }
                }
                $(r, {
                    now: t.now,
                    UTC: t.UTC
                }, true);
                r.prototype = t.prototype;
                $(r.prototype, {
                    constructor: r
                }, true);
                var l = function parse(r) {
                    var n = e.exec(r);
                    if (n) {
                        var o = u(n[1]),
                            f = u(n[2] || 1) - 1,
                            l = u(n[3] || 1) - 1,
                            s = u(n[4] || 0),
                            c = u(n[5] || 0),
                            v = u(n[6] || 0),
                            h = Math.floor(u(n[7] || 0) * 1e3),
                            p = Boolean(n[4] && !n[8]),
                            y = n[9] === "-" ? 1 : -1,
                            d = u(n[10] || 0),
                            g = u(n[11] || 0),
                            w;
                        var b = c > 0 || v > 0 || h > 0;
                        if (s < (b ? 24 : 25) && c < 60 && v < 60 && h < 1e3 && f > -1 && f < 12 && d < 24 && g < 60 && l > -1 && l < i(o, f + 1) - i(o, f)) {
                            w = ((i(o, f) + l) * 24 + s + d * y) * 60;
                            w = ((w + c + g * y) * 60 + v) * 1e3 + h;
                            if (p) {
                                w = a(w)
                            }
                            if (-864e13 <= w && w <= 864e13) {
                                return w
                            }
                        }
                        return NaN
                    }
                    return t.parse.apply(this, arguments)
                };
                $(r, {
                    parse: l
                });
                return r
            }(Date)
        }
        if (!Date.now) {
            Date.now = function now() {
                return (new Date).getTime()
            }
        }
        var yr = l.toFixed && (8e-5.toFixed(3) !== "0.000" || .9. toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128");
        var dr = {
            base: 1e7,
            size: 6,
            data: [0, 0, 0, 0, 0, 0],
            multiply: function multiply(t, r) {
                var e = -1;
                var n = r;
                while (++e < dr.size) {
                    n += t * dr.data[e];
                    dr.data[e] = n % dr.base;
                    n = Math.floor(n / dr.base)
                }
            },
            divide: function divide(t) {
                var r = dr.size;
                var e = 0;
                while (--r >= 0) {
                    e += dr.data[r];
                    dr.data[r] = Math.floor(e / t);
                    e = e % t * dr.base
                }
            },
            numToString: function numToString() {
                var t = dr.size;
                var r = "";
                while (--t >= 0) {
                    if (r !== "" || t === 0 || dr.data[t] !== 0) {
                        var e = o(dr.data[t]);
                        if (r === "") {
                            r = e
                        } else {
                            r += L("0000000", 0, 7 - e.length) + e
                        }
                    }
                }
                return r
            },
            pow: function pow(t, r, e) {
                return r === 0 ? e : r % 2 === 1 ? pow(t, r - 1, e * t) : pow(t * t, r / 2, e)
            },
            log: function log(t) {
                var r = 0;
                var e = t;
                while (e >= 4096) {
                    r += 12;
                    e /= 4096
                }
                while (e >= 2) {
                    r += 1;
                    e /= 2
                }
                return r
            }
        };
        var gr = function toFixed(t) {
            var r, e, n, i, a, f, l, s;
            r = u(t);
            r = Y(r) ? 0 : Math.floor(r);
            if (r < 0 || r > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals")
            }
            e = u(this);
            if (Y(e)) {
                return "NaN"
            }
            if (e <= -1e21 || e >= 1e21) {
                return o(e)
            }
            n = "";
            if (e < 0) {
                n = "-";
                e = -e
            }
            i = "0";
            if (e > 1e-21) {
                a = dr.log(e * dr.pow(2, 69, 1)) - 69;
                f = a < 0 ? e * dr.pow(2, -a, 1) : e / dr.pow(2, a, 1);
                f *= 4503599627370496;
                a = 52 - a;
                if (a > 0) {
                    dr.multiply(0, f);
                    l = r;
                    while (l >= 7) {
                        dr.multiply(1e7, 0);
                        l -= 7
                    }
                    dr.multiply(dr.pow(10, l, 1), 0);
                    l = a - 1;
                    while (l >= 23) {
                        dr.divide(1 << 23);
                        l -= 23
                    }
                    dr.divide(1 << l);
                    dr.multiply(1, 1);
                    dr.divide(2);
                    i = dr.numToString()
                } else {
                    dr.multiply(0, f);
                    dr.multiply(1 << -a, 0);
                    i = dr.numToString() + L("0.00000000000000000000", 2, 2 + r)
                }
            }
            if (r > 0) {
                s = i.length;
                if (s <= r) {
                    i = n + L("0.0000000000000000000", 0, r - s + 2) + i
                } else {
                    i = n + L(i, 0, s - r) + "." + L(i, s - r)
                }
            } else {
                i = n + i
            }
            return i
        };
        $(l, {
            toFixed: gr
        }, yr);
        var wr = function() {
            try {
                return 1..toPrecision(undefined) === "1"
            } catch (t) {
                return true
            }
        }();
        var br = l.toPrecision;
        $(l, {
            toPrecision: function toPrecision(t) {
                return typeof t === "undefined" ? br.call(this) : br.call(this, t)
            }
        }, wr);
        if ("ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1) {
            (function() {
                var t = typeof /()??/.exec("")[1] === "undefined";
                var r = Math.pow(2, 32) - 1;
                f.split = function(e, n) {
                    var i = String(this);
                    if (typeof e === "undefined" && n === 0) {
                        return []
                    }
                    if (!M(e)) {
                        return X(this, e, n)
                    }
                    var a = [];
                    var o = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                        f = 0,
                        u, l, s, c;
                    var h = new RegExp(e.source, o + "g");
                    if (!t) {
                        u = new RegExp("^" + h.source + "$(?!\\s)", o)
                    }
                    var p = typeof n === "undefined" ? r : Z.ToUint32(n);
                    l = h.exec(i);
                    while (l) {
                        s = l.index + l[0].length;
                        if (s > f) {
                            K(a, L(i, f, l.index));
                            if (!t && l.length > 1) {
                                l[0].replace(u, function() {
                                    for (var t = 1; t < arguments.length - 2; t++) {
                                        if (typeof arguments[t] === "undefined") {
                                            l[t] = void 0
                                        }
                                    }
                                })
                            }
                            if (l.length > 1 && l.index < i.length) {
                                v.apply(a, H(l, 1))
                            }
                            c = l[0].length;
                            f = s;
                            if (a.length >= p) {
                                break
                            }
                        }
                        if (h.lastIndex === l.index) {
                            h.lastIndex++
                        }
                        l = h.exec(i)
                    }
                    if (f === i.length) {
                        if (c || !h.test("")) {
                            K(a, "")
                        }
                    } else {
                        K(a, L(i, f))
                    }
                    return a.length > p ? H(a, 0, p) : a
                }
            })()
        } else if ("0".split(void 0, 0).length) {
            f.split = function split(t, r) {
                if (typeof t === "undefined" && r === 0) {
                    return []
                }
                return X(this, t, r)
            }
        }
        var Tr = f.replace;
        var mr = function() {
            var t = [];
            "x".replace(/x(.)?/g, function(r, e) {
                K(t, e)
            });
            return t.length === 1 && typeof t[0] === "undefined"
        }();
        if (!mr) {
            f.replace = function replace(t, r) {
                var e = D(r);
                var n = M(t) && /\)[*?]/.test(t.source);
                if (!e || !n) {
                    return Tr.call(this, t, r)
                } else {
                    var i = function(e) {
                        var n = arguments.length;
                        var i = t.lastIndex;
                        t.lastIndex = 0;
                        var a = t.exec(e) || [];
                        t.lastIndex = i;
                        K(a, arguments[n - 2], arguments[n - 1]);
                        return r.apply(this, a)
                    };
                    return Tr.call(this, t, i)
                }
            }
        }
        var Dr = f.substr;
        var Sr = "".substr && "0b".substr(-1) !== "b";
        $(f, {
            substr: function substr(t, r) {
                var e = t;
                if (t < 0) {
                    e = w(this.length + t, 0)
                }
                return Dr.call(this, e, r)
            }
        }, Sr);
        var xr = "	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028" + "\u2029\ufeff";
        var Or = "\u200b";
        var jr = "[" + xr + "]";
        var Er = new RegExp("^" + jr + jr + "*");
        var Ir = new RegExp(jr + jr + "*$");
        var Mr = f.trim && (xr.trim() || !Or.trim());
        $(f, {
            trim: function trim() {
                if (typeof this === "undefined" || this === null) {
                    throw new TypeError("can't convert " + this + " to object")
                }
                return o(this).replace(Er, "").replace(Ir, "")
            }
        }, Mr);
        var Ur = d.bind(String.prototype.trim);
        var Fr = f.lastIndexOf && "abc\u3042\u3044".lastIndexOf("\u3042\u3044", 2) !== -1;
        $(f, {
            lastIndexOf: function lastIndexOf(t) {
                if (typeof this === "undefined" || this === null) {
                    throw new TypeError("can't convert " + this + " to object")
                }
                var r = o(this);
                var e = o(t);
                var n = arguments.length > 1 ? u(arguments[1]) : NaN;
                var i = Y(n) ? Infinity : Z.ToInteger(n);
                var a = b(w(i, 0), r.length);
                var f = e.length;
                var l = a + f;
                while (l > 0) {
                    l = w(0, l - f);
                    var s = q(L(r, l, a + f), e);
                    if (s !== -1) {
                        return l + s
                    }
                }
                return -1
            }
        }, Fr);
        var Nr = f.lastIndexOf;
        $(f, {
            lastIndexOf: function lastIndexOf(t) {
                return Nr.apply(this, arguments)
            }
        }, f.lastIndexOf.length !== 1);
        if (parseInt(xr + "08") !== 8 || parseInt(xr + "0x16") !== 22) {
            parseInt = function(t) {
                var r = /^[\-+]?0[xX]/;
                return function parseInt(e, n) {
                    var i = Ur(String(e));
                    var a = u(n) || (r.test(i) ? 16 : 10);
                    return t(i, a)
                }
            }(parseInt)
        }
        if (1 / parseFloat("-0") !== -Infinity) {
            parseFloat = function(t) {
                return function parseFloat(r) {
                    var e = Ur(String(r));
                    var n = t(e);
                    return n === 0 && L(e, 0, 1) === "-" ? -0 : n
                }
            }(parseFloat)
        }
        if (String(new RangeError("test")) !== "RangeError: test") {
            var Cr = function toString() {
                if (typeof this === "undefined" || this === null) {
                    throw new TypeError("can't convert " + this + " to object")
                }
                var t = this.name;
                if (typeof t === "undefined") {
                    t = "Error"
                } else if (typeof t !== "string") {
                    t = o(t)
                }
                var r = this.message;
                if (typeof r === "undefined") {
                    r = ""
                } else if (typeof r !== "string") {
                    r = o(r)
                }
                if (!t) {
                    return r
                }
                if (!r) {
                    return t
                }
                return t + ": " + r
            };
            Error.prototype.toString = Cr
        }
        if (P) {
            var kr = function(t, r) {
                if (Q(t, r)) {
                    var e = Object.getOwnPropertyDescriptor(t, r);
                    if (e.configurable) {
                        e.enumerable = false;
                        Object.defineProperty(t, r, e)
                    }
                }
            };
            kr(Error.prototype, "message");
            if (Error.prototype.message !== "") {
                Error.prototype.message = ""
            }
            kr(Error.prototype, "name")
        }
        if (String(/a/gim) !== "/a/gim") {
            var Ar = function toString() {
                var t = "/" + this.source + "/";
                if (this.global) {
                    t += "g"
                }
                if (this.ignoreCase) {
                    t += "i"
                }
                if (this.multiline) {
                    t += "m"
                }
                return t
            };
            RegExp.prototype.toString = Ar
        }
    });
} catch (e) {}
try {
    (function(e, t) {
        "use strict";
        if (typeof define === "function" && define.amd) {
            define(t)
        } else if (typeof exports === "object") {
            module.exports = t()
        } else {
            e.returnExports = t()
        }
    })(this, function() {
        var e = Function.call;
        var t = Object.prototype;
        var r = e.bind(t.hasOwnProperty);
        var n = e.bind(t.propertyIsEnumerable);
        var o = e.bind(t.toString);
        var i;
        var c;
        var f;
        var a;
        var l = r(t, "__defineGetter__");
        if (l) {
            i = e.bind(t.__defineGetter__);
            c = e.bind(t.__defineSetter__);
            f = e.bind(t.__lookupGetter__);
            a = e.bind(t.__lookupSetter__)
        }
        var u = function isPrimitive(e) {
            return e == null || typeof e !== "object" && typeof e !== "function"
        };
        if (!Object.getPrototypeOf) {
            Object.getPrototypeOf = function getPrototypeOf(e) {
                var r = e.__proto__;
                if (r || r === null) {
                    return r
                } else if (o(e.constructor) === "[object Function]") {
                    return e.constructor.prototype
                } else if (e instanceof Object) {
                    return t
                } else {
                    return null
                }
            }
        }
        var p = function doesGetOwnPropertyDescriptorWork(e) {
            try {
                e.sentinel = 0;
                return Object.getOwnPropertyDescriptor(e, "sentinel").value === 0
            } catch (t) {
                return false
            }
        };
        if (Object.defineProperty) {
            var s = p({});
            var b = typeof document === "undefined" || p(document.createElement("div"));
            if (!b || !s) {
                var O = Object.getOwnPropertyDescriptor
            }
        }
        if (!Object.getOwnPropertyDescriptor || O) {
            var d = "Object.getOwnPropertyDescriptor called on a non-object: ";
            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(e, o) {
                if (u(e)) {
                    throw new TypeError(d + e)
                }
                if (O) {
                    try {
                        return O.call(Object, e, o)
                    } catch (i) {}
                }
                var c;
                if (!r(e, o)) {
                    return c
                }
                c = {
                    enumerable: n(e, o),
                    configurable: true
                };
                if (l) {
                    var p = e.__proto__;
                    var s = e !== t;
                    if (s) {
                        e.__proto__ = t
                    }
                    var b = f(e, o);
                    var y = a(e, o);
                    if (s) {
                        e.__proto__ = p
                    }
                    if (b || y) {
                        if (b) {
                            c.get = b
                        }
                        if (y) {
                            c.set = y
                        }
                        return c
                    }
                }
                c.value = e[o];
                c.writable = true;
                return c
            }
        }
        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(e) {
                return Object.keys(e)
            }
        }
        if (!Object.create) {
            var y;
            var j = !({
                    __proto__: null
                }
                instanceof Object);
            var v = function shouldUseActiveX() {
                if (!document.domain) {
                    return false
                }
                try {
                    return !!new ActiveXObject("htmlfile")
                } catch (e) {
                    return false
                }
            };
            var _ = function getEmptyViaActiveX() {
                var e;
                var t;
                t = new ActiveXObject("htmlfile");
                var r = "script";
                t.write("<" + r + "></" + r + ">");
                t.close();
                e = t.parentWindow.Object.prototype;
                t = null;
                return e
            };
            var w = function getEmptyViaIFrame() {
                var e = document.createElement("iframe");
                var t = document.body || document.documentElement;
                var r;
                e.style.display = "none";
                t.appendChild(e);
                e.src = "javascript:";
                r = e.contentWindow.Object.prototype;
                t.removeChild(e);
                e = null;
                return r
            };
            if (j || typeof document === "undefined") {
                y = function() {
                    return {
                        __proto__: null
                    }
                }
            } else {
                y = function() {
                    var e = v() ? _() : w();
                    delete e.constructor;
                    delete e.hasOwnProperty;
                    delete e.propertyIsEnumerable;
                    delete e.isPrototypeOf;
                    delete e.toLocaleString;
                    delete e.toString;
                    delete e.valueOf;
                    var t = function Empty() {};
                    t.prototype = e;
                    y = function() {
                        return new t
                    };
                    return new t
                }
            }
            Object.create = function create(e, t) {
                var r;
                var n = function Type() {};
                if (e === null) {
                    r = y()
                } else {
                    if (e !== null && u(e)) {
                        throw new TypeError("Object prototype may only be an Object or null")
                    }
                    n.prototype = e;
                    r = new n;
                    r.__proto__ = e
                }
                if (t !== void 0) {
                    Object.defineProperties(r, t)
                }
                return r
            }
        }
        var m = function doesDefinePropertyWork(e) {
            try {
                Object.defineProperty(e, "sentinel", {});
                return "sentinel" in e
            } catch (t) {
                return false
            }
        };
        if (Object.defineProperty) {
            var P = m({});
            var E = typeof document === "undefined" || m(document.createElement("div"));
            if (!P || !E) {
                var h = Object.defineProperty,
                    g = Object.defineProperties
            }
        }
        if (!Object.defineProperty || h) {
            var z = "Property description must be an object: ";
            var T = "Object.defineProperty called on non-object: ";
            var x = "getters & setters can not be defined on this javascript engine";
            Object.defineProperty = function defineProperty(e, r, n) {
                if (u(e)) {
                    throw new TypeError(T + e)
                }
                if (u(n)) {
                    throw new TypeError(z + n)
                }
                if (h) {
                    try {
                        return h.call(Object, e, r, n)
                    } catch (o) {}
                }
                if ("value" in n) {
                    if (l && (f(e, r) || a(e, r))) {
                        var p = e.__proto__;
                        e.__proto__ = t;
                        delete e[r];
                        e[r] = n.value;
                        e.__proto__ = p
                    } else {
                        e[r] = n.value
                    }
                } else {
                    var s = "get" in n;
                    var b = "set" in n;
                    if (!l && (s || b)) {
                        throw new TypeError(x)
                    }
                    if (s) {
                        i(e, r, n.get)
                    }
                    if (b) {
                        c(e, r, n.set)
                    }
                }
                return e
            }
        }
        if (!Object.defineProperties || g) {
            Object.defineProperties = function defineProperties(e, t) {
                if (g) {
                    try {
                        return g.call(Object, e, t)
                    } catch (r) {}
                }
                Object.keys(t).forEach(function(r) {
                    if (r !== "__proto__") {
                        Object.defineProperty(e, r, t[r])
                    }
                });
                return e
            }
        }
        if (!Object.seal) {
            Object.seal = function seal(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.seal can only be called on Objects.")
                }
                return e
            }
        }
        if (!Object.freeze) {
            Object.freeze = function freeze(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.freeze can only be called on Objects.")
                }
                return e
            }
        }
        try {
            Object.freeze(function() {})
        } catch (S) {
            Object.freeze = function(e) {
                return function freeze(t) {
                    if (typeof t === "function") {
                        return t
                    } else {
                        return e(t)
                    }
                }
            }(Object.freeze)
        }
        if (!Object.preventExtensions) {
            Object.preventExtensions = function preventExtensions(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.preventExtensions can only be called on Objects.")
                }
                return e
            }
        }
        if (!Object.isSealed) {
            Object.isSealed = function isSealed(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isSealed can only be called on Objects.")
                }
                return false
            }
        }
        if (!Object.isFrozen) {
            Object.isFrozen = function isFrozen(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isFrozen can only be called on Objects.")
                }
                return false
            }
        }
        if (!Object.isExtensible) {
            Object.isExtensible = function isExtensible(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Object.isExtensible can only be called on Objects.")
                }
                var t = "";
                while (r(e, t)) {
                    t += "?"
                }
                e[t] = true;
                var n = r(e, t);
                delete e[t];
                return n
            }
        }
    });
} catch (e) {}
try {
    (function() {
        function N(p, r) {
            function q(a) {
                if (q[a] !== w) return q[a];
                var c;
                if ("bug-string-char-index" == a) c = "a" != "a" [0];
                else if ("json" == a) c = q("json-stringify") && q("json-parse");
                else {
                    var e;
                    if ("json-stringify" == a) {
                        c = r.stringify;
                        var b = "function" == typeof c && s;
                        if (b) {
                            (e = function() {
                                return 1
                            }).toJSON = e;
                            try {
                                b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == c({
                                    a: [e, !0, !1, null, "\x00\b\n\f\r\t"]
                                }) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                            } catch (f) {
                                b = !1
                            }
                        }
                        c = b
                    }
                    if ("json-parse" == a) {
                        c = r.parse;
                        if ("function" == typeof c) try {
                            if (0 === c("0") && !c(!1)) {
                                e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var n = 5 == e.a.length && 1 === e.a[0];
                                if (n) {
                                    try {
                                        n = !c('"\t"')
                                    } catch (d) {}
                                    if (n) try {
                                        n = 1 !== c("01")
                                    } catch (g) {}
                                    if (n) try {
                                        n = 1 !== c("1.")
                                    } catch (m) {}
                                }
                            }
                        } catch (X) {
                            n = !1
                        }
                        c = n
                    }
                }
                return q[a] = !!c
            }
            p || (p = k.Object());
            r || (r = k.Object());
            var t = p.Number || k.Number,
                A = p.String || k.String,
                H = p.Object || k.Object,
                C = p.Date || k.Date,
                G = p.SyntaxError || k.SyntaxError,
                K = p.TypeError || k.TypeError,
                L = p.Math || k.Math,
                I = p.JSON || k.JSON;
            "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
            var H = H.prototype,
                u = H.toString,
                v, B, w, s = new C(-0xc782b5b800cec);
            try {
                s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
            } catch (Q) {}
            if (!q("json")) {
                var D = q("bug-string-char-index");
                if (!s) var x = L.floor,
                    M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    E = function(a, c) {
                        return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
                    };
                (v = H.hasOwnProperty) || (v = function(a) {
                    var c = {},
                        e;
                    (c.__proto__ = null, c.__proto__ = {
                        toString: 1
                    }, c).toString != u ? v = function(a) {
                        var c = this.__proto__;
                        a = a in (this.__proto__ = null, this);
                        this.__proto__ = c;
                        return a
                    } : (e = c.constructor, v = function(a) {
                        var c = (this.constructor || e).prototype;
                        return a in this && !(a in c && this[a] === c[a])
                    });
                    c = null;
                    return v.call(this, a)
                });
                B = function(a, c) {
                    var e = 0,
                        b, f, n;
                    (b = function() {
                        this.valueOf = 0
                    }).prototype.valueOf = 0;
                    f = new b;
                    for (n in f) v.call(f, n) && e++;
                    b = f = null;
                    e ? B = 2 == e ? function(a, c) {
                        var e = {},
                            b = "[object Function]" == u.call(a),
                            f;
                        for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                    } : function(a, c) {
                        var e = "[object Function]" == u.call(a),
                            b, f;
                        for (b in a) e && "prototype" == b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                        (f || v.call(a, b = "constructor")) && c(b)
                    } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function(a, c) {
                        var e = "[object Function]" == u.call(a),
                            b, h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                        for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                        for (e = f.length; b = f[--e]; h.call(a, b) && c(b));
                    });
                    return B(a, c)
                };
                if (!q("json-stringify")) {
                    var U = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        y = function(a, c) {
                            return ("000000" + (c || 0)).slice(-a)
                        },
                        R = function(a) {
                            for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                                var d = a.charCodeAt(b);
                                switch (d) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        c += U[d];
                                        break;
                                    default:
                                        if (32 > d) {
                                            c += "\\u00" + y(2, d.toString(16));
                                            break
                                        }
                                        c += f ? n[b] : a.charAt(b)
                                }
                            }
                            return c + '"'
                        },
                        O = function(a, c, b, h, f, n, d) {
                            var g, m, k, l, p, r, s, t, q;
                            try {
                                g = c[a]
                            } catch (z) {}
                            if ("object" == typeof g && g)
                                if (m = u.call(g), "[object Date]" != m || v.call(g, "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a));
                                else if (g > -1 / 0 && g < 1 / 0) {
                                if (E) {
                                    l = x(g / 864E5);
                                    for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++);
                                    for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++);
                                    l = 1 + l - E(m, k);
                                    p = (g % 864E5 + 864E5) % 864E5;
                                    r = x(p / 36E5) % 24;
                                    s = x(p / 6E4) % 60;
                                    t = x(p / 1E3) % 60;
                                    p %= 1E3
                                } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                                g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                            } else g = null;
                            b && (g = b.call(c, a, g));
                            if (null === g) return "null";
                            m = u.call(g);
                            if ("[object Boolean]" == m) return "" + g;
                            if ("[object Number]" == m) return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                            if ("[object String]" == m) return R("" + g);
                            if ("object" == typeof g) {
                                for (a = d.length; a--;)
                                    if (d[a] === g) throw K();
                                d.push(g);
                                q = [];
                                c = n;
                                n += f;
                                if ("[object Array]" == m) {
                                    k = 0;
                                    for (a = g.length; k < a; k++) m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" : m);
                                    a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                                } else B(h || g, function(a) {
                                    var c = O(a, g, b, h, f, n, d);
                                    c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                                }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                                d.pop();
                                return a
                            }
                        };
                    r.stringify = function(a, c, b) {
                        var h, f, n, d;
                        if (F[typeof c] && c)
                            if ("[object Function]" == (d = u.call(c))) f = c;
                            else if ("[object Array]" == d) {
                            n = {};
                            for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1));
                        }
                        if (b)
                            if ("[object Number]" == (d = u.call(b))) {
                                if (0 < (b -= b % 1))
                                    for (h = "", 10 < b && (b = 10); h.length < b; h += " ");
                            } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                        return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                    }
                }
                if (!q("json-parse")) {
                    var V = A.fromCharCode,
                        W = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        b, J, l = function() {
                            b = J = null;
                            throw G();
                        },
                        z = function() {
                            for (var a = J, c = a.length, e, h, f, k, d; b < c;) switch (d = a.charCodeAt(b), d) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = D ? a.charAt(b) : a[b], b++, e;
                                case 34:
                                    e = "@";
                                    for (b++; b < c;)
                                        if (d = a.charCodeAt(b), 32 > d) l();
                                        else if (92 == d) switch (d = a.charCodeAt(++b), d) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            e += W[d];
                                            b++;
                                            break;
                                        case 117:
                                            h = ++b;
                                            for (f = b + 4; b < f; b++) d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                            e += V("0x" + a.slice(h, b));
                                            break;
                                        default:
                                            l()
                                    } else {
                                        if (34 == d) break;
                                        d = a.charCodeAt(b);
                                        for (h = b; 32 <= d && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                        e += a.slice(h, b)
                                    }
                                    if (34 == a.charCodeAt(b)) return b++, e;
                                    l();
                                default:
                                    h = b;
                                    45 == d && (k = !0, d = a.charCodeAt(++b));
                                    if (48 <= d && 57 >= d) {
                                        for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++);
                                        if (46 == a.charCodeAt(b)) {
                                            for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                            f == b && l();
                                            b = f
                                        }
                                        d = a.charCodeAt(b);
                                        if (101 == d || 69 == d) {
                                            d = a.charCodeAt(++b);
                                            43 != d && 45 != d || b++;
                                            for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                            f == b && l();
                                            b = f
                                        }
                                        return +a.slice(h, b)
                                    }
                                    k && l();
                                    if ("true" == a.slice(b, b + 4)) return b += 4, !0;
                                    if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                    if ("null" == a.slice(b, b + 4)) return b += 4, null;
                                    l()
                            }
                            return "$"
                        },
                        P = function(a) {
                            var c, b;
                            "$" == a && l();
                            if ("string" == typeof a) {
                                if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (c = [];; b || (b = !0)) {
                                        a = z();
                                        if ("]" == a) break;
                                        b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                        "," == a && l();
                                        c.push(P(a))
                                    }
                                    return c
                                }
                                if ("{" == a) {
                                    for (c = {};; b || (b = !0)) {
                                        a = z();
                                        if ("}" == a) break;
                                        b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                        "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                        c[a.slice(1)] = P(z())
                                    }
                                    return c
                                }
                                l()
                            }
                            return a
                        },
                        T = function(a, b, e) {
                            e = S(a, b, e);
                            e === w ? delete a[b] : a[b] = e
                        },
                        S = function(a, b, e) {
                            var h = a[b],
                                f;
                            if ("object" == typeof h && h)
                                if ("[object Array]" == u.call(h))
                                    for (f = h.length; f--;) T(h, f, e);
                                else B(h, function(a) {
                                    T(h, a, e)
                                });
                            return e.call(a, b, h)
                        };
                    r.parse = function(a, c) {
                        var e, h;
                        b = 0;
                        J = "" + a;
                        e = P(z());
                        "$" != z() && l();
                        b = J = null;
                        return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                    }
                }
            }
            r.runInContext = N;
            return r
        }
        var K = typeof define === "function" && define.amd,
            F = {
                "function": !0,
                object: !0
            },
            G = F[typeof exports] && exports && !exports.nodeType && exports,
            k = F[typeof window] && window || this,
            t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
        if (G && !K) N(k, G);
        else {
            var L = k.JSON,
                Q = k.JSON3,
                M = !1,
                A = N(k, k.JSON3 = {
                    noConflict: function() {
                        M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                        return A
                    }
                });
            k.JSON = {
                parse: A.parse,
                stringify: A.stringify
            }
        }
        K && define(function() {
            return A
        })
    }).call(this);
} catch (e) {}
try {
    ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "1.12.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === n.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                try {
                    if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (!l.ownFirst)
                    for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && n.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d]) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else
                    for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(e.call(arguments)))
                }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });

        function s(a) {
            var b = !!a && "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a)))
                        if (f = o[1]) {
                            if (9 === x) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = la(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = ma(b);

            function pa() {}
            pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            };

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ua(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b
                    }, h, !0), l = ra(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                        }
                        m.push(c)
                    }
                return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++])
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            return h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return n.inArray(a, b) > -1 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    if (f = d.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return A.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b, c = n(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (n.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function F(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var G = /\S+/g;

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = !0, c || j.disable(), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        });

        function J() {
            d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
        }

        function K() {
            (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
        }
        n.ready.promise = function(b) {
            if (!I)
                if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
                else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && ! function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
            return I.promise(b)
        }, n.ready.promise();
        var L;
        for (L in n(l)) break;
        l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
                var a, b, c, e;
                c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
            }),
            function() {
                var a = d.createElement("div");
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
                a = null
            }();
        var M = function(a) {
                var b = n.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            },
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function P(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(O, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    n.data(a, b, c)
                } else c = void 0;
            }
            return c
        }

        function Q(a) {
            var b;
            for (b in a)
                if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function R(a, b, d, e) {
            if (M(a)) {
                var f, g, h = n.expando,
                    i = a.nodeType,
                    j = i ? n.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }

        function S(a, b, c) {
            if (M(a)) {
                var d, e, f = a.nodeType,
                    g = f ? n.cache : a,
                    h = f ? a[n.expando] : n.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) delete d[b[e]];
                        if (c ? !Q(d) : !n.isEmptyObject(d)) return
                    }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                }
            }
        }
        n.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(a) {
                    return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
                },
                data: function(a, b, c) {
                    return R(a, b, c)
                },
                removeData: function(a, b) {
                    return S(a, b)
                },
                _data: function(a, b, c) {
                    return R(a, b, c, !0)
                },
                _removeData: function(a, b) {
                    return S(a, b, !0)
                }
            }), n.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0],
                        g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                            c = g.length;
                            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                            n._data(f, "parsedAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function() {
                        n.data(this, a)
                    }) : arguments.length > 1 ? this.each(function() {
                        n.data(this, a, b)
                    }) : f ? P(f, a, n.data(f, a)) : void 0
                },
                removeData: function(a) {
                    return this.each(function() {
                        n.removeData(this, a)
                    })
                }
            }), n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b),
                        d = c.length,
                        e = c.shift(),
                        f = n._queueHooks(a, b),
                        g = function() {
                            n.dequeue(a, b)
                        };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return n._data(a, c) || n._data(a, c, {
                        empty: n.Callbacks("once memory").add(function() {
                            n._removeData(a, b + "queue"), n._removeData(a, c)
                        })
                    })
                }
            }), n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        n.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, d = 1,
                        e = n.Deferred(),
                        f = this,
                        g = this.length,
                        h = function() {
                            --d || e.resolveWith(f, [f])
                        };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            }),
            function() {
                var a;
                l.shrinkWrapBlocks = function() {
                    if (null != a) return a;
                    a = !1;
                    var b, c, e;
                    return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
                }
            }();
        var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
            V = ["Top", "Right", "Bottom", "Left"],
            W = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            };

        function X(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return n.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
                k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var Y = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) Y(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Z = /^(?:checkbox|radio)$/i,
            $ = /<([\w:-]+)/,
            _ = /^$|\/(?:java|ecma)script/i,
            aa = /^\s+/,
            ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

        function ca(a) {
            var b = ba.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                while (b.length) c.createElement(b.pop());
            return c
        }! function() {
            var a = d.createElement("div"),
                b = d.createDocumentFragment(),
                c = d.createElement("input");
            a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
        }();
        var da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

        function ea(a, b) {
            var c, d, e = 0,
                f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
        }

        function fa(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
        var ga = /<|&#?\w+;/,
            ha = /<tbody/i;

        function ia(a) {
            Z.test(a.type) && (a.defaultChecked = a.checked)
        }

        function ja(a, b, c, d, e) {
            for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
                if (g = a[r], g || 0 === g)
                    if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                    else if (ga.test(g)) {
                i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                while (f--) i = i.lastChild;
                if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                    g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                    while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                }
                n.merge(q, i.childNodes), i.textContent = "";
                while (i.firstChild) i.removeChild(i.firstChild);
                i = p.lastChild
            } else q.push(b.createTextNode(g));
            i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
            while (g = q[r++])
                if (d && n.inArray(g, d) > -1) e && e.push(g);
                else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g)
            }
            return i = null, p
        }! function() {
            var b, c, e = d.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
            e = null
        }();
        var ka = /^(?:input|select|textarea)$/i,
            la = /^key/,
            ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            na = /^(?:focusinfocus|focusoutblur)$/,
            oa = /^([^.]*)(?:\.(.+)|)/;

        function pa() {
            return !0
        }

        function qa() {
            return !1
        }

        function ra() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function sa(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) sa(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
                if (r) {
                    c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                    while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
                if (r && (k = r.events)) {
                    b = (b || "").match(G) || [""], j = b.length;
                    while (j--)
                        if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                        } else
                            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
                }
            },
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                    if (!f && !l.noBubble && !n.isWindow(e)) {
                        for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                        m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                    }
                    o = 0;
                    while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                    if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                        m = e[h], m && (e[h] = null), n.event.triggered = q;
                        try {
                            e[q]()
                        } catch (s) {}
                        n.event.triggered = void 0, m && (e[h] = m)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (n._data(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                while (b--) c = e[b], a[c] = g[c];
                return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button,
                        h = b.fromElement;
                    return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ra() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ra() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
            }
        }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), l.submit || (n.event.special.submit = {
            setup: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                    c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                        a._submitBubble = !0
                    }), n._data(c, "submit", !0))
                })
            },
            postDispatch: function(a) {
                a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
            },
            teardown: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
            }
        }), l.change || (n.event.special.change = {
            setup: function() {
                return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), n.event.add(this, "click._change", function(a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
                })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                    }), n._data(b, "change", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName)
            }
        }), l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return sa(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return sa(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
        var ta = / jQuery\d+="(?:null|\d+)"/g,
            ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
            va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            wa = /<script|<style|<link/i,
            xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ya = /^true\/(.*)/,
            za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Aa = ca(d),
            Ba = Aa.appendChild(d.createElement("div"));

        function Ca(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Da(a) {
            return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
        }

        function Ea(a) {
            var b = ya.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function Fa(a, b) {
            if (1 === b.nodeType && n.hasData(a)) {
                var c, d, e, f = n._data(a),
                    g = n._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
                }
                g.data && (g.data = n.extend({}, g.data))
            }
        }

        function Ga(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                    e = n._data(b);
                    for (d in e.events) n.removeEvent(b, d, e.handle);
                    b.removeAttribute(n.expando)
                }
                "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function Ha(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
            if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
                for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
                if (h)
                    for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
                k = e = null
            }
            return a
        }

        function Ia(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(va, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
                if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                    else Fa(a, f);
                return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
            },
            cleanData: function(a, b) {
                for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                    if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                        if (g.events)
                            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                        j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                    }
            }
        }), n.fn.extend({
            domManip: Ha,
            detach: function(a) {
                return Ia(this, a, !0)
            },
            remove: function(a) {
                return Ia(this, a)
            },
            text: function(a) {
                return Y(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return Y(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                    if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return Ha(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var Ja, Ka = {
            HTML: "block",
            BODY: "block"
        };

        function La(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function Ma(a) {
            var b = d,
                c = Ka[a];
            return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
        }
        var Na = /^margin/,
            Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
            Pa = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Qa = d.documentElement;
        ! function() {
            var b, c, e, f, g, h, i = d.createElement("div"),
                j = d.createElement("div");
            if (j.style) {
                j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                    reliableHiddenOffsets: function() {
                        return null == b && k(), f
                    },
                    boxSizingReliable: function() {
                        return null == b && k(), e
                    },
                    pixelMarginRight: function() {
                        return null == b && k(), c
                    },
                    pixelPosition: function() {
                        return null == b && k(), b
                    },
                    reliableMarginRight: function() {
                        return null == b && k(), g
                    },
                    reliableMarginLeft: function() {
                        return null == b && k(), h
                    }
                });

                function k() {
                    var k, l, m = d.documentElement;
                    m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                        width: "4px"
                    }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                        marginRight: "4px"
                    }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
                }
            }
        }();
        var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (Ra = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
        }) : Qa.currentStyle && (Ra = function(a) {
            return a.currentStyle
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });

        function Ua(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Va = /alpha\([^)]*\)/i,
            Wa = /opacity\s*=\s*([^)]*)/i,
            Xa = /^(none|table(?!-c[ea]).+)/,
            Ya = new RegExp("^(" + T + ")(.*)$", "i"),
            Za = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            $a = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _a = ["Webkit", "O", "Moz", "ms"],
            ab = d.createElement("div").style;

        function bb(a) {
            if (a in ab) return a;
            var b = a.charAt(0).toUpperCase() + a.slice(1),
                c = _a.length;
            while (c--)
                if (a = _a[c] + b, a in ab) return a
        }

        function cb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function db(a, b, c) {
            var d = Ya.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function eb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
            return g
        }

        function fb(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Sa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": l.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                        return fb(a, b, d)
                    }) : fb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), l.opacity || (n.cssHooks.opacity = {
            get: function(a, b) {
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
            }
        }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
            return b ? Pa(a, {
                display: "inline-block"
            }, Sa, [a, "marginRight"]) : void 0
        }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Na.test(a) || (n.cssHooks[a + b].set = db)
        }), n.fn.extend({
            css: function(a, b) {
                return Y(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return cb(this, !0)
            },
            hide: function() {
                return cb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    W(this) ? n(this).show() : n(this).hide()
                })
            }
        });

        function gb(a, b, c, d, e) {
            return new gb.prototype.init(a, b, c, d, e)
        }
        n.Tween = gb, gb.prototype = {
            constructor: gb,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = gb.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
            }
        }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = gb.prototype.init, n.fx.step = {};
        var hb, ib, jb = /^(?:toggle|show|hide)$/,
            kb = /queueHooks$/;

        function lb() {
            return a.setTimeout(function() {
                hb = void 0
            }), hb = n.now()
        }

        function mb(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function nb(a, b, c) {
            for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function ob(a, b, c) {
            var d, e, f, g, h, i, j, k, m = this,
                o = {},
                p = a.style,
                q = a.nodeType && W(a),
                r = n._data(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, m.always(function() {
                m.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
                p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], jb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        q = !0
                    }
                    o[d] = r && r[d] || n.style(a, d)
                } else j = void 0;
            if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
            else {
                r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                    n(a).hide()
                }), m.done(function() {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b])
                });
                for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function pb(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function qb(a, b, c) {
            var d, e, f = 0,
                g = qb.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: hb || lb(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (pb(k, j.opts.specialEasing); g > f; f++)
                if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(qb, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return X(c.elem, a, U.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                },
                prefilters: [ob],
                prefilter: function(a, b) {
                    b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
                }
            }), n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(W).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = qb(this, n.extend({}, a), f);
                            (e || n._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = n._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = n._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: mb("show"),
                slideUp: mb("hide"),
                slideToggle: mb("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function() {
                var a, b = n.timers,
                    c = 0;
                for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || n.fx.stop(), hb = void 0
            }, n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                a.clearInterval(ib), ib = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(b, c) {
                return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            },
            function() {
                var a, b = d.createElement("input"),
                    c = d.createElement("div"),
                    e = d.createElement("select"),
                    f = e.appendChild(d.createElement("option"));
                c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
            }();
        var rb = /\r/g,
            sb = /[\x20\t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                }
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var tb, ub, vb = n.expr.attrHandle,
            wb = /^(?:checked|selected)$/i,
            xb = l.getSetAttribute,
            yb = l.input;
        n.fn.extend({
            attr: function(a, b) {
                return Y(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
            }
        }), ub = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = vb[b] || n.find.attr;
            yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
                var e, f;
                return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
            } : vb[b] = function(a, b, c) {
                return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), yb && xb || (n.attrHooks.value = {
            set: function(a, b, c) {
                return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
            }
        }), xb || (tb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: tb.set
        }, n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, "" === b ? !1 : b, c)
            }
        }, n.each(["width", "height"], function(a, b) {
            n.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), l.style || (n.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var zb = /^(?:input|select|textarea|button|object)$/i,
            Ab = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return Y(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = n.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        }), l.enctype || (n.propFix.enctype = "encoding");
        var Bb = /[\t\r\n\f]/g;

        function Cb(a) {
            return n.attr(a, "class") || ""
        }
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++])
                                while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, Cb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = n(this), f = a.match(G) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++])
                    if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var Db = a.location,
            Eb = n.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        n.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = n.trim(b + "");
            return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
        }, n.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var Hb = /#.*$/,
            Ib = /([?&])_=[^&]*/,
            Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lb = /^(?:GET|HEAD)$/,
            Mb = /^\/\//,
            Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ob = {},
            Pb = {},
            Qb = "*/".concat("*"),
            Rb = Db.href,
            Sb = Nb.exec(Rb.toLowerCase()) || [];

        function Tb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c))
                    while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function Ub(a, b, c, d) {
            var e = {},
                f = a === Pb;

            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function Vb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && n.extend(!0, a, c), a
        }

        function Wb(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Xb(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rb,
                type: "GET",
                isLocal: Kb.test(Sb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
            },
            ajaxPrefilter: Tb(Ob),
            ajaxTransport: Tb(Pb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                    m = l.context || l,
                    o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                    p = n.Deferred(),
                    q = n.Callbacks("once memory"),
                    r = l.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!k) {
                                    k = {};
                                    while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                                }
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return j && j.abort(b), y(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
                i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[e](l[e]);
                if (j = Ub(Pb, l, c, w)) {
                    if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                    l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        u = 1, j.send(s, y)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        y(-1, x)
                    }
                } else y(-1, "No Transport");

                function y(b, c, d, e) {
                    var k, s, t, v, x, y = c;
                    2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        });

        function Yb(a) {
            return a.style && a.style.display || n.css(a, "display")
        }

        function Zb(a) {
            if (!n.contains(a.ownerDocument || d, a)) return !0;
            while (a && 1 === a.nodeType) {
                if ("none" === Yb(a) || "hidden" === a.type) return !0;
                a = a.parentNode
            }
            return !1
        }
        n.expr.filters.hidden = function(a) {
            return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
        }, n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a)
        };
        var $b = /%20/g,
            _b = /\[\]$/,
            ac = /\r?\n/g,
            bc = /^(?:submit|button|image|reset|file)$/i,
            cc = /^(?:input|select|textarea|keygen)/i;

        function dc(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) dc(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) dc(c, a[c], b, e);
            return d.join("&").replace($b, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(ac, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(ac, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
        } : hc;
        var ec = 0,
            fc = {},
            gc = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in fc) fc[a](void 0, !0)
        }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(),
                            h = ++ec;
                        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                            for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null), c = function(a, d) {
                            var f, i, j;
                            if (c && (d || 4 === g.readyState))
                                if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                                else {
                                    j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                    try {
                                        i = g.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                }
                            j && e(f, i, j, g.getAllResponseHeaders())
                        }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                    },
                    abort: function() {
                        c && c(void 0, !0)
                    }
                }
            }
        });

        function hc() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function ic() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function(e, f) {
                        b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var jc = [],
            kc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = jc.pop() || n.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var lc = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && lc) return lc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        };

        function mc(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Qa
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function(d) {
                return Y(this, function(a, d, e) {
                    var f = mc(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
                return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Y(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var nc = a.jQuery,
            oc = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
        }, b || (a.jQuery = a.$ = n), n
    });
} catch (e) {}
try {
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
    }(function(a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    j *= q, m *= q, l *= q
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    j *= r, m *= r, l *= r
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left, p = b.clientY - s.top
                }
                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
            }
        }

        function c() {
            f = null
        }

        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
        }
        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
            },
            getPageHeight: function(b) {
                return a(b).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        a.fn.extend({
            mousewheel: function(a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
            },
            unmousewheel: function(a) {
                return this.unbind("mousewheel", a)
            }
        })
    });
} catch (e) {}
try {
    document.createElement("canvas").getContext || (function() {
        var s = Math,
            j = s.round,
            F = s.sin,
            G = s.cos,
            V = s.abs,
            W = s.sqrt,
            k = 10,
            v = k / 2;

        function X() {
            return this.context_ || (this.context_ = new H(this))
        }
        var L = Array.prototype.slice;

        function Y(b, a) {
            var c = L.call(arguments, 2);
            return function() {
                return b.apply(a, c.concat(L.call(arguments)))
            }
        }
        var M = {
            init: function(b) {
                if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                    var a = b || document;
                    a.createElement("canvas");
                    a.attachEvent("onreadystatechange", Y(this.init_, this, a))
                }
            },
            init_: function(b) {
                b.namespaces.g_vml_ || b.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
                b.namespaces.g_o_ || b.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
                if (!b.styleSheets.ex_canvas_) {
                    var a = b.createStyleSheet();
                    a.owningElement.id = "ex_canvas_";
                    a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
                }
                var c = b.getElementsByTagName("canvas"),
                    d = 0;
                for (; d < c.length; d++) this.initElement(c[d])
            },
            initElement: function(b) {
                if (!b.getContext) {
                    b.getContext = X;
                    b.innerHTML = "";
                    b.attachEvent("onpropertychange", Z);
                    b.attachEvent("onresize", $);
                    var a = b.attributes;
                    if (a.width && a.width.specified) b.style.width = a.width.nodeValue + "px";
                    else b.width = b.clientWidth;
                    if (a.height && a.height.specified) b.style.height = a.height.nodeValue + "px";
                    else b.height = b.clientHeight
                }
                return b
            }
        };

        function Z(b) {
            var a = b.srcElement;
            switch (b.propertyName) {
                case "width":
                    a.style.width = a.attributes.width.nodeValue + "px";
                    a.getContext().clearRect();
                    break;
                case "height":
                    a.style.height = a.attributes.height.nodeValue + "px";
                    a.getContext().clearRect();
                    break
            }
        }

        function $(b) {
            var a = b.srcElement;
            if (a.firstChild) {
                a.firstChild.style.width = a.clientWidth + "px";
                a.firstChild.style.height = a.clientHeight + "px"
            }
        }
        M.init();
        var N = [],
            B = 0;
        for (; B < 16; B++) {
            var C = 0;
            for (; C < 16; C++) N[B * 16 + C] = B.toString(16) + C.toString(16)
        }

        function I() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        }

        function y(b, a) {
            var c = I(),
                d = 0;
            for (; d < 3; d++) {
                var f = 0;
                for (; f < 3; f++) {
                    var h = 0,
                        g = 0;
                    for (; g < 3; g++) h += b[d][g] * a[g][f];
                    c[d][f] = h
                }
            }
            return c
        }

        function O(b, a) {
            a.fillStyle = b.fillStyle;
            a.lineCap = b.lineCap;
            a.lineJoin = b.lineJoin;
            a.lineWidth = b.lineWidth;
            a.miterLimit = b.miterLimit;
            a.shadowBlur = b.shadowBlur;
            a.shadowColor = b.shadowColor;
            a.shadowOffsetX = b.shadowOffsetX;
            a.shadowOffsetY = b.shadowOffsetY;
            a.strokeStyle = b.strokeStyle;
            a.globalAlpha = b.globalAlpha;
            a.arcScaleX_ = b.arcScaleX_;
            a.arcScaleY_ = b.arcScaleY_;
            a.lineScale_ = b.lineScale_
        }

        function P(b) {
            var a, c = 1;
            b = String(b);
            if (b.substring(0, 3) == "rgb") {
                var d = b.indexOf("(", 3),
                    f = b.indexOf(")", d + 1),
                    h = b.substring(d + 1, f).split(",");
                a = "#";
                var g = 0;
                for (; g < 3; g++) a += N[Number(h[g])];
                if (h.length == 4 && b.substr(3, 1) == "a") c = h[3]
            } else a = b;
            return {
                color: a,
                alpha: c
            }
        }

        function aa(b) {
            switch (b) {
                case "butt":
                    return "flat";
                case "round":
                    return "round";
                case "square":
                default:
                    return "square"
            }
        }

        function H(b) {
            this.m_ = I();
            this.mStack_ = [];
            this.aStack_ = [];
            this.currentPath_ = [];
            this.fillStyle = this.strokeStyle = "#000";
            this.lineWidth = 1;
            this.lineJoin = "miter";
            this.lineCap = "butt";
            this.miterLimit = k * 1;
            this.globalAlpha = 1;
            this.canvas = b;
            var a = b.ownerDocument.createElement("div");
            a.style.width = b.clientWidth + "px";
            a.style.height = b.clientHeight + "px";
            a.style.overflow = "hidden";
            a.style.position = "absolute";
            b.appendChild(a);
            this.element_ = a;
            this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
        }
        var i = H.prototype;
        i.clearRect = function() {
            this.element_.innerHTML = ""
        };
        i.beginPath = function() {
            this.currentPath_ = []
        };
        i.moveTo = function(b, a) {
            var c = this.getCoords_(b, a);
            this.currentPath_.push({
                type: "moveTo",
                x: c.x,
                y: c.y
            });
            this.currentX_ = c.x;
            this.currentY_ = c.y
        };
        i.lineTo = function(b, a) {
            var c = this.getCoords_(b, a);
            this.currentPath_.push({
                type: "lineTo",
                x: c.x,
                y: c.y
            });
            this.currentX_ = c.x;
            this.currentY_ = c.y
        };
        i.bezierCurveTo = function(b, a, c, d, f, h) {
            var g = this.getCoords_(f, h),
                l = this.getCoords_(b, a),
                e = this.getCoords_(c, d);
            Q(this, l, e, g)
        };

        function Q(b, a, c, d) {
            b.currentPath_.push({
                type: "bezierCurveTo",
                cp1x: a.x,
                cp1y: a.y,
                cp2x: c.x,
                cp2y: c.y,
                x: d.x,
                y: d.y
            });
            b.currentX_ = d.x;
            b.currentY_ = d.y
        }
        i.quadraticCurveTo = function(b, a, c, d) {
            var f = this.getCoords_(b, a),
                h = this.getCoords_(c, d),
                g = {
                    x: this.currentX_ + 0.6666666666666666 * (f.x - this.currentX_),
                    y: this.currentY_ + 0.6666666666666666 * (f.y - this.currentY_)
                };
            Q(this, g, {
                x: g.x + (h.x - this.currentX_) / 3,
                y: g.y + (h.y - this.currentY_) / 3
            }, h)
        };
        i.arc = function(b, a, c, d, f, h) {
            c *= k;
            var g = h ? "at" : "wa",
                l = b + G(d) * c - v,
                e = a + F(d) * c - v,
                m = b + G(f) * c - v,
                r = a + F(f) * c - v;
            if (l == m && !h) l += 0.125;
            var n = this.getCoords_(b, a),
                o = this.getCoords_(l, e),
                q = this.getCoords_(m, r);
            this.currentPath_.push({
                type: g,
                x: n.x,
                y: n.y,
                radius: c,
                xStart: o.x,
                yStart: o.y,
                xEnd: q.x,
                yEnd: q.y
            })
        };
        i.rect = function(b, a, c, d) {
            this.moveTo(b, a);
            this.lineTo(b + c, a);
            this.lineTo(b + c, a + d);
            this.lineTo(b, a + d);
            this.closePath()
        };
        i.strokeRect = function(b, a, c, d) {
            var f = this.currentPath_;
            this.beginPath();
            this.moveTo(b, a);
            this.lineTo(b + c, a);
            this.lineTo(b + c, a + d);
            this.lineTo(b, a + d);
            this.closePath();
            this.stroke();
            this.currentPath_ = f
        };
        i.fillRect = function(b, a, c, d) {
            var f = this.currentPath_;
            this.beginPath();
            this.moveTo(b, a);
            this.lineTo(b + c, a);
            this.lineTo(b + c, a + d);
            this.lineTo(b, a + d);
            this.closePath();
            this.fill();
            this.currentPath_ = f
        };
        i.createLinearGradient = function(b, a, c, d) {
            var f = new D("gradient");
            f.x0_ = b;
            f.y0_ = a;
            f.x1_ = c;
            f.y1_ = d;
            return f
        };
        i.createRadialGradient = function(b, a, c, d, f, h) {
            var g = new D("gradientradial");
            g.x0_ = b;
            g.y0_ = a;
            g.r0_ = c;
            g.x1_ = d;
            g.y1_ = f;
            g.r1_ = h;
            return g
        };
        i.drawImage = function(b) {
            var a, c, d, f, h, g, l, e, m = b.runtimeStyle.width,
                r = b.runtimeStyle.height;
            b.runtimeStyle.width = "auto";
            b.runtimeStyle.height = "auto";
            var n = b.width,
                o = b.height;
            b.runtimeStyle.width = m;
            b.runtimeStyle.height = r;
            if (arguments.length == 3) {
                a = arguments[1];
                c = arguments[2];
                h = g = 0;
                l = d = n;
                e = f = o
            } else if (arguments.length == 5) {
                a = arguments[1];
                c = arguments[2];
                d = arguments[3];
                f = arguments[4];
                h = g = 0;
                l = n;
                e = o
            } else if (arguments.length == 9) {
                h = arguments[1];
                g = arguments[2];
                l = arguments[3];
                e = arguments[4];
                a = arguments[5];
                c = arguments[6];
                d = arguments[7];
                f = arguments[8]
            } else throw Error("Invalid number of arguments");
            var q = this.getCoords_(a, c),
                t = [];
            t.push(" <g_vml_:group", ' coordsize="', k * 10, ",", k * 10, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
            if (this.m_[0][0] != 1 || this.m_[0][1]) {
                var E = [];
                E.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", j(q.x / k), ",", "Dy=", j(q.y / k), "");
                var p = q,
                    z = this.getCoords_(a + d, c),
                    w = this.getCoords_(a, c + f),
                    x = this.getCoords_(a + d, c + f);
                p.x = s.max(p.x, z.x, w.x, x.x);
                p.y = s.max(p.y, z.y, w.y, x.y);
                t.push("padding:0 ", j(p.x / k), "px ", j(p.y / k), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", E.join(""), ", sizingmethod='clip');")
            } else t.push("top:", j(q.y / k), "px;left:", j(q.x / k), "px;");
            t.push(' ">', '<g_vml_:image src="', b.src, '"', ' style="width:', k * d, "px;", " height:", k * f, 'px;"', ' cropleft="', h / n, '"', ' croptop="', g / o, '"', ' cropright="', (n - h - l) / n, '"', ' cropbottom="', (o - g - e) / o, '"', " />", "</g_vml_:group>");
            this.element_.insertAdjacentHTML("BeforeEnd", t.join(""))
        };
        i.stroke = function(b) {
            var a = [],
                c = P(b ? this.fillStyle : this.strokeStyle),
                d = c.color,
                f = c.alpha * this.globalAlpha;
            a.push("<g_vml_:shape", ' filled="', !!b, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', k * 10, " ", k * 10, '"', ' stroked="', !b, '"', ' path="');
            var h = {
                    x: null,
                    y: null
                },
                g = {
                    x: null,
                    y: null
                },
                l = 0;
            for (; l < this.currentPath_.length; l++) {
                var e = this.currentPath_[l];
                switch (e.type) {
                    case "moveTo":
                        a.push(" m ", j(e.x), ",", j(e.y));
                        break;
                    case "lineTo":
                        a.push(" l ", j(e.x), ",", j(e.y));
                        break;
                    case "close":
                        a.push(" x ");
                        e = null;
                        break;
                    case "bezierCurveTo":
                        a.push(" c ", j(e.cp1x), ",", j(e.cp1y), ",", j(e.cp2x), ",", j(e.cp2y), ",", j(e.x), ",", j(e.y));
                        break;
                    case "at":
                    case "wa":
                        a.push(" ", e.type, " ", j(e.x - this.arcScaleX_ * e.radius), ",", j(e.y - this.arcScaleY_ * e.radius), " ", j(e.x + this.arcScaleX_ * e.radius), ",", j(e.y + this.arcScaleY_ * e.radius), " ", j(e.xStart), ",", j(e.yStart), " ", j(e.xEnd), ",", j(e.yEnd));
                        break
                }
                if (e) {
                    if (h.x == null || e.x < h.x) h.x = e.x;
                    if (g.x == null || e.x > g.x) g.x = e.x;
                    if (h.y == null || e.y < h.y) h.y = e.y;
                    if (g.y == null || e.y > g.y) g.y = e.y
                }
            }
            a.push(' ">');
            if (b)
                if (typeof this.fillStyle == "object") {
                    var m = this.fillStyle,
                        r = 0,
                        n = {
                            x: 0,
                            y: 0
                        },
                        o = 0,
                        q = 1;
                    if (m.type_ == "gradient") {
                        var t = m.x1_ / this.arcScaleX_,
                            E = m.y1_ / this.arcScaleY_,
                            p = this.getCoords_(m.x0_ / this.arcScaleX_, m.y0_ / this.arcScaleY_),
                            z = this.getCoords_(t, E);
                        r = Math.atan2(z.x - p.x, z.y - p.y) * 180 / Math.PI;
                        if (r < 0) r += 360;
                        if (r < 1.0E-6) r = 0
                    } else {
                        var p = this.getCoords_(m.x0_, m.y0_),
                            w = g.x - h.x,
                            x = g.y - h.y;
                        n = {
                            x: (p.x - h.x) / w,
                            y: (p.y - h.y) / x
                        };
                        w /= this.arcScaleX_ * k;
                        x /= this.arcScaleY_ * k;
                        var R = s.max(w, x);
                        o = 2 * m.r0_ / R;
                        q = 2 * m.r1_ / R - o
                    }
                    var u = m.colors_;
                    u.sort(function(ba, ca) {
                        return ba.offset - ca.offset
                    });
                    var J = u.length,
                        da = u[0].color,
                        ea = u[J - 1].color,
                        fa = u[0].alpha * this.globalAlpha,
                        ga = u[J - 1].alpha * this.globalAlpha,
                        S = [],
                        l = 0;
                    for (; l < J; l++) {
                        var T = u[l];
                        S.push(T.offset * q + o + " " + T.color)
                    }
                    a.push('<g_vml_:fill type="', m.type_, '"', ' method="none" focus="100%"', ' color="', da, '"', ' color2="', ea, '"', ' colors="', S.join(","), '"', ' opacity="', ga, '"', ' g_o_:opacity2="', fa, '"', ' angle="', r, '"', ' focusposition="', n.x, ",", n.y, '" />')
                } else a.push('<g_vml_:fill color="', d, '" opacity="', f, '" />');
            else {
                var K = this.lineScale_ * this.lineWidth;
                if (K < 1) f *= K;
                a.push("<g_vml_:stroke", ' opacity="', f, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', aa(this.lineCap), '"', ' weight="', K, 'px"', ' color="', d, '" />')
            }
            a.push("</g_vml_:shape>");
            this.element_.insertAdjacentHTML("beforeEnd", a.join(""))
        };
        i.fill = function() {
            this.stroke(true)
        };
        i.closePath = function() {
            this.currentPath_.push({
                type: "close"
            })
        };
        i.getCoords_ = function(b, a) {
            var c = this.m_;
            return {
                x: k * (b * c[0][0] + a * c[1][0] + c[2][0]) - v,
                y: k * (b * c[0][1] + a * c[1][1] + c[2][1]) - v
            }
        };
        i.save = function() {
            var b = {};
            O(this, b);
            this.aStack_.push(b);
            this.mStack_.push(this.m_);
            this.m_ = y(I(), this.m_)
        };
        i.restore = function() {
            O(this.aStack_.pop(), this);
            this.m_ = this.mStack_.pop()
        };

        function ha(b) {
            var a = 0;
            for (; a < 3; a++) {
                var c = 0;
                for (; c < 2; c++)
                    if (!isFinite(b[a][c]) || isNaN(b[a][c])) return false
            }
            return true
        }

        function A(b, a, c) {
            if (!!ha(a)) {
                b.m_ = a;
                if (c) b.lineScale_ = W(V(a[0][0] * a[1][1] - a[0][1] * a[1][0]))
            }
        }
        i.translate = function(b, a) {
            A(this, y([
                [1, 0, 0],
                [0, 1, 0],
                [b, a, 1]
            ], this.m_), false)
        };
        i.rotate = function(b) {
            var a = G(b),
                c = F(b);
            A(this, y([
                [a, c, 0],
                [-c, a, 0],
                [0, 0, 1]
            ], this.m_), false)
        };
        i.scale = function(b, a) {
            this.arcScaleX_ *= b;
            this.arcScaleY_ *= a;
            A(this, y([
                [b, 0, 0],
                [0, a, 0],
                [0, 0, 1]
            ], this.m_), true)
        };
        i.transform = function(b, a, c, d, f, h) {
            A(this, y([
                [b, a, 0],
                [c, d, 0],
                [f, h, 1]
            ], this.m_), true)
        };
        i.setTransform = function(b, a, c, d, f, h) {
            A(this, [
                [b, a, 0],
                [c, d, 0],
                [f, h, 1]
            ], true)
        };
        i.clip = function() {};
        i.arcTo = function() {};
        i.createPattern = function() {
            return new U
        };

        function D(b) {
            this.type_ = b;
            this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
            this.colors_ = []
        }
        D.prototype.addColorStop = function(b, a) {
            a = P(a);
            this.colors_.push({
                offset: b,
                color: a.color,
                alpha: a.alpha
            })
        };

        function U() {}
        G_vmlCanvasManager = M;
        CanvasRenderingContext2D = H;
        CanvasGradient = D;
        CanvasPattern = U
    })();
} catch (e) {}
try {
    (function() {
        var Opentip, firstAdapter, i, mouseMoved, mousePosition, mousePositionObservers, position, vendors, _i, _len, _ref, __slice = [].slice,
            __indexOf = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            __hasProp = {}.hasOwnProperty;
        for (Opentip = function() {
                function t(e, i, o, s) {
                    var n, r, a, h, p, d, l, u, c, f, g, m, v, w, b = this;
                    if (this.id = ++t.lastId, this.debug("Creating Opentip."), t.tips.push(this), this.adapter = t.adapter, n = this.adapter.data(e, "opentips") || [], n.push(this), this.adapter.data(e, "opentips", n), this.triggerElement = this.adapter.wrap(e), this.triggerElement.length > 1) throw Error("You can't call Opentip on multiple elements.");
                    if (this.triggerElement.length < 1) throw Error("Invalid element.");
                    for (this.loaded = !1, this.loading = !1, this.visible = !1, this.waitingToShow = !1, this.waitingToHide = !1, this.currentPosition = {
                            left: 0,
                            top: 0
                        }, this.dimensions = {
                            width: 100,
                            height: 50
                        }, this.content = "", this.redraw = !0, this.currentObservers = {
                            showing: !1,
                            visible: !1,
                            hiding: !1,
                            hidden: !1
                        }, s = this.adapter.clone(s), "object" == typeof i ? (s = i, i = o = void 0) : "object" == typeof o && (s = o, o = void 0), null != o && (s.title = o), null != i && this.setContent(i), null == s["extends"] && (s["extends"] = null != s.style ? s.style : t.defaultStyle), h = [s], w = s; w["extends"];) {
                        if (d = w["extends"], w = t.styles[d], null == w) throw Error("Invalid style: " + d);
                        h.unshift(w), null == w["extends"] && "standard" !== d && (w["extends"] = "standard")
                    }
                    for (s = (g = this.adapter).extend.apply(g, [{}].concat(__slice.call(h))), s.hideTriggers = function() {
                            var t, e, i, o;
                            for (i = s.hideTriggers, o = [], t = 0, e = i.length; e > t; t++) r = i[t], o.push(r);
                            return o
                        }(), s.hideTrigger && 0 === s.hideTriggers.length && s.hideTriggers.push(s.hideTrigger), m = ["tipJoint", "targetJoint", "stem"], l = 0, c = m.length; c > l; l++) p = m[l], s[p] && "string" == typeof s[p] && (s[p] = new t.Joint(s[p]));
                    for (!s.ajax || s.ajax !== !0 && s.ajax || (s.ajax = "A" === this.adapter.tagName(this.triggerElement) ? this.adapter.attr(this.triggerElement, "href") : !1), "click" === s.showOn && "A" === this.adapter.tagName(this.triggerElement) && this.adapter.observe(this.triggerElement, "click", function(t) {
                            return t.preventDefault(), t.stopPropagation(), t.stopped = !0
                        }), s.target && (s.fixed = !0), s.stem === !0 && (s.stem = new t.Joint(s.tipJoint)), s.target === !0 ? s.target = this.triggerElement : s.target && (s.target = this.adapter.wrap(s.target)), this.currentStem = s.stem, this.currentStemShift = 0, null == s.delay && (s.delay = "mouseover" === s.showOn ? .2 : 0), null == s.targetJoint && (s.targetJoint = new t.Joint(s.tipJoint).flip()), this.showTriggers = [], this.showTriggersWhenVisible = [], this.hideTriggers = [], s.showOn && "creation" !== s.showOn && this.showTriggers.push({
                            element: this.triggerElement,
                            event: s.showOn
                        }), null != s.ajaxCache && (s.cache = s.ajaxCache, delete s.ajaxCache), this.options = s, this.bound = {}, v = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"], u = 0, f = v.length; f > u; u++) a = v[u], this.bound[a] = function(t) {
                        return function() {
                            return b[t].apply(b, arguments)
                        }
                    }(a);
                    this.adapter.domReady(function() {
                        return b.activate(), "creation" === b.options.showOn ? b.prepareToShow() : void 0
                    })
                }
                return t.prototype.STICKS_OUT_TOP = 1, t.prototype.STICKS_OUT_BOTTOM = 2, t.prototype.STICKS_OUT_LEFT = 1, t.prototype.STICKS_OUT_RIGHT = 2, t.prototype["class"] = {
                    container: "opentip-container",
                    opentip: "opentip",
                    header: "ot-header",
                    content: "ot-content",
                    loadingIndicator: "ot-loading-indicator",
                    close: "ot-close",
                    goingToHide: "ot-going-to-hide",
                    hidden: "ot-hidden",
                    hiding: "ot-hiding",
                    goingToShow: "ot-going-to-show",
                    showing: "ot-showing",
                    visible: "ot-visible",
                    loading: "ot-loading",
                    ajaxError: "ot-ajax-error",
                    fixed: "ot-fixed",
                    showEffectPrefix: "ot-show-effect-",
                    hideEffectPrefix: "ot-hide-effect-",
                    stylePrefix: "style-"
                }, t.prototype._setup = function() {
                    var t, e, i, o, s, n, r, a, h, p, d;
                    for (this.debug("Setting up the tooltip."), this._buildContainer(), this.hideTriggers = [], h = this.options.hideTriggers, o = s = 0, r = h.length; r > s; o = ++s) {
                        if (e = h[o], i = null, t = this.options.hideOn instanceof Array ? this.options.hideOn[o] : this.options.hideOn, "string" == typeof e) switch (e) {
                            case "trigger":
                                t = t || "mouseout", i = this.triggerElement;
                                break;
                            case "tip":
                                t = t || "mouseover", i = this.container;
                                break;
                            case "target":
                                t = t || "mouseover", i = this.options.target;
                                break;
                            case "closeButton":
                                break;
                            default:
                                throw Error("Unknown hide trigger: " + e + ".")
                        } else t = t || "mouseover", i = this.adapter.wrap(e);
                        i && this.hideTriggers.push({
                            element: i,
                            event: t,
                            original: e
                        })
                    }
                    for (p = this.hideTriggers, d = [], n = 0, a = p.length; a > n; n++) e = p[n], d.push(this.showTriggersWhenVisible.push({
                        element: e.element,
                        event: "mouseover"
                    }));
                    return d
                }, t.prototype._buildContainer = function() {
                    return this.container = this.adapter.create('<div id="opentip-' + this.id + '" class="' + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + '"></div>'), this.adapter.css(this.container, {
                        position: "absolute"
                    }), this.options.ajax && this.adapter.addClass(this.container, this["class"].loading), this.options.fixed && this.adapter.addClass(this.container, this["class"].fixed), this.options.showEffect && this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect), this.options.hideEffect ? this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect) : void 0
                }, t.prototype._buildElements = function() {
                    var t, e;
                    return this.tooltipElement = this.adapter.create('<div class="' + this["class"].opentip + '"><div class="' + this["class"].header + '"></div><div class="' + this["class"].content + '"></div></div>'), this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas")), this.adapter.css(this.backgroundCanvas, {
                        position: "absolute"
                    }), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)), t = this.adapter.find(this.tooltipElement, "." + this["class"].header), this.options.title && (e = this.adapter.create("<h1></h1>"), this.adapter.update(e, this.options.title, this.options.escapeTitle), this.adapter.append(t, e)), this.options.ajax && !this.loaded && this.adapter.append(this.tooltipElement, this.adapter.create('<div class="' + this["class"].loadingIndicator + '"><span>↻</span></div>')), __indexOf.call(this.options.hideTriggers, "closeButton") < 0 || (this.closeButtonElement = this.adapter.create('<a href="javascript:undefined;" class="' + this["class"].close + '"><span>Close</span></a>'), this.adapter.append(t, this.closeButtonElement)), this.adapter.append(this.container, this.backgroundCanvas), this.adapter.append(this.container, this.tooltipElement), this.adapter.append(document.body, this.container), this._newContent = !0, this.redraw = !0
                }, t.prototype.setContent = function(t) {
                    return this.content = t, this._newContent = !0, "function" == typeof this.content ? (this._contentFunction = this.content, this.content = "") : this._contentFunction = null, this.visible ? this._updateElementContent() : void 0
                }, t.prototype._updateElementContent = function() {
                    var t;
                    return (this._newContent || !this.options.cache && this._contentFunction) && (t = this.adapter.find(this.container, "." + this["class"].content), null != t && (this._contentFunction && (this.debug("Executing content function."), this.content = this._contentFunction(this)), this.adapter.update(t, this.content, this.options.escapeContent)), this._newContent = !1), this._storeAndLockDimensions(), this.reposition()
                }, t.prototype._storeAndLockDimensions = function() {
                    var t;
                    if (this.container) return t = this.dimensions, this.adapter.css(this.container, {
                        width: "auto",
                        left: "0px",
                        top: "0px"
                    }), this.dimensions = this.adapter.dimensions(this.container), this.dimensions.width += 1, this.adapter.css(this.container, {
                        width: "" + this.dimensions.width + "px",
                        top: "" + this.currentPosition.top + "px",
                        left: "" + this.currentPosition.left + "px"
                    }), this._dimensionsEqual(this.dimensions, t) ? void 0 : (this.redraw = !0, this._draw())
                }, t.prototype.activate = function() {
                    return this._setupObservers("hidden", "hiding")
                }, t.prototype.deactivate = function() {
                    return this.debug("Deactivating tooltip."), this.hide(), this._setupObservers("-showing", "-visible", "-hidden", "-hiding")
                }, t.prototype._setupObservers = function() {
                    var t, e, i, o, s, n, r, a, h, p, d, l, u, c, f, g, m = this;
                    for (o = 1 > arguments.length ? [] : __slice.call(arguments, 0), n = 0, p = o.length; p > n; n++)
                        if (i = o[n], e = !1, "-" === i.charAt(0) && (e = !0, i = i.substr(1)), this.currentObservers[i] !== !e) switch (this.currentObservers[i] = !e, t = function() {
                            var t, i, o;
                            return t = 1 > arguments.length ? [] : __slice.call(arguments, 0), e ? (i = m.adapter).stopObserving.apply(i, t) : (o = m.adapter).observe.apply(o, t)
                        }, i) {
                            case "showing":
                                for (c = this.hideTriggers, r = 0, d = c.length; d > r; r++) s = c[r], t(s.element, s.event, this.bound.prepareToHide);
                                t(null != document.onresize ? document : window, "resize", this.bound.reposition), t(window, "scroll", this.bound.reposition);
                                break;
                            case "visible":
                                for (f = this.showTriggersWhenVisible, a = 0, l = f.length; l > a; a++) s = f[a], t(s.element, s.event, this.bound.prepareToShow);
                                break;
                            case "hiding":
                                for (g = this.showTriggers, h = 0, u = g.length; u > h; h++) s = g[h], t(s.element, s.event, this.bound.prepareToShow);
                                break;
                            case "hidden":
                                break;
                            default:
                                throw Error("Unknown state: " + i)
                        }
                        return null
                }, t.prototype.prepareToShow = function() {
                    return this._abortHiding(), this._abortShowing(), this.visible ? void 0 : (this.debug("Showing in " + this.options.delay + "s."), null == this.container && this._setup(), this.options.group && t._abortShowingGroup(this.options.group, this), this.preparingToShow = !0, this._setupObservers("-hidden", "-hiding", "showing"), this._followMousePosition(), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0))
                }, t.prototype.show = function() {
                    var e = this;
                    return this._abortHiding(), this.visible ? void 0 : (this._clearTimeouts(), this._triggerElementExists() ? (this.debug("Showing now."), null == this.container && this._setup(), this.options.group && t._hideGroup(this.options.group, this), this.visible = !0, this.preparingToShow = !1, null == this.tooltipElement && this._buildElements(), this._updateElementContent(), !this.options.ajax || this.loaded && this.options.cache || this._loadAjax(), this._searchAndActivateCloseButtons(), this._startEnsureTriggerElement(), this.adapter.css(this.container, {
                        zIndex: t.lastZIndex++
                    }), this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible"), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this.adapter.removeClass(this.container, this["class"].hiding), this.adapter.removeClass(this.container, this["class"].hidden), this.adapter.addClass(this.container, this["class"].goingToShow), this.setCss3Style(this.container, {
                        transitionDuration: "0s"
                    }), this.defer(function() {
                        var t;
                        if (e.visible && !e.preparingToHide) return e.adapter.removeClass(e.container, e["class"].goingToShow), e.adapter.addClass(e.container, e["class"].showing), t = 0, e.options.showEffect && e.options.showEffectDuration && (t = e.options.showEffectDuration), e.setCss3Style(e.container, {
                            transitionDuration: "" + t + "s"
                        }), e._visibilityStateTimeoutId = e.setTimeout(function() {
                            return e.adapter.removeClass(e.container, e["class"].showing), e.adapter.addClass(e.container, e["class"].visible)
                        }, t), e._activateFirstInput()
                    }), this._draw()) : this.deactivate())
                }, t.prototype._abortShowing = function() {
                    return this.preparingToShow ? (this.debug("Aborting showing."), this._clearTimeouts(), this._stopFollowingMousePosition(), this.preparingToShow = !1, this._setupObservers("-showing", "-visible", "hiding", "hidden")) : void 0
                }, t.prototype.prepareToHide = function() {
                    return this._abortShowing(), this._abortHiding(), this.visible ? (this.debug("Hiding in " + this.options.hideDelay + "s"), this.preparingToHide = !0, this._setupObservers("-showing", "visible", "-hidden", "hiding"), this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay)) : void 0
                }, t.prototype.hide = function() {
                    var t = this;
                    return this._abortShowing(), this.visible && (this._clearTimeouts(), this.debug("Hiding!"), this.visible = !1, this.preparingToHide = !1, this._stopEnsureTriggerElement(), this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden"), this.options.fixed || this._stopFollowingMousePosition(), this.container) ? (this.adapter.removeClass(this.container, this["class"].visible), this.adapter.removeClass(this.container, this["class"].showing), this.adapter.addClass(this.container, this["class"].goingToHide), this.setCss3Style(this.container, {
                        transitionDuration: "0s"
                    }), this.defer(function() {
                        var e;
                        return t.adapter.removeClass(t.container, t["class"].goingToHide), t.adapter.addClass(t.container, t["class"].hiding), e = 0, t.options.hideEffect && t.options.hideEffectDuration && (e = t.options.hideEffectDuration), t.setCss3Style(t.container, {
                            transitionDuration: "" + e + "s"
                        }), t._visibilityStateTimeoutId = t.setTimeout(function() {
                            return t.adapter.removeClass(t.container, t["class"].hiding), t.adapter.addClass(t.container, t["class"].hidden), t.setCss3Style(t.container, {
                                transitionDuration: "0s"
                            }), t.options.removeElementsOnHide ? (t.debug("Removing HTML elements."), t.adapter.remove(t.container), delete t.container, delete t.tooltipElement) : void 0
                        }, e)
                    })) : void 0
                }, t.prototype._abortHiding = function() {
                    return this.preparingToHide ? (this.debug("Aborting hiding."), this._clearTimeouts(), this.preparingToHide = !1, this._setupObservers("-hiding", "showing", "visible")) : void 0
                }, t.prototype.reposition = function() {
                    var t, e, i, o, s = this;
                    return t = this.getPosition(), null == t || (e = this.options.stem, i = 0, this.options.containInViewport && (o = this._ensureViewportContainment(t), t = o.position, e = o.stem, i = o.stemShift), this._positionsEqual(t, this.currentPosition)) ? void 0 : (this.options.stem && !e.eql(this.currentStem) && (this.redraw = !0), i != this.currentStemShift && (this.redraw = !0), this.currentPosition = t, this.currentStem = e, this.currentStemShift = i, this._draw(), this.adapter.css(this.container, {
                        left: "" + t.left + "px",
                        top: "" + t.top + "px"
                    }), this.defer(function() {
                        var t, e;
                        return t = s.adapter.unwrap(s.container), t.style.visibility = "hidden", e = t.offsetHeight, t.style.visibility = "visible"
                    }))
                }, t.prototype.getPosition = function(t, e, i) {
                    var o, s, n, r, a, h, p, d, l;
                    if (this.container) return null == t && (t = this.options.tipJoint), null == e && (e = this.options.targetJoint), r = {}, this.options.target ? (p = this.adapter.offset(this.options.target), h = this.adapter.dimensions(this.options.target), r = p, e.right ? (d = this.adapter.unwrap(this.options.target), null != d.getBoundingClientRect ? r.left = d.getBoundingClientRect().right + (null != (l = window.pageXOffset) ? l : document.body.scrollLeft) : r.left += h.width) : e.center && (r.left += Math.round(h.width / 2)), e.bottom ? r.top += h.height : e.middle && (r.top += Math.round(h.height / 2)), this.options.borderWidth && (this.options.tipJoint.left && (r.left += this.options.borderWidth), this.options.tipJoint.right && (r.left -= this.options.borderWidth), this.options.tipJoint.top ? r.top += this.options.borderWidth : this.options.tipJoint.bottom && (r.top -= this.options.borderWidth))) : r = this.initialMousePosition ? {
                        top: this.initialMousePosition.y,
                        left: this.initialMousePosition.x
                    } : {
                        top: mousePosition.y,
                        left: mousePosition.x
                    }, this.options.autoOffset && (a = this.options.stem ? this.options.stemLength : 0, n = a && this.options.fixed ? 2 : 10, o = t.middle && !this.options.fixed ? 15 : 0, s = t.center && !this.options.fixed ? 15 : 0, t.right ? r.left -= n + o : t.left && (r.left += n + o), t.bottom ? r.top -= n + s : t.top && (r.top += n + s), a && (null == i && (i = this.options.stem), i.right ? r.left -= a : i.left && (r.left += a), i.bottom ? r.top -= a : i.top && (r.top += a))), r.left += this.options.offset[0], r.top += this.options.offset[1], t.right ? r.left -= this.dimensions.width : t.center && (r.left -= Math.round(this.dimensions.width / 2)), t.bottom ? r.top -= this.dimensions.height : t.middle && (r.top -= Math.round(this.dimensions.height / 2)), r
                }, t.prototype._ensureViewportContainment = function(e) {
                    var i, o, s, n, r, a, h, p, d, l, u, c, f;
                    if (h = this.options.stem, p = 0, s = {
                            position: e,
                            stem: h,
                            stemShift: p
                        }, !this.visible || !e) return s;
                    if (d = this._sticksOut(e), !d[0] && !d[1]) return s;
                    if (u = new t.Joint(this.options.tipJoint), this.options.targetJoint && (l = new t.Joint(this.options.targetJoint)), a = this.adapter.scrollOffset(), c = this.adapter.viewportDimensions(), f = [e.left - a[0], e.top - a[1]], i = !1, c.width >= this.dimensions.width && d[0]) switch (i = !0, d[0]) {
                        case this.STICKS_OUT_LEFT:
                            u.setHorizontal("left"), this.options.targetJoint && l.setHorizontal("right");
                            break;
                        case this.STICKS_OUT_RIGHT:
                            u.setHorizontal("right"), this.options.targetJoint && l.setHorizontal("left")
                    }
                    if (c.height >= this.dimensions.height && d[1]) switch (i = !0, d[1]) {
                        case this.STICKS_OUT_TOP:
                            u.setVertical("top"), this.options.targetJoint && l.setVertical("bottom");
                            break;
                        case this.STICKS_OUT_BOTTOM:
                            u.setVertical("bottom"), this.options.targetJoint && l.setVertical("top")
                    }
                    if (!i) return s;
                    if (this.options.stem && (h = u), e = this.getPosition(u, l, h), o = this._sticksOut(e), n = !1, r = !1, o[0] && o[0] !== d[0] && (n = !0, u.setHorizontal(this.options.tipJoint.horizontal), this.options.targetJoint && l.setHorizontal(this.options.targetJoint.horizontal)), o[1] && o[1] !== d[1] && (r = !0, u.setVertical(this.options.tipJoint.vertical), this.options.targetJoint && l.setVertical(this.options.targetJoint.vertical)), n && r) return s;
                    if ((n || r) && (this.options.stem && (h = u), e = this.getPosition(u, l, h)), "center" == h.horizontal && c.width >= this.dimensions.width) {
                        var g = e.left;
                        e.left < a[0] ? e.left = a[0] : e.left + this.dimensions.width > a[0] + c.width && (e.left = a[0] + c.width - this.dimensions.width), e.left != g && (p = e.left - g, "top" == h.vertical && (p = -p))
                    }
                    return {
                        position: e,
                        stem: h,
                        stemShift: p
                    }
                }, t.prototype._sticksOut = function(t) {
                    var e, i, o, s;
                    return i = this.adapter.scrollOffset(), s = this.adapter.viewportDimensions(), e = [t.left - i[0], t.top - i[1]], o = [!1, !1], e[0] < 0 ? o[0] = this.STICKS_OUT_LEFT : e[0] + this.dimensions.width > s.width && (o[0] = this.STICKS_OUT_RIGHT), e[1] < 0 ? o[1] = this.STICKS_OUT_TOP : e[1] + this.dimensions.height > s.height && (o[1] = this.STICKS_OUT_BOTTOM), o
                }, t.prototype._draw = function() {
                    var e, i, o, s, n, r, a, h, p, d, l, u, c, f, g, m, v, w, b, _ = this.currentStemShift,
                        y = this;
                    if (this.backgroundCanvas && this.redraw) {
                        if (this.debug("Drawing background."), this.redraw = !1, this.currentStem) {
                            for (v = ["top", "right", "bottom", "left"], g = 0, m = v.length; m > g; g++) u = v[g], this.adapter.removeClass(this.container, "stem-" + u);
                            this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal), this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical)
                        }
                        return r = [0, 0], a = [0, 0], __indexOf.call(this.options.hideTriggers, "closeButton") < 0 || (n = new t.Joint("top right" === (null != (w = this.currentStem) ? "" + w : void 0) ? "top left" : "top right"), r = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]], a = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]]), o = this.adapter.clone(this.dimensions), s = [0, 0], this.options.borderWidth && (o.width += 2 * this.options.borderWidth, o.height += 2 * this.options.borderWidth, s[0] -= this.options.borderWidth, s[1] -= this.options.borderWidth), this.options.shadow && (o.width += 2 * this.options.shadowBlur, o.width += Math.max(0, this.options.shadowOffset[0] - 2 * this.options.shadowBlur), o.height += 2 * this.options.shadowBlur, o.height += Math.max(0, this.options.shadowOffset[1] - 2 * this.options.shadowBlur), s[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]), s[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1])), i = {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, this.currentStem && (this.currentStem.left ? i.left = this.options.stemLength : this.currentStem.right && (i.right = this.options.stemLength), this.currentStem.top ? i.top = this.options.stemLength : this.currentStem.bottom && (i.bottom = this.options.stemLength)), n && (n.left ? i.left = Math.max(i.left, a[0]) : n.right && (i.right = Math.max(i.right, a[0])), n.top ? i.top = Math.max(i.top, a[1]) : n.bottom && (i.bottom = Math.max(i.bottom, a[1]))), o.width += i.left + i.right, o.height += i.top + i.bottom, s[0] -= i.left, s[1] -= i.top, this.currentStem && this.options.borderWidth && (b = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), f = b.stemLength, c = b.stemBase), e = this.adapter.unwrap(this.backgroundCanvas), e.width = o.width, e.height = o.height, this.adapter.css(this.backgroundCanvas, {
                                width: "" + e.width + "px",
                                height: "" + e.height + "px",
                                left: "" + s[0] + "px",
                                top: "" + s[1] + "px"
                            }), h = e.getContext("2d"), h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e.width, e.height), h.beginPath(), h.fillStyle = this._getColor(h, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal), h.lineJoin = "miter", h.miterLimit = 500, l = this.options.borderWidth / 2, this.options.borderWidth ? (h.strokeStyle = this.options.borderColor, h.lineWidth = this.options.borderWidth) : (f = this.options.stemLength, c = this.options.stemBase), null == c && (c = 0), d = function(t, e, i) {
                                return i && h.moveTo(Math.max(c, y.options.borderRadius, r[0]) + 1 - l, -l), e ? (h.lineTo(_ + t / 2 - c / 2, -l), h.lineTo(_ + t / 2, -f - l), h.lineTo(_ + t / 2 + c / 2, -l)) : void 0
                            }, p = function(t, e, i) {
                                var o, s, n, a;
                                return t ? (h.lineTo(-c + l, 0 - l), h.lineTo(f + l, -f - l), h.lineTo(l, c - l)) : e ? (a = y.options.closeButtonOffset, n = r[0], i % 2 !== 0 && (a = [a[1], a[0]], n = r[1]), o = Math.acos(a[1] / y.options.closeButtonRadius), s = Math.acos(a[0] / y.options.closeButtonRadius), h.lineTo(-n + l, -l), h.arc(l - a[0], -l + a[1], y.options.closeButtonRadius, -(Math.PI / 2 + o), s, !1)) : (h.lineTo(-y.options.borderRadius + l, -l), h.quadraticCurveTo(l, -l, l, y.options.borderRadius - l))
                            }, h.translate(-s[0], -s[1]), h.save(),
                            function() {
                                var e, i, o, s, r, a, l, u, c, f, g;
                                for (g = [], i = c = 0, f = t.positions.length / 2; 0 > f ? c > f : f > c; i = 0 > f ? --c : ++c) r = 2 * i, a = 0 === i || 3 === i ? 0 : y.dimensions.width, l = 2 > i ? 0 : y.dimensions.height, u = Math.PI / 2 * i, o = i % 2 === 0 ? y.dimensions.width : y.dimensions.height, s = new t.Joint(t.positions[r]), e = new t.Joint(t.positions[r + 1]), h.save(), h.translate(a, l), h.rotate(u), d(o, s.eql(y.currentStem), 0 === i), h.translate(o, 0), p(e.eql(y.currentStem), e.eql(n), i), g.push(h.restore());
                                return g
                            }(), h.closePath(), h.save(), this.options.shadow && (h.shadowColor = this.options.shadowColor, h.shadowBlur = this.options.shadowBlur, h.shadowOffsetX = this.options.shadowOffset[0], h.shadowOffsetY = this.options.shadowOffset[1]), h.fill(), h.restore(), this.options.borderWidth && h.stroke(), h.restore(), n ? function() {
                                var t, e, i, o, s;
                                return i = e = 2 * y.options.closeButtonRadius, "" + n == "top right" ? (s = [y.dimensions.width - y.options.closeButtonOffset[0], y.options.closeButtonOffset[1]], t = [s[0] + l, s[1] - l]) : (s = [y.options.closeButtonOffset[0], y.options.closeButtonOffset[1]], t = [s[0] - l, s[1] - l]), h.translate(t[0], t[1]), o = y.options.closeButtonCrossSize / 2, h.save(), h.beginPath(), h.strokeStyle = y.options.closeButtonCrossColor, h.lineWidth = y.options.closeButtonCrossLineWidth, h.lineCap = "round", h.moveTo(-o, -o), h.lineTo(o, o), h.stroke(), h.beginPath(), h.moveTo(o, -o), h.lineTo(-o, o), h.stroke(), h.restore(), y.adapter.css(y.closeButtonElement, {
                                    left: "" + (s[0] - o - y.options.closeButtonLinkOverscan) + "px",
                                    top: "" + (s[1] - o - y.options.closeButtonLinkOverscan) + "px",
                                    width: "" + (y.options.closeButtonCrossSize + 2 * y.options.closeButtonLinkOverscan) + "px",
                                    height: "" + (y.options.closeButtonCrossSize + 2 * y.options.closeButtonLinkOverscan) + "px"
                                })
                            }() : void 0
                    }
                }, t.prototype._getPathStemMeasures = function(t, e, i) {
                    var o, s, n, r, a, h, p;
                    if (r = i / 2, n = Math.atan(t / 2 / e), o = 2 * n, a = r / Math.sin(o), s = 2 * a * Math.cos(n), p = r + e - s, 0 > p) throw Error("Sorry but your stemLength / stemBase ratio is strange.");
                    return h = Math.tan(n) * p * 2, {
                        stemLength: p,
                        stemBase: h
                    }
                }, t.prototype._getColor = function(t, e, i, o) {
                    var s, n, r, a, h;
                    if (null == o && (o = !1), "string" == typeof i) return i;
                    for (n = o ? t.createLinearGradient(0, 0, e.width, 0) : t.createLinearGradient(0, 0, 0, e.height), r = a = 0, h = i.length; h > a; r = ++a) s = i[r], n.addColorStop(s[0], s[1]);
                    return n
                }, t.prototype._searchAndActivateCloseButtons = function() {
                    var t, e, i, o;
                    for (o = this.adapter.findAll(this.container, "." + this["class"].close), e = 0, i = o.length; i > e; e++) t = o[e], this.hideTriggers.push({
                        element: this.adapter.wrap(t),
                        event: "click"
                    });
                    return this.currentObservers.showing && this._setupObservers("-showing", "showing"), this.currentObservers.visible ? this._setupObservers("-visible", "visible") : void 0
                }, t.prototype._activateFirstInput = function() {
                    var t;
                    return t = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea")), null != t && "function" == typeof t.focus ? t.focus() : void 0
                }, t.prototype._followMousePosition = function() {
                    return this.options.fixed ? void 0 : t._observeMousePosition(this.bound.reposition)
                }, t.prototype._stopFollowingMousePosition = function() {
                    return this.options.fixed ? void 0 : t._stopObservingMousePosition(this.bound.reposition)
                }, t.prototype._clearShowTimeout = function() {
                    return clearTimeout(this._showTimeoutId)
                }, t.prototype._clearHideTimeout = function() {
                    return clearTimeout(this._hideTimeoutId)
                }, t.prototype._clearTimeouts = function() {
                    return clearTimeout(this._visibilityStateTimeoutId), this._clearShowTimeout(), this._clearHideTimeout()
                }, t.prototype._triggerElementExists = function() {
                    var t;
                    for (t = this.adapter.unwrap(this.triggerElement); t.parentNode;) {
                        if ("BODY" === t.parentNode.tagName) return !0;
                        t = t.parentNode
                    }
                    return !1
                }, t.prototype._loadAjax = function() {
                    var t = this;
                    if (!this.loading) return this.loaded = !1, this.loading = !0, this.adapter.addClass(this.container, this["class"].loading), this.setContent(""), this.debug("Loading content from " + this.options.ajax), this.adapter.ajax({
                        url: this.options.ajax,
                        method: this.options.ajaxMethod,
                        onSuccess: function(e) {
                            return t.debug("Loading successful."), t.adapter.removeClass(t.container, t["class"].loading), t.setContent(e)
                        },
                        onError: function(e) {
                            var i;
                            return i = t.options.ajaxErrorMessage, t.debug(i, e), t.setContent(i), t.adapter.addClass(t.container, t["class"].ajaxError)
                        },
                        onComplete: function() {
                            return t.adapter.removeClass(t.container, t["class"].loading), t.loading = !1, t.loaded = !0, t._searchAndActivateCloseButtons(), t._activateFirstInput(), t.reposition()
                        }
                    })
                }, t.prototype._ensureTriggerElement = function() {
                    return this._triggerElementExists() ? void 0 : (this.deactivate(), this._stopEnsureTriggerElement())
                }, t.prototype._ensureTriggerElementInterval = 1e3, t.prototype._startEnsureTriggerElement = function() {
                    var t = this;
                    return this._ensureTriggerElementTimeoutId = setInterval(function() {
                        return t._ensureTriggerElement()
                    }, this._ensureTriggerElementInterval)
                }, t.prototype._stopEnsureTriggerElement = function() {
                    return clearInterval(this._ensureTriggerElementTimeoutId)
                }, t
            }(), vendors = ["khtml", "ms", "o", "moz", "webkit"], Opentip.prototype.setCss3Style = function(t, e) {
                var i, o, s, n, r;
                t = this.adapter.unwrap(t), r = [];
                for (i in e) __hasProp.call(e, i) && (o = e[i], r.push(null != t.style[i] ? t.style[i] = o : function() {
                    var e, r, a;
                    for (a = [], e = 0, r = vendors.length; r > e; e++) s = vendors[e], n = "" + this.ucfirst(s) + this.ucfirst(i), a.push(null != t.style[n] ? t.style[n] = o : void 0);
                    return a
                }.call(this)));
                return r
            }, Opentip.prototype.defer = function(t) {
                return setTimeout(t, 0)
            }, Opentip.prototype.setTimeout = function(t, e) {
                return setTimeout(t, e ? 1e3 * e : 0)
            }, Opentip.prototype.ucfirst = function(t) {
                return null == t ? "" : t.charAt(0).toUpperCase() + t.slice(1)
            }, Opentip.prototype.dasherize = function(t) {
                return t.replace(/([A-Z])/g, function(t, e) {
                    return "-" + e.toLowerCase()
                })
            }, mousePositionObservers = [], mousePosition = {
                x: 0,
                y: 0
            }, mouseMoved = function(t) {
                var e, i, o, s;
                for (mousePosition = Opentip.adapter.mousePosition(t), s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], s.push(e());
                return s
            }, Opentip.followMousePosition = function() {
                return Opentip.adapter.observe(document.body, "mousemove", mouseMoved)
            }, Opentip._observeMousePosition = function(t) {
                return mousePositionObservers.push(t)
            }, Opentip._stopObservingMousePosition = function(t) {
                var e;
                return mousePositionObservers = function() {
                    var i, o, s;
                    for (s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], e !== t && s.push(e);
                    return s
                }()
            }, Opentip.Joint = function() {
                function t(t) {
                    null != t && (t instanceof Opentip.Joint && (t = "" + t), this.set(t))
                }
                return t.prototype.set = function(t) {
                    return t = t.toLowerCase(), this.setHorizontal(t), this.setVertical(t), this
                }, t.prototype.setHorizontal = function(t) {
                    var e, i, o, s, n, r, a;
                    for (i = ["left", "center", "right"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.horizontal = e.toLowerCase());
                    for (null == this.horizontal && (this.horizontal = "center"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.horizontal === e ? e : void 0);
                    return a
                }, t.prototype.setVertical = function(t) {
                    var e, i, o, s, n, r, a;
                    for (i = ["top", "middle", "bottom"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.vertical = e.toLowerCase());
                    for (null == this.vertical && (this.vertical = "middle"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.vertical === e ? e : void 0);
                    return a
                }, t.prototype.eql = function(t) {
                    return null != t && this.horizontal === t.horizontal && this.vertical === t.vertical
                }, t.prototype.flip = function() {
                    var t, e;
                    return e = Opentip.position[this.toString(!0)], t = (e + 4) % 8, this.set(Opentip.positions[t]), this
                }, t.prototype.toString = function(t) {
                    var e, i;
                    return null == t && (t = !1), i = "middle" === this.vertical ? "" : this.vertical, e = "center" === this.horizontal ? "" : this.horizontal, i && e && (e = t ? Opentip.prototype.ucfirst(e) : " " + e), "" + i + e
                }, t
            }(), Opentip.prototype._positionsEqual = function(t, e) {
                return null != t && null != e && t.left === e.left && t.top === e.top
            }, Opentip.prototype._dimensionsEqual = function(t, e) {
                return null != t && null != e && t.width === e.width && t.height === e.height
            }, Opentip.prototype.debug = function() {
                var t;
                return t = 1 > arguments.length ? [] : __slice.call(arguments, 0), Opentip.debug && null != ("undefined" != typeof console && null !== console ? console.debug : void 0) ? (t.unshift("#" + this.id + " |"), console.debug.apply(console, t)) : void 0
            }, Opentip.findElements = function() {
                var t, e, i, o, s, n, r, a, h, p;
                for (t = Opentip.adapter, h = t.findAll(document.body, "[data-ot]"), p = [], r = 0, a = h.length; a > r; r++) {
                    i = h[r], n = {}, e = t.data(i, "ot"), ("" === e || "true" === e || "yes" === e) && (e = t.attr(i, "title"), t.attr(i, "title", "")), e = e || "";
                    for (o in Opentip.styles.standard) s = t.data(i, "ot" + Opentip.prototype.ucfirst(o)), null != s && ("yes" === s || "true" === s || "on" === s ? s = !0 : ("no" === s || "false" === s || "off" === s) && (s = !1), n[o] = s);
                    p.push(new Opentip(i, e, n))
                }
                return p
            }, Opentip.version = "2.4.6", Opentip.debug = !1, Opentip.lastId = 0, Opentip.lastZIndex = 100, Opentip.tips = [], Opentip._abortShowingGroup = function(t, e) {
                var i, o, s, n, r;
                for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], r.push(i !== e && i.options.group === t ? i._abortShowing() : void 0);
                return r
            }, Opentip._hideGroup = function(t, e) {
                var i, o, s, n, r;
                for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], r.push(i !== e && i.options.group === t ? i.hide() : void 0);
                return r
            }, Opentip.adapters = {}, Opentip.adapter = null, firstAdapter = !0, Opentip.addAdapter = function(t) {
                return Opentip.adapters[t.name] = t, firstAdapter ? (Opentip.adapter = t, t.domReady(Opentip.findElements), t.domReady(Opentip.followMousePosition), firstAdapter = !1) : void 0
            }, Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"], Opentip.position = {}, _ref = Opentip.positions, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i) position = _ref[i], Opentip.position[position] = i;
        Opentip.styles = {
            standard: {
                "extends": null,
                title: void 0,
                escapeTitle: !0,
                escapeContent: !1,
                className: "standard",
                stem: !0,
                delay: null,
                hideDelay: .1,
                fixed: !1,
                showOn: "mouseover",
                hideTrigger: "trigger",
                hideTriggers: [],
                hideOn: null,
                removeElementsOnHide: !1,
                offset: [0, 0],
                containInViewport: !0,
                autoOffset: !0,
                showEffect: "appear",
                hideEffect: "fade",
                showEffectDuration: .3,
                hideEffectDuration: .2,
                stemLength: 5,
                stemBase: 8,
                tipJoint: "top left",
                target: null,
                targetJoint: null,
                cache: !0,
                ajax: !1,
                ajaxMethod: "GET",
                ajaxErrorMessage: "There was a problem downloading the content.",
                group: null,
                style: null,
                background: "#fff18f",
                backgroundGradientHorizontal: !1,
                closeButtonOffset: [5, 5],
                closeButtonRadius: 7,
                closeButtonCrossSize: 4,
                closeButtonCrossColor: "#d2c35b",
                closeButtonCrossLineWidth: 1.5,
                closeButtonLinkOverscan: 6,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#f2e37b",
                shadow: !0,
                shadowBlur: 10,
                shadowOffset: [3, 3],
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            glass: {
                "extends": "standard",
                className: "glass",
                background: [
                    [0, "rgba(252, 252, 252, 0.8)"],
                    [.5, "rgba(255, 255, 255, 0.8)"],
                    [.5, "rgba(250, 250, 250, 0.9)"],
                    [1, "rgba(245, 245, 245, 0.9)"]
                ],
                borderColor: "#eee",
                closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: 15,
                closeButtonRadius: 10,
                closeButtonOffset: [8, 8]
            },
            dark: {
                "extends": "standard",
                className: "dark",
                borderRadius: 13,
                borderColor: "#444",
                closeButtonCrossColor: "rgba(240, 240, 240, 1)",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowOffset: [2, 2],
                background: [
                    [0, "rgba(30, 30, 30, 0.7)"],
                    [.5, "rgba(30, 30, 30, 0.8)"],
                    [.5, "rgba(10, 10, 10, 0.8)"],
                    [1, "rgba(10, 10, 10, 0.9)"]
                ]
            },
            alert: {
                "extends": "standard",
                className: "alert",
                borderRadius: 1,
                borderColor: "#AE0D11",
                closeButtonCrossColor: "rgba(255, 255, 255, 1)",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowOffset: [2, 2],
                background: [
                    [0, "rgba(203, 15, 19, 0.7)"],
                    [.5, "rgba(203, 15, 19, 0.8)"],
                    [.5, "rgba(189, 14, 18, 0.8)"],
                    [1, "rgba(179, 14, 17, 0.9)"]
                ]
            }
        }, Opentip.defaultStyle = "standard", "undefined" != typeof module && null !== module ? module.exports = Opentip : window.Opentip = Opentip;
        var __slice = [].slice;
        ! function(t) {
            var e;
            return t.fn.opentip = function(t, e, i) {
                return new Opentip(this, t, e, i)
            }, e = function() {
                function e() {}
                return e.prototype.name = "jquery", e.prototype.domReady = function(e) {
                    return t(e)
                }, e.prototype.create = function(e) {
                    return t(e)
                }, e.prototype.wrap = function(e) {
                    if (e = t(e), e.length > 1) throw Error("Multiple elements provided.");
                    return e
                }, e.prototype.unwrap = function(e) {
                    return t(e)[0]
                }, e.prototype.tagName = function(t) {
                    return this.unwrap(t).tagName
                }, e.prototype.attr = function() {
                    var e, i, o;
                    return i = arguments[0], e = 2 > arguments.length ? [] : __slice.call(arguments, 1), (o = t(i)).attr.apply(o, e)
                }, e.prototype.data = function() {
                    var e, i, o;
                    return i = arguments[0], e = 2 > arguments.length ? [] : __slice.call(arguments, 1), (o = t(i)).data.apply(o, e)
                }, e.prototype.find = function(e, i) {
                    return t(e).find(i).get(0)
                }, e.prototype.findAll = function(e, i) {
                    return t(e).find(i)
                }, e.prototype.update = function(e, i, o) {
                    return e = t(e), o ? e.text(i) : e.html(i)
                }, e.prototype.append = function(e, i) {
                    return t(e).append(i)
                }, e.prototype.remove = function(e) {
                    return t(e).remove()
                }, e.prototype.addClass = function(e, i) {
                    return t(e).addClass(i)
                }, e.prototype.removeClass = function(e, i) {
                    return t(e).removeClass(i)
                }, e.prototype.css = function(e, i) {
                    return t(e).css(i)
                }, e.prototype.dimensions = function(e) {
                    return {
                        width: t(e).outerWidth(),
                        height: t(e).outerHeight()
                    }
                }, e.prototype.scrollOffset = function() {
                    return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop]
                }, e.prototype.viewportDimensions = function() {
                    return {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight
                    }
                }, e.prototype.mousePosition = function(t) {
                    return null == t ? null : {
                        x: t.pageX,
                        y: t.pageY
                    }
                }, e.prototype.offset = function(e) {
                    var i;
                    return i = t(e).offset(), {
                        left: i.left,
                        top: i.top
                    }
                }, e.prototype.observe = function(e, i, o) {
                    return t(e).bind(i, o)
                }, e.prototype.stopObserving = function(e, i, o) {
                    return t(e).unbind(i, o)
                }, e.prototype.ajax = function(e) {
                    var i, o;
                    if (null == e.url) throw Error("No url provided");
                    return t.ajax({
                        url: e.url,
                        type: null != (i = null != (o = e.method) ? o.toUpperCase() : void 0) ? i : "GET"
                    }).done(function(t) {
                        return "function" == typeof e.onSuccess ? e.onSuccess(t) : void 0
                    }).fail(function(t) {
                        return "function" == typeof e.onError ? e.onError("Server responded with status " + t.status) : void 0
                    }).always(function() {
                        return "function" == typeof e.onComplete ? e.onComplete() : void 0
                    })
                }, e.prototype.clone = function(e) {
                    return t.extend({}, e)
                }, e.prototype.extend = function() {
                    var e, i;
                    return i = arguments[0], e = 2 > arguments.length ? [] : __slice.call(arguments, 1), t.extend.apply(t, [i].concat(__slice.call(e)))
                }, e
            }(), Opentip.addAdapter(new e)
        }(jQuery);
        window.Opentip = Opentip;
    })();
} catch (e) {}
try {
    ! function(a, b, c, d) {
        "use strict";

        function e(a, b, c) {
            return setTimeout(j(a, c), b)
        }

        function f(a, b, c) {
            return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
        }

        function g(a, b, c) {
            var e;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== d)
                for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
                for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
        }

        function h(b, c, d) {
            var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
            return function() {
                var c = new Error("get-stack-trace"),
                    d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    f = a.console && (a.console.warn || a.console.log);
                return f && f.call(a.console, e, d), b.apply(this, arguments)
            }
        }

        function i(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
        }

        function j(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function k(a, b) {
            return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
        }

        function l(a, b) {
            return a === d ? b : a
        }

        function m(a, b, c) {
            g(q(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function n(a, b, c) {
            g(q(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function o(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function p(a, b) {
            return a.indexOf(b) > -1
        }

        function q(a) {
            return a.trim().split(/\s+/g)
        }

        function r(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c && a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function s(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function t(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var g = b ? a[f][b] : a[f];
                r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
            }
            return c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
        }

        function u(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
                if (c = ma[g], e = c ? c + f : b, e in a) return e;
                g++
            }
            return d
        }

        function v() {
            return ua++
        }

        function w(b) {
            var c = b.ownerDocument || b;
            return c.defaultView || c.parentWindow || a
        }

        function x(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
                k(a.options.enable, [a]) && c.handler(b)
            }, this.init()
        }

        function y(a) {
            var b, c = a.options.inputClass;
            return new(b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
        }

        function z(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & Ea && d - e === 0,
                g = b & (Ga | Ha) && d - e === 0;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
        }

        function A(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = b.center = E(d);
            b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
            var j = F(b.deltaTime, b.deltaX, b.deltaY);
            b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
            var k = a.element;
            o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
        }

        function B(a, b) {
            var c = b.center,
                d = a.offsetDelta || {},
                e = a.prevDelta || {},
                f = a.prevInput || {};
            b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
                x: f.deltaX || 0,
                y: f.deltaY || 0
            }, d = a.offsetDelta = {
                x: c.x,
                y: c.y
            }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
        }

        function C(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
                i = b.timeStamp - h.timeStamp;
            if (b.eventType != Ha && (i > Da || h.velocity === d)) {
                var j = b.deltaX - h.deltaX,
                    k = b.deltaY - h.deltaY,
                    l = F(i, j, k);
                e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
            } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
        }

        function D(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: ra(),
                pointers: b,
                center: E(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function E(a) {
            var b = a.length;
            if (1 === b) return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: pa(c / b),
                y: pa(d / b)
            }
        }

        function F(a, b, c) {
            return {
                x: b / a || 0,
                y: c / a || 0
            }
        }

        function G(a, b) {
            return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
        }

        function H(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
        }

        function I(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
        }

        function J(a, b) {
            return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
        }

        function K(a, b) {
            return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
        }

        function L() {
            this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
        }

        function M() {
            this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function N() {
            this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
        }

        function O(a, b) {
            var c = s(a.touches),
                d = s(a.changedTouches);
            return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
        }

        function P() {
            this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
        }

        function Q(a, b) {
            var c = s(a.touches),
                d = this.targetIds;
            if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = s(a.changedTouches),
                h = [],
                i = this.target;
            if (f = c.filter(function(a) {
                    return o(a.target, i)
                }), b === Ea)
                for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
            return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
        }

        function R() {
            x.apply(this, arguments);
            var a = j(this.handler, this);
            this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
        }

        function S(a, b) {
            a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
        }

        function T(a) {
            var b = a.changedPointers[0];
            if (b.identifier === this.primaryTouch) {
                var c = {
                    x: b.clientX,
                    y: b.clientY
                };
                this.lastTouches.push(c);
                var d = this.lastTouches,
                    e = function() {
                        var a = d.indexOf(c);
                        a > -1 && d.splice(a, 1)
                    };
                setTimeout(e, cb)
            }
        }

        function U(a) {
            for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
                var e = this.lastTouches[d],
                    f = Math.abs(b - e.x),
                    g = Math.abs(c - e.y);
                if (db >= f && db >= g) return !0
            }
            return !1
        }

        function V(a, b) {
            this.manager = a, this.set(b)
        }

        function W(a) {
            if (p(a, jb)) return jb;
            var b = p(a, kb),
                c = p(a, lb);
            return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
        }

        function X() {
            if (!fb) return !1;
            var b = {},
                c = a.CSS && a.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
                b[d] = c ? a.CSS.supports("touch-action", d) : !0
            }), b
        }

        function Y(a) {
            this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
        }

        function Z(a) {
            return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
        }

        function $(a) {
            return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
        }

        function _(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function aa() {
            Y.apply(this, arguments)
        }

        function ba() {
            aa.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ca() {
            aa.apply(this, arguments)
        }

        function da() {
            Y.apply(this, arguments), this._timer = null, this._input = null
        }

        function ea() {
            aa.apply(this, arguments)
        }

        function fa() {
            aa.apply(this, arguments)
        }

        function ga() {
            Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ha(a, b) {
            return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
        }

        function ia(a, b) {
            this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
            }, this)
        }

        function ja(a, b) {
            var c = a.element;
            if (c.style) {
                var d;
                g(a.options.cssProps, function(e, f) {
                    d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
                }), b || (a.oldCssProps = {})
            }
        }

        function ka(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
        }
        var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
            na = b.createElement("div"),
            oa = "function",
            pa = Math.round,
            qa = Math.abs,
            ra = Date.now;
        la = "function" != typeof Object.assign ? function(a) {
            if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var e = arguments[c];
                if (e !== d && null !== e)
                    for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
            }
            return b
        } : Object.assign;
        var sa = h(function(a, b, c) {
                for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
                return a
            }, "extend", "Use `assign`."),
            ta = h(function(a, b) {
                return sa(a, b, !0)
            }, "merge", "Use `assign`."),
            ua = 1,
            va = /mobile|tablet|ip(ad|hone|od)|android/i,
            wa = "ontouchstart" in a,
            xa = u(a, "PointerEvent") !== d,
            ya = wa && va.test(navigator.userAgent),
            za = "touch",
            Aa = "pen",
            Ba = "mouse",
            Ca = "kinect",
            Da = 25,
            Ea = 1,
            Fa = 2,
            Ga = 4,
            Ha = 8,
            Ia = 1,
            Ja = 2,
            Ka = 4,
            La = 8,
            Ma = 16,
            Na = Ja | Ka,
            Oa = La | Ma,
            Pa = Na | Oa,
            Qa = ["x", "y"],
            Ra = ["clientX", "clientY"];
        x.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
            }
        };
        var Sa = {
                mousedown: Ea,
                mousemove: Fa,
                mouseup: Ga
            },
            Ta = "mousedown",
            Ua = "mousemove mouseup";
        i(L, x, {
            handler: function(a) {
                var b = Sa[a.type];
                b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: Ba,
                    srcEvent: a
                }))
            }
        });
        var Va = {
                pointerdown: Ea,
                pointermove: Fa,
                pointerup: Ga,
                pointercancel: Ha,
                pointerout: Ha
            },
            Wa = {
                2: za,
                3: Aa,
                4: Ba,
                5: Ca
            },
            Xa = "pointerdown",
            Ya = "pointermove pointerup pointercancel";
        a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Va[d],
                    f = Wa[a.pointerType] || a.pointerType,
                    g = f == za,
                    h = r(b, a.pointerId, "pointerId");
                e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
            }
        });
        var Za = {
                touchstart: Ea,
                touchmove: Fa,
                touchend: Ga,
                touchcancel: Ha
            },
            $a = "touchstart",
            _a = "touchstart touchmove touchend touchcancel";
        i(N, x, {
            handler: function(a) {
                var b = Za[a.type];
                if (b === Ea && (this.started = !0), this.started) {
                    var c = O.call(this, a, b);
                    b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: za,
                        srcEvent: a
                    })
                }
            }
        });
        var ab = {
                touchstart: Ea,
                touchmove: Fa,
                touchend: Ga,
                touchcancel: Ha
            },
            bb = "touchstart touchmove touchend touchcancel";
        i(P, x, {
            handler: function(a) {
                var b = ab[a.type],
                    c = Q.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        });
        var cb = 2500,
            db = 25;
        i(R, x, {
            handler: function(a, b, c) {
                var d = c.pointerType == za,
                    e = c.pointerType == Ba;
                if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                    if (d) S.call(this, b, c);
                    else if (e && U.call(this, c)) return;
                    this.callback(a, b, c)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var eb = u(na.style, "touchAction"),
            fb = eb !== d,
            gb = "compute",
            hb = "auto",
            ib = "manipulation",
            jb = "none",
            kb = "pan-x",
            lb = "pan-y",
            mb = X();
        V.prototype = {
            set: function(a) {
                a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                return g(this.manager.recognizers, function(b) {
                    k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }), W(a.join(" "))
            },
            preventDefaults: function(a) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions,
                    e = p(d, jb) && !mb[jb],
                    f = p(d, lb) && !mb[lb],
                    g = p(d, kb) && !mb[kb];
                if (e) {
                    var h = 1 === a.pointers.length,
                        i = a.distance < 2,
                        j = a.deltaTime < 250;
                    if (h && i && j) return
                }
                return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0, a.preventDefault()
            }
        };
        var nb = 1,
            ob = 2,
            pb = 4,
            qb = 8,
            rb = qb,
            sb = 16,
            tb = 32;
        Y.prototype = {
            defaults: {},
            set: function(a) {
                return la(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function(a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function(a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function(a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = _(a, this);
                var b = r(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(b, a)
                }
                var c = this,
                    d = this.state;
                qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
            },
            tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = tb)
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (tb | nb))) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                var b = la({}, a);
                return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
            },
            process: function(a) {},
            getTouchAction: function() {},
            reset: function() {}
        }, i(aa, Y, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (ob | pb),
                    e = this.attrTest(a);
                return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
            }
        }), i(ba, aa, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Pa
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                return a & Na && b.push(lb), a & Oa && b.push(kb), b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX, this.pY = a.deltaY;
                var b = $(a.direction);
                b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
            }
        }), i(ca, aa, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jb]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
            },
            emit: function(a) {
                if (1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    a.additionalEvent = this.options.event + b
                }
                this._super.emit.call(this, a)
            }
        }), i(da, Y, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [hb]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
                else if (a.eventType & Ea) this.reset(), this._timer = e(function() {
                    this.state = rb, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & Ga) return rb;
                return tb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
            }
        }), i(ea, aa, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jb]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
            }
        }), i(fa, aa, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Na | Oa,
                pointers: 1
            },
            getTouchAction: function() {
                return ba.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
            },
            emit: function(a) {
                var b = $(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
        }), i(ga, Y, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ib]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != Ga) return this.failTimeout();
                    var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                        h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = rb, this.tryEmit()
                    }, b.interval, this), ob) : rb
                }
                return tb
            },
            failTimeout: function() {
                return this._timer = e(function() {
                    this.state = tb
                }, this.options.interval, this), tb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ha.VERSION = "2.0.8", ha.defaults = {
            domEvents: !1,
            touchAction: gb,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ea, {
                    enable: !1
                }],
                [ca, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [fa, {
                    direction: Na
                }],
                [ba, {
                        direction: Na
                    },
                    ["swipe"]
                ],
                [ga],
                [ga, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [da]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var ub = 1,
            vb = 2;
        ia.prototype = {
            set: function(a) {
                return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
            },
            stop: function(a) {
                this.session.stopped = a ? vb : ub
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                    for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
                }
            },
            get: function(a) {
                if (a instanceof Y) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (f(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function(a) {
                if (f(a, "remove", this)) return this;
                if (a = this.get(a)) {
                    var b = this.recognizers,
                        c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
                }
                return this
            },
            on: function(a, b) {
                if (a !== d && b !== d) {
                    var c = this.handlers;
                    return g(q(a), function(a) {
                        c[a] = c[a] || [], c[a].push(b)
                    }), this
                }
            },
            off: function(a, b) {
                if (a !== d) {
                    var c = this.handlers;
                    return g(q(a), function(a) {
                        b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                    }), this
                }
            },
            emit: function(a, b) {
                this.options.domEvents && ka(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a, b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, la(ha, {
            INPUT_START: Ea,
            INPUT_MOVE: Fa,
            INPUT_END: Ga,
            INPUT_CANCEL: Ha,
            STATE_POSSIBLE: nb,
            STATE_BEGAN: ob,
            STATE_CHANGED: pb,
            STATE_ENDED: qb,
            STATE_RECOGNIZED: rb,
            STATE_CANCELLED: sb,
            STATE_FAILED: tb,
            DIRECTION_NONE: Ia,
            DIRECTION_LEFT: Ja,
            DIRECTION_RIGHT: Ka,
            DIRECTION_UP: La,
            DIRECTION_DOWN: Ma,
            DIRECTION_HORIZONTAL: Na,
            DIRECTION_VERTICAL: Oa,
            DIRECTION_ALL: Pa,
            Manager: ia,
            Input: x,
            TouchAction: V,
            TouchInput: P,
            MouseInput: L,
            PointerEventInput: M,
            TouchMouseInput: R,
            SingleTouchInput: N,
            Recognizer: Y,
            AttrRecognizer: aa,
            Tap: ga,
            Pan: ba,
            Swipe: fa,
            Pinch: ca,
            Rotate: ea,
            Press: da,
            on: m,
            off: n,
            each: g,
            merge: ta,
            extend: sa,
            assign: la,
            inherit: i,
            bindFn: j,
            prefixed: u
        });
        var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
        wb.Hammer = ha, "function" == typeof define && define.amd ? define(function() {
            return ha
        }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
    }(window, document, "Hammer");
} catch (e) {}
module = {};
try {
    var helpInfo = {},
        mainVarForUnusedWarning, mainVarUnusedWarningIssued = !1,
        nextAutoNodeID = 1;

    function T(b) {
        var g = arguments;
        return String(b).replace(/#{(\w+)}/g, function(b, a) {
            for (b = g.length - 1; 1 <= b; --b) {
                var e = g[b];
                if (a in e) return g[0] = e[a], T.apply(null, g)
            }
            return "#{" + a + "}"
        })
    }

    function escapeHtml(b) {
        var g = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        return String(b).replace(/[&<>"'\/]/g, function(b) {
            return g[b]
        })
    }
    var TOKEN = {
        NUMBER: 1,
        CONSTANT: 2,
        VARIABLE: 3,
        OPERATOR: 4,
        WHITESPACE: 5,
        LEFT_PAR: 6,
        RIGHT_PAR: 7,
        BAR: 8
    };

    function parseExpression(b, g, l, a, e) {
        function m(a, b, e, k, l) {
            function f(c) {
                return c.replace(/[\u00c4\u00c1\u00c0\u00c2\u00e4\u00e1\u00e0\u00e2]/g, "a").replace(/[\u00c9\u00c8\u00ca\u00e9\u00e8\u00ea]/g, "e").replace(/[\u00cd\u00cc\u00ce\u00ed\u00ec\u00ee]/g, "i").replace(/[\u00d6\u00d3\u00d2\u00d4\u00f6\u00f3\u00f2\u00f4]/g, "o").replace(/[\u00dc\u00da\u00d9\u00db\u00fc\u00fa\u00f9\u00fb]/g, "u")
            }

            function g(c) {
                var a = [],
                    h = c.trim().split(" ");
                for (c = 0; c < h.length; ++c) {
                    var d = h[c];
                    0 < c && a.push({
                        type: TOKEN.WHITESPACE
                    });
                    for (var e = null, B = 0, q = 0;;) {
                        e && (a.push(e), d = d.substr((q ? q : e.text.length) + B), e = null, q = B = 0);
                        for (var l in P) 0 == d.indexOf(l) && (d = P[l] + d.substr(l.length));
                        if ("" == d.trim()) break;
                        var f = d.charAt(0);
                        if ("(" == f) e = {
                            type: TOKEN.LEFT_PAR,
                            text: "("
                        };
                        else if (")" == f) e = {
                            type: TOKEN.RIGHT_PAR,
                            text: ")"
                        };
                        else if ("|" == f) e = {
                            type: TOKEN.BAR,
                            text: "|"
                        };
                        else {
                            var y = 0,
                                g = [];
                            for (n in r) {
                                var m = d.match(r[n]);
                                m && (m = m[0].length, m == y ? g.push(n) : m > y && (y = m, g = [n]))
                            }
                            if (0 < y)
                                if (1 == g.length) {
                                    e = {
                                        type: TOKEN.OPERATOR,
                                        text: g[0],
                                        op: z[g[0]]
                                    };
                                    q = y;
                                    continue
                                } else {
                                    a = [];
                                    for (c = 0; c < g.length; ++c) a.push('"' + g[c] + '"');
                                    throw T(L.ambiguousOperator, {
                                        o: d.substr(0, y),
                                        p: a.join(", ")
                                    });
                                }
                            for (m = 0; m < p.length; ++m) {
                                var n = p[m];
                                if (0 == d.indexOf(n)) {
                                    e = {
                                        type: TOKEN.OPERATOR,
                                        text: n,
                                        op: z[n]
                                    };
                                    break
                                }
                            }
                            if (!e)
                                if (m = d.match(X))
                                    if (y = m[0].replace(/[bdBDE]/g, "e").indexOf("e"), -1 == y) {
                                        -1 == m[0].indexOf(".") && "." == d.charAt(m[0].length) && ++B;
                                        for (e = {
                                                type: TOKEN.NUMBER,
                                                text: m[0]
                                            };
                                            "0" != e.text && "0" == e.text.charAt(0);) e.text = e.text.substr(1), ++B;
                                        "." == e.text.charAt(0) && (e.text = "0" + e.text, --B);
                                        if (-1 != e.text.indexOf("."))
                                            for (;;) {
                                                m = e.text.charAt(e.text.length - 1);
                                                if ("0" == m || "." == m) e.text = e.text.substr(0, e.text.length - 1), ++B;
                                                else break;
                                                if ("." == m) break
                                            }
                                    } else f = m[0].substr(0, y), y = m[0].substr(y + 1), y = parseInt(y, 10), /^\.?0+$/.test(f) ? f = "0" : y && (-4 <= y && 4 >= y ? (f = "000000" + f + (-1 == f.indexOf(".") ? "." : "") + "000000", g = f.indexOf("."), f = f.substr(0, g) + f.substr(g + 1), g += y, f = f.substr(0, g) + "." + f.substr(g)) : f = /^0*1(\.0+)?$/.test(f) ? "(10^" + y + ")" : "(" + f + "*10^" + y + ")"), d = f + d.substr(m[0].length);
                            else {
                                for (m = 0; m < t.length; ++m)
                                    if (y = t[m], 0 == d.indexOf(y)) {
                                        e = {
                                            type: TOKEN.CONSTANT,
                                            text: y
                                        };
                                        break
                                    }
                                if (!e)
                                    if (m = d.charAt(0), /^[a-z]$/.test(m) || b && (/^[A-Z]$/.test(m) || -1 != "\u03b1\u03c9\u2205".indexOf(f)) || k && "?" == f) {
                                        if (e = {
                                                type: TOKEN.VARIABLE,
                                                text: f
                                            }, "?" != f && 2 <= d.length && -1 != "_0123456789".indexOf(d.charAt(1))) {
                                            f = "";
                                            y = 1;
                                            for ((g = "_" == d.charAt(1)) && ++y;;)
                                                if (m = d.charAt(y), (g ? /^[0-9a-z]$/ : /^[0-9]$/).test(m)) f += m, ++y;
                                                else break;
                                            if ("" != f) {
                                                if (10 < f.length) throw L.subscriptTooLong;
                                                e.text += "_" + f;
                                                q = y
                                            } else c == h.length - 1 && y == d.length && (q = y)
                                        }
                                    } else {
                                        if ("=" == f && void 0 !== L.invalidCharacterEqualSign) throw L.invalidCharacterEqualSign;
                                        throw T(L.invalidCharacter, {
                                            c: f
                                        });
                                    }
                            }
                        }
                    }
                }
                return a
            }

            function m(c, a) {
                var b = {},
                    h;
                for (h in c) b[h] = c[h];
                b.prec += a;
                return b
            }

            function A(c) {
                for (var a = [], b = null, h = !1, d = 0; d < c.length; ++d) {
                    var q = c[d];
                    if (q.type == TOKEN.BAR) {
                        q = -1;
                        for (var f = 0, k = d + 1; k < c.length; ++k) {
                            var l = c[k];
                            if (l.type == TOKEN.LEFT_PAR) ++f;
                            else if (l.type == TOKEN.RIGHT_PAR) {
                                if (--f, 0 > f) break
                            } else if (l.type == TOKEN.BAR && 0 == f) {
                                q = k;
                                break
                            }
                        }
                        if (-1 == q) throw L.rightBarNotFound;
                        c = c.slice(0, d).concat({
                            type: TOKEN.OPERATOR,
                            text: "abs",
                            op: z.abs
                        }, {
                            type: TOKEN.LEFT_PAR,
                            text: "("
                        }, c.slice(d + 1, q), {
                            type: TOKEN.RIGHT_PAR,
                            text: ")"
                        }, c.slice(q + 1))
                    }
                }
                for (d = 0; d < c.length; ++d)
                    if (q = c[d], q.type == TOKEN.WHITESPACE) h = !1;
                    else {
                        b ? ("(" == q.text && b.type == TOKEN.OPERATOR && (b.followedByLeftPar = !0), "-" != q.text || b.type != TOKEN.OPERATOR && "(" != b.text) ? !e || b.type != TOKEN.RIGHT_PAR && b.type != TOKEN.NUMBER && b.type != TOKEN.VARIABLE && b.type != TOKEN.CONSTANT || q.type == TOKEN.OPERATOR && 2 == q.op.numArgs || q.type == TOKEN.NUMBER || q.type == TOKEN.RIGHT_PAR || (b = z["*"], B && h && q.type != TOKEN.OPERATOR && q.type != TOKEN.LEFT_PAR && (b = m(b, 100)), a.push({
                            type: TOKEN.OPERATOR,
                            text: "*",
                            op: b,
                            implicit: !0
                        })) : (q.text = "~", q.op = z["~"], h = !1) : "-" == q.text && (q.text = "~", q.op = z["~"]);
                        if (B)
                            if (q.type == TOKEN.OPERATOR && !q.implicit) "^" == q.text && 1 == h ? q.op = m(q.op, 200) : "~" != q.text && 1 == q.op.numArgs ? d < c.length - 1 && c[d + 1].type == TOKEN.WHITESPACE ? (h = 1, ++d) : h = 2 : h = !1;
                            else if (q.type == TOKEN.LEFT_PAR || q.type == TOKEN.RIGHT_PAR) h = !1;
                        a.push(q);
                        b = q
                    }
                c = a;
                a = [];
                b = null;
                for (d = 0; d < c.length; ++d)
                    if (q = c[d], b && "^" == q.text && b.type == TOKEN.OPERATOR && 1 == b.op.numArgs && "~" != b.text) try {
                        if (d == c.length - 1)
                            for (var g = 0; 2 > g; ++g) c.push({
                                type: TOKEN.VARIABLE,
                                text: "?"
                            });
                        h = "";
                        for (k = d + 1; k < c.length && c[k].type == TOKEN.OPERATOR && 1 == c[k].op.numArgs;) h += c[k++].text;
                        if (k == c.length)
                            for (g = 0; 2 > g; ++g) c.push({
                                type: TOKEN.VARIABLE,
                                text: "?"
                            });
                        if ("^" == c[k].text) throw L.usage_prependedExponentBrackets;
                        h += c[k].text;
                        f = !0;
                        if ("(" == c[k++].text) {
                            for (var p = 1; p && k != c.length;) {
                                var n = c[k++].text;
                                "(" == n ? ++p : ")" == n && --p;
                                h += n
                            }
                            p && k == c.length && (f = !1)
                        }
                        l = k;
                        k == c.length && c.push({
                            type: TOKEN.VARIABLE,
                            text: "?"
                        });
                        if ("*" == c[k].text && c[k].implicit) ++k;
                        else if ("-" == c[k].text) c[k].text = "~", c[k].op = z[c[k].text];
                        else if (c[k].type == TOKEN.OPERATOR && 1 < c[k].op.numArgs) throw L.usage_prependedExponentBrackets;
                        "(" == c[k].text && (b.followedByLeftPar = !0);
                        if ("~1" == h || "(~1)" == h || "(~1" == h)
                            if (b.op.inverse) b.text = b.op.inverse, b.op = z[b.text], c = c.slice(k), d = -1;
                            else throw T(L.noInverseFunction, {
                                f: b.text
                            });
                        else {
                            for (g = k; c[g].type == TOKEN.OPERATOR && 1 == c[g].op.numArgs;) ++g;
                            if ("(" == c[g++].text) {
                                for (p = 1; p && g != c.length;) n = c[g++].text, "(" == n ? ++p : ")" == n && --p;
                                if (p && g == c.length) {
                                    if (c[g - 1].type == TOKEN.OPERATOR || "(" == c[g - 1].text) c.push({
                                        type: TOKEN.VARIABLE,
                                        text: "?"
                                    }), ++g;
                                    for (; p--;) c.push({
                                        type: TOKEN.RIGHT_PAR,
                                        text: ")"
                                    }), ++g
                                }
                            }
                            a.pop();
                            a.push({
                                type: TOKEN.LEFT_PAR,
                                text: "("
                            });
                            q.op = z["^"];
                            a.push(b);
                            a.push({
                                type: TOKEN.LEFT_PAR,
                                text: "("
                            });
                            c = f ? c.slice(k, g).concat({
                                type: TOKEN.RIGHT_PAR,
                                text: ")"
                            }, c.slice(d, l), {
                                type: TOKEN.RIGHT_PAR,
                                text: ")"
                            }, c.slice(g)) : c.slice(k, g).concat({
                                type: TOKEN.RIGHT_PAR,
                                text: ")"
                            }, c.slice(d, l), c.slice(g));
                            d = -1
                        }
                    } catch (R) {
                        if ("string" == typeof R) throw R;
                        throw L.unexpectedEndOfExpression;
                    } else a.push(q), b = q;
                return a
            }

            function C(c) {
                function a() {
                    e >= c.length && c.push({
                        type: TOKEN.VARIABLE,
                        text: "?"
                    });
                    return c[e]
                }

                function b() {
                    var c = a();
                    ++e;
                    return c
                }

                function h(q) {
                    for (var k = d(); e < c.length && a().type == TOKEN.OPERATOR && 2 == a().op.numArgs && a().op.prec >= q;) {
                        var B = b(),
                            f = B.op.prec; - 1 == B.op.assoc && ++f;
                        f = h(f);
                        B.args = [k, f];
                        k = B
                    }
                    return k
                }

                function d() {
                    var c = a();
                    if (c.type == TOKEN.OPERATOR && 1 == c.op.numArgs) return b(), c.args = [h(c.op.prec)], c;
                    if ("(" == c.text) {
                        b();
                        c = h(0);
                        var d = a();
                        ++e;
                        "?" == d.text && (d = {
                            type: TOKEN.RIGHT_PAR,
                            text: ")"
                        });
                        if (")" != d.text) throw T(L.expectedRightParenthesis, {
                            c: d.text
                        });
                        return c
                    }
                    if (c.type == TOKEN.NUMBER || c.type == TOKEN.VARIABLE || c.type == TOKEN.CONSTANT) return b();
                    throw T(L.unexpected, {
                        c: c.text
                    });
                }
                var e = 0,
                    q = h(0);
                if (e != c.length) throw T(L.expectedEndOfExpression, {
                    c: c[e].text
                });
                return q
            }

            function G(c) {
                var a;
                c.type == TOKEN.OPERATOR && void 0 !== (a = z[c.text]).replaceWith && void 0 !== a.firstArg && c.args.length && (c.text = a.replaceWith, "," == c.args[0].text ? c.args[0].args.splice(0, 0, a.firstArg) : c.args.splice(0, 0, a.firstArg));
                c.type == TOKEN.VARIABLE && "\u2205" == c.text && (c.text = "___list", c.type = TOKEN.OPERATOR, c.args = []);
                if (c.type == TOKEN.OPERATOR) {
                    if ("," == c.text) throw T(L.misplacedComma);
                    c.needsParentheses && delete c.needsParentheses;
                    "-" == c.text && (c.text = "+", c.args[1] = {
                        type: TOKEN.OPERATOR,
                        text: "~",
                        op: z["~"],
                        args: [c.args[1]]
                    });
                    c.op = z[c.text];
                    if (c.op.numCommaArgs || void 0 !== c.op.minNumCommaArgs) {
                        if (c.args.length && "," == c.args[0].text)
                            if ("," == c.args[0].args[0].text) {
                                a = [];
                                for (var b = c.args[0];;) {
                                    a.push(b.args[1]);
                                    if ("," != b.args[0].text) {
                                        a.push(b.args[0]);
                                        break
                                    }
                                    b = b.args[0]
                                }
                                a.reverse();
                                c.args = a
                            } else c.args = c.args[0].args;
                        a = c.args.length;
                        b = c.op.numCommaArgs || c.op.minNumCommaArgs;
                        var d = c.op.numCommaArgs || c.op.maxNumCommaArgs;
                        if (a < b)
                            for (d = 0; d < b - a; ++d) c.args.push({
                                type: TOKEN.VARIABLE,
                                text: "?",
                                varsUsed: {
                                    "?": !0
                                }
                            });
                        else if (a > d) {
                            var h = "usage_" + c.text + "_" + a;
                            if (L[h]) throw L[h];
                            h = "usage_" + c.text;
                            if (L[h]) throw L[h];
                            throw T(L.invalidNumberOfArguments, {
                                f: c.text,
                                n: a
                            });
                        }
                    } else if (c.args.length && "," == c.args[0].text) throw T(L.functionTakesOneArgument, {
                        f: c.text
                    });
                    a = !0;
                    "pow" == c.text ? c.text = "^" : "exp" == c.text ? (c.text = "^", c.args = [{
                        type: TOKEN.CONSTANT,
                        text: "e"
                    }, c.args[0]]) : "sqrt" == c.text || "root" == c.text && 1 == c.args.length ? (c.text = "^", c.args.push({
                        type: TOKEN.OPERATOR,
                        text: "/",
                        op: z["/"],
                        args: [{
                            type: TOKEN.NUMBER,
                            text: "1"
                        }, {
                            type: TOKEN.NUMBER,
                            text: "2"
                        }]
                    })) : "cbrt" == c.text ? (c.text = "^", c.args.push({
                        type: TOKEN.OPERATOR,
                        text: "/",
                        op: z["/"],
                        args: [{
                            type: TOKEN.NUMBER,
                            text: "1"
                        }, {
                            type: TOKEN.NUMBER,
                            text: "3"
                        }]
                    })) : "root" == c.text && 2 == c.args.length ? (c.text = "^", c.args = [c.args[1], {
                        type: TOKEN.OPERATOR,
                        text: "/",
                        op: z["/"],
                        args: [{
                            type: TOKEN.NUMBER,
                            text: "1"
                        }, c.args[0]]
                    }]) : "log" == c.text && (1 == c.args.length || 2 == c.args.length && "e" == c.args[0].text) ? (c.text = "ln", c.args = [c.args[c.args.length - 1]]) : "lb" == c.text ? (c.text = "log", c.args = [{
                        type: TOKEN.NUMBER,
                        text: "2"
                    }, c.args[0]]) : "lg" == c.text ? (c.text = "log", c.args = [{
                        type: TOKEN.NUMBER,
                        text: "10"
                    }, c.args[0]]) : a = !1;
                    a && (c.op = z[c.text]);
                    "box" == c.text && (c.text = "___node_id", c.args.push(c.args[0]), c.args[0] = {
                        text: (nextAutoNodeID++).toString()
                    });
                    if ("___node_id" == c.text) {
                        a = parseInt(c.args[0].text);
                        b = c.args[1];
                        for (h in c) delete c[h];
                        for (h in b) c[h] = b[h];
                        c.id = a;
                        G(c);
                        return !1
                    }
                    for (d = 0; d < c.args.length; ++d) G(c.args[d])
                }
                return !1
            }

            function H(c) {
                var a = !1;
                if (c.type == TOKEN.OPERATOR) {
                    if ("*" == c.text || "/" == c.text) {
                        for (var b = 1, h = 0; h < c.args.length; ++h)
                            for (;
                                "~" == c.args[h].text;)
                                if (c.args[h].id) {
                                    c.args[h].needsParentheses = !0;
                                    break
                                } else c.args[h] = c.args[h].args[0], b = -b, a = !0; - 1 == b && (c.args = [{
                            type: TOKEN.OPERATOR,
                            text: c.text,
                            op: z[c.text],
                            args: c.args
                        }], c.text = "~", c.op = z["~"])
                    }
                    if ("~" == c.text) {
                        b = -1;
                        for (h = c.args[0];
                            "~" == h.text;)
                            if (h.id) {
                                h.needsParentheses = !0;
                                break
                            } else h = h.args[0], b = -b, a = !0;
                        1 == b ? (c.type = h.type, c.text = h.text, c.type == TOKEN.OPERATOR && (c.op = z[h.text], c.args = h.args)) : c.args[0] = h
                    }
                    for (h = 0; h < c.args.length; ++h) a |= H(c.args[h])
                }
                return a
            }

            function D(c) {
                if (c.type == TOKEN.OPERATOR) {
                    2 != c.op.numArgs || c.op.isAssoc || (-1 == c.op.assoc && c.args[1].type == TOKEN.OPERATOR && c.args[1].op == c.op ? c.args[1].needsParentheses = !0 : 1 == c.op.assoc && c.args[0].type == TOKEN.OPERATOR && c.args[0].op == c.op && (c.args[0].needsParentheses = !0));
                    for (var a = 0; a < c.args.length; ++a) c.args[a].type == TOKEN.OPERATOR && c.args[a].op.prec < c.op.prec && (c.args[a].needsParentheses = !0);
                    "^" != c.text || c.args[0].type != TOKEN.OPERATOR || c.args[0].op.canHandlePow && ("~" != c.args[1].text || "1" != c.args[1].args[0].text) || (c.args[0].needsParentheses = !0);
                    c.op.isAssoc || -1 != c.op.assoc || c.args[1].type != TOKEN.OPERATOR || c.args[1].op.prec != c.op.prec || (c.args[1].needsParentheses = !0);
                    c.op.isAssoc || 1 != c.op.assoc || c.args[0].type != TOKEN.OPERATOR || c.args[0].op.prec != c.op.prec || (c.args[0].needsParentheses = !0);
                    "lsum" == c.text && (c.needsParentheses = !0);
                    "formvar" == c.text && delete c.needsParentheses;
                    for (a = 0; a < c.args.length; ++a) D(c.args[a])
                }
                return !1
            }

            function E(c) {
                if (c.type == TOKEN.OPERATOR) {
                    if ("*" == c.text) {
                        for (var a = [], b = 0; b < c.args.length; ++b) a.push(c.args[b]);
                        for (;;) {
                            var h = !1;
                            for (b = 0; b < a.length; ++b) "*" != a[b].text || a[b].id || (a = a.slice(0, b).concat(a[b].args, a.slice(b + 1)), h = !0);
                            if (!h) break
                        }
                        c.args = a
                    }
                    if ("+" == c.text) {
                        a = [];
                        for (b = 0; b < c.args.length; ++b) a.push(c.args[b]);
                        for (;;) {
                            h = !1;
                            for (b = 0; b < a.length; ++b) "+" != a[b].text || a[b].id || (a = a.slice(0, b).concat(a[b].args, a.slice(b + 1)), h = !0);
                            if (!h) break
                        }
                        c.args = a
                    }
                    "~" != c.text || "*" != c.args[0].text && "/" != c.args[0].text || (c.args[0].needsParentheses = !1);
                    for (b = 0; b < c.args.length; ++b) E(c.args[b])
                }
                return !1
            }

            function Q(c) {
                if (c.type == TOKEN.OPERATOR) {
                    if ("+" == c.text)
                        for (var a = 0; a < c.args.length; ++a) {
                            var b = c.args[a];
                            if (b.id)
                                for (;;)
                                    if ("~" == b.text) {
                                        c.args[a].needsParentheses = !0;
                                        break
                                    } else if ("+" == b.text || "*" == b.text) b = b.args[0];
                            else break
                        }
                    c.length = 1;
                    c.varsUsed = {};
                    for (a = 0; a < c.args.length; ++a) {
                        Q(c.args[a]);
                        c.length += c.args[a].length;
                        for (var h in c.args[a].varsUsed) c.varsUsed[h] = !0
                    }
                } else c.length = c.type == TOKEN.CONSTANT ? 1 : c.text.length, c.varsUsed = {}, c.type == TOKEN.VARIABLE && (c.varsUsed[c.text] = !0);
                return !1
            }

            function h(c) {
                if (c.type == TOKEN.OPERATOR) {
                    if ("log" == c.text && ("0" == c.args[0].text || "1" == c.args[0].text || "~" == c.args[0].text && ("0" == c.args[0].args[0].text || "1" == c.args[0].args[0].text))) throw L.invalidLogBase;
                    for (var a = 0; a < c.args.length; ++a) h(c.args[a])
                }
                return !1
            }

            function q(c, a) {
                null === a && (a = {
                    type: TOKEN.VARIABLE,
                    text: "?"
                });
                var b = 1;
                for (h in l) ++b;
                var h = "___dyn_op_" + b++;
                l[h] = {
                    numArgs: 1,
                    prec: 7,
                    replaceWith: c,
                    firstArg: a
                };
                V = !0;
                return h
            }
            void 0 === b && (b = !1);
            void 0 === e && (e = !b);
            void 0 === k && (k = !1);
            void 0 === l && (l = {});
            var B = !b,
                z = {
                    beta_incomplete_generalized: {
                        numArgs: 1,
                        numCommaArgs: 4,
                        prec: 7,
                        canHandlePow: !0
                    },
                    beta_incomplete_regularized: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    beta_incomplete: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    beta: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    gamma_greek: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    gamma_incomplete_generalized: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    gamma_incomplete_regularized: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    gamma_incomplete: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    gamma: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    log_gamma: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    erfc: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    erfi: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    erf_generalized: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    erf: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    li: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    psi: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    zeta: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    imagpart: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    realpart: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_chi: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_ci: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_e1: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_ei: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_e: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_li: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_shi: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    expintegral_si: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    conjugate: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    fresnel_c: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    fresnel_s: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    elliptic_e: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    elliptic_f: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    elliptic_pi: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    lambert_w: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    arcsin: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "sin"
                    },
                    arccos: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "cos"
                    },
                    arctan2: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    arctan: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "tan"
                    },
                    arccot: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "cot"
                    },
                    arccsc: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "csc"
                    },
                    arcsec: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "sec"
                    },
                    arsinh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "sinh"
                    },
                    arcosh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "cosh"
                    },
                    artanh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "tanh"
                    },
                    arcoth: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "coth"
                    },
                    arcsch: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "csch"
                    },
                    arsech: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "sech"
                    },
                    sinh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arsinh"
                    },
                    cosh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arcosh"
                    },
                    tanh: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "artanh"
                    },
                    coth: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arcoth"
                    },
                    csch: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arcsch"
                    },
                    sech: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arsech"
                    },
                    sin: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arcsin"
                    },
                    cos: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arccos"
                    },
                    tan: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arctan"
                    },
                    cot: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arccot"
                    },
                    csc: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arccsc"
                    },
                    sec: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "arcsec"
                    },
                    lb: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    lg: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    ln: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0,
                        inverse: "exp"
                    },
                    log: {
                        numArgs: 1,
                        minNumCommaArgs: 1,
                        maxNumCommaArgs: 2,
                        prec: 7,
                        canHandlePow: !0
                    },
                    root: {
                        numArgs: 1,
                        minNumCommaArgs: 1,
                        maxNumCommaArgs: 2,
                        prec: 7
                    },
                    sqrt: {
                        numArgs: 1,
                        prec: 7
                    },
                    cbrt: {
                        numArgs: 1,
                        prec: 7
                    },
                    pow: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7
                    },
                    abs: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    exp: {
                        numArgs: 1,
                        prec: 7,
                        inverse: "ln"
                    },
                    "^": {
                        numArgs: 2,
                        prec: 6,
                        assoc: 1
                    },
                    "~": {
                        numArgs: 1,
                        prec: 5
                    },
                    "/": {
                        numArgs: 2,
                        prec: 4,
                        assoc: -1
                    },
                    "*": {
                        numArgs: 2,
                        prec: 3,
                        assoc: -1,
                        isAssoc: !0
                    },
                    "+": {
                        numArgs: 2,
                        prec: 2,
                        assoc: -1,
                        isAssoc: !0
                    },
                    "-": {
                        numArgs: 2,
                        prec: 2,
                        assoc: -1
                    },
                    ",": {
                        numArgs: 2,
                        prec: 0,
                        assoc: -1
                    }
                };
            for (J in l) z[J] = l[J];
            if (b) {
                var d = {
                    "'diff": {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7
                    },
                    integrate: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7
                    },
                    formvar: {
                        numArgs: 1,
                        prec: 7
                    },
                    box: {
                        numArgs: 1,
                        prec: 7
                    },
                    ___list: {
                        numArgs: 1,
                        minNumCommaArgs: 0,
                        maxNumCommaArgs: Infinity,
                        prec: 7
                    },
                    ___mydiff: {
                        numArgs: 1,
                        prec: 7
                    },
                    ___node_id: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7
                    },
                    ___plus_minus: {
                        numArgs: 2,
                        prec: 2,
                        assoc: -1
                    },
                    ___minus_plus: {
                        numArgs: 2,
                        prec: 2,
                        assoc: -1
                    },
                    signum: {
                        numArgs: 1,
                        prec: 7,
                        canHandlePow: !0
                    },
                    hypergeometric_regularized: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    hypergeometric: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7,
                        canHandlePow: !0
                    },
                    equal: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 1
                    },
                    lsum: {
                        numArgs: 1,
                        numCommaArgs: 3,
                        prec: 7
                    },
                    notequal: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 1
                    },
                    rootsof: {
                        numArgs: 1,
                        numCommaArgs: 2,
                        prec: 7
                    },
                    "<=": {
                        numArgs: 2,
                        prec: 1,
                        assoc: -1
                    },
                    "<": {
                        numArgs: 2,
                        prec: 1,
                        assoc: -1
                    },
                    ">=": {
                        numArgs: 2,
                        prec: 1,
                        assoc: -1
                    },
                    ">": {
                        numArgs: 2,
                        prec: 1,
                        assoc: -1
                    },
                    "=": {
                        numArgs: 2,
                        prec: 1,
                        assoc: -1
                    }
                };
                for (x in d) z[x] = d[x]
            }
            var p = [];
            for (J in z) p.push(J);
            p.sort(function(c, a) {
                return a.length - c.length
            });
            var t = ["pi", "e", "i", "%gamma", "%phi"];
            d = {};
            b || (d = {
                "\u00b2": "^2 ",
                "\u00b3": "^3 "
            });
            var r = {};
            if (!b) {
                for (var n = {}, u = L.trigHypForms.split(/\s*,\s*/), w = 0; w < u.length; ++w) u[w] = u[w].split(/\s*\|\s*/), u[w].sort(function(c, a) {
                    return a.length - c.length
                }), u[w] = u[w].join("|");
                n.sin = u[0];
                n.cos = u[1];
                n.tan = u[2];
                n.csc = u[3];
                n.sec = u[4];
                n.cot = u[5];
                for (x in n) n[x + "h"] = "hyp(" + n[x] + ")|(" + n[x] + ")h";
                u = ["inv", "arc", "ar", "a"];
                var I = L.additionalInvTrigHypPrefixes.split(/\s*,\s*/);
                for (w = 0; w < I.length; ++w) I[w].length && u.push(I[w]);
                I.sort(function(c, a) {
                    return a.length - c.length
                });
                u = u.join("|");
                for (x in n) n[("h" == x.charAt(x.length - 1) ? "ar" : "arc") + x] = "(" + u + ")(" + n[x] + ")";
                n.arctan2 = "(" + u + ")(" + n.tan + ")2";
                u = {};
                for (J in z) {
                    var x = "alternatives_" + J;
                    if (L[x]) {
                        I = f(L[x]).split(/\s*,\s*/);
                        for (w = 0; w < I.length; ++w)
                            if (-1 != I[w].indexOf(" ")) {
                                var W = I[w].replace(/ /g, "");
                                d[I[w]] = W;
                                I[w] = W
                            }
                        r[J] = I.join("|")
                    }
                }
                for (x in n) r[x] = n[x];
                for (x in u) r[x] = u[x];
                for (x in r) r[x] = new RegExp("^(" + r[x] + ")")
            }
            var P = {
                "%e": "e",
                "%i": "i",
                "%pi": "pi"
            };
            if (!b)
                for (x in w = {
                        "[": "(",
                        "{": "(",
                        "]": ")",
                        "}": ")",
                        ";": ",",
                        "\u2010": "-",
                        "\u2012": "-",
                        "\u2013": "-",
                        "\u2014": "-",
                        "\u2015": "-",
                        "\u2212": "-",
                        "**": "^",
                        "\u2715": "*",
                        "\u00d7": "*",
                        "\u00b7": "*",
                        "\u2022": "*",
                        "\u221a": "root",
                        "\u00f7": "/",
                        "\u2215": "/",
                        "\u03c0": "pi"
                    }, w) P[x] = w[x];
            if (!b && 1 == "^".replace("\u215e", "??????????").length)
                for (x in w = {
                        "\u00bc": "(1/4)",
                        "\u00bd": "(1/2)",
                        "\u00be": "(3/4)",
                        "\u2153": "(1/3)",
                        "\u2154": "(2/3)",
                        "\u215b": "(1/8)",
                        "\u215c": "(3/8)",
                        "\u215d": "(5/8)",
                        "\u215e": "(7/8)"
                    }, w) P[x] = w[x];
            var X = b ? /^[0-9]*\.?[0-9]+([bdeBDE][+-]?[0-9]+)?/ : /^[0-9]*\.?[0-9]+(e[+-]?[0-9]+)?/;
            var J = /\^\s*1\s*\//;
            var V = !1;
            if ("string" == typeof a) {
                if (2E3 < a.length) throw L.expressionTooLong;
                a = a.replace(/\s+/g, " ");
                b || (a = f(a));
                n = a;
                a = "";
                for (w = 0; w < n.length; ++w) u = n.charCodeAt(w), !b && 65 <= u && 90 >= u && (u = 97 + u - 65), a += String.fromCharCode(u);
                if (J.test(a)) throw T(L.usage_powFraction, L);
                if (-1 != a.indexOf("sex")) throw T(L.dontYouMean, {
                    a: "sec",
                    b: "sex",
                    c: "s*e*x"
                }, L);
                for (x in d)
                    if ("" != x)
                        for (; w = a, a = a.replace(x, d[x]), a != w;);
                b || (a = a.replace(/log_gamma/g, "LOG_GAMMA").replace(/expintegral_li/g, "EXPINTEGRAL_LI"), a = a.replace(/(li|log)(\d+)\(/g, function(c, a, b) {
                    return q(a, {
                        type: TOKEN.NUMBER,
                        text: b
                    }) + "("
                }), a = a.replace(/(li|log)_(\(.*)/g, function(c, a, h) {
                    var d;
                    a: for (d = c = 0; d < h.length; ++d) {
                        var B = h.charAt(d);
                        if ("(" == B) ++c;
                        else if (")" == B && !--c) break a
                    }
                    c = h.substr(1, d - 1);
                    h = h.substr(d + 1);
                    return q(a, parseExpression(c, b, e, k, l)) + h
                }), a = a.replace(/(li|log)_([^ (]*)/g, function(c, a, h) {
                    return q(a, parseExpression(h, b, e, k, l))
                }), a = a.replace(/LOG_GAMMA/g, "log_gamma").replace(/EXPINTEGRAL_LI/g, "expintegral_li"));
                if (V) return parseExpression(a, b, e, k, l)
            }
            if ("string" == typeof a) {
                a = g(a);
                if (0 == a.length) return null;
                a = C(A(a))
            }
            for (; G(a););
            for (; H(a););
            for (; D(a););
            for (; E(a););
            for (; Q(a););
            for (; h(a););
            return a
        }
        try {
            return m(b, g, l, a, e)
        } catch (f) {
            if (!g) {
                var C = b.replace(/,/g, ".").replace(/;/g, ",");
                if (C != b) try {
                    return m(C, g, l, a, e)
                } catch (A) {}
            }
            throw f;
        }
    }

    function parseTopLevelBinaryExpression(b, g) {
        b = b.trim();
        if ("" == b) return null;
        var l = b.split(g);
        if (2 < l.length) throw T(L.expectedEndOfExpression, {
            c: g
        });
        1 == l.length && l.push("");
        b = parseExpression(l[0]);
        l = parseExpression(l[1]);
        b || (b = {
            type: TOKEN.VARIABLE,
            text: "?",
            varsUsed: {
                "?": !0
            }
        });
        l || (l = {
            type: TOKEN.VARIABLE,
            text: "?",
            varsUsed: {
                "?": !0
            }
        });
        var a = {};
        for (v in b.varsUsed) a[v] = !0;
        for (v in l.varsUsed) a[v] = !0;
        return {
            type: TOKEN.OPERATOR,
            text: g,
            op: {},
            args: [b, l],
            varsUsed: a
        }
    }

    function addExplanation(b, g) {
        b = "url_" + b;
        b in L && (helpInfo[g] = L[b]);
        return g
    }

    function isMainVarUsed(b) {
        for (var g = mainVarForUnusedWarning instanceof Array ? mainVarForUnusedWarning : [mainVarForUnusedWarning], l = 0; l < g.length; ++l)
            if (g[l] in b.varsUsed) return !0;
        return !1
    }

    function printLatex(b, g) {
        function l(a) {
            var b = printLatex(enforceSmallFractions(a), !1);
            return a.type == TOKEN.VARIABLE && -1 === a.text.indexOf("_") || a.type == TOKEN.CONSTANT || a.type == TOKEN.NUMBER && 1 == a.length || -1 != ["/", "root", "cbrt", "sqrt", "conjugate"].indexOf(a.text) || "^" == a.text && "\\sqrt" == b.substr(0, 5) ? b : "{" + b + "}"
        }
        if (!b) return "";
        void 0 === g && (g = !0);
        var a = "";
        switch (b.type) {
            case TOKEN.NUMBER:
                a = b.text;
                break;
            case TOKEN.VARIABLE:
                a = b.text.split("_");
                g = a[0];
                var e = 2 == a.length ? a[1] : null;
                a = "\u03c9" == g ? "{\\omega}" : "?" == g ? "\\color{red}{\\square}" : g;
                null !== e && (a += "_", a = /^[0-9]+$/.test(e) ? a + (1 == e.length ? e : "{" + e + "}") : a + ("\\text{" + e + "}"));
                break;
            case TOKEN.CONSTANT:
                switch (b.text) {
                    case "e":
                        a = addExplanation(b.text, "\\mathrm{e}");
                        break;
                    case "i":
                        a = addExplanation(b.text, "\\mathrm{i}");
                        break;
                    case "pi":
                        a = addExplanation(b.text, "{\\pi}");
                        break;
                    case "%gamma":
                        a = addExplanation(b.text, "{\\gamma}");
                        break;
                    case "%phi":
                        a = addExplanation(b.text, "{\\phi}")
                }
                break;
            case TOKEN.OPERATOR:
                var m = b.args,
                    C = m.length;
                e = m[0];
                var f = 2 <= C ? m[1] : void 0,
                    A = 3 <= C ? m[2] : void 0,
                    D = 4 <= C ? m[3] : void 0,
                    k = b.pow || "";
                switch (b.text) {
                    case "box":
                        a = printLatex(e);
                        break;
                    case "'diff":
                        a = printLatex(e);
                        e = parseInt(A.text);
                        if (2 >= e)
                            for (k = 0; k < e; ++k) a += "'";
                        else a += "^{(" + e + ")}";
                        break;
                    case "integrate":
                        a = "+" == e.text;
                        a = "{\\displaystyle\\int}" + (a ? "\\left(" : "") + printLatex(e, !1) + (a ? "\\right)" : "\\,") + "\\mathrm{d}" + f.text;
                        break;
                    case "___mydiff":
                        a = "\\tfrac{\\mathrm{d}}{\\mathrm{d}" + diffVarLatex + "}\\left[" + printLatex(e, !1) + "\\right]";
                        break;
                    case "formvar":
                        a = "\\mathtt{" + printLatex(e) + "}";
                        break;
                    case "<":
                    case ">":
                        a = printLatex(e) + "{" + b.text + "}" + printLatex(f);
                        break;
                    case "equal":
                    case "=":
                        a = printLatex(e) + "=" + printLatex(f);
                        break;
                    case "notequal":
                    case "<=":
                    case ">=":
                        a = printLatex(e);
                        e = {
                            notequal: "\\neq",
                            "<=": "\\leq",
                            ">=": "\\geq"
                        };
                        f = printLatex(f);
                        a = "\\" == f.charAt(0) ? a + e[b.text] : a + ("{" + e[b.text] + "}");
                        a += f;
                        break;
                    case "+":
                        a = printLatex(e);
                        for (k = 1; k < C; ++k) a = "~" != m[k].text || m[k].id || m[k].needsParentheses ? a + ("+" + printLatex(m[k])) : a + ("-" + printLatex(m[k].args[0]));
                        break;
                    case "-":
                        a = printLatex(e) + "-" + printLatex(f);
                        break;
                    case "*":
                        a = printLatex(e, "/" != e.text);
                        for (k = 1; k < C; ++k) f = e = m[k], "^" == e.text && (f = e.args[0]), A = m[k - 1], e = e.type == TOKEN.NUMBER || f.type == TOKEN.NUMBER || "*" == e.text || "*" == A.text || "/" == e.text || "___mydiff" == e.text || "___mydiff" == A.text, f = printLatex(m[k], "/" != m[k].text), e && (a += "\\" == f.charAt(0) ? "\\cdot" : "{\\cdot}"), a += f;
                        break;
                    case "/":
                        a = (b.smallFractions ? "\\frac" : "\\dfrac") + "{" + printLatex(enforceSmallFractions(e), !1) + "}{" + printLatex(enforceSmallFractions(f), !1) + "}";
                        break;
                    case "~":
                        a = "-" + printLatex(e);
                        break;
                    case "^":
                        a = 0;
                        if ("/" == f.text && "1" == f.args[0].text && f.args[1].type == TOKEN.NUMBER) {
                            var E = parseFloat(f.args[1].text);
                            0 == E % 1 && -9007199254740991 <= E && 9007199254740991 >= E && (a = E)
                        }
                        a ? a = 2 == E ? "\\sqrt{" + printLatex(e, !1) + "}" : "\\sqrt[" + f.args[1].text + "]{" + printLatex(e, !1) + "}" : (k = "^" + l(f), e.type == TOKEN.OPERATOR && e.op.canHandlePow && "^{-1}" != k ? (e.pow = k, a = printLatex(e)) : a = printLatex(e) + k);
                        break;
                    case "arcsin":
                    case "arccos":
                    case "arctan":
                    case "sin":
                    case "cos":
                    case "tan":
                    case "cot":
                    case "csc":
                    case "sec":
                    case "sinh":
                    case "cosh":
                    case "tanh":
                    case "coth":
                    case "ln":
                        a = addExplanation(b.text, "\\" + b.text) + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "beta":
                        addExplanation(b.text, "\\operatorname{B}(a,b)");
                        a = "\\operatorname{B}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "\\right)";
                        break;
                    case "beta_incomplete":
                        addExplanation(b.text, "\\operatorname{B}_z(a,b)");
                        a = "\\operatorname{B}_" + l(e) + k + "\\left(" + printLatex(f, !1) + "," + printLatex(A, !1) + "\\right)";
                        break;
                    case "beta_incomplete_generalized":
                        addExplanation(b.text, "\\operatorname{B}_{(z_1,z_2)}(a,b)");
                        a = "\\operatorname{B}_{\\left(" + printLatex(enforceSmallFractions(e), !1) + "," + printLatex(enforceSmallFractions(f), !1) + "\\right)}" + k + "\\left(" + printLatex(A, !1) + "," + printLatex(D, !1) + "\\right)";
                        break;
                    case "beta_incomplete_regularized":
                        addExplanation(b.text, "\\operatorname{I}(z;a,b)");
                        a = "\\operatorname{I}" + k + "\\left(" + printLatex(e, !1) + ";" + printLatex(f, !1) + "," + printLatex(A, !1) + "\\right)";
                        break;
                    case "gamma":
                        addExplanation(b.text, "\\operatorname{\\Gamma}(z)");
                        a = "\\operatorname{\\Gamma}" + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "gamma_greek":
                        addExplanation(b.text, "\\operatorname{\\gamma}(a,z)");
                        a = "\\operatorname{\\gamma}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "\\right)";
                        break;
                    case "gamma_incomplete":
                        addExplanation(b.text, "\\operatorname{\\Gamma}(a,z)");
                        a = "\\operatorname{\\Gamma}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "\\right)";
                        break;
                    case "gamma_incomplete_generalized":
                        addExplanation(b.text, "\\operatorname{Q}(a,z_1,z_2)");
                        a = "\\operatorname{Q}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "," + printLatex(A, !1) + "\\right)";
                        break;
                    case "gamma_incomplete_regularized":
                        addExplanation(b.text, "\\operatorname{Q}(a,z)");
                        a = "\\operatorname{Q}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "\\right)";
                        break;
                    case "lambert_w":
                        addExplanation("lambert_w", "\\operatorname{W}");
                        a = "\\operatorname{W}" + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "log_gamma":
                        addExplanation("gamma", "\\operatorname{\\Gamma}(z)");
                        a = "\\ln" + k + "\\left(\\operatorname{\\Gamma}\\left(" + printLatex(e, !1) + "\\right)\\right)";
                        break;
                    case "hypergeometric":
                        addExplanation(b.text, "\\operatorname{F}");
                        a = f.args.length + "";
                        1 < a.length && (a = "{" + a + "}");
                        a = "{}_{" + e.args.length + "}\\operatorname{F}_" + a + k + "\\left(";
                        for (k = 0; k < e.args.length; ++k) a += (k ? "," : "") + printLatex(e.args[k], !1);
                        a += ";";
                        for (k = 0; k < f.args.length; ++k) a += (k ? "," : "") + printLatex(f.args[k], !1);
                        a = a + ";" + (printLatex(A, !1) + "\\right)");
                        break;
                    case "hypergeometric_regularized":
                        addExplanation(b.text, "\\operatorname{\\tilde{F}}");
                        a = e.args.length + "";
                        1 < a.length && (a = "{" + a + "}");
                        m = f.args.length + "";
                        1 < m.length && (m = "{" + m + "}");
                        a = "{}_" + a + "\\operatorname{\\tilde{F}}_" + m + k + "\\left(";
                        for (k = 0; k < e.args.length; ++k) a += (k ? "," : "") + printLatex(e.args[k], !1);
                        a += ";";
                        for (k = 0; k < f.args.length; ++k) a += (k ? "," : "") + printLatex(f.args[k], !1);
                        a = a + ";" + (printLatex(A, !1) + "\\right)");
                        break;
                    case "li":
                        a = addExplanation(b.text, "\\operatorname{Li}") + "_" + l(e) + k + "\\left(" + printLatex(f, !1) + "\\right)";
                        break;
                    case "psi":
                        a = addExplanation(b.text, "\\operatorname{\\Psi}") + "_" + l(e) + k + "\\left(" + printLatex(f, !1) + "\\right)";
                        break;
                    case "zeta":
                        a = addExplanation(b.text, "\\operatorname{\\zeta}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "erf":
                        addExplanation(b.text, "\\operatorname{erf}(z)");
                        a = "\\operatorname{erf}" + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "erf_generalized":
                        addExplanation(b.text, "\\operatorname{erf}(z_1,z_2)");
                        a = "\\operatorname{erf}" + k + "\\left(" + printLatex(e, !1) + "," + printLatex(f, !1) + "\\right)";
                        break;
                    case "expintegral_chi":
                        a = addExplanation(b.text, "\\operatorname{Chi}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_ci":
                        a = addExplanation(b.text, "\\operatorname{Ci}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_e":
                        a = addExplanation(b.text, "\\operatorname{E}") + "_" + l(e) + k + "\\left(" + printLatex(f, !1) + "\\right)";
                        break;
                    case "expintegral_e1":
                        a = addExplanation(b.text, "\\operatorname{E_1}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_ei":
                        a = addExplanation(b.text, "\\operatorname{Ei}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_li":
                        a = addExplanation(b.text, "\\operatorname{li}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_shi":
                        a = addExplanation(b.text, "\\operatorname{Shi}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "expintegral_si":
                        a = addExplanation(b.text, "\\operatorname{Si}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "conjugate":
                        addExplanation(b.text, "\\overline{x}");
                        a = "\\overline{" + printLatex(e, !1) + "}" + k;
                        break;
                    case "lsum":
                        a = "\\displaystyle\\sum_{";
                        if ("rootsof" != A.text || A.args[1].text != f.text) a += printLatex(f, !1) + "{\\in}";
                        a += printLatex(A, !1) + "}" + printLatex(e, !1);
                        break;
                    case "rootsof":
                        a = "\\left\\{" + printLatex(f, !1) + ":\\>" + printLatex(e, !1) + "=0\\right\\}";
                        break;
                    case "elliptic_e":
                    case "elliptic_f":
                        a = b.text.charAt(b.text.length - 1).toUpperCase();
                        addExplanation(b.text, "\\operatorname{" + a + "}(\\varphi\\,|\\,k)");
                        a = "\\operatorname{" + a + "}" + k + "\\left(" + printLatex(e, !1) + "\\,\\middle|\\," + printLatex(f, !1) + "\\right)";
                        break;
                    case "elliptic_pi":
                        addExplanation(b.text, "\\operatorname{\\Pi}(n;\\,\\varphi\\,|\\,m)");
                        a = "\\operatorname{\\Pi}" + k + "\\left(" + printLatex(e, !1) + "\\,;" + printLatex(f, !1) + "\\,\\middle|\\," + printLatex(A, !1) + "\\right)";
                        break;
                    case "arccot":
                    case "arccsc":
                    case "arcsec":
                    case "arsinh":
                    case "arcosh":
                    case "artanh":
                    case "arcoth":
                    case "arcsch":
                    case "arsech":
                    case "csch":
                    case "sech":
                    case "erfc":
                    case "erfi":
                        a = addExplanation(b.text, "\\operatorname{" + b.text + "}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "arctan2":
                        a = addExplanation(b.text, "\\operatorname{" + b.text + "}") + k + "\\left(" + printLatex(e, !1) + ", " + printLatex(f, !1) + "\\right)";
                        break;
                    case "log":
                        a = addExplanation("log", "\\log") + "_" + l(e) + k + "\\left(" + printLatex(f, !1) + "\\right)";
                        break;
                    case "root":
                        1 == C ? a = "\\sqrt{" + printLatex(e, !1) + "}" : 2 == C && (a = "\\sqrt[" + printLatex(enforceSmallFractions(e), !1) + "]{" + printLatex(f, !1) + "}");
                        break;
                    case "sqrt":
                        a = "\\sqrt{" + printLatex(e, !1) + "}";
                        break;
                    case "cbrt":
                        a = "\\sqrt[3]{" + printLatex(e, !1) + "}";
                        break;
                    case "abs":
                        a = "\\left|" + printLatex(e, !1) + "\\right|" + k;
                        break;
                    case "signum":
                        a = addExplanation(b.text, "\\operatorname{sgn}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "imagpart":
                        a = addExplanation(b.text, "\\operatorname{Im}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "realpart":
                        a = addExplanation(b.text, "\\operatorname{Re}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "fresnel_c":
                        a = addExplanation(b.text, "\\operatorname{C}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "fresnel_s":
                        a = addExplanation(b.text, "\\operatorname{S}") + k + "\\left(" + printLatex(e, !1) + "\\right)";
                        break;
                    case "___plus_minus":
                        f = printLatex(f);
                        a = printLatex(e) + ("\\" == f.charAt(0) ? "\\pm" : "{\\pm}") + f;
                        break;
                    case "___minus_plus":
                        f = printLatex(f), a = printLatex(e) + ("\\" == f.charAt(0) ? "\\mp" : "{\\mp}") + f
                }
                g && b.needsParentheses && (a = "\\left(" + a + "\\right)");
                !mainVarForUnusedWarning || 1 != b.op.numArgs || b.followedByLeftPar || isMainVarUsed(b) || "?" in b.varsUsed || "sqrt" == b.text || ("^" != b.text || "e" != b.args[0].text) && -1 != "+-~*/^".indexOf(b.text) || (a = "\\class{main-var-unused-warning}{" + a + "}", mainVarUnusedWarningIssued = !0)
        }
        b.id && (a = "\\class{steps-node}{\\cssId{steps-node-" + b.id + "}{" + a + "}}");
        return a
    }

    function enforceSmallFractions(b) {
        if (null === b || b.smallFractions) return b;
        b.smallFractions = !0;
        if (b.type == TOKEN.OPERATOR)
            for (var g = 0; g < b.args.length; ++g) enforceSmallFractions(b.args[g]);
        return b
    }

    function setMainVarForUnusedWarning(b) {
        mainVarForUnusedWarning = b
    }

    function getMainVarUnusedWarningIssued() {
        return mainVarUnusedWarningIssued
    }

    function resetMainVarUnusedWarningIssued() {
        mainVarUnusedWarningIssued = !1
    }

    function printSimple(b) {
        if (null === b) return "";
        if (b.type === TOKEN.OPERATOR) {
            for (var g = b.text + "(" + printSimple(b.args[0]), l = 1; l < b.args.length; ++l) g += "," + printSimple(b.args[l]);
            return g + ")"
        }
        return b.text
    }

    function printSafeParseable(b) {
        if (null === b) return "";
        var g = "";
        switch (b.type) {
            case TOKEN.NUMBER:
            case TOKEN.VARIABLE:
            case TOKEN.CONSTANT:
                g = b.text;
                break;
            case TOKEN.OPERATOR:
                var l = b.args,
                    a = l.length;
                switch (b.text) {
                    case "/":
                    case "-":
                    case "*":
                    case "+":
                    case "^":
                    case ",":
                    case "<=":
                    case "<":
                    case ">=":
                    case ">":
                    case "=":
                        g = printSafeParseable(l[0]);
                        for (var e = 1; e < a; ++e) g += b.text + printSafeParseable(l[e]);
                        break;
                    default:
                        g = b.text + "(" + printSafeParseable(l[0]);
                        for (e = 1; e < a; ++e) g += "," + printSafeParseable(l[e]);
                        g += ")"
                }
        }
        return "(" + g + ")"
    }

    function printWebsite(b, g) {
        if (null === b) return "";
        void 0 === g && (g = !0);
        var l = "";
        switch (b.type) {
            case TOKEN.NUMBER:
            case TOKEN.VARIABLE:
            case TOKEN.CONSTANT:
                l = b.text;
                break;
            case TOKEN.OPERATOR:
                var a = b.args,
                    e = a.length;
                switch (b.text) {
                    case "/":
                    case "-":
                    case "*":
                        l = printWebsite(a[0]);
                        for (var m = 1; m < e; ++m) l += b.text + printWebsite(a[m]);
                        break;
                    case "+":
                        l = printWebsite(a[0]);
                        for (m = 1; m < e; ++m) l = "~" == a[m].text ? l + ("-" + printWebsite(a[m].args[0])) : l + ("+" + printWebsite(a[m]));
                        break;
                    case "~":
                        l = "-" + printWebsite(a[0]);
                        break;
                    case "^":
                        if (l = "/" == b.args[1].text && "1" == b.args[1].args[0].text && b.args[1].args[1].type == TOKEN.NUMBER) l = m = parseFloat(a[1].args[1].text), l = 0 == l % 1 && -9007199254740991 <= l && 9007199254740991 >= l;
                        l ? (l = 2 == m ? "sqrt(" + printWebsite(a[0], !1) + ")" : "root(" + m + "," + printWebsite(a[0], !1) + ")", g = !1) : l = printWebsite(a[0]) + b.text + printWebsite(a[1]);
                        break;
                    case "<=":
                    case "<":
                    case ">=":
                    case ">":
                    case "=":
                        l = printWebsite(a[0]) + b.text + printWebsite(a[1]);
                        break;
                    default:
                        l = b.text + "(" + printWebsite(a[0], !1);
                        for (m = 1; m < e; ++m) l += "," + printWebsite(a[m], !1);
                        l += ")";
                        g = !1
                }
        }
        b.needsParentheses && g && (l = "(" + l + ")");
        return l
    }

    function canonicalize(b, g) {
        function l(a) {
            return 0 == a % 1 && -9007199254740991 <= a && 9007199254740991 >= a
        }

        function a(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);
            if (b > a) {
                var h = a;
                a = b;
                b = h
            }
            for (;;) {
                if (0 === b) return a;
                a %= b;
                if (0 === a) return b;
                b %= a
            }
        }

        function e(b, e) {
            if (0 === b || 0 === e) return 0;
            b = b / a(b, e) * e;
            return l(b) ? Math.abs(b) : void 0
        }

        function m(a) {
            var b = a.text;
            if (a.type === TOKEN.NUMBER && -1 === b.indexOf(".")) {
                if (a = parseFloat(b), l(a) && 0 === a % 1) return a
            } else if ("*" === b && 2 === a.args.length && "-1" === a.args[0].text && (a = m(a.args[1]), void 0 !== a)) return -a
        }

        function C(a) {
            a = "*" === a.text ? a.args : [a];
            var b = a.length;
            if (0 !== b) {
                for (var h = "-1" === a[0].text ? -1 : 1, e = 1, d = 1, k = -1 === h ? 1 : 0; k < b; ++k) {
                    var f = a[k],
                        g;
                    if (1 === e && void 0 !== (g = m(f)) && 0 < g) e = g;
                    else if (1 === d && "^" === f.text && "-1" === f.args[1].text && void 0 !== (g = m(f.args[0])) && 0 < g) d = g;
                    else return
                }
                return [h * e, d]
            }
        }

        function f(a) {
            if (a.type === TOKEN.NUMBER) return !0;
            var b = a.text;
            if ("+" === b || "*" === b || "^" === b) {
                a = a.args;
                b = a.length;
                for (var h = 0; h < b; ++h)
                    if (!f(a[h])) return !1;
                return !0
            }
            return !1
        }

        function A(a) {
            a = "*" === a.text ? a.args : [a];
            for (var b = a.length, h = [], e = [], d = 0; d < b; ++d) {
                var k = a[d];
                (f(k) ? h : e).push(k)
            }
            return [K("*", h), K("*", e)]
        }

        function D(a) {
            return 0 <= a ? {
                type: TOKEN.NUMBER,
                text: a.toString()
            } : -1 === a ? {
                type: TOKEN.NUMBER,
                text: "-1"
            } : {
                type: TOKEN.OPERATOR,
                text: "*",
                args: [H, {
                    type: TOKEN.NUMBER,
                    text: (-a).toString()
                }]
            }
        }

        function k(a, b) {
            if (0 === a) return O;
            if (1 === b) return D(a);
            var h = [];
            0 > a && (h.push(H), a = -a);
            1 !== a && h.push(D(a));
            1 !== b && h.push({
                type: TOKEN.OPERATOR,
                text: "^",
                args: [D(b), H]
            });
            a = h.length;
            return 0 === a ? G : 1 === a ? h[0] : {
                type: TOKEN.OPERATOR,
                text: "*",
                args: h
            }
        }

        function E(a) {
            var b = a.type,
                h = a.text;
            if (b === TOKEN.NUMBER) return "-1" !== h;
            if (b === TOKEN.CONSTANT && "i" !== h) return !0;
            if ("+" === h || "*" === h) {
                for (b = 0; b < a.args.length; ++b)
                    if (!E(a.args[b])) return !1;
                return !0
            }
            return "^" === h ? (b = m(a.args[1]), void 0 !== b && 0 === (b & 1) ? !0 : E(a.args[0]) && N(a.args[1])) : "abs" === h ? !0 : "cosh" === h || "sech" === h ? N(a.args[0]) : !1
        }

        function N(a) {
            var b = a.type,
                h = a.text;
            if (b === TOKEN.NUMBER || b === TOKEN.CONSTANT && "i" !== h) return !0;
            if ("+" === h || "*" === h) {
                for (h = 0; h < a.args.length; ++h)
                    if (!N(a.args[h])) return !1;
                return !0
            }
            return "^" === h && (b = m(a.args[1]), void 0 !== b && (0 === (b & 1) || N(a.args[0])) || E(a.args[0]) && N(a.args[1])) ? !0 : "abs" === h ? !0 : -1 != "sin cos tan csc sec cot sinh cosh tanh csch sech coth".split(" ").indexOf(h) ? N(a.args[0]) : !1
        }

        function K(a, b) {
            var h = b.length;
            return 0 === h ? "+" === a ? O : G : 1 === h ? b[0] : {
                type: TOKEN.OPERATOR,
                text: a,
                args: b
            }
        }

        function M(a, b) {
            if (a.type !== b.type) return a.type < b.type ? -1 : 1;
            var h = a.type;
            if (h === TOKEN.NUMBER) {
                if ("-1" === a.text) return "-1" === b.text ? 0 : -1;
                if ("-1" === b.text) return 1
            }
            if (a.text !== b.text) return a.text < b.text ? -1 : 1;
            if (h === TOKEN.OPERATOR) {
                if (a.args.length !== b.args.length) return a.args.length < b.args.length ? -1 : 1;
                h = a.args.length;
                for (var e = 0; e < h; ++e) {
                    var d = M(a.args[e], b.args[e]);
                    if (0 !== d) return d
                }
            }
            return 0
        }

        function F(b) {
            if (b.type !== TOKEN.OPERATOR) return b;
            var h = b.text,
                f = b.args.length,
                g = Array(f);
            delete b.numericalAndNonNumericalFactors;
            delete b.baseAndExponent;
            for (var d = 0; d < f; ++d) g[d] = F(b.args[d]);
            if ("+" === h || "*" === h) {
                var p = "+" === h;
                b = p ? O : G;
                if (0 === f) return b;
                if (1 === f) return g[0];
                if (p) {
                    for (d = 0; d < f; ++d) {
                        var t = g[d];
                        t.numericalAndNonNumericalFactors = A(t)
                    }
                    g.sort(function(a, b) {
                        var d = M(a.numericalAndNonNumericalFactors[1], b.numericalAndNonNumericalFactors[1]);
                        return 0 !== d ? d : M(a.numericalAndNonNumericalFactors[0], b.numericalAndNonNumericalFactors[0])
                    })
                } else {
                    for (d = 0; d < f; ++d) t = g[d], t.baseAndExponent = "^" === t.text ? t.args : [t, G];
                    g.sort(function(a, b) {
                        var d = M(a.baseAndExponent[0], b.baseAndExponent[0]);
                        return 0 !== d ? d : M(a.baseAndExponent[1], b.baseAndExponent[1])
                    })
                }
                for (d = 0; d < f; ++d)
                    if (g[d].text === b.text) {
                        var r = g.slice(0, d);
                        for (p = d + 1; p < f; ++p) g[p].text !== b.text && r.push(g[p]);
                        return F(K(h, r))
                    }
                if (p) {
                    r = t = 0;
                    b = {};
                    p = !1;
                    for (d = 0; d < f; ++d) {
                        var n = g[d],
                            u = C(n);
                        if (void 0 !== u) {
                            n = u[0];
                            u = u[1];
                            if (0 === t) t = n, r = u;
                            else {
                                if (u === r) t += n;
                                else {
                                    var w = e(r, u);
                                    if (void 0 === w) break;
                                    t *= w / r;
                                    t += w / u * n;
                                    r = w
                                }
                                if (!l(t) || !l(r)) break;
                                n = a(t, r);
                                1 !== n && (t /= n, r /= n);
                                p = !0
                            }
                            b[d] = !0
                        }
                    }
                    if (p && d === f) {
                        r = [k(t, r)];
                        for (d = 0; d < f; ++d) d in b || r.push(g[d]);
                        return F(K("+", r))
                    }
                    t = g[0];
                    b = {};
                    p = !1;
                    for (d = 1; d < f; ++d) n = g[d], "1" !== n.numericalAndNonNumericalFactors[1].text && 0 === M(n.numericalAndNonNumericalFactors[1], t.numericalAndNonNumericalFactors[1]) ? ("+" === t.numericalAndNonNumericalFactors[0].text ? t.numericalAndNonNumericalFactors[0].args.push(n.numericalAndNonNumericalFactors[0]) : t.numericalAndNonNumericalFactors[0] = {
                        type: TOKEN.OPERATOR,
                        text: "+",
                        args: [t.numericalAndNonNumericalFactors[0], n.numericalAndNonNumericalFactors[0]]
                    }, p = b[d] = !0) : t = n;
                    if (p) {
                        r = [];
                        for (d = 0; d < f; ++d) d in b || r.push({
                            type: TOKEN.OPERATOR,
                            text: "*",
                            args: g[d].numericalAndNonNumericalFactors
                        });
                        return F(K("+", r))
                    }
                } else {
                    for (d = 0; d < f; ++d)
                        if ("0" === g[d].text) return O;
                    for (d = 0; d < f && "-1" === g[d].text;) ++d;
                    if (1 < d) return g.splice(0, 0 === (d & 1) ? d : d - 1), F(K("*", g));
                    u = 0;
                    p = 1;
                    w = 0;
                    t = 1;
                    b = {};
                    for (d = "-1" === g[0].text ? 1 : 0; d < f; ++d)
                        if (r = g[d], n = m(r), void 0 !== n) {
                            p *= n;
                            if (!l(p)) break;
                            b[d] = !0;
                            ++u
                        } else if ("^" === r.text && "-1" === r.args[1].text && void 0 !== (n = m(r.args[0]))) {
                        t *= n;
                        if (0 === n || !l(t)) break;
                        b[d] = !0;
                        ++w
                    }
                    if (d === f && (n = a(p, t), 1 !== n || 1 < u || 1 < w)) {
                        p /= n;
                        t /= n;
                        r = [];
                        1 !== p && r.push(D(p));
                        1 !== t && r.push({
                            type: TOKEN.OPERATOR,
                            text: "^",
                            args: [D(t), H]
                        });
                        for (d = 0; d < f; ++d) d in b || r.push(g[d]);
                        return F(K("*", r))
                    }
                    t = g[0];
                    b = {};
                    p = !1;
                    for (d = 1; d < f; ++d) r = g[d], 0 === M(r.baseAndExponent[0], t.baseAndExponent[0]) ? ("+" === t.baseAndExponent[1].text ? t.baseAndExponent[1].args.push(r.baseAndExponent[1]) : t.baseAndExponent[1] = {
                        type: TOKEN.OPERATOR,
                        text: "+",
                        args: [t.baseAndExponent[1], r.baseAndExponent[1]]
                    }, p = b[d] = !0) : t = r;
                    if (p) {
                        r = [];
                        for (d = 0; d < f; ++d) d in b || r.push({
                            type: TOKEN.OPERATOR,
                            text: "^",
                            args: g[d].baseAndExponent
                        });
                        return F(K("*", r))
                    }
                }
                p = !1;
                for (d = 0; d < f; ++d)
                    if (g[d].text === h) {
                        b = g[d];
                        g[d] = b.args[0];
                        t = b.args.length;
                        for (p = 1; p < t; ++p) g.push(b.args[p]);
                        p = !0
                    }
                if (p) return F({
                    type: TOKEN.OPERATOR,
                    text: h,
                    args: g
                })
            } else {
                if ("~" === h) return {
                    type: TOKEN.OPERATOR,
                    text: "*",
                    args: [H, g[0]]
                };
                if ("/" === h) {
                    h = g[0];
                    g = g[1];
                    h = "*" === h.text ? h.args : [h];
                    f = "*" === g.text ? g.args : [g];
                    b = h.length;
                    p = f.length;
                    g = Array(b + p);
                    for (d = 0; d < b; ++d) g[d] = h[d];
                    for (d = 0; d < p; ++d) g[b + d] = {
                        type: TOKEN.OPERATOR,
                        text: "^",
                        args: [f[d], H]
                    };
                    return F({
                        type: TOKEN.OPERATOR,
                        text: "*",
                        args: g
                    })
                }
                if ("^" === h) {
                    b = g[0];
                    f = g[1];
                    d = m(f);
                    if ("*" === b.text && void 0 !== d) {
                        h = b.args;
                        b = h.length;
                        for (d = 0; d < b; ++d) g[d] = {
                            type: TOKEN.OPERATOR,
                            text: "^",
                            args: [h[d], f]
                        };
                        return F({
                            type: TOKEN.OPERATOR,
                            text: "*",
                            args: g
                        })
                    }
                    p = m(b);
                    if (0 !== p && 0 === d) return G;
                    if (1 === d) return b;
                    if (0 === p && 0 !== d && E(f)) return O;
                    if (1 === p) return G;
                    if ("^" === b.text && void 0 !== d) return F({
                        type: TOKEN.OPERATOR,
                        text: "^",
                        args: [b.args[0], {
                            type: TOKEN.OPERATOR,
                            text: "*",
                            args: [f, b.args[1]]
                        }]
                    });
                    if (-1 === p && void 0 !== d) return 0 === (d & 1) ? G : H;
                    f = C(f);
                    if (-1 === p && void 0 !== f && 2 === f[1]) {
                        f = f[0] & 3;
                        0 > f && (f += 4);
                        if (1 === f) return S;
                        if (3 === f) return U
                    }
                    if ("i" === b.text && void 0 !== d) {
                        f = d & 3;
                        0 > f && (f += 4);
                        if (0 === f) return G;
                        if (1 === f) return S;
                        if (2 === f) return H;
                        if (3 === f) return U
                    }
                    if (void 0 !== p && void 0 !== d && 0 !== d && (f = Math.pow(p, Math.abs(d)), l(f))) return f = D(f), 0 > d && (f = {
                        type: TOKEN.OPERATOR,
                        text: "^",
                        args: [f, H]
                    }), f
                } else if ("abs" === h) {
                    if ("-1" === g[0].text) return G;
                    if (E(g[0])) return g[0];
                    if ("*" === g[0].text) {
                        h = g[0].args;
                        b = h.length;
                        g = Array(b);
                        for (d = 0; d < b; ++d) g[d] = {
                            type: TOKEN.OPERATOR,
                            text: "abs",
                            args: [h[d]]
                        };
                        return F({
                            type: TOKEN.OPERATOR,
                            text: "*",
                            args: g
                        })
                    }
                    if ("^" === g[0].text && m(g[0].args[1]) & 1) return {
                        type: TOKEN.OPERATOR,
                        text: "^",
                        args: [{
                            type: TOKEN.OPERATOR,
                            text: "abs",
                            args: [g[0].args[0]]
                        }, g[0].args[1]]
                    }
                } else {
                    if ("log" === h) return F({
                        type: TOKEN.OPERATOR,
                        text: "/",
                        args: [{
                            type: TOKEN.OPERATOR,
                            text: "ln",
                            args: [g[1]]
                        }, {
                            type: TOKEN.OPERATOR,
                            text: "ln",
                            args: [g[0]]
                        }]
                    });
                    if ("ln" === h) {
                        if ("e" === g[0].text) return G;
                        if ("^" === g[0].text && "e" === g[0].args[0].text) return g[0].args[1];
                        if ("1" === g[0].text) return O
                    }
                }
            }
            return {
                type: TOKEN.OPERATOR,
                text: h,
                args: g
            }
        }
        if (null === b) return b;
        for (var O = D(0), G = D(1), H = D(-1), S = {
                type: TOKEN.CONSTANT,
                text: "i"
            }, U = {
                type: TOKEN.OPERATOR,
                text: "*",
                args: [H, {
                    type: TOKEN.CONSTANT,
                    text: "i"
                }]
            };;) {
            var Q = b;
            b = F(b);
            if (0 === M(b, Q)) return g ? parseExpression(printSafeParseable(b, !0)) : b
        }
    }
    "object" == typeof module && (module.exports = {
        T: T,
        TOKEN: TOKEN,
        parseExpression: parseExpression,
        parseTopLevelBinaryExpression: parseTopLevelBinaryExpression,
        printLatex: printLatex,
        enforceSmallFractions: enforceSmallFractions,
        escapeHtml: escapeHtml,
        addExplanation: addExplanation,
        helpInfo: helpInfo,
        setMainVarForUnusedWarning: setMainVarForUnusedWarning,
        getMainVarUnusedWarningIssued: getMainVarUnusedWarningIssued,
        resetMainVarUnusedWarningIssued: resetMainVarUnusedWarningIssued,
        printSimple: printSimple,
        printSafeParseable: printSafeParseable,
        printWebsite: printWebsite,
        canonicalize: canonicalize
    });
} catch (e) {}
parser = module.exports;
delete module;
module = {};
try {
    function printPlotFunc(b, c, l) {
        function n(a) {
            return 0 == a % 1 && -9007199254740991 <= a && 9007199254740991 >= a
        }

        function q(a) {
            return 1 == a % 2 && -9007199254740991 <= a && 9007199254740991 >= a
        }
        void 0 === l && (l = !0);
        var a = "";
        switch (b.type) {
            case parser.TOKEN.NUMBER:
                a = b.text;
                break;
            case parser.TOKEN.VARIABLE:
                a = b.text == c ? c : "plotVariables." + b.text;
                break;
            case parser.TOKEN.CONSTANT:
                switch (b.text) {
                    case "e":
                        a = "Math.E";
                        break;
                    case "pi":
                        a = "Math.PI";
                        break;
                    case "%gamma":
                        a = "0.5772156649015329";
                        break;
                    case "%phi":
                        a = "1.618033988749895"
                }
                break;
            case parser.TOKEN.OPERATOR:
                var g = b.args,
                    m = g.length,
                    d = g[0],
                    e = 2 <= m ? g[1] : void 0; - 1 != "abs expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei".split(" ").indexOf(b.text) && (g[m - 1].trackSign = !0);
                switch (b.text) {
                    case "+":
                        a = printPlotFunc(d, c);
                        for (var f = 1; f < m; ++f) a = "~" == g[f].text ? a + ("-" + printPlotFunc(g[f].args[0], c)) : a + ("+" + printPlotFunc(g[f], c));
                        break;
                    case "-":
                    case "*":
                    case "/":
                        if ("*" == b.text) {
                            var k = a = -1,
                                p = -1;
                            for (f = 0; f < m; ++f)
                                if ("i" == g[f].text) a = f;
                                else if ("erf" == g[f].text && "*" == g[f].args[0].text)
                                for (var h = 0; h < g[f].args[0].args.length; ++h)
                                    if ("i" == g[f].args[0].args[h].text) {
                                        k = f;
                                        p = h;
                                        break
                                    }
                            if (-1 != a && -1 != k) return b = JSON.parse(JSON.stringify(b)), b.args[k].text = "erfi", b.args[k].args[0].args.splice(p, 1), b.args.splice(a, 1), "(-" + printPlotFunc(b, c, l) + ")"
                        }
                        "/" == b.text && (e.trackSign = !0);
                        a = printPlotFunc(d, c);
                        for (f = 1; f < m; ++f) a += b.text + printPlotFunc(g[f], c);
                        break;
                    case "^":
                        "/" == e.text && e.args[0].type == parser.TOKEN.NUMBER && n(k = parseFloat(e.args[0].text)) ? (0 == k % 2 && (d.trackSign = !0, b.dontTrackSign = !0), a = e.args[1].type == parser.TOKEN.NUMBER && q(p = parseFloat(e.args[1].text)) ? "Ploddah.safePow3uio(" + printPlotFunc(d, c, !1) + "," + k + "," + p + ")" : "Ploddah.safePow3uiu(" + printPlotFunc(d, c, !1) + "," + k + "," + printPlotFunc(e.args[1], c, !1) + ")") : "e" == d.text ? (a = "Math.exp(" + printPlotFunc(e, c, !1) + ")", b.dontTrackSign = !0) : "/" == e.text && "1" == e.args[0].text && "2" == e.args[1].text ? (a = "Math.sqrt(" + printPlotFunc(d, c, !1) + ")", b.dontTrackSign = !0) : e.type == parser.TOKEN.NUMBER && n(f = parseFloat(e.text)) ? (0 == f % 2 && (d.trackSign = !0, b.dontTrackSign = !0), a = "Math.pow(" + printPlotFunc(d, c, !1) + "," + f + ")") : (d.trackSign = !0, a = "Ploddah.safePow2uu(" + printPlotFunc(d, c, !1) + "," + printPlotFunc(e, c, !1) + ")");
                        l = !1;
                        break;
                    case "~":
                        a = "-" + printPlotFunc(d, c);
                        break;
                    case "arctan2":
                        a = "Math.atan2(" + printPlotFunc(d, c, !1) + "," + printPlotFunc(e, c, !1) + ")";
                        b.trackSign = !0;
                        break;
                    case "arcsin":
                    case "arccos":
                    case "arctan":
                        a = "Math.a" + b.text.substring(3) + "(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "sin":
                    case "cos":
                    case "tan":
                    case "abs":
                        a = "Math." + b.text + "(" + printPlotFunc(d, c, !1) + ")";
                        "abs" == b.text && (b.dontTrackSign = !0);
                        break;
                    case "ln":
                        a = "Math.log(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "log":
                        a = "(Math.log(" + printPlotFunc(e, c, !1) + ")/Math.log(" + printPlotFunc(d, c, !1) + "))";
                        break;
                    case "arccot":
                    case "arccsc":
                    case "arcosh":
                    case "arcoth":
                    case "arcsch":
                    case "arcsec":
                    case "arsech":
                    case "arsinh":
                    case "artanh":
                    case "cosh":
                    case "cot":
                    case "coth":
                    case "csc":
                    case "csch":
                    case "erf":
                    case "erfc":
                    case "erfi":
                    case "gamma":
                    case "sec":
                    case "sech":
                    case "sinh":
                    case "tanh":
                        a = "Ploddah." + b.text + "(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "gamma_incomplete":
                        d.type == parser.TOKEN.NUMBER && n(h = parseFloat(d.text)) && 0 <= h ? (0 == h && (e.trackSign = !0), a = "Ploddah.gammaIncomplete(" + h + "," + printPlotFunc(e, c, !1) + ")") : "1" == d.text && (a = "Math.exp(-(" + printPlotFunc(e, c, !1) + "))");
                        break;
                    case "beta":
                        a = "Ploddah.beta(" + printPlotFunc(d, c, !1) + "," + printPlotFunc(e, c, !1) + ")";
                        break;
                    case "erf_generalized":
                        a = "(Ploddah.erf(" + printPlotFunc(e, c, !1) + ")-Ploddah.erf(" + printPlotFunc(d, c, !1) + "))";
                        break;
                    case "log_gamma":
                        a = "Ploddah.logGamma(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "expintegral_chi":
                    case "expintegral_ci":
                    case "expintegral_e1":
                    case "expintegral_ei":
                    case "expintegral_li":
                    case "expintegral_shi":
                    case "expintegral_si":
                        "expintegral_li" == b.text && (d.trackSign = 1);
                        a = "Ploddah." + b.text.replace("expintegral_", "") + "(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "expintegral_e":
                        d.type == parser.TOKEN.NUMBER && n(h = parseFloat(d.text)) && 0 < h && (a = "Ploddah.e(" + h + "," + printPlotFunc(e, c, !1) + ")");
                        break;
                    case "fresnel_c":
                    case "fresnel_s":
                        a = "Ploddah." + b.text.replace("fresnel_", "") + "(" + printPlotFunc(d, c, !1) + ")";
                        break;
                    case "signum":
                        a = "Ploddah.sign(" + printPlotFunc(d, c, !1) + ")"
                } - 1 != "arccot arcsch beta cot coth csc csch expintegral_ci gamma log sec signum tan".split(" ").indexOf(b.text) && (b.trackSign = !0)
        }
        b.trackSign && (c in b.varsUsed && !0 !== b.dontTrackSign && (a = !0 === b.trackSign ? "Ploddah.trackSign(" + a + ")" : "Ploddah.trackSignAt(" + a + "," + b.trackSign + ")"), delete b.trackSign);
        if ("" == a) throw "Can't plot this!";
        b.needsParentheses && l && (a = "(" + a + ")");
        return a
    }
    "object" == typeof module && (module.exports = {
        printPlotFunc: printPlotFunc
    });
} catch (e) {}
plotfunc = module.exports;
delete module;
try {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.ASSUME_ES5 = !1;
    $jscomp.ASSUME_NO_NATIVE_MAP = !1;
    $jscomp.ASSUME_NO_NATIVE_SET = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, a, d) {
        b != Array.prototype && b != Object.prototype && (b[a] = d.value)
    };
    $jscomp.getGlobal = function(b) {
        return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
    };
    $jscomp.global = $jscomp.getGlobal(this);
    $jscomp.polyfill = function(b, a, d, c) {
        if (a) {
            d = $jscomp.global;
            b = b.split(".");
            for (c = 0; c < b.length - 1; c++) {
                var h = b[c];
                h in d || (d[h] = {});
                d = d[h]
            }
            b = b[b.length - 1];
            c = d[b];
            a = a(c);
            a != c && null != a && $jscomp.defineProperty(d, b, {
                configurable: !0,
                writable: !0,
                value: a
            })
        }
    };
    $jscomp.polyfill("Math.acosh", function(b) {
        return b ? b : function(a) {
            a = Number(a);
            return Math.log(a + Math.sqrt(a * a - 1))
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.asinh", function(b) {
        return b ? b : function(a) {
            a = Number(a);
            if (0 === a) return a;
            var b = Math.log(Math.abs(a) + Math.sqrt(a * a + 1));
            return 0 > a ? -b : b
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.log1p", function(b) {
        return b ? b : function(a) {
            a = Number(a);
            if (.25 > a && -.25 < a) {
                for (var b = a, c = 1, h = a, g = 0, k = 1; g != h;) b *= a, k *= -1, h = (g = h) + k * b / ++c;
                return h
            }
            return Math.log(1 + a)
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.atanh", function(b) {
        if (b) return b;
        var a = Math.log1p;
        return function(b) {
            b = Number(b);
            return (a(b) - a(-b)) / 2
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.cosh", function(b) {
        if (b) return b;
        var a = Math.exp;
        return function(b) {
            b = Number(b);
            return (a(b) + a(-b)) / 2
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.tanh", function(b) {
        return b ? b : function(a) {
            a = Number(a);
            if (0 === a) return a;
            var b = Math.exp(-2 * Math.abs(a));
            b = (1 - b) / (1 + b);
            return 0 > a ? -b : b
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.sinh", function(b) {
        if (b) return b;
        var a = Math.exp;
        return function(b) {
            b = Number(b);
            return 0 === b ? b : (a(b) - a(-b)) / 2
        }
    }, "es6", "es3");
    $jscomp.polyfill("Math.sign", function(b) {
        return b ? b : function(a) {
            a = Number(a);
            return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1
        }
    }, "es6", "es3");

    function Ploddah(b) {
        var a = this;
        if (!b.getContext) throw Error("Canvas not supported!");
        this.canvas = $(b);
        this.ctx = this.canvas[0].getContext("2d");
        this.updateLayoutParameters();
        this.functions = [];
        this.centerY = this.centerX = 0;
        this.scaleX = 15 / this.canvasWidth;
        this.scaleY = 15 / this.canvasHeight;
        this.minScale = 1E-5;
        this.maxScale = 1E5;
        this.plotDirty = this.enableScaleY = this.enableScaleX = !0;
        this.plotUpdateInterval = 10;
        this.stepSize = 1;
        this.numRefinementSteps = 32;
        this.areaStepSize = 5;
        this.backgroundColor = "rgb(97.5%, 97.5%, 97.5%)";
        this.xAxisColor = "black";
        this.xAxisLineWidth = 1.5;
        this.yAxisColor = "black";
        this.yAxisLineWidth = 1.5;
        this.mainGridNth = 5;
        this.targetGridSpacing = 10;
        this.gridColor = "black";
        this.gridLineWidth = .2;
        this.mainGridColor = "black";
        this.mainGridLineWidth = .5;
        this.ticsFormattingFunction = function(a) {
            return a.toString()
        };
        this.ticsFont = "Arial";
        this.ticsFontSize = 12;
        this.ticsFontStyle = "bold";
        this.ticsColor = "black";
        this.ticsShadowColor = "white";
        this.ticsShadowBlur = 5;
        this.errorFont = "Arial";
        this.errorFontSize = 32;
        this.errorFontStyle = "bold";
        this.errorColor = "red";
        this.pinchPrevScale = this.pinchPrevY = this.pinchPrevX = this.panPrevY = this.panPrevX = void 0;
        this.mouseWheelZoomStep = 1.1;
        this.highlightX = void 0;
        this.highlightLineColor = "yellow";
        this.highlightLineWidth = 3;
        this.highlightPointSize = 15;
        this.highlightPointLineWidth = 3;
        this.highlightPointBgColor = this.backgroundColor;
        this.highlightPointBgLineWidth = 9;
        this.crossEnabled = !0;
        this.crossSize = 20;
        this.crossLineWidth = 1.5;
        this.crossColor = "black";
        this.hammer = new Hammer(b, {
            recognizers: [
                [Hammer.Pan, {
                    threshold: 2
                }],
                [Hammer.Pinch]
            ]
        });
        this.hammer.on("panstart", function(b) {
            a.updateLayoutParameters();
            var c = a.canvasPixelSizeX * (b.pointers[0].pageY - a.canvasOffset.top);
            a.panPrevX = a.canvasPixelSizeX * (b.pointers[0].pageX - a.canvasOffset.left);
            a.panPrevY = c
        }).on("panmove", function(b) {
            a.updateLayoutParameters();
            var c = a.canvasPixelSizeX * (b.pointers[0].pageX - a.canvasOffset.left);
            b = a.canvasPixelSizeX * (b.pointers[0].pageY - a.canvasOffset.top);
            a.centerX -= a.pixelsToMathX(c - a.panPrevX) - a.pixelsToMathX(0);
            a.centerY -= a.pixelsToMathY(b - a.panPrevY) - a.pixelsToMathY(0);
            a.panPrevX = c;
            a.panPrevY = b;
            a.plotDirty = !0
        }).on("pinchstart", function(b) {
            a.updateLayoutParameters();
            var c = a.canvasPixelSizeX * (.5 * (b.pointers[0].pageY + b.pointers[1].pageY) - a.canvasOffset.top);
            a.pinchPrevX = a.canvasPixelSizeX * (.5 * (b.pointers[0].pageX + b.pointers[1].pageX) - a.canvasOffset.left);
            a.pinchPrevY = c;
            a.pinchPrevScale = 1
        }).on("pinchmove", function(b) {
            a.updateLayoutParameters();
            var c = a.canvasPixelSizeX * (.5 * (b.pointers[0].pageX + b.pointers[1].pageX) - a.canvasOffset.left),
                d = a.canvasPixelSizeX * (.5 * (b.pointers[0].pageY + b.pointers[1].pageY) - a.canvasOffset.top);
            a.centerX -= a.pixelsToMathX(c - a.pinchPrevX) - a.pixelsToMathX(0);
            a.centerY -= a.pixelsToMathY(d - a.pinchPrevY) - a.pixelsToMathY(0);
            var g = a.pixelsToMathX(c),
                k = a.pixelsToMathY(d),
                e = a.pinchPrevScale / b.scale;
            a.enableScaleX && (a.scaleX *= e);
            a.enableScaleY && (a.scaleY *= e);
            a.clampScale();
            a.centerX += g - a.pixelsToMathX(c);
            a.centerY += k - a.pixelsToMathY(d);
            a.pinchPrevX = c;
            a.pinchPrevY = d;
            a.pinchPrevScale = b.scale;
            a.plotDirty = !0
        });
        this.canvas.mousewheel(function(b) {
            if (0 != b.deltaY) {
                b.preventDefault();
                a.updateLayoutParameters();
                var c = a.canvasPixelSizeX * b.offsetX,
                    d = a.canvasPixelSizeY * b.offsetY,
                    g = a.pixelsToMathX(c),
                    k = a.pixelsToMathY(d);
                b = 0 < b.deltaY ? 1 / a.mouseWheelZoomStep : a.mouseWheelZoomStep;
                a.enableScaleX && (a.scaleX *= b);
                a.enableScaleY && (a.scaleY *= b);
                a.clampScale();
                a.centerX += g - a.pixelsToMathX(c);
                a.centerY += k - a.pixelsToMathY(d);
                a.plotDirty = !0
            }
        });
        this.onUpdate = [];
        setInterval(function() {
            a.plotDirty && (a.plotDirty = !1, a.update())
        }, this.plotUpdateInterval)
    }
    Ploddah.isSafeInteger = function(b) {
        return 0 == b % 1 && -9007199254740991 <= b && 9007199254740991 >= b
    };
    Ploddah.isSafeEvenInteger = function(b) {
        return 0 == b % 2 && -9007199254740991 <= b && 9007199254740991 >= b
    };
    Ploddah.isSafeOddInteger = function(b) {
        return 1 == b % 2 && -9007199254740991 <= b && 9007199254740991 >= b
    };
    Ploddah.arccot = function(b) {
        return 0 == b ? .5 * Math.PI : Math.atan(1 / b)
    };
    Ploddah.arccsc = function(b) {
        return Math.asin(1 / b)
    };
    Ploddah.arcosh = Math.acosh || function(b) {
        return Math.log(b + Math.sqrt(b * b - 1))
    };
    Ploddah.arcoth = function(b) {
        return .5 * Math.log((b + 1) / (b - 1))
    };
    Ploddah.arcsch = function(b) {
        return 0 <= b ? Math.log((1 + Math.sqrt(1 + b * b)) / b) : -Math.log((1 + Math.sqrt(1 + b * b)) / -b)
    };
    Ploddah.arcsec = function(b) {
        return Math.acos(1 / b)
    };
    Ploddah.arsech = function(b) {
        return Math.log((1 + Math.sqrt(1 - b * b)) / b)
    };
    Ploddah.arsinh = Math.asinh || function(b) {
        return Math.log(b + Math.sqrt(b * b + 1))
    };
    Ploddah.artanh = Math.atanh || function(b) {
        return .5 * Math.log((1 + b) / (1 - b))
    };
    Ploddah.cosh = Math.cosh || function(b) {
        b = Math.exp(b);
        return .5 * (b + 1 / b)
    };
    Ploddah.cot = function(b) {
        return 1 / Math.tan(b)
    };
    Ploddah.coth = function(b) {
        return 1 / Math.tanh(b)
    };
    Ploddah.csc = function(b) {
        return 1 / Math.sin(b)
    };
    Ploddah.csch = function(b) {
        return 1 / Math.sinh(b)
    };
    Ploddah.sec = function(b) {
        return 1 / Math.cos(b)
    };
    Ploddah.sech = function(b) {
        return 1 / Math.cosh(b)
    };
    Ploddah.sign = Math.sign || function(b) {
        return 0 > b ? -1 : 0 < b ? 1 : b
    };
    Ploddah.sinh = Math.sinh || function(b) {
        b = Math.exp(b);
        return .5 * (b - 1 / b)
    };
    Ploddah.tanh = Math.tanh || function(b) {
        b = Math.exp(2 * b);
        return (b - 1) / (b + 1)
    };
    Ploddah.erf = function(b) {
        var a = 1 / (1 + .5 * Math.abs(b));
        a *= Math.exp(((((((((.17087277 * a - .82215223) * a + 1.48851587) * a - 1.13520398) * a + .27886807) * a - .18628806) * a + .09678418) * a + .37409196) * a + 1.00002368) * a - (b * b + 1.26551223));
        return 0 <= b ? 1 - a : a - 1
    };
    Ploddah.erfc = function(b) {
        return 1 - Ploddah.erf(b)
    };
    Ploddah.erfi = function(b) {
        if (0 > b) return -Ploddah.erfi(-b);
        if (5.587432253875527 > b) {
            var a = b * b;
            return ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((6.893637647025481E-92 * a + 4.481407276680502E-90) * a + 2.868459169657655E-88) * a + 1.807362484946897E-86) * a + 1.1207141094674848E-84) * a + 6.837297844314235E-83) * a + 4.102963091019679E-81) * a + 2.4211050031008295E-79) * a + 1.4044551588784017E-77) * a + 8.006659680524799E-76) * a + 4.48446397702788E-74) * a + 2.466874296148234E-72) * a + 1.3323470603292033E-70) * a + 7.062732960580048E-69) * a + 3.673320419992772E-67) * a + 1.8737644566629794E-65) * a + 9.3707539992496E-64) * a + 4.592655854790121E-62) * a + 2.2049686442621383E-60) * a + 1.0365775670498273E-58) * a + 4.769421502324767E-57) * a + 2.146787885414229E-55) * a + 9.448392328628976E-54) * a + 4.063947061831981E-52) * a + 1.7073594878289175E-50) * a + 7.002335114640117E-49) * a + 2.80184344002678E-47) * a + 1.0930925207357807E-45) * a + 4.155248965810674E-44) * a + 1.538027363683162E-42) * a + 5.539127534424142E-41) * a + 1.9395213725013484E-39) * a + 6.597356545539202E-38) * a + 2.17817485947961E-36) * a + 6.973730328792914E-35) * a + 2.1630383901171243E-33) * a + 6.492909974544561E-32) * a + 1.8841244217042036E-30) * a + 5.279103332510834E-29) * a + 1.4263930180784176E-27) * a + 3.71153285316323E-26) * a + 9.28672901131906E-25) * a + 2.230878680274645E-23) * a + 5.136209054585811E-22) * a + 1.131218725924631E-20) * a + 2.378459885277429E-19) * a + 4.763348040515068E-18) * a + 9.063970842808672E-17) * a + 1.6342614095367152E-15) * a + 2.7835162072109215E-14) * a + 4.463224263286477E-13) * a + 6.71136685516411E-12) * a + 9.422759064650411E-11) * a + 1.2290555301717926E-9) * a + 1.4807192815879218E-8) * a + 1.6365844691234924E-7) * a + 1.6462114365889246E-6) * a + 1.4925650358406252E-5) * a + 1.2055332981789664E-4) * a + 8.548327023450852E-4) * a + .005223977625442187) * a + .02686617064513125) * a + .1128379167095513) * a + .3761263890318375) * a + 1.128379167095513) * b
        }
        var d = 1 / b,
            c = d * d;
        a = (5.038819656400854E87 * c + 7.935149065198195E85) * c + 1.2696238504317113E84;
        a = a * c + 2.064429025092213E82;
        a = a * c + 3.412279380317708E80;
        a = a * c + 5.734923328265055E78;
        a = a * c + 9.803287740624027E76;
        a = a * c + 1.7049196070650479E75;
        a = a * c + 3.017556826663802E73;
        a = a * c + 5.437039327322166E71;
        a = a * c + 9.976218949214982E69;
        a = a * c + 1.8647138222831742E68;
        a = a * c + 3.551835851967951E66;
        a = a * c + 6.896768644597963E64;
        a = a * c + 1.3656967613065273E63;
        a = a * c + 2.758983356174803E61;
        a = a * c + 5.688625476649077E59;
        a = a * c + 1.197605363505069E58;
        a = a * c + 2.575495405387245E56;
        a = a * c + 5.66042946238955E54;
        a = a * c + 1.2720066207616966E53;
        a = a * c + 2.924153151176314E51;
        a = a * c + 6.880360355708975E49;
        a = a * c + 1.6579181580021624E48;
        a = a * c + 4.093625081486821E46;
        a = a * c + 1.0363607801232458E45;
        a = a * c + 2.691846182138301E43;
        a = a * c + 7.178256485702135E41;
        a = a * c + 1.966645612521133E40;
        a = a * c + 5.539846795834177E38;
        a = a * c + 1.605752694444689E37;
        a = a * c + 4.793291625208027E35;
        a = a * c + 1.4748589616024699E34;
        a = a * c + 4.682091941595143E32;
        a = a * c + 1.5351121119984075E31;
        a = a * c + 5.203769871181042E29;
        a = a * c + 1.8258841653266815E28;
        a = a * c + 6.639578783006114E26;
        a = a * c + 2.505501427549477E25;
        a = a * c + 9.825495794311675E23;
        a = a * c + 4.010406446657827E22;
        a = a * c + 1.7065559347480111E21;
        a = a * c + 7.584693043324494E19;
        a = a * c + 0x30f522dac9bc7a00;
        a = a * c + 0x2635f5bd7e3bb00;
        a = a * c + 8824926094302538;
        a = a * c + 4.770230321244614E14;
        a = a * c + 2.725845897854065E13;
        a = a * c + 1.652027816881252E12;
        a = a * c + 1.0658243979879044E11;
        a = a * c + 7.350513089571754E9;
        a = a * c + 5.444824510793892E8;
        a = a * c + 4.355859608635114E7;
        a = a * c + 3787704.007508795;
        a = a * c + 360733.7150008376;
        a = a * c + 37971.97000008816;
        a = a * c + 4467.290588245667;
        a = a * c + 595.6387450994222;
        a = a * c + 91.63673001529573;
        a = a * c + 16.66122363914468;
        a = a * c + 3.70249414203215;
        a = a * c + 1.057855469152043;
        a = a * c + .4231421876608172;
        a = a * c + .2820947917738781;
        a = a * c + .5641895835477563;
        a *= d;
        return Math.exp(b * b) * a
    };
    Ploddah.logGamma = function(b) {
        if (0 >= b && (0 == Math.ceil(b) % 2 || 0 == b % 1)) return NaN;
        if (-5 > b) return Ploddah.logGamma(b + 2) - Math.log(b * (b + 1));
        var a = b + 5.5;
        a -= (b + .5) * Math.log(a);
        return Math.log(2.5066282746310007 * (1.000000000190015 + 76.18009172947146 / (b + 1) - 86.50532032941678 / (b + 2) + 24.01409824083091 / (b + 3) - 1.231739572450155 / (b + 4) + .001208650973866179 / (b + 5) - 5.395239384953E-6 / (b + 6)) / b) - a
    };
    Ploddah.gamma = function(b) {
        return -5 > b || 0 > b && 0 == Math.ceil(b) % 2 ? Ploddah.gamma(b + 1) / b : Math.exp(Ploddah.logGamma(b))
    };
    Ploddah.beta = function(b, a) {
        return Ploddah.gamma(b) * Ploddah.gamma(a) / Ploddah.gamma(b + a)
    };
    Ploddah.gammaIncomplete = function(b, a) {
        if (0 == b) return Ploddah.e(1, a);
        for (var d = 1, c = 2; c <= b - 1; ++c) d *= c;
        for (var h = c = 1, g = 0, k = 0; k < b; h *= ++k, c *= a) g += c / h;
        return d * Math.exp(-a) * g
    };
    Ploddah.ci = function(b) {
        if (0 == b) return NaN;
        if (0 > b) return Ploddah.ci(-b);
        if (4 >= b) {
            var a = b * b;
            return .5772156649015329 + Math.log(b) + a * (-.25 + a * (.007518515244388983 + a * (-1.275283422402677E-4 + a * (1.052973638462392E-6 + a * (-4.68889508144848E-9 + a * (1.0648080289118924E-11 + -9.937284888575855E-15 * a)))))) / (1 + a * (.011592605689110734 + a * (6.721268008142544E-5 + a * (2.5553327708612963E-7 + a * (6.970712957609589E-10 + a * (1.3853635277277863E-12 + a * (1.8910605471305976E-15 + 1.3975961673137686E-18 * a)))))))
        }
        a = Ploddah.trigIntAux(b);
        return a[0] * Math.sin(b) - a[1] * Math.cos(b)
    };
    Ploddah.si = function(b) {
        if (0 > b) return -Ploddah.si(-b);
        if (4 >= b) {
            var a = b * b;
            return b * (1 + a * (-.045439340981633 + a * (.0011545722575101668 + a * (-1.4101853682133025E-5 + a * (9.432808094387131E-8 + a * (-3.5320197899716837E-10 + a * (7.08240282274876E-13 + -6.053382120104225E-16 * a))))))) / (1 + a * (.010116214573922557 + a * (4.9917511616975513E-5 + a * (1.556549863087456E-7 + a * (3.280675710557897E-10 + a * (4.504909757538658E-13 + 3.2110705119371216E-16 * a))))))
        }
        a = Ploddah.trigIntAux(b);
        return Math.PI / 2 - a[0] * Math.cos(b) - a[1] * Math.sin(b)
    };
    Ploddah.trigIntAux = function(b) {
        var a = 1 / (b * b);
        return [(1 + a * (744.4370681619367 + a * (196396.37289514687 + a * (2.3775031012543183E7 + a * (1.4307340382127464E9 + a * (4.337362388704325E10 + a * (6.40533830574022E11 + a * (4.2096818057107695E12 + a * (1.0079518298036857E13 + a * (4.94816688199952E12 + -4.9470116864541595E11 * a)))))))))) / (b * (1 + a * (746.4370681619276 + a * (197865.24703158395 + a * (2.4153567016512685E7 + a * (1.4747895219298546E9 + a * (4.585951158477658E10 + a * (7.085013081495154E11 + a * (5.060844645934751E12 + a * (1.4346854917158102E13 + 1.1153549350991426E13 * a)))))))))), a * (1 + a * (813.5952011516862 + a * (235239.1816264782 + a * (3.1255757079577874E7 + a * (2.0629759514676335E9 + a * (6.83052205423625E10 + a * (1.0904952845036278E12 + a * (7.576645832578344E12 + a * (1.8100448746466457E13 + a * (6.432916131430495E12 + -1.3651713767087168E12 * a)))))))))) / (1 + a * (819.5952011514515 + a * (240036.75283557878 + a * (3.2602666164709084E7 + a * (2.2335554327809935E9 + a * (7.8746501734183E10 + a * (1.3986671069641458E12 + a * (1.171647233717366E13 + a * (4.0183908730765664E13 + 3.996532578874908E13 * a)))))))))]
    };
    Ploddah.expIntegralMaxIts = 1E3;
    Ploddah.expIntegralEpsilon = 1E-15;
    Ploddah.oneOverExpIntegralEpsilonSquared = 1 / (Ploddah.expIntegralEpsilon * Ploddah.expIntegralEpsilon);
    Ploddah.eulerMascheroni = .5772156649015329;
    Ploddah.e = function(b, a) {
        var d = b - 1;
        if (1 < a) {
            var c = a + b,
                h = Ploddah.oneOverExpIntegralEpsilonSquared,
                g = 1 / c,
                k = g,
                e = 1;
            for (b = -b; e <= Ploddah.expIntegralMaxIts; ++e, b = -e * (d + e))
                if (c += 2, g = 1 / (b * g + c), h = c + b / h, b = h * g, k *= b, Math.abs(b - 1) < Ploddah.expIntegralEpsilon) return k * Math.exp(-a)
        } else
            for (c = Math.log(Math.abs(a)), h = 0 == d ? -Ploddah.eulerMascheroni - c : 1 / d, e = g = 1; e <= Ploddah.expIntegralMaxIts; ++e) {
                g = -g * a / e;
                if (e == d) {
                    b = -Ploddah.eulerMascheroni;
                    for (k = 0; k < d;) b += 1 / ++k;
                    b = g * (b - c)
                } else b = g / (d - e);
                h += b;
                if (Math.abs(b) < Math.abs(h) * Ploddah.expIntegralEpsilon) return h
            }
        return NaN
    };
    Ploddah.e1 = function(b) {
        return Ploddah.e(1, b)
    };
    Ploddah.ei = function(b) {
        return -Ploddah.e(1, -b)
    };
    Ploddah.li = function(b) {
        return -Ploddah.e(1, -Math.log(b))
    };
    Ploddah.chi = function(b) {
        return -.5 * (Ploddah.e(1, -b) + Ploddah.e(1, b))
    };
    Ploddah.shi = function(b) {
        return .5 * (Ploddah.e(1, b) - Ploddah.e(1, -b))
    };
    Ploddah.fresnelIntegralMaxIts = 1E3;
    Ploddah.fresnelIntegralEpsilon = 1E-15;
    Ploddah.c = function(b) {
        if (0 > b) return -Ploddah.c(-b);
        if (2.9 >= b) {
            b *= 1.2533141373155003;
            for (var a = .7978845608028654, d = 1, c = 0, h = 0; h < Ploddah.fresnelIntegralMaxIts; ++h, a = -a, d *= 2 * h * (2 * h - 1)) {
                var g = Math.pow(b, 4 * h + 1) / (d * (4 * h + 1));
                c += a * g;
                if (g < Ploddah.fresnelIntegralEpsilon) return c
            }
            return NaN
        }
        a = 1.5707963267948966 * b * b;
        return .5 + (1 / (3.141592653589793 * b) - .09675460329959847 / Math.pow(b, 5) + .34311518252060547 / Math.pow(b, 9)) * Math.sin(a) - (.10132118364233778 / (b * b * b) - .15398973382026504 / Math.pow(b, 7) + .9829525922645804 / Math.pow(b, 11)) * Math.cos(a)
    };
    Ploddah.s = function(b) {
        if (0 > b) return -Ploddah.s(-b);
        if (2.9 >= b) {
            b *= 1.2533141373155003;
            for (var a = .7978845608028654, d = 1, c = 0, h = 0; h < Ploddah.fresnelIntegralMaxIts; ++h, a = -a, d *= 2 * h * (2 * h - 1)) {
                var g = Math.pow(b, 4 * h + 3) / (d * (2 * h + 1) * (4 * h + 3));
                c += a * g;
                if (g < Ploddah.fresnelIntegralEpsilon) return c
            }
            return NaN
        }
        a = 1.5707963267948966 * b * b;
        return .5 - (1 / (3.141592653589793 * b) - .09675460329959847 / Math.pow(b, 5) + .34311518252060547 / Math.pow(b, 9)) * Math.cos(a) - (.10132118364233778 / (b * b * b) - .15398973382026504 / Math.pow(b, 7) + .9829525922645804 / Math.pow(b, 11)) * Math.sin(a)
    };
    Ploddah.safePow2uu = function(b, a) {
        return !isFinite(b) || !isFinite(a) || 0 == b && 0 == a ? NaN : Math.pow(b, a)
    };
    Ploddah.safePow3uio = function(b, a, d) {
        return isFinite(b) ? 0 > b ? 0 == a % 2 ? Math.pow(-b, a / d) : -Math.pow(-b, a / d) : Math.pow(b, a / d) : NaN
    };
    Ploddah.safePow3uiu = function(b, a, d) {
        var c = a / d;
        if (!isFinite(b) || !isFinite(c)) return NaN;
        if (Ploddah.isSafeInteger(c)) return Math.pow(b, c);
        0 > d && (a = -a, d = -d);
        return 0 > b ? Ploddah.isSafeOddInteger(d) ? 0 == a % 2 ? Math.pow(-b, c) : -Math.pow(-b, c) : NaN : Math.pow(b, c)
    };
    Ploddah.prototype.mathToPixelsX = function(b) {
        return this.canvasHalfWidth + (b - this.centerX) / this.scaleX
    };
    Ploddah.prototype.mathToPixelsY = function(b) {
        return this.canvasHalfHeight - (b - this.centerY) / this.scaleY
    };
    Ploddah.prototype.pixelsToMathX = function(b) {
        return this.centerX + this.scaleX * (b - this.canvasHalfWidth)
    };
    Ploddah.prototype.pixelsToMathY = function(b) {
        return this.centerY - this.scaleY * (b - this.canvasHalfHeight)
    };
    Ploddah.prototype.clampScale = function() {
        this.scaleX < this.minScale ? this.scaleX = this.minScale : this.scaleX > this.maxScale && (this.scaleX = this.maxScale);
        this.scaleY < this.minScale ? this.scaleY = this.minScale : this.scaleY > this.maxScale && (this.scaleY = this.maxScale)
    };
    Ploddah.prototype.updateLayoutParameters = function() {
        this.canvasOffset = this.canvas.offset();
        this.canvasWidth = this.canvas.prop("width");
        this.canvasHeight = this.canvas.prop("height");
        this.canvasHalfWidth = .5 * this.canvasWidth;
        this.canvasHalfHeight = .5 * this.canvasHeight;
        this.canvasPixelSizeX = this.canvasWidth / this.canvas.width();
        this.canvasPixelSizeY = this.canvasHeight / this.canvas.height()
    };
    Ploddah.prototype.update = function() {
        var b = this;
        this.viewportLeft = this.pixelsToMathX(0);
        this.viewportTop = this.pixelsToMathY(0);
        this.viewportRight = this.pixelsToMathX(this.canvasWidth);
        this.viewportBottom = this.pixelsToMathY(this.canvasHeight);
        this.ctx.save();
        this.ctx.lineJoin = "bevel";
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        var a = Math.pow(10, Math.round(Math.log(this.targetGridSpacing * this.scaleX) / Math.LN10));
        a < this.targetGridSpacing * this.scaleX && (a *= 5);
        var d = Math.pow(10, Math.round(Math.log(this.targetGridSpacing * this.scaleY) / Math.LN10));
        d < this.targetGridSpacing * this.scaleY && (d *= 5);
        var c = Math.floor(this.viewportLeft / a),
            h = Math.ceil(this.viewportRight / a),
            g = Math.ceil(this.viewportTop / d),
            k = Math.floor(this.viewportBottom / d);
        if (Ploddah.isSafeInteger(Math.floor(this.viewportLeft)) && Ploddah.isSafeInteger(Math.floor(this.viewportTop)) && Ploddah.isSafeInteger(Math.ceil(this.viewportRight)) && Ploddah.isSafeInteger(Math.ceil(this.viewportBottom)) && Ploddah.isSafeInteger(c) && Ploddah.isSafeInteger(g) && Ploddah.isSafeInteger(h) && Ploddah.isSafeInteger(k)) {
            this.ctx.strokeStyle = this.gridColor;
            this.ctx.lineWidth = this.gridLineWidth;
            this.ctx.beginPath();
            for (var e = c; e <= h; ++e)
                if (0 != e % this.mainGridNth) {
                    var f = this.mathToPixelsX(a * e);
                    0 <= f && f <= this.canvasWidth && (this.ctx.moveTo(f, 0), this.ctx.lineTo(f, this.canvasHeight))
                }
            for (f = k; f <= g; ++f) 0 != f % this.mainGridNth && (e = this.mathToPixelsY(d * f), 0 <= e && e <= this.canvasHeight && (this.ctx.moveTo(0, e), this.ctx.lineTo(this.canvasWidth, e)));
            this.ctx.stroke();
            this.ctx.closePath();
            var q = [],
                x = [];
            this.ctx.strokeStyle = this.mainGridColor;
            this.ctx.lineWidth = this.mainGridLineWidth;
            this.ctx.beginPath();
            c = this.mainGridNth * Math.floor(c / this.mainGridNth);
            h = this.mainGridNth * Math.ceil(h / this.mainGridNth);
            g = this.mainGridNth * Math.ceil(g / this.mainGridNth);
            k = this.mainGridNth * Math.floor(k / this.mainGridNth);
            for (e = c; e <= h; e += this.mainGridNth)
                if (0 != e && (c = a * e, f = this.mathToPixelsX(c), 0 <= f && f <= this.canvasWidth)) {
                    this.ctx.moveTo(f, 0);
                    this.ctx.lineTo(f, this.canvasHeight);
                    c = this.ticsFormattingFunction(c);
                    var y = this.ctx.measureText(c).width;
                    f >= 2 * y && f <= this.canvasWidth - 2 * y && q.push([f, c])
                }
            for (f = k; f <= g; f += this.mainGridNth) 0 != f && (a = d * f, e = this.mathToPixelsY(a), 0 <= e && e <= this.canvasHeight && (this.ctx.moveTo(0, e), this.ctx.lineTo(this.canvasWidth, e), e >= 2 * this.ticsFontSize && e <= this.canvasHeight - 2 * this.ticsFontSize && (c = this.ticsFormattingFunction(a), -1 != c.indexOf(".") && (c = c.replace(/0+$/, "").replace(/\.0+e/, "e").replace(/\.$/, "")), x.push([e, c]))));
            this.ctx.stroke();
            this.ctx.closePath();
            f = this.mathToPixelsY(0);
            f >= -.5 * this.xAxisLineWidth && f <= this.canvasHeight + .5 * this.xAxisLineWidth && (this.ctx.strokeStyle = this.xAxisColor, this.ctx.lineWidth = this.xAxisLineWidth, this.ctx.beginPath(), this.ctx.moveTo(0, f), this.ctx.lineTo(this.canvasWidth, f), this.ctx.stroke(), this.ctx.closePath());
            f = this.mathToPixelsX(0);
            f >= -.5 * this.yAxisLineWidth && f <= this.canvasWidth + .5 * this.yAxisLineWidth && (this.ctx.strokeStyle = this.yAxisColor, this.ctx.lineWidth = this.yAxisLineWidth, this.ctx.beginPath(), this.ctx.moveTo(f, 0), this.ctx.lineTo(f, this.canvasHeight), this.ctx.stroke(), this.ctx.closePath());
            for (d = this.functions.length - 1; 0 <= d; --d) k = this.functions[d], k.enabled && this.plotFunction(k);
            if (isFinite(this.highlightX) && (f = this.mathToPixelsX(this.highlightX), c = .5 * Math.max(this.highlightLineWidth, this.highlightPointSize + Math.max(this.highlightPointLineWidth, this.highlightPointBgLineWidth)), f >= -c && f <= this.canvasWidth + c)) {
                this.ctx.strokeStyle = this.highlightLineColor;
                this.ctx.lineWidth = this.highlightLineWidth;
                this.ctx.beginPath();
                this.ctx.moveTo(f, 0);
                this.ctx.lineTo(f, this.canvasHeight);
                this.ctx.stroke();
                this.ctx.closePath();
                g = [];
                h = [];
                for (d = this.functions.length - 1; 0 <= d; --d) k = this.functions[d], k.enabled && (a = k.func(this.highlightX), isFinite(a) && (e = this.mathToPixelsY(a), e >= -c && e <= this.canvasHeight + c && (g.push(e), h.push(k.color))));
                a = .5 * (this.highlightPointSize + Math.sqrt(.5) * (this.highlightPointBgLineWidth - this.highlightPointLineWidth));
                for (d = 0; d < g.length; ++d) e = g[d], this.ctx.strokeStyle = this.highlightPointBgColor, this.ctx.lineWidth = this.highlightPointBgLineWidth, this.ctx.beginPath(), this.ctx.moveTo(f - a, e - a), this.ctx.lineTo(f + a, e + a), this.ctx.moveTo(f - a, e + a), this.ctx.lineTo(f + a, e - a), this.ctx.stroke(), this.ctx.closePath();
                a = .5 * this.highlightPointSize;
                for (d = 0; d < g.length; ++d) e = g[d], this.ctx.strokeStyle = h[d], this.ctx.lineWidth = this.highlightPointLineWidth, this.ctx.beginPath(), this.ctx.moveTo(f - a, e - a), this.ctx.lineTo(f + a, e + a), this.ctx.moveTo(f - a, e + a), this.ctx.lineTo(f + a, e - a), this.ctx.stroke(), this.ctx.closePath()
            }
            this.crossEnabled && (f = this.mathToPixelsX(this.centerX), e = this.mathToPixelsY(this.centerY), a = .5 * this.crossSize, this.ctx.strokeStyle = this.crossColor, this.ctx.lineWidth = this.crossLineWidth, this.ctx.beginPath(), this.ctx.moveTo(f - a, e), this.ctx.lineTo(f + a, e), this.ctx.moveTo(f, e - a), this.ctx.lineTo(f, e + a), this.ctx.stroke(), this.ctx.closePath());
            this.ctx.font = this.ticsFontStyle + " " + this.ticsFontSize + "px " + this.ticsFont;
            this.ctx.fillStyle = this.ticsColor;
            this.ctx.textAlign = "center";
            this.ctx.shadowColor = this.ticsShadowColor;
            this.ctx.shadowBlur = this.ticsShadowBlur;
            $.each(q, function() {
                b.ctx.textBaseline = "top";
                b.ctx.fillText(this[1], this[0], 2);
                b.ctx.textBaseline = "bottom";
                b.ctx.fillText(this[1], this[0], b.canvasHeight - 2)
            });
            this.ctx.textBaseline = "middle";
            $.each(x, function() {
                b.ctx.textAlign = "right";
                b.ctx.fillText(this[1], b.canvasWidth - 2, this[0]);
                b.ctx.textAlign = "left";
                b.ctx.fillText(this[1], 2, this[0])
            });
            this.ctx.restore();
            for (d = 0; d < this.onUpdate.length; ++d) this.onUpdate[d](this)
        } else this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight), this.ctx.font = this.errorFontStyle + " " + this.errorFontSize + "px " + this.errorFont, this.ctx.fillStyle = this.errorColor, this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText("Error!", this.canvasHalfWidth, this.canvasHalfHeight)
    };
    Ploddah.prototype.plotFunction = function(b) {
        function a() {
            e = k = void 0;
            g.ctx.beginPath()
        }

        function d() {
            g.ctx.stroke();
            g.ctx.closePath()
        }

        function c(a, b) {
            b < f ? g.ctx.moveTo(a, f) : b > q ? g.ctx.moveTo(a, q) : g.ctx.moveTo(a, b);
            k = a;
            e = b
        }

        function h(a, b) {
            if (e < f)
                if (b < f) g.ctx.moveTo(a, f);
                else if (b > q) {
                var c = a - k,
                    d = b - e;
                g.ctx.moveTo(k + (f - e) / d * c, f);
                g.ctx.lineTo(k + (b - q) / d * c, q)
            } else g.ctx.moveTo(k + (f - e) / (b - e) * (a - k), f), g.ctx.lineTo(a, b);
            else e > q ? b < f ? (c = a - k, d = b - e, g.ctx.moveTo(k + (q - e) / d * c, q), g.ctx.lineTo(k + (b - f) / d * c, f)) : b > q ? g.ctx.moveTo(a, q) : (g.ctx.moveTo(k + (q - e) / (b - e) * (a - k), q), g.ctx.lineTo(a, b)) : b < f ? g.ctx.lineTo(k + (f - e) / (b - e) * (a - k), f) : b > q ? g.ctx.lineTo(k + (q - e) / (b - e) * (a - k), q) : g.ctx.lineTo(a, b);
            k = a;
            e = b
        }
        var g = this,
            k, e, f = -.5 * b.lineWidth,
            q = this.canvasHeight + .5 * b.lineWidth,
            x = b.func,
            y = -.5 * b.lineWidth,
            A = this.canvasWidth + .5 * b.lineWidth,
            w = void 0,
            t = void 0,
            r = void 0;
        if (b.areaEnabled) {
            var l = this.mathToPixelsX(b.areaStartFunc()),
                n = this.mathToPixelsX(b.areaEndFunc());
            if (l != n && isFinite(l) && isFinite(n)) {
                var m = !1;
                l > n && (m = l, l = n, n = m, m = !0);
                var u = [],
                    v = [];
                if (l >= y) {
                    var p = x(this.pixelsToMathX(l));
                    isFinite(p) && (0 < p ? u.push(l, p) : 0 > p && v.push(l, p))
                }
                n <= A && (p = x(this.pixelsToMathX(n)), isFinite(p) && (0 < p ? u.push(n, p) : 0 > p && v.push(n, p)));
                l < y && (l = isFinite(l) ? y + l % this.areaStepSize : this.mathToPixelsX(0) % this.areaStepSize);
                for (n > A && (n = A); l < n; l += this.areaStepSize) p = x(this.pixelsToMathX(l)), isFinite(p) && (0 < p ? u.push(l, p) : 0 > p && v.push(l, p));
                l = this.mathToPixelsY(0);
                p = l - .5 * this.yAxisLineWidth;
                n = l + .5 * this.yAxisLineWidth;
                this.ctx.lineWidth = b.areaLineWidth;
                m && (m = u, u = v, v = m);
                if (0 < u.length) {
                    this.ctx.strokeStyle = b.areaColorPos;
                    a();
                    for (m = 0; m < u.length; m += 2) l = u[m], c(l, p), h(l, this.mathToPixelsY(u[m + 1]));
                    d()
                }
                if (0 < v.length) {
                    this.ctx.strokeStyle = b.areaColorNeg;
                    a();
                    for (m = 0; m < v.length; m += 2) l = v[m], c(l, n), h(l, this.mathToPixelsY(v[m + 1]));
                    d()
                }
            }
        }
        this.ctx.strokeStyle = b.color;
        this.ctx.lineWidth = b.lineWidth;
        a();
        for (l = y; l < A; l += this.stepSize) {
            Ploddah.trackedSign = 0;
            p = x(this.pixelsToMathX(l));
            y = Ploddah.trackedSign;
            u = isFinite(p);
            if (void 0 != r)
                if (u && !r) {
                    t = l;
                    r = p;
                    w = .5 * this.stepSize;
                    for (m = 0; m < this.numRefinementSteps; ++m, w *= .5) {
                        n = t - w;
                        var z = x(this.pixelsToMathX(n));
                        isFinite(z) && (t = n, r = z)
                    }
                    c(t, this.mathToPixelsY(r))
                } else if (u && r)
                if (y == t) h(l, this.mathToPixelsY(p));
                else {
                    r = l - this.stepSize;
                    v = l;
                    var C = w,
                        D = p;
                    w = .5 * this.stepSize;
                    for (m = 0; m < this.numRefinementSteps; ++m, w *= .5) {
                        n = r + w;
                        Ploddah.trackedSign = 0;
                        z = x(this.pixelsToMathX(n));
                        var B = Ploddah.trackedSign;
                        isFinite(z) && B == t && (r = n, C = z);
                        n = v - w;
                        Ploddah.trackedSign = 0;
                        z = x(this.pixelsToMathX(n));
                        B = Ploddah.trackedSign;
                        isFinite(z) && B == y && (v = n, D = z)
                    }
                    t = this.mathToPixelsY(C);
                    m = this.mathToPixelsY(D);
                    Math.abs(t - m) > b.lineWidth ? (h(r, t), c(v, m)) : (h(r, t), h(v, m))
                } else if (!u && r) {
                t = l - this.stepSize;
                r = w;
                w = .5 * this.stepSize;
                for (m = 0; m < this.numRefinementSteps; ++m, w *= .5) n = t + w, z = x(this.pixelsToMathX(n)), isFinite(z) && (t = n, r = z);
                h(t, this.mathToPixelsY(r))
            }
            w = p;
            t = y;
            r = u
        }
        d()
    };
    Ploddah.trackedSign = 0;
    Ploddah.trackSign = function(b) {
        Ploddah.trackedSign *= 2;
        0 < b && ++Ploddah.trackedSign;
        return b
    };
    Ploddah.trackSignAt = function(b, a) {
        Ploddah.trackedSign *= 2;
        b > a && ++Ploddah.trackedSign;
        return b
    };
} catch (e) {}
try {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.findInternal = function(l, z, q) {
        l instanceof String && (l = String(l));
        for (var w = l.length, u = 0; u < w; u++) {
            var I = l[u];
            if (z.call(q, I, u, l)) return {
                i: u,
                v: I
            }
        }
        return {
            i: -1,
            v: void 0
        }
    };
    $jscomp.ASSUME_ES5 = !1;
    $jscomp.ASSUME_NO_NATIVE_MAP = !1;
    $jscomp.ASSUME_NO_NATIVE_SET = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(l, z, q) {
        l != Array.prototype && l != Object.prototype && (l[z] = q.value)
    };
    $jscomp.getGlobal = function(l) {
        return "undefined" != typeof window && window === l ? l : "undefined" != typeof global && null != global ? global : l
    };
    $jscomp.global = $jscomp.getGlobal(this);
    $jscomp.polyfill = function(l, z, q, w) {
        if (z) {
            q = $jscomp.global;
            l = l.split(".");
            for (w = 0; w < l.length - 1; w++) {
                var u = l[w];
                u in q || (q[u] = {});
                q = q[u]
            }
            l = l[l.length - 1];
            w = q[l];
            z = z(w);
            z != w && null != z && $jscomp.defineProperty(q, l, {
                configurable: !0,
                writable: !0,
                value: z
            })
        }
    };
    $jscomp.polyfill("Array.prototype.find", function(l) {
        return l ? l : function(l, q) {
            return $jscomp.findInternal(this, l, q).v
        }
    }, "es6", "es3");
    (function() {
        function l() {
            for (var a = {}, b = 0; b < arguments.length; ++b)
                for (var c in arguments[b].varsUsed) a[c] = !0;
            delete a["?"];
            b = [];
            for (c in a) b.push(c);
            return b.sort()
        }

        function z() {
            try {
                var a = ag_refreshAds();
                a && _gaq.push(["_trackEvent", "Ads", "Refresh", void 0, a, !0])
            } catch (b) {}
        }

        function q(a, b) {
            try {
                localStorage.setItem(a, b)
            } catch (c) {}
        }

        function w(a, b) {
            try {
                return localStorage.getItem(a)
            } catch (c) {
                return b
            }
        }

        function u(a) {
            a = $(a);
            a.hasClass("shadow-pulse") || (a.addClass("shadow-pulse"), setTimeout(function() {
                a.removeClass("shadow-pulse")
            }, 600));
            return a
        }

        function I(a) {
            J();
            var b = $("#tabs .active"),
                c = $("#pages .active"),
                d = $("#tab-" + a),
                h = $("#page-" + a);
            b.is(d) && c.is(h) || (b.removeClass("active"), c.removeClass("active"), d.addClass("active"), h.addClass("active"), c.hide(), h.fadeTo(250, 1), "practice" == a && null == O && (ba = $("#generated-problem table").height(), xa(), setInterval(function() {
                P && ya()
            }, 100)), _gaq.push(["_trackEvent", "Calculator", "Activate tab", a]))
        }

        function za() {
            J();
            if (Aa) {
                var a = Ba();
                if (a == A.OK && t.varsUsed["?"]) alert(L.fillInPlaceholders);
                else {
                    switch (a) {
                        case A.ERROR:
                            u("#expression-preview");
                            break;
                        case A.EMPTY:
                            u("#expression");
                            break;
                        case A.OK:
                            if (null == x) {
                                var b = ca,
                                    c = da;
                                if (c == b) {
                                    alert(T(L.implicit_sameVariable, {
                                        v: b
                                    }));
                                    break
                                }
                                if (null != c) {
                                    if (!(b in t.varsUsed && c in t.varsUsed)) {
                                        alert(T(L.implicit_variablesMustAppear, {
                                            dv: b,
                                            iv: c
                                        }));
                                        break
                                    }
                                } else if (!($.isEmptyObject(t.varsUsed) || b in t.varsUsed)) {
                                    a = [];
                                    for (varUsed in t.varsUsed) a.push(varUsed);
                                    if (1 == a.length) {
                                        if (confirm(T(L.proposeVariable, {
                                                v: b,
                                                p: a[0]
                                            }))) {
                                            $("#diff-var").val(a[0]);
                                            setTimeout(za, 0);
                                            break
                                        }
                                    } else if (!confirm(T(L.checkYourVariable, {
                                            v: b
                                        }))) break
                                }
                                null != c && $("#calculate-roots").prop("checked") && (alert(L.implicit_rootsNotSupported), $("#calculate-roots").prop("checked", !1))
                            }
                            v = null == x ? {
                                secondsSinceFirstQuery: 0,
                                expression: G,
                                expressionCanonical: printSimple(canonicalize(t)),
                                diffVar: b,
                                diffOrder: parseInt(ea),
                                simplifyExpressions: $("#simplify-expressions").prop("checked"),
                                simplifyAllRoots: $("#simplify-all-roots").prop("checked"),
                                complexMode: $("#complex-mode").prop("checked"),
                                keepDecimals: $("#keep-decimals").prop("checked"),
                                showSteps: $("#show-steps").prop("checked"),
                                calculateRoots: $("#calculate-roots").prop("checked"),
                                implicit: null != c ? c : !1
                            } : {
                                secondsSinceFirstQuery: 0,
                                userAnswer: G,
                                userAnswerCanonical: printSimple(canonicalize(t.args[0])),
                                computedAnswer: x.expression,
                                mainVar: x.mainVar,
                                isAntiderivative: x.isAntiderivative,
                                originalShareURL: $("#share a").prop("href")
                            };
                            fa = $("#expression").val();
                            Q = R;
                            H()
                    }
                    mobileMode ? $(document.activeElement).blur() : $("#expression").focus()
                }
            } else alert(L.stillLoading)
        }

        function H() {
            z();
            null == ha && (ha = new Date);
            v.secondsSinceFirstQuery = Math.round((new Date - ha) / 1E3);
            lastAjaxQueryJSON = JSON.stringify(v);
            lastAjaxQueryTime = (new Date).toUTCString();
            for (var a = ia; a < Opentip.tips.length; ++a) Opentip.tips[a].deactivate();
            Opentip.tips = Opentip.tips.slice(0, ia);
            stepsData = {};
            plotVariables = {};
            plotFunctions = {};
            C = !0;
            $("#go").prop("disabled", !0);
            setTimeout(function() {
                var b = Ra();
                setTimeout(function() {
                    $("#result").addClass("hidden").fadeTo(250, 0);
                    $("#loading-icon").fadeTo(250, 1);
                    $("#result-text").html(L.resultTextWait)
                }, b)
            }, 250);
            setTimeout(function() {
                $.ajax(null == x ? "diff.php" : "checkanswer.php", {
                    type: "POST",
                    data: {
                        q: lastAjaxQueryJSON,
                        v: pageVersion
                    },
                    headers: {
                        "X-Requested-With": "Something"
                    }
                }).done(function(b) {
                    $("#result").html(b);
                    "1" === w("disableIconExplanation") && $("#icon-explanation").remove();
                    $("#result script").remove();
                    Q && Sa();
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#result")[0]], Ta)
                }).fail(function(b, a, c) {
                    $("#loading-icon").fadeTo(250, 0);
                    $("#result-text").html(L.resultTextError);
                    alert(T("#{error_ajax}\n#{errorThrown}", L, {
                        errorThrown: c
                    }))
                }).always(function() {
                    C = !1;
                    $("#go").prop("disabled", !1)
                });
                var b = [],
                    a;
                for (a in v) "" != v[a].toString() && "secondsSinceFirstQuery" != a && "expressionCanonical" != a && "userAnswerCanonical" != a && b.push(a + ": " + v[a]);
                _gaq.push(["_trackEvent", "Calculator", null == x ? "Differentiate" : "Check answer", b.join(", ")])
            }, 1E3)
        }

        function Sa() {
            $(".user-input-latex").each(function() {
                var a = $(this).text();
                (a = a.substring(a.indexOf("$") + 1, a.lastIndexOf("$"))) && -1 === a.indexOf("$") && a !== Q && $(T('<div class="calc-info">#{expressionChanged}</div>', L)).insertAfter($(this))
            })
        }

        function Ua(a) {
            Ca();
            a in stepsData && ($("#steps-node-" + a).addClass("steps-parent"), $.each(stepsData[a].children, function(b, a) {
                $("#steps-node-" + a).addClass(ja[b % ja.length])
            }))
        }

        function Ca() {
            $(".steps-node.steps-parent").removeClass("steps-parent");
            $.each(ja, function(a, b) {
                $(".steps-node." + b).removeClass(b)
            })
        }

        function ka() {
            setTimeout(function() {
                $("#loading-icon").fadeTo(250, 0);
                $("#result").removeClass("hidden").fadeTo(250, 1);
                setTimeout(function() {
                    var a = $("#result-text").html(L.resultTextDone);
                    a = $(a);
                    for (var b = 0; 3 > b; ++b) a = a.fadeTo(100, .5).fadeTo(100, 1)
                }, 250)
            }, 1E3);
            "1" !== w("ruleShown") && setTimeout(function() {
                var a = $("#steps-node-1");
                if (a.length) {
                    K = new Opentip(a[0], L.showRuleTooltip, void 0, {
                        target: !0,
                        targetJoint: "bottom left",
                        offset: [mobileMode ? 12 : 8, 0],
                        stemBase: 12,
                        stemLength: 24,
                        tipJoint: mobileMode ? "top" : "top right",
                        removeElementsOnHide: !0,
                        showOn: "creation",
                        hideOn: ["click", "mouseover"],
                        hideTrigger: "target"
                    });
                    for (var b in stepsData) $("#steps-node-" + b).addClass("highlighted")
                } else K = null
            }, 2E3)
        }

        function Da(a) {
            var b = $("#calc div.calc-content div.calc-math span.MathJax, #calc div.calc-content div.calc-math span.MathJax_CHTML, #calc div.calc-content div.calc-math span.MathJax_SVG"),
                c = parseInt(b.css("font-size"));
            isNaN(c) || (c += a, 8 > c && (c = 8), 32 < c && (c = 32), b.css("font-size", c))
        }

        function la(a, b) {
            void 0 === b && (b = {});
            try {
                var c = parseExpression(a),
                    d;
                for (d in c.varsUsed)
                    if (!(d in b)) return NaN;
                return eval("(function(mainVar) { return " + printPlotFunc(c, plotMainVar) + "; })")(B)
            } catch (h) {
                return NaN
            }
        }

        function S() {
            var a = 1;
            $.each(plotFunctions, function(b, c) {
                $("#plot-table-of-values-" + a++).val("")
            });
            p.highlightX = void 0;
            p.plotDirty = !0
        }

        function ma(a) {
            a && (B = la($("#plot-table-of-values-main-var").val(), plotVariables));
            if (isFinite(B)) {
                var b = 1;
                $.each(plotFunctions, function(a, d) {
                    a = L.plot_toolboxTableOfValuesError;
                    try {
                        var c = d.func(B);
                        if (isFinite(c))
                            for (d = 8; 1 < d && !(a = U(c, d, !1), 8 >= a.length); --d);
                    } catch (e) {}
                    $("#plot-table-of-values-" + b++).val(a)
                });
                isFinite(B) ? (p.centerX = B, p.highlightX = B) : p.highlightX = void 0;
                p.plotDirty = !0
            } else S()
        }

        function Va(a) {
            a && (B = NaN);
            var b = $("#plot-toolbox-toggle table"),
                c = 1;
            $.each(plotFunctions, function(a, g) {
                var m = $("<input>").attr({
                    id: "plot-toggle-" + c++,
                    type: "checkbox"
                }).prop("checked", !0).change(function(b) {
                    g.enabled = $(this).prop("checked");
                    p.plotDirty = !0
                });
                if (!$("#" + m.attr("id")).length) {
                    var d = $("<tr>");
                    d.append($("<th>").append(m));
                    d.append($("<td>").append($("<label>").attr("for", m.attr("id")).css("color", g.color).html(a)));
                    b.append(d)
                }
            });
            var d = $("#plot-toolbox-variables");
            if ($.isEmptyObject(plotVariables)) d.remove();
            else {
                var h = $("#plot-toolbox-variables table");
                $.each(plotVariables, function(b, a) {
                    a = $("<input>").attr({
                        id: "plot-variable-" + b,
                        type: "text",
                        spellcheck: "false",
                        autocomplete: "off",
                        autocorrect: "off",
                        autocapitalize: "off"
                    }).addClass("round text").val(a).on("input", function(a) {
                        isFinite(plotVariables[b] = la($(this).val())) ? ($(this).removeClass("invalid-number"), ma(!0)) : ($(this).addClass("invalid-number"), S())
                    });
                    if (!$("#" + a.attr("id")).length) {
                        var c = $("<tr>"),
                            g = "C" == b ? b : printLatex(parseExpression(b));
                        c.append($("<th>").append($("<label>").attr("for", a.attr("id")).html("$" + g + "$ =")));
                        c.append($("<td>").append(a));
                        h.append(c)
                    }
                })
            }
            $("#plot-toolbox-table-of-values");
            var e = $("#plot-toolbox-table-of-values table");
            if (!$("#plot-table-of-values-main-var").length) {
                d = $("<input>").attr({
                    id: "plot-table-of-values-main-var",
                    type: "text",
                    spellcheck: "false",
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off"
                }).addClass("round text").on("input", function(b) {
                    b = $(this).val();
                    "" == b.trim() ? (B = NaN, $(this).removeClass("invalid-number"), S()) : isFinite(B = la(b, plotVariables)) ? ($(this).removeClass("invalid-number"), ma(!1)) : ($(this).addClass("invalid-number"), S())
                });
                var g = $("<tr>");
                g.append($("<th>").append($("<label>").attr("for", d.attr("id")).html("$" + printLatex(parseExpression(plotMainVar)) + "$ =")));
                g.append($("<td>").append(d));
                e.append(g)
            }
            c = 1;
            $.each(plotFunctions, function(b, a) {
                var g = $("<input>").attr({
                    id: "plot-table-of-values-" + c++,
                    type: "text",
                    disabled: !0,
                    spellcheck: "false",
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off"
                }).addClass("round text");
                if (!$("#" + g.attr("id")).length) {
                    var d = $("<tr>");
                    d.append($("<th>").append($("<label>").attr("for", g.attr("id")).html(b + " =").css("color", a.color)));
                    d.append($("<td>").append(g));
                    e.append(d)
                }
            });
            a && (p.ticsFormattingFunction = U, $("#plot-zoom-mode-uniform").click(function() {
                p.enableScaleX = !0;
                p.enableScaleY = !0
            }), $("#plot-zoom-mode-horizontal").click(function() {
                p.enableScaleX = !0;
                p.enableScaleY = !1
            }), $("#plot-zoom-mode-vertical").click(function() {
                p.enableScaleX = !1;
                p.enableScaleY = !0
            }), $("#plot-zoom-equalize-button").click(function(b) {
                b.preventDefault();
                b = Math.sqrt(p.scaleX * p.scaleY);
                p.scaleX = b;
                p.scaleY = b;
                p.plotDirty = !0;
                $("#plot-zoom-mode-uniform").click()
            }), na = oa = void 0, setInterval(function() {
                oa != p.centerX && ($("#plot-cross-coordinates-x").text(U(p.centerX)), oa = p.centerX);
                na != p.centerY && ($("#plot-cross-coordinates-y").text(U(p.centerY)), na = p.centerY)
            }, 100), $("#plot-cross-coordinates-x").click(function(b) {
                b.preventDefault();
                $("#plot-table-of-values-main-var").val($("#plot-cross-coordinates-x").text());
                ma(!0);
                mobileMode && ($("html, body").animate({
                    scrollTop: $("#plot-toolbox-table-of-values").offset().top - 1
                }, 250), setTimeout(function() {
                    $("#plot-toolbox-table-of-values").removeClass("collapsed")
                }, 500))
            }), mobileMode && ($(".plot-toolbox").addClass("collapsed"), $(".plot-toolbox > p:first-child").wrap("<a></a>").click(function(b) {
                b.preventDefault();
                $(this).parents(".plot-toolbox").toggleClass("collapsed")
            })))
        }

        function U(a, b, c) {
            void 0 === b && (b = 6);
            void 0 === c && (c = !0);
            a = a.toPrecision(b);
            c && -1 !== a.indexOf(".") && (c = a.split("e"), c[0] = c[0].replace(/0+$/, "").replace(/\.$/, ""), a = c.join("e"));
            return a
        }

        function Ta() {
            $.each(stepsData, function(b, a) {
                var c = $("#steps-node-" + b);
                b = function(b) {
                    return function() {
                        Ua(b)
                    }
                }(parseInt(b));
                c.click(b).mouseover(b).mouseout(Ca);
                if (a.text) {
                    a = new Opentip(c, $("#steps-rule-" + a.text).html(), void 0, {
                        target: !0,
                        targetJoint: "top left",
                        offset: [mobileMode ? 12 : 8, 0],
                        stemBase: 12,
                        stemLength: 24,
                        tipJoint: mobileMode ? "bottom" : "bottom left",
                        removeElementsOnHide: !0
                    });
                    var h = a.show;
                    a.show = function() {
                        h.apply(this, arguments);
                        K && (K.hide(), K = null, $(".steps-node.highlighted").removeClass("highlighted"), q("ruleShown", "1"))
                    }
                }
            });
            $("#share a").click(function(b) {
                b.preventDefault();
                _gaq.push(["_trackEvent", "Calculator", "Share", $(this).prop("href")]);
                window.prompt(L.copyToClipboard, $(this).prop("href"))
            });
            $("#zoom-in").click(function(b) {
                b.preventDefault();
                Da(4)
            });
            $("#zoom-out").click(function(b) {
                b.preventDefault();
                Da(-4)
            });
            $("#icon-explanation-close > a").click(function(b) {
                b.preventDefault();
                Wa()
            });
            $(".export-button a").click(function(b) {
                b.preventDefault();
                var a = $(this).data("key");
                if (b = exportsData[a]) {
                    var d = window.open("", "export", "menubar=no,toolbar=no,location=no,personalbar=0,directories=no,status=no,scrollbars=yes,resizable=yes,width=600,height=700,left=" + Math.round(screen.width / 2 - 300) + ",top=" + Math.round(screen.height / 2 - 350));
                    d.document.write("<html>");
                    d.document.write("<head>");
                    d.document.write("<title>" + L.exportsWindowTitle + "</title>");
                    d.document.write('<base href="' + location.protocol + "//" + location.host + location.pathname + '">');
                    d.document.write($("<div>").append($("head>.static").clone()).html());
                    d.document.write('<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">');
                    d.document.write('<script type="text/x-mathjax-config">' + $("#mathjax-config-script").html() + "\x3c/script>");
                    d.document.write('<script type="text/javascript" src="' + $("#mathjax-script").attr("src") + '">\x3c/script>');
                    d.document.write("</head>");
                    d.document.write('<body class="exports">');
                    d.document.write("<h1>" + L.exportsWindowTitle + "</h1>");
                    d.document.write("<p>" + L.exportsWindowIntroduction + "</p>");
                    d.document.write('<div id="exports-formula">$' + b.latex + "$</div>");
                    for (a in b) d.document.write("<h2>" + L["exportsEntryTitle_" + a] + "</h2>"), d.document.write("<p>" + L["exportsEntryDescription_" + a] + "</h1>"), d.document.write("<pre>" + b[a] + "</pre>");
                    d.document.write("</body>");
                    d.document.write("</html>");
                    d.document.close();
                    for (a = 0; a < Opentip.tips.length; ++a) Opentip.tips[a].hide();
                    _gaq.push(["_trackEvent", "Calculator", "Export", b.latex])
                }
            });
            $(".check-answer-button a").click(function(b) {
                b.preventDefault();
                Xa($(this).data("key"))
            });
            $(".simplify-button").click(function(b) {
                b.preventDefault();
                D();
                C || (v.simplifyExpressions = !0, H())
            });
            $(".show-steps-button").click(function(b) {
                b.preventDefault();
                D();
                C || (v.showSteps = !0, H())
            });
            $(".calculate-roots-button").click(function(b) {
                b.preventDefault();
                D();
                C || (v.calculateRoots = !0, H())
            });
            $(".calculate-next-derivative-button").click(function(b) {
                b.preventDefault();
                D();
                C || (++v.diffOrder, H())
            });
            $(".calculate-next-derivative-wrt-button").click(function(b) {
                b.preventDefault();
                D();
                b = $(this).data("var");
                C || (v.expression = lastResult, v.expressionCanonical = printSimple(canonicalize(parseExpression(lastResult))), v.diffOrder = 1, v.diffVar = b, Q = null, H())
            });
            V();
            $(".export-button a").each(function(b, a) {
                E(a, L.exportLinkTooltip)
            });
            $(".check-answer-button a").each(function(b, a) {
                E(a, L.checkAnswerLinkTooltip)
            });
            $(".simplify-button").each(function(b, a) {
                E(a, L.simplifyLinkTooltip)
            });
            $(".show-steps-button").each(function(a, c) {
                E(c, L.showStepsLinkTooltip)
            });
            $(".calculate-roots-button").each(function(a, c) {
                E(c, L.calculateRootsLinkTooltip)
            });
            $(".calculate-next-derivative-button").each(function(a, c) {
                E(c, L.calculateNextDerivativeTooltip)
            });
            if ($.isEmptyObject(plotFunctions)) ka();
            else try {
                var a = $("#plot-canvas");
                p = new Ploddah(a[0]);
                $.each(plotFunctions, function(a, c) {
                    p.functions.push(c)
                });
                Va(!0);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#plot-toolboxes")[0]], ka)
            } catch (b) {
                $("#plot").addClass("warning").text(L.plot_notSupported), ka()
            }
        }

        function W(a) {
            return eval('(function(){return "' + a + '";})')
        }

        function pa() {
            Aa = !0
        }

        function Ea() {
            var a = W("begin").toString(),
                b = W("end").toString();
            try {
                for (var c = MathJax.Hub.queue.queue, d = 0; d < c.length; ++d) {
                    var h = c[d].toString();
                    if (h == a) {
                        for (var e = d + 1; c[e].toString() != b;) c[e++] = pa;
                        d = e + 1
                    } else if (h == b)
                        for (e = 0; e < d; ++e) c[e] = pa
                }
            } catch (g) {}
        }

        function Ba() {
            var a = N,
                b = $("#expression").val().toLowerCase(),
                c = $("#diff-var").val().toLowerCase(),
                d = parseInt($("#diff-order").val()),
                h = $("#implicit-mode").prop("checked") ? $("#implicit-var").val().toLowerCase() : null;
            if (b != G || c != ca || d != ea || h != da) {
                Fa ? Fa = !1 : J();
                G = b;
                ca = c;
                ea = d;
                da = h;
                F = "Error";
                ag_adBlockerDetected || z();
                try {
                    if (null == x && (null == qa && (qa = new RegExp("(^\\s*(" + L.commandRegExp + ")\\b)|(\\b(" + L.commandRegExp + ")\\s*$)")), qa.test(b))) throw L.pleaseEnterWithoutCommand;
                    if (null != x) t = parseTopLevelBinaryExpression(b + "=" + x.expression, "=");
                    else if (null != h) t = parseTopLevelBinaryExpression(b, "=");
                    else {
                        if (/^\s*[a-z]\s*(\(\s*[a-z]+(\s*,\s*[a-z]+)*\s*\))?\s*=/.test(b)) {
                            var e = b.indexOf("=");
                            throw T(L.pleaseEnterWithoutFOfX, {
                                f: b.substring(0, e).trim() + "="
                            });
                        }
                        t = parseExpression(b)
                    }
                    if (null != t) {
                        f = {};
                        f[c] = !0;
                        h && (f[h] = !0);
                        f = l(t, {
                            varsUsed: f
                        });
                        var g = f.join(",");
                        if (g != Ga) {
                            Ga = g;
                            var y = $("#diff-var")[0],
                                r = $("#implicit-var")[0];
                            y.innerHTML = "";
                            r.innerHTML = "";
                            for (e = 0; e < f.length; ++e) {
                                var m = f[e];
                                y.add(new Option(m, m, !1, f[e] == c));
                                r.add(new Option(m, m, !1, f[e] == (h || "y")))
                            }
                            var n = !f.length;
                            for (e = 0; 24 > e; ++e) {
                                m = "abcdfghjklmnopqrstuvwxyz".charAt(e);
                                if (!n) {
                                    var M = new Option("_____");
                                    M.disabled = !0;
                                    y.add(M);
                                    M = new Option("_____");
                                    M.disabled = !0;
                                    r.add(M);
                                    n = !0
                                }
                                y.add(new Option(m, m));
                                r.add(new Option(m, m, !1, m == (h || "y")))
                            }
                        }
                        if (null != x) R = X = printLatex(t.args[0]), F = printLatex(t).replace("=", "\\overset{?}{=}\\class{check-answer-rhs}{") + "}";
                        else {
                            var k = /[\w\s]*d\s*[a-ce-z]\b/.exec(b);
                            if (null != k) {
                                b = null;
                                try {
                                    b = parseExpression(k[0])
                                } catch (Ha) {}
                                if (null != b && !b.varsUsed["?"]) throw T(L.pleaseEnterWithoutDifferential, {
                                    v: k[0].charAt(k[0].length - 1)
                                });
                            }
                            h ? setMainVarForUnusedWarning([c, h]) : setMainVarForUnusedWarning(c);
                            resetMainVarUnusedWarningIssued();
                            X = printLatex(t);
                            setMainVarForUnusedWarning(void 0);
                            getMainVarUnusedWarningIssued() ? (R = printLatex(t), Ia = c, $("#main-var-unused-warning-icon").show()) : (R = X, $("#main-var-unused-warning-icon").hide());
                            var f = $.extend({}, t.varsUsed);
                            delete f["?"];
                            var ra = printLatex(parseExpression(c));
                            $.isEmptyObject(f) || c in t.varsUsed || (ra = "\\class{main-var-unused-warning}{" + ra + "}");
                            F = "\\cssId{diff-var-order-mathjax}{\\tfrac{\\mathrm{d}" + (1 == d ? "" : "^" + d) + "}{\\mathrm{d}" + ra + (1 == d ? "" : "^" + d) + "}}\\left[{" + X + "}\\right]"
                        }
                        a = A.OK
                    } else F = "", a = A.EMPTY
                } catch (Ha) {
                    a = A.ERROR, Ea(), Y = null, MathJax.Hub.Queue(function() {
                        $("#expression-preview").addClass("error");
                        $("#expression-preview td").css({
                            "text-align": "inherit",
                            "vertical-align": "inherit"
                        });
                        $("#error-message").html(T("<strong>#{inputError}:</strong><br>#{e}", L, {
                            e: escapeHtml(Ha)
                        }));
                        $("#error-message").show();
                        $("#expression-preview-formula").hide();
                        $("#loading").hide()
                    }), $("#main-var-unused-warning-icon").hide()
                }
                a != A.ERROR && (F != Y ? (Y = F, Ea(), c = $("<div>").append($("<script type='math/tex'>").text(F)).prependTo($("#expression-preview-formula-mathjax-buffer")), MathJax.Hub.Queue(W("begin"), function() {
                    $("#error-message").hide();
                    $("#expression-preview").removeClass("error");
                    $("#expression-preview-formula-mathjax").addClass("update-pending")
                }, ["Typeset", MathJax.Hub, c[0]], function() {
                    Z(!0);
                    Ya();
                    Ja = !0
                }, W("end"))) : N == A.ERROR && ($("#error-message").hide(), $("#expression-preview").removeClass("error"), N = a, Z(!1)))
            } else Ja && null != Y && Z(!1);
            return N = a
        }

        function Z(a) {
            $("#loading").hide();
            if (N != A.ERROR) {
                var b = $("#expression-preview td"),
                    c = $("#expression-preview-formula"),
                    d = $("#expression-preview-formula-mathjax"),
                    h = $("#expression-preview-formula-mathjax-buffer");
                if (a) {
                    h.children("div").not(":first").remove();
                    a = h.children("div");
                    if (!a.length) return;
                    a.detach();
                    d.children().remove();
                    d.append(a.children());
                    d.removeClass("update-pending")
                }
                c.show();
                c = $("#expression-preview-ruler").width();
                a = $("#expression-preview-formula-mathjax > span").last().width();
                h = d.height();
                var e = c / a,
                    g = (sa + ta) / h;
                isFinite(e) && isFinite(g) && 0 < e && 0 < g ? (e = Math.min(e, g, 1.5), d.css("transform", "translate(" + .5 * (c - e * a) + "px, " + .5 * (sa + ta - e * h) + "px) scale(" + e + ")"), b.css({
                    "text-align": "left",
                    "vertical-align": "top"
                })) : (d.css("transform", ""), b.css({
                    "text-align": "",
                    "vertical-align": ""
                }))
            }
        }

        function Ka(a) {
            a || $("#expression").focus();
            var b = $("#input-area"),
                c = !b.hasClass("keyboard-hidden"),
                d = c ? $("#keyboard").height() : void 0;
            b.toggleClass("keyboard-hidden keyboard-visible");
            c = !c;
            if (!a)
                if (c) q("showKeyboard", "1");
                else try {
                    localStorage.removeItem("showKeyboard")
                } catch (h) {}
                void 0 === d && (d = $("#keyboard").height());
            ta = c ? -d : 0;
            Z(!1)
        }

        function Za(a) {
            var b = $(a);
            setTimeout(function() {
                b.replaceWith(b.clone(!0))
            }, 250)
        }

        function $a(a, b) {
            var c = 0;
            mobileMode && ($("html, body").animate({
                scrollTop: $("#menu").offset().top - 1
            }, 250), c += 300);
            $("#tab-options").hasClass("active") || (setTimeout(function() {
                I("options")
            }, c), c += 300);
            setTimeout(function() {
                var c = $("#" + a);
                c.focus().select();
                u(c);
                b && u($(b))
            }, c)
        }

        function Ya() {
            $("#diff-var-order-mathjax").click(function() {
                $a("diff-var", "#diff-order")
            })
        }

        function J() {
            "undefined" != typeof ua && ua.hide()
        }

        function La(a, b) {
            var c = "like-" + a,
                d = $("#" + c)[0];
            if (d) {
                d.outerHTML = '<iframe id="' + c + '" src="social.php?provider=' + a + '" align="left" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" width="160" height="20"></iframe>';
                "undefined" != typeof va && va.hide();
                var h = new Opentip($("#" + c)[0], L.socialTooltip, void 0, {
                    offset: [25, 0],
                    removeElementsOnHide: !0,
                    showOn: "creation",
                    hideDelay: 7.5,
                    stemBase: 12,
                    stemLength: 12,
                    target: !0,
                    targetJoint: "googleplus" == a ? "top left" : "bottom left",
                    tipJoint: "googleplus" == a ? "bottom" : "top"
                });
                va = h;
                setTimeout(function() {
                    h.hide()
                }, 7500);
                _gaq.push(["_trackEvent", "Social", "Show button", b])
            }
        }

        function ab() {
            $(".support-me").fadeOut(250, function() {
                $(this).remove()
            });
            q("disableSupportMe", "1");
            _gaq.push(["_trackEvent", "Support me", "Disable"])
        }

        function wa() {
            $("html, body").animate({
                scrollTop: $("#expression").offset().top - 1
            }, 250)
        }

        function Ra() {
            var a = $("#result-header").offset().top - 1,
                b = $("html").prop("scrollTop") || $("body").prop("scrollTop");
            a = Math.min(500, Math.abs(b - a));
            $("html, body").animate({
                scrollTop: $("#result-header").offset().top - 1
            }, a);
            return a
        }

        function E(a, b) {
            return new Opentip(a, b, void 0, {
                fixed: !0,
                stemBase: 12,
                stemLength: 12,
                tipJoint: "top left",
                removeElementsOnHide: !0
            })
        }

        function Wa() {
            $("#icon-explanation").fadeOut(250, function() {
                $(this).remove()
            });
            q("disableIconExplanation", "1");
            _gaq.push(["_trackEvent", "Calculator", "Disable icon explanation"])
        }

        function Xa(a) {
            if (a = checkAnswerData[a]) {
                x = a;
                Ma = v.expression;
                G = null;
                $("#expression").val("");
                $("#diff-var").val(a.mainVar);
                $("#normal-prompt").hide();
                $("#check-answer-prompt, #check-answer-exit").show();
                $("#page-options input:enabled, #page-options select:enabled").prop("disabled", !0).addClass("disabled-for-check-answer");
                $("#page-options label:not(.disabled)").addClass("disabled disabled-for-check-answer");
                if (!mobileMode) {
                    var b = $("html").prop("scrollTop") || $("body").prop("scrollTop");
                    $("#expression").focus();
                    $("html, body").prop("scrollTop", b)
                }
                setTimeout(function() {
                    $("html, body").animate({
                        scrollTop: $("#prompt").offset().top - 1
                    }, 250)
                }, 500);
                mobileMode && (aa = !0, $("#expression").focus());
                for (b = 0; b < Opentip.tips.length; ++b) Opentip.tips[b].hide();
                _gaq.push(["_trackEvent", "Calculator", "Enter check answer mode", a.expression])
            }
        }

        function D() {
            null != x && (G = x = null, $("#expression").val(Ma), $("#normal-prompt").show(), $("#check-answer-prompt, #check-answer-exit").hide(), $("#page-options input.disabled-for-check-answer, #page-options select.disabled-for-check-answer").prop("disabled", !1).removeClass("disabled-for-check-answer"), $("#page-options label.disabled-for-check-answer").removeClass("disabled disabled-for-check-answer"), _gaq.push(["_trackEvent", "Calculator", "Exit check answer mode"]))
        }

        function V() {
            $("a.external, .external a").filter(function() {
                return !$(this).data("processed")
            }).data("processed", !0).click(function(a) {
                _gaq.push(["_trackEvent", "External link", "Click", $(this).prop("href")])
            })
        }

        function bb(a) {
            var b = [],
                c;
            for (c in a) b.push(a[c]);
            return b
        }

        function Na(a) {
            var b = $("#" + a);
            if (b.length && !b.data("replaced")) {
                if ("undefined" == typeof fallbackAds) return b.remove(), !1;
                var c = null;
                switch (a) {
                    case "desktop-top-ad":
                        c = $("<div style='width: 728px; margin: -1.25em 0 2em 0;'><p style='color: rgba(127, 127, 127, .5); font-size: 0.8em; margin: 0.25em 0; text-align: right;'>" + L.advertisement + "</p><div style='height: 90px;'><a class='external' href='" + fallbackAds[a].linkURL + "'><img src='" + fallbackAds[a].imageURL + "' style='box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.1);'></a></div></div>").hide()
                }
                if (null !== c) return J(), b.replaceWith(c), $(document.body).append($("<div>").prop("id", a).css("display", "none").data("replaced", !0)), V(), c.fadeIn(1E3), !0
            }
        }

        function Oa(a, b, c, d) {
            void 0 == d && (d = 0);
            var h = !1;
            if (d) try {
                h = a()
            } catch (e) {}
            h ? c() : setTimeout(function() {
                Oa(a, b, c, d + 1)
            }, b)
        }

        function cb(a) {
            function b(a, b) {
                return Math.floor(a + Math.random() * (b - a + 1))
            }

            function c(a) {
                return a[b(0, a.length - 1)]
            }

            function d(a) {
                return c(a && .5 < Math.random() ? ["csc", "sec", "cot"] : ["sin", "cos", "tan"])
            }

            function h(a) {
                for (var b = {}, c = 0; c < a.length; ++c) {
                    var g = parseExpression(a[c]);
                    g = printSimple("^" === g.text ? g.args[0] : g);
                    if (b[g]) return !1;
                    b[g] = !0
                }
                return !0
            }

            function e(a, n, r) {
                y = void 0;
                void 0 === r && (r = {});
                void 0 === r.excludeTypes && (r.excludeTypes = {});
                var k = void 0;
                if (n === a.maxNestingLevel || 0 !== n && Math.random() < a.mainVarProbability) k = a.mainVar;
                else {
                    var f = [];
                    n === a.maxNestingLevel - 1 && (r.excludeTypes.sum = !0, r.excludeTypes.product = !0, r.excludeTypes.quotient = !0);
                    for (var m in a.expressionTypes) a.expressionTypes[m] && !r.excludeTypes[m] && f.push(m);
                    f = c(f);
                    if ("sum" === f)
                        for (k = b(2, a.maxNumSummands);;) {
                            f = [];
                            for (m = []; f.length !== k;) {
                                var l = e(a, n + 1, {
                                    excludeTypes: {
                                        sum: !0
                                    },
                                    noConstantSummand: !0
                                }); - 1 === f.indexOf(l) && -1 === m.indexOf(g) && (f.push(l), m.push(g))
                            }
                            a: {
                                l = {};
                                for (var p = 0; p < m.length; ++p) {
                                    var q = parseExpression(m[p]);
                                    q = "*" === q.text ? q.args : [q];
                                    for (var t = 0; t < q.length; ++t) {
                                        var u = printSimple(q[t]);
                                        if (l[u]) {
                                            m = !1;
                                            break a
                                        }
                                        l[u] = !0
                                    }
                                }
                                m = !0
                            }
                            if (m) {
                                k = "(" + f.join(")+(") + ")";
                                break
                            }
                        } else if ("product" === f)
                            for (k = b(2, a.maxNumFactors);;) {
                                f = [];
                                m = [];
                                for (l = []; f.length !== k;) p = e(a, n + 1, {
                                    excludeTypes: {
                                        product: !0,
                                        quotient: !0
                                    },
                                    noConstantFactor: !0
                                }), -1 !== f.indexOf(p) || -1 !== m.indexOf(g) || -1 !== l.indexOf(p) || void 0 !== y && -1 !== l.indexOf(y) || (f.push(p), m.push(g), void 0 !== y ? l.push(y) : l.push(p));
                                if (h(m)) {
                                    k = "(" + f.join(")*(") + ")";
                                    break
                                }
                            } else if ("quotient" === f) {
                                for (;;) {
                                    k = Math.random() < a.reciprocalProbability ? "{constantFactor}" : e(a, n + 1, {
                                        excludeTypes: {
                                            quotient: !0
                                        },
                                        noNegativeConstantFactor: !0,
                                        noReciprocalConstantFactor: !0
                                    });
                                    f = g;
                                    for (m = k; m === k;) m = e(a, n + 1, {
                                        excludeTypes: {
                                            quotient: !0
                                        },
                                        noNegativeConstantFactor: !0,
                                        noReciprocalConstantFactor: !0
                                    });
                                    if (h([f, g])) {
                                        k = "(" + k + ")/(" + m + ")";
                                        break
                                    }
                                }
                                r.noReciprocalConstantFactor = !0
                            } else if ("power" === f) f = e(a, n + 1, {
                        excludeTypes: {
                            product: !0,
                            quotient: !0,
                            power: !0,
                            root: !0,
                            exponential: !0
                        },
                        noConstantFactor: !0
                    }), n = b(2, 10), k = "(" + f + ")^" + n, y = f;
                    else if ("root" === f) {
                        for (f = e(a, n + 1, {
                                excludeTypes: {
                                    product: !0,
                                    quotient: !0,
                                    power: !0,
                                    root: !0,
                                    exponential: !0
                                },
                                noConstantFactor: !0
                            });;) {
                            n = b(2, 10);
                            k = b(2, 10);
                            for (m = 10; 2 <= m; --m) 0 === n % m && 0 === k % m && (n /= m, k /= m);
                            if (1 != k) break
                        }
                        k = "(" + f + ")^(" + (n + "/" + k) + ")";
                        y = f
                    } else "exponential" === f ? (f = c(["integer", "e", "function"]), "integer" === f ? f = b(2, 10) : "function" === f && (f = e(a, n + 1, {
                        excludeTypes: {
                            product: !0,
                            quotient: !0,
                            power: !0,
                            root: !0,
                            exponential: !0
                        },
                        noConstantFactor: !0
                    })), n = e(a, n + 1, {
                        excludeTypes: {
                            logarithm: !0
                        },
                        noConstantSummand: !0,
                        noNegativeConstantFactor: !0
                    }), k = "(" + f + ")^(" + n + ")", y = f) : "logarithm" === f ? k = Math.random() < a.naturalLogarithmProbability ? "ln(" + e(a, n + 1, {
                        excludeTypes: {
                            power: !0,
                            root: !0,
                            exponential: !0
                        },
                        noConstantFactor: !0
                    }) + ")" : "log(" + b(2, 10) + "," + e(a, n + 1, {
                        excludeTypes: {
                            power: !0,
                            root: !0,
                            exponential: !0
                        },
                        noConstantFactor: !0
                    }) + ")" : "trigFunction" === f ? k = d(a.useCscSecCot) + "(" + e(a, n + 1, {
                        excludeTypes: {
                            invTrigFunction: !0
                        },
                        noConstantFactor: !0
                    }) + ")" : "hyperFunction" === f ? k = d(a.useCscSecCot) + "h(" + e(a, n + 1, {
                        excludeTypes: {
                            invHyperFunction: !0
                        },
                        noConstantFactor: !0
                    }) + ")" : "invTrigFunction" === f ? k = "arc" + d(a.useCscSecCot) + "(" + e(a, n + 1, {
                        excludeTypes: {
                            trigFunction: !0
                        },
                        noConstantFactor: !0
                    }) + ")" : "invHyperFunction" === f && (k = "ar" + d(a.useCscSecCot) + "h(" + e(a, n + 1, {
                        excludeTypes: {
                            hyperFunction: !0
                        },
                        noConstantFactor: !0
                    }) + ")")
                }
                g = k;
                f = n = void 0;
                !r.noConstantFactor && Math.random() < a.constantFactorProbability && (n = a.additionalVariables.length && Math.random() < a.additionalVariableProbability ? c(a.additionalVariables) : b(2, 10));
                !r.noConstantSummand && Math.random() < a.constantSummandProbability && (f = a.additionalVariables.length && Math.random() < a.additionalVariableProbability ? c(a.additionalVariables) : b(2, 10));
                void 0 === n ? n = "1" : -1 === k.indexOf("{constantFactor}") && (k = !r.noReciprocalConstantFactor && Math.random() < a.reciprocalConstantFactorProbability ? "(" + k + ")/{constantFactor}" : "{constantFactor}*(" + k + ")");
                k = k.replace("{constantFactor}", n);
                !r.noConstantFactor && !r.noNegativeConstantFactor && Math.random() < a.minusProbability && (k = "-" + k);
                void 0 !== f && (k += (Math.random() < a.minusProbability ? "-" : "+") + f);
                return k
            }
            for (var g = void 0, y = void 0;;) try {
                var r = printWebsite(parseExpression(e(a, 0)));
                if (r.length >= a.minExpressionLength && r.length <= a.maxExpressionLength) return [r, g]
            } catch (m) {}
        }

        function xa() {
            if (P) {
                var a = {
                    mainVar: "x",
                    additionalVariables: ["a", "b", "c"],
                    mainVarProbability: .5,
                    additionalVariableProbability: .25,
                    minusProbability: .1,
                    constantFactorProbability: .1,
                    reciprocalConstantFactorProbability: .5,
                    constantSummandProbability: .1,
                    reciprocalProbability: .5,
                    maxNumSummands: 3,
                    maxNumFactors: 3,
                    naturalLogarithmProbability: .75,
                    useCscSecCot: $("#practice-include-csc-sec-cot").prop("checked"),
                    maxNestingLevel: 3,
                    minExpressionLength: 3,
                    maxExpressionLength: 30,
                    expressionTypes: {
                        sum: !0,
                        product: !0,
                        quotient: !0,
                        power: !0,
                        root: !0,
                        exponential: !0,
                        logarithm: !0,
                        trigFunction: !0,
                        hyperFunction: !0,
                        invTrigFunction: !0,
                        invHyperFunction: !0
                    }
                };
                $("#practice-include-inv-trig-hyp").prop("checked") || (a.expressionTypes.invTrigFunction = !1, a.expressionTypes.invHyperFunction = !1);
                $("#practice-include-hyperbolic").prop("checked") || (a.expressionTypes.hyperFunction = !1, a.expressionTypes.invHyperFunction = !1);
                for (var b;;) {
                    var c = cb(a);
                    O = c[0];
                    b = printLatex(parseExpression(O));
                    if (!Pa[b] && !Qa[c[1]]) {
                        Pa[b] = !0;
                        Qa[c[1]] = !0;
                        break
                    }
                }
                b = "\\tfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[" + b + "\\right]";
                var d = $("#generated-problem-mathjax");
                a = d.html("").append($("<script type='math/tex'>").text(b));
                P = !1;
                d.css("opacity", 0);
                $("#generated-problem-mathjax").css("transform", "");
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, a[0]], function() {
                    ya();
                    d.css("opacity", "");
                    P = !0
                })
            }
        }

        function ya() {
            var a = $("#generated-problem-mathjax"),
                b = $("#generated-problem td"),
                c = a.width(),
                d = a.height(),
                h = $("#generated-problem-ruler").width(),
                e = h / c,
                g = ba / d;
            isFinite(e) && isFinite(g) && 0 < e && 0 < g ? (e = Math.min(e, g, 1.5), a.css("transform", "translate(" + .5 * (h - e * c) + "px, " + .5 * (ba - e * d) + "px) scale(" + e + ")"), b.css({
                "text-align": "left",
                "vertical-align": "top"
            })) : (a.css("transform", ""), b.css({
                "text-align": "",
                "vertical-align": ""
            }))
        }
        var A = {
                ERROR: -1,
                EMPTY: 0,
                OK: 1
            },
            G, ca, ea, da, X, R, t, F, Y, Ga, v, fa, Q, ja = ["steps-child-1", "steps-child-2", "steps-child-3", "steps-child-4", "steps-child-5"],
            Fa = !0,
            aa = !1,
            ua, va, sa, ta = 0,
            ba, ia, C = !1,
            p, B, Ia, ha = null,
            x = null,
            Ma, qa = null,
            Ja = !1,
            oa, na, O = null,
            P = !0,
            Pa = {},
            Qa = {},
            Aa = !1,
            N = A.EMPTY,
            K = null;
        window.serveReplacementAd = Na;
        Oa(function() {
            return pageLoaded && scriptsLoaded && $ && L && MathJax.isReady
        }, 100, function() {
            function a() {
                "" != location.hash && location.hash != c ? location.reload() : setTimeout(a, 100)
            }

            function b(a) {
                var b = $(this),
                    c = b.position(),
                    g = $("#scroll-left");
                g.length || (g = $(document.body).append('<div id="scroll-left">\u25c4</div>'));
                g.css({
                    left: c.left + "px",
                    top: a.pageY - .5 * g.height() + "px"
                });
                var n = $("#scroll-right");
                n.length || (n = $(document.body).append('<div id="scroll-right">\u25ba</div>'));
                n.css({
                    left: c.left + b.outerWidth() - n.width() + "px",
                    top: a.pageY - .5 * n.height() + "px"
                });
                d = b;
                a.pageX <= g.position().left + g.width() ? h = -1 : a.pageX >= n.position().left ? h = 1 : e = h = 0
            }
            MathJax.Hub.Queue(pa);
            MathJax.Hub.Register.MessageHook("New Math", function(a) {
                $("#" + a[1] + "-Frame[tabindex=-1]").removeAttr("tabindex")
            });
            stillLoading = function() {
                return !1
            };
            $("#loading-icon").fadeTo(250, 0);
            mobileMode && 640 <= screen.height && $("#expression-preview").addClass("large");
            sa = $("#expression-preview td").height();
            mobileMode && "1" === w("showKeyboard") && Ka(!0);
            fa = $("#expression").val();
            if (mobileMode) $("#expression").on("focus click", function(a) {
                aa ? aa = !1 : setTimeout(wa, 500)
            });
            $("#check-answer-exit").click(function(a) {
                a.preventDefault();
                D()
            });
            $("#expression-form").submit(function(a) {
                a.preventDefault();
                za()
            });
            $("#toggle-keyboard-button").click(function(a) {
                a.preventDefault();
                Ka(!1)
            });
            $("#keyboard a").click(function(a) {
                a.preventDefault();
                a: {
                    a = $(this).data("input");
                    var b = $(this).data("surround") ? !0 : !1,
                        c = $("#expression");
                    if ("CLR" == a) {
                        var d = c.val();
                        if ("" == d) break a;
                        if (d != fa && !confirm(L.confirmClearInput)) break a
                    }
                    c.focus();
                    "CLR" == a && (c.select(), a = "");
                    c = c[0];
                    d = c.selectionStart;
                    var g = c.selectionEnd,
                        e = c.value,
                        h = e.substring(d, g);
                    b && d != g && (a += "(" + h + ")");
                    b = e.substring(0, d) + a + e.substring(g);
                    try {
                        if (document.execCommand("insertText", !1, a), c.value == b) break a
                    } catch (f) {}
                    c.value = b;
                    c.selectionStart = d + a.length;
                    c.selectionEnd = c.selectionStart
                }
                mobileMode && Za(this)
            });
            $(".tab a").click(function(a) {
                a.preventDefault();
                I($(this).data("tab"), !1)
            });
            $("#examples a").click(function(a) {
                a.preventDefault();
                a: {
                    a = $(this).data("expression");
                    J();
                    var b = $("#expression");
                    aa = !0;
                    b.focus().select();
                    try {
                        if (document.execCommand("insertText", !1, a), b.val() == a) break a
                    } catch (r) {}
                    b.val(a)
                }
                mobileMode && setTimeout(wa, 500)
            });
            $("#implicit-mode").change(function(a) {
                a.preventDefault();
                a = !$(this).prop("checked");
                $("#implicit-var-label")[0].className = a ? "disabled" : "";
                $("#implicit-var").prop("disabled", a)
            });
            $("#switch-mode-button").click(function(a) {
                a.preventDefault();
                if ("1" == $(this).data("desktop")) q("forceDesktopMode", "1");
                else try {
                    localStorage.removeItem("forceDesktopMode")
                } catch (y) {}
                location.reload()
            });
            $("#main-var-unused-warning-icon a").click(function(a) {
                a.preventDefault();
                alert(T(L.mainVarUnusedWarning, {
                    v: Ia
                }))
            });
            $("#accept-problem-button").click(function(a) {
                a.preventDefault();
                D();
                $("#expression").val(O);
                $("#diff-var").val("x");
                $("#diff-order").val("1");
                $("#simplify-expressions").prop("checked", !1);
                $("#simplify-all-roots").prop("checked", !1);
                $("#complex-mode").prop("checked", !1);
                $("#keep-decimals").prop("checked", !1);
                $("#show-steps").prop("checked", !1);
                $("#calculate-roots").prop("checked", !1);
                $("#implicit-mode").prop("checked", !1);
                $("#implicit-var").val("y");
                mobileMode ? setTimeout(wa, 500) : u($("#expression, #go"))
            });
            $("#generate-problem-button").click(function(a) {
                a.preventDefault();
                xa()
            });
            V();
            $("#examples a").each(function(a, b) {
                E(b, T(L.examplesTooltip, {
                    e: $(b).data("expression")
                }))
            });
            mobileMode || $("#expression").focus().select();
            setInterval(Ba, 100);
            var c = location.hash;
            a();
            1 != numVisits || mobileMode || (ua = new Opentip($("#expression")[0], L.balloon, void 0, {
                delay: 1.5,
                removeElementsOnHide: !0,
                showOn: "creation",
                stemBase: 15,
                stemLength: 25,
                target: !0,
                targetJoint: "center",
                tipJoint: "top left",
                containInViewport: !1
            }));
            $("#like-googleplus").click(function(a) {
                a.preventDefault();
                La("googleplus", "Google+")
            });
            $("#like-facebook").click(function(a) {
                a.preventDefault();
                La("facebook", "Facebook")
            });
            mobileMode && setInterval(function() {
                var a = $("#plot-canvas");
                if (0 < a.length) {
                    var b = $(window).width(),
                        c = $(window).height();
                    a.css("max-width", Math.min(b, c) + "px")
                }
            }, 100);
            var d = null,
                h = 0,
                e = 0;
            setInterval(function() {
                $.each($(".calc-content"), function(a, c) {
                    a = c.scrollWidth > c.clientWidth;
                    var g = $(c).children(".calc-scroll-hint");
                    a && 0 == g.length ? (mobileMode || $(c).mousemove(b).mouseleave(function() {
                        $("#scroll-left, #scroll-right").remove();
                        d = null;
                        e = 0
                    }), $(c).prepend(T('<div class="calc-info calc-scroll-hint">#{scrollHint}' + (mobileMode ? "" : " #{scrollHintDesktop}") + "</div>", L))) : !a && 0 < g.length && (mobileMode || g.off("mousemove mouseleave"), g.remove())
                });
                null !== d && 0 !== h && 3 <= ++e && d.scrollLeft(d.scrollLeft() + 25 * h)
            }, 100);
            setTimeout(function() {
                if ("test_aa" !== ag_adBlockerDetected) {
                    for (var a = !1, b = mobileMode ? ["#mobile-top-ad", "#mobile-bottom-ad"] : ["#desktop-left-ad", "#desktop-left-bottom-ad", "#desktop-top-ad"], c = [], d = 0; d < b.length; ++d) {
                        var e = $(b[d]);
                        e.length && c.push(e[0])
                    }
                    c = $(c);
                    d = $(".adsbygoogle");
                    e = $(".adsbygoogl\u0435");
                    var h = d.toArray().every(function(a) {
                            var b = a.getAttribute("data-adsbygoogle-status");
                            return "" === a.innerHTML && ("done" === b || "" === b || null === b)
                        }),
                        k = e.toArray().every(function(a) {
                            return "" === a.innerHTML && "done" !== a.getAttribute("data-adsbygoogle-status")
                        });
                    window.ag_passback && (bb(ag_passback).join().match(/adsense timeout|media-net timeout|none/g) || []).length === b.length ? a = 1 : ("undefined" === typeof ag_passback || $.isEmptyObject(ag_passback)) && $("[data-content='criteo-ad']").length === b.length && c.find("[data-content='criteo-ad']").toArray().every(function(a) {
                        return "" === a.innerHTML
                    }) && c.find("iframe").toArray().every(function(a) {
                        return -1 !== a.id.indexOf("cto_iframe")
                    }) && h ? a = 2 : d.length === b.length && h ? a = 3 : e.length === b.length && k ? a = 4 : $("[data-content='adflare-ad']").length === b.length && c.find("[data-content='adflare-ad']").toArray().every(function(a) {
                        return "" === a.innerHTML
                    }) ? a = 5 : $("[data-content='yieldlove-ad']").length === b.length && c.find("[data-content='yieldlove-ad']").toArray().every(function(a) {
                        return "" === a.innerHTML
                    }) ? a = 6 : c.toArray().every(function(a) {
                        return 1 === $(a).find(".empty-ad").length
                    }) ? a = 7 : ag_adBlockerDetected && (c.length === b.length && c.toArray().every(function(a) {
                        return $(a).data("replaced") || 0 === $(a).height() || "none" === $(a).css("display")
                    }) ? a = 8 : window.adsbygoogle instanceof Array ? a = 9 : null === window.Criteo && (a = 10));
                    c.length !== b.length ? a = !1 : h || (a = !1);
                    a && (mobileMode ? $(c[0]).remove() : Na("desktop-top-ad"), "1" === w("disableSupportMe") ? _gaq.push(["_trackEvent", "Support me", "Suppress", void 0, void 0, !0]) : $.ajax("support.php", {
                        headers: {
                            "X-Requested-With": "Something"
                        }
                    }).done(function(b) {
                        b = $("<div class='support-me'></div>").hide().html(b);
                        var d = b.clone();
                        mobileMode || $(c[0]).replaceWith(b);
                        $(c[1]).replaceWith(d);
                        $("a.disable-support-me").click(function(a) {
                            a.preventDefault();
                            ab()
                        });
                        V();
                        b.fadeIn(1E3);
                        d.fadeIn(1E3);
                        _gaq.push(["_trackEvent", "Support me", "Show", a.toString(), void 0, !0])
                    }))
                }
            }, 15E3);
            ia = Opentip.tips.length;
            pageReady = !0
        })
    })();
} catch (e) {}
scriptsLoaded = true;