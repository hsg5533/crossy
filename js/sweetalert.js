!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.swal = e())
    : (t.swal = e());
})(this, function () {
  return (function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    var n = {};
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, o) {
        e.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o,
          });
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 8))
    );
  })([
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = "swal-button";
      (e.CLASS_NAMES = {
        MODAL: "swal-modal",
        OVERLAY: "swal-overlay",
        SHOW_MODAL: "swal-overlay--show-modal",
        MODAL_TITLE: "swal-title",
        MODAL_TEXT: "swal-text",
        ICON: "swal-icon",
        ICON_CUSTOM: "swal-icon--custom",
        CONTENT: "swal-content",
        FOOTER: "swal-footer",
        BUTTON_CONTAINER: "swal-button-container",
        BUTTON: o,
        CONFIRM_BUTTON: o + "--confirm",
        CANCEL_BUTTON: o + "--cancel",
        DANGER_BUTTON: o + "--danger",
        BUTTON_LOADING: o + "--loading",
        BUTTON_LOADER: o + "__loader",
      }),
        (e.default = e.CLASS_NAMES);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getNode = function (t) {
          return document.querySelector("." + t);
        }),
        (e.stringToNode = function (t) {
          var e = document.createElement("div");
          return (e.innerHTML = t.trim()), e.firstChild;
        }),
        (e.insertAfter = function (t, e) {
          var n = e.nextSibling;
          e.parentNode.insertBefore(t, n);
        }),
        (e.removeNode = function (t) {
          t.parentElement.removeChild(t);
        }),
        (e.throwErr = function (t) {
          throw "SweetAlert: " + (t = (t = t.replace(/ +(?= )/g, "")).trim());
        }),
        (e.isPlainObject = function (t) {
          if ("[object Object]" !== Object.prototype.toString.call(t))
            return !1;
          var e = Object.getPrototypeOf(t);
          return null === e || e === Object.prototype;
        }),
        (e.ordinalSuffixOf = function (t) {
          var e = t % 10,
            n = t % 100;
          return 1 === e && 11 !== n
            ? t + "st"
            : 2 === e && 12 !== n
            ? t + "nd"
            : 3 === e && 13 !== n
            ? t + "rd"
            : t + "th";
        });
    },
    function (t, e, n) {
      "use strict";
      function o(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }), o(n(25));
      var r = n(26);
      (e.overlayMarkup = r.default), o(n(27)), o(n(28)), o(n(29));
      var i = n(0),
        a = i.default.MODAL_TITLE,
        s = i.default.MODAL_TEXT,
        l = i.default.ICON,
        c = i.default.FOOTER;
      (e.iconMarkup = '\n  <div class="' + l + '"></div>'),
        (e.titleMarkup = '\n  <div class="' + a + '"></div>\n'),
        (e.textMarkup = '\n  <div class="' + s + '"></div>'),
        (e.footerMarkup = '\n  <div class="' + c + '"></div>\n');
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1);
      (e.CONFIRM_KEY = "confirm"), (e.CANCEL_KEY = "cancel");
      var r = {
          visible: !0,
          text: null,
          value: null,
          className: "",
          closeModal: !0,
        },
        i = Object.assign({}, r, { visible: !1, text: "Cancel", value: null }),
        a = Object.assign({}, r, { text: "OK", value: !0 });
      e.defaultButtonList = { cancel: i, confirm: a };
      var s = function (t) {
          switch (t) {
            case e.CONFIRM_KEY:
              return a;
            case e.CANCEL_KEY:
              return i;
            default:
              return Object.assign({}, r, {
                text: t.charAt(0).toUpperCase() + t.slice(1),
                value: t,
              });
          }
        },
        l = function (t, e) {
          var n = s(t);
          return !0 === e
            ? Object.assign({}, n, { visible: !0 })
            : "string" == typeof e
            ? Object.assign({}, n, { visible: !0, text: e })
            : o.isPlainObject(e)
            ? Object.assign({ visible: !0 }, n, e)
            : Object.assign({}, n, { visible: !1 });
        },
        c = function (t) {
          for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
            var r = o[n],
              a = t[r],
              s = l(r, a);
            e[r] = s;
          }
          return e.cancel || (e.cancel = i), e;
        },
        u = function (t) {
          var n = {};
          switch (t.length) {
            case 1:
              n[e.CANCEL_KEY] = Object.assign({}, i, { visible: !1 });
              break;
            case 2:
              (n[e.CANCEL_KEY] = l(e.CANCEL_KEY, t[0])),
                (n[e.CONFIRM_KEY] = l(e.CONFIRM_KEY, t[1]));
              break;
            default:
              o.throwErr(
                "Invalid number of 'buttons' in array (" +
                  t.length +
                  ").\n      If you want more than 2 buttons, you need to use an object!"
              );
          }
          return n;
        };
      e.getButtonListOpts = function (t) {
        var n = e.defaultButtonList;
        return (
          "string" == typeof t
            ? (n[e.CONFIRM_KEY] = l(e.CONFIRM_KEY, t))
            : Array.isArray(t)
            ? (n = u(t))
            : o.isPlainObject(t)
            ? (n = c(t))
            : !0 === t
            ? (n = u([!0, !0]))
            : !1 === t
            ? (n = u([!1, !1]))
            : void 0 === t && (n = e.defaultButtonList),
          n
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(2),
        i = n(0),
        a = i.default.MODAL,
        s = i.default.OVERLAY,
        l = n(30),
        c = n(31),
        u = n(32),
        f = n(33);
      e.injectElIntoModal = function (t) {
        var e = o.getNode(a),
          n = o.stringToNode(t);
        return e.appendChild(n), n;
      };
      var d = function (t) {
          (t.className = a), (t.textContent = "");
        },
        p = function (t, e) {
          d(t);
          var n = e.className;
          n && t.classList.add(n);
        };
      e.initModalContent = function (t) {
        var e = o.getNode(a);
        p(e, t),
          l.default(t.icon),
          c.initTitle(t.title),
          c.initText(t.text),
          f.default(t.content),
          u.default(t.buttons, t.dangerMode);
      };
      var m = function () {
        var t = o.getNode(s),
          e = o.stringToNode(r.modalMarkup);
        t.appendChild(e);
      };
      e.default = m;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(3),
        r = { isOpen: !1, promise: null, actions: {}, timer: null },
        i = Object.assign({}, r);
      (e.resetState = function () {
        i = Object.assign({}, r);
      }),
        (e.setActionValue = function (t) {
          if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
          for (var e in t) a(e, t[e]);
        });
      var a = function (t, e) {
        i.actions[t] || (i.actions[t] = {}),
          Object.assign(i.actions[t], { value: e });
      };
      (e.setActionOptionsFor = function (t, e) {
        var n = (void 0 === e ? {} : e).closeModal;
        Object.assign(i.actions[t], { closeModal: void 0 === n || n });
      }),
        (e.default = i);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(3),
        i = n(0),
        a = i.default.OVERLAY,
        s = i.default.SHOW_MODAL,
        l = i.default.BUTTON,
        c = i.default.BUTTON_LOADING,
        u = n(5);
      e.openModal = function () {
        o.getNode(a).classList.add(s), (u.default.isOpen = !0);
      };
      var f = function () {
        o.getNode(a).classList.remove(s), (u.default.isOpen = !1);
      };
      (e.onAction = function (t) {
        void 0 === t && (t = r.CANCEL_KEY);
        var e = u.default.actions[t],
          n = e.value;
        if (!1 === e.closeModal) {
          var i = l + "--" + t;
          o.getNode(i).classList.add(c);
        } else f();
        u.default.promise.resolve(n);
      }),
        (e.getState = function () {
          var t = Object.assign({}, u.default);
          return delete t.promise, delete t.timer, t;
        }),
        (e.stopLoading = function () {
          for (
            var t = document.querySelectorAll("." + l), e = 0;
            e < t.length;
            e++
          )
            t[e].classList.remove(c);
        });
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      (function (e) {
        t.exports = e.sweetAlert = n(9);
      }.call(e, n(7)));
    },
    function (t, e, n) {
      (function (e) {
        t.exports = e.swal = n(10);
      }.call(e, n(7)));
    },
    function (t, e, n) {
      "undefined" != typeof window && n(11), n(16);
      var o = n(23).default;
      t.exports = o;
    },
    function (t, e, n) {
      var o = n(12);
      "string" == typeof o && (o = [[t.i, o, ""]]);
      var r = { insertAt: "top" };
      (r.transform = void 0), n(14)(o, r), o.locals && (t.exports = o.locals);
    },
    function (t, e, n) {
      (e = t.exports = n(13)(void 0)).push([
        t.i,
        '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',
        "",
      ]);
    },
    function (t, e) {
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = (function t(e, n) {
                var o = e[1] || "",
                  r = e[3];
                if (!r) return o;
                if (n && "function" == typeof btoa) {
                  var i,
                    a =
                      ((i = r),
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                        " */");
                  return [o]
                    .concat(
                      r.sources.map(function (t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */";
                      })
                    )
                    .concat([a])
                    .join("\n");
                }
                return [o].join("\n");
              })(e, t);
              return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
            }).join("");
          }),
          (e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var o = {}, r = 0; r < this.length; r++) {
              var i = this[r][0];
              "number" == typeof i && (o[i] = !0);
            }
            for (r = 0; r < t.length; r++) {
              var a = t[r];
              ("number" == typeof a[0] && o[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      function o(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
            r = v[o.id];
          if (r) {
            r.refs++;
            for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
            for (; i < o.parts.length; i++) r.parts.push(c(o.parts[i], e));
          } else {
            for (var a = [], i = 0; i < o.parts.length; i++)
              a.push(c(o.parts[i], e));
            v[o.id] = { id: o.id, refs: 1, parts: a };
          }
        }
      }
      function r(t, e) {
        for (var n = [], o = {}, r = 0; r < t.length; r++) {
          var i = t[r],
            a = e.base ? i[0] + e.base : i[0],
            s = { css: i[1], media: i[2], sourceMap: i[3] };
          o[a] ? o[a].parts.push(s) : n.push((o[a] = { id: a, parts: [s] }));
        }
        return n;
      }
      function i(t, e) {
        var n = w(t.insertInto);
        if (!n)
          throw Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var o = _[_.length - 1];
        if ("top" === t.insertAt)
          o
            ? o.nextSibling
              ? n.insertBefore(e, o.nextSibling)
              : n.appendChild(e)
            : n.insertBefore(e, n.firstChild),
            _.push(e);
        else {
          if ("bottom" !== t.insertAt)
            throw Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(e);
        }
      }
      function a(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = _.indexOf(t);
        e >= 0 && _.splice(e, 1);
      }
      function s(t) {
        var e = document.createElement("style");
        return (t.attrs.type = "text/css"), l(e, t.attrs), i(t, e), e;
      }
      function l(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }
      function c(t, e) {
        if (e.transform && t.css) {
          if (!(c = e.transform(t.css))) return function () {};
          t.css = c;
        }
        if (e.singleton) {
          var n,
            o,
            r,
            c,
            p,
            m,
            $ = y++;
          (n = x || (x = s(e))),
            (o = u.bind(null, n, $, !1)),
            (r = u.bind(null, n, $, !0));
        } else
          t.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n =
                ((p = e),
                (m = document.createElement("link")),
                (p.attrs.type = "text/css"),
                (p.attrs.rel = "stylesheet"),
                l(m, p.attrs),
                i(p, m),
                m)),
              (o = d.bind(null, n, e)),
              (r = function () {
                a(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = s(e)),
              (o = f.bind(null, n)),
              (r = function () {
                a(n);
              }));
        return (
          o(t),
          function (e) {
            e
              ? (e.css !== t.css ||
                  e.media !== t.media ||
                  e.sourceMap !== t.sourceMap) &&
                o((t = e))
              : r();
          }
        );
      }
      function u(t, e, n, o) {
        var r = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = O(e, r);
        else {
          var i = document.createTextNode(r),
            a = t.childNodes;
          a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }
      function f(t, e) {
        var n = e.css,
          o = e.media;
        if ((o && t.setAttribute("media", o), t.styleSheet))
          t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
      function d(t, e, n) {
        var o = n.css,
          r = n.sourceMap,
          i = void 0 === e.convertToAbsoluteUrls && r;
        (e.convertToAbsoluteUrls || i) && (o = k(o)),
          r &&
            (o +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */");
        var a = new Blob([o], { type: "text/css" }),
          s = t.href;
        (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
      }
      var p,
        m,
        $,
        g,
        b,
        v = {},
        h =
          ((p = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === m && (m = p.apply(this, arguments)), m;
          }),
        w =
          (($ = function (t) {
            return document.querySelector(t);
          }),
          (g = {}),
          function (t) {
            return void 0 === g[t] && (g[t] = $.call(this, t)), g[t];
          }),
        x = null,
        y = 0,
        _ = [],
        k = n(15);
      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
          e.singleton || (e.singleton = h()),
          e.insertInto || (e.insertInto = "head"),
          e.insertAt || (e.insertAt = "bottom");
        var n = r(t, e);
        return (
          o(n, e),
          function (t) {
            for (var i = [], a = 0; a < n.length; a++) {
              var s = v[n[a].id];
              s.refs--, i.push(s);
            }
            t && o(r(t, e), e);
            for (var a = 0; a < i.length; a++) {
              var s = i[a];
              if (0 === s.refs) {
                for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                delete v[s.id];
              }
            }
          }
        );
      };
      var O =
        ((b = []),
        function (t, e) {
          return (b[t] = e), b.filter(Boolean).join("\n");
        });
    },
    function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
          o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (t, e) {
            var r,
              i = e
                .trim()
                .replace(/^"(.*)"$/, function (t, e) {
                  return e;
                })
                .replace(/^'(.*)'$/, function (t, e) {
                  return e;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)
              ? t
              : "url(" +
                  JSON.stringify(
                    (r =
                      0 === i.indexOf("//")
                        ? i
                        : 0 === i.indexOf("/")
                        ? n + i
                        : o + i.replace(/^\.\//, ""))
                  ) +
                  ")";
          }
        );
      };
    },
    function (t, e, n) {
      var o = n(17);
      "undefined" == typeof window || window.Promise || (window.Promise = o),
        n(21),
        String.prototype.includes ||
          (String.prototype.includes = function (t, e) {
            return (
              "number" != typeof e && (e = 0),
              !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
            );
          }),
        Array.prototype.includes ||
          Object.defineProperty(Array.prototype, "includes", {
            value: function (t, e) {
              if (null == this)
                throw TypeError('"this" is null or not defined');
              var n,
                o,
                r = Object(this),
                i = r.length >>> 0;
              if (0 === i) return !1;
              for (
                var a = 0 | e, s = Math.max(a >= 0 ? a : i - Math.abs(a), 0);
                s < i;

              ) {
                if (
                  (n = r[s]) === (o = t) ||
                  ("number" == typeof n &&
                    "number" == typeof o &&
                    isNaN(n) &&
                    isNaN(o))
                )
                  return !0;
                s++;
              }
              return !1;
            },
          }),
        "undefined" != typeof window &&
          (function (t) {
            t.forEach(function (t) {
              t.hasOwnProperty("remove") ||
                Object.defineProperty(t, "remove", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function () {
                    this.parentNode.removeChild(this);
                  },
                });
            });
          })([
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ]);
    },
    function (t, e, n) {
      (function (e) {
        !(function (n) {
          function o() {}
          function r(t) {
            if ("object" != typeof this)
              throw TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              u(t, this);
          }
          function i(t, e) {
            for (; 3 === t._state; ) t = t._value;
            if (0 === t._state) return void t._deferreds.push(e);
            (t._handled = !0),
              r._immediateFn(function () {
                var n,
                  o = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null === o)
                  return void (1 === t._state ? a : s)(e.promise, t._value);
                try {
                  n = o(t._value);
                } catch (r) {
                  return void s(e.promise, r);
                }
                a(e.promise, n);
              });
          }
          function a(t, e) {
            try {
              if (e === t)
                throw TypeError("A promise cannot be resolved with itself.");
              if (e && ("object" == typeof e || "function" == typeof e)) {
                var n,
                  o,
                  i = e.then;
                if (e instanceof r)
                  return (t._state = 3), (t._value = e), void l(t);
                if ("function" == typeof i)
                  return void u(
                    ((n = i),
                    (o = e),
                    function () {
                      n.apply(o, arguments);
                    }),
                    t
                  );
              }
              (t._state = 1), (t._value = e), l(t);
            } catch (a) {
              s(t, a);
            }
          }
          function s(t, e) {
            (t._state = 2), (t._value = e), l(t);
          }
          function l(t) {
            2 === t._state &&
              0 === t._deferreds.length &&
              r._immediateFn(function () {
                t._handled || r._unhandledRejectionFn(t._value);
              });
            for (var e = 0, n = t._deferreds.length; e < n; e++)
              i(t, t._deferreds[e]);
            t._deferreds = null;
          }
          function c(t, e, n) {
            (this.onFulfilled = "function" == typeof t ? t : null),
              (this.onRejected = "function" == typeof e ? e : null),
              (this.promise = n);
          }
          function u(t, e) {
            var n = !1;
            try {
              t(
                function (t) {
                  n || ((n = !0), a(e, t));
                },
                function (t) {
                  n || ((n = !0), s(e, t));
                }
              );
            } catch (o) {
              if (n) return;
              (n = !0), s(e, o);
            }
          }
          var f = setTimeout;
          (r.prototype.catch = function (t) {
            return this.then(null, t);
          }),
            (r.prototype.then = function (t, e) {
              var n = new this.constructor(o);
              return i(this, new c(t, e, n)), n;
            }),
            (r.all = function (t) {
              var e = Array.prototype.slice.call(t);
              return new r(function (t, n) {
                function o(i, a) {
                  try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                      var s = a.then;
                      if ("function" == typeof s)
                        return void s.call(
                          a,
                          function (t) {
                            o(i, t);
                          },
                          n
                        );
                    }
                    (e[i] = a), 0 == --r && t(e);
                  } catch (l) {
                    n(l);
                  }
                }
                if (0 === e.length) return t([]);
                for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i]);
              });
            }),
            (r.resolve = function (t) {
              return t && "object" == typeof t && t.constructor === r
                ? t
                : new r(function (e) {
                    e(t);
                  });
            }),
            (r.reject = function (t) {
              return new r(function (e, n) {
                n(t);
              });
            }),
            (r.race = function (t) {
              return new r(function (e, n) {
                for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n);
              });
            }),
            (r._immediateFn =
              ("function" == typeof e &&
                function (t) {
                  e(t);
                }) ||
              function (t) {
                f(t, 0);
              }),
            (r._unhandledRejectionFn = function (t) {
              "undefined" != typeof console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", t);
            }),
            (r._setImmediateFn = function (t) {
              r._immediateFn = t;
            }),
            (r._setUnhandledRejectionFn = function (t) {
              r._unhandledRejectionFn = t;
            }),
            void 0 !== t && t.exports
              ? (t.exports = r)
              : n.Promise || (n.Promise = r);
        })(this);
      }.call(e, n(18).setImmediate));
    },
    function (t, e, n) {
      function o(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      var r = Function.prototype.apply;
      (e.setTimeout = function () {
        return new o(r.call(setTimeout, window, arguments), clearTimeout);
      }),
        (e.setInterval = function () {
          return new o(r.call(setInterval, window, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval =
          function (t) {
            t && t.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(window, this._id);
        }),
        (e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active =
          function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
        n(19),
        (e.setImmediate = setImmediate),
        (e.clearImmediate = clearImmediate);
    },
    function (t, e, n) {
      (function (t, e) {
        !(function (t, n) {
          "use strict";
          function o(t) {
            delete f[t];
          }
          function r(t) {
            if (d) setTimeout(r, 0, t);
            else {
              var e = f[t];
              if (e) {
                d = !0;
                try {
                  !(function t(e) {
                    var n = e.callback,
                      o = e.args;
                    switch (o.length) {
                      case 0:
                        n();
                        break;
                      case 1:
                        n(o[0]);
                        break;
                      case 2:
                        n(o[0], o[1]);
                        break;
                      case 3:
                        n(o[0], o[1], o[2]);
                        break;
                      default:
                        n.apply(void 0, o);
                    }
                  })(e);
                } finally {
                  o(t), (d = !1);
                }
              }
            }
          }
          if (!t.setImmediate) {
            var i,
              a,
              s,
              l,
              c,
              u = 1,
              f = {},
              d = !1,
              p = t.document,
              m = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (m = m && m.setTimeout ? m : t),
              "[object process]" === {}.toString.call(t.process)
                ? (i = function (t) {
                    e.nextTick(function () {
                      r(t);
                    });
                  })
                : (function () {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        n = t.onmessage;
                      return (
                        (t.onmessage = function () {
                          e = !1;
                        }),
                        t.postMessage("", "*"),
                        (t.onmessage = n),
                        e
                      );
                    }
                  })()
                ? ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (e) {
                    e.source === t &&
                      "string" == typeof e.data &&
                      0 === e.data.indexOf(a) &&
                      r(+e.data.slice(a.length));
                  }),
                  t.addEventListener
                    ? t.addEventListener("message", s, !1)
                    : t.attachEvent("onmessage", s),
                  (i = function (e) {
                    t.postMessage(a + e, "*");
                  }))
                : t.MessageChannel
                ? (((l = new MessageChannel()).port1.onmessage = function (t) {
                    r(t.data);
                  }),
                  (i = function (t) {
                    l.port2.postMessage(t);
                  }))
                : p && "onreadystatechange" in p.createElement("script")
                ? ((c = p.documentElement),
                  (i = function (t) {
                    var e = p.createElement("script");
                    (e.onreadystatechange = function () {
                      r(t),
                        (e.onreadystatechange = null),
                        c.removeChild(e),
                        (e = null);
                    }),
                      c.appendChild(e);
                  }))
                : (i = function (t) {
                    setTimeout(r, 0, t);
                  }),
              (m.setImmediate = function t(e) {
                "function" != typeof e && (e = Function("" + e));
                for (
                  var n = Array(arguments.length - 1), o = 0;
                  o < n.length;
                  o++
                )
                  n[o] = arguments[o + 1];
                var r = { callback: e, args: n };
                return (f[u] = r), i(u), u++;
              }),
              (m.clearImmediate = o);
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(e, n(7), n(20)));
    },
    function (t, e) {
      function n() {
        throw Error("setTimeout has not been defined");
      }
      function o() {
        throw Error("clearTimeout has not been defined");
      }
      function r(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout)
          return (c = setTimeout), setTimeout(t, 0);
        try {
          return c(t, 0);
        } catch (e) {
          try {
            return c.call(null, t, 0);
          } catch (o) {
            return c.call(this, t, 0);
          }
        }
      }
      function i() {
        m &&
          d &&
          ((m = !1), d.length ? (p = d.concat(p)) : ($ = -1), p.length && a());
      }
      function a() {
        if (!m) {
          var t = r(i);
          m = !0;
          for (var e = p.length; e; ) {
            for (d = p, p = []; ++$ < e; ) d && d[$].run();
            ($ = -1), (e = p.length);
          }
          (d = null),
            (m = !1),
            (function t(e) {
              if (u === clearTimeout) return clearTimeout(e);
              if ((u === o || !u) && clearTimeout)
                return (u = clearTimeout), clearTimeout(e);
              try {
                return u(e);
              } catch (n) {
                try {
                  return u.call(null, e);
                } catch (r) {
                  return u.call(this, e);
                }
              }
            })(t);
        }
      }
      function s(t, e) {
        (this.fun = t), (this.array = e);
      }
      function l() {}
      var c,
        u,
        f = (t.exports = {});
      !(function () {
        try {
          c = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          c = n;
        }
        try {
          u = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          u = o;
        }
      })();
      var d,
        p = [],
        m = !1,
        $ = -1;
      (f.nextTick = function (t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new s(t, e)), 1 !== p.length || m || r(a);
      }),
        (s.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (f.title = "browser"),
        (f.browser = !0),
        (f.env = {}),
        (f.argv = []),
        (f.version = ""),
        (f.versions = {}),
        (f.on = l),
        (f.addListener = l),
        (f.once = l),
        (f.off = l),
        (f.removeListener = l),
        (f.removeAllListeners = l),
        (f.emit = l),
        (f.prependListener = l),
        (f.prependOnceListener = l),
        (f.listeners = function (t) {
          return [];
        }),
        (f.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (f.cwd = function () {
          return "/";
        }),
        (f.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (f.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      "use strict";
      n(22).polyfill();
    },
    function (t, e, n) {
      "use strict";
      function o(t, e) {
        if (null == t)
          throw TypeError("Cannot convert first argument to object");
        for (var n = Object(t), o = 1; o < arguments.length; o++) {
          var r = arguments[o];
          if (null != r)
            for (
              var i = Object.keys(Object(r)), a = 0, s = i.length;
              a < s;
              a++
            ) {
              var l = i[a],
                c = Object.getOwnPropertyDescriptor(r, l);
              void 0 !== c && c.enumerable && (n[l] = r[l]);
            }
        }
        return n;
      }
      t.exports = {
        assign: o,
        polyfill: function t() {
          Object.assign ||
            Object.defineProperty(Object, "assign", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: o,
            });
        },
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(24),
        r = n(6),
        i = n(5),
        a = n(36),
        s = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          if ("undefined" != typeof window) {
            var n = a.getOpts.apply(void 0, t);
            return new Promise(function (t, e) {
              (i.default.promise = { resolve: t, reject: e }),
                o.default(n),
                setTimeout(function () {
                  r.openModal();
                });
            });
          }
        };
      (s.close = r.onAction),
        (s.getState = r.getState),
        (s.setActionValue = i.setActionValue),
        (s.stopLoading = r.stopLoading),
        (s.setDefaults = a.setDefaults),
        (e.default = s);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(0).default.MODAL,
        i = n(4),
        a = n(34),
        s = n(35),
        l = n(1);
      (e.init = function (t) {
        o.getNode(r) ||
          (document.body ||
            l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),
          a.default(),
          i.default()),
          i.initModalContent(t),
          s.default(t);
      }),
        (e.default = e.init);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(0).default.MODAL;
      (e.modalMarkup =
        '\n  <div class="' + o + '" role="dialog" aria-modal="true"></div>'),
        (e.default = e.modalMarkup);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(0).default.OVERLAY;
      e.default = '<div \n    class="' + o + '"\n    tabIndex="-1">\n  </div>';
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(0).default.ICON;
      (e.errorIconMarkup = function () {
        var t = o + "--error",
          e = t + "__line";
        return (
          '\n    <div class="' +
          t +
          '__x-mark">\n      <span class="' +
          e +
          " " +
          e +
          '--left"></span>\n      <span class="' +
          e +
          " " +
          e +
          '--right"></span>\n    </div>\n  '
        );
      }),
        (e.warningIconMarkup = function () {
          var t = o + "--warning";
          return (
            '\n    <span class="' +
            t +
            '__body">\n      <span class="' +
            t +
            '__dot"></span>\n    </span>\n  '
          );
        }),
        (e.successIconMarkup = function () {
          var t = o + "--success";
          return (
            '\n    <span class="' +
            t +
            "__line " +
            t +
            '__line--long"></span>\n    <span class="' +
            t +
            "__line " +
            t +
            '__line--tip"></span>\n\n    <div class="' +
            t +
            '__ring"></div>\n    <div class="' +
            t +
            '__hide-corners"></div>\n  '
          );
        });
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(0).default.CONTENT;
      e.contentMarkup = '\n  <div class="' + o + '">\n\n  </div>\n';
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(0),
        r = o.default.BUTTON_CONTAINER,
        i = o.default.BUTTON,
        a = o.default.BUTTON_LOADER;
      e.buttonMarkup =
        '\n  <div class="' +
        r +
        '">\n\n    <button\n      class="' +
        i +
        '"\n    ></button>\n\n    <div class="' +
        a +
        '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(4),
        r = n(2),
        i = n(0),
        a = i.default.ICON,
        s = i.default.ICON_CUSTOM,
        l = ["error", "warning", "success", "info"],
        c = {
          error: r.errorIconMarkup(),
          warning: r.warningIconMarkup(),
          success: r.successIconMarkup(),
        },
        u = function (t, e) {
          e.classList.add(a + "--" + t);
          var n = c[t];
          n && (e.innerHTML = n);
        },
        f = function (t, e) {
          e.classList.add(s);
          var n = document.createElement("img");
          (n.src = t), e.appendChild(n);
        },
        d = function (t) {
          if (t) {
            var e = o.injectElIntoModal(r.iconMarkup);
            l.includes(t) ? u(t, e) : f(t, e);
          }
        };
      e.default = d;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(2),
        r = n(4),
        i = function (t) {
          navigator.userAgent.includes("AppleWebKit") &&
            ((t.style.display = "none"),
            t.offsetHeight,
            (t.style.display = ""));
        };
      (e.initTitle = function (t) {
        if (t) {
          var e = r.injectElIntoModal(o.titleMarkup);
          (e.textContent = t), i(e);
        }
      }),
        (e.initText = function (t) {
          if (t) {
            var e = document.createDocumentFragment();
            t.split("\n").forEach(function (t, n, o) {
              e.appendChild(document.createTextNode(t)),
                n < o.length - 1 && e.appendChild(document.createElement("br"));
            });
            var n = r.injectElIntoModal(o.textMarkup);
            n.appendChild(e), i(n);
          }
        });
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(4),
        i = n(0),
        a = i.default.BUTTON,
        s = i.default.DANGER_BUTTON,
        l = n(3),
        c = n(2),
        u = n(6),
        f = n(5),
        d = function (t, e, n) {
          var r = e.text,
            i = e.value,
            d = e.className,
            p = e.closeModal,
            m = o.stringToNode(c.buttonMarkup),
            $ = m.querySelector("." + a);
          $.classList.add(a + "--" + t),
            d &&
              (Array.isArray(d) ? d : d.split(" "))
                .filter(function (t) {
                  return t.length > 0;
                })
                .forEach(function (t) {
                  $.classList.add(t);
                }),
            n && t === l.CONFIRM_KEY && $.classList.add(s),
            ($.textContent = r);
          var g = {};
          return (
            (g[t] = i),
            f.setActionValue(g),
            f.setActionOptionsFor(t, { closeModal: p }),
            $.addEventListener("click", function () {
              return u.onAction(t);
            }),
            m
          );
        },
        p = function (t, e) {
          var n = r.injectElIntoModal(c.footerMarkup);
          for (var o in t) {
            var i = t[o],
              a = d(o, i, e);
            i.visible && n.appendChild(a);
          }
          0 === n.children.length && n.remove();
        };
      e.default = p;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(3),
        r = n(4),
        i = n(2),
        a = n(5),
        s = n(6),
        l = n(0).default.CONTENT,
        c = function (t) {
          t.addEventListener("input", function (t) {
            var e = t.target.value;
            a.setActionValue(e);
          }),
            t.addEventListener("keyup", function (t) {
              if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
            }),
            setTimeout(function () {
              t.focus(), a.setActionValue("");
            }, 0);
        },
        u = function (t, e, n) {
          var o = document.createElement(e);
          for (var r in (o.classList.add(l + "__" + e), n)) {
            var i = n[r];
            o[r] = i;
          }
          "input" === e && c(o), t.appendChild(o);
        },
        f = function (t) {
          if (t) {
            var e = r.injectElIntoModal(i.contentMarkup),
              n = t.element,
              o = t.attributes;
            "string" == typeof n ? u(e, n, o) : e.appendChild(n);
          }
        };
      e.default = f;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(2),
        i = function () {
          var t = o.stringToNode(r.overlayMarkup);
          document.body.appendChild(t);
        };
      e.default = i;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(5),
        r = n(6),
        i = n(1),
        a = n(3),
        s = n(0),
        l = s.default.MODAL,
        c = s.default.BUTTON,
        u = s.default.OVERLAY,
        f = function (t) {
          t.preventDefault(), g();
        },
        d = function (t) {
          t.preventDefault(), b();
        },
        p = function (t) {
          if (o.default.isOpen && "Escape" === t.key)
            return r.onAction(a.CANCEL_KEY);
        },
        m = function (t) {
          if (o.default.isOpen && "Tab" === t.key) return f(t);
        },
        $ = function (t) {
          if (o.default.isOpen)
            return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
        },
        g = function () {
          var t = i.getNode(c);
          t && ((t.tabIndex = 0), t.focus());
        },
        b = function () {
          var t = i.getNode(l).querySelectorAll("." + c),
            e = t[t.length - 1];
          e && e.focus();
        },
        v = function (t) {
          t[t.length - 1].addEventListener("keydown", m);
        },
        h = function (t) {
          t[0].addEventListener("keydown", $);
        },
        w = function () {
          var t = i.getNode(l).querySelectorAll("." + c);
          t.length && (v(t), h(t));
        },
        x = function (t) {
          if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
        },
        y = function (t) {
          var e = i.getNode(u);
          e.removeEventListener("click", x),
            t && e.addEventListener("click", x);
        },
        _ = function (t) {
          o.default.timer && clearTimeout(o.default.timer),
            t &&
              (o.default.timer = window.setTimeout(function () {
                return r.onAction(a.CANCEL_KEY);
              }, t));
        },
        k = function (t) {
          t.closeOnEsc
            ? document.addEventListener("keyup", p)
            : document.removeEventListener("keyup", p),
            t.dangerMode ? g() : b(),
            w(),
            y(t.closeOnClickOutside),
            _(t.timer);
        };
      e.default = k;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = n(3),
        i = n(37),
        a = n(38),
        s = {
          title: null,
          text: null,
          icon: null,
          buttons: r.defaultButtonList,
          content: null,
          className: null,
          closeOnClickOutside: !0,
          closeOnEsc: !0,
          dangerMode: !1,
          timer: null,
        },
        l = Object.assign({}, s);
      e.setDefaults = function (t) {
        l = Object.assign({}, s, t);
      };
      var c = function (t) {
          var e = t && t.button,
            n = t && t.buttons;
          return (
            void 0 !== e &&
              void 0 !== n &&
              o.throwErr("Cannot set both 'button' and 'buttons' options!"),
            void 0 !== e ? { confirm: e } : n
          );
        },
        u = function (t) {
          return o.ordinalSuffixOf(t + 1);
        },
        f = function (t, e) {
          o.throwErr(u(e) + " argument ('" + t + "') is invalid");
        },
        d = function (t, e) {
          var n = t + 1,
            r = e[n];
          o.isPlainObject(r) ||
            void 0 === r ||
            o.throwErr(
              "Expected " +
                u(n) +
                " argument ('" +
                r +
                "') to be a plain object"
            );
        },
        p = function (t, e) {
          var n = t + 1,
            r = e[n];
          void 0 !== r &&
            o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
        },
        m = function (t, e, n, r) {
          var i = e instanceof Element;
          if ("string" == typeof e) {
            if (0 === n) return { text: e };
            if (1 === n) return { text: e, title: r[0] };
            if (2 === n) return d(n, r), { icon: e };
            f(e, n);
          } else {
            if (i && 0 === n) return d(n, r), { content: e };
            if (o.isPlainObject(e)) return p(n, r), e;
            f(e, n);
          }
        };
      e.getOpts = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = {};
        t.forEach(function (e, o) {
          Object.assign(n, m(0, e, o, t));
        });
        var o = c(n);
        (n.buttons = r.getButtonListOpts(o)),
          delete n.button,
          (n.content = i.getContentOpts(n.content));
        var u = Object.assign({}, s, l, n);
        return (
          Object.keys(u).forEach(function (t) {
            a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
          }),
          u
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        r = { element: "input", attributes: { placeholder: "" } };
      e.getContentOpts = function (t) {
        return o.isPlainObject(t)
          ? Object.assign({}, t)
          : t instanceof Element
          ? { element: t }
          : "input" === t
          ? r
          : null;
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.logDeprecation = function (t) {
          var n = e.DEPRECATED_OPTS[t],
            o = n.onlyRename,
            r = n.replacement,
            i = n.subOption,
            a = n.link,
            s =
              'SweetAlert warning: "' +
              t +
              '" option has been ' +
              (o ? "renamed" : "deprecated") +
              ".";
          r &&
            (s +=
              " Please use" +
              (i ? ' "' + i + '" in ' : " ") +
              '"' +
              r +
              '" instead.');
          var l = "https://sweetalert.js.org";
          (s += a
            ? " More details: " + l + a
            : " More details: " + l + "/guides/#upgrading-from-1x"),
            console.warn(s);
        }),
        (e.DEPRECATED_OPTS = {
          type: { replacement: "icon", link: "/docs/#icon" },
          imageUrl: { replacement: "icon", link: "/docs/#icon" },
          customClass: {
            replacement: "className",
            onlyRename: !0,
            link: "/docs/#classname",
          },
          imageSize: {},
          showCancelButton: { replacement: "buttons", link: "/docs/#buttons" },
          showConfirmButton: { replacement: "button", link: "/docs/#button" },
          confirmButtonText: { replacement: "button", link: "/docs/#button" },
          confirmButtonColor: {},
          cancelButtonText: { replacement: "buttons", link: "/docs/#buttons" },
          closeOnConfirm: {
            replacement: "button",
            subOption: "closeModal",
            link: "/docs/#button",
          },
          closeOnCancel: {
            replacement: "buttons",
            subOption: "closeModal",
            link: "/docs/#buttons",
          },
          showLoaderOnConfirm: { replacement: "buttons" },
          animation: {},
          inputType: { replacement: "content", link: "/docs/#content" },
          inputValue: { replacement: "content", link: "/docs/#content" },
          inputPlaceholder: { replacement: "content", link: "/docs/#content" },
          html: { replacement: "content", link: "/docs/#content" },
          allowEscapeKey: {
            replacement: "closeOnEsc",
            onlyRename: !0,
            link: "/docs/#closeonesc",
          },
          allowClickOutside: {
            replacement: "closeOnClickOutside",
            onlyRename: !0,
            link: "/docs/#closeonclickoutside",
          },
        });
    },
  ]);
});
