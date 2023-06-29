!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Stats = t());
})(this, function () {
  var e = function () {
    function t(e) {
      return i.appendChild(e.dom), e;
    }
    function n(e) {
      for (var t = 0; t < i.children.length; t++)
        i.children[t].style.display = t === e ? "block" : "none";
      l = e;
    }
    var l = 0,
      i = document.createElement("div");
    (i.style.cssText =
      "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
      i.addEventListener(
        "click",
        function (e) {
          e.preventDefault(), n(++l % i.children.length);
        },
        !1
      );
    var a = (performance || Date).now(),
      o = a,
      f = 0,
      r = t(new e.Panel("FPS", "#0ff", "#002")),
      $ = t(new e.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory)
      var c = t(new e.Panel("MB", "#f08", "#201"));
    return (
      n(0),
      {
        REVISION: 16,
        dom: i,
        addPanel: t,
        showPanel: n,
        begin: function () {
          a = (performance || Date).now();
        },
        end: function () {
          f++;
          var e = (performance || Date).now();
          if (
            ($.update(e - a, 200),
            e >= o + 1e3 &&
              (r.update((1e3 * f) / (e - o), 100), (o = e), (f = 0), c))
          ) {
            var t = performance.memory;
            c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576);
          }
          return e;
        },
        update: function () {
          a = this.end();
        },
        domElement: i,
        setMode: n,
      }
    );
  };
  return (
    (e.Panel = function (e, t, n) {
      var l = 1 / 0,
        i = 0,
        a = Math.round,
        o = a(window.devicePixelRatio || 1),
        f = 80 * o,
        r = 48 * o,
        $ = 3 * o,
        c = 2 * o,
        d = 3 * o,
        p = 15 * o,
        u = 74 * o,
        s = 30 * o,
        h = document.createElement("canvas");
      (h.width = f),
        (h.height = r),
        (h.style.cssText = "width:80px;height:48px");
      var m = h.getContext("2d");
      return (
        (m.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif"),
        (m.textBaseline = "top"),
        (m.fillStyle = n),
        m.fillRect(0, 0, f, r),
        (m.fillStyle = t),
        m.fillText(e, $, c),
        m.fillRect(d, p, u, s),
        (m.fillStyle = n),
        (m.globalAlpha = 0.9),
        m.fillRect(d, p, u, s),
        {
          dom: h,
          update: function (r, y) {
            (l = Math.min(l, r)),
              (i = Math.max(i, r)),
              (m.fillStyle = n),
              (m.globalAlpha = 1),
              m.fillRect(0, 0, f, p),
              (m.fillStyle = t),
              m.fillText(a(r) + " " + e + " (" + a(l) + "-" + a(i) + ")", $, c),
              m.drawImage(h, d + o, p, u - o, s, d, p, u - o, s),
              m.fillRect(d + u - o, p, o, s),
              (m.fillStyle = n),
              (m.globalAlpha = 0.9),
              m.fillRect(d + u - o, p, o, a((1 - r / y) * s));
          },
        }
      );
    }),
    e
  );
});
