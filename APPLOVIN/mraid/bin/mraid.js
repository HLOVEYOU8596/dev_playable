(function () {
    var g, k = this || self, l = function (a) {
        return void 0 !== a;
    }, m = function (a) {
        return "string" == typeof a;
    }, n = function (a) {
        return "number" == typeof a;
    }, r = function (a, b, c) {
        a = a.split(".");
        c = c || k;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            !a.length && l(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
    }, aa = function () { }, ba = function (a) {
        a.Qa = void 0;
        a.Kb = function () {
            return a.Qa ? a.Qa : a.Qa = new a;
        };
    }, da = function (a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function";
            }
            else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b;
    }, u = function (a) {
        return "array" == da(a);
    }, ea = function (a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length;
    }, fa = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b;
    }, ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0, ja = function (a, b, c) {
        return a.call.apply(a.bind, arguments);
    }, ka = function (a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    }, v = function (a, b, c) {
        v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return v.apply(null, arguments);
    }, ma = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    }, na = Date.now || function () {
        return +new Date;
    }, x = function (a, b) {
        function c() { }
        c.prototype = b.prototype;
        a.F = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.uc = function (d, e, f) {
            for (var h = Array(arguments.length - 2), p = 2; p < arguments.length; p++)
                h[p - 2] = arguments[p];
            return b.prototype[e].apply(d, h);
        };
    };
    var oa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
    }
        : function (a, b) {
            if (m(a))
                return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1;
        }, pa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c);
    }
        : function (a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a);
        }, qa = function (a) {
        return Array.prototype.concat.apply([], arguments);
    }, ra = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c;
        }
        return [];
    };
    var sa = function () {
        return null;
    };
    var ta = function (a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a);
    }, ua = function (a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1;
    }, z = function (a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b;
    }, va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), wa = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < va.length; f++)
                c = va[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    };
    var ya = function () {
        this.fc = "";
        this.Ab = xa;
    }, za = function (a) {
        if (a instanceof ya && a.constructor === ya && a.Ab === xa)
            return a.fc;
        da(a);
        return "type_error:TrustedResourceUrl";
    }, xa = {};
    var Aa = String.prototype.trim ? function (a) {
        return a.trim();
    }
        : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        }, Ba = /&/g, Ca = /</g, Da = />/g, Ea = /"/g, Fa = /'/g, Ga = /\x00/g, Ha = /[\x00&<>"']/, A = function (a, b) {
        return -1 != a.indexOf(b);
    }, B = function (a, b) {
        var c = 0;
        a = Aa(String(a)).split(".");
        b = Aa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Ia(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ia(0 == f[2].length, 0 == h[2].length) || Ia(f[2], h[2]);
                f = f[3];
                h = h[3];
            } while (0 == c);
        }
        return c;
    }, Ia = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    };
    var Ka = function () {
        this.ec = "";
        this.xb = Ja;
    }, La = function (a) {
        if (a instanceof Ka && a.constructor === Ka && a.xb === Ja)
            return a.ec;
        da(a);
        return "type_error:SafeUrl";
    }, Ja = {};
    var C;
    a: {
        var Ma = k.navigator;
        if (Ma) {
            var Na = Ma.userAgent;
            if (Na) {
                C = Na;
                break a;
            }
        }
        C = "";
    }
    ;
    var Oa = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ na()).toString(36);
    }, Pa = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b;
    };
    var Qa = function (a) {
        Qa[" "](a);
        return a;
    };
    Qa[" "] = aa;
    var Ra = A(C, "Opera"), Sa = A(C, "Trident") || A(C, "MSIE"), Ta = A(C, "Edge"), Ua = A(C, "Gecko") && !(A(C.toLowerCase(), "webkit") && !A(C, "Edge")) && !(A(C, "Trident") || A(C, "MSIE")) && !A(C, "Edge"), Va = A(C.toLowerCase(), "webkit") && !A(C, "Edge"), Wa = function () {
        var a = k.document;
        return a ? a.documentMode : void 0;
    }, Xa;
    a: {
        var Ya = "", Za = function () {
            var a = C;
            if (Ua)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ta)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Sa)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Va)
                return /WebKit\/(\S+)/.exec(a);
            if (Ra)
                return /(?:Version)[ \/]?(\S+)/.exec(a);
        }();
        Za && (Ya = Za ? Za[1] : "");
        if (Sa) {
            var $a = Wa();
            if (null != $a && $a > parseFloat(Ya)) {
                Xa = String($a);
                break a;
            }
        }
        Xa = Ya;
    }
    var ab = Xa, bb = {}, cb;
    var db = k.document;
    cb = db && Sa ? Wa() || ("CSS1Compat" == db.compatMode ? parseInt(ab, 10) : 5) : void 0;
    var eb = function (a, b) {
        this.width = a;
        this.height = b;
    };
    g = eb.prototype;
    g.clone = function () {
        return new eb(this.width, this.height);
    };
    g.aspectRatio = function () {
        return this.width / this.height;
    };
    g.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    g.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    g.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    g.scale = function (a, b) {
        b = n(b) ? b : a;
        this.width *= a;
        this.height *= b;
        return this;
    };
    var fb = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    };
    var D = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d;
    };
    D.prototype.clone = function () {
        return new D(this.top, this.right, this.bottom, this.left);
    };
    D.prototype.contains = function (a) {
        return this && a ? a instanceof D ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
    };
    D.prototype.expand = function (a, b, c, d) {
        fa(a) ? (this.top -= a.top,
            this.right += a.right,
            this.bottom += a.bottom,
            this.left -= a.left) : (this.top -= a,
            this.right += Number(b),
            this.bottom += Number(c),
            this.left -= Number(d));
        return this;
    };
    var gb = function (a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;
    };
    g = D.prototype;
    g.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this;
    };
    g.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this;
    };
    g.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this;
    };
    g.translate = function (a, b) {
        this.left += a;
        this.right += a;
        n(b) && (this.top += b,
            this.bottom += b);
        return this;
    };
    g.scale = function (a, b) {
        b = n(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this;
    };
    var hb = "StopIteration" in k ? k.StopIteration : {
        message: "StopIteration",
        stack: ""
    }, ib = function () { };
    ib.prototype.next = function () {
        throw hb;
    };
    ib.prototype.Bb = function () {
        return this;
    };
    var jb = function (a, b) {
        this.I = {};
        this.b = [];
        this.va = this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1]);
        }
        else
            a && this.addAll(a);
    };
    g = jb.prototype;
    g.H = function () {
        kb(this);
        for (var a = [], b = 0; b < this.b.length; b++)
            a.push(this.I[this.b[b]]);
        return a;
    };
    g.R = function () {
        kb(this);
        return this.b.concat();
    };
    g.ma = function (a) {
        return lb(this.I, a);
    };
    g.clear = function () {
        this.I = {};
        this.va = this.g = this.b.length = 0;
    };
    g.remove = function (a) {
        return lb(this.I, a) ? (delete this.I[a],
            this.g--,
            this.va++,
            this.b.length > 2 * this.g && kb(this),
            !0) : !1;
    };
    var kb = function (a) {
        if (a.g != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                lb(a.I, d) && (a.b[c++] = d);
                b++;
            }
            a.b.length = c;
        }
        if (a.g != a.b.length) {
            var e = {};
            for (c = b = 0; b < a.b.length;)
                d = a.b[b],
                    lb(e, d) || (a.b[c++] = d,
                        e[d] = 1),
                    b++;
            a.b.length = c;
        }
    };
    g = jb.prototype;
    g.get = function (a, b) {
        return lb(this.I, a) ? this.I[a] : b;
    };
    g.set = function (a, b) {
        lb(this.I, a) || (this.g++,
            this.b.push(a),
            this.va++);
        this.I[a] = b;
    };
    g.addAll = function (a) {
        if (a instanceof jb)
            for (var b = a.R(), c = 0; c < b.length; c++)
                this.set(b[c], a.get(b[c]));
        else
            for (b in a)
                this.set(b, a[b]);
    };
    g.forEach = function (a, b) {
        for (var c = this.R(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this);
        }
    };
    g.clone = function () {
        return new jb(this);
    };
    g.Bb = function (a) {
        kb(this);
        var b = 0, c = this.va, d = this, e = new ib;
        e.next = function () {
            if (c != d.va)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.b.length)
                throw hb;
            var f = d.b[b++];
            return a ? f : d.I[f];
        };
        return e;
    };
    var lb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    var mb = function (a) {
        if (a.H && "function" == typeof a.H)
            return a.H();
        if (m(a))
            return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b;
        }
        b = [];
        c = 0;
        for (d in a)
            b[c++] = a[d];
        return b;
    }, nb = function (a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)
            a.forEach(b, c);
        else if (ea(a) || m(a))
            pa(a, b, c);
        else {
            if (a.R && "function" == typeof a.R)
                var d = a.R();
            else if (a.H && "function" == typeof a.H)
                d = void 0;
            else if (ea(a) || m(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f);
            }
            else
                for (f in d = [],
                    e = 0,
                    a)
                    d[e++] = f;
            e = mb(a);
            f = e.length;
            for (var h = 0; h < f; h++)
                b.call(c, e[h], d && d[h], a);
        }
    };
    var ob = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, pb = function (a) {
        return a ? decodeURI(a) : a;
    }, qb = function (a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1);
                }
                else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
        }
    }, rb = function (a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = "";
        }
        else
            d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)];
    }, sb = function (a, b) {
        return b ? a ? a + "&" + b : b : a;
    }, tb = function (a, b) {
        if (!b)
            return a;
        a = rb(a);
        a[1] = sb(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    }, ub = function (a, b, c) {
        if (u(b))
            for (var d = 0; d < b.length; d++)
                ub(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    }, vb = function (a) {
        var b = [], c;
        for (c in a)
            ub(c, a[c], b);
        return b.join("&");
    }, wb = function () {
        var a = Oa();
        a = null != a ? "=" + encodeURIComponent(String(a)) : "";
        return tb("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + a);
    }, xb = function (a, b) {
        a = rb(a);
        var c = a[1], d = [];
        c && pa(c.split("&"), function (e) {
            var f = e.indexOf("=");
            b.hasOwnProperty(0 <= f ? e.substr(0, f) : e) || d.push(e);
        });
        a[1] = sb(d.join("&"), vb(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    };
    var E = function (a) {
        this.O = this.ea = this.T = "";
        this.ia = null;
        this.V = this.M = "";
        this.C = this.$b = !1;
        if (a instanceof E) {
            this.C = l(void 0) ? void 0 : a.C;
            yb(this, a.T);
            var b = a.ea;
            F(this);
            this.ea = b;
            b = a.O;
            F(this);
            this.O = b;
            zb(this, a.ia);
            b = a.M;
            F(this);
            this.M = b;
            Ab(this, a.D.clone());
            a = a.V;
            F(this);
            this.V = a;
        }
        else
            a && (b = String(a).match(ob)) ? (this.C = !1,
                yb(this, b[1] || "", !0),
                a = b[2] || "",
                F(this),
                this.ea = Bb(a),
                a = b[3] || "",
                F(this),
                this.O = Bb(a, !0),
                zb(this, b[4]),
                a = b[5] || "",
                F(this),
                this.M = Bb(a, !0),
                Ab(this, b[6] || "", !0),
                a = b[7] || "",
                F(this),
                this.V = Bb(a)) : (this.C = !1,
                this.D = new G(null, this.C));
    };
    E.prototype.toString = function () {
        var a = [], b = this.T;
        b && a.push(Cb(b, Db, !0), ":");
        var c = this.O;
        if (c || "file" == b)
            a.push("//"),
                (b = this.ea) && a.push(Cb(b, Db, !0), "@"),
                a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.ia,
                null != c && a.push(":", String(c));
        if (c = this.M)
            this.O && "/" != c.charAt(0) && a.push("/"),
                a.push(Cb(c, "/" == c.charAt(0) ? Eb : Fb, !0));
        (c = this.D.toString()) && a.push("?", c);
        (c = this.V) && a.push("#", Cb(c, Gb));
        return a.join("");
    };
    E.prototype.resolve = function (a) {
        var b = this.clone(), c = !!a.T;
        c ? yb(b, a.T) : c = !!a.ea;
        if (c) {
            var d = a.ea;
            F(b);
            b.ea = d;
        }
        else
            c = !!a.O;
        c ? (d = a.O,
            F(b),
            b.O = d) : c = null != a.ia;
        d = a.M;
        if (c)
            zb(b, a.ia);
        else if (c = !!a.M) {
            if ("/" != d.charAt(0))
                if (this.O && !this.M)
                    d = "/" + d;
                else {
                    var e = b.M.lastIndexOf("/");
                    -1 != e && (d = b.M.substr(0, e + 1) + d);
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (A(e, "./") || A(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], h = 0; h < e.length;) {
                    var p = e[h++];
                    "." == p ? d && h == e.length && f.push("") : ".." == p ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && h == e.length && f.push("")) : (f.push(p),
                        d = !0);
                }
                d = f.join("/");
            }
            else
                d = e;
        }
        c ? (F(b),
            b.M = d) : c = "" !== a.D.toString();
        c ? Ab(b, a.D.clone()) : c = !!a.V;
        c && (a = a.V,
            F(b),
            b.V = a);
        return b;
    };
    E.prototype.clone = function () {
        return new E(this);
    };
    var yb = function (a, b, c) {
        F(a);
        a.T = c ? Bb(b, !0) : b;
        a.T && (a.T = a.T.replace(/:$/, ""));
    }, zb = function (a, b) {
        F(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.ia = b;
        }
        else
            a.ia = null;
    }, Ab = function (a, b, c) {
        F(a);
        b instanceof G ? (a.D = b,
            a.D.Wa(a.C)) : (c || (b = Cb(b, Hb)),
            a.D = new G(b, a.C));
    };
    E.prototype.getQuery = function () {
        return this.D.toString();
    };
    E.prototype.removeParameter = function (a) {
        F(this);
        this.D.remove(a);
        return this;
    };
    var F = function (a) {
        if (a.$b)
            throw Error("Tried to modify a read-only Uri");
    };
    E.prototype.Wa = function (a) {
        this.C = a;
        this.D && this.D.Wa(a);
    };
    var Bb = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }, Cb = function (a, b, c) {
        return m(a) ? (a = encodeURI(a).replace(b, Ib),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null;
    }, Ib = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }, Db = /[#\/\?@]/g, Fb = /[#\?:]/g, Eb = /[#\?]/g, Hb = /[#\?@]/g, Gb = /#/g, G = function (a, b) {
        this.g = this.c = null;
        this.A = a || null;
        this.C = !!b;
    }, H = function (a) {
        a.c || (a.c = new jb,
            a.g = 0,
            a.A && qb(a.A, function (b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
            }));
    };
    g = G.prototype;
    g.add = function (a, b) {
        H(this);
        this.A = null;
        a = Jb(this, a);
        var c = this.c.get(a);
        c || this.c.set(a, c = []);
        c.push(b);
        this.g += 1;
        return this;
    };
    g.remove = function (a) {
        H(this);
        a = Jb(this, a);
        return this.c.ma(a) ? (this.A = null,
            this.g -= this.c.get(a).length,
            this.c.remove(a)) : !1;
    };
    g.clear = function () {
        this.c = this.A = null;
        this.g = 0;
    };
    g.ma = function (a) {
        H(this);
        a = Jb(this, a);
        return this.c.ma(a);
    };
    g.forEach = function (a, b) {
        H(this);
        this.c.forEach(function (c, d) {
            pa(c, function (e) {
                a.call(b, e, d, this);
            }, this);
        }, this);
    };
    g.R = function () {
        H(this);
        for (var a = this.c.H(), b = this.c.R(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c;
    };
    g.H = function (a) {
        H(this);
        var b = [];
        if (m(a))
            this.ma(a) && (b = qa(b, this.c.get(Jb(this, a))));
        else {
            a = this.c.H();
            for (var c = 0; c < a.length; c++)
                b = qa(b, a[c]);
        }
        return b;
    };
    g.set = function (a, b) {
        H(this);
        this.A = null;
        a = Jb(this, a);
        this.ma(a) && (this.g -= this.c.get(a).length);
        this.c.set(a, [b]);
        this.g += 1;
        return this;
    };
    g.get = function (a, b) {
        if (!a)
            return b;
        a = this.H(a);
        return 0 < a.length ? String(a[0]) : b;
    };
    g.toString = function () {
        if (this.A)
            return this.A;
        if (!this.c)
            return "";
        for (var a = [], b = this.c.R(), c = 0; c < b.length; c++) {
            var d = b[c], e = encodeURIComponent(String(d));
            d = this.H(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h);
            }
        }
        return this.A = a.join("&");
    };
    g.clone = function () {
        var a = new G;
        a.A = this.A;
        this.c && (a.c = this.c.clone(),
            a.g = this.g);
        return a;
    };
    var Jb = function (a, b) {
        b = String(b);
        a.C && (b = b.toLowerCase());
        return b;
    };
    G.prototype.Wa = function (a) {
        a && !this.C && (H(this),
            this.A = null,
            this.c.forEach(function (b, c) {
                var d = c.toLowerCase();
                c != d && (this.remove(c),
                    this.remove(d),
                    0 < b.length && (this.A = null,
                        this.c.set(Jb(this, d), ra(b)),
                        this.g += b.length));
            }, this));
        this.C = a;
    };
    G.prototype.extend = function (a) {
        for (var b = 0; b < arguments.length; b++)
            nb(arguments[b], function (c, d) {
                this.add(d, c);
            }, this);
    };
    var Kb, Lb, Mb, Nb, Ob, Pb, Qb = function () {
        return k.navigator ? k.navigator.userAgent : "";
    }, I = function (a) {
        return A(Qb(), a);
    }, Tb = I("(iPad") || I("(iPod") || I("(iPhone"), Ub = I("Android"), Vb = I("MSIE") || I("IEMobile") || I("Windows Phone"), J = function () {
        if (!l(Lb)) {
            if (Tb && !I("Safari"))
                return Lb = !0;
            Lb = !1;
        }
        return Lb;
    }, M = function () {
        l(Mb) || (Mb = I("afma-sdk-a") ? !0 : !1);
        return Mb;
    }, Wb = function (a) {
        var b;
        l(Ob) || (Ob = M() ? (b = Qb().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/)) ? b[1] : "" : "");
        return (b = Ob) ? 0 <= B(b, a) : !1;
    }, Xb = function (a) {
        if (!J())
            return !1;
        if (!l(Pb)) {
            if (J()) {
                var b = (new E(window.location.href)).D.H("js");
                a: {
                    if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                        var c = b.lastIndexOf("v");
                        if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                            b = b[1];
                            break a;
                        }
                    }
                    b = "0.0.0";
                }
            }
            else
                b = "0.0.0";
            Pb = b;
        }
        return (b = Pb) ? 0 <= B(b, a) : !1;
    };
    var N = function () {
        this.na = this.na;
        this.ba = this.ba;
    };
    N.prototype.na = !1;
    N.prototype.$a = function () {
        this.na || (this.na = !0,
            this.w());
    };
    var Yb = function (a, b) {
        a.na ? l(void 0) ? b.call(void 0) : b() : (a.ba || (a.ba = []),
            a.ba.push(l(void 0) ? v(b, void 0) : b));
    };
    N.prototype.w = function () {
        if (this.ba)
            for (; this.ba.length;)
                this.ba.shift()();
    };
    var Zb = function (a) {
        a && "function" == typeof a.$a && a.$a();
    };
    var O = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.da = !1;
        this.kb = !0;
    };
    O.prototype.stopPropagation = function () {
        this.da = !0;
    };
    O.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.kb = !1;
    };
    var $b = function (a, b) {
        this.messageName = a;
        this.parameters = b || {};
    }, ac = function (a, b) {
        O.call(this, a.messageName, b);
        this.params = a.parameters || {};
    };
    x(ac, O);
    var bc = function (a, b) {
        a = xb(a, b || {});
        try {
            if (window.googleJsEnvironment && window.googleJsEnvironment.pinger && window.googleJsEnvironment.pinger.pingUrl)
                window.googleJsEnvironment.pinger.pingUrl(a);
            else {
                b = window;
                b.google_image_requests || (b.google_image_requests = []);
                var c = b.document.createElement("img");
                c.src = a;
                b.google_image_requests.push(c);
            }
        }
        catch (d) { }
    };
    var cc;
    (cc = !Sa) || (cc = 9 <= Number(cb));
    var dc = cc, ec;
    if (ec = Sa)
        ec = !(Object.prototype.hasOwnProperty.call(bb, "9") ? bb["9"] : bb["9"] = 0 <= B(ab, "9"));
    var fc = ec, gc = function () {
        if (!k.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0;
            }
        });
        try {
            k.addEventListener("test", aa, b),
                k.removeEventListener("test", aa, b);
        }
        catch (c) { }
        return a;
    }();
    var P = function (a, b) {
        O.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.oa = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            if (b = a.relatedTarget) {
                if (Ua) {
                    a: {
                        try {
                            Qa(b.nodeName);
                            var e = !0;
                            break a;
                        }
                        catch (f) { }
                        e = !1;
                    }
                    e || (b = null);
                }
            }
            else
                "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
                this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
                this.screenX = d.screenX || 0,
                this.screenY = d.screenY || 0) : (this.offsetX = Va || void 0 !== a.offsetX ? a.offsetX : a.layerX,
                this.offsetY = Va || void 0 !== a.offsetY ? a.offsetY : a.layerY,
                this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
                this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
                this.screenX = a.screenX || 0,
                this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = m(a.pointerType) ? a.pointerType : hc[a.pointerType] || "";
            this.state = a.state;
            this.oa = a;
            a.defaultPrevented && this.preventDefault();
        }
    };
    x(P, O);
    var hc = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    P.prototype.stopPropagation = function () {
        P.F.stopPropagation.call(this);
        this.oa.stopPropagation ? this.oa.stopPropagation() : this.oa.cancelBubble = !0;
    };
    P.prototype.preventDefault = function () {
        P.F.preventDefault.call(this);
        var a = this.oa;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
            fc)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1;
            }
            catch (b) { }
    };
    var ic = "closure_listenable_" + (1E6 * Math.random() | 0), jc = function (a) {
        return !(!a || !a[ic]);
    }, kc = 0;
    var lc = function (a, b, c, d, e) {
        this.listener = a;
        this.Ea = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.za = e;
        this.key = ++kc;
        this.ja = this.wa = !1;
    }, mc = function (a) {
        a.ja = !0;
        a.listener = null;
        a.Ea = null;
        a.src = null;
        a.za = null;
    };
    var Q = function (a) {
        this.src = a;
        this.h = {};
        this.ua = 0;
    };
    Q.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.h[f];
        a || (a = this.h[f] = [],
            this.ua++);
        var h = nc(a, b, d, e);
        -1 < h ? (b = a[h],
            c || (b.wa = !1)) : (b = new lc(b, this.src, f, !!d, e),
            b.wa = c,
            a.push(b));
        return b;
    };
    Q.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.h))
            return !1;
        var e = this.h[a];
        b = nc(e, b, c, d);
        return -1 < b ? (mc(e[b]),
            Array.prototype.splice.call(e, b, 1),
            0 == e.length && (delete this.h[a],
                this.ua--),
            !0) : !1;
    };
    var oc = function (a, b) {
        var c = b.type;
        if (c in a.h) {
            var d = a.h[c], e = oa(d, b), f;
            (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
            f && (mc(b),
                0 == a.h[c].length && (delete a.h[c],
                    a.ua--));
        }
    };
    Q.prototype.Ua = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.h)
            if (!a || c == a) {
                for (var d = this.h[c], e = 0; e < d.length; e++)
                    ++b,
                        mc(d[e]);
                delete this.h[c];
                this.ua--;
            }
    };
    Q.prototype.xa = function (a, b) {
        a = this.h[a.toString()];
        var c = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.capture == b && c.push(e);
            }
        return c;
    };
    Q.prototype.pa = function (a, b, c, d) {
        a = this.h[a.toString()];
        var e = -1;
        a && (e = nc(a, b, c, d));
        return -1 < e ? a[e] : null;
    };
    Q.prototype.hasListener = function (a, b) {
        var c = l(a), d = c ? a.toString() : "", e = l(b);
        return ua(this.h, function (f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b))
                    return !0;
            return !1;
        });
    };
    var nc = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ja && f.listener == b && f.capture == !!c && f.za == d)
                return e;
        }
        return -1;
    };
    var pc = "closure_lm_" + (1E6 * Math.random() | 0), qc = {}, rc = 0, tc = function (a, b, c, d, e) {
        if (d && d.once)
            return sc(a, b, c, d, e);
        if (u(b)) {
            for (var f = 0; f < b.length; f++)
                tc(a, b[f], c, d, e);
            return null;
        }
        c = uc(c);
        return jc(a) ? a.ra(b, c, fa(d) ? !!d.capture : !!d, e) : vc(a, b, c, !1, d, e);
    }, vc = function (a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = fa(e) ? !!e.capture : !!e, p = wc(a);
        p || (a[pc] = p = new Q(a));
        c = p.add(b, c, d, h, f);
        if (c.Ea)
            return c;
        d = xc();
        c.Ea = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            gc || (e = h),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(yc(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        rc++;
        return c;
    }, xc = function () {
        var a = zc, b = dc ? function (c) {
            return a.call(b.src, b.listener, c);
        }
            : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c)
                    return c;
            };
        return b;
    }, sc = function (a, b, c, d, e) {
        if (u(b)) {
            for (var f = 0; f < b.length; f++)
                sc(a, b[f], c, d, e);
            return null;
        }
        c = uc(c);
        return jc(a) ? a.fb(b, c, fa(d) ? !!d.capture : !!d, e) : vc(a, b, c, !0, d, e);
    }, Ac = function (a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++)
                Ac(a, b[f], c, d, e);
        else
            d = fa(d) ? !!d.capture : !!d,
                c = uc(c),
                jc(a) ? a.Ha(b, c, d, e) : a && (a = wc(a)) && (b = a.pa(b, c, d, e)) && Bc(b);
    }, Bc = function (a) {
        if (!n(a) && a && !a.ja) {
            var b = a.src;
            if (jc(b))
                oc(b.G, a);
            else {
                var c = a.type, d = a.Ea;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(yc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                rc--;
                (c = wc(b)) ? (oc(c, a),
                    0 == c.ua && (c.src = null,
                        b[pc] = null)) : mc(a);
            }
        }
    }, Cc = function (a, b) {
        if (jc(a))
            return a.hasListener(b, void 0);
        a = wc(a);
        return !!a && a.hasListener(b, void 0);
    }, yc = function (a) {
        return a in qc ? qc[a] : qc[a] = "on" + a;
    }, Ec = function (a, b, c, d) {
        var e = !0;
        if (a = wc(a))
            if (b = a.h[b.toString()])
                for (b = b.concat(),
                    a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.ja && (f = Dc(f, d),
                        e = e && !1 !== f);
                }
        return e;
    }, Dc = function (a, b) {
        var c = a.listener, d = a.za || a.src;
        a.wa && Bc(a);
        return c.call(d, b);
    }, zc = function (a, b) {
        if (a.ja)
            return !0;
        if (!dc) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = k, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                            null == c) {
                            b = null;
                            break a;
                        }
                    b = c;
                }
            d = b;
            b = new P(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a;
                        }
                        catch (h) {
                            e = !0;
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0;
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.da && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = Ec(d[e], a, !0, b);
                    c = c && f;
                }
                for (e = 0; !b.da && e < d.length; e++)
                    b.currentTarget = d[e],
                        f = Ec(d[e], a, !1, b),
                        c = c && f;
            }
            return c;
        }
        return Dc(a, new P(b, this));
    }, wc = function (a) {
        a = a[pc];
        return a instanceof Q ? a : null;
    }, Fc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), uc = function (a) {
        if ("function" == da(a))
            return a;
        a[Fc] || (a[Fc] = function (b) {
            return a.handleEvent(b);
        });
        return a[Fc];
    };
    var R = function (a) {
        N.call(this);
        this.fa = a;
        this.b = {};
    };
    x(R, N);
    var Gc = [];
    R.prototype.ra = function (a, b, c, d) {
        u(b) || (b && (Gc[0] = b.toString()),
            b = Gc);
        for (var e = 0; e < b.length; e++) {
            var f = tc(a, b[e], c || this.handleEvent, d || !1, this.fa || this);
            if (!f)
                break;
            this.b[f.key] = f;
        }
        return this;
    };
    R.prototype.fb = function (a, b, c, d) {
        return Hc(this, a, b, c, d);
    };
    var Hc = function (a, b, c, d, e, f) {
        if (u(c))
            for (var h = 0; h < c.length; h++)
                Hc(a, b, c[h], d, e, f);
        else {
            b = sc(b, c, d || a.handleEvent, e, f || a.fa || a);
            if (!b)
                return a;
            a.b[b.key] = b;
        }
        return a;
    };
    R.prototype.Ha = function (a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++)
                this.Ha(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
                d = fa(d) ? !!d.capture : !!d,
                e = e || this.fa || this,
                c = uc(c),
                d = !!d,
                b = jc(a) ? a.pa(b, c, d, e) : a ? (a = wc(a)) ? a.pa(b, c, d, e) : null : null,
                b && (Bc(b),
                    delete this.b[b.key]);
    };
    R.prototype.Ua = function () {
        ta(this.b, function (a, b) {
            this.b.hasOwnProperty(b) && Bc(a);
        }, this);
        this.b = {};
    };
    R.prototype.w = function () {
        R.F.w.call(this);
        this.Ua();
    };
    R.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var S = function () {
        N.call(this);
        this.G = new Q(this);
        this.Cb = this;
        this.Ta = null;
    };
    x(S, N);
    S.prototype[ic] = !0;
    g = S.prototype;
    g.addEventListener = function (a, b, c, d) {
        tc(this, a, b, c, d);
    };
    g.removeEventListener = function (a, b, c, d) {
        Ac(this, a, b, c, d);
    };
    g.dispatchEvent = function (a) {
        var b, c = this.Ta;
        if (c)
            for (b = []; c; c = c.Ta)
                b.push(c);
        c = this.Cb;
        var d = a.type || a;
        if (m(a))
            a = new O(a, c);
        else if (a instanceof O)
            a.target = a.target || c;
        else {
            var e = a;
            a = new O(d, c);
            wa(a, e);
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.da && 0 <= f; f--) {
                var h = a.currentTarget = b[f];
                e = Ic(h, d, !0, a) && e;
            }
        a.da || (h = a.currentTarget = c,
            e = Ic(h, d, !0, a) && e,
            a.da || (e = Ic(h, d, !1, a) && e));
        if (b)
            for (f = 0; !a.da && f < b.length; f++)
                h = a.currentTarget = b[f],
                    e = Ic(h, d, !1, a) && e;
        return e;
    };
    g.w = function () {
        S.F.w.call(this);
        this.G && this.G.Ua(void 0);
        this.Ta = null;
    };
    g.ra = function (a, b, c, d) {
        return this.G.add(String(a), b, !1, c, d);
    };
    g.fb = function (a, b, c, d) {
        return this.G.add(String(a), b, !0, c, d);
    };
    g.Ha = function (a, b, c, d) {
        this.G.remove(String(a), b, c, d);
    };
    var Ic = function (a, b, c, d) {
        b = a.G.h[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.ja && h.capture == c) {
                var p = h.listener, w = h.za || h.src;
                h.wa && oc(a.G, h);
                e = !1 !== p.call(w, d) && e;
            }
        }
        return e && 0 != d.kb;
    };
    S.prototype.xa = function (a, b) {
        return this.G.xa(String(a), b);
    };
    S.prototype.pa = function (a, b, c, d) {
        return this.G.pa(String(a), b, c, d);
    };
    S.prototype.hasListener = function (a, b) {
        return this.G.hasListener(l(a) ? String(a) : void 0, b);
    };
    var Jc = function (a, b) {
        S.call(this);
        this.ga = a || 1;
        this.sa = b || k;
        this.Za = v(this.rc, this);
        this.eb = na();
    };
    x(Jc, S);
    g = Jc.prototype;
    g.enabled = !1;
    g.J = null;
    g.setInterval = function (a) {
        this.ga = a;
        this.J && this.enabled ? (this.stop(),
            this.start()) : this.J && this.stop();
    };
    g.rc = function () {
        if (this.enabled) {
            var a = na() - this.eb;
            0 < a && a < .8 * this.ga ? this.J = this.sa.setTimeout(this.Za, this.ga - a) : (this.J && (this.sa.clearTimeout(this.J),
                this.J = null),
                this.dispatchEvent("tick"),
                this.enabled && (this.stop(),
                    this.start()));
        }
    };
    g.start = function () {
        this.enabled = !0;
        this.J || (this.J = this.sa.setTimeout(this.Za, this.ga),
            this.eb = na());
    };
    g.stop = function () {
        this.enabled = !1;
        this.J && (this.sa.clearTimeout(this.J),
            this.J = null);
    };
    g.w = function () {
        Jc.F.w.call(this);
        this.stop();
        delete this.sa;
    };
    var Oc = function () {
        if (window.googleJsEnvironment && ("rhino" == window.googleJsEnvironment.environment || "jscore" == window.googleJsEnvironment.environment))
            return new Kc;
        if (Vb && window.external && "notify" in window.external)
            return new Lc;
        if (Ub && window.googleAdsJsInterface && "notify" in window.googleAdsJsInterface)
            try {
                return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"),
                    new Kc;
            }
            catch (a) { }
        else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler)
            return new Mc;
        return new Nc;
    }, Qc = function () {
        Pc || (Pc = Oc());
        return Pc;
    }, Pc = null, Rc = function () { };
    x(Rc, N);
    var Sc = function (a) {
        var b = "gmsg://mobileads.google.com/" + a.messageName;
        a = z(a.parameters);
        a["google.afma.Notify_dt"] = (new Date).getTime();
        var c = {};
        for (e in a) {
            var d = encodeURIComponent(String(e));
            c[d] = a[e];
        }
        var e = vb(c);
        return tb(b, e);
    }, Tc = function (a, b) {
        this.Ia = a;
        this.Hb = b || 1;
        this.Va = [];
        this.Ga = new Jc(this.Hb);
        this.Jb = new R(this);
        this.Jb.ra(this.Ga, "tick", this.lc);
        this.ac = !0;
    };
    x(Tc, Rc);
    Tc.prototype.sendMessage = function (a) {
        this.ac ? (this.Va.push(a),
            this.Ga.enabled || (a = this.Va.shift(),
                this.Ia(a),
                this.Ga.start())) : this.Ia(a);
    };
    Tc.prototype.lc = function () {
        var a = this.Va.shift();
        a ? this.Ia(a) : this.Ga.stop();
    };
    var Lc = function () { };
    x(Lc, Rc);
    Lc.prototype.sendMessage = function (a) {
        a = Sc(a);
        window.external.notify(a);
    };
    var Nc = function () {
        Tc.call(this, this.mc);
        this.Ba = [];
        this.Ca = 0;
    };
    x(Nc, Tc);
    Nc.prototype.mc = function (a) {
        var b = this.Ba[this.Ca];
        b || (b = document.createElement("IFRAME"),
            b.id = "afma-notify-" + (new Date).getTime(),
            b.style.display = "none",
            this.Ba[this.Ca] = b);
        this.Ca = (this.Ca + 1) % 25;
        a = Sc(a);
        b.src = a;
        b.parentNode || document.body.appendChild(b);
    };
    Nc.prototype.w = function () {
        this.Ba.forEach(fb);
        this.Ba = [];
        Nc.F.w.call(this);
    };
    var Kc = function () { };
    x(Kc, Rc);
    Kc.prototype.sendMessage = function (a) {
        a = Sc(a);
        window.googleAdsJsInterface.notify(a);
        window.googleAdsJsInterface.DEBUG && console.log(a);
    };
    var Mc = function () { };
    x(Mc, Rc);
    Mc.prototype.sendMessage = function (a) {
        a = Sc(a);
        window.webkit.messageHandlers.gadGMSGHandler.postMessage(a);
    };
    var Uc = function () {
        S.call(this);
        this.ta = Qc();
        this.ta = Qc();
        Yb(this, ma(Zb, this.ta));
        this.aa = {};
    };
    x(Uc, S);
    Uc.prototype.sendMessage = function (a, b) {
        var c;
        m(a) ? c = new $b(a, b) : a instanceof $b && (c = a);
        "loading" == document.readyState ? (a = v(this.ta.sendMessage, this.ta, c),
            sc(k, "DOMContentLoaded", a, !1, this)) : this.ta.sendMessage(c);
    };
    Uc.prototype.receiveMessage = function (a, b) {
        "onshow" == a && "loading" == document.readyState ? (a = v(Vc, k, a, b),
            sc(k, "DOMContentLoaded", a)) : this.dispatchEvent(new ac(new $b(a, b), this));
    };
    Uc.prototype.addObserver = function (a, b, c) {
        c = v(c, b);
        var d = v(function (e) {
            c(e.type, e.params);
        }, b);
        this.ra(a, d);
        this.aa[a] || (this.aa[a] = {});
        this.aa[a][b] = d;
    };
    Uc.prototype.removeObserver = function (a, b) {
        this.aa[a] && this.aa[a][b] && (this.Ha(a, this.aa[a][b]),
            delete this.aa[a][b]);
    };
    var T = function (a, b) {
        k.AFMA_Communicator ? k.AFMA_Communicator.sendMessage(a, b) : Wc(a, b);
    }, Wc = function (a, b) {
        "loading" == document.readyState ? (a = v(Wc, null, a, b),
            sc(k, "DOMContentLoaded", a, !1)) : (a = new $b(a, b),
            Qc().sendMessage(a));
    }, Vc = function (a, b) {
        k.AFMA_Communicator.receiveMessage(a, b);
    }, Xc = function (a, b, c, d) {
        k.AFMA_Communicator.removeEventListener(a, b, c, d);
    }, Yc = function (a, b, c, d) {
        k.AFMA_Communicator.addEventListener(a, b, c, d);
    }, U = function (a, b, c) {
        k.AFMA_Communicator.addObserver(a, b, c);
    }, V = function (a, b) {
        k.AFMA_Communicator.removeObserver(a, b);
    };
    k.AFMA_Communicator || (r("AFMA_AddEventListener", Yc, k),
        r("AFMA_RemoveEventListener", Xc, k),
        r("AFMA_AddObserver", U, k),
        r("AFMA_RemoveObserver", V, k),
        r("AFMA_ReceiveMessage", Vc, k),
        r("AFMA_SendMessage", T, k),
        k.AFMA_Communicator = new Uc);
    var Zc = {}, $c = {}, ad = {}, bd = function () {
        throw Error("Do not instantiate directly");
    };
    bd.prototype.Fb = null;
    bd.prototype.toString = function () {
        return this.content;
    };
    var cd = function () {
        bd.call(this);
    };
    x(cd, bd);
    cd.prototype.Ka = Zc;
    var dd = function (a) {
        function b(c) {
            this.content = c;
        }
        b.prototype = a.prototype;
        return function (c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Fb = d);
            return c;
        };
    }(cd), id = function (a) {
        null != a && a.Ka === Zc ? a = String(String(a.content).replace(ed, "").replace(fd, "&lt;")).replace(gd, hd) : (a = String(a),
            Ha.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")),
                -1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")),
                -1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")),
                -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;")),
                -1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;")),
                -1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;"))));
        return a;
    }, jd = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }, hd = function (a) {
        return jd[a];
    }, kd = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    }, ld = function (a) {
        return kd[a];
    }, gd = /[\x00\x22\x27\x3c\x3e]/g, md = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, nd = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, ed = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, fd = /</g;
    var od = function (a, b, c) {
        N.call(this);
        this.Sa = a;
        this.ga = b || 0;
        this.fa = c;
        this.Eb = v(this.Ib, this);
    };
    x(od, N);
    g = od.prototype;
    g.qa = 0;
    g.w = function () {
        od.F.w.call(this);
        this.stop();
        delete this.Sa;
        delete this.fa;
    };
    g.start = function (a) {
        this.stop();
        var b = this.Eb;
        a = l(a) ? a : this.ga;
        if ("function" != da(b))
            if (b && "function" == typeof b.handleEvent)
                b = v(b.handleEvent, b);
            else
                throw Error("Invalid listener argument");
        this.qa = 2147483647 < Number(a) ? -1 : k.setTimeout(b, a || 0);
    };
    g.stop = function () {
        0 != this.qa && k.clearTimeout(this.qa);
        this.qa = 0;
    };
    g.Ib = function () {
        this.qa = 0;
        this.Sa && this.Sa.call(this.fa);
    };
    var pd = !1, qd = function (a) {
        T("log", {
            string: "<Google:HTML> " + a
        });
    };
    r("google.afma.support.blockPageClosed", function () {
        T("delayPageClosed", {
            start: 1
        });
    }, void 0);
    r("google.afma.support.unblockPageClosed", function () {
        T("delayPageClosed", {
            stop: 1
        });
    }, void 0);
    r("google.afma.support.blockPageLoaded", function () {
        T("delayPageLoaded", {
            start: 1
        });
    }, void 0);
    var rd = function () {
        T("delayPageLoaded", {
            stop: 1
        });
    };
    r("google.afma.support.unblockPageLoaded", rd, void 0);
    r("google.afma.support.cancelPageLoaded", function () {
        M() && !Wb("9047000.0.0") ? rd() : T("delayPageLoaded", {
            cancel: 1
        });
    }, void 0);
    r("google.afma.support.disableBackButton", function (a) {
        T("backButton", {
            disabled: a
        });
    }, void 0);
    r("google.afma.support.notifyRewardedVideoStart", function () {
        T("reward", {
            action: "video_start"
        });
    }, void 0);
    r("google.afma.support.notifyRewardedVideoComplete", function () {
        T("reward", {
            action: "video_complete"
        });
    }, void 0);
    r("google.afma.support.grantReward", function (a) {
        var b = {
            action: "grant"
        };
        a ? (b.amount = a.amount,
            b.type = a.type) : b.amount = 0;
        T("reward", b);
    }, void 0);
    var sd = function (a) {
        if (a && 0 == a.lastIndexOf("intent:", 0)) {
            var b = a.indexOf("#Intent;");
            if (!(0 > b)) {
                var c = {
                    id: a,
                    url: a.substr(9, b - 9)
                };
                a = a.substr(b + 8).split(";");
                b = "";
                for (var d = 0; d < a.length; d++) {
                    var e = a[d].split("=");
                    if (2 == e.length)
                        switch (e[0]) {
                            case "package":
                                c.ca = e[1];
                                break;
                            case "action":
                                c.action = e[1];
                                break;
                            case "scheme":
                                b = e[1];
                        }
                }
                b && (c.url = b + "://" + c.url);
                return c;
            }
        }
    }, td = function (a, b, c) {
        a = {
            a: "webapp",
            u: a
        };
        b && (a.o = b);
        c && (a.custom_close = c ? 1 : 0);
        b = {
            id: "gmob-apps",
            event: "open-web-app"
        };
        .1 >= Math.random() && (c = wb(),
            bc(c, b));
        T("open", a);
    }, ud = function () {
        var a;
        Tb ? (l(Kb) || (Kb = (a = /CPU\s+(?:(?:i?OS)|(?:iPhone)|(?:iPhone\s+OS))\s+([0-9_|\.]+)/.exec(Qb())) && 2 == a.length ? a[1].replace(/_/g, ".") : ""),
            a = 0 <= B(Kb, 9)) : a = !1;
        return a;
    }, vd = function (a) {
        a = pb(a.match(ob)[5] || null);
        return /\.(3gp|m3u8|mkv|mov|mp4|m4v|ts|webm)$/i.test(a);
    }, wd = function (a) {
        if (M()) {
            if (a = {
                id: Oa(),
                action: "android.intent.action.VIEW",
                url: a,
                mimeType: "video/*"
            },
                M()) {
                var b = {
                    a: "intent",
                    u: a.url
                };
                if (0 == a.url.lastIndexOf("intent://", 0)) {
                    b.intent_url = a.url;
                    var c = sd(a.url);
                    c && (c.url && (b.u = c.url),
                        c.action && (b.i = c.action),
                        c.ca && (b.p = c.packageName));
                }
                a.action && (b.i = a.action);
                a.mimeType && (b.m = a.mimeType);
                a.ca && (b.p = a.ca);
                a.flags && (b.f = a.flags);
                T("open", b);
            }
        }
        else
            J() ? (null != a && a.Ka === $c || null != a && a.Ka === ad ? a = String(a).replace(md, ld) : a instanceof Ka ? a = String(La(a).toString()).replace(md, ld) : a instanceof ya ? a = String(za(a).toString()).replace(md, ld) : (a = String(a),
                a = nd.test(a) ? a.replace(md, ld) : "about:invalid#zSoyz"),
                a = {
                    a: "webapp",
                    html: dd('<!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="user-scalable=no initial-scale=1.0 width=device-width"><script>function resizeVid() {var vid = document.getElementById(\'vid\'); var windowHeight = window.innerHeight; vid.style.height = String(windowHeight) + \'px\';}window.addEventListener(\'orientationchange\', resizeVid, false);\x3c/script><style>body {margin: 0px; padding: 0px;}video {position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; margin: 0px; padding: 0px;}</style><video width="100%" controls autoplay webkit-playsinline id="vid" onloadedmetadata="resizeVid();"><source src="' + id(a) + '"></video>').toString()
                },
                T("open", a)) : td(a);
    };
    r("google.afma.support.canOpenURLs", function (a, b, c, d) {
        var e = c || function () { };
        c = d || 500;
        var f = a instanceof Array ? a : [a];
        if (ud()) {
            a = {};
            for (c = 0; c < f.length; ++c)
                a[f[c]] = !0;
            b("openableURLs", a);
        }
        else {
            a = f.join(",");
            var h = !1, p = function (w) {
                Xc("openableURLs", p);
                if (!h) {
                    h = !0;
                    for (var q = z(w.params), t = 0; t < f.length; ++t) {
                        var y = f[t], K = decodeURIComponent(y.replace(/\+/g, " "));
                        K = q[K];
                        null != K && (q[y] = K);
                    }
                    b(w.type, q);
                }
            };
            Yc("openableURLs", p);
            T("canOpenURLs", {
                urls: a
            });
            setTimeout(function () {
                h || (h = !0,
                    e());
            }, c);
        }
    }, void 0);
    r("google.afma.support.canOpenIntents", function (a, b, c, d) {
        if (!M())
            return !1;
        var e = c || function () { };
        c = d || 500;
        var f = !1, h = {}, p = function (K) {
            Xc("openableIntents", p);
            if (!f) {
                f = !0;
                var la = z(K.params), L = {}, W;
                for (W in la)
                    L[h[W]] = la[W];
                b(K.type, L);
            }
        };
        d = [];
        for (var w = 0; w < a.length; ++w) {
            var q = a[w], t = Pa(q.id).toString();
            h[t] = q.id;
            t = {
                id: t
            };
            q.url && (t.u = q.url);
            if (q.url && (0 == q.url.lastIndexOf("intent:", 0) || 0 == q.url.lastIndexOf("Intent#", 0))) {
                t.intent_url = q.url;
                delete t.u;
                var y = sd(q.url);
                y && (y.url && (t.u = y.url),
                    y.ca && (t.p = y.ca),
                    y.action && (t.i = y.action));
            }
            q.mimeType && (t.m = q.mimeType);
            q.ca && (t.p = q.ca);
            q.action && (t.i = q.action);
            d.push(t);
        }
        a = {
            intents: d
        };
        Yc("openableIntents", p);
        T("canOpenIntents", {
            data: JSON.stringify(a)
        });
        setTimeout(function () {
            f || (f = !0,
                e());
        }, c);
        return !0;
    }, void 0);
    r("google.afma.support.trackActiveViewUnit", function () {
        T("trackActiveViewUnit");
    }, void 0);
    r("google.afma.support.untrackActiveViewUnit", function () {
        T("untrackActiveViewUnit");
    }, void 0);
    r("google.afma.support.sendInstrumentGmsg", function (a) {
        T("instrument", a);
    }, void 0);
    pd = !1;
    Yc("onshow", function () { });
    Yc("onhide", function () {
        pd = !0;
    });
    var xd = function (a, b, c, d) {
        this.gb = a;
        this.tc = b;
        this.Db = c;
        this.lb = d;
        this.P = this.S = this.Z = this.$ = !1;
        this.hb = new od(this.Tb.bind(this), 200);
    }, yd = function (a) {
        return a.$ || a.Z || a.S || a.P;
    };
    xd.prototype.Qb = function (a) {
        a = ((a || {}).units || [])[0] || {};
        var b = null, c = 0;
        if (this.$ || this.S) {
            var d = null != a.isVisible ? a.isVisible : !0, e = null != a.isPaused ? a.isPaused : !1;
            if ((null != a.isScreenOn ? a.isScreenOn : 1) && !e && d) {
                e = a.adBox || {};
                d = Math.round(e.top);
                var f = Math.round(e.right), h = Math.round(e.bottom);
                e = Math.round(e.left);
                var p = f - e, w = h - d;
                f = new D(d, f, h, e);
                var q = a.globalVisibleBox || {};
                h = Math.round(q.top);
                var t = Math.round(q.right), y = Math.round(q.bottom);
                q = Math.round(q.left);
                var K = t - q, la = y - h;
                t = new D(h, t, y, q);
                var L = a.localVisibleBox || {};
                y = Math.round(L.top);
                var W = Math.round(L.right), ca = Math.round(L.bottom);
                L = Math.round(L.left);
                var Rb = W - L, Sb = ca - y;
                W = new D(y, W, ca, L);
                ca = f.clone();
                ca.translate(-ca.left, -ca.top);
                0 < K && 0 < la && gb(f, t) ? (b = {
                    x: q - e,
                    y: h - d,
                    width: K,
                    height: la
                },
                    c = 100 * K * la / (p * w)) : 0 < Rb && 0 < Sb && gb(ca, W) && (b = {
                    x: L,
                    y: y,
                    width: Rb,
                    height: Sb
                },
                    c = 100 * Rb * Sb / (p * w));
            }
        }
        d = null;
        this.P && (d = zd(a));
        e = null;
        if (this.Z || this.S)
            p = a.appVolume,
                w = a.deviceVolume,
                a.appMuted ? e = 0 : n(p) ? (e = 100 * p,
                    n(w) && (e *= w)) : n(w) && (e = 100 * w),
                e && (e = Math.min(100, Math.max(0, e)));
        this.S && this.gb(null != b ? b : {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, e);
        this.Z && this.Db(e);
        this.$ && this.tc(c, b, null);
        this.P && d && this.lb(d.scrollableContainerRectangle, d.creativeRectangle);
        this.hb.stop();
        yd(this) && M() && this.hb.start();
    };
    xd.prototype.Wb = function (a) {
        a = ((a || {}).units || [])[0] || {};
        this.P && (a = zd(a),
            this.P && a && this.lb(a.scrollableContainerRectangle, a.creativeRectangle));
    };
    xd.prototype.Tb = function () {
        yd(this) && Ad();
    };
    var Bd = function (a) {
        yd(a) ? Ad() : (window.AFMA_updateActiveView = a.Qb.bind(a),
            window.AFMA_updateActiveViewScroll = a.Wb.bind(a),
            T("trackActiveViewUnit"));
    }, Cd = function (a) {
        yd(a) || (T("untrackActiveViewUnit"),
            window.AFMA_updateActiveView = sa,
            window.AFMA_updateActiveViewScroll = sa);
    }, Ad = function () {
        T("updateActiveView");
    }, zd = function (a) {
        if (a && a.scrollableContainerBoxes && a.adBox) {
            var b = a.adBox, c = Math.round(b.left), d = Math.round(b.top), e = Math.round(b.right) - c, f = Math.round(b.bottom) - d, h = null;
            a = a.scrollableContainerBoxes;
            if (1 == a.length)
                h = a[0];
            else if (1 < a.length) {
                var p = 0, w = Math.round(b.bottom) - Math.round(b.top);
                for (b = 0; b < a.length; b++) {
                    var q = a[b], t = Math.round(q.bottom) - Math.round(q.top);
                    w = t / w;
                    w > p && (h = q,
                        p = w);
                    w = t;
                }
            }
            if (h)
                return a = Math.round(h.left),
                    p = Math.round(h.top),
                    {
                        scrollableContainerRectangle: {
                            x: a,
                            y: p,
                            width: Math.round(h.right) - a,
                            height: Math.round(h.bottom) - p
                        },
                        creativeRectangle: {
                            x: c,
                            y: d,
                            width: e,
                            height: f
                        }
                    };
        }
    };
    var Dd = {
        READY: "ready",
        ERROR: "error",
        STATE_CHANGE: "stateChange",
        VIEWABLE_CHANGE: "viewableChange",
        SIZE_CHANGE: "sizeChange",
        EXPOSURE_CHANGE: "exposureChange",
        VOLUME_CHANGE: "audioVolumeChange"
    };
    r("mraid.EventType", Dd, void 0);
    var Ed = {
        LOADING: "loading",
        DEFAULT: "default",
        EXPANDED: "expanded",
        HIDDEN: "hidden",
        RESIZED: "resized"
    };
    r("mraid.StateType", Ed, void 0);
    var Fd = {
        INLINE: "inline",
        INTERSTITIAL: "interstitial"
    };
    r("mraid.PlacementType", Fd, void 0);
    var Gd = {
        WIDTH: "width",
        HEIGHT: "height",
        USE_CUSTOM_CLOSE: "useCustomClose",
        IS_MODAL: "isModal"
    };
    r("mraid.ExpandProperty", Gd, void 0);
    var Hd = {
        SMS: "sms",
        TEL: "tel",
        CALENDAR: "calendar",
        STOREPICTURE: "storePicture",
        INLINEVIDEO: "inlineVideo",
        VPAID: "vpaid",
        LOCATION: "location"
    };
    r("mraid.Features", Hd, void 0);
    var Id = {
        WIDTH: "width",
        HEIGHT: "height",
        OFFSET_X: "offsetX",
        OFFSET_Y: "offsetY",
        CUSTOM_CLOSE_POSITION: "customClosePosition",
        ALLOW_OFF_SCREEN: "allowOffscreen"
    };
    r("mraid.ResizeProperties", Id, void 0);
    var Jd = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        CENTER: "center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center"
    };
    r("mraid.ClosePosition", Jd, void 0);
    var Kd = {
        X: "x",
        Y: "y",
        WIDTH: "width",
        HEIGHT: "height"
    };
    r("mraid.AdPositionProperty", Kd, void 0);
    r("mraid.CalendarEventParameters", {
        DESCRIPTION: "description",
        START: "start",
        END: "end",
        SUMMARY: "summary",
        LOCATION: "location"
    }, void 0);
    var Ld = {
        ALLOW_ORIENTATION_CHANGE: "allowOrientationChange",
        FORCE_ORIENTATION: "forceOrientation"
    };
    r("mraid.OrientationProperties", Ld, void 0);
    var Md = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape",
        NONE: "none"
    };
    r("mraid.OrientationTypes", Md, void 0);
    var X = function (a, b) {
        N.call(this);
        this.Ra = !1;
        this.B = 50;
        this.Zb = 0 <= B(3, "2.0");
        this.ab = new R(this);
        Yb(this, ma(Zb, this.ab));
        this.L = new S;
        Yb(this, ma(Zb, this.L));
        this.Ya = "loading";
        this.ha = b || "inline";
        this.U = {};
        this.U.useCustomClose = !1;
        this.U.isModal = !0;
        this.Xa();
        this.j = null;
        Nd(this);
        Od(this);
        this.N = {};
        this.N.sms = !1;
        this.N.tel = !1;
        this.N.storePicture = !1;
        this.N.calendar = !1;
        this.N.inlineVideo = !1;
        this.N.vpaid = !1;
        this.N.location = !1;
        Pd(this);
        this.K = {};
        this.K.x = 0;
        this.K.y = 0;
        this.K.width = 0;
        this.K.height = 0;
        this.La = z(this.K);
        this.Da = {};
        this.Da.allowOrientationChange = !0;
        this.Da.forceOrientation = "none";
        this.yb = "afma-sdk-";
    };
    x(X, N);
    ba(X);
    X.prototype.nb = "default";
    X.prototype.zb = Ed;
    X.prototype.StateType = X.prototype.zb;
    X.prototype.qb = Dd;
    X.prototype.EventType = X.prototype.qb;
    X.prototype.vb = Fd;
    X.prototype.PlacementType = X.prototype.vb;
    X.prototype.rb = Gd;
    X.prototype.ExpandProperty = X.prototype.rb;
    X.prototype.sb = Hd;
    X.prototype.Features = X.prototype.sb;
    X.prototype.pb = Kd;
    X.prototype.AdPositionProperty = X.prototype.pb;
    X.prototype.wb = Id;
    X.prototype.ResizeProperties = X.prototype.wb;
    X.prototype.ob = Jd;
    X.prototype.ClosePosition = X.prototype.ob;
    X.prototype.tb = Ld;
    X.prototype.OrientationProperties = X.prototype.tb;
    X.prototype.ub = Md;
    X.prototype.OrientationTypes = X.prototype.ub;
    var Rd = function (a, b) {
        b ? (a.Fa = a.ic(b.js),
            J() && (Pb = a.Fa)) : a.Fa = "0.0.0";
        if (Wb("9800000.0.0") || Xb("7.13"))
            a.j = new xd(v(a.kc, a), v(a.oc, a), v(a.jc, a), v(a.nc, a)),
                a.AFMA_LIDAR = "AFMA_LIDAR_1",
                a.AFMA_LIDAR_EXP_1 = !1,
                a.GMA_SCROLL_CHANGE = "gmaScrollChange";
        a.Xa();
        Qd(a, a.nb, !0);
        document.body.style.margin = "0px";
        document.body.style.padding = "0px";
        a.dispatchEvent("ready");
        a.dispatchEvent("stateChange", {
            state: a.nb
        });
    };
    X.prototype.la = function (a) {
        Qd(this, a);
    };
    X.prototype.changeState = X.prototype.la;
    var Qd = function (a, b, c) {
        var d = a.getState();
        if (a.Ya != b || "resized" == b)
            a.Ya = b,
                c || a.dispatchEvent("stateChange", {
                    state: b
                });
        switch (b) {
            case "default":
                "loading" == d ? Sd(a, a.K) : Td(a, a.K);
                break;
            case "expanded":
                Td(a, {
                    x: 0,
                    y: 0,
                    width: a.W().width,
                    height: a.W().height
                });
        }
    };
    X.prototype.Aa = function () {
        return this.Ra;
    };
    X.prototype.isViewable = X.prototype.Aa;
    var Ud = function (a, b) {
        b != a.Ra && (a.Ra = b,
            a.dispatchEvent("viewableChange", {
                viewable: b
            }));
    };
    X.prototype.v = function () {
        return window.MRAID_ENV ? window.MRAID_ENV.version : 0 <= B(3, "2.0") && (M() && 0 <= B(this.Fa, "7200000.0.0") || J() && 0 <= B(this.Fa, "7.2.0")) ? "2.0" : "1.0";
    };
    X.prototype.getVersion = X.prototype.v;
    var Wd = function (a, b) {
        var c = "mraid__listenerWrapper_" + (b ? b[ha] || (b[ha] = ++ia) : "");
        return a[c] || (a[c] = ma(Vd, b, a));
    };
    X.prototype.addEventListener = function (a, b, c, d) {
        b = Wd(b, d);
        tc(this.L, a, b, c, d);
        this.j && "AFMA_LIDAR_1" === a ? (a = this.j,
            b = this.AFMA_LIDAR_EXP_1 ? !0 : !1,
            a.S ? Ad() : (Bd(a),
                b && a.gb(null, null),
                a.S = !0)) : this.j && "exposureChange" === a ? (a = this.j,
            a.$ ? Ad() : (Bd(a),
                a.$ = !0)) : this.j && "audioVolumeChange" === a ? (a = this.j,
            a.Z ? Ad() : (Bd(a),
                a.Z = !0)) : this.j && "gmaScrollChange" === a && (a = this.j,
            a.P ? Ad() : (Bd(a),
                a.P = !0));
    };
    X.prototype.addEventListener = X.prototype.addEventListener;
    var Vd = function (a, b, c) {
        switch (c.type) {
            case "stateChange":
                b.call(a, c.params.state);
                break;
            case "ready":
                b.call(a);
                break;
            case "error":
                b.call(a, c.params.message, c.params.action);
                break;
            case "viewableChange":
                b.call(a, c.params.viewable);
                break;
            case "sizeChange":
                b.call(a, c.params.width, c.params.height);
                break;
            case "exposureChange":
                b.call(a, c.params.exposedPercentage, c.params.visibleRectangle, c.params.occlusionRectangles);
                break;
            case "audioVolumeChange":
                b.call(a, c.params.volumePercentage);
                break;
            case "AFMA_LIDAR_1":
                b.call(a, c.params.exposure, c.params.audioVolume);
                break;
            case "gmaScrollChange":
                b.call(a, c.params.scrollableContainerRectangle, c.params.creativeRectangle);
        }
    };
    X.prototype.removeEventListener = function (a, b, c, d) {
        if (a) {
            if (b)
                b = Wd(b, d),
                    Ac(this.L, a, b, c, d);
            else
                for (b = this.L,
                    c = c || !1,
                    c = jc(b) ? b.xa(a, c) : b ? (b = wc(b)) ? b.xa(a, c) : [] : [],
                    b = c.length,
                    d = 0; d < b; d++)
                    Bc(c[d]);
            this.j && "AFMA_LIDAR_1" === a && !Cc(this.L, "AFMA_LIDAR_1") ? (a = this.j,
                a.S && (a.S = !1,
                    Cd(a))) : this.j && "exposureChange" === a && !Cc(this.L, "exposureChange") ? (a = this.j,
                a.$ && (a.$ = !1,
                    Cd(a))) : this.j && "audioVolumeChange" === a && !Cc(this.L, "audioVolumeChange") ? (a = this.j,
                a.Z && (a.Z = !1,
                    Cd(a))) : this.j && "gmaScrollChange" === a && !Cc(this.L, "gmaScrollChange") && (a = this.j,
                a.P && (a.P = !1,
                    Cd(a)));
        }
    };
    X.prototype.removeEventListener = X.prototype.removeEventListener;
    X.prototype.getState = function () {
        return this.Ya;
    };
    X.prototype.getState = X.prototype.getState;
    X.prototype.Lb = function () {
        return this.ha;
    };
    X.prototype.getPlacementType = X.prototype.Lb;
    X.prototype.expand = function (a) {
        if ("default" == this.getState() || "resized" == this.getState()) {
            var b = this.bb(), c = void 0;
            if (0 <= B(this.v(), "2.0")) {
                var d = this.Na();
                if (!d.allowOrientationChange)
                    switch (d.forceOrientation) {
                        case "portrait":
                            c = "p";
                            break;
                        case "landscape":
                            c = "l";
                            break;
                        case "none":
                            c = "c";
                    }
            }
            a ? (U("notifyBannerOfCollapse", this, v(this.Pb, this)),
                td(a, c, b.useCustomClose)) : (a = b.useCustomClose,
                b = {
                    a: "expand"
                },
                c && (b.o = c),
                a && (b.custom_close = a ? 1 : 0),
                T("open", b));
        }
    };
    X.prototype.expand = X.prototype.expand;
    X.prototype.dispatchEvent = function (a, b) {
        this.L.dispatchEvent(new Xd(a, b, this.L));
    };
    X.prototype.mb = function (a) {
        for (var b in a)
            "isModal" == b ? this.dispatchEvent("error", {
                message: "isModal is a readonly property.",
                action: "setExpandProperties"
            }) : this.U[b] = a[b];
    };
    X.prototype.setExpandProperties = X.prototype.mb;
    X.prototype.bb = function () {
        var a = this.U;
        this.U.width && this.U.height || (a = {},
            a.width = this.W().width,
            a.height = this.W().height,
            wa(a, this.U));
        return a;
    };
    X.prototype.getExpandProperties = X.prototype.bb;
    X.prototype.Xa = function () {
        this.gc = new eb(Math.max(screen.width, screen.availWidth), Math.max(screen.height, screen.availHeight));
    };
    X.prototype.W = function () {
        return this.hc || this.gc;
    };
    X.prototype.getScreenSize = X.prototype.W;
    X.prototype.cb = function () {
        return this.bc || this.W();
    };
    X.prototype.getMaxSize = X.prototype.cb;
    X.prototype.close = function () {
        this.Ja();
    };
    X.prototype.close = X.prototype.close;
    X.prototype.Ja = function () {
        switch (this.getState()) {
            case "default":
                Qd(this, "hidden");
                break;
            case "expanded":
                Qd(this, "default");
                break;
            case "resized":
                T("mraid", {
                    a: "closeResizedAd"
                });
        }
    };
    X.prototype.useCustomClose = function (a) {
        var b = {};
        b.useCustomClose = !!a;
        this.mb(b);
        pd || T("customClose", {
            custom_close: a ? 1 : 0
        });
    };
    X.prototype.useCustomClose = X.prototype.useCustomClose;
    X.prototype.open = X.prototype.open;
    var Xd = function (a, b, c) {
        O.call(this, a, c);
        this.params = b;
    };
    x(Xd, O);
    X.prototype.supports = function (a) {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "supports");
        else
            return this.N[a];
    };
    X.prototype.supports = X.prototype.supports;
    var Pd = function (a) {
        a.ka = {};
        a.ka.customClosePosition = "top-right";
        a.ka.allowOffscreen = !0;
    };
    X.prototype.pc = function (a) {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "setResizeProperties"),
                Pd(this);
        else {
            for (var b in a)
                this.ka[b] = a[b];
            Yd(this, this.ka, this.jb, "setResizeProperties", !0) ? Zd(this, this.ka) || (Y(this, "resizeProperties are not valid", "setResizeProperties"),
                Pd(this)) : Pd(this);
        }
    };
    X.prototype.setResizeProperties = X.prototype.pc;
    var Y = function (a, b, c) {
        a.dispatchEvent("error", {
            message: b,
            action: c
        });
    };
    X.prototype.ya = function () {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "getResizeProperties");
        else
            return z(this.ka);
    };
    X.prototype.getResizeProperties = X.prototype.ya;
    X.prototype.resize = function () {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "resize");
        else if ("inline" != this.ha)
            Y(this, "Placement type not supported.", "resize");
        else if ("expanded" == this.getState())
            Y(this, "Cannot resize an expanded ad.", "resize");
        else if ("hidden" != this.getState() && "loading" != this.getState()) {
            var a = this.ya();
            Yd(this, a, this.jb, "resize", !0) ? Zd(this, this.ya()) ? (a = this.ya()) ? (a.a = "resize",
                T("mraid", a)) : qd("No properties set to resize.") : Y(this, "resizeProperties are not valid", "resize") : Y(this, "resizeProperties are not valid.", "resize");
        }
    };
    X.prototype.resize = X.prototype.resize;
    var Zd = function (a, b) {
        var c = a.cb();
        if (b.hasOwnProperty("allowOffscreen") && !b.allowOffscreen)
            return b.width > c.width || b.height > c.height ? !1 : !0;
        var d = a.Ma().x, e = a.Ma().y;
        d += b.offsetX;
        e += b.offsetY;
        var f = b.customClosePosition, h = b.width;
        b = b.height;
        "top-left" != f && ("top-center" == f ? d += (h - a.B) / 2 : "center" == f ? (d += (h - a.B) / 2,
            e += (b - a.B) / 2) : "bottom-left" == f ? e += b - a.B : "bottom-right" == f ? (d += h - a.B,
            e += b - a.B) : "bottom-center" == f ? (d += (h - a.B) / 2,
            e += b - a.B) : d += h - a.B);
        return 0 > d || d + a.B > c.width || 0 > e || e + a.B > c.height ? !1 : !0;
    }, Yd = function (a, b, c, d, e) {
        if (e) {
            if (!b || null == b)
                return Y(a, "Required object missing.", d),
                    !1;
            for (var f in c)
                if (!l(b[f]))
                    return Y(a, "Object missing required property " + f, d),
                        !1;
        }
        for (var h in b) {
            if (!c[h])
                return Y(a, "Invalid property specified - " + h + ".", d),
                    !1;
            e = c[h](b[h]);
            if (!e.l)
                return Y(a, "Value of property " + h + " is " + e.s + ".", d),
                    !1;
        }
        return !0;
    }, Nd = function (a) {
        var b = a.B;
        a.jb = {
            width: function (c) {
                var d = {
                    l: !0,
                    s: ""
                };
                isNaN(c) ? (d.l = !1,
                    d.s = "not a number") : c < b && (d.l = !1,
                    d.s = "too small");
                return d;
            },
            height: function (c) {
                var d = {
                    l: !0,
                    s: ""
                };
                isNaN(c) ? (d.l = !1,
                    d.s = "not a number") : c < b && (d.l = !1,
                    d.s = "too small");
                return d;
            },
            offsetX: function (c) {
                return {
                    l: !isNaN(c),
                    s: isNaN(c) ? "not a number" : ""
                };
            },
            offsetY: function (c) {
                return {
                    l: !isNaN(c),
                    s: isNaN(c) ? "not a number" : ""
                };
            },
            allowOffscreen: function (c) {
                var d = {
                    l: !0,
                    s: ""
                };
                void 0 !== c && "boolean" != typeof c && (d.l = !1,
                    d.s = "not a valid type");
                return d;
            },
            customClosePosition: function (c) {
                var d = {
                    l: !0,
                    s: ""
                };
                if (void 0 === c)
                    return d;
                for (var e in Jd)
                    if (c === Jd[e])
                        return d;
                d.l = !1;
                d.s = "not a valid option";
                return d;
            }
        };
    };
    X.prototype.dc = function (a) {
        0 > B(this.v(), "2.0") ? Y(this, "Method not supported by this version.", "playVideo") : vd(a) ? wd(a) : Y(this, "Video type not recognized.", "playVideo");
    };
    X.prototype.playVideo = X.prototype.dc;
    var $d = function (a, b) {
        for (var c in b)
            a.K.hasOwnProperty(c) && (a.K[c] = b[c]);
        "default" == a.getState() && Sd(a, b);
    };
    X.prototype.Ma = function () {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "getDefaultPosition");
        else
            return z(this.K);
    };
    X.prototype.getDefaultPosition = X.prototype.Ma;
    var Sd = function (a, b) {
        for (var c in b)
            a.La.hasOwnProperty(c) && (a.La[c] = b[c]);
    };
    X.prototype.getCurrentPosition = function () {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "getCurrentPosition");
        else
            return z(this.La);
    };
    X.prototype.getCurrentPosition = X.prototype.getCurrentPosition;
    var Td = function (a, b) {
        Sd(a, b);
        a.dispatchEvent("sizeChange", {
            width: b.width,
            height: b.height
        });
    };
    X.prototype.Gb = function (a) {
        0 > B(this.v(), "2.0") ? Y(this, "Method not supported by this version.", "createCalendarEvent") : a ? a ? (a.a = "createCalendarEvent",
            a.hasOwnProperty("start") && (a.start_ticks = (new Date(a.start)).getTime()),
            a.hasOwnProperty("end") && (a.end_ticks = (new Date(a.end)).getTime()),
            T("mraid", a)) : qd("No parameters set.") : Y(this, "Cannot create an empty event.", "createCalendarEvent");
    };
    X.prototype.createCalendarEvent = X.prototype.Gb;
    X.prototype.qc = function (a) {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "storePicture");
        else if (a) {
            var b = pb(a.match(ob)[5] || null);
            /\.(png|gif|jpg|bmp|webp)$/i.test(b) ? /^[\s\xa0]*$/.test(null == a ? "" : String(a)) ? qd("No image url.") : (b = {
                a: "storePicture"
            },
                b.iurl = a,
                T("mraid", b)) : Y(this, "Image url not recognized.", "storePicture");
        }
        else
            Y(this, "Invalid image url.", "storePicture");
    };
    X.prototype.storePicture = X.prototype.qc;
    X.prototype.Na = function () {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "getOrientationProperties");
        else
            return z(this.Da);
    };
    X.prototype.getOrientationProperties = X.prototype.Na;
    X.prototype.setOrientationProperties = function (a) {
        if (0 > B(this.v(), "2.0"))
            Y(this, "Method not supported by this version.", "setOrientationProperties");
        else if (Yd(this, a, this.cc, "setOrientationProperties", !1)) {
            for (var b in Ld) {
                var c = Ld[b];
                a.hasOwnProperty(c) && (this.Da[c] = a[c]);
            }
            if ("expanded" == this.getState() || "interstitial" == this.ha)
                (a = this.Na()) ? (a.a = "setOrientationProperties",
                    T("mraid", a)) : qd("No properties set to setOrientationProperties.");
        }
        else
            Y(this, "setOrientationProperties called with invalid options.", "setOrientationProperties");
    };
    X.prototype.setOrientationProperties = X.prototype.setOrientationProperties;
    var Od = function (a) {
        a.cc = {
            allowOrientationChange: function (b) {
                var c = {
                    l: !0,
                    s: ""
                };
                !0 !== b && !1 !== b && (c.l = !1,
                    c.s = "not a valid type");
                return c;
            },
            forceOrientation: function (b) {
                var c = {
                    l: !0,
                    s: ""
                }, d;
                for (d in Md)
                    if (b === Md[d])
                        return c;
                c.l = !1;
                c.s = "not a valid option";
                return c;
            }
        };
        X.prototype.ic = function (b) {
            if (!b || 0 != b.lastIndexOf(this.yb, 0))
                return "0.0.0";
            var c = b.lastIndexOf("v");
            return -1 < c ? b.substr(c + 1) : "0.0.0";
        };
    };
    g = X.prototype;
    g.kc = function (a, b) {
        this.dispatchEvent("AFMA_LIDAR_1", {
            exposure: a,
            audioVolume: b
        });
    };
    g.oc = function (a, b, c) {
        this.dispatchEvent("exposureChange", {
            exposedPercentage: a,
            visibleRectangle: b,
            occlusionRectangles: c
        });
    };
    g.jc = function (a) {
        this.dispatchEvent("audioVolumeChange", {
            volumePercentage: a
        });
    };
    g.nc = function (a, b) {
        this.dispatchEvent("gmaScrollChange", {
            scrollableContainerRectangle: a,
            creativeRectangle: b
        });
    };
    g.sc = function () {
        0 > B(this.v(), "3.0") || (this.ib(),
            T("mraid", {
                a: "unload"
            }));
    };
    X.prototype.unload = X.prototype.sc;
    X.prototype.ib = function () { };
    var ae = function (a, b) {
        X.call(this, a, b);
        U("onAdVisibilityChanged", this, v(this.Rb, this));
        U("onDefaultPositionReceived", this, v(this.Mb, this));
        U("onDeviceFeaturesReceived", this, v(this.Nb, this));
        U("onScreenInfoChanged", this, v(this.Sb, this));
        U("onSizeChanged", this, v(this.Xb, this));
        U("onStateChanged", this, v(this.Yb, this));
        Wb("9800000.0.0") || (U("onshow", this, v(this.Pa, this)),
            U("onhide", this, v(this.Oa, this)));
        U("onError", this, v(this.Ob, this));
        0 <= B(3, "2.0") ? (U("onReadyEventReceived", this, v(this.Vb, this)),
            U("onPositionChanged", this, v(this.Ub, this))) : Rd(this);
        this.ab.ra(k, "resize", this.Xa);
    };
    x(ae, X);
    ba(ae);
    g = ae.prototype;
    g.w = function () {
        ae.F.w.call(this);
        V("onAdVisibilityChanged", this);
        V("onDefaultPositionReceived", this);
        V("onDeviceFeaturesReceived", this);
        V("onPositionChanged", this);
        V("onReadyEventReceived", this);
        V("onScreenInfoChanged", this);
        V("onSizeChanged", this);
        V("onStateChanged", this);
        V("onhide", this);
        V("onshow", this);
        V("onError", this);
    };
    g.Pa = function () {
        Ud(this, !0);
    };
    g.Sb = function (a, b) {
        a = b.width;
        var c = b.height, d = b.maxSizeWidth, e = b.maxSizeHeight, f = b.isOrientationLandscape, h = b.forcedOrientation;
        b = b.rotation;
        if (J() && (1 == f && "p" == h || 0 == f && "l" == h) || M() && (1 == b || 3 == b))
            b = a,
                a = c,
                c = b,
                b = d,
                d = e,
                e = b;
        this.hc = new eb(a, c);
        n(d) && n(e) && (this.bc = new eb(d, e));
        a = this.W();
        "interstitial" === this.ha && $d(this, {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        });
        "expanded" !== this.getState() && "interstitial" !== this.ha || Td(this, {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        });
    };
    g.Oa = function () {
        "interstitial" == this.ha && Ud(this, !1);
    };
    g.Rb = function (a, b) {
        Ud(this, "1" == b.isVisible || "1" == b.visible || "true" == b.isVisible || 1 == b.visible);
    };
    g.open = function (a) {
        l(Nb) || (Nb = J() || M());
        if (Nb)
            if (!/^https?:\/\//.test(a) || /^https?:\/\/((itunes)|(phobos))\.apple\.com\//.test(a) || /^https?:\/\/market\.android\.com\//.test(a) || /^https?:\/\/play\.google\.com\//.test(a) || /^https?:\/\/maps\.google\.com\//.test(a) && J())
                a = a.match(/^\/\//) ? "http:" + a : a,
                    T("open", {
                        a: "app",
                        u: a
                    });
            else if (M() && vd(a))
                wd(a);
            else {
                var b = {
                    id: "gmob-apps",
                    event: "open-browser"
                };
                if (.1 >= Math.random()) {
                    var c = wb();
                    bc(c, b);
                }
                T("open", {
                    a: "browser",
                    u: a
                });
            }
        else
            window.open(a, "_blank");
    };
    g.Nb = function (a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (this.N[c] = b[c]);
    };
    g.Mb = function (a, b) {
        $d(this, b);
    };
    g.Vb = function (a, b) {
        Rd(this, b);
    };
    g.Xb = function (a, b) {
        Td(this, b);
    };
    g.Yb = function (a, b) {
        if (b) {
            a = b.state;
            for (var c in Ed)
                Ed[c] == a && this.la(a);
        }
    };
    g.Ub = function (a, b) {
        $d(this, b);
    };
    g.Ob = function (a, b) {
        this.dispatchEvent("error", b);
    };
    r("AFMA_notifyMRAIDLoaded", function () {
        setTimeout(function () {
            T("mraidLoaded");
        }, 100);
    }, void 0);
    var Z = function () {
        ae.call(this, !1, "inline");
    };
    x(Z, ae);
    ba(Z);
    Z.prototype.Aa = function () {
        return this.Zb ? Z.F.Aa.call(this) : !0;
    };
    Z.prototype.isViewable = Z.prototype.Aa;
    Z.prototype.Ja = function () {
        Z.F.Ja.call(this);
        T("close", void 0);
    };
    Z.prototype.Pa = function () {
        Z.F.Pa.call(this);
        Xb("7.5.0") || this.la("expanded");
    };
    Z.prototype.Oa = function () {
        Z.F.Oa.call(this);
        Xb("7.5.0") || this.la("default");
    };
    ae.prototype.Pb = function () {
        V("notifyBannerOfCollapse", this);
        this.la("default");
    };
    Z.prototype.ib = function () {
        "expanded" === this.getState() && this.close();
    };
    var be = Z.Kb();
    r("mraid", be, void 0);
})();
AFMA_notifyMRAIDLoaded();
