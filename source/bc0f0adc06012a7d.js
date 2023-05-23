(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
  8e3: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.AmpStateContext = void 0;
    var r = (0, n(2648).Z)(n(7294)).
    default.createContext({});
    t.AmpStateContext = r
  },
  9470 : function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.isInAmpMode = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || o && i
      }
  },
  2717 : function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.defaultHead = f,
      t.
        default = void 0;
    var r = n(6495).Z,
      o = n(2648).Z,
      a = (0, n(1598).Z)(n(7294)),
      i = o(n(1585)),
      u = n(8e3),
      c = n(5850),
      s = n(9470);
    n(9475);
    function f() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = [a.
        default.createElement("meta", {
          charSet: "utf-8"
        })];
      return e || t.push(a.
      default.createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })),
        t
    }
    function d(e, t) {
      return "string" === typeof t || "number" === typeof t ? e: t.type === a.
        default.Fragment ? e.concat(a.
      default.Children.toArray(t.props.children).reduce((function(e, t) {
        return "string" === typeof t || "number" === typeof t ? e: e.concat(t)
      }), [])) : e.concat(t)
    }
    var l = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e, t) {
      var n = t.inAmpMode;
      return e.reduce(d, []).reverse().concat(f(n).reverse()).filter(function() {
        var e = new Set,
          t = new Set,
          n = new Set,
          r = {};
        return function(o) {
          var a = !0,
            i = !1;
          if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
            i = !0;
            var u = o.key.slice(o.key.indexOf("$") + 1);
            e.has(u) ? a = !1 : e.add(u)
          }
          switch (o.type) {
            case "title":
            case "base":
              t.has(o.type) ? a = !1 : t.add(o.type);
              break;
            case "meta":
              for (var c = 0,
                s = l.length; c < s; c++) {
                var f = l[c];
                if (o.props.hasOwnProperty(f)) if ("charSet" === f) n.has(f) ? a = !1 : n.add(f);
                else {
                  var d = o.props[f],
                    p = r[f] || new Set;
                  "name" === f && i || !p.has(d) ? (p.add(d), r[f] = p) : a = !1
                }
              }
          }
          return a
        }
      } ()).reverse().map((function(e, t) {
        var o = e.key || t;
        if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
          return e.props.href.startsWith(t)
        }))) {
          var i = r({},
            e.props || {});
          return i["data-href"] = i.href,
            i.href = void 0,
            i["data-optimized-fonts"] = !0,
            a.
            default.cloneElement(e, i)
        }
        return a.
        default.cloneElement(e, {
          key: o
        })
      }))
    }
    var v = function(e) {
      var t = e.children,
        n = a.useContext(u.AmpStateContext),
        r = a.useContext(c.HeadManagerContext);
      return a.
      default.createElement(i.
          default, {
          reduceComponentsToState: p,
          headManager: r,
          inAmpMode: s.isInAmpMode(n)
        },
        t)
    };
    t.
      default = v,
    ("function" === typeof t.
      default || "object" === typeof t.
      default && null !== t.
      default) && "undefined" === typeof t.
      default.__esModule && (Object.defineProperty(t.
      default, "__esModule", {
      value: !0
    }), Object.assign(t.
      default, t), e.exports = t.
      default)
  },
  1585 : function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.
        default = function(e) {
        var t = e.headManager,
          n = e.reduceComponentsToState;
        function u() {
          if (t && t.mountedInstances) {
            var o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
            t.updateHead(n(o, e))
          }
        }
        if (o) {
          var c;
          null == t || null == (c = t.mountedInstances) || c.add(e.children),
            u()
        }
        return a((function() {
          var n;
          return null == t || null == (n = t.mountedInstances) || n.add(e.children),
            function() {
              var n;
              null == t || null == (n = t.mountedInstances) || n.delete(e.children)
            }
        })),
          a((function() {
            return t && (t._pendingUpdate = u),
              function() {
                t && (t._pendingUpdate = u)
              }
          })),
          i((function() {
            return t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null),
              function() {
                t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
              }
          })),
          null
      };
    var r = (0, n(1598).Z)(n(7294));
    var o = !1,
      a = o ?
        function() {}: r.useLayoutEffect,
      i = o ?
        function() {}: r.useEffect
  },
  3611 : function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(9499),
      o = (n(7294), n(9885), n(9008)),
      a = n.n(o),
      i = n(5893);
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
          n.push.apply(n, r)
      }
      return n
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(n), !0).forEach((function(t) { (0, r.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    t.
      default = function(e) {
      var t = e.Component,
        n = e.pageProps,
        r = t;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(a(), {
          children: [(0, i.jsx)("link", {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "./source/favicon-90x90.png"
          }), (0, i.jsx)("title", {
            children: "Certux"
          })]
        }), (0, i.jsx)(r, c({},
          n))]
      })
    }
  },
  6840 : function(e, t, n) { (window.__NEXT_P = window.__NEXT_P || []).push(["./_app",
    function() {
      return n(3611)
    }])
  },
  9885 : function() {},
  9008 : function(e, t, n) {
    e.exports = n(2717)
  },
  9499 : function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }
    n.d(t, {
      Z: function() {
        return r
      }
    })
  }
},
  function(e) {
    var t = function(t) {
      return e(e.s = t)
    };
    e.O(0, [774, 179], (function() {
      return t(6840),
        t(9898)
    }));
    var n = e.O();
    _N_E = n
  }]);
