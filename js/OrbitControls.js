(THREE.OrbitControls = function (e, t) {
  void 0 === t &&
    console.warn(
      'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
    ),
    t === document &&
      console.error(
        'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
      ),
    (this.object = e),
    (this.domElement = t),
    (this.enabled = !0),
    (this.target = new THREE.Vector3()),
    (this.minDistance = 0),
    (this.maxDistance = 1 / 0),
    (this.minZoom = 0),
    (this.maxZoom = 1 / 0),
    (this.minPolarAngle = 0),
    (this.maxPolarAngle = Math.PI),
    (this.minAzimuthAngle = -1 / 0),
    (this.maxAzimuthAngle = 1 / 0),
    (this.enableDamping = !1),
    (this.dampingFactor = 0.05),
    (this.enableZoom = !0),
    (this.zoomSpeed = 1),
    (this.enableRotate = !0),
    (this.rotateSpeed = 1),
    (this.enablePan = !0),
    (this.panSpeed = 1),
    (this.screenSpacePanning = !1),
    (this.keyPanSpeed = 7),
    (this.autoRotate = !1),
    (this.autoRotateSpeed = 2),
    (this.enableKeys = !0),
    (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
    (this.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    }),
    (this.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }),
    (this.target0 = this.target.clone()),
    (this.position0 = this.object.position.clone()),
    (this.zoom0 = this.object.zoom),
    (this.getPolarAngle = function () {
      return u.phi;
    }),
    (this.getAzimuthalAngle = function () {
      return u.theta;
    }),
    (this.saveState = function () {
      o.target0.copy(o.target),
        o.position0.copy(o.object.position),
        (o.zoom0 = o.object.zoom);
    }),
    (this.reset = function () {
      o.target.copy(o.target0),
        o.object.position.copy(o.position0),
        (o.object.zoom = o.zoom0),
        o.object.updateProjectionMatrix(),
        o.dispatchEvent(n),
        o.update(),
        (r = s.NONE);
    }),
    (this.update =
      ((L = new THREE.Vector3()),
      (j = (w = new THREE.Quaternion().setFromUnitVectors(
        e.up,
        new THREE.Vector3(0, 1, 0)
      ))
        .clone()
        .inverse()),
      (R = new THREE.Vector3()),
      (C = new THREE.Quaternion()),
      function () {
        var e = o.object.position;
        return (
          L.copy(e).sub(o.target),
          L.applyQuaternion(w),
          u.setFromVector3(L),
          o.autoRotate &&
            r === s.NONE &&
            y(((2 * Math.PI) / 60 / 60) * o.autoRotateSpeed),
          o.enableDamping
            ? ((u.theta += l.theta * o.dampingFactor),
              (u.phi += l.phi * o.dampingFactor))
            : ((u.theta += l.theta), (u.phi += l.phi)),
          (u.theta = Math.max(
            o.minAzimuthAngle,
            Math.min(o.maxAzimuthAngle, u.theta)
          )),
          (u.phi = Math.max(o.minPolarAngle, Math.min(o.maxPolarAngle, u.phi))),
          u.makeSafe(),
          (u.radius *= m),
          (u.radius = Math.max(
            o.minDistance,
            Math.min(o.maxDistance, u.radius)
          )),
          !0 === o.enableDamping
            ? o.target.addScaledVector(p, o.dampingFactor)
            : o.target.add(p),
          L.setFromSpherical(u),
          L.applyQuaternion(j),
          e.copy(o.target).add(L),
          o.object.lookAt(o.target),
          !0 === o.enableDamping
            ? ((l.theta *= 1 - o.dampingFactor),
              (l.phi *= 1 - o.dampingFactor),
              p.multiplyScalar(1 - o.dampingFactor))
            : (l.set(0, 0, 0), p.set(0, 0, 0)),
          (m = 1),
          !!(
            h ||
            R.distanceToSquared(o.object.position) > c ||
            8 * (1 - C.dot(o.object.quaternion)) > c
          ) &&
            (o.dispatchEvent(n),
            R.copy(o.object.position),
            C.copy(o.object.quaternion),
            (h = !1),
            !0)
        );
      })),
    (this.dispose = function () {
      o.domElement.removeEventListener("contextmenu", et, !1),
        o.domElement.removeEventListener("mousedown", B, !1),
        o.domElement.removeEventListener("wheel", W, !1),
        o.domElement.removeEventListener("touchstart", Q, !1),
        o.domElement.removeEventListener("touchend", ee, !1),
        o.domElement.removeEventListener("touchmove", J, !1),
        document.removeEventListener("mousemove", G, !1),
        document.removeEventListener("mouseup", K, !1),
        o.domElement.removeEventListener("keydown", q, !1);
    });
  var o = this,
    n = { type: "change" },
    a = { type: "start" },
    i = { type: "end" },
    s = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6,
    },
    r = s.NONE,
    c = 1e-6,
    u = new THREE.Spherical(),
    l = new THREE.Spherical(),
    m = 1,
    p = new THREE.Vector3(),
    h = !1,
    d = new THREE.Vector2(),
    b = new THREE.Vector2(),
    E = new THREE.Vector2(),
    O = new THREE.Vector2(),
    _ = new THREE.Vector2(),
    g = new THREE.Vector2(),
    $ = new THREE.Vector2(),
    f = new THREE.Vector2(),
    T = new THREE.Vector2();
  function v() {
    return Math.pow(0.95, o.zoomSpeed);
  }
  function y(e) {
    l.theta -= e;
  }
  function P(e) {
    l.phi -= e;
  }
  var N,
    A,
    L,
    w,
    j,
    R,
    C,
    S,
    k =
      ((S = new THREE.Vector3()),
      function (e, t) {
        S.setFromMatrixColumn(t, 0), S.multiplyScalar(-e), p.add(S);
      }),
    Y =
      ((N = new THREE.Vector3()),
      function (e, t) {
        !0 === o.screenSpacePanning
          ? N.setFromMatrixColumn(t, 1)
          : (N.setFromMatrixColumn(t, 0), N.crossVectors(o.object.up, N)),
          N.multiplyScalar(e),
          p.add(N);
      }),
    D =
      ((A = new THREE.Vector3()),
      function (e, t) {
        var n = o.domElement;
        if (o.object.isPerspectiveCamera) {
          var a = o.object.position;
          A.copy(a).sub(o.target);
          var i = A.length();
          k(
            (2 * e * (i *= Math.tan(((o.object.fov / 2) * Math.PI) / 180))) /
              n.clientHeight,
            o.object.matrix
          ),
            Y((2 * t * i) / n.clientHeight, o.object.matrix);
        } else
          o.object.isOrthographicCamera
            ? (k(
                (e * (o.object.right - o.object.left)) /
                  o.object.zoom /
                  n.clientWidth,
                o.object.matrix
              ),
              Y(
                (t * (o.object.top - o.object.bottom)) /
                  o.object.zoom /
                  n.clientHeight,
                o.object.matrix
              ))
            : (console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
              ),
              (o.enablePan = !1));
      });
  function H(e) {
    o.object.isPerspectiveCamera
      ? (m /= e)
      : o.object.isOrthographicCamera
      ? ((o.object.zoom = Math.max(
          o.minZoom,
          Math.min(o.maxZoom, o.object.zoom * e)
        )),
        o.object.updateProjectionMatrix(),
        (h = !0))
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (o.enableZoom = !1));
  }
  function U(e) {
    o.object.isPerspectiveCamera
      ? (m *= e)
      : o.object.isOrthographicCamera
      ? ((o.object.zoom = Math.max(
          o.minZoom,
          Math.min(o.maxZoom, o.object.zoom / e)
        )),
        o.object.updateProjectionMatrix(),
        (h = !0))
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (o.enableZoom = !1));
  }
  function x(e) {
    d.set(e.clientX, e.clientY);
  }
  function V(e) {
    O.set(e.clientX, e.clientY);
  }
  function M(e) {
    if (1 == e.touches.length) d.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        o = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      d.set(t, o);
    }
  }
  function z(e) {
    if (1 == e.touches.length) O.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        o = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      O.set(t, o);
    }
  }
  function X(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
      o = e.touches[0].pageY - e.touches[1].pageY;
    $.set(0, Math.sqrt(t * t + o * o));
  }
  function Z(e) {
    if (1 == e.touches.length) b.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      b.set(t, n);
    }
    E.subVectors(b, d).multiplyScalar(o.rotateSpeed);
    var a = o.domElement;
    y((2 * Math.PI * E.x) / a.clientHeight),
      P((2 * Math.PI * E.y) / a.clientHeight),
      d.copy(b);
  }
  function I(e) {
    if (1 == e.touches.length) _.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      _.set(t, n);
    }
    g.subVectors(_, O).multiplyScalar(o.panSpeed), D(g.x, g.y), O.copy(_);
  }
  function F(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
      n = e.touches[0].pageY - e.touches[1].pageY;
    f.set(0, Math.sqrt(t * t + n * n)),
      T.set(0, Math.pow(f.y / $.y, o.zoomSpeed)),
      H(T.y),
      $.copy(f);
  }
  function B(e) {
    if (!1 !== o.enabled) {
      switch (
        (e.preventDefault(),
        o.domElement.focus ? o.domElement.focus() : window.focus(),
        e.button)
      ) {
        case 0:
          switch (o.mouseButtons.LEFT) {
            case THREE.MOUSE.ROTATE:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === o.enablePan) return;
                V(e), (r = s.PAN);
              } else {
                if (!1 === o.enableRotate) return;
                x(e), (r = s.ROTATE);
              }
              break;
            case THREE.MOUSE.PAN:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === o.enableRotate) return;
                x(e), (r = s.ROTATE);
              } else {
                if (!1 === o.enablePan) return;
                V(e), (r = s.PAN);
              }
              break;
            default:
              r = s.NONE;
          }
          break;
        case 1:
          if (o.mouseButtons.MIDDLE === THREE.MOUSE.DOLLY) {
            var t;
            if (!1 === o.enableZoom) return;
            (t = e), $.set(t.clientX, t.clientY), (r = s.DOLLY);
          } else r = s.NONE;
          break;
        case 2:
          switch (o.mouseButtons.RIGHT) {
            case THREE.MOUSE.ROTATE:
              if (!1 === o.enableRotate) return;
              x(e), (r = s.ROTATE);
              break;
            case THREE.MOUSE.PAN:
              if (!1 === o.enablePan) return;
              V(e), (r = s.PAN);
              break;
            default:
              r = s.NONE;
          }
      }
      r !== s.NONE &&
        (document.addEventListener("mousemove", G, !1),
        document.addEventListener("mouseup", K, !1),
        o.dispatchEvent(a));
    }
  }
  function G(e) {
    var t, n, a, i;
    if (!1 !== o.enabled)
      switch ((e.preventDefault(), r)) {
        case s.ROTATE:
          if (!1 === o.enableRotate) return;
          (t = e),
            b.set(t.clientX, t.clientY),
            E.subVectors(b, d).multiplyScalar(o.rotateSpeed),
            (n = o.domElement),
            y((2 * Math.PI * E.x) / n.clientHeight),
            P((2 * Math.PI * E.y) / n.clientHeight),
            d.copy(b),
            o.update();
          break;
        case s.DOLLY:
          if (!1 === o.enableZoom) return;
          (a = e),
            f.set(a.clientX, a.clientY),
            T.subVectors(f, $),
            T.y > 0 ? H(v()) : T.y < 0 && U(v()),
            $.copy(f),
            o.update();
          break;
        case s.PAN:
          if (!1 === o.enablePan) return;
          (i = e),
            _.set(i.clientX, i.clientY),
            g.subVectors(_, O).multiplyScalar(o.panSpeed),
            D(g.x, g.y),
            O.copy(_),
            o.update();
      }
  }
  function K(e) {
    !1 !== o.enabled &&
      (document.removeEventListener("mousemove", G, !1),
      document.removeEventListener("mouseup", K, !1),
      o.dispatchEvent(i),
      (r = s.NONE));
  }
  function W(e) {
    var t;
    !1 === o.enabled ||
      !1 === o.enableZoom ||
      (r !== s.NONE && r !== s.ROTATE) ||
      (e.preventDefault(),
      e.stopPropagation(),
      o.dispatchEvent(a),
      (t = e).deltaY < 0 ? U(v()) : t.deltaY > 0 && H(v()),
      o.update(),
      o.dispatchEvent(i));
  }
  function q(e) {
    !1 !== o.enabled &&
      !1 !== o.enableKeys &&
      !1 !== o.enablePan &&
      (function (e) {
        var t = !1;
        switch (e.keyCode) {
          case o.keys.UP:
            D(0, o.keyPanSpeed), (t = !0);
            break;
          case o.keys.BOTTOM:
            D(0, -o.keyPanSpeed), (t = !0);
            break;
          case o.keys.LEFT:
            D(o.keyPanSpeed, 0), (t = !0);
            break;
          case o.keys.RIGHT:
            D(-o.keyPanSpeed, 0), (t = !0);
        }
        t && (e.preventDefault(), o.update());
      })(e);
  }
  function Q(e) {
    if (!1 !== o.enabled) {
      switch ((e.preventDefault(), e.touches.length)) {
        case 1:
          switch (o.touches.ONE) {
            case THREE.TOUCH.ROTATE:
              if (!1 === o.enableRotate) return;
              M(e), (r = s.TOUCH_ROTATE);
              break;
            case THREE.TOUCH.PAN:
              if (!1 === o.enablePan) return;
              z(e), (r = s.TOUCH_PAN);
              break;
            default:
              r = s.NONE;
          }
          break;
        case 2:
          var t, n;
          switch (o.touches.TWO) {
            case THREE.TOUCH.DOLLY_PAN:
              if (!1 === o.enableZoom && !1 === o.enablePan) return;
              (t = e),
                o.enableZoom && X(t),
                o.enablePan && z(t),
                (r = s.TOUCH_DOLLY_PAN);
              break;
            case THREE.TOUCH.DOLLY_ROTATE:
              if (!1 === o.enableZoom && !1 === o.enableRotate) return;
              (n = e),
                o.enableZoom && X(n),
                o.enableRotate && M(n),
                (r = s.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = s.NONE;
          }
          break;
        default:
          r = s.NONE;
      }
      r !== s.NONE && o.dispatchEvent(a);
    }
  }
  function J(e) {
    var t, n;
    if (!1 !== o.enabled)
      switch ((e.preventDefault(), e.stopPropagation(), r)) {
        case s.TOUCH_ROTATE:
          if (!1 === o.enableRotate) return;
          Z(e), o.update();
          break;
        case s.TOUCH_PAN:
          if (!1 === o.enablePan) return;
          I(e), o.update();
          break;
        case s.TOUCH_DOLLY_PAN:
          if (!1 === o.enableZoom && !1 === o.enablePan) return;
          (t = e), o.enableZoom && F(t), o.enablePan && I(t), o.update();
          break;
        case s.TOUCH_DOLLY_ROTATE:
          if (!1 === o.enableZoom && !1 === o.enableRotate) return;
          (n = e), o.enableZoom && F(n), o.enableRotate && Z(n), o.update();
          break;
        default:
          r = s.NONE;
      }
  }
  function ee(e) {
    !1 !== o.enabled && (o.dispatchEvent(i), (r = s.NONE));
  }
  function et(e) {
    !1 !== o.enabled && e.preventDefault();
  }
  o.domElement.addEventListener("contextmenu", et, !1),
    o.domElement.addEventListener("mousedown", B, !1),
    o.domElement.addEventListener("wheel", W, !1),
    o.domElement.addEventListener("touchstart", Q, !1),
    o.domElement.addEventListener("touchend", ee, !1),
    o.domElement.addEventListener("touchmove", J, !1),
    o.domElement.addEventListener("keydown", q, !1),
    -1 === o.domElement.tabIndex && (o.domElement.tabIndex = 0),
    this.update();
}),
  (THREE.OrbitControls.prototype = Object.create(
    THREE.EventDispatcher.prototype
  )),
  (THREE.OrbitControls.prototype.constructor = THREE.OrbitControls),
  (THREE.MapControls = function (e, t) {
    THREE.OrbitControls.call(this, e, t),
      (this.mouseButtons.LEFT = THREE.MOUSE.PAN),
      (this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE),
      (this.touches.ONE = THREE.TOUCH.PAN),
      (this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE);
  }),
  (THREE.MapControls.prototype = Object.create(
    THREE.EventDispatcher.prototype
  )),
  (THREE.MapControls.prototype.constructor = THREE.MapControls);
