/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var n = [], i = Object.getPrototypeOf, r = n.slice, s = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        }, a = n.push, o = n.indexOf, l = {}, c = l.toString, u = l.hasOwnProperty, d = u.toString, p = d.call(Object),
        f = {}, h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, m = function (e) {
            return null != e && e === e.window
        }, g = e.document, v = {type: !0, src: !0, nonce: !0, noModule: !0};

    function y(e, t, n) {
        var i, r, s = (n = n || g).createElement("script");
        if (s.text = e, t) for (i in v) (r = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, r);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }

    var w = "3.6.1", x = function (e, t) {
        return new x.fn.init(e, t)
    };

    function E(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !h(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    x.fn = x.prototype = {
        jquery: w, constructor: x, length: 0, toArray: function () {
            return r.call(this)
        }, get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return x.each(this, e)
        }, map: function (e) {
            return this.pushStack(x.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(x.grep(this, (function (e, t) {
                return (t + 1) % 2
            })))
        }, odd: function () {
            return this.pushStack(x.grep(this, (function (e, t) {
                return t % 2
            })))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: n.sort, splice: n.splice
    }, x.extend = x.fn.extend = function () {
        var e, t, n, i, r, s, a = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || h(a) || (a = {}), o === l && (a = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], s = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {}, r = !1, a[t] = x.extend(c, s, i)) : void 0 !== i && (a[t] = i));
        return a
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || d.call(n) !== p))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            y(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, i = 0;
            if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, s = e.length, a = !n; r < s; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, a = 0, o = [];
            if (E(e)) for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r); else for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
            return s(o)
        }, guid: 1, support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var T =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        function (e) {
            var t, n, i, r, s, a, o, l, c, u, d, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date, x = e.document,
                E = 0, T = 0, _ = le(), C = le(), S = le(), k = le(), A = function (e, t) {
                    return e === t && (d = !0), 0
                }, M = {}.hasOwnProperty, O = [], L = O.pop, P = O.push, D = O.push, N = O.slice, I = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                },
                z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                j = "[\\x20\\t\\r\\n\\f]",
                $ = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                H = "\\[[\\x20\\t\\r\\n\\f]*(" + $ + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + j + "*\\]",
                q = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                B = new RegExp(j + "+", "g"),
                R = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                F = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                G = new RegExp(j + "|>"), X = new RegExp(q), V = new RegExp("^" + $ + "$"), Y = {
                    ID: new RegExp("^#(" + $ + ")"),
                    CLASS: new RegExp("^\\.(" + $ + ")"),
                    TAG: new RegExp("^(" + $ + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: new RegExp("^(?:" + z + ")$", "i"),
                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                }, U = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                ne = function (e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, se = function () {
                    p()
                }, ae = we((function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {dir: "parentNode", next: "legend"});
            try {
                D.apply(O = N.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
            } catch (e) {
                D = {
                    apply: O.length ? function (e, t) {
                        P.apply(e, N.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, i, r) {
                var s, o, c, u, d, h, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                if (!r && (p(t), t = t || f, m)) {
                    if (11 !== x && (d = Z.exec(e))) if (s = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(s))) return i;
                            if (c.id === s) return i.push(c), i
                        } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return i.push(c), i
                    } else {
                        if (d[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(s)), i
                    }
                    if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === x && (G.test(e) || F.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = w)), o = (h = a(e)).length; o--;) h[o] = (u ? "#" + u : ":scope") + " " + be(h[o]);
                            v = h.join(",")
                        }
                        try {
                            return D.apply(i, y.querySelectorAll(v)), i
                        } catch (t) {
                            k(e, !0)
                        } finally {
                            u === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(R, "$1"), t, i, r)
            }

            function le() {
                var e = [];
                return function t(n, r) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
            }

            function ce(e) {
                return e[w] = !0, e
            }

            function ue(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
            }

            function pe(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function fe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return ce((function (t) {
                    return t = +t, ce((function (n, i) {
                        for (var r, s = e([], n.length, t), a = s.length; a--;) n[r = s[a]] && (n[r] = !(i[r] = n[r]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = oe.support = {}, s = oe.isXML = function (e) {
                var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || n && n.nodeName || "HTML")
            }, p = oe.setDocument = function (e) {
                var t, r, a = e ? e.ownerDocument || e : x;
                return a != f && 9 === a.nodeType && a.documentElement ? (h = (f = a).documentElement, m = !s(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)), n.scope = ue((function (e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ue((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue((function (e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, r, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (r = t.getElementsByName(e), i = 0; s = r[i++];) if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], r = 0, s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ue((function (e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ue((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, A = t ? function (e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0, r = e.parentNode, s = t.parentNode, a = [e], o = [t];
                    if (!r || !s) return e == f ? -1 : t == f ? 1 : r ? -1 : s ? 1 : u ? I(u, e) - I(u, t) : 0;
                    if (r === s) return pe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (; a[i] === o[i];) i++;
                    return i ? pe(a[i], o[i]) : a[i] == x ? -1 : o[i] == x ? 1 : 0
                }, f) : f
            }, oe.matches = function (e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function (e, t) {
                if (p(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    k(t, !0)
                }
                return oe(t, f, null, [e]).length > 0
            }, oe.contains = function (e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t)
            }, oe.attr = function (e, t) {
                (e.ownerDocument || e) != f && p(e);
                var r = i.attrHandle[t.toLowerCase()],
                    s = r && M.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, oe.escape = function (e) {
                return (e + "").replace(ie, re)
            }, oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function (e) {
                var t, i = [], r = 0, s = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                    for (; t = e[s++];) t === e[s] && (r = i.push(s));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = oe.getText = function (e) {
                var t, n = "", i = 0, s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else for (; t = e[i++];) n += r(t);
                return n
            }, i = oe.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)")) && _(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var r = oe.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, i, r) {
                        var s = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, d, p, f, h, m = s !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(), y = !l && !o, b = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (p = t; p = p[m];) if (o ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (b = (f = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [E, f, b];
                                        break
                                    }
                                } else if (y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b) for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [E, b]), p !== t));) ;
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, s = r(e, t), a = s.length; a--;) e[i = I(e, s[a])] = !(n[i] = s[a])
                        })) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [], n = [], i = o(e.replace(R, "$1"));
                        return i[w] ? ce((function (e, t, n, r) {
                            for (var s, a = i(e, null, r, []), o = e.length; o--;) (s = a[o]) && (e[o] = !(t[o] = s))
                        })) : function (e, r, s) {
                            return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop()
                        }
                    })), has: ce((function (e) {
                        return function (t) {
                            return oe(e, t).length > 0
                        }
                    })), contains: ce((function (e) {
                        return e = e.replace(te, ne), function (t) {
                            return (t.textContent || r(t)).indexOf(e) > -1
                        }
                    })), lang: ce((function (e) {
                        return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    })), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === h
                    }, focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: me(!1), disabled: me(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !i.pseudos.empty(e)
                    }, header: function (e) {
                        return Q.test(e.nodeName)
                    }, input: function (e) {
                        return K.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: ge((function () {
                        return [0]
                    })), last: ge((function (e, t) {
                        return [t - 1]
                    })), eq: ge((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })), even: ge((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })), odd: ge((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })), lt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                        return e
                    })), gt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }, i.pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
            for (t in {submit: !0, reset: !0}) i.pseudos[t] = he(t);

            function ye() {
            }

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function we(e, t, n) {
                var i = t.dir, r = t.next, s = r || i, a = n && "parentNode" === s, o = T++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, r);
                    return !1
                } : function (t, n, l) {
                    var c, u, d, p = [E, o];
                    if (l) {
                        for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                    } else for (; t = t[i];) if (1 === t.nodeType || a) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((c = u[s]) && c[0] === E && c[1] === o) return p[2] = c[2];
                        if (u[s] = p, p[2] = e(t, n, l)) return !0
                    }
                    return !1
                }
            }

            function xe(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function Ee(e, t, n, i, r) {
                for (var s, a = [], o = 0, l = e.length, c = null != t; o < l; o++) (s = e[o]) && (n && !n(s, i, r) || (a.push(s), c && t.push(o)));
                return a
            }

            function Te(e, t, n, i, r, s) {
                return i && !i[w] && (i = Te(i)), r && !r[w] && (r = Te(r, s)), ce((function (s, a, o, l) {
                    var c, u, d, p = [], f = [], h = a.length, m = s || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                            return n
                        }(t || "*", o.nodeType ? [o] : o, []), g = !e || !s && t ? m : Ee(m, p, e, o, l),
                        v = n ? r || (s ? e : h || i) ? [] : a : g;
                    if (n && n(g, v, o, l), i) for (c = Ee(v, f), i(c, [], o, l), u = c.length; u--;) (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                    if (s) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = v.length; u--;) (d = v[u]) && c.push(g[u] = d);
                                r(null, v = [], c, l)
                            }
                            for (u = v.length; u--;) (d = v[u]) && (c = r ? I(s, d) : p[u]) > -1 && (s[c] = !(a[c] = d))
                        }
                    } else v = Ee(v === a ? v.splice(h, v.length) : v), r ? r(null, a, v, l) : D.apply(a, v)
                }))
            }

            function _e(e) {
                for (var t, n, r, s = e.length, a = i.relative[e[0].type], o = a || i.relative[" "], l = a ? 1 : 0, u = we((function (e) {
                    return e === t
                }), o, !0), d = we((function (e) {
                    return I(t, e) > -1
                }), o, !0), p = [function (e, n, i) {
                    var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, r
                }]; l < s; l++) if (n = i.relative[e[l].type]) p = [we(xe(p), n)]; else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < s && !i.relative[e[r].type]; r++) ;
                        return Te(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(R, "$1"), n, l < r && _e(e.slice(l, r)), r < s && _e(e = e.slice(r)), r < s && be(e))
                    }
                    p.push(n)
                }
                return xe(p)
            }

            return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = oe.tokenize = function (e, t) {
                var n, r, s, a, o, l, c, u = C[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (o = e, l = [], c = i.preFilter; o;) {
                    for (a in n && !(r = W.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = F.exec(o)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(R, " ")
                    }), o = o.slice(n.length)), i.filter) !(r = Y[a].exec(o)) || c[a] && !(r = c[a](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: a,
                        matches: r
                    }), o = o.slice(n.length));
                    if (!n) break
                }
                return t ? o.length : o ? oe.error(e) : C(e, l).slice(0)
            }, o = oe.compile = function (e, t) {
                var n, r = [], s = [], o = S[e + " "];
                if (!o) {
                    for (t || (t = a(e)), n = t.length; n--;) (o = _e(t[n]))[w] ? r.push(o) : s.push(o);
                    o = S(e, function (e, t) {
                        var n = t.length > 0, r = e.length > 0, s = function (s, a, o, l, u) {
                            var d, h, g, v = 0, y = "0", b = s && [], w = [], x = c, T = s || r && i.find.TAG("*", u),
                                _ = E += null == x ? 1 : Math.random() || .1, C = T.length;
                            for (u && (c = a == f || a || u); y !== C && null != (d = T[y]); y++) {
                                if (r && d) {
                                    for (h = 0, a || d.ownerDocument == f || (p(d), o = !m); g = e[h++];) if (g(d, a || f, o)) {
                                        l.push(d);
                                        break
                                    }
                                    u && (E = _)
                                }
                                n && ((d = !g && d) && v--, s && b.push(d))
                            }
                            if (v += y, n && y !== v) {
                                for (h = 0; g = t[h++];) g(b, w, a, o);
                                if (s) {
                                    if (v > 0) for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                                    w = Ee(w)
                                }
                                D.apply(l, w), u && !s && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                            }
                            return u && (E = _, c = x), b
                        };
                        return n ? ce(s) : s
                    }(s, r)), o.selector = e
                }
                return o
            }, l = oe.select = function (e, t, n, r) {
                var s, l, c, u, d, p = "function" == typeof e && e, f = !r && a(e = p.selector || e);
                if (n = n || [], 1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (s = Y.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !i.relative[u = c.type]);) if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = r.length && be(l))) return D.apply(n, r), n;
                        break
                    }
                }
                return (p || o(e, f))(r, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
            })), ue((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || de("type|href|height|width", (function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && ue((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || de("value", (function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), ue((function (e) {
                return null == e.getAttribute("disabled")
            })) || de(z, (function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), oe
        }(e);
    x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
    var _ = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && x(e).is(n)) break;
            i.push(e)
        }
        return i
    }, C = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, S = x.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function M(e, t, n) {
        return h(t) ? x.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? x.grep(e, (function (e) {
            return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function (e) {
            return o.call(t, e) > -1 !== n
        })) : x.filter(t, e, n)
    }

    x.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function () {
                for (t = 0; t < i; t++) if (x.contains(r[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, r[t], n);
            return i > 1 ? x.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(M(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(M(this, e || [], !0))
        }, is: function (e) {
            return !!M(this, "string" == typeof e && S.test(e) ? x(e) : e || [], !1).length
        }
    });
    var O, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || O, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(i[1]) && x.isPlainObject(t)) for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = g.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, O = x(g);
    var P = /^(?:parents|prev(?:Until|All))/, D = {children: !0, contents: !0, next: !0, prev: !0};

    function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    x.fn.extend({
        has: function (e) {
            var t = x(e, this), n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0
            }))
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, s = [], a = "string" != typeof e && x(e);
            if (!S.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s)
        }, index: function (e) {
            return e ? "string" == typeof e ? o.call(x(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return _(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return _(e, "parentNode", n)
        }, next: function (e) {
            return N(e, "nextSibling")
        }, prev: function (e) {
            return N(e, "previousSibling")
        }, nextAll: function (e) {
            return _(e, "nextSibling")
        }, prevAll: function (e) {
            return _(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return _(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return _(e, "previousSibling", n)
        }, siblings: function (e) {
            return C((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return C(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function (e, t) {
        x.fn[e] = function (n, i) {
            var r = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (D[e] || x.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var I = /[^\x20\t\r\n\f]+/g;

    function z(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function $(e, t, n, i) {
        var r;
        try {
            e && h(r = e.promise) ? r.call(e).done(t).fail(n) : e && h(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return x.each(e.match(I) || [], (function (e, n) {
                t[n] = !0
            })), t
        }(e) : x.extend({}, e);
        var t, n, i, r, s = [], a = [], o = -1, l = function () {
            for (r = r || e.once, i = t = !0; a.length; o = -1) for (n = a.shift(); ++o < s.length;) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, n = !1);
            e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
        }, c = {
            add: function () {
                return s && (n && !t && (o = s.length - 1, a.push(n)), function t(n) {
                    x.each(n, (function (n, i) {
                        h(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== b(i) && t(i)
                    }))
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return x.each(arguments, (function (e, t) {
                    for (var n; (n = x.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= o && o--
                })), this
            }, has: function (e) {
                return e ? x.inArray(e, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return r = a = [], s = n = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return r = a = [], n || t || (s = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, x.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return x.Deferred((function (t) {
                            x.each(n, (function (n, i) {
                                var r = h(e[i[4]]) && e[i[4]];
                                s[i[1]]((function () {
                                    var e = r && r.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    }, then: function (t, i, r) {
                        var s = 0;

                        function a(t, n, i, r) {
                            return function () {
                                var o = this, l = arguments, c = function () {
                                    var e, c;
                                    if (!(t < s)) {
                                        if ((e = i.apply(o, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, h(c) ? r ? c.call(e, a(s, n, z, r), a(s, n, j, r)) : (s++, c.call(e, a(s, n, z, r), a(s, n, j, r), a(s, n, z, n.notifyWith))) : (i !== z && (o = void 0, l = [e]), (r || n.resolveWith)(o, l))
                                    }
                                }, u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= s && (i !== j && (o = void 0, l = [e]), n.rejectWith(o, l))
                                    }
                                };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }

                        return x.Deferred((function (e) {
                            n[0][3].add(a(0, e, h(r) ? r : z, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : z)), n[2][3].add(a(0, e, h(i) ? i : j))
                        })).promise()
                    }, promise: function (e) {
                        return null != e ? x.extend(e, r) : r
                    }
                }, s = {};
            return x.each(n, (function (e, t) {
                var a = t[2], o = t[5];
                r[t[1]] = a.add, o && a.add((function () {
                    i = o
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = a.fireWith
            })), r.promise(s), t && t.call(s, s), s
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), s = r.call(arguments), a = x.Deferred(), o = function (e) {
                return function (n) {
                    i[e] = this, s[e] = arguments.length > 1 ? r.call(arguments) : n, --t || a.resolveWith(i, s)
                }
            };
            if (t <= 1 && ($(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || h(s[n] && s[n].then))) return a.then();
            for (; n--;) $(s[n], o(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var q = x.Deferred();

    function B() {
        g.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), x.ready()
    }

    x.fn.ready = function (e) {
        return q.then(e).catch((function (e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || q.resolveWith(g, [x]))
        }
    }), x.ready.then = q.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var R = function (e, t, n, i, r, s, a) {
        var o = 0, l = e.length, c = null == n;
        if ("object" === b(n)) for (o in r = !0, n) R(e, t, o, n[o], !0, s, a); else if (void 0 !== i && (r = !0, h(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(x(e), n)
        })), t)) for (; o < l; o++) t(e[o], n, a ? i : i.call(e[o], o, t(e[o], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : s
    }, W = /^-ms-/, F = /-([a-z])/g;

    function G(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(W, "ms-").replace(F, G)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = x.expando + Y.uid++
    }

    Y.uid = 1, Y.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[X(t)] = n; else for (i in t) r[X(i)] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(I) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var U = new Y, K = new Y, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = function (e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }

    x.extend({
        hasData: function (e) {
            return K.hasData(e) || U.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return U.access(e, t, n)
        }, _removeData: function (e, t) {
            U.remove(e, t)
        }
    }), x.fn.extend({
        data: function (e, t) {
            var n, i, r, s = this[0], a = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = K.get(s), 1 === s.nodeType && !U.get(s, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = X(i.slice(5)), Z(s, i, r[i]));
                    U.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function () {
                K.set(this, e)
            })) : R(this, (function (t) {
                var n;
                if (s && void 0 === t) return void 0 !== (n = K.get(s, e)) || void 0 !== (n = Z(s, e)) ? n : void 0;
                this.each((function () {
                    K.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each((function () {
                K.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = U.get(e, t), n && (!i || Array.isArray(n) ? i = U.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), i = n.length, r = n.shift(), s = x._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, (function () {
                x.dequeue(e, t)
            }), s)), !i && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: x.Callbacks("once memory").add((function () {
                    U.remove(e, [t + "queue", n])
                }))
            })
        }
    }), x.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }))
        }, dequeue: function (e) {
            return this.each((function () {
                x.dequeue(this, e)
            }))
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = x.Deferred(), s = this, a = this.length, o = function () {
                --i || r.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = U.get(s[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], ie = g.documentElement, re = function (e) {
            return x.contains(e.ownerDocument, e)
        }, se = {composed: !0};
    ie.getRootNode && (re = function (e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === x.css(e, "display")
    };

    function oe(e, t, n, i) {
        var r, s, a = 20, o = i ? function () {
                return i.cur()
            } : function () {
                return x.css(e, t, "")
            }, l = o(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) x.style(e, t, u + c), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), u /= s;
            u *= 2, x.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = le[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = x.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), le[i] = r, r)
    }

    function ue(e, t) {
        for (var n, i, r = [], s = 0, a = e.length; s < a; s++) (i = e[s]).style && (n = i.style.display, t ? ("none" === n && (r[s] = U.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && ae(i) && (r[s] = ce(i))) : "none" !== n && (r[s] = "none", U.set(i, "display", n)));
        for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
        return e
    }

    x.fn.extend({
        show: function () {
            return ue(this, !0)
        }, hide: function () {
            return ue(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                ae(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var de, pe, fe = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
    de = g.createDocumentFragment().appendChild(g.createElement("div")), (pe = g.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), de.appendChild(pe), f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", f.option = !!de.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? x.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var s, a, o, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((s = e[f]) || 0 === s) if ("object" === b(s)) x.merge(p, s.nodeType ? [s] : s); else if (be.test(s)) {
            for (a = a || d.appendChild(t.createElement("div")), o = (he.exec(s) || ["", ""])[1].toLowerCase(), l = ge[o] || ge._default, a.innerHTML = l[1] + x.htmlPrefilter(s) + l[2], u = l[0]; u--;) a = a.lastChild;
            x.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(s));
        for (d.textContent = "", f = 0; s = p[f++];) if (i && x.inArray(s, i) > -1) r && r.push(s); else if (c = re(s), a = ve(d.appendChild(s), "script"), c && ye(a), n) for (u = 0; s = a[u++];) me.test(s.type || "") && n.push(s);
        return d
    }

    var xe = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Te() {
        return !1
    }

    function _e(e, t) {
        return e === function () {
            try {
                return g.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Ce(e, t, n, i, r, s) {
        var a, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, o, n, i, t[o], s);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te; else if (!r) return e;
        return 1 === s && (a = r, r = function (e) {
            return x().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = x.guid++)), e.each((function () {
            x.event.add(this, t, r, i, n)
        }))
    }

    function Se(e, t, n) {
        n ? (U.set(e, t, !1), x.event.add(e, t, {
            namespace: !1, handler: function (e) {
                var i, s, a = U.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length) (x.event.special[t] || {}).delegateType && e.stopPropagation(); else if (a = r.call(arguments), U.set(this, t, a), i = n(this, t), this[t](), a !== (s = U.get(this, t)) || i ? U.set(this, t, !1) : s = {}, a !== s) return e.stopImmediatePropagation(), e.preventDefault(), s && s.value
                } else a.length && (U.set(this, t, {value: x.event.trigger(x.extend(a[0], x.Event.prototype), a.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === U.get(e, t) && x.event.add(e, t, Ee)
    }

    x.event = {
        global: {}, add: function (e, t, n, i, r) {
            var s, a, o, l, c, u, d, p, f, h, m, g = U.get(e);
            if (V(e)) for (n.handler && (n = (s = n).handler, r = s.selector), r && x.find.matchesSelector(ie, r), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (t) {
                return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(I) || [""]).length; c--;) f = m = (o = xe.exec(t[c]) || [])[1], h = (o[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, u = x.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && x.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[f] = !0)
        }, remove: function (e, t, n, i, r) {
            var s, a, o, l, c, u, d, p, f, h, m, g = U.hasData(e) && U.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--;) if (f = m = (o = xe.exec(t[c]) || [])[1], h = (o[2] || "").split(".").sort(), f) {
                    for (d = x.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length; s--;) u = p[s], !r && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(s, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || x.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && U.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, s, a, o = new Array(arguments.length), l = x.event.fix(e),
                c = (U.get(this, "events") || Object.create(null))[l.type] || [], u = x.event.special[l.type] || {};
            for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (a = x.event.handlers.call(this, l, c), t = 0; (r = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((x.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        }, handlers: function (e, t) {
            var n, i, r, s, a, o = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (s = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? x(r, this).index(c) > -1 : x.find(r, this, null, [c]).length), a[r] && s.push(i);
                s.length && o.push({elem: c, handlers: s})
            }
            return c = this, l < t.length && o.push({elem: c, handlers: t.slice(l)}), o
        }, addProp: function (e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: h(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[x.expando] ? e : new x.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && k(t, "input") && Se(t, "click", Ee), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && k(t, "input") && Se(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && k(t, "input") && U.get(t, "click") || k(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function (e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, x.event.addProp), x.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
        x.event.special[e] = {
            setup: function () {
                return Se(this, e, _e), !1
            }, trigger: function () {
                return Se(this, e), !0
            }, _default: function (t) {
                return U.get(t.target, e)
            }, delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), x.fn.extend({
        on: function (e, t, n, i) {
            return Ce(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function () {
                x.event.remove(this, e, n, t)
            }))
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Oe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, i, r, s, a, o;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (o = U.get(e).events)) for (r in U.remove(t, "handle events"), o) for (n = 0, i = o[r].length; n < i; n++) x.event.add(t, r, o[r][n]);
            K.hasData(e) && (s = K.access(e), a = x.extend({}, s), K.set(t, a))
        }
    }

    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Ie(e, t, n, i) {
        t = s(t);
        var r, a, o, l, c, u, d = 0, p = e.length, m = p - 1, g = t[0], v = h(g);
        if (v || p > 1 && "string" == typeof g && !f.checkClone && Ae.test(g)) return e.each((function (r) {
            var s = e.eq(r);
            v && (t[0] = g.call(this, r, s.html())), Ie(s, t, n, i)
        }));
        if (p && (a = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (o = x.map(ve(r, "script"), Le)).length; d < p; d++) c = r, d !== m && (c = x.clone(c, !0, !0), l && x.merge(o, ve(c, "script"))), n.call(e[d], c, d);
            if (l) for (u = o[o.length - 1].ownerDocument, x.map(o, Pe), d = 0; d < l; d++) c = o[d], me.test(c.type || "") && !U.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : y(c.textContent.replace(Me, ""), c, u))
        }
        return e
    }

    function ze(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || x.cleanData(ve(i)), i.parentNode && (n && re(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    x.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var i, r, s, a, o = e.cloneNode(!0), l = re(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (a = ve(o), i = 0, r = (s = ve(e)).length; i < r; i++) Ne(s[i], a[i]);
            if (t) if (n) for (s = s || ve(e), a = a || ve(o), i = 0, r = s.length; i < r; i++) De(s[i], a[i]); else De(e, o);
            return (a = ve(o, "script")).length > 0 && ye(a, !l && ve(e, "script")), o
        }, cleanData: function (e) {
            for (var t, n, i, r = x.event.special, s = 0; void 0 !== (n = e[s]); s++) if (V(n)) {
                if (t = n[U.expando]) {
                    if (t.events) for (i in t.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    n[U.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), x.fn.extend({
        detach: function (e) {
            return ze(this, e, !0)
        }, remove: function (e) {
            return ze(this, e)
        }, text: function (e) {
            return R(this, (function (e) {
                return void 0 === e ? x.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        }, append: function () {
            return Ie(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            }))
        }, prepend: function () {
            return Ie(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        }, before: function () {
            return Ie(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        }, after: function () {
            return Ie(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return x.clone(this, e, t)
            }))
        }, html: function (e) {
            return R(this, (function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Ie(this, arguments, (function (t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(ve(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        x.fn[e] = function (e) {
            for (var n, i = [], r = x(e), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), x(r[o])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var je = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), $e = /^--/, He = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, qe = function (e, t, n) {
            var i, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in i = n.call(e), t) e.style[r] = s[r];
            return i
        }, Be = new RegExp(ne.join("|"), "i"),
        Re = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");

    function We(e, t, n) {
        var i, r, s, a, o = $e.test(t), l = e.style;
        return (n = n || He(e)) && (a = n.getPropertyValue(t) || n[t], o && (a = a.replace(Re, "$1")), "" !== a || re(e) || (a = x.style(e, t)), !f.pixelBoxStyles() && je.test(a) && Be.test(t) && (i = l.width, r = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = i, l.minWidth = r, l.maxWidth = s)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, r, s, a, o, l, c = g.createElement("div"), u = g.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function () {
                return t(), r
            }, pixelBoxStyles: function () {
                return t(), a
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), s
            }, reliableTrDimensions: function () {
                var t, n, i, r;
                return null == o && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), o = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), o
            }
        }))
    }();
    var Ge = ["Webkit", "Moz", "ms"], Xe = g.createElement("div").style, Ve = {};

    function Ye(e) {
        return x.cssProps[e] || Ve[e] || (e in Xe ? e : Ve[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) if ((e = Ge[n] + t) in Xe) return e
        }(e) || e)
    }

    var Ue = /^(none|table(?!-c[ea]).+)/, Ke = {position: "absolute", visibility: "hidden", display: "block"},
        Qe = {letterSpacing: "0", fontWeight: "400"};

    function Je(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ze(e, t, n, i, r, s) {
        var a = "width" === t ? 1 : 0, o = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += x.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= x.css(e, "border" + ne[a] + "Width", !0, r))) : (l += x.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += x.css(e, "border" + ne[a] + "Width", !0, r) : o += x.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5)) || 0), l
    }

    function et(e, t, n) {
        var i = He(e), r = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i), s = r,
            a = We(e, t, i), o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (je.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === x.css(e, "boxSizing", !1, i), (s = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + Ze(e, t, n || (r ? "border" : "content"), s, i, a) + "px"
    }

    function tt(e, t, n, i, r) {
        return new tt.prototype.init(e, t, n, i, r)
    }

    x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, a, o = X(t), l = $e.test(t), c = e.style;
                if (l || (t = Ye(o)), a = x.cssHooks[t] || x.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                "string" == (s = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (x.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, s, a, o = X(t);
            return $e.test(t) || (t = Ye(o)), (a = x.cssHooks[t] || x.cssHooks[o]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = We(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }), x.each(["height", "width"], (function (e, t) {
        x.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Ue.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, i) : qe(e, Ke, (function () {
                    return et(e, t, i)
                }))
            }, set: function (e, n, i) {
                var r, s = He(e), a = !f.scrollboxSize() && "absolute" === s.position,
                    o = (a || i) && "border-box" === x.css(e, "boxSizing", !1, s), l = i ? Ze(e, t, i, o, s) : 0;
                return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Ze(e, t, "border", !1, s) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Je(0, n, l)
            }
        }
    })), x.cssHooks.marginLeft = Fe(f.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {marginLeft: 0}, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Je)
    })), x.fn.extend({
        css: function (e, t) {
            return R(this, (function (e, t, n) {
                var i, r, s = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; a < r; a++) s[t[a]] = x.css(e, t[a], !1, i);
                    return s
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), x.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, x.fx = tt.prototype.init, x.fx.step = {};
    var nt, it, rt = /^(?:toggle|show|hide)$/, st = /queueHooks$/;

    function at() {
        it && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, x.fx.interval), x.fx.tick())
    }

    function ot() {
        return e.setTimeout((function () {
            nt = void 0
        })), nt = Date.now()
    }

    function lt(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ct(e, t, n) {
        for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), s = 0, a = r.length; s < a; s++) if (i = r[s].call(n, t, e)) return i
    }

    function ut(e, t, n) {
        var i, r, s = 0, a = ut.prefilters.length, o = x.Deferred().always((function () {
            delete l.elem
        })), l = function () {
            if (r) return !1;
            for (var t = nt || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, a = c.tweens.length; s < a; s++) c.tweens[s].run(i);
            return o.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
        }, c = o.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}, easing: x.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || ot(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, r, s, a;
            for (n in e) if (r = t[i = X(n)], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (a = x.cssHooks[i]) && "expand" in a) for (n in s = a.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r); else t[i] = r
        }(u, c.opts.specialEasing); s < a; s++) if (i = ut.prefilters[s].call(c, e, u, c.opts)) return h(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(u, ct, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    x.Animation = x.extend(ut, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(I);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, s, a, o, l, c, u, d = "width" in t || "height" in t, p = this, f = {}, h = e.style,
                m = e.nodeType && ae(e), g = U.get(e, "fxshow");
            for (i in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
                a.unqueued || o()
            }), a.unqueued++, p.always((function () {
                p.always((function () {
                    a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
                }))
            }))), t) if (r = t[i], rt.test(r)) {
                if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || x.style(e, i)
            }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = U.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (ue([e], !0), c = e.style.display || c, u = x.css(e, "display"), ue([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done((function () {
                h.display = c
            })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(e, "fxshow", {display: c}), s && (g.hidden = !m), m && ue([e], !0), p.done((function () {
                for (i in m || ue([e]), U.remove(e, "fxshow"), f) x.style(e, i, f[i])
            }))), l = ct(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }), x.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            h(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = x.isEmptyObject(e), s = x.speed(t, n, i), a = function () {
                var t = ut(this, x.extend({}, e), s);
                (r || U.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                var t = !0, r = null != e && e + "queueHooks", s = x.timers, a = U.get(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                !t && n || x.dequeue(this, e)
            }))
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each((function () {
                var t, n = U.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], s = x.timers, a = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), x.each(["toggle", "show", "hide"], (function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, i, r)
        }
    })), x.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, (function (e, t) {
        x.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), x.timers = [], x.fx.tick = function () {
        var e, t = 0, n = x.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), nt = void 0
    }, x.fx.timer = function (e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        it || (it = !0, at())
    }, x.fx.stop = function () {
        it = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fn.delay = function (t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        }))
    }, function () {
        var e = g.createElement("input"), t = g.createElement("select").appendChild(g.createElement("option"));
        e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
    }();
    var dt, pt = x.expr.attrHandle;
    x.fn.extend({
        attr: function (e, t) {
            return R(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each((function () {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function (e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!f.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(I);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = pt[t] || x.find.attr;
        pt[t] = function (e, t, i) {
            var r, s, a = t.toLowerCase();
            return i || (s = pt[a], pt[a] = r, r = null != n(e, t, i) ? a : null, pt[a] = s), r
        }
    }));
    var ft = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(I) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }

    x.fn.extend({
        prop: function (e, t) {
            return R(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each((function () {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function (e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), f.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function (e) {
            var t, n, i, r, s, a;
            return h(e) ? this.each((function (t) {
                x(this).addClass(e.call(this, t, gt(this)))
            })) : (t = vt(e)).length ? this.each((function () {
                if (i = gt(this), n = 1 === this.nodeType && " " + mt(i) + " ") {
                    for (s = 0; s < t.length; s++) r = t[s], n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    a = mt(n), i !== a && this.setAttribute("class", a)
                }
            })) : this
        }, removeClass: function (e) {
            var t, n, i, r, s, a;
            return h(e) ? this.each((function (t) {
                x(this).removeClass(e.call(this, t, gt(this)))
            })) : arguments.length ? (t = vt(e)).length ? this.each((function () {
                if (i = gt(this), n = 1 === this.nodeType && " " + mt(i) + " ") {
                    for (s = 0; s < t.length; s++) for (r = t[s]; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                    a = mt(n), i !== a && this.setAttribute("class", a)
                }
            })) : this : this.attr("class", "")
        }, toggleClass: function (e, t) {
            var n, i, r, s, a = typeof e, o = "string" === a || Array.isArray(e);
            return h(e) ? this.each((function (n) {
                x(this).toggleClass(e.call(this, n, gt(this), t), t)
            })) : "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : (n = vt(e), this.each((function () {
                if (o) for (s = x(this), r = 0; r < n.length; r++) i = n[r], s.hasClass(i) ? s.removeClass(i) : s.addClass(i); else void 0 !== e && "boolean" !== a || ((i = gt(this)) && U.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : U.get(this, "__className__") || ""))
            })))
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    x.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = h(e), this.each((function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }))) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : mt(x.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, a = "select-one" === e.type, o = a ? null : [],
                        l = a ? s + 1 : r.length;
                    for (i = s < 0 ? l : a ? s : 0; i < l; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), a) return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, i, r = e.options, s = x.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = x.inArray(x.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function () {
        x.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, f.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
        e.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function (t, n, i, r) {
            var s, a, o, l, c, d, p, f, v = [i || g], y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = f = o = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!r && !p.noBubble && !m(i)) {
                    for (l = p.delegateType || y, bt.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), o = a;
                    o === (i.ownerDocument || g) && v.push(o.defaultView || o.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) f = a, t.type = s > 1 ? l : p.bindType || y, (d = (U.get(a, "events") || Object.create(null))[t.type] && U.get(a, "handle")) && d.apply(a, n), (d = c && a[c]) && d.apply && V(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !V(i) || c && h(i[y]) && !m(i) && ((o = i[c]) && (i[c] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, wt), i[y](), t.isPropagationStopped() && f.removeEventListener(y, wt), x.event.triggered = void 0, o && (i[c] = o)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0});
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                x.event.trigger(e, t, this)
            }))
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), f.focusin || x.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
        var n = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this, r = U.access(i, t);
                r || i.addEventListener(e, n, !0), U.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this.document || this, r = U.access(i, t) - 1;
                r ? U.access(i, t, r) : (i.removeEventListener(e, n, !0), U.remove(i, t))
            }
        }
    }));
    var xt = e.location, Et = {guid: Date.now()}, Tt = /\?/;
    x.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
        }
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function (e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var _t = /\[\]$/, Ct = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(e, t, n, i) {
        var r;
        if (Array.isArray(t)) x.each(t, (function (t, r) {
            n || _t.test(e) ? i(e, r) : At(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        })); else if (n || "object" !== b(t)) i(e, t); else for (r in t) At(e + "[" + r + "]", t[r], n, i)
    }

    x.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = h(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function () {
            r(this.name, this.value)
        })); else for (n in e) At(n, e[n], t, r);
        return i.join("&")
    }, x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map((function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !fe.test(e))
            })).map((function (e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function (e) {
                    return {name: t.name, value: e.replace(Ct, "\r\n")}
                })) : {name: t.name, value: n.replace(Ct, "\r\n")}
            })).get()
        }
    });
    var Mt = /%20/g, Ot = /#.*$/, Lt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Dt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//, It = {}, zt = {}, jt = "*/".concat("*"), $t = g.createElement("a");

    function Ht(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, s = t.toLowerCase().match(I) || [];
            if (h(n)) for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function qt(e, t, n, i) {
        var r = {}, s = e === zt;

        function a(o) {
            var l;
            return r[o] = !0, x.each(e[o] || [], (function (e, o) {
                var c = o(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            })), l
        }

        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Bt(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }

    $t.href = xt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, x.ajaxSettings), t) : Bt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(It),
        ajaxTransport: Ht(zt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, r, s, a, o, l, c, u, d, p, f = x.ajaxSetup({}, n), h = f.context || f,
                m = f.context && (h.nodeType || h.jquery) ? x(h) : x.event, v = x.Deferred(),
                y = x.Callbacks("once memory"), b = f.statusCode || {}, w = {}, E = {}, T = "canceled", _ = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a) for (a = {}; t = Pt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return c ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) _.always(e[_.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), C(0, t), this
                    }
                };
            if (v.promise(_), f.url = ((t || f.url || xt.href) + "").replace(Nt, xt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""], null == f.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), qt(It, f, n, _), c) return _;
            for (d in (u = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Dt.test(f.type), r = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Mt, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Lt, "$1"), p = (Tt.test(r) ? "&" : "?") + "_=" + Et.guid++ + p), f.url = r + p), f.ifModified && (x.lastModified[r] && _.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && _.setRequestHeader("If-None-Match", x.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : f.accepts["*"]), f.headers) _.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, _, f) || c)) return _.abort();
            if (T = "abort", y.add(f.complete), _.done(f.success), _.fail(f.error), i = qt(zt, f, n, _)) {
                if (_.readyState = 1, u && m.trigger("ajaxSend", [_, f]), c) return _;
                f.async && f.timeout > 0 && (o = e.setTimeout((function () {
                    _.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, i.send(w, C)
                } catch (e) {
                    if (c) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, a, l) {
                var d, p, g, w, E, T = n;
                c || (c = !0, o && e.clearTimeout(o), i = void 0, s = l || "", _.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, a && (w = function (e, t, n) {
                    for (var i, r, s, a, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in o) if (o[r] && o[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) s = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            a || (a = r)
                        }
                        s = s || a
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(f, _, a)), !d && x.inArray("script", f.dataTypes) > -1 && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {
                }), w = function (e, t, n, i) {
                    var r, s, a, o, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (s = u.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                        if (!(a = c[l + " " + s] || c["* " + s])) for (r in c) if ((o = r.split(" "))[1] === s && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                            !0 === a ? a = c[r] : !0 !== c[r] && (s = o[0], u.unshift(o[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: t}
                }(f, w, _, d), d ? (f.ifModified && ((E = _.getResponseHeader("Last-Modified")) && (x.lastModified[r] = E), (E = _.getResponseHeader("etag")) && (x.etag[r] = E)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, d = !(g = w.error))) : (g = T, !t && T || (T = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || T) + "", d ? v.resolveWith(h, [p, T, _]) : v.rejectWith(h, [_, T, g]), _.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [_, f, d ? p : g]), y.fireWith(h, [_, T]), u && (m.trigger("ajaxComplete", [_, f]), --x.active || x.event.trigger("ajaxStop")))
            }

            return _
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function (e, t) {
        x[t] = function (e, n, i, r) {
            return h(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    })), x.ajaxPrefilter((function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), x._evalUrl = function (e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                x.globalEval(e, t, n)
            }
        })
    }, x.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        }, wrapInner: function (e) {
            return h(e) ? this.each((function (t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        }, wrap: function (e) {
            var t = h(e);
            return this.each((function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }))
        }, unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function (e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Rt = {0: 200, 1223: 204}, Wt = x.ajaxSettings.xhr();
    f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((function (t) {
        var n, i;
        if (f.cors || Wt && !t.crossDomain) return {
            send: function (r, s) {
                var a, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) o[a] = t.xhrFields[a];
                for (a in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(a, r[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Rt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                    }
                }, o.onload = n(), i = o.onerror = o.ontimeout = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function () {
                    4 === o.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    })), x.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (i, r) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    }));
    var Ft, Gt = [], Xt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Gt.pop() || x.expando + "_" + Et.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var r, s, a,
            o = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Xt, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || x.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
            a = arguments
        }, i.always((function () {
            void 0 === s ? x(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, Gt.push(r)), a && h(s) && s(a[0]), a = s = void 0
        })), "script"
    })), f.createHTMLDocument = ((Ft = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), x.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), s = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, s), s && s.length && x(s).remove(), x.merge([], r.childNodes)));
        var i, r, s
    }, x.fn.load = function (e, t, n) {
        var i, r, s, a = this, o = e.indexOf(" ");
        return o > -1 && (i = mt(e.slice(o)), e = e.slice(0, o)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            s = arguments, a.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            a.each((function () {
                n.apply(this, s || [e.responseText, t, e])
            }))
        }), this
    }, x.expr.pseudos.animated = function (e) {
        return x.grep(x.timers, (function (t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function (e, t, n) {
            var i, r, s, a, o, l, c = x.css(e, "position"), u = x(e), d = {};
            "static" === c && (e.style.position = "relative"), o = u.offset(), s = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), h(t) && (t = t.call(e, n, x.extend({}, o))), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(i, "marginTop", !0),
                    left: t.left - r.left - x.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function (i) {
            return R(this, (function (e, i, r) {
                var s;
                if (m(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[i];
                s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r
            }), e, i, arguments.length)
        }
    })), x.each(["top", "left"], (function (e, t) {
        x.cssHooks[t] = Fe(f.pixelPosition, (function (e, n) {
            if (n) return n = We(e, t), je.test(n) ? x(e).position()[t] + "px" : n
        }))
    })), x.each({Height: "height", Width: "width"}, (function (e, t) {
        x.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
            x.fn[i] = function (r, s) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    o = n || (!0 === r || !0 === s ? "margin" : "border");
                return R(this, (function (t, n, r) {
                    var s;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? x.css(t, n, o) : x.style(t, n, r, o)
                }), t, a ? r : void 0, a)
            }
        }))
    })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), x.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Vt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    x.proxy = function (e, t) {
        var n, i, s;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return i = r.call(arguments, 2), s = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }, s.guid = e.guid = e.guid || x.guid++, s
    }, x.holdReady = function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = k, x.isFunction = h, x.isWindow = m, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function (e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function (e) {
        return null == e ? "" : (e + "").replace(Vt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return x
    }));
    var Yt = e.jQuery, Ut = e.$;
    return x.noConflict = function (t) {
        return e.$ === x && (e.$ = Ut), t && e.jQuery === x && (e.jQuery = Yt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
})), function () {
    "use strict";

    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }

    var t = 0, n = {};
    e.prototype.queueTrigger = function (e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function (e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, e.prototype.disable = function () {
        return this.enabled = !1, this
    }, e.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function () {
        return this.group.next(this)
    }, e.prototype.previous = function () {
        return this.group.previous(this)
    }, e.invokeAll = function (e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var r = 0, s = t.length; s > r; r++) t[r][e]()
    }, e.destroyAll = function () {
        e.invokeAll("destroy")
    }, e.disableAll = function () {
        e.invokeAll("disable")
    }, e.enableAll = function () {
        for (var t in e.Context.refreshAll(), n) n[t].enabled = !0;
        return this
    }, e.refreshAll = function () {
        e.Context.refreshAll()
    }, e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(), function () {
    "use strict";

    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }

    function t(e) {
        this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, r.windowContext || (r.windowContext = !0, r.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var n = 0, i = {}, r = window.Waypoint, s = window.onload;
    t.prototype.add = function (e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, t.prototype.checkEmpty = function () {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical), n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function () {
        function e() {
            t.handleResize(), t.didResize = !1
        }

        var t = this;
        this.adapter.on("resize.waypoints", (function () {
            t.didResize || (t.didResize = !0, r.requestAnimationFrame(e))
        }))
    }, t.prototype.createThrottledScrollHandler = function () {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }

        var t = this;
        this.adapter.on("scroll.waypoints", (function () {
            (!t.didScroll || r.isTouch) && (t.didScroll = !0, r.requestAnimationFrame(e))
        }))
    }, t.prototype.handleResize = function () {
        r.Context.refreshAll()
    }, t.prototype.handleScroll = function () {
        var e = {}, t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var n in t) {
            var i = t[n], r = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s];
                if (null !== a.triggerPoint) {
                    var o = i.oldScroll < a.triggerPoint, l = i.newScroll >= a.triggerPoint;
                    (o && l || !o && !l) && (a.queueTrigger(r), e[a.group.id] = a.group)
                }
            }
        }
        for (var c in e) e[c].flushTriggers();
        this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
    }, t.prototype.innerHeight = function () {
        return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, t.prototype.innerWidth = function () {
        return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function () {
        var e = [];
        for (var t in this.waypoints) for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; r > i; i++) e[i].destroy()
    }, t.prototype.refresh = function () {
        var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), i = {};
        for (var s in this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var a = e[s];
            for (var o in this.waypoints[s]) {
                var l, c, u, d, p = this.waypoints[s][o], f = p.options.offset, h = p.triggerPoint, m = 0,
                    g = null == h;
                p.element !== p.element.window && (m = p.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = Math.floor(m + l - f), c = h < a.oldScroll, u = p.triggerPoint >= a.oldScroll, d = !c && !u, !g && c && u ? (p.queueTrigger(a.backward), i[p.group.id] = p.group) : (!g && d || g && a.oldScroll >= p.triggerPoint) && (p.queueTrigger(a.forward), i[p.group.id] = p.group)
            }
        }
        return r.requestAnimationFrame((function () {
            for (var e in i) i[e].flushTriggers()
        })), this
    }, t.findOrCreateByElement = function (e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function () {
        for (var e in i) i[e].refresh()
    }, t.findByElement = function (e) {
        return i[e.waypointContextKey]
    }, window.onload = function () {
        s && s(), t.refreshAll()
    }, r.requestAnimationFrame = function (t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, r.Context = t
}(), function () {
    "use strict";

    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function n(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }

    var i = {vertical: {}, horizontal: {}}, r = window.Waypoint;
    n.prototype.add = function (e) {
        this.waypoints.push(e)
    }, n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n], r = "up" === n || "left" === n;
            i.sort(r ? t : e);
            for (var s = 0, a = i.length; a > s; s += 1) {
                var o = i[s];
                (o.options.continuous || s === i.length - 1) && o.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function (t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function (t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function (e, t) {
        this.triggerQueues[t].push(e)
    }, n.prototype.remove = function (e) {
        var t = r.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function () {
        return this.waypoints[0]
    }, n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function (e) {
        return i[e.axis][e.name] || new n(e)
    }, r.Group = n
}(), function () {
    "use strict";

    function e(e) {
        return e === e.window
    }

    function t(t) {
        return e(t) ? t : t.defaultView
    }

    function n(e) {
        this.element = e, this.handlers = {}
    }

    var i = window.Waypoint;
    n.prototype.innerHeight = function () {
        return e(this.element) ? this.element.innerHeight : this.element.clientHeight
    }, n.prototype.innerWidth = function () {
        return e(this.element) ? this.element.innerWidth : this.element.clientWidth
    }, n.prototype.off = function (e, t) {
        function n(e, t, n) {
            for (var i = 0, r = t.length - 1; r > i; i++) {
                var s = t[i];
                n && n !== s || e.removeEventListener(s)
            }
        }

        var i = e.split("."), r = i[0], s = i[1], a = this.element;
        if (s && this.handlers[s] && r) n(a, this.handlers[s][r], t), this.handlers[s][r] = []; else if (r) for (var o in this.handlers) n(a, this.handlers[o][r] || [], t), this.handlers[o][r] = []; else if (s && this.handlers[s]) {
            for (var l in this.handlers[s]) n(a, this.handlers[s][l], t);
            this.handlers[s] = {}
        }
    }, n.prototype.offset = function () {
        if (!this.element.ownerDocument) return null;
        var e = this.element.ownerDocument.documentElement, n = t(this.element.ownerDocument), i = {top: 0, left: 0};
        return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), {
            top: i.top + n.pageYOffset - e.clientTop,
            left: i.left + n.pageXOffset - e.clientLeft
        }
    }, n.prototype.on = function (e, t) {
        var n = e.split("."), i = n[0], r = n[1] || "__default", s = this.handlers[r] = this.handlers[r] || {};
        (s[i] = s[i] || []).push(t), this.element.addEventListener(i, t)
    }, n.prototype.outerHeight = function (t) {
        var n, i = this.innerHeight();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginTop, 10), i += parseInt(n.marginBottom, 10)), i
    }, n.prototype.outerWidth = function (t) {
        var n, i = this.innerWidth();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginLeft, 10), i += parseInt(n.marginRight, 10)), i
    }, n.prototype.scrollLeft = function () {
        var e = t(this.element);
        return e ? e.pageXOffset : this.element.scrollLeft
    }, n.prototype.scrollTop = function () {
        var e = t(this.element);
        return e ? e.pageYOffset : this.element.scrollTop
    }, n.extend = function () {
        function e(e, t) {
            if ("object" == typeof e && "object" == typeof t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        for (var t = Array.prototype.slice.call(arguments), n = 1, i = t.length; i > n; n++) e(t[0], t[n]);
        return t[0]
    }, n.inArray = function (e, t, n) {
        return null == t ? -1 : t.indexOf(e, n)
    }, n.isEmptyObject = function (e) {
        for (var t in e) return !1;
        return !0
    }, i.adapters.push({name: "noframework", Adapter: n}), i.Adapter = n
}(), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function (e) {
    "use strict";

    function t(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function n(e) {
        return e instanceof t(e).Element || e instanceof Element
    }

    function i(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement
    }

    function r(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    }

    var s = Math.max, a = Math.min, o = Math.round;

    function l() {
        var e = navigator.userAgentData;
        return null != e && e.brands ? e.brands.map((function (e) {
            return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
    }

    function c() {
        return !/^((?!chrome|android).)*safari/i.test(l())
    }

    function u(e, r, s) {
        void 0 === r && (r = !1), void 0 === s && (s = !1);
        var a = e.getBoundingClientRect(), l = 1, u = 1;
        r && i(e) && (l = e.offsetWidth > 0 && o(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && o(a.height) / e.offsetHeight || 1);
        var d = (n(e) ? t(e) : window).visualViewport, p = !c() && s, f = (a.left + (p && d ? d.offsetLeft : 0)) / l,
            h = (a.top + (p && d ? d.offsetTop : 0)) / u, m = a.width / l, g = a.height / u;
        return {width: m, height: g, top: h, right: f + m, bottom: h + g, left: f, x: f, y: h}
    }

    function d(e) {
        var n = t(e);
        return {scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset}
    }

    function p(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function f(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function h(e) {
        return u(f(e)).left + d(e).scrollLeft
    }

    function m(e) {
        return t(e).getComputedStyle(e)
    }

    function g(e) {
        var t = m(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i)
    }

    function v(e, n, r) {
        void 0 === r && (r = !1);
        var s, a, l = i(n), c = i(n) && function (e) {
            var t = e.getBoundingClientRect(), n = o(t.width) / e.offsetWidth || 1,
                i = o(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== i
        }(n), m = f(n), v = u(e, c, r), y = {scrollLeft: 0, scrollTop: 0}, b = {x: 0, y: 0};
        return (l || !l && !r) && (("body" !== p(n) || g(m)) && (y = (s = n) !== t(s) && i(s) ? {
            scrollLeft: (a = s).scrollLeft,
            scrollTop: a.scrollTop
        } : d(s)), i(n) ? ((b = u(n, !0)).x += n.clientLeft, b.y += n.clientTop) : m && (b.x = h(m))), {
            x: v.left + y.scrollLeft - b.x,
            y: v.top + y.scrollTop - b.y,
            width: v.width,
            height: v.height
        }
    }

    function y(e) {
        var t = u(e), n = e.offsetWidth, i = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    }

    function b(e) {
        return "html" === p(e) ? e : e.assignedSlot || e.parentNode || (r(e) ? e.host : null) || f(e)
    }

    function w(e) {
        return ["html", "body", "#document"].indexOf(p(e)) >= 0 ? e.ownerDocument.body : i(e) && g(e) ? e : w(b(e))
    }

    function x(e, n) {
        var i;
        void 0 === n && (n = []);
        var r = w(e), s = r === (null == (i = e.ownerDocument) ? void 0 : i.body), a = t(r),
            o = s ? [a].concat(a.visualViewport || [], g(r) ? r : []) : r, l = n.concat(o);
        return s ? l : l.concat(x(b(o)))
    }

    function E(e) {
        return ["table", "td", "th"].indexOf(p(e)) >= 0
    }

    function T(e) {
        return i(e) && "fixed" !== m(e).position ? e.offsetParent : null
    }

    function _(e) {
        for (var n = t(e), s = T(e); s && E(s) && "static" === m(s).position;) s = T(s);
        return s && ("html" === p(s) || "body" === p(s) && "static" === m(s).position) ? n : s || function (e) {
            var t = /firefox/i.test(l());
            if (/Trident/i.test(l()) && i(e) && "fixed" === m(e).position) return null;
            var n = b(e);
            for (r(n) && (n = n.host); i(n) && ["html", "body"].indexOf(p(n)) < 0;) {
                var s = m(n);
                if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || t && "filter" === s.willChange || t && s.filter && "none" !== s.filter) return n;
                n = n.parentNode
            }
            return null
        }(e) || n
    }

    var C = "top", S = "bottom", k = "right", A = "left", M = "auto", O = [C, S, k, A], L = "start", P = "end",
        D = "viewport", N = "popper", I = O.reduce((function (e, t) {
            return e.concat([t + "-" + L, t + "-" + P])
        }), []), z = [].concat(O, [M]).reduce((function (e, t) {
            return e.concat([t, t + "-" + L, t + "-" + P])
        }), []),
        j = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function $(e) {
        var t = new Map, n = new Set, i = [];

        function r(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
                if (!n.has(e)) {
                    var i = t.get(e);
                    i && r(i)
                }
            })), i.push(e)
        }

        return e.forEach((function (e) {
            t.set(e.name, e)
        })), e.forEach((function (e) {
            n.has(e.name) || r(e)
        })), i
    }

    function H(e) {
        return e.split("-")[0]
    }

    function q(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && r(n)) {
            var i = t;
            do {
                if (i && e.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function B(e) {
        return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
    }

    function R(e, i, r) {
        return i === D ? B(function (e, n) {
            var i = t(e), r = f(e), s = i.visualViewport, a = r.clientWidth, o = r.clientHeight, l = 0, u = 0;
            if (s) {
                a = s.width, o = s.height;
                var d = c();
                (d || !d && "fixed" === n) && (l = s.offsetLeft, u = s.offsetTop)
            }
            return {width: a, height: o, x: l + h(e), y: u}
        }(e, r)) : n(i) ? function (e, t) {
            var n = u(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(i, r) : B(function (e) {
            var t, n = f(e), i = d(e), r = null == (t = e.ownerDocument) ? void 0 : t.body,
                a = s(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                o = s(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                l = -i.scrollLeft + h(e), c = -i.scrollTop;
            return "rtl" === m(r || n).direction && (l += s(n.clientWidth, r ? r.clientWidth : 0) - a), {
                width: a,
                height: o,
                x: l,
                y: c
            }
        }(f(e)))
    }

    function W(e, t, r, o) {
        var l = "clippingParents" === t ? function (e) {
            var t = x(b(e)), r = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && i(e) ? _(e) : e;
            return n(r) ? t.filter((function (e) {
                return n(e) && q(e, r) && "body" !== p(e)
            })) : []
        }(e) : [].concat(t), c = [].concat(l, [r]), u = c[0], d = c.reduce((function (t, n) {
            var i = R(e, n, o);
            return t.top = s(i.top, t.top), t.right = a(i.right, t.right), t.bottom = a(i.bottom, t.bottom), t.left = s(i.left, t.left), t
        }), R(e, u, o));
        return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d
    }

    function F(e) {
        return e.split("-")[1]
    }

    function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function X(e) {
        var t, n = e.reference, i = e.element, r = e.placement, s = r ? H(r) : null, a = r ? F(r) : null,
            o = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2;
        switch (s) {
            case C:
                t = {x: o, y: n.y - i.height};
                break;
            case S:
                t = {x: o, y: n.y + n.height};
                break;
            case k:
                t = {x: n.x + n.width, y: l};
                break;
            case A:
                t = {x: n.x - i.width, y: l};
                break;
            default:
                t = {x: n.x, y: n.y}
        }
        var c = s ? G(s) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (a) {
                case L:
                    t[c] = t[c] - (n[u] / 2 - i[u] / 2);
                    break;
                case P:
                    t[c] = t[c] + (n[u] / 2 - i[u] / 2)
            }
        }
        return t
    }

    function V(e) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, e)
    }

    function Y(e, t) {
        return t.reduce((function (t, n) {
            return t[n] = e, t
        }), {})
    }

    function U(e, t) {
        void 0 === t && (t = {});
        var i = t, r = i.placement, s = void 0 === r ? e.placement : r, a = i.strategy,
            o = void 0 === a ? e.strategy : a, l = i.boundary, c = void 0 === l ? "clippingParents" : l,
            d = i.rootBoundary, p = void 0 === d ? D : d, h = i.elementContext, m = void 0 === h ? N : h,
            g = i.altBoundary, v = void 0 !== g && g, y = i.padding, b = void 0 === y ? 0 : y,
            w = V("number" != typeof b ? b : Y(b, O)), x = m === N ? "reference" : N, E = e.rects.popper,
            T = e.elements[v ? x : m], _ = W(n(T) ? T : T.contextElement || f(e.elements.popper), c, p, o),
            A = u(e.elements.reference), M = X({reference: A, element: E, strategy: "absolute", placement: s}),
            L = B(Object.assign({}, E, M)), P = m === N ? L : A, I = {
                top: _.top - P.top + w.top,
                bottom: P.bottom - _.bottom + w.bottom,
                left: _.left - P.left + w.left,
                right: P.right - _.right + w.right
            }, z = e.modifiersData.offset;
        if (m === N && z) {
            var j = z[s];
            Object.keys(I).forEach((function (e) {
                var t = [k, S].indexOf(e) >= 0 ? 1 : -1, n = [C, S].indexOf(e) >= 0 ? "y" : "x";
                I[e] += j[n] * t
            }))
        }
        return I
    }

    var K = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function Q() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function J(e) {
        void 0 === e && (e = {});
        var t = e, i = t.defaultModifiers, r = void 0 === i ? [] : i, s = t.defaultOptions, a = void 0 === s ? K : s;
        return function (e, t, i) {
            void 0 === i && (i = a);
            var s, o, l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, K, a),
                modifiersData: {},
                elements: {reference: e, popper: t},
                attributes: {},
                styles: {}
            }, c = [], u = !1, d = {
                state: l, setOptions: function (i) {
                    var s = "function" == typeof i ? i(l.options) : i;
                    p(), l.options = Object.assign({}, a, l.options, s), l.scrollParents = {
                        reference: n(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
                        popper: x(t)
                    };
                    var o, u, f = function (e) {
                        var t = $(e);
                        return j.reduce((function (e, n) {
                            return e.concat(t.filter((function (e) {
                                return e.phase === n
                            })))
                        }), [])
                    }((o = [].concat(r, l.options.modifiers), u = o.reduce((function (e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t, e
                    }), {}), Object.keys(u).map((function (e) {
                        return u[e]
                    }))));
                    return l.orderedModifiers = f.filter((function (e) {
                        return e.enabled
                    })), l.orderedModifiers.forEach((function (e) {
                        var t = e.name, n = e.options, i = void 0 === n ? {} : n, r = e.effect;
                        if ("function" == typeof r) {
                            var s = r({state: l, name: t, instance: d, options: i});
                            c.push(s || function () {
                            })
                        }
                    })), d.update()
                }, forceUpdate: function () {
                    if (!u) {
                        var e = l.elements, t = e.reference, n = e.popper;
                        if (Q(t, n)) {
                            l.rects = {
                                reference: v(t, _(n), "fixed" === l.options.strategy),
                                popper: y(n)
                            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function (e) {
                                return l.modifiersData[e.name] = Object.assign({}, e.data)
                            }));
                            for (var i = 0; i < l.orderedModifiers.length; i++) if (!0 !== l.reset) {
                                var r = l.orderedModifiers[i], s = r.fn, a = r.options, o = void 0 === a ? {} : a,
                                    c = r.name;
                                "function" == typeof s && (l = s({state: l, options: o, name: c, instance: d}) || l)
                            } else l.reset = !1, i = -1
                        }
                    }
                }, update: (s = function () {
                    return new Promise((function (e) {
                        d.forceUpdate(), e(l)
                    }))
                }, function () {
                    return o || (o = new Promise((function (e) {
                        Promise.resolve().then((function () {
                            o = void 0, e(s())
                        }))
                    }))), o
                }), destroy: function () {
                    p(), u = !0
                }
            };
            if (!Q(e, t)) return d;

            function p() {
                c.forEach((function (e) {
                    return e()
                })), c = []
            }

            return d.setOptions(i).then((function (e) {
                !u && i.onFirstUpdate && i.onFirstUpdate(e)
            })), d
        }
    }

    var Z = {passive: !0}, ee = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (e) {
            var n = e.state, i = e.instance, r = e.options, s = r.scroll, a = void 0 === s || s, o = r.resize,
                l = void 0 === o || o, c = t(n.elements.popper),
                u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return a && u.forEach((function (e) {
                e.addEventListener("scroll", i.update, Z)
            })), l && c.addEventListener("resize", i.update, Z), function () {
                a && u.forEach((function (e) {
                    e.removeEventListener("scroll", i.update, Z)
                })), l && c.removeEventListener("resize", i.update, Z)
            }
        }, data: {}
    }, te = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) {
            var t = e.state, n = e.name;
            t.modifiersData[n] = X({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        }, data: {}
    }, ne = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function ie(e) {
        var n, i = e.popper, r = e.popperRect, s = e.placement, a = e.variation, l = e.offsets, c = e.position,
            u = e.gpuAcceleration, d = e.adaptive, p = e.roundOffsets, h = e.isFixed, g = l.x, v = void 0 === g ? 0 : g,
            y = l.y, b = void 0 === y ? 0 : y, w = "function" == typeof p ? p({x: v, y: b}) : {x: v, y: b};
        v = w.x, b = w.y;
        var x = l.hasOwnProperty("x"), E = l.hasOwnProperty("y"), T = A, M = C, O = window;
        if (d) {
            var L = _(i), D = "clientHeight", N = "clientWidth";
            L === t(i) && "static" !== m(L = f(i)).position && "absolute" === c && (D = "scrollHeight", N = "scrollWidth"), (s === C || (s === A || s === k) && a === P) && (M = S, b -= (h && L === O && O.visualViewport ? O.visualViewport.height : L[D]) - r.height, b *= u ? 1 : -1), s !== A && (s !== C && s !== S || a !== P) || (T = k, v -= (h && L === O && O.visualViewport ? O.visualViewport.width : L[N]) - r.width, v *= u ? 1 : -1)
        }
        var I, z = Object.assign({position: c}, d && ne), j = !0 === p ? function (e) {
            var t = e.x, n = e.y, i = window.devicePixelRatio || 1;
            return {x: o(t * i) / i || 0, y: o(n * i) / i || 0}
        }({x: v, y: b}) : {x: v, y: b};
        return v = j.x, b = j.y, u ? Object.assign({}, z, ((I = {})[M] = E ? "0" : "", I[T] = x ? "0" : "", I.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", I)) : Object.assign({}, z, ((n = {})[M] = E ? b + "px" : "", n[T] = x ? v + "px" : "", n.transform = "", n))
    }

    var re = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) {
            var t = e.state, n = e.options, i = n.gpuAcceleration, r = void 0 === i || i, s = n.adaptive,
                a = void 0 === s || s, o = n.roundOffsets, l = void 0 === o || o, c = {
                    placement: H(t.placement),
                    variation: F(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: r,
                    isFixed: "fixed" === t.options.strategy
                };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ie(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: l
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ie(Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
        }, data: {}
    }, se = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function (e) {
                var n = t.styles[e] || {}, r = t.attributes[e] || {}, s = t.elements[e];
                i(s) && p(s) && (Object.assign(s.style, n), Object.keys(r).forEach((function (e) {
                    var t = r[e];
                    !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                })))
            }))
        }, effect: function (e) {
            var t = e.state, n = {
                popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
                Object.keys(t.elements).forEach((function (e) {
                    var r = t.elements[e], s = t.attributes[e] || {},
                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                            return e[t] = "", e
                        }), {});
                    i(r) && p(r) && (Object.assign(r.style, a), Object.keys(s).forEach((function (e) {
                        r.removeAttribute(e)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    }, ae = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) {
            var t = e.state, n = e.options, i = e.name, r = n.offset, s = void 0 === r ? [0, 0] : r,
                a = z.reduce((function (e, n) {
                    return e[n] = function (e, t, n) {
                        var i = H(e), r = [A, C].indexOf(i) >= 0 ? -1 : 1,
                            s = "function" == typeof n ? n(Object.assign({}, t, {placement: e})) : n, a = s[0],
                            o = s[1];
                        return a = a || 0, o = (o || 0) * r, [A, k].indexOf(i) >= 0 ? {x: o, y: a} : {x: a, y: o}
                    }(n, t.rects, s), e
                }), {}), o = a[t.placement], l = o.x, c = o.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = a
        }
    }, oe = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function le(e) {
        return e.replace(/left|right|bottom|top/g, (function (e) {
            return oe[e]
        }))
    }

    var ce = {start: "end", end: "start"};

    function ue(e) {
        return e.replace(/start|end/g, (function (e) {
            return ce[e]
        }))
    }

    function de(e, t) {
        void 0 === t && (t = {});
        var n = t, i = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, o = n.flipVariations,
            l = n.allowedAutoPlacements, c = void 0 === l ? z : l, u = F(i), d = u ? o ? I : I.filter((function (e) {
                return F(e) === u
            })) : O, p = d.filter((function (e) {
                return c.indexOf(e) >= 0
            }));
        0 === p.length && (p = d);
        var f = p.reduce((function (t, n) {
            return t[n] = U(e, {placement: n, boundary: r, rootBoundary: s, padding: a})[H(n)], t
        }), {});
        return Object.keys(f).sort((function (e, t) {
            return f[e] - f[t]
        }))
    }

    var pe = {
        name: "flip", enabled: !0, phase: "main", fn: function (e) {
            var t = e.state, n = e.options, i = e.name;
            if (!t.modifiersData[i]._skip) {
                for (var r = n.mainAxis, s = void 0 === r || r, a = n.altAxis, o = void 0 === a || a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = void 0 === f || f, m = n.allowedAutoPlacements, g = t.options.placement, v = H(g), y = l || (v !== g && h ? function (e) {
                    if (H(e) === M) return [];
                    var t = le(e);
                    return [ue(e), t, ue(t)]
                }(g) : [le(g)]), b = [g].concat(y).reduce((function (e, n) {
                    return e.concat(H(n) === M ? de(t, {
                        placement: n,
                        boundary: u,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: h,
                        allowedAutoPlacements: m
                    }) : n)
                }), []), w = t.rects.reference, x = t.rects.popper, E = new Map, T = !0, _ = b[0], O = 0; O < b.length; O++) {
                    var P = b[O], D = H(P), N = F(P) === L, I = [C, S].indexOf(D) >= 0, z = I ? "width" : "height",
                        j = U(t, {placement: P, boundary: u, rootBoundary: d, altBoundary: p, padding: c}),
                        $ = I ? N ? k : A : N ? S : C;
                    w[z] > x[z] && ($ = le($));
                    var q = le($), B = [];
                    if (s && B.push(j[D] <= 0), o && B.push(j[$] <= 0, j[q] <= 0), B.every((function (e) {
                        return e
                    }))) {
                        _ = P, T = !1;
                        break
                    }
                    E.set(P, B)
                }
                if (T) for (var R = function (e) {
                    var t = b.find((function (t) {
                        var n = E.get(t);
                        if (n) return n.slice(0, e).every((function (e) {
                            return e
                        }))
                    }));
                    if (t) return _ = t, "break"
                }, W = h ? 3 : 1; W > 0 && "break" !== R(W); W--) ;
                t.placement !== _ && (t.modifiersData[i]._skip = !0, t.placement = _, t.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function fe(e, t, n) {
        return s(e, a(t, n))
    }

    var he = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) {
            var t = e.state, n = e.options, i = e.name, r = n.mainAxis, o = void 0 === r || r, l = n.altAxis,
                c = void 0 !== l && l, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.padding,
                h = n.tether, m = void 0 === h || h, g = n.tetherOffset, v = void 0 === g ? 0 : g,
                b = U(t, {boundary: u, rootBoundary: d, padding: f, altBoundary: p}), w = H(t.placement),
                x = F(t.placement), E = !x, T = G(w), M = "x" === T ? "y" : "x", O = t.modifiersData.popperOffsets,
                P = t.rects.reference, D = t.rects.popper,
                N = "function" == typeof v ? v(Object.assign({}, t.rects, {placement: t.placement})) : v,
                I = "number" == typeof N ? {mainAxis: N, altAxis: N} : Object.assign({mainAxis: 0, altAxis: 0}, N),
                z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {x: 0, y: 0};
            if (O) {
                if (o) {
                    var $, q = "y" === T ? C : A, B = "y" === T ? S : k, R = "y" === T ? "height" : "width", W = O[T],
                        X = W + b[q], V = W - b[B], Y = m ? -D[R] / 2 : 0, K = x === L ? P[R] : D[R],
                        Q = x === L ? -D[R] : -P[R], J = t.elements.arrow, Z = m && J ? y(J) : {width: 0, height: 0},
                        ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, te = ee[q], ne = ee[B], ie = fe(0, P[R], Z[R]),
                        re = E ? P[R] / 2 - Y - ie - te - I.mainAxis : K - ie - te - I.mainAxis,
                        se = E ? -P[R] / 2 + Y + ie + ne + I.mainAxis : Q + ie + ne + I.mainAxis,
                        ae = t.elements.arrow && _(t.elements.arrow),
                        oe = ae ? "y" === T ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
                        le = null != ($ = null == z ? void 0 : z[T]) ? $ : 0, ce = W + se - le,
                        ue = fe(m ? a(X, W + re - le - oe) : X, W, m ? s(V, ce) : V);
                    O[T] = ue, j[T] = ue - W
                }
                if (c) {
                    var de, pe = "x" === T ? C : A, he = "x" === T ? S : k, me = O[M],
                        ge = "y" === M ? "height" : "width", ve = me + b[pe], ye = me - b[he],
                        be = -1 !== [C, A].indexOf(w), we = null != (de = null == z ? void 0 : z[M]) ? de : 0,
                        xe = be ? ve : me - P[ge] - D[ge] - we + I.altAxis,
                        Ee = be ? me + P[ge] + D[ge] - we - I.altAxis : ye, Te = m && be ? function (e, t, n) {
                            var i = fe(e, t, n);
                            return i > n ? n : i
                        }(xe, me, Ee) : fe(m ? xe : ve, me, m ? Ee : ye);
                    O[M] = Te, j[M] = Te - me
                }
                t.modifiersData[i] = j
            }
        }, requiresIfExists: ["offset"]
    }, me = {
        name: "arrow", enabled: !0, phase: "main", fn: function (e) {
            var t, n = e.state, i = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets,
                o = H(n.placement), l = G(o), c = [A, k].indexOf(o) >= 0 ? "height" : "width";
            if (s && a) {
                var u = function (e, t) {
                        return V("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {placement: t.placement})) : e) ? e : Y(e, O))
                    }(r.padding, n), d = y(s), p = "y" === l ? C : A, f = "y" === l ? S : k,
                    h = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
                    m = a[l] - n.rects.reference[l], g = _(s),
                    v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = h / 2 - m / 2, w = u[p],
                    x = v - d[c] - u[f], E = v / 2 - d[c] / 2 + b, T = fe(w, E, x), M = l;
                n.modifiersData[i] = ((t = {})[M] = T, t.centerOffset = T - E, t)
            }
        }, effect: function (e) {
            var t = e.state, n = e.options.element, i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && q(t.elements.popper, i) && (t.elements.arrow = i)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function ge(e, t, n) {
        return void 0 === n && (n = {x: 0, y: 0}), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function ve(e) {
        return [C, k, S, A].some((function (t) {
            return e[t] >= 0
        }))
    }

    var ye = {
            name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) {
                var t = e.state, n = e.name, i = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow,
                    a = U(t, {elementContext: "reference"}), o = U(t, {altBoundary: !0}), l = ge(a, i), c = ge(o, r, s),
                    u = ve(l), d = ve(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: u,
                    hasPopperEscaped: d
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": u,
                    "data-popper-escaped": d
                })
            }
        }, be = J({defaultModifiers: [ee, te, re, se]}), we = [ee, te, re, se, ae, pe, he, me, ye],
        xe = J({defaultModifiers: we});
    e.applyStyles = se, e.arrow = me, e.computeStyles = re, e.createPopper = xe, e.createPopperLite = be, e.defaultModifiers = we, e.detectOverflow = U, e.eventListeners = ee, e.flip = pe, e.hide = ye, e.offset = ae, e.popperGenerator = J, e.popperOffsets = te, e.preventOverflow = he, Object.defineProperty(e, "__esModule", {value: !0})
})), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, (function (e) {
    "use strict";
    const t = function (e) {
            if (e && e.__esModule) return e;
            const t = Object.create(null, {[Symbol.toStringTag]: {value: "Module"}});
            if (e) for (const n in e) if ("default" !== n) {
                const i = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(t, n, i.get ? i : {enumerable: !0, get: () => e[n]})
            }
            return t.default = e, Object.freeze(t)
        }(e), n = "transitionend", i = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null
            }
            return t
        }, r = e => {
            const t = i(e);
            return t && document.querySelector(t) ? t : null
        }, s = e => {
            const t = i(e);
            return t ? document.querySelector(t) : null
        }, a = e => {
            e.dispatchEvent(new Event(n))
        }, o = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        l = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
        c = e => {
            if (!o(e) || 0 === e.getClientRects().length) return !1;
            const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
            if (!n) return t;
            if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1
            }
            return t
        },
        u = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        d = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null
        }, p = () => {
        }, f = e => {
            e.offsetHeight
        }, h = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, m = [],
        g = () => "rtl" === document.documentElement.dir, v = e => {
            var t;
            t = () => {
                const t = h();
                if (t) {
                    const n = e.NAME, i = t.fn[n];
                    t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const e of m) e()
            })), m.push(t)) : t()
        }, y = e => {
            "function" == typeof e && e()
        }, b = (e, t, i = !0) => {
            if (!i) return void y(e);
            const r = (e => {
                if (!e) return 0;
                let {transitionDuration: t, transitionDelay: n} = window.getComputedStyle(e);
                const i = Number.parseFloat(t), r = Number.parseFloat(n);
                return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
            })(t) + 5;
            let s = !1;
            const o = ({target: i}) => {
                i === t && (s = !0, t.removeEventListener(n, o), y(e))
            };
            t.addEventListener(n, o), setTimeout((() => {
                s || a(t)
            }), r)
        }, w = (e, t, n, i) => {
            const r = e.length;
            let s = e.indexOf(t);
            return -1 === s ? !n && i ? e[r - 1] : e[0] : (s += n ? 1 : -1, i && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))])
        }, x = /[^.]*(?=\..*)\.|.*/, E = /\..*/, T = /::\d+$/, _ = {};
    let C = 1;
    const S = {mouseenter: "mouseover", mouseleave: "mouseout"},
        k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function A(e, t) {
        return t && `${t}::${C++}` || e.uidEvent || C++
    }

    function M(e) {
        const t = A(e);
        return e.uidEvent = t, _[t] = _[t] || {}, _[t]
    }

    function O(e, t, n = null) {
        return Object.values(e).find((e => e.callable === t && e.delegationSelector === n))
    }

    function L(e, t, n) {
        const i = "string" == typeof t, r = i ? n : t || n;
        let s = I(e);
        return k.has(s) || (s = e), [i, r, s]
    }

    function P(e, t, n, i, r) {
        if ("string" != typeof t || !e) return;
        let [s, a, o] = L(t, n, i);
        if (t in S) {
            const e = e => function (t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            };
            a = e(a)
        }
        const l = M(e), c = l[o] || (l[o] = {}), u = O(c, a, s ? n : null);
        if (u) return void (u.oneOff = u.oneOff && r);
        const d = A(a, t.replace(x, "")), p = s ? function (e, t, n) {
            return function i(r) {
                const s = e.querySelectorAll(t);
                for (let {target: a} = r; a && a !== this; a = a.parentNode) for (const o of s) if (o === a) return j(r, {delegateTarget: a}), i.oneOff && z.off(e, r.type, t, n), n.apply(a, [r])
            }
        }(e, n, a) : function (e, t) {
            return function n(i) {
                return j(i, {delegateTarget: e}), n.oneOff && z.off(e, i.type, t), t.apply(e, [i])
            }
        }(e, a);
        p.delegationSelector = s ? n : null, p.callable = a, p.oneOff = r, p.uidEvent = d, c[d] = p, e.addEventListener(o, p, s)
    }

    function D(e, t, n, i, r) {
        const s = O(t[n], i, r);
        s && (e.removeEventListener(n, s, Boolean(r)), delete t[n][s.uidEvent])
    }

    function N(e, t, n, i) {
        const r = t[n] || {};
        for (const s of Object.keys(r)) if (s.includes(i)) {
            const i = r[s];
            D(e, t, n, i.callable, i.delegationSelector)
        }
    }

    function I(e) {
        return e = e.replace(E, ""), S[e] || e
    }

    const z = {
        on(e, t, n, i) {
            P(e, t, n, i, !1)
        }, one(e, t, n, i) {
            P(e, t, n, i, !0)
        }, off(e, t, n, i) {
            if ("string" != typeof t || !e) return;
            const [r, s, a] = L(t, n, i), o = a !== t, l = M(e), c = l[a] || {}, u = t.startsWith(".");
            if (void 0 === s) {
                if (u) for (const n of Object.keys(l)) N(e, l, n, t.slice(1));
                for (const n of Object.keys(c)) {
                    const i = n.replace(T, "");
                    if (!o || t.includes(i)) {
                        const t = c[n];
                        D(e, l, a, t.callable, t.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                D(e, l, a, s, r ? n : null)
            }
        }, trigger(e, t, n) {
            if ("string" != typeof t || !e) return null;
            const i = h();
            let r = null, s = !0, a = !0, o = !1;
            t !== I(t) && i && (r = i.Event(t, n), i(e).trigger(r), s = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), o = r.isDefaultPrevented());
            let l = new Event(t, {bubbles: s, cancelable: !0});
            return l = j(l, n), o && l.preventDefault(), a && e.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
        }
    };

    function j(e, t) {
        for (const [n, i] of Object.entries(t || {})) try {
            e[n] = i
        } catch (t) {
            Object.defineProperty(e, n, {configurable: !0, get: () => i})
        }
        return e
    }

    const $ = new Map, H = {
        set(e, t, n) {
            $.has(e) || $.set(e, new Map);
            const i = $.get(e);
            i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        }, get: (e, t) => $.has(e) && $.get(e).get(t) || null, remove(e, t) {
            if (!$.has(e)) return;
            const n = $.get(e);
            n.delete(t), 0 === n.size && $.delete(e)
        }
    };

    function q(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }

    function B(e) {
        return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
    }

    const R = {
        setDataAttribute(e, t, n) {
            e.setAttribute(`data-bs-${B(t)}`, n)
        }, removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${B(t)}`)
        }, getDataAttributes(e) {
            if (!e) return {};
            const t = {}, n = Object.keys(e.dataset).filter((e => e.startsWith("bs") && !e.startsWith("bsConfig")));
            for (const i of n) {
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = q(e.dataset[i])
            }
            return t
        }, getDataAttribute: (e, t) => q(e.getAttribute(`data-bs-${B(t)}`))
    };

    class W {
        static get Default() {
            return {}
        }

        static get DefaultType() {
            return {}
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        _getConfig(e) {
            return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }

        _configAfterMerge(e) {
            return e
        }

        _mergeConfigObj(e, t) {
            const n = o(t) ? R.getDataAttribute(t, "config") : {};
            return {...this.constructor.Default, ..."object" == typeof n ? n : {}, ...o(t) ? R.getDataAttributes(t) : {}, ..."object" == typeof e ? e : {}}
        }

        _typeCheckConfig(e, t = this.constructor.DefaultType) {
            for (const i of Object.keys(t)) {
                const r = t[i], s = e[i],
                    a = o(s) ? "element" : null == (n = s) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)
            }
            var n
        }
    }

    class F extends W {
        constructor(e, t) {
            super(), (e = l(e)) && (this._element = e, this._config = this._getConfig(t), H.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), z.off(this._element, this.constructor.EVENT_KEY);
            for (const e of Object.getOwnPropertyNames(this)) this[e] = null
        }

        _queueCallback(e, t, n = !0) {
            b(e, t, n)
        }

        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }

        static getInstance(e) {
            return H.get(l(e), this.DATA_KEY)
        }

        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }

        static get VERSION() {
            return "5.2.3"
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }

        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }

    const G = (e, t = "hide") => {
        const n = `click.dismiss${e.EVENT_KEY}`, i = e.NAME;
        z.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), u(this)) return;
            const r = s(this) || this.closest(`.${i}`);
            e.getOrCreateInstance(r)[t]()
        }))
    };

    class X extends F {
        static get NAME() {
            return "alert"
        }

        close() {
            if (z.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, e)
        }

        _destroyElement() {
            this._element.remove(), z.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = X.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }

    G(X, "close"), v(X);
    const V = '[data-bs-toggle="button"]';

    class Y extends F {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = Y.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }))
        }
    }

    z.on(document, "click.bs.button.data-api", V, (e => {
        e.preventDefault();
        const t = e.target.closest(V);
        Y.getOrCreateInstance(t).toggle()
    })), v(Y);
    const U = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
            parents(e, t) {
                const n = [];
                let i = e.parentNode.closest(t);
                for (; i;) n.push(i), i = i.parentNode.closest(t);
                return n
            },
            prev(e, t) {
                let n = e.previousElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let n = e.nextElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            },
            focusableChildren(e) {
                const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(",");
                return this.find(t, e).filter((e => !u(e) && c(e)))
            }
        }, K = {endCallback: null, leftCallback: null, rightCallback: null},
        Q = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

    class J extends W {
        constructor(e, t) {
            super(), this._element = e, e && J.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }

        static get Default() {
            return K
        }

        static get DefaultType() {
            return Q
        }

        static get NAME() {
            return "swipe"
        }

        dispose() {
            z.off(this._element, ".bs.swipe")
        }

        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }

        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), y(this._config.endCallback)
        }

        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }

        _handleSwipe() {
            const e = Math.abs(this._deltaX);
            if (e <= 40) return;
            const t = e / this._deltaX;
            this._deltaX = 0, t && y(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }

        _initEvents() {
            this._supportPointerEvents ? (z.on(this._element, "pointerdown.bs.swipe", (e => this._start(e))), z.on(this._element, "pointerup.bs.swipe", (e => this._end(e))), this._element.classList.add("pointer-event")) : (z.on(this._element, "touchstart.bs.swipe", (e => this._start(e))), z.on(this._element, "touchmove.bs.swipe", (e => this._move(e))), z.on(this._element, "touchend.bs.swipe", (e => this._end(e))))
        }

        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }

        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }

    const Z = "next", ee = "prev", te = "left", ne = "right", ie = "slid.bs.carousel", re = "carousel", se = "active",
        ae = {ArrowLeft: ne, ArrowRight: te},
        oe = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, le = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };

    class ce extends F {
        constructor(e, t) {
            super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === re && this.cycle()
        }

        static get Default() {
            return oe
        }

        static get DefaultType() {
            return le
        }

        static get NAME() {
            return "carousel"
        }

        next() {
            this._slide(Z)
        }

        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next()
        }

        prev() {
            this._slide(ee)
        }

        pause() {
            this._isSliding && a(this._element), this._clearInterval()
        }

        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }

        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? z.one(this._element, ie, (() => this.cycle())) : this.cycle())
        }

        to(e) {
            const t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding) return void z.one(this._element, ie, (() => this.to(e)));
            const n = this._getItemIndex(this._getActive());
            if (n === e) return;
            const i = e > n ? Z : ee;
            this._slide(i, t[e])
        }

        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }

        _configAfterMerge(e) {
            return e.defaultInterval = e.interval, e
        }

        _addEventListeners() {
            this._config.keyboard && z.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (z.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), z.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && J.isSupported() && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            for (const e of U.find(".carousel-item img", this._element)) z.on(e, "dragstart.bs.carousel", (e => e.preventDefault()));
            const e = {
                leftCallback: () => this._slide(this._directionToOrder(te)),
                rightCallback: () => this._slide(this._directionToOrder(ne)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new J(this._element, e)
        }

        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = ae[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
        }

        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }

        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            const t = U.findOne(".active", this._indicatorsElement);
            t.classList.remove(se), t.removeAttribute("aria-current");
            const n = U.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            n && (n.classList.add(se), n.setAttribute("aria-current", "true"))
        }

        _updateInterval() {
            const e = this._activeElement || this._getActive();
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }

        _slide(e, t = null) {
            if (this._isSliding) return;
            const n = this._getActive(), i = e === Z, r = t || w(this._getItems(), n, i, this._config.wrap);
            if (r === n) return;
            const s = this._getItemIndex(r), a = t => z.trigger(this._element, t, {
                relatedTarget: r,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(n),
                to: s
            });
            if (a("slide.bs.carousel").defaultPrevented) return;
            if (!n || !r) return;
            const o = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(s), this._activeElement = r;
            const l = i ? "carousel-item-start" : "carousel-item-end",
                c = i ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(c), f(r), n.classList.add(l), r.classList.add(l), this._queueCallback((() => {
                r.classList.remove(l, c), r.classList.add(se), n.classList.remove(se, c, l), this._isSliding = !1, a(ie)
            }), n, this._isAnimated()), o && this.cycle()
        }

        _isAnimated() {
            return this._element.classList.contains("slide")
        }

        _getActive() {
            return U.findOne(".active.carousel-item", this._element)
        }

        _getItems() {
            return U.find(".carousel-item", this._element)
        }

        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }

        _directionToOrder(e) {
            return g() ? e === te ? ee : Z : e === te ? Z : ee
        }

        _orderToDirection(e) {
            return g() ? e === ee ? te : ne : e === ee ? ne : te
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = ce.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else t.to(e)
            }))
        }
    }

    z.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function (e) {
        const t = s(this);
        if (!t || !t.classList.contains(re)) return;
        e.preventDefault();
        const n = ce.getOrCreateInstance(t), i = this.getAttribute("data-bs-slide-to");
        return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === R.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle())
    })), z.on(window, "load.bs.carousel.data-api", (() => {
        const e = U.find('[data-bs-ride="carousel"]');
        for (const t of e) ce.getOrCreateInstance(t)
    })), v(ce);
    const ue = "show", de = "collapse", pe = "collapsing", fe = '[data-bs-toggle="collapse"]',
        he = {parent: null, toggle: !0}, me = {parent: "(null|element)", toggle: "boolean"};

    class ge extends F {
        constructor(e, t) {
            super(e, t), this._isTransitioning = !1, this._triggerArray = [];
            const n = U.find(fe);
            for (const e of n) {
                const t = r(e), n = U.find(t).filter((e => e === this._element));
                null !== t && n.length && this._triggerArray.push(e)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return he
        }

        static get DefaultType() {
            return me
        }

        static get NAME() {
            return "collapse"
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => ge.getOrCreateInstance(e, {toggle: !1})))), e.length && e[0]._isTransitioning) return;
            if (z.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const t of e) t.hide();
            const t = this._getDimension();
            this._element.classList.remove(de), this._element.classList.add(pe), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(de, ue), this._element.style[t] = "", z.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[t] = `${this._element[n]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (z.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const e = this._getDimension();
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, f(this._element), this._element.classList.add(pe), this._element.classList.remove(de, ue);
            for (const e of this._triggerArray) {
                const t = s(e);
                t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(de), z.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }

        _isShown(e = this._element) {
            return e.classList.contains(ue)
        }

        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle), e.parent = l(e.parent), e
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            const e = this._getFirstLevelChildren(fe);
            for (const t of e) {
                const e = s(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
        }

        _getFirstLevelChildren(e) {
            const t = U.find(":scope .collapse .collapse", this._config.parent);
            return U.find(e, this._config.parent).filter((e => !t.includes(e)))
        }

        _addAriaAndCollapsedClass(e, t) {
            if (e.length) for (const n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t)
        }

        static jQueryInterface(e) {
            const t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each((function () {
                const n = ge.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            }))
        }
    }

    z.on(document, "click.bs.collapse.data-api", fe, (function (e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const t = r(this), n = U.find(t);
        for (const e of n) ge.getOrCreateInstance(e, {toggle: !1}).toggle()
    })), v(ge);
    const ve = "dropdown", ye = "ArrowUp", be = "ArrowDown", we = "click.bs.dropdown.data-api",
        xe = "keydown.bs.dropdown.data-api", Ee = "show",
        Te = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', _e = `${Te}.show`, Ce = ".dropdown-menu",
        Se = g() ? "top-end" : "top-start", ke = g() ? "top-start" : "top-end",
        Ae = g() ? "bottom-end" : "bottom-start", Me = g() ? "bottom-start" : "bottom-end",
        Oe = g() ? "left-start" : "right-start", Le = g() ? "right-start" : "left-start", Pe = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        }, De = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };

    class Ne extends F {
        constructor(e, t) {
            super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = U.next(this._element, Ce)[0] || U.prev(this._element, Ce)[0] || U.findOne(Ce, this._parent), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return Pe
        }

        static get DefaultType() {
            return De
        }

        static get NAME() {
            return ve
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (u(this._element) || this._isShown()) return;
            const e = {relatedTarget: this._element};
            if (!z.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const e of [].concat(...document.body.children)) z.on(e, "mouseover", p);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ee), this._element.classList.add(Ee), z.trigger(this._element, "shown.bs.dropdown", e)
            }
        }

        hide() {
            if (u(this._element) || !this._isShown()) return;
            const e = {relatedTarget: this._element};
            this._completeHide(e)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(e) {
            if (!z.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const e of [].concat(...document.body.children)) z.off(e, "mouseover", p);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ee), this._element.classList.remove(Ee), this._element.setAttribute("aria-expanded", "false"), R.removeDataAttribute(this._menu, "popper"), z.trigger(this._element, "hidden.bs.dropdown", e)
            }
        }

        _getConfig(e) {
            if ("object" == typeof (e = super._getConfig(e)).reference && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }

        _createPopper() {
            if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : o(this._config.reference) ? e = l(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const n = this._getPopperConfig();
            this._popper = t.createPopper(e, this._menu, n)
        }

        _isShown() {
            return this._menu.classList.contains(Ee)
        }

        _getPlacement() {
            const e = this._parent;
            if (e.classList.contains("dropend")) return Oe;
            if (e.classList.contains("dropstart")) return Le;
            if (e.classList.contains("dropup-center")) return "top";
            if (e.classList.contains("dropdown-center")) return "bottom";
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? ke : Se : t ? Me : Ae
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (R.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig}
        }

        _selectMenuItem({key: e, target: t}) {
            const n = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e => c(e)));
            n.length && w(n, t, e === be, !n.includes(t)).focus()
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = Ne.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }

        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
            const t = U.find(_e);
            for (const n of t) {
                const t = Ne.getInstance(n);
                if (!t || !1 === t._config.autoClose) continue;
                const i = e.composedPath(), r = i.includes(t._menu);
                if (i.includes(t._element) || "inside" === t._config.autoClose && !r || "outside" === t._config.autoClose && r) continue;
                if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                const s = {relatedTarget: t._element};
                "click" === e.type && (s.clickEvent = e), t._completeHide(s)
            }
        }

        static dataApiKeydownHandler(e) {
            const t = /input|textarea/i.test(e.target.tagName), n = "Escape" === e.key, i = [ye, be].includes(e.key);
            if (!i && !n) return;
            if (t && !n) return;
            e.preventDefault();
            const r = this.matches(Te) ? this : U.prev(this, Te)[0] || U.next(this, Te)[0] || U.findOne(Te, e.delegateTarget.parentNode),
                s = Ne.getOrCreateInstance(r);
            if (i) return e.stopPropagation(), s.show(), void s._selectMenuItem(e);
            s._isShown() && (e.stopPropagation(), s.hide(), r.focus())
        }
    }

    z.on(document, xe, Te, Ne.dataApiKeydownHandler), z.on(document, xe, Ce, Ne.dataApiKeydownHandler), z.on(document, we, Ne.clearMenus), z.on(document, "keyup.bs.dropdown.data-api", Ne.clearMenus), z.on(document, we, Te, (function (e) {
        e.preventDefault(), Ne.getOrCreateInstance(this).toggle()
    })), v(Ne);
    const Ie = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ze = ".sticky-top", je = "padding-right",
        $e = "margin-right";

    class He {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }

        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, je, (t => t + e)), this._setElementAttributes(Ie, je, (t => t + e)), this._setElementAttributes(ze, $e, (t => t - e))
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, je), this._resetElementAttributes(Ie, je), this._resetElementAttributes(ze, $e)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(e, t, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(e, (e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                const r = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(r))}px`)
            }))
        }

        _saveInitialAttribute(e, t) {
            const n = e.style.getPropertyValue(t);
            n && R.setDataAttribute(e, t, n)
        }

        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e => {
                const n = R.getDataAttribute(e, t);
                null !== n ? (R.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t)
            }))
        }

        _applyManipulationCallback(e, t) {
            if (o(e)) t(e); else for (const n of U.find(e, this._element)) t(n)
        }
    }

    const qe = "show", Be = "mousedown.bs.backdrop",
        Re = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"},
        We = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };

    class Fe extends W {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }

        static get Default() {
            return Re
        }

        static get DefaultType() {
            return We
        }

        static get NAME() {
            return "backdrop"
        }

        show(e) {
            if (!this._config.isVisible) return void y(e);
            this._append();
            const t = this._getElement();
            this._config.isAnimated && f(t), t.classList.add(qe), this._emulateAnimation((() => {
                y(e)
            }))
        }

        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(qe), this._emulateAnimation((() => {
                this.dispose(), y(e)
            }))) : y(e)
        }

        dispose() {
            this._isAppended && (z.off(this._element, Be), this._element.remove(), this._isAppended = !1)
        }

        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }

        _configAfterMerge(e) {
            return e.rootElement = l(e.rootElement), e
        }

        _append() {
            if (this._isAppended) return;
            const e = this._getElement();
            this._config.rootElement.append(e), z.on(e, Be, (() => {
                y(this._config.clickCallback)
            })), this._isAppended = !0
        }

        _emulateAnimation(e) {
            b(e, this._getElement(), this._config.isAnimated)
        }
    }

    const Ge = ".bs.focustrap", Xe = "backward", Ve = {autofocus: !0, trapElement: null},
        Ye = {autofocus: "boolean", trapElement: "element"};

    class Ue extends W {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
        }

        static get Default() {
            return Ve
        }

        static get DefaultType() {
            return Ye
        }

        static get NAME() {
            return "focustrap"
        }

        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), z.off(document, Ge), z.on(document, "focusin.bs.focustrap", (e => this._handleFocusin(e))), z.on(document, "keydown.tab.bs.focustrap", (e => this._handleKeydown(e))), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, z.off(document, Ge))
        }

        _handleFocusin(e) {
            const {trapElement: t} = this._config;
            if (e.target === document || e.target === t || t.contains(e.target)) return;
            const n = U.focusableChildren(t);
            0 === n.length ? t.focus() : this._lastTabNavDirection === Xe ? n[n.length - 1].focus() : n[0].focus()
        }

        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Xe : "forward")
        }
    }

    const Ke = "hidden.bs.modal", Qe = "show.bs.modal", Je = "modal-open", Ze = "show", et = "modal-static",
        tt = {backdrop: !0, focus: !0, keyboard: !0},
        nt = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

    class it extends F {
        constructor(e, t) {
            super(e, t), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new He, this._addEventListeners()
        }

        static get Default() {
            return tt
        }

        static get DefaultType() {
            return nt
        }

        static get NAME() {
            return "modal"
        }

        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }

        show(e) {
            this._isShown || this._isTransitioning || z.trigger(this._element, Qe, {relatedTarget: e}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Je), this._adjustDialog(), this._backdrop.show((() => this._showElement(e))))
        }

        hide() {
            this._isShown && !this._isTransitioning && (z.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ze), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }

        dispose() {
            for (const e of [window, this._dialog]) z.off(e, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new Fe({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new Ue({trapElement: this._element})
        }

        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const t = U.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0), f(this._element), this._element.classList.add(Ze), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, z.trigger(this._element, "shown.bs.modal", {relatedTarget: e})
            }), this._dialog, this._isAnimated())
        }

        _addEventListeners() {
            z.on(this._element, "keydown.dismiss.bs.modal", (e => {
                if ("Escape" === e.key) return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            })), z.on(window, "resize.bs.modal", (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), z.on(this._element, "mousedown.dismiss.bs.modal", (e => {
                z.one(this._element, "click.dismiss.bs.modal", (t => {
                    this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Je), this._resetAdjustments(), this._scrollBar.reset(), z.trigger(this._element, Ke)
            }))
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (z.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(et) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(et), this._queueCallback((() => {
                this._element.classList.remove(et), this._queueCallback((() => {
                    this._element.style.overflowY = t
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }

        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(), n = t > 0;
            if (n && !e) {
                const e = g() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`
            }
            if (!n && e) {
                const e = g() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`
            }
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(e, t) {
            return this.each((function () {
                const n = it.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            }))
        }
    }

    z.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (e) {
        const t = s(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), z.one(t, Qe, (e => {
            e.defaultPrevented || z.one(t, Ke, (() => {
                c(this) && this.focus()
            }))
        }));
        const n = U.findOne(".modal.show");
        n && it.getInstance(n).hide(), it.getOrCreateInstance(t).toggle(this)
    })), G(it), v(it);
    const rt = "show", st = "showing", at = "hiding", ot = ".offcanvas.show", lt = "hidePrevented.bs.offcanvas",
        ct = "hidden.bs.offcanvas", ut = {backdrop: !0, keyboard: !0, scroll: !1},
        dt = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

    class pt extends F {
        constructor(e, t) {
            super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get Default() {
            return ut
        }

        static get DefaultType() {
            return dt
        }

        static get NAME() {
            return "offcanvas"
        }

        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }

        show(e) {
            this._isShown || z.trigger(this._element, "show.bs.offcanvas", {relatedTarget: e}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new He).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(st), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(rt), this._element.classList.remove(st), z.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: e})
            }), this._element, !0))
        }

        hide() {
            this._isShown && (z.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(at), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(rt, at), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new He).reset(), z.trigger(this._element, ct)
            }), this._element, !0)))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _initializeBackDrop() {
            const e = Boolean(this._config.backdrop);
            return new Fe({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? () => {
                    "static" !== this._config.backdrop ? this.hide() : z.trigger(this._element, lt)
                } : null
            })
        }

        _initializeFocusTrap() {
            return new Ue({trapElement: this._element})
        }

        _addEventListeners() {
            z.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
                "Escape" === e.key && (this._config.keyboard ? this.hide() : z.trigger(this._element, lt))
            }))
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = pt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }

    z.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (e) {
        const t = s(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
        z.one(t, ct, (() => {
            c(this) && this.focus()
        }));
        const n = U.findOne(ot);
        n && n !== t && pt.getInstance(n).hide(), pt.getOrCreateInstance(t).toggle(this)
    })), z.on(window, "load.bs.offcanvas.data-api", (() => {
        for (const e of U.find(ot)) pt.getOrCreateInstance(e).show()
    })), z.on(window, "resize.bs.offcanvas", (() => {
        for (const e of U.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && pt.getOrCreateInstance(e).hide()
    })), G(pt), v(pt);
    const ft = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        ht = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        mt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        gt = (e, t) => {
            const n = e.nodeName.toLowerCase();
            return t.includes(n) ? !ft.has(n) || Boolean(ht.test(e.nodeValue) || mt.test(e.nodeValue)) : t.filter((e => e instanceof RegExp)).some((e => e.test(n)))
        }, vt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, yt = {
            allowList: vt,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        }, bt = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        }, wt = {entry: "(string|element|function|null)", selector: "(string|element)"};

    class xt extends W {
        constructor(e) {
            super(), this._config = this._getConfig(e)
        }

        static get Default() {
            return yt
        }

        static get DefaultType() {
            return bt
        }

        static get NAME() {
            return "TemplateFactory"
        }

        getContent() {
            return Object.values(this._config.content).map((e => this._resolvePossibleFunction(e))).filter(Boolean)
        }

        hasContent() {
            return this.getContent().length > 0
        }

        changeContent(e) {
            return this._checkContent(e), this._config.content = {...this._config.content, ...e}, this
        }

        toHtml() {
            const e = document.createElement("div");
            e.innerHTML = this._maybeSanitize(this._config.template);
            for (const [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
            const t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
            return n && t.classList.add(...n.split(" ")), t
        }

        _typeCheckConfig(e) {
            super._typeCheckConfig(e), this._checkContent(e.content)
        }

        _checkContent(e) {
            for (const [t, n] of Object.entries(e)) super._typeCheckConfig({selector: t, entry: n}, wt)
        }

        _setContent(e, t, n) {
            const i = U.findOne(n, e);
            i && ((t = this._resolvePossibleFunction(t)) ? o(t) ? this._putElementInTemplate(l(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
        }

        _maybeSanitize(e) {
            return this._config.sanitize ? function (e, t, n) {
                if (!e.length) return e;
                if (n && "function" == typeof n) return n(e);
                const i = (new window.DOMParser).parseFromString(e, "text/html"),
                    r = [].concat(...i.body.querySelectorAll("*"));
                for (const e of r) {
                    const n = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(n)) {
                        e.remove();
                        continue
                    }
                    const i = [].concat(...e.attributes), r = [].concat(t["*"] || [], t[n] || []);
                    for (const t of i) gt(t, r) || e.removeAttribute(t.nodeName)
                }
                return i.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }

        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e(this) : e
        }

        _putElementInTemplate(e, t) {
            if (this._config.html) return t.innerHTML = "", void t.append(e);
            t.textContent = e.textContent
        }
    }

    const Et = new Set(["sanitize", "allowList", "sanitizeFn"]), Tt = "fade", _t = "show", Ct = ".modal",
        St = "hide.bs.modal", kt = "hover", At = "focus",
        Mt = {AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left"},
        Ot = {
            allowList: vt,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        }, Lt = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };

    class Pt extends F {
        constructor(e, n) {
            if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }

        static get Default() {
            return Ot
        }

        static get DefaultType() {
            return Lt
        }

        static get NAME() {
            return "tooltip"
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }

        dispose() {
            clearTimeout(this._timeout), z.off(this._element.closest(Ct), St, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const e = z.trigger(this._element, this.constructor.eventName("show")),
                t = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this._disposePopper();
            const n = this._getTipElement();
            this._element.setAttribute("aria-describedby", n.getAttribute("id"));
            const {container: i} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), z.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(_t), "ontouchstart" in document.documentElement) for (const e of [].concat(...document.body.children)) z.on(e, "mouseover", p);
            this._queueCallback((() => {
                z.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }

        hide() {
            if (this._isShown() && !z.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(_t), "ontouchstart" in document.documentElement) for (const e of [].concat(...document.body.children)) z.off(e, "mouseover", p);
                this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), z.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
        }

        update() {
            this._popper && this._popper.update()
        }

        _isWithContent() {
            return Boolean(this._getTitle())
        }

        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }

        _createTipElement(e) {
            const t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(Tt, _t), t.classList.add(`bs-${this.constructor.NAME}-auto`);
            const n = (e => {
                do {
                    e += Math.floor(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            })(this.constructor.NAME).toString();
            return t.setAttribute("id", n), this._isAnimated() && t.classList.add(Tt), t
        }

        setContent(e) {
            this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
        }

        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new xt({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }

        _getContentForTemplate() {
            return {".tooltip-inner": this._getTitle()}
        }

        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }

        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }

        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Tt)
        }

        _isShown() {
            return this.tip && this.tip.classList.contains(_t)
        }

        _createPopper(e) {
            const n = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                i = Mt[n.toUpperCase()];
            return t.createPopper(this._element, e, this._getPopperConfig(i))
        }

        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }

        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e => {
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _setListeners() {
            const e = this._config.trigger.split(" ");
            for (const t of e) if ("click" === t) z.on(this._element, this.constructor.eventName("click"), this._config.selector, (e => {
                this._initializeOnDelegatedTarget(e).toggle()
            })); else if ("manual" !== t) {
                const e = t === kt ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    n = t === kt ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                z.on(this._element, e, this._config.selector, (e => {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusin" === e.type ? At : kt] = !0, t._enter()
                })), z.on(this._element, n, this._config.selector, (e => {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusout" === e.type ? At : kt] = t._element.contains(e.relatedTarget), t._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, z.on(this._element.closest(Ct), St, this._hideModalHandler)
        }

        _fixTitle() {
            const e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
        }

        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }

        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }

        _setTimeout(e, t) {
            clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
        }

        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }

        _getConfig(e) {
            const t = R.getDataAttributes(this._element);
            for (const e of Object.keys(t)) Et.has(e) && delete t[e];
            return e = {...t, ..."object" == typeof e && e ? e : {}}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }

        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : l(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
        }

        _getDelegateConfig() {
            const e = {};
            for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e.selector = !1, e.trigger = "manual", e
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = Pt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }

    v(Pt);
    const Dt = {
        ...Pt.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, Nt = {...Pt.DefaultType, content: "(null|string|element|function)"};

    class It extends Pt {
        static get Default() {
            return Dt
        }

        static get DefaultType() {
            return Nt
        }

        static get NAME() {
            return "popover"
        }

        _isWithContent() {
            return this._getTitle() || this._getContent()
        }

        _getContentForTemplate() {
            return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = It.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }

    v(It);
    const zt = "click.bs.scrollspy", jt = "active", $t = "[href]",
        Ht = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1]}, qt = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };

    class Bt extends F {
        constructor(e, t) {
            super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }

        static get Default() {
            return Ht
        }

        static get DefaultType() {
            return qt
        }

        static get NAME() {
            return "scrollspy"
        }

        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const e of this._observableSections.values()) this._observer.observe(e)
        }

        dispose() {
            this._observer.disconnect(), super.dispose()
        }

        _configAfterMerge(e) {
            return e.target = l(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))), e
        }

        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (z.off(this._config.target, zt), z.on(this._config.target, zt, $t, (e => {
                const t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    const n = this._rootElement || window, i = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo) return void n.scrollTo({top: i, behavior: "smooth"});
                    n.scrollTop = i
                }
            })))
        }

        _getNewObserver() {
            const e = {root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin};
            return new IntersectionObserver((e => this._observerCallback(e)), e)
        }

        _observerCallback(e) {
            const t = e => this._targetLinks.get(`#${e.target.id}`), n = e => {
                    this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
                }, i = (this._rootElement || document.documentElement).scrollTop,
                r = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const s of e) {
                if (!s.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(t(s));
                    continue
                }
                const e = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (r && e) {
                    if (n(s), !i) return
                } else r || e || n(s)
            }
        }

        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const e = U.find($t, this._config.target);
            for (const t of e) {
                if (!t.hash || u(t)) continue;
                const e = U.findOne(t.hash, this._element);
                c(e) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, e))
            }
        }

        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(jt), this._activateParents(e), z.trigger(this._element, "activate.bs.scrollspy", {relatedTarget: e}))
        }

        _activateParents(e) {
            if (e.classList.contains("dropdown-item")) U.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(jt); else for (const t of U.parents(e, ".nav, .list-group")) for (const e of U.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) e.classList.add(jt)
        }

        _clearActiveClass(e) {
            e.classList.remove(jt);
            const t = U.find("[href].active", e);
            for (const e of t) e.classList.remove(jt)
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }

    z.on(window, "load.bs.scrollspy.data-api", (() => {
        for (const e of U.find('[data-bs-spy="scroll"]')) Bt.getOrCreateInstance(e)
    })), v(Bt);
    const Rt = "ArrowLeft", Wt = "ArrowRight", Ft = "ArrowUp", Gt = "ArrowDown", Xt = "active", Vt = "fade",
        Yt = "show", Ut = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Kt = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ut}`;

    class Qt extends F {
        constructor(e) {
            super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), z.on(this._element, "keydown.bs.tab", (e => this._keydown(e))))
        }

        static get NAME() {
            return "tab"
        }

        show() {
            const e = this._element;
            if (this._elemIsActive(e)) return;
            const t = this._getActiveElem(), n = t ? z.trigger(t, "hide.bs.tab", {relatedTarget: e}) : null;
            z.trigger(e, "show.bs.tab", {relatedTarget: t}).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
        }

        _activate(e, t) {
            e && (e.classList.add(Xt), this._activate(s(e)), this._queueCallback((() => {
                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), z.trigger(e, "shown.bs.tab", {relatedTarget: t})) : e.classList.add(Yt)
            }), e, e.classList.contains(Vt)))
        }

        _deactivate(e, t) {
            e && (e.classList.remove(Xt), e.blur(), this._deactivate(s(e)), this._queueCallback((() => {
                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), z.trigger(e, "hidden.bs.tab", {relatedTarget: t})) : e.classList.remove(Yt)
            }), e, e.classList.contains(Vt)))
        }

        _keydown(e) {
            if (![Rt, Wt, Ft, Gt].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            const t = [Wt, Gt].includes(e.key), n = w(this._getChildren().filter((e => !u(e))), e.target, t, !0);
            n && (n.focus({preventScroll: !0}), Qt.getOrCreateInstance(n).show())
        }

        _getChildren() {
            return U.find(Kt, this._parent)
        }

        _getActiveElem() {
            return this._getChildren().find((e => this._elemIsActive(e))) || null
        }

        _setInitialAttributes(e, t) {
            this._setAttributeIfNotExists(e, "role", "tablist");
            for (const e of t) this._setInitialAttributesOnChild(e)
        }

        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            const t = this._elemIsActive(e), n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
        }

        _setInitialAttributesOnTargetPanel(e) {
            const t = s(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`))
        }

        _toggleDropDown(e, t) {
            const n = this._getOuterElement(e);
            if (!n.classList.contains("dropdown")) return;
            const i = (e, i) => {
                const r = U.findOne(e, n);
                r && r.classList.toggle(i, t)
            };
            i(".dropdown-toggle", Xt), i(".dropdown-menu", Yt), n.setAttribute("aria-expanded", t)
        }

        _setAttributeIfNotExists(e, t, n) {
            e.hasAttribute(t) || e.setAttribute(t, n)
        }

        _elemIsActive(e) {
            return e.classList.contains(Xt)
        }

        _getInnerElement(e) {
            return e.matches(Kt) ? e : U.findOne(Kt, e)
        }

        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = Qt.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }

    z.on(document, "click.bs.tab", Ut, (function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this) || Qt.getOrCreateInstance(this).show()
    })), z.on(window, "load.bs.tab", (() => {
        for (const e of U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Qt.getOrCreateInstance(e)
    })), v(Qt);
    const Jt = "hide", Zt = "show", en = "showing", tn = {animation: "boolean", autohide: "boolean", delay: "number"},
        nn = {animation: !0, autohide: !0, delay: 5e3};

    class rn extends F {
        constructor(e, t) {
            super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get Default() {
            return nn
        }

        static get DefaultType() {
            return tn
        }

        static get NAME() {
            return "toast"
        }

        show() {
            z.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Jt), f(this._element), this._element.classList.add(Zt, en), this._queueCallback((() => {
                this._element.classList.remove(en), z.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }

        hide() {
            this.isShown() && (z.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(en), this._queueCallback((() => {
                this._element.classList.add(Jt), this._element.classList.remove(en, Zt), z.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }

        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Zt), super.dispose()
        }

        isShown() {
            return this._element.classList.contains(Zt)
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }

        _onInteraction(e, t) {
            switch (e.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }

        _setListeners() {
            z.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), z.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), z.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), z.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(e) {
            return this.each((function () {
                const t = rn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }

    return G(rn), v(rn), {
        Alert: X,
        Button: Y,
        Carousel: ce,
        Collapse: ge,
        Dropdown: Ne,
        Modal: it,
        Offcanvas: pt,
        Popover: It,
        ScrollSpy: Bt,
        Tab: Qt,
        Toast: rn,
        Tooltip: Pt
    }
})), function () {
    function e(e) {
        return z(e) && Z.call(e, "callee") && !re.call(e, "callee")
    }

    function t(e, t) {
        return e.push.apply(e, t), e
    }

    function n(e) {
        return function (t) {
            return null == t ? W : t[e]
        }
    }

    function i(e) {
        return e instanceof r ? e : new r(e)
    }

    function r(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t
    }

    function s(e, t, n) {
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return setTimeout((function () {
            e.apply(W, n)
        }), t)
    }

    function a(e, t, n) {
        for (var i = -1, r = e.length; ++i < r;) {
            var s = e[i], a = t(s);
            if (null != a && (o === W ? a == a : n(a, o))) var o = a, l = s
        }
        return l
    }

    function o(e, t) {
        var n = [];
        return ce(e, (function (e, i, r) {
            t(e, i, r) && n.push(e)
        })), n
    }

    function l(e, n, i, r, s) {
        var a = -1, o = e.length;
        for (i || (i = T), s || (s = []); ++a < o;) {
            var c = e[a];
            0 < n && i(c) ? 1 < n ? l(c, n - 1, i, r, s) : t(s, c) : r || (s[s.length] = c)
        }
        return s
    }

    function c(e, t) {
        return e && ue(e, t, Ee)
    }

    function u(e, t) {
        return o(t, (function (t) {
            return N(e[t])
        }))
    }

    function d(e, t) {
        return e > t
    }

    function p(e, t, n, i, r) {
        return e === t || (null == e || null == t || !z(e) && !z(t) ? e != e && t != t : function (e, t, n, i, r, s) {
            var a = ge(e), o = ge(t), l = a ? "[object Array]" : te.call(e), c = o ? "[object Array]" : te.call(t),
                u = "[object Object]" == (l = "[object Arguments]" == l ? "[object Object]" : l);
            o = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c), c = l == c, s || (s = []);
            var d = pe(s, (function (t) {
                return t[0] == e
            })), p = pe(s, (function (e) {
                return e[0] == t
            }));
            if (d && p) return d[1] == t;
            if (s.push([e, t]), s.push([t, e]), c && !u) {
                if (a) n = function (e, t, n, i, r, s) {
                    var a = e.length, o = t.length;
                    if (a != o && !(1 & n && o > a)) return !1;
                    o = -1;
                    for (var l = !0, c = 2 & n ? [] : W; ++o < a;) {
                        var u = e[o], d = t[o];
                        if (c) {
                            if (!w(t, (function (e, t) {
                                if (!A(c, t) && (u === e || r(u, e, n, i, s))) return c.push(t)
                            }))) {
                                l = !1;
                                break
                            }
                        } else if (u !== d && !r(u, d, n, i, s)) {
                            l = !1;
                            break
                        }
                    }
                    return l
                }(e, t, n, i, r, s); else e:{
                    switch (l) {
                        case"[object Boolean]":
                        case"[object Date]":
                        case"[object Number]":
                            n = P(+e, +t);
                            break e;
                        case"[object Error]":
                            n = e.name == t.name && e.message == t.message;
                            break e;
                        case"[object RegExp]":
                        case"[object String]":
                            n = e == t + "";
                            break e
                    }
                    n = !1
                }
                return s.pop(), n
            }
            return 1 & n || (a = u && Z.call(e, "__wrapped__"), l = o && Z.call(t, "__wrapped__"), !a && !l) ? !!c && (n = function (e, t, n, i, r, s) {
                var a = 1 & n, o = Ee(e), l = o.length, c = Ee(t).length;
                if (l != c && !a) return !1;
                for (var u = l; u--;) {
                    var d = o[u];
                    if (!(a ? d in t : Z.call(t, d))) return !1
                }
                for (c = !0; ++u < l;) {
                    var p = e[d = o[u]], f = t[d];
                    if (p !== f && !r(p, f, n, i, s)) {
                        c = !1;
                        break
                    }
                    a || (a = "constructor" == d)
                }
                return c && !a && (n = e.constructor) != (i = t.constructor) && "constructor" in e && "constructor" in t && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) && (c = !1), c
            }(e, t, n, i, r, s), s.pop(), n) : (n = r(a = a ? e.value() : e, l = l ? t.value() : t, n, i, s), s.pop(), n)
        }(e, t, n, i, p, r))
    }

    function f(e) {
        return "function" == typeof e ? e : null == e ? B : ("object" == typeof e ? g : n)(e)
    }

    function h(e, t) {
        return e < t
    }

    function m(e, t) {
        var n = -1, i = D(e) ? Array(e.length) : [];
        return ce(e, (function (e, r, s) {
            i[++n] = t(e, r, s)
        })), i
    }

    function g(e) {
        var t = ae(e);
        return function (n) {
            var i = t.length;
            if (null == n) return !i;
            for (n = Object(n); i--;) {
                var r = t[i];
                if (!(r in n) || !p(e[r], n[r], 3)) return !1
            }
            return !0
        }
    }

    function v(e) {
        return de(C(e, void 0, B), e + "")
    }

    function y(e, t, n) {
        var i = -1, r = e.length;
        for (0 > t && (t = -t > r ? 0 : r + t), 0 > (n = n > r ? r : n) && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0, n = Array(r); ++i < r;) n[i] = e[i + t];
        return n
    }

    function b(e) {
        return y(e, 0, e.length)
    }

    function w(e, t) {
        var n;
        return ce(e, (function (e, i, r) {
            return !(n = t(e, i, r))
        })), !!n
    }

    function x(e, t, n) {
        var i = !n;
        n || (n = {});
        for (var r = -1, s = t.length; ++r < s;) {
            var a = t[r], o = W;
            if (o === W && (o = e[a]), i) n[a] = o; else {
                var l = n, c = l[a];
                Z.call(l, a) && P(c, o) && (o !== W || a in l) || (l[a] = o)
            }
        }
        return n
    }

    function E(e) {
        return v((function (t, n) {
            var i = -1, r = n.length, s = 1 < r ? n[r - 1] : W;
            for (s = 3 < e.length && "function" == typeof s ? (r--, s) : W, t = Object(t); ++i < r;) {
                var a = n[i];
                a && e(t, a, i, s)
            }
            return t
        }))
    }

    function T(t) {
        return ge(t) || e(t)
    }

    function _(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t
    }

    function C(e, t, n) {
        return t = oe(t === W ? e.length - 1 : t, 0), function () {
            for (var i = arguments, r = -1, s = oe(i.length - t, 0), a = Array(s); ++r < s;) a[r] = i[t + r];
            for (r = -1, s = Array(t + 1); ++r < t;) s[r] = i[r];
            return s[t] = n(a), e.apply(this, s)
        }
    }

    function S(e) {
        return null != e && e.length ? l(e, 1) : []
    }

    function k(e) {
        return e && e.length ? e[0] : W
    }

    function A(e, t, n) {
        var i = null == e ? 0 : e.length;
        n = ((n = "number" == typeof n ? 0 > n ? oe(i + n, 0) : n : 0) || 0) - 1;
        for (var r = t == t; ++n < i;) {
            var s = e[n];
            if (r ? s === t : s != s) return n
        }
        return -1
    }

    function M(e, t) {
        return ce(e, f(t))
    }

    function O(e, t, n) {
        return function (e, t, n, i, r) {
            return r(e, (function (e, r, s) {
                n = i ? (i = !1, e) : t(n, e, r, s)
            })), n
        }(e, f(t), n, 3 > arguments.length, ce)
    }

    function L(e, t) {
        var n;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return e = ve(e), function () {
            return 0 < --e && (n = t.apply(this, arguments)), 1 >= e && (t = W), n
        }
    }

    function P(e, t) {
        return e === t || e != e && t != t
    }

    function D(e) {
        var t;
        return (t = null != e) && (t = "number" == typeof (t = e.length) && -1 < t && 0 == t % 1 && 9007199254740991 >= t), t && !N(e)
    }

    function N(e) {
        return !!I(e) && ("[object Function]" == (e = te.call(e)) || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e)
    }

    function I(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }

    function z(e) {
        return null != e && "object" == typeof e
    }

    function j(e) {
        return "number" == typeof e || z(e) && "[object Number]" == te.call(e)
    }

    function $(e) {
        return "string" == typeof e || !ge(e) && z(e) && "[object String]" == te.call(e)
    }

    function H(e) {
        return "string" == typeof e ? e : null == e ? "" : e + ""
    }

    function q(e) {
        return null == e ? [] : function (e, t) {
            return m(t, (function (t) {
                return e[t]
            }))
        }(e, Ee(e))
    }

    function B(e) {
        return e
    }

    function R(e, n, i) {
        var r = Ee(n), s = u(n, r);
        null != i || I(n) && (s.length || !r.length) || (i = n, n = e, e = this, s = u(n, Ee(n)));
        var a = !(I(i) && "chain" in i && !i.chain), o = N(e);
        return ce(s, (function (i) {
            var r = n[i];
            e[i] = r, o && (e.prototype[i] = function () {
                var n = this.__chain__;
                if (a || n) {
                    var i = e(this.__wrapped__);
                    return (i.__actions__ = b(this.__actions__)).push({
                        func: r,
                        args: arguments,
                        thisArg: e
                    }), i.__chain__ = n, i
                }
                return r.apply(e, t([this.value()], arguments))
            })
        })), e
    }

    var W, F = /[&<>"']/g, G = RegExp(F.source), X = /^(?:0|[1-9]\d*)$/,
        V = "object" == typeof self && self && self.Object === Object && self,
        Y = "object" == typeof global && global && global.Object === Object && global || V || Function("return this")(),
        U = (V = "object" == typeof exports && exports && !exports.nodeType && exports) && "object" == typeof module && module && !module.nodeType && module,
        K = function (e) {
            return function (t) {
                return null == e ? W : e[t]
            }
        }({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}), Q = Array.prototype,
        J = Object.prototype, Z = J.hasOwnProperty, ee = 0, te = J.toString, ne = Y._, ie = Object.create,
        re = J.propertyIsEnumerable, se = Y.isFinite, ae = function (e, t) {
            return function (n) {
                return e(t(n))
            }
        }(Object.keys, Object), oe = Math.max, le = function () {
            function e() {
            }

            return function (t) {
                return I(t) ? ie ? ie(t) : (e.prototype = t, t = new e, e.prototype = W, t) : {}
            }
        }();
    r.prototype = le(i.prototype), r.prototype.constructor = r;
    var ce = function (e, t) {
        return function (t, n) {
            if (null == t) return t;
            if (!D(t)) return e(t, n);
            for (var i = t.length, r = -1, s = Object(t); ++r < i && !1 !== n(s[r], r, s);) ;
            return t
        }
    }(c), ue = function (e, t, n) {
        for (var i = -1, r = Object(e), s = (n = n(e)).length; s--;) {
            var a = n[++i];
            if (!1 === t(r[a], a, r)) break
        }
        return e
    }, de = B, pe = function (e, t, n) {
        var i = Object(e);
        if (!D(e)) {
            var r = f(t);
            e = Ee(e), t = function (e) {
                return r(i[e], e, i)
            }
        }
        return t = function (e, t, n) {
            var i = null == e ? 0 : e.length;
            if (!i) return -1;
            0 > (n = null == n ? 0 : ve(n)) && (n = oe(i + n, 0));
            e:{
                for (t = f(t), i = e.length, n += -1; ++n < i;) if (t(e[n], n, e)) {
                    e = n;
                    break e
                }
                e = -1
            }
            return e
        }(e, t, n), -1 < t ? i[r ? e[t] : t] : W
    }, fe = v((function (e, t, n) {
        return function (e, t, n) {
            if ("function" != typeof e) throw new TypeError("Expected a function");
            var i = function (e) {
                return function () {
                    var t = arguments, n = le(e.prototype);
                    return I(t = e.apply(n, t)) ? t : n
                }
            }(e);
            return function r() {
                for (var s = -1, a = arguments.length, o = -1, l = n.length, c = Array(l + a), u = this && this !== Y && this instanceof r ? i : e; ++o < l;) c[o] = n[o];
                for (; a--;) c[o++] = arguments[++s];
                return u.apply(t, c)
            }
        }(e, t, n)
    })), he = v((function (e, t) {
        return s(e, 1, t)
    })), me = v((function (e, t, n) {
        return s(e, ye(t) || 0, n)
    })), ge = Array.isArray, ve = Number, ye = Number, be = E((function (e, t) {
        x(t, ae(t), e)
    })), we = E((function (e, t) {
        x(t, _(t), e)
    })), xe = v((function (e, t) {
        e = Object(e);
        var n, i = -1, r = t.length, s = 2 < r ? t[2] : W;
        if (n = s) {
            n = t[0];
            var a = t[1];
            if (I(s)) {
                if ("number" == (l = typeof a)) {
                    if (l = D(s)) var o = typeof a,
                        l = !!(l = null == (l = s.length) ? 9007199254740991 : l) && ("number" == o || "symbol" != o && X.test(a)) && -1 < a && 0 == a % 1 && a < l
                } else l = "string" == l && a in s;
                n = !!l && P(s[a], n)
            } else n = !1
        }
        for (n && (r = 1); ++i < r;) for (s = t[i], a = -1, l = (n = Te(s)).length; ++a < l;) {
            var c = e[o = n[a]];
            (c === W || P(c, J[o]) && !Z.call(e, o)) && (e[o] = s[o])
        }
        return e
    })), Ee = ae, Te = _, _e = function (e) {
        return de(C(e, W, S), e + "")
    }((function (e, t) {
        return null == e ? {} : function (e, t) {
            return e = Object(e), O(t, (function (t, n) {
                return n in e && (t[n] = e[n]), t
            }), {})
        }(e, t)
    }));
    i.assignIn = we, i.before = L, i.bind = fe, i.chain = function (e) {
        return (e = i(e)).__chain__ = !0, e
    }, i.compact = function (e) {
        return o(e, Boolean)
    }, i.concat = function () {
        var e = arguments.length;
        if (!e) return [];
        for (var n = Array(e - 1), i = arguments[0]; e--;) n[e - 1] = arguments[e];
        return t(ge(i) ? b(i) : [i], l(n, 1))
    }, i.create = function (e, t) {
        var n = le(e);
        return null == t ? n : be(n, t)
    }, i.defaults = xe, i.defer = he, i.delay = me, i.filter = function (e, t) {
        return o(e, f(t))
    }, i.flatten = S, i.flattenDeep = function (e) {
        return null != e && e.length ? l(e, 1 / 0) : []
    }, i.iteratee = f, i.keys = Ee, i.map = function (e, t) {
        return m(e, f(t))
    }, i.matches = function (e) {
        return g(be({}, e))
    }, i.mixin = R, i.negate = function (e) {
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return function () {
            return !e.apply(this, arguments)
        }
    }, i.once = function (e) {
        return L(2, e)
    }, i.pick = _e, i.slice = function (e, t, n) {
        var i = null == e ? 0 : e.length;
        return n = n === W ? i : +n, i ? y(e, null == t ? 0 : +t, n) : []
    }, i.sortBy = function (e, t) {
        var i = 0;
        return t = f(t), m(m(e, (function (e, n, r) {
            return {value: e, index: i++, criteria: t(e, n, r)}
        })).sort((function (e, t) {
            var n;
            e:{
                n = e.criteria;
                var i = t.criteria;
                if (n !== i) {
                    var r = n !== W, s = null === n, a = n == n, o = i !== W, l = null === i, c = i == i;
                    if (!l && n > i || s && o && c || !r && c || !a) {
                        n = 1;
                        break e
                    }
                    if (!s && n < i || l && r && a || !o && a || !c) {
                        n = -1;
                        break e
                    }
                }
                n = 0
            }
            return n || e.index - t.index
        })), n("value"))
    }, i.tap = function (e, t) {
        return t(e), e
    }, i.thru = function (e, t) {
        return t(e)
    }, i.toArray = function (e) {
        return D(e) ? e.length ? b(e) : [] : q(e)
    }, i.values = q, i.extend = we, R(i, i), i.clone = function (e) {
        return I(e) ? ge(e) ? b(e) : x(e, ae(e)) : e
    }, i.escape = function (e) {
        return (e = H(e)) && G.test(e) ? e.replace(F, K) : e
    }, i.every = function (e, t, n) {
        return function (e, t) {
            var n = !0;
            return ce(e, (function (e, i, r) {
                return n = !!t(e, i, r)
            })), n
        }(e, f(t = n ? W : t))
    }, i.find = pe, i.forEach = M, i.has = function (e, t) {
        return null != e && Z.call(e, t)
    }, i.head = k, i.identity = B, i.indexOf = A, i.isArguments = e, i.isArray = ge, i.isBoolean = function (e) {
        return !0 === e || !1 === e || z(e) && "[object Boolean]" == te.call(e)
    }, i.isDate = function (e) {
        return z(e) && "[object Date]" == te.call(e)
    }, i.isEmpty = function (t) {
        return D(t) && (ge(t) || $(t) || N(t.splice) || e(t)) ? !t.length : !ae(t).length
    }, i.isEqual = function (e, t) {
        return p(e, t)
    }, i.isFinite = function (e) {
        return "number" == typeof e && se(e)
    }, i.isFunction = N, i.isNaN = function (e) {
        return j(e) && e != +e
    }, i.isNull = function (e) {
        return null === e
    }, i.isNumber = j, i.isObject = I, i.isRegExp = function (e) {
        return z(e) && "[object RegExp]" == te.call(e)
    }, i.isString = $, i.isUndefined = function (e) {
        return e === W
    }, i.last = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : W
    }, i.max = function (e) {
        return e && e.length ? a(e, B, d) : W
    }, i.min = function (e) {
        return e && e.length ? a(e, B, h) : W
    }, i.noConflict = function () {
        return Y._ === this && (Y._ = ne), this
    }, i.noop = function () {
    }, i.reduce = O, i.result = function (e, t, n) {
        return (t = null == e ? W : e[t]) === W && (t = n), N(t) ? t.call(e) : t
    }, i.size = function (e) {
        return null == e ? 0 : (e = D(e) ? e : ae(e)).length
    }, i.some = function (e, t, n) {
        return w(e, f(t = n ? W : t))
    }, i.uniqueId = function (e) {
        var t = ++ee;
        return H(e) + t
    }, i.each = M, i.first = k, R(i, function () {
        var e = {};
        return c(i, (function (t, n) {
            Z.call(i.prototype, n) || (e[n] = t)
        })), e
    }(), {chain: !1}), i.VERSION = "4.17.15", ce("pop join replace reverse split push shift sort splice unshift".split(" "), (function (e) {
        var t = (/^(?:replace|split)$/.test(e) ? String.prototype : Q)[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|join|replace|shift)$/.test(e);
        i.prototype[e] = function () {
            var e = arguments;
            if (r && !this.__chain__) {
                var i = this.value();
                return t.apply(ge(i) ? i : [], e)
            }
            return this[n]((function (n) {
                return t.apply(ge(n) ? n : [], e)
            }))
        }
    })), i.prototype.toJSON = i.prototype.valueOf = i.prototype.value = function () {
        return function (e, n) {
            return O(n, (function (e, n) {
                return n.func.apply(n.thisArg, t([e], n.args))
            }), e)
        }(this.__wrapped__, this.__actions__)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? (Y._ = i, define((function () {
        return i
    }))) : U ? ((U.exports = i)._ = i, V._ = i) : Y._ = i
}.call(this), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e() {
        return (e = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    function t(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function n(e, i) {
        void 0 === e && (e = {}), void 0 === i && (i = {}), Object.keys(i).forEach((function (r) {
            void 0 === e[r] ? e[r] = i[r] : t(i[r]) && t(e[r]) && Object.keys(i[r]).length > 0 && n(e[r], i[r])
        }))
    }

    var i = {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, createElementNS: function () {
            return {}
        }, importNode: function () {
            return null
        }, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function r() {
        var e = "undefined" != typeof document ? document : {};
        return n(e, i), e
    }

    var s = {
        document: i,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState: function () {
            }, pushState: function () {
            }, go: function () {
            }, back: function () {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        },
        matchMedia: function () {
            return {}
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function a() {
        var e = "undefined" != typeof window ? window : {};
        return n(e, s), e
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e, t, n) {
        return (c = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var r = new (Function.bind.apply(e, i));
            return n && l(r, n.prototype), r
        }).apply(null, arguments)
    }

    function u(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (u = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, i)
            }

            function i() {
                return c(e, arguments, o(this).constructor)
            }

            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(i, e)
        })(e)
    }

    var d = function (e) {
        var t, n;

        function i(t) {
            var n, i, r;
            return i = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n = e.call.apply(e, [this].concat(t)) || this), r = i.__proto__, Object.defineProperty(i, "__proto__", {
                get: function () {
                    return r
                }, set: function (e) {
                    r.__proto__ = e
                }
            }), n
        }

        return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i
    }(u(Array));

    function p(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function (e) {
            Array.isArray(e) ? t.push.apply(t, p(e)) : t.push(e)
        })), t
    }

    function f(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function h(e, t) {
        var n = a(), i = r(), s = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(s);
        if ("string" == typeof e) {
            var o = e.trim();
            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                var l = "div";
                0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select");
                var c = i.createElement(l);
                c.innerHTML = o;
                for (var u = 0; u < c.childNodes.length; u += 1) s.push(c.childNodes[u])
            } else s = function (e, t) {
                if ("string" != typeof e) return [e];
                for (var n = [], i = t.querySelectorAll(e), r = 0; r < i.length; r += 1) n.push(i[r]);
                return n
            }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) s.push(e); else if (Array.isArray(e)) {
            if (e instanceof d) return e;
            s = e
        }
        return new d(function (e) {
            for (var t = [], n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(s))
    }

    h.fn = d.prototype;
    var m, g, v, y = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = p(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).add.apply(t, i)
            })), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = p(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).remove.apply(t, i)
            })), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = p(t.map((function (e) {
                return e.split(" ")
            })));
            return f(this, (function (e) {
                return i.filter((function (t) {
                    return e.classList.contains(t)
                })).length > 0
            })).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = p(t.map((function (e) {
                return e.split(" ")
            })));
            this.forEach((function (e) {
                i.forEach((function (t) {
                    e.classList.toggle(t)
                }))
            }))
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(e, t); else for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0], r = t[1], s = t[2], a = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), h(t).is(r)) s.apply(t, n); else for (var i = h(t).parents(), a = 0; a < i.length; a += 1) h(i[a]).is(r) && s.apply(i[a], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }

            "function" == typeof t[1] && (i = t[0], s = t[1], a = t[2], r = void 0), a || (a = !1);
            for (var c, u = i.split(" "), d = 0; d < this.length; d += 1) {
                var p = this[d];
                if (r) for (c = 0; c < u.length; c += 1) {
                    var f = u[c];
                    p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                        listener: s,
                        proxyListener: o
                    }), p.addEventListener(f, o, a)
                } else for (c = 0; c < u.length; c += 1) {
                    var m = u[c];
                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                        listener: s,
                        proxyListener: l
                    }), p.addEventListener(m, l, a)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0], r = t[1], s = t[2], a = t[3];
            "function" == typeof t[1] && (i = t[0], s = t[1], a = t[2], r = void 0), a || (a = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var c = o[l], u = 0; u < this.length; u += 1) {
                var d = this[u], p = void 0;
                if (!r && d.dom7Listeners ? p = d.dom7Listeners[c] : r && d.dom7LiveListeners && (p = d.dom7LiveListeners[c]), p && p.length) for (var f = p.length - 1; f >= 0; f -= 1) {
                    var h = p[f];
                    s && h.listener === s || s && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === s ? (d.removeEventListener(c, h.proxyListener, a), p.splice(f, 1)) : s || (d.removeEventListener(c, h.proxyListener, a), p.splice(f, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = a(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            for (var r = n[0].split(" "), s = n[1], o = 0; o < r.length; o += 1) for (var l = r[o], c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (e.CustomEvent) {
                    var d = new e.CustomEvent(l, {detail: s, bubbles: !0, cancelable: !0});
                    u.dom7EventData = n.filter((function (e, t) {
                        return t > 0
                    })), u.dispatchEvent(d), u.dom7EventData = [], delete u.dom7EventData
                }
            }
            return this
        }, transitionEnd: function (e) {
            var t = this;
            return e && t.on("transitionend", (function n(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", n))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            var e = a();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                var e = a(), t = r(), n = this[0], i = n.getBoundingClientRect(), s = t.body,
                    o = n.clientTop || s.clientTop || 0, l = n.clientLeft || s.clientLeft || 0,
                    c = n === e ? e.scrollY : n.scrollTop, u = n === e ? e.scrollX : n.scrollLeft;
                return {top: i.top + c - o, left: i.left + u - l}
            }
            return null
        }, css: function (e, t) {
            var n, i = a();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1) for (var r in e) this[n].style[r] = e[r];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach((function (t, n) {
                e.apply(t, [t, n])
            })), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, n, i = a(), s = r(), o = this[0];
            if (!o || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (o.matches) return o.matches(e);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector) return o.msMatchesSelector(e);
                for (t = h(e), n = 0; n < t.length; n += 1) if (t[n] === o) return !0;
                return !1
            }
            if (e === s) return o === s;
            if (e === i) return o === i;
            if (e.nodeType || e instanceof d) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1) if (t[n] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return h([]);
            if (e < 0) {
                var n = t + e;
                return h(n < 0 ? [] : [this[n]])
            }
            return h([this[e]])
        }, append: function () {
            for (var e, t = r(), n = 0; n < arguments.length; n += 1) {
                e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                for (var i = 0; i < this.length; i += 1) if ("string" == typeof e) {
                    var s = t.createElement("div");
                    for (s.innerHTML = e; s.firstChild;) this[i].appendChild(s.firstChild)
                } else if (e instanceof d) for (var a = 0; a < e.length; a += 1) this[i].appendChild(e[a]); else this[i].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, n, i = r();
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var s = i.createElement("div");
                for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(s.childNodes[n], this[t].childNodes[0])
            } else if (e instanceof d) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
        }, nextAll: function (e) {
            var t = [], n = this[0];
            if (!n) return h([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                e ? h(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return h(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
            }
            return h([])
        }, prevAll: function (e) {
            var t = [], n = this[0];
            if (!n) return h([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                e ? h(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return h(t)
        }, parent: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return h(t)
        }, parents: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].parentNode; i;) e ? h(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return h(t)
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
            return h(t)
        }, children: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].children, r = 0; r < i.length; r += 1) e && !h(i[r]).is(e) || t.push(i[r]);
            return h(t)
        }, filter: function (e) {
            return h(f(this, e))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function b(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function w() {
        return Date.now()
    }

    function x(e, t) {
        void 0 === t && (t = "x");
        var n, i, r, s = a(), o = function (e) {
            var t, n = a();
            return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
        }(e);
        return s.WebKitCSSMatrix ? ((i = o.transform || o.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function (e) {
            return e.replace(",", ".")
        })).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
    }

    function E(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function T(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function _() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], n = 1; n < arguments.length; n += 1) {
            var i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            if (null != i && !T(i)) for (var r = Object.keys(Object(i)).filter((function (e) {
                return t.indexOf(e) < 0
            })), s = 0, a = r.length; s < a; s += 1) {
                var o = r[s], l = Object.getOwnPropertyDescriptor(i, o);
                void 0 !== l && l.enumerable && (E(e[o]) && E(i[o]) ? i[o].__swiper__ ? e[o] = i[o] : _(e[o], i[o]) : !E(e[o]) && E(i[o]) ? (e[o] = {}, i[o].__swiper__ ? e[o] = i[o] : _(e[o], i[o])) : e[o] = i[o])
            }
        }
        return e
    }

    function C(e, t) {
        Object.keys(t).forEach((function (n) {
            E(t[n]) && Object.keys(t[n]).forEach((function (i) {
                "function" == typeof t[n][i] && (t[n][i] = t[n][i].bind(e))
            })), e[n] = t[n]
        }))
    }

    function S(e) {
        return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }

    function k(e, t, n, i) {
        var s = r();
        return n && Object.keys(i).forEach((function (n) {
            if (!t[n] && !0 === t.auto) {
                var r = s.createElement("div");
                r.className = i[n], e.append(r), t[n] = r
            }
        })), t
    }

    function A() {
        return m || (m = function () {
            var e = a(), t = r();
            return {
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function () {
                    var t = !1;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), m
    }

    function M(e) {
        return void 0 === e && (e = {}), g || (g = function (e) {
            var t = (void 0 === e ? {} : e).userAgent, n = A(), i = a(), r = i.navigator.platform,
                s = t || i.navigator.userAgent, o = {ios: !1, android: !1}, l = i.screen.width, c = i.screen.height,
                u = s.match(/(Android);?[\s\/]+([\d.]+)?/), d = s.match(/(iPad).*OS\s([\d_]+)/),
                p = s.match(/(iPod)(.*OS\s([\d_]+))?/), f = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r, m = "MacIntel" === r;
            return !d && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(l + "x" + c) >= 0 && ((d = s.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), m = !1), u && !h && (o.os = "android", o.android = !0), (d || f || p) && (o.os = "ios", o.ios = !0), o
        }(e)), g
    }

    function O() {
        return v || (v = function () {
            var e, t = a();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), v
    }

    Object.keys(y).forEach((function (e) {
        Object.defineProperty(h.fn, e, {value: y[e], writable: !0})
    }));
    var L = {
        name: "resize", create: function () {
            var e = this;
            _(e, {
                resize: {
                    observer: null, createObserver: function () {
                        e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function (t) {
                            var n = e.width, i = e.height, r = n, s = i;
                            t.forEach((function (t) {
                                var n = t.contentBoxSize, i = t.contentRect, a = t.target;
                                a && a !== e.el || (r = i ? i.width : (n[0] || n).inlineSize, s = i ? i.height : (n[0] || n).blockSize)
                            })), r === n && s === i || e.resize.resizeHandler()
                        })), e.resize.observer.observe(e.el))
                    }, removeObserver: function () {
                        e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
                    }, resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                    }, orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        }, on: {
            init: function (e) {
                var t = a();
                e.params.resizeObserver && void 0 !== a().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
            }, destroy: function (e) {
                var t = a();
                e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    }, P = {
        attach: function (e, t) {
            void 0 === t && (t = {});
            var n = a(), i = this, r = new (n.MutationObserver || n.WebkitMutationObserver)((function (e) {
                if (1 !== e.length) {
                    var t = function () {
                        i.emit("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                } else i.emit("observerUpdate", e[0])
            }));
            r.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(r)
        }, init: function () {
            var e = this;
            if (e.support.observer && e.params.observer) {
                if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
            }
        }, destroy: function () {
            this.observer.observers.forEach((function (e) {
                e.disconnect()
            })), this.observer.observers = []
        }
    }, D = {
        name: "observer",
        params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
        create: function () {
            C(this, {observer: e({}, P, {observers: []})})
        },
        on: {
            init: function (e) {
                e.observer.init()
            }, destroy: function (e) {
                e.observer.destroy()
            }
        }
    };

    function N(e) {
        var t = this, n = r(), i = a(), s = t.touchEventsData, o = t.params, l = t.touches;
        if (t.enabled && (!t.animating || !o.preventInteractionOnTransition)) {
            var c = e;
            c.originalEvent && (c = c.originalEvent);
            var u = h(c.target);
            if (("wrapper" !== o.touchEventsTarget || u.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === c.type, (s.isTouchEvent || !("which" in c) || 3 !== c.which) && !(!s.isTouchEvent && "button" in c && c.button > 0 || s.isTouched && s.isMoved))) {
                o.noSwipingClass && "" !== o.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (u = h(e.path[0]));
                var d = o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass,
                    p = !(!c.target || !c.target.shadowRoot);
                if (o.noSwiping && (p ? function (e, t) {
                    return void 0 === t && (t = this), function t(n) {
                        return n && n !== r() && n !== a() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                    }(t)
                }(d, c.target) : u.closest(d)[0])) t.allowClick = !0; else if (!o.swipeHandler || u.closest(o.swipeHandler)[0]) {
                    l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                    var f = l.currentX, m = l.currentY, g = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                        v = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                    if (g && (f <= v || f >= i.innerWidth - v)) {
                        if ("prevent" !== g) return;
                        e.preventDefault()
                    }
                    if (_(s, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = f, l.startY = m, s.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== c.type) {
                        var y = !0;
                        u.is(s.focusableElements) && (y = !1), n.activeElement && h(n.activeElement).is(s.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
                        var b = y && t.allowTouchMove && o.touchStartPreventDefault;
                        !o.touchStartForcePreventDefault && !b || u[0].isContentEditable || c.preventDefault()
                    }
                    t.emit("touchStart", c)
                }
            }
        }
    }

    function I(e) {
        var t = r(), n = this, i = n.touchEventsData, s = n.params, a = n.touches, o = n.rtlTranslate;
        if (n.enabled) {
            var l = e;
            if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                if (!i.isTouchEvent || "touchmove" === l.type) {
                    var c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                        u = "touchmove" === l.type ? c.pageX : l.pageX, d = "touchmove" === l.type ? c.pageY : l.pageY;
                    if (l.preventedByNestedSwiper) return a.startX = u, void (a.startY = d);
                    if (!n.allowTouchMove) return n.allowClick = !1, void (i.isTouched && (_(a, {
                        startX: u,
                        startY: d,
                        currentX: u,
                        currentY: d
                    }), i.touchStartTime = w()));
                    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
                        if (d < a.startY && n.translate <= n.maxTranslate() || d > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                    } else if (u < a.startX && n.translate <= n.maxTranslate() || u > a.startX && n.translate >= n.minTranslate()) return;
                    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && h(l.target).is(i.focusableElements)) return i.isMoved = !0, void (n.allowClick = !1);
                    if (i.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                        a.currentX = u, a.currentY = d;
                        var p, f = a.currentX - a.startX, m = a.currentY - a.startY;
                        if (!(n.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(m, 2)) < n.params.threshold)) if (void 0 === i.isScrolling && (n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (p = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, i.isScrolling = n.isHorizontal() ? p > s.touchAngle : 90 - p > s.touchAngle)), i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                            n.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0;
                            var g = n.isHorizontal() ? f : m;
                            a.diff = g, g *= s.touchRatio, o && (g = -g), n.swipeDirection = g > 0 ? "prev" : "next", i.currentTranslate = g + i.startTranslate;
                            var v = !0, y = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (y = 0), g > 0 && i.currentTranslate > n.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + g, y))) : g < 0 && i.currentTranslate < n.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - g, y))), v && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                                if (!(Math.abs(g) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: a[n.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: a[n.isHorizontal() ? "currentX" : "currentY"],
                                time: w()
                            })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                        }
                    }
                }
            } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l)
        }
    }

    function z(e) {
        var t = this, n = t.touchEventsData, i = t.params, r = t.touches, s = t.rtlTranslate, a = t.$wrapperEl,
            o = t.slidesGrid, l = t.snapGrid;
        if (t.enabled) {
            var c = e;
            if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var u, d = w(), p = d - n.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), n.lastClickTime = w(), b((function () {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode) if (i.freeMode) {
                if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (n.velocities.length > 1) {
                        var f = n.velocities.pop(), h = n.velocities.pop(), m = f.position - h.position,
                            g = f.time - h.time;
                        t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || w() - f.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                    var v = 1e3 * i.freeModeMomentumRatio, y = t.velocity * v, x = t.translate + y;
                    s && (x = -x);
                    var E, T, _ = !1, C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (x < t.maxTranslate()) i.freeModeMomentumBounce ? (x + t.maxTranslate() < -C && (x = t.maxTranslate() - C), E = t.maxTranslate(), _ = !0, n.allowMomentumBounce = !0) : x = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0); else if (x > t.minTranslate()) i.freeModeMomentumBounce ? (x - t.minTranslate() > C && (x = t.minTranslate() + C), E = t.minTranslate(), _ = !0, n.allowMomentumBounce = !0) : x = t.minTranslate(), i.loop && i.centeredSlides && (T = !0); else if (i.freeModeSticky) {
                        for (var S, k = 0; k < l.length; k += 1) if (l[k] > -x) {
                            S = k;
                            break
                        }
                        x = -(x = Math.abs(l[S] - x) < Math.abs(l[S - 1] - x) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                    }
                    if (T && t.once("transitionEnd", (function () {
                        t.loopFix()
                    })), 0 !== t.velocity) {
                        if (v = s ? Math.abs((-x - t.translate) / t.velocity) : Math.abs((x - t.translate) / t.velocity), i.freeModeSticky) {
                            var A = Math.abs((s ? -x : x) - t.translate), M = t.slidesSizesGrid[t.activeIndex];
                            v = A < M ? i.speed : A < 2 * M ? 1.5 * i.speed : 2.5 * i.speed
                        }
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeModeMomentumBounce && _ ? (t.updateProgress(E), t.setTransition(v), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd((function () {
                        t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout((function () {
                            t.setTranslate(E), a.transitionEnd((function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        }), 0))
                    }))) : t.velocity ? (t.updateProgress(x), t.setTransition(v), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd((function () {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(x)), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                    if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeMode && t.emit("_freeModeNoMomentumRelease")
                }
                (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var O = 0, L = t.slidesSizesGrid[0], P = 0; P < o.length; P += P < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    var D = P < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== o[P + D] ? u >= o[P] && u < o[P + D] && (O = P, L = o[P + D] - o[P]) : u >= o[P] && (O = P, L = o[o.length - 1] - o[o.length - 2])
                }
                var N = (u - o[O]) / L, I = O < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (p > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (N >= i.longSwipesRatio ? t.slideTo(O + I) : t.slideTo(O)), "prev" === t.swipeDirection && (N > 1 - i.longSwipesRatio ? t.slideTo(O + I) : t.slideTo(O))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(O + I), "prev" === t.swipeDirection && t.slideTo(O)) : c.target === t.navigation.nextEl ? t.slideTo(O + I) : t.slideTo(O)
                }
            }
        }
    }

    function j() {
        var e = this, t = e.params, n = e.el;
        if (!n || 0 !== n.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext, r = e.allowSlidePrev, s = e.snapGrid;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }

    function $(e) {
        var t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function H() {
        var e = this, t = e.wrapperEl, n = e.rtlTranslate;
        if (e.enabled) {
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            var i = e.maxTranslate() - e.minTranslate();
            (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
    }

    var q = !1;

    function B() {
    }

    var R = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    }, W = {
        modular: {
            useParams: function (e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function (n) {
                    var i = t.modules[n];
                    i.params && _(e, i.params)
                }))
            }, useModules: function (e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function (n) {
                    var i = t.modules[n], r = e[n] || {};
                    i.on && t.on && Object.keys(i.on).forEach((function (e) {
                        t.on(e, i.on[e])
                    })), i.create && i.create.bind(t)(r)
                }))
            }
        }, eventsEmitter: {
            on: function (e, t, n) {
                var i = this;
                if ("function" != typeof t) return i;
                var r = n ? "unshift" : "push";
                return e.split(" ").forEach((function (e) {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                })), i
            }, once: function (e, t, n) {
                var i = this;
                if ("function" != typeof t) return i;

                function r() {
                    i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                    for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    t.apply(i, s)
                }

                return r.__emitterProxy = t, i.on(e, r, n)
            }, onAny: function (e, t) {
                var n = this;
                if ("function" != typeof e) return n;
                var i = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
            }, offAny: function (e) {
                var t = this;
                if (!t.eventsAnyListeners) return t;
                var n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            }, off: function (e, t) {
                var n = this;
                return n.eventsListeners ? (e.split(" ").forEach((function (e) {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function (i, r) {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(r, 1)
                    }))
                })), n) : n
            }, emit: function () {
                var e, t, n, i = this;
                if (!i.eventsListeners) return i;
                for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                return "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = i) : (e = s[0].events, t = s[0].data, n = s[0].context || i), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((function (e) {
                    i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((function (i) {
                        i.apply(n, [e].concat(t))
                    })), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach((function (e) {
                        e.apply(n, t)
                    }))
                })), i
            }
        }, update: {
            updateSize: function () {
                var e, t, n = this, i = n.$el;
                e = void 0 !== n.params.width && null !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height && null !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), _(n, {
                    width: e,
                    height: t,
                    size: n.isHorizontal() ? e : t
                }))
            }, updateSlides: function () {
                var e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }

                var i = e.params, r = e.$wrapperEl, s = e.size, a = e.rtlTranslate, o = e.wrongRTL,
                    l = e.virtual && i.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                    u = r.children("." + e.params.slideClass), d = l ? e.virtual.slides.length : u.length, p = [],
                    f = [], h = [], m = i.slidesOffsetBefore;
                "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                var g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                var v = e.snapGrid.length, y = e.slidesGrid.length, b = i.spaceBetween, w = -m, x = 0, E = 0;
                if (void 0 !== s) {
                    var T, C;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), e.virtualSize = -b, a ? u.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : u.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.slidesPerColumn > 1 && (T = Math.floor(d / i.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
                    for (var S, k, A, M = i.slidesPerColumn, O = T / M, L = Math.floor(d / i.slidesPerColumn), P = 0; P < d; P += 1) {
                        C = 0;
                        var D = u.eq(P);
                        if (i.slidesPerColumn > 1) {
                            var N = void 0, I = void 0, z = void 0;
                            if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                                var j = Math.floor(P / (i.slidesPerGroup * i.slidesPerColumn)),
                                    $ = P - i.slidesPerColumn * i.slidesPerGroup * j,
                                    H = 0 === j ? i.slidesPerGroup : Math.min(Math.ceil((d - j * M * i.slidesPerGroup) / M), i.slidesPerGroup);
                                N = (I = $ - (z = Math.floor($ / H)) * H + j * i.slidesPerGroup) + z * T / M, D.css({
                                    "-webkit-box-ordinal-group": N,
                                    "-moz-box-ordinal-group": N,
                                    "-ms-flex-order": N,
                                    "-webkit-order": N,
                                    order: N
                                })
                            } else "column" === i.slidesPerColumnFill ? (z = P - (I = Math.floor(P / M)) * M, (I > L || I === L && z === M - 1) && (z += 1) >= M && (z = 0, I += 1)) : I = P - (z = Math.floor(P / O)) * O;
                            D.css(t("margin-top"), 0 !== z ? i.spaceBetween && i.spaceBetween + "px" : "")
                        }
                        if ("none" !== D.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                var q = getComputedStyle(D[0]), B = D[0].style.transform,
                                    R = D[0].style.webkitTransform;
                                if (B && (D[0].style.transform = "none"), R && (D[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0); else {
                                    var W = n(q, "width"), F = n(q, "padding-left"), G = n(q, "padding-right"),
                                        X = n(q, "margin-left"), V = n(q, "margin-right"),
                                        Y = q.getPropertyValue("box-sizing");
                                    if (Y && "border-box" === Y) C = W + X + V; else {
                                        var U = D[0], K = U.clientWidth;
                                        C = W + F + G + X + V + (U.offsetWidth - K)
                                    }
                                }
                                B && (D[0].style.transform = B), R && (D[0].style.webkitTransform = R), i.roundLengths && (C = Math.floor(C))
                            } else C = (s - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), u[P] && (u[P].style[t("width")] = C + "px");
                            u[P] && (u[P].swiperSlideSize = C), h.push(C), i.centeredSlides ? (w = w + C / 2 + x / 2 + b, 0 === x && 0 !== P && (w = w - s / 2 - b), 0 === P && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), E % i.slidesPerGroup == 0 && p.push(w), f.push(w)) : (i.roundLengths && (w = Math.floor(w)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + C + b), e.virtualSize += C + b, x = C, E += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + g, a && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({width: e.virtualSize + i.spaceBetween + "px"}), i.setWrapperSize && r.css(((k = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", k)), i.slidesPerColumn > 1 && (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, r.css(((A = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", A)), i.centeredSlides)) {
                        S = [];
                        for (var Q = 0; Q < p.length; Q += 1) {
                            var J = p[Q];
                            i.roundLengths && (J = Math.floor(J)), p[Q] < e.virtualSize + p[0] && S.push(J)
                        }
                        p = S
                    }
                    if (!i.centeredSlides) {
                        S = [];
                        for (var Z = 0; Z < p.length; Z += 1) {
                            var ee = p[Z];
                            i.roundLengths && (ee = Math.floor(ee)), p[Z] <= e.virtualSize - s && S.push(ee)
                        }
                        p = S, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                        var te, ne = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        u.filter((function (e, t) {
                            return !i.cssMode || t !== u.length - 1
                        })).css(((te = {})[ne] = b + "px", te))
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        var ie = 0;
                        h.forEach((function (e) {
                            ie += e + (i.spaceBetween ? i.spaceBetween : 0)
                        }));
                        var re = (ie -= i.spaceBetween) - s;
                        p = p.map((function (e) {
                            return e < 0 ? -m : e > re ? re + g : e
                        }))
                    }
                    if (i.centerInsufficientSlides) {
                        var se = 0;
                        if (h.forEach((function (e) {
                            se += e + (i.spaceBetween ? i.spaceBetween : 0)
                        })), (se -= i.spaceBetween) < s) {
                            var ae = (s - se) / 2;
                            p.forEach((function (e, t) {
                                p[t] = e - ae
                            })), f.forEach((function (e, t) {
                                f[t] = e + ae
                            }))
                        }
                    }
                    _(e, {
                        slides: u,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: h
                    }), d !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            }, updateAutoHeight: function (e) {
                var t, n = this, i = [], r = n.virtual && n.params.virtual.enabled, s = 0;
                "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                var a = function (e) {
                    return r ? n.slides.filter((function (t) {
                        return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                    }))[0] : n.slides.eq(e)[0]
                };
                if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1) if (n.params.centeredSlides) n.visibleSlides.each((function (e) {
                    i.push(e)
                })); else for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                    var o = n.activeIndex + t;
                    if (o > n.slides.length && !r) break;
                    i.push(a(o))
                } else i.push(a(n.activeIndex));
                for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                    var l = i[t].offsetHeight;
                    s = l > s ? l : s
                }
                s && n.$wrapperEl.css("height", s + "px")
            }, updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this, n = t.params, i = t.slides, r = t.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var s = -e;
                    r && (s = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var a = 0; a < i.length; a += 1) {
                        var o = i[a],
                            l = (s + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                            var c = -(s - o.swiperSlideOffset), u = c + t.slidesSizesGrid[a];
                            (c >= 0 && c < t.size - 1 || u > 1 && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(a), i.eq(a).addClass(n.slideVisibleClass))
                        }
                        o.progress = r ? -l : l
                    }
                    t.visibleSlides = h(t.visibleSlides)
                }
            }, updateProgress: function (e) {
                var t = this;
                if (void 0 === e) {
                    var n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                var i = t.params, r = t.maxTranslate() - t.minTranslate(), s = t.progress, a = t.isBeginning,
                    o = t.isEnd, l = a, c = o;
                0 === r ? (s = 0, a = !0, o = !0) : (a = (s = (e - t.minTranslate()) / r) <= 0, o = s >= 1), _(t, {
                    progress: s,
                    isBeginning: a,
                    isEnd: o
                }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), o && !c && t.emit("reachEnd toEdge"), (l && !a || c && !o) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                var e, t = this, n = t.slides, i = t.params, r = t.$wrapperEl, s = t.activeIndex, a = t.realIndex,
                    o = t.virtual && i.virtual.enabled;
                n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : n.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
                var c = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === c.length && (c = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                var t, n = this, i = n.rtlTranslate ? n.translate : -n.translate, r = n.slidesGrid, s = n.snapGrid,
                    a = n.params, o = n.activeIndex, l = n.realIndex, c = n.snapIndex, u = e;
                if (void 0 === u) {
                    for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? u = d : i >= r[d] && i < r[d + 1] && (u = d + 1) : i >= r[d] && (u = d);
                    a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (s.indexOf(i) >= 0) t = s.indexOf(i); else {
                    var p = Math.min(a.slidesPerGroupSkip, u);
                    t = p + Math.floor((u - p) / a.slidesPerGroup)
                }
                if (t >= s.length && (t = s.length - 1), u !== o) {
                    var f = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    _(n, {
                        snapIndex: t,
                        realIndex: f,
                        previousIndex: o,
                        activeIndex: u
                    }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== f && n.emit("realIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange")
                } else t !== c && (n.snapIndex = t, n.emit("snapIndexChange"))
            }, updateClickedSlide: function (e) {
                var t, n = this, i = n.params, r = h(e.target).closest("." + i.slideClass)[0], s = !1;
                if (r) for (var a = 0; a < n.slides.length; a += 1) if (n.slides[a] === r) {
                    s = !0, t = a;
                    break
                }
                if (!r || !s) return n.clickedSlide = void 0, void (n.clickedIndex = void 0);
                n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(h(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = t, i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this, n = t.params, i = t.rtlTranslate, r = t.translate, s = t.$wrapperEl;
                if (n.virtualTranslate) return i ? -r : r;
                if (n.cssMode) return r;
                var a = x(s[0], e);
                return i && (a = -a), a || 0
            }, setTranslate: function (e, t) {
                var n = this, i = n.rtlTranslate, r = n.params, s = n.$wrapperEl, a = n.wrapperEl, o = n.progress,
                    l = 0, c = 0;
                n.isHorizontal() ? l = i ? -e : e : c = e, r.roundLengths && (l = Math.floor(l), c = Math.floor(c)), r.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : r.virtualTranslate || s.transform("translate3d(" + l + "px, " + c + "px, 0px)"), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c;
                var u = n.maxTranslate() - n.minTranslate();
                (0 === u ? 0 : (e - n.minTranslate()) / u) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e, t, n, i, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                var s = this, a = s.params, o = s.wrapperEl;
                if (s.animating && a.preventInteractionOnTransition) return !1;
                var l, c = s.minTranslate(), u = s.maxTranslate();
                if (l = i && e > c ? c : i && e < u ? u : e, s.updateProgress(l), a.cssMode) {
                    var d, p = s.isHorizontal();
                    return 0 === t ? o[p ? "scrollLeft" : "scrollTop"] = -l : o.scrollTo ? o.scrollTo(((d = {})[p ? "left" : "top"] = -l, d.behavior = "smooth", d)) : o[p ? "scrollLeft" : "scrollTop"] = -l, !0
                }
                return 0 === t ? (s.setTransition(0), s.setTranslate(l), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(l), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (e, t) {
                var n = this;
                n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                var n = this, i = n.activeIndex, r = n.params, s = n.previousIndex;
                if (!r.cssMode) {
                    r.autoHeight && n.updateAutoHeight();
                    var a = t;
                    if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), n.emit("transitionStart"), e && i !== s) {
                        if ("reset" === a) return void n.emit("slideResetTransitionStart");
                        n.emit("slideChangeTransitionStart"), "next" === a ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                    }
                }
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                var n = this, i = n.activeIndex, r = n.previousIndex, s = n.params;
                if (n.animating = !1, !s.cssMode) {
                    n.setTransition(0);
                    var a = t;
                    if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
                        if ("reset" === a) return void n.emit("slideResetTransitionEnd");
                        n.emit("slideChangeTransitionEnd"), "next" === a ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                    }
                }
            }
        }, slide: {
            slideTo: function (e, t, n, i, r) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                if ("string" == typeof e) {
                    var s = parseInt(e, 10);
                    if (!isFinite(s)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                    e = s
                }
                var a = this, o = e;
                o < 0 && (o = 0);
                var l = a.params, c = a.snapGrid, u = a.slidesGrid, d = a.previousIndex, p = a.activeIndex,
                    f = a.rtlTranslate, h = a.wrapperEl, m = a.enabled;
                if (a.animating && l.preventInteractionOnTransition || !m && !i && !r) return !1;
                var g = Math.min(a.params.slidesPerGroupSkip, o), v = g + Math.floor((o - g) / a.params.slidesPerGroup);
                v >= c.length && (v = c.length - 1), (p || l.initialSlide || 0) === (d || 0) && n && a.emit("beforeSlideChangeStart");
                var y, b = -c[v];
                if (a.updateProgress(b), l.normalizeSlideIndex) for (var w = 0; w < u.length; w += 1) {
                    var x = -Math.floor(100 * b), E = Math.floor(100 * u[w]), T = Math.floor(100 * u[w + 1]);
                    void 0 !== u[w + 1] ? x >= E && x < T - (T - E) / 2 ? o = w : x >= E && x < T && (o = w + 1) : x >= E && (o = w)
                }
                if (a.initialized && o !== p) {
                    if (!a.allowSlideNext && b < a.translate && b < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (p || 0) !== o) return !1
                }
                if (y = o > p ? "next" : o < p ? "prev" : "reset", f && -b === a.translate || !f && b === a.translate) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(b), "reset" !== y && (a.transitionStart(n, y), a.transitionEnd(n, y)), !1;
                if (l.cssMode) {
                    var _, C = a.isHorizontal(), S = -b;
                    return f && (S = h.scrollWidth - h.offsetWidth - S), 0 === t ? h[C ? "scrollLeft" : "scrollTop"] = S : h.scrollTo ? h.scrollTo(((_ = {})[C ? "left" : "top"] = S, _.behavior = "smooth", _)) : h[C ? "scrollLeft" : "scrollTop"] = S, !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(b), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, y), a.transitionEnd(n, y)) : (a.setTransition(t), a.setTranslate(b), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, y), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, y))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
            }, slideToLoop: function (e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                var r = this, s = e;
                return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i)
            }, slideNext: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this, r = i.params, s = i.animating;
                if (!i.enabled) return i;
                var a = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
                if (r.loop) {
                    if (s && r.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return i.slideTo(i.activeIndex + a, e, t, n)
            }, slidePrev: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this, r = i.params, s = i.animating, a = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
                if (!i.enabled) return i;
                if (r.loop) {
                    if (s && r.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                var u, d = c(l ? i.translate : -i.translate), p = a.map((function (e) {
                    return c(e)
                })), f = a[p.indexOf(d) - 1];
                return void 0 === f && r.cssMode && a.forEach((function (e) {
                    !f && d >= e && (f = e)
                })), void 0 !== f && (u = o.indexOf(f)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
            }, slideReset: function (e, t, n) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
            }, slideToClosest: function (e, t, n, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                var r = this, s = r.activeIndex, a = Math.min(r.params.slidesPerGroupSkip, s),
                    o = a + Math.floor((s - a) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    var c = r.snapGrid[o];
                    l - c > (r.snapGrid[o + 1] - c) * i && (s += r.params.slidesPerGroup)
                } else {
                    var u = r.snapGrid[o - 1];
                    l - u <= (r.snapGrid[o] - u) * i && (s -= r.params.slidesPerGroup)
                }
                return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, e, t, n)
            }, slideToClickedSlide: function () {
                var e, t = this, n = t.params, i = t.$wrapperEl,
                    r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView, s = t.clickedIndex;
                if (n.loop) {
                    if (t.animating) return;
                    e = parseInt(h(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), b((function () {
                        t.slideTo(s)
                    }))) : t.slideTo(s) : s > t.slides.length - r ? (t.loopFix(), s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), b((function () {
                        t.slideTo(s)
                    }))) : t.slideTo(s)
                } else t.slideTo(s)
            }
        }, loop: {
            loopCreate: function () {
                var e = this, t = r(), n = e.params, i = e.$wrapperEl;
                i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                var s = i.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    var a = n.slidesPerGroup - s.length % n.slidesPerGroup;
                    if (a !== n.slidesPerGroup) {
                        for (var o = 0; o < a; o += 1) {
                            var l = h(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                            i.append(l)
                        }
                        s = i.children("." + n.slideClass)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
                var c = [], u = [];
                s.each((function (t, n) {
                    var i = h(t);
                    n < e.loopedSlides && u.push(t), n < s.length && n >= s.length - e.loopedSlides && c.push(t), i.attr("data-swiper-slide-index", n)
                }));
                for (var d = 0; d < u.length; d += 1) i.append(h(u[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (var p = c.length - 1; p >= 0; p -= 1) i.prepend(h(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
            }, loopFix: function () {
                var e = this;
                e.emit("beforeLoopFix");
                var t, n = e.activeIndex, i = e.slides, r = e.loopedSlides, s = e.allowSlidePrev, a = e.allowSlideNext,
                    o = e.snapGrid, l = e.rtlTranslate;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                var c = -o[n] - e.getTranslate();
                n < r ? (t = i.length - 3 * r + n, t += r, e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)) : n >= i.length - r && (t = -i.length + n + r, t += r, e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix")
            }, loopDestroy: function () {
                var e = this, t = e.$wrapperEl, n = e.params, i = e.slides;
                t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        }, grabCursor: {
            setGrabCursor: function (e) {
                var t = this;
                if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                    var n = t.el;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                }
            }, unsetGrabCursor: function () {
                var e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        }, manipulation: {
            appendSlide: function (e) {
                var t = this, n = t.$wrapperEl, i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]); else n.append(e);
                i.loop && t.loopCreate(), i.observer && t.support.observer || t.update()
            }, prependSlide: function (e) {
                var t = this, n = t.params, i = t.$wrapperEl, r = t.activeIndex;
                n.loop && t.loopDestroy();
                var s = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                    s = r + e.length
                } else i.prepend(e);
                n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), t.slideTo(s, 0, !1)
            }, addSlide: function (e, t) {
                var n = this, i = n.$wrapperEl, r = n.params, s = n.activeIndex;
                r.loop && (s -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                var a = n.slides.length;
                if (e <= 0) n.prependSlide(t); else if (e >= a) n.appendSlide(t); else {
                    for (var o = s > e ? s + 1 : s, l = [], c = a - 1; c >= e; c -= 1) {
                        var u = n.slides.eq(c);
                        u.remove(), l.unshift(u)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
                        o = s > e ? s + t.length : s
                    } else i.append(t);
                    for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                    r.loop && n.loopCreate(), r.observer && n.support.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
                }
            }, removeSlide: function (e) {
                var t = this, n = t.params, i = t.$wrapperEl, r = t.activeIndex;
                n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                var s, a = r;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) s = e[o], t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1);
                    a = Math.max(a, 0)
                } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
                n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            }, removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        }, events: {
            attachEvents: function () {
                var e = this, t = r(), n = e.params, i = e.touchEvents, s = e.el, a = e.wrapperEl, o = e.device,
                    l = e.support;
                e.onTouchStart = N.bind(e), e.onTouchMove = I.bind(e), e.onTouchEnd = z.bind(e), n.cssMode && (e.onScroll = H.bind(e)), e.onClick = $.bind(e);
                var c = !!n.nested;
                if (!l.touch && l.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, c), t.addEventListener(i.end, e.onTouchEnd, !1); else {
                    if (l.touch) {
                        var u = !("touchstart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, e.onTouchStart, u), s.addEventListener(i.move, e.onTouchMove, l.passiveListener ? {
                            passive: !1,
                            capture: c
                        } : c), s.addEventListener(i.end, e.onTouchEnd, u), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, u), q || (t.addEventListener("touchstart", B), q = !0)
                    }
                    (n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, c), t.addEventListener("mouseup", e.onTouchEnd, !1))
                }
                (n.preventClicks || n.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), n.cssMode && a.addEventListener("scroll", e.onScroll), n.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e.on("observerUpdate", j, !0)
            }, detachEvents: function () {
                var e = this, t = r(), n = e.params, i = e.touchEvents, s = e.el, a = e.wrapperEl, o = e.device,
                    l = e.support, c = !!n.nested;
                if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, c), t.removeEventListener(i.end, e.onTouchEnd, !1); else {
                    if (l.touch) {
                        var u = !("onTouchStart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, e.onTouchStart, u), s.removeEventListener(i.move, e.onTouchMove, c), s.removeEventListener(i.end, e.onTouchEnd, u), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, u)
                    }
                    (n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, c), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                }
                (n.preventClicks || n.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), n.cssMode && a.removeEventListener("scroll", e.onScroll), e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j)
            }
        }, breakpoints: {
            setBreakpoint: function () {
                var e = this, t = e.activeIndex, n = e.initialized, i = e.loopedSlides, r = void 0 === i ? 0 : i,
                    s = e.params, a = e.$el, o = s.breakpoints;
                if (o && (!o || 0 !== Object.keys(o).length)) {
                    var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                    if (l && e.currentBreakpoint !== l) {
                        var c = l in o ? o[l] : void 0;
                        c && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                            var t = c[e];
                            void 0 !== t && (c[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }));
                        var u = c || e.originalParams, d = s.slidesPerColumn > 1, p = u.slidesPerColumn > 1,
                            f = s.enabled;
                        d && !p ? (a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !d && p && (a.addClass(s.containerModifierClass + "multirow"), (u.slidesPerColumnFill && "column" === u.slidesPerColumnFill || !u.slidesPerColumnFill && "column" === s.slidesPerColumnFill) && a.addClass(s.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                        var h = u.direction && u.direction !== s.direction,
                            m = s.loop && (u.slidesPerView !== s.slidesPerView || h);
                        h && n && e.changeDirection(), _(e.params, u);
                        var g = e.params.enabled;
                        _(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), f && !g ? e.disable() : !f && g && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", u), m && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", u)
                    }
                }
            }, getBreakpoint: function (e, t, n) {
                if (void 0 === t && (t = "window"), e && ("container" !== t || n)) {
                    var i = !1, r = a(), s = "window" === t ? r.innerHeight : n.clientHeight,
                        o = Object.keys(e).map((function (e) {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                var t = parseFloat(e.substr(1));
                                return {value: s * t, point: e}
                            }
                            return {value: e, point: e}
                        }));
                    o.sort((function (e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }));
                    for (var l = 0; l < o.length; l += 1) {
                        var c = o[l], u = c.point, d = c.value;
                        "window" === t ? r.matchMedia("(min-width: " + d + "px)").matches && (i = u) : d <= n.clientWidth && (i = u)
                    }
                    return i || "max"
                }
            }
        }, checkOverflow: {
            checkOverflow: function () {
                var e = this, t = e.params, n = e.isLocked,
                    i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
            }
        }, classes: {
            addClasses: function () {
                var e, t, n, i = this, r = i.classNames, s = i.params, a = i.rtl, o = i.$el, l = i.device,
                    c = i.support,
                    u = (e = ["initialized", s.direction, {"pointer-events": c.pointerEvents && !c.touch}, {"free-mode": s.freeMode}, {autoheight: s.autoHeight}, {rtl: a}, {multirow: s.slidesPerColumn > 1}, {"multirow-column": s.slidesPerColumn > 1 && "column" === s.slidesPerColumnFill}, {android: l.android}, {ios: l.ios}, {"css-mode": s.cssMode}], t = s.containerModifierClass, n = [], e.forEach((function (e) {
                        "object" == typeof e ? Object.keys(e).forEach((function (i) {
                            e[i] && n.push(t + i)
                        })) : "string" == typeof e && n.push(t + e)
                    })), n);
                r.push.apply(r, u), o.addClass([].concat(r).join(" ")), i.emitContainerClasses()
            }, removeClasses: function () {
                var e = this, t = e.$el, n = e.classNames;
                t.removeClass(n.join(" ")), e.emitContainerClasses()
            }
        }, images: {
            loadImage: function (e, t, n, i, r, s) {
                var o, l = a();

                function c() {
                    s && s()
                }

                h(e).parent("picture")[0] || e.complete && r ? c() : t ? ((o = new l.Image).onload = c, o.onerror = c, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : c()
            }, preloadImages: function () {
                var e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                    var i = e.imagesToLoad[n];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, F = {}, G = function () {
        function e() {
            for (var t, n, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            if (1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? n = r[0] : (t = r[0], n = r[1]), n || (n = {}), n = _({}, n), t && !n.el && (n.el = t), n.el && h(n.el).length > 1) {
                var a = [];
                return h(n.el).each((function (t) {
                    var i = _({}, n, {el: t});
                    a.push(new e(i))
                })), a
            }
            var o = this;
            o.__swiper__ = !0, o.support = A(), o.device = M({userAgent: n.userAgent}), o.browser = O(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function (e) {
                var t = o.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], r = t.params[i];
                    if ("object" != typeof r || null === r) return;
                    if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === n[i] && (n[i] = {auto: !0}), !(i in n) || !("enabled" in r)) return;
                    !0 === n[i] && (n[i] = {enabled: !0}), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {enabled: !1})
                }
            }));
            var l, c, u = _({}, R);
            return o.useParams(u), o.params = _({}, u, F, n), o.originalParams = _({}, o.params), o.passedParams = _({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((function (e) {
                o.on(e, o.params.on[e])
            })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = h, _(o, {
                enabled: o.params.enabled,
                el: t,
                classNames: [],
                slides: h(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                    return "horizontal" === o.params.direction
                },
                isVertical: function () {
                    return "vertical" === o.params.direction
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], c = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (c = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
                    start: l[0],
                    move: l[1],
                    end: l[2],
                    cancel: l[3]
                }, o.touchEventsDesktop = {
                    start: c[0],
                    move: c[1],
                    end: c[2]
                }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: o.params.focusableElements,
                    lastClickTime: w(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o
        }

        var t, n = e.prototype;
        return n.enable = function () {
            var e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }, n.disable = function () {
            var e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }, n.setProgress = function (e, t) {
            var n = this;
            e = Math.min(Math.max(e, 0), 1);
            var i = n.minTranslate(), r = (n.maxTranslate() - i) * e + i;
            n.translateTo(r, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }, n.emitContainerClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter((function (t) {
                    return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                }));
                e.emit("_containerClasses", t.join(" "))
            }
        }, n.getSlideClasses = function (e) {
            var t = this;
            return e.className.split(" ").filter((function (e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            })).join(" ")
        }, n.emitSlidesClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each((function (n) {
                    var i = e.getSlideClasses(n);
                    t.push({slideEl: n, classNames: i}), e.emit("_slideClass", n, i)
                })), e.emit("_slideClasses", t)
            }
        }, n.slidesPerViewDynamic = function () {
            var e = this, t = e.params, n = e.slides, i = e.slidesGrid, r = e.size, s = e.activeIndex, a = 1;
            if (t.centeredSlides) {
                for (var o, l = n[s].swiperSlideSize, c = s + 1; c < n.length; c += 1) n[c] && !o && (a += 1, (l += n[c].swiperSlideSize) > r && (o = !0));
                for (var u = s - 1; u >= 0; u -= 1) n[u] && !o && (a += 1, (l += n[u].swiperSlideSize) > r && (o = !0))
            } else for (var d = s + 1; d < n.length; d += 1) i[d] - i[s] < r && (a += 1);
            return a
        }, n.update = function () {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, n = e.params;
                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            function i() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
        }, n.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var n = this, i = n.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + e), n.emitContainerClasses(), n.params.direction = e, n.slides.each((function (t) {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), n.emit("changeDirection"), t && n.update()), n
        }, n.mount = function (e) {
            var t = this;
            if (t.mounted) return !0;
            var n = h(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            var i = function () {
                return "." + (t.params.wrapperClass || "").trim().split(" ").join(".")
            }, s = function () {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    var t = h(e.shadowRoot.querySelector(i()));
                    return t.children = function (e) {
                        return n.children(e)
                    }, t
                }
                return n.children(i())
            }();
            if (0 === s.length && t.params.createElements) {
                var a = r().createElement("div");
                s = h(a), a.className = t.params.wrapperClass, n.append(a), n.children("." + t.params.slideClass).each((function (e) {
                    s.append(e)
                }))
            }
            return _(t, {
                $el: n,
                el: e,
                $wrapperEl: s,
                wrapperEl: s[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === s.css("display")
            }), !0
        }, n.init = function (e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }, n.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var n, i = this, r = i.params, s = i.$el, a = i.$wrapperEl, o = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                i.off(e)
            })), !1 !== e && (i.$el[0].swiper = null, n = i, Object.keys(n).forEach((function (e) {
                try {
                    n[e] = null
                } catch (e) {
                }
                try {
                    delete n[e]
                } catch (e) {
                }
            }))), i.destroyed = !0), null
        }, e.extendDefaults = function (e) {
            _(F, e)
        }, e.installModule = function (t) {
            e.prototype.modules || (e.prototype.modules = {});
            var n = t.name || Object.keys(e.prototype.modules).length + "_" + w();
            e.prototype.modules[n] = t
        }, e.use = function (t) {
            return Array.isArray(t) ? (t.forEach((function (t) {
                return e.installModule(t)
            })), e) : (e.installModule(t), e)
        }, (t = [{
            key: "extendedDefaults", get: function () {
                return F
            }
        }, {
            key: "defaults", get: function () {
                return R
            }
        }]) && function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }(e, t), e
    }();
    Object.keys(W).forEach((function (e) {
        Object.keys(W[e]).forEach((function (t) {
            G.prototype[t] = W[e][t]
        }))
    })), G.use([L, D]);
    var X = {
        update: function (e) {
            var t = this, n = t.params, i = n.slidesPerView, r = n.slidesPerGroup, s = n.centeredSlides,
                a = t.params.virtual, o = a.addSlidesBefore, l = a.addSlidesAfter, c = t.virtual, u = c.from, d = c.to,
                p = c.slides, f = c.slidesGrid, h = c.renderSlide, m = c.offset;
            t.updateActiveIndex();
            var g, v, y, b = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (v = Math.floor(i / 2) + r + l, y = Math.floor(i / 2) + r + o) : (v = i + (r - 1) + l, y = r + o);
            var w = Math.max((b || 0) - y, 0), x = Math.min((b || 0) + v, p.length - 1),
                E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

            function T() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }

            if (_(t.virtual, {
                from: w,
                to: x,
                offset: E,
                slidesGrid: t.slidesGrid
            }), u === w && d === x && !e) return t.slidesGrid !== f && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: E,
                from: w,
                to: x,
                slides: function () {
                    for (var e = [], t = w; t <= x; t += 1) e.push(p[t]);
                    return e
                }()
            }), void (t.params.virtual.renderExternalUpdate && T());
            var C = [], S = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var k = u; k <= d; k += 1) (k < w || k > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
            for (var A = 0; A < p.length; A += 1) A >= w && A <= x && (void 0 === d || e ? S.push(A) : (A > d && S.push(A), A < u && C.push(A)));
            S.forEach((function (e) {
                t.$wrapperEl.append(h(p[e], e))
            })), C.sort((function (e, t) {
                return t - e
            })).forEach((function (e) {
                t.$wrapperEl.prepend(h(p[e], e))
            })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), T()
        }, renderSlide: function (e, t) {
            var n = this, i = n.params.virtual;
            if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
            var r = i.renderSlide ? h(i.renderSlide.call(n, e, t)) : h('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r
        }, appendSlide: function (e) {
            var t = this;
            if ("object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]); else t.virtual.slides.push(e);
            t.virtual.update(!0)
        }, prependSlide: function (e) {
            var t = this, n = t.activeIndex, i = n + 1, r = 1;
            if (Array.isArray(e)) {
                for (var s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.unshift(e[s]);
                i = n + e.length, r = e.length
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                var a = t.virtual.cache, o = {};
                Object.keys(a).forEach((function (e) {
                    var t = a[e], n = t.attr("data-swiper-slide-index");
                    n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), o[parseInt(e, 10) + r] = t
                })), t.virtual.cache = o
            }
            t.virtual.update(!0), t.slideTo(i, 0)
        }, removeSlide: function (e) {
            var t = this;
            if (null != e) {
                var n = t.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0); else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                t.virtual.update(!0), t.slideTo(n, 0)
            }
        }, removeAllSlides: function () {
            var e = this;
            e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
        }
    }, V = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function () {
            C(this, {virtual: e({}, X, {slides: this.params.virtual.slides, cache: {}})})
        },
        on: {
            beforeInit: function (e) {
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {watchSlidesProgress: !0};
                    _(e.params, t), _(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                }
            }, setTranslate: function (e) {
                e.params.virtual.enabled && e.virtual.update()
            }
        }
    }, Y = {
        handle: function (e) {
            var t = this;
            if (t.enabled) {
                var n = a(), i = r(), s = t.rtlTranslate, o = e;
                o.originalEvent && (o = o.originalEvent);
                var l = o.keyCode || o.charCode, c = t.params.keyboard.pageUpDown, u = c && 33 === l, d = c && 34 === l,
                    p = 37 === l, f = 39 === l, h = 38 === l, m = 40 === l;
                if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && m || d)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || u)) return !1;
                if (!(o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (u || d || p || f || h || m)) {
                        var g = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var v = t.$el, y = v[0].clientWidth, b = v[0].clientHeight, w = n.innerWidth, x = n.innerHeight,
                            E = t.$el.offset();
                        s && (E.left -= t.$el[0].scrollLeft);
                        for (var T = [[E.left, E.top], [E.left + y, E.top], [E.left, E.top + b], [E.left + y, E.top + b]], _ = 0; _ < T.length; _ += 1) {
                            var C = T[_];
                            if (C[0] >= 0 && C[0] <= w && C[1] >= 0 && C[1] <= x) {
                                if (0 === C[0] && 0 === C[1]) continue;
                                g = !0
                            }
                        }
                        if (!g) return
                    }
                    t.isHorizontal() ? ((u || d || p || f) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1), ((d || f) && !s || (u || p) && s) && t.slideNext(), ((u || p) && !s || (d || f) && s) && t.slidePrev()) : ((u || d || h || m) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1), (d || m) && t.slideNext(), (u || h) && t.slidePrev()), t.emit("keyPress", l)
                }
            }
        }, enable: function () {
            var e = this, t = r();
            e.keyboard.enabled || (h(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
        }, disable: function () {
            var e = this, t = r();
            e.keyboard.enabled && (h(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
        }
    }, U = {
        name: "keyboard",
        params: {keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}},
        create: function () {
            C(this, {keyboard: e({enabled: !1}, Y)})
        },
        on: {
            init: function (e) {
                e.params.keyboard.enabled && e.keyboard.enable()
            }, destroy: function (e) {
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    }, K = {
        lastScrollTime: w(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
            return a().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = r(), t = "onwheel", n = t in e;
                if (!n) {
                    var i = e.createElement("div");
                    i.setAttribute(t, "return;"), n = "function" == typeof i.onwheel
                }
                return !n && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (n = e.implementation.hasFeature("Events.wheel", "3.0")), n
            }() ? "wheel" : "mousewheel"
        }, normalize: function (e) {
            var t = 0, n = 0, i = 0, r = 0;
            return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                spinX: t,
                spinY: n,
                pixelX: i,
                pixelY: r
            }
        }, handleMouseEnter: function () {
            this.enabled && (this.mouseEntered = !0)
        }, handleMouseLeave: function () {
            this.enabled && (this.mouseEntered = !1)
        }, handle: function (e) {
            var t = e, n = this;
            if (n.enabled) {
                var i = n.params.mousewheel;
                n.params.cssMode && t.preventDefault();
                var r = n.$el;
                if ("container" !== n.params.mousewheel.eventsTarget && (r = h(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0, a = n.rtlTranslate ? -1 : 1, o = K.normalize(t);
                if (i.forceToAxis) if (n.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                    s = -o.pixelX * a
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                    s = -o.pixelY
                } else s = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
                if (0 === s) return !0;
                i.invert && (s = -s);
                var l = n.getTranslate() + s * i.sensitivity;
                if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), (!!n.params.loop || !(l === n.minTranslate() || l === n.maxTranslate())) && n.params.nested && t.stopPropagation(), n.params.freeMode) {
                    var c = {time: w(), delta: Math.abs(s), direction: Math.sign(s)},
                        u = n.mousewheel.lastEventBeforeSnap,
                        d = u && c.time < u.time + 500 && c.delta <= u.delta && c.direction === u.direction;
                    if (!d) {
                        n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                        var p = n.getTranslate() + s * i.sensitivity, f = n.isBeginning, m = n.isEnd;
                        if (p >= n.minTranslate() && (p = n.minTranslate()), p <= n.maxTranslate() && (p = n.maxTranslate()), n.setTransition(0), n.setTranslate(p), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!f && n.isBeginning || !m && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                            clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                            var g = n.mousewheel.recentWheelEvents;
                            g.length >= 15 && g.shift();
                            var v = g.length ? g[g.length - 1] : void 0, y = g[0];
                            if (g.push(c), v && (c.delta > v.delta || c.direction !== v.direction)) g.splice(0); else if (g.length >= 15 && c.time - y.time < 500 && y.delta - c.delta >= 1 && c.delta <= 6) {
                                var x = s > 0 ? .8 : .2;
                                n.mousewheel.lastEventBeforeSnap = c, g.splice(0), n.mousewheel.timeout = b((function () {
                                    n.slideToClosest(n.params.speed, !0, void 0, x)
                                }), 0)
                            }
                            n.mousewheel.timeout || (n.mousewheel.timeout = b((function () {
                                n.mousewheel.lastEventBeforeSnap = c, g.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (d || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), p === n.minTranslate() || p === n.maxTranslate()) return !0
                    }
                } else {
                    var E = {time: w(), delta: Math.abs(s), direction: Math.sign(s), raw: e},
                        T = n.mousewheel.recentWheelEvents;
                    T.length >= 2 && T.shift();
                    var _ = T.length ? T[T.length - 1] : void 0;
                    if (T.push(E), _ ? (E.direction !== _.direction || E.delta > _.delta || E.time > _.time + 150) && n.mousewheel.animateSlider(E) : n.mousewheel.animateSlider(E), n.mousewheel.releaseScroll(E)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            }
        }, animateSlider: function (e) {
            var t = this, n = a();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && w() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(e.delta >= 6 && w() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new n.Date).getTime(), 1))
        }, releaseScroll: function (e) {
            var t = this, n = t.params.mousewheel;
            if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
            } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
            return !1
        }, enable: function () {
            var e = this, t = K.event();
            if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            var n = e.$el;
            return "container" !== e.params.mousewheel.eventsTarget && (n = h(e.params.mousewheel.eventsTarget)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        }, disable: function () {
            var e = this, t = K.event();
            if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            var n = e.$el;
            return "container" !== e.params.mousewheel.eventsTarget && (n = h(e.params.mousewheel.eventsTarget)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
    }, Q = {
        toggleEl: function (e, t) {
            e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
        }, update: function () {
            var e = this, t = e.params.navigation, n = e.navigation.toggleEl;
            if (!e.params.loop) {
                var i = e.navigation, r = i.$nextEl, s = i.$prevEl;
                s && s.length > 0 && (e.isBeginning ? n(s, !0) : n(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), r && r.length > 0 && (e.isEnd ? n(r, !0) : n(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        }, onPrevClick: function (e) {
            var t = this;
            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
        }, onNextClick: function (e) {
            var t = this;
            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
        }, init: function () {
            var e, t, n = this, i = n.params.navigation;
            n.params.navigation = k(n.$el, n.params.navigation, n.params.createElements, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), (i.nextEl || i.prevEl) && (i.nextEl && (e = h(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = h(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", n.navigation.onNextClick), t && t.length > 0 && t.on("click", n.navigation.onPrevClick), _(n.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }), n.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
        }, destroy: function () {
            var e = this, t = e.navigation, n = t.$nextEl, i = t.$prevEl;
            n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
    }, J = {
        update: function () {
            var e = this, t = e.rtl, n = e.params.pagination;
            if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i, r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    s = e.pagination.$el,
                    a = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (i -= r - 2 * e.loopedSlides), i > a - 1 && (i -= a), i < 0 && "bullets" !== e.params.paginationType && (i = a + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    var o, l, c, u = e.pagination.bullets;
                    if (n.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = i - e.pagination.dynamicBulletIndex, c = ((l = o + (Math.min(u.length, n.dynamicMainBullets) - 1)) + o) / 2), u.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), s.length > 1) u.each((function (e) {
                        var t = h(e), r = t.index();
                        r === i && t.addClass(n.bulletActiveClass), n.dynamicBullets && (r >= o && r <= l && t.addClass(n.bulletActiveClass + "-main"), r === o && t.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), r === l && t.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                    })); else {
                        var d = u.eq(i), p = d.index();
                        if (d.addClass(n.bulletActiveClass), n.dynamicBullets) {
                            for (var f = u.eq(o), m = u.eq(l), g = o; g <= l; g += 1) u.eq(g).addClass(n.bulletActiveClass + "-main");
                            if (e.params.loop) if (p >= u.length - n.dynamicMainBullets) {
                                for (var v = n.dynamicMainBullets; v >= 0; v -= 1) u.eq(u.length - v).addClass(n.bulletActiveClass + "-main");
                                u.eq(u.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                            } else f.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), m.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"); else f.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), m.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                        }
                    }
                    if (n.dynamicBullets) {
                        var y = Math.min(u.length, n.dynamicMainBullets + 4),
                            b = (e.pagination.bulletSize * y - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                            w = t ? "right" : "left";
                        u.css(e.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === n.type && (s.find(S(n.currentClass)).text(n.formatFractionCurrent(i + 1)), s.find(S(n.totalClass)).text(n.formatFractionTotal(a))), "progressbar" === n.type) {
                    var x;
                    x = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var E = (i + 1) / a, T = 1, _ = 1;
                    "horizontal" === x ? T = E : _ = E, s.find(S(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + _ + ")").transition(e.params.speed)
                }
                "custom" === n.type && n.renderCustom ? (s.html(n.renderCustom(e, i + 1, a)), e.emit("paginationRender", s[0])) : e.emit("paginationUpdate", s[0]), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el, r = "";
                if ("bullets" === t.type) {
                    var s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && !e.params.loop && s > n && (s = n);
                    for (var a = 0; a < s; a += 1) t.renderBullet ? r += t.renderBullet.call(e, a, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(r), e.pagination.bullets = i.find(S(t.bulletClass))
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var e = this;
            e.params.pagination = k(e.$el, e.params.pagination, e.params.createElements, {el: "swiper-pagination"});
            var t = e.params.pagination;
            if (t.el) {
                var n = h(t.el);
                0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", S(t.bulletClass), (function (t) {
                    t.preventDefault();
                    var n = h(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                })), _(e.pagination, {$el: n, el: n[0]}), e.enabled || n.addClass(t.lockClass))
            }
        }, destroy: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var n = e.pagination.$el;
                n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", S(t.bulletClass))
            }
        }
    }, Z = {
        setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, n = e.rtlTranslate, i = e.progress, r = t.dragSize, s = t.trackSize, a = t.$dragEl,
                    o = t.$el, l = e.params.scrollbar, c = r, u = (s - r) * i;
                n ? (u = -u) > 0 ? (c = r - u, u = 0) : -u + r > s && (c = s + u) : u < 0 ? (c = r + u, u = 0) : u + r > s && (c = s - u), e.isHorizontal() ? (a.transform("translate3d(" + u + "px, 0, 0)"), a[0].style.width = c + "px") : (a.transform("translate3d(0px, " + u + "px, 0)"), a[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function () {
                    o[0].style.opacity = 0, o.transition(400)
                }), 1e3))
            }
        }, setTransition: function (e) {
            var t = this;
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, n = t.$dragEl, i = t.$el;
                n[0].style.width = "", n[0].style.height = "";
                var r, s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, a = e.size / e.virtualSize,
                    o = a * (s / e.size);
                r = "auto" === e.params.scrollbar.dragSize ? s * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = a >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), _(t, {
                    trackSize: s,
                    divider: a,
                    moveDivider: o,
                    dragSize: r
                }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        }, getPointerPosition: function (e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }, setDragPosition: function (e) {
            var t, n = this, i = n.scrollbar, r = n.rtlTranslate, s = i.$el, a = i.dragSize, o = i.trackSize,
                l = i.dragStartPos;
            t = (i.getPointerPosition(e) - s.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : a / 2)) / (o - a), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
            var c = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
            n.updateProgress(c), n.setTranslate(c), n.updateActiveIndex(), n.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this, n = t.params.scrollbar, i = t.scrollbar, r = t.$wrapperEl, s = i.$el, a = i.$dragEl;
            t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), n.hide && s.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this, n = t.scrollbar, i = t.$wrapperEl, r = n.$el, s = n.$dragEl;
            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), r.transition(0), s.transition(0), t.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this, n = t.params.scrollbar, i = t.scrollbar, r = t.$wrapperEl, s = i.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = b((function () {
                s.css("opacity", 0), s.transition(400)
            }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
        }, enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = r(), n = e.scrollbar, i = e.touchEventsTouch, s = e.touchEventsDesktop, a = e.params,
                    o = e.support, l = n.$el[0],
                    c = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    u = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                l && (o.touch ? (l.addEventListener(i.start, e.scrollbar.onDragStart, c), l.addEventListener(i.move, e.scrollbar.onDragMove, c), l.addEventListener(i.end, e.scrollbar.onDragEnd, u)) : (l.addEventListener(s.start, e.scrollbar.onDragStart, c), t.addEventListener(s.move, e.scrollbar.onDragMove, c), t.addEventListener(s.end, e.scrollbar.onDragEnd, u)))
            }
        }, disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = r(), n = e.scrollbar, i = e.touchEventsTouch, s = e.touchEventsDesktop, a = e.params,
                    o = e.support, l = n.$el[0],
                    c = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    u = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                l && (o.touch ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, c), l.removeEventListener(i.move, e.scrollbar.onDragMove, c), l.removeEventListener(i.end, e.scrollbar.onDragEnd, u)) : (l.removeEventListener(s.start, e.scrollbar.onDragStart, c), t.removeEventListener(s.move, e.scrollbar.onDragMove, c), t.removeEventListener(s.end, e.scrollbar.onDragEnd, u)))
            }
        }, init: function () {
            var e = this, t = e.scrollbar, n = e.$el;
            e.params.scrollbar = k(n, e.params.scrollbar, e.params.createElements, {el: "swiper-scrollbar"});
            var i = e.params.scrollbar;
            if (i.el) {
                var r = h(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === n.find(i.el).length && (r = n.find(i.el));
                var s = r.find("." + e.params.scrollbar.dragClass);
                0 === s.length && (s = h('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(s)), _(t, {
                    $el: r,
                    el: r[0],
                    $dragEl: s,
                    dragEl: s[0]
                }), i.draggable && t.enableDraggable(), r && r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, ee = {
        setTransform: function (e, t) {
            var n = this.rtl, i = h(e), r = n ? -1 : 1, s = i.attr("data-swiper-parallax") || "0",
                a = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"),
                l = i.attr("data-swiper-parallax-scale"), c = i.attr("data-swiper-parallax-opacity");
            if (a || o ? (a = a || "0", o = o || "0") : this.isHorizontal() ? (a = s, o = "0") : (o = s, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * t * r + "%" : a * t * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != c) {
                var u = c - (c - 1) * (1 - Math.abs(t));
                i[0].style.opacity = u
            }
            if (null == l) i.transform("translate3d(" + a + ", " + o + ", 0px)"); else {
                var d = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + a + ", " + o + ", 0px) scale(" + d + ")")
            }
        }, setTranslate: function () {
            var e = this, t = e.$el, n = e.slides, i = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                e.parallax.setTransform(t, i)
            })), n.each((function (t, n) {
                var s = t.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (s += Math.ceil(n / 2) - i * (r.length - 1)), s = Math.min(Math.max(s, -1), 1), h(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                    e.parallax.setTransform(t, s)
                }))
            }))
        }, setTransition: function (e) {
            void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                var n = h(t), i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), n.transition(i)
            }))
        }
    }, te = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
                r = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
        }, onGestureStart: function (e) {
            var t = this, n = t.support, i = t.params.zoom, r = t.zoom, s = r.gesture;
            if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !n.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                r.fakeGestureTouched = !0, s.scaleStart = te.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = h(e.target).closest("." + t.params.slideClass), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this, n = t.support, i = t.params.zoom, r = t.zoom, s = r.gesture;
            if (!n.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                r.fakeGestureMoved = !0, s.scaleMove = te.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length ? (n.gestures ? r.scale = e.scale * r.currentScale : r.scale = s.scaleMove / s.scaleStart * r.currentScale, r.scale > s.maxRatio && (r.scale = s.maxRatio - 1 + Math.pow(r.scale - s.maxRatio + 1, .5)), r.scale < i.minRatio && (r.scale = i.minRatio + 1 - Math.pow(i.minRatio - r.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")")) : "gesturechange" === e.type && r.onGestureStart(e)
        }, onGestureEnd: function (e) {
            var t = this, n = t.device, i = t.support, r = t.params.zoom, s = t.zoom, a = s.gesture;
            if (!i.gestures) {
                if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
                s.fakeGestureTouched = !1, s.fakeGestureMoved = !1
            }
            a.$imageEl && 0 !== a.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, a.maxRatio), r.minRatio), a.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + s.scale + ")"), s.currentScale = s.scale, s.isScaling = !1, 1 === s.scale && (a.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.device, n = this.zoom, i = n.gesture, r = n.image;
            i.$imageEl && 0 !== i.$imageEl.length && (r.isTouched || (t.android && e.cancelable && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this, n = t.zoom, i = n.gesture, r = n.image, s = n.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = x(i.$imageWrapEl[0], "x") || 0, r.startY = x(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0));
                var a = r.width * n.scale, o = r.height * n.scale;
                if (!(a < i.slideWidth && o < i.slideHeight)) {
                    if (r.minX = Math.min(i.slideWidth / 2 - a / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
                        if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void (r.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void (r.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = r.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = r.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (r.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (r.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(r.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(r.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = r.touchesCurrent.x, s.prevPositionY = r.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, n = e.image, i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void (n.isMoved = !1);
                n.isTouched = !1, n.isMoved = !1;
                var r = 300, s = 300, a = i.x * r, o = n.currentX + a, l = i.y * s, c = n.currentY + l;
                0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (s = Math.abs((c - n.currentY) / i.y));
                var u = Math.max(r, s);
                n.currentX = o, n.currentY = c;
                var d = n.width * e.scale, p = n.height * e.scale;
                n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this, t = e.zoom, n = t.gesture;
            n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, n, i, r, s, o, l, c, u, d, p, f, m, g, v, y, b = this, w = a(), x = b.zoom, E = b.params.zoom,
                T = x.gesture, _ = x.image;
            T.$slideEl || (e && e.target && (T.$slideEl = h(e.target).closest("." + b.params.slideClass)), T.$slideEl || (b.params.virtual && b.params.virtual.enabled && b.virtual ? T.$slideEl = b.$wrapperEl.children("." + b.params.slideActiveClass) : T.$slideEl = b.slides.eq(b.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + E.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length && (T.$slideEl.addClass("" + E.zoomedSlideClass), void 0 === _.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = _.touchesStart.x, n = _.touchesStart.y), x.scale = T.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, x.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, e ? (v = T.$slideEl[0].offsetWidth, y = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + w.scrollX + v / 2 - t, r = T.$slideEl.offset().top + w.scrollY + y / 2 - n, l = T.$imageEl[0].offsetWidth, c = T.$imageEl[0].offsetHeight, u = l * x.scale, d = c * x.scale, m = -(p = Math.min(v / 2 - u / 2, 0)), g = -(f = Math.min(y / 2 - d / 2, 0)), (s = i * x.scale) < p && (s = p), s > m && (s = m), (o = r * x.scale) < f && (o = f), o > g && (o = g)) : (s = 0, o = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + x.scale + ")"))
        }, out: function () {
            var e = this, t = e.zoom, n = e.params.zoom, i = t.gesture;
            i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0)
        }, toggleGestures: function (e) {
            var t = this, n = t.zoom, i = n.slideSelector, r = n.passiveListener;
            t.$wrapperEl[e]("gesturestart", i, n.onGestureStart, r), t.$wrapperEl[e]("gesturechange", i, n.onGestureChange, r), t.$wrapperEl[e]("gestureend", i, n.onGestureEnd, r)
        }, enableGestures: function () {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
        }, disableGestures: function () {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
        }, enable: function () {
            var e = this, t = e.support, n = e.zoom;
            if (!n.enabled) {
                n.enabled = !0;
                var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, r = !t.passiveListener || {passive: !1, capture: !0}, s = "." + e.params.slideClass;
                e.zoom.passiveListener = i, e.zoom.slideSelector = s, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, s, n.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, s, n.onGestureChange, r), e.$wrapperEl.on(e.touchEvents.end, s, n.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, s, n.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, n.onTouchMove, r)
            }
        }, disable: function () {
            var e = this, t = e.zoom;
            if (t.enabled) {
                var n = e.support;
                e.zoom.enabled = !1;
                var i = !("touchstart" !== e.touchEvents.start || !n.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, r = !n.passiveListener || {passive: !1, capture: !0}, s = "." + e.params.slideClass;
                n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, s, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, s, t.onGestureChange, r), e.$wrapperEl.off(e.touchEvents.end, s, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, s, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, r)
            }
        }
    }, ne = {
        loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var n = this, i = n.params.lazy;
            if (void 0 !== e && 0 !== n.slides.length) {
                var r = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                    s = r.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
                !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || s.push(r[0]), 0 !== s.length && s.each((function (e) {
                    var s = h(e);
                    s.addClass(i.loadingClass);
                    var a = s.attr("data-background"), o = s.attr("data-src"), l = s.attr("data-srcset"),
                        c = s.attr("data-sizes"), u = s.parent("picture");
                    n.loadImage(s[0], o || a, l, c, !1, (function () {
                        if (null != n && n && (!n || n.params) && !n.destroyed) {
                            if (a ? (s.css("background-image", 'url("' + a + '")'), s.removeAttr("data-background")) : (l && (s.attr("srcset", l), s.removeAttr("data-srcset")), c && (s.attr("sizes", c), s.removeAttr("data-sizes")), u.length && u.children("source").each((function (e) {
                                var t = h(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), o && (s.attr("src", o), s.removeAttr("data-src"))), s.addClass(i.loadedClass).removeClass(i.loadingClass), r.find("." + i.preloaderClass).remove(), n.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(n.params.slideDuplicateClass)) {
                                    var d = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                    n.lazy.loadInSlide(d.index(), !1)
                                } else {
                                    var p = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    n.lazy.loadInSlide(p.index(), !1)
                                }
                            }
                            n.emit("lazyImageReady", r[0], s[0]), n.params.autoHeight && n.updateAutoHeight()
                        }
                    })), n.emit("lazyImageLoad", r[0], s[0])
                }))
            }
        }, load: function () {
            var e = this, t = e.$wrapperEl, n = e.params, i = e.slides, r = e.activeIndex,
                s = e.virtual && n.virtual.enabled, a = n.lazy, o = n.slidesPerView;

            function l(e) {
                if (s) {
                    if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (i[e]) return !0;
                return !1
            }

            function c(e) {
                return s ? h(e).attr("data-swiper-slide-index") : h(e).index()
            }

            if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each((function (t) {
                var n = s ? h(t).attr("data-swiper-slide-index") : h(t).index();
                e.lazy.loadInSlide(n)
            })); else if (o > 1) for (var u = r; u < r + o; u += 1) l(u) && e.lazy.loadInSlide(u); else e.lazy.loadInSlide(r);
            if (a.loadPrevNext) if (o > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                for (var d = a.loadPrevNextAmount, p = o, f = Math.min(r + p + Math.max(d, p), i.length), m = Math.max(r - Math.max(p, d), 0), g = r + o; g < f; g += 1) l(g) && e.lazy.loadInSlide(g);
                for (var v = m; v < r; v += 1) l(v) && e.lazy.loadInSlide(v)
            } else {
                var y = t.children("." + n.slideNextClass);
                y.length > 0 && e.lazy.loadInSlide(c(y));
                var b = t.children("." + n.slidePrevClass);
                b.length > 0 && e.lazy.loadInSlide(c(b))
            }
        }, checkInViewOnLoad: function () {
            var e = a(), t = this;
            if (t && !t.destroyed) {
                var n = t.params.lazy.scrollingElement ? h(t.params.lazy.scrollingElement) : h(e), i = n[0] === e,
                    r = i ? e.innerWidth : n[0].offsetWidth, s = i ? e.innerHeight : n[0].offsetHeight,
                    o = t.$el.offset(), l = !1;
                t.rtlTranslate && (o.left -= t.$el[0].scrollLeft);
                for (var c = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]], u = 0; u < c.length; u += 1) {
                    var d = c[u];
                    if (d[0] >= 0 && d[0] <= r && d[1] >= 0 && d[1] <= s) {
                        if (0 === d[0] && 0 === d[1]) continue;
                        l = !0
                    }
                }
                var p = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                l ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad, p)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, n.on("scroll", t.lazy.checkInViewOnLoad, p))
            }
        }
    }, ie = {
        LinearSpline: function (e, t) {
            var n, i, r, s, a;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (a = function (e, t) {
                    for (i = -1, n = e.length; n - i > 1;) e[r = n + i >> 1] <= t ? i = r : n = r;
                    return n
                }(this.x, e), s = a - 1, (e - this.x[s]) * (this.y[a] - this.y[s]) / (this.x[a] - this.x[s]) + this.y[s]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new ie.LinearSpline(t.slidesGrid, e.slidesGrid) : new ie.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var n, i, r = this, s = r.controller.control, a = r.constructor;

            function o(e) {
                var t = r.rtlTranslate ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(s)) for (var l = 0; l < s.length; l += 1) s[l] !== t && s[l] instanceof a && o(s[l]); else s instanceof a && t !== s && o(s)
        }, setTransition: function (e, t) {
            var n, i = this, r = i.constructor, s = i.controller.control;

            function a(t) {
                t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && b((function () {
                    t.updateAutoHeight()
                })), t.$wrapperEl.transitionEnd((function () {
                    s && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
                })))
            }

            if (Array.isArray(s)) for (n = 0; n < s.length; n += 1) s[n] !== t && s[n] instanceof r && a(s[n]); else s instanceof r && t !== s && a(s)
        }
    }, re = {
        getRandomNumber: function (e) {
            return void 0 === e && (e = 16), "x".repeat(e).replace(/x/g, (function () {
                return Math.round(16 * Math.random()).toString(16)
            }))
        }, makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, makeElNotFocusable: function (e) {
            return e.attr("tabIndex", "-1"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElRoleDescription: function (e, t) {
            return e.attr("aria-roledescription", t), e
        }, addElControls: function (e, t) {
            return e.attr("aria-controls", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, addElId: function (e, t) {
            return e.attr("id", t), e
        }, addElLive: function (e, t) {
            return e.attr("aria-live", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterOrSpaceKey: function (e) {
            if (13 === e.keyCode || 32 === e.keyCode) {
                var t = this, n = t.params.a11y, i = h(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is(S(t.params.pagination.bulletClass)) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            var e = this;
            if (!e.params.loop && e.navigation) {
                var t = e.navigation, n = t.$nextEl, i = t.$prevEl;
                i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), n && n.length > 0 && (e.isEnd ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n)))
            }
        }, updatePagination: function () {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (n) {
                var i = h(n);
                e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))
            }))
        }, init: function () {
            var e = this, t = e.params.a11y;
            e.$el.append(e.a11y.liveRegion);
            var n = e.$el;
            t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(n, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(n, t.containerMessage);
            var i = e.$wrapperEl, r = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
                s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            e.a11y.addElId(i, r), e.a11y.addElLive(i, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(h(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(h(e.slides), t.slideRole);
            var a, o, l = e.params.loop ? e.slides.filter((function (t) {
                return !t.classList.contains(e.params.slideDuplicateClass)
            })).length : e.slides.length;
            e.slides.each((function (n, i) {
                var r = h(n), s = e.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i,
                    a = t.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, l);
                e.a11y.addElLabel(r, a)
            })), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (o = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, r)), o && o.length && (e.a11y.makeElFocusable(o), "BUTTON" !== o[0].tagName && (e.a11y.addElRole(o, "button"), o.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(o, t.prevSlideMessage), e.a11y.addElControls(o, r)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", S(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey)
        }, destroy: function () {
            var e, t, n = this;
            n.a11y.liveRegion && n.a11y.liveRegion.length > 0 && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterOrSpaceKey), t && t.off("keydown", n.a11y.onEnterOrSpaceKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", S(n.params.pagination.bulletClass), n.a11y.onEnterOrSpaceKey)
        }
    }, se = {
        init: function () {
            var e = this, t = a();
            if (e.params.history) {
                if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var n = e.history;
                n.initialized = !0, n.paths = se.getPathValues(e.params.url), (n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
            }
        }, destroy: function () {
            var e = a();
            this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            var e = this;
            e.history.paths = se.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        }, getPathValues: function (e) {
            var t = a(), n = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function (e) {
                return "" !== e
            })), i = n.length;
            return {key: n[i - 2], value: n[i - 1]}
        }, setHistory: function (e, t) {
            var n = this, i = a();
            if (n.history.initialized && n.params.history.enabled) {
                var r;
                r = n.params.url ? new URL(n.params.url) : i.location;
                var s = n.slides.eq(t), o = se.slugify(s.attr("data-history"));
                if (n.params.history.root.length > 0) {
                    var l = n.params.history.root;
                    "/" === l[l.length - 1] && (l = l.slice(0, l.length - 1)), o = l + "/" + e + "/" + o
                } else r.pathname.includes(e) || (o = e + "/" + o);
                var c = i.history.state;
                c && c.value === o || (n.params.history.replaceState ? i.history.replaceState({value: o}, null, o) : i.history.pushState({value: o}, null, o))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, n) {
            var i = this;
            if (t) for (var r = 0, s = i.slides.length; r < s; r += 1) {
                var a = i.slides.eq(r);
                if (se.slugify(a.attr("data-history")) === t && !a.hasClass(i.params.slideDuplicateClass)) {
                    var o = a.index();
                    i.slideTo(o, e, n)
                }
            } else i.slideTo(0, e, n)
        }
    }, ae = {
        onHashChange: function () {
            var e = this, t = r();
            e.emit("hashChange");
            var n = t.location.hash.replace("#", "");
            if (n !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index();
                if (void 0 === i) return;
                e.slideTo(i)
            }
        }, setHash: function () {
            var e = this, t = a(), n = r();
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet"); else {
                var i = e.slides.eq(e.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                n.location.hash = s || "", e.emit("hashSet")
            }
        }, init: function () {
            var e = this, t = r(), n = a();
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var i = t.location.hash.replace("#", "");
                if (i) for (var s = 0, o = e.slides.length; s < o; s += 1) {
                    var l = e.slides.eq(s);
                    if ((l.attr("data-hash") || l.attr("data-history")) === i && !l.hasClass(e.params.slideDuplicateClass)) {
                        var c = l.index();
                        e.slideTo(c, 0, e.params.runCallbacksOnInit, !0)
                    }
                }
                e.params.hashNavigation.watchState && h(n).on("hashchange", e.hashNavigation.onHashChange)
            }
        }, destroy: function () {
            var e = a();
            this.params.hashNavigation.watchState && h(e).off("hashchange", this.hashNavigation.onHashChange)
        }
    }, oe = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = b((function () {
                var t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
            }), n)
        }, start: function () {
            var e = this;
            return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
        }, stop: function () {
            var e = this;
            return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function (e) {
                t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
            })) : (t.autoplay.paused = !1, t.autoplay.run())))
        }, onVisibilityChange: function () {
            var e = this, t = r();
            "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
        }, onTransitionEnd: function (e) {
            var t = this;
            t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function (e) {
                t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
            })), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
        }, onMouseEnter: function () {
            var e = this;
            e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach((function (t) {
                e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd)
            }))
        }, onMouseLeave: function () {
            var e = this;
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run())
        }, attachMouseEvents: function () {
            var e = this;
            e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave))
        }, detachMouseEvents: function () {
            var e = this;
            e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave)
        }
    }, le = {
        setTranslate: function () {
            for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                var i = e.slides.eq(n), r = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (r -= e.translate);
                var s = 0;
                e.isHorizontal() || (s = r, r = 0);
                var a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: a}).transform("translate3d(" + r + "px, " + s + "px, 0px)")
            }
        }, setTransition: function (e) {
            var t = this, n = t.slides, i = t.$wrapperEl;
            if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                n.transitionEnd((function () {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
                    }
                }))
            }
        }
    }, ce = {
        setTranslate: function () {
            var e, t = this, n = t.$el, i = t.$wrapperEl, r = t.slides, s = t.width, a = t.height, o = t.rtlTranslate,
                l = t.size, c = t.browser, u = t.params.cubeEffect, d = t.isHorizontal(),
                p = t.virtual && t.params.virtual.enabled, f = 0;
            u.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = h('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: s + "px"})) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = h('<div class="swiper-cube-shadow"></div>'), n.append(e)));
            for (var m = 0; m < r.length; m += 1) {
                var g = r.eq(m), v = m;
                p && (v = parseInt(g.attr("data-swiper-slide-index"), 10));
                var y = 90 * v, b = Math.floor(y / 360);
                o && (y = -y, b = Math.floor(-y / 360));
                var w = Math.max(Math.min(g[0].progress, 1), -1), x = 0, E = 0, T = 0;
                v % 4 == 0 ? (x = 4 * -b * l, T = 0) : (v - 1) % 4 == 0 ? (x = 0, T = 4 * -b * l) : (v - 2) % 4 == 0 ? (x = l + 4 * b * l, T = l) : (v - 3) % 4 == 0 && (x = -l, T = 3 * l + 4 * l * b), o && (x = -x), d || (E = x, x = 0);
                var _ = "rotateX(" + (d ? 0 : -y) + "deg) rotateY(" + (d ? y : 0) + "deg) translate3d(" + x + "px, " + E + "px, " + T + "px)";
                if (w <= 1 && w > -1 && (f = 90 * v + 90 * w, o && (f = 90 * -v - 90 * w)), g.transform(_), u.slideShadows) {
                    var C = d ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                        S = d ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = h('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), g.append(C)), 0 === S.length && (S = h('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), g.append(S)), C.length && (C[0].style.opacity = Math.max(-w, 0)), S.length && (S[0].style.opacity = Math.max(w, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), u.shadow) if (d) e.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")"); else {
                var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                    A = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                    M = u.shadowScale, O = u.shadowScale / A, L = u.shadowOffset;
                e.transform("scale3d(" + M + ", 1, " + O + ") translate3d(0px, " + (a / 2 + L) + "px, " + -a / 2 / O + "px) rotateX(-90deg)")
            }
            var P = c.isSafari || c.isWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + P + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this, n = t.$el;
            t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
        }
    }, ue = {
        setTranslate: function () {
            for (var e = this, t = e.slides, n = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var r = t.eq(i), s = r[0].progress;
                e.params.flipEffect.limitRotation && (s = Math.max(Math.min(r[0].progress, 1), -1));
                var a = -180 * s, o = 0, l = -r[0].swiperSlideOffset, c = 0;
                if (e.isHorizontal() ? n && (a = -a) : (c = l, l = 0, o = -a, a = 0), r[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, e.params.flipEffect.slideShadows) {
                    var u = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                        d = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                    0 === u.length && (u = h('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === d.length && (d = h('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(d)), u.length && (u[0].style.opacity = Math.max(-s, 0)), d.length && (d[0].style.opacity = Math.max(s, 0))
                }
                r.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + o + "deg) rotateY(" + a + "deg)")
            }
        }, setTransition: function (e) {
            var t = this, n = t.slides, i = t.activeIndex, r = t.$wrapperEl;
            if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var s = !1;
                n.eq(i).transitionEnd((function () {
                    if (!s && t && !t.destroyed) {
                        s = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
                    }
                }))
            }
        }
    }, de = {
        setTranslate: function () {
            for (var e = this, t = e.width, n = e.height, i = e.slides, r = e.slidesSizesGrid, s = e.params.coverflowEffect, a = e.isHorizontal(), o = e.translate, l = a ? t / 2 - o : n / 2 - o, c = a ? s.rotate : -s.rotate, u = s.depth, d = 0, p = i.length; d < p; d += 1) {
                var f = i.eq(d), m = r[d], g = (l - f[0].swiperSlideOffset - m / 2) / m * s.modifier, v = a ? c * g : 0,
                    y = a ? 0 : c * g, b = -u * Math.abs(g), w = s.stretch;
                "string" == typeof w && -1 !== w.indexOf("%") && (w = parseFloat(s.stretch) / 100 * m);
                var x = a ? 0 : w * g, E = a ? w * g : 0, T = 1 - (1 - s.scale) * Math.abs(g);
                Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(v) < .001 && (v = 0), Math.abs(y) < .001 && (y = 0), Math.abs(T) < .001 && (T = 0);
                var _ = "translate3d(" + E + "px," + x + "px," + b + "px)  rotateX(" + y + "deg) rotateY(" + v + "deg) scale(" + T + ")";
                if (f.transform(_), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), s.slideShadows) {
                    var C = a ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        S = a ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = h('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = h('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = g > 0 ? g : 0), S.length && (S[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, pe = {
        init: function () {
            var e = this, t = e.params.thumbs;
            if (e.thumbs.initialized) return !1;
            e.thumbs.initialized = !0;
            var n = e.constructor;
            return t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, _(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), _(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : E(t.swiper) && (e.thumbs.swiper = new n(_({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0
        }, onThumbClick: function () {
            var e = this, t = e.thumbs.swiper;
            if (t) {
                var n = t.clickedIndex, i = t.clickedSlide;
                if (!(i && h(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
                    var r;
                    if (r = t.params.loop ? parseInt(h(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                        var s = e.activeIndex;
                        e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                        var a = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                            o = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                        r = void 0 === a ? o : void 0 === o ? a : o - s < s - a ? o : a
                    }
                    e.slideTo(r)
                }
            }
        }, update: function (e) {
            var t = this, n = t.thumbs.swiper;
            if (n) {
                var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                    r = t.params.thumbs.autoScrollOffset, s = r && !n.params.loop;
                if (t.realIndex !== n.realIndex || s) {
                    var a, o, l = n.activeIndex;
                    if (n.params.loop) {
                        n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                        var c = n.slides.eq(l).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                            u = n.slides.eq(l).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        a = void 0 === c ? u : void 0 === u ? c : u - l == l - c ? n.params.slidesPerGroup > 1 ? u : l : u - l < l - c ? u : c, o = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else o = (a = t.realIndex) > t.previousIndex ? "next" : "prev";
                    s && (a += "next" === o ? r : -1 * r), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(a) < 0 && (n.params.centeredSlides ? a = a > l ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > l && n.params.slidesPerGroup, n.slideTo(a, e ? 0 : void 0))
                }
                var d = 1, p = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (d = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), n.slides.removeClass(p), n.params.loop || n.params.virtual && n.params.virtual.enabled) for (var f = 0; f < d; f += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + f) + '"]').addClass(p); else for (var h = 0; h < d; h += 1) n.slides.eq(t.realIndex + h).addClass(p)
            }
        }
    }, fe = [V, U, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        },
        create: function () {
            C(this, {
                mousewheel: {
                    enabled: !1,
                    lastScrollTime: w(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    enable: K.enable,
                    disable: K.disable,
                    handle: K.handle,
                    handleMouseEnter: K.handleMouseEnter,
                    handleMouseLeave: K.handleMouseLeave,
                    animateSlider: K.animateSlider,
                    releaseScroll: K.releaseScroll
                }
            })
        },
        on: {
            init: function (e) {
                !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
            }, destroy: function (e) {
                e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            C(this, {navigation: e({}, Q)})
        },
        on: {
            init: function (e) {
                e.navigation.init(), e.navigation.update()
            }, toEdge: function (e) {
                e.navigation.update()
            }, fromEdge: function (e) {
                e.navigation.update()
            }, destroy: function (e) {
                e.navigation.destroy()
            }, "enable disable": function (e) {
                var t = e.navigation, n = t.$nextEl, i = t.$prevEl;
                n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
            }, click: function (e, t) {
                var n = e.navigation, i = n.$nextEl, r = n.$prevEl, s = t.target;
                if (e.params.navigation.hideOnClick && !h(s).is(r) && !h(s).is(i)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === s || e.pagination.el.contains(s))) return;
                    var a;
                    i ? a = i.hasClass(e.params.navigation.hiddenClass) : r && (a = r.hasClass(e.params.navigation.hiddenClass)), !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
                }
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            C(this, {pagination: e({dynamicBulletIndex: 0}, J)})
        },
        on: {
            init: function (e) {
                e.pagination.init(), e.pagination.render(), e.pagination.update()
            }, activeIndexChange: function (e) {
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            }, snapIndexChange: function (e) {
                e.params.loop || e.pagination.update()
            }, slidesLengthChange: function (e) {
                e.params.loop && (e.pagination.render(), e.pagination.update())
            }, snapGridLengthChange: function (e) {
                e.params.loop || (e.pagination.render(), e.pagination.update())
            }, destroy: function (e) {
                e.pagination.destroy()
            }, "enable disable": function (e) {
                var t = e.pagination.$el;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            }, click: function (e, t) {
                var n = t.target;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !h(n).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
                    !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                }
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            C(this, {scrollbar: e({isTouched: !1, timeout: null, dragTimeout: null}, Z)})
        },
        on: {
            init: function (e) {
                e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
            }, update: function (e) {
                e.scrollbar.updateSize()
            }, resize: function (e) {
                e.scrollbar.updateSize()
            }, observerUpdate: function (e) {
                e.scrollbar.updateSize()
            }, setTranslate: function (e) {
                e.scrollbar.setTranslate()
            }, setTransition: function (e, t) {
                e.scrollbar.setTransition(t)
            }, "enable disable": function (e) {
                var t = e.scrollbar.$el;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
            }, destroy: function (e) {
                e.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            C(this, {parallax: e({}, ee)})
        }, on: {
            beforeInit: function (e) {
                e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, init: function (e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            }, setTranslate: function (e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            }, setTransition: function (e, t) {
                e.params.parallax.enabled && e.parallax.setTransition(t)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var t = this;
            C(t, {
                zoom: e({
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
                }, te)
            });
            var n = 1;
            Object.defineProperty(t.zoom, "scale", {
                get: function () {
                    return n
                }, set: function (e) {
                    if (n !== e) {
                        var i = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                            r = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                        t.emit("zoomChange", e, i, r)
                    }
                    n = e
                }
            })
        },
        on: {
            init: function (e) {
                e.params.zoom.enabled && e.zoom.enable()
            }, destroy: function (e) {
                e.zoom.disable()
            }, touchStart: function (e, t) {
                e.zoom.enabled && e.zoom.onTouchStart(t)
            }, touchEnd: function (e, t) {
                e.zoom.enabled && e.zoom.onTouchEnd(t)
            }, doubleTap: function (e, t) {
                !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
            }, transitionEnd: function (e) {
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }, slideChange: function (e) {
                e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            C(this, {lazy: e({initialImageLoaded: !1}, ne)})
        },
        on: {
            beforeInit: function (e) {
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            }, init: function (e) {
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
            }, scroll: function (e) {
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            }, "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
                e.params.lazy.enabled && e.lazy.load()
            }, transitionStart: function (e) {
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd: function (e) {
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }, slideChange: function (e) {
                var t = e.params, n = t.lazy, i = t.cssMode, r = t.watchSlidesVisibility, s = t.watchSlidesProgress,
                    a = t.touchReleaseOnEdges, o = t.resistanceRatio;
                n.enabled && (i || (r || s) && (a || 0 === o)) && e.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            C(this, {controller: e({control: this.params.controller.control}, ie)})
        }, on: {
            update: function (e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, resize: function (e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, observerUpdate: function (e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, setTranslate: function (e, t, n) {
                e.controller.control && e.controller.setTranslate(t, n)
            }, setTransition: function (e, t, n) {
                e.controller.control && e.controller.setTransition(t, n)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        },
        create: function () {
            C(this, {a11y: e({}, re, {liveRegion: h('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')})})
        },
        on: {
            afterInit: function (e) {
                e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
            }, toEdge: function (e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            }, fromEdge: function (e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            }, paginationUpdate: function (e) {
                e.params.a11y.enabled && e.a11y.updatePagination()
            }, destroy: function (e) {
                e.params.a11y.enabled && e.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {history: {enabled: !1, root: "", replaceState: !1, key: "slides"}},
        create: function () {
            C(this, {history: e({}, se)})
        },
        on: {
            init: function (e) {
                e.params.history.enabled && e.history.init()
            }, destroy: function (e) {
                e.params.history.enabled && e.history.destroy()
            }, "transitionEnd _freeModeNoMomentumRelease": function (e) {
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }, slideChange: function (e) {
                e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            C(this, {hashNavigation: e({initialized: !1}, ae)})
        },
        on: {
            init: function (e) {
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            }, destroy: function (e) {
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            }, "transitionEnd _freeModeNoMomentumRelease": function (e) {
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }, slideChange: function (e) {
                e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        },
        create: function () {
            C(this, {autoplay: e({}, oe, {running: !1, paused: !1})})
        },
        on: {
            init: function (e) {
                e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
            }, beforeTransitionStart: function (e, t, n) {
                e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
            }, sliderFirstMove: function (e) {
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            }, touchEnd: function (e) {
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
            }, destroy: function (e) {
                e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            C(this, {fadeEffect: e({}, le)})
        }, on: {
            beforeInit: function (e) {
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    _(e.params, t), _(e.originalParams, t)
                }
            }, setTranslate: function (e) {
                "fade" === e.params.effect && e.fadeEffect.setTranslate()
            }, setTransition: function (e, t) {
                "fade" === e.params.effect && e.fadeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            C(this, {cubeEffect: e({}, ce)})
        },
        on: {
            beforeInit: function (e) {
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    _(e.params, t), _(e.originalParams, t)
                }
            }, setTranslate: function (e) {
                "cube" === e.params.effect && e.cubeEffect.setTranslate()
            }, setTransition: function (e, t) {
                "cube" === e.params.effect && e.cubeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            C(this, {flipEffect: e({}, ue)})
        }, on: {
            beforeInit: function (e) {
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    _(e.params, t), _(e.originalParams, t)
                }
            }, setTranslate: function (e) {
                "flip" === e.params.effect && e.flipEffect.setTranslate()
            }, setTransition: function (e, t) {
                "flip" === e.params.effect && e.flipEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}},
        create: function () {
            C(this, {coverflowEffect: e({}, de)})
        },
        on: {
            beforeInit: function (e) {
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function (e) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
            }, setTransition: function (e, t) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            C(this, {thumbs: e({swiper: null, initialized: !1}, pe)})
        },
        on: {
            beforeInit: function (e) {
                var t = e.params.thumbs;
                t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
            }, slideChange: function (e) {
                e.thumbs.swiper && e.thumbs.update()
            }, update: function (e) {
                e.thumbs.swiper && e.thumbs.update()
            }, resize: function (e) {
                e.thumbs.swiper && e.thumbs.update()
            }, observerUpdate: function (e) {
                e.thumbs.swiper && e.thumbs.update()
            }, setTransition: function (e, t) {
                var n = e.thumbs.swiper;
                n && n.setTransition(t)
            }, beforeDestroy: function (e) {
                var t = e.thumbs.swiper;
                t && e.thumbs.swiperCreated && t && t.destroy()
            }
        }
    }];
    return G.use(fe), G
}));
