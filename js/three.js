!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).THREE = {}));
})(this, function (e) {
  function t() {}
  function i(e, t) {
    (this.x = e || 0), (this.y = t || 0);
  }
  function n(e, t, i, n) {
    (this._x = e || 0),
      (this._y = t || 0),
      (this._z = i || 0),
      (this._w = void 0 !== n ? n : 1);
  }
  function r(e, t, i) {
    (this.x = e || 0), (this.y = t || 0), (this.z = i || 0);
  }
  function a() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      0 < arguments.length &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  function o(e, t, n, r, s, c, l, h, u, p) {
    Object.defineProperty(this, "id", { value: r5++ }),
      (this.uuid = rH.generateUUID()),
      (this.name = ""),
      (this.image = void 0 !== e ? e : o.DEFAULT_IMAGE),
      (this.mipmaps = []),
      (this.mapping = void 0 !== t ? t : o.DEFAULT_MAPPING),
      (this.wrapS = void 0 !== n ? n : 1001),
      (this.wrapT = void 0 !== r ? r : 1001),
      (this.magFilter = void 0 !== s ? s : 1006),
      (this.minFilter = void 0 !== c ? c : 1008),
      (this.anisotropy = void 0 !== u ? u : 1),
      (this.format = void 0 !== l ? l : 1023),
      (this.internalFormat = null),
      (this.type = void 0 !== h ? h : 1009),
      (this.offset = new i(0, 0)),
      (this.repeat = new i(1, 1)),
      (this.center = new i(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new a()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = void 0 !== p ? p : 3e3),
      (this.version = 0),
      (this.onUpdate = null);
  }
  function s(e, t, i, n) {
    (this.x = e || 0),
      (this.y = t || 0),
      (this.z = i || 0),
      (this.w = void 0 !== n ? n : 1);
  }
  function c(e, t, i) {
    (this.width = e),
      (this.height = t),
      (this.scissor = new s(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new s(0, 0, e, t)),
      (i = i || {}),
      (this.texture = new o(
        void 0,
        void 0,
        i.wrapS,
        i.wrapT,
        i.magFilter,
        i.minFilter,
        i.format,
        i.type,
        i.anisotropy,
        i.encoding
      )),
      (this.texture.image = {}),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.generateMipmaps =
        void 0 !== i.generateMipmaps && i.generateMipmaps),
      (this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006),
      (this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer),
      (this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer),
      (this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null);
  }
  function l(e, t, i) {
    c.call(this, e, t, i), (this.samples = 4);
  }
  function h() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      0 < arguments.length &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  function u(e, t, i, n) {
    (this._x = e || 0),
      (this._y = t || 0),
      (this._z = i || 0),
      (this._order = n || u.DefaultOrder);
  }
  function p() {
    this.mask = 1;
  }
  function d() {
    Object.defineProperty(this, "id", { value: rK++ }),
      (this.uuid = rH.generateUUID()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = d.DefaultUp.clone());
    var e = new r(),
      t = new u(),
      i = new n(),
      o = new r(1, 1, 1);
    t._onChange(function () {
      i.setFromEuler(t, !1);
    }),
      i._onChange(function () {
        t.setFromQuaternion(i, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: o },
        modelViewMatrix: { value: new h() },
        normalMatrix: { value: new a() },
      }),
      (this.matrix = new h()),
      (this.matrixWorld = new h()),
      (this.matrixAutoUpdate = d.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new p()),
      (this.visible = !0),
      (this.receiveShadow = this.castShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.userData = {});
  }
  function f() {
    d.call(this),
      (this.type = "Scene"),
      (this.overrideMaterial =
        this.fog =
        this.environment =
        this.background =
          null),
      (this.autoUpdate = !0),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  function m(e, t) {
    (this.min = void 0 !== e ? e : new r(1 / 0, 1 / 0, 1 / 0)),
      (this.max = void 0 !== t ? t : new r(-1 / 0, -1 / 0, -1 / 0));
  }
  function g(e, t, i, n, r) {
    var a,
      o = 0;
    for (a = e.length - 3; o <= a; o += 3) {
      aw.fromArray(e, o);
      var s =
          r.x * Math.abs(aw.x) + r.y * Math.abs(aw.y) + r.z * Math.abs(aw.z),
        c = t.dot(aw),
        l = i.dot(aw),
        h = n.dot(aw);
      if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > s) return !1;
    }
    return !0;
  }
  function v(e, t) {
    (this.center = void 0 !== e ? e : new r()),
      (this.radius = void 0 !== t ? t : 0);
  }
  function $(e, t) {
    (this.origin = void 0 !== e ? e : new r()),
      (this.direction = void 0 !== t ? t : new r(0, 0, -1));
  }
  function y(e, t) {
    (this.normal = void 0 !== e ? e : new r(1, 0, 0)),
      (this.constant = void 0 !== t ? t : 0);
  }
  function x(e, t, i) {
    (this.a = void 0 !== e ? e : new r()),
      (this.b = void 0 !== t ? t : new r()),
      (this.c = void 0 !== i ? i : new r());
  }
  function _(e, t, i) {
    return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i);
  }
  function w(e, t, i) {
    return (
      0 > i && (i += 1),
      1 < i && --i,
      i < 1 / 6
        ? e + 6 * (t - e) * i
        : 0.5 > i
        ? t
        : i < 2 / 3
        ? e + 6 * (t - e) * (2 / 3 - i)
        : e
    );
  }
  function b(e) {
    return 0.04045 > e
      ? 0.0773993808 * e
      : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
  }
  function M(e) {
    return 0.0031308 > e ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
  }
  function S(e, t, i, n, a, o) {
    (this.a = e),
      (this.b = t),
      (this.c = i),
      (this.normal = n && n.isVector3 ? n : new r()),
      (this.vertexNormals = Array.isArray(n) ? n : []),
      (this.color = a && a.isColor ? a : new _()),
      (this.vertexColors = Array.isArray(a) ? a : []),
      (this.materialIndex = void 0 !== o ? o : 0);
  }
  function T() {
    Object.defineProperty(this, "id", { value: aV++ }),
      (this.uuid = rH.generateUUID()),
      (this.name = ""),
      (this.type = "Material"),
      (this.fog = !0),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexTangents = this.flatShading = !1),
      (this.vertexColors = 0),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendEquationAlpha =
        this.blendDstAlpha =
        this.blendSrcAlpha =
          null),
      (this.depthFunc = 3),
      (this.depthWrite = this.depthTest = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilZPass = this.stencilZFail = this.stencilFail = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipShadows = this.clipIntersection = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetUnits = this.polygonOffsetFactor = 0),
      (this.dithering = !1),
      (this.alphaTest = 0),
      (this.premultipliedAlpha = !1),
      (this.toneMapped = this.visible = !0),
      (this.userData = {}),
      (this.version = 0);
  }
  function E(e) {
    T.call(this),
      (this.type = "MeshBasicMaterial"),
      (this.color = new _(16777215)),
      (this.lightMap = this.map = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.envMap = this.alphaMap = this.specularMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function L(e, t, i) {
    if (Array.isArray(e))
      throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = !0 === i),
      (this.usage = 35044),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  function A(e, t, i) {
    L.call(this, new Int8Array(e), t, i);
  }
  function R(e, t, i) {
    L.call(this, new Uint8Array(e), t, i);
  }
  function P(e, t, i) {
    L.call(this, new Uint8ClampedArray(e), t, i);
  }
  function C(e, t, i) {
    L.call(this, new Int16Array(e), t, i);
  }
  function D(e, t, i) {
    L.call(this, new Uint16Array(e), t, i);
  }
  function I(e, t, i) {
    L.call(this, new Int32Array(e), t, i);
  }
  function N(e, t, i) {
    L.call(this, new Uint32Array(e), t, i);
  }
  function z(e, t, i) {
    L.call(this, new Float32Array(e), t, i);
  }
  function B(e, t, i) {
    L.call(this, new Float64Array(e), t, i);
  }
  function U() {
    (this.vertices = []),
      (this.normals = []),
      (this.colors = []),
      (this.uvs = []),
      (this.uvs2 = []),
      (this.groups = []),
      (this.morphTargets = {}),
      (this.skinWeights = []),
      (this.skinIndices = []),
      (this.boundingSphere = this.boundingBox = null),
      (this.groupsNeedUpdate =
        this.uvsNeedUpdate =
        this.colorsNeedUpdate =
        this.normalsNeedUpdate =
        this.verticesNeedUpdate =
          !1);
  }
  function F(e) {
    if (0 === e.length) return -1 / 0;
    for (var t = e[0], i = 1, n = e.length; i < n; ++i) e[i] > t && (t = e[i]);
    return t;
  }
  function G() {
    Object.defineProperty(this, "id", { value: (ak += 2) }),
      (this.uuid = rH.generateUUID()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingSphere = this.boundingBox = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  function H(e, t) {
    d.call(this),
      (this.type = "Mesh"),
      (this.geometry = void 0 !== e ? e : new G()),
      (this.material =
        void 0 !== t ? t : new E({ color: 16777215 * Math.random() })),
      this.updateMorphTargets();
  }
  function O(e, t, i, n, r, a, o, s) {
    return null ===
      (1 === t.side
        ? n.intersectTriangle(o, a, r, !0, s)
        : n.intersectTriangle(r, a, o, 2 !== t.side, s))
      ? null
      : (ol.copy(s),
        ol.applyMatrix4(e.matrixWorld),
        (t = i.ray.origin.distanceTo(ol)) < i.near || t > i.far
          ? null
          : { distance: t, point: ol.clone(), object: e });
  }
  function V(e, t, n, r, a, o, s, c, l, h, u, p) {
    if (
      (aJ.fromBufferAttribute(a, h),
      aQ.fromBufferAttribute(a, u),
      aK.fromBufferAttribute(a, p),
      (a = e.morphTargetInfluences),
      t.morphTargets && o && a)
    ) {
      oi.set(0, 0, 0), on.set(0, 0, 0), or.set(0, 0, 0);
      for (var d = 0, f = o.length; d < f; d++) {
        var m = a[d],
          g = o[d];
        0 !== m &&
          (a9.fromBufferAttribute(g, h),
          oe.fromBufferAttribute(g, u),
          ot.fromBufferAttribute(g, p),
          s
            ? (oi.addScaledVector(a9, m),
              on.addScaledVector(oe, m),
              or.addScaledVector(ot, m))
            : (oi.addScaledVector(a9.sub(aJ), m),
              on.addScaledVector(oe.sub(aQ), m),
              or.addScaledVector(ot.sub(aK), m)));
      }
      aJ.add(oi), aQ.add(on), aK.add(or);
    }
    return (
      (e = O(e, t, n, r, aJ, aQ, aK, oc)) &&
        (c &&
          (oa.fromBufferAttribute(c, h),
          oo.fromBufferAttribute(c, u),
          os.fromBufferAttribute(c, p),
          (e.uv = x.getUV(oc, aJ, aQ, aK, oa, oo, os, new i()))),
        l &&
          (oa.fromBufferAttribute(l, h),
          oo.fromBufferAttribute(l, u),
          os.fromBufferAttribute(l, p),
          (e.uv2 = x.getUV(oc, aJ, aQ, aK, oa, oo, os, new i()))),
        (c = new S(h, u, p)),
        x.getNormal(aJ, aQ, aK, c.normal),
        (e.face = c)),
      e
    );
  }
  function k() {
    Object.defineProperty(this, "id", { value: (oh += 2) }),
      (this.uuid = rH.generateUUID()),
      (this.name = ""),
      (this.type = "Geometry"),
      (this.vertices = []),
      (this.colors = []),
      (this.faces = []),
      (this.faceVertexUvs = [[]]),
      (this.morphTargets = []),
      (this.morphNormals = []),
      (this.skinWeights = []),
      (this.skinIndices = []),
      (this.lineDistances = []),
      (this.boundingSphere = this.boundingBox = null),
      (this.groupsNeedUpdate =
        this.lineDistancesNeedUpdate =
        this.colorsNeedUpdate =
        this.normalsNeedUpdate =
        this.uvsNeedUpdate =
        this.verticesNeedUpdate =
        this.elementsNeedUpdate =
          !1);
  }
  function W(e) {
    var t,
      i = {};
    for (t in e)
      for (var n in ((i[t] = {}), e[t])) {
        var r = e[t][n];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture)
          ? (i[t][n] = r.clone())
          : Array.isArray(r)
          ? (i[t][n] = r.slice())
          : (i[t][n] = r);
      }
    return i;
  }
  function j(e) {
    for (var t = {}, i = 0; i < e.length; i++) {
      var n,
        r = W(e[i]);
      for (n in r) t[n] = r[n];
    }
    return t;
  }
  function q(e) {
    T.call(this),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader =
        "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.morphNormals =
        this.morphTargets =
        this.skinning =
        this.clipping =
        this.lights =
        this.fog =
          !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      void 0 !== e &&
        (void 0 !== e.attributes &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  function X() {
    d.call(this),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new h()),
      (this.projectionMatrix = new h()),
      (this.projectionMatrixInverse = new h());
  }
  function Y(e, t, i, n) {
    X.call(this),
      (this.type = "PerspectiveCamera"),
      (this.fov = void 0 !== e ? e : 50),
      (this.zoom = 1),
      (this.near = void 0 !== i ? i : 0.1),
      (this.far = void 0 !== n ? n : 2e3),
      (this.focus = 10),
      (this.aspect = void 0 !== t ? t : 1),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  function Z(e, t, i, n) {
    d.call(this), (this.type = "CubeCamera");
    var a = new Y(90, 1, e, t);
    a.up.set(0, -1, 0), a.lookAt(new r(1, 0, 0)), this.add(a);
    var o = new Y(90, 1, e, t);
    o.up.set(0, -1, 0), o.lookAt(new r(-1, 0, 0)), this.add(o);
    var s = new Y(90, 1, e, t);
    s.up.set(0, 0, 1), s.lookAt(new r(0, 1, 0)), this.add(s);
    var c = new Y(90, 1, e, t);
    c.up.set(0, 0, -1), c.lookAt(new r(0, -1, 0)), this.add(c);
    var l = new Y(90, 1, e, t);
    l.up.set(0, -1, 0), l.lookAt(new r(0, 0, 1)), this.add(l);
    var h = new Y(90, 1, e, t);
    h.up.set(0, -1, 0),
      h.lookAt(new r(0, 0, -1)),
      this.add(h),
      (n = n || { format: 1022, magFilter: 1006, minFilter: 1006 }),
      (this.renderTarget = new J(i, i, n)),
      (this.renderTarget.texture.name = "CubeCamera"),
      (this.update = function (e, t) {
        null === this.parent && this.updateMatrixWorld();
        var i = e.getRenderTarget(),
          n = this.renderTarget,
          r = n.texture.generateMipmaps;
        (n.texture.generateMipmaps = !1),
          e.setRenderTarget(n, 0),
          e.render(t, a),
          e.setRenderTarget(n, 1),
          e.render(t, o),
          e.setRenderTarget(n, 2),
          e.render(t, s),
          e.setRenderTarget(n, 3),
          e.render(t, c),
          e.setRenderTarget(n, 4),
          e.render(t, l),
          (n.texture.generateMipmaps = r),
          e.setRenderTarget(n, 5),
          e.render(t, h),
          e.setRenderTarget(i);
      }),
      (this.clear = function (e, t, i, n) {
        for (
          var r = e.getRenderTarget(), a = this.renderTarget, o = 0;
          6 > o;
          o++
        )
          e.setRenderTarget(a, o), e.clear(t, i, n);
        e.setRenderTarget(r);
      });
  }
  function J(e, t, i) {
    c.call(this, e, t, i);
  }
  function Q(e, t, i, n, r, a, s, c, l, h, u, p) {
    o.call(this, null, a, s, c, l, h, n, r, u, p),
      (this.image = { data: e || null, width: t || 1, height: i || 1 }),
      (this.magFilter = void 0 !== l ? l : 1003),
      (this.minFilter = void 0 !== h ? h : 1003),
      (this.flipY = this.generateMipmaps = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
  function K(e, t, i, n, r, a) {
    this.planes = [
      void 0 !== e ? e : new y(),
      void 0 !== t ? t : new y(),
      void 0 !== i ? i : new y(),
      void 0 !== n ? n : new y(),
      void 0 !== r ? r : new y(),
      void 0 !== a ? a : new y(),
    ];
  }
  function ee() {
    function e(r, a) {
      !1 !== i && (n(r, a), t.requestAnimationFrame(e));
    }
    var t = null,
      i = !1,
      n = null;
    return {
      start: function () {
        !0 !== i && null !== n && (t.requestAnimationFrame(e), (i = !0));
      },
      stop: function () {
        i = !1;
      },
      setAnimationLoop: function (e) {
        n = e;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function et(e) {
    var t = new WeakMap();
    return {
      get: function (e) {
        return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
      },
      remove: function (i) {
        i.isInterleavedBufferAttribute && (i = i.data);
        var n = t.get(i);
        n && (e.deleteBuffer(n.buffer), t.delete(i));
      },
      update: function (i, n) {
        i.isInterleavedBufferAttribute && (i = i.data);
        var r,
          a,
          o,
          s,
          c,
          l = t.get(i);
        if (void 0 === l)
          t.set(
            i,
            ((r = i),
            (a = n),
            (o = r.array),
            (s = r.usage),
            (c = e.createBuffer()),
            e.bindBuffer(a, c),
            e.bufferData(a, o, s),
            r.onUploadCallback(),
            (a = 5126),
            o instanceof Float32Array
              ? (a = 5126)
              : o instanceof Float64Array
              ? console.warn(
                  "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
                )
              : o instanceof Uint16Array
              ? (a = 5123)
              : o instanceof Int16Array
              ? (a = 5122)
              : o instanceof Uint32Array
              ? (a = 5125)
              : o instanceof Int32Array
              ? (a = 5124)
              : o instanceof Int8Array
              ? (a = 5120)
              : o instanceof Uint8Array && (a = 5121),
            {
              buffer: c,
              type: a,
              bytesPerElement: o.BYTES_PER_ELEMENT,
              version: r.version,
            })
          );
        else if (l.version < i.version) {
          var h = i.array,
            u = i.updateRange;
          e.bindBuffer(n, l.buffer),
            -1 === u.count
              ? e.bufferSubData(n, 0, h)
              : (e.bufferSubData(
                  n,
                  u.offset * h.BYTES_PER_ELEMENT,
                  h.subarray(u.offset, u.offset + u.count)
                ),
                (u.count = -1)),
            (l.version = i.version);
        }
      },
    };
  }
  function ei(e, t, i, n) {
    k.call(this),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: n,
      }),
      this.fromBufferGeometry(new en(e, t, i, n)),
      this.mergeVertices();
  }
  function en(e, t, i, n) {
    G.call(this),
      (this.type = "PlaneBufferGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: n,
      });
    var r = (e = e || 1) / 2,
      a = (t = t || 1) / 2,
      o = (i = Math.floor(i) || 1) + 1,
      s = (n = Math.floor(n) || 1) + 1,
      c = e / i,
      l = t / n,
      h = [],
      u = [],
      p = [],
      d = [];
    for (e = 0; e < s; e++) {
      var f = e * l - a;
      for (t = 0; t < o; t++)
        u.push(t * c - r, -f, 0),
          p.push(0, 0, 1),
          d.push(t / i),
          d.push(1 - e / n);
    }
    for (e = 0; e < n; e++)
      for (t = 0; t < i; t++)
        (r = t + o * (e + 1)),
          (a = t + 1 + o * (e + 1)),
          (s = t + 1 + o * e),
          h.push(t + o * e, r, s),
          h.push(r, a, s);
    this.setIndex(h),
      this.setAttribute("position", new z(u, 3)),
      this.setAttribute("normal", new z(p, 3)),
      this.setAttribute("uv", new z(d, 2));
  }
  function er(e, t, i, n) {
    function r(e, i) {
      t.buffers.color.setClear(e.r, e.g, e.b, i, n);
    }
    var a,
      o,
      s = new _(0),
      c = 0,
      l = null,
      h = 0;
    return {
      getClearColor: function () {
        return s;
      },
      setClearColor: function (e, t) {
        s.set(e), r(s, (c = void 0 !== t ? t : 1));
      },
      getClearAlpha: function () {
        return c;
      },
      setClearAlpha: function (e) {
        r(s, (c = e));
      },
      render: function (t, n, u, p) {
        (n = n.background),
          (u = (u = e.xr).getSession && u.getSession()) &&
            "additive" === u.environmentBlendMode &&
            (n = null),
          null === n
            ? (r(s, c), (l = null), (h = 0))
            : n && n.isColor && (r(n, 1), (p = !0), (l = null), (h = 0)),
          (e.autoClear || p) &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          n &&
          (n.isCubeTexture || n.isWebGLRenderTargetCube || 306 === n.mapping)
            ? (void 0 === o &&
                ((o = new H(
                  new om(1, 1, 1),
                  new q({
                    type: "BackgroundCubeMaterial",
                    uniforms: W(ox.cube.uniforms),
                    vertexShader: ox.cube.vertexShader,
                    fragmentShader: ox.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )).geometry.deleteAttribute("normal"),
                o.geometry.deleteAttribute("uv"),
                (o.onBeforeRender = function (e, t, i) {
                  this.matrixWorld.copyPosition(i.matrixWorld);
                }),
                Object.defineProperty(o.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                i.update(o)),
              (p = n.isWebGLRenderTargetCube ? n.texture : n),
              (o.material.uniforms.envMap.value = p),
              (o.material.uniforms.flipEnvMap.value = p.isCubeTexture ? -1 : 1),
              (l !== n || h !== p.version) &&
                ((o.material.needsUpdate = !0), (l = n), (h = p.version)),
              t.unshift(o, o.geometry, o.material, 0, 0, null))
            : n &&
              n.isTexture &&
              (void 0 === a &&
                ((a = new H(
                  new en(2, 2),
                  new q({
                    type: "BackgroundMaterial",
                    uniforms: W(ox.background.uniforms),
                    vertexShader: ox.background.vertexShader,
                    fragmentShader: ox.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )).geometry.deleteAttribute("normal"),
                Object.defineProperty(a.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                i.update(a)),
              (a.material.uniforms.t2D.value = n),
              !0 === n.matrixAutoUpdate && n.updateMatrix(),
              a.material.uniforms.uvTransform.value.copy(n.matrix),
              (l !== n || h !== n.version) &&
                ((a.material.needsUpdate = !0), (l = n), (h = n.version)),
              t.unshift(a, a.geometry, a.material, 0, 0, null));
      },
    };
  }
  function ea(e, t, i, n) {
    var r,
      a = n.isWebGL2;
    (this.setMode = function (e) {
      r = e;
    }),
      (this.render = function (t, n) {
        e.drawArrays(r, t, n), i.update(n, r);
      }),
      (this.renderInstances = function (n, o, s, c) {
        if (0 !== c) {
          if (a) {
            n = e;
            var l = "drawArraysInstanced";
          } else if (
            ((n = t.get("ANGLE_instanced_arrays")),
            (l = "drawArraysInstancedANGLE"),
            null === n)
          ) {
            console.error(
              "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
            );
            return;
          }
          n[l](r, o, s, c), i.update(s, r, c);
        }
      });
  }
  function eo(e, t, i) {
    function n(t) {
      if ("highp" === t) {
        if (
          0 < e.getShaderPrecisionFormat(35633, 36338).precision &&
          0 < e.getShaderPrecisionFormat(35632, 36338).precision
        )
          return "highp";
        t = "mediump";
      }
      return "mediump" === t &&
        0 < e.getShaderPrecisionFormat(35633, 36337).precision &&
        0 < e.getShaderPrecisionFormat(35632, 36337).precision
        ? "mediump"
        : "lowp";
    }
    var r,
      a =
        ("undefined" != typeof WebGL2RenderingContext &&
          e instanceof WebGL2RenderingContext) ||
        ("undefined" != typeof WebGL2ComputeRenderingContext &&
          e instanceof WebGL2ComputeRenderingContext),
      o = void 0 !== i.precision ? i.precision : "highp",
      s = n(o);
    s !== o &&
      (console.warn(
        "THREE.WebGLRenderer:",
        o,
        "not supported, using",
        s,
        "instead."
      ),
      (o = s)),
      (i = !0 === i.logarithmicDepthBuffer),
      (s = e.getParameter(34930));
    var c = e.getParameter(35660),
      l = e.getParameter(3379),
      h = e.getParameter(34076),
      u = e.getParameter(34921),
      p = e.getParameter(36347),
      d = e.getParameter(36348),
      f = e.getParameter(36349),
      m = 0 < c,
      g = a || !!t.get("OES_texture_float"),
      v = a ? e.getParameter(36183) : 0;
    return {
      isWebGL2: a,
      getMaxAnisotropy: function () {
        if (void 0 !== r) return r;
        var i = t.get("EXT_texture_filter_anisotropic");
        return (r =
          null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
      },
      getMaxPrecision: n,
      precision: o,
      logarithmicDepthBuffer: i,
      maxTextures: s,
      maxVertexTextures: c,
      maxTextureSize: l,
      maxCubemapSize: h,
      maxAttributes: u,
      maxVertexUniforms: p,
      maxVaryings: d,
      maxFragmentUniforms: f,
      vertexTextures: m,
      floatFragmentTextures: g,
      floatVertexTextures: m && g,
      maxSamples: v,
    };
  }
  function es() {
    function e() {
      h.value !== n && ((h.value = n), (h.needsUpdate = 0 < r)),
        (i.numPlanes = r),
        (i.numIntersection = 0);
    }
    function t(e, t, n, r) {
      var a = null !== e ? e.length : 0,
        o = null;
      if (0 !== a) {
        if (((o = h.value), !0 !== r || null === o))
          for (
            r = n + 4 * a,
              t = t.matrixWorldInverse,
              l.getNormalMatrix(t),
              (null === o || o.length < r) && (o = new Float32Array(r)),
              r = 0;
            r !== a;
            ++r, n += 4
          )
            c.copy(e[r]).applyMatrix4(t, l),
              c.normal.toArray(o, n),
              (o[n + 3] = c.constant);
        (h.value = o), (h.needsUpdate = !0);
      }
      return (i.numPlanes = a), o;
    }
    var i = this,
      n = null,
      r = 0,
      o = !1,
      s = !1,
      c = new y(),
      l = new a(),
      h = { value: null, needsUpdate: !1 };
    (this.uniform = h),
      (this.numIntersection = this.numPlanes = 0),
      (this.init = function (e, i, a) {
        var s = 0 !== e.length || i || 0 !== r || o;
        return (o = i), (n = t(e, a, 0)), (r = e.length), s;
      }),
      (this.beginShadows = function () {
        (s = !0), t(null);
      }),
      (this.endShadows = function () {
        (s = !1), e();
      }),
      (this.setState = function (i, a, c, l, u, p) {
        if (o && null !== i && 0 !== i.length && (!s || c)) {
          var d = 4 * (c = s ? 0 : r),
            f = u.clippingState || null;
          for (h.value = f, f = t(i, l, d, p), i = 0; i !== d; ++i) f[i] = n[i];
          (u.clippingState = f),
            (this.numIntersection = a ? this.numPlanes : 0),
            (this.numPlanes += c);
        } else s ? t(null) : e();
      });
  }
  function ec(e) {
    var t = {};
    return {
      get: function (i) {
        if (void 0 !== t[i]) return t[i];
        switch (i) {
          case "WEBGL_depth_texture":
            var n =
              e.getExtension("WEBGL_depth_texture") ||
              e.getExtension("MOZ_WEBGL_depth_texture") ||
              e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            n =
              e.getExtension("EXT_texture_filter_anisotropic") ||
              e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            n =
              e.getExtension("WEBGL_compressed_texture_s3tc") ||
              e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
              e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            n =
              e.getExtension("WEBGL_compressed_texture_pvrtc") ||
              e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            n = e.getExtension(i);
        }
        return (
          null === n &&
            console.warn(
              "THREE.WebGLRenderer: " + i + " extension not supported."
            ),
          (t[i] = n)
        );
      },
    };
  }
  function el(e, t, i) {
    function n(e) {
      var r = e.target;
      for (var s in (null !== (e = a.get(r)).index && t.remove(e.index),
      e.attributes))
        t.remove(e.attributes[s]);
      r.removeEventListener("dispose", n),
        a.delete(r),
        (s = o.get(e)) && (t.remove(s), o.delete(e)),
        i.memory.geometries--;
    }
    function r(e) {
      var i = [],
        n = e.index,
        r = e.attributes.position;
      if (null !== n) {
        var a = n.array;
        (n = n.version), (r = 0);
        for (var s = a.length; r < s; r += 3) {
          var c = a[r + 0],
            l = a[r + 1],
            h = a[r + 2];
          i.push(c, l, l, h, h, c);
        }
      } else for (a = r.array, n = r.version, r = 0, s = a.length / 3 - 1; r < s; r += 3) (c = r + 0), (l = r + 1), (h = r + 2), i.push(c, l, l, h, h, c);
      ((i = new (65535 < F(i) ? N : D)(i, 1)).version = n),
        t.update(i, 34963),
        (a = o.get(e)) && t.remove(a),
        o.set(e, i);
    }
    var a = new WeakMap(),
      o = new WeakMap();
    return {
      get: function (e, t) {
        var r = a.get(t);
        return (
          r ||
            (t.addEventListener("dispose", n),
            t.isBufferGeometry
              ? (r = t)
              : t.isGeometry &&
                (void 0 === t._bufferGeometry &&
                  (t._bufferGeometry = new G().setFromObject(e)),
                (r = t._bufferGeometry)),
            a.set(t, r),
            i.memory.geometries++),
          r
        );
      },
      update: function (e) {
        var i = e.index,
          n = e.attributes;
        for (var r in (null !== i && t.update(i, 34963), n))
          t.update(n[r], 34962);
        for (r in (e = e.morphAttributes)) {
          (i = e[r]), (n = 0);
          for (var a = i.length; n < a; n++) t.update(i[n], 34962);
        }
      },
      getWireframeAttribute: function (e) {
        var t = o.get(e);
        if (t) {
          var i = e.index;
          null !== i && t.version < i.version && r(e);
        } else r(e);
        return o.get(e);
      },
    };
  }
  function eh(e, t, i, n) {
    var r,
      a,
      o,
      s = n.isWebGL2;
    (this.setMode = function (e) {
      r = e;
    }),
      (this.setIndex = function (e) {
        (a = e.type), (o = e.bytesPerElement);
      }),
      (this.render = function (t, n) {
        e.drawElements(r, n, a, t * o), i.update(n, r);
      }),
      (this.renderInstances = function (n, c, l, h) {
        if (0 !== h) {
          if (s) {
            n = e;
            var u = "drawElementsInstanced";
          } else if (
            ((n = t.get("ANGLE_instanced_arrays")),
            (u = "drawElementsInstancedANGLE"),
            null === n)
          ) {
            console.error(
              "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
            );
            return;
          }
          n[u](r, l, a, c * o, h), i.update(l, r, h);
        }
      });
  }
  function eu(e) {
    var t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function () {
        t.frame++,
          (t.calls = 0),
          (t.triangles = 0),
          (t.points = 0),
          (t.lines = 0);
      },
      update: function (e, i, n) {
        switch (((n = n || 1), t.calls++, i)) {
          case 4:
            t.triangles += (e / 3) * n;
            break;
          case 1:
            t.lines += (e / 2) * n;
            break;
          case 3:
            t.lines += n * (e - 1);
            break;
          case 2:
            t.lines += n * e;
            break;
          case 0:
            t.points += n * e;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", i);
        }
      },
    };
  }
  function ep(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1]);
  }
  function ed(e) {
    var t = {},
      i = new Float32Array(8);
    return {
      update: function (n, r, a, o) {
        var s = n.morphTargetInfluences,
          c = void 0 === s ? 0 : s.length;
        if (void 0 === (n = t[r.id])) {
          n = [];
          for (var l = 0; l < c; l++) n[l] = [l, 0];
          t[r.id] = n;
        }
        var h = a.morphTargets && r.morphAttributes.position;
        for (
          l = 0, a = a.morphNormals && r.morphAttributes.normal;
          l < c;
          l++
        ) {
          var u = n[l];
          0 !== u[1] &&
            (h && r.deleteAttribute("morphTarget" + l),
            a && r.deleteAttribute("morphNormal" + l));
        }
        for (l = 0; l < c; l++) ((u = n[l])[0] = l), (u[1] = s[l]);
        for (n.sort(ep), l = s = 0; 8 > l; l++) {
          if ((u = n[l]) && ((c = u[0]), (u = u[1]))) {
            h && r.setAttribute("morphTarget" + l, h[c]),
              a && r.setAttribute("morphNormal" + l, a[c]),
              (i[l] = u),
              (s += u);
            continue;
          }
          i[l] = 0;
        }
        (r = r.morphTargetsRelative ? 1 : 1 - s),
          o.getUniforms().setValue(e, "morphTargetBaseInfluence", r),
          o.getUniforms().setValue(e, "morphTargetInfluences", i);
      },
    };
  }
  function ef(e, t, i, n) {
    var r = {};
    return {
      update: function (e) {
        var a = n.render.frame,
          o = e.geometry,
          s = t.get(e, o);
        return (
          r[s.id] !== a &&
            (o.isGeometry && s.updateFromObject(e), t.update(s), (r[s.id] = a)),
          e.isInstancedMesh && i.update(e.instanceMatrix, 34962),
          s
        );
      },
      dispose: function () {
        r = {};
      },
    };
  }
  function em(e, t, i, n, r, a, s, c, l, h) {
    (e = void 0 !== e ? e : []),
      o.call(
        this,
        e,
        void 0 !== t ? t : 301,
        i,
        n,
        r,
        a,
        void 0 !== s ? s : 1022,
        c,
        l,
        h
      ),
      (this.flipY = !1);
  }
  function eg(e, t, i, n) {
    o.call(this, null),
      (this.image = {
        data: e || null,
        width: t || 1,
        height: i || 1,
        depth: n || 1,
      }),
      (this.minFilter = this.magFilter = 1003),
      (this.wrapR = 1001),
      (this.flipY = this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
  function ev(e, t, i, n) {
    o.call(this, null),
      (this.image = {
        data: e || null,
        width: t || 1,
        height: i || 1,
        depth: n || 1,
      }),
      (this.minFilter = this.magFilter = 1003),
      (this.wrapR = 1001),
      (this.flipY = this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
  function e$(e, t, i) {
    var n = e[0];
    if (0 >= n || 0 < n) return e;
    var r = t * i,
      a = oM[r];
    if ((void 0 === a && ((a = new Float32Array(r)), (oM[r] = a)), 0 !== t))
      for (n.toArray(a, 0), n = 1, r = 0; n !== t; ++n)
        (r += i), e[n].toArray(a, r);
    return a;
  }
  function ey(e, t) {
    if (e.length !== t.length) return !1;
    for (var i = 0, n = e.length; i < n; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  function ex(e, t) {
    for (var i = 0, n = t.length; i < n; i++) e[i] = t[i];
  }
  function e_(e, t) {
    var i = oS[t];
    void 0 === i && ((i = new Int32Array(t)), (oS[t] = i));
    for (var n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
    return i;
  }
  function e8(e, t) {
    var i = this.cache;
    i[0] !== t && (e.uniform1f(this.addr, t), (i[0] = t));
  }
  function ew(e, t) {
    var i = this.cache;
    void 0 !== t.x
      ? (i[0] !== t.x || i[1] !== t.y) &&
        (e.uniform2f(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y))
      : ey(i, t) || (e.uniform2fv(this.addr, t), ex(i, t));
  }
  function eb(e, t) {
    var i = this.cache;
    void 0 !== t.x
      ? (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) &&
        (e.uniform3f(this.addr, t.x, t.y, t.z),
        (i[0] = t.x),
        (i[1] = t.y),
        (i[2] = t.z))
      : void 0 !== t.r
      ? (i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) &&
        (e.uniform3f(this.addr, t.r, t.g, t.b),
        (i[0] = t.r),
        (i[1] = t.g),
        (i[2] = t.b))
      : ey(i, t) || (e.uniform3fv(this.addr, t), ex(i, t));
  }
  function eM(e, t) {
    var i = this.cache;
    void 0 !== t.x
      ? (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) &&
        (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        (i[0] = t.x),
        (i[1] = t.y),
        (i[2] = t.z),
        (i[3] = t.w))
      : ey(i, t) || (e.uniform4fv(this.addr, t), ex(i, t));
  }
  function eS(e, t) {
    var i = this.cache,
      n = t.elements;
    void 0 === n
      ? ey(i, t) || (e.uniformMatrix2fv(this.addr, !1, t), ex(i, t))
      : ey(i, n) ||
        (o1.set(n), e.uniformMatrix2fv(this.addr, !1, o1), ex(i, n));
  }
  function eT(e, t) {
    var i = this.cache,
      n = t.elements;
    void 0 === n
      ? ey(i, t) || (e.uniformMatrix3fv(this.addr, !1, t), ex(i, t))
      : ey(i, n) ||
        (oE.set(n), e.uniformMatrix3fv(this.addr, !1, oE), ex(i, n));
  }
  function eE(e, t) {
    var i = this.cache,
      n = t.elements;
    void 0 === n
      ? ey(i, t) || (e.uniformMatrix4fv(this.addr, !1, t), ex(i, t))
      : ey(i, n) ||
        (oT.set(n), e.uniformMatrix4fv(this.addr, !1, oT), ex(i, n));
  }
  function e1(e, t, i) {
    var n = this.cache,
      r = i.allocateTextureUnit();
    n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
      i.safeSetTexture2D(t || o_, r);
  }
  function e0(e, t, i) {
    var n = this.cache,
      r = i.allocateTextureUnit();
    n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
      i.setTexture2DArray(t || o8, r);
  }
  function eL(e, t, i) {
    var n = this.cache,
      r = i.allocateTextureUnit();
    n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
      i.setTexture3D(t || ow, r);
  }
  function eA(e, t, i) {
    var n = this.cache,
      r = i.allocateTextureUnit();
    n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
      i.safeSetTextureCube(t || ob, r);
  }
  function eR(e, t) {
    var i = this.cache;
    i[0] !== t && (e.uniform1i(this.addr, t), (i[0] = t));
  }
  function eP(e, t) {
    var i = this.cache;
    ey(i, t) || (e.uniform2iv(this.addr, t), ex(i, t));
  }
  function eC(e, t) {
    var i = this.cache;
    ey(i, t) || (e.uniform3iv(this.addr, t), ex(i, t));
  }
  function eD(e, t) {
    var i = this.cache;
    ey(i, t) || (e.uniform4iv(this.addr, t), ex(i, t));
  }
  function eI(e, t) {
    e.uniform1fv(this.addr, t);
  }
  function eN(e, t) {
    e.uniform1iv(this.addr, t);
  }
  function ez(e, t) {
    e.uniform2iv(this.addr, t);
  }
  function eB(e, t) {
    e.uniform3iv(this.addr, t);
  }
  function e2(e, t) {
    e.uniform4iv(this.addr, t);
  }
  function eU(e, t) {
    (t = e$(t, this.size, 2)), e.uniform2fv(this.addr, t);
  }
  function eF(e, t) {
    (t = e$(t, this.size, 3)), e.uniform3fv(this.addr, t);
  }
  function eG(e, t) {
    (t = e$(t, this.size, 4)), e.uniform4fv(this.addr, t);
  }
  function e3(e, t) {
    (t = e$(t, this.size, 4)), e.uniformMatrix2fv(this.addr, !1, t);
  }
  function eH(e, t) {
    (t = e$(t, this.size, 9)), e.uniformMatrix3fv(this.addr, !1, t);
  }
  function eO(e, t) {
    (t = e$(t, this.size, 16)), e.uniformMatrix4fv(this.addr, !1, t);
  }
  function eV(e, t, i) {
    var n = t.length,
      r = e_(i, n);
    for (e.uniform1iv(this.addr, r), e = 0; e !== n; ++e)
      i.safeSetTexture2D(t[e] || o_, r[e]);
  }
  function e4(e, t, i) {
    var n = t.length,
      r = e_(i, n);
    for (e.uniform1iv(this.addr, r), e = 0; e !== n; ++e)
      i.safeSetTextureCube(t[e] || ob, r[e]);
  }
  function ek(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.setValue = (function e(t) {
        switch (t) {
          case 5126:
            return e8;
          case 35664:
            return ew;
          case 35665:
            return eb;
          case 35666:
            return eM;
          case 35674:
            return eS;
          case 35675:
            return eT;
          case 35676:
            return eE;
          case 35678:
          case 36198:
            return e1;
          case 35679:
            return eL;
          case 35680:
            return eA;
          case 36289:
            return e0;
          case 5124:
          case 35670:
            return eR;
          case 35667:
          case 35671:
            return eP;
          case 35668:
          case 35672:
            return eC;
          case 35669:
          case 35673:
            return eD;
        }
      })(t.type));
  }
  function eW(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = (function e(t) {
        switch (t) {
          case 5126:
            return eI;
          case 35664:
            return eU;
          case 35665:
            return eF;
          case 35666:
            return eG;
          case 35674:
            return e3;
          case 35675:
            return eH;
          case 35676:
            return eO;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
            return eV;
          case 35680:
          case 36300:
          case 36308:
            return e4;
          case 5124:
          case 35670:
            return eN;
          case 35667:
          case 35671:
            return ez;
          case 35668:
          case 35672:
            return eB;
          case 35669:
          case 35673:
            return e2;
        }
      })(t.type));
  }
  function e5(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  function e6(e, t) {
    (this.seq = []), (this.map = {});
    for (var i = e.getProgramParameter(t, 35718), n = 0; n < i; ++n) {
      var r = e.getActiveUniform(t, n),
        a = e.getUniformLocation(t, r.name),
        o = this,
        s = r.name,
        c = s.length;
      for (o0.lastIndex = 0; ; ) {
        var l = o0.exec(s),
          h = o0.lastIndex,
          u = l[1],
          p = l[3];
        if (
          ("]" === l[2] && (u |= 0), void 0 === p || ("[" === p && h + 2 === c))
        ) {
          (s = o),
            (r = void 0 === p ? new ek(u, r, a) : new eW(u, r, a)),
            s.seq.push(r),
            (s.map[r.id] = r);
          break;
        }
        void 0 === (p = o.map[u]) &&
          ((p = new e5(u)), (u = o), (o = p), u.seq.push(o), (u.map[o.id] = o)),
          (o = p);
      }
    }
  }
  function e7(e, t, i) {
    return (t = e.createShader(t)), e.shaderSource(t, i), e.compileShader(t), t;
  }
  function ej(e) {
    switch (e) {
      case 3e3:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      case 3002:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case 3003:
        return ["LogLuv", "( value )"];
      default:
        throw Error("unsupported encoding: " + e);
    }
  }
  function eq(e, t, i) {
    var n = e.getShaderParameter(t, 35713),
      r = e.getShaderInfoLog(t).trim();
    if (n && "" === r) return "";
    for (e = e.getShaderSource(t).split("\n"), t = 0; t < e.length; t++)
      e[t] = t + 1 + ": " + e[t];
    return (
      "THREE.WebGLShader: gl.getShaderInfoLog() " +
      i +
      "\n" +
      r +
      (e = e.join("\n"))
    );
  }
  function eX(e, t) {
    return (
      "vec4 " +
      e +
      "( vec4 value ) { return " +
      (t = ej(t))[0] +
      "ToLinear" +
      t[1] +
      "; }"
    );
  }
  function eY(e) {
    return "" !== e;
  }
  function eZ(e, t) {
    return e
      .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
      .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }
  function eJ(e, t) {
    return e
      .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        t.numClippingPlanes - t.numClipIntersection
      );
  }
  function eQ(e, t) {
    if (void 0 === (e = o$[t]))
      throw Error("Can not resolve #include <" + t + ">");
    return e.replace(oA, eQ);
  }
  function eK(e, t, i, n) {
    for (e = "", t = parseInt(t); t < parseInt(i); t++)
      e += n
        .replace(/\[ i \]/g, "[ " + t + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return e;
  }
  function e9(e) {
    var t =
      "precision " +
      e.precision +
      " float;\nprecision " +
      e.precision +
      " int;";
    return (
      "highp" === e.precision
        ? (t += "\n#define HIGH_PRECISION")
        : "mediump" === e.precision
        ? (t += "\n#define MEDIUM_PRECISION")
        : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
      t
    );
  }
  function te(e, t, i, n, r, a) {
    var o,
      s,
      c,
      l,
      h,
      u,
      p,
      d,
      f = e.getContext(),
      m = n.defines,
      g = r.vertexShader,
      v = r.fragmentShader,
      $ =
        ((o = a),
        (s = "SHADOWMAP_TYPE_BASIC"),
        1 === o.shadowMapType
          ? (s = "SHADOWMAP_TYPE_PCF")
          : 2 === o.shadowMapType
          ? (s = "SHADOWMAP_TYPE_PCF_SOFT")
          : 3 === o.shadowMapType && (s = "SHADOWMAP_TYPE_VSM"),
        s),
      y = (function e(t) {
        var i = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
          switch (t.envMapMode) {
            case 301:
            case 302:
              i = "ENVMAP_TYPE_CUBE";
              break;
            case 306:
            case 307:
              i = "ENVMAP_TYPE_CUBE_UV";
              break;
            case 303:
            case 304:
              i = "ENVMAP_TYPE_EQUIREC";
              break;
            case 305:
              i = "ENVMAP_TYPE_SPHERE";
          }
        return i;
      })(a),
      x = (function e(t) {
        var i = "ENVMAP_MODE_REFLECTION";
        if (t.envMap)
          switch (t.envMapMode) {
            case 302:
            case 304:
              i = "ENVMAP_MODE_REFRACTION";
          }
        return i;
      })(a),
      _ = (function e(t) {
        var i = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
          switch (t.combine) {
            case 0:
              i = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case 1:
              i = "ENVMAP_BLENDING_MIX";
              break;
            case 2:
              i = "ENVMAP_BLENDING_ADD";
          }
        return i;
      })(a),
      w = 0 < e.gammaFactor ? e.gammaFactor : 1,
      b = a.isWebGL2
        ? ""
        : ((c = n.extensions),
          (l = a),
          (h = t),
          [
            (c = c || {}).derivatives ||
            l.envMapCubeUV ||
            l.bumpMap ||
            l.tangentSpaceNormalMap ||
            l.clearcoatNormalMap ||
            l.flatShading ||
            "physical" === l.shaderID
              ? "#extension GL_OES_standard_derivatives : enable"
              : "",
            (c.fragDepth || l.logarithmicDepthBuffer) && h.get("EXT_frag_depth")
              ? "#extension GL_EXT_frag_depth : enable"
              : "",
            c.drawBuffers && h.get("WEBGL_draw_buffers")
              ? "#extension GL_EXT_draw_buffers : require"
              : "",
            (c.shaderTextureLOD || l.envMap) && h.get("EXT_shader_texture_lod")
              ? "#extension GL_EXT_shader_texture_lod : enable"
              : "",
          ]
            .filter(eY)
            .join("\n")),
      M = (function e(t) {
        var i,
          n = [];
        for (i in t) {
          var r = t[i];
          !1 !== r && n.push("#define " + i + " " + r);
        }
        return n.join("\n");
      })(m),
      S = f.createProgram(),
      T = a.numMultiviewViews;
    return (
      n.isRawShaderMaterial
        ? (0 < (m = [M].filter(eY).join("\n")).length && (m += "\n"),
          0 < (t = [b, M].filter(eY).join("\n")).length && (t += "\n"))
        : ((m = [
            e9(a),
            "#define SHADER_NAME " + r.name,
            M,
            a.instancing ? "#define USE_INSTANCING" : "",
            a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            "#define GAMMA_FACTOR " + w,
            "#define MAX_BONES " + a.maxBones,
            a.useFog && a.fog ? "#define USE_FOG" : "",
            a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
            a.map ? "#define USE_MAP" : "",
            a.envMap ? "#define USE_ENVMAP" : "",
            a.envMap ? "#define " + x : "",
            a.lightMap ? "#define USE_LIGHTMAP" : "",
            a.aoMap ? "#define USE_AOMAP" : "",
            a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            a.bumpMap ? "#define USE_BUMPMAP" : "",
            a.normalMap ? "#define USE_NORMALMAP" : "",
            a.normalMap && a.objectSpaceNormalMap
              ? "#define OBJECTSPACE_NORMALMAP"
              : "",
            a.normalMap && a.tangentSpaceNormalMap
              ? "#define TANGENTSPACE_NORMALMAP"
              : "",
            a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            a.displacementMap && a.supportsVertexTextures
              ? "#define USE_DISPLACEMENTMAP"
              : "",
            a.specularMap ? "#define USE_SPECULARMAP" : "",
            a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            a.metalnessMap ? "#define USE_METALNESSMAP" : "",
            a.alphaMap ? "#define USE_ALPHAMAP" : "",
            a.vertexTangents ? "#define USE_TANGENT" : "",
            a.vertexColors ? "#define USE_COLOR" : "",
            a.vertexUvs ? "#define USE_UV" : "",
            a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            a.flatShading ? "#define FLAT_SHADED" : "",
            a.skinning ? "#define USE_SKINNING" : "",
            a.useVertexTexture ? "#define BONE_TEXTURE" : "",
            a.morphTargets ? "#define USE_MORPHTARGETS" : "",
            a.morphNormals && !1 === a.flatShading
              ? "#define USE_MORPHNORMALS"
              : "",
            a.doubleSided ? "#define DOUBLE_SIDED" : "",
            a.flipSided ? "#define FLIP_SIDED" : "",
            a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            a.shadowMapEnabled ? "#define " + $ : "",
            a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth"))
              ? "#define USE_LOGDEPTHBUF_EXT"
              : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            " attribute mat4 instanceMatrix;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#ifdef USE_COLOR",
            "	attribute vec3 color;",
            "#endif",
            "#ifdef USE_MORPHTARGETS",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n",
          ]
            .filter(eY)
            .join("\n")),
          (t = [
            b,
            e9(a),
            "#define SHADER_NAME " + r.name,
            M,
            a.alphaTest
              ? "#define ALPHATEST " +
                a.alphaTest +
                (a.alphaTest % 1 ? "" : ".0")
              : "",
            "#define GAMMA_FACTOR " + w,
            a.useFog && a.fog ? "#define USE_FOG" : "",
            a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
            a.map ? "#define USE_MAP" : "",
            a.matcap ? "#define USE_MATCAP" : "",
            a.envMap ? "#define USE_ENVMAP" : "",
            a.envMap ? "#define " + y : "",
            a.envMap ? "#define " + x : "",
            a.envMap ? "#define " + _ : "",
            a.lightMap ? "#define USE_LIGHTMAP" : "",
            a.aoMap ? "#define USE_AOMAP" : "",
            a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            a.bumpMap ? "#define USE_BUMPMAP" : "",
            a.normalMap ? "#define USE_NORMALMAP" : "",
            a.normalMap && a.objectSpaceNormalMap
              ? "#define OBJECTSPACE_NORMALMAP"
              : "",
            a.normalMap && a.tangentSpaceNormalMap
              ? "#define TANGENTSPACE_NORMALMAP"
              : "",
            a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            a.specularMap ? "#define USE_SPECULARMAP" : "",
            a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            a.metalnessMap ? "#define USE_METALNESSMAP" : "",
            a.alphaMap ? "#define USE_ALPHAMAP" : "",
            a.sheen ? "#define USE_SHEEN" : "",
            a.vertexTangents ? "#define USE_TANGENT" : "",
            a.vertexColors ? "#define USE_COLOR" : "",
            a.vertexUvs ? "#define USE_UV" : "",
            a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            a.gradientMap ? "#define USE_GRADIENTMAP" : "",
            a.flatShading ? "#define FLAT_SHADED" : "",
            a.doubleSided ? "#define DOUBLE_SIDED" : "",
            a.flipSided ? "#define FLIP_SIDED" : "",
            a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            a.shadowMapEnabled ? "#define " + $ : "",
            a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            a.physicallyCorrectLights
              ? "#define PHYSICALLY_CORRECT_LIGHTS"
              : "",
            a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth"))
              ? "#define USE_LOGDEPTHBUF_EXT"
              : "",
            ((n.extensions && n.extensions.shaderTextureLOD) || a.envMap) &&
            (a.isWebGL2 || t.get("EXT_shader_texture_lod"))
              ? "#define TEXTURE_LOD_EXT"
              : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== a.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== a.toneMapping ? o$.tonemapping_pars_fragment : "",
            0 !== a.toneMapping
              ? (function e(t, i) {
                  switch (i) {
                    case 1:
                      i = "Linear";
                      break;
                    case 2:
                      i = "Reinhard";
                      break;
                    case 3:
                      i = "Uncharted2";
                      break;
                    case 4:
                      i = "OptimizedCineon";
                      break;
                    case 5:
                      i = "ACESFilmic";
                      break;
                    default:
                      throw Error("unsupported toneMapping: " + i);
                  }
                  return (
                    "vec3 " +
                    t +
                    "( vec3 color ) { return " +
                    i +
                    "ToneMapping( color ); }"
                  );
                })("toneMapping", a.toneMapping)
              : "",
            a.dithering ? "#define DITHERING" : "",
            a.outputEncoding ||
            a.mapEncoding ||
            a.matcapEncoding ||
            a.envMapEncoding ||
            a.emissiveMapEncoding ||
            a.lightMapEncoding
              ? o$.encodings_pars_fragment
              : "",
            a.mapEncoding ? eX("mapTexelToLinear", a.mapEncoding) : "",
            a.matcapEncoding ? eX("matcapTexelToLinear", a.matcapEncoding) : "",
            a.envMapEncoding ? eX("envMapTexelToLinear", a.envMapEncoding) : "",
            a.emissiveMapEncoding
              ? eX("emissiveMapTexelToLinear", a.emissiveMapEncoding)
              : "",
            a.lightMapEncoding
              ? eX("lightMapTexelToLinear", a.lightMapEncoding)
              : "",
            a.outputEncoding
              ? "vec4 linearToOutputTexel( vec4 value ) { return LinearTo" +
                (d = ej((d = a.outputEncoding)))[0] +
                d[1] +
                "; }"
              : "",
            a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
            "\n",
          ]
            .filter(eY)
            .join("\n"))),
      (g = eJ((g = eZ((g = g.replace(oA, eQ)), a)), a)),
      (v = eJ((v = eZ((v = v.replace(oA, eQ)), a)), a)),
      (g = g.replace(oR, eK)),
      (v = v.replace(oR, eK)),
      a.isWebGL2 &&
        !n.isRawShaderMaterial &&
        (($ = !1),
        (y = /^\s*#version\s+300\s+es\s*\n/),
        n.isShaderMaterial &&
          null !== g.match(y) &&
          null !== v.match(y) &&
          (($ = !0), (g = g.replace(y, "")), (v = v.replace(y, ""))),
        (m =
          "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" +
          m),
        (t =
          [
            "#version 300 es\n\n#define varying in",
            $ ? "" : "out highp vec4 pc_fragColor;",
            $ ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          t),
        0 < T &&
          ((m = (m = m.replace(
            "#version 300 es\n",
            [
              "#version 300 es\n\n#extension GL_OVR_multiview2 : require",
              "layout(num_views = " + T + ") in;",
              "#define VIEW_ID gl_ViewID_OVR",
            ].join("\n")
          )).replace(
            "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;",
            [
              "uniform mat4 modelViewMatrices[" + T + "];",
              "uniform mat4 projectionMatrices[" + T + "];",
              "uniform mat4 viewMatrices[" + T + "];",
              "uniform mat3 normalMatrices[" + T + "];",
              "#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]",
            ].join("\n")
          )),
          (t = (t = t.replace(
            "#version 300 es\n",
            "#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"
          )).replace(
            "uniform mat4 viewMatrix;",
            [
              "uniform mat4 viewMatrices[" + T + "];",
              "#define viewMatrix viewMatrices[VIEW_ID]",
            ].join("\n")
          )))),
      (v = t + v),
      (g = e7(f, 35633, m + g)),
      (v = e7(f, 35632, v)),
      f.attachShader(S, g),
      f.attachShader(S, v),
      void 0 !== n.index0AttributeName
        ? f.bindAttribLocation(S, 0, n.index0AttributeName)
        : !0 === a.morphTargets && f.bindAttribLocation(S, 0, "position"),
      f.linkProgram(S),
      e.debug.checkShaderErrors &&
        ((e = f.getProgramInfoLog(S).trim()),
        (a = f.getShaderInfoLog(g).trim()),
        ($ = f.getShaderInfoLog(v).trim()),
        (x = y = !0),
        !1 === f.getProgramParameter(S, 35714)
          ? ((y = !1),
            (_ = eq(f, g, "vertex")),
            (w = eq(f, v, "fragment")),
            console.error(
              "THREE.WebGLProgram: shader error: ",
              f.getError(),
              "35715",
              f.getProgramParameter(S, 35715),
              "gl.getProgramInfoLog",
              e,
              _,
              w
            ))
          : "" !== e
          ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e)
          : ("" === a || "" === $) && (x = !1),
        x &&
          (this.diagnostics = {
            runnable: y,
            material: n,
            programLog: e,
            vertexShader: { log: a, prefix: m },
            fragmentShader: { log: $, prefix: t },
          })),
      f.deleteShader(g),
      f.deleteShader(v),
      (this.getUniforms = function () {
        return void 0 === u && (u = new e6(f, S)), u;
      }),
      (this.getAttributes = function () {
        if (void 0 === p) {
          for (
            var e = {}, t = f.getProgramParameter(S, 35721), i = 0;
            i < t;
            i++
          ) {
            var n = f.getActiveAttrib(S, i).name;
            e[n] = f.getAttribLocation(S, n);
          }
          p = e;
        }
        return p;
      }),
      (this.destroy = function () {
        f.deleteProgram(S), (this.program = void 0);
      }),
      (this.name = r.name),
      (this.id = oL++),
      (this.cacheKey = i),
      (this.usedTimes = 1),
      (this.program = S),
      (this.vertexShader = g),
      (this.fragmentShader = v),
      (this.numMultiviewViews = T),
      this
    );
  }
  function tt(e, t, i) {
    function n(e) {
      if (e)
        e.isTexture
          ? (t = e.encoding)
          : e.isWebGLRenderTarget &&
            (console.warn(
              "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
            ),
            (t = e.texture.encoding));
      else var t = 3e3;
      return t;
    }
    var r = [],
      a = i.isWebGL2,
      o = i.logarithmicDepthBuffer,
      s = i.floatVertexTextures,
      c = i.precision,
      l = i.maxVertexUniforms,
      h = i.vertexTextures,
      u = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite",
      },
      p =
        "precision isWebGL2 supportsVertexTextures outputEncoding instancing numMultiviewViews map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(
          " "
        );
    (this.getParameters = function (t, r, p, d, f, m, g) {
      var v = d.fog;
      (d = t.isMeshStandardMaterial ? d.environment : null),
        (d = t.envMap || d);
      var $ = u[t.type];
      if (g.isSkinnedMesh) {
        var y = g.skeleton.bones;
        if (s) y = 1024;
        else {
          var x = Math.min(Math.floor((l - 20) / 4), y.length);
          x < y.length
            ? (console.warn(
                "THREE.WebGLRenderer: Skeleton has " +
                  y.length +
                  " bones. This GPU supports " +
                  x +
                  "."
              ),
              (y = 0))
            : (y = x);
        }
      } else y = 0;
      return (
        null !== t.precision &&
          (c = i.getMaxPrecision(t.precision)) !== t.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            t.precision,
            "not supported, using",
            c,
            "instead."
          ),
        (x = e.getRenderTarget()),
        {
          isWebGL2: a,
          shaderID: $,
          precision: c,
          instancing: !0 === g.isInstancedMesh,
          supportsVertexTextures: h,
          numMultiviewViews:
            x && x.isWebGLMultiviewRenderTarget ? x.numViews : 0,
          outputEncoding: null !== x ? n(x.texture) : e.outputEncoding,
          map: !!t.map,
          mapEncoding: n(t.map),
          matcap: !!t.matcap,
          matcapEncoding: n(t.matcap),
          envMap: !!d,
          envMapMode: d && d.mapping,
          envMapEncoding: n(d),
          envMapCubeUV: !!d && (306 === d.mapping || 307 === d.mapping),
          lightMap: !!t.lightMap,
          lightMapEncoding: n(t.lightMap),
          aoMap: !!t.aoMap,
          emissiveMap: !!t.emissiveMap,
          emissiveMapEncoding: n(t.emissiveMap),
          bumpMap: !!t.bumpMap,
          normalMap: !!t.normalMap,
          objectSpaceNormalMap: 1 === t.normalMapType,
          tangentSpaceNormalMap: 0 === t.normalMapType,
          clearcoatNormalMap: !!t.clearcoatNormalMap,
          displacementMap: !!t.displacementMap,
          roughnessMap: !!t.roughnessMap,
          metalnessMap: !!t.metalnessMap,
          specularMap: !!t.specularMap,
          alphaMap: !!t.alphaMap,
          gradientMap: !!t.gradientMap,
          sheen: !!t.sheen,
          combine: t.combine,
          vertexTangents: t.normalMap && t.vertexTangents,
          vertexColors: t.vertexColors,
          vertexUvs:
            !!t.map ||
            !!t.bumpMap ||
            !!t.normalMap ||
            !!t.specularMap ||
            !!t.alphaMap ||
            !!t.emissiveMap ||
            !!t.roughnessMap ||
            !!t.metalnessMap ||
            !!t.clearcoatNormalMap ||
            !!t.displacementMap,
          uvsVertexOnly:
            !(
              t.map ||
              t.bumpMap ||
              t.normalMap ||
              t.specularMap ||
              t.alphaMap ||
              t.emissiveMap ||
              t.roughnessMap ||
              t.metalnessMap ||
              t.clearcoatNormalMap
            ) && !!t.displacementMap,
          fog: !!v,
          useFog: t.fog,
          fogExp2: v && v.isFogExp2,
          flatShading: t.flatShading,
          sizeAttenuation: t.sizeAttenuation,
          logarithmicDepthBuffer: o,
          skinning: t.skinning && 0 < y,
          maxBones: y,
          useVertexTexture: s,
          morphTargets: t.morphTargets,
          morphNormals: t.morphNormals,
          maxMorphTargets: e.maxMorphTargets,
          maxMorphNormals: e.maxMorphNormals,
          numDirLights: r.directional.length,
          numPointLights: r.point.length,
          numSpotLights: r.spot.length,
          numRectAreaLights: r.rectArea.length,
          numHemiLights: r.hemi.length,
          numDirLightShadows: r.directionalShadowMap.length,
          numPointLightShadows: r.pointShadowMap.length,
          numSpotLightShadows: r.spotShadowMap.length,
          numClippingPlanes: f,
          numClipIntersection: m,
          dithering: t.dithering,
          shadowMapEnabled: e.shadowMap.enabled && 0 < p.length,
          shadowMapType: e.shadowMap.type,
          toneMapping: t.toneMapped ? e.toneMapping : 0,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: t.premultipliedAlpha,
          alphaTest: t.alphaTest,
          doubleSided: 2 === t.side,
          flipSided: 1 === t.side,
          depthPacking: void 0 !== t.depthPacking && t.depthPacking,
        }
      );
    }),
      (this.getProgramCacheKey = function (t, i) {
        var n = [];
        if (
          (i.shaderID
            ? n.push(i.shaderID)
            : (n.push(t.fragmentShader), n.push(t.vertexShader)),
          void 0 !== t.defines)
        )
          for (var r in t.defines) n.push(r), n.push(t.defines[r]);
        if (void 0 === t.isRawShaderMaterial) {
          for (r = 0; r < p.length; r++) n.push(i[p[r]]);
          n.push(e.outputEncoding), n.push(e.gammaFactor);
        }
        return n.push(t.onBeforeCompile.toString()), n.join();
      }),
      (this.acquireProgram = function (i, n, a, o) {
        for (var s, c = 0, l = r.length; c < l; c++) {
          var h = r[c];
          if (h.cacheKey === o) {
            (s = h), ++s.usedTimes;
            break;
          }
        }
        return void 0 === s && ((s = new te(e, t, o, i, n, a)), r.push(s)), s;
      }),
      (this.releaseProgram = function (e) {
        0 == --e.usedTimes &&
          ((r[r.indexOf(e)] = r[r.length - 1]), r.pop(), e.destroy());
      }),
      (this.programs = r);
  }
  function ti() {
    var e = new WeakMap();
    return {
      get: function (t) {
        var i = e.get(t);
        return void 0 === i && ((i = {}), e.set(t, i)), i;
      },
      remove: function (t) {
        e.delete(t);
      },
      update: function (t, i, n) {
        e.get(t)[i] = n;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function tn(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.program !== t.program
      ? e.program.id - t.program.id
      : e.material.id !== t.material.id
      ? e.material.id - t.material.id
      : e.z !== t.z
      ? e.z - t.z
      : e.id - t.id;
  }
  function tr(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.z !== t.z
      ? t.z - e.z
      : e.id - t.id;
  }
  function ta() {
    function e(e, n, r, o, s, c) {
      var l = t[i];
      return (
        void 0 === l
          ? ((l = {
              id: e.id,
              object: e,
              geometry: n,
              material: r,
              program: r.program || a,
              groupOrder: o,
              renderOrder: e.renderOrder,
              z: s,
              group: c,
            }),
            (t[i] = l))
          : ((l.id = e.id),
            (l.object = e),
            (l.geometry = n),
            (l.material = r),
            (l.program = r.program || a),
            (l.groupOrder = o),
            (l.renderOrder = e.renderOrder),
            (l.z = s),
            (l.group = c)),
        i++,
        l
      );
    }
    var t = [],
      i = 0,
      n = [],
      r = [],
      a = { id: -1 };
    return {
      opaque: n,
      transparent: r,
      init: function () {
        (i = 0), (n.length = 0), (r.length = 0);
      },
      push: function (t, i, a, o, s, c) {
        (t = e(t, i, a, o, s, c)), (!0 === a.transparent ? r : n).push(t);
      },
      unshift: function (t, i, a, o, s, c) {
        (t = e(t, i, a, o, s, c)), (!0 === a.transparent ? r : n).unshift(t);
      },
      sort: function (e, t) {
        1 < n.length && n.sort(e || tn), 1 < r.length && r.sort(t || tr);
      },
    };
  }
  function to() {
    function e(i) {
      (i = i.target).removeEventListener("dispose", e), t.delete(i);
    }
    var t = new WeakMap();
    return {
      get: function (i, n) {
        var r = t.get(i);
        if (void 0 === r) {
          var a = new ta();
          t.set(i, new WeakMap()),
            t.get(i).set(n, a),
            i.addEventListener("dispose", e);
        } else void 0 === (a = r.get(n)) && ((a = new ta()), r.set(n, a));
        return a;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function ts() {
    var e = {};
    return {
      get: function (t) {
        if (void 0 !== e[t.id]) return e[t.id];
        switch (t.type) {
          case "DirectionalLight":
            var n = {
              direction: new r(),
              color: new _(),
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i(),
            };
            break;
          case "SpotLight":
            n = {
              position: new r(),
              direction: new r(),
              color: new _(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i(),
            };
            break;
          case "PointLight":
            n = {
              position: new r(),
              color: new _(),
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3,
            };
            break;
          case "HemisphereLight":
            n = { direction: new r(), skyColor: new _(), groundColor: new _() };
            break;
          case "RectAreaLight":
            n = {
              color: new _(),
              position: new r(),
              halfWidth: new r(),
              halfHeight: new r(),
            };
        }
        return (e[t.id] = n);
      },
    };
  }
  function tc(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
  }
  function tl() {
    for (
      var e = new ts(),
        t = {
          version: 0,
          hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
          },
          ambient: [0, 0, 0],
          probe: [],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
        },
        i = 0;
      9 > i;
      i++
    )
      t.probe.push(new r());
    var n = new r(),
      a = new h(),
      o = new h();
    return {
      setup: function (i, r, s) {
        for (var c = 0, l = 0, h = 0, u = 0; 9 > u; u++)
          t.probe[u].set(0, 0, 0);
        var p = (r = 0),
          d = 0,
          f = 0,
          m = 0,
          g = 0,
          v = 0,
          $ = 0;
        (s = s.matrixWorldInverse), i.sort(tc), (u = 0);
        for (var y = i.length; u < y; u++) {
          var x = i[u],
            _ = x.color,
            w = x.intensity,
            b = x.distance,
            M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
          if (x.isAmbientLight) (c += _.r * w), (l += _.g * w), (h += _.b * w);
          else if (x.isLightProbe)
            for (M = 0; 9 > M; M++)
              t.probe[M].addScaledVector(x.sh.coefficients[M], w);
          else if (x.isDirectionalLight) {
            var S = e.get(x);
            S.color.copy(x.color).multiplyScalar(x.intensity),
              S.direction.setFromMatrixPosition(x.matrixWorld),
              n.setFromMatrixPosition(x.target.matrixWorld),
              S.direction.sub(n),
              S.direction.transformDirection(s),
              (S.shadow = x.castShadow) &&
                ((w = x.shadow),
                (S.shadowBias = w.bias),
                (S.shadowRadius = w.radius),
                (S.shadowMapSize = w.mapSize),
                (t.directionalShadowMap[r] = M),
                (t.directionalShadowMatrix[r] = x.shadow.matrix),
                g++),
              (t.directional[r] = S),
              r++;
          } else
            x.isSpotLight
              ? ((S = e.get(x)).position.setFromMatrixPosition(x.matrixWorld),
                S.position.applyMatrix4(s),
                S.color.copy(_).multiplyScalar(w),
                (S.distance = b),
                S.direction.setFromMatrixPosition(x.matrixWorld),
                n.setFromMatrixPosition(x.target.matrixWorld),
                S.direction.sub(n),
                S.direction.transformDirection(s),
                (S.coneCos = Math.cos(x.angle)),
                (S.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
                (S.decay = x.decay),
                (S.shadow = x.castShadow) &&
                  ((w = x.shadow),
                  (S.shadowBias = w.bias),
                  (S.shadowRadius = w.radius),
                  (S.shadowMapSize = w.mapSize),
                  (t.spotShadowMap[d] = M),
                  (t.spotShadowMatrix[d] = x.shadow.matrix),
                  $++),
                (t.spot[d] = S),
                d++)
              : x.isRectAreaLight
              ? ((S = e.get(x)).color.copy(_).multiplyScalar(w),
                S.position.setFromMatrixPosition(x.matrixWorld),
                S.position.applyMatrix4(s),
                o.identity(),
                a.copy(x.matrixWorld),
                a.premultiply(s),
                o.extractRotation(a),
                S.halfWidth.set(0.5 * x.width, 0, 0),
                S.halfHeight.set(0, 0.5 * x.height, 0),
                S.halfWidth.applyMatrix4(o),
                S.halfHeight.applyMatrix4(o),
                (t.rectArea[f] = S),
                f++)
              : x.isPointLight
              ? ((S = e.get(x)).position.setFromMatrixPosition(x.matrixWorld),
                S.position.applyMatrix4(s),
                S.color.copy(x.color).multiplyScalar(x.intensity),
                (S.distance = x.distance),
                (S.decay = x.decay),
                (S.shadow = x.castShadow) &&
                  ((w = x.shadow),
                  (S.shadowBias = w.bias),
                  (S.shadowRadius = w.radius),
                  (S.shadowMapSize = w.mapSize),
                  (S.shadowCameraNear = w.camera.near),
                  (S.shadowCameraFar = w.camera.far),
                  (t.pointShadowMap[p] = M),
                  (t.pointShadowMatrix[p] = x.shadow.matrix),
                  v++),
                (t.point[p] = S),
                p++)
              : x.isHemisphereLight &&
                ((S = e.get(x)).direction.setFromMatrixPosition(x.matrixWorld),
                S.direction.transformDirection(s),
                S.direction.normalize(),
                S.skyColor.copy(x.color).multiplyScalar(w),
                S.groundColor.copy(x.groundColor).multiplyScalar(w),
                (t.hemi[m] = S),
                m++);
        }
        (t.ambient[0] = c),
          (t.ambient[1] = l),
          (t.ambient[2] = h),
          ((i = t.hash).directionalLength !== r ||
            i.pointLength !== p ||
            i.spotLength !== d ||
            i.rectAreaLength !== f ||
            i.hemiLength !== m ||
            i.numDirectionalShadows !== g ||
            i.numPointShadows !== v ||
            i.numSpotShadows !== $) &&
            ((t.directional.length = r),
            (t.spot.length = d),
            (t.rectArea.length = f),
            (t.point.length = p),
            (t.hemi.length = m),
            (t.directionalShadowMap.length = g),
            (t.pointShadowMap.length = v),
            (t.spotShadowMap.length = $),
            (t.directionalShadowMatrix.length = g),
            (t.pointShadowMatrix.length = v),
            (t.spotShadowMatrix.length = $),
            (i.directionalLength = r),
            (i.pointLength = p),
            (i.spotLength = d),
            (i.rectAreaLength = f),
            (i.hemiLength = m),
            (i.numDirectionalShadows = g),
            (i.numPointShadows = v),
            (i.numSpotShadows = $),
            (t.version = oP++));
      },
      state: t,
    };
  }
  function th() {
    var e = new tl(),
      t = [],
      i = [];
    return {
      init: function () {
        (t.length = 0), (i.length = 0);
      },
      state: { lightsArray: t, shadowsArray: i, lights: e },
      setupLights: function (n) {
        e.setup(t, i, n);
      },
      pushLight: function (e) {
        t.push(e);
      },
      pushShadow: function (e) {
        i.push(e);
      },
    };
  }
  function tu() {
    function e(i) {
      (i = i.target).removeEventListener("dispose", e), t.delete(i);
    }
    var t = new WeakMap();
    return {
      get: function (i, n) {
        if (!1 === t.has(i)) {
          var r = new th();
          t.set(i, new WeakMap()),
            t.get(i).set(n, r),
            i.addEventListener("dispose", e);
        } else
          !1 === t.get(i).has(n)
            ? ((r = new th()), t.get(i).set(n, r))
            : (r = t.get(i).get(n));
        return r;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function tp(e) {
    T.call(this),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.morphTargets = this.skinning = !1),
      (this.displacementMap = this.alphaMap = this.map = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(e);
  }
  function td(e) {
    T.call(this),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new r()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.morphTargets = this.skinning = !1),
      (this.displacementMap = this.alphaMap = this.map = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(e);
  }
  function tf(e, t, n) {
    function r(e, t, i) {
      var n = f[(i = (e << 0) | (t << 1) | (i << 2))];
      return (
        void 0 === n &&
          ((n = new tp({ depthPacking: 3201, morphTargets: e, skinning: t })),
          (f[i] = n)),
        n
      );
    }
    function a(e, t, i) {
      var n = m[(i = (e << 0) | (t << 1) | (i << 2))];
      return (
        void 0 === n &&
          ((n = new td({ morphTargets: e, skinning: t })), (m[i] = n)),
        n
      );
    }
    function o(t, i, n, o, s, c) {
      var l = t.geometry,
        h = r,
        u = t.customDepthMaterial;
      return (
        !0 === n.isPointLight && ((h = a), (u = t.customDistanceMaterial)),
        void 0 === u
          ? ((u = !1),
            !0 === i.morphTargets &&
              (!0 === l.isBufferGeometry
                ? (u =
                    l.morphAttributes &&
                    l.morphAttributes.position &&
                    0 < l.morphAttributes.position.length)
                : !0 === l.isGeometry &&
                  (u = l.morphTargets && 0 < l.morphTargets.length)),
            (l = !1),
            !0 === t.isSkinnedMesh &&
              (!0 === i.skinning
                ? (l = !0)
                : console.warn(
                    "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
                    t
                  )),
            (t = h(u, l, !0 === t.isInstancedMesh)))
          : (t = u),
        e.localClippingEnabled &&
          !0 === i.clipShadows &&
          0 !== i.clippingPlanes.length &&
          ((u = t.uuid),
          (h = i.uuid),
          void 0 === (l = g[u]) && ((l = {}), (g[u] = l)),
          void 0 === (u = l[h]) && ((u = t.clone()), (l[h] = u)),
          (t = u)),
        (t.visible = i.visible),
        (t.wireframe = i.wireframe),
        (t.side =
          3 === c
            ? null !== i.shadowSide
              ? i.shadowSide
              : i.side
            : null !== i.shadowSide
            ? i.shadowSide
            : v[i.side]),
        (t.clipShadows = i.clipShadows),
        (t.clippingPlanes = i.clippingPlanes),
        (t.clipIntersection = i.clipIntersection),
        (t.wireframeLinewidth = i.wireframeLinewidth),
        (t.linewidth = i.linewidth),
        !0 === n.isPointLight &&
          !0 === t.isMeshDistanceMaterial &&
          (t.referencePosition.setFromMatrixPosition(n.matrixWorld),
          (t.nearDistance = o),
          (t.farDistance = s)),
        t
      );
    }
    function l(i, n, r, a, s) {
      if (!1 !== i.visible) {
        if (
          i.layers.test(n.layers) &&
          (i.isMesh || i.isLine || i.isPoints) &&
          (i.castShadow || (i.receiveShadow && 3 === s)) &&
          (!i.frustumCulled || h.intersectsObject(i))
        ) {
          i.modelViewMatrix.multiplyMatrices(
            r.matrixWorldInverse,
            i.matrixWorld
          );
          var c = t.update(i),
            u = i.material;
          if (Array.isArray(u))
            for (var p = c.groups, d = 0, f = p.length; d < f; d++) {
              var m = p[d],
                g = u[m.materialIndex];
              g &&
                g.visible &&
                ((g = o(i, g, a, r.near, r.far, s)),
                e.renderBufferDirect(r, null, c, g, i, m));
            }
          else
            u.visible &&
              ((g = o(i, u, a, r.near, r.far, s)),
              e.renderBufferDirect(r, null, c, g, i, null));
        }
        for (i = i.children, c = 0, u = i.length; c < u; c++)
          l(i[c], n, r, a, s);
      }
    }
    var h = new K(),
      u = new i(),
      p = new i(),
      d = new s(),
      f = [],
      m = [],
      g = {},
      v = { 0: 1, 1: 0, 2: 2 },
      $ = new q({
        defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 0.125 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new i() },
          radius: { value: 4 },
        },
        vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      y = $.clone();
    y.defines.HORIZONAL_PASS = 1;
    var x = new G();
    x.setAttribute(
      "position",
      new L(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    var _ = new H(x, $),
      w = this;
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = 1),
      (this.render = function (i, r, a) {
        if (
          !1 !== w.enabled &&
          (!1 !== w.autoUpdate || !1 !== w.needsUpdate) &&
          0 !== i.length
        ) {
          var o = e.getRenderTarget(),
            s = e.getActiveCubeFace(),
            f = e.getActiveMipmapLevel(),
            m = e.state;
          m.setBlending(0),
            m.buffers.color.setClear(1, 1, 1, 1),
            m.buffers.depth.setTest(!0),
            m.setScissorTest(!1);
          for (var g = 0, v = i.length; g < v; g++) {
            var x = i[g],
              b = x.shadow;
            if (void 0 === b)
              console.warn("THREE.WebGLShadowMap:", x, "has no shadow.");
            else {
              u.copy(b.mapSize);
              var M = b.getFrameExtents();
              u.multiply(M),
                p.copy(b.mapSize),
                (u.x > n || u.y > n) &&
                  (console.warn(
                    "THREE.WebGLShadowMap:",
                    x,
                    "has shadow exceeding max texture size, reducing"
                  ),
                  u.x > n &&
                    ((p.x = Math.floor(n / M.x)),
                    (u.x = p.x * M.x),
                    (b.mapSize.x = p.x)),
                  u.y > n &&
                    ((p.y = Math.floor(n / M.y)),
                    (u.y = p.y * M.y),
                    (b.mapSize.y = p.y))),
                null !== b.map ||
                  b.isPointLightShadow ||
                  3 !== this.type ||
                  ((M = { minFilter: 1006, magFilter: 1006, format: 1023 }),
                  (b.map = new c(u.x, u.y, M)),
                  (b.map.texture.name = x.name + ".shadowMap"),
                  (b.mapPass = new c(u.x, u.y, M)),
                  b.camera.updateProjectionMatrix()),
                null === b.map &&
                  ((M = { minFilter: 1003, magFilter: 1003, format: 1023 }),
                  (b.map = new c(u.x, u.y, M)),
                  (b.map.texture.name = x.name + ".shadowMap"),
                  b.camera.updateProjectionMatrix()),
                e.setRenderTarget(b.map),
                e.clear(),
                (M = b.getViewportCount());
              for (var S = 0; S < M; S++) {
                var T = b.getViewport(S);
                d.set(p.x * T.x, p.y * T.y, p.x * T.z, p.y * T.w),
                  m.viewport(d),
                  b.updateMatrices(x, S),
                  (h = b.getFrustum()),
                  l(r, a, b.camera, x, this.type);
              }
              b.isPointLightShadow ||
                3 !== this.type ||
                ((x = b),
                (b = a),
                (M = t.update(_)),
                ($.uniforms.shadow_pass.value = x.map.texture),
                ($.uniforms.resolution.value = x.mapSize),
                ($.uniforms.radius.value = x.radius),
                e.setRenderTarget(x.mapPass),
                e.clear(),
                e.renderBufferDirect(b, null, M, $, _, null),
                (y.uniforms.shadow_pass.value = x.mapPass.texture),
                (y.uniforms.resolution.value = x.mapSize),
                (y.uniforms.radius.value = x.radius),
                e.setRenderTarget(x.map),
                e.clear(),
                e.renderBufferDirect(b, null, M, y, _, null));
            }
          }
          (w.needsUpdate = !1), e.setRenderTarget(o, s, f);
        }
      });
  }
  function tm(e, t, i) {
    function n(t, i, n) {
      var r = new Uint8Array(4),
        a = e.createTexture();
      for (
        e.bindTexture(t, a),
          e.texParameteri(t, 10241, 9728),
          e.texParameteri(t, 10240, 9728),
          t = 0;
        t < n;
        t++
      )
        e.texImage2D(i + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return a;
    }
    function r(i, n) {
      (v[i] = 1),
        0 === $[i] && (e.enableVertexAttribArray(i), ($[i] = 1)),
        y[i] !== n &&
          ((d ? e : t.get("ANGLE_instanced_arrays"))[
            d ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
          ](i, n),
          (y[i] = n));
    }
    function a(t) {
      !0 !== x[t] && (e.enable(t), (x[t] = !0));
    }
    function o(t) {
      !1 !== x[t] && (e.disable(t), (x[t] = !1));
    }
    function c(t, i, n, r, s, c, l, h) {
      if (0 === t) w && (o(3042), (w = !1));
      else if ((w || (a(3042), (w = !0)), 5 !== t)) {
        if (t !== b || h !== R) {
          if (
            ((100 !== M || 100 !== E) &&
              (e.blendEquation(32774), (E = M = 100)),
            h)
          )
            switch (t) {
              case 1:
                e.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                e.blendFunc(1, 1);
                break;
              case 3:
                e.blendFuncSeparate(0, 0, 769, 771);
                break;
              case 4:
                e.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t);
            }
          else
            switch (t) {
              case 1:
                e.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                e.blendFunc(770, 1);
                break;
              case 3:
                e.blendFunc(0, 769);
                break;
              case 4:
                e.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t);
            }
          (A = L = T = S = null), (b = t), (R = h);
        }
      } else
        (s = s || i),
          (c = c || n),
          (l = l || r),
          (i !== M || s !== E) &&
            (e.blendEquationSeparate(V[i], V[s]), (M = i), (E = s)),
          (n !== S || r !== T || c !== L || l !== A) &&
            (e.blendFuncSeparate(k[n], k[r], k[c], k[l]),
            (S = n),
            (T = r),
            (L = c),
            (A = l)),
          (b = t),
          (R = null);
    }
    function l(t) {
      P !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (P = t));
    }
    function h(t) {
      0 !== t
        ? (a(2884),
          t !== C &&
            (1 === t
              ? e.cullFace(1029)
              : 2 === t
              ? e.cullFace(1028)
              : e.cullFace(1032)))
        : o(2884),
        (C = t);
    }
    function u(t, i, n) {
      t
        ? (a(32823),
          (I !== i || N !== n) && (e.polygonOffset(i, n), (I = i), (N = n)))
        : o(32823);
    }
    function p(t) {
      void 0 === t && (t = 33984 + z - 1),
        U !== t && (e.activeTexture(t), (U = t));
    }
    var d = i.isWebGL2,
      f = new (function () {
        var t = !1,
          i = new s(),
          n = null,
          r = new s(0, 0, 0, 0);
        return {
          setMask: function (i) {
            n === i || t || (e.colorMask(i, i, i, i), (n = i));
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t, n, a, o, s) {
            !0 === s && ((t *= o), (n *= o), (a *= o)),
              i.set(t, n, a, o),
              !1 === r.equals(i) && (e.clearColor(t, n, a, o), r.copy(i));
          },
          reset: function () {
            (t = !1), (n = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      m = new (function () {
        var t = !1,
          i = null,
          n = null,
          r = null;
        return {
          setTest: function (e) {
            e ? a(2929) : o(2929);
          },
          setMask: function (n) {
            i === n || t || (e.depthMask(n), (i = n));
          },
          setFunc: function (t) {
            if (n !== t) {
              if (t)
                switch (t) {
                  case 0:
                    e.depthFunc(512);
                    break;
                  case 1:
                    e.depthFunc(519);
                    break;
                  case 2:
                    e.depthFunc(513);
                    break;
                  case 3:
                  default:
                    e.depthFunc(515);
                    break;
                  case 4:
                    e.depthFunc(514);
                    break;
                  case 5:
                    e.depthFunc(518);
                    break;
                  case 6:
                    e.depthFunc(516);
                    break;
                  case 7:
                    e.depthFunc(517);
                }
              else e.depthFunc(515);
              n = t;
            }
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t) {
            r !== t && (e.clearDepth(t), (r = t));
          },
          reset: function () {
            (t = !1), (r = n = i = null);
          },
        };
      })(),
      g = new (function () {
        var t = !1,
          i = null,
          n = null,
          r = null,
          s = null,
          c = null,
          l = null,
          h = null,
          u = null;
        return {
          setTest: function (e) {
            t || (e ? a(2960) : o(2960));
          },
          setMask: function (n) {
            i === n || t || (e.stencilMask(n), (i = n));
          },
          setFunc: function (t, i, a) {
            (n !== t || r !== i || s !== a) &&
              (e.stencilFunc(t, i, a), (n = t), (r = i), (s = a));
          },
          setOp: function (t, i, n) {
            (c !== t || l !== i || h !== n) &&
              (e.stencilOp(t, i, n), (c = t), (l = i), (h = n));
          },
          setLocked: function (e) {
            t = e;
          },
          setClear: function (t) {
            u !== t && (e.clearStencil(t), (u = t));
          },
          reset: function () {
            (t = !1), (u = h = l = c = s = r = n = i = null);
          },
        };
      })();
    i = e.getParameter(34921);
    var v = new Uint8Array(i),
      $ = new Uint8Array(i),
      y = new Uint8Array(i),
      x = {},
      _ = null,
      w = null,
      b = null,
      M = null,
      S = null,
      T = null,
      E = null,
      L = null,
      A = null,
      R = !1,
      P = null,
      C = null,
      D = null,
      I = null,
      N = null,
      z = e.getParameter(35661),
      B = !1;
    (i = 0),
      -1 !== (i = e.getParameter(7938)).indexOf("WebGL")
        ? (B = 1 <= (i = parseFloat(/^WebGL ([0-9])/.exec(i)[1])))
        : -1 !== i.indexOf("OpenGL ES") &&
          (B = 2 <= (i = parseFloat(/^OpenGL ES ([0-9])/.exec(i)[1])));
    var U = null,
      F = {},
      G = new s(),
      H = new s(),
      O = {};
    (O[3553] = n(3553, 3553, 1)),
      (O[34067] = n(34067, 34069, 6)),
      f.setClear(0, 0, 0, 1),
      m.setClear(1),
      g.setClear(0),
      a(2929),
      m.setFunc(3),
      l(!1),
      h(1),
      a(2884),
      c(0);
    var V = { 100: 32774, 101: 32778, 102: 32779 };
    d
      ? ((V[103] = 32775), (V[104] = 32776))
      : null !== (i = t.get("EXT_blend_minmax")) &&
        ((V[103] = i.MIN_EXT), (V[104] = i.MAX_EXT));
    var k = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773,
    };
    return {
      buffers: { color: f, depth: m, stencil: g },
      initAttributes: function () {
        for (var e = 0, t = v.length; e < t; e++) v[e] = 0;
      },
      enableAttribute: function (e) {
        r(e, 0);
      },
      enableAttributeAndDivisor: r,
      disableUnusedAttributes: function () {
        for (var t = 0, i = $.length; t !== i; ++t)
          $[t] !== v[t] && (e.disableVertexAttribArray(t), ($[t] = 0));
      },
      enable: a,
      disable: o,
      useProgram: function (t) {
        return _ !== t && (e.useProgram(t), (_ = t), !0);
      },
      setBlending: c,
      setMaterial: function (e, t) {
        2 === e.side ? o(2884) : a(2884);
        var i = 1 === e.side;
        t && (i = !i),
          l(i),
          1 === e.blending && !1 === e.transparent
            ? c(0)
            : c(
                e.blending,
                e.blendEquation,
                e.blendSrc,
                e.blendDst,
                e.blendEquationAlpha,
                e.blendSrcAlpha,
                e.blendDstAlpha,
                e.premultipliedAlpha
              ),
          m.setFunc(e.depthFunc),
          m.setTest(e.depthTest),
          m.setMask(e.depthWrite),
          f.setMask(e.colorWrite),
          (t = e.stencilWrite),
          g.setTest(t),
          t &&
            (g.setMask(e.stencilWriteMask),
            g.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            g.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
          u(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits);
      },
      setFlipSided: l,
      setCullFace: h,
      setLineWidth: function (t) {
        t !== D && (B && e.lineWidth(t), (D = t));
      },
      setPolygonOffset: u,
      setScissorTest: function (e) {
        e ? a(3089) : o(3089);
      },
      activeTexture: p,
      bindTexture: function (t, i) {
        null === U && p();
        var n = F[U];
        void 0 === n && ((n = { type: void 0, texture: void 0 }), (F[U] = n)),
          (n.type !== t || n.texture !== i) &&
            (e.bindTexture(t, i || O[t]), (n.type = t), (n.texture = i));
      },
      unbindTexture: function () {
        var t = F[U];
        void 0 !== t &&
          void 0 !== t.type &&
          (e.bindTexture(t.type, null),
          (t.type = void 0),
          (t.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          e.compressedTexImage2D.apply(e, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          e.texImage2D.apply(e, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          e.texImage3D.apply(e, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (t) {
        !1 === G.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), G.copy(t));
      },
      viewport: function (t) {
        !1 === H.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), H.copy(t));
      },
      reset: function () {
        for (var t = 0; t < $.length; t++)
          1 === $[t] && (e.disableVertexAttribArray(t), ($[t] = 0));
        (x = {}),
          (U = null),
          (F = {}),
          (C = P = b = _ = null),
          f.reset(),
          m.reset(),
          g.reset();
      },
    };
  }
  function tg(e, t, i, n, r, a, o) {
    function s(e, t) {
      return C
        ? new OffscreenCanvas(e, t)
        : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
    function c(e, t, i, n) {
      var r = 1;
      if (
        ((e.width > n || e.height > n) && (r = n / Math.max(e.width, e.height)),
        1 > r || !0 === t)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            e instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            e instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
        )
          return (
            (t = (n = t ? rH.floorPowerOfTwo : Math.floor)(r * e.width)),
            (r = n(r * e.height)),
            void 0 === S && (S = s(t, r)),
            ((i = i ? s(t, r) : S).width = t),
            (i.height = r),
            i.getContext("2d").drawImage(e, 0, 0, t, r),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                e.width +
                "x" +
                e.height +
                ") to (" +
                t +
                "x" +
                r +
                ")."
            ),
            i
          );
        "data" in e &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              e.width +
              "x" +
              e.height +
              ")."
          );
      }
      return e;
    }
    function l(e) {
      return rH.isPowerOfTwo(e.width) && rH.isPowerOfTwo(e.height);
    }
    function h(e, t) {
      return (
        e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
      );
    }
    function u(t, i, r, a) {
      e.generateMipmap(t),
        (n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E);
    }
    function p(i, n, r) {
      if (!1 === T) return n;
      if (null !== i) {
        if (void 0 !== e[i]) return e[i];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            i +
            "'"
        );
      }
      return (
        (i = n),
        6403 === n &&
          (5126 === r && (i = 33326),
          5131 === r && (i = 33325),
          5121 === r && (i = 33321)),
        6407 === n &&
          (5126 === r && (i = 34837),
          5131 === r && (i = 34843),
          5121 === r && (i = 32849)),
        6408 === n &&
          (5126 === r && (i = 34836),
          5131 === r && (i = 34842),
          5121 === r && (i = 32856)),
        33325 === i || 33326 === i || 34842 === i || 34836 === i
          ? t.get("EXT_color_buffer_float")
          : (34843 === i || 34837 === i) &&
            console.warn(
              "THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."
            ),
        i
      );
    }
    function d(e) {
      return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729;
    }
    function f(t) {
      (t = t.target).removeEventListener("dispose", f);
      var i = n.get(t);
      void 0 !== i.__webglInit &&
        (e.deleteTexture(i.__webglTexture), n.remove(t)),
        t.isVideoTexture && P.delete(t),
        o.memory.textures--;
    }
    function m(t) {
      (t = t.target).removeEventListener("dispose", m);
      var i = n.get(t),
        r = n.get(t.texture);
      if (t) {
        if (
          (void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture),
          t.depthTexture && t.depthTexture.dispose(),
          t.isWebGLRenderTargetCube)
        )
          for (r = 0; 6 > r; r++)
            e.deleteFramebuffer(i.__webglFramebuffer[r]),
              i.__webglDepthbuffer &&
                e.deleteRenderbuffer(i.__webglDepthbuffer[r]);
        else
          e.deleteFramebuffer(i.__webglFramebuffer),
            i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
        if (t.isWebGLMultiviewRenderTarget) {
          e.deleteTexture(i.__webglColorTexture),
            e.deleteTexture(i.__webglDepthStencilTexture),
            (o.memory.textures -= 2),
            (r = 0);
          for (var a = i.__webglViewFramebuffers.length; r < a; r++)
            e.deleteFramebuffer(i.__webglViewFramebuffers[r]);
        }
        n.remove(t.texture), n.remove(t);
      }
      o.memory.textures--;
    }
    function g(e, t) {
      var r = n.get(e);
      if (e.isVideoTexture) {
        var a = o.render.frame;
        P.get(e) !== a && (P.set(e, a), e.update());
      }
      if (0 < e.version && r.__version !== e.version) {
        if (void 0 === (a = e.image))
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is undefined"
          );
        else if (!1 === a.complete)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        else {
          _(r, e, t);
          return;
        }
      }
      i.activeTexture(33984 + t), i.bindTexture(3553, r.__webglTexture);
    }
    function v(t, r) {
      if (6 === t.image.length) {
        var o = n.get(t);
        if (0 < t.version && o.__version !== t.version) {
          x(o, t),
            i.activeTexture(33984 + r),
            i.bindTexture(34067, o.__webglTexture),
            e.pixelStorei(37440, t.flipY);
          var s = t && t.isCompressedTexture;
          r = t.image[0] && t.image[0].isDataTexture;
          for (var d = [], f = 0; 6 > f; f++)
            d[f] =
              s || r
                ? r
                  ? t.image[f].image
                  : t.image[f]
                : c(t.image[f], !1, !0, L);
          var m = d[0],
            g = l(m) || T,
            v = a.convert(t.format),
            $ = a.convert(t.type),
            _ = p(t.internalFormat, v, $);
          if ((y(34067, t, g), s)) {
            for (f = 0; 6 > f; f++) {
              var w = d[f].mipmaps;
              for (s = 0; s < w.length; s++) {
                var b = w[s];
                1023 !== t.format && 1022 !== t.format
                  ? null !== v
                    ? i.compressedTexImage2D(
                        34069 + f,
                        s,
                        _,
                        b.width,
                        b.height,
                        0,
                        b.data
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                      )
                  : i.texImage2D(
                      34069 + f,
                      s,
                      _,
                      b.width,
                      b.height,
                      0,
                      v,
                      $,
                      b.data
                    );
              }
            }
            o.__maxMipLevel = w.length - 1;
          } else {
            for (f = 0, w = t.mipmaps; 6 > f; f++)
              if (r)
                for (
                  i.texImage2D(
                    34069 + f,
                    0,
                    _,
                    d[f].width,
                    d[f].height,
                    0,
                    v,
                    $,
                    d[f].data
                  ),
                    s = 0;
                  s < w.length;
                  s++
                )
                  (b = (b = w[s]).image[f].image),
                    i.texImage2D(
                      34069 + f,
                      s + 1,
                      _,
                      b.width,
                      b.height,
                      0,
                      v,
                      $,
                      b.data
                    );
              else
                for (
                  i.texImage2D(34069 + f, 0, _, v, $, d[f]), s = 0;
                  s < w.length;
                  s++
                )
                  (b = w[s]),
                    i.texImage2D(34069 + f, s + 1, _, v, $, b.image[f]);
            o.__maxMipLevel = w.length;
          }
          h(t, g) && u(34067, t, m.width, m.height),
            (o.__version = t.version),
            t.onUpdate && t.onUpdate(t);
        } else
          i.activeTexture(33984 + r), i.bindTexture(34067, o.__webglTexture);
      }
    }
    function $(e, t) {
      i.activeTexture(33984 + t), i.bindTexture(34067, n.get(e).__webglTexture);
    }
    function y(i, a, o) {
      o
        ? (e.texParameteri(i, 10242, N[a.wrapS]),
          e.texParameteri(i, 10243, N[a.wrapT]),
          (32879 !== i && 35866 !== i) || e.texParameteri(i, 32882, N[a.wrapR]),
          e.texParameteri(i, 10240, z[a.magFilter]),
          e.texParameteri(i, 10241, z[a.minFilter]))
        : (e.texParameteri(i, 10242, 33071),
          e.texParameteri(i, 10243, 33071),
          (32879 !== i && 35866 !== i) || e.texParameteri(i, 32882, 33071),
          (1001 === a.wrapS && 1001 === a.wrapT) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          e.texParameteri(i, 10240, d(a.magFilter)),
          e.texParameteri(i, 10241, d(a.minFilter)),
          1003 !== a.minFilter &&
            1006 !== a.minFilter &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
        (o = t.get("EXT_texture_filter_anisotropic")) &&
          (1015 !== a.type || null !== t.get("OES_texture_float_linear")) &&
          (1016 !== a.type ||
            null !== (T || t.get("OES_texture_half_float_linear"))) &&
          (1 < a.anisotropy || n.get(a).__currentAnisotropy) &&
          (e.texParameterf(
            i,
            o.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(a.anisotropy, r.getMaxAnisotropy())
          ),
          (n.get(a).__currentAnisotropy = a.anisotropy));
    }
    function x(t, i) {
      void 0 === t.__webglInit &&
        ((t.__webglInit = !0),
        i.addEventListener("dispose", f),
        (t.__webglTexture = e.createTexture()),
        o.memory.textures++);
    }
    function _(t, n, r) {
      var o = 3553;
      n.isDataTexture2DArray && (o = 35866),
        n.isDataTexture3D && (o = 32879),
        x(t, n),
        i.activeTexture(33984 + r),
        i.bindTexture(o, t.__webglTexture),
        e.pixelStorei(37440, n.flipY),
        e.pixelStorei(37441, n.premultiplyAlpha),
        e.pixelStorei(3317, n.unpackAlignment),
        (r =
          (r =
            !T &&
            (1001 !== n.wrapS ||
              1001 !== n.wrapT ||
              (1003 !== n.minFilter && 1006 !== n.minFilter))) &&
          !1 === l(n.image)),
        (r = c(n.image, r, !1, A));
      var s = l(r) || T,
        d = a.convert(n.format),
        f = a.convert(n.type),
        m = p(n.internalFormat, d, f);
      y(o, n, s);
      var g = n.mipmaps;
      if (n.isDepthTexture) {
        if (((m = 6402), 1015 === n.type)) {
          if (!1 === T)
            throw Error("Float Depth Texture only supported in WebGL2.0");
          m = 36012;
        } else T && (m = 33189);
        1026 === n.format &&
          6402 === m &&
          1012 !== n.type &&
          1014 !== n.type &&
          (console.warn(
            "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
          ),
          (n.type = 1012),
          (f = a.convert(n.type))),
          1027 === n.format &&
            ((m = 34041),
            1020 !== n.type &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (n.type = 1020),
              (f = a.convert(n.type)))),
          i.texImage2D(3553, 0, m, r.width, r.height, 0, d, f, null);
      } else if (n.isDataTexture) {
        if (0 < g.length && s) {
          for (var v = 0, $ = g.length; v < $; v++) {
            var _ = g[v];
            i.texImage2D(3553, v, m, _.width, _.height, 0, d, f, _.data);
          }
          (n.generateMipmaps = !1), (t.__maxMipLevel = g.length - 1);
        } else
          i.texImage2D(3553, 0, m, r.width, r.height, 0, d, f, r.data),
            (t.__maxMipLevel = 0);
      } else if (n.isCompressedTexture) {
        for (v = 0, $ = g.length; v < $; v++)
          (_ = g[v]),
            1023 !== n.format && 1022 !== n.format
              ? null !== d
                ? i.compressedTexImage2D(
                    3553,
                    v,
                    m,
                    _.width,
                    _.height,
                    0,
                    _.data
                  )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : i.texImage2D(3553, v, m, _.width, _.height, 0, d, f, _.data);
        t.__maxMipLevel = g.length - 1;
      } else if (n.isDataTexture2DArray)
        i.texImage3D(35866, 0, m, r.width, r.height, r.depth, 0, d, f, r.data),
          (t.__maxMipLevel = 0);
      else if (n.isDataTexture3D)
        i.texImage3D(32879, 0, m, r.width, r.height, r.depth, 0, d, f, r.data),
          (t.__maxMipLevel = 0);
      else if (0 < g.length && s) {
        for (v = 0, $ = g.length; v < $; v++)
          (_ = g[v]), i.texImage2D(3553, v, m, d, f, _);
        (n.generateMipmaps = !1), (t.__maxMipLevel = g.length - 1);
      } else i.texImage2D(3553, 0, m, d, f, r), (t.__maxMipLevel = 0);
      h(n, s) && u(o, n, r.width, r.height),
        (t.__version = n.version),
        n.onUpdate && n.onUpdate(n);
    }
    function w(t, r, o, s) {
      var c = a.convert(r.texture.format),
        l = a.convert(r.texture.type),
        h = p(r.texture.internalFormat, c, l);
      i.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null),
        e.bindFramebuffer(36160, t),
        e.framebufferTexture2D(36160, o, s, n.get(r.texture).__webglTexture, 0),
        e.bindFramebuffer(36160, null);
    }
    function b(t, i, n) {
      if ((e.bindRenderbuffer(36161, t), i.depthBuffer && !i.stencilBuffer))
        n
          ? ((n = M(i)),
            e.renderbufferStorageMultisample(
              36161,
              n,
              33189,
              i.width,
              i.height
            ))
          : e.renderbufferStorage(36161, 33189, i.width, i.height),
          e.framebufferRenderbuffer(36160, 36096, 36161, t);
      else if (i.depthBuffer && i.stencilBuffer)
        n
          ? ((n = M(i)),
            e.renderbufferStorageMultisample(
              36161,
              n,
              35056,
              i.width,
              i.height
            ))
          : e.renderbufferStorage(36161, 34041, i.width, i.height),
          e.framebufferRenderbuffer(36160, 33306, 36161, t);
      else {
        t = a.convert(i.texture.format);
        var r = a.convert(i.texture.type);
        (t = p(i.texture.internalFormat, t, r)),
          n
            ? ((n = M(i)),
              e.renderbufferStorageMultisample(36161, n, t, i.width, i.height))
            : e.renderbufferStorage(36161, t, i.width, i.height);
      }
      e.bindRenderbuffer(36161, null);
    }
    function M(e) {
      return T && e.isWebGLMultisampleRenderTarget ? Math.min(R, e.samples) : 0;
    }
    var S,
      T = r.isWebGL2,
      E = r.maxTextures,
      L = r.maxCubemapSize,
      A = r.maxTextureSize,
      R = r.maxSamples,
      P = new WeakMap(),
      C = !1;
    try {
      C =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (D) {}
    var I = 0,
      N = { 1e3: 10497, 1001: 33071, 1002: 33648 },
      z = {
        1003: 9728,
        1004: 9984,
        1005: 9986,
        1006: 9729,
        1007: 9985,
        1008: 9987,
      },
      B = !1,
      U = !1;
    (this.allocateTextureUnit = function () {
      var e = I;
      return (
        e >= E &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              e +
              " texture units while this GPU supports only " +
              E
          ),
        (I += 1),
        e
      );
    }),
      (this.resetTextureUnits = function () {
        I = 0;
      }),
      (this.setTexture2D = g),
      (this.setTexture2DArray = function (e, t) {
        var r = n.get(e);
        0 < e.version && r.__version !== e.version
          ? _(r, e, t)
          : (i.activeTexture(33984 + t),
            i.bindTexture(35866, r.__webglTexture));
      }),
      (this.setTexture3D = function (e, t) {
        var r = n.get(e);
        0 < e.version && r.__version !== e.version
          ? _(r, e, t)
          : (i.activeTexture(33984 + t),
            i.bindTexture(32879, r.__webglTexture));
      }),
      (this.setTextureCube = v),
      (this.setTextureCubeDynamic = $),
      (this.setupRenderTarget = function (r) {
        var s = n.get(r),
          c = n.get(r.texture);
        r.addEventListener("dispose", m),
          (c.__webglTexture = e.createTexture()),
          o.memory.textures++;
        var d = !0 === r.isWebGLRenderTargetCube,
          f = !0 === r.isWebGLMultisampleRenderTarget,
          v = !0 === r.isWebGLMultiviewRenderTarget,
          $ = l(r) || T;
        if (d) {
          s.__webglFramebuffer = [];
          for (var x = 0; 6 > x; x++)
            s.__webglFramebuffer[x] = e.createFramebuffer();
        } else if (((s.__webglFramebuffer = e.createFramebuffer()), f)) {
          if (T) {
            (s.__webglMultisampledFramebuffer = e.createFramebuffer()),
              (s.__webglColorRenderbuffer = e.createRenderbuffer()),
              e.bindRenderbuffer(36161, s.__webglColorRenderbuffer),
              (f = a.convert(r.texture.format));
            var _ = a.convert(r.texture.type);
            (f = p(r.texture.internalFormat, f, _)),
              (_ = M(r)),
              e.renderbufferStorageMultisample(36161, _, f, r.width, r.height),
              e.bindFramebuffer(36160, s.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(
                36160,
                36064,
                36161,
                s.__webglColorRenderbuffer
              ),
              e.bindRenderbuffer(36161, null),
              r.depthBuffer &&
                ((s.__webglDepthRenderbuffer = e.createRenderbuffer()),
                b(s.__webglDepthRenderbuffer, r, !0)),
              e.bindFramebuffer(36160, null);
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
            );
        } else if (v) {
          x = r.width;
          var S = r.height;
          (f = r.numViews), e.bindFramebuffer(36160, s.__webglFramebuffer);
          var E = t.get("OVR_multiview2");
          (o.memory.textures += 2),
            (_ = e.createTexture()),
            e.bindTexture(35866, _),
            e.texParameteri(35866, 10240, 9728),
            e.texParameteri(35866, 10241, 9728),
            e.texImage3D(35866, 0, 32856, x, S, f, 0, 6408, 5121, null),
            E.framebufferTextureMultiviewOVR(36160, 36064, _, 0, 0, f);
          var L = e.createTexture();
          for (
            e.bindTexture(35866, L),
              e.texParameteri(35866, 10240, 9728),
              e.texParameteri(35866, 10241, 9728),
              e.texImage3D(35866, 0, 35056, x, S, f, 0, 34041, 34042, null),
              E.framebufferTextureMultiviewOVR(36160, 33306, L, 0, 0, f),
              S = Array(f),
              x = 0;
            x < f;
            ++x
          )
            (S[x] = e.createFramebuffer()),
              e.bindFramebuffer(36160, S[x]),
              e.framebufferTextureLayer(36160, 36064, _, 0, x);
          (s.__webglColorTexture = _),
            (s.__webglDepthStencilTexture = L),
            (s.__webglViewFramebuffers = S),
            e.bindFramebuffer(36160, null),
            e.bindTexture(35866, null);
        }
        if (d) {
          for (
            i.bindTexture(34067, c.__webglTexture),
              y(34067, r.texture, $),
              x = 0;
            6 > x;
            x++
          )
            w(s.__webglFramebuffer[x], r, 36064, 34069 + x);
          h(r.texture, $) && u(34067, r.texture, r.width, r.height),
            i.bindTexture(34067, null);
        } else
          v ||
            (i.bindTexture(3553, c.__webglTexture),
            y(3553, r.texture, $),
            w(s.__webglFramebuffer, r, 36064, 3553),
            h(r.texture, $) && u(3553, r.texture, r.width, r.height),
            i.bindTexture(3553, null));
        if (r.depthBuffer) {
          if (
            ((s = n.get(r)),
            (c = !0 === r.isWebGLRenderTargetCube),
            r.depthTexture)
          ) {
            if (c)
              throw Error(
                "target.depthTexture not supported in Cube render targets"
              );
            if (r && r.isWebGLRenderTargetCube)
              throw Error(
                "Depth Texture with cube render targets is not supported"
              );
            if (
              (e.bindFramebuffer(36160, s.__webglFramebuffer),
              !r.depthTexture || !r.depthTexture.isDepthTexture)
            )
              throw Error(
                "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
              );
            if (
              ((n.get(r.depthTexture).__webglTexture &&
                r.depthTexture.image.width === r.width &&
                r.depthTexture.image.height === r.height) ||
                ((r.depthTexture.image.width = r.width),
                (r.depthTexture.image.height = r.height),
                (r.depthTexture.needsUpdate = !0)),
              g(r.depthTexture, 0),
              (s = n.get(r.depthTexture).__webglTexture),
              1026 === r.depthTexture.format)
            )
              e.framebufferTexture2D(36160, 36096, 3553, s, 0);
            else if (1027 === r.depthTexture.format)
              e.framebufferTexture2D(36160, 33306, 3553, s, 0);
            else throw Error("Unknown depthTexture format");
          } else if (c)
            for (s.__webglDepthbuffer = [], c = 0; 6 > c; c++)
              e.bindFramebuffer(36160, s.__webglFramebuffer[c]),
                (s.__webglDepthbuffer[c] = e.createRenderbuffer()),
                b(s.__webglDepthbuffer[c], r);
          else
            e.bindFramebuffer(36160, s.__webglFramebuffer),
              (s.__webglDepthbuffer = e.createRenderbuffer()),
              b(s.__webglDepthbuffer, r);
          e.bindFramebuffer(36160, null);
        }
      }),
      (this.updateRenderTargetMipmap = function (e) {
        var t = e.texture,
          r = l(e) || T;
        if (h(t, r)) {
          r = e.isWebGLRenderTargetCube ? 34067 : 3553;
          var a = n.get(t).__webglTexture;
          i.bindTexture(r, a),
            u(r, t, e.width, e.height),
            i.bindTexture(r, null);
        }
      }),
      (this.updateMultisampleRenderTarget = function (t) {
        if (t.isWebGLMultisampleRenderTarget) {
          if (T) {
            var i = n.get(t);
            e.bindFramebuffer(36008, i.__webglMultisampledFramebuffer),
              e.bindFramebuffer(36009, i.__webglFramebuffer),
              (i = t.width);
            var r = t.height,
              a = 16384;
            t.depthBuffer && (a |= 256),
              t.stencilBuffer && (a |= 1024),
              e.blitFramebuffer(0, 0, i, r, 0, 0, i, r, a, 9728);
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
            );
        }
      }),
      (this.safeSetTexture2D = function (e, t) {
        e &&
          e.isWebGLRenderTarget &&
          (!1 === B &&
            (console.warn(
              "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
            ),
            (B = !0)),
          (e = e.texture)),
          g(e, t);
      }),
      (this.safeSetTextureCube = function (e, t) {
        e &&
          e.isWebGLRenderTargetCube &&
          (!1 === U &&
            (console.warn(
              "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
            ),
            (U = !0)),
          (e = e.texture)),
          (e && e.isCubeTexture) ||
          (Array.isArray(e.image) && 6 === e.image.length)
            ? v(e, t)
            : $(e, t);
      });
  }
  function tv(e, t, i) {
    var n = i.isWebGL2;
    return {
      convert: function (e) {
        if (1009 === e) return 5121;
        if (1017 === e) return 32819;
        if (1018 === e) return 32820;
        if (1019 === e) return 33635;
        if (1010 === e) return 5120;
        if (1011 === e) return 5122;
        if (1012 === e) return 5123;
        if (1013 === e) return 5124;
        if (1014 === e) return 5125;
        if (1015 === e) return 5126;
        if (1016 === e) {
          if (n) return 5131;
          var i = t.get("OES_texture_half_float");
          return null !== i ? i.HALF_FLOAT_OES : null;
        }
        if (1021 === e) return 6406;
        if (1022 === e) return 6407;
        if (1023 === e) return 6408;
        if (1024 === e) return 6409;
        if (1025 === e) return 6410;
        if (1026 === e) return 6402;
        if (1027 === e) return 34041;
        if (1028 === e) return 6403;
        if (1029 === e) return 36244;
        if (1030 === e) return 33319;
        if (1031 === e) return 33320;
        if (1032 === e) return 36248;
        if (1033 === e) return 36249;
        if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
          if (null === (i = t.get("WEBGL_compressed_texture_s3tc")))
            return null;
          if (33776 === e) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === e) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === e) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === e) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
          if (null === (i = t.get("WEBGL_compressed_texture_pvrtc")))
            return null;
          if (35840 === e) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === e) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === e) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === e) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        return 36196 === e
          ? null !== (i = t.get("WEBGL_compressed_texture_etc1"))
            ? i.COMPRESSED_RGB_ETC1_WEBGL
            : null
          : 37808 === e ||
            37809 === e ||
            37810 === e ||
            37811 === e ||
            37812 === e ||
            37813 === e ||
            37814 === e ||
            37815 === e ||
            37816 === e ||
            37817 === e ||
            37818 === e ||
            37819 === e ||
            37820 === e ||
            37821 === e
          ? null !== (i = t.get("WEBGL_compressed_texture_astc"))
            ? e
            : null
          : 1020 === e
          ? n
            ? 34042
            : null !== (i = t.get("WEBGL_depth_texture"))
            ? i.UNSIGNED_INT_24_8_WEBGL
            : null
          : void 0;
      },
    };
  }
  function t$(e, t, i, n) {
    c.call(this, e, t, n),
      (this.stencilBuffer = this.depthBuffer = !1),
      (this.numViews = i);
  }
  function ty(e, t) {
    function n(e) {
      return e.isArrayCamera ? e.cameras : ((l[0] = e), l);
    }
    var r,
      o,
      s,
      c,
      l,
      u,
      p,
      d = e.extensions,
      f = e.properties,
      m = 0;
    (this.isAvailable = function () {
      if (void 0 === p) {
        var e = d.get("OVR_multiview2");
        if ((p = null !== e && !1 === t.getContextAttributes().antialias))
          for (
            m = t.getParameter(e.MAX_VIEWS_OVR),
              r = new t$(0, 0, 2),
              u = new i(),
              c = [],
              s = [],
              l = [],
              e = 0;
            e < m;
            e++
          )
            (c[e] = new h()), (s[e] = new a());
      }
      return p;
    }),
      (this.attachCamera = function (t) {
        if (
          !1 !==
          (function e(t) {
            if (void 0 === t.isArrayCamera) return !0;
            if ((t = t.cameras).length > m) return !1;
            for (var i = 1, n = t.length; i < n; i++)
              if (
                t[0].viewport.z !== t[i].viewport.z ||
                t[0].viewport.w !== t[i].viewport.w
              )
                return !1;
            return !0;
          })(t)
        ) {
          if (
            ((o = e.getRenderTarget())
              ? u.set(o.width, o.height)
              : e.getDrawingBufferSize(u),
            t.isArrayCamera)
          ) {
            var i = t.cameras[0].viewport;
            r.setSize(i.z, i.w), r.setNumViews(t.cameras.length);
          } else r.setSize(u.x, u.y), r.setNumViews(2);
          e.setRenderTarget(r);
        }
      }),
      (this.detachCamera = function (i) {
        if (r === e.getRenderTarget()) {
          e.setRenderTarget(o);
          var n = r,
            a = n.numViews,
            s = f.get(n).__webglViewFramebuffers,
            c = n.width;
          if (((n = n.height), i.isArrayCamera))
            for (var l = 0; l < a; l++) {
              var h = i.cameras[l].viewport,
                p = h.x,
                d = h.y,
                m = p + h.z;
              (h = d + h.w),
                t.bindFramebuffer(36008, s[l]),
                t.blitFramebuffer(0, 0, c, n, p, d, m, h, 16384, 9728);
            }
          else
            t.bindFramebuffer(36008, s[0]),
              t.blitFramebuffer(0, 0, c, n, 0, 0, u.x, u.y, 16384, 9728);
        }
      }),
      (this.updateCameraProjectionMatricesUniform = function (e, i) {
        e = n(e);
        for (var r = 0; r < e.length; r++) c[r].copy(e[r].projectionMatrix);
        i.setValue(t, "projectionMatrices", c);
      }),
      (this.updateCameraViewMatricesUniform = function (e, i) {
        e = n(e);
        for (var r = 0; r < e.length; r++) c[r].copy(e[r].matrixWorldInverse);
        i.setValue(t, "viewMatrices", c);
      }),
      (this.updateObjectMatricesUniforms = function (e, i, r) {
        i = n(i);
        for (var a = 0; a < i.length; a++)
          c[a].multiplyMatrices(i[a].matrixWorldInverse, e.matrixWorld),
            s[a].getNormalMatrix(c[a]);
        r.setValue(t, "modelViewMatrices", c),
          r.setValue(t, "normalMatrices", s);
      });
  }
  function tx(e) {
    Y.call(this), (this.cameras = e || []);
  }
  function t_() {
    d.call(this), (this.type = "Group");
  }
  function t8(e, t) {
    function i(e) {
      var t = m.get(e.inputSource);
      t && t.dispatchEvent({ type: e.type });
    }
    function n() {
      m.forEach(function (e, t) {
        e.dispatchEvent({ type: "disconnected", data: t }), (e.visible = !1);
      }),
        m.clear(),
        e.setFramebuffer(null),
        e.setRenderTarget(e.getRenderTarget()),
        w.stop(),
        l.dispatchEvent({ type: "sessionend" }),
        (l.isPresenting = !1);
    }
    function a(e) {
      (u = e),
        w.setContext(h),
        w.start(),
        l.dispatchEvent({ type: "sessionstart" }),
        (l.isPresenting = !0);
    }
    function o(e) {
      for (var t = h.inputSources, i = 0; i < f.length; i++) m.set(t[i], f[i]);
      for (i = 0; i < e.removed.length; i++) {
        t = e.removed[i];
        var n = m.get(t);
        n && (n.dispatchEvent({ type: "disconnected", data: t }), m.delete(t));
      }
      for (i = 0; i < e.added.length; i++)
        (t = e.added[i]),
          (n = m.get(t)) && n.dispatchEvent({ type: "connected", data: t });
    }
    function c(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.getInverse(e.matrixWorld);
    }
    var l = this,
      h = null,
      u = null,
      p = "local-floor",
      d = null,
      f = [],
      m = new Map(),
      g = new Y();
    g.layers.enable(1), (g.viewport = new s());
    var v = new Y();
    v.layers.enable(2), (v.viewport = new s());
    var $ = new tx([g, v]);
    $.layers.enable(1),
      $.layers.enable(2),
      (this.isPresenting = this.enabled = !1),
      (this.getController = function (e) {
        var t = f[e];
        return (
          void 0 === t &&
            (((t = new t_()).matrixAutoUpdate = !1),
            (t.visible = !1),
            (f[e] = t)),
          t
        );
      }),
      (this.setFramebufferScaleFactor = function () {}),
      (this.setReferenceSpaceType = function (e) {
        p = e;
      }),
      (this.getReferenceSpace = function () {
        return u;
      }),
      (this.getSession = function () {
        return h;
      }),
      (this.setSession = function (e) {
        null !== (h = e) &&
          (h.addEventListener("select", i),
          h.addEventListener("selectstart", i),
          h.addEventListener("selectend", i),
          h.addEventListener("squeeze", i),
          h.addEventListener("squeezestart", i),
          h.addEventListener("squeezeend", i),
          h.addEventListener("end", n),
          (e = t.getContextAttributes()),
          (e = new XRWebGLLayer(h, t, {
            antialias: e.antialias,
            alpha: e.alpha,
            depth: e.depth,
            stencil: e.stencil,
          })),
          h.updateRenderState({ baseLayer: e }),
          h.requestReferenceSpace(p).then(a),
          h.addEventListener("inputsourceschange", o));
      });
    var y = new r(),
      x = new r();
    this.getCamera = function (e) {
      var t = e.parent,
        i = $.cameras;
      c($, t);
      for (var n = 0; n < i.length; n++) c(i[n], t);
      for (
        e.matrixWorld.copy($.matrixWorld), e = e.children, n = 0, t = e.length;
        n < t;
        n++
      )
        e[n].updateMatrixWorld(!0);
      y.setFromMatrixPosition(g.matrixWorld),
        x.setFromMatrixPosition(v.matrixWorld),
        (n = y.distanceTo(x));
      var r = g.projectionMatrix.elements,
        a = v.projectionMatrix.elements,
        o = r[14] / (r[10] - 1);
      (e = r[14] / (r[10] + 1)),
        (t = (r[9] + 1) / r[5]),
        (i = (r[9] - 1) / r[5]);
      var s = (r[8] - 1) / r[0],
        l = (a[8] + 1) / a[0];
      return (
        (a = o * s),
        (r = o * l),
        (s = -((l = n / (-s + l)) * s)),
        g.matrixWorld.decompose($.position, $.quaternion, $.scale),
        $.translateX(s),
        $.translateZ(l),
        $.matrixWorld.compose($.position, $.quaternion, $.scale),
        $.matrixWorldInverse.getInverse($.matrixWorld),
        (o += l),
        (l = e + l),
        $.projectionMatrix.makePerspective(
          a - s,
          r + (n - s),
          ((t * e) / l) * o,
          ((i * e) / l) * o,
          o,
          l
        ),
        $
      );
    };
    var _ = null,
      w = new ee();
    w.setAnimationLoop(function (t, i) {
      if (null !== (d = i.getViewerPose(u))) {
        var n = d.views,
          r = h.renderState.baseLayer;
        e.setFramebuffer(r.framebuffer);
        for (var a = 0; a < n.length; a++) {
          var o = n[a],
            s = r.getViewport(o),
            c = $.cameras[a];
          c.matrix.fromArray(o.transform.inverse.matrix).getInverse(c.matrix),
            c.projectionMatrix.fromArray(o.projectionMatrix),
            c.viewport.set(s.x, s.y, s.width, s.height),
            0 === a && $.matrix.copy(c.matrix);
        }
      }
      for (a = 0, n = h.inputSources; a < f.length; a++) {
        if (
          ((r = f[a]),
          (o = n[a]) && null !== (o = i.getPose(o.targetRaySpace, u)))
        ) {
          r.matrix.fromArray(o.transform.matrix),
            r.matrix.decompose(r.position, r.rotation, r.scale),
            (r.visible = !0);
          continue;
        }
        r.visible = !1;
      }
      _ && _(t, i);
    }),
      (this.setAnimationLoop = function (e) {
        _ = e;
      }),
      (this.dispose = function () {});
  }
  function tw(e) {
    function t() {
      ($ = new ec(eI)),
        !1 === (y = new eo(eI, $, e)).isWebGL2 &&
          ($.get("WEBGL_depth_texture"),
          $.get("OES_texture_float"),
          $.get("OES_texture_half_float"),
          $.get("OES_texture_half_float_linear"),
          $.get("OES_standard_derivatives"),
          $.get("OES_element_index_uint"),
          $.get("ANGLE_instanced_arrays")),
        $.get("OES_texture_float_linear"),
        (I = new tv(eI, $, y)),
        (x = new tm(eI, $, y)).scissor(e_.copy(e1).multiplyScalar(eM).floor()),
        x.viewport(ex.copy(eE).multiplyScalar(eM).floor()),
        (_ = new eu(eI)),
        (w = new ti()),
        (b = new tg(eI, $, x, w, y, I, _)),
        (M = new et(eI)),
        (S = new el(eI, M, _)),
        (T = new ef(eI, S, M, _)),
        (P = new ed(eI)),
        (E = new tt(X, $, y)),
        (L = new to()),
        (A = new tu()),
        (R = new er(X, x, T, H)),
        (C = new ea(eI, $, _, y)),
        (D = new eh(eI, $, _, y)),
        (_.programs = E.programs),
        (X.capabilities = y),
        (X.extensions = $),
        (X.properties = w),
        (X.renderLists = L),
        (X.state = x),
        (X.info = _);
    }
    function n(e) {
      e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (Y = !0);
    }
    function a() {
      console.log("THREE.WebGLRenderer: Context Restored."), (Y = !1), t();
    }
    function o(e) {
      (e = e.target).removeEventListener("dispose", o), c(e), w.remove(e);
    }
    function c(e) {
      var t = w.get(e).program;
      (e.program = void 0), void 0 !== t && E.releaseProgram(t);
    }
    function l(e, t, i, n) {
      for (var r = 0, a = e.length; r < a; r++) {
        var o = e[r],
          s = o.object,
          c = o.geometry,
          l = void 0 === n ? o.material : n;
        if (((o = o.group), i.isArrayCamera)) {
          if (((ey = i), ez.enabled && eB.isAvailable())) u(s, t, i, c, l, o);
          else
            for (var h = i.cameras, p = 0, d = h.length; p < d; p++) {
              var f = h[p];
              s.layers.test(f.layers) &&
                (x.viewport(ex.copy(f.viewport)),
                q.setupLights(f),
                u(s, t, f, c, l, o));
            }
        } else (ey = null), u(s, t, i, c, l, o);
      }
    }
    function u(e, t, i, n, r, a) {
      if (
        (e.onBeforeRender(X, t, i, n, r, a),
        (q = A.get(t, ey || i)),
        e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        e.isImmediateRenderObject)
      ) {
        var o = d(i, t, r, e);
        x.setMaterial(r),
          (eg = v = null),
          (ev = !1),
          (function e(t, i) {
            t.render(function (e) {
              X.renderBufferImmediate(e, i);
            });
          })(e, o);
      } else X.renderBufferDirect(i, t, n, r, e, a);
      e.onAfterRender(X, t, i, n, r, a), (q = A.get(t, ey || i));
    }
    function p(e, t, i) {
      var n = w.get(e),
        r = q.state.lights,
        a = r.state.version;
      i = E.getParameters(
        e,
        r.state,
        q.state.shadowsArray,
        t,
        eA.numPlanes,
        eA.numIntersection,
        i
      );
      var s = E.getProgramCacheKey(e, i),
        l = n.program,
        h = !0;
      if (void 0 === l) e.addEventListener("dispose", o);
      else if (l.cacheKey !== s) c(e);
      else {
        if (n.lightsStateVersion !== a) n.lightsStateVersion = a;
        else if (void 0 !== i.shaderID) return;
        h = !1;
      }
      if (
        (h &&
          (i.shaderID
            ? ((s = ox[i.shaderID]),
              (n.shader = {
                name: e.type,
                uniforms: W(s.uniforms),
                vertexShader: s.vertexShader,
                fragmentShader: s.fragmentShader,
              }))
            : (n.shader = {
                name: e.type,
                uniforms: e.uniforms,
                vertexShader: e.vertexShader,
                fragmentShader: e.fragmentShader,
              }),
          e.onBeforeCompile(n.shader, X),
          (s = E.getProgramCacheKey(e, i)),
          (l = E.acquireProgram(e, n.shader, i, s)),
          (n.program = l),
          (n.environment = e.isMeshStandardMaterial ? t.environment : null),
          (n.outputEncoding = X.outputEncoding),
          (e.program = l)),
        (i = l.getAttributes()),
        e.morphTargets)
      )
        for (s = e.numSupportedMorphTargets = 0; s < X.maxMorphTargets; s++)
          0 <= i["morphTarget" + s] && e.numSupportedMorphTargets++;
      if (e.morphNormals)
        for (s = e.numSupportedMorphNormals = 0; s < X.maxMorphNormals; s++)
          0 <= i["morphNormal" + s] && e.numSupportedMorphNormals++;
      (i = n.shader.uniforms),
        ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
          ((n.numClippingPlanes = eA.numPlanes),
          (n.numIntersection = eA.numIntersection),
          (i.clippingPlanes = eA.uniform)),
        (n.fog = t.fog),
        (n.needsLights =
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && !0 === e.lights)),
        (n.lightsStateVersion = a),
        n.needsLights &&
          ((i.ambientLightColor.value = r.state.ambient),
          (i.lightProbe.value = r.state.probe),
          (i.directionalLights.value = r.state.directional),
          (i.spotLights.value = r.state.spot),
          (i.rectAreaLights.value = r.state.rectArea),
          (i.pointLights.value = r.state.point),
          (i.hemisphereLights.value = r.state.hemi),
          (i.directionalShadowMap.value = r.state.directionalShadowMap),
          (i.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (i.spotShadowMap.value = r.state.spotShadowMap),
          (i.spotShadowMatrix.value = r.state.spotShadowMatrix),
          (i.pointShadowMap.value = r.state.pointShadowMap),
          (i.pointShadowMatrix.value = r.state.pointShadowMatrix)),
        (e = n.program.getUniforms()),
        (e = e6.seqWithValue(e.seq, i)),
        (n.uniformsList = e);
    }
    function d(e, t, i, n) {
      b.resetTextureUnits();
      var r = t.fog,
        a = i.isMeshStandardMaterial ? t.environment : null,
        o = w.get(i),
        s = q.state.lights;
      eR &&
        (eP || e !== e$) &&
        eA.setState(
          i.clippingPlanes,
          i.clipIntersection,
          i.clipShadows,
          e,
          o,
          e === e$ && i.id === em
        ),
        i.version === o.__version &&
          (void 0 === o.program
            ? (i.needsUpdate = !0)
            : i.fog && o.fog !== r
            ? (i.needsUpdate = !0)
            : o.environment !== a
            ? (i.needsUpdate = !0)
            : o.needsLights && o.lightsStateVersion !== s.state.version
            ? (i.needsUpdate = !0)
            : void 0 === o.numClippingPlanes ||
              (o.numClippingPlanes === eA.numPlanes &&
                o.numIntersection === eA.numIntersection)
            ? o.outputEncoding !== X.outputEncoding && (i.needsUpdate = !0)
            : (i.needsUpdate = !0)),
        i.version !== o.__version && (p(i, t, n), (o.__version = i.version));
      var c = !1,
        l = !1,
        h = !1;
      s = (t = o.program).getUniforms();
      var u = o.shader.uniforms;
      if (
        (x.useProgram(t.program) && (h = l = c = !0),
        i.id !== em && ((em = i.id), (l = !0)),
        (c || e$ !== e) &&
          (0 < t.numMultiviewViews
            ? eB.updateCameraProjectionMatricesUniform(e, s)
            : s.setValue(eI, "projectionMatrix", e.projectionMatrix),
          y.logarithmicDepthBuffer &&
            s.setValue(
              eI,
              "logDepthBufFC",
              2 / (Math.log(e.far + 1) / Math.LN2)
            ),
          e$ !== e && ((e$ = e), (h = l = !0)),
          (i.isShaderMaterial ||
            i.isMeshPhongMaterial ||
            i.isMeshToonMaterial ||
            i.isMeshStandardMaterial ||
            i.envMap) &&
            void 0 !== (c = s.map.cameraPosition) &&
            c.setValue(eI, eD.setFromMatrixPosition(e.matrixWorld)),
          (i.isMeshPhongMaterial ||
            i.isMeshToonMaterial ||
            i.isMeshLambertMaterial ||
            i.isMeshBasicMaterial ||
            i.isMeshStandardMaterial ||
            i.isShaderMaterial) &&
            s.setValue(eI, "isOrthographic", !0 === e.isOrthographicCamera),
          (i.isMeshPhongMaterial ||
            i.isMeshToonMaterial ||
            i.isMeshLambertMaterial ||
            i.isMeshBasicMaterial ||
            i.isMeshStandardMaterial ||
            i.isShaderMaterial ||
            i.skinning) &&
            (0 < t.numMultiviewViews
              ? eB.updateCameraViewMatricesUniform(e, s)
              : s.setValue(eI, "viewMatrix", e.matrixWorldInverse))),
        i.skinning &&
          (s.setOptional(eI, n, "bindMatrix"),
          s.setOptional(eI, n, "bindMatrixInverse"),
          (c = n.skeleton)))
      ) {
        var d = c.bones;
        if (y.floatVertexTextures) {
          if (void 0 === c.boneTexture) {
            (d = Math.sqrt(4 * d.length)),
              (d = Math.max((d = rH.ceilPowerOfTwo(d)), 4));
            var f = new Float32Array(d * d * 4);
            f.set(c.boneMatrices);
            var v = new Q(f, d, d, 1023, 1015);
            (c.boneMatrices = f), (c.boneTexture = v), (c.boneTextureSize = d);
          }
          s.setValue(eI, "boneTexture", c.boneTexture, b),
            s.setValue(eI, "boneTextureSize", c.boneTextureSize);
        } else s.setOptional(eI, c, "boneMatrices");
      }
      if (
        ((l || o.receiveShadow !== n.receiveShadow) &&
          ((o.receiveShadow = n.receiveShadow),
          s.setValue(eI, "receiveShadow", n.receiveShadow)),
        l)
      ) {
        if (
          (s.setValue(eI, "toneMappingExposure", X.toneMappingExposure),
          s.setValue(eI, "toneMappingWhitePoint", X.toneMappingWhitePoint),
          o.needsLights &&
            ((l = h),
            (u.ambientLightColor.needsUpdate = l),
            (u.lightProbe.needsUpdate = l),
            (u.directionalLights.needsUpdate = l),
            (u.pointLights.needsUpdate = l),
            (u.spotLights.needsUpdate = l),
            (u.rectAreaLights.needsUpdate = l),
            (u.hemisphereLights.needsUpdate = l)),
          r &&
            i.fog &&
            (u.fogColor.value.copy(r.color),
            r.isFog
              ? ((u.fogNear.value = r.near), (u.fogFar.value = r.far))
              : r.isFogExp2 && (u.fogDensity.value = r.density)),
          i.isMeshBasicMaterial)
        )
          m(u, i);
        else if (i.isMeshLambertMaterial)
          m(u, i), i.emissiveMap && (u.emissiveMap.value = i.emissiveMap);
        else if (i.isMeshToonMaterial)
          m(u, i),
            u.specular.value.copy(i.specular),
            (u.shininess.value = Math.max(i.shininess, 1e-4)),
            i.gradientMap && (u.gradientMap.value = i.gradientMap),
            i.emissiveMap && (u.emissiveMap.value = i.emissiveMap),
            i.bumpMap &&
              ((u.bumpMap.value = i.bumpMap),
              (u.bumpScale.value = i.bumpScale),
              1 === i.side && (u.bumpScale.value *= -1)),
            i.normalMap &&
              ((u.normalMap.value = i.normalMap),
              u.normalScale.value.copy(i.normalScale),
              1 === i.side && u.normalScale.value.negate()),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias));
        else if (i.isMeshPhongMaterial)
          m(u, i),
            u.specular.value.copy(i.specular),
            (u.shininess.value = Math.max(i.shininess, 1e-4)),
            i.emissiveMap && (u.emissiveMap.value = i.emissiveMap),
            i.bumpMap &&
              ((u.bumpMap.value = i.bumpMap),
              (u.bumpScale.value = i.bumpScale),
              1 === i.side && (u.bumpScale.value *= -1)),
            i.normalMap &&
              ((u.normalMap.value = i.normalMap),
              u.normalScale.value.copy(i.normalScale),
              1 === i.side && u.normalScale.value.negate()),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias));
        else if (i.isMeshStandardMaterial)
          m(u, i, a),
            i.isMeshPhysicalMaterial
              ? (g(u, i, a),
                (u.reflectivity.value = i.reflectivity),
                (u.clearcoat.value = i.clearcoat),
                (u.clearcoatRoughness.value = i.clearcoatRoughness),
                i.sheen && u.sheen.value.copy(i.sheen),
                i.clearcoatNormalMap &&
                  (u.clearcoatNormalScale.value.copy(i.clearcoatNormalScale),
                  (u.clearcoatNormalMap.value = i.clearcoatNormalMap),
                  1 === i.side && u.clearcoatNormalScale.value.negate()),
                (u.transparency.value = i.transparency))
              : g(u, i, a);
        else if (i.isMeshMatcapMaterial)
          m(u, i),
            i.matcap && (u.matcap.value = i.matcap),
            i.bumpMap &&
              ((u.bumpMap.value = i.bumpMap),
              (u.bumpScale.value = i.bumpScale),
              1 === i.side && (u.bumpScale.value *= -1)),
            i.normalMap &&
              ((u.normalMap.value = i.normalMap),
              u.normalScale.value.copy(i.normalScale),
              1 === i.side && u.normalScale.value.negate()),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias));
        else if (i.isMeshDepthMaterial)
          m(u, i),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias));
        else if (i.isMeshDistanceMaterial)
          m(u, i),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias)),
            u.referencePosition.value.copy(i.referencePosition),
            (u.nearDistance.value = i.nearDistance),
            (u.farDistance.value = i.farDistance);
        else if (i.isMeshNormalMaterial)
          m(u, i),
            i.bumpMap &&
              ((u.bumpMap.value = i.bumpMap),
              (u.bumpScale.value = i.bumpScale),
              1 === i.side && (u.bumpScale.value *= -1)),
            i.normalMap &&
              ((u.normalMap.value = i.normalMap),
              u.normalScale.value.copy(i.normalScale),
              1 === i.side && u.normalScale.value.negate()),
            i.displacementMap &&
              ((u.displacementMap.value = i.displacementMap),
              (u.displacementScale.value = i.displacementScale),
              (u.displacementBias.value = i.displacementBias));
        else if (i.isLineBasicMaterial)
          u.diffuse.value.copy(i.color),
            (u.opacity.value = i.opacity),
            i.isLineDashedMaterial &&
              ((u.dashSize.value = i.dashSize),
              (u.totalSize.value = i.dashSize + i.gapSize),
              (u.scale.value = i.scale));
        else if (i.isPointsMaterial) {
          if (
            (u.diffuse.value.copy(i.color),
            (u.opacity.value = i.opacity),
            (u.size.value = i.size * eM),
            (u.scale.value = 0.5 * eb),
            i.map && (u.map.value = i.map),
            i.alphaMap && (u.alphaMap.value = i.alphaMap),
            i.map)
          )
            var $ = i.map;
          else i.alphaMap && ($ = i.alphaMap);
          void 0 !== $ &&
            (!0 === $.matrixAutoUpdate && $.updateMatrix(),
            u.uvTransform.value.copy($.matrix));
        } else if (i.isSpriteMaterial) {
          if (
            (u.diffuse.value.copy(i.color),
            (u.opacity.value = i.opacity),
            (u.rotation.value = i.rotation),
            i.map && (u.map.value = i.map),
            i.alphaMap && (u.alphaMap.value = i.alphaMap),
            i.map)
          )
            var _ = i.map;
          else i.alphaMap && (_ = i.alphaMap);
          void 0 !== _ &&
            (!0 === _.matrixAutoUpdate && _.updateMatrix(),
            u.uvTransform.value.copy(_.matrix));
        } else
          i.isShadowMaterial &&
            (u.color.value.copy(i.color), (u.opacity.value = i.opacity));
        void 0 !== u.ltc_1 && (u.ltc_1.value = oy.LTC_1),
          void 0 !== u.ltc_2 && (u.ltc_2.value = oy.LTC_2),
          e6.upload(eI, o.uniformsList, u, b),
          i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      }
      return (
        i.isShaderMaterial &&
          !0 === i.uniformsNeedUpdate &&
          (e6.upload(eI, o.uniformsList, u, b), (i.uniformsNeedUpdate = !1)),
        i.isSpriteMaterial && s.setValue(eI, "center", n.center),
        0 < t.numMultiviewViews
          ? eB.updateObjectMatricesUniforms(n, e, s)
          : (s.setValue(eI, "modelViewMatrix", n.modelViewMatrix),
            s.setValue(eI, "normalMatrix", n.normalMatrix)),
        s.setValue(eI, "modelMatrix", n.matrixWorld),
        t
      );
    }
    function m(e, t, i) {
      if (
        ((e.opacity.value = t.opacity),
        t.color && e.diffuse.value.copy(t.color),
        t.emissive &&
          e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),
        t.map && (e.map.value = t.map),
        t.alphaMap && (e.alphaMap.value = t.alphaMap),
        t.specularMap && (e.specularMap.value = t.specularMap),
        (i = t.envMap || i) &&
          ((e.envMap.value = i),
          (e.flipEnvMap.value = i.isCubeTexture ? -1 : 1),
          (e.reflectivity.value = t.reflectivity),
          (e.refractionRatio.value = t.refractionRatio),
          (e.maxMipLevel.value = w.get(i).__maxMipLevel)),
        t.lightMap &&
          ((e.lightMap.value = t.lightMap),
          (e.lightMapIntensity.value = t.lightMapIntensity)),
        t.aoMap &&
          ((e.aoMap.value = t.aoMap),
          (e.aoMapIntensity.value = t.aoMapIntensity)),
        t.map)
      )
        var n = t.map;
      else
        t.specularMap
          ? (n = t.specularMap)
          : t.displacementMap
          ? (n = t.displacementMap)
          : t.normalMap
          ? (n = t.normalMap)
          : t.bumpMap
          ? (n = t.bumpMap)
          : t.roughnessMap
          ? (n = t.roughnessMap)
          : t.metalnessMap
          ? (n = t.metalnessMap)
          : t.alphaMap
          ? (n = t.alphaMap)
          : t.emissiveMap && (n = t.emissiveMap);
      if (
        (void 0 !== n &&
          (n.isWebGLRenderTarget && (n = n.texture),
          !0 === n.matrixAutoUpdate && n.updateMatrix(),
          e.uvTransform.value.copy(n.matrix)),
        t.aoMap)
      )
        var r = t.aoMap;
      else t.lightMap && (r = t.lightMap);
      void 0 !== r &&
        (r.isWebGLRenderTarget && (r = r.texture),
        !0 === r.matrixAutoUpdate && r.updateMatrix(),
        e.uv2Transform.value.copy(r.matrix));
    }
    function g(e, t, i) {
      (e.roughness.value = t.roughness),
        (e.metalness.value = t.metalness),
        t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
        t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
        t.bumpMap &&
          ((e.bumpMap.value = t.bumpMap),
          (e.bumpScale.value = t.bumpScale),
          1 === t.side && (e.bumpScale.value *= -1)),
        t.normalMap &&
          ((e.normalMap.value = t.normalMap),
          e.normalScale.value.copy(t.normalScale),
          1 === t.side && e.normalScale.value.negate()),
        t.displacementMap &&
          ((e.displacementMap.value = t.displacementMap),
          (e.displacementScale.value = t.displacementScale),
          (e.displacementBias.value = t.displacementBias)),
        (t.envMap || i) && (e.envMapIntensity.value = t.envMapIntensity);
    }
    var v,
      $,
      y,
      x,
      _,
      w,
      b,
      M,
      S,
      T,
      E,
      L,
      A,
      R,
      P,
      C,
      D,
      I,
      N =
        void 0 !== (e = e || {}).canvas
          ? e.canvas
          : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      z = void 0 !== e.context ? e.context : null,
      B = void 0 !== e.alpha && e.alpha,
      U = void 0 === e.depth || e.depth,
      F = void 0 === e.stencil || e.stencil,
      G = void 0 !== e.antialias && e.antialias,
      H = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      O = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      V = void 0 !== e.powerPreference ? e.powerPreference : "default",
      k =
        void 0 !== e.failIfMajorPerformanceCaveat &&
        e.failIfMajorPerformanceCaveat,
      j = null,
      q = null;
    (this.domElement = N),
      (this.debug = { checkShaderErrors: !0 }),
      (this.sortObjects =
        this.autoClearStencil =
        this.autoClearDepth =
        this.autoClearColor =
        this.autoClear =
          !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.gammaFactor = 2),
      (this.outputEncoding = 3e3),
      (this.physicallyCorrectLights = !1),
      (this.toneMappingWhitePoint =
        this.toneMappingExposure =
        this.toneMapping =
          1),
      (this.maxMorphTargets = 8),
      (this.maxMorphNormals = 4);
    var X = this,
      Y = !1,
      Z = null,
      J = 0,
      ei = 0,
      en = null,
      ep = null,
      em = -1,
      eg = (v = null),
      ev = !1,
      e$ = null,
      ey = null,
      ex = new s(),
      e_ = new s(),
      e8 = null,
      ew = N.width,
      eb = N.height,
      eM = 1,
      eS = null,
      eT = null,
      eE = new s(0, 0, ew, eb),
      e1 = new s(0, 0, ew, eb),
      e0 = !1,
      eL = new K(),
      eA = new es(),
      eR = !1,
      eP = !1,
      eC = new h(),
      eD = new r();
    try {
      (B = {
        alpha: B,
        depth: U,
        stencil: F,
        antialias: G,
        premultipliedAlpha: H,
        preserveDrawingBuffer: O,
        powerPreference: V,
        failIfMajorPerformanceCaveat: k,
        xrCompatible: !0,
      }),
        N.addEventListener("webglcontextlost", n, !1),
        N.addEventListener("webglcontextrestored", a, !1);
      var eI =
        z || N.getContext("webgl", B) || N.getContext("experimental-webgl", B);
      if (null === eI) {
        if (null !== N.getContext("webgl"))
          throw Error(
            "Error creating WebGL context with your selected attributes."
          );
        throw Error("Error creating WebGL context.");
      }
      void 0 === eI.getShaderPrecisionFormat &&
        (eI.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (eN) {
      throw (console.error("THREE.WebGLRenderer: " + eN.message), eN);
    }
    t();
    var ez = new t8(X, eI);
    this.xr = ez;
    var eB = new ty(X, eI),
      e2 = new tf(X, T, y.maxTextureSize);
    (this.shadowMap = e2),
      (this.getContext = function () {
        return eI;
      }),
      (this.getContextAttributes = function () {
        return eI.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        var e = $.get("WEBGL_lose_context");
        e && e.loseContext();
      }),
      (this.forceContextRestore = function () {
        var e = $.get("WEBGL_lose_context");
        e && e.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return eM;
      }),
      (this.setPixelRatio = function (e) {
        void 0 !== e && ((eM = e), this.setSize(ew, eb, !1));
      }),
      (this.getSize = function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
            ),
            (e = new i())),
          e.set(ew, eb)
        );
      }),
      (this.setSize = function (e, t, i) {
        ez.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((ew = e),
            (eb = t),
            (N.width = Math.floor(e * eM)),
            (N.height = Math.floor(t * eM)),
            !1 !== i &&
              ((N.style.width = e + "px"), (N.style.height = t + "px")),
            this.setViewport(0, 0, e, t));
      }),
      (this.getDrawingBufferSize = function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
            ),
            (e = new i())),
          e.set(ew * eM, eb * eM).floor()
        );
      }),
      (this.setDrawingBufferSize = function (e, t, i) {
        (ew = e),
          (eb = t),
          (eM = i),
          (N.width = Math.floor(e * i)),
          (N.height = Math.floor(t * i)),
          this.setViewport(0, 0, e, t);
      }),
      (this.getCurrentViewport = function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
            ),
            (e = new s())),
          e.copy(ex)
        );
      }),
      (this.getViewport = function (e) {
        return e.copy(eE);
      }),
      (this.setViewport = function (e, t, i, n) {
        e.isVector4 ? eE.set(e.x, e.y, e.z, e.w) : eE.set(e, t, i, n),
          x.viewport(ex.copy(eE).multiplyScalar(eM).floor());
      }),
      (this.getScissor = function (e) {
        return e.copy(e1);
      }),
      (this.setScissor = function (e, t, i, n) {
        e.isVector4 ? e1.set(e.x, e.y, e.z, e.w) : e1.set(e, t, i, n),
          x.scissor(e_.copy(e1).multiplyScalar(eM).floor());
      }),
      (this.getScissorTest = function () {
        return e0;
      }),
      (this.setScissorTest = function (e) {
        x.setScissorTest((e0 = e));
      }),
      (this.setOpaqueSort = function (e) {
        eS = e;
      }),
      (this.setTransparentSort = function (e) {
        eT = e;
      }),
      (this.getClearColor = function () {
        return R.getClearColor();
      }),
      (this.setClearColor = function () {
        R.setClearColor.apply(R, arguments);
      }),
      (this.getClearAlpha = function () {
        return R.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        R.setClearAlpha.apply(R, arguments);
      }),
      (this.clear = function (e, t, i) {
        var n = 0;
        (void 0 === e || e) && (n |= 16384),
          (void 0 === t || t) && (n |= 256),
          (void 0 === i || i) && (n |= 1024),
          eI.clear(n);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        N.removeEventListener("webglcontextlost", n, !1),
          N.removeEventListener("webglcontextrestored", a, !1),
          L.dispose(),
          A.dispose(),
          w.dispose(),
          T.dispose(),
          ez.dispose(),
          eG.stop();
      }),
      (this.renderBufferImmediate = function (e, t) {
        x.initAttributes();
        var i = w.get(e);
        e.hasPositions && !i.position && (i.position = eI.createBuffer()),
          e.hasNormals && !i.normal && (i.normal = eI.createBuffer()),
          e.hasUvs && !i.uv && (i.uv = eI.createBuffer()),
          e.hasColors && !i.color && (i.color = eI.createBuffer()),
          (t = t.getAttributes()),
          e.hasPositions &&
            (eI.bindBuffer(34962, i.position),
            eI.bufferData(34962, e.positionArray, 35048),
            x.enableAttribute(t.position),
            eI.vertexAttribPointer(t.position, 3, 5126, !1, 0, 0)),
          e.hasNormals &&
            (eI.bindBuffer(34962, i.normal),
            eI.bufferData(34962, e.normalArray, 35048),
            x.enableAttribute(t.normal),
            eI.vertexAttribPointer(t.normal, 3, 5126, !1, 0, 0)),
          e.hasUvs &&
            (eI.bindBuffer(34962, i.uv),
            eI.bufferData(34962, e.uvArray, 35048),
            x.enableAttribute(t.uv),
            eI.vertexAttribPointer(t.uv, 2, 5126, !1, 0, 0)),
          e.hasColors &&
            (eI.bindBuffer(34962, i.color),
            eI.bufferData(34962, e.colorArray, 35048),
            x.enableAttribute(t.color),
            eI.vertexAttribPointer(t.color, 3, 5126, !1, 0, 0)),
          x.disableUnusedAttributes(),
          eI.drawArrays(4, 0, e.count),
          (e.count = 0);
      });
    var eU = new f();
    (this.renderBufferDirect = function (e, t, i, n, r, a) {
      null === t && (t = eU);
      var o = r.isMesh && 0 > r.matrixWorld.determinant(),
        s = d(e, t, n, r);
      x.setMaterial(n, o);
      var c = !1;
      if (
        ((v !== i.id || eg !== s.id || ev !== (!0 === n.wireframe)) &&
          ((v = i.id), (eg = s.id), (ev = !0 === n.wireframe), (c = !0)),
        (n.morphTargets || n.morphNormals) && (P.update(r, i, n, s), (c = !0)),
        (e = i.index),
        (t = i.attributes.position),
        null === e)
      ) {
        if (void 0 === t || 0 === t.count) return;
      } else if (0 === e.count) return;
      var l = 1;
      if (
        (!0 === n.wireframe && ((e = S.getWireframeAttribute(i)), (l = 2)),
        (o = C),
        null !== e)
      ) {
        var h = M.get(e);
        (o = D).setIndex(h);
      }
      if (c) {
        if (
          !1 !== y.isWebGL2 ||
          (!r.isInstancedMesh && !i.isInstancedBufferGeometry) ||
          null !== $.get("ANGLE_instanced_arrays")
        ) {
          x.initAttributes(), (c = i.attributes), (s = s.getAttributes());
          var u = n.defaultAttributeValues;
          for (L in s) {
            var p = s[L];
            if (0 <= p) {
              var f = c[L];
              if (void 0 !== f) {
                var m = f.normalized,
                  g = f.itemSize,
                  _ = M.get(f);
                if (void 0 !== _) {
                  var w = _.buffer,
                    b = _.type;
                  if (
                    ((_ = _.bytesPerElement), f.isInterleavedBufferAttribute)
                  ) {
                    var T = f.data,
                      E = T.stride;
                    (f = f.offset),
                      T && T.isInstancedInterleavedBuffer
                        ? (x.enableAttributeAndDivisor(p, T.meshPerAttribute),
                          void 0 === i.maxInstancedCount &&
                            (i.maxInstancedCount =
                              T.meshPerAttribute * T.count))
                        : x.enableAttribute(p),
                      eI.bindBuffer(34962, w),
                      eI.vertexAttribPointer(p, g, b, m, E * _, f * _);
                  } else
                    f.isInstancedBufferAttribute
                      ? (x.enableAttributeAndDivisor(p, f.meshPerAttribute),
                        void 0 === i.maxInstancedCount &&
                          (i.maxInstancedCount = f.meshPerAttribute * f.count))
                      : x.enableAttribute(p),
                      eI.bindBuffer(34962, w),
                      eI.vertexAttribPointer(p, g, b, m, 0, 0);
                }
              } else if ("instanceMatrix" === L)
                void 0 !== (_ = M.get(r.instanceMatrix)) &&
                  ((w = _.buffer),
                  (b = _.type),
                  x.enableAttributeAndDivisor(p + 0, 1),
                  x.enableAttributeAndDivisor(p + 1, 1),
                  x.enableAttributeAndDivisor(p + 2, 1),
                  x.enableAttributeAndDivisor(p + 3, 1),
                  eI.bindBuffer(34962, w),
                  eI.vertexAttribPointer(p + 0, 4, b, !1, 64, 0),
                  eI.vertexAttribPointer(p + 1, 4, b, !1, 64, 16),
                  eI.vertexAttribPointer(p + 2, 4, b, !1, 64, 32),
                  eI.vertexAttribPointer(p + 3, 4, b, !1, 64, 48));
              else if (void 0 !== u && void 0 !== (m = u[L]))
                switch (m.length) {
                  case 2:
                    eI.vertexAttrib2fv(p, m);
                    break;
                  case 3:
                    eI.vertexAttrib3fv(p, m);
                    break;
                  case 4:
                    eI.vertexAttrib4fv(p, m);
                    break;
                  default:
                    eI.vertexAttrib1fv(p, m);
                }
            }
          }
          x.disableUnusedAttributes();
        }
        null !== e && eI.bindBuffer(34963, h.buffer);
      }
      var L = i.drawRange.start * l;
      (h = Math.max(L, (c = null !== a ? a.start * l : 0))),
        0 !==
          (a = Math.max(
            0,
            Math.min(
              null !== e ? e.count : t.count,
              L + i.drawRange.count * l,
              c + (null !== a ? a.count * l : 1 / 0)
            ) -
              1 -
              h +
              1
          )) &&
          (r.isMesh
            ? !0 === n.wireframe
              ? (x.setLineWidth(n.wireframeLinewidth * (null === en ? eM : 1)),
                o.setMode(1))
              : o.setMode(4)
            : r.isLine
            ? (void 0 === (n = n.linewidth) && (n = 1),
              x.setLineWidth(n * (null === en ? eM : 1)),
              r.isLineSegments
                ? o.setMode(1)
                : r.isLineLoop
                ? o.setMode(2)
                : o.setMode(3))
            : r.isPoints
            ? o.setMode(0)
            : r.isSprite && o.setMode(4),
          r.isInstancedMesh
            ? o.renderInstances(i, h, a, r.count)
            : i.isInstancedBufferGeometry
            ? o.renderInstances(i, h, a, i.maxInstancedCount)
            : o.render(h, a));
    }),
      (this.compile = function (e, t) {
        (q = A.get(e, t)).init(),
          e.traverse(function (e) {
            e.isLight && (q.pushLight(e), e.castShadow && q.pushShadow(e));
          }),
          q.setupLights(t),
          e.traverse(function (t) {
            if (t.material) {
              if (Array.isArray(t.material))
                for (var i = 0; i < t.material.length; i++)
                  p(t.material[i], e, t);
              else p(t.material, e, t);
            }
          });
      });
    var eF = null,
      eG = new ee();
    eG.setAnimationLoop(function (e) {
      ez.isPresenting || (eF && eF(e));
    }),
      "undefined" != typeof window && eG.setContext(window),
      (this.setAnimationLoop = function (e) {
        (eF = e), ez.setAnimationLoop(e), eG.start();
      }),
      (this.render = function (e, t, i, n) {
        if (void 0 !== i) {
          console.warn(
            "THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
          );
          var r = i;
        }
        if (void 0 !== n) {
          console.warn(
            "THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
          );
          var a = n;
        }
        t && t.isCamera
          ? Y ||
            ((eg = v = null),
            (ev = !1),
            (em = -1),
            (e$ = null),
            !0 === e.autoUpdate && e.updateMatrixWorld(),
            null === t.parent && t.updateMatrixWorld(),
            ez.enabled && ez.isPresenting && (t = ez.getCamera(t)),
            (q = A.get(e, t)).init(),
            e.onBeforeRender(X, e, t, r || en),
            eC.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            eL.setFromMatrix(eC),
            (eP = this.localClippingEnabled),
            (eR = eA.init(this.clippingPlanes, eP, t)),
            (j = L.get(e, t)).init(),
            (function e(t, i, n, r) {
              if (!1 !== t.visible) {
                if (t.layers.test(i.layers)) {
                  if (t.isGroup) n = t.renderOrder;
                  else if (t.isLOD) !0 === t.autoUpdate && t.update(i);
                  else if (t.isLight)
                    q.pushLight(t), t.castShadow && q.pushShadow(t);
                  else if (t.isSprite) {
                    if (!t.frustumCulled || eL.intersectsSprite(t)) {
                      r &&
                        eD
                          .setFromMatrixPosition(t.matrixWorld)
                          .applyMatrix4(eC);
                      var a = T.update(t),
                        o = t.material;
                      o.visible && j.push(t, a, o, n, eD.z, null);
                    }
                  } else if (t.isImmediateRenderObject)
                    r &&
                      eD.setFromMatrixPosition(t.matrixWorld).applyMatrix4(eC),
                      j.push(t, null, t.material, n, eD.z, null);
                  else if (
                    (t.isMesh || t.isLine || t.isPoints) &&
                    (t.isSkinnedMesh &&
                      t.skeleton.frame !== _.render.frame &&
                      (t.skeleton.update(),
                      (t.skeleton.frame = _.render.frame)),
                    !t.frustumCulled || eL.intersectsObject(t))
                  ) {
                    if (
                      (r &&
                        eD
                          .setFromMatrixPosition(t.matrixWorld)
                          .applyMatrix4(eC),
                      (a = T.update(t)),
                      Array.isArray((o = t.material)))
                    )
                      for (var s = a.groups, c = 0, l = s.length; c < l; c++) {
                        var h = s[c],
                          u = o[h.materialIndex];
                        u && u.visible && j.push(t, a, u, n, eD.z, h);
                      }
                    else o.visible && j.push(t, a, o, n, eD.z, null);
                  }
                }
                for (t = t.children, c = 0, l = t.length; c < l; c++)
                  e(t[c], i, n, r);
              }
            })(e, t, 0, X.sortObjects),
            !0 === X.sortObjects && j.sort(eS, eT),
            eR && eA.beginShadows(),
            e2.render(q.state.shadowsArray, e, t),
            q.setupLights(t),
            eR && eA.endShadows(),
            this.info.autoReset && this.info.reset(),
            void 0 !== r && this.setRenderTarget(r),
            ez.enabled && eB.isAvailable() && eB.attachCamera(t),
            R.render(j, e, t, a),
            (i = j.opaque),
            (n = j.transparent),
            e.overrideMaterial
              ? ((r = e.overrideMaterial),
                i.length && l(i, e, t, r),
                n.length && l(n, e, t, r))
              : (i.length && l(i, e, t), n.length && l(n, e, t)),
            e.onAfterRender(X, e, t),
            null !== en &&
              (b.updateRenderTargetMipmap(en),
              b.updateMultisampleRenderTarget(en)),
            x.buffers.depth.setTest(!0),
            x.buffers.depth.setMask(!0),
            x.buffers.color.setMask(!0),
            x.setPolygonOffset(!1),
            ez.enabled && eB.isAvailable() && eB.detachCamera(t),
            (q = j = null))
          : console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
            );
      }),
      (this.setFramebuffer = function (e) {
        Z !== e && null === en && eI.bindFramebuffer(36160, e), (Z = e);
      }),
      (this.getActiveCubeFace = function () {
        return J;
      }),
      (this.getActiveMipmapLevel = function () {
        return ei;
      }),
      (this.getRenderTarget = function () {
        return en;
      }),
      (this.setRenderTarget = function (e, t, i) {
        (en = e),
          (J = t),
          (ei = i),
          e && void 0 === w.get(e).__webglFramebuffer && b.setupRenderTarget(e);
        var n = Z,
          r = !1;
        e
          ? ((n = w.get(e).__webglFramebuffer),
            e.isWebGLRenderTargetCube
              ? ((n = n[t || 0]), (r = !0))
              : (n = e.isWebGLMultisampleRenderTarget
                  ? w.get(e).__webglMultisampledFramebuffer
                  : n),
            ex.copy(e.viewport),
            e_.copy(e.scissor),
            (e8 = e.scissorTest))
          : (ex.copy(eE).multiplyScalar(eM).floor(),
            e_.copy(e1).multiplyScalar(eM).floor(),
            (e8 = e0)),
          ep !== n && (eI.bindFramebuffer(36160, n), (ep = n)),
          x.viewport(ex),
          x.scissor(e_),
          x.setScissorTest(e8),
          r &&
            ((e = w.get(e.texture)),
            eI.framebufferTexture2D(
              36160,
              36064,
              34069 + (t || 0),
              e.__webglTexture,
              i || 0
            ));
      }),
      (this.readRenderTargetPixels = function (e, t, i, n, r, a, o) {
        if (e && e.isWebGLRenderTarget) {
          var s = w.get(e).__webglFramebuffer;
          if ((e.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]), s)) {
            (o = !1), s !== ep && (eI.bindFramebuffer(36160, s), (o = !0));
            try {
              var c = e.texture,
                l = c.format,
                h = c.type;
              1023 !== l && I.convert(l) !== eI.getParameter(35739)
                ? console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  )
                : 1009 === h ||
                  I.convert(h) === eI.getParameter(35738) ||
                  (1015 === h &&
                    (y.isWebGL2 ||
                      $.get("OES_texture_float") ||
                      $.get("WEBGL_color_buffer_float"))) ||
                  (1016 === h &&
                    (y.isWebGL2
                      ? $.get("EXT_color_buffer_float")
                      : $.get("EXT_color_buffer_half_float")))
                ? 36053 === eI.checkFramebufferStatus(36160)
                  ? 0 <= t &&
                    t <= e.width - n &&
                    0 <= i &&
                    i <= e.height - r &&
                    eI.readPixels(t, i, n, r, I.convert(l), I.convert(h), a)
                  : console.error(
                      "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                    )
                : console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
            } finally {
              o && eI.bindFramebuffer(36160, ep);
            }
          }
        } else
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
      }),
      (this.copyFramebufferToTexture = function (e, t, i) {
        void 0 === i && (i = 0);
        var n = Math.pow(2, -i),
          r = Math.floor(t.image.width * n);
        n = Math.floor(t.image.height * n);
        var a = I.convert(t.format);
        b.setTexture2D(t, 0),
          eI.copyTexImage2D(3553, i, a, e.x, e.y, r, n, 0),
          x.unbindTexture();
      }),
      (this.copyTextureToTexture = function (e, t, i, n) {
        var r = t.image.width,
          a = t.image.height,
          o = I.convert(i.format),
          s = I.convert(i.type);
        b.setTexture2D(i, 0),
          t.isDataTexture
            ? eI.texSubImage2D(3553, n || 0, e.x, e.y, r, a, o, s, t.image.data)
            : eI.texSubImage2D(3553, n || 0, e.x, e.y, o, s, t.image),
          x.unbindTexture();
      }),
      (this.initTexture = function (e) {
        b.setTexture2D(e, 0), x.unbindTexture();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  function tb(e, t) {
    (this.name = ""),
      (this.color = new _(e)),
      (this.density = void 0 !== t ? t : 25e-5);
  }
  function tM(e, t, i) {
    (this.name = ""),
      (this.color = new _(e)),
      (this.near = void 0 !== t ? t : 1),
      (this.far = void 0 !== i ? i : 1e3);
  }
  function tS(e, t) {
    (this.array = e),
      (this.stride = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.usage = 35044),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  function tT(e, t, i, n) {
    (this.data = e),
      (this.itemSize = t),
      (this.offset = i),
      (this.normalized = !0 === n);
  }
  function tE(e) {
    T.call(this),
      (this.type = "SpriteMaterial"),
      (this.color = new _(16777215)),
      (this.alphaMap = this.map = null),
      (this.rotation = 0),
      (this.transparent = this.sizeAttenuation = !0),
      this.setValues(e);
  }
  function t1(e) {
    if ((d.call(this), (this.type = "Sprite"), void 0 === oD)) {
      oD = new G();
      var t = new Float32Array([
        -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
        0, 0, 1,
      ]);
      (t = new tS(t, 5)),
        oD.setIndex([0, 1, 2, 0, 2, 3]),
        oD.setAttribute("position", new tT(t, 3, 0, !1)),
        oD.setAttribute("uv", new tT(t, 2, 3, !1));
    }
    (this.geometry = oD),
      (this.material = void 0 !== e ? e : new tE()),
      (this.center = new i(0.5, 0.5));
  }
  function t0(e, t, i, n, r, a) {
    oB.subVectors(e, i).addScalar(0.5).multiply(n),
      void 0 !== r
        ? ((o2.x = a * oB.x - r * oB.y), (o2.y = r * oB.x + a * oB.y))
        : o2.copy(oB),
      e.copy(t),
      (e.x += o2.x),
      (e.y += o2.y),
      e.applyMatrix4(oU);
  }
  function tL() {
    d.call(this),
      (this.type = "LOD"),
      Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }),
      (this.autoUpdate = !0);
  }
  function tA(e, t) {
    e &&
      e.isGeometry &&
      console.error(
        "THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
      ),
      H.call(this, e, t),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new h()),
      (this.bindMatrixInverse = new h());
  }
  function tR(e, t) {
    if (
      ((e = e || []),
      (this.bones = e.slice(0)),
      (this.boneMatrices = new Float32Array(16 * this.bones.length)),
      (this.frame = -1),
      void 0 === t)
    )
      this.calculateInverses();
    else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
    else
      for (
        console.warn("THREE.Skeleton boneInverses is the wrong length."),
          this.boneInverses = [],
          e = 0,
          t = this.bones.length;
        e < t;
        e++
      )
        this.boneInverses.push(new h());
  }
  function tP() {
    d.call(this), (this.type = "Bone");
  }
  function tC(e, t, i) {
    H.call(this, e, t),
      (this.instanceMatrix = new L(new Float32Array(16 * i), 16)),
      (this.count = i);
  }
  function tD(e) {
    T.call(this),
      (this.type = "LineBasicMaterial"),
      (this.color = new _(16777215)),
      (this.linewidth = 1),
      (this.linejoin = this.linecap = "round"),
      this.setValues(e);
  }
  function tI(e, t, i) {
    1 === i &&
      console.error(
        "THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."
      ),
      d.call(this),
      (this.type = "Line"),
      (this.geometry = void 0 !== e ? e : new G()),
      (this.material =
        void 0 !== t ? t : new tD({ color: 16777215 * Math.random() }));
  }
  function tN(e, t) {
    tI.call(this, e, t), (this.type = "LineSegments");
  }
  function tz(e, t) {
    tI.call(this, e, t), (this.type = "LineLoop");
  }
  function tB(e) {
    T.call(this),
      (this.type = "PointsMaterial"),
      (this.color = new _(16777215)),
      (this.alphaMap = this.map = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  function t2(e, t) {
    d.call(this),
      (this.type = "Points"),
      (this.geometry = void 0 !== e ? e : new G()),
      (this.material =
        void 0 !== t ? t : new tB({ color: 16777215 * Math.random() })),
      this.updateMorphTargets();
  }
  function tU(e, t, i, n, a, o, s) {
    var c = st.distanceSqToPoint(e);
    c < i &&
      ((i = new r()),
      st.closestPointToPoint(e, i),
      i.applyMatrix4(n),
      (e = a.ray.origin.distanceTo(i)) < a.near ||
        e > a.far ||
        o.push({
          distance: e,
          distanceToRay: Math.sqrt(c),
          point: i,
          index: t,
          face: null,
          object: s,
        }));
  }
  function tF(e, t, i, n, r, a, s, c, l) {
    o.call(this, e, t, i, n, r, a, s, c, l),
      (this.format = void 0 !== s ? s : 1022),
      (this.minFilter = void 0 !== a ? a : 1006),
      (this.magFilter = void 0 !== r ? r : 1006),
      (this.generateMipmaps = !1);
  }
  function tG(e, t, i, n, r, a, s, c, l, h, u, p) {
    o.call(this, null, a, s, c, l, h, n, r, u, p),
      (this.image = { width: t, height: i }),
      (this.mipmaps = e),
      (this.generateMipmaps = this.flipY = !1);
  }
  function t3(e, t, i, n, r, a, s, c, l) {
    o.call(this, e, t, i, n, r, a, s, c, l), (this.needsUpdate = !0);
  }
  function tH(e, t, i, n, r, a, s, c, l, h) {
    if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === i && 1026 === h && (i = 1012),
      void 0 === i && 1027 === h && (i = 1020),
      o.call(this, null, n, r, a, s, c, h, i, l),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== s ? s : 1003),
      (this.minFilter = void 0 !== c ? c : 1003),
      (this.generateMipmaps = this.flipY = !1);
  }
  function tO(e) {
    G.call(this), (this.type = "WireframeGeometry");
    var t,
      i,
      n,
      a = [],
      o = [0, 0],
      s = {},
      c = ["a", "b", "c"];
    if (e && e.isGeometry) {
      var l = e.faces,
        h = 0;
      for (i = l.length; h < i; h++) {
        var u = l[h];
        for (t = 0; 3 > t; t++) {
          var p = u[c[t]],
            d = u[c[(t + 1) % 3]];
          (o[0] = Math.min(p, d)),
            (o[1] = Math.max(p, d)),
            void 0 === s[(p = o[0] + "," + o[1])] &&
              (s[p] = { index1: o[0], index2: o[1] });
        }
      }
      for (p in s)
        (h = s[p]),
          (c = e.vertices[h.index1]),
          a.push(c.x, c.y, c.z),
          (c = e.vertices[h.index2]),
          a.push(c.x, c.y, c.z);
    } else if (e && e.isBufferGeometry) {
      if (((c = new r()), null !== e.index)) {
        (l = e.attributes.position), (u = e.index);
        var f = e.groups;
        for (
          0 === f.length &&
            (f = [{ start: 0, count: u.count, materialIndex: 0 }]),
            e = 0,
            n = f.length;
          e < n;
          ++e
        )
          for (
            t = (h = f[e]).start, i = h.count, h = t, i = t + i;
            h < i;
            h += 3
          )
            for (t = 0; 3 > t; t++)
              (p = u.getX(h + t)),
                (d = u.getX(h + ((t + 1) % 3))),
                (o[0] = Math.min(p, d)),
                (o[1] = Math.max(p, d)),
                void 0 === s[(p = o[0] + "," + o[1])] &&
                  (s[p] = { index1: o[0], index2: o[1] });
        for (p in s)
          (h = s[p]),
            c.fromBufferAttribute(l, h.index1),
            a.push(c.x, c.y, c.z),
            c.fromBufferAttribute(l, h.index2),
            a.push(c.x, c.y, c.z);
      } else
        for (l = e.attributes.position, h = 0, i = l.count / 3; h < i; h++)
          for (t = 0; 3 > t; t++)
            (s = 3 * h + t),
              c.fromBufferAttribute(l, s),
              a.push(c.x, c.y, c.z),
              (s = 3 * h + ((t + 1) % 3)),
              c.fromBufferAttribute(l, s),
              a.push(c.x, c.y, c.z);
    }
    this.setAttribute("position", new z(a, 3));
  }
  function tV(e, t, i) {
    k.call(this),
      (this.type = "ParametricGeometry"),
      (this.parameters = { func: e, slices: t, stacks: i }),
      this.fromBufferGeometry(new t4(e, t, i)),
      this.mergeVertices();
  }
  function t4(e, t, i) {
    G.call(this),
      (this.type = "ParametricBufferGeometry"),
      (this.parameters = { func: e, slices: t, stacks: i });
    var n,
      a,
      o = [],
      s = [],
      c = [],
      l = [],
      h = new r(),
      u = new r(),
      p = new r(),
      d = new r(),
      f = new r();
    3 > e.length &&
      console.error(
        "THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."
      );
    var m = t + 1;
    for (n = 0; n <= i; n++) {
      var g = n / i;
      for (a = 0; a <= t; a++) {
        var v = a / t;
        e(v, g, u),
          s.push(u.x, u.y, u.z),
          0 <= v - 1e-5
            ? (e(v - 1e-5, g, p), d.subVectors(u, p))
            : (e(v + 1e-5, g, p), d.subVectors(p, u)),
          0 <= g - 1e-5
            ? (e(v, g - 1e-5, p), f.subVectors(u, p))
            : (e(v, g + 1e-5, p), f.subVectors(p, u)),
          h.crossVectors(d, f).normalize(),
          c.push(h.x, h.y, h.z),
          l.push(v, g);
      }
    }
    for (n = 0; n < i; n++)
      for (a = 0; a < t; a++)
        (e = n * m + a + 1),
          (h = (n + 1) * m + a + 1),
          (u = (n + 1) * m + a),
          o.push(n * m + a, e, u),
          o.push(e, h, u);
    this.setIndex(o),
      this.setAttribute("position", new z(s, 3)),
      this.setAttribute("normal", new z(c, 3)),
      this.setAttribute("uv", new z(l, 2));
  }
  function tk(e, t, i, n) {
    k.call(this),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: i, detail: n }),
      this.fromBufferGeometry(new tW(e, t, i, n)),
      this.mergeVertices();
  }
  function tW(e, t, n, a) {
    function o(e) {
      l.push(e.x, e.y, e.z);
    }
    function s(t, i) {
      (t *= 3), (i.x = e[t + 0]), (i.y = e[t + 1]), (i.z = e[t + 2]);
    }
    function c(e, t, i, n) {
      0 > n && 1 === e.x && (h[t] = e.x - 1),
        0 === i.x && 0 === i.z && (h[t] = n / 2 / Math.PI + 0.5);
    }
    G.call(this),
      (this.type = "PolyhedronBufferGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: a }),
      (n = n || 1);
    var l = [],
      h = [];
    !(function (e) {
      for (
        var i = new r(), n = new r(), a = new r(), c = 0;
        c < t.length;
        c += 3
      ) {
        s(t[c + 0], i), s(t[c + 1], n), s(t[c + 2], a);
        var l,
          h,
          u = i,
          p = n,
          d = a,
          f = Math.pow(2, e),
          m = [];
        for (h = 0; h <= f; h++) {
          m[h] = [];
          var g = u.clone().lerp(d, h / f),
            v = p.clone().lerp(d, h / f),
            $ = f - h;
          for (l = 0; l <= $; l++)
            m[h][l] = 0 === l && h === f ? g : g.clone().lerp(v, l / $);
        }
        for (h = 0; h < f; h++)
          for (l = 0; l < 2 * (f - h) - 1; l++)
            (u = Math.floor(l / 2)),
              0 == l % 2
                ? (o(m[h][u + 1]), o(m[h + 1][u]), o(m[h][u]))
                : (o(m[h][u + 1]), o(m[h + 1][u + 1]), o(m[h + 1][u]));
      }
    })((a = a || 0)),
      (function (e) {
        for (var t = new r(), i = 0; i < l.length; i += 3)
          (t.x = l[i + 0]),
            (t.y = l[i + 1]),
            (t.z = l[i + 2]),
            t.normalize().multiplyScalar(e),
            (l[i + 0] = t.x),
            (l[i + 1] = t.y),
            (l[i + 2] = t.z);
      })(n),
      (function () {
        for (var e = new r(), t = 0; t < l.length; t += 3)
          (e.x = l[t + 0]),
            (e.y = l[t + 1]),
            (e.z = l[t + 2]),
            h.push(
              Math.atan2(e.z, -e.x) / 2 / Math.PI + 0.5,
              1 -
                (Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
                  0.5)
            );
        (e = new r()), (t = new r());
        for (
          var n = new r(),
            a = new r(),
            o = new i(),
            s = new i(),
            u = new i(),
            p = 0,
            d = 0;
          p < l.length;
          p += 9, d += 6
        ) {
          e.set(l[p + 0], l[p + 1], l[p + 2]),
            t.set(l[p + 3], l[p + 4], l[p + 5]),
            n.set(l[p + 6], l[p + 7], l[p + 8]),
            o.set(h[d + 0], h[d + 1]),
            s.set(h[d + 2], h[d + 3]),
            u.set(h[d + 4], h[d + 5]),
            a.copy(e).add(t).add(n).divideScalar(3);
          var f = Math.atan2(a.z, -a.x);
          c(o, d + 0, e, f), c(s, d + 2, t, f), c(u, d + 4, n, f);
        }
        for (e = 0; e < h.length; e += 6)
          (t = h[e + 0]),
            (o = Math.min(t, (n = h[e + 2]), (a = h[e + 4]))),
            0.9 < Math.max(t, n, a) &&
              0.1 > o &&
              (0.2 > t && (h[e + 0] += 1),
              0.2 > n && (h[e + 2] += 1),
              0.2 > a && (h[e + 4] += 1));
      })(),
      this.setAttribute("position", new z(l, 3)),
      this.setAttribute("normal", new z(l.slice(), 3)),
      this.setAttribute("uv", new z(h, 2)),
      0 === a ? this.computeVertexNormals() : this.normalizeNormals();
  }
  function t5(e, t) {
    k.call(this),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t }),
      this.fromBufferGeometry(new t6(e, t)),
      this.mergeVertices();
  }
  function t6(e, t) {
    tW.call(
      this,
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      e,
      t
    ),
      (this.type = "TetrahedronBufferGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  function t7(e, t) {
    k.call(this),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t }),
      this.fromBufferGeometry(new tj(e, t)),
      this.mergeVertices();
  }
  function tj(e, t) {
    tW.call(
      this,
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      e,
      t
    ),
      (this.type = "OctahedronBufferGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  function tq(e, t) {
    k.call(this),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t }),
      this.fromBufferGeometry(new tX(e, t)),
      this.mergeVertices();
  }
  function tX(e, t) {
    var i = (1 + Math.sqrt(5)) / 2;
    tW.call(
      this,
      [
        -1,
        i,
        0,
        1,
        i,
        0,
        -1,
        -i,
        0,
        1,
        -i,
        0,
        0,
        -1,
        i,
        0,
        1,
        i,
        0,
        -1,
        -i,
        0,
        1,
        -i,
        i,
        0,
        -1,
        i,
        0,
        1,
        -i,
        0,
        -1,
        -i,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      e,
      t
    ),
      (this.type = "IcosahedronBufferGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  function tY(e, t) {
    k.call(this),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t }),
      this.fromBufferGeometry(new tZ(e, t)),
      this.mergeVertices();
  }
  function tZ(e, t) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i;
    tW.call(
      this,
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -n,
        -i,
        0,
        -n,
        i,
        0,
        n,
        -i,
        0,
        n,
        i,
        -n,
        -i,
        0,
        -n,
        i,
        0,
        n,
        -i,
        0,
        n,
        i,
        0,
        -i,
        0,
        -n,
        i,
        0,
        -n,
        -i,
        0,
        n,
        i,
        0,
        n,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      e,
      t
    ),
      (this.type = "DodecahedronBufferGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  function tJ(e, t, i, n, r, a) {
    k.call(this),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: i,
        radialSegments: n,
        closed: r,
      }),
      void 0 !== a &&
        console.warn("THREE.TubeGeometry: taper has been removed."),
      (e = new tQ(e, t, i, n, r)),
      (this.tangents = e.tangents),
      (this.normals = e.normals),
      (this.binormals = e.binormals),
      this.fromBufferGeometry(e),
      this.mergeVertices();
  }
  function tQ(e, t, n, a, o) {
    function s(i) {
      f = e.getPointAt(i / t, f);
      var r = c.normals[i];
      for (h = 0, i = c.binormals[i]; h <= a; h++) {
        var o = (h / a) * Math.PI * 2,
          s = Math.sin(o);
        (o = -Math.cos(o)),
          (p.x = o * r.x + s * i.x),
          (p.y = o * r.y + s * i.y),
          (p.z = o * r.z + s * i.z),
          p.normalize(),
          g.push(p.x, p.y, p.z),
          (u.x = f.x + n * p.x),
          (u.y = f.y + n * p.y),
          (u.z = f.z + n * p.z),
          m.push(u.x, u.y, u.z);
      }
    }
    G.call(this),
      (this.type = "TubeBufferGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: n,
        radialSegments: a,
        closed: o,
      }),
      (t = t || 64),
      (n = n || 1),
      (a = a || 8),
      (o = o || !1);
    var c = e.computeFrenetFrames(t, o);
    (this.tangents = c.tangents),
      (this.normals = c.normals),
      (this.binormals = c.binormals);
    var l,
      h,
      u = new r(),
      p = new r(),
      d = new i(),
      f = new r(),
      m = [],
      g = [],
      v = [],
      $ = [];
    for (l = 0; l < t; l++) s(l);
    for (s(!1 === o ? t : 0), l = 0; l <= t; l++)
      for (h = 0; h <= a; h++) (d.x = l / t), (d.y = h / a), v.push(d.x, d.y);
    !(function () {
      for (h = 1; h <= t; h++)
        for (l = 1; l <= a; l++) {
          var e = (a + 1) * h + (l - 1),
            i = (a + 1) * h + l,
            n = (a + 1) * (h - 1) + l;
          $.push((a + 1) * (h - 1) + (l - 1), e, n), $.push(e, i, n);
        }
    })(),
      this.setIndex($),
      this.setAttribute("position", new z(m, 3)),
      this.setAttribute("normal", new z(g, 3)),
      this.setAttribute("uv", new z(v, 2));
  }
  function tK(e, t, i, n, r, a, o) {
    k.call(this),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: i,
        radialSegments: n,
        p: r,
        q: a,
      }),
      void 0 !== o &&
        console.warn(
          "THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."
        ),
      this.fromBufferGeometry(new t9(e, t, i, n, r, a)),
      this.mergeVertices();
  }
  function t9(e, t, i, n, a, o) {
    function s(e, t, i, n, r) {
      var a = Math.sin(e);
      (i = Math.cos((t = (i / t) * e))),
        (r.x = n * (2 + i) * 0.5 * Math.cos(e)),
        (r.y = n * (2 + i) * a * 0.5),
        (r.z = n * Math.sin(t) * 0.5);
    }
    G.call(this),
      (this.type = "TorusKnotBufferGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: i,
        radialSegments: n,
        p: a,
        q: o,
      }),
      (e = e || 1),
      (t = t || 0.4),
      (i = Math.floor(i) || 64),
      (n = Math.floor(n) || 8),
      (a = a || 2),
      (o = o || 3);
    var c,
      l = [],
      h = [],
      u = [],
      p = [],
      d = new r(),
      f = new r(),
      m = new r(),
      g = new r(),
      v = new r(),
      $ = new r(),
      y = new r();
    for (c = 0; c <= i; ++c) {
      var x = (c / i) * a * Math.PI * 2;
      for (
        s(x, a, o, e, m),
          s(x + 0.01, a, o, e, g),
          $.subVectors(g, m),
          y.addVectors(g, m),
          v.crossVectors($, y),
          y.crossVectors(v, $),
          v.normalize(),
          y.normalize(),
          x = 0;
        x <= n;
        ++x
      ) {
        var _ = (x / n) * Math.PI * 2,
          w = -t * Math.cos(_);
        (_ = t * Math.sin(_)),
          (d.x = m.x + (w * y.x + _ * v.x)),
          (d.y = m.y + (w * y.y + _ * v.y)),
          (d.z = m.z + (w * y.z + _ * v.z)),
          h.push(d.x, d.y, d.z),
          f.subVectors(d, m).normalize(),
          u.push(f.x, f.y, f.z),
          p.push(c / i),
          p.push(x / n);
      }
    }
    for (x = 1; x <= i; x++)
      for (c = 1; c <= n; c++)
        (e = (n + 1) * x + (c - 1)),
          (t = (n + 1) * x + c),
          (a = (n + 1) * (x - 1) + c),
          l.push((n + 1) * (x - 1) + (c - 1), e, a),
          l.push(e, t, a);
    this.setIndex(l),
      this.setAttribute("position", new z(h, 3)),
      this.setAttribute("normal", new z(u, 3)),
      this.setAttribute("uv", new z(p, 2));
  }
  function ie(e, t, i, n, r) {
    k.call(this),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: i,
        tubularSegments: n,
        arc: r,
      }),
      this.fromBufferGeometry(new it(e, t, i, n, r)),
      this.mergeVertices();
  }
  function it(e, t, i, n, a) {
    G.call(this),
      (this.type = "TorusBufferGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: i,
        tubularSegments: n,
        arc: a,
      }),
      (e = e || 1),
      (t = t || 0.4),
      (i = Math.floor(i) || 8),
      (n = Math.floor(n) || 6),
      (a = a || 2 * Math.PI);
    var o,
      s,
      c = [],
      l = [],
      h = [],
      u = [],
      p = new r(),
      d = new r(),
      f = new r();
    for (o = 0; o <= i; o++)
      for (s = 0; s <= n; s++) {
        var m = (s / n) * a,
          g = (o / i) * Math.PI * 2;
        (d.x = (e + t * Math.cos(g)) * Math.cos(m)),
          (d.y = (e + t * Math.cos(g)) * Math.sin(m)),
          (d.z = t * Math.sin(g)),
          l.push(d.x, d.y, d.z),
          (p.x = e * Math.cos(m)),
          (p.y = e * Math.sin(m)),
          f.subVectors(d, p).normalize(),
          h.push(f.x, f.y, f.z),
          u.push(s / n),
          u.push(o / i);
      }
    for (o = 1; o <= i; o++)
      for (s = 1; s <= n; s++)
        (e = (n + 1) * (o - 1) + s - 1),
          (t = (n + 1) * (o - 1) + s),
          (a = (n + 1) * o + s),
          c.push((n + 1) * o + s - 1, e, a),
          c.push(e, t, a);
    this.setIndex(c),
      this.setAttribute("position", new z(l, 3)),
      this.setAttribute("normal", new z(h, 3)),
      this.setAttribute("uv", new z(u, 2));
  }
  function ii(e, t, i, n, r) {
    for (var a, o = 0, s = t, c = i - n; s < i; s += n)
      (o += (e[c] - e[s]) * (e[s + 1] + e[c + 1])), (c = s);
    if (r === 0 < o) for (r = t; r < i; r += n) a = iv(r, e[r], e[r + 1], a);
    else for (r = i - n; r >= t; r -= n) a = iv(r, e[r], e[r + 1], a);
    return a && ip(a, a.next) && (i$(a), (a = a.next)), a;
  }
  function ir(e, t) {
    if (!e) return e;
    t || (t = e);
    do {
      var i = !1;
      if (e.steiner || (!ip(e, e.next) && 0 !== iu(e.prev, e, e.next)))
        e = e.next;
      else {
        if ((i$(e), (e = t = e.prev) === e.next)) break;
        i = !0;
      }
    } while (i || e !== t);
    return t;
  }
  function ia(e, t, i, n) {
    var r = e.prev,
      a = e.next;
    if (0 <= iu(r, e, a)) return !1;
    var o = r.x > e.x ? (r.x > a.x ? r.x : a.x) : e.x > a.x ? e.x : a.x,
      s = r.y > e.y ? (r.y > a.y ? r.y : a.y) : e.y > a.y ? e.y : a.y,
      c = ic(
        r.x < e.x ? (r.x < a.x ? r.x : a.x) : e.x < a.x ? e.x : a.x,
        r.y < e.y ? (r.y < a.y ? r.y : a.y) : e.y < a.y ? e.y : a.y,
        t,
        i,
        n
      );
    for (
      t = ic(o, s, t, i, n), i = e.prevZ, n = e.nextZ;
      i && i.z >= c && n && n.z <= t;

    ) {
      if (
        (i !== e.prev &&
          i !== e.next &&
          ih(r.x, r.y, e.x, e.y, a.x, a.y, i.x, i.y) &&
          0 <= iu(i.prev, i, i.next)) ||
        ((i = i.prevZ),
        n !== e.prev &&
          n !== e.next &&
          ih(r.x, r.y, e.x, e.y, a.x, a.y, n.x, n.y) &&
          0 <= iu(n.prev, n, n.next))
      )
        return !1;
      n = n.nextZ;
    }
    for (; i && i.z >= c; ) {
      if (
        i !== e.prev &&
        i !== e.next &&
        ih(r.x, r.y, e.x, e.y, a.x, a.y, i.x, i.y) &&
        0 <= iu(i.prev, i, i.next)
      )
        return !1;
      i = i.prevZ;
    }
    for (; n && n.z <= t; ) {
      if (
        n !== e.prev &&
        n !== e.next &&
        ih(r.x, r.y, e.x, e.y, a.x, a.y, n.x, n.y) &&
        0 <= iu(n.prev, n, n.next)
      )
        return !1;
      n = n.nextZ;
    }
    return !0;
  }
  function io(e, t) {
    return e.x - t.x;
  }
  function is(e, t) {
    var i = t,
      n = e.x,
      r = e.y,
      a = -1 / 0;
    do {
      if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
        var o = i.x + ((r - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
        if (o <= n && o > a) {
          if (((a = o), o === n)) {
            if (r === i.y) return i;
            if (r === i.next.y) return i.next;
          }
          var s = i.x < i.next.x ? i : i.next;
        }
      }
      i = i.next;
    } while (i !== t);
    if (!s) return null;
    if (n === a) return s.prev;
    (t = s), (o = s.x);
    var c = s.y,
      l = 1 / 0;
    for (i = s.next; i !== t; ) {
      if (
        n >= i.x &&
        i.x >= o &&
        n !== i.x &&
        ih(r < c ? n : a, r, o, c, r < c ? a : n, r, i.x, i.y)
      ) {
        var h = Math.abs(r - i.y) / (n - i.x);
        (h < l || (h === l && i.x > s.x)) && im(i, e) && ((s = i), (l = h));
      }
      i = i.next;
    }
    return s;
  }
  function ic(e, t, i, n, r) {
    return (
      (((e =
        ((e =
          ((e = ((e = 32767 * (e - i) * r) | (e << 8)) & 16711935) | (e << 4)) &
          252645135) |
          (e << 2)) &
        858993459) |
        (e << 1)) &
        1431655765) |
      ((((t =
        ((t =
          ((t = ((t = 32767 * (t - n) * r) | (t << 8)) & 16711935) | (t << 4)) &
          252645135) |
          (t << 2)) &
        858993459) |
        (t << 1)) &
        1431655765) <<
        1)
    );
  }
  function il(e) {
    var t = e,
      i = e;
    do (t.x < i.x || (t.x === i.x && t.y < i.y)) && (i = t), (t = t.next);
    while (t !== e);
    return i;
  }
  function ih(e, t, i, n, r, a, o, s) {
    return (
      0 <= (r - o) * (t - s) - (e - o) * (a - s) &&
      0 <= (e - o) * (n - s) - (i - o) * (t - s) &&
      0 <= (i - o) * (a - s) - (r - o) * (n - s)
    );
  }
  function iu(e, t, i) {
    return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
  }
  function ip(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  function id(e, t, i, n) {
    return (
      !!((ip(e, i) && ip(t, n)) || (ip(e, n) && ip(i, t))) ||
      (0 < iu(e, t, i) != 0 < iu(e, t, n) && 0 < iu(i, n, e) != 0 < iu(i, n, t))
    );
  }
  function im(e, t) {
    return 0 > iu(e.prev, e, e.next)
      ? 0 <= iu(e, t, e.next) && 0 <= iu(e, e.prev, t)
      : 0 > iu(e, t, e.prev) || 0 > iu(e, e.next, t);
  }
  function ig(e, t) {
    var i = new iy(e.i, e.x, e.y),
      n = new iy(t.i, t.x, t.y),
      r = e.next,
      a = t.prev;
    return (
      (e.next = t),
      (t.prev = e),
      (i.next = r),
      (r.prev = i),
      (n.next = i),
      (i.prev = n),
      (a.next = n),
      (n.prev = a),
      n
    );
  }
  function iv(e, t, i, n) {
    return (
      (e = new iy(e, t, i)),
      n
        ? ((e.next = n.next), (e.prev = n), (n.next.prev = e), (n.next = e))
        : ((e.prev = e), (e.next = e)),
      e
    );
  }
  function i$(e) {
    (e.next.prev = e.prev),
      (e.prev.next = e.next),
      e.prevZ && (e.prevZ.nextZ = e.nextZ),
      e.nextZ && (e.nextZ.prevZ = e.prevZ);
  }
  function iy(e, t, i) {
    (this.i = e),
      (this.x = t),
      (this.y = i),
      (this.nextZ = this.prevZ = this.z = this.next = this.prev = null),
      (this.steiner = !1);
  }
  function ix(e) {
    var t = e.length;
    2 < t && e[t - 1].equals(e[0]) && e.pop();
  }
  function i_(e, t) {
    for (var i = 0; i < t.length; i++) e.push(t[i].x), e.push(t[i].y);
  }
  function i8(e, t) {
    k.call(this),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      this.fromBufferGeometry(new iw(e, t)),
      this.mergeVertices();
  }
  function iw(e, t) {
    function n(e) {
      function n(e, t, i) {
        return (
          t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          t.clone().multiplyScalar(i).add(e)
        );
      }
      function c(e, t, n) {
        var r = e.x - t.x,
          a = e.y - t.y,
          o = n.x - e.x,
          s = n.y - e.y,
          c = r * r + a * a;
        if (Math.abs(r * s - a * o) > Number.EPSILON) {
          var l = Math.sqrt(c),
            h = Math.sqrt(o * o + s * s);
          if (
            ((c = t.x - a / l),
            (t = t.y + r / l),
            (s =
              ((n.x - s / h - c) * s - (n.y + o / h - t) * o) /
              (r * s - a * o)),
            2 >= (a = (o = c + r * s - e.x) * o + (r = t + a * s - e.y) * r))
          )
            return new i(o, r);
          a = Math.sqrt(a / 2);
        } else (e = !1), r > Number.EPSILON ? o > Number.EPSILON && (e = !0) : r < -Number.EPSILON ? o < -Number.EPSILON && (e = !0) : Math.sign(a) === Math.sign(s) && (e = !0), e ? ((o = -a), (a = Math.sqrt(c))) : ((o = r), (r = a), (a = Math.sqrt(c / 2)));
        return new i(o / a, r / a);
      }
      function l(e, t) {
        for (H = e.length; 0 <= --H; ) {
          var i = H,
            n = H - 1;
          0 > n && (n = e.length - 1);
          var r,
            s = g + 2 * w;
          for (r = 0; r < s; r++) {
            var c = F * r,
              l = F * (r + 1),
              h = t + n + c,
              u = t + n + l;
            (l = t + i + l),
              p(t + i + c),
              p(h),
              p(l),
              p(h),
              p(u),
              p(l),
              (c = o.length / 3),
              d(
                (c = M.generateSideWallUV(a, o, c - 6, c - 3, c - 2, c - 1))[0]
              ),
              d(c[1]),
              d(c[3]),
              d(c[1]),
              d(c[2]),
              d(c[3]);
          }
        }
      }
      function h(e, t, i) {
        f.push(e), f.push(t), f.push(i);
      }
      function u(e, t, i) {
        p(e),
          p(t),
          p(i),
          (e = o.length / 3),
          d((e = M.generateTopUV(a, o, e - 3, e - 2, e - 1))[0]),
          d(e[1]),
          d(e[2]);
      }
      function p(e) {
        o.push(f[3 * e]), o.push(f[3 * e + 1]), o.push(f[3 * e + 2]);
      }
      function d(e) {
        s.push(e.x), s.push(e.y);
      }
      var f = [],
        m = void 0 !== t.curveSegments ? t.curveSegments : 12,
        g = void 0 !== t.steps ? t.steps : 1,
        v = void 0 !== t.depth ? t.depth : 100,
        $ = void 0 === t.bevelEnabled || t.bevelEnabled,
        y = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        x = void 0 !== t.bevelSize ? t.bevelSize : y - 2,
        _ = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
        w = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        b = t.extrudePath,
        M = void 0 !== t.UVGenerator ? t.UVGenerator : so;
      void 0 !== t.amount &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (v = t.amount));
      var S = !1;
      if (b) {
        var T = b.getSpacedPoints(g);
        (S = !0), ($ = !1);
        var E = b.computeFrenetFrames(g, !1),
          L = new r(),
          A = new r(),
          R = new r();
      }
      $ || (_ = x = y = w = 0), (e = (m = e.extractPoints(m)).shape);
      var P = m.holes;
      if (!sa.isClockWise(e)) {
        e = e.reverse();
        var C = 0;
        for (z = P.length; C < z; C++) {
          var D = P[C];
          sa.isClockWise(D) && (P[C] = D.reverse());
        }
      }
      var I = sa.triangulateShape(e, P),
        N = e;
      for (C = 0, z = P.length; C < z; C++) (D = P[C]), (e = e.concat(D));
      var z,
        B,
        U,
        F = e.length,
        G = I.length;
      m = [];
      var H = 0,
        O = N.length,
        V = O - 1;
      for (B = H + 1; H < O; H++, V++, B++)
        V === O && (V = 0), B === O && (B = 0), (m[H] = c(N[H], N[V], N[B]));
      b = [];
      var k = m.concat();
      for (C = 0, z = P.length; C < z; C++) {
        D = P[C];
        var W = [];
        for (H = 0, V = (O = D.length) - 1, B = H + 1; H < O; H++, V++, B++)
          V === O && (V = 0), B === O && (B = 0), (W[H] = c(D[H], D[V], D[B]));
        b.push(W), (k = k.concat(W));
      }
      for (V = 0; V < w; V++) {
        var j = y * Math.cos(((O = V / w) * Math.PI) / 2);
        for (
          B = x * Math.sin((O * Math.PI) / 2) + _, H = 0, O = N.length;
          H < O;
          H++
        ) {
          var q = n(N[H], m[H], B);
          h(q.x, q.y, -j);
        }
        for (C = 0, z = P.length; C < z; C++)
          for (D = P[C], W = b[C], H = 0, O = D.length; H < O; H++)
            h((q = n(D[H], W[H], B)).x, q.y, -j);
      }
      for (H = 0, B = x + _; H < F; H++)
        (q = $ ? n(e[H], k[H], B) : e[H]),
          S
            ? (A.copy(E.normals[0]).multiplyScalar(q.x),
              L.copy(E.binormals[0]).multiplyScalar(q.y),
              R.copy(T[0]).add(A).add(L),
              h(R.x, R.y, R.z))
            : h(q.x, q.y, 0);
      for (O = 1; O <= g; O++)
        for (H = 0; H < F; H++)
          (q = $ ? n(e[H], k[H], B) : e[H]),
            S
              ? (A.copy(E.normals[O]).multiplyScalar(q.x),
                L.copy(E.binormals[O]).multiplyScalar(q.y),
                R.copy(T[O]).add(A).add(L),
                h(R.x, R.y, R.z))
              : h(q.x, q.y, (v / g) * O);
      for (V = w - 1; 0 <= V; V--) {
        for (
          j = y * Math.cos(((O = V / w) * Math.PI) / 2),
            B = x * Math.sin((O * Math.PI) / 2) + _,
            H = 0,
            O = N.length;
          H < O;
          H++
        )
          h((q = n(N[H], m[H], B)).x, q.y, v + j);
        for (C = 0, z = P.length; C < z; C++)
          for (D = P[C], W = b[C], H = 0, O = D.length; H < O; H++)
            (q = n(D[H], W[H], B)),
              S ? h(q.x, q.y + T[g - 1].y, T[g - 1].x + j) : h(q.x, q.y, v + j);
      }
      !(function () {
        var e = o.length / 3;
        if ($) {
          var t = 0 * F;
          for (H = 0; H < G; H++) u((U = I[H])[2] + t, U[1] + t, U[0] + t);
          for (H = 0, t = F * (g + 2 * w); H < G; H++)
            u((U = I[H])[0] + t, U[1] + t, U[2] + t);
        } else {
          for (H = 0; H < G; H++) u((U = I[H])[2], U[1], U[0]);
          for (H = 0; H < G; H++)
            u((U = I[H])[0] + F * g, U[1] + F * g, U[2] + F * g);
        }
        a.addGroup(e, o.length / 3 - e, 0);
      })(),
        (function () {
          var e = o.length / 3,
            t = 0;
          for (l(N, t), t += N.length, C = 0, z = P.length; C < z; C++)
            l((D = P[C]), t), (t += D.length);
          a.addGroup(e, o.length / 3 - e, 1);
        })();
    }
    G.call(this),
      (this.type = "ExtrudeBufferGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    for (var a = this, o = [], s = [], c = 0, l = e.length; c < l; c++) n(e[c]);
    this.setAttribute("position", new z(o, 3)),
      this.setAttribute("uv", new z(s, 2)),
      this.computeVertexNormals();
  }
  function ib(e, t, i) {
    if (((i.shapes = []), Array.isArray(e)))
      for (var n = 0, r = e.length; n < r; n++) i.shapes.push(e[n].uuid);
    else i.shapes.push(e.uuid);
    return (
      void 0 !== t.extrudePath &&
        (i.options.extrudePath = t.extrudePath.toJSON()),
      i
    );
  }
  function iM(e, t) {
    k.call(this),
      (this.type = "TextGeometry"),
      (this.parameters = { text: e, parameters: t }),
      this.fromBufferGeometry(new iS(e, t)),
      this.mergeVertices();
  }
  function iS(e, t) {
    var i = (t = t || {}).font;
    if (!i || !i.isFont)
      return (
        console.error(
          "THREE.TextGeometry: font parameter is not an instance of THREE.Font."
        ),
        new k()
      );
    (e = i.generateShapes(e, t.size)),
      (t.depth = void 0 !== t.height ? t.height : 50),
      void 0 === t.bevelThickness && (t.bevelThickness = 10),
      void 0 === t.bevelSize && (t.bevelSize = 8),
      void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
      iw.call(this, e, t),
      (this.type = "TextBufferGeometry");
  }
  function iT(e, t, i, n, r, a, o) {
    k.call(this),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: a,
        thetaLength: o,
      }),
      this.fromBufferGeometry(new iE(e, t, i, n, r, a, o)),
      this.mergeVertices();
  }
  function iE(e, t, i, n, a, o, s) {
    G.call(this),
      (this.type = "SphereBufferGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: n,
        phiLength: a,
        thetaStart: o,
        thetaLength: s,
      }),
      (e = e || 1),
      (t = Math.max(3, Math.floor(t) || 8)),
      (i = Math.max(2, Math.floor(i) || 6)),
      (n = void 0 !== n ? n : 0),
      (a = void 0 !== a ? a : 2 * Math.PI);
    var c,
      l,
      h = Math.min(
        (o = void 0 !== o ? o : 0) + (s = void 0 !== s ? s : Math.PI),
        Math.PI
      ),
      u = 0,
      p = [],
      d = new r(),
      f = new r(),
      m = [],
      g = [],
      v = [],
      $ = [];
    for (l = 0; l <= i; l++) {
      var y = [],
        x = l / i,
        _ = 0;
      for (
        0 == l && 0 == o
          ? (_ = 0.5 / t)
          : l == i && h == Math.PI && (_ = -0.5 / t),
          c = 0;
        c <= t;
        c++
      ) {
        var w = c / t;
        (d.x = -e * Math.cos(n + w * a) * Math.sin(o + x * s)),
          (d.y = e * Math.cos(o + x * s)),
          (d.z = e * Math.sin(n + w * a) * Math.sin(o + x * s)),
          g.push(d.x, d.y, d.z),
          f.copy(d).normalize(),
          v.push(f.x, f.y, f.z),
          $.push(w + _, 1 - x),
          y.push(u++);
      }
      p.push(y);
    }
    for (l = 0; l < i; l++)
      for (c = 0; c < t; c++)
        (e = p[l][c + 1]),
          (n = p[l][c]),
          (a = p[l + 1][c]),
          (s = p[l + 1][c + 1]),
          (0 !== l || 0 < o) && m.push(e, n, s),
          (l !== i - 1 || h < Math.PI) && m.push(n, a, s);
    this.setIndex(m),
      this.setAttribute("position", new z(g, 3)),
      this.setAttribute("normal", new z(v, 3)),
      this.setAttribute("uv", new z($, 2));
  }
  function i1(e, t, i, n, r, a) {
    k.call(this),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: i,
        phiSegments: n,
        thetaStart: r,
        thetaLength: a,
      }),
      this.fromBufferGeometry(new i0(e, t, i, n, r, a)),
      this.mergeVertices();
  }
  function i0(e, t, n, a, o, s) {
    G.call(this),
      (this.type = "RingBufferGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: a,
        thetaStart: o,
        thetaLength: s,
      }),
      (e = e || 0.5),
      (t = t || 1),
      (o = void 0 !== o ? o : 0),
      (s = void 0 !== s ? s : 2 * Math.PI),
      (n = void 0 !== n ? Math.max(3, n) : 8);
    var c,
      l,
      h = [],
      u = [],
      p = [],
      d = [],
      f = e,
      m = (t - e) / (a = void 0 !== a ? Math.max(1, a) : 1),
      g = new r(),
      v = new i();
    for (c = 0; c <= a; c++) {
      for (l = 0; l <= n; l++)
        (e = o + (l / n) * s),
          (g.x = f * Math.cos(e)),
          (g.y = f * Math.sin(e)),
          u.push(g.x, g.y, g.z),
          p.push(0, 0, 1),
          (v.x = (g.x / t + 1) / 2),
          (v.y = (g.y / t + 1) / 2),
          d.push(v.x, v.y);
      f += m;
    }
    for (c = 0; c < a; c++)
      for (t = c * (n + 1), l = 0; l < n; l++)
        (o = (e = l + t) + n + 1),
          (s = e + n + 2),
          (f = e + 1),
          h.push(e, o, f),
          h.push(o, s, f);
    this.setIndex(h),
      this.setAttribute("position", new z(u, 3)),
      this.setAttribute("normal", new z(p, 3)),
      this.setAttribute("uv", new z(d, 2));
  }
  function iL(e, t, i, n) {
    k.call(this),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: i, phiLength: n }),
      this.fromBufferGeometry(new iA(e, t, i, n)),
      this.mergeVertices();
  }
  function iA(e, t, n, a) {
    G.call(this),
      (this.type = "LatheBufferGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: n, phiLength: a }),
      (t = Math.floor(t) || 12),
      (n = n || 0),
      (a = a || 2 * Math.PI),
      (a = rH.clamp(a, 0, 2 * Math.PI));
    var o,
      s = [],
      c = [],
      l = [],
      h = 1 / t,
      u = new r(),
      p = new i();
    for (o = 0; o <= t; o++) {
      var d = n + o * h * a,
        f = Math.sin(d),
        m = Math.cos(d);
      for (d = 0; d <= e.length - 1; d++)
        (u.x = e[d].x * f),
          (u.y = e[d].y),
          (u.z = e[d].x * m),
          c.push(u.x, u.y, u.z),
          (p.x = o / t),
          (p.y = d / (e.length - 1)),
          l.push(p.x, p.y);
    }
    for (o = 0; o < t; o++)
      for (d = 0; d < e.length - 1; d++)
        (h = (n = d + o * e.length) + e.length),
          (u = n + e.length + 1),
          (p = n + 1),
          s.push(n, h, p),
          s.push(h, u, p);
    if (
      (this.setIndex(s),
      this.setAttribute("position", new z(c, 3)),
      this.setAttribute("uv", new z(l, 2)),
      this.computeVertexNormals(),
      a === 2 * Math.PI)
    )
      for (
        a = this.attributes.normal.array,
          s = new r(),
          c = new r(),
          l = new r(),
          n = t * e.length * 3,
          d = o = 0;
        o < e.length;
        o++, d += 3
      )
        (s.x = a[d + 0]),
          (s.y = a[d + 1]),
          (s.z = a[d + 2]),
          (c.x = a[n + d + 0]),
          (c.y = a[n + d + 1]),
          (c.z = a[n + d + 2]),
          l.addVectors(s, c).normalize(),
          (a[d + 0] = a[n + d + 0] = l.x),
          (a[d + 1] = a[n + d + 1] = l.y),
          (a[d + 2] = a[n + d + 2] = l.z);
  }
  function iR(e, t) {
    k.call(this),
      (this.type = "ShapeGeometry"),
      "object" == typeof t &&
        (console.warn(
          "THREE.ShapeGeometry: Options parameter has been removed."
        ),
        (t = t.curveSegments)),
      (this.parameters = { shapes: e, curveSegments: t }),
      this.fromBufferGeometry(new iP(e, t)),
      this.mergeVertices();
  }
  function iP(e, t) {
    function i(e) {
      var i,
        s = r.length / 3,
        l = (e = e.extractPoints(t)).shape,
        h = e.holes;
      for (
        !1 === sa.isClockWise(l) && (l = l.reverse()), e = 0, i = h.length;
        e < i;
        e++
      ) {
        var u = h[e];
        !0 === sa.isClockWise(u) && (h[e] = u.reverse());
      }
      var p = sa.triangulateShape(l, h);
      for (e = 0, i = h.length; e < i; e++) (u = h[e]), (l = l.concat(u));
      for (e = 0, i = l.length; e < i; e++)
        (u = l[e]), r.push(u.x, u.y, 0), a.push(0, 0, 1), o.push(u.x, u.y);
      for (e = 0, i = p.length; e < i; e++)
        (l = p[e]), n.push(l[0] + s, l[1] + s, l[2] + s), (c += 3);
    }
    G.call(this),
      (this.type = "ShapeBufferGeometry"),
      (this.parameters = { shapes: e, curveSegments: t }),
      (t = t || 12);
    var n = [],
      r = [],
      a = [],
      o = [],
      s = 0,
      c = 0;
    if (!1 === Array.isArray(e)) i(e);
    else
      for (var l = 0; l < e.length; l++)
        i(e[l]), this.addGroup(s, c, l), (s += c), (c = 0);
    this.setIndex(n),
      this.setAttribute("position", new z(r, 3)),
      this.setAttribute("normal", new z(a, 3)),
      this.setAttribute("uv", new z(o, 2));
  }
  function iC(e, t) {
    if (((t.shapes = []), Array.isArray(e)))
      for (var i = 0, n = e.length; i < n; i++) t.shapes.push(e[i].uuid);
    else t.shapes.push(e.uuid);
    return t;
  }
  function iD(e, t) {
    G.call(this),
      (this.type = "EdgesGeometry"),
      (this.parameters = { thresholdAngle: t });
    var i = [];
    t = Math.cos(rH.DEG2RAD * (void 0 !== t ? t : 1));
    var n = [0, 0],
      r = {},
      a = ["a", "b", "c"];
    if (e.isBufferGeometry) {
      var o = new k();
      o.fromBufferGeometry(e);
    } else o = e.clone();
    o.mergeVertices(), o.computeFaceNormals(), (e = o.vertices), (o = o.faces);
    for (var s = 0, c = o.length; s < c; s++)
      for (var l = o[s], h = 0; 3 > h; h++) {
        var u = l[a[h]],
          p = l[a[(h + 1) % 3]];
        (n[0] = Math.min(u, p)),
          (n[1] = Math.max(u, p)),
          void 0 === r[(u = n[0] + "," + n[1])]
            ? (r[u] = { index1: n[0], index2: n[1], face1: s, face2: void 0 })
            : (r[u].face2 = s);
      }
    for (u in r)
      (void 0 === (n = r[u]).face2 ||
        o[n.face1].normal.dot(o[n.face2].normal) <= t) &&
        ((a = e[n.index1]),
        i.push(a.x, a.y, a.z),
        (a = e[n.index2]),
        i.push(a.x, a.y, a.z));
    this.setAttribute("position", new z(i, 3));
  }
  function iI(e, t, i, n, r, a, o, s) {
    k.call(this),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: i,
        radialSegments: n,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: s,
      }),
      this.fromBufferGeometry(new iN(e, t, i, n, r, a, o, s)),
      this.mergeVertices();
  }
  function iN(e, t, n, a, o, s, c, l) {
    function h(n) {
      var o,
        s = new i(),
        h = new r(),
        v = 0,
        x = !0 === n ? e : t,
        _ = !0 === n ? 1 : -1,
        w = g;
      for (o = 1; o <= a; o++)
        d.push(0, $ * _, 0), f.push(0, _, 0), m.push(0.5, 0.5), g++;
      var b = g;
      for (o = 0; o <= a; o++) {
        var M = (o / a) * l + c,
          S = Math.cos(M);
        (M = Math.sin(M)),
          (h.x = x * M),
          (h.y = $ * _),
          (h.z = x * S),
          d.push(h.x, h.y, h.z),
          f.push(0, _, 0),
          (s.x = 0.5 * S + 0.5),
          (s.y = 0.5 * M * _ + 0.5),
          m.push(s.x, s.y),
          g++;
      }
      for (o = 0; o < a; o++)
        (s = w + o),
          (h = b + o),
          !0 === n ? p.push(h, h + 1, s) : p.push(h + 1, h, s),
          (v += 3);
      u.addGroup(y, v, !0 === n ? 1 : 2), (y += v);
    }
    G.call(this),
      (this.type = "CylinderBufferGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: a,
        heightSegments: o,
        openEnded: s,
        thetaStart: c,
        thetaLength: l,
      });
    var u = this;
    (e = void 0 !== e ? e : 1),
      (t = void 0 !== t ? t : 1),
      (n = n || 1),
      (a = Math.floor(a) || 8),
      (o = Math.floor(o) || 1),
      (s = void 0 !== s && s),
      (c = void 0 !== c ? c : 0),
      (l = void 0 !== l ? l : 2 * Math.PI);
    var p = [],
      d = [],
      f = [],
      m = [],
      g = 0,
      v = [],
      $ = n / 2,
      y = 0;
    !(function () {
      var i,
        s,
        h = new r(),
        x = new r(),
        _ = 0,
        w = (t - e) / n;
      for (s = 0; s <= o; s++) {
        var b = [],
          M = s / o,
          S = M * (t - e) + e;
        for (i = 0; i <= a; i++) {
          var T = i / a,
            E = T * l + c,
            L = Math.sin(E);
          (E = Math.cos(E)),
            (x.x = S * L),
            (x.y = -M * n + $),
            (x.z = S * E),
            d.push(x.x, x.y, x.z),
            h.set(L, w, E).normalize(),
            f.push(h.x, h.y, h.z),
            m.push(T, 1 - M),
            b.push(g++);
        }
        v.push(b);
      }
      for (i = 0; i < a; i++)
        for (s = 0; s < o; s++)
          (h = v[s + 1][i]),
            (x = v[s + 1][i + 1]),
            (w = v[s][i + 1]),
            p.push(v[s][i], h, w),
            p.push(h, x, w),
            (_ += 6);
      u.addGroup(y, _, 0), (y += _);
    })(),
      !1 === s && (0 < e && h(!0), 0 < t && h(!1)),
      this.setIndex(p),
      this.setAttribute("position", new z(d, 3)),
      this.setAttribute("normal", new z(f, 3)),
      this.setAttribute("uv", new z(m, 2));
  }
  function iz(e, t, i, n, r, a, o) {
    iI.call(this, 0, e, t, i, n, r, a, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: i,
        heightSegments: n,
        openEnded: r,
        thetaStart: a,
        thetaLength: o,
      });
  }
  function iB(e, t, i, n, r, a, o) {
    iN.call(this, 0, e, t, i, n, r, a, o),
      (this.type = "ConeBufferGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: i,
        heightSegments: n,
        openEnded: r,
        thetaStart: a,
        thetaLength: o,
      });
  }
  function i2(e, t, i, n) {
    k.call(this),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: i,
        thetaLength: n,
      }),
      this.fromBufferGeometry(new iU(e, t, i, n)),
      this.mergeVertices();
  }
  function iU(e, t, n, a) {
    G.call(this),
      (this.type = "CircleBufferGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: a,
      }),
      (e = e || 1),
      (t = void 0 !== t ? Math.max(3, t) : 8),
      (n = void 0 !== n ? n : 0),
      (a = void 0 !== a ? a : 2 * Math.PI);
    var o,
      s = [],
      c = [],
      l = [],
      h = [],
      u = new r(),
      p = new i();
    c.push(0, 0, 0), l.push(0, 0, 1), h.push(0.5, 0.5);
    var d = 0;
    for (o = 3; d <= t; d++, o += 3) {
      var f = n + (d / t) * a;
      (u.x = e * Math.cos(f)),
        (u.y = e * Math.sin(f)),
        c.push(u.x, u.y, u.z),
        l.push(0, 0, 1),
        (p.x = (c[o] / e + 1) / 2),
        (p.y = (c[o + 1] / e + 1) / 2),
        h.push(p.x, p.y);
    }
    for (o = 1; o <= t; o++) s.push(o, o + 1, 0);
    this.setIndex(s),
      this.setAttribute("position", new z(c, 3)),
      this.setAttribute("normal", new z(l, 3)),
      this.setAttribute("uv", new z(h, 2));
  }
  function iF(e) {
    T.call(this),
      (this.type = "ShadowMaterial"),
      (this.color = new _(0)),
      (this.transparent = !0),
      this.setValues(e);
  }
  function iG(e) {
    q.call(this, e), (this.type = "RawShaderMaterial");
  }
  function i3(e) {
    T.call(this),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new _(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.lightMap = this.map = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new _(0)),
      (this.emissiveIntensity = 1),
      (this.bumpMap = this.emissiveMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new i(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.envMap =
        this.alphaMap =
        this.metalnessMap =
        this.roughnessMap =
          null),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function iH(e) {
    i3.call(this),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.reflectivity = 0.5),
      (this.clearcoatRoughness = this.clearcoat = 0),
      (this.sheen = null),
      (this.clearcoatNormalScale = new i(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.transparency = 0),
      this.setValues(e);
  }
  function iO(e) {
    T.call(this),
      (this.type = "MeshPhongMaterial"),
      (this.color = new _(16777215)),
      (this.specular = new _(1118481)),
      (this.shininess = 30),
      (this.lightMap = this.map = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new _(0)),
      (this.emissiveIntensity = 1),
      (this.bumpMap = this.emissiveMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new i(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.envMap = this.alphaMap = this.specularMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function iV(e) {
    T.call(this),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new _(16777215)),
      (this.specular = new _(1118481)),
      (this.shininess = 30),
      (this.lightMap = this.gradientMap = this.map = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new _(0)),
      (this.emissiveIntensity = 1),
      (this.bumpMap = this.emissiveMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new i(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = this.specularMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function i4(e) {
    T.call(this),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new i(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.morphNormals = this.morphTargets = this.skinning = this.fog = !1),
      this.setValues(e);
  }
  function ik(e) {
    T.call(this),
      (this.type = "MeshLambertMaterial"),
      (this.color = new _(16777215)),
      (this.lightMap = this.map = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new _(0)),
      (this.emissiveIntensity = 1),
      (this.envMap =
        this.alphaMap =
        this.specularMap =
        this.emissiveMap =
          null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function iW(e) {
    T.call(this),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new _(16777215)),
      (this.bumpMap = this.map = this.matcap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new i(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(e);
  }
  function i5(e) {
    tD.call(this),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  function i6(e, t, i, n) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== n ? n : new t.constructor(i)),
      (this.sampleValues = t),
      (this.valueSize = i);
  }
  function i7(e, t, i, n) {
    i6.call(this, e, t, i, n),
      (this._offsetNext =
        this._weightNext =
        this._offsetPrev =
        this._weightPrev =
          -0);
  }
  function ij(e, t, i, n) {
    i6.call(this, e, t, i, n);
  }
  function iq(e, t, i, n) {
    i6.call(this, e, t, i, n);
  }
  function iX(e, t, i, n) {
    if (void 0 === e)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = sl.convertArray(t, this.TimeBufferType)),
      (this.values = sl.convertArray(i, this.ValueBufferType)),
      this.setInterpolation(n || this.DefaultInterpolation);
  }
  function iY(e, t, i) {
    iX.call(this, e, t, i);
  }
  function iZ(e, t, i, n) {
    iX.call(this, e, t, i, n);
  }
  function iJ(e, t, i, n) {
    iX.call(this, e, t, i, n);
  }
  function iQ(e, t, i, n) {
    i6.call(this, e, t, i, n);
  }
  function iK(e, t, i, n) {
    iX.call(this, e, t, i, n);
  }
  function i9(e, t, i, n) {
    iX.call(this, e, t, i, n);
  }
  function ne(e, t, i, n) {
    iX.call(this, e, t, i, n);
  }
  function nt(e, t, i) {
    (this.name = e),
      (this.tracks = i),
      (this.duration = void 0 !== t ? t : -1),
      (this.uuid = rH.generateUUID()),
      0 > this.duration && this.resetDuration();
  }
  function ni(e) {
    if (void 0 === e.type)
      throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var t = (function e(t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return iJ;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return ne;
        case "color":
          return iZ;
        case "quaternion":
          return iK;
        case "bool":
        case "boolean":
          return iY;
        case "string":
          return i9;
      }
      throw Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    })(e.type);
    if (void 0 === e.times) {
      var i = [],
        n = [];
      sl.flattenJSON(e.keys, i, n, "value"), (e.times = i), (e.values = n);
    }
    return void 0 !== t.parse
      ? t.parse(e)
      : new t(e.name, e.times, e.values, e.interpolation);
  }
  function nn(e, t, i) {
    var n = this,
      r = !1,
      a = 0,
      o = 0,
      s = void 0,
      c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = i),
      (this.itemStart = function (e) {
        o++, !1 === r && void 0 !== n.onStart && n.onStart(e, a, o), (r = !0);
      }),
      (this.itemEnd = function (e) {
        a++,
          void 0 !== n.onProgress && n.onProgress(e, a, o),
          a === o && ((r = !1), void 0 !== n.onLoad) && n.onLoad();
      }),
      (this.itemError = function (e) {
        void 0 !== n.onError && n.onError(e);
      }),
      (this.resolveURL = function (e) {
        return s ? s(e) : e;
      }),
      (this.setURLModifier = function (e) {
        return (s = e), this;
      }),
      (this.addHandler = function (e, t) {
        return c.push(e, t), this;
      }),
      (this.removeHandler = function (e) {
        return -1 !== (e = c.indexOf(e)) && c.splice(e, 2), this;
      }),
      (this.getHandler = function (e) {
        for (var t = 0, i = c.length; t < i; t += 2) {
          var n = c[t],
            r = c[t + 1];
          if ((n.global && (n.lastIndex = 0), n.test(e))) return r;
        }
        return null;
      });
  }
  function nr(e) {
    (this.manager = void 0 !== e ? e : su),
      (this.crossOrigin = "anonymous"),
      (this.resourcePath = this.path = "");
  }
  function na(e) {
    nr.call(this, e);
  }
  function no(e) {
    nr.call(this, e);
  }
  function ns(e) {
    nr.call(this, e);
  }
  function nc(e) {
    nr.call(this, e);
  }
  function nl(e) {
    nr.call(this, e);
  }
  function nh(e) {
    nr.call(this, e);
  }
  function nu(e) {
    nr.call(this, e);
  }
  function np() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  function nd(e, t, i, n, r, a, o, s) {
    np.call(this),
      (this.type = "EllipseCurve"),
      (this.aX = e || 0),
      (this.aY = t || 0),
      (this.xRadius = i || 1),
      (this.yRadius = n || 1),
      (this.aStartAngle = r || 0),
      (this.aEndAngle = a || 2 * Math.PI),
      (this.aClockwise = o || !1),
      (this.aRotation = s || 0);
  }
  function nf(e, t, i, n, r, a) {
    nd.call(this, e, t, i, i, n, r, a), (this.type = "ArcCurve");
  }
  function nm() {
    var e = 0,
      t = 0,
      i = 0,
      n = 0;
    return {
      initCatmullRom: function (r, a, o, s, c) {
        (r = c * (o - r)),
          (s = c * (s - a)),
          (e = a),
          (t = r),
          (i = -3 * a + 3 * o - 2 * r - s),
          (n = 2 * a - 2 * o + r + s);
      },
      initNonuniformCatmullRom: function (r, a, o, s, c, l, h) {
        (r = ((a - r) / c - (o - r) / (c + l) + (o - a) / l) * l),
          (s = ((o - a) / l - (s - a) / (l + h) + (s - o) / h) * l),
          (e = a),
          (t = r),
          (i = -3 * a + 3 * o - 2 * r - s),
          (n = 2 * a - 2 * o + r + s);
      },
      calc: function (r) {
        var a = r * r;
        return e + t * r + i * a + n * a * r;
      },
    };
  }
  function ng(e, t, i, n) {
    np.call(this),
      (this.type = "CatmullRomCurve3"),
      (this.points = e || []),
      (this.closed = t || !1),
      (this.curveType = i || "centripetal"),
      (this.tension = n || 0.5);
  }
  function nv(e, t, i, n, r) {
    (t = 0.5 * (n - t)), (r = 0.5 * (r - i));
    var a = e * e;
    return (
      (2 * i - 2 * n + t + r) * e * a +
      (-3 * i + 3 * n - 2 * t - r) * a +
      t * e +
      i
    );
  }
  function n$(e, t, i, n) {
    var r = 1 - e;
    return r * r * t + 2 * (1 - e) * e * i + e * e * n;
  }
  function ny(e, t, i, n, r) {
    var a = 1 - e,
      o = 1 - e;
    return (
      a * a * a * t +
      3 * o * o * e * i +
      3 * (1 - e) * e * e * n +
      e * e * e * r
    );
  }
  function nx(e, t, n, r) {
    np.call(this),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e || new i()),
      (this.v1 = t || new i()),
      (this.v2 = n || new i()),
      (this.v3 = r || new i());
  }
  function n_(e, t, i, n) {
    np.call(this),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e || new r()),
      (this.v1 = t || new r()),
      (this.v2 = i || new r()),
      (this.v3 = n || new r());
  }
  function n8(e, t) {
    np.call(this),
      (this.type = "LineCurve"),
      (this.v1 = e || new i()),
      (this.v2 = t || new i());
  }
  function nw(e, t) {
    np.call(this),
      (this.type = "LineCurve3"),
      (this.v1 = e || new r()),
      (this.v2 = t || new r());
  }
  function nb(e, t, n) {
    np.call(this),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e || new i()),
      (this.v1 = t || new i()),
      (this.v2 = n || new i());
  }
  function nM(e, t, i) {
    np.call(this),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e || new r()),
      (this.v1 = t || new r()),
      (this.v2 = i || new r());
  }
  function nS(e) {
    np.call(this), (this.type = "SplineCurve"), (this.points = e || []);
  }
  function nT() {
    np.call(this),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  function nE(e) {
    nT.call(this),
      (this.type = "Path"),
      (this.currentPoint = new i()),
      e && this.setFromPoints(e);
  }
  function n1(e) {
    nE.call(this, e),
      (this.uuid = rH.generateUUID()),
      (this.type = "Shape"),
      (this.holes = []);
  }
  function n0(e, t) {
    d.call(this),
      (this.type = "Light"),
      (this.color = new _(e)),
      (this.intensity = void 0 !== t ? t : 1),
      (this.receiveShadow = void 0);
  }
  function nL(e, t, i) {
    n0.call(this, e, i),
      (this.type = "HemisphereLight"),
      (this.castShadow = void 0),
      this.position.copy(d.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new _(t));
  }
  function nA(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.radius = 1),
      (this.mapSize = new i(512, 512)),
      (this.mapPass = this.map = null),
      (this.matrix = new h()),
      (this._frustum = new K()),
      (this._frameExtents = new i(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new s(0, 0, 1, 1)]);
  }
  function nR() {
    nA.call(this, new Y(50, 1, 0.5, 500));
  }
  function nP(e, t, i, n, r, a) {
    n0.call(this, e, t),
      (this.type = "SpotLight"),
      this.position.copy(d.DefaultUp),
      this.updateMatrix(),
      (this.target = new d()),
      Object.defineProperty(this, "power", {
        get: function () {
          return this.intensity * Math.PI;
        },
        set: function (e) {
          this.intensity = e / Math.PI;
        },
      }),
      (this.distance = void 0 !== i ? i : 0),
      (this.angle = void 0 !== n ? n : Math.PI / 3),
      (this.penumbra = void 0 !== r ? r : 0),
      (this.decay = void 0 !== a ? a : 1),
      (this.shadow = new nR());
  }
  function nC() {
    nA.call(this, new Y(90, 1, 0.5, 500)),
      (this._frameExtents = new i(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new s(2, 1, 1, 1),
        new s(0, 1, 1, 1),
        new s(3, 1, 1, 1),
        new s(1, 1, 1, 1),
        new s(3, 0, 1, 1),
        new s(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new r(1, 0, 0),
        new r(-1, 0, 0),
        new r(0, 0, 1),
        new r(0, 0, -1),
        new r(0, 1, 0),
        new r(0, -1, 0),
      ]),
      (this._cubeUps = [
        new r(0, 1, 0),
        new r(0, 1, 0),
        new r(0, 1, 0),
        new r(0, 1, 0),
        new r(0, 0, 1),
        new r(0, 0, -1),
      ]);
  }
  function nD(e, t, i, n) {
    n0.call(this, e, t),
      (this.type = "PointLight"),
      Object.defineProperty(this, "power", {
        get: function () {
          return 4 * this.intensity * Math.PI;
        },
        set: function (e) {
          this.intensity = e / (4 * Math.PI);
        },
      }),
      (this.distance = void 0 !== i ? i : 0),
      (this.decay = void 0 !== n ? n : 1),
      (this.shadow = new nC());
  }
  function nI(e, t, i, n, r, a) {
    X.call(this),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = void 0 !== e ? e : -1),
      (this.right = void 0 !== t ? t : 1),
      (this.top = void 0 !== i ? i : 1),
      (this.bottom = void 0 !== n ? n : -1),
      (this.near = void 0 !== r ? r : 0.1),
      (this.far = void 0 !== a ? a : 2e3),
      this.updateProjectionMatrix();
  }
  function nN() {
    nA.call(this, new nI(-5, 5, 5, -5, 0.5, 500));
  }
  function nz(e, t) {
    n0.call(this, e, t),
      (this.type = "DirectionalLight"),
      this.position.copy(d.DefaultUp),
      this.updateMatrix(),
      (this.target = new d()),
      (this.shadow = new nN());
  }
  function nB(e, t) {
    n0.call(this, e, t),
      (this.type = "AmbientLight"),
      (this.castShadow = void 0);
  }
  function n2(e, t, i, n) {
    n0.call(this, e, t),
      (this.type = "RectAreaLight"),
      (this.width = void 0 !== i ? i : 10),
      (this.height = void 0 !== n ? n : 10);
  }
  function nU(e) {
    nr.call(this, e), (this.textures = {});
  }
  function nF() {
    G.call(this),
      (this.type = "InstancedBufferGeometry"),
      (this.maxInstancedCount = void 0);
  }
  function nG(e, t, i, n) {
    "number" == typeof i &&
      ((n = i),
      (i = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      L.call(this, e, t, i),
      (this.meshPerAttribute = n || 1);
  }
  function n3(e) {
    nr.call(this, e);
  }
  function nH(e) {
    nr.call(this, e);
  }
  function nO(e) {
    "undefined" == typeof createImageBitmap &&
      console.warn(
        "THREE.ImageBitmapLoader: createImageBitmap() not supported."
      ),
      "undefined" == typeof fetch &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      nr.call(this, e),
      (this.options = void 0);
  }
  function nV() {
    (this.type = "ShapePath"),
      (this.color = new _()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  function n4(e) {
    (this.type = "Font"), (this.data = e);
  }
  function nk(e) {
    nr.call(this, e);
  }
  function nW(e) {
    nr.call(this, e);
  }
  function n5() {
    this.coefficients = [];
    for (var e = 0; 9 > e; e++) this.coefficients.push(new r());
  }
  function n6(e, t) {
    n0.call(this, void 0, t), (this.sh = void 0 !== e ? e : new n5());
  }
  function n7(e, t, i) {
    n6.call(this, void 0, i),
      (e = new _().set(e)),
      (i = new _().set(t)),
      (t = new r(e.r, e.g, e.b)),
      (e = new r(i.r, i.g, i.b));
    var n = (i = Math.sqrt(Math.PI)) * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(t).add(e).multiplyScalar(i),
      this.sh.coefficients[1].copy(t).sub(e).multiplyScalar(n);
  }
  function nj(e, t) {
    n6.call(this, void 0, t),
      (e = new _().set(e)),
      this.sh.coefficients[0]
        .set(e.r, e.g, e.b)
        .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
  function nq() {
    (this.type = "StereoCamera"),
      (this.aspect = 1),
      (this.eyeSep = 0.064),
      (this.cameraL = new Y()),
      this.cameraL.layers.enable(1),
      (this.cameraL.matrixAutoUpdate = !1),
      (this.cameraR = new Y()),
      this.cameraR.layers.enable(2),
      (this.cameraR.matrixAutoUpdate = !1),
      (this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null,
      });
  }
  function nX(e) {
    (this.autoStart = void 0 === e || e),
      (this.elapsedTime = this.oldTime = this.startTime = 0),
      (this.running = !1);
  }
  function nY() {
    d.call(this),
      (this.type = "AudioListener"),
      (this.context = sb.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new nX());
  }
  function nZ(e) {
    d.call(this),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.offset = this.loopEnd = this.loopStart = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.sourceType = "empty"),
      (this._pausedAt = this._startedAt = 0),
      (this.filters = []);
  }
  function nJ(e) {
    nZ.call(this, e),
      (this.panner = this.context.createPanner()),
      (this.panner.panningModel = "HRTF"),
      this.panner.connect(this.gain);
  }
  function nQ(e, t) {
    (this.analyser = e.context.createAnalyser()),
      (this.analyser.fftSize = void 0 !== t ? t : 2048),
      (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
      e.getOutput().connect(this.analyser);
  }
  function nK(e, t, i) {
    switch (((this.binding = e), (this.valueSize = i), (e = Float64Array), t)) {
      case "quaternion":
        t = this._slerp;
        break;
      case "string":
      case "bool":
        (e = Array), (t = this._select);
        break;
      default:
        t = this._lerp;
    }
    (this.buffer = new e(4 * i)),
      (this._mixBufferRegion = t),
      (this.referenceCount = this.useCount = this.cumulativeWeight = 0);
  }
  function n9(e, t, i) {
    (i = i || re.parseTrackName(t)),
      (this._targetGroup = e),
      (this._bindings = e.subscribe_(t, i));
  }
  function re(e, t, i) {
    (this.path = t),
      (this.parsedPath = i || re.parseTrackName(t)),
      (this.node = re.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e);
  }
  function rt() {
    (this.uuid = rH.generateUUID()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0);
    var e = {};
    this._indicesByUUID = e;
    for (var t = 0, i = arguments.length; t !== i; ++t)
      e[arguments[t].uuid] = t;
    (this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {}),
      (this.stats = {
        objects: {
          get total() {
            return this._objects.length;
          },
          get inUse() {
            return this.total - this.nCachedObjects_;
          },
        },
        get bindingsPerObject() {
          return this._bindings.length;
        },
      });
  }
  function ri(e, t, i) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = i || null),
      (i = Array((t = (e = t.tracks).length)));
    for (var n = { endingStart: 2400, endingEnd: 2400 }, r = 0; r !== t; ++r) {
      var a = e[r].createInterpolant(null);
      (i[r] = a), (a.settings = n);
    }
    (this._interpolantSettings = n),
      (this._interpolants = i),
      (this._propertyBindings = Array(t)),
      (this._weightInterpolant =
        this._timeScaleInterpolant =
        this._byClipCacheIndex =
        this._cacheIndex =
          null),
      (this.loop = 2201),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this._effectiveWeight =
        this.weight =
        this._effectiveTimeScale =
        this.timeScale =
          1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0);
  }
  function rn(e) {
    (this._root = e),
      this._initMemoryManager(),
      (this.time = this._accuIndex = 0),
      (this.timeScale = 1);
  }
  function rr(e, t) {
    "string" == typeof e &&
      (console.warn("THREE.Uniform: Type parameter is no longer needed."),
      (e = t)),
      (this.value = e);
  }
  function ra(e, t, i) {
    tS.call(this, e, t), (this.meshPerAttribute = i || 1);
  }
  function ro(e, t, i, n) {
    (this.ray = new $(e, t)),
      (this.near = i || 0),
      (this.far = n || 1 / 0),
      (this.camera = null),
      (this.params = {
        Mesh: {},
        Line: {},
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }),
      Object.defineProperties(this.params, {
        PointCloud: {
          get: function () {
            return (
              console.warn(
                "THREE.Raycaster: params.PointCloud has been renamed to params.Points."
              ),
              this.Points
            );
          },
        },
      });
  }
  function rs(e, t) {
    return e.distance - t.distance;
  }
  function rc(e, t, i, n) {
    if (!1 !== e.visible && (e.raycast(t, i), !0 === n)) {
      (e = e.children), (n = 0);
      for (var r = e.length; n < r; n++) rc(e[n], t, i, !0);
    }
  }
  function rl(e, t, i) {
    return (
      (this.radius = void 0 !== e ? e : 1),
      (this.phi = void 0 !== t ? t : 0),
      (this.theta = void 0 !== i ? i : 0),
      this
    );
  }
  function rh(e, t, i) {
    return (
      (this.radius = void 0 !== e ? e : 1),
      (this.theta = void 0 !== t ? t : 0),
      (this.y = void 0 !== i ? i : 0),
      this
    );
  }
  function ru(e, t) {
    (this.min = void 0 !== e ? e : new i(1 / 0, 1 / 0)),
      (this.max = void 0 !== t ? t : new i(-1 / 0, -1 / 0));
  }
  function rp(e, t) {
    (this.start = void 0 !== e ? e : new r()),
      (this.end = void 0 !== t ? t : new r());
  }
  function rd(e) {
    d.call(this), (this.material = e), (this.render = function () {});
  }
  function rf(e, t) {
    d.call(this),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = t),
      (e = new G()),
      (t = [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, -1, 1,
      ]);
    for (var i = 0, n = 1; 32 > i; i++, n++) {
      var r = (i / 32) * Math.PI * 2,
        a = (n / 32) * Math.PI * 2;
      t.push(Math.cos(r), Math.sin(r), 1, Math.cos(a), Math.sin(a), 1);
    }
    e.setAttribute("position", new z(t, 3)),
      (t = new tD({ fog: !1 })),
      (this.cone = new tN(e, t)),
      this.add(this.cone),
      this.update();
  }
  function rm(e) {
    for (
      var t = (function e(t) {
          var i = [];
          t && t.isBone && i.push(t);
          for (var n = 0; n < t.children.length; n++)
            i.push.apply(i, e(t.children[n]));
          return i;
        })(e),
        i = new G(),
        n = [],
        r = [],
        a = new _(0, 0, 1),
        o = new _(0, 1, 0),
        s = 0;
      s < t.length;
      s++
    ) {
      var c = t[s];
      c.parent &&
        c.parent.isBone &&
        (n.push(0, 0, 0),
        n.push(0, 0, 0),
        r.push(a.r, a.g, a.b),
        r.push(o.r, o.g, o.b));
    }
    i.setAttribute("position", new z(n, 3)),
      i.setAttribute("color", new z(r, 3)),
      (n = new tD({
        vertexColors: 2,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      tN.call(this, i, n),
      (this.root = e),
      (this.bones = t),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  function rg(e, t, i) {
    (this.light = e),
      this.light.updateMatrixWorld(),
      (this.color = i),
      (e = new iE(t, 4, 2)),
      (t = new E({ wireframe: !0, fog: !1 })),
      H.call(this, e, t),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  function rv(e, t, i) {
    d.call(this),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = i),
      (e = new tj(t)).rotateY(0.5 * Math.PI),
      (this.material = new E({ wireframe: !0, fog: !1 })),
      void 0 === this.color && (this.material.vertexColors = 2),
      (t = e.getAttribute("position")),
      (t = new Float32Array(3 * t.count)),
      e.setAttribute("color", new L(t, 3)),
      this.add(new H(e, this.material)),
      this.update();
  }
  function r$(e, t, i, n) {
    (e = e || 10),
      (t = t || 10),
      (i = new _(void 0 !== i ? i : 4473924)),
      (n = new _(void 0 !== n ? n : 8947848));
    var r = t / 2,
      a = e / t,
      o = e / 2;
    e = [];
    for (var s = [], c = 0, l = 0, h = -o; c <= t; c++, h += a) {
      e.push(-o, 0, h, o, 0, h), e.push(h, 0, -o, h, 0, o);
      var u = c === r ? i : n;
      u.toArray(s, l),
        (l += 3),
        u.toArray(s, l),
        (l += 3),
        u.toArray(s, l),
        (l += 3),
        u.toArray(s, l),
        (l += 3);
    }
    (t = new G()).setAttribute("position", new z(e, 3)),
      t.setAttribute("color", new z(s, 3)),
      (i = new tD({ vertexColors: 2 })),
      tN.call(this, t, i);
  }
  function ry(e, t, i, n, r, a) {
    (e = e || 10),
      (t = t || 16),
      (i = i || 8),
      (n = n || 64),
      (r = new _(void 0 !== r ? r : 4473924)),
      (a = new _(void 0 !== a ? a : 8947848));
    var o,
      s = [],
      c = [];
    for (o = 0; o <= t; o++) {
      var l = (o / t) * 2 * Math.PI,
        h = Math.sin(l) * e;
      (l = Math.cos(l) * e), s.push(0, 0, 0), s.push(h, 0, l);
      var u = 1 & o ? r : a;
      c.push(u.r, u.g, u.b), c.push(u.r, u.g, u.b);
    }
    for (o = 0; o <= i; o++) {
      u = 1 & o ? r : a;
      var p = e - (e / i) * o;
      for (t = 0; t < n; t++)
        (h = Math.sin((l = (t / n) * 2 * Math.PI)) * p),
          (l = Math.cos(l) * p),
          s.push(h, 0, l),
          c.push(u.r, u.g, u.b),
          (h = Math.sin((l = ((t + 1) / n) * 2 * Math.PI)) * p),
          (l = Math.cos(l) * p),
          s.push(h, 0, l),
          c.push(u.r, u.g, u.b);
    }
    (e = new G()).setAttribute("position", new z(s, 3)),
      e.setAttribute("color", new z(c, 3)),
      (s = new tD({ vertexColors: 2 })),
      tN.call(this, e, s);
  }
  function rx(e, t, i) {
    d.call(this),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = i),
      void 0 === t && (t = 1),
      (e = new G()).setAttribute(
        "position",
        new z([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3)
      ),
      (t = new tD({ fog: !1 })),
      (this.lightPlane = new tI(e, t)),
      this.add(this.lightPlane),
      (e = new G()).setAttribute("position", new z([0, 0, 0, 0, 0, 1], 3)),
      (this.targetLine = new tI(e, t)),
      this.add(this.targetLine),
      this.update();
  }
  function r_(e) {
    function t(e, t, n) {
      i(e, n), i(t, n);
    }
    function i(e, t) {
      a.push(0, 0, 0),
        o.push(t.r, t.g, t.b),
        void 0 === s[e] && (s[e] = []),
        s[e].push(a.length / 3 - 1);
    }
    var n = new G(),
      r = new tD({ color: 16777215, vertexColors: 1 }),
      a = [],
      o = [],
      s = {},
      c = new _(16755200),
      l = new _(16711680),
      h = new _(43775),
      u = new _(16777215),
      p = new _(3355443);
    t("n1", "n2", c),
      t("n2", "n4", c),
      t("n4", "n3", c),
      t("n3", "n1", c),
      t("f1", "f2", c),
      t("f2", "f4", c),
      t("f4", "f3", c),
      t("f3", "f1", c),
      t("n1", "f1", c),
      t("n2", "f2", c),
      t("n3", "f3", c),
      t("n4", "f4", c),
      t("p", "n1", l),
      t("p", "n2", l),
      t("p", "n3", l),
      t("p", "n4", l),
      t("u1", "u2", h),
      t("u2", "u3", h),
      t("u3", "u1", h),
      t("c", "t", u),
      t("p", "c", p),
      t("cn1", "cn2", p),
      t("cn3", "cn4", p),
      t("cf1", "cf2", p),
      t("cf3", "cf4", p),
      n.setAttribute("position", new z(a, 3)),
      n.setAttribute("color", new z(o, 3)),
      tN.call(this, n, r),
      (this.camera = e),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = s),
      this.update();
  }
  function r8(e, t, i, n, r, a, o) {
    if ((sj.set(r, a, o).unproject(n), void 0 !== (e = t[e])))
      for (i = i.getAttribute("position"), t = 0, n = e.length; t < n; t++)
        i.setXYZ(e[t], sj.x, sj.y, sj.z);
  }
  function rw(e, t) {
    (this.object = e),
      void 0 === t && (t = 16776960),
      (e = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]));
    var i = new Float32Array(24),
      n = new G();
    n.setIndex(new L(e, 1)),
      n.setAttribute("position", new L(i, 3)),
      tN.call(this, n, new tD({ color: t })),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  function rb(e, t) {
    (this.type = "Box3Helper"),
      (this.box = e),
      (t = t || 16776960),
      (e = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]));
    var i = new G();
    i.setIndex(new L(e, 1)),
      i.setAttribute(
        "position",
        new z(
          [
            1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1,
            -1, 1, -1, -1,
          ],
          3
        )
      ),
      tN.call(this, i, new tD({ color: t })),
      this.geometry.computeBoundingSphere();
  }
  function rM(e, t, i) {
    (this.type = "PlaneHelper"),
      (this.plane = e),
      (this.size = void 0 === t ? 1 : t),
      (e = void 0 !== i ? i : 16776960),
      (t = new G()).setAttribute(
        "position",
        new z(
          [
            1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1,
            1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
          ],
          3
        )
      ),
      t.computeBoundingSphere(),
      tI.call(this, t, new tD({ color: e })),
      (t = new G()).setAttribute(
        "position",
        new z([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)
      ),
      t.computeBoundingSphere(),
      this.add(
        new H(
          t,
          new E({ color: e, opacity: 0.2, transparent: !0, depthWrite: !1 })
        )
      );
  }
  function rS(e, t, i, n, a, o) {
    d.call(this),
      void 0 === e && (e = new r(0, 0, 1)),
      void 0 === t && (t = new r(0, 0, 0)),
      void 0 === i && (i = 1),
      void 0 === n && (n = 16776960),
      void 0 === a && (a = 0.2 * i),
      void 0 === o && (o = 0.2 * a),
      void 0 === sY &&
        ((sY = new G()).setAttribute("position", new z([0, 0, 0, 0, 1, 0], 3)),
        (sZ = new iN(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0)),
      this.position.copy(t),
      (this.line = new tI(sY, new tD({ color: n }))),
      (this.line.matrixAutoUpdate = !1),
      this.add(this.line),
      (this.cone = new H(sZ, new E({ color: n }))),
      (this.cone.matrixAutoUpdate = !1),
      this.add(this.cone),
      this.setDirection(e),
      this.setLength(i, a, o);
  }
  function rT(e) {
    var t = [0, 0, 0, (e = e || 1), 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e];
    (e = new G()).setAttribute("position", new z(t, 3)),
      e.setAttribute(
        "color",
        new z([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)
      ),
      (t = new tD({ vertexColors: 2 })),
      tN.call(this, e, t);
  }
  function rE(e) {
    (cd = e), rL(ca);
  }
  function r1(e) {
    var t = {
        magFilter: 1003,
        minFilter: 1003,
        generateMipmaps: !1,
        type: e ? e.type : 1009,
        format: e ? e.format : 1023,
        encoding: e ? e.encoding : 3002,
        depthBuffer: !1,
        stencilBuffer: !1,
      },
      i = rA(t);
    return (i.depthBuffer = !e), (cp = rA(t)), i;
  }
  function r0() {
    cp.dispose(), cd.setRenderTarget(null);
    var e = cd.getSize(new i());
    cd.setViewport(0, 0, e.x, e.y);
  }
  function rL(e) {
    var t = new f();
    t.add(new H(cl[0], e)), cd.compile(t, cr);
  }
  function rA(e) {
    return (
      ((e = new c(3 * ce, 3 * ce, e)).texture.mapping = 306),
      (e.texture.name = "PMREM.cubeUv"),
      (e.scissorTest = !0),
      e
    );
  }
  function rR(e, t, i, n) {
    var r = 1 / cd.getPixelRatio();
    (e *= r),
      (t *= r),
      (i *= r),
      (n *= r),
      cd.setViewport(e, t, i, n),
      cd.setScissor(e, t, i, n);
  }
  function rP(e) {
    var t = cd.autoClear;
    cd.autoClear = !1;
    for (var i = 1; i < ci; i++)
      rC(
        e,
        i - 1,
        i,
        Math.sqrt(cu[i] * cu[i] - cu[i - 1] * cu[i - 1]),
        cg[(i - 1) % cg.length]
      );
    cd.autoClear = t;
  }
  function rC(e, t, i, n, r) {
    rD(e, cp, t, i, n, "latitudinal", r), rD(cp, e, i, i, n, "longitudinal", r);
  }
  function rD(e, t, i, n, r, a, o) {
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    var s = new f();
    s.add(new H(cl[n], ca));
    var c = ca.uniforms,
      l = ch[i] - 1;
    l = isFinite(r) ? Math.PI / (2 * l) : (2 * Math.PI) / 39;
    var h = r / l,
      u = isFinite(r) ? 1 + Math.floor(3 * h) : 20;
    20 < u &&
      console.warn(
        "sigmaRadians, " +
          r +
          ", is too large and will clip, as it requested " +
          u +
          " samples when the maximum is set to 20"
      );
    for (var p = [], d = 0, m = 0; 20 > m; ++m)
      (r = Math.exp((-(r = m / h) * r) / 2)),
        p.push(r),
        0 == m ? (d += r) : m < u && (d += 2 * r);
    for (m = 0; m < p.length; m++) p[m] /= d;
    (c.envMap.value = e.texture),
      (c.samples.value = u),
      (c.weights.value = p),
      (c.latitudinal.value = "latitudinal" === a),
      o && (c.poleAxis.value = o),
      (c.dTheta.value = l),
      (c.mipInt.value = 8 - i),
      (c.inputEncoding.value = cn[e.texture.encoding]),
      (c.outputEncoding.value = cn[e.texture.encoding]),
      (r = 3 * Math.max(0, ce - 2 * (e = ch[n]))),
      (n = (0 === n ? 0 : 2 * ce) + 2 * e * (4 < n ? n - 8 + 4 : 0)),
      cd.setRenderTarget(t),
      rR(r, n, 3 * e, 2 * e),
      cd.render(s, cr);
  }
  function rI() {
    var e = new i(1, 1);
    return (
      ((e = new iG({
        uniforms: {
          envMap: { value: null },
          texelSize: { value: e },
          inputEncoding: { value: cn[3e3] },
          outputEncoding: { value: cn[3e3] },
        },
        vertexShader: rz(),
        fragmentShader:
          "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n" +
          rB() +
          "\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n	gl_FragColor = vec4(0.0);\n	vec3 outputDirection = normalize(vOutputDirection);\n	vec2 uv;\n	uv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n	uv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n	vec2 f = fract(uv / texelSize - 0.5);\n	uv -= f * texelSize;\n	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n	uv.x += texelSize.x;\n	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n	uv.y += texelSize.y;\n	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n	uv.x -= texelSize.x;\n	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n	vec3 tm = mix(tl, tr, f.x);\n	vec3 bm = mix(bl, br, f.x);\n	gl_FragColor.rgb = mix(tm, bm, f.y);\n	gl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n		",
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      })).type = "EquirectangularToCubeUV"),
      e
    );
  }
  function rN() {
    var e = new iG({
      uniforms: {
        envMap: { value: null },
        inputEncoding: { value: cn[3e3] },
        outputEncoding: { value: cn[3e3] },
      },
      vertexShader: rz(),
      fragmentShader:
        "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n" +
        rB() +
        "\n\nvoid main() {\n	gl_FragColor = vec4(0.0);\n	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n	gl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n		",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
    return (e.type = "CubemapToCubeUV"), e;
  }
  function rz() {
    return "\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n	uv = 2.0 * uv - 1.0;\n	vec3 direction = vec3(uv, 1.0);\n	if (face == 0.0) {\n		direction = direction.zyx;\n		direction.z *= -1.0;\n	} else if (face == 1.0) {\n		direction = direction.xzy;\n		direction.z *= -1.0;\n	} else if (face == 3.0) {\n		direction = direction.zyx;\n		direction.x *= -1.0;\n	} else if (face == 4.0) {\n		direction = direction.xzy;\n		direction.y *= -1.0;\n	} else if (face == 5.0) {\n		direction.xz *= -1.0;\n	}\n	return direction;\n}\nvoid main() {\n	vOutputDirection = getDirection(uv, faceIndex);\n	gl_Position = vec4( position, 1.0 );\n}\n	";
  }
  function rB() {
    return "\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n	if(inputEncoding == 0){\n		return value;\n	}else if(inputEncoding == 1){\n		return sRGBToLinear(value);\n	}else if(inputEncoding == 2){\n		return RGBEToLinear(value);\n	}else if(inputEncoding == 3){\n		return RGBMToLinear(value, 7.0);\n	}else if(inputEncoding == 4){\n		return RGBMToLinear(value, 16.0);\n	}else if(inputEncoding == 5){\n		return RGBDToLinear(value, 256.0);\n	}else{\n		return GammaToLinear(value, 2.2);\n	}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n	if(outputEncoding == 0){\n		return value;\n	}else if(outputEncoding == 1){\n		return LinearTosRGB(value);\n	}else if(outputEncoding == 2){\n		return LinearToRGBE(value);\n	}else if(outputEncoding == 3){\n		return LinearToRGBM(value, 7.0);\n	}else if(outputEncoding == 4){\n		return LinearToRGBM(value, 16.0);\n	}else if(outputEncoding == 5){\n		return LinearToRGBD(value, 256.0);\n	}else{\n		return LinearToGamma(value, 2.2);\n	}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n	return inputTexelToLinear(color);\n}\n	";
  }
  function r2(e) {
    console.warn(
      "THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    ),
      ng.call(this, e),
      (this.type = "catmullrom"),
      (this.closed = !0);
  }
  function rU(e) {
    console.warn(
      "THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    ),
      ng.call(this, e),
      (this.type = "catmullrom");
  }
  function rF(e) {
    console.warn(
      "THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."
    ),
      ng.call(this, e),
      (this.type = "catmullrom");
  }
  void 0 === Number.EPSILON && (Number.EPSILON = 2220446049250313e-31),
    void 0 === Number.isInteger &&
      (Number.isInteger = function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
      }),
    void 0 === Math.sign &&
      (Math.sign = function (e) {
        return 0 > e ? -1 : 0 < e ? 1 : +e;
      }),
    !1 == "name" in Function.prototype &&
      Object.defineProperty(Function.prototype, "name", {
        get: function () {
          return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
        },
      }),
    void 0 === Object.assign &&
      (Object.assign = function (e) {
        if (null == e)
          throw TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          if (null != n)
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    Object.assign(t.prototype, {
      addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var i = this._listeners;
        void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
      },
      hasEventListener: function (e, t) {
        if (void 0 === this._listeners) return !1;
        var i = this._listeners;
        return void 0 !== i[e] && -1 !== i[e].indexOf(t);
      },
      removeEventListener: function (e, t) {
        void 0 !== this._listeners &&
          void 0 !== (e = this._listeners[e]) &&
          -1 !== (t = e.indexOf(t)) &&
          e.splice(t, 1);
      },
      dispatchEvent: function (e) {
        if (void 0 !== this._listeners) {
          var t = this._listeners[e.type];
          if (void 0 !== t) {
            (e.target = this), (t = t.slice(0));
            for (var i = 0, n = t.length; i < n; i++) t[i].call(this, e);
          }
        }
      },
    });
  for (var rG = [], r3 = 0; 256 > r3; r3++)
    rG[r3] = (16 > r3 ? "0" : "") + r3.toString(16);
  var rH = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function () {
      var e = (4294967295 * Math.random()) | 0,
        t = (4294967295 * Math.random()) | 0,
        i = (4294967295 * Math.random()) | 0,
        n = (4294967295 * Math.random()) | 0;
      return (
        rG[255 & e] +
        rG[(e >> 8) & 255] +
        rG[(e >> 16) & 255] +
        rG[(e >> 24) & 255] +
        "-" +
        rG[255 & t] +
        rG[(t >> 8) & 255] +
        "-" +
        rG[((t >> 16) & 15) | 64] +
        rG[(t >> 24) & 255] +
        "-" +
        rG[(63 & i) | 128] +
        rG[(i >> 8) & 255] +
        "-" +
        rG[(i >> 16) & 255] +
        rG[(i >> 24) & 255] +
        rG[255 & n] +
        rG[(n >> 8) & 255] +
        rG[(n >> 16) & 255] +
        rG[(n >> 24) & 255]
      ).toUpperCase();
    },
    clamp: function (e, t, i) {
      return Math.max(t, Math.min(i, e));
    },
    euclideanModulo: function (e, t) {
      return ((e % t) + t) % t;
    },
    mapLinear: function (e, t, i, n, r) {
      return n + ((e - t) * (r - n)) / (i - t);
    },
    lerp: function (e, t, i) {
      return (1 - i) * e + i * t;
    },
    smoothstep: function (e, t, i) {
      return e <= t
        ? 0
        : e >= i
        ? 1
        : (e = (e - t) / (i - t)) * e * (3 - 2 * e);
    },
    smootherstep: function (e, t, i) {
      return e <= t
        ? 0
        : e >= i
        ? 1
        : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10);
    },
    randInt: function (e, t) {
      return e + Math.floor(Math.random() * (t - e + 1));
    },
    randFloat: function (e, t) {
      return e + Math.random() * (t - e);
    },
    randFloatSpread: function (e) {
      return e * (0.5 - Math.random());
    },
    degToRad: function (e) {
      return e * rH.DEG2RAD;
    },
    radToDeg: function (e) {
      return e * rH.RAD2DEG;
    },
    isPowerOfTwo: function (e) {
      return 0 == (e & (e - 1)) && 0 !== e;
    },
    ceilPowerOfTwo: function (e) {
      return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
    },
    floorPowerOfTwo: function (e) {
      return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
    },
  };
  Object.defineProperties(i.prototype, {
    width: {
      get: function () {
        return this.x;
      },
      set: function (e) {
        this.x = e;
      },
    },
    height: {
      get: function () {
        return this.y;
      },
      set: function (e) {
        this.y = e;
      },
    },
  }),
    Object.assign(i.prototype, {
      isVector2: !0,
      set: function (e, t) {
        return (this.x = e), (this.y = t), this;
      },
      setScalar: function (e) {
        return (this.y = this.x = e), this;
      },
      setX: function (e) {
        return (this.x = e), this;
      },
      setY: function (e) {
        return (this.y = e), this;
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          default:
            throw Error("index is out of range: " + e);
        }
        return this;
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          default:
            throw Error("index is out of range: " + e);
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y);
      },
      copy: function (e) {
        return (this.x = e.x), (this.y = e.y), this;
      },
      add: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            ),
            this.addVectors(e, t))
          : ((this.x += e.x), (this.y += e.y), this);
      },
      addScalar: function (e) {
        return (this.x += e), (this.y += e), this;
      },
      addVectors: function (e, t) {
        return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
      },
      addScaledVector: function (e, t) {
        return (this.x += e.x * t), (this.y += e.y * t), this;
      },
      sub: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            ),
            this.subVectors(e, t))
          : ((this.x -= e.x), (this.y -= e.y), this);
      },
      subScalar: function (e) {
        return (this.x -= e), (this.y -= e), this;
      },
      subVectors: function (e, t) {
        return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
      },
      multiply: function (e) {
        return (this.x *= e.x), (this.y *= e.y), this;
      },
      multiplyScalar: function (e) {
        return (this.x *= e), (this.y *= e), this;
      },
      divide: function (e) {
        return (this.x /= e.x), (this.y /= e.y), this;
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e);
      },
      applyMatrix3: function (e) {
        var t = this.x,
          i = this.y;
        return (
          (e = e.elements),
          (this.x = e[0] * t + e[3] * i + e[6]),
          (this.y = e[1] * t + e[4] * i + e[7]),
          this
        );
      },
      min: function (e) {
        return (
          (this.x = Math.min(this.x, e.x)),
          (this.y = Math.min(this.y, e.y)),
          this
        );
      },
      max: function (e) {
        return (
          (this.x = Math.max(this.x, e.x)),
          (this.y = Math.max(this.y, e.y)),
          this
        );
      },
      clamp: function (e, t) {
        return (
          (this.x = Math.max(e.x, Math.min(t.x, this.x))),
          (this.y = Math.max(e.y, Math.min(t.y, this.y))),
          this
        );
      },
      clampScalar: function (e, t) {
        return (
          (this.x = Math.max(e, Math.min(t, this.x))),
          (this.y = Math.max(e, Math.min(t, this.y))),
          this
        );
      },
      clampLength: function (e, t) {
        var i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(
          Math.max(e, Math.min(t, i))
        );
      },
      floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      roundToZero: function () {
        return (
          (this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y)),
          this
        );
      },
      negate: function () {
        return (this.x = -this.x), (this.y = -this.y), this;
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y;
      },
      cross: function (e) {
        return this.x * e.y - this.y * e.x;
      },
      lengthSq: function () {
        return this.x * this.x + this.y * this.y;
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y);
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1);
      },
      angle: function () {
        var e = Math.atan2(this.y, this.x);
        return 0 > e && (e += 2 * Math.PI), e;
      },
      distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e));
      },
      distanceToSquared: function (e) {
        var t = this.x - e.x;
        return t * t + (e = this.y - e.y) * e;
      },
      manhattanDistanceTo: function (e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e);
      },
      lerp: function (e, t) {
        return (
          (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
        );
      },
      lerpVectors: function (e, t, i) {
        return this.subVectors(t, e).multiplyScalar(i).add(e);
      },
      equals: function (e) {
        return e.x === this.x && e.y === this.y;
      },
      fromArray: function (e, t) {
        return (
          void 0 === t && (t = 0), (this.x = e[t]), (this.y = e[t + 1]), this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this.x),
          (e[t + 1] = this.y),
          e
        );
      },
      fromBufferAttribute: function (e, t, i) {
        return (
          void 0 !== i &&
            console.warn(
              "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
            ),
          (this.x = e.getX(t)),
          (this.y = e.getY(t)),
          this
        );
      },
      rotateAround: function (e, t) {
        var i = Math.cos(t);
        t = Math.sin(t);
        var n = this.x - e.x,
          r = this.y - e.y;
        return (
          (this.x = n * i - r * t + e.x), (this.y = n * t + r * i + e.y), this
        );
      },
    }),
    Object.assign(n, {
      slerp: function (e, t, i, n) {
        return i.copy(e).slerp(t, n);
      },
      slerpFlat: function (e, t, i, n, r, a, o) {
        var s = i[n + 0],
          c = i[n + 1],
          l = i[n + 2];
        (i = i[n + 3]), (n = r[a + 0]);
        var h = r[a + 1],
          u = r[a + 2];
        if (i !== (r = r[a + 3]) || s !== n || c !== h || l !== u) {
          a = 1 - o;
          var p = s * n + c * h + l * u + i * r,
            d = 0 <= p ? 1 : -1,
            f = 1 - p * p;
          f > Number.EPSILON &&
            ((a =
              Math.sin(a * (p = Math.atan2((f = Math.sqrt(f)), p * d))) / f),
            (o = Math.sin(o * p) / f)),
            (d *= o),
            (s = s * a + n * d),
            (c = c * a + h * d),
            (l = l * a + u * d),
            (i = i * a + r * d),
            a === 1 - o &&
              ((o = 1 / Math.sqrt(s * s + c * c + l * l + i * i)),
              (s *= o),
              (c *= o),
              (l *= o),
              (i *= o));
        }
        (e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = i);
      },
    }),
    Object.defineProperties(n.prototype, {
      x: {
        get: function () {
          return this._x;
        },
        set: function (e) {
          (this._x = e), this._onChangeCallback();
        },
      },
      y: {
        get: function () {
          return this._y;
        },
        set: function (e) {
          (this._y = e), this._onChangeCallback();
        },
      },
      z: {
        get: function () {
          return this._z;
        },
        set: function (e) {
          (this._z = e), this._onChangeCallback();
        },
      },
      w: {
        get: function () {
          return this._w;
        },
        set: function (e) {
          (this._w = e), this._onChangeCallback();
        },
      },
    }),
    Object.assign(n.prototype, {
      isQuaternion: !0,
      set: function (e, t, i, n) {
        return (
          (this._x = e),
          (this._y = t),
          (this._z = i),
          (this._w = n),
          this._onChangeCallback(),
          this
        );
      },
      clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._w);
      },
      copy: function (e) {
        return (
          (this._x = e.x),
          (this._y = e.y),
          (this._z = e.z),
          (this._w = e.w),
          this._onChangeCallback(),
          this
        );
      },
      setFromEuler: function (e, t) {
        if (!e || !e.isEuler)
          throw Error(
            "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
          );
        var i = e._x,
          n = e._y,
          r = e._z;
        e = e.order;
        var a = Math.cos,
          o = Math.sin,
          s = a(i / 2),
          c = a(n / 2);
        return (
          (a = a(r / 2)),
          (i = o(i / 2)),
          (n = o(n / 2)),
          (r = o(r / 2)),
          "XYZ" === e
            ? ((this._x = i * c * a + s * n * r),
              (this._y = s * n * a - i * c * r),
              (this._z = s * c * r + i * n * a),
              (this._w = s * c * a - i * n * r))
            : "YXZ" === e
            ? ((this._x = i * c * a + s * n * r),
              (this._y = s * n * a - i * c * r),
              (this._z = s * c * r - i * n * a),
              (this._w = s * c * a + i * n * r))
            : "ZXY" === e
            ? ((this._x = i * c * a - s * n * r),
              (this._y = s * n * a + i * c * r),
              (this._z = s * c * r + i * n * a),
              (this._w = s * c * a - i * n * r))
            : "ZYX" === e
            ? ((this._x = i * c * a - s * n * r),
              (this._y = s * n * a + i * c * r),
              (this._z = s * c * r - i * n * a),
              (this._w = s * c * a + i * n * r))
            : "YZX" === e
            ? ((this._x = i * c * a + s * n * r),
              (this._y = s * n * a + i * c * r),
              (this._z = s * c * r - i * n * a),
              (this._w = s * c * a - i * n * r))
            : "XZY" === e &&
              ((this._x = i * c * a - s * n * r),
              (this._y = s * n * a - i * c * r),
              (this._z = s * c * r + i * n * a),
              (this._w = s * c * a + i * n * r)),
          !1 !== t && this._onChangeCallback(),
          this
        );
      },
      setFromAxisAngle: function (e, t) {
        var i = Math.sin((t /= 2));
        return (
          (this._x = e.x * i),
          (this._y = e.y * i),
          (this._z = e.z * i),
          (this._w = Math.cos(t)),
          this._onChangeCallback(),
          this
        );
      },
      setFromRotationMatrix: function (e) {
        var t = e.elements,
          i = t[0];
        e = t[4];
        var n = t[8],
          r = t[1],
          a = t[5],
          o = t[9],
          s = t[2],
          c = t[6],
          l = i + a + (t = t[10]);
        return (
          0 < l
            ? ((i = 0.5 / Math.sqrt(l + 1)),
              (this._w = 0.25 / i),
              (this._x = (c - o) * i),
              (this._y = (n - s) * i),
              (this._z = (r - e) * i))
            : i > a && i > t
            ? ((i = 2 * Math.sqrt(1 + i - a - t)),
              (this._w = (c - o) / i),
              (this._x = 0.25 * i),
              (this._y = (e + r) / i),
              (this._z = (n + s) / i))
            : a > t
            ? ((i = 2 * Math.sqrt(1 + a - i - t)),
              (this._w = (n - s) / i),
              (this._x = (e + r) / i),
              (this._y = 0.25 * i),
              (this._z = (o + c) / i))
            : ((i = 2 * Math.sqrt(1 + t - i - a)),
              (this._w = (r - e) / i),
              (this._x = (n + s) / i),
              (this._y = (o + c) / i),
              (this._z = 0.25 * i)),
          this._onChangeCallback(),
          this
        );
      },
      setFromUnitVectors: function (e, t) {
        var i = e.dot(t) + 1;
        return (
          1e-6 > i
            ? ((i = 0),
              Math.abs(e.x) > Math.abs(e.z)
                ? ((this._x = -e.y), (this._y = e.x), (this._z = 0))
                : ((this._x = 0), (this._y = -e.z), (this._z = e.y)))
            : ((this._x = e.y * t.z - e.z * t.y),
              (this._y = e.z * t.x - e.x * t.z),
              (this._z = e.x * t.y - e.y * t.x)),
          (this._w = i),
          this.normalize()
        );
      },
      angleTo: function (e) {
        return 2 * Math.acos(Math.abs(rH.clamp(this.dot(e), -1, 1)));
      },
      rotateTowards: function (e, t) {
        var i = this.angleTo(e);
        return 0 === i || this.slerp(e, Math.min(1, t / i)), this;
      },
      inverse: function () {
        return this.conjugate();
      },
      conjugate: function () {
        return (
          (this._x *= -1),
          (this._y *= -1),
          (this._z *= -1),
          this._onChangeCallback(),
          this
        );
      },
      dot: function (e) {
        return (
          this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        );
      },
      lengthSq: function () {
        return (
          this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
        );
      },
      length: function () {
        return Math.sqrt(
          this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
        );
      },
      normalize: function () {
        var e = this.length();
        return (
          0 === e
            ? ((this._z = this._y = this._x = 0), (this._w = 1))
            : ((e = 1 / e),
              (this._x *= e),
              (this._y *= e),
              (this._z *= e),
              (this._w *= e)),
          this._onChangeCallback(),
          this
        );
      },
      multiply: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
            ),
            this.multiplyQuaternions(e, t))
          : this.multiplyQuaternions(this, e);
      },
      premultiply: function (e) {
        return this.multiplyQuaternions(e, this);
      },
      multiplyQuaternions: function (e, t) {
        var i = e._x,
          n = e._y,
          r = e._z;
        e = e._w;
        var a = t._x,
          o = t._y,
          s = t._z;
        return (
          (t = t._w),
          (this._x = i * t + e * a + n * s - r * o),
          (this._y = n * t + e * o + r * a - i * s),
          (this._z = r * t + e * s + i * o - n * a),
          (this._w = e * t - i * a - n * o - r * s),
          this._onChangeCallback(),
          this
        );
      },
      slerp: function (e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        var i = this._x,
          n = this._y,
          r = this._z,
          a = this._w,
          o = a * e._w + i * e._x + n * e._y + r * e._z;
        if (
          (0 > o
            ? ((this._w = -e._w),
              (this._x = -e._x),
              (this._y = -e._y),
              (this._z = -e._z),
              (o = -o))
            : this.copy(e),
          1 <= o)
        )
          return (
            (this._w = a), (this._x = i), (this._y = n), (this._z = r), this
          );
        if ((e = 1 - o * o) <= Number.EPSILON)
          return (
            (o = 1 - t),
            (this._w = o * a + t * this._w),
            (this._x = o * i + t * this._x),
            (this._y = o * n + t * this._y),
            (this._z = o * r + t * this._z),
            this.normalize(),
            this._onChangeCallback(),
            this
          );
        var s = Math.atan2((e = Math.sqrt(e)), o);
        return (
          (o = Math.sin((1 - t) * s) / e),
          (t = Math.sin(t * s) / e),
          (this._w = a * o + this._w * t),
          (this._x = i * o + this._x * t),
          (this._y = n * o + this._y * t),
          (this._z = r * o + this._z * t),
          this._onChangeCallback(),
          this
        );
      },
      equals: function (e) {
        return (
          e._x === this._x &&
          e._y === this._y &&
          e._z === this._z &&
          e._w === this._w
        );
      },
      fromArray: function (e, t) {
        return (
          void 0 === t && (t = 0),
          (this._x = e[t]),
          (this._y = e[t + 1]),
          (this._z = e[t + 2]),
          (this._w = e[t + 3]),
          this._onChangeCallback(),
          this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this._x),
          (e[t + 1] = this._y),
          (e[t + 2] = this._z),
          (e[t + 3] = this._w),
          e
        );
      },
      _onChange: function (e) {
        return (this._onChangeCallback = e), this;
      },
      _onChangeCallback: function () {},
    });
  var rO = new r(),
    rV = new n();
  Object.assign(r.prototype, {
    isVector3: !0,
    set: function (e, t, i) {
      return (this.x = e), (this.y = t), (this.z = i), this;
    },
    setScalar: function (e) {
      return (this.z = this.y = this.x = e), this;
    },
    setX: function (e) {
      return (this.x = e), this;
    },
    setY: function (e) {
      return (this.y = e), this;
    },
    setZ: function (e) {
      return (this.z = e), this;
    },
    setComponent: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw Error("index is out of range: " + e);
      }
      return this;
    },
    getComponent: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + e);
      }
    },
    clone: function () {
      return new this.constructor(this.x, this.y, this.z);
    },
    copy: function (e) {
      return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    },
    add: function (e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(e, t))
        : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    },
    addScalar: function (e) {
      return (this.x += e), (this.y += e), (this.z += e), this;
    },
    addVectors: function (e, t) {
      return (
        (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
      );
    },
    addScaledVector: function (e, t) {
      return (
        (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this
      );
    },
    sub: function (e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(e, t))
        : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    },
    subScalar: function (e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), this;
    },
    subVectors: function (e, t) {
      return (
        (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
      );
    },
    multiply: function (e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
          ),
          this.multiplyVectors(e, t))
        : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    },
    multiplyScalar: function (e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), this;
    },
    multiplyVectors: function (e, t) {
      return (
        (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
      );
    },
    applyEuler: function (e) {
      return (
        (e && e.isEuler) ||
          console.error(
            "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
          ),
        this.applyQuaternion(rV.setFromEuler(e))
      );
    },
    applyAxisAngle: function (e, t) {
      return this.applyQuaternion(rV.setFromAxisAngle(e, t));
    },
    applyMatrix3: function (e) {
      var t = this.x,
        i = this.y,
        n = this.z;
      return (
        (e = e.elements),
        (this.x = e[0] * t + e[3] * i + e[6] * n),
        (this.y = e[1] * t + e[4] * i + e[7] * n),
        (this.z = e[2] * t + e[5] * i + e[8] * n),
        this
      );
    },
    applyNormalMatrix: function (e) {
      return this.applyMatrix3(e).normalize();
    },
    applyMatrix4: function (e) {
      var t = this.x,
        i = this.y,
        n = this.z,
        r = 1 / ((e = e.elements)[3] * t + e[7] * i + e[11] * n + e[15]);
      return (
        (this.x = (e[0] * t + e[4] * i + e[8] * n + e[12]) * r),
        (this.y = (e[1] * t + e[5] * i + e[9] * n + e[13]) * r),
        (this.z = (e[2] * t + e[6] * i + e[10] * n + e[14]) * r),
        this
      );
    },
    applyQuaternion: function (e) {
      var t = this.x,
        i = this.y,
        n = this.z,
        r = e.x,
        a = e.y,
        o = e.z,
        s = (e = e.w) * t + a * n - o * i,
        c = e * i + o * t - r * n,
        l = e * n + r * i - a * t;
      return (
        (t = -r * t - a * i - o * n),
        (this.x = s * e + -(t * r) + -(c * o) - -(l * a)),
        (this.y = c * e + -(t * a) + -(l * r) - -(s * o)),
        (this.z = l * e + -(t * o) + -(s * a) - -(c * r)),
        this
      );
    },
    project: function (e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix
      );
    },
    unproject: function (e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld
      );
    },
    transformDirection: function (e) {
      var t = this.x,
        i = this.y,
        n = this.z;
      return (
        (e = e.elements),
        (this.x = e[0] * t + e[4] * i + e[8] * n),
        (this.y = e[1] * t + e[5] * i + e[9] * n),
        (this.z = e[2] * t + e[6] * i + e[10] * n),
        this.normalize()
      );
    },
    divide: function (e) {
      return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
    },
    divideScalar: function (e) {
      return this.multiplyScalar(1 / e);
    },
    min: function (e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    },
    max: function (e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    },
    clamp: function (e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        this
      );
    },
    clampScalar: function (e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        this
      );
    },
    clampLength: function (e, t) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(
        Math.max(e, Math.min(t, i))
      );
    },
    floor: function () {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    },
    ceil: function () {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    },
    round: function () {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    },
    roundToZero: function () {
      return (
        (this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    },
    negate: function () {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    },
    dot: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    manhattanLength: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function () {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function (e) {
      return this.normalize().multiplyScalar(e);
    },
    lerp: function (e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    },
    lerpVectors: function (e, t, i) {
      return this.subVectors(t, e).multiplyScalar(i).add(e);
    },
    cross: function (e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
          ),
          this.crossVectors(e, t))
        : this.crossVectors(this, e);
    },
    crossVectors: function (e, t) {
      var i = e.x,
        n = e.y;
      e = e.z;
      var r = t.x,
        a = t.y;
      return (
        (t = t.z),
        (this.x = n * t - e * a),
        (this.y = e * r - i * t),
        (this.z = i * a - n * r),
        this
      );
    },
    projectOnVector: function (e) {
      var t = e.dot(this) / e.lengthSq();
      return this.copy(e).multiplyScalar(t);
    },
    projectOnPlane: function (e) {
      return rO.copy(this).projectOnVector(e), this.sub(rO);
    },
    reflect: function (e) {
      return this.sub(rO.copy(e).multiplyScalar(2 * this.dot(e)));
    },
    angleTo: function (e) {
      var t = Math.sqrt(this.lengthSq() * e.lengthSq());
      return (
        0 === t &&
          console.error(
            "THREE.Vector3: angleTo() can't handle zero length vectors."
          ),
        (e = this.dot(e) / t),
        Math.acos(rH.clamp(e, -1, 1))
      );
    },
    distanceTo: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    },
    distanceToSquared: function (e) {
      var t = this.x - e.x,
        i = this.y - e.y;
      return t * t + i * i + (e = this.z - e.z) * e;
    },
    manhattanDistanceTo: function (e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    },
    setFromSpherical: function (e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    },
    setFromSphericalCoords: function (e, t, i) {
      var n = Math.sin(t) * e;
      return (
        (this.x = n * Math.sin(i)),
        (this.y = Math.cos(t) * e),
        (this.z = n * Math.cos(i)),
        this
      );
    },
    setFromCylindrical: function (e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    },
    setFromCylindricalCoords: function (e, t, i) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = i),
        (this.z = e * Math.cos(t)),
        this
      );
    },
    setFromMatrixPosition: function (e) {
      return (
        (e = e.elements),
        (this.x = e[12]),
        (this.y = e[13]),
        (this.z = e[14]),
        this
      );
    },
    setFromMatrixScale: function (e) {
      var t = this.setFromMatrixColumn(e, 0).length(),
        i = this.setFromMatrixColumn(e, 1).length();
      return (
        (e = this.setFromMatrixColumn(e, 2).length()),
        (this.x = t),
        (this.y = i),
        (this.z = e),
        this
      );
    },
    setFromMatrixColumn: function (e, t) {
      return this.fromArray(e.elements, 4 * t);
    },
    equals: function (e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    },
    fromArray: function (e, t) {
      return (
        void 0 === t && (t = 0),
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        this
      );
    },
    toArray: function (e, t) {
      return (
        void 0 === e && (e = []),
        void 0 === t && (t = 0),
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        e
      );
    },
    fromBufferAttribute: function (e, t, i) {
      return (
        void 0 !== i &&
          console.warn(
            "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        this
      );
    },
  });
  var r4 = new r();
  Object.assign(a.prototype, {
    isMatrix3: !0,
    set: function (e, t, i, n, r, a, o, s, c) {
      var l = this.elements;
      return (
        (l[0] = e),
        (l[1] = n),
        (l[2] = o),
        (l[3] = t),
        (l[4] = r),
        (l[5] = s),
        (l[6] = i),
        (l[7] = a),
        (l[8] = c),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    clone: function () {
      return new this.constructor().fromArray(this.elements);
    },
    copy: function (e) {
      var t = this.elements;
      return (
        (e = e.elements),
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        this
      );
    },
    setFromMatrix4: function (e) {
      return (
        (e = e.elements),
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
        this
      );
    },
    applyToBufferAttribute: function (e) {
      for (var t = 0, i = e.count; t < i; t++)
        (r4.x = e.getX(t)),
          (r4.y = e.getY(t)),
          (r4.z = e.getZ(t)),
          r4.applyMatrix3(this),
          e.setXYZ(t, r4.x, r4.y, r4.z);
      return e;
    },
    multiply: function (e) {
      return this.multiplyMatrices(this, e);
    },
    premultiply: function (e) {
      return this.multiplyMatrices(e, this);
    },
    multiplyMatrices: function (e, t) {
      var i = e.elements,
        n = t.elements;
      (t = this.elements), (e = i[0]);
      var r = i[3],
        a = i[6],
        o = i[1],
        s = i[4],
        c = i[7],
        l = i[2],
        h = i[5];
      i = i[8];
      var u = n[0],
        p = n[3],
        d = n[6],
        f = n[1],
        m = n[4],
        g = n[7],
        v = n[2],
        $ = n[5];
      return (
        (n = n[8]),
        (t[0] = e * u + r * f + a * v),
        (t[3] = e * p + r * m + a * $),
        (t[6] = e * d + r * g + a * n),
        (t[1] = o * u + s * f + c * v),
        (t[4] = o * p + s * m + c * $),
        (t[7] = o * d + s * g + c * n),
        (t[2] = l * u + h * f + i * v),
        (t[5] = l * p + h * m + i * $),
        (t[8] = l * d + h * g + i * n),
        this
      );
    },
    multiplyScalar: function (e) {
      var t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    },
    determinant: function () {
      var e = this.elements,
        t = e[0],
        i = e[1],
        n = e[2],
        r = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7];
      return (
        t * a * (e = e[8]) -
        t * o * c -
        i * r * e +
        i * o * s +
        n * r * c -
        n * a * s
      );
    },
    getInverse: function (e, t) {
      e &&
        e.isMatrix4 &&
        console.error(
          "THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."
        );
      var i = e.elements;
      e = this.elements;
      var n = i[0],
        r = i[1],
        a = i[2],
        o = i[3],
        s = i[4],
        c = i[5],
        l = i[6],
        h = i[7],
        u = (i = i[8]) * s - c * h,
        p = c * l - i * o,
        d = h * o - s * l,
        f = n * u + r * p + a * d;
      if (0 === f) {
        if (!0 === t)
          throw Error(
            "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"
          );
        return (
          console.warn(
            "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"
          ),
          this.identity()
        );
      }
      return (
        (t = 1 / f),
        (e[0] = u * t),
        (e[1] = (a * h - i * r) * t),
        (e[2] = (c * r - a * s) * t),
        (e[3] = p * t),
        (e[4] = (i * n - a * l) * t),
        (e[5] = (a * o - c * n) * t),
        (e[6] = d * t),
        (e[7] = (r * l - h * n) * t),
        (e[8] = (s * n - r * o) * t),
        this
      );
    },
    transpose: function () {
      var e = this.elements,
        t = e[1];
      return (
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    },
    getNormalMatrix: function (e) {
      return this.setFromMatrix4(e).getInverse(this).transpose();
    },
    transposeIntoArray: function (e) {
      var t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    },
    setUvTransform: function (e, t, i, n, r, a, o) {
      var s = Math.cos(r);
      (r = Math.sin(r)),
        this.set(
          i * s,
          i * r,
          -i * (s * a + r * o) + a + e,
          -n * r,
          n * s,
          -n * (-r * a + s * o) + o + t,
          0,
          0,
          1
        );
    },
    scale: function (e, t) {
      var i = this.elements;
      return (
        (i[0] *= e),
        (i[3] *= e),
        (i[6] *= e),
        (i[1] *= t),
        (i[4] *= t),
        (i[7] *= t),
        this
      );
    },
    rotate: function (e) {
      var t = Math.cos(e);
      e = Math.sin(e);
      var i = this.elements,
        n = i[0],
        r = i[3],
        a = i[6],
        o = i[1],
        s = i[4],
        c = i[7];
      return (
        (i[0] = t * n + e * o),
        (i[3] = t * r + e * s),
        (i[6] = t * a + e * c),
        (i[1] = -e * n + t * o),
        (i[4] = -e * r + t * s),
        (i[7] = -e * a + t * c),
        this
      );
    },
    translate: function (e, t) {
      var i = this.elements;
      return (
        (i[0] += e * i[2]),
        (i[3] += e * i[5]),
        (i[6] += e * i[8]),
        (i[1] += t * i[2]),
        (i[4] += t * i[5]),
        (i[7] += t * i[8]),
        this
      );
    },
    equals: function (e) {
      var t = this.elements;
      e = e.elements;
      for (var i = 0; 9 > i; i++) if (t[i] !== e[i]) return !1;
      return !0;
    },
    fromArray: function (e, t) {
      void 0 === t && (t = 0);
      for (var i = 0; 9 > i; i++) this.elements[i] = e[i + t];
      return this;
    },
    toArray: function (e, t) {
      void 0 === e && (e = []), void 0 === t && (t = 0);
      var i = this.elements;
      return (
        (e[t] = i[0]),
        (e[t + 1] = i[1]),
        (e[t + 2] = i[2]),
        (e[t + 3] = i[3]),
        (e[t + 4] = i[4]),
        (e[t + 5] = i[5]),
        (e[t + 6] = i[6]),
        (e[t + 7] = i[7]),
        (e[t + 8] = i[8]),
        e
      );
    },
  });
  var rk,
    rW = {
      getDataURL: function (e) {
        if ("undefined" == typeof HTMLCanvasElement) return e.src;
        if (!(e instanceof HTMLCanvasElement)) {
          void 0 === rk &&
            (rk = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "canvas"
            )),
            (rk.width = e.width),
            (rk.height = e.height);
          var t = rk.getContext("2d");
          e instanceof ImageData
            ? t.putImageData(e, 0, 0)
            : t.drawImage(e, 0, 0, e.width, e.height),
            (e = rk);
        }
        return 2048 < e.width || 2048 < e.height
          ? e.toDataURL("image/jpeg", 0.6)
          : e.toDataURL("image/png");
      },
    },
    r5 = 0;
  (o.DEFAULT_IMAGE = void 0),
    (o.DEFAULT_MAPPING = 300),
    (o.prototype = Object.assign(Object.create(t.prototype), {
      constructor: o,
      isTexture: !0,
      updateMatrix: function () {
        this.matrix.setUvTransform(
          this.offset.x,
          this.offset.y,
          this.repeat.x,
          this.repeat.y,
          this.rotation,
          this.center.x,
          this.center.y
        );
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          (this.name = e.name),
          (this.image = e.image),
          (this.mipmaps = e.mipmaps.slice(0)),
          (this.mapping = e.mapping),
          (this.wrapS = e.wrapS),
          (this.wrapT = e.wrapT),
          (this.magFilter = e.magFilter),
          (this.minFilter = e.minFilter),
          (this.anisotropy = e.anisotropy),
          (this.format = e.format),
          (this.internalFormat = e.internalFormat),
          (this.type = e.type),
          this.offset.copy(e.offset),
          this.repeat.copy(e.repeat),
          this.center.copy(e.center),
          (this.rotation = e.rotation),
          (this.matrixAutoUpdate = e.matrixAutoUpdate),
          this.matrix.copy(e.matrix),
          (this.generateMipmaps = e.generateMipmaps),
          (this.premultiplyAlpha = e.premultiplyAlpha),
          (this.flipY = e.flipY),
          (this.unpackAlignment = e.unpackAlignment),
          (this.encoding = e.encoding),
          this
        );
      },
      toJSON: function (e) {
        var t = void 0 === e || "string" == typeof e;
        if (!t && void 0 !== e.textures[this.uuid])
          return e.textures[this.uuid];
        var i = {
          metadata: {
            version: 4.5,
            type: "Texture",
            generator: "Texture.toJSON",
          },
          uuid: this.uuid,
          name: this.name,
          mapping: this.mapping,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          type: this.type,
          encoding: this.encoding,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY,
          premultiplyAlpha: this.premultiplyAlpha,
          unpackAlignment: this.unpackAlignment,
        };
        if (void 0 !== this.image) {
          var n = this.image;
          if (
            (void 0 === n.uuid && (n.uuid = rH.generateUUID()),
            !t && void 0 === e.images[n.uuid])
          ) {
            if (Array.isArray(n))
              for (var r = [], a = 0, o = n.length; a < o; a++)
                r.push(rW.getDataURL(n[a]));
            else r = rW.getDataURL(n);
            e.images[n.uuid] = { uuid: n.uuid, url: r };
          }
          i.image = n.uuid;
        }
        return t || (e.textures[this.uuid] = i), i;
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
      transformUv: function (e) {
        if (300 !== this.mapping) return e;
        if ((e.applyMatrix3(this.matrix), 0 > e.x || 1 < e.x))
          switch (this.wrapS) {
            case 1e3:
              e.x -= Math.floor(e.x);
              break;
            case 1001:
              e.x = 0 > e.x ? 0 : 1;
              break;
            case 1002:
              e.x =
                1 === Math.abs(Math.floor(e.x) % 2)
                  ? Math.ceil(e.x) - e.x
                  : e.x - Math.floor(e.x);
          }
        if (0 > e.y || 1 < e.y)
          switch (this.wrapT) {
            case 1e3:
              e.y -= Math.floor(e.y);
              break;
            case 1001:
              e.y = 0 > e.y ? 0 : 1;
              break;
            case 1002:
              e.y =
                1 === Math.abs(Math.floor(e.y) % 2)
                  ? Math.ceil(e.y) - e.y
                  : e.y - Math.floor(e.y);
          }
        return this.flipY && (e.y = 1 - e.y), e;
      },
    })),
    Object.defineProperty(o.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++;
      },
    }),
    Object.defineProperties(s.prototype, {
      width: {
        get: function () {
          return this.z;
        },
        set: function (e) {
          this.z = e;
        },
      },
      height: {
        get: function () {
          return this.w;
        },
        set: function (e) {
          this.w = e;
        },
      },
    }),
    Object.assign(s.prototype, {
      isVector4: !0,
      set: function (e, t, i, n) {
        return (this.x = e), (this.y = t), (this.z = i), (this.w = n), this;
      },
      setScalar: function (e) {
        return (this.w = this.z = this.y = this.x = e), this;
      },
      setX: function (e) {
        return (this.x = e), this;
      },
      setY: function (e) {
        return (this.y = e), this;
      },
      setZ: function (e) {
        return (this.z = e), this;
      },
      setW: function (e) {
        return (this.w = e), this;
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          case 2:
            this.z = t;
            break;
          case 3:
            this.w = t;
            break;
          default:
            throw Error("index is out of range: " + e);
        }
        return this;
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          case 3:
            return this.w;
          default:
            throw Error("index is out of range: " + e);
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y, this.z, this.w);
      },
      copy: function (e) {
        return (
          (this.x = e.x),
          (this.y = e.y),
          (this.z = e.z),
          (this.w = void 0 !== e.w ? e.w : 1),
          this
        );
      },
      add: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            ),
            this.addVectors(e, t))
          : ((this.x += e.x),
            (this.y += e.y),
            (this.z += e.z),
            (this.w += e.w),
            this);
      },
      addScalar: function (e) {
        return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
      },
      addVectors: function (e, t) {
        return (
          (this.x = e.x + t.x),
          (this.y = e.y + t.y),
          (this.z = e.z + t.z),
          (this.w = e.w + t.w),
          this
        );
      },
      addScaledVector: function (e, t) {
        return (
          (this.x += e.x * t),
          (this.y += e.y * t),
          (this.z += e.z * t),
          (this.w += e.w * t),
          this
        );
      },
      sub: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            ),
            this.subVectors(e, t))
          : ((this.x -= e.x),
            (this.y -= e.y),
            (this.z -= e.z),
            (this.w -= e.w),
            this);
      },
      subScalar: function (e) {
        return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
      },
      subVectors: function (e, t) {
        return (
          (this.x = e.x - t.x),
          (this.y = e.y - t.y),
          (this.z = e.z - t.z),
          (this.w = e.w - t.w),
          this
        );
      },
      multiplyScalar: function (e) {
        return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
      },
      applyMatrix4: function (e) {
        var t = this.x,
          i = this.y,
          n = this.z,
          r = this.w;
        return (
          (e = e.elements),
          (this.x = e[0] * t + e[4] * i + e[8] * n + e[12] * r),
          (this.y = e[1] * t + e[5] * i + e[9] * n + e[13] * r),
          (this.z = e[2] * t + e[6] * i + e[10] * n + e[14] * r),
          (this.w = e[3] * t + e[7] * i + e[11] * n + e[15] * r),
          this
        );
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e);
      },
      setAxisAngleFromQuaternion: function (e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return (
          1e-4 > t
            ? ((this.x = 1), (this.z = this.y = 0))
            : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
          this
        );
      },
      setAxisAngleFromRotationMatrix: function (e) {
        var t = (e = e.elements)[0],
          i = e[4],
          n = e[8],
          r = e[1],
          a = e[5],
          o = e[9],
          s = e[2],
          c = e[6],
          l = e[10];
        return 0.01 > Math.abs(i - r) &&
          0.01 > Math.abs(n - s) &&
          0.01 > Math.abs(o - c)
          ? 0.1 > Math.abs(i + r) &&
            0.1 > Math.abs(n + s) &&
            0.1 > Math.abs(o + c) &&
            0.1 > Math.abs(t + a + l - 3)
            ? (this.set(1, 0, 0, 0), this)
            : ((e = Math.PI),
              (t = (t + 1) / 2),
              (a = (a + 1) / 2),
              (l = (l + 1) / 2),
              (i = (i + r) / 4),
              (n = (n + s) / 4),
              (o = (o + c) / 4),
              t > a && t > l
                ? 0.01 > t
                  ? ((c = 0), (i = s = 0.707106781))
                  : ((s = i / (c = Math.sqrt(t))), (i = n / c))
                : a > l
                ? 0.01 > a
                  ? ((c = 0.707106781), (s = 0), (i = 0.707106781))
                  : ((c = i / (s = Math.sqrt(a))), (i = o / s))
                : 0.01 > l
                ? ((s = c = 0.707106781), (i = 0))
                : ((c = n / (i = Math.sqrt(l))), (s = o / i)),
              this.set(c, s, i, e),
              this)
          : (0.001 >
              Math.abs(
                (e = Math.sqrt(
                  (c - o) * (c - o) + (n - s) * (n - s) + (r - i) * (r - i)
                ))
              ) && (e = 1),
            (this.x = (c - o) / e),
            (this.y = (n - s) / e),
            (this.z = (r - i) / e),
            (this.w = Math.acos((t + a + l - 1) / 2)),
            this);
      },
      min: function (e) {
        return (
          (this.x = Math.min(this.x, e.x)),
          (this.y = Math.min(this.y, e.y)),
          (this.z = Math.min(this.z, e.z)),
          (this.w = Math.min(this.w, e.w)),
          this
        );
      },
      max: function (e) {
        return (
          (this.x = Math.max(this.x, e.x)),
          (this.y = Math.max(this.y, e.y)),
          (this.z = Math.max(this.z, e.z)),
          (this.w = Math.max(this.w, e.w)),
          this
        );
      },
      clamp: function (e, t) {
        return (
          (this.x = Math.max(e.x, Math.min(t.x, this.x))),
          (this.y = Math.max(e.y, Math.min(t.y, this.y))),
          (this.z = Math.max(e.z, Math.min(t.z, this.z))),
          (this.w = Math.max(e.w, Math.min(t.w, this.w))),
          this
        );
      },
      clampScalar: function (e, t) {
        return (
          (this.x = Math.max(e, Math.min(t, this.x))),
          (this.y = Math.max(e, Math.min(t, this.y))),
          (this.z = Math.max(e, Math.min(t, this.z))),
          (this.w = Math.max(e, Math.min(t, this.w))),
          this
        );
      },
      clampLength: function (e, t) {
        var i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(
          Math.max(e, Math.min(t, i))
        );
      },
      floor: function () {
        return (
          (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          (this.z = Math.floor(this.z)),
          (this.w = Math.floor(this.w)),
          this
        );
      },
      ceil: function () {
        return (
          (this.x = Math.ceil(this.x)),
          (this.y = Math.ceil(this.y)),
          (this.z = Math.ceil(this.z)),
          (this.w = Math.ceil(this.w)),
          this
        );
      },
      round: function () {
        return (
          (this.x = Math.round(this.x)),
          (this.y = Math.round(this.y)),
          (this.z = Math.round(this.z)),
          (this.w = Math.round(this.w)),
          this
        );
      },
      roundToZero: function () {
        return (
          (this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y)),
          (this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z)),
          (this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w)),
          this
        );
      },
      negate: function () {
        return (
          (this.x = -this.x),
          (this.y = -this.y),
          (this.z = -this.z),
          (this.w = -this.w),
          this
        );
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
      },
      lengthSq: function () {
        return (
          this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        );
      },
      length: function () {
        return Math.sqrt(
          this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        );
      },
      manhattanLength: function () {
        return (
          Math.abs(this.x) +
          Math.abs(this.y) +
          Math.abs(this.z) +
          Math.abs(this.w)
        );
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1);
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e);
      },
      lerp: function (e, t) {
        return (
          (this.x += (e.x - this.x) * t),
          (this.y += (e.y - this.y) * t),
          (this.z += (e.z - this.z) * t),
          (this.w += (e.w - this.w) * t),
          this
        );
      },
      lerpVectors: function (e, t, i) {
        return this.subVectors(t, e).multiplyScalar(i).add(e);
      },
      equals: function (e) {
        return (
          e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        );
      },
      fromArray: function (e, t) {
        return (
          void 0 === t && (t = 0),
          (this.x = e[t]),
          (this.y = e[t + 1]),
          (this.z = e[t + 2]),
          (this.w = e[t + 3]),
          this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this.x),
          (e[t + 1] = this.y),
          (e[t + 2] = this.z),
          (e[t + 3] = this.w),
          e
        );
      },
      fromBufferAttribute: function (e, t, i) {
        return (
          void 0 !== i &&
            console.warn(
              "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
            ),
          (this.x = e.getX(t)),
          (this.y = e.getY(t)),
          (this.z = e.getZ(t)),
          (this.w = e.getW(t)),
          this
        );
      },
    }),
    (c.prototype = Object.assign(Object.create(t.prototype), {
      constructor: c,
      isWebGLRenderTarget: !0,
      setSize: function (e, t) {
        (this.width !== e || this.height !== t) &&
          ((this.width = e),
          (this.height = t),
          (this.texture.image.width = e),
          (this.texture.image.height = t),
          this.dispose()),
          this.viewport.set(0, 0, e, t),
          this.scissor.set(0, 0, e, t);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          (this.width = e.width),
          (this.height = e.height),
          this.viewport.copy(e.viewport),
          (this.texture = e.texture.clone()),
          (this.depthBuffer = e.depthBuffer),
          (this.stencilBuffer = e.stencilBuffer),
          (this.depthTexture = e.depthTexture),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    })),
    (l.prototype = Object.assign(Object.create(c.prototype), {
      constructor: l,
      isWebGLMultisampleRenderTarget: !0,
      copy: function (e) {
        return c.prototype.copy.call(this, e), (this.samples = e.samples), this;
      },
    }));
  var r6 = new r(),
    r7 = new h(),
    rj = new r(0, 0, 0),
    rq = new r(1, 1, 1),
    rX = new r(),
    rY = new r(),
    rZ = new r();
  Object.assign(h.prototype, {
    isMatrix4: !0,
    set: function (e, t, i, n, r, a, o, s, c, l, h, u, p, d, f, m) {
      var g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = i),
        (g[12] = n),
        (g[1] = r),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = h),
        (g[14] = u),
        (g[3] = p),
        (g[7] = d),
        (g[11] = f),
        (g[15] = m),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    clone: function () {
      return new h().fromArray(this.elements);
    },
    copy: function (e) {
      var t = this.elements;
      return (
        (e = e.elements),
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        this
      );
    },
    copyPosition: function (e) {
      var t = this.elements;
      return (
        (e = e.elements),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        this
      );
    },
    extractBasis: function (e, t, i) {
      return (
        e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        i.setFromMatrixColumn(this, 2),
        this
      );
    },
    makeBasis: function (e, t, i) {
      return (
        this.set(
          e.x,
          t.x,
          i.x,
          0,
          e.y,
          t.y,
          i.y,
          0,
          e.z,
          t.z,
          i.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    },
    extractRotation: function (e) {
      var t = this.elements,
        i = e.elements,
        n = 1 / r6.setFromMatrixColumn(e, 0).length(),
        r = 1 / r6.setFromMatrixColumn(e, 1).length();
      return (
        (e = 1 / r6.setFromMatrixColumn(e, 2).length()),
        (t[0] = i[0] * n),
        (t[1] = i[1] * n),
        (t[2] = i[2] * n),
        (t[3] = 0),
        (t[4] = i[4] * r),
        (t[5] = i[5] * r),
        (t[6] = i[6] * r),
        (t[7] = 0),
        (t[8] = i[8] * e),
        (t[9] = i[9] * e),
        (t[10] = i[10] * e),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    },
    makeRotationFromEuler: function (e) {
      (e && e.isEuler) ||
        console.error(
          "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      var t = this.elements,
        i = e.x,
        n = e.y,
        r = e.z,
        a = Math.cos(i);
      i = Math.sin(i);
      var o = Math.cos(n);
      n = Math.sin(n);
      var s = Math.cos(r);
      if (((r = Math.sin(r)), "XYZ" === e.order)) {
        e = a * s;
        var c = a * r,
          l = i * s,
          h = i * r;
        (t[0] = o * s),
          (t[4] = -o * r),
          (t[8] = n),
          (t[1] = c + l * n),
          (t[5] = e - h * n),
          (t[9] = -i * o),
          (t[2] = h - e * n),
          (t[6] = l + c * n),
          (t[10] = a * o);
      } else
        "YXZ" === e.order
          ? ((e = o * s),
            (c = o * r),
            (l = n * s),
            (h = n * r),
            (t[0] = e + h * i),
            (t[4] = l * i - c),
            (t[8] = a * n),
            (t[1] = a * r),
            (t[5] = a * s),
            (t[9] = -i),
            (t[2] = c * i - l),
            (t[6] = h + e * i),
            (t[10] = a * o))
          : "ZXY" === e.order
          ? ((e = o * s),
            (c = o * r),
            (l = n * s),
            (h = n * r),
            (t[0] = e - h * i),
            (t[4] = -a * r),
            (t[8] = l + c * i),
            (t[1] = c + l * i),
            (t[5] = a * s),
            (t[9] = h - e * i),
            (t[2] = -a * n),
            (t[6] = i),
            (t[10] = a * o))
          : "ZYX" === e.order
          ? ((e = a * s),
            (c = a * r),
            (l = i * s),
            (h = i * r),
            (t[0] = o * s),
            (t[4] = l * n - c),
            (t[8] = e * n + h),
            (t[1] = o * r),
            (t[5] = h * n + e),
            (t[9] = c * n - l),
            (t[2] = -n),
            (t[6] = i * o),
            (t[10] = a * o))
          : "YZX" === e.order
          ? ((e = a * o),
            (c = a * n),
            (l = i * o),
            (h = i * n),
            (t[0] = o * s),
            (t[4] = h - e * r),
            (t[8] = l * r + c),
            (t[1] = r),
            (t[5] = a * s),
            (t[9] = -i * s),
            (t[2] = -n * s),
            (t[6] = c * r + l),
            (t[10] = e - h * r))
          : "XZY" === e.order &&
            ((e = a * o),
            (c = a * n),
            (l = i * o),
            (h = i * n),
            (t[0] = o * s),
            (t[4] = -r),
            (t[8] = n * s),
            (t[1] = e * r + h),
            (t[5] = a * s),
            (t[9] = c * r - l),
            (t[2] = l * r - c),
            (t[6] = i * s),
            (t[10] = h * r + e));
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    },
    makeRotationFromQuaternion: function (e) {
      return this.compose(rj, e, rq);
    },
    lookAt: function (e, t, i) {
      var n = this.elements;
      return (
        rZ.subVectors(e, t),
        0 === rZ.lengthSq() && (rZ.z = 1),
        rZ.normalize(),
        rX.crossVectors(i, rZ),
        0 === rX.lengthSq() &&
          (1 === Math.abs(i.z) ? (rZ.x += 1e-4) : (rZ.z += 1e-4),
          rZ.normalize(),
          rX.crossVectors(i, rZ)),
        rX.normalize(),
        rY.crossVectors(rZ, rX),
        (n[0] = rX.x),
        (n[4] = rY.x),
        (n[8] = rZ.x),
        (n[1] = rX.y),
        (n[5] = rY.y),
        (n[9] = rZ.y),
        (n[2] = rX.z),
        (n[6] = rY.z),
        (n[10] = rZ.z),
        this
      );
    },
    multiply: function (e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
          ),
          this.multiplyMatrices(e, t))
        : this.multiplyMatrices(this, e);
    },
    premultiply: function (e) {
      return this.multiplyMatrices(e, this);
    },
    multiplyMatrices: function (e, t) {
      var i = e.elements,
        n = t.elements;
      (t = this.elements), (e = i[0]);
      var r = i[4],
        a = i[8],
        o = i[12],
        s = i[1],
        c = i[5],
        l = i[9],
        h = i[13],
        u = i[2],
        p = i[6],
        d = i[10],
        f = i[14],
        m = i[3],
        g = i[7],
        v = i[11];
      i = i[15];
      var $ = n[0],
        y = n[4],
        x = n[8],
        _ = n[12],
        w = n[1],
        b = n[5],
        M = n[9],
        S = n[13],
        T = n[2],
        E = n[6],
        L = n[10],
        A = n[14],
        R = n[3],
        P = n[7],
        C = n[11];
      return (
        (n = n[15]),
        (t[0] = e * $ + r * w + a * T + o * R),
        (t[4] = e * y + r * b + a * E + o * P),
        (t[8] = e * x + r * M + a * L + o * C),
        (t[12] = e * _ + r * S + a * A + o * n),
        (t[1] = s * $ + c * w + l * T + h * R),
        (t[5] = s * y + c * b + l * E + h * P),
        (t[9] = s * x + c * M + l * L + h * C),
        (t[13] = s * _ + c * S + l * A + h * n),
        (t[2] = u * $ + p * w + d * T + f * R),
        (t[6] = u * y + p * b + d * E + f * P),
        (t[10] = u * x + p * M + d * L + f * C),
        (t[14] = u * _ + p * S + d * A + f * n),
        (t[3] = m * $ + g * w + v * T + i * R),
        (t[7] = m * y + g * b + v * E + i * P),
        (t[11] = m * x + g * M + v * L + i * C),
        (t[15] = m * _ + g * S + v * A + i * n),
        this
      );
    },
    multiplyScalar: function (e) {
      var t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    },
    applyToBufferAttribute: function (e) {
      for (var t = 0, i = e.count; t < i; t++)
        (r6.x = e.getX(t)),
          (r6.y = e.getY(t)),
          (r6.z = e.getZ(t)),
          r6.applyMatrix4(this),
          e.setXYZ(t, r6.x, r6.y, r6.z);
      return e;
    },
    determinant: function () {
      var e = this.elements,
        t = e[0],
        i = e[4],
        n = e[8],
        r = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        h = e[6],
        u = e[10],
        p = e[14];
      return (
        e[3] *
          (+r * s * h -
            n * c * h -
            r * o * u +
            i * c * u +
            n * o * p -
            i * s * p) +
        e[7] *
          (+t * s * p -
            t * c * u +
            r * a * u -
            n * a * p +
            n * c * l -
            r * s * l) +
        e[11] *
          (+t * c * h -
            t * o * p -
            r * a * h +
            i * a * p +
            r * o * l -
            i * c * l) +
        e[15] *
          (-n * o * l -
            t * s * h +
            t * o * u +
            n * a * h -
            i * a * u +
            i * s * l)
      );
    },
    transpose: function () {
      var e = this.elements,
        t = e[1];
      return (
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    },
    setPosition: function (e, t, i) {
      var n = this.elements;
      return (
        e.isVector3
          ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z))
          : ((n[12] = e), (n[13] = t), (n[14] = i)),
        this
      );
    },
    getInverse: function (e, t) {
      var i = this.elements,
        n = e.elements;
      e = n[0];
      var r = n[1],
        a = n[2],
        o = n[3],
        s = n[4],
        c = n[5],
        l = n[6],
        h = n[7],
        u = n[8],
        p = n[9],
        d = n[10],
        f = n[11],
        m = n[12],
        g = n[13],
        v = n[14],
        $ =
          p * v * h -
          g * d * h +
          g * l * f -
          c * v * f -
          p * l * (n = n[15]) +
          c * d * n,
        y =
          m * d * h - u * v * h - m * l * f + s * v * f + u * l * n - s * d * n,
        x =
          u * g * h - m * p * h + m * c * f - s * g * f - u * c * n + s * p * n,
        _ =
          m * p * l - u * g * l - m * c * d + s * g * d + u * c * v - s * p * v,
        w = e * $ + r * y + a * x + o * _;
      if (0 === w) {
        if (!0 === t)
          throw Error(
            "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"
          );
        return (
          console.warn(
            "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"
          ),
          this.identity()
        );
      }
      return (
        (t = 1 / w),
        (i[0] = $ * t),
        (i[1] =
          (g * d * o -
            p * v * o -
            g * a * f +
            r * v * f +
            p * a * n -
            r * d * n) *
          t),
        (i[2] =
          (c * v * o -
            g * l * o +
            g * a * h -
            r * v * h -
            c * a * n +
            r * l * n) *
          t),
        (i[3] =
          (p * l * o -
            c * d * o -
            p * a * h +
            r * d * h +
            c * a * f -
            r * l * f) *
          t),
        (i[4] = y * t),
        (i[5] =
          (u * v * o -
            m * d * o +
            m * a * f -
            e * v * f -
            u * a * n +
            e * d * n) *
          t),
        (i[6] =
          (m * l * o -
            s * v * o -
            m * a * h +
            e * v * h +
            s * a * n -
            e * l * n) *
          t),
        (i[7] =
          (s * d * o -
            u * l * o +
            u * a * h -
            e * d * h -
            s * a * f +
            e * l * f) *
          t),
        (i[8] = x * t),
        (i[9] =
          (m * p * o -
            u * g * o -
            m * r * f +
            e * g * f +
            u * r * n -
            e * p * n) *
          t),
        (i[10] =
          (s * g * o -
            m * c * o +
            m * r * h -
            e * g * h -
            s * r * n +
            e * c * n) *
          t),
        (i[11] =
          (u * c * o -
            s * p * o -
            u * r * h +
            e * p * h +
            s * r * f -
            e * c * f) *
          t),
        (i[12] = _ * t),
        (i[13] =
          (u * g * a -
            m * p * a +
            m * r * d -
            e * g * d -
            u * r * v +
            e * p * v) *
          t),
        (i[14] =
          (m * c * a -
            s * g * a -
            m * r * l +
            e * g * l +
            s * r * v -
            e * c * v) *
          t),
        (i[15] =
          (s * p * a -
            u * c * a +
            u * r * l -
            e * p * l -
            s * r * d +
            e * c * d) *
          t),
        this
      );
    },
    scale: function (e) {
      var t = this.elements,
        i = e.x,
        n = e.y;
      return (
        (e = e.z),
        (t[0] *= i),
        (t[4] *= n),
        (t[8] *= e),
        (t[1] *= i),
        (t[5] *= n),
        (t[9] *= e),
        (t[2] *= i),
        (t[6] *= n),
        (t[10] *= e),
        (t[3] *= i),
        (t[7] *= n),
        (t[11] *= e),
        this
      );
    },
    getMaxScaleOnAxis: function () {
      var e = this.elements;
      return Math.sqrt(
        Math.max(
          e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
          e[8] * e[8] + e[9] * e[9] + e[10] * e[10]
        )
      );
    },
    makeTranslation: function (e, t, i) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
    },
    makeRotationX: function (e) {
      var t = Math.cos(e);
      return (
        (e = Math.sin(e)),
        this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationY: function (e) {
      var t = Math.cos(e);
      return (
        (e = Math.sin(e)),
        this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationZ: function (e) {
      var t = Math.cos(e);
      return (
        (e = Math.sin(e)),
        this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationAxis: function (e, t) {
      var i = Math.cos(t);
      t = Math.sin(t);
      var n = 1 - i,
        r = e.x,
        a = e.y;
      e = e.z;
      var o = n * r,
        s = n * a;
      return (
        this.set(
          o * r + i,
          o * a - t * e,
          o * e + t * a,
          0,
          o * a + t * e,
          s * a + i,
          s * e - t * r,
          0,
          o * e - t * a,
          s * e + t * r,
          n * e * e + i,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    },
    makeScale: function (e, t, i) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
    },
    makeShear: function (e, t, i) {
      return this.set(1, t, i, 0, e, 1, i, 0, e, t, 1, 0, 0, 0, 0, 1), this;
    },
    compose: function (e, t, i) {
      var n = this.elements,
        r = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = r + r,
        l = a + a,
        h = o + o;
      t = r * c;
      var u = r * l;
      r *= h;
      var p = a * l;
      (a *= h), (o *= h), (c *= s), (l *= s), (s *= h), (h = i.x);
      var d = i.y;
      return (
        (i = i.z),
        (n[0] = (1 - (p + o)) * h),
        (n[1] = (u + s) * h),
        (n[2] = (r - l) * h),
        (n[3] = 0),
        (n[4] = (u - s) * d),
        (n[5] = (1 - (t + o)) * d),
        (n[6] = (a + c) * d),
        (n[7] = 0),
        (n[8] = (r + l) * i),
        (n[9] = (a - c) * i),
        (n[10] = (1 - (t + p)) * i),
        (n[11] = 0),
        (n[12] = e.x),
        (n[13] = e.y),
        (n[14] = e.z),
        (n[15] = 1),
        this
      );
    },
    decompose: function (e, t, i) {
      var n = this.elements,
        r = r6.set(n[0], n[1], n[2]).length(),
        a = r6.set(n[4], n[5], n[6]).length(),
        o = r6.set(n[8], n[9], n[10]).length();
      0 > this.determinant() && (r = -r),
        (e.x = n[12]),
        (e.y = n[13]),
        (e.z = n[14]),
        r7.copy(this),
        (e = 1 / r),
        (n = 1 / a);
      var s = 1 / o;
      return (
        (r7.elements[0] *= e),
        (r7.elements[1] *= e),
        (r7.elements[2] *= e),
        (r7.elements[4] *= n),
        (r7.elements[5] *= n),
        (r7.elements[6] *= n),
        (r7.elements[8] *= s),
        (r7.elements[9] *= s),
        (r7.elements[10] *= s),
        t.setFromRotationMatrix(r7),
        (i.x = r),
        (i.y = a),
        (i.z = o),
        this
      );
    },
    makePerspective: function (e, t, i, n, r, a) {
      void 0 === a &&
        console.warn(
          "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
        );
      var o = this.elements;
      return (
        (o[0] = (2 * r) / (t - e)),
        (o[4] = 0),
        (o[8] = (t + e) / (t - e)),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = (2 * r) / (i - n)),
        (o[9] = (i + n) / (i - n)),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = -(a + r) / (a - r)),
        (o[14] = (-2 * a * r) / (a - r)),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    },
    makeOrthographic: function (e, t, i, n, r, a) {
      var o = this.elements,
        s = 1 / (t - e),
        c = 1 / (i - n),
        l = 1 / (a - r);
      return (
        (o[0] = 2 * s),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -((t + e) * s)),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -((i + n) * c)),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = -2 * l),
        (o[14] = -((a + r) * l)),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    },
    equals: function (e) {
      var t = this.elements;
      e = e.elements;
      for (var i = 0; 16 > i; i++) if (t[i] !== e[i]) return !1;
      return !0;
    },
    fromArray: function (e, t) {
      void 0 === t && (t = 0);
      for (var i = 0; 16 > i; i++) this.elements[i] = e[i + t];
      return this;
    },
    toArray: function (e, t) {
      void 0 === e && (e = []), void 0 === t && (t = 0);
      var i = this.elements;
      return (
        (e[t] = i[0]),
        (e[t + 1] = i[1]),
        (e[t + 2] = i[2]),
        (e[t + 3] = i[3]),
        (e[t + 4] = i[4]),
        (e[t + 5] = i[5]),
        (e[t + 6] = i[6]),
        (e[t + 7] = i[7]),
        (e[t + 8] = i[8]),
        (e[t + 9] = i[9]),
        (e[t + 10] = i[10]),
        (e[t + 11] = i[11]),
        (e[t + 12] = i[12]),
        (e[t + 13] = i[13]),
        (e[t + 14] = i[14]),
        (e[t + 15] = i[15]),
        e
      );
    },
  });
  var rJ = new h(),
    rQ = new n();
  (u.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ")),
    (u.DefaultOrder = "XYZ"),
    Object.defineProperties(u.prototype, {
      x: {
        get: function () {
          return this._x;
        },
        set: function (e) {
          (this._x = e), this._onChangeCallback();
        },
      },
      y: {
        get: function () {
          return this._y;
        },
        set: function (e) {
          (this._y = e), this._onChangeCallback();
        },
      },
      z: {
        get: function () {
          return this._z;
        },
        set: function (e) {
          (this._z = e), this._onChangeCallback();
        },
      },
      order: {
        get: function () {
          return this._order;
        },
        set: function (e) {
          (this._order = e), this._onChangeCallback();
        },
      },
    }),
    Object.assign(u.prototype, {
      isEuler: !0,
      set: function (e, t, i, n) {
        return (
          (this._x = e),
          (this._y = t),
          (this._z = i),
          (this._order = n || this._order),
          this._onChangeCallback(),
          this
        );
      },
      clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._order);
      },
      copy: function (e) {
        return (
          (this._x = e._x),
          (this._y = e._y),
          (this._z = e._z),
          (this._order = e._order),
          this._onChangeCallback(),
          this
        );
      },
      setFromRotationMatrix: function (e, t, i) {
        var n = rH.clamp,
          r = e.elements;
        e = r[0];
        var a = r[4],
          o = r[8],
          s = r[1],
          c = r[5],
          l = r[9],
          h = r[2],
          u = r[6];
        return (
          (r = r[10]),
          "XYZ" === (t = t || this._order)
            ? ((this._y = Math.asin(n(o, -1, 1))),
              0.9999999 > Math.abs(o)
                ? ((this._x = Math.atan2(-l, r)), (this._z = Math.atan2(-a, e)))
                : ((this._x = Math.atan2(u, c)), (this._z = 0)))
            : "YXZ" === t
            ? ((this._x = Math.asin(-n(l, -1, 1))),
              0.9999999 > Math.abs(l)
                ? ((this._y = Math.atan2(o, r)), (this._z = Math.atan2(s, c)))
                : ((this._y = Math.atan2(-h, e)), (this._z = 0)))
            : "ZXY" === t
            ? ((this._x = Math.asin(n(u, -1, 1))),
              0.9999999 > Math.abs(u)
                ? ((this._y = Math.atan2(-h, r)), (this._z = Math.atan2(-a, c)))
                : ((this._y = 0), (this._z = Math.atan2(s, e))))
            : "ZYX" === t
            ? ((this._y = Math.asin(-n(h, -1, 1))),
              0.9999999 > Math.abs(h)
                ? ((this._x = Math.atan2(u, r)), (this._z = Math.atan2(s, e)))
                : ((this._x = 0), (this._z = Math.atan2(-a, c))))
            : "YZX" === t
            ? ((this._z = Math.asin(n(s, -1, 1))),
              0.9999999 > Math.abs(s)
                ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-h, e)))
                : ((this._x = 0), (this._y = Math.atan2(o, r))))
            : "XZY" === t
            ? ((this._z = Math.asin(-n(a, -1, 1))),
              0.9999999 > Math.abs(a)
                ? ((this._x = Math.atan2(u, c)), (this._y = Math.atan2(o, e)))
                : ((this._x = Math.atan2(-l, r)), (this._y = 0)))
            : console.warn(
                "THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
                  t
              ),
          (this._order = t),
          !1 !== i && this._onChangeCallback(),
          this
        );
      },
      setFromQuaternion: function (e, t, i) {
        return (
          rJ.makeRotationFromQuaternion(e), this.setFromRotationMatrix(rJ, t, i)
        );
      },
      setFromVector3: function (e, t) {
        return this.set(e.x, e.y, e.z, t || this._order);
      },
      reorder: function (e) {
        return rQ.setFromEuler(this), this.setFromQuaternion(rQ, e);
      },
      equals: function (e) {
        return (
          e._x === this._x &&
          e._y === this._y &&
          e._z === this._z &&
          e._order === this._order
        );
      },
      fromArray: function (e) {
        return (
          (this._x = e[0]),
          (this._y = e[1]),
          (this._z = e[2]),
          void 0 !== e[3] && (this._order = e[3]),
          this._onChangeCallback(),
          this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this._x),
          (e[t + 1] = this._y),
          (e[t + 2] = this._z),
          (e[t + 3] = this._order),
          e
        );
      },
      toVector3: function (e) {
        return e
          ? e.set(this._x, this._y, this._z)
          : new r(this._x, this._y, this._z);
      },
      _onChange: function (e) {
        return (this._onChangeCallback = e), this;
      },
      _onChangeCallback: function () {},
    }),
    Object.assign(p.prototype, {
      set: function (e) {
        this.mask = (1 << e) | 0;
      },
      enable: function (e) {
        this.mask = this.mask | (1 << e) | 0;
      },
      enableAll: function () {
        this.mask = -1;
      },
      toggle: function (e) {
        this.mask ^= (1 << e) | 0;
      },
      disable: function (e) {
        this.mask &= ~((1 << e) | 0);
      },
      disableAll: function () {
        this.mask = 0;
      },
      test: function (e) {
        return 0 != (this.mask & e.mask);
      },
    });
  var rK = 0,
    r9 = new r(),
    ae = new n(),
    at = new h(),
    ai = new r(),
    an = new r(),
    ar = new r(),
    aa = new n(),
    ao = new r(1, 0, 0),
    as = new r(0, 1, 0),
    ac = new r(0, 0, 1),
    al = { type: "added" },
    ah = { type: "removed" };
  (d.DefaultUp = new r(0, 1, 0)),
    (d.DefaultMatrixAutoUpdate = !0),
    (d.prototype = Object.assign(Object.create(t.prototype), {
      constructor: d,
      isObject3D: !0,
      onBeforeRender: function () {},
      onAfterRender: function () {},
      applyMatrix: function (e) {
        this.matrixAutoUpdate && this.updateMatrix(),
          this.matrix.premultiply(e),
          this.matrix.decompose(this.position, this.quaternion, this.scale);
      },
      applyQuaternion: function (e) {
        return this.quaternion.premultiply(e), this;
      },
      setRotationFromAxisAngle: function (e, t) {
        this.quaternion.setFromAxisAngle(e, t);
      },
      setRotationFromEuler: function (e) {
        this.quaternion.setFromEuler(e, !0);
      },
      setRotationFromMatrix: function (e) {
        this.quaternion.setFromRotationMatrix(e);
      },
      setRotationFromQuaternion: function (e) {
        this.quaternion.copy(e);
      },
      rotateOnAxis: function (e, t) {
        return ae.setFromAxisAngle(e, t), this.quaternion.multiply(ae), this;
      },
      rotateOnWorldAxis: function (e, t) {
        return ae.setFromAxisAngle(e, t), this.quaternion.premultiply(ae), this;
      },
      rotateX: function (e) {
        return this.rotateOnAxis(ao, e);
      },
      rotateY: function (e) {
        return this.rotateOnAxis(as, e);
      },
      rotateZ: function (e) {
        return this.rotateOnAxis(ac, e);
      },
      translateOnAxis: function (e, t) {
        return (
          r9.copy(e).applyQuaternion(this.quaternion),
          this.position.add(r9.multiplyScalar(t)),
          this
        );
      },
      translateX: function (e) {
        return this.translateOnAxis(ao, e);
      },
      translateY: function (e) {
        return this.translateOnAxis(as, e);
      },
      translateZ: function (e) {
        return this.translateOnAxis(ac, e);
      },
      localToWorld: function (e) {
        return e.applyMatrix4(this.matrixWorld);
      },
      worldToLocal: function (e) {
        return e.applyMatrix4(at.getInverse(this.matrixWorld));
      },
      lookAt: function (e, t, i) {
        e.isVector3 ? ai.copy(e) : ai.set(e, t, i),
          (e = this.parent),
          this.updateWorldMatrix(!0, !1),
          an.setFromMatrixPosition(this.matrixWorld),
          this.isCamera || this.isLight
            ? at.lookAt(an, ai, this.up)
            : at.lookAt(ai, an, this.up),
          this.quaternion.setFromRotationMatrix(at),
          e &&
            (at.extractRotation(e.matrixWorld),
            ae.setFromRotationMatrix(at),
            this.quaternion.premultiply(ae.inverse()));
      },
      add: function (e) {
        if (1 < arguments.length) {
          for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
          return this;
        }
        return e === this
          ? (console.error(
              "THREE.Object3D.add: object can't be added as a child of itself.",
              e
            ),
            this)
          : (e && e.isObject3D
              ? (null !== e.parent && e.parent.remove(e),
                (e.parent = this),
                this.children.push(e),
                e.dispatchEvent(al))
              : console.error(
                  "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                  e
                ),
            this);
      },
      remove: function (e) {
        if (1 < arguments.length) {
          for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
          return this;
        }
        return (
          -1 !== (t = this.children.indexOf(e)) &&
            ((e.parent = null),
            this.children.splice(t, 1),
            e.dispatchEvent(ah)),
          this
        );
      },
      attach: function (e) {
        return (
          this.updateWorldMatrix(!0, !1),
          at.getInverse(this.matrixWorld),
          null !== e.parent &&
            (e.parent.updateWorldMatrix(!0, !1),
            at.multiply(e.parent.matrixWorld)),
          e.applyMatrix(at),
          e.updateWorldMatrix(!1, !1),
          this.add(e),
          this
        );
      },
      getObjectById: function (e) {
        return this.getObjectByProperty("id", e);
      },
      getObjectByName: function (e) {
        return this.getObjectByProperty("name", e);
      },
      getObjectByProperty: function (e, t) {
        if (this[e] === t) return this;
        for (var i = 0, n = this.children.length; i < n; i++) {
          var r = this.children[i].getObjectByProperty(e, t);
          if (void 0 !== r) return r;
        }
      },
      getWorldPosition: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Object3D: .getWorldPosition() target is now required"
            ),
            (e = new r())),
          this.updateMatrixWorld(!0),
          e.setFromMatrixPosition(this.matrixWorld)
        );
      },
      getWorldQuaternion: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Object3D: .getWorldQuaternion() target is now required"
            ),
            (e = new n())),
          this.updateMatrixWorld(!0),
          this.matrixWorld.decompose(an, e, ar),
          e
        );
      },
      getWorldScale: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Object3D: .getWorldScale() target is now required"
            ),
            (e = new r())),
          this.updateMatrixWorld(!0),
          this.matrixWorld.decompose(an, aa, e),
          e
        );
      },
      getWorldDirection: function (e) {
        void 0 === e &&
          (console.warn(
            "THREE.Object3D: .getWorldDirection() target is now required"
          ),
          (e = new r())),
          this.updateMatrixWorld(!0);
        var t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize();
      },
      raycast: function () {},
      traverse: function (e) {
        e(this);
        for (var t = this.children, i = 0, n = t.length; i < n; i++)
          t[i].traverse(e);
      },
      traverseVisible: function (e) {
        if (!1 !== this.visible) {
          e(this);
          for (var t = this.children, i = 0, n = t.length; i < n; i++)
            t[i].traverseVisible(e);
        }
      },
      traverseAncestors: function (e) {
        var t = this.parent;
        null !== t && (e(t), t.traverseAncestors(e));
      },
      updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale),
          (this.matrixWorldNeedsUpdate = !0);
      },
      updateMatrixWorld: function (e) {
        this.matrixAutoUpdate && this.updateMatrix(),
          (this.matrixWorldNeedsUpdate || e) &&
            (null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            (this.matrixWorldNeedsUpdate = !1),
            (e = !0));
        for (var t = this.children, i = 0, n = t.length; i < n; i++)
          t[i].updateMatrixWorld(e);
      },
      updateWorldMatrix: function (e, t) {
        var i = this.parent;
        if (
          (!0 === e && null !== i && i.updateWorldMatrix(!0, !1),
          this.matrixAutoUpdate && this.updateMatrix(),
          null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          !0 === t)
        )
          for (e = this.children, t = 0, i = e.length; t < i; t++)
            e[t].updateWorldMatrix(!1, !0);
      },
      toJSON: function (e) {
        function t(t, i) {
          return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid;
        }
        function i(e) {
          var t,
            i = [];
          for (t in e) {
            var n = e[t];
            delete n.metadata, i.push(n);
          }
          return i;
        }
        var n = void 0 === e || "string" == typeof e,
          r = {};
        n &&
          ((e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
          }),
          (r.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON",
          }));
        var a = {};
        if (
          ((a.uuid = this.uuid),
          (a.type = this.type),
          "" !== this.name && (a.name = this.name),
          !0 === this.castShadow && (a.castShadow = !0),
          !0 === this.receiveShadow && (a.receiveShadow = !0),
          !1 === this.visible && (a.visible = !1),
          !1 === this.frustumCulled && (a.frustumCulled = !1),
          0 !== this.renderOrder && (a.renderOrder = this.renderOrder),
          "{}" !== JSON.stringify(this.userData) &&
            (a.userData = this.userData),
          (a.layers = this.layers.mask),
          (a.matrix = this.matrix.toArray()),
          !1 === this.matrixAutoUpdate && (a.matrixAutoUpdate = !1),
          this.isInstancedMesh &&
            ((a.type = "InstancedMesh"),
            (a.count = this.count),
            (a.instanceMatrix = this.instanceMatrix.toJSON())),
          this.isMesh || this.isLine || this.isPoints)
        ) {
          a.geometry = t(e.geometries, this.geometry);
          var o = this.geometry.parameters;
          if (void 0 !== o && void 0 !== o.shapes) {
            if (Array.isArray((o = o.shapes)))
              for (var s = 0, c = o.length; s < c; s++) t(e.shapes, o[s]);
            else t(e.shapes, o);
          }
        }
        if (void 0 !== this.material) {
          if (Array.isArray(this.material)) {
            for (o = [], s = 0, c = this.material.length; s < c; s++)
              o.push(t(e.materials, this.material[s]));
            a.material = o;
          } else a.material = t(e.materials, this.material);
        }
        if (0 < this.children.length)
          for (a.children = [], s = 0; s < this.children.length; s++)
            a.children.push(this.children[s].toJSON(e).object);
        if (n) {
          (n = i(e.geometries)), (s = i(e.materials)), (c = i(e.textures));
          var l = i(e.images);
          (o = i(e.shapes)),
            0 < n.length && (r.geometries = n),
            0 < s.length && (r.materials = s),
            0 < c.length && (r.textures = c),
            0 < l.length && (r.images = l),
            0 < o.length && (r.shapes = o);
        }
        return (r.object = a), r;
      },
      clone: function (e) {
        return new this.constructor().copy(this, e);
      },
      copy: function (e, t) {
        if (
          (void 0 === t && (t = !0),
          (this.name = e.name),
          this.up.copy(e.up),
          this.position.copy(e.position),
          this.quaternion.copy(e.quaternion),
          this.scale.copy(e.scale),
          this.matrix.copy(e.matrix),
          this.matrixWorld.copy(e.matrixWorld),
          (this.matrixAutoUpdate = e.matrixAutoUpdate),
          (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
          (this.layers.mask = e.layers.mask),
          (this.visible = e.visible),
          (this.castShadow = e.castShadow),
          (this.receiveShadow = e.receiveShadow),
          (this.frustumCulled = e.frustumCulled),
          (this.renderOrder = e.renderOrder),
          (this.userData = JSON.parse(JSON.stringify(e.userData))),
          !0 === t)
        )
          for (t = 0; t < e.children.length; t++)
            this.add(e.children[t].clone());
        return this;
      },
    })),
    (f.prototype = Object.assign(Object.create(d.prototype), {
      constructor: f,
      isScene: !0,
      copy: function (e, t) {
        return (
          d.prototype.copy.call(this, e, t),
          null !== e.background && (this.background = e.background.clone()),
          null !== e.environment && (this.environment = e.environment.clone()),
          null !== e.fog && (this.fog = e.fog.clone()),
          null !== e.overrideMaterial &&
            (this.overrideMaterial = e.overrideMaterial.clone()),
          (this.autoUpdate = e.autoUpdate),
          (this.matrixAutoUpdate = e.matrixAutoUpdate),
          this
        );
      },
      toJSON: function (e) {
        var t = d.prototype.toJSON.call(this, e);
        return (
          null !== this.background &&
            (t.object.background = this.background.toJSON(e)),
          null !== this.environment &&
            (t.object.environment = this.environment.toJSON(e)),
          null !== this.fog && (t.object.fog = this.fog.toJSON()),
          t
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    }));
  var au = [
      new r(),
      new r(),
      new r(),
      new r(),
      new r(),
      new r(),
      new r(),
      new r(),
    ],
    ap = new r(),
    ad = new m(),
    af = new r(),
    am = new r(),
    ag = new r(),
    av = new r(),
    a$ = new r(),
    ay = new r(),
    ax = new r(),
    a_ = new r(),
    a8 = new r(),
    aw = new r();
  Object.assign(m.prototype, {
    isBox3: !0,
    set: function (e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    },
    setFromArray: function (e) {
      for (
        var t = 1 / 0,
          i = 1 / 0,
          n = 1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = -1 / 0,
          s = 0,
          c = e.length;
        s < c;
        s += 3
      ) {
        var l = e[s],
          h = e[s + 1],
          u = e[s + 2];
        l < t && (t = l),
          h < i && (i = h),
          u < n && (n = u),
          l > r && (r = l),
          h > a && (a = h),
          u > o && (o = u);
      }
      return this.min.set(t, i, n), this.max.set(r, a, o), this;
    },
    setFromBufferAttribute: function (e) {
      for (
        var t = 1 / 0,
          i = 1 / 0,
          n = 1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = -1 / 0,
          s = 0,
          c = e.count;
        s < c;
        s++
      ) {
        var l = e.getX(s),
          h = e.getY(s),
          u = e.getZ(s);
        l < t && (t = l),
          h < i && (i = h),
          u < n && (n = u),
          l > r && (r = l),
          h > a && (a = h),
          u > o && (o = u);
      }
      return this.min.set(t, i, n), this.max.set(r, a, o), this;
    },
    setFromPoints: function (e) {
      this.makeEmpty();
      for (var t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
      return this;
    },
    setFromCenterAndSize: function (e, t) {
      return (
        (t = ap.copy(t).multiplyScalar(0.5)),
        this.min.copy(e).sub(t),
        this.max.copy(e).add(t),
        this
      );
    },
    setFromObject: function (e) {
      return this.makeEmpty(), this.expandByObject(e);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    },
    makeEmpty: function () {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    },
    isEmpty: function () {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    },
    getCenter: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box3: .getCenter() target is now required"),
          (e = new r())),
        this.isEmpty()
          ? e.set(0, 0, 0)
          : e.addVectors(this.min, this.max).multiplyScalar(0.5)
      );
    },
    getSize: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box3: .getSize() target is now required"),
          (e = new r())),
        this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
      );
    },
    expandByPoint: function (e) {
      return this.min.min(e), this.max.max(e), this;
    },
    expandByVector: function (e) {
      return this.min.sub(e), this.max.add(e), this;
    },
    expandByScalar: function (e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    },
    expandByObject: function (e) {
      e.updateWorldMatrix(!1, !1);
      var t = e.geometry;
      void 0 !== t &&
        (null === t.boundingBox && t.computeBoundingBox(),
        ad.copy(t.boundingBox),
        ad.applyMatrix4(e.matrixWorld),
        this.expandByPoint(ad.min),
        this.expandByPoint(ad.max)),
        (e = e.children),
        (t = 0);
      for (var i = e.length; t < i; t++) this.expandByObject(e[t]);
      return this;
    },
    containsPoint: function (e) {
      return (
        !(e.x < this.min.x) &&
        !(e.x > this.max.x) &&
        !(e.y < this.min.y) &&
        !(e.y > this.max.y) &&
        !(e.z < this.min.z) &&
        !(e.z > this.max.z)
      );
    },
    containsBox: function (e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    },
    getParameter: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box3: .getParameter() target is now required"),
          (t = new r())),
        t.set(
          (e.x - this.min.x) / (this.max.x - this.min.x),
          (e.y - this.min.y) / (this.max.y - this.min.y),
          (e.z - this.min.z) / (this.max.z - this.min.z)
        )
      );
    },
    intersectsBox: function (e) {
      return (
        !(e.max.x < this.min.x) &&
        !(e.min.x > this.max.x) &&
        !(e.max.y < this.min.y) &&
        !(e.min.y > this.max.y) &&
        !(e.max.z < this.min.z) &&
        !(e.min.z > this.max.z)
      );
    },
    intersectsSphere: function (e) {
      return (
        this.clampPoint(e.center, ap),
        ap.distanceToSquared(e.center) <= e.radius * e.radius
      );
    },
    intersectsPlane: function (e) {
      if (0 < e.normal.x)
        var t = e.normal.x * this.min.x,
          i = e.normal.x * this.max.x;
      else (t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x);
      return (
        0 < e.normal.y
          ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
        0 < e.normal.z
          ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
        t <= -e.constant && i >= -e.constant
      );
    },
    intersectsTriangle: function (e) {
      return (
        !this.isEmpty() &&
        (this.getCenter(ax),
        a_.subVectors(this.max, ax),
        af.subVectors(e.a, ax),
        am.subVectors(e.b, ax),
        ag.subVectors(e.c, ax),
        av.subVectors(am, af),
        a$.subVectors(ag, am),
        ay.subVectors(af, ag),
        !!(
          g(
            (e = [
              0,
              -av.z,
              av.y,
              0,
              -a$.z,
              a$.y,
              0,
              -ay.z,
              ay.y,
              av.z,
              0,
              -av.x,
              a$.z,
              0,
              -a$.x,
              ay.z,
              0,
              -ay.x,
              -av.y,
              av.x,
              0,
              -a$.y,
              a$.x,
              0,
              -ay.y,
              ay.x,
              0,
            ]),
            af,
            am,
            ag,
            a_
          ) && g((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), af, am, ag, a_)
        ) &&
          (a8.crossVectors(av, a$),
          g((e = [a8.x, a8.y, a8.z]), af, am, ag, a_)))
      );
    },
    clampPoint: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box3: .clampPoint() target is now required"),
          (t = new r())),
        t.copy(e).clamp(this.min, this.max)
      );
    },
    distanceToPoint: function (e) {
      return ap.copy(e).clamp(this.min, this.max).sub(e).length();
    },
    getBoundingSphere: function (e) {
      return (
        void 0 === e &&
          console.error(
            "THREE.Box3: .getBoundingSphere() target is now required"
          ),
        this.getCenter(e.center),
        (e.radius = 0.5 * this.getSize(ap).length()),
        e
      );
    },
    intersect: function (e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    },
    union: function (e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    },
    applyMatrix4: function (e) {
      return (
        this.isEmpty() ||
          (au[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          au[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          au[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          au[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          au[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          au[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          au[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          au[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(au)),
        this
      );
    },
    translate: function (e) {
      return this.min.add(e), this.max.add(e), this;
    },
    equals: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    },
  });
  var ab = new m();
  Object.assign(v.prototype, {
    set: function (e, t) {
      return this.center.copy(e), (this.radius = t), this;
    },
    setFromPoints: function (e, t) {
      var i = this.center;
      void 0 !== t ? i.copy(t) : ab.setFromPoints(e).getCenter(i);
      for (var n = (t = 0), r = e.length; n < r; n++)
        t = Math.max(t, i.distanceToSquared(e[n]));
      return (this.radius = Math.sqrt(t)), this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.center.copy(e.center), (this.radius = e.radius), this;
    },
    empty: function () {
      return 0 >= this.radius;
    },
    containsPoint: function (e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function (e) {
      return e.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function (e) {
      var t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    },
    intersectsBox: function (e) {
      return e.intersectsSphere(this);
    },
    intersectsPlane: function (e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    },
    clampPoint: function (e, t) {
      var i = this.center.distanceToSquared(e);
      return (
        void 0 === t &&
          (console.warn("THREE.Sphere: .clampPoint() target is now required"),
          (t = new r())),
        t.copy(e),
        i > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    },
    getBoundingBox: function (e) {
      return (
        void 0 === e &&
          (console.warn(
            "THREE.Sphere: .getBoundingBox() target is now required"
          ),
          (e = new m())),
        e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e
      );
    },
    applyMatrix4: function (e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius *= e.getMaxScaleOnAxis()),
        this
      );
    },
    translate: function (e) {
      return this.center.add(e), this;
    },
    equals: function (e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    },
  });
  var aM = new r(),
    aS = new r(),
    aT = new r(),
    aE = new r(),
    a1 = new r(),
    a0 = new r(),
    aL = new r();
  Object.assign($.prototype, {
    set: function (e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    },
    at: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Ray: .at() target is now required"),
          (t = new r())),
        t.copy(this.direction).multiplyScalar(e).add(this.origin)
      );
    },
    lookAt: function (e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    },
    recast: function (e) {
      return this.origin.copy(this.at(e, aM)), this;
    },
    closestPointToPoint: function (e, t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Ray: .closestPointToPoint() target is now required"
          ),
          (t = new r())),
        t.subVectors(e, this.origin),
        0 > (e = t.dot(this.direction))
          ? t.copy(this.origin)
          : t.copy(this.direction).multiplyScalar(e).add(this.origin)
      );
    },
    distanceToPoint: function (e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    },
    distanceSqToPoint: function (e) {
      var t = aM.subVectors(e, this.origin).dot(this.direction);
      return 0 > t
        ? this.origin.distanceToSquared(e)
        : (aM.copy(this.direction).multiplyScalar(t).add(this.origin),
          aM.distanceToSquared(e));
    },
    distanceSqToSegment: function (e, t, i, n) {
      aS.copy(e).add(t).multiplyScalar(0.5),
        aT.copy(t).sub(e).normalize(),
        aE.copy(this.origin).sub(aS);
      var r = 0.5 * e.distanceTo(t),
        a = -this.direction.dot(aT),
        o = aE.dot(this.direction),
        s = -aE.dot(aT),
        c = aE.lengthSq(),
        l = Math.abs(1 - a * a);
      if (0 < l) {
        (e = a * s - o), (t = a * o - s);
        var h = r * l;
        0 <= e
          ? t >= -h
            ? t <= h
              ? ((e *= r = 1 / l),
                (t *= r),
                (a = e * (e + a * t + 2 * o) + t * (a * e + t + 2 * s) + c))
              : (a =
                  -(e = Math.max(0, -(a * (t = r) + o))) * e +
                  t * (t + 2 * s) +
                  c)
            : (a =
                -(e = Math.max(0, -(a * (t = -r) + o))) * e +
                t * (t + 2 * s) +
                c)
          : t <= -h
          ? ((t =
              0 < (e = Math.max(0, -(-a * r + o)))
                ? -r
                : Math.min(Math.max(-r, -s), r)),
            (a = -e * e + t * (t + 2 * s) + c))
          : t <= h
          ? ((e = 0),
            (a = (t = Math.min(Math.max(-r, -s), r)) * (t + 2 * s) + c))
          : ((t =
              0 < (e = Math.max(0, -(a * r + o)))
                ? r
                : Math.min(Math.max(-r, -s), r)),
            (a = -e * e + t * (t + 2 * s) + c));
      } else
        (t = 0 < a ? -r : r),
          (a = -(e = Math.max(0, -(a * t + o))) * e + t * (t + 2 * s) + c);
      return (
        i && i.copy(this.direction).multiplyScalar(e).add(this.origin),
        n && n.copy(aT).multiplyScalar(t).add(aS),
        a
      );
    },
    intersectSphere: function (e, t) {
      aM.subVectors(e.center, this.origin);
      var i = aM.dot(this.direction),
        n = aM.dot(aM) - i * i;
      return n > (e = e.radius * e.radius)
        ? null
        : ((n = i - (e = Math.sqrt(e - n))),
          (i += e),
          0 > n && 0 > i ? null : 0 > n ? this.at(i, t) : this.at(n, t));
    },
    intersectsSphere: function (e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    },
    distanceToPlane: function (e) {
      var t = e.normal.dot(this.direction);
      return 0 === t
        ? 0 === e.distanceToPoint(this.origin)
          ? 0
          : null
        : 0 <= (e = -(this.origin.dot(e.normal) + e.constant) / t)
        ? e
        : null;
    },
    intersectPlane: function (e, t) {
      return null === (e = this.distanceToPlane(e)) ? null : this.at(e, t);
    },
    intersectsPlane: function (e) {
      var t = e.distanceToPoint(this.origin);
      return !!(0 === t || 0 > e.normal.dot(this.direction) * t);
    },
    intersectBox: function (e, t) {
      var i = 1 / this.direction.x,
        n = 1 / this.direction.y,
        r = 1 / this.direction.z,
        a = this.origin;
      if (0 <= i) {
        var o = (e.min.x - a.x) * i;
        i *= e.max.x - a.x;
      } else (o = (e.max.x - a.x) * i), (i *= e.min.x - a.x);
      if (0 <= n) {
        var s = (e.min.y - a.y) * n;
        n *= e.max.y - a.y;
      } else (s = (e.max.y - a.y) * n), (n *= e.min.y - a.y);
      return o > n || s > i
        ? null
        : ((s > o || o != o) && (o = s),
          (n < i || i != i) && (i = n),
          0 <= r
            ? ((s = (e.min.z - a.z) * r), (e = (e.max.z - a.z) * r))
            : ((s = (e.max.z - a.z) * r), (e = (e.min.z - a.z) * r)),
          o > e || s > i)
        ? null
        : ((s > o || o != o) && (o = s),
          (e < i || i != i) && (i = e),
          0 > i ? null : this.at(0 <= o ? o : i, t));
    },
    intersectsBox: function (e) {
      return null !== this.intersectBox(e, aM);
    },
    intersectTriangle: function (e, t, i, n, r) {
      if (
        (a1.subVectors(t, e),
        a0.subVectors(i, e),
        aL.crossVectors(a1, a0),
        0 < (t = this.direction.dot(aL)))
      ) {
        if (n) return null;
        n = 1;
      } else {
        if (!(0 > t)) return null;
        (n = -1), (t = -t);
      }
      return (aE.subVectors(this.origin, e),
      0 > (e = n * this.direction.dot(a0.crossVectors(aE, a0))) ||
        0 > (i = n * this.direction.dot(a1.cross(aE))) ||
        e + i > t)
        ? null
        : 0 > (e = -n * aE.dot(aL))
        ? null
        : this.at(e / t, r);
    },
    applyMatrix4: function (e) {
      return (
        this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      );
    },
    equals: function (e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    },
  });
  var aA = new r(),
    aR = new r(),
    aP = new a();
  Object.assign(y.prototype, {
    isPlane: !0,
    set: function (e, t) {
      return this.normal.copy(e), (this.constant = t), this;
    },
    setComponents: function (e, t, i, n) {
      return this.normal.set(e, t, i), (this.constant = n), this;
    },
    setFromNormalAndCoplanarPoint: function (e, t) {
      return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
    },
    setFromCoplanarPoints: function (e, t, i) {
      return (
        (t = aA.subVectors(i, t).cross(aR.subVectors(e, t)).normalize()),
        this.setFromNormalAndCoplanarPoint(t, e),
        this
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.normal.copy(e.normal), (this.constant = e.constant), this;
    },
    normalize: function () {
      var e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), (this.constant *= e), this;
    },
    negate: function () {
      return (this.constant *= -1), this.normal.negate(), this;
    },
    distanceToPoint: function (e) {
      return this.normal.dot(e) + this.constant;
    },
    distanceToSphere: function (e) {
      return this.distanceToPoint(e.center) - e.radius;
    },
    projectPoint: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Plane: .projectPoint() target is now required"),
          (t = new r())),
        t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
      );
    },
    intersectLine: function (e, t) {
      void 0 === t &&
        (console.warn("THREE.Plane: .intersectLine() target is now required"),
        (t = new r()));
      var i = e.delta(aA),
        n = this.normal.dot(i);
      if (0 === n) {
        if (0 === this.distanceToPoint(e.start)) return t.copy(e.start);
      } else if (
        !(0 > (n = -(e.start.dot(this.normal) + this.constant) / n) || 1 < n)
      )
        return t.copy(i).multiplyScalar(n).add(e.start);
    },
    intersectsLine: function (e) {
      var t = this.distanceToPoint(e.start);
      return (
        (e = this.distanceToPoint(e.end)), (0 > t && 0 < e) || (0 > e && 0 < t)
      );
    },
    intersectsBox: function (e) {
      return e.intersectsPlane(this);
    },
    intersectsSphere: function (e) {
      return e.intersectsPlane(this);
    },
    coplanarPoint: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
          (e = new r())),
        e.copy(this.normal).multiplyScalar(-this.constant)
      );
    },
    applyMatrix4: function (e, t) {
      return (
        (t = t || aP.getNormalMatrix(e)),
        (e = this.coplanarPoint(aA).applyMatrix4(e)),
        (t = this.normal.applyMatrix3(t).normalize()),
        (this.constant = -e.dot(t)),
        this
      );
    },
    translate: function (e) {
      return (this.constant -= e.dot(this.normal)), this;
    },
    equals: function (e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    },
  });
  var aC = new r(),
    aD = new r(),
    aI = new r(),
    aN = new r(),
    az = new r(),
    aB = new r(),
    a2 = new r(),
    aU = new r(),
    aF = new r(),
    aG = new r();
  Object.assign(x, {
    getNormal: function (e, t, i, n) {
      return (
        void 0 === n &&
          (console.warn("THREE.Triangle: .getNormal() target is now required"),
          (n = new r())),
        n.subVectors(i, t),
        aC.subVectors(e, t),
        n.cross(aC),
        0 < (e = n.lengthSq())
          ? n.multiplyScalar(1 / Math.sqrt(e))
          : n.set(0, 0, 0)
      );
    },
    getBarycoord: function (e, t, i, n, a) {
      aC.subVectors(n, t),
        aD.subVectors(i, t),
        aI.subVectors(e, t),
        (e = aC.dot(aC)),
        (t = aC.dot(aD)),
        (i = aC.dot(aI));
      var o = aD.dot(aD);
      n = aD.dot(aI);
      var s = e * o - t * t;
      return (void 0 === a &&
        (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
        (a = new r())),
      0 === s)
        ? a.set(-2, -1, -1)
        : ((o = (o * i - t * n) * (s = 1 / s)),
          (e = (e * n - t * i) * s),
          a.set(1 - o - e, e, o));
    },
    containsPoint: function (e, t, i, n) {
      return (
        x.getBarycoord(e, t, i, n, aN),
        0 <= aN.x && 0 <= aN.y && 1 >= aN.x + aN.y
      );
    },
    getUV: function (e, t, i, n, r, a, o, s) {
      return (
        this.getBarycoord(e, t, i, n, aN),
        s.set(0, 0),
        s.addScaledVector(r, aN.x),
        s.addScaledVector(a, aN.y),
        s.addScaledVector(o, aN.z),
        s
      );
    },
    isFrontFacing: function (e, t, i, n) {
      return aC.subVectors(i, t), aD.subVectors(e, t), 0 > aC.cross(aD).dot(n);
    },
  }),
    Object.assign(x.prototype, {
      set: function (e, t, i) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
      },
      setFromPointsAndIndices: function (e, t, i, n) {
        return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
      },
      getArea: function () {
        return (
          aC.subVectors(this.c, this.b),
          aD.subVectors(this.a, this.b),
          0.5 * aC.cross(aD).length()
        );
      },
      getMidpoint: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Triangle: .getMidpoint() target is now required"
            ),
            (e = new r())),
          e
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3)
        );
      },
      getNormal: function (e) {
        return x.getNormal(this.a, this.b, this.c, e);
      },
      getPlane: function (e) {
        return (
          void 0 === e &&
            (console.warn("THREE.Triangle: .getPlane() target is now required"),
            (e = new y())),
          e.setFromCoplanarPoints(this.a, this.b, this.c)
        );
      },
      getBarycoord: function (e, t) {
        return x.getBarycoord(e, this.a, this.b, this.c, t);
      },
      getUV: function (e, t, i, n, r) {
        return x.getUV(e, this.a, this.b, this.c, t, i, n, r);
      },
      containsPoint: function (e) {
        return x.containsPoint(e, this.a, this.b, this.c);
      },
      isFrontFacing: function (e) {
        return x.isFrontFacing(this.a, this.b, this.c, e);
      },
      intersectsBox: function (e) {
        return e.intersectsTriangle(this);
      },
      closestPointToPoint: function (e, t) {
        void 0 === t &&
          (console.warn(
            "THREE.Triangle: .closestPointToPoint() target is now required"
          ),
          (t = new r()));
        var i = this.a,
          n = this.b,
          a = this.c;
        az.subVectors(n, i), aB.subVectors(a, i), aU.subVectors(e, i);
        var o = az.dot(aU),
          s = aB.dot(aU);
        if (0 >= o && 0 >= s) return t.copy(i);
        aF.subVectors(e, n);
        var c = az.dot(aF),
          l = aB.dot(aF);
        if (0 <= c && l <= c) return t.copy(n);
        var h = o * l - c * s;
        if (0 >= h && 0 <= o && 0 >= c)
          return (n = o / (o - c)), t.copy(i).addScaledVector(az, n);
        aG.subVectors(e, a), (e = az.dot(aG));
        var u = aB.dot(aG);
        return 0 <= u && e <= u
          ? t.copy(a)
          : 0 >= (o = e * s - o * u) && 0 <= s && 0 >= u
          ? ((h = s / (s - u)), t.copy(i).addScaledVector(aB, h))
          : 0 >= (s = c * u - e * l) && 0 <= l - c && 0 <= e - u
          ? (a2.subVectors(a, n),
            (h = (l - c) / (l - c + (e - u))),
            t.copy(n).addScaledVector(a2, h))
          : ((a = 1 / (s + o + h)),
            (n = o * a),
            (h *= a),
            t.copy(i).addScaledVector(az, n).addScaledVector(aB, h));
      },
      equals: function (e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
      },
    });
  var a3 = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    aH = { h: 0, s: 0, l: 0 },
    aO = { h: 0, s: 0, l: 0 };
  Object.assign(_.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function (e) {
      return (
        e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e),
        this
      );
    },
    setScalar: function (e) {
      return (this.b = this.g = this.r = e), this;
    },
    setHex: function (e) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (255 & e) / 255),
        this
      );
    },
    setRGB: function (e, t, i) {
      return (this.r = e), (this.g = t), (this.b = i), this;
    },
    setHSL: function (e, t, i) {
      return (
        (e = rH.euclideanModulo(e, 1)),
        (t = rH.clamp(t, 0, 1)),
        (i = rH.clamp(i, 0, 1)),
        0 === t
          ? (this.r = this.g = this.b = i)
          : ((t = 0.5 >= i ? i * (1 + t) : i + t - i * t),
            (i = 2 * i - t),
            (this.r = w(i, t, e + 1 / 3)),
            (this.g = w(i, t, e)),
            (this.b = w(i, t, e - 1 / 3))),
        this
      );
    },
    setStyle: function (e) {
      function t(t) {
        void 0 !== t &&
          1 > parseFloat(t) &&
          console.warn(
            "THREE.Color: Alpha component of " + e + " will be ignored."
          );
      }
      if ((i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e))) {
        var i,
          n = i[2];
        switch (i[1]) {
          case "rgb":
          case "rgba":
            if (
              (i =
                /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
                t(i[5]),
                this
              );
            if (
              (i =
                /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
                t(i[5]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (i =
                /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
            ) {
              n = parseFloat(i[1]) / 360;
              var r = parseInt(i[2], 10) / 100,
                a = parseInt(i[3], 10) / 100;
              return t(i[5]), this.setHSL(n, r, a);
            }
        }
      } else if ((i = /^#([A-Fa-f0-9]+)$/.exec(e))) {
        if (3 === (n = (i = i[1]).length))
          return (
            (this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255),
            (this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255),
            (this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255),
            this
          );
        if (6 === n)
          return (
            (this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255),
            (this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255),
            (this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255),
            this
          );
      }
      return e && 0 < e.length ? this.setColorName(e) : this;
    },
    setColorName: function (e) {
      var t = a3[e];
      return (
        void 0 !== t
          ? this.setHex(t)
          : console.warn("THREE.Color: Unknown color " + e),
        this
      );
    },
    clone: function () {
      return new this.constructor(this.r, this.g, this.b);
    },
    copy: function (e) {
      return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    },
    copyGammaToLinear: function (e, t) {
      return (
        void 0 === t && (t = 2),
        (this.r = Math.pow(e.r, t)),
        (this.g = Math.pow(e.g, t)),
        (this.b = Math.pow(e.b, t)),
        this
      );
    },
    copyLinearToGamma: function (e, t) {
      return (
        void 0 === t && (t = 2),
        (t = 0 < t ? 1 / t : 1),
        (this.r = Math.pow(e.r, t)),
        (this.g = Math.pow(e.g, t)),
        (this.b = Math.pow(e.b, t)),
        this
      );
    },
    convertGammaToLinear: function (e) {
      return this.copyGammaToLinear(this, e), this;
    },
    convertLinearToGamma: function (e) {
      return this.copyLinearToGamma(this, e), this;
    },
    copySRGBToLinear: function (e) {
      return (this.r = b(e.r)), (this.g = b(e.g)), (this.b = b(e.b)), this;
    },
    copyLinearToSRGB: function (e) {
      return (this.r = M(e.r)), (this.g = M(e.g)), (this.b = M(e.b)), this;
    },
    convertSRGBToLinear: function () {
      return this.copySRGBToLinear(this), this;
    },
    convertLinearToSRGB: function () {
      return this.copyLinearToSRGB(this), this;
    },
    getHex: function () {
      return (
        ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
      );
    },
    getHexString: function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function (e) {
      void 0 === e &&
        (console.warn("THREE.Color: .getHSL() target is now required"),
        (e = { h: 0, s: 0, l: 0 }));
      var t,
        i = this.r,
        n = this.g,
        r = this.b,
        a = Math.max(i, n, r),
        o = Math.min(i, n, r),
        s = (o + a) / 2;
      if (o === a) o = t = 0;
      else {
        var c = a - o;
        switch (((o = 0.5 >= s ? c / (a + o) : c / (2 - a - o)), a)) {
          case i:
            t = (n - r) / c + (n < r ? 6 : 0);
            break;
          case n:
            t = (r - i) / c + 2;
            break;
          case r:
            t = (i - n) / c + 4;
        }
        t /= 6;
      }
      return (e.h = t), (e.s = o), (e.l = s), e;
    },
    getStyle: function () {
      return (
        "rgb(" +
        ((255 * this.r) | 0) +
        "," +
        ((255 * this.g) | 0) +
        "," +
        ((255 * this.b) | 0) +
        ")"
      );
    },
    offsetHSL: function (e, t, i) {
      return (
        this.getHSL(aH),
        (aH.h += e),
        (aH.s += t),
        (aH.l += i),
        this.setHSL(aH.h, aH.s, aH.l),
        this
      );
    },
    add: function (e) {
      return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
    },
    addColors: function (e, t) {
      return (
        (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
      );
    },
    addScalar: function (e) {
      return (this.r += e), (this.g += e), (this.b += e), this;
    },
    sub: function (e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    },
    multiply: function (e) {
      return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
    },
    multiplyScalar: function (e) {
      return (this.r *= e), (this.g *= e), (this.b *= e), this;
    },
    lerp: function (e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    },
    lerpHSL: function (e, t) {
      this.getHSL(aH), e.getHSL(aO), (e = rH.lerp(aH.h, aO.h, t));
      var i = rH.lerp(aH.s, aO.s, t);
      return (t = rH.lerp(aH.l, aO.l, t)), this.setHSL(e, i, t), this;
    },
    equals: function (e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    },
    fromArray: function (e, t) {
      return (
        void 0 === t && (t = 0),
        (this.r = e[t]),
        (this.g = e[t + 1]),
        (this.b = e[t + 2]),
        this
      );
    },
    toArray: function (e, t) {
      return (
        void 0 === e && (e = []),
        void 0 === t && (t = 0),
        (e[t] = this.r),
        (e[t + 1] = this.g),
        (e[t + 2] = this.b),
        e
      );
    },
    toJSON: function () {
      return this.getHex();
    },
  }),
    (_.NAMES = a3),
    Object.assign(S.prototype, {
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        (this.a = e.a),
          (this.b = e.b),
          (this.c = e.c),
          this.normal.copy(e.normal),
          this.color.copy(e.color),
          (this.materialIndex = e.materialIndex);
        for (var t = 0, i = e.vertexNormals.length; t < i; t++)
          this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (t = 0, i = e.vertexColors.length; t < i; t++)
          this.vertexColors[t] = e.vertexColors[t].clone();
        return this;
      },
    });
  var aV = 0;
  (T.prototype = Object.assign(Object.create(t.prototype), {
    constructor: T,
    isMaterial: !0,
    onBeforeCompile: function () {},
    setValues: function (e) {
      if (void 0 !== e)
        for (var t in e) {
          var i = e[t];
          if (void 0 === i)
            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          else if ("shading" === t)
            console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead."
            ),
              (this.flatShading = 1 === i);
          else {
            var n = this[t];
            void 0 === n
              ? console.warn(
                  "THREE." +
                    this.type +
                    ": '" +
                    t +
                    "' is not a property of this material."
                )
              : n && n.isColor
              ? n.set(i)
              : n && n.isVector3 && i && i.isVector3
              ? n.copy(i)
              : (this[t] = i);
          }
        }
    },
    toJSON: function (e) {
      function t(e) {
        var t,
          i = [];
        for (t in e) {
          var n = e[t];
          delete n.metadata, i.push(n);
        }
        return i;
      }
      var i = void 0 === e || "string" == typeof e;
      i && (e = { textures: {}, images: {} });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      return (
        (n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          (n.lightMap = this.lightMap.toJSON(e).uuid),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          (n.reflectivity = this.reflectivity),
          (n.refractionRatio = this.refractionRatio),
          void 0 !== this.combine && (n.combine = this.combine),
          void 0 !== this.envMapIntensity &&
            (n.envMapIntensity = this.envMapIntensity)),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        void 0 !== this.size && (n.size = this.size),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        0 !== this.side && (n.side = this.side),
        0 !== this.vertexColors && (n.vertexColors = this.vertexColors),
        1 > this.opacity && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        0 < this.alphaTest && (n.alphaTest = this.alphaTest),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        1 < this.wireframeLinewidth &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.morphTargets && (n.morphTargets = !0),
        !0 === this.morphNormals && (n.morphNormals = !0),
        !0 === this.skinning && (n.skinning = !0),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        i &&
          ((i = t(e.textures)),
          (e = t(e.images)),
          0 < i.length && (n.textures = i),
          0 < e.length && (n.images = e)),
        n
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      (this.name = e.name),
        (this.fog = e.fog),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.flatShading = e.flatShading),
        (this.vertexTangents = e.vertexTangents),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite);
      var t = e.clippingPlanes,
        i = null;
      if (null !== t) {
        var n = t.length;
        i = Array(n);
        for (var r = 0; r !== n; ++r) i[r] = t[r].clone();
      }
      return (
        (this.clippingPlanes = i),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  })),
    Object.defineProperty(T.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++;
      },
    }),
    (E.prototype = Object.create(T.prototype)),
    (E.prototype.constructor = E),
    (E.prototype.isMeshBasicMaterial = !0),
    (E.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        this
      );
    });
  var a4 = new r();
  Object.defineProperty(L.prototype, "needsUpdate", {
    set: function (e) {
      !0 === e && this.version++;
    },
  }),
    Object.assign(L.prototype, {
      isBufferAttribute: !0,
      onUploadCallback: function () {},
      setUsage: function (e) {
        return (this.usage = e), this;
      },
      copy: function (e) {
        return (
          (this.name = e.name),
          (this.array = new e.array.constructor(e.array)),
          (this.itemSize = e.itemSize),
          (this.count = e.count),
          (this.normalized = e.normalized),
          (this.usage = e.usage),
          this
        );
      },
      copyAt: function (e, t, i) {
        (e *= this.itemSize), (i *= t.itemSize);
        for (var n = 0, r = this.itemSize; n < r; n++)
          this.array[e + n] = t.array[i + n];
        return this;
      },
      copyArray: function (e) {
        return this.array.set(e), this;
      },
      copyColorsArray: function (e) {
        for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
          var a = e[n];
          void 0 === a &&
            (console.warn(
              "THREE.BufferAttribute.copyColorsArray(): color is undefined",
              n
            ),
            (a = new _())),
            (t[i++] = a.r),
            (t[i++] = a.g),
            (t[i++] = a.b);
        }
        return this;
      },
      copyVector2sArray: function (e) {
        for (var t = this.array, n = 0, r = 0, a = e.length; r < a; r++) {
          var o = e[r];
          void 0 === o &&
            (console.warn(
              "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
              r
            ),
            (o = new i())),
            (t[n++] = o.x),
            (t[n++] = o.y);
        }
        return this;
      },
      copyVector3sArray: function (e) {
        for (var t = this.array, i = 0, n = 0, a = e.length; n < a; n++) {
          var o = e[n];
          void 0 === o &&
            (console.warn(
              "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
              n
            ),
            (o = new r())),
            (t[i++] = o.x),
            (t[i++] = o.y),
            (t[i++] = o.z);
        }
        return this;
      },
      copyVector4sArray: function (e) {
        for (var t = this.array, i = 0, n = 0, r = e.length; n < r; n++) {
          var a = e[n];
          void 0 === a &&
            (console.warn(
              "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
              n
            ),
            (a = new s())),
            (t[i++] = a.x),
            (t[i++] = a.y),
            (t[i++] = a.z),
            (t[i++] = a.w);
        }
        return this;
      },
      applyMatrix3: function (e) {
        for (var t = 0, i = this.count; t < i; t++)
          (a4.x = this.getX(t)),
            (a4.y = this.getY(t)),
            (a4.z = this.getZ(t)),
            a4.applyMatrix3(e),
            this.setXYZ(t, a4.x, a4.y, a4.z);
        return this;
      },
      applyMatrix4: function (e) {
        for (var t = 0, i = this.count; t < i; t++)
          (a4.x = this.getX(t)),
            (a4.y = this.getY(t)),
            (a4.z = this.getZ(t)),
            a4.applyMatrix4(e),
            this.setXYZ(t, a4.x, a4.y, a4.z);
        return this;
      },
      applyNormalMatrix: function (e) {
        for (var t = 0, i = this.count; t < i; t++)
          (a4.x = this.getX(t)),
            (a4.y = this.getY(t)),
            (a4.z = this.getZ(t)),
            a4.applyNormalMatrix(e),
            this.setXYZ(t, a4.x, a4.y, a4.z);
        return this;
      },
      transformDirection: function (e) {
        for (var t = 0, i = this.count; t < i; t++)
          (a4.x = this.getX(t)),
            (a4.y = this.getY(t)),
            (a4.z = this.getZ(t)),
            a4.transformDirection(e),
            this.setXYZ(t, a4.x, a4.y, a4.z);
        return this;
      },
      set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this;
      },
      getX: function (e) {
        return this.array[e * this.itemSize];
      },
      setX: function (e, t) {
        return (this.array[e * this.itemSize] = t), this;
      },
      getY: function (e) {
        return this.array[e * this.itemSize + 1];
      },
      setY: function (e, t) {
        return (this.array[e * this.itemSize + 1] = t), this;
      },
      getZ: function (e) {
        return this.array[e * this.itemSize + 2];
      },
      setZ: function (e, t) {
        return (this.array[e * this.itemSize + 2] = t), this;
      },
      getW: function (e) {
        return this.array[e * this.itemSize + 3];
      },
      setW: function (e, t) {
        return (this.array[e * this.itemSize + 3] = t), this;
      },
      setXY: function (e, t, i) {
        return (
          (e *= this.itemSize),
          (this.array[e + 0] = t),
          (this.array[e + 1] = i),
          this
        );
      },
      setXYZ: function (e, t, i, n) {
        return (
          (e *= this.itemSize),
          (this.array[e + 0] = t),
          (this.array[e + 1] = i),
          (this.array[e + 2] = n),
          this
        );
      },
      setXYZW: function (e, t, i, n, r) {
        return (
          (e *= this.itemSize),
          (this.array[e + 0] = t),
          (this.array[e + 1] = i),
          (this.array[e + 2] = n),
          (this.array[e + 3] = r),
          this
        );
      },
      onUpload: function (e) {
        return (this.onUploadCallback = e), this;
      },
      clone: function () {
        return new this.constructor(this.array, this.itemSize).copy(this);
      },
      toJSON: function () {
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: Array.prototype.slice.call(this.array),
          normalized: this.normalized,
        };
      },
    }),
    (A.prototype = Object.create(L.prototype)),
    (A.prototype.constructor = A),
    (R.prototype = Object.create(L.prototype)),
    (R.prototype.constructor = R),
    (P.prototype = Object.create(L.prototype)),
    (P.prototype.constructor = P),
    (C.prototype = Object.create(L.prototype)),
    (C.prototype.constructor = C),
    (D.prototype = Object.create(L.prototype)),
    (D.prototype.constructor = D),
    (I.prototype = Object.create(L.prototype)),
    (I.prototype.constructor = I),
    (N.prototype = Object.create(L.prototype)),
    (N.prototype.constructor = N),
    (z.prototype = Object.create(L.prototype)),
    (z.prototype.constructor = z),
    (B.prototype = Object.create(L.prototype)),
    (B.prototype.constructor = B),
    Object.assign(U.prototype, {
      computeGroups: function (e) {
        var t = [],
          i = void 0;
        e = e.faces;
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (r.materialIndex !== i) {
            (i = r.materialIndex),
              void 0 !== a && ((a.count = 3 * n - a.start), t.push(a));
            var a = { start: 3 * n, materialIndex: i };
          }
        }
        void 0 !== a && ((a.count = 3 * n - a.start), t.push(a)),
          (this.groups = t);
      },
      fromGeometry: function (e) {
        var t = e.faces,
          n = e.vertices,
          r = e.faceVertexUvs,
          a = r[0] && 0 < r[0].length,
          o = r[1] && 0 < r[1].length,
          s = e.morphTargets,
          c = s.length;
        if (0 < c) {
          for (var l = [], h = 0; h < c; h++)
            l[h] = { name: s[h].name, data: [] };
          this.morphTargets.position = l;
        }
        var u = e.morphNormals,
          p = u.length;
        if (0 < p) {
          var d = [];
          for (h = 0; h < p; h++) d[h] = { name: u[h].name, data: [] };
          this.morphTargets.normal = d;
        }
        var f = e.skinIndices,
          m = e.skinWeights,
          g = f.length === n.length,
          v = m.length === n.length;
        for (
          0 < n.length &&
            0 === t.length &&
            console.error(
              "THREE.DirectGeometry: Faceless geometries are not supported."
            ),
            h = 0;
          h < t.length;
          h++
        ) {
          var $ = t[h];
          this.vertices.push(n[$.a], n[$.b], n[$.c]);
          var y = $.vertexNormals;
          for (
            3 === y.length
              ? this.normals.push(y[0], y[1], y[2])
              : ((y = $.normal), this.normals.push(y, y, y)),
              3 === (y = $.vertexColors).length
                ? this.colors.push(y[0], y[1], y[2])
                : ((y = $.color), this.colors.push(y, y, y)),
              !0 === a &&
                (void 0 !== (y = r[0][h])
                  ? this.uvs.push(y[0], y[1], y[2])
                  : (console.warn(
                      "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
                      h
                    ),
                    this.uvs.push(new i(), new i(), new i()))),
              !0 === o &&
                (void 0 !== (y = r[1][h])
                  ? this.uvs2.push(y[0], y[1], y[2])
                  : (console.warn(
                      "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
                      h
                    ),
                    this.uvs2.push(new i(), new i(), new i()))),
              y = 0;
            y < c;
            y++
          ) {
            var x = s[y].vertices;
            l[y].data.push(x[$.a], x[$.b], x[$.c]);
          }
          for (y = 0; y < p; y++)
            (x = u[y].vertexNormals[h]), d[y].data.push(x.a, x.b, x.c);
          g && this.skinIndices.push(f[$.a], f[$.b], f[$.c]),
            v && this.skinWeights.push(m[$.a], m[$.b], m[$.c]);
        }
        return (
          this.computeGroups(e),
          (this.verticesNeedUpdate = e.verticesNeedUpdate),
          (this.normalsNeedUpdate = e.normalsNeedUpdate),
          (this.colorsNeedUpdate = e.colorsNeedUpdate),
          (this.uvsNeedUpdate = e.uvsNeedUpdate),
          (this.groupsNeedUpdate = e.groupsNeedUpdate),
          null !== e.boundingSphere &&
            (this.boundingSphere = e.boundingSphere.clone()),
          null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
          this
        );
      },
    });
  var ak = 1,
    aW = new h(),
    a5 = new d(),
    a6 = new r(),
    a7 = new m(),
    aj = new m(),
    aq = new r();
  G.prototype = Object.assign(Object.create(t.prototype), {
    constructor: G,
    isBufferGeometry: !0,
    getIndex: function () {
      return this.index;
    },
    setIndex: function (e) {
      Array.isArray(e)
        ? (this.index = new (65535 < F(e) ? N : D)(e, 1))
        : (this.index = e);
    },
    getAttribute: function (e) {
      return this.attributes[e];
    },
    setAttribute: function (e, t) {
      return (this.attributes[e] = t), this;
    },
    deleteAttribute: function (e) {
      return delete this.attributes[e], this;
    },
    addGroup: function (e, t, i) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: void 0 !== i ? i : 0,
      });
    },
    clearGroups: function () {
      this.groups = [];
    },
    setDrawRange: function (e, t) {
      (this.drawRange.start = e), (this.drawRange.count = t);
    },
    applyMatrix: function (e) {
      var t = this.attributes.position;
      if (
        (void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0)),
        void 0 !== (t = this.attributes.normal))
      ) {
        var i = new a().getNormalMatrix(e);
        t.applyNormalMatrix(i), (t.needsUpdate = !0);
      }
      return (
        void 0 !== (t = this.attributes.tangent) &&
          (t.transformDirection(e), (t.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    },
    rotateX: function (e) {
      return aW.makeRotationX(e), this.applyMatrix(aW), this;
    },
    rotateY: function (e) {
      return aW.makeRotationY(e), this.applyMatrix(aW), this;
    },
    rotateZ: function (e) {
      return aW.makeRotationZ(e), this.applyMatrix(aW), this;
    },
    translate: function (e, t, i) {
      return aW.makeTranslation(e, t, i), this.applyMatrix(aW), this;
    },
    scale: function (e, t, i) {
      return aW.makeScale(e, t, i), this.applyMatrix(aW), this;
    },
    lookAt: function (e) {
      return a5.lookAt(e), a5.updateMatrix(), this.applyMatrix(a5.matrix), this;
    },
    center: function () {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(a6).negate(),
        this.translate(a6.x, a6.y, a6.z),
        this
      );
    },
    setFromObject: function (e) {
      var t = e.geometry;
      if (e.isPoints || e.isLine) {
        e = new z(3 * t.vertices.length, 3);
        var i = new z(3 * t.colors.length, 3);
        this.setAttribute("position", e.copyVector3sArray(t.vertices)),
          this.setAttribute("color", i.copyColorsArray(t.colors)),
          t.lineDistances &&
            t.lineDistances.length === t.vertices.length &&
            ((e = new z(t.lineDistances.length, 1)),
            this.setAttribute("lineDistance", e.copyArray(t.lineDistances))),
          null !== t.boundingSphere &&
            (this.boundingSphere = t.boundingSphere.clone()),
          null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone());
      } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
      return this;
    },
    setFromPoints: function (e) {
      for (var t = [], i = 0, n = e.length; i < n; i++) {
        var r = e[i];
        t.push(r.x, r.y, r.z || 0);
      }
      return this.setAttribute("position", new z(t, 3)), this;
    },
    updateFromObject: function (e) {
      var t = e.geometry;
      if (e.isMesh) {
        var i = t.__directGeometry;
        if (
          (!0 === t.elementsNeedUpdate &&
            ((i = void 0), (t.elementsNeedUpdate = !1)),
          void 0 === i)
        )
          return this.fromGeometry(t);
        (i.verticesNeedUpdate = t.verticesNeedUpdate),
          (i.normalsNeedUpdate = t.normalsNeedUpdate),
          (i.colorsNeedUpdate = t.colorsNeedUpdate),
          (i.uvsNeedUpdate = t.uvsNeedUpdate),
          (i.groupsNeedUpdate = t.groupsNeedUpdate),
          (t.verticesNeedUpdate = !1),
          (t.normalsNeedUpdate = !1),
          (t.colorsNeedUpdate = !1),
          (t.uvsNeedUpdate = !1),
          (t.groupsNeedUpdate = !1),
          (t = i);
      }
      return (
        !0 === t.verticesNeedUpdate &&
          (void 0 !== (i = this.attributes.position) &&
            (i.copyVector3sArray(t.vertices), (i.needsUpdate = !0)),
          (t.verticesNeedUpdate = !1)),
        !0 === t.normalsNeedUpdate &&
          (void 0 !== (i = this.attributes.normal) &&
            (i.copyVector3sArray(t.normals), (i.needsUpdate = !0)),
          (t.normalsNeedUpdate = !1)),
        !0 === t.colorsNeedUpdate &&
          (void 0 !== (i = this.attributes.color) &&
            (i.copyColorsArray(t.colors), (i.needsUpdate = !0)),
          (t.colorsNeedUpdate = !1)),
        t.uvsNeedUpdate &&
          (void 0 !== (i = this.attributes.uv) &&
            (i.copyVector2sArray(t.uvs), (i.needsUpdate = !0)),
          (t.uvsNeedUpdate = !1)),
        t.lineDistancesNeedUpdate &&
          (void 0 !== (i = this.attributes.lineDistance) &&
            (i.copyArray(t.lineDistances), (i.needsUpdate = !0)),
          (t.lineDistancesNeedUpdate = !1)),
        t.groupsNeedUpdate &&
          (t.computeGroups(e.geometry),
          (this.groups = t.groups),
          (t.groupsNeedUpdate = !1)),
        this
      );
    },
    fromGeometry: function (e) {
      return (
        (e.__directGeometry = new U().fromGeometry(e)),
        this.fromDirectGeometry(e.__directGeometry)
      );
    },
    fromDirectGeometry: function (e) {
      var t = new Float32Array(3 * e.vertices.length);
      for (var i in (this.setAttribute(
        "position",
        new L(t, 3).copyVector3sArray(e.vertices)
      ),
      0 < e.normals.length &&
        ((t = new Float32Array(3 * e.normals.length)),
        this.setAttribute("normal", new L(t, 3).copyVector3sArray(e.normals))),
      0 < e.colors.length &&
        ((t = new Float32Array(3 * e.colors.length)),
        this.setAttribute("color", new L(t, 3).copyColorsArray(e.colors))),
      0 < e.uvs.length &&
        ((t = new Float32Array(2 * e.uvs.length)),
        this.setAttribute("uv", new L(t, 2).copyVector2sArray(e.uvs))),
      0 < e.uvs2.length &&
        ((t = new Float32Array(2 * e.uvs2.length)),
        this.setAttribute("uv2", new L(t, 2).copyVector2sArray(e.uvs2))),
      (this.groups = e.groups),
      e.morphTargets)) {
        t = [];
        for (var n = e.morphTargets[i], r = 0, a = n.length; r < a; r++) {
          var o = n[r],
            s = new z(3 * o.data.length, 3);
          (s.name = o.name), t.push(s.copyVector3sArray(o.data));
        }
        this.morphAttributes[i] = t;
      }
      return (
        0 < e.skinIndices.length &&
          ((i = new z(4 * e.skinIndices.length, 4)),
          this.setAttribute("skinIndex", i.copyVector4sArray(e.skinIndices))),
        0 < e.skinWeights.length &&
          ((i = new z(4 * e.skinWeights.length, 4)),
          this.setAttribute("skinWeight", i.copyVector4sArray(e.skinWeights))),
        null !== e.boundingSphere &&
          (this.boundingSphere = e.boundingSphere.clone()),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        this
      );
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new m());
      var e = this.attributes.position,
        t = this.morphAttributes.position;
      if (void 0 !== e) {
        if ((this.boundingBox.setFromBufferAttribute(e), t)) {
          e = 0;
          for (var i = t.length; e < i; e++)
            a7.setFromBufferAttribute(t[e]),
              this.morphTargetsRelative
                ? (aq.addVectors(this.boundingBox.min, a7.min),
                  this.boundingBox.expandByPoint(aq),
                  aq.addVectors(this.boundingBox.max, a7.max),
                  this.boundingBox.expandByPoint(aq))
                : (this.boundingBox.expandByPoint(a7.min),
                  this.boundingBox.expandByPoint(a7.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new v());
      var e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e) {
        var i = this.boundingSphere.center;
        if ((a7.setFromBufferAttribute(e), t))
          for (var n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            aj.setFromBufferAttribute(a),
              this.morphTargetsRelative
                ? (aq.addVectors(a7.min, aj.min),
                  a7.expandByPoint(aq),
                  aq.addVectors(a7.max, aj.max),
                  a7.expandByPoint(aq))
                : (a7.expandByPoint(aj.min), a7.expandByPoint(aj.max));
          }
        a7.getCenter(i);
        var o = 0;
        for (n = 0, r = e.count; n < r; n++)
          aq.fromBufferAttribute(e, n),
            (o = Math.max(o, i.distanceToSquared(aq)));
        if (t)
          for (n = 0, r = t.length; n < r; n++) {
            a = t[n];
            for (
              var s = this.morphTargetsRelative, c = 0, l = a.count;
              c < l;
              c++
            )
              aq.fromBufferAttribute(a, c),
                s && (a6.fromBufferAttribute(e, c), aq.add(a6)),
                (o = Math.max(o, i.distanceToSquared(aq)));
          }
        (this.boundingSphere.radius = Math.sqrt(o)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    },
    computeFaceNormals: function () {},
    computeVertexNormals: function () {
      var e = this.index,
        t = this.attributes;
      if (t.position) {
        var i = t.position.array;
        if (void 0 === t.normal)
          this.setAttribute("normal", new L(new Float32Array(i.length), 3));
        else
          for (var n = t.normal.array, a = 0, o = n.length; a < o; a++)
            n[a] = 0;
        n = t.normal.array;
        var s = new r(),
          c = new r(),
          l = new r(),
          h = new r(),
          u = new r();
        if (e) {
          var p = e.array;
          for (a = 0, o = e.count; a < o; a += 3) {
            e = 3 * p[a + 0];
            var d = 3 * p[a + 1],
              f = 3 * p[a + 2];
            s.fromArray(i, e),
              c.fromArray(i, d),
              l.fromArray(i, f),
              h.subVectors(l, c),
              u.subVectors(s, c),
              h.cross(u),
              (n[e] += h.x),
              (n[e + 1] += h.y),
              (n[e + 2] += h.z),
              (n[d] += h.x),
              (n[d + 1] += h.y),
              (n[d + 2] += h.z),
              (n[f] += h.x),
              (n[f + 1] += h.y),
              (n[f + 2] += h.z);
          }
        } else
          for (a = 0, o = i.length; a < o; a += 9)
            s.fromArray(i, a),
              c.fromArray(i, a + 3),
              l.fromArray(i, a + 6),
              h.subVectors(l, c),
              u.subVectors(s, c),
              h.cross(u),
              (n[a] = h.x),
              (n[a + 1] = h.y),
              (n[a + 2] = h.z),
              (n[a + 3] = h.x),
              (n[a + 4] = h.y),
              (n[a + 5] = h.z),
              (n[a + 6] = h.x),
              (n[a + 7] = h.y),
              (n[a + 8] = h.z);
        this.normalizeNormals(), (t.normal.needsUpdate = !0);
      }
    },
    merge: function (e, t) {
      if (e && e.isBufferGeometry) {
        void 0 === t &&
          ((t = 0),
          console.warn(
            "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
          ));
        var i,
          n = this.attributes;
        for (i in n)
          if (void 0 !== e.attributes[i]) {
            var r = n[i].array,
              a = e.attributes[i],
              o = a.array,
              s = a.itemSize * t;
            a = Math.min(o.length, r.length - s);
            for (var c = 0; c < a; c++, s++) r[s] = o[c];
          }
        return this;
      }
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
    },
    normalizeNormals: function () {
      for (var e = this.attributes.normal, t = 0, i = e.count; t < i; t++)
        (aq.x = e.getX(t)),
          (aq.y = e.getY(t)),
          (aq.z = e.getZ(t)),
          aq.normalize(),
          e.setXYZ(t, aq.x, aq.y, aq.z);
    },
    toNonIndexed: function () {
      function e(e, t) {
        var i = e.array;
        e = e.itemSize;
        for (
          var n,
            r = new i.constructor(t.length * e),
            a = 0,
            o = 0,
            s = t.length;
          o < s;
          o++
        ) {
          n = t[o] * e;
          for (var c = 0; c < e; c++) r[a++] = i[n++];
        }
        return new L(r, e);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
          ),
          this
        );
      var t,
        i = new G(),
        n = this.index.array,
        r = this.attributes;
      for (t in r) {
        var a = r[t];
        (a = e(a, n)), i.setAttribute(t, a);
      }
      var o = this.morphAttributes;
      for (t in o) {
        var s = [],
          c = o[t];
        r = 0;
        for (var l = c.length; r < l; r++) s.push((a = e((a = c[r]), n)));
        i.morphAttributes[t] = s;
      }
      for (
        i.morphTargetsRelative = this.morphTargetsRelative,
          n = this.groups,
          r = 0,
          t = n.length;
        r < t;
        r++
      )
        (a = n[r]), i.addGroup(a.start, a.count, a.materialIndex);
      return i;
    },
    toJSON: function () {
      var e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type = this.type),
        "" !== this.name && (e.name = this.name),
        0 < Object.keys(this.userData).length && (e.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        var t = this.parameters;
        for (l in t) void 0 !== t[l] && (e[l] = t[l]);
        return e;
      }
      (e.data = { attributes: {} }),
        null !== (t = this.index) &&
          (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array),
          });
      var i = this.attributes;
      for (l in i) {
        var n = (t = i[l]).toJSON();
        "" !== t.name && (n.name = t.name), (e.data.attributes[l] = n);
      }
      i = {};
      var r = !1;
      for (l in this.morphAttributes) {
        for (
          var a = this.morphAttributes[l], o = [], s = 0, c = a.length;
          s < c;
          s++
        )
          (n = (t = a[s]).toJSON()),
            "" !== t.name && (n.name = t.name),
            o.push(n);
        0 < o.length && ((i[l] = o), (r = !0));
      }
      r &&
        ((e.data.morphAttributes = i),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      var l = this.groups;
      return (
        0 < l.length && (e.data.groups = JSON.parse(JSON.stringify(l))),
        null !== (l = this.boundingSphere) &&
          (e.data.boundingSphere = {
            center: l.center.toArray(),
            radius: l.radius,
          }),
        e
      );
    },
    clone: function () {
      return new G().copy(this);
    },
    copy: function (e) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingSphere = this.boundingBox = null),
        (this.name = e.name);
      var t,
        i = e.index;
      for (o in (null !== i && this.setIndex(i.clone()), (i = e.attributes)))
        this.setAttribute(o, i[o].clone());
      var n = e.morphAttributes;
      for (o in n) {
        var r = [],
          a = n[o];
        for (i = 0, t = a.length; i < t; i++) r.push(a[i].clone());
        this.morphAttributes[o] = r;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      var o = e.groups;
      for (i = 0, t = o.length; i < t; i++)
        (n = o[i]), this.addGroup(n.start, n.count, n.materialIndex);
      return (
        null !== (o = e.boundingBox) && (this.boundingBox = o.clone()),
        null !== (o = e.boundingSphere) && (this.boundingSphere = o.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        this
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  var aX = new h(),
    aY = new $(),
    aZ = new v(),
    aJ = new r(),
    aQ = new r(),
    aK = new r(),
    a9 = new r(),
    oe = new r(),
    ot = new r(),
    oi = new r(),
    on = new r(),
    or = new r(),
    oa = new i(),
    oo = new i(),
    os = new i(),
    oc = new r(),
    ol = new r();
  H.prototype = Object.assign(Object.create(d.prototype), {
    constructor: H,
    isMesh: !0,
    copy: function (e) {
      return (
        d.prototype.copy.call(this, e),
        void 0 !== e.morphTargetInfluences &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary
          )),
        this
      );
    },
    updateMorphTargets: function () {
      var e = this.geometry;
      if (e.isBufferGeometry) {
        var t = Object.keys((e = e.morphAttributes));
        if (0 < t.length) {
          var i = e[t[0]];
          if (void 0 !== i)
            for (
              this.morphTargetInfluences = [],
                this.morphTargetDictionary = {},
                e = 0,
                t = i.length;
              e < t;
              e++
            ) {
              var n = i[e].name || String(e);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = e);
            }
        }
      } else
        void 0 !== (e = e.morphTargets) &&
          0 < e.length &&
          console.error(
            "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    },
    raycast: function (e, t) {
      var n = this.geometry,
        r = this.material,
        a = this.matrixWorld;
      if (
        void 0 !== r &&
        (null === n.boundingSphere && n.computeBoundingSphere(),
        aZ.copy(n.boundingSphere),
        aZ.applyMatrix4(a),
        !1 !== e.ray.intersectsSphere(aZ) &&
          (aX.getInverse(a),
          aY.copy(e.ray).applyMatrix4(aX),
          null === n.boundingBox || !1 !== aY.intersectsBox(n.boundingBox)))
      ) {
        if (n.isBufferGeometry) {
          var o = n.index;
          a = n.attributes.position;
          var s,
            c,
            l = n.morphAttributes.position,
            h = n.morphTargetsRelative,
            u = n.attributes.uv,
            p = n.attributes.uv2,
            d = n.groups,
            f = n.drawRange;
          if (null !== o) {
            if (Array.isArray(r)) {
              var m = 0;
              for (s = d.length; m < s; m++) {
                var g = d[m],
                  v = r[g.materialIndex],
                  $ = Math.max(g.start, f.start);
                for (
                  c = n = Math.min(g.start + g.count, f.start + f.count);
                  $ < c;
                  $ += 3
                ) {
                  n = o.getX($);
                  var y = o.getX($ + 1),
                    _ = o.getX($ + 2);
                  (n = V(this, v, e, aY, a, l, h, u, p, n, y, _)) &&
                    ((n.faceIndex = Math.floor($ / 3)),
                    (n.face.materialIndex = g.materialIndex),
                    t.push(n));
                }
              }
            } else
              for (
                $ = Math.max(0, f.start),
                  n = Math.min(o.count, f.start + f.count),
                  m = $,
                  s = n;
                m < s;
                m += 3
              )
                (n = o.getX(m)),
                  (n = V(
                    this,
                    r,
                    e,
                    aY,
                    a,
                    l,
                    h,
                    u,
                    p,
                    n,
                    (y = o.getX(m + 1)),
                    (_ = o.getX(m + 2))
                  )) && ((n.faceIndex = Math.floor(m / 3)), t.push(n));
          } else if (void 0 !== a) {
            if (Array.isArray(r))
              for (m = 0, s = d.length; m < s; m++)
                for (
                  v = r[(g = d[m]).materialIndex],
                    $ = Math.max(g.start, f.start),
                    c = n = Math.min(g.start + g.count, f.start + f.count);
                  $ < c;
                  $ += 3
                )
                  (n = $),
                    (n = V(
                      this,
                      v,
                      e,
                      aY,
                      a,
                      l,
                      h,
                      u,
                      p,
                      n,
                      (y = $ + 1),
                      (_ = $ + 2)
                    )) &&
                      ((n.faceIndex = Math.floor($ / 3)),
                      (n.face.materialIndex = g.materialIndex),
                      t.push(n));
            else
              for (
                $ = Math.max(0, f.start),
                  n = Math.min(a.count, f.start + f.count),
                  m = $,
                  s = n;
                m < s;
                m += 3
              )
                (n = m),
                  (n = V(
                    this,
                    r,
                    e,
                    aY,
                    a,
                    l,
                    h,
                    u,
                    p,
                    n,
                    (y = m + 1),
                    (_ = m + 2)
                  )) && ((n.faceIndex = Math.floor(m / 3)), t.push(n));
          }
        } else if (n.isGeometry)
          for (
            a = Array.isArray(r),
              l = n.vertices,
              h = n.faces,
              0 < (n = n.faceVertexUvs[0]).length && (o = n),
              f = 0,
              m = h.length;
            f < m;
            f++
          )
            (s = h[f]),
              void 0 !== (n = a ? r[s.materialIndex] : r) &&
                ((u = l[s.a]),
                (n = O(this, n, e, aY, u, (p = l[s.b]), (d = l[s.c]), oc))) &&
                (o &&
                  o[f] &&
                  ((g = o[f]),
                  oa.copy(g[0]),
                  oo.copy(g[1]),
                  os.copy(g[2]),
                  (n.uv = x.getUV(oc, u, p, d, oa, oo, os, new i()))),
                (n.face = s),
                (n.faceIndex = f),
                t.push(n));
      }
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    },
  });
  var oh = 0,
    ou = new h(),
    op = new d(),
    od = new r();
  k.prototype = Object.assign(Object.create(t.prototype), {
    constructor: k,
    isGeometry: !0,
    applyMatrix: function (e) {
      for (
        var t = new a().getNormalMatrix(e), i = 0, n = this.vertices.length;
        i < n;
        i++
      )
        this.vertices[i].applyMatrix4(e);
      for (i = 0, n = this.faces.length; i < n; i++) {
        (e = this.faces[i]).normal.applyMatrix3(t).normalize();
        for (var r = 0, o = e.vertexNormals.length; r < o; r++)
          e.vertexNormals[r].applyMatrix3(t).normalize();
      }
      return (
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        (this.normalsNeedUpdate = this.verticesNeedUpdate = !0),
        this
      );
    },
    rotateX: function (e) {
      return ou.makeRotationX(e), this.applyMatrix(ou), this;
    },
    rotateY: function (e) {
      return ou.makeRotationY(e), this.applyMatrix(ou), this;
    },
    rotateZ: function (e) {
      return ou.makeRotationZ(e), this.applyMatrix(ou), this;
    },
    translate: function (e, t, i) {
      return ou.makeTranslation(e, t, i), this.applyMatrix(ou), this;
    },
    scale: function (e, t, i) {
      return ou.makeScale(e, t, i), this.applyMatrix(ou), this;
    },
    lookAt: function (e) {
      return op.lookAt(e), op.updateMatrix(), this.applyMatrix(op.matrix), this;
    },
    fromBufferGeometry: function (e) {
      function t(e, t, a, o) {
        var s =
            void 0 === l
              ? []
              : [n.colors[e].clone(), n.colors[t].clone(), n.colors[a].clone()],
          p =
            void 0 === c
              ? []
              : [
                  new r().fromArray(c, 3 * e),
                  new r().fromArray(c, 3 * t),
                  new r().fromArray(c, 3 * a),
                ];
        (o = new S(e, t, a, p, s, o)),
          n.faces.push(o),
          void 0 !== h &&
            n.faceVertexUvs[0].push([
              new i().fromArray(h, 2 * e),
              new i().fromArray(h, 2 * t),
              new i().fromArray(h, 2 * a),
            ]),
          void 0 !== u &&
            n.faceVertexUvs[1].push([
              new i().fromArray(u, 2 * e),
              new i().fromArray(u, 2 * t),
              new i().fromArray(u, 2 * a),
            ]);
      }
      var n = this,
        a = null !== e.index ? e.index.array : void 0,
        o = e.attributes;
      if (void 0 === o.position)
        return (
          console.error(
            "THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."
          ),
          this
        );
      var s = o.position.array,
        c = void 0 !== o.normal ? o.normal.array : void 0,
        l = void 0 !== o.color ? o.color.array : void 0,
        h = void 0 !== o.uv ? o.uv.array : void 0,
        u = void 0 !== o.uv2 ? o.uv2.array : void 0;
      for (
        void 0 !== u && (this.faceVertexUvs[1] = []), o = 0;
        o < s.length;
        o += 3
      )
        n.vertices.push(new r().fromArray(s, o)),
          void 0 !== l && n.colors.push(new _().fromArray(l, o));
      var p = e.groups;
      if (0 < p.length)
        for (o = 0; o < p.length; o++) {
          var d = (s = p[o]).start,
            f = d;
          for (d += s.count; f < d; f += 3)
            void 0 !== a
              ? t(a[f], a[f + 1], a[f + 2], s.materialIndex)
              : t(f, f + 1, f + 2, s.materialIndex);
        }
      else if (void 0 !== a)
        for (o = 0; o < a.length; o += 3) t(a[o], a[o + 1], a[o + 2]);
      else for (o = 0; o < s.length / 3; o += 3) t(o, o + 1, o + 2);
      return (
        this.computeFaceNormals(),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        null !== e.boundingSphere &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    },
    center: function () {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(od).negate(),
        this.translate(od.x, od.y, od.z),
        this
      );
    },
    normalize: function () {
      this.computeBoundingSphere();
      var e = this.boundingSphere.center,
        t = this.boundingSphere.radius;
      t = 0 === t ? 1 : 1 / t;
      var i = new h();
      return (
        i.set(
          t,
          0,
          0,
          -t * e.x,
          0,
          t,
          0,
          -t * e.y,
          0,
          0,
          t,
          -t * e.z,
          0,
          0,
          0,
          1
        ),
        this.applyMatrix(i),
        this
      );
    },
    computeFaceNormals: function () {
      for (
        var e = new r(), t = new r(), i = 0, n = this.faces.length;
        i < n;
        i++
      ) {
        var a = this.faces[i],
          o = this.vertices[a.a],
          s = this.vertices[a.b];
        e.subVectors(this.vertices[a.c], s),
          t.subVectors(o, s),
          e.cross(t),
          e.normalize(),
          a.normal.copy(e);
      }
    },
    computeVertexNormals: function (e) {
      void 0 === e && (e = !0);
      var t,
        i = Array(this.vertices.length),
        n = 0;
      for (t = this.vertices.length; n < t; n++) i[n] = new r();
      if (e) {
        var a = new r(),
          o = new r();
        for (e = 0, n = this.faces.length; e < n; e++) {
          t = this.faces[e];
          var s = this.vertices[t.a],
            c = this.vertices[t.b],
            l = this.vertices[t.c];
          a.subVectors(l, c),
            o.subVectors(s, c),
            a.cross(o),
            i[t.a].add(a),
            i[t.b].add(a),
            i[t.c].add(a);
        }
      } else
        for (
          this.computeFaceNormals(), e = 0, n = this.faces.length;
          e < n;
          e++
        )
          i[(t = this.faces[e]).a].add(t.normal),
            i[t.b].add(t.normal),
            i[t.c].add(t.normal);
      for (n = 0, t = this.vertices.length; n < t; n++) i[n].normalize();
      for (e = 0, n = this.faces.length; e < n; e++)
        3 === (s = (t = this.faces[e]).vertexNormals).length
          ? (s[0].copy(i[t.a]), s[1].copy(i[t.b]), s[2].copy(i[t.c]))
          : ((s[0] = i[t.a].clone()),
            (s[1] = i[t.b].clone()),
            (s[2] = i[t.c].clone()));
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function () {
      this.computeFaceNormals();
      var e,
        t = 0;
      for (e = this.faces.length; t < e; t++) {
        var i = this.faces[t],
          n = i.vertexNormals;
        3 === n.length
          ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal))
          : ((n[0] = i.normal.clone()),
            (n[1] = i.normal.clone()),
            (n[2] = i.normal.clone()));
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function () {
      var e,
        t,
        i = 0;
      for (t = this.faces.length; i < t; i++) {
        var n = this.faces[i];
        n.__originalFaceNormal
          ? n.__originalFaceNormal.copy(n.normal)
          : (n.__originalFaceNormal = n.normal.clone()),
          n.__originalVertexNormals || (n.__originalVertexNormals = []);
        var a = 0;
        for (e = n.vertexNormals.length; a < e; a++)
          n.__originalVertexNormals[a]
            ? n.__originalVertexNormals[a].copy(n.vertexNormals[a])
            : (n.__originalVertexNormals[a] = n.vertexNormals[a].clone());
      }
      var o = new k();
      for (
        o.faces = this.faces, a = 0, e = this.morphTargets.length;
        a < e;
        a++
      ) {
        if (!this.morphNormals[a]) {
          (this.morphNormals[a] = {}),
            (this.morphNormals[a].faceNormals = []),
            (this.morphNormals[a].vertexNormals = []),
            (n = this.morphNormals[a].faceNormals);
          var s = this.morphNormals[a].vertexNormals;
          for (i = 0, t = this.faces.length; i < t; i++) {
            var c = new r(),
              l = { a: new r(), b: new r(), c: new r() };
            n.push(c), s.push(l);
          }
        }
        for (
          s = this.morphNormals[a],
            o.vertices = this.morphTargets[a].vertices,
            o.computeFaceNormals(),
            o.computeVertexNormals(),
            i = 0,
            t = this.faces.length;
          i < t;
          i++
        )
          (n = this.faces[i]),
            (c = s.faceNormals[i]),
            (l = s.vertexNormals[i]),
            c.copy(n.normal),
            l.a.copy(n.vertexNormals[0]),
            l.b.copy(n.vertexNormals[1]),
            l.c.copy(n.vertexNormals[2]);
      }
      for (i = 0, t = this.faces.length; i < t; i++)
        ((n = this.faces[i]).normal = n.__originalFaceNormal),
          (n.vertexNormals = n.__originalVertexNormals);
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new m()),
        this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new v()),
        this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function (e, t, i) {
      if (e && e.isGeometry) {
        var n,
          r = this.vertices.length,
          o = this.vertices,
          s = e.vertices,
          c = this.faces,
          l = e.faces,
          h = this.colors,
          u = e.colors;
        void 0 === i && (i = 0),
          void 0 !== t && (n = new a().getNormalMatrix(t));
        for (var p = 0, d = s.length; p < d; p++) {
          var f = s[p].clone();
          void 0 !== t && f.applyMatrix4(t), o.push(f);
        }
        for (p = 0, d = u.length; p < d; p++) h.push(u[p].clone());
        for (p = 0, d = l.length; p < d; p++) {
          var m = (s = l[p]).vertexNormals;
          for (
            u = s.vertexColors,
              (h = new S(s.a + r, s.b + r, s.c + r)).normal.copy(s.normal),
              void 0 !== n && h.normal.applyMatrix3(n).normalize(),
              t = 0,
              o = m.length;
            t < o;
            t++
          )
            (f = m[t].clone()),
              void 0 !== n && f.applyMatrix3(n).normalize(),
              h.vertexNormals.push(f);
          for (h.color.copy(s.color), t = 0, o = u.length; t < o; t++)
            (f = u[t]), h.vertexColors.push(f.clone());
          (h.materialIndex = s.materialIndex + i), c.push(h);
        }
        for (p = 0, d = e.faceVertexUvs.length; p < d; p++)
          for (
            i = e.faceVertexUvs[p],
              void 0 === this.faceVertexUvs[p] && (this.faceVertexUvs[p] = []),
              t = 0,
              o = i.length;
            t < o;
            t++
          ) {
            for (n = i[t], r = [], c = 0, l = n.length; c < l; c++)
              r.push(n[c].clone());
            this.faceVertexUvs[p].push(r);
          }
      } else
        console.error(
          "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
          e
        );
    },
    mergeMesh: function (e) {
      e && e.isMesh
        ? (e.matrixAutoUpdate && e.updateMatrix(),
          this.merge(e.geometry, e.matrix))
        : console.error(
            "THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
            e
          );
    },
    mergeVertices: function () {
      var e,
        t = {},
        i = [],
        n = [],
        r = 1e4,
        a = 0;
      for (e = this.vertices.length; a < e; a++) {
        var o = this.vertices[a];
        void 0 ===
        t[
          (o =
            Math.round(o.x * r) +
            "_" +
            Math.round(o.y * r) +
            "_" +
            Math.round(o.z * r))
        ]
          ? ((t[o] = a), i.push(this.vertices[a]), (n[a] = i.length - 1))
          : (n[a] = n[t[o]]);
      }
      for (t = [], a = 0, e = this.faces.length; a < e; a++)
        for (
          (r = this.faces[a]).a = n[r.a],
            r.b = n[r.b],
            r.c = n[r.c],
            r = [r.a, r.b, r.c],
            o = 0;
          3 > o;
          o++
        )
          if (r[o] === r[(o + 1) % 3]) {
            t.push(a);
            break;
          }
      for (a = t.length - 1; 0 <= a; a--)
        for (
          r = t[a],
            this.faces.splice(r, 1),
            n = 0,
            e = this.faceVertexUvs.length;
          n < e;
          n++
        )
          this.faceVertexUvs[n].splice(r, 1);
      return (a = this.vertices.length - i.length), (this.vertices = i), a;
    },
    setFromPoints: function (e) {
      this.vertices = [];
      for (var t = 0, i = e.length; t < i; t++) {
        var n = e[t];
        this.vertices.push(new r(n.x, n.y, n.z || 0));
      }
      return this;
    },
    sortFacesByMaterialIndex: function () {
      for (var e = this.faces, t = e.length, i = 0; i < t; i++) e[i]._id = i;
      e.sort(function (e, t) {
        return e.materialIndex - t.materialIndex;
      });
      var n,
        r,
        a = this.faceVertexUvs[0],
        o = this.faceVertexUvs[1];
      for (
        a && a.length === t && (n = []), o && o.length === t && (r = []), i = 0;
        i < t;
        i++
      ) {
        var s = e[i]._id;
        n && n.push(a[s]), r && r.push(o[s]);
      }
      n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r);
    },
    toJSON: function () {
      function e(e, t, i) {
        return i ? e | (1 << t) : e & ~(1 << t);
      }
      function t(e) {
        var t = e.x.toString() + e.y.toString() + e.z.toString();
        return (
          void 0 !== l[t] || ((l[t] = c.length / 3), c.push(e.x, e.y, e.z)),
          l[t]
        );
      }
      function i(e) {
        var t = e.r.toString() + e.g.toString() + e.b.toString();
        return void 0 !== u[t] || ((u[t] = h.length), h.push(e.getHex())), u[t];
      }
      function n(e) {
        var t = e.x.toString() + e.y.toString();
        return (
          void 0 !== d[t] || ((d[t] = p.length / 2), p.push(e.x, e.y)), d[t]
        );
      }
      var r = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON",
        },
      };
      if (
        ((r.uuid = this.uuid),
        (r.type = this.type),
        "" !== this.name && (r.name = this.name),
        void 0 !== this.parameters)
      ) {
        var a,
          o = this.parameters;
        for (a in o) void 0 !== o[a] && (r[a] = o[a]);
        return r;
      }
      for (a = 0, o = []; a < this.vertices.length; a++) {
        var s = this.vertices[a];
        o.push(s.x, s.y, s.z);
      }
      s = [];
      var c = [],
        l = {},
        h = [],
        u = {},
        p = [],
        d = {};
      for (a = 0; a < this.faces.length; a++) {
        var f = this.faces[a],
          m = void 0 !== this.faceVertexUvs[0][a],
          g = 0 < f.normal.length(),
          v = 0 < f.vertexNormals.length,
          $ = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
          y = 0 < f.vertexColors.length,
          x = 0;
        (x = e(x, 0, 0)),
          (x = e(x, 1, !0)),
          (x = e(x, 2, !1)),
          (x = e(x, 3, m)),
          (x = e(x, 4, g)),
          (x = e(x, 5, v)),
          (x = e(x, 6, $)),
          (x = e(x, 7, y)),
          s.push(x),
          s.push(f.a, f.b, f.c),
          s.push(f.materialIndex),
          m &&
            ((m = this.faceVertexUvs[0][a]), s.push(n(m[0]), n(m[1]), n(m[2]))),
          g && s.push(t(f.normal)),
          v && ((g = f.vertexNormals), s.push(t(g[0]), t(g[1]), t(g[2]))),
          $ && s.push(i(f.color)),
          y && ((f = f.vertexColors), s.push(i(f[0]), i(f[1]), i(f[2])));
      }
      return (
        (r.data = {}),
        (r.data.vertices = o),
        (r.data.normals = c),
        0 < h.length && (r.data.colors = h),
        0 < p.length && (r.data.uvs = [p]),
        (r.data.faces = s),
        r
      );
    },
    clone: function () {
      return new k().copy(this);
    },
    copy: function (e) {
      (this.vertices = []),
        (this.colors = []),
        (this.faces = []),
        (this.faceVertexUvs = [[]]),
        (this.morphTargets = []),
        (this.morphNormals = []),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.lineDistances = []),
        (this.boundingSphere = this.boundingBox = null),
        (this.name = e.name);
      var t,
        i,
        n,
        r = e.vertices,
        a = 0;
      for (t = r.length; a < t; a++) this.vertices.push(r[a].clone());
      for (r = e.colors, a = 0, t = r.length; a < t; a++)
        this.colors.push(r[a].clone());
      for (r = e.faces, a = 0, t = r.length; a < t; a++)
        this.faces.push(r[a].clone());
      for (a = 0, t = e.faceVertexUvs.length; a < t; a++) {
        var o = e.faceVertexUvs[a];
        for (
          void 0 === this.faceVertexUvs[a] && (this.faceVertexUvs[a] = []),
            r = 0,
            i = o.length;
          r < i;
          r++
        ) {
          var s = o[r],
            c = [],
            l = 0;
          for (n = s.length; l < n; l++) c.push(s[l].clone());
          this.faceVertexUvs[a].push(c);
        }
      }
      for (l = e.morphTargets, a = 0, t = l.length; a < t; a++) {
        if ((((n = {}).name = l[a].name), void 0 !== l[a].vertices))
          for (n.vertices = [], r = 0, i = l[a].vertices.length; r < i; r++)
            n.vertices.push(l[a].vertices[r].clone());
        if (void 0 !== l[a].normals)
          for (n.normals = [], r = 0, i = l[a].normals.length; r < i; r++)
            n.normals.push(l[a].normals[r].clone());
        this.morphTargets.push(n);
      }
      for (l = e.morphNormals, a = 0, t = l.length; a < t; a++) {
        if (((n = {}), void 0 !== l[a].vertexNormals))
          for (
            n.vertexNormals = [], r = 0, i = l[a].vertexNormals.length;
            r < i;
            r++
          )
            (o = l[a].vertexNormals[r]),
              ((s = {}).a = o.a.clone()),
              (s.b = o.b.clone()),
              (s.c = o.c.clone()),
              n.vertexNormals.push(s);
        if (void 0 !== l[a].faceNormals)
          for (
            n.faceNormals = [], r = 0, i = l[a].faceNormals.length;
            r < i;
            r++
          )
            n.faceNormals.push(l[a].faceNormals[r].clone());
        this.morphNormals.push(n);
      }
      for (r = e.skinWeights, a = 0, t = r.length; a < t; a++)
        this.skinWeights.push(r[a].clone());
      for (r = e.skinIndices, a = 0, t = r.length; a < t; a++)
        this.skinIndices.push(r[a].clone());
      for (r = e.lineDistances, a = 0, t = r.length; a < t; a++)
        this.lineDistances.push(r[a]);
      return (
        null !== (a = e.boundingBox) && (this.boundingBox = a.clone()),
        null !== (a = e.boundingSphere) && (this.boundingSphere = a.clone()),
        (this.elementsNeedUpdate = e.elementsNeedUpdate),
        (this.verticesNeedUpdate = e.verticesNeedUpdate),
        (this.uvsNeedUpdate = e.uvsNeedUpdate),
        (this.normalsNeedUpdate = e.normalsNeedUpdate),
        (this.colorsNeedUpdate = e.colorsNeedUpdate),
        (this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate),
        (this.groupsNeedUpdate = e.groupsNeedUpdate),
        this
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  var of = (function (e) {
      function t(t, i, n, r, a, o) {
        e.call(this),
          (this.type = "BoxGeometry"),
          (this.parameters = {
            width: t,
            height: i,
            depth: n,
            widthSegments: r,
            heightSegments: a,
            depthSegments: o,
          }),
          this.fromBufferGeometry(new om(t, i, n, r, a, o)),
          this.mergeVertices();
      }
      return (
        e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t)
      );
    })(k),
    om = (function (e) {
      function t(t, i, n, a, o, s) {
        function c(e, t, i, n, a, o, s, c, g, v, $) {
          var y = o / g,
            x = s / v,
            _ = o / 2,
            w = s / 2,
            b = c / 2;
          s = g + 1;
          var M,
            S,
            T = v + 1,
            E = (o = 0),
            L = new r();
          for (S = 0; S < T; S++) {
            var A = S * x - w;
            for (M = 0; M < s; M++)
              (L[e] = (M * y - _) * n),
                (L[t] = A * a),
                (L[i] = b),
                u.push(L.x, L.y, L.z),
                (L[e] = 0),
                (L[t] = 0),
                (L[i] = 0 < c ? 1 : -1),
                p.push(L.x, L.y, L.z),
                d.push(M / g),
                d.push(1 - S / v),
                (o += 1);
          }
          for (S = 0; S < v; S++)
            for (M = 0; M < g; M++)
              (e = f + M + s * (S + 1)),
                (t = f + (M + 1) + s * (S + 1)),
                (i = f + (M + 1) + s * S),
                h.push(f + M + s * S, e, i),
                h.push(e, t, i),
                (E += 6);
          l.addGroup(m, E, $), (m += E), (f += o);
        }
        e.call(this),
          (this.type = "BoxBufferGeometry"),
          (this.parameters = {
            width: t,
            height: i,
            depth: n,
            widthSegments: a,
            heightSegments: o,
            depthSegments: s,
          });
        var l = this;
        (t = t || 1),
          (i = i || 1),
          (n = n || 1),
          (a = Math.floor(a) || 1),
          (o = Math.floor(o) || 1);
        var h = [],
          u = [],
          p = [],
          d = [],
          f = 0,
          m = 0;
        c("z", "y", "x", -1, -1, n, i, t, (s = Math.floor(s) || 1), o, 0),
          c("z", "y", "x", 1, -1, n, i, -t, s, o, 1),
          c("x", "z", "y", 1, 1, t, n, i, a, s, 2),
          c("x", "z", "y", 1, -1, t, n, -i, a, s, 3),
          c("x", "y", "z", 1, -1, t, i, n, a, o, 4),
          c("x", "y", "z", -1, -1, t, i, -n, a, o, 5),
          this.setIndex(h),
          this.setAttribute("position", new z(u, 3)),
          this.setAttribute("normal", new z(p, 3)),
          this.setAttribute("uv", new z(d, 2));
      }
      return (
        e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t)
      );
    })(G);
  (q.prototype = Object.create(T.prototype)),
    (q.prototype.constructor = q),
    (q.prototype.isShaderMaterial = !0),
    (q.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = W(e.uniforms)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        (this.extensions = e.extensions),
        this
      );
    }),
    (q.prototype.toJSON = function (e) {
      var t = T.prototype.toJSON.call(this, e);
      for (var i in ((t.uniforms = {}), this.uniforms)) {
        var n = this.uniforms[i].value;
        t.uniforms[i] =
          n && n.isTexture
            ? { type: "t", value: n.toJSON(e).uuid }
            : n && n.isColor
            ? { type: "c", value: n.getHex() }
            : n && n.isVector2
            ? { type: "v2", value: n.toArray() }
            : n && n.isVector3
            ? { type: "v3", value: n.toArray() }
            : n && n.isVector4
            ? { type: "v4", value: n.toArray() }
            : n && n.isMatrix3
            ? { type: "m3", value: n.toArray() }
            : n && n.isMatrix4
            ? { type: "m4", value: n.toArray() }
            : { value: n };
      }
      for (var r in (0 < Object.keys(this.defines).length &&
        (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (e = {}),
      this.extensions))
        !0 === this.extensions[r] && (e[r] = !0);
      return 0 < Object.keys(e).length && (t.extensions = e), t;
    }),
    (X.prototype = Object.assign(Object.create(d.prototype), {
      constructor: X,
      isCamera: !0,
      copy: function (e, t) {
        return (
          d.prototype.copy.call(this, e, t),
          this.matrixWorldInverse.copy(e.matrixWorldInverse),
          this.projectionMatrix.copy(e.projectionMatrix),
          this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
          this
        );
      },
      getWorldDirection: function (e) {
        void 0 === e &&
          (console.warn(
            "THREE.Camera: .getWorldDirection() target is now required"
          ),
          (e = new r())),
          this.updateMatrixWorld(!0);
        var t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize();
      },
      updateMatrixWorld: function (e) {
        d.prototype.updateMatrixWorld.call(this, e),
          this.matrixWorldInverse.getInverse(this.matrixWorld);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
    })),
    (Y.prototype = Object.assign(Object.create(X.prototype), {
      constructor: Y,
      isPerspectiveCamera: !0,
      copy: function (e, t) {
        return (
          X.prototype.copy.call(this, e, t),
          (this.fov = e.fov),
          (this.zoom = e.zoom),
          (this.near = e.near),
          (this.far = e.far),
          (this.focus = e.focus),
          (this.aspect = e.aspect),
          (this.view = null === e.view ? null : Object.assign({}, e.view)),
          (this.filmGauge = e.filmGauge),
          (this.filmOffset = e.filmOffset),
          this
        );
      },
      setFocalLength: function (e) {
        (e = (0.5 * this.getFilmHeight()) / e),
          (this.fov = 2 * rH.RAD2DEG * Math.atan(e)),
          this.updateProjectionMatrix();
      },
      getFocalLength: function () {
        var e = Math.tan(0.5 * rH.DEG2RAD * this.fov);
        return (0.5 * this.getFilmHeight()) / e;
      },
      getEffectiveFOV: function () {
        return (
          2 *
          rH.RAD2DEG *
          Math.atan(Math.tan(0.5 * rH.DEG2RAD * this.fov) / this.zoom)
        );
      },
      getFilmWidth: function () {
        return this.filmGauge * Math.min(this.aspect, 1);
      },
      getFilmHeight: function () {
        return this.filmGauge / Math.max(this.aspect, 1);
      },
      setViewOffset: function (e, t, i, n, r, a) {
        (this.aspect = e / t),
          null === this.view &&
            (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1,
            }),
          (this.view.enabled = !0),
          (this.view.fullWidth = e),
          (this.view.fullHeight = t),
          (this.view.offsetX = i),
          (this.view.offsetY = n),
          (this.view.width = r),
          (this.view.height = a),
          this.updateProjectionMatrix();
      },
      clearViewOffset: function () {
        null !== this.view && (this.view.enabled = !1),
          this.updateProjectionMatrix();
      },
      updateProjectionMatrix: function () {
        var e = this.near,
          t = (e * Math.tan(0.5 * rH.DEG2RAD * this.fov)) / this.zoom,
          i = 2 * t,
          n = this.aspect * i,
          r = -0.5 * n,
          a = this.view;
        if (null !== this.view && this.view.enabled) {
          var o = a.fullWidth,
            s = a.fullHeight;
          (r += (a.offsetX * n) / o),
            (t -= (a.offsetY * i) / s),
            (n *= a.width / o),
            (i *= a.height / s);
        }
        0 !== (a = this.filmOffset) && (r += (e * a) / this.getFilmWidth()),
          this.projectionMatrix.makePerspective(
            r,
            r + n,
            t,
            t - i,
            e,
            this.far
          ),
          this.projectionMatrixInverse.getInverse(this.projectionMatrix);
      },
      toJSON: function (e) {
        return (
          ((e = d.prototype.toJSON.call(this, e)).object.fov = this.fov),
          (e.object.zoom = this.zoom),
          (e.object.near = this.near),
          (e.object.far = this.far),
          (e.object.focus = this.focus),
          (e.object.aspect = this.aspect),
          null !== this.view && (e.object.view = Object.assign({}, this.view)),
          (e.object.filmGauge = this.filmGauge),
          (e.object.filmOffset = this.filmOffset),
          e
        );
      },
    })),
    (Z.prototype = Object.create(d.prototype)),
    (Z.prototype.constructor = Z),
    (J.prototype = Object.create(c.prototype)),
    (J.prototype.constructor = J),
    (J.prototype.isWebGLRenderTargetCube = !0),
    (J.prototype.fromEquirectangularTexture = function (e, t) {
      (this.texture.type = t.type),
        (this.texture.format = t.format),
        (this.texture.encoding = t.encoding);
      var i = new f(),
        n = new q({
          type: "CubemapFromEquirect",
          uniforms: W({ tEquirect: { value: null } }),
          vertexShader:
            "varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
          fragmentShader:
            "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV;\n	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}",
          side: 1,
          blending: 0,
        });
      return (
        (n.uniforms.tEquirect.value = t),
        (t = new H(new om(5, 5, 5), n)),
        i.add(t),
        ((n = new Z(1, 10, 1)).renderTarget = this),
        (n.renderTarget.texture.name = "CubeCameraTexture"),
        n.update(e, i),
        t.geometry.dispose(),
        t.material.dispose(),
        this
      );
    }),
    (Q.prototype = Object.create(o.prototype)),
    (Q.prototype.constructor = Q),
    (Q.prototype.isDataTexture = !0);
  var og = new v(),
    ov = new r();
  Object.assign(K.prototype, {
    set: function (e, t, i, n, r, a) {
      var o = this.planes;
      return (
        o[0].copy(e),
        o[1].copy(t),
        o[2].copy(i),
        o[3].copy(n),
        o[4].copy(r),
        o[5].copy(a),
        this
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      for (var t = this.planes, i = 0; 6 > i; i++) t[i].copy(e.planes[i]);
      return this;
    },
    setFromMatrix: function (e) {
      var t = this.planes,
        i = e.elements;
      e = i[0];
      var n = i[1],
        r = i[2],
        a = i[3],
        o = i[4],
        s = i[5],
        c = i[6],
        l = i[7],
        h = i[8],
        u = i[9],
        p = i[10],
        d = i[11],
        f = i[12],
        m = i[13],
        g = i[14];
      return (
        (i = i[15]),
        t[0].setComponents(a - e, l - o, d - h, i - f).normalize(),
        t[1].setComponents(a + e, l + o, d + h, i + f).normalize(),
        t[2].setComponents(a + n, l + s, d + u, i + m).normalize(),
        t[3].setComponents(a - n, l - s, d - u, i - m).normalize(),
        t[4].setComponents(a - r, l - c, d - p, i - g).normalize(),
        t[5].setComponents(a + r, l + c, d + p, i + g).normalize(),
        this
      );
    },
    intersectsObject: function (e) {
      var t = e.geometry;
      return (
        null === t.boundingSphere && t.computeBoundingSphere(),
        og.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(og)
      );
    },
    intersectsSprite: function (e) {
      return (
        og.center.set(0, 0, 0),
        (og.radius = 0.7071067811865476),
        og.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(og)
      );
    },
    intersectsSphere: function (e) {
      var t = this.planes,
        i = e.center;
      e = -e.radius;
      for (var n = 0; 6 > n; n++) if (t[n].distanceToPoint(i) < e) return !1;
      return !0;
    },
    intersectsBox: function (e) {
      for (var t = this.planes, i = 0; 6 > i; i++) {
        var n = t[i];
        if (
          ((ov.x = 0 < n.normal.x ? e.max.x : e.min.x),
          (ov.y = 0 < n.normal.y ? e.max.y : e.min.y),
          (ov.z = 0 < n.normal.z ? e.max.z : e.min.z),
          0 > n.distanceToPoint(ov))
        )
          return !1;
      }
      return !0;
    },
    containsPoint: function (e) {
      for (var t = this.planes, i = 0; 6 > i; i++)
        if (0 > t[i].distanceToPoint(e)) return !1;
      return !0;
    },
  });
  var o$ = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	return vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n#else\n	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n	}\n	return 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n	return Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + viewDir );\n	float dotNL = saturate( dot( normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE  = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS  = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	return specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	vec3 FssEss = F * brdf.x + brdf.y;\n	float Ess = brdf.x + brdf.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n	float invAlpha  = 1.0 / roughness;\n	float cos2h = NoH * NoH;\n	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 H = normalize( V + L );\n	float dotNH = saturate( dot( N, H ) );\n	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		if ( clipped ) discard;\n	#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n	varying vec3 vViewPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n	vViewPosition = - mvPosition.xyz;\n#endif",
      color_fragment: "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
      color_pars_vertex: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
      color_vertex: "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
      common:
        "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	transformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float D = max( maxRange / maxRGB, 1.0 );\n	D = min( floor( D ) / 255.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract( Le );\n	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n	return vec4( max( vRGB, 0.0 ), 1.0 );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		}  else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		reflectVec = normalize( reflectVec );\n		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		reflectVec = normalize( reflectVec );\n		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifndef ENVMAP_TYPE_CUBE_UV\n		envColor = envMapTexelToLinear( envColor );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform int maxMipLevel;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n	#ifdef ENVMAP_MODE_REFRACTION\n		uniform float refractionRatio;\n	#endif\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float sigma = PI * roughness * roughness / ( 1.0 + roughness );\n		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n		  vec3 reflectVec = reflect( -viewDir, normal );\n		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n		#else\n		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) { \n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n	fogDepth = -mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n	varying float fogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return texture2D( gradientMap, coord ).rgb;\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex:
        "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n		float shadowCameraNear;\n		float shadowCameraFar;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n	material.clearcoat = saturate( clearcoat );	material.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheen;\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n#ifdef CLEARCOAT\n	float clearcoat;\n	float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	vec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifdef CLEARCOAT\n		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = ccDotNL * directLight.color;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			ccIrradiance *= PI;\n		#endif\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	#ifdef USE_SHEEN\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n			material.specularRoughness,\n			directLight.direction,\n			geometry,\n			material.sheenColor\n		);\n	#else\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n	#endif\n	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef CLEARCOAT\n		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n		float ccDotNL = ccDotNV;\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	float clearcoatInv = 1.0 - clearcoatDHR;\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n	#ifdef CLEARCOAT\n		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n	#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, uv );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n	transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n	transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n	transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n	transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n	transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n	transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n	#endif\n#endif",
      normal_fragment_begin:
        "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		float scale = sign( st1.t * st0.s - st0.t * st1.s );\n		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n		vec3 N = normalize( surf_norm );\n		mat3 tsn = mat3( S, T, N );\n		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		return normalize( tsn * mapN );\n	}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n	#endif\n#endif",
      clearcoat_normalmap_pars_fragment:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			shadow = (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
      shadowmap_pars_vertex:
        "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
      shadowmap_vertex:
        "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLight directionalLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLight spotLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLight pointLight;\n	#pragma unroll_loop\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV;\n	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	vec4 texColor = texture2D( tEquirect, sampleUV );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n	\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
      meshlambert_frag:
        "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n		matcapColor = matcapTexelToLinear( matcapColor );\n	#else\n		vec4 matcapColor = vec4( 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#ifndef FLAT_SHADED\n		vNormal = normalize( transformedNormal );\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n	#define REFLECTIVITY\n	#define CLEARCOAT\n	#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n	uniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n	uniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#ifdef TRANSPARENCY\n		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n	#endif\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      normal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
      normal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <fog_fragment>\n}",
      shadow_vert:
        "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    },
    oy = {
      common: {
        diffuse: { value: new _(15658734) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new a() },
        uv2Transform: { value: new a() },
        alphaMap: { value: null },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        refractionRatio: { value: 0.98 },
        maxMipLevel: { value: 0 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new i(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new _(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
      },
      points: {
        diffuse: { value: new _(15658734) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new a() },
      },
      sprite: {
        diffuse: { value: new _(15658734) },
        opacity: { value: 1 },
        center: { value: new i(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new a() },
      },
    },
    ox = {
      basic: {
        uniforms: j([
          oy.common,
          oy.specularmap,
          oy.envmap,
          oy.aomap,
          oy.lightmap,
          oy.fog,
        ]),
        vertexShader: o$.meshbasic_vert,
        fragmentShader: o$.meshbasic_frag,
      },
      lambert: {
        uniforms: j([
          oy.common,
          oy.specularmap,
          oy.envmap,
          oy.aomap,
          oy.lightmap,
          oy.emissivemap,
          oy.fog,
          oy.lights,
          { emissive: { value: new _(0) } },
        ]),
        vertexShader: o$.meshlambert_vert,
        fragmentShader: o$.meshlambert_frag,
      },
      phong: {
        uniforms: j([
          oy.common,
          oy.specularmap,
          oy.envmap,
          oy.aomap,
          oy.lightmap,
          oy.emissivemap,
          oy.bumpmap,
          oy.normalmap,
          oy.displacementmap,
          oy.fog,
          oy.lights,
          {
            emissive: { value: new _(0) },
            specular: { value: new _(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: o$.meshphong_vert,
        fragmentShader: o$.meshphong_frag,
      },
      standard: {
        uniforms: j([
          oy.common,
          oy.envmap,
          oy.aomap,
          oy.lightmap,
          oy.emissivemap,
          oy.bumpmap,
          oy.normalmap,
          oy.displacementmap,
          oy.roughnessmap,
          oy.metalnessmap,
          oy.fog,
          oy.lights,
          {
            emissive: { value: new _(0) },
            roughness: { value: 0.5 },
            metalness: { value: 0.5 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: o$.meshphysical_vert,
        fragmentShader: o$.meshphysical_frag,
      },
      toon: {
        uniforms: j([
          oy.common,
          oy.specularmap,
          oy.aomap,
          oy.lightmap,
          oy.emissivemap,
          oy.bumpmap,
          oy.normalmap,
          oy.displacementmap,
          oy.gradientmap,
          oy.fog,
          oy.lights,
          {
            emissive: { value: new _(0) },
            specular: { value: new _(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: o$.meshtoon_vert,
        fragmentShader: o$.meshtoon_frag,
      },
      matcap: {
        uniforms: j([
          oy.common,
          oy.bumpmap,
          oy.normalmap,
          oy.displacementmap,
          oy.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: o$.meshmatcap_vert,
        fragmentShader: o$.meshmatcap_frag,
      },
      points: {
        uniforms: j([oy.points, oy.fog]),
        vertexShader: o$.points_vert,
        fragmentShader: o$.points_frag,
      },
      dashed: {
        uniforms: j([
          oy.common,
          oy.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: o$.linedashed_vert,
        fragmentShader: o$.linedashed_frag,
      },
      depth: {
        uniforms: j([oy.common, oy.displacementmap]),
        vertexShader: o$.depth_vert,
        fragmentShader: o$.depth_frag,
      },
      normal: {
        uniforms: j([
          oy.common,
          oy.bumpmap,
          oy.normalmap,
          oy.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: o$.normal_vert,
        fragmentShader: o$.normal_frag,
      },
      sprite: {
        uniforms: j([oy.sprite, oy.fog]),
        vertexShader: o$.sprite_vert,
        fragmentShader: o$.sprite_frag,
      },
      background: {
        uniforms: { uvTransform: { value: new a() }, t2D: { value: null } },
        vertexShader: o$.background_vert,
        fragmentShader: o$.background_frag,
      },
      cube: {
        uniforms: j([oy.envmap, { opacity: { value: 1 } }]),
        vertexShader: o$.cube_vert,
        fragmentShader: o$.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: o$.equirect_vert,
        fragmentShader: o$.equirect_frag,
      },
      distanceRGBA: {
        uniforms: j([
          oy.common,
          oy.displacementmap,
          {
            referencePosition: { value: new r() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: o$.distanceRGBA_vert,
        fragmentShader: o$.distanceRGBA_frag,
      },
      shadow: {
        uniforms: j([
          oy.lights,
          oy.fog,
          { color: { value: new _(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: o$.shadow_vert,
        fragmentShader: o$.shadow_frag,
      },
    };
  (ox.physical = {
    uniforms: j([
      ox.standard.uniforms,
      {
        transparency: { value: 0 },
        clearcoat: { value: 0 },
        clearcoatRoughness: { value: 0 },
        sheen: { value: new _(0) },
        clearcoatNormalScale: { value: new i(1, 1) },
        clearcoatNormalMap: { value: null },
      },
    ]),
    vertexShader: o$.meshphysical_vert,
    fragmentShader: o$.meshphysical_frag,
  }),
    (ei.prototype = Object.create(k.prototype)),
    (ei.prototype.constructor = ei),
    (en.prototype = Object.create(G.prototype)),
    (en.prototype.constructor = en),
    (em.prototype = Object.create(o.prototype)),
    (em.prototype.constructor = em),
    (em.prototype.isCubeTexture = !0),
    Object.defineProperty(em.prototype, "images", {
      get: function () {
        return this.image;
      },
      set: function (e) {
        this.image = e;
      },
    }),
    (eg.prototype = Object.create(o.prototype)),
    (eg.prototype.constructor = eg),
    (eg.prototype.isDataTexture2DArray = !0),
    (ev.prototype = Object.create(o.prototype)),
    (ev.prototype.constructor = ev),
    (ev.prototype.isDataTexture3D = !0);
  var o_ = new o(),
    o8 = new eg(),
    ow = new ev(),
    ob = new em(),
    oM = [],
    oS = [],
    oT = new Float32Array(16),
    oE = new Float32Array(9),
    o1 = new Float32Array(4);
  (eW.prototype.updateCache = function (e) {
    var t = this.cache;
    e instanceof Float32Array &&
      t.length !== e.length &&
      (this.cache = new Float32Array(e.length)),
      ex(t, e);
  }),
    (e5.prototype.setValue = function (e, t, i) {
      for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
        var o = n[r];
        o.setValue(e, t[o.id], i);
      }
    });
  var o0 = /([\w\d_]+)(\])?(\[|\.)?/g;
  (e6.prototype.setValue = function (e, t, i, n) {
    void 0 !== (t = this.map[t]) && t.setValue(e, i, n);
  }),
    (e6.prototype.setOptional = function (e, t, i) {
      void 0 !== (t = t[i]) && this.setValue(e, i, t);
    }),
    (e6.upload = function (e, t, i, n) {
      for (var r = 0, a = t.length; r !== a; ++r) {
        var o = t[r],
          s = i[o.id];
        !1 !== s.needsUpdate && o.setValue(e, s.value, n);
      }
    }),
    (e6.seqWithValue = function (e, t) {
      for (var i = [], n = 0, r = e.length; n !== r; ++n) {
        var a = e[n];
        a.id in t && i.push(a);
      }
      return i;
    });
  var oL = 0,
    oA = /^[ \t]*#include +<([\w\d./]+)>/gm,
    oR =
      /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    oP = 0;
  (tp.prototype = Object.create(T.prototype)),
    (tp.prototype.constructor = tp),
    (tp.prototype.isMeshDepthMaterial = !0),
    (tp.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        (this.depthPacking = e.depthPacking),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }),
    (td.prototype = Object.create(T.prototype)),
    (td.prototype.constructor = td),
    (td.prototype.isMeshDistanceMaterial = !0),
    (td.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.referencePosition.copy(e.referencePosition),
        (this.nearDistance = e.nearDistance),
        (this.farDistance = e.farDistance),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }),
    (t$.prototype = Object.assign(Object.create(c.prototype), {
      constructor: t$,
      isWebGLMultiviewRenderTarget: !0,
      copy: function (e) {
        return (
          c.prototype.copy.call(this, e), (this.numViews = e.numViews), this
        );
      },
      setNumViews: function (e) {
        return (
          this.numViews !== e && ((this.numViews = e), this.dispose()), this
        );
      },
    })),
    (tx.prototype = Object.assign(Object.create(Y.prototype), {
      constructor: tx,
      isArrayCamera: !0,
    })),
    (t_.prototype = Object.assign(Object.create(d.prototype), {
      constructor: t_,
      isGroup: !0,
    })),
    Object.assign(t8.prototype, t.prototype),
    Object.assign(tb.prototype, {
      isFogExp2: !0,
      clone: function () {
        return new tb(this.color, this.density);
      },
      toJSON: function () {
        return {
          type: "FogExp2",
          color: this.color.getHex(),
          density: this.density,
        };
      },
    }),
    Object.assign(tM.prototype, {
      isFog: !0,
      clone: function () {
        return new tM(this.color, this.near, this.far);
      },
      toJSON: function () {
        return {
          type: "Fog",
          color: this.color.getHex(),
          near: this.near,
          far: this.far,
        };
      },
    }),
    Object.defineProperty(tS.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++;
      },
    }),
    Object.assign(tS.prototype, {
      isInterleavedBuffer: !0,
      onUploadCallback: function () {},
      setUsage: function (e) {
        return (this.usage = e), this;
      },
      copy: function (e) {
        return (
          (this.array = new e.array.constructor(e.array)),
          (this.count = e.count),
          (this.stride = e.stride),
          (this.usage = e.usage),
          this
        );
      },
      copyAt: function (e, t, i) {
        (e *= this.stride), (i *= t.stride);
        for (var n = 0, r = this.stride; n < r; n++)
          this.array[e + n] = t.array[i + n];
        return this;
      },
      set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      onUpload: function (e) {
        return (this.onUploadCallback = e), this;
      },
    });
  var oC = new r();
  Object.defineProperties(tT.prototype, {
    count: {
      get: function () {
        return this.data.count;
      },
    },
    array: {
      get: function () {
        return this.data.array;
      },
    },
  }),
    Object.assign(tT.prototype, {
      isInterleavedBufferAttribute: !0,
      applyMatrix4: function (e) {
        for (var t = 0, i = this.data.count; t < i; t++)
          (oC.x = this.getX(t)),
            (oC.y = this.getY(t)),
            (oC.z = this.getZ(t)),
            oC.applyMatrix4(e),
            this.setXYZ(t, oC.x, oC.y, oC.z);
        return this;
      },
      setX: function (e, t) {
        return (this.data.array[e * this.data.stride + this.offset] = t), this;
      },
      setY: function (e, t) {
        return (
          (this.data.array[e * this.data.stride + this.offset + 1] = t), this
        );
      },
      setZ: function (e, t) {
        return (
          (this.data.array[e * this.data.stride + this.offset + 2] = t), this
        );
      },
      setW: function (e, t) {
        return (
          (this.data.array[e * this.data.stride + this.offset + 3] = t), this
        );
      },
      getX: function (e) {
        return this.data.array[e * this.data.stride + this.offset];
      },
      getY: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 1];
      },
      getZ: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 2];
      },
      getW: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 3];
      },
      setXY: function (e, t, i) {
        return (
          (e = e * this.data.stride + this.offset),
          (this.data.array[e + 0] = t),
          (this.data.array[e + 1] = i),
          this
        );
      },
      setXYZ: function (e, t, i, n) {
        return (
          (e = e * this.data.stride + this.offset),
          (this.data.array[e + 0] = t),
          (this.data.array[e + 1] = i),
          (this.data.array[e + 2] = n),
          this
        );
      },
      setXYZW: function (e, t, i, n, r) {
        return (
          (e = e * this.data.stride + this.offset),
          (this.data.array[e + 0] = t),
          (this.data.array[e + 1] = i),
          (this.data.array[e + 2] = n),
          (this.data.array[e + 3] = r),
          this
        );
      },
    }),
    (tE.prototype = Object.create(T.prototype)),
    (tE.prototype.constructor = tE),
    (tE.prototype.isSpriteMaterial = !0),
    (tE.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.rotation = e.rotation),
        (this.sizeAttenuation = e.sizeAttenuation),
        this
      );
    });
  var oD,
    oI = new r(),
    oN = new r(),
    oz = new r(),
    oB = new i(),
    o2 = new i(),
    oU = new h(),
    oF = new r(),
    oG = new r(),
    o3 = new r(),
    oH = new i(),
    oO = new i(),
    oV = new i();
  t1.prototype = Object.assign(Object.create(d.prototype), {
    constructor: t1,
    isSprite: !0,
    raycast: function (e, t) {
      null === e.camera &&
        console.error(
          'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
        ),
        oN.setFromMatrixScale(this.matrixWorld),
        oU.copy(e.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          e.camera.matrixWorldInverse,
          this.matrixWorld
        ),
        oz.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera &&
          !1 === this.material.sizeAttenuation &&
          oN.multiplyScalar(-oz.z);
      var n = this.material.rotation;
      if (0 !== n)
        var r = Math.cos(n),
          a = Math.sin(n);
      (n = this.center),
        t0(oF.set(-0.5, -0.5, 0), oz, n, oN, a, r),
        t0(oG.set(0.5, -0.5, 0), oz, n, oN, a, r),
        t0(o3.set(0.5, 0.5, 0), oz, n, oN, a, r),
        oH.set(0, 0),
        oO.set(1, 0),
        oV.set(1, 1);
      var o = e.ray.intersectTriangle(oF, oG, o3, !1, oI);
      (null !== o ||
        (t0(oG.set(-0.5, 0.5, 0), oz, n, oN, a, r),
        oO.set(0, 1),
        null !== (o = e.ray.intersectTriangle(oF, o3, oG, !1, oI)))) &&
        ((a = e.ray.origin.distanceTo(oI)) < e.near ||
          a > e.far ||
          t.push({
            distance: a,
            point: oI.clone(),
            uv: x.getUV(oI, oF, oG, o3, oH, oO, oV, new i()),
            face: null,
            object: this,
          }));
    },
    clone: function () {
      return new this.constructor(this.material).copy(this);
    },
    copy: function (e) {
      return (
        d.prototype.copy.call(this, e),
        void 0 !== e.center && this.center.copy(e.center),
        this
      );
    },
  });
  var o4 = new r(),
    ok = new r();
  (tL.prototype = Object.assign(Object.create(d.prototype), {
    constructor: tL,
    isLOD: !0,
    copy: function (e) {
      d.prototype.copy.call(this, e, !1);
      for (var t = e.levels, i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        this.addLevel(r.object.clone(), r.distance);
      }
      return (this.autoUpdate = e.autoUpdate), this;
    },
    addLevel: function (e, t) {
      void 0 === t && (t = 0), (t = Math.abs(t));
      for (
        var i = this.levels, n = 0;
        n < i.length && !(t < i[n].distance);
        n++
      );
      return i.splice(n, 0, { distance: t, object: e }), this.add(e), this;
    },
    getObjectForDistance: function (e) {
      var t = this.levels;
      if (0 < t.length) {
        for (var i = 1, n = t.length; i < n && !(e < t[i].distance); i++);
        return t[i - 1].object;
      }
      return null;
    },
    raycast: function (e, t) {
      if (0 < this.levels.length) {
        o4.setFromMatrixPosition(this.matrixWorld);
        var i = e.ray.origin.distanceTo(o4);
        this.getObjectForDistance(i).raycast(e, t);
      }
    },
    update: function (e) {
      var t = this.levels;
      if (1 < t.length) {
        o4.setFromMatrixPosition(e.matrixWorld),
          ok.setFromMatrixPosition(this.matrixWorld),
          (e = o4.distanceTo(ok)),
          (t[0].object.visible = !0);
        for (var i = 1, n = t.length; i < n; i++)
          if (e >= t[i].distance)
            (t[i - 1].object.visible = !1), (t[i].object.visible = !0);
          else break;
        for (; i < n; i++) t[i].object.visible = !1;
      }
    },
    toJSON: function (e) {
      (e = d.prototype.toJSON.call(this, e)),
        !1 === this.autoUpdate && (e.object.autoUpdate = !1),
        (e.object.levels = []);
      for (var t = this.levels, i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.object.levels.push({ object: r.object.uuid, distance: r.distance });
      }
      return e;
    },
  })),
    (tA.prototype = Object.assign(Object.create(H.prototype), {
      constructor: tA,
      isSkinnedMesh: !0,
      bind: function (e, t) {
        (this.skeleton = e),
          void 0 === t &&
            (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            (t = this.matrixWorld)),
          this.bindMatrix.copy(t),
          this.bindMatrixInverse.getInverse(t);
      },
      pose: function () {
        this.skeleton.pose();
      },
      normalizeSkinWeights: function () {
        for (
          var e = new s(),
            t = this.geometry.attributes.skinWeight,
            i = 0,
            n = t.count;
          i < n;
          i++
        ) {
          (e.x = t.getX(i)),
            (e.y = t.getY(i)),
            (e.z = t.getZ(i)),
            (e.w = t.getW(i));
          var r = 1 / e.manhattanLength();
          1 / 0 !== r ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
            t.setXYZW(i, e.x, e.y, e.z, e.w);
        }
      },
      updateMatrixWorld: function (e) {
        H.prototype.updateMatrixWorld.call(this, e),
          "attached" === this.bindMode
            ? this.bindMatrixInverse.getInverse(this.matrixWorld)
            : "detached" === this.bindMode
            ? this.bindMatrixInverse.getInverse(this.bindMatrix)
            : console.warn(
                "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
              );
      },
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this);
      },
    }));
  var oW = new h(),
    o5 = new h();
  Object.assign(tR.prototype, {
    calculateInverses: function () {
      this.boneInverses = [];
      for (var e = 0, t = this.bones.length; e < t; e++) {
        var i = new h();
        this.bones[e] && i.getInverse(this.bones[e].matrixWorld),
          this.boneInverses.push(i);
      }
    },
    pose: function () {
      var e,
        t,
        i = 0;
      for (t = this.bones.length; i < t; i++)
        (e = this.bones[i]) && e.matrixWorld.getInverse(this.boneInverses[i]);
      for (i = 0, t = this.bones.length; i < t; i++)
        (e = this.bones[i]) &&
          (e.parent && e.parent.isBone
            ? (e.matrix.getInverse(e.parent.matrixWorld),
              e.matrix.multiply(e.matrixWorld))
            : e.matrix.copy(e.matrixWorld),
          e.matrix.decompose(e.position, e.quaternion, e.scale));
    },
    update: function () {
      for (
        var e = this.bones,
          t = this.boneInverses,
          i = this.boneMatrices,
          n = this.boneTexture,
          r = 0,
          a = e.length;
        r < a;
        r++
      )
        oW.multiplyMatrices(e[r] ? e[r].matrixWorld : o5, t[r]),
          oW.toArray(i, 16 * r);
      void 0 !== n && (n.needsUpdate = !0);
    },
    clone: function () {
      return new tR(this.bones, this.boneInverses);
    },
    getBoneByName: function (e) {
      for (var t = 0, i = this.bones.length; t < i; t++) {
        var n = this.bones[t];
        if (n.name === e) return n;
      }
    },
  }),
    (tP.prototype = Object.assign(Object.create(d.prototype), {
      constructor: tP,
      isBone: !0,
    }));
  var o6 = new h(),
    o7 = new h(),
    oj = [],
    oq = new H();
  (tC.prototype = Object.assign(Object.create(H.prototype), {
    constructor: tC,
    isInstancedMesh: !0,
    getMatrixAt: function (e, t) {
      t.fromArray(this.instanceMatrix.array, 16 * e);
    },
    raycast: function (e, t) {
      var i = this.matrixWorld,
        n = this.count;
      if (
        ((oq.geometry = this.geometry),
        (oq.material = this.material),
        void 0 !== oq.material)
      )
        for (var r = 0; r < n; r++)
          this.getMatrixAt(r, o6),
            o7.multiplyMatrices(i, o6),
            (oq.matrixWorld = o7),
            oq.raycast(e, oj),
            0 < oj.length &&
              ((oj[0].instanceId = r),
              (oj[0].object = this),
              t.push(oj[0]),
              (oj.length = 0));
    },
    setMatrixAt: function (e, t) {
      t.toArray(this.instanceMatrix.array, 16 * e);
    },
    updateMorphTargets: function () {},
  })),
    (tD.prototype = Object.create(T.prototype)),
    (tD.prototype.constructor = tD),
    (tD.prototype.isLineBasicMaterial = !0),
    (tD.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        this
      );
    });
  var oX = new r(),
    oY = new r(),
    oZ = new h(),
    oJ = new $(),
    oQ = new v();
  tI.prototype = Object.assign(Object.create(d.prototype), {
    constructor: tI,
    isLine: !0,
    computeLineDistances: function () {
      var e = this.geometry;
      if (e.isBufferGeometry) {
        if (null === e.index) {
          for (
            var t = e.attributes.position, i = [0], n = 1, r = t.count;
            n < r;
            n++
          )
            oX.fromBufferAttribute(t, n - 1),
              oY.fromBufferAttribute(t, n),
              (i[n] = i[n - 1]),
              (i[n] += oX.distanceTo(oY));
          e.setAttribute("lineDistance", new z(i, 1));
        } else
          console.warn(
            "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      } else if (e.isGeometry)
        for (
          t = e.vertices, (i = e.lineDistances)[0] = 0, n = 1, r = t.length;
          n < r;
          n++
        )
          (i[n] = i[n - 1]), (i[n] += t[n - 1].distanceTo(t[n]));
      return this;
    },
    raycast: function (e, t) {
      var i = e.linePrecision,
        n = this.geometry,
        a = this.matrixWorld;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        oQ.copy(n.boundingSphere),
        oQ.applyMatrix4(a),
        (oQ.radius += i),
        !1 !== e.ray.intersectsSphere(oQ))
      ) {
        oZ.getInverse(a),
          oJ.copy(e.ray).applyMatrix4(oZ),
          (i /= (this.scale.x + this.scale.y + this.scale.z) / 3),
          (i *= i);
        var o = new r(),
          s = new r();
        a = new r();
        var c = new r(),
          l = this && this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
          var h = n.index,
            u = n.attributes.position.array;
          if (null !== h) {
            (h = h.array), (n = 0);
            for (var p = h.length - 1; n < p; n += l) {
              var d = h[n + 1];
              o.fromArray(u, 3 * h[n]),
                s.fromArray(u, 3 * d),
                (d = oJ.distanceSqToSegment(o, s, c, a)) > i ||
                  (c.applyMatrix4(this.matrixWorld),
                  (d = e.ray.origin.distanceTo(c)) < e.near ||
                    d > e.far ||
                    t.push({
                      distance: d,
                      point: a.clone().applyMatrix4(this.matrixWorld),
                      index: n,
                      face: null,
                      faceIndex: null,
                      object: this,
                    }));
            }
          } else
            for (n = 0, p = u.length / 3 - 1; n < p; n += l)
              o.fromArray(u, 3 * n),
                s.fromArray(u, 3 * n + 3),
                (d = oJ.distanceSqToSegment(o, s, c, a)) > i ||
                  (c.applyMatrix4(this.matrixWorld),
                  (d = e.ray.origin.distanceTo(c)) < e.near ||
                    d > e.far ||
                    t.push({
                      distance: d,
                      point: a.clone().applyMatrix4(this.matrixWorld),
                      index: n,
                      face: null,
                      faceIndex: null,
                      object: this,
                    }));
        } else if (n.isGeometry)
          for (s = (o = n.vertices).length, n = 0; n < s - 1; n += l)
            (d = oJ.distanceSqToSegment(o[n], o[n + 1], c, a)) > i ||
              (c.applyMatrix4(this.matrixWorld),
              (d = e.ray.origin.distanceTo(c)) < e.near ||
                d > e.far ||
                t.push({
                  distance: d,
                  point: a.clone().applyMatrix4(this.matrixWorld),
                  index: n,
                  face: null,
                  faceIndex: null,
                  object: this,
                }));
      }
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    },
  });
  var oK = new r(),
    o9 = new r();
  (tN.prototype = Object.assign(Object.create(tI.prototype), {
    constructor: tN,
    isLineSegments: !0,
    computeLineDistances: function () {
      var e = this.geometry;
      if (e.isBufferGeometry) {
        if (null === e.index) {
          for (
            var t = e.attributes.position, i = [], n = 0, r = t.count;
            n < r;
            n += 2
          )
            oK.fromBufferAttribute(t, n),
              o9.fromBufferAttribute(t, n + 1),
              (i[n] = 0 === n ? 0 : i[n - 1]),
              (i[n + 1] = i[n] + oK.distanceTo(o9));
          e.setAttribute("lineDistance", new z(i, 1));
        } else
          console.warn(
            "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      } else if (e.isGeometry)
        for (
          t = e.vertices, i = e.lineDistances, n = 0, r = t.length;
          n < r;
          n += 2
        )
          oK.copy(t[n]),
            o9.copy(t[n + 1]),
            (i[n] = 0 === n ? 0 : i[n - 1]),
            (i[n + 1] = i[n] + oK.distanceTo(o9));
      return this;
    },
  })),
    (tz.prototype = Object.assign(Object.create(tI.prototype), {
      constructor: tz,
      isLineLoop: !0,
    })),
    (tB.prototype = Object.create(T.prototype)),
    (tB.prototype.constructor = tB),
    (tB.prototype.isPointsMaterial = !0),
    (tB.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.morphTargets = e.morphTargets),
        this
      );
    });
  var se = new h(),
    st = new $(),
    si = new v(),
    sn = new r();
  (t2.prototype = Object.assign(Object.create(d.prototype), {
    constructor: t2,
    isPoints: !0,
    raycast: function (e, t) {
      var i = this.geometry,
        n = this.matrixWorld,
        r = e.params.Points.threshold;
      if (
        (null === i.boundingSphere && i.computeBoundingSphere(),
        si.copy(i.boundingSphere),
        si.applyMatrix4(n),
        (si.radius += r),
        !1 !== e.ray.intersectsSphere(si))
      ) {
        if (
          (se.getInverse(n),
          st.copy(e.ray).applyMatrix4(se),
          (r /= (this.scale.x + this.scale.y + this.scale.z) / 3),
          (r *= r),
          i.isBufferGeometry)
        ) {
          var a = i.index;
          if (((i = i.attributes.position.array), null !== a)) {
            var o = a.array;
            a = 0;
            for (var s = o.length; a < s; a++) {
              var c = o[a];
              sn.fromArray(i, 3 * c), tU(sn, c, r, n, e, t, this);
            }
          } else
            for (a = 0, o = i.length / 3; a < o; a++)
              sn.fromArray(i, 3 * a), tU(sn, a, r, n, e, t, this);
        } else
          for (i = i.vertices, a = 0, o = i.length; a < o; a++)
            tU(i[a], a, r, n, e, t, this);
      }
    },
    updateMorphTargets: function () {
      var e = this.geometry;
      if (e.isBufferGeometry) {
        var t = Object.keys((e = e.morphAttributes));
        if (0 < t.length) {
          var i = e[t[0]];
          if (void 0 !== i)
            for (
              this.morphTargetInfluences = [],
                this.morphTargetDictionary = {},
                e = 0,
                t = i.length;
              e < t;
              e++
            ) {
              var n = i[e].name || String(e);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = e);
            }
        }
      } else
        void 0 !== (e = e.morphTargets) &&
          0 < e.length &&
          console.error(
            "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    },
  })),
    (tF.prototype = Object.assign(Object.create(o.prototype), {
      constructor: tF,
      isVideoTexture: !0,
      update: function () {
        var e = this.image;
        e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
      },
    })),
    (tG.prototype = Object.create(o.prototype)),
    (tG.prototype.constructor = tG),
    (tG.prototype.isCompressedTexture = !0),
    (t3.prototype = Object.create(o.prototype)),
    (t3.prototype.constructor = t3),
    (t3.prototype.isCanvasTexture = !0),
    (tH.prototype = Object.create(o.prototype)),
    (tH.prototype.constructor = tH),
    (tH.prototype.isDepthTexture = !0),
    (tO.prototype = Object.create(G.prototype)),
    (tO.prototype.constructor = tO),
    (tV.prototype = Object.create(k.prototype)),
    (tV.prototype.constructor = tV),
    (t4.prototype = Object.create(G.prototype)),
    (t4.prototype.constructor = t4),
    (tk.prototype = Object.create(k.prototype)),
    (tk.prototype.constructor = tk),
    (tW.prototype = Object.create(G.prototype)),
    (tW.prototype.constructor = tW),
    (t5.prototype = Object.create(k.prototype)),
    (t5.prototype.constructor = t5),
    (t6.prototype = Object.create(tW.prototype)),
    (t6.prototype.constructor = t6),
    (t7.prototype = Object.create(k.prototype)),
    (t7.prototype.constructor = t7),
    (tj.prototype = Object.create(tW.prototype)),
    (tj.prototype.constructor = tj),
    (tq.prototype = Object.create(k.prototype)),
    (tq.prototype.constructor = tq),
    (tX.prototype = Object.create(tW.prototype)),
    (tX.prototype.constructor = tX),
    (tY.prototype = Object.create(k.prototype)),
    (tY.prototype.constructor = tY),
    (tZ.prototype = Object.create(tW.prototype)),
    (tZ.prototype.constructor = tZ),
    (tJ.prototype = Object.create(k.prototype)),
    (tJ.prototype.constructor = tJ),
    (tQ.prototype = Object.create(G.prototype)),
    (tQ.prototype.constructor = tQ),
    (tQ.prototype.toJSON = function () {
      var e = G.prototype.toJSON.call(this);
      return (e.path = this.parameters.path.toJSON()), e;
    }),
    (tK.prototype = Object.create(k.prototype)),
    (tK.prototype.constructor = tK),
    (t9.prototype = Object.create(G.prototype)),
    (t9.prototype.constructor = t9),
    (ie.prototype = Object.create(k.prototype)),
    (ie.prototype.constructor = ie),
    (it.prototype = Object.create(G.prototype)),
    (it.prototype.constructor = it);
  var sr = {
      triangulate: function (e, t, i) {
        i = i || 2;
        var n = t && t.length,
          r = n ? t[0] * i : e.length,
          a = ii(e, 0, r, i, !0),
          o = [];
        if (!a || a.next === a.prev) return o;
        if (n) {
          var s,
            c,
            l = i;
          n = [];
          var h = 0;
          for (c = t.length; h < c; h++) {
            var u = t[h] * l,
              p = h < c - 1 ? t[h + 1] * l : e.length;
            (u = ii(e, u, p, l, !1)) === u.next && (u.steiner = !0),
              n.push(il(u));
          }
          for (n.sort(io), h = 0; h < n.length; h++)
            (t = n[h]),
              (l = a),
              (l = is(t, l)) && ((t = ig(l, t)), ir(t, t.next)),
              (a = ir(a, a.next));
        }
        if (e.length > 80 * i) {
          var d = (s = e[0]),
            f = (n = e[1]);
          for (l = i; l < r; l += i)
            (h = e[l]),
              (t = e[l + 1]),
              h < d && (d = h),
              t < f && (f = t),
              h > s && (s = h),
              t > n && (n = t);
          s = 0 !== (s = Math.max(s - d, n - f)) ? 1 / s : 0;
        }
        return (
          !(function e(t, i, n, r, a, o, s) {
            if (t) {
              if (!s && o) {
                var c = t,
                  l = c;
                do
                  null === l.z && (l.z = ic(l.x, l.y, r, a, o)),
                    (l.prevZ = l.prev),
                    (l = l.nextZ = l.next);
                while (l !== c);
                (l.prevZ.nextZ = null), (l.prevZ = null), (c = l);
                var h,
                  u,
                  p,
                  d,
                  f = 1;
                do {
                  l = c;
                  var m = (c = null);
                  for (u = 0; l; ) {
                    u++;
                    var g = l;
                    for (h = p = 0; h < f && (p++, (g = g.nextZ)); h++);
                    for (d = f; 0 < p || (0 < d && g); )
                      0 !== p && (0 === d || !g || l.z <= g.z)
                        ? ((h = l), (l = l.nextZ), p--)
                        : ((h = g), (g = g.nextZ), d--),
                        m ? (m.nextZ = h) : (c = h),
                        (h.prevZ = m),
                        (m = h);
                    l = g;
                  }
                  (m.nextZ = null), (f *= 2);
                } while (1 < u);
              }
              for (c = t; t.prev !== t.next; ) {
                if (((l = t.prev), (g = t.next), o)) m = ia(t, r, a, o);
                else
                  a: if (
                    ((u = (m = t).prev), 0 <= iu(u, (p = m), (f = m.next)))
                  )
                    m = !1;
                  else {
                    for (h = m.next.next; h !== m.prev; ) {
                      if (
                        ih(u.x, u.y, p.x, p.y, f.x, f.y, h.x, h.y) &&
                        0 <= iu(h.prev, h, h.next)
                      ) {
                        m = !1;
                        break a;
                      }
                      h = h.next;
                    }
                    m = !0;
                  }
                if (m)
                  i.push(l.i / n),
                    i.push(t.i / n),
                    i.push(g.i / n),
                    i$(t),
                    (c = t = g.next);
                else if ((t = g) === c) {
                  if (s) {
                    if (1 === s) {
                      (s = i), (c = n), (l = t);
                      do
                        !ip((g = l.prev), (m = l.next.next)) &&
                          id(g, l, l.next, m) &&
                          im(g, m) &&
                          im(m, g) &&
                          (s.push(g.i / c),
                          s.push(l.i / c),
                          s.push(m.i / c),
                          i$(l),
                          i$(l.next),
                          (l = t = m)),
                          (l = l.next);
                      while (l !== t);
                      e((t = l), i, n, r, a, o, 2);
                    } else if (2 === s)
                      a: {
                        s = t;
                        do {
                          for (c = s.next.next; c !== s.prev; ) {
                            if ((l = s.i !== c.i)) {
                              if (
                                ((l = s),
                                (g = c),
                                (m = l.next.i !== g.i && l.prev.i !== g.i))
                              ) {
                                b: {
                                  m = l;
                                  do {
                                    if (
                                      m.i !== l.i &&
                                      m.next.i !== l.i &&
                                      m.i !== g.i &&
                                      m.next.i !== g.i &&
                                      id(m, m.next, l, g)
                                    ) {
                                      m = !0;
                                      break b;
                                    }
                                    m = m.next;
                                  } while (m !== l);
                                  m = !1;
                                }
                                m = !m;
                              }
                              if ((m = m && im(l, g) && im(g, l))) {
                                (m = l),
                                  (u = !1),
                                  (p = (l.x + g.x) / 2),
                                  (g = (l.y + g.y) / 2);
                                do
                                  m.y > g != m.next.y > g &&
                                    m.next.y !== m.y &&
                                    p <
                                      ((m.next.x - m.x) * (g - m.y)) /
                                        (m.next.y - m.y) +
                                        m.x &&
                                    (u = !u),
                                    (m = m.next);
                                while (m !== l);
                                m = u;
                              }
                              l = m;
                            }
                            if (l) {
                              (t = ig(s, c)),
                                (s = ir(s, s.next)),
                                (t = ir(t, t.next)),
                                e(s, i, n, r, a, o),
                                e(t, i, n, r, a, o);
                              break a;
                            }
                            c = c.next;
                          }
                          s = s.next;
                        } while (s !== t);
                      }
                  } else e(ir(t), i, n, r, a, o, 1);
                  break;
                }
              }
            }
          })(a, o, i, d, f, s),
          o
        );
      },
    },
    sa = {
      area: function (e) {
        for (var t = e.length, i = 0, n = t - 1, r = 0; r < t; n = r++)
          i += e[n].x * e[r].y - e[r].x * e[n].y;
        return 0.5 * i;
      },
      isClockWise: function (e) {
        return 0 > sa.area(e);
      },
      triangulateShape: function (e, t) {
        var i = [],
          n = [],
          r = [];
        ix(e), i_(i, e);
        var a = e.length;
        for (t.forEach(ix), e = 0; e < t.length; e++)
          n.push(a), (a += t[e].length), i_(i, t[e]);
        for (e = 0, t = sr.triangulate(i, n); e < t.length; e += 3)
          r.push(t.slice(e, e + 3));
        return r;
      },
    };
  (i8.prototype = Object.create(k.prototype)),
    (i8.prototype.constructor = i8),
    (i8.prototype.toJSON = function () {
      var e = k.prototype.toJSON.call(this);
      return ib(this.parameters.shapes, this.parameters.options, e);
    }),
    (iw.prototype = Object.create(G.prototype)),
    (iw.prototype.constructor = iw),
    (iw.prototype.toJSON = function () {
      var e = G.prototype.toJSON.call(this);
      return ib(this.parameters.shapes, this.parameters.options, e);
    });
  var so = {
    generateTopUV: function (e, t, n, r, a) {
      (e = t[3 * r]), (r = t[3 * r + 1]);
      var o = t[3 * a];
      return (
        (a = t[3 * a + 1]),
        [new i(t[3 * n], t[3 * n + 1]), new i(e, r), new i(o, a)]
      );
    },
    generateSideWallUV: function (e, t, n, r, a, o) {
      e = t[3 * n];
      var s = t[3 * n + 1];
      n = t[3 * n + 2];
      var c = t[3 * r],
        l = t[3 * r + 1];
      r = t[3 * r + 2];
      var h = t[3 * a],
        u = t[3 * a + 1];
      a = t[3 * a + 2];
      var p = t[3 * o],
        d = t[3 * o + 1];
      return (
        (t = t[3 * o + 2]),
        0.01 > Math.abs(s - l)
          ? [new i(e, 1 - n), new i(c, 1 - r), new i(h, 1 - a), new i(p, 1 - t)]
          : [new i(s, 1 - n), new i(l, 1 - r), new i(u, 1 - a), new i(d, 1 - t)]
      );
    },
  };
  (iM.prototype = Object.create(k.prototype)),
    (iM.prototype.constructor = iM),
    (iS.prototype = Object.create(iw.prototype)),
    (iS.prototype.constructor = iS),
    (iT.prototype = Object.create(k.prototype)),
    (iT.prototype.constructor = iT),
    (iE.prototype = Object.create(G.prototype)),
    (iE.prototype.constructor = iE),
    (i1.prototype = Object.create(k.prototype)),
    (i1.prototype.constructor = i1),
    (i0.prototype = Object.create(G.prototype)),
    (i0.prototype.constructor = i0),
    (iL.prototype = Object.create(k.prototype)),
    (iL.prototype.constructor = iL),
    (iA.prototype = Object.create(G.prototype)),
    (iA.prototype.constructor = iA),
    (iR.prototype = Object.create(k.prototype)),
    (iR.prototype.constructor = iR),
    (iR.prototype.toJSON = function () {
      var e = k.prototype.toJSON.call(this);
      return iC(this.parameters.shapes, e);
    }),
    (iP.prototype = Object.create(G.prototype)),
    (iP.prototype.constructor = iP),
    (iP.prototype.toJSON = function () {
      var e = G.prototype.toJSON.call(this);
      return iC(this.parameters.shapes, e);
    }),
    (iD.prototype = Object.create(G.prototype)),
    (iD.prototype.constructor = iD),
    (iI.prototype = Object.create(k.prototype)),
    (iI.prototype.constructor = iI),
    (iN.prototype = Object.create(G.prototype)),
    (iN.prototype.constructor = iN),
    (iz.prototype = Object.create(iI.prototype)),
    (iz.prototype.constructor = iz),
    (iB.prototype = Object.create(iN.prototype)),
    (iB.prototype.constructor = iB),
    (i2.prototype = Object.create(k.prototype)),
    (i2.prototype.constructor = i2),
    (iU.prototype = Object.create(G.prototype)),
    (iU.prototype.constructor = iU);
  var ss = Object.freeze({
    __proto__: null,
    WireframeGeometry: tO,
    ParametricGeometry: tV,
    ParametricBufferGeometry: t4,
    TetrahedronGeometry: t5,
    TetrahedronBufferGeometry: t6,
    OctahedronGeometry: t7,
    OctahedronBufferGeometry: tj,
    IcosahedronGeometry: tq,
    IcosahedronBufferGeometry: tX,
    DodecahedronGeometry: tY,
    DodecahedronBufferGeometry: tZ,
    PolyhedronGeometry: tk,
    PolyhedronBufferGeometry: tW,
    TubeGeometry: tJ,
    TubeBufferGeometry: tQ,
    TorusKnotGeometry: tK,
    TorusKnotBufferGeometry: t9,
    TorusGeometry: ie,
    TorusBufferGeometry: it,
    TextGeometry: iM,
    TextBufferGeometry: iS,
    SphereGeometry: iT,
    SphereBufferGeometry: iE,
    RingGeometry: i1,
    RingBufferGeometry: i0,
    PlaneGeometry: ei,
    PlaneBufferGeometry: en,
    LatheGeometry: iL,
    LatheBufferGeometry: iA,
    ShapeGeometry: iR,
    ShapeBufferGeometry: iP,
    ExtrudeGeometry: i8,
    ExtrudeBufferGeometry: iw,
    EdgesGeometry: iD,
    ConeGeometry: iz,
    ConeBufferGeometry: iB,
    CylinderGeometry: iI,
    CylinderBufferGeometry: iN,
    CircleGeometry: i2,
    CircleBufferGeometry: iU,
    BoxGeometry: of,
    BoxBufferGeometry: om,
  });
  (iF.prototype = Object.create(T.prototype)),
    (iF.prototype.constructor = iF),
    (iF.prototype.isShadowMaterial = !0),
    (iF.prototype.copy = function (e) {
      return T.prototype.copy.call(this, e), this.color.copy(e.color), this;
    }),
    (iG.prototype = Object.create(q.prototype)),
    (iG.prototype.constructor = iG),
    (iG.prototype.isRawShaderMaterial = !0),
    (i3.prototype = Object.create(T.prototype)),
    (i3.prototype.constructor = i3),
    (i3.prototype.isMeshStandardMaterial = !0),
    (i3.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        (this.defines = { STANDARD: "" }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.envMapIntensity = e.envMapIntensity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (iH.prototype = Object.create(i3.prototype)),
    (iH.prototype.constructor = iH),
    (iH.prototype.isMeshPhysicalMaterial = !0),
    (iH.prototype.copy = function (e) {
      return (
        i3.prototype.copy.call(this, e),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.reflectivity = e.reflectivity),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.sheen = e.sheen ? (this.sheen || new _()).copy(e.sheen) : null),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.transparency = e.transparency),
        this
      );
    }),
    (iO.prototype = Object.create(T.prototype)),
    (iO.prototype.constructor = iO),
    (iO.prototype.isMeshPhongMaterial = !0),
    (iO.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        (this.shininess = e.shininess),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (iV.prototype = Object.create(T.prototype)),
    (iV.prototype.constructor = iV),
    (iV.prototype.isMeshToonMaterial = !0),
    (iV.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        (this.shininess = e.shininess),
        (this.map = e.map),
        (this.gradientMap = e.gradientMap),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (i4.prototype = Object.create(T.prototype)),
    (i4.prototype.constructor = i4),
    (i4.prototype.isMeshNormalMaterial = !0),
    (i4.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (ik.prototype = Object.create(T.prototype)),
    (ik.prototype.constructor = ik),
    (ik.prototype.isMeshLambertMaterial = !0),
    (ik.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (iW.prototype = Object.create(T.prototype)),
    (iW.prototype.constructor = iW),
    (iW.prototype.isMeshMatcapMaterial = !0),
    (iW.prototype.copy = function (e) {
      return (
        T.prototype.copy.call(this, e),
        (this.defines = { MATCAP: "" }),
        this.color.copy(e.color),
        (this.matcap = e.matcap),
        (this.map = e.map),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.alphaMap = e.alphaMap),
        (this.skinning = e.skinning),
        (this.morphTargets = e.morphTargets),
        (this.morphNormals = e.morphNormals),
        this
      );
    }),
    (i5.prototype = Object.create(tD.prototype)),
    (i5.prototype.constructor = i5),
    (i5.prototype.isLineDashedMaterial = !0),
    (i5.prototype.copy = function (e) {
      return (
        tD.prototype.copy.call(this, e),
        (this.scale = e.scale),
        (this.dashSize = e.dashSize),
        (this.gapSize = e.gapSize),
        this
      );
    });
  var sc = Object.freeze({
      __proto__: null,
      ShadowMaterial: iF,
      SpriteMaterial: tE,
      RawShaderMaterial: iG,
      ShaderMaterial: q,
      PointsMaterial: tB,
      MeshPhysicalMaterial: iH,
      MeshStandardMaterial: i3,
      MeshPhongMaterial: iO,
      MeshToonMaterial: iV,
      MeshNormalMaterial: i4,
      MeshLambertMaterial: ik,
      MeshDepthMaterial: tp,
      MeshDistanceMaterial: td,
      MeshBasicMaterial: E,
      MeshMatcapMaterial: iW,
      LineDashedMaterial: i5,
      LineBasicMaterial: tD,
      Material: T,
    }),
    sl = {
      arraySlice: function (e, t, i) {
        return sl.isTypedArray(e)
          ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length))
          : e.slice(t, i);
      },
      convertArray: function (e, t, i) {
        return e && (i || e.constructor !== t)
          ? "number" == typeof t.BYTES_PER_ELEMENT
            ? new t(e)
            : Array.prototype.slice.call(e)
          : e;
      },
      isTypedArray: function (e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      },
      getKeyframeOrder: function (e) {
        for (var t = e.length, i = Array(t), n = 0; n !== t; ++n) i[n] = n;
        return (
          i.sort(function (t, i) {
            return e[t] - e[i];
          }),
          i
        );
      },
      sortedArray: function (e, t, i) {
        for (
          var n = e.length, r = new e.constructor(n), a = 0, o = 0;
          o !== n;
          ++a
        )
          for (var s = i[a] * t, c = 0; c !== t; ++c) r[o++] = e[s + c];
        return r;
      },
      flattenJSON: function (e, t, i, n) {
        for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[n]; ) a = e[r++];
        if (void 0 !== a) {
          var o = a[n];
          if (void 0 !== o) {
            if (Array.isArray(o))
              do
                void 0 !== (o = a[n]) && (t.push(a.time), i.push.apply(i, o)),
                  (a = e[r++]);
              while (void 0 !== a);
            else if (void 0 !== o.toArray)
              do
                void 0 !== (o = a[n]) &&
                  (t.push(a.time), o.toArray(i, i.length)),
                  (a = e[r++]);
              while (void 0 !== a);
            else
              do
                void 0 !== (o = a[n]) && (t.push(a.time), i.push(o)),
                  (a = e[r++]);
              while (void 0 !== a);
          }
        }
      },
      subclip: function (e, t, i, n, r) {
        (r = r || 30), ((e = e.clone()).name = t);
        var a = [];
        for (t = 0; t < e.tracks.length; ++t) {
          for (
            var o = e.tracks[t], s = o.getValueSize(), c = [], l = [], h = 0;
            h < o.times.length;
            ++h
          ) {
            var u = o.times[h] * r;
            if (!(u < i || u >= n))
              for (c.push(o.times[h]), u = 0; u < s; ++u)
                l.push(o.values[h * s + u]);
          }
          0 !== c.length &&
            ((o.times = sl.convertArray(c, o.times.constructor)),
            (o.values = sl.convertArray(l, o.values.constructor)),
            a.push(o));
        }
        for (t = 0, e.tracks = a, i = 1 / 0; t < e.tracks.length; ++t)
          i > e.tracks[t].times[0] && (i = e.tracks[t].times[0]);
        for (t = 0; t < e.tracks.length; ++t) e.tracks[t].shift(-1 * i);
        return e.resetDuration(), e;
      },
    };
  Object.assign(i6.prototype, {
    evaluate: function (e) {
      var t = this.parameterPositions,
        i = this._cachedIndex,
        n = t[i],
        r = t[i - 1];
      a: {
        b: {
          c: {
            d: if (!(e < n)) {
              for (var a = i + 2; ; ) {
                if (void 0 === n) {
                  if (e < r) break d;
                  return (
                    (this._cachedIndex = i = t.length),
                    this.afterEnd_(i - 1, e, r)
                  );
                }
                if (i === a) break;
                if (((r = n), e < (n = t[++i]))) break b;
              }
              n = t.length;
              break c;
            }
            if (e >= r) break a;
            for (e < (a = t[1]) && ((i = 2), (r = a)), a = i - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
              if (i === a) break;
              if (((n = r), e >= (r = t[--i - 1]))) break b;
            }
            (n = i), (i = 0);
          }
          for (; i < n; ) e < t[(r = (i + n) >>> 1)] ? (n = r) : (i = r + 1);
          if (((n = t[i]), void 0 === (r = t[i - 1])))
            return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
          if (void 0 === n)
            return (
              (this._cachedIndex = i = t.length), this.afterEnd_(i - 1, r, e)
            );
        }
        (this._cachedIndex = i), this.intervalChanged_(i, r, n);
      }
      return this.interpolate_(i, r, e, n);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function () {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function (e) {
      var t = this.resultBuffer,
        i = this.sampleValues,
        n = this.valueSize;
      e *= n;
      for (var r = 0; r !== n; ++r) t[r] = i[e + r];
      return t;
    },
    interpolate_: function () {
      throw Error("call to abstract method");
    },
    intervalChanged_: function () {},
  }),
    Object.assign(i6.prototype, {
      beforeStart_: i6.prototype.copySampleValue_,
      afterEnd_: i6.prototype.copySampleValue_,
    }),
    (i7.prototype = Object.assign(Object.create(i6.prototype), {
      constructor: i7,
      DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
      intervalChanged_: function (e, t, i) {
        var n = this.parameterPositions,
          r = e - 2,
          a = e + 1,
          o = n[r],
          s = n[a];
        if (void 0 === o)
          switch (this.getSettings_().endingStart) {
            case 2401:
              (r = e), (o = 2 * t - i);
              break;
            case 2402:
              o = t + n[(r = n.length - 2)] - n[r + 1];
              break;
            default:
              (r = e), (o = i);
          }
        if (void 0 === s)
          switch (this.getSettings_().endingEnd) {
            case 2401:
              (a = e), (s = 2 * i - t);
              break;
            case 2402:
              (a = 1), (s = i + n[1] - n[0]);
              break;
            default:
              (a = e - 1), (s = t);
          }
        (e = 0.5 * (i - t)),
          (n = this.valueSize),
          (this._weightPrev = e / (t - o)),
          (this._weightNext = e / (s - i)),
          (this._offsetPrev = r * n),
          (this._offsetNext = a * n);
      },
      interpolate_: function (e, t, i, n) {
        var r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          s = (e *= o) - o,
          c = this._offsetPrev,
          l = this._offsetNext,
          h = this._weightPrev,
          u = this._weightNext,
          p = (i - t) / (n - t);
        for (
          t = -h * (n = (i = p * p) * p) + 2 * h * i - h * p,
            h = (1 + h) * n + (-1.5 - 2 * h) * i + (-0.5 + h) * p + 1,
            p = (-1 - u) * n + (1.5 + u) * i + 0.5 * p,
            u = u * n - u * i,
            i = 0;
          i !== o;
          ++i
        )
          r[i] = t * a[c + i] + h * a[s + i] + p * a[e + i] + u * a[l + i];
        return r;
      },
    })),
    (ij.prototype = Object.assign(Object.create(i6.prototype), {
      constructor: ij,
      interpolate_: function (e, t, i, n) {
        var r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          s = (e *= o) - o;
        for (i = 1 - (t = (i - t) / (n - t)), n = 0; n !== o; ++n)
          r[n] = a[s + n] * i + a[e + n] * t;
        return r;
      },
    })),
    (iq.prototype = Object.assign(Object.create(i6.prototype), {
      constructor: iq,
      interpolate_: function (e) {
        return this.copySampleValue_(e - 1);
      },
    })),
    Object.assign(iX, {
      toJSON: function (e) {
        var t = e.constructor;
        if (void 0 !== t.toJSON) t = t.toJSON(e);
        else {
          t = {
            name: e.name,
            times: sl.convertArray(e.times, Array),
            values: sl.convertArray(e.values, Array),
          };
          var i = e.getInterpolation();
          i !== e.DefaultInterpolation && (t.interpolation = i);
        }
        return (t.type = e.ValueTypeName), t;
      },
    }),
    Object.assign(iX.prototype, {
      constructor: iX,
      TimeBufferType: Float32Array,
      ValueBufferType: Float32Array,
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodDiscrete: function (e) {
        return new iq(this.times, this.values, this.getValueSize(), e);
      },
      InterpolantFactoryMethodLinear: function (e) {
        return new ij(this.times, this.values, this.getValueSize(), e);
      },
      InterpolantFactoryMethodSmooth: function (e) {
        return new i7(this.times, this.values, this.getValueSize(), e);
      },
      setInterpolation: function (e) {
        switch (e) {
          case 2300:
            var t = this.InterpolantFactoryMethodDiscrete;
            break;
          case 2301:
            t = this.InterpolantFactoryMethodLinear;
            break;
          case 2302:
            t = this.InterpolantFactoryMethodSmooth;
        }
        if (void 0 === t) {
          if (
            ((t =
              "unsupported interpolation for " +
              this.ValueTypeName +
              " keyframe track named " +
              this.name),
            void 0 === this.createInterpolant)
          ) {
            if (e !== this.DefaultInterpolation)
              this.setInterpolation(this.DefaultInterpolation);
            else throw Error(t);
          }
          return console.warn("THREE.KeyframeTrack:", t), this;
        }
        return (this.createInterpolant = t), this;
      },
      getInterpolation: function () {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return 2300;
          case this.InterpolantFactoryMethodLinear:
            return 2301;
          case this.InterpolantFactoryMethodSmooth:
            return 2302;
        }
      },
      getValueSize: function () {
        return this.values.length / this.times.length;
      },
      shift: function (e) {
        if (0 !== e)
          for (var t = this.times, i = 0, n = t.length; i !== n; ++i) t[i] += e;
        return this;
      },
      scale: function (e) {
        if (1 !== e)
          for (var t = this.times, i = 0, n = t.length; i !== n; ++i) t[i] *= e;
        return this;
      },
      trim: function (e, t) {
        for (
          var i = this.times, n = i.length, r = 0, a = n - 1;
          r !== n && i[r] < e;

        )
          ++r;
        for (; -1 !== a && i[a] > t; ) --a;
        return (
          ++a,
          (0 !== r || a !== n) &&
            (r >= a && (r = (a = Math.max(a, 1)) - 1),
            (e = this.getValueSize()),
            (this.times = sl.arraySlice(i, r, a)),
            (this.values = sl.arraySlice(this.values, r * e, a * e))),
          this
        );
      },
      validate: function () {
        var e = !0,
          t = this.getValueSize();
        0 != t - Math.floor(t) &&
          (console.error(
            "THREE.KeyframeTrack: Invalid value size in track.",
            this
          ),
          (e = !1));
        var i = this.times;
        t = this.values;
        var n = i.length;
        0 === n &&
          (console.error("THREE.KeyframeTrack: Track is empty.", this),
          (e = !1));
        for (var r = null, a = 0; a !== n; a++) {
          var o = i[a];
          if ("number" == typeof o && isNaN(o)) {
            console.error(
              "THREE.KeyframeTrack: Time is not a valid number.",
              this,
              a,
              o
            ),
              (e = !1);
            break;
          }
          if (null !== r && r > o) {
            console.error(
              "THREE.KeyframeTrack: Out of order keys.",
              this,
              a,
              o,
              r
            ),
              (e = !1);
            break;
          }
          r = o;
        }
        if (void 0 !== t && sl.isTypedArray(t)) {
          for (a = 0, i = t.length; a !== i; ++a)
            if (isNaN((n = t[a]))) {
              console.error(
                "THREE.KeyframeTrack: Value is not a valid number.",
                this,
                a,
                n
              ),
                (e = !1);
              break;
            }
        }
        return e;
      },
      optimize: function () {
        for (
          var e = this.times,
            t = this.values,
            i = this.getValueSize(),
            n = 2302 === this.getInterpolation(),
            r = 1,
            a = e.length - 1,
            o = 1;
          o < a;
          ++o
        ) {
          var s = !1,
            c = e[o];
          if (c !== e[o + 1] && (1 !== o || c !== c[0])) {
            if (n) s = !0;
            else {
              var l = o * i,
                h = l - i,
                u = l + i;
              for (c = 0; c !== i; ++c) {
                var p = t[l + c];
                if (p !== t[h + c] || p !== t[u + c]) {
                  s = !0;
                  break;
                }
              }
            }
          }
          if (s) {
            if (o !== r)
              for (e[r] = e[o], s = o * i, l = r * i, c = 0; c !== i; ++c)
                t[l + c] = t[s + c];
            ++r;
          }
        }
        if (0 < a) {
          for (c = 0, e[r] = e[a], s = a * i, l = r * i; c !== i; ++c)
            t[l + c] = t[s + c];
          ++r;
        }
        return (
          r !== e.length &&
            ((this.times = sl.arraySlice(e, 0, r)),
            (this.values = sl.arraySlice(t, 0, r * i))),
          this
        );
      },
      clone: function () {
        var e = sl.arraySlice(this.times, 0),
          t = sl.arraySlice(this.values, 0);
        return (
          ((e = new this.constructor(this.name, e, t)).createInterpolant =
            this.createInterpolant),
          e
        );
      },
    }),
    (iY.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: iY,
      ValueTypeName: "bool",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0,
    })),
    (iZ.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: iZ,
      ValueTypeName: "color",
    })),
    (iJ.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: iJ,
      ValueTypeName: "number",
    })),
    (iQ.prototype = Object.assign(Object.create(i6.prototype), {
      constructor: iQ,
      interpolate_: function (e, t, i, r) {
        var a = this.resultBuffer,
          o = this.sampleValues,
          s = this.valueSize;
        for (e *= s, t = (i - t) / (r - t), i = e + s; e !== i; e += 4)
          n.slerpFlat(a, 0, o, e - s, o, e, t);
        return a;
      },
    })),
    (iK.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: iK,
      ValueTypeName: "quaternion",
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodLinear: function (e) {
        return new iQ(this.times, this.values, this.getValueSize(), e);
      },
      InterpolantFactoryMethodSmooth: void 0,
    })),
    (i9.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: i9,
      ValueTypeName: "string",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0,
    })),
    (ne.prototype = Object.assign(Object.create(iX.prototype), {
      constructor: ne,
      ValueTypeName: "vector",
    })),
    Object.assign(nt, {
      parse: function (e) {
        for (
          var t = [], i = e.tracks, n = 1 / (e.fps || 1), r = 0, a = i.length;
          r !== a;
          ++r
        )
          t.push(ni(i[r]).scale(n));
        return new nt(e.name, e.duration, t);
      },
      toJSON: function (e) {
        var t = [],
          i = e.tracks;
        e = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid };
        for (var n = 0, r = i.length; n !== r; ++n) t.push(iX.toJSON(i[n]));
        return e;
      },
      CreateFromMorphTargetSequence: function (e, t, i, n) {
        for (var r = t.length, a = [], o = 0; o < r; o++) {
          var s = [],
            c = [];
          s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
          var l = sl.getKeyframeOrder(s);
          (s = sl.sortedArray(s, 1, l)),
            (c = sl.sortedArray(c, 1, l)),
            n || 0 !== s[0] || (s.push(r), c.push(c[0])),
            a.push(
              new iJ(".morphTargetInfluences[" + t[o].name + "]", s, c).scale(
                1 / i
              )
            );
        }
        return new nt(e, -1, a);
      },
      findByName: function (e, t) {
        var i = e;
        for (
          Array.isArray(e) ||
            (i = (e.geometry && e.geometry.animations) || e.animations),
            e = 0;
          e < i.length;
          e++
        )
          if (i[e].name === t) return i[e];
        return null;
      },
      CreateClipsFromMorphTargetSequences: function (e, t, i) {
        for (
          var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length;
          a < o;
          a++
        ) {
          var s = e[a],
            c = s.name.match(r);
          if (c && 1 < c.length) {
            var l = c[1];
            (c = n[l]) || (n[l] = c = []), c.push(s);
          }
        }
        for (l in ((e = []), n))
          e.push(nt.CreateFromMorphTargetSequence(l, n[l], t, i));
        return e;
      },
      parseAnimation: function (e, t) {
        if (!e)
          return (
            console.error(
              "THREE.AnimationClip: No animation in JSONLoader data."
            ),
            null
          );
        var i = function (e, t, i, n, r) {
            if (0 !== i.length) {
              var a = [],
                o = [];
              sl.flattenJSON(i, a, o, n),
                0 !== a.length && r.push(new e(t, a, o));
            }
          },
          n = [],
          r = e.name || "default",
          a = e.length || -1,
          o = e.fps || 30;
        e = e.hierarchy || [];
        for (var s = 0; s < e.length; s++) {
          var c = e[s].keys;
          if (c && 0 !== c.length) {
            if (c[0].morphTargets) {
              a = {};
              for (var l = 0; l < c.length; l++)
                if (c[l].morphTargets)
                  for (var h = 0; h < c[l].morphTargets.length; h++)
                    a[c[l].morphTargets[h]] = -1;
              for (var u in a) {
                var p = [],
                  d = [];
                for (h = 0; h !== c[l].morphTargets.length; ++h) {
                  var f = c[l];
                  p.push(f.time), d.push(f.morphTarget === u ? 1 : 0);
                }
                n.push(new iJ(".morphTargetInfluence[" + u + "]", p, d));
              }
              a = a.length * (o || 1);
            } else
              i(
                ne,
                (l = ".bones[" + t[s].name + "]") + ".position",
                c,
                "pos",
                n
              ),
                i(iK, l + ".quaternion", c, "rot", n),
                i(ne, l + ".scale", c, "scl", n);
          }
        }
        return 0 === n.length ? null : new nt(r, a, n);
      },
    }),
    Object.assign(nt.prototype, {
      resetDuration: function () {
        for (var e = 0, t = 0, i = this.tracks.length; t !== i; ++t) {
          var n = this.tracks[t];
          e = Math.max(e, n.times[n.times.length - 1]);
        }
        return (this.duration = e), this;
      },
      trim: function () {
        for (var e = 0; e < this.tracks.length; e++)
          this.tracks[e].trim(0, this.duration);
        return this;
      },
      validate: function () {
        for (var e = !0, t = 0; t < this.tracks.length; t++)
          e = e && this.tracks[t].validate();
        return e;
      },
      optimize: function () {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this;
      },
      clone: function () {
        for (var e = [], t = 0; t < this.tracks.length; t++)
          e.push(this.tracks[t].clone());
        return new nt(this.name, this.duration, e);
      },
    });
  var sh = {
      enabled: !1,
      files: {},
      add: function (e, t) {
        !1 !== this.enabled && (this.files[e] = t);
      },
      get: function (e) {
        if (!1 !== this.enabled) return this.files[e];
      },
      remove: function (e) {
        delete this.files[e];
      },
      clear: function () {
        this.files = {};
      },
    },
    su = new nn();
  Object.assign(nr.prototype, {
    load: function () {},
    parse: function () {},
    setCrossOrigin: function (e) {
      return (this.crossOrigin = e), this;
    },
    setPath: function (e) {
      return (this.path = e), this;
    },
    setResourcePath: function (e) {
      return (this.resourcePath = e), this;
    },
  });
  var sp = {};
  (na.prototype = Object.assign(Object.create(nr.prototype), {
    constructor: na,
    load: function (e, t, i, n) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      var r = this,
        a = sh.get(e);
      if (void 0 !== a)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(a), r.manager.itemEnd(e);
          }, 0),
          a
        );
      if (void 0 !== sp[e])
        sp[e].push({ onLoad: t, onProgress: i, onError: n });
      else {
        var o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (o) {
          i = o[1];
          var s = !!o[2];
          (o = decodeURIComponent((o = o[3]))), s && (o = atob(o));
          try {
            var c = (this.responseType || "").toLowerCase();
            switch (c) {
              case "arraybuffer":
              case "blob":
                var l = new Uint8Array(o.length);
                for (s = 0; s < o.length; s++) l[s] = o.charCodeAt(s);
                var h =
                  "blob" === c ? new Blob([l.buffer], { type: i }) : l.buffer;
                break;
              case "document":
                h = new DOMParser().parseFromString(o, i);
                break;
              case "json":
                h = JSON.parse(o);
                break;
              default:
                h = o;
            }
            setTimeout(function () {
              t && t(h), r.manager.itemEnd(e);
            }, 0);
          } catch (u) {
            setTimeout(function () {
              n && n(u), r.manager.itemError(e), r.manager.itemEnd(e);
            }, 0);
          }
        } else {
          (sp[e] = []), sp[e].push({ onLoad: t, onProgress: i, onError: n });
          var p = new XMLHttpRequest();
          for (s in (p.open("GET", e, !0),
          p.addEventListener(
            "load",
            function (t) {
              var i = this.response,
                n = sp[e];
              if ((delete sp[e], 200 === this.status || 0 === this.status)) {
                0 === this.status &&
                  console.warn("THREE.FileLoader: HTTP Status 0 received."),
                  sh.add(e, i);
                for (var a = 0, o = n.length; a < o; a++) {
                  var s = n[a];
                  s.onLoad && s.onLoad(i);
                }
              } else {
                for (a = 0, o = n.length; a < o; a++)
                  (s = n[a]).onError && s.onError(t);
                r.manager.itemError(e);
              }
              r.manager.itemEnd(e);
            },
            !1
          ),
          p.addEventListener(
            "progress",
            function (t) {
              for (var i = sp[e], n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                a.onProgress && a.onProgress(t);
              }
            },
            !1
          ),
          p.addEventListener(
            "error",
            function (t) {
              var i = sp[e];
              delete sp[e];
              for (var n = 0, a = i.length; n < a; n++) {
                var o = i[n];
                o.onError && o.onError(t);
              }
              r.manager.itemError(e), r.manager.itemEnd(e);
            },
            !1
          ),
          p.addEventListener(
            "abort",
            function (t) {
              var i = sp[e];
              delete sp[e];
              for (var n = 0, a = i.length; n < a; n++) {
                var o = i[n];
                o.onError && o.onError(t);
              }
              r.manager.itemError(e), r.manager.itemEnd(e);
            },
            !1
          ),
          void 0 !== this.responseType && (p.responseType = this.responseType),
          void 0 !== this.withCredentials &&
            (p.withCredentials = this.withCredentials),
          p.overrideMimeType &&
            p.overrideMimeType(
              void 0 !== this.mimeType ? this.mimeType : "text/plain"
            ),
          this.requestHeader))
            p.setRequestHeader(s, this.requestHeader[s]);
          p.send(null);
        }
        return r.manager.itemStart(e), p;
      }
    },
    setResponseType: function (e) {
      return (this.responseType = e), this;
    },
    setWithCredentials: function (e) {
      return (this.withCredentials = e), this;
    },
    setMimeType: function (e) {
      return (this.mimeType = e), this;
    },
    setRequestHeader: function (e) {
      return (this.requestHeader = e), this;
    },
  })),
    (no.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: no,
      load: function (e, t, i, n) {
        var r = this,
          a = new na(r.manager);
        a.setPath(r.path),
          a.load(
            e,
            function (e) {
              t(r.parse(JSON.parse(e)));
            },
            i,
            n
          );
      },
      parse: function (e) {
        for (var t = [], i = 0; i < e.length; i++) {
          var n = nt.parse(e[i]);
          t.push(n);
        }
        return t;
      },
    })),
    (ns.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: ns,
      load: function (e, t, i, n) {
        function r(r) {
          c.load(
            e[r],
            function (e) {
              (e = a.parse(e, !0)),
                (o[r] = {
                  width: e.width,
                  height: e.height,
                  format: e.format,
                  mipmaps: e.mipmaps,
                }),
                6 === (l += 1) &&
                  (1 === e.mipmapCount && (s.minFilter = 1006),
                  (s.format = e.format),
                  (s.needsUpdate = !0),
                  t && t(s));
            },
            i,
            n
          );
        }
        var a = this,
          o = [],
          s = new tG();
        s.image = o;
        var c = new na(this.manager);
        if (
          (c.setPath(this.path),
          c.setResponseType("arraybuffer"),
          Array.isArray(e))
        )
          for (var l = 0, h = 0, u = e.length; h < u; ++h) r(h);
        else
          c.load(
            e,
            function (e) {
              if ((e = a.parse(e, !0)).isCubemap)
                for (
                  var i = e.mipmaps.length / e.mipmapCount, n = 0;
                  n < i;
                  n++
                ) {
                  o[n] = { mipmaps: [] };
                  for (var r = 0; r < e.mipmapCount; r++)
                    o[n].mipmaps.push(e.mipmaps[n * e.mipmapCount + r]),
                      (o[n].format = e.format),
                      (o[n].width = e.width),
                      (o[n].height = e.height);
                }
              else
                (s.image.width = e.width),
                  (s.image.height = e.height),
                  (s.mipmaps = e.mipmaps);
              1 === e.mipmapCount && (s.minFilter = 1006),
                (s.format = e.format),
                (s.needsUpdate = !0),
                t && t(s);
            },
            i,
            n
          );
        return s;
      },
    })),
    (nc.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nc,
      load: function (e, t, i, n) {
        var r = this,
          a = new Q(),
          o = new na(this.manager);
        return (
          o.setResponseType("arraybuffer"),
          o.setPath(this.path),
          o.load(
            e,
            function (e) {
              (e = r.parse(e)) &&
                (void 0 !== e.image
                  ? (a.image = e.image)
                  : void 0 !== e.data &&
                    ((a.image.width = e.width),
                    (a.image.height = e.height),
                    (a.image.data = e.data)),
                (a.wrapS = void 0 !== e.wrapS ? e.wrapS : 1001),
                (a.wrapT = void 0 !== e.wrapT ? e.wrapT : 1001),
                (a.magFilter = void 0 !== e.magFilter ? e.magFilter : 1006),
                (a.minFilter = void 0 !== e.minFilter ? e.minFilter : 1006),
                (a.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1),
                void 0 !== e.format && (a.format = e.format),
                void 0 !== e.type && (a.type = e.type),
                void 0 !== e.mipmaps &&
                  ((a.mipmaps = e.mipmaps), (a.minFilter = 1008)),
                1 === e.mipmapCount && (a.minFilter = 1006),
                (a.needsUpdate = !0),
                t && t(a, e));
            },
            i,
            n
          ),
          a
        );
      },
    })),
    (nl.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nl,
      load: function (e, t, i, n) {
        function r() {
          c.removeEventListener("load", r, !1),
            c.removeEventListener("error", a, !1),
            sh.add(e, this),
            t && t(this),
            o.manager.itemEnd(e);
        }
        function a(t) {
          c.removeEventListener("load", r, !1),
            c.removeEventListener("error", a, !1),
            n && n(t),
            o.manager.itemError(e),
            o.manager.itemEnd(e);
        }
        void 0 !== this.path && (e = this.path + e),
          (e = this.manager.resolveURL(e));
        var o = this,
          s = sh.get(e);
        if (void 0 !== s)
          return (
            o.manager.itemStart(e),
            setTimeout(function () {
              t && t(s), o.manager.itemEnd(e);
            }, 0),
            s
          );
        var c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        return (
          c.addEventListener("load", r, !1),
          c.addEventListener("error", a, !1),
          "data:" !== e.substr(0, 5) &&
            void 0 !== this.crossOrigin &&
            (c.crossOrigin = this.crossOrigin),
          o.manager.itemStart(e),
          (c.src = e),
          c
        );
      },
    })),
    (nh.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nh,
      load: function (e, t, i, n) {
        function r(i) {
          o.load(
            e[i],
            function (e) {
              (a.images[i] = e), 6 == ++s && ((a.needsUpdate = !0), t && t(a));
            },
            void 0,
            n
          );
        }
        var a = new em(),
          o = new nl(this.manager);
        o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
        var s = 0;
        for (i = 0; i < e.length; ++i) r(i);
        return a;
      },
    })),
    (nu.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nu,
      load: function (e, t, i, n) {
        var r = new o(),
          a = new nl(this.manager);
        return (
          a.setCrossOrigin(this.crossOrigin),
          a.setPath(this.path),
          a.load(
            e,
            function (i) {
              (r.image = i),
                (i =
                  0 < e.search(/\.jpe?g($|\?)/i) ||
                  0 === e.search(/^data:image\/jpeg/)),
                (r.format = i ? 1022 : 1023),
                (r.needsUpdate = !0),
                void 0 !== t && t(r);
            },
            i,
            n
          ),
          r
        );
      },
    })),
    Object.assign(np.prototype, {
      getPoint: function () {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null;
      },
      getPointAt: function (e, t) {
        return (e = this.getUtoTmapping(e)), this.getPoint(e, t);
      },
      getPoints: function (e) {
        void 0 === e && (e = 5);
        for (var t = [], i = 0; i <= e; i++) t.push(this.getPoint(i / e));
        return t;
      },
      getSpacedPoints: function (e) {
        void 0 === e && (e = 5);
        for (var t = [], i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
        return t;
      },
      getLength: function () {
        var e = this.getLengths();
        return e[e.length - 1];
      },
      getLengths: function (e) {
        if (
          (void 0 === e && (e = this.arcLengthDivisions),
          this.cacheArcLengths &&
            this.cacheArcLengths.length === e + 1 &&
            !this.needsUpdate)
        )
          return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t,
          i = [],
          n = this.getPoint(0),
          r = 0;
        for (i.push(0), t = 1; t <= e; t++) {
          var a = this.getPoint(t / e);
          (r += a.distanceTo(n)), i.push(r), (n = a);
        }
        return (this.cacheArcLengths = i);
      },
      updateArcLengths: function () {
        (this.needsUpdate = !0), this.getLengths();
      },
      getUtoTmapping: function (e, t) {
        var i = this.getLengths(),
          n = i.length;
        t = t || e * i[n - 1];
        for (var r, a = 0, o = n - 1; a <= o; )
          if (0 > (r = i[(e = Math.floor(a + (o - a) / 2))] - t)) a = e + 1;
          else if (0 < r) o = e - 1;
          else {
            o = e;
            break;
          }
        return i[(e = o)] === t
          ? e / (n - 1)
          : ((a = i[e]), (e + (t - a) / (i[e + 1] - a)) / (n - 1));
      },
      getTangent: function (e) {
        var t = e - 1e-4;
        return (
          0 > t && (t = 0),
          1 < (e += 1e-4) && (e = 1),
          (t = this.getPoint(t)),
          this.getPoint(e).clone().sub(t).normalize()
        );
      },
      getTangentAt: function (e) {
        return (e = this.getUtoTmapping(e)), this.getTangent(e);
      },
      computeFrenetFrames: function (e, t) {
        var i,
          n = new r(),
          a = [],
          o = [],
          s = [],
          c = new r(),
          l = new h();
        for (i = 0; i <= e; i++) {
          var u = i / e;
          (a[i] = this.getTangentAt(u)), a[i].normalize();
        }
        (o[0] = new r()),
          (s[0] = new r()),
          (i = Number.MAX_VALUE),
          (u = Math.abs(a[0].x));
        var p = Math.abs(a[0].y),
          d = Math.abs(a[0].z);
        for (
          u <= i && ((i = u), n.set(1, 0, 0)),
            p <= i && ((i = p), n.set(0, 1, 0)),
            d <= i && n.set(0, 0, 1),
            c.crossVectors(a[0], n).normalize(),
            o[0].crossVectors(a[0], c),
            s[0].crossVectors(a[0], o[0]),
            i = 1;
          i <= e;
          i++
        )
          (o[i] = o[i - 1].clone()),
            (s[i] = s[i - 1].clone()),
            c.crossVectors(a[i - 1], a[i]),
            c.length() > Number.EPSILON &&
              (c.normalize(),
              (n = Math.acos(rH.clamp(a[i - 1].dot(a[i]), -1, 1))),
              o[i].applyMatrix4(l.makeRotationAxis(c, n))),
            s[i].crossVectors(a[i], o[i]);
        if (!0 === t)
          for (
            n = Math.acos(rH.clamp(o[0].dot(o[e]), -1, 1)),
              n /= e,
              0 < a[0].dot(c.crossVectors(o[0], o[e])) && (n = -n),
              i = 1;
            i <= e;
            i++
          )
            o[i].applyMatrix4(l.makeRotationAxis(a[i], n * i)),
              s[i].crossVectors(a[i], o[i]);
        return { tangents: a, normals: o, binormals: s };
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (this.arcLengthDivisions = e.arcLengthDivisions), this;
      },
      toJSON: function () {
        var e = {
          metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
        };
        return (
          (e.arcLengthDivisions = this.arcLengthDivisions),
          (e.type = this.type),
          e
        );
      },
      fromJSON: function (e) {
        return (this.arcLengthDivisions = e.arcLengthDivisions), this;
      },
    }),
    (nd.prototype = Object.create(np.prototype)),
    (nd.prototype.constructor = nd),
    (nd.prototype.isEllipseCurve = !0),
    (nd.prototype.getPoint = function (e, t) {
      t = t || new i();
      for (
        var n = 2 * Math.PI,
          r = this.aEndAngle - this.aStartAngle,
          a = Math.abs(r) < Number.EPSILON;
        0 > r;

      )
        r += n;
      for (; r > n; ) r -= n;
      r < Number.EPSILON && (r = a ? 0 : n),
        !0 !== this.aClockwise || a || (r = r === n ? -n : r - n),
        (n = this.aStartAngle + e * r),
        (e = this.aX + this.xRadius * Math.cos(n));
      var o = this.aY + this.yRadius * Math.sin(n);
      return (
        0 !== this.aRotation &&
          ((n = Math.cos(this.aRotation)),
          (r = Math.sin(this.aRotation)),
          (a = e - this.aX),
          (o -= this.aY),
          (e = a * n - o * r + this.aX),
          (o = a * r + o * n + this.aY)),
        t.set(e, o)
      );
    }),
    (nd.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }),
    (nd.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (
        (e.aX = this.aX),
        (e.aY = this.aY),
        (e.xRadius = this.xRadius),
        (e.yRadius = this.yRadius),
        (e.aStartAngle = this.aStartAngle),
        (e.aEndAngle = this.aEndAngle),
        (e.aClockwise = this.aClockwise),
        (e.aRotation = this.aRotation),
        e
      );
    }),
    (nd.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }),
    (nf.prototype = Object.create(nd.prototype)),
    (nf.prototype.constructor = nf),
    (nf.prototype.isArcCurve = !0);
  var sd = new r(),
    sf = new nm(),
    sm = new nm(),
    sg = new nm();
  (ng.prototype = Object.create(np.prototype)),
    (ng.prototype.constructor = ng),
    (ng.prototype.isCatmullRomCurve3 = !0),
    (ng.prototype.getPoint = function (e, t) {
      t = t || new r();
      var i = this.points,
        n = i.length,
        a = Math.floor((e *= n - (this.closed ? 0 : 1)));
      if (
        ((e -= a),
        this.closed
          ? (a += 0 < a ? 0 : (Math.floor(Math.abs(a) / n) + 1) * n)
          : 0 === e && a === n - 1 && ((a = n - 2), (e = 1)),
        this.closed || 0 < a)
      )
        var o = i[(a - 1) % n];
      else sd.subVectors(i[0], i[1]).add(i[0]), (o = sd);
      var s = i[a % n],
        c = i[(a + 1) % n];
      if (
        (this.closed || a + 2 < n
          ? (i = i[(a + 2) % n])
          : (sd.subVectors(i[n - 1], i[n - 2]).add(i[n - 1]), (i = sd)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        var l = "chordal" === this.curveType ? 0.5 : 0.25;
        (n = Math.pow(o.distanceToSquared(s), l)),
          (a = Math.pow(s.distanceToSquared(c), l)),
          (l = Math.pow(c.distanceToSquared(i), l)),
          1e-4 > a && (a = 1),
          1e-4 > n && (n = a),
          1e-4 > l && (l = a),
          sf.initNonuniformCatmullRom(o.x, s.x, c.x, i.x, n, a, l),
          sm.initNonuniformCatmullRom(o.y, s.y, c.y, i.y, n, a, l),
          sg.initNonuniformCatmullRom(o.z, s.z, c.z, i.z, n, a, l);
      } else
        "catmullrom" === this.curveType &&
          (sf.initCatmullRom(o.x, s.x, c.x, i.x, this.tension),
          sm.initCatmullRom(o.y, s.y, c.y, i.y, this.tension),
          sg.initCatmullRom(o.z, s.z, c.z, i.z, this.tension));
      return t.set(sf.calc(e), sm.calc(e), sg.calc(e)), t;
    }),
    (ng.prototype.copy = function (e) {
      np.prototype.copy.call(this, e), (this.points = []);
      for (var t = 0, i = e.points.length; t < i; t++)
        this.points.push(e.points[t].clone());
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }),
    (ng.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      e.points = [];
      for (var t = 0, i = this.points.length; t < i; t++)
        e.points.push(this.points[t].toArray());
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }),
    (ng.prototype.fromJSON = function (e) {
      np.prototype.fromJSON.call(this, e), (this.points = []);
      for (var t = 0, i = e.points.length; t < i; t++) {
        var n = e.points[t];
        this.points.push(new r().fromArray(n));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }),
    (nx.prototype = Object.create(np.prototype)),
    (nx.prototype.constructor = nx),
    (nx.prototype.isCubicBezierCurve = !0),
    (nx.prototype.getPoint = function (e, t) {
      t = t || new i();
      var n = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
      return t.set(ny(e, n.x, r.x, a.x, o.x), ny(e, n.y, r.y, a.y, o.y)), t;
    }),
    (nx.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }),
    (nx.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }),
    (nx.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }),
    (n_.prototype = Object.create(np.prototype)),
    (n_.prototype.constructor = n_),
    (n_.prototype.isCubicBezierCurve3 = !0),
    (n_.prototype.getPoint = function (e, t) {
      t = t || new r();
      var i = this.v0,
        n = this.v1,
        a = this.v2,
        o = this.v3;
      return (
        t.set(
          ny(e, i.x, n.x, a.x, o.x),
          ny(e, i.y, n.y, a.y, o.y),
          ny(e, i.z, n.z, a.z, o.z)
        ),
        t
      );
    }),
    (n_.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }),
    (n_.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }),
    (n_.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }),
    (n8.prototype = Object.create(np.prototype)),
    (n8.prototype.constructor = n8),
    (n8.prototype.isLineCurve = !0),
    (n8.prototype.getPoint = function (e, t) {
      return (
        (t = t || new i()),
        1 === e
          ? t.copy(this.v2)
          : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
        t
      );
    }),
    (n8.prototype.getPointAt = function (e, t) {
      return this.getPoint(e, t);
    }),
    (n8.prototype.getTangent = function () {
      return this.v2.clone().sub(this.v1).normalize();
    }),
    (n8.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }),
    (n8.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
    }),
    (n8.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }),
    (nw.prototype = Object.create(np.prototype)),
    (nw.prototype.constructor = nw),
    (nw.prototype.isLineCurve3 = !0),
    (nw.prototype.getPoint = function (e, t) {
      return (
        (t = t || new r()),
        1 === e
          ? t.copy(this.v2)
          : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
        t
      );
    }),
    (nw.prototype.getPointAt = function (e, t) {
      return this.getPoint(e, t);
    }),
    (nw.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }),
    (nw.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
    }),
    (nw.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }),
    (nb.prototype = Object.create(np.prototype)),
    (nb.prototype.constructor = nb),
    (nb.prototype.isQuadraticBezierCurve = !0),
    (nb.prototype.getPoint = function (e, t) {
      t = t || new i();
      var n = this.v0,
        r = this.v1,
        a = this.v2;
      return t.set(n$(e, n.x, r.x, a.x), n$(e, n.y, r.y, a.y)), t;
    }),
    (nb.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }),
    (nb.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }),
    (nb.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }),
    (nM.prototype = Object.create(np.prototype)),
    (nM.prototype.constructor = nM),
    (nM.prototype.isQuadraticBezierCurve3 = !0),
    (nM.prototype.getPoint = function (e, t) {
      t = t || new r();
      var i = this.v0,
        n = this.v1,
        a = this.v2;
      return (
        t.set(n$(e, i.x, n.x, a.x), n$(e, i.y, n.y, a.y), n$(e, i.z, n.z, a.z)),
        t
      );
    }),
    (nM.prototype.copy = function (e) {
      return (
        np.prototype.copy.call(this, e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }),
    (nM.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }),
    (nM.prototype.fromJSON = function (e) {
      return (
        np.prototype.fromJSON.call(this, e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }),
    (nS.prototype = Object.create(np.prototype)),
    (nS.prototype.constructor = nS),
    (nS.prototype.isSplineCurve = !0),
    (nS.prototype.getPoint = function (e, t) {
      t = t || new i();
      var n = this.points,
        r = (n.length - 1) * e;
      (e = Math.floor(r)), (r -= e);
      var a = n[0 === e ? e : e - 1],
        o = n[e],
        s = n[e > n.length - 2 ? n.length - 1 : e + 1];
      return (
        (n = n[e > n.length - 3 ? n.length - 1 : e + 2]),
        t.set(nv(r, a.x, o.x, s.x, n.x), nv(r, a.y, o.y, s.y, n.y)),
        t
      );
    }),
    (nS.prototype.copy = function (e) {
      np.prototype.copy.call(this, e), (this.points = []);
      for (var t = 0, i = e.points.length; t < i; t++)
        this.points.push(e.points[t].clone());
      return this;
    }),
    (nS.prototype.toJSON = function () {
      var e = np.prototype.toJSON.call(this);
      e.points = [];
      for (var t = 0, i = this.points.length; t < i; t++)
        e.points.push(this.points[t].toArray());
      return e;
    }),
    (nS.prototype.fromJSON = function (e) {
      np.prototype.fromJSON.call(this, e), (this.points = []);
      for (var t = 0, n = e.points.length; t < n; t++) {
        var r = e.points[t];
        this.points.push(new i().fromArray(r));
      }
      return this;
    });
  var sv = Object.freeze({
    __proto__: null,
    ArcCurve: nf,
    CatmullRomCurve3: ng,
    CubicBezierCurve: nx,
    CubicBezierCurve3: n_,
    EllipseCurve: nd,
    LineCurve: n8,
    LineCurve3: nw,
    QuadraticBezierCurve: nb,
    QuadraticBezierCurve3: nM,
    SplineCurve: nS,
  });
  (nT.prototype = Object.assign(Object.create(np.prototype), {
    constructor: nT,
    add: function (e) {
      this.curves.push(e);
    },
    closePath: function () {
      var e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
      e.equals(t) || this.curves.push(new n8(t, e));
    },
    getPoint: function (e) {
      var t = e * this.getLength(),
        i = this.getCurveLengths();
      for (e = 0; e < i.length; ) {
        if (i[e] >= t)
          return (
            (t = i[e] - t),
            (i = (e = this.curves[e]).getLength()),
            e.getPointAt(0 === i ? 0 : 1 - t / i)
          );
        e++;
      }
      return null;
    },
    getLength: function () {
      var e = this.getCurveLengths();
      return e[e.length - 1];
    },
    updateArcLengths: function () {
      (this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths();
    },
    getCurveLengths: function () {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      for (var e = [], t = 0, i = 0, n = this.curves.length; i < n; i++)
        e.push((t += this.curves[i].getLength()));
      return (this.cacheLengths = e);
    },
    getSpacedPoints: function (e) {
      void 0 === e && (e = 40);
      for (var t = [], i = 0; i <= e; i++) t.push(this.getPoint(i / e));
      return this.autoClose && t.push(t[0]), t;
    },
    getPoints: function (e) {
      e = e || 12;
      for (var t, i = [], n = 0, r = this.curves; n < r.length; n++) {
        var a = r[n];
        a = a.getPoints(
          a && a.isEllipseCurve
            ? 2 * e
            : a && (a.isLineCurve || a.isLineCurve3)
            ? 1
            : a && a.isSplineCurve
            ? e * a.points.length
            : e
        );
        for (var o = 0; o < a.length; o++) {
          var s = a[o];
          (t && t.equals(s)) || (i.push(s), (t = s));
        }
      }
      return (
        this.autoClose &&
          1 < i.length &&
          !i[i.length - 1].equals(i[0]) &&
          i.push(i[0]),
        i
      );
    },
    copy: function (e) {
      np.prototype.copy.call(this, e), (this.curves = []);
      for (var t = 0, i = e.curves.length; t < i; t++)
        this.curves.push(e.curves[t].clone());
      return (this.autoClose = e.autoClose), this;
    },
    toJSON: function () {
      var e = np.prototype.toJSON.call(this);
      (e.autoClose = this.autoClose), (e.curves = []);
      for (var t = 0, i = this.curves.length; t < i; t++)
        e.curves.push(this.curves[t].toJSON());
      return e;
    },
    fromJSON: function (e) {
      np.prototype.fromJSON.call(this, e),
        (this.autoClose = e.autoClose),
        (this.curves = []);
      for (var t = 0, i = e.curves.length; t < i; t++) {
        var n = e.curves[t];
        this.curves.push(new sv[n.type]().fromJSON(n));
      }
      return this;
    },
  })),
    (nE.prototype = Object.assign(Object.create(nT.prototype), {
      constructor: nE,
      setFromPoints: function (e) {
        this.moveTo(e[0].x, e[0].y);
        for (var t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
        return this;
      },
      moveTo: function (e, t) {
        return this.currentPoint.set(e, t), this;
      },
      lineTo: function (e, t) {
        var n = new n8(this.currentPoint.clone(), new i(e, t));
        return this.curves.push(n), this.currentPoint.set(e, t), this;
      },
      quadraticCurveTo: function (e, t, n, r) {
        return (
          (e = new nb(this.currentPoint.clone(), new i(e, t), new i(n, r))),
          this.curves.push(e),
          this.currentPoint.set(n, r),
          this
        );
      },
      bezierCurveTo: function (e, t, n, r, a, o) {
        return (
          (e = new nx(
            this.currentPoint.clone(),
            new i(e, t),
            new i(n, r),
            new i(a, o)
          )),
          this.curves.push(e),
          this.currentPoint.set(a, o),
          this
        );
      },
      splineThru: function (e) {
        var t = [this.currentPoint.clone()].concat(e);
        return (
          (t = new nS(t)),
          this.curves.push(t),
          this.currentPoint.copy(e[e.length - 1]),
          this
        );
      },
      arc: function (e, t, i, n, r, a) {
        return (
          this.absarc(
            e + this.currentPoint.x,
            t + this.currentPoint.y,
            i,
            n,
            r,
            a
          ),
          this
        );
      },
      absarc: function (e, t, i, n, r, a) {
        return this.absellipse(e, t, i, i, n, r, a), this;
      },
      ellipse: function (e, t, i, n, r, a, o, s) {
        return (
          this.absellipse(
            e + this.currentPoint.x,
            t + this.currentPoint.y,
            i,
            n,
            r,
            a,
            o,
            s
          ),
          this
        );
      },
      absellipse: function (e, t, i, n, r, a, o, s) {
        return (
          (e = new nd(e, t, i, n, r, a, o, s)),
          0 < this.curves.length &&
            ((t = e.getPoint(0)).equals(this.currentPoint) ||
              this.lineTo(t.x, t.y)),
          this.curves.push(e),
          (e = e.getPoint(1)),
          this.currentPoint.copy(e),
          this
        );
      },
      copy: function (e) {
        return (
          nT.prototype.copy.call(this, e),
          this.currentPoint.copy(e.currentPoint),
          this
        );
      },
      toJSON: function () {
        var e = nT.prototype.toJSON.call(this);
        return (e.currentPoint = this.currentPoint.toArray()), e;
      },
      fromJSON: function (e) {
        return (
          nT.prototype.fromJSON.call(this, e),
          this.currentPoint.fromArray(e.currentPoint),
          this
        );
      },
    })),
    (n1.prototype = Object.assign(Object.create(nE.prototype), {
      constructor: n1,
      getPointsHoles: function (e) {
        for (var t = [], i = 0, n = this.holes.length; i < n; i++)
          t[i] = this.holes[i].getPoints(e);
        return t;
      },
      extractPoints: function (e) {
        return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
      },
      copy: function (e) {
        nE.prototype.copy.call(this, e), (this.holes = []);
        for (var t = 0, i = e.holes.length; t < i; t++)
          this.holes.push(e.holes[t].clone());
        return this;
      },
      toJSON: function () {
        var e = nE.prototype.toJSON.call(this);
        (e.uuid = this.uuid), (e.holes = []);
        for (var t = 0, i = this.holes.length; t < i; t++)
          e.holes.push(this.holes[t].toJSON());
        return e;
      },
      fromJSON: function (e) {
        nE.prototype.fromJSON.call(this, e),
          (this.uuid = e.uuid),
          (this.holes = []);
        for (var t = 0, i = e.holes.length; t < i; t++) {
          var n = e.holes[t];
          this.holes.push(new nE().fromJSON(n));
        }
        return this;
      },
    })),
    (n0.prototype = Object.assign(Object.create(d.prototype), {
      constructor: n0,
      isLight: !0,
      copy: function (e) {
        return (
          d.prototype.copy.call(this, e),
          this.color.copy(e.color),
          (this.intensity = e.intensity),
          this
        );
      },
      toJSON: function (e) {
        return (
          ((e = d.prototype.toJSON.call(this, e)).object.color =
            this.color.getHex()),
          (e.object.intensity = this.intensity),
          void 0 !== this.groundColor &&
            (e.object.groundColor = this.groundColor.getHex()),
          void 0 !== this.distance && (e.object.distance = this.distance),
          void 0 !== this.angle && (e.object.angle = this.angle),
          void 0 !== this.decay && (e.object.decay = this.decay),
          void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
          void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
          e
        );
      },
    })),
    (nL.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: nL,
      isHemisphereLight: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          this.groundColor.copy(e.groundColor),
          this
        );
      },
    })),
    Object.assign(nA.prototype, {
      _projScreenMatrix: new h(),
      _lightPositionWorld: new r(),
      _lookTarget: new r(),
      getViewportCount: function () {
        return this._viewportCount;
      },
      getFrustum: function () {
        return this._frustum;
      },
      updateMatrices: function (e) {
        var t = this.camera,
          i = this.matrix,
          n = this._projScreenMatrix,
          r = this._lookTarget,
          a = this._lightPositionWorld;
        a.setFromMatrixPosition(e.matrixWorld),
          t.position.copy(a),
          r.setFromMatrixPosition(e.target.matrixWorld),
          t.lookAt(r),
          t.updateMatrixWorld(),
          n.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          this._frustum.setFromMatrix(n),
          i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          i.multiply(t.projectionMatrix),
          i.multiply(t.matrixWorldInverse);
      },
      getViewport: function (e) {
        return this._viewports[e];
      },
      getFrameExtents: function () {
        return this._frameExtents;
      },
      copy: function (e) {
        return (
          (this.camera = e.camera.clone()),
          (this.bias = e.bias),
          (this.radius = e.radius),
          this.mapSize.copy(e.mapSize),
          this
        );
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      toJSON: function () {
        var e = {};
        return (
          0 !== this.bias && (e.bias = this.bias),
          1 !== this.radius && (e.radius = this.radius),
          (512 !== this.mapSize.x || 512 !== this.mapSize.y) &&
            (e.mapSize = this.mapSize.toArray()),
          (e.camera = this.camera.toJSON(!1).object),
          delete e.camera.matrix,
          e
        );
      },
    }),
    (nR.prototype = Object.assign(Object.create(nA.prototype), {
      constructor: nR,
      isSpotLightShadow: !0,
      updateMatrices: function (e) {
        var t = this.camera,
          i = 2 * rH.RAD2DEG * e.angle,
          n = this.mapSize.width / this.mapSize.height,
          r = e.distance || t.far;
        (i !== t.fov || n !== t.aspect || r !== t.far) &&
          ((t.fov = i),
          (t.aspect = n),
          (t.far = r),
          t.updateProjectionMatrix()),
          nA.prototype.updateMatrices.call(this, e);
      },
    })),
    (nP.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: nP,
      isSpotLight: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          (this.distance = e.distance),
          (this.angle = e.angle),
          (this.penumbra = e.penumbra),
          (this.decay = e.decay),
          (this.target = e.target.clone()),
          (this.shadow = e.shadow.clone()),
          this
        );
      },
    })),
    (nC.prototype = Object.assign(Object.create(nA.prototype), {
      constructor: nC,
      isPointLightShadow: !0,
      updateMatrices: function (e, t) {
        void 0 === t && (t = 0);
        var i = this.camera,
          n = this.matrix,
          r = this._lightPositionWorld,
          a = this._lookTarget,
          o = this._projScreenMatrix;
        r.setFromMatrixPosition(e.matrixWorld),
          i.position.copy(r),
          a.copy(i.position),
          a.add(this._cubeDirections[t]),
          i.up.copy(this._cubeUps[t]),
          i.lookAt(a),
          i.updateMatrixWorld(),
          n.makeTranslation(-r.x, -r.y, -r.z),
          o.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
          this._frustum.setFromMatrix(o);
      },
    })),
    (nD.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: nD,
      isPointLight: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          (this.distance = e.distance),
          (this.decay = e.decay),
          (this.shadow = e.shadow.clone()),
          this
        );
      },
    })),
    (nI.prototype = Object.assign(Object.create(X.prototype), {
      constructor: nI,
      isOrthographicCamera: !0,
      copy: function (e, t) {
        return (
          X.prototype.copy.call(this, e, t),
          (this.left = e.left),
          (this.right = e.right),
          (this.top = e.top),
          (this.bottom = e.bottom),
          (this.near = e.near),
          (this.far = e.far),
          (this.zoom = e.zoom),
          (this.view = null === e.view ? null : Object.assign({}, e.view)),
          this
        );
      },
      setViewOffset: function (e, t, i, n, r, a) {
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
          (this.view.enabled = !0),
          (this.view.fullWidth = e),
          (this.view.fullHeight = t),
          (this.view.offsetX = i),
          (this.view.offsetY = n),
          (this.view.width = r),
          (this.view.height = a),
          this.updateProjectionMatrix();
      },
      clearViewOffset: function () {
        null !== this.view && (this.view.enabled = !1),
          this.updateProjectionMatrix();
      },
      updateProjectionMatrix: function () {
        var e = (this.right - this.left) / (2 * this.zoom),
          t = (this.top - this.bottom) / (2 * this.zoom),
          i = (this.right + this.left) / 2,
          n = (this.top + this.bottom) / 2,
          r = i - e;
        if (
          ((i += e),
          (e = n + t),
          (t = n - t),
          null !== this.view && this.view.enabled)
        ) {
          (i = this.zoom / (this.view.width / this.view.fullWidth)),
            (t = this.zoom / (this.view.height / this.view.fullHeight));
          var a = (this.right - this.left) / this.view.width;
          (n = (this.top - this.bottom) / this.view.height),
            (r += (this.view.offsetX / i) * a),
            (i = r + (this.view.width / i) * a),
            (e -= (this.view.offsetY / t) * n),
            (t = e - (this.view.height / t) * n);
        }
        this.projectionMatrix.makeOrthographic(r, i, e, t, this.near, this.far),
          this.projectionMatrixInverse.getInverse(this.projectionMatrix);
      },
      toJSON: function (e) {
        return (
          ((e = d.prototype.toJSON.call(this, e)).object.zoom = this.zoom),
          (e.object.left = this.left),
          (e.object.right = this.right),
          (e.object.top = this.top),
          (e.object.bottom = this.bottom),
          (e.object.near = this.near),
          (e.object.far = this.far),
          null !== this.view && (e.object.view = Object.assign({}, this.view)),
          e
        );
      },
    })),
    (nN.prototype = Object.assign(Object.create(nA.prototype), {
      constructor: nN,
      isDirectionalLightShadow: !0,
      updateMatrices: function (e) {
        nA.prototype.updateMatrices.call(this, e);
      },
    })),
    (nz.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: nz,
      isDirectionalLight: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          (this.target = e.target.clone()),
          (this.shadow = e.shadow.clone()),
          this
        );
      },
    })),
    (nB.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: nB,
      isAmbientLight: !0,
    })),
    (n2.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: n2,
      isRectAreaLight: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          (this.width = e.width),
          (this.height = e.height),
          this
        );
      },
      toJSON: function (e) {
        return (
          ((e = n0.prototype.toJSON.call(this, e)).object.width = this.width),
          (e.object.height = this.height),
          e
        );
      },
    })),
    (nU.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nU,
      load: function (e, t, i, n) {
        var r = this,
          a = new na(r.manager);
        a.setPath(r.path),
          a.load(
            e,
            function (e) {
              t(r.parse(JSON.parse(e)));
            },
            i,
            n
          );
      },
      parse: function (e) {
        function t(e) {
          return (
            void 0 === n[e] &&
              console.warn("THREE.MaterialLoader: Undefined texture", e),
            n[e]
          );
        }
        var n = this.textures,
          o = new sc[e.type]();
        if (
          (void 0 !== e.uuid && (o.uuid = e.uuid),
          void 0 !== e.name && (o.name = e.name),
          void 0 !== e.color && o.color.setHex(e.color),
          void 0 !== e.roughness && (o.roughness = e.roughness),
          void 0 !== e.metalness && (o.metalness = e.metalness),
          void 0 !== e.sheen && (o.sheen = new _().setHex(e.sheen)),
          void 0 !== e.emissive && o.emissive.setHex(e.emissive),
          void 0 !== e.specular && o.specular.setHex(e.specular),
          void 0 !== e.shininess && (o.shininess = e.shininess),
          void 0 !== e.clearcoat && (o.clearcoat = e.clearcoat),
          void 0 !== e.clearcoatRoughness &&
            (o.clearcoatRoughness = e.clearcoatRoughness),
          void 0 !== e.vertexColors && (o.vertexColors = e.vertexColors),
          void 0 !== e.fog && (o.fog = e.fog),
          void 0 !== e.flatShading && (o.flatShading = e.flatShading),
          void 0 !== e.blending && (o.blending = e.blending),
          void 0 !== e.combine && (o.combine = e.combine),
          void 0 !== e.side && (o.side = e.side),
          void 0 !== e.opacity && (o.opacity = e.opacity),
          void 0 !== e.transparent && (o.transparent = e.transparent),
          void 0 !== e.alphaTest && (o.alphaTest = e.alphaTest),
          void 0 !== e.depthTest && (o.depthTest = e.depthTest),
          void 0 !== e.depthWrite && (o.depthWrite = e.depthWrite),
          void 0 !== e.colorWrite && (o.colorWrite = e.colorWrite),
          void 0 !== e.stencilWrite && (o.stencilWrite = e.stencilWrite),
          void 0 !== e.stencilWriteMask &&
            (o.stencilWriteMask = e.stencilWriteMask),
          void 0 !== e.stencilFunc && (o.stencilFunc = e.stencilFunc),
          void 0 !== e.stencilRef && (o.stencilRef = e.stencilRef),
          void 0 !== e.stencilFuncMask &&
            (o.stencilFuncMask = e.stencilFuncMask),
          void 0 !== e.stencilFail && (o.stencilFail = e.stencilFail),
          void 0 !== e.stencilZFail && (o.stencilZFail = e.stencilZFail),
          void 0 !== e.stencilZPass && (o.stencilZPass = e.stencilZPass),
          void 0 !== e.wireframe && (o.wireframe = e.wireframe),
          void 0 !== e.wireframeLinewidth &&
            (o.wireframeLinewidth = e.wireframeLinewidth),
          void 0 !== e.wireframeLinecap &&
            (o.wireframeLinecap = e.wireframeLinecap),
          void 0 !== e.wireframeLinejoin &&
            (o.wireframeLinejoin = e.wireframeLinejoin),
          void 0 !== e.rotation && (o.rotation = e.rotation),
          1 !== e.linewidth && (o.linewidth = e.linewidth),
          void 0 !== e.dashSize && (o.dashSize = e.dashSize),
          void 0 !== e.gapSize && (o.gapSize = e.gapSize),
          void 0 !== e.scale && (o.scale = e.scale),
          void 0 !== e.polygonOffset && (o.polygonOffset = e.polygonOffset),
          void 0 !== e.polygonOffsetFactor &&
            (o.polygonOffsetFactor = e.polygonOffsetFactor),
          void 0 !== e.polygonOffsetUnits &&
            (o.polygonOffsetUnits = e.polygonOffsetUnits),
          void 0 !== e.skinning && (o.skinning = e.skinning),
          void 0 !== e.morphTargets && (o.morphTargets = e.morphTargets),
          void 0 !== e.morphNormals && (o.morphNormals = e.morphNormals),
          void 0 !== e.dithering && (o.dithering = e.dithering),
          void 0 !== e.visible && (o.visible = e.visible),
          void 0 !== e.toneMapped && (o.toneMapped = e.toneMapped),
          void 0 !== e.userData && (o.userData = e.userData),
          void 0 !== e.uniforms)
        )
          for (var c in e.uniforms) {
            var l = e.uniforms[c];
            switch (((o.uniforms[c] = {}), l.type)) {
              case "t":
                o.uniforms[c].value = t(l.value);
                break;
              case "c":
                o.uniforms[c].value = new _().setHex(l.value);
                break;
              case "v2":
                o.uniforms[c].value = new i().fromArray(l.value);
                break;
              case "v3":
                o.uniforms[c].value = new r().fromArray(l.value);
                break;
              case "v4":
                o.uniforms[c].value = new s().fromArray(l.value);
                break;
              case "m3":
                o.uniforms[c].value = new a().fromArray(l.value);
              case "m4":
                o.uniforms[c].value = new h().fromArray(l.value);
                break;
              default:
                o.uniforms[c].value = l.value;
            }
          }
        if (
          (void 0 !== e.defines && (o.defines = e.defines),
          void 0 !== e.vertexShader && (o.vertexShader = e.vertexShader),
          void 0 !== e.fragmentShader && (o.fragmentShader = e.fragmentShader),
          void 0 !== e.extensions)
        )
          for (var u in e.extensions) o.extensions[u] = e.extensions[u];
        return (
          void 0 !== e.shading && (o.flatShading = 1 === e.shading),
          void 0 !== e.size && (o.size = e.size),
          void 0 !== e.sizeAttenuation &&
            (o.sizeAttenuation = e.sizeAttenuation),
          void 0 !== e.map && (o.map = t(e.map)),
          void 0 !== e.matcap && (o.matcap = t(e.matcap)),
          void 0 !== e.alphaMap &&
            ((o.alphaMap = t(e.alphaMap)), (o.transparent = !0)),
          void 0 !== e.bumpMap && (o.bumpMap = t(e.bumpMap)),
          void 0 !== e.bumpScale && (o.bumpScale = e.bumpScale),
          void 0 !== e.normalMap && (o.normalMap = t(e.normalMap)),
          void 0 !== e.normalMapType && (o.normalMapType = e.normalMapType),
          void 0 !== e.normalScale &&
            (!1 === Array.isArray((c = e.normalScale)) && (c = [c, c]),
            (o.normalScale = new i().fromArray(c))),
          void 0 !== e.displacementMap &&
            (o.displacementMap = t(e.displacementMap)),
          void 0 !== e.displacementScale &&
            (o.displacementScale = e.displacementScale),
          void 0 !== e.displacementBias &&
            (o.displacementBias = e.displacementBias),
          void 0 !== e.roughnessMap && (o.roughnessMap = t(e.roughnessMap)),
          void 0 !== e.metalnessMap && (o.metalnessMap = t(e.metalnessMap)),
          void 0 !== e.emissiveMap && (o.emissiveMap = t(e.emissiveMap)),
          void 0 !== e.emissiveIntensity &&
            (o.emissiveIntensity = e.emissiveIntensity),
          void 0 !== e.specularMap && (o.specularMap = t(e.specularMap)),
          void 0 !== e.envMap && (o.envMap = t(e.envMap)),
          void 0 !== e.envMapIntensity &&
            (o.envMapIntensity = e.envMapIntensity),
          void 0 !== e.reflectivity && (o.reflectivity = e.reflectivity),
          void 0 !== e.refractionRatio &&
            (o.refractionRatio = e.refractionRatio),
          void 0 !== e.lightMap && (o.lightMap = t(e.lightMap)),
          void 0 !== e.lightMapIntensity &&
            (o.lightMapIntensity = e.lightMapIntensity),
          void 0 !== e.aoMap && (o.aoMap = t(e.aoMap)),
          void 0 !== e.aoMapIntensity && (o.aoMapIntensity = e.aoMapIntensity),
          void 0 !== e.gradientMap && (o.gradientMap = t(e.gradientMap)),
          void 0 !== e.clearcoatNormalMap &&
            (o.clearcoatNormalMap = t(e.clearcoatNormalMap)),
          void 0 !== e.clearcoatNormalScale &&
            (o.clearcoatNormalScale = new i().fromArray(
              e.clearcoatNormalScale
            )),
          o
        );
      },
      setTextures: function (e) {
        return (this.textures = e), this;
      },
    }));
  var s$ = {
    decodeText: function (e) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
      for (var t = "", i = 0, n = e.length; i < n; i++)
        t += String.fromCharCode(e[i]);
      try {
        return decodeURIComponent(escape(t));
      } catch (r) {
        return t;
      }
    },
    extractUrlBase: function (e) {
      var t = e.lastIndexOf("/");
      return -1 === t ? "./" : e.substr(0, t + 1);
    },
  };
  (nF.prototype = Object.assign(Object.create(G.prototype), {
    constructor: nF,
    isInstancedBufferGeometry: !0,
    copy: function (e) {
      return (
        G.prototype.copy.call(this, e),
        (this.maxInstancedCount = e.maxInstancedCount),
        this
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var e = G.prototype.toJSON.call(this);
      return (
        (e.maxInstancedCount = this.maxInstancedCount),
        (e.isInstancedBufferGeometry = !0),
        e
      );
    },
  })),
    (nG.prototype = Object.assign(Object.create(L.prototype), {
      constructor: nG,
      isInstancedBufferAttribute: !0,
      copy: function (e) {
        return (
          L.prototype.copy.call(this, e),
          (this.meshPerAttribute = e.meshPerAttribute),
          this
        );
      },
      toJSON: function () {
        var e = L.prototype.toJSON.call(this);
        return (
          (e.meshPerAttribute = this.meshPerAttribute),
          (e.isInstancedBufferAttribute = !0),
          e
        );
      },
    })),
    (n3.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: n3,
      load: function (e, t, i, n) {
        var r = this,
          a = new na(r.manager);
        a.setPath(r.path),
          a.load(
            e,
            function (e) {
              t(r.parse(JSON.parse(e)));
            },
            i,
            n
          );
      },
      parse: function (e) {
        var t = e.isInstancedBufferGeometry ? new nF() : new G(),
          i = e.data.index;
        if (void 0 !== i) {
          var n = new sy[i.type](i.array);
          t.setIndex(new L(n, 1));
        }
        for (var a in (i = e.data.attributes)) {
          var o = i[a];
          (n = new sy[o.type](o.array)),
            (n = new (o.isInstancedBufferAttribute ? nG : L)(
              n,
              o.itemSize,
              o.normalized
            )),
            void 0 !== o.name && (n.name = o.name),
            t.setAttribute(a, n);
        }
        var s = e.data.morphAttributes;
        if (s)
          for (a in s) {
            var c = s[a],
              l = [];
            i = 0;
            for (var h = c.length; i < h; i++)
              (n = new sy[(o = c[i]).type](o.array)),
                (n = new L(n, o.itemSize, o.normalized)),
                void 0 !== o.name && (n.name = o.name),
                l.push(n);
            t.morphAttributes[a] = l;
          }
        if (
          (e.data.morphTargetsRelative && (t.morphTargetsRelative = !0),
          void 0 !== (a = e.data.groups || e.data.drawcalls || e.data.offsets))
        )
          for (i = 0, o = a.length; i !== o; ++i)
            (n = a[i]), t.addGroup(n.start, n.count, n.materialIndex);
        return (
          void 0 !== (i = e.data.boundingSphere) &&
            ((a = new r()),
            void 0 !== i.center && a.fromArray(i.center),
            (t.boundingSphere = new v(a, i.radius))),
          e.name && (t.name = e.name),
          e.userData && (t.userData = e.userData),
          t
        );
      },
    }));
  var sy = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray:
      "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array,
  };
  nH.prototype = Object.assign(Object.create(nr.prototype), {
    constructor: nH,
    load: function (e, t, i, n) {
      var r = this,
        a = "" === this.path ? s$.extractUrlBase(e) : this.path;
      (this.resourcePath = this.resourcePath || a),
        (a = new na(r.manager)).setPath(this.path),
        a.load(
          e,
          function (i) {
            var a = null;
            try {
              a = JSON.parse(i);
            } catch (o) {
              void 0 !== n && n(o),
                console.error(
                  "THREE:ObjectLoader: Can't parse " + e + ".",
                  o.message
                );
              return;
            }
            void 0 === (i = a.metadata) ||
            void 0 === i.type ||
            "geometry" === i.type.toLowerCase()
              ? console.error("THREE.ObjectLoader: Can't load " + e)
              : r.parse(a, t);
          },
          i,
          n
        );
    },
    parse: function (e, t) {
      var i = this.parseShape(e.shapes);
      i = this.parseGeometries(e.geometries, i);
      var n = this.parseImages(e.images, function () {
        void 0 !== t && t(r);
      });
      (n = this.parseTextures(e.textures, n)),
        (n = this.parseMaterials(e.materials, n));
      var r = this.parseObject(e.object, i, n);
      return (
        e.animations && (r.animations = this.parseAnimations(e.animations)),
        (void 0 !== e.images && 0 !== e.images.length) || void 0 === t || t(r),
        r
      );
    },
    parseShape: function (e) {
      var t = {};
      if (void 0 !== e)
        for (var i = 0, n = e.length; i < n; i++) {
          var r = new n1().fromJSON(e[i]);
          t[r.uuid] = r;
        }
      return t;
    },
    parseGeometries: function (e, t) {
      var i = {};
      if (void 0 !== e)
        for (var n = new n3(), r = 0, a = e.length; r < a; r++) {
          var o = e[r];
          switch (o.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              var s = new ss[o.type](
                o.width,
                o.height,
                o.widthSegments,
                o.heightSegments
              );
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              s = new ss[o.type](
                o.width,
                o.height,
                o.depth,
                o.widthSegments,
                o.heightSegments,
                o.depthSegments
              );
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              s = new ss[o.type](
                o.radius,
                o.segments,
                o.thetaStart,
                o.thetaLength
              );
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              s = new ss[o.type](
                o.radiusTop,
                o.radiusBottom,
                o.height,
                o.radialSegments,
                o.heightSegments,
                o.openEnded,
                o.thetaStart,
                o.thetaLength
              );
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              s = new ss[o.type](
                o.radius,
                o.height,
                o.radialSegments,
                o.heightSegments,
                o.openEnded,
                o.thetaStart,
                o.thetaLength
              );
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              s = new ss[o.type](
                o.radius,
                o.widthSegments,
                o.heightSegments,
                o.phiStart,
                o.phiLength,
                o.thetaStart,
                o.thetaLength
              );
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              s = new ss[o.type](o.radius, o.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              s = new ss[o.type](
                o.innerRadius,
                o.outerRadius,
                o.thetaSegments,
                o.phiSegments,
                o.thetaStart,
                o.thetaLength
              );
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              s = new ss[o.type](
                o.radius,
                o.tube,
                o.radialSegments,
                o.tubularSegments,
                o.arc
              );
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              s = new ss[o.type](
                o.radius,
                o.tube,
                o.tubularSegments,
                o.radialSegments,
                o.p,
                o.q
              );
              break;
            case "TubeGeometry":
            case "TubeBufferGeometry":
              s = new ss[o.type](
                new sv[o.path.type]().fromJSON(o.path),
                o.tubularSegments,
                o.radius,
                o.radialSegments,
                o.closed
              );
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              s = new ss[o.type](o.points, o.segments, o.phiStart, o.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              s = new ss[o.type](o.vertices, o.indices, o.radius, o.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              s = [];
              for (var c = 0, l = o.shapes.length; c < l; c++) {
                var h = t[o.shapes[c]];
                s.push(h);
              }
              s = new ss[o.type](s, o.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for (s = [], c = 0, l = o.shapes.length; c < l; c++)
                (h = t[o.shapes[c]]), s.push(h);
              void 0 !== (c = o.options.extrudePath) &&
                (o.options.extrudePath = new sv[c.type]().fromJSON(c)),
                (s = new ss[o.type](s, o.options));
              break;
            case "BufferGeometry":
            case "InstancedBufferGeometry":
              s = n.parse(o);
              break;
            case "Geometry":
              "THREE" in window && "LegacyJSONLoader" in THREE
                ? (s = new THREE.LegacyJSONLoader().parse(
                    o,
                    this.resourcePath
                  ).geometry)
                : console.error(
                    'THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".'
                  );
              break;
            default:
              console.warn(
                'THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"'
              );
              continue;
          }
          (s.uuid = o.uuid),
            void 0 !== o.name && (s.name = o.name),
            !0 === s.isBufferGeometry &&
              void 0 !== o.userData &&
              (s.userData = o.userData),
            (i[o.uuid] = s);
        }
      return i;
    },
    parseMaterials: function (e, t) {
      var i = {},
        n = {};
      if (void 0 !== e) {
        var r = new nU();
        r.setTextures(t), (t = 0);
        for (var a = e.length; t < a; t++) {
          var o = e[t];
          if ("MultiMaterial" === o.type) {
            for (var s = [], c = 0; c < o.materials.length; c++) {
              var l = o.materials[c];
              void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)),
                s.push(i[l.uuid]);
            }
            n[o.uuid] = s;
          } else
            void 0 === i[o.uuid] && (i[o.uuid] = r.parse(o)),
              (n[o.uuid] = i[o.uuid]);
        }
      }
      return n;
    },
    parseAnimations: function (e) {
      for (var t = [], i = 0; i < e.length; i++) {
        var n = e[i],
          r = nt.parse(n);
        void 0 !== n.uuid && (r.uuid = n.uuid), t.push(r);
      }
      return t;
    },
    parseImages: function (e, t) {
      function i(e) {
        return (
          n.manager.itemStart(e),
          a.load(
            e,
            function () {
              n.manager.itemEnd(e);
            },
            void 0,
            function () {
              n.manager.itemError(e), n.manager.itemEnd(e);
            }
          )
        );
      }
      var n = this,
        r = {};
      if (void 0 !== e && 0 < e.length) {
        t = new nn(t);
        var a = new nl(t);
        a.setCrossOrigin(this.crossOrigin), (t = 0);
        for (var o = e.length; t < o; t++) {
          var s = e[t],
            c = s.url;
          if (Array.isArray(c)) {
            r[s.uuid] = [];
            for (var l = 0, h = c.length; l < h; l++) {
              var u = c[l];
              (u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)
                ? u
                : n.resourcePath + u),
                r[s.uuid].push(i(u));
            }
          } else
            (u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url)
              ? s.url
              : n.resourcePath + s.url),
              (r[s.uuid] = i(u));
        }
      }
      return r;
    },
    parseTextures: function (e, t) {
      function i(e, t) {
        return "number" == typeof e
          ? e
          : (console.warn(
              "THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
              e
            ),
            t[e]);
      }
      var n = {};
      if (void 0 !== e)
        for (var r = 0, a = e.length; r < a; r++) {
          var s = e[r];
          void 0 === s.image &&
            console.warn(
              'THREE.ObjectLoader: No "image" specified for',
              s.uuid
            ),
            void 0 === t[s.image] &&
              console.warn("THREE.ObjectLoader: Undefined image", s.image);
          var c = Array.isArray(t[s.image])
            ? new em(t[s.image])
            : new o(t[s.image]);
          (c.needsUpdate = !0),
            (c.uuid = s.uuid),
            void 0 !== s.name && (c.name = s.name),
            void 0 !== s.mapping && (c.mapping = i(s.mapping, sx)),
            void 0 !== s.offset && c.offset.fromArray(s.offset),
            void 0 !== s.repeat && c.repeat.fromArray(s.repeat),
            void 0 !== s.center && c.center.fromArray(s.center),
            void 0 !== s.rotation && (c.rotation = s.rotation),
            void 0 !== s.wrap &&
              ((c.wrapS = i(s.wrap[0], s_)), (c.wrapT = i(s.wrap[1], s_))),
            void 0 !== s.format && (c.format = s.format),
            void 0 !== s.type && (c.type = s.type),
            void 0 !== s.encoding && (c.encoding = s.encoding),
            void 0 !== s.minFilter && (c.minFilter = i(s.minFilter, s8)),
            void 0 !== s.magFilter && (c.magFilter = i(s.magFilter, s8)),
            void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy),
            void 0 !== s.flipY && (c.flipY = s.flipY),
            void 0 !== s.premultiplyAlpha &&
              (c.premultiplyAlpha = s.premultiplyAlpha),
            void 0 !== s.unpackAlignment &&
              (c.unpackAlignment = s.unpackAlignment),
            (n[s.uuid] = c);
        }
      return n;
    },
    parseObject: function (e, t, i) {
      function n(e) {
        return (
          void 0 === t[e] &&
            console.warn("THREE.ObjectLoader: Undefined geometry", e),
          t[e]
        );
      }
      function r(e) {
        if (void 0 !== e) {
          if (Array.isArray(e)) {
            for (var t = [], n = 0, r = e.length; n < r; n++) {
              var a = e[n];
              void 0 === i[a] &&
                console.warn("THREE.ObjectLoader: Undefined material", a),
                t.push(i[a]);
            }
            return t;
          }
          return (
            void 0 === i[e] &&
              console.warn("THREE.ObjectLoader: Undefined material", e),
            i[e]
          );
        }
      }
      switch (e.type) {
        case "Scene":
          var a = new f();
          void 0 !== e.background &&
            Number.isInteger(e.background) &&
            (a.background = new _(e.background)),
            void 0 !== e.fog &&
              ("Fog" === e.fog.type
                ? (a.fog = new tM(e.fog.color, e.fog.near, e.fog.far))
                : "FogExp2" === e.fog.type &&
                  (a.fog = new tb(e.fog.color, e.fog.density)));
          break;
        case "PerspectiveCamera":
          (a = new Y(e.fov, e.aspect, e.near, e.far)),
            void 0 !== e.focus && (a.focus = e.focus),
            void 0 !== e.zoom && (a.zoom = e.zoom),
            void 0 !== e.filmGauge && (a.filmGauge = e.filmGauge),
            void 0 !== e.filmOffset && (a.filmOffset = e.filmOffset),
            void 0 !== e.view && (a.view = Object.assign({}, e.view));
          break;
        case "OrthographicCamera":
          (a = new nI(e.left, e.right, e.top, e.bottom, e.near, e.far)),
            void 0 !== e.zoom && (a.zoom = e.zoom),
            void 0 !== e.view && (a.view = Object.assign({}, e.view));
          break;
        case "AmbientLight":
          a = new nB(e.color, e.intensity);
          break;
        case "DirectionalLight":
          a = new nz(e.color, e.intensity);
          break;
        case "PointLight":
          a = new nD(e.color, e.intensity, e.distance, e.decay);
          break;
        case "RectAreaLight":
          a = new n2(e.color, e.intensity, e.width, e.height);
          break;
        case "SpotLight":
          a = new nP(
            e.color,
            e.intensity,
            e.distance,
            e.angle,
            e.penumbra,
            e.decay
          );
          break;
        case "HemisphereLight":
          a = new nL(e.color, e.groundColor, e.intensity);
          break;
        case "SkinnedMesh":
          console.warn(
            "THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet."
          );
        case "Mesh":
          a = n(e.geometry);
          var o = r(e.material);
          a = a.bones && 0 < a.bones.length ? new tA(a, o) : new H(a, o);
          break;
        case "InstancedMesh":
          (a = n(e.geometry)), (o = r(e.material));
          var s = e.instanceMatrix;
          (a = new tC(a, o, e.count)).instanceMatrix = new L(
            new Float32Array(s.array),
            16
          );
          break;
        case "LOD":
          a = new tL();
          break;
        case "Line":
          a = new tI(n(e.geometry), r(e.material), e.mode);
          break;
        case "LineLoop":
          a = new tz(n(e.geometry), r(e.material));
          break;
        case "LineSegments":
          a = new tN(n(e.geometry), r(e.material));
          break;
        case "PointCloud":
        case "Points":
          a = new t2(n(e.geometry), r(e.material));
          break;
        case "Sprite":
          a = new t1(r(e.material));
          break;
        case "Group":
          a = new t_();
          break;
        default:
          a = new d();
      }
      if (
        ((a.uuid = e.uuid),
        void 0 !== e.name && (a.name = e.name),
        void 0 !== e.matrix
          ? (a.matrix.fromArray(e.matrix),
            void 0 !== e.matrixAutoUpdate &&
              (a.matrixAutoUpdate = e.matrixAutoUpdate),
            a.matrixAutoUpdate &&
              a.matrix.decompose(a.position, a.quaternion, a.scale))
          : (void 0 !== e.position && a.position.fromArray(e.position),
            void 0 !== e.rotation && a.rotation.fromArray(e.rotation),
            void 0 !== e.quaternion && a.quaternion.fromArray(e.quaternion),
            void 0 !== e.scale && a.scale.fromArray(e.scale)),
        void 0 !== e.castShadow && (a.castShadow = e.castShadow),
        void 0 !== e.receiveShadow && (a.receiveShadow = e.receiveShadow),
        e.shadow &&
          (void 0 !== e.shadow.bias && (a.shadow.bias = e.shadow.bias),
          void 0 !== e.shadow.radius && (a.shadow.radius = e.shadow.radius),
          void 0 !== e.shadow.mapSize &&
            a.shadow.mapSize.fromArray(e.shadow.mapSize),
          void 0 !== e.shadow.camera &&
            (a.shadow.camera = this.parseObject(e.shadow.camera))),
        void 0 !== e.visible && (a.visible = e.visible),
        void 0 !== e.frustumCulled && (a.frustumCulled = e.frustumCulled),
        void 0 !== e.renderOrder && (a.renderOrder = e.renderOrder),
        void 0 !== e.userData && (a.userData = e.userData),
        void 0 !== e.layers && (a.layers.mask = e.layers),
        void 0 !== e.children)
      )
        for (s = e.children, o = 0; o < s.length; o++)
          a.add(this.parseObject(s[o], t, i));
      if ("LOD" === e.type)
        for (
          void 0 !== e.autoUpdate && (a.autoUpdate = e.autoUpdate),
            e = e.levels,
            s = 0;
          s < e.length;
          s++
        ) {
          o = e[s];
          var c = a.getObjectByProperty("uuid", o.object);
          void 0 !== c && a.addLevel(c, o.distance);
        }
      return a;
    },
  });
  var sx = {
      UVMapping: 300,
      CubeReflectionMapping: 301,
      CubeRefractionMapping: 302,
      EquirectangularReflectionMapping: 303,
      EquirectangularRefractionMapping: 304,
      SphericalReflectionMapping: 305,
      CubeUVReflectionMapping: 306,
      CubeUVRefractionMapping: 307,
    },
    s_ = {
      RepeatWrapping: 1e3,
      ClampToEdgeWrapping: 1001,
      MirroredRepeatWrapping: 1002,
    },
    s8 = {
      NearestFilter: 1003,
      NearestMipmapNearestFilter: 1004,
      NearestMipmapLinearFilter: 1005,
      LinearFilter: 1006,
      LinearMipmapNearestFilter: 1007,
      LinearMipmapLinearFilter: 1008,
    };
  (nO.prototype = Object.assign(Object.create(nr.prototype), {
    constructor: nO,
    setOptions: function (e) {
      return (this.options = e), this;
    },
    load: function (e, t, i, n) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      var r = this,
        a = sh.get(e);
      if (void 0 !== a)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(a), r.manager.itemEnd(e);
          }, 0),
          a
        );
      fetch(e)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          return void 0 === r.options
            ? createImageBitmap(e)
            : createImageBitmap(e, r.options);
        })
        .then(function (i) {
          sh.add(e, i), t && t(i), r.manager.itemEnd(e);
        })
        .catch(function (t) {
          n && n(t), r.manager.itemError(e), r.manager.itemEnd(e);
        }),
        r.manager.itemStart(e);
    },
  })),
    Object.assign(nV.prototype, {
      moveTo: function (e, t) {
        return (
          (this.currentPath = new nE()),
          this.subPaths.push(this.currentPath),
          this.currentPath.moveTo(e, t),
          this
        );
      },
      lineTo: function (e, t) {
        return this.currentPath.lineTo(e, t), this;
      },
      quadraticCurveTo: function (e, t, i, n) {
        return this.currentPath.quadraticCurveTo(e, t, i, n), this;
      },
      bezierCurveTo: function (e, t, i, n, r, a) {
        return this.currentPath.bezierCurveTo(e, t, i, n, r, a), this;
      },
      splineThru: function (e) {
        return this.currentPath.splineThru(e), this;
      },
      toShapes: function (e, t) {
        function i(e) {
          for (var t = [], i = 0, n = e.length; i < n; i++) {
            var r = e[i],
              a = new n1();
            (a.curves = r.curves), t.push(a);
          }
          return t;
        }
        function n(e, t) {
          for (var i = t.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
            var o = t[r],
              s = t[a],
              c = s.x - o.x,
              l = s.y - o.y;
            if (Math.abs(l) > Number.EPSILON) {
              if (
                (0 > l && ((o = t[a]), (c = -c), (s = t[r]), (l = -l)),
                !(e.y < o.y || e.y > s.y))
              ) {
                if (e.y === o.y) {
                  if (e.x === o.x) return !0;
                } else {
                  if (0 == (r = l * (e.x - o.x) - c * (e.y - o.y))) return !0;
                  0 > r || (n = !n);
                }
              }
            } else if (
              e.y === o.y &&
              ((s.x <= e.x && e.x <= o.x) || (o.x <= e.x && e.x <= s.x))
            )
              return !0;
          }
          return n;
        }
        var r = sa.isClockWise,
          a = this.subPaths;
        if (0 === a.length) return [];
        if (!0 === t) return i(a);
        if (((t = []), 1 === a.length)) {
          var o = a[0],
            s = new n1();
          return (s.curves = o.curves), t.push(s), t;
        }
        var c = !r(a[0].getPoints());
        (c = e ? !c : c), (s = []);
        var l = [],
          h = [],
          u = 0;
        (l[u] = void 0), (h[u] = []);
        for (var p = 0, d = a.length; p < d; p++) {
          var f = (o = a[p]).getPoints(),
            m = r(f);
          (m = e ? !m : m)
            ? (!c && l[u] && u++,
              (l[u] = { s: new n1(), p: f }),
              (l[u].s.curves = o.curves),
              c && u++,
              (h[u] = []))
            : h[u].push({ h: o, p: f[0] });
        }
        if (!l[0]) return i(a);
        if (1 < l.length) {
          for (p = !1, e = [], r = 0, a = l.length; r < a; r++) s[r] = [];
          for (r = 0, a = l.length; r < a; r++)
            for (o = h[r], m = 0; m < o.length; m++) {
              for (f = 0, c = o[m], u = !0; f < l.length; f++)
                n(c.p, l[f].p) &&
                  (r !== f && e.push({ froms: r, tos: f, hole: m }),
                  u ? ((u = !1), s[f].push(c)) : (p = !0));
              u && s[r].push(c);
            }
          0 < e.length && (p || (h = s));
        }
        for (p = 0, r = l.length; p < r; p++)
          for (s = l[p].s, t.push(s), e = h[p], a = 0, o = e.length; a < o; a++)
            s.holes.push(e[a].h);
        return t;
      },
    }),
    Object.assign(n4.prototype, {
      isFont: !0,
      generateShapes: function (e, t) {
        void 0 === t && (t = 100);
        var i = [],
          n = t;
        t = this.data;
        var r = Array.from ? Array.from(e) : String(e).split("");
        n /= t.resolution;
        var a =
          (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * n;
        e = [];
        for (var o = 0, s = 0, c = 0; c < r.length; c++) {
          var l = r[c];
          if ("\n" === l) (o = 0), (s -= a);
          else {
            var h = l;
            l = n;
            var u = o,
              p = s,
              d = t,
              f = d.glyphs[h] || d.glyphs["?"];
            if (f) {
              if (((h = new nV()), f.o)) {
                d = f._cachedOutline || (f._cachedOutline = f.o.split(" "));
                for (var m = 0, g = d.length; m < g; )
                  switch (d[m++]) {
                    case "m":
                      var v = d[m++] * l + u,
                        $ = d[m++] * l + p;
                      h.moveTo(v, $);
                      break;
                    case "l":
                      (v = d[m++] * l + u),
                        ($ = d[m++] * l + p),
                        h.lineTo(v, $);
                      break;
                    case "q":
                      var y = d[m++] * l + u,
                        x = d[m++] * l + p,
                        _ = d[m++] * l + u,
                        w = d[m++] * l + p;
                      h.quadraticCurveTo(_, w, y, x);
                      break;
                    case "b":
                      (y = d[m++] * l + u),
                        (x = d[m++] * l + p),
                        (_ = d[m++] * l + u),
                        (w = d[m++] * l + p),
                        (v = d[m++] * l + u),
                        ($ = d[m++] * l + p),
                        h.bezierCurveTo(_, w, v, $, y, x);
                  }
              }
              l = { offsetX: f.ha * l, path: h };
            } else
              console.error(
                'THREE.Font: character "' +
                  h +
                  '" does not exists in font family ' +
                  d.familyName +
                  "."
              ),
                (l = void 0);
            (o += l.offsetX), e.push(l.path);
          }
        }
        for (t = 0, r = e.length; t < r; t++)
          Array.prototype.push.apply(i, e[t].toShapes());
        return i;
      },
    }),
    (nk.prototype = Object.assign(Object.create(nr.prototype), {
      constructor: nk,
      load: function (e, t, i, n) {
        var r = this,
          a = new na(this.manager);
        a.setPath(this.path),
          a.load(
            e,
            function (e) {
              try {
                var i = JSON.parse(e);
              } catch (n) {
                console.warn(
                  "THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
                ),
                  (i = JSON.parse(e.substring(65, e.length - 2)));
              }
              (e = r.parse(i)), t && t(e);
            },
            i,
            n
          );
      },
      parse: function (e) {
        return new n4(e);
      },
    }));
  var sw,
    sb = {
      getContext: function () {
        return (
          void 0 === sw &&
            (sw = new (window.AudioContext || window.webkitAudioContext)()),
          sw
        );
      },
      setContext: function (e) {
        sw = e;
      },
    };
  (nW.prototype = Object.assign(Object.create(nr.prototype), {
    constructor: nW,
    load: function (e, t, i, n) {
      var r = new na(this.manager);
      r.setResponseType("arraybuffer"),
        r.setPath(this.path),
        r.load(
          e,
          function (e) {
            (e = e.slice(0)),
              sb.getContext().decodeAudioData(e, function (e) {
                t(e);
              });
          },
          i,
          n
        );
    },
  })),
    Object.assign(n5.prototype, {
      isSphericalHarmonics3: !0,
      set: function (e) {
        for (var t = 0; 9 > t; t++) this.coefficients[t].copy(e[t]);
        return this;
      },
      zero: function () {
        for (var e = 0; 9 > e; e++) this.coefficients[e].set(0, 0, 0);
        return this;
      },
      getAt: function (e, t) {
        var i = e.x,
          n = e.y;
        e = e.z;
        var r = this.coefficients;
        return (
          t.copy(r[0]).multiplyScalar(0.282095),
          t.addScale(r[1], 0.488603 * n),
          t.addScale(r[2], 0.488603 * e),
          t.addScale(r[3], 0.488603 * i),
          t.addScale(r[4], 1.092548 * i * n),
          t.addScale(r[5], 1.092548 * n * e),
          t.addScale(r[6], 0.315392 * (3 * e * e - 1)),
          t.addScale(r[7], 1.092548 * i * e),
          t.addScale(r[8], 0.546274 * (i * i - n * n)),
          t
        );
      },
      getIrradianceAt: function (e, t) {
        var i = e.x,
          n = e.y;
        e = e.z;
        var r = this.coefficients;
        return (
          t.copy(r[0]).multiplyScalar(0.886227),
          t.addScale(r[1], 1.023328 * n),
          t.addScale(r[2], 1.023328 * e),
          t.addScale(r[3], 1.023328 * i),
          t.addScale(r[4], 0.858086 * i * n),
          t.addScale(r[5], 0.858086 * n * e),
          t.addScale(r[6], 0.743125 * e * e - 0.247708),
          t.addScale(r[7], 0.858086 * i * e),
          t.addScale(r[8], 0.429043 * (i * i - n * n)),
          t
        );
      },
      add: function (e) {
        for (var t = 0; 9 > t; t++) this.coefficients[t].add(e.coefficients[t]);
        return this;
      },
      scale: function (e) {
        for (var t = 0; 9 > t; t++) this.coefficients[t].multiplyScalar(e);
        return this;
      },
      lerp: function (e, t) {
        for (var i = 0; 9 > i; i++)
          this.coefficients[i].lerp(e.coefficients[i], t);
        return this;
      },
      equals: function (e) {
        for (var t = 0; 9 > t; t++)
          if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0;
      },
      copy: function (e) {
        return this.set(e.coefficients);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      fromArray: function (e, t) {
        void 0 === t && (t = 0);
        for (var i = this.coefficients, n = 0; 9 > n; n++)
          i[n].fromArray(e, t + 3 * n);
        return this;
      },
      toArray: function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        for (var i = this.coefficients, n = 0; 9 > n; n++)
          i[n].toArray(e, t + 3 * n);
        return e;
      },
    }),
    Object.assign(n5, {
      getBasisAt: function (e, t) {
        var i = e.x,
          n = e.y;
        (e = e.z),
          (t[0] = 0.282095),
          (t[1] = 0.488603 * n),
          (t[2] = 0.488603 * e),
          (t[3] = 0.488603 * i),
          (t[4] = 1.092548 * i * n),
          (t[5] = 1.092548 * n * e),
          (t[6] = 0.315392 * (3 * e * e - 1)),
          (t[7] = 1.092548 * i * e),
          (t[8] = 0.546274 * (i * i - n * n));
      },
    }),
    (n6.prototype = Object.assign(Object.create(n0.prototype), {
      constructor: n6,
      isLightProbe: !0,
      copy: function (e) {
        return (
          n0.prototype.copy.call(this, e),
          this.sh.copy(e.sh),
          (this.intensity = e.intensity),
          this
        );
      },
      toJSON: function (e) {
        return n0.prototype.toJSON.call(this, e);
      },
    })),
    (n7.prototype = Object.assign(Object.create(n6.prototype), {
      constructor: n7,
      isHemisphereLightProbe: !0,
      copy: function (e) {
        return n6.prototype.copy.call(this, e), this;
      },
      toJSON: function (e) {
        return n6.prototype.toJSON.call(this, e);
      },
    })),
    (nj.prototype = Object.assign(Object.create(n6.prototype), {
      constructor: nj,
      isAmbientLightProbe: !0,
      copy: function (e) {
        return n6.prototype.copy.call(this, e), this;
      },
      toJSON: function (e) {
        return n6.prototype.toJSON.call(this, e);
      },
    }));
  var sM = new h(),
    sS = new h();
  Object.assign(nq.prototype, {
    update: function (e) {
      var t = this._cache;
      if (
        t.focus !== e.focus ||
        t.fov !== e.fov ||
        t.aspect !== e.aspect * this.aspect ||
        t.near !== e.near ||
        t.far !== e.far ||
        t.zoom !== e.zoom ||
        t.eyeSep !== this.eyeSep
      ) {
        (t.focus = e.focus),
          (t.fov = e.fov),
          (t.aspect = e.aspect * this.aspect),
          (t.near = e.near),
          (t.far = e.far),
          (t.zoom = e.zoom),
          (t.eyeSep = this.eyeSep);
        var i = e.projectionMatrix.clone(),
          n = t.eyeSep / 2,
          r = (n * t.near) / t.focus,
          a = (t.near * Math.tan(rH.DEG2RAD * t.fov * 0.5)) / t.zoom;
        (sS.elements[12] = -n), (sM.elements[12] = n), (n = -a * t.aspect + r);
        var o = a * t.aspect + r;
        (i.elements[0] = (2 * t.near) / (o - n)),
          (i.elements[8] = (o + n) / (o - n)),
          this.cameraL.projectionMatrix.copy(i),
          (n = -a * t.aspect - r),
          (o = a * t.aspect - r),
          (i.elements[0] = (2 * t.near) / (o - n)),
          (i.elements[8] = (o + n) / (o - n)),
          this.cameraR.projectionMatrix.copy(i);
      }
      this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(sS),
        this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(sM);
    },
  }),
    Object.assign(nX.prototype, {
      start: function () {
        (this.oldTime = this.startTime =
          ("undefined" == typeof performance ? Date : performance).now()),
          (this.elapsedTime = 0),
          (this.running = !0);
      },
      stop: function () {
        this.getElapsedTime(), (this.autoStart = this.running = !1);
      },
      getElapsedTime: function () {
        return this.getDelta(), this.elapsedTime;
      },
      getDelta: function () {
        var e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
          var t = (
            "undefined" == typeof performance ? Date : performance
          ).now();
          (e = (t - this.oldTime) / 1e3),
            (this.oldTime = t),
            (this.elapsedTime += e);
        }
        return e;
      },
    });
  var sT = new r(),
    sE = new n(),
    s1 = new r(),
    s0 = new r();
  (nY.prototype = Object.assign(Object.create(d.prototype), {
    constructor: nY,
    getInput: function () {
      return this.gain;
    },
    removeFilter: function () {
      return (
        null !== this.filter &&
          (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination),
          this.gain.connect(this.context.destination),
          (this.filter = null)),
        this
      );
    },
    getFilter: function () {
      return this.filter;
    },
    setFilter: function (e) {
      return (
        null !== this.filter
          ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination))
          : this.gain.disconnect(this.context.destination),
        (this.filter = e),
        this.gain.connect(this.filter),
        this.filter.connect(this.context.destination),
        this
      );
    },
    getMasterVolume: function () {
      return this.gain.gain.value;
    },
    setMasterVolume: function (e) {
      return (
        this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
      );
    },
    updateMatrixWorld: function (e) {
      d.prototype.updateMatrixWorld.call(this, e), (e = this.context.listener);
      var t = this.up;
      if (
        ((this.timeDelta = this._clock.getDelta()),
        this.matrixWorld.decompose(sT, sE, s1),
        s0.set(0, 0, -1).applyQuaternion(sE),
        e.positionX)
      ) {
        var i = this.context.currentTime + this.timeDelta;
        e.positionX.linearRampToValueAtTime(sT.x, i),
          e.positionY.linearRampToValueAtTime(sT.y, i),
          e.positionZ.linearRampToValueAtTime(sT.z, i),
          e.forwardX.linearRampToValueAtTime(s0.x, i),
          e.forwardY.linearRampToValueAtTime(s0.y, i),
          e.forwardZ.linearRampToValueAtTime(s0.z, i),
          e.upX.linearRampToValueAtTime(t.x, i),
          e.upY.linearRampToValueAtTime(t.y, i),
          e.upZ.linearRampToValueAtTime(t.z, i);
      } else
        e.setPosition(sT.x, sT.y, sT.z),
          e.setOrientation(s0.x, s0.y, s0.z, t.x, t.y, t.z);
    },
  })),
    (nZ.prototype = Object.assign(Object.create(d.prototype), {
      constructor: nZ,
      getOutput: function () {
        return this.gain;
      },
      setNodeSource: function (e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "audioNode"),
          (this.source = e),
          this.connect(),
          this
        );
      },
      setMediaElementSource: function (e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaNode"),
          (this.source = this.context.createMediaElementSource(e)),
          this.connect(),
          this
        );
      },
      setMediaStreamSource: function (e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaStreamNode"),
          (this.source = this.context.createMediaStreamSource(e)),
          this.connect(),
          this
        );
      },
      setBuffer: function (e) {
        return (
          (this.buffer = e),
          (this.sourceType = "buffer"),
          this.autoplay && this.play(),
          this
        );
      },
      play: function (e) {
        if ((void 0 === e && (e = 0), !0 === this.isPlaying))
          console.warn("THREE.Audio: Audio is already playing.");
        else {
          if (!1 !== this.hasPlaybackControl)
            return (
              (this._startedAt = this.context.currentTime + e),
              ((e = this.context.createBufferSource()).buffer = this.buffer),
              (e.loop = this.loop),
              (e.loopStart = this.loopStart),
              (e.loopEnd = this.loopEnd),
              (e.onended = this.onEnded.bind(this)),
              e.start(
                this._startedAt,
                this._pausedAt + this.offset,
                this.duration
              ),
              (this.isPlaying = !0),
              (this.source = e),
              this.setDetune(this.detune),
              this.setPlaybackRate(this.playbackRate),
              this.connect()
            );
          console.warn("THREE.Audio: this Audio has no playback control.");
        }
      },
      pause: function () {
        if (!1 !== this.hasPlaybackControl)
          return (
            !0 === this.isPlaying &&
              ((this._pausedAt =
                (this.context.currentTime - this._startedAt) *
                this.playbackRate),
              this.source.stop(),
              (this.source.onended = null),
              (this.isPlaying = !1)),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      },
      stop: function () {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this._pausedAt = 0),
            this.source.stop(),
            (this.source.onended = null),
            (this.isPlaying = !1),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      },
      connect: function () {
        if (0 < this.filters.length) {
          this.source.connect(this.filters[0]);
          for (var e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].connect(this.filters[e]);
          this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());
        return this;
      },
      disconnect: function () {
        if (0 < this.filters.length) {
          this.source.disconnect(this.filters[0]);
          for (var e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].disconnect(this.filters[e]);
          this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());
        return this;
      },
      getFilters: function () {
        return this.filters;
      },
      setFilters: function (e) {
        return (
          e || (e = []),
          !0 === this.isPlaying
            ? (this.disconnect(), (this.filters = e), this.connect())
            : (this.filters = e),
          this
        );
      },
      setDetune: function (e) {
        if (((this.detune = e), void 0 !== this.source.detune))
          return (
            !0 === this.isPlaying &&
              this.source.detune.setTargetAtTime(
                this.detune,
                this.context.currentTime,
                0.01
              ),
            this
          );
      },
      getDetune: function () {
        return this.detune;
      },
      getFilter: function () {
        return this.getFilters()[0];
      },
      setFilter: function (e) {
        return this.setFilters(e ? [e] : []);
      },
      setPlaybackRate: function (e) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.playbackRate = e),
            !0 === this.isPlaying &&
              this.source.playbackRate.setTargetAtTime(
                this.playbackRate,
                this.context.currentTime,
                0.01
              ),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      },
      getPlaybackRate: function () {
        return this.playbackRate;
      },
      onEnded: function () {
        this.isPlaying = !1;
      },
      getLoop: function () {
        return !1 === this.hasPlaybackControl
          ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1)
          : this.loop;
      },
      setLoop: function (e) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.loop = e),
            !0 === this.isPlaying && (this.source.loop = this.loop),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      },
      setLoopStart: function (e) {
        return (this.loopStart = e), this;
      },
      setLoopEnd: function (e) {
        return (this.loopEnd = e), this;
      },
      getVolume: function () {
        return this.gain.gain.value;
      },
      setVolume: function (e) {
        return (
          this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01),
          this
        );
      },
    }));
  var sL = new r(),
    sA = new n(),
    sR = new r(),
    sP = new r();
  (nJ.prototype = Object.assign(Object.create(nZ.prototype), {
    constructor: nJ,
    getOutput: function () {
      return this.panner;
    },
    getRefDistance: function () {
      return this.panner.refDistance;
    },
    setRefDistance: function (e) {
      return (this.panner.refDistance = e), this;
    },
    getRolloffFactor: function () {
      return this.panner.rolloffFactor;
    },
    setRolloffFactor: function (e) {
      return (this.panner.rolloffFactor = e), this;
    },
    getDistanceModel: function () {
      return this.panner.distanceModel;
    },
    setDistanceModel: function (e) {
      return (this.panner.distanceModel = e), this;
    },
    getMaxDistance: function () {
      return this.panner.maxDistance;
    },
    setMaxDistance: function (e) {
      return (this.panner.maxDistance = e), this;
    },
    setDirectionalCone: function (e, t, i) {
      return (
        (this.panner.coneInnerAngle = e),
        (this.panner.coneOuterAngle = t),
        (this.panner.coneOuterGain = i),
        this
      );
    },
    updateMatrixWorld: function (e) {
      if (
        (d.prototype.updateMatrixWorld.call(this, e),
        !0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
      ) {
        if (
          (this.matrixWorld.decompose(sL, sA, sR),
          sP.set(0, 0, 1).applyQuaternion(sA),
          (e = this.panner).positionX)
        ) {
          var t = this.context.currentTime + this.listener.timeDelta;
          e.positionX.linearRampToValueAtTime(sL.x, t),
            e.positionY.linearRampToValueAtTime(sL.y, t),
            e.positionZ.linearRampToValueAtTime(sL.z, t),
            e.orientationX.linearRampToValueAtTime(sP.x, t),
            e.orientationY.linearRampToValueAtTime(sP.y, t),
            e.orientationZ.linearRampToValueAtTime(sP.z, t);
        } else
          e.setPosition(sL.x, sL.y, sL.z), e.setOrientation(sP.x, sP.y, sP.z);
      }
    },
  })),
    Object.assign(nQ.prototype, {
      getFrequencyData: function () {
        return this.analyser.getByteFrequencyData(this.data), this.data;
      },
      getAverageFrequency: function () {
        for (var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++)
          e += t[i];
        return e / t.length;
      },
    }),
    Object.assign(nK.prototype, {
      accumulate: function (e, t) {
        var i = this.buffer,
          n = this.valueSize;
        e = e * n + n;
        var r = this.cumulativeWeight;
        if (0 === r) {
          for (r = 0; r !== n; ++r) i[e + r] = i[r];
          r = t;
        } else (r += t), this._mixBufferRegion(i, e, 0, t / r, n);
        this.cumulativeWeight = r;
      },
      apply: function (e) {
        var t = this.valueSize,
          i = this.buffer;
        e = e * t + t;
        var n = this.cumulativeWeight,
          r = this.binding;
        (this.cumulativeWeight = 0),
          1 > n && this._mixBufferRegion(i, e, 3 * t, 1 - n, t),
          (n = t);
        for (var a = t + t; n !== a; ++n)
          if (i[n] !== i[n + t]) {
            r.setValue(i, e);
            break;
          }
      },
      saveOriginalState: function () {
        var e = this.buffer,
          t = this.valueSize,
          i = 3 * t;
        this.binding.getValue(e, i);
        for (var n = t; n !== i; ++n) e[n] = e[i + (n % t)];
        this.cumulativeWeight = 0;
      },
      restoreOriginalState: function () {
        this.binding.setValue(this.buffer, 3 * this.valueSize);
      },
      _select: function (e, t, i, n, r) {
        if (0.5 <= n) for (n = 0; n !== r; ++n) e[t + n] = e[i + n];
      },
      _slerp: function (e, t, i, r) {
        n.slerpFlat(e, t, e, t, e, i, r);
      },
      _lerp: function (e, t, i, n, r) {
        for (var a = 1 - n, o = 0; o !== r; ++o) {
          var s = t + o;
          e[s] = e[s] * a + e[i + o] * n;
        }
      },
    });
  var sC,
    sD = /[\[\]\.:\/]/g,
    sI = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    sN = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    sz = /(WCOD+)?/.source.replace("WCOD", sI),
    sB = RegExp(
      "^" +
        sN +
        sz +
        /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]") +
        /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]") +
        "$"
    ),
    s2 = ["material", "materials", "bones"];
  Object.assign(n9.prototype, {
    getValue: function (e, t) {
      this.bind();
      var i = this._bindings[this._targetGroup.nCachedObjects_];
      void 0 !== i && i.getValue(e, t);
    },
    setValue: function (e, t) {
      for (
        var i = this._bindings,
          n = this._targetGroup.nCachedObjects_,
          r = i.length;
        n !== r;
        ++n
      )
        i[n].setValue(e, t);
    },
    bind: function () {
      for (
        var e = this._bindings,
          t = this._targetGroup.nCachedObjects_,
          i = e.length;
        t !== i;
        ++t
      )
        e[t].bind();
    },
    unbind: function () {
      for (
        var e = this._bindings,
          t = this._targetGroup.nCachedObjects_,
          i = e.length;
        t !== i;
        ++t
      )
        e[t].unbind();
    },
  }),
    Object.assign(re, {
      Composite: n9,
      create: function (e, t, i) {
        return e && e.isAnimationObjectGroup
          ? new re.Composite(e, t, i)
          : new re(e, t, i);
      },
      sanitizeNodeName: function (e) {
        return e.replace(/\s/g, "_").replace(sD, "");
      },
      parseTrackName: function (e) {
        var t = sB.exec(e);
        if (!t) throw Error("PropertyBinding: Cannot parse trackName: " + e);
        var i =
          (t = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6],
          }).nodeName && t.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
          var n = t.nodeName.substring(i + 1);
          -1 !== s2.indexOf(n) &&
            ((t.nodeName = t.nodeName.substring(0, i)), (t.objectName = n));
        }
        if (null === t.propertyName || 0 === t.propertyName.length)
          throw Error(
            "PropertyBinding: can not parse propertyName from trackName: " + e
          );
        return t;
      },
      findNode: function (e, t) {
        if (
          !t ||
          "" === t ||
          "root" === t ||
          "." === t ||
          -1 === t ||
          t === e.name ||
          t === e.uuid
        )
          return e;
        if (e.skeleton) {
          var i = e.skeleton.getBoneByName(t);
          if (void 0 !== i) return i;
        }
        if (e.children) {
          var n = function (e) {
            for (var i = 0; i < e.length; i++) {
              var r = e[i];
              if (r.name === t || r.uuid === t || (r = n(r.children))) return r;
            }
            return null;
          };
          if ((e = n(e.children))) return e;
        }
        return null;
      },
    }),
    Object.assign(re.prototype, {
      _getValue_unavailable: function () {},
      _setValue_unavailable: function () {},
      BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3,
      },
      Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
      GetterByBindingType: [
        function (e, t) {
          e[t] = this.node[this.propertyName];
        },
        function (e, t) {
          for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
            e[t++] = i[n];
        },
        function (e, t) {
          e[t] = this.resolvedProperty[this.propertyIndex];
        },
        function (e, t) {
          this.resolvedProperty.toArray(e, t);
        },
      ],
      SetterByBindingTypeAndVersioning: [
        [
          function (e, t) {
            this.targetObject[this.propertyName] = e[t];
          },
          function (e, t) {
            (this.targetObject[this.propertyName] = e[t]),
              (this.targetObject.needsUpdate = !0);
          },
          function (e, t) {
            (this.targetObject[this.propertyName] = e[t]),
              (this.targetObject.matrixWorldNeedsUpdate = !0);
          },
        ],
        [
          function (e, t) {
            for (
              var i = this.resolvedProperty, n = 0, r = i.length;
              n !== r;
              ++n
            )
              i[n] = e[t++];
          },
          function (e, t) {
            for (
              var i = this.resolvedProperty, n = 0, r = i.length;
              n !== r;
              ++n
            )
              i[n] = e[t++];
            this.targetObject.needsUpdate = !0;
          },
          function (e, t) {
            for (
              var i = this.resolvedProperty, n = 0, r = i.length;
              n !== r;
              ++n
            )
              i[n] = e[t++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
          },
        ],
        [
          function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t];
          },
          function (e, t) {
            (this.resolvedProperty[this.propertyIndex] = e[t]),
              (this.targetObject.needsUpdate = !0);
          },
          function (e, t) {
            (this.resolvedProperty[this.propertyIndex] = e[t]),
              (this.targetObject.matrixWorldNeedsUpdate = !0);
          },
        ],
        [
          function (e, t) {
            this.resolvedProperty.fromArray(e, t);
          },
          function (e, t) {
            this.resolvedProperty.fromArray(e, t),
              (this.targetObject.needsUpdate = !0);
          },
          function (e, t) {
            this.resolvedProperty.fromArray(e, t),
              (this.targetObject.matrixWorldNeedsUpdate = !0);
          },
        ],
      ],
      getValue: function (e, t) {
        this.bind(), this.getValue(e, t);
      },
      setValue: function (e, t) {
        this.bind(), this.setValue(e, t);
      },
      bind: function () {
        var e = this.node,
          t = this.parsedPath,
          i = t.objectName,
          n = t.propertyName,
          r = t.propertyIndex;
        if (
          (e ||
            (this.node = e =
              re.findNode(this.rootNode, t.nodeName) || this.rootNode),
          (this.getValue = this._getValue_unavailable),
          (this.setValue = this._setValue_unavailable),
          e)
        ) {
          if (i) {
            var a = t.objectIndex;
            switch (i) {
              case "materials":
                if (!e.material) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                    this
                  );
                  return;
                }
                if (!e.material.materials) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                    this
                  );
                  return;
                }
                e = e.material.materials;
                break;
              case "bones":
                if (!e.skeleton) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                    this
                  );
                  return;
                }
                for (i = 0, e = e.skeleton.bones; i < e.length; i++)
                  if (e[i].name === a) {
                    a = i;
                    break;
                  }
                break;
              default:
                if (void 0 === e[i]) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                    this
                  );
                  return;
                }
                e = e[i];
            }
            if (void 0 !== a) {
              if (void 0 === e[a]) {
                console.error(
                  "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                  this,
                  e
                );
                return;
              }
              e = e[a];
            }
          }
          if (void 0 === (a = e[n]))
            console.error(
              "THREE.PropertyBinding: Trying to update property for track: " +
                t.nodeName +
                "." +
                n +
                " but it wasn't found.",
              e
            );
          else {
            if (
              ((t = this.Versioning.None),
              (this.targetObject = e),
              void 0 !== e.needsUpdate
                ? (t = this.Versioning.NeedsUpdate)
                : void 0 !== e.matrixWorldNeedsUpdate &&
                  (t = this.Versioning.MatrixWorldNeedsUpdate),
              (i = this.BindingType.Direct),
              void 0 !== r)
            ) {
              if ("morphTargetInfluences" === n) {
                if (!e.geometry) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                    this
                  );
                  return;
                }
                if (e.geometry.isBufferGeometry) {
                  if (!e.geometry.morphAttributes) {
                    console.error(
                      "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                      this
                    );
                    return;
                  }
                  for (
                    i = 0;
                    i < this.node.geometry.morphAttributes.position.length;
                    i++
                  )
                    if (e.geometry.morphAttributes.position[i].name === r) {
                      r = i;
                      break;
                    }
                } else {
                  if (!e.geometry.morphTargets) {
                    console.error(
                      "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
                      this
                    );
                    return;
                  }
                  for (i = 0; i < this.node.geometry.morphTargets.length; i++)
                    if (e.geometry.morphTargets[i].name === r) {
                      r = i;
                      break;
                    }
                }
              }
              (i = this.BindingType.ArrayElement),
                (this.resolvedProperty = a),
                (this.propertyIndex = r);
            } else
              void 0 !== a.fromArray && void 0 !== a.toArray
                ? ((i = this.BindingType.HasFromToArray),
                  (this.resolvedProperty = a))
                : Array.isArray(a)
                ? ((i = this.BindingType.EntireArray),
                  (this.resolvedProperty = a))
                : (this.propertyName = n);
            (this.getValue = this.GetterByBindingType[i]),
              (this.setValue = this.SetterByBindingTypeAndVersioning[i][t]);
          }
        } else
          console.error(
            "THREE.PropertyBinding: Trying to update node for track: " +
              this.path +
              " but it wasn't found."
          );
      },
      unbind: function () {
        (this.node = null),
          (this.getValue = this._getValue_unbound),
          (this.setValue = this._setValue_unbound);
      },
    }),
    Object.assign(re.prototype, {
      _getValue_unbound: re.prototype.getValue,
      _setValue_unbound: re.prototype.setValue,
    }),
    Object.assign(rt.prototype, {
      isAnimationObjectGroup: !0,
      add: function () {
        for (
          var e = this._objects,
            t = e.length,
            i = this.nCachedObjects_,
            n = this._indicesByUUID,
            r = this._paths,
            a = this._parsedPaths,
            o = this._bindings,
            s = o.length,
            c = void 0,
            l = 0,
            h = arguments.length;
          l !== h;
          ++l
        ) {
          var u = arguments[l],
            p = u.uuid,
            d = n[p];
          if (void 0 === d) {
            (d = t++), (n[p] = d), e.push(u), (p = 0);
            for (var f = s; p !== f; ++p) o[p].push(new re(u, r[p], a[p]));
          } else if (d < i) {
            c = e[d];
            var m = --i;
            for (
              n[(f = e[m]).uuid] = d,
                e[d] = f,
                n[p] = m,
                e[m] = u,
                p = 0,
                f = s;
              p !== f;
              ++p
            ) {
              var g = o[p],
                v = g[d];
              (g[d] = g[m]),
                void 0 === v && (v = new re(u, r[p], a[p])),
                (g[m] = v);
            }
          } else
            e[d] !== c &&
              console.error(
                "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
              );
        }
        this.nCachedObjects_ = i;
      },
      remove: function () {
        for (
          var e = this._objects,
            t = this.nCachedObjects_,
            i = this._indicesByUUID,
            n = this._bindings,
            r = n.length,
            a = 0,
            o = arguments.length;
          a !== o;
          ++a
        ) {
          var s = arguments[a],
            c = s.uuid,
            l = i[c];
          if (void 0 !== l && l >= t) {
            var h = t++,
              u = e[h];
            for (
              i[u.uuid] = l, e[l] = u, i[c] = h, e[h] = s, s = 0, c = r;
              s !== c;
              ++s
            ) {
              var p = (u = n[s])[l];
              (u[l] = u[h]), (u[h] = p);
            }
          }
        }
        this.nCachedObjects_ = t;
      },
      uncache: function () {
        for (
          var e = this._objects,
            t = e.length,
            i = this.nCachedObjects_,
            n = this._indicesByUUID,
            r = this._bindings,
            a = r.length,
            o = 0,
            s = arguments.length;
          o !== s;
          ++o
        ) {
          var c = arguments[o].uuid,
            l = n[c];
          if (void 0 !== l) {
            if ((delete n[c], l < i)) {
              var h = e[(c = --i)],
                u = --t,
                p = e[u];
              for (
                n[h.uuid] = l,
                  e[l] = h,
                  n[p.uuid] = c,
                  e[c] = p,
                  e.pop(),
                  h = 0,
                  p = a;
                h !== p;
                ++h
              ) {
                var d = r[h],
                  f = d[u];
                (d[l] = d[c]), (d[c] = f), d.pop();
              }
            } else
              for (
                n[(p = e[(u = --t)]).uuid] = l, e[l] = p, e.pop(), h = 0, p = a;
                h !== p;
                ++h
              )
                ((d = r[h])[l] = d[u]), d.pop();
          }
        }
        this.nCachedObjects_ = i;
      },
      subscribe_: function (e, t) {
        var i = this._bindingsIndicesByPath,
          n = i[e],
          r = this._bindings;
        if (void 0 !== n) return r[n];
        var a = this._paths,
          o = this._parsedPaths,
          s = this._objects,
          c = this.nCachedObjects_,
          l = Array(s.length);
        for (
          n = r.length,
            i[e] = n,
            a.push(e),
            o.push(t),
            r.push(l),
            i = c,
            n = s.length;
          i !== n;
          ++i
        )
          l[i] = new re(s[i], e, t);
        return l;
      },
      unsubscribe_: function (e) {
        var t = this._bindingsIndicesByPath,
          i = t[e];
        if (void 0 !== i) {
          var n = this._paths,
            r = this._parsedPaths,
            a = this._bindings,
            o = a.length - 1,
            s = a[o];
          (t[e[o]] = i),
            (a[i] = s),
            a.pop(),
            (r[i] = r[o]),
            r.pop(),
            (n[i] = n[o]),
            n.pop();
        }
      },
    }),
    Object.assign(ri.prototype, {
      play: function () {
        return this._mixer._activateAction(this), this;
      },
      stop: function () {
        return this._mixer._deactivateAction(this), this.reset();
      },
      reset: function () {
        return (
          (this.paused = !1),
          (this.enabled = !0),
          (this.time = 0),
          (this._loopCount = -1),
          (this._startTime = null),
          this.stopFading().stopWarping()
        );
      },
      isRunning: function () {
        return (
          this.enabled &&
          !this.paused &&
          0 !== this.timeScale &&
          null === this._startTime &&
          this._mixer._isActiveAction(this)
        );
      },
      isScheduled: function () {
        return this._mixer._isActiveAction(this);
      },
      startAt: function (e) {
        return (this._startTime = e), this;
      },
      setLoop: function (e, t) {
        return (this.loop = e), (this.repetitions = t), this;
      },
      setEffectiveWeight: function (e) {
        return (
          (this.weight = e),
          (this._effectiveWeight = this.enabled ? e : 0),
          this.stopFading()
        );
      },
      getEffectiveWeight: function () {
        return this._effectiveWeight;
      },
      fadeIn: function (e) {
        return this._scheduleFading(e, 0, 1);
      },
      fadeOut: function (e) {
        return this._scheduleFading(e, 1, 0);
      },
      crossFadeFrom: function (e, t, i) {
        if ((e.fadeOut(t), this.fadeIn(t), i)) {
          i = this._clip.duration;
          var n = e._clip.duration,
            r = i / n;
          e.warp(1, n / i, t), this.warp(r, 1, t);
        }
        return this;
      },
      crossFadeTo: function (e, t, i) {
        return e.crossFadeFrom(this, t, i);
      },
      stopFading: function () {
        var e = this._weightInterpolant;
        return (
          null !== e &&
            ((this._weightInterpolant = null),
            this._mixer._takeBackControlInterpolant(e)),
          this
        );
      },
      setEffectiveTimeScale: function (e) {
        return (
          (this.timeScale = e),
          (this._effectiveTimeScale = this.paused ? 0 : e),
          this.stopWarping()
        );
      },
      getEffectiveTimeScale: function () {
        return this._effectiveTimeScale;
      },
      setDuration: function (e) {
        return (this.timeScale = this._clip.duration / e), this.stopWarping();
      },
      syncWith: function (e) {
        return (
          (this.time = e.time),
          (this.timeScale = e.timeScale),
          this.stopWarping()
        );
      },
      halt: function (e) {
        return this.warp(this._effectiveTimeScale, 0, e);
      },
      warp: function (e, t, i) {
        var n = this._mixer,
          r = n.time,
          a = this._timeScaleInterpolant,
          o = this.timeScale;
        return (
          null === a &&
            (this._timeScaleInterpolant = a = n._lendControlInterpolant()),
          (n = a.parameterPositions),
          (a = a.sampleValues),
          (n[0] = r),
          (n[1] = r + i),
          (a[0] = e / o),
          (a[1] = t / o),
          this
        );
      },
      stopWarping: function () {
        var e = this._timeScaleInterpolant;
        return (
          null !== e &&
            ((this._timeScaleInterpolant = null),
            this._mixer._takeBackControlInterpolant(e)),
          this
        );
      },
      getMixer: function () {
        return this._mixer;
      },
      getClip: function () {
        return this._clip;
      },
      getRoot: function () {
        return this._localRoot || this._mixer._root;
      },
      _update: function (e, t, i, n) {
        if (this.enabled) {
          var r = this._startTime;
          if (null !== r) {
            if (0 > (t = (e - r) * i) || 0 === i) return;
            (this._startTime = null), (t *= i);
          }
          if (
            ((t *= this._updateTimeScale(e)),
            (i = this._updateTime(t)),
            0 < (e = this._updateWeight(e)))
          ) {
            (t = this._interpolants), (r = this._propertyBindings);
            for (var a = 0, o = t.length; a !== o; ++a)
              t[a].evaluate(i), r[a].accumulate(n, e);
          }
        } else this._updateWeight(e);
      },
      _updateWeight: function (e) {
        var t = 0;
        if (this.enabled) {
          t = this.weight;
          var i = this._weightInterpolant;
          if (null !== i) {
            var n = i.evaluate(e)[0];
            (t *= n),
              e > i.parameterPositions[1] &&
                (this.stopFading(), 0 === n && (this.enabled = !1));
          }
        }
        return (this._effectiveWeight = t);
      },
      _updateTimeScale: function (e) {
        var t = 0;
        if (!this.paused) {
          t = this.timeScale;
          var i = this._timeScaleInterpolant;
          null !== i &&
            ((t *= i.evaluate(e)[0]),
            e > i.parameterPositions[1] &&
              (this.stopWarping(),
              0 === t ? (this.paused = !0) : (this.timeScale = t)));
        }
        return (this._effectiveTimeScale = t);
      },
      _updateTime: function (e) {
        var t = this.time + e,
          i = this._clip.duration,
          n = this.loop,
          r = this._loopCount,
          a = 2202 === n;
        if (0 === e) return -1 === r ? t : a && 1 == (1 & r) ? i - t : t;
        if (2200 === n)
          a: {
            if (
              (-1 === r &&
                ((this._loopCount = 0), this._setEndings(!0, !0, !1)),
              t >= i)
            )
              t = i;
            else if (0 > t) t = 0;
            else {
              this.time = t;
              break a;
            }
            this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (this.time = t),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: 0 > e ? -1 : 1,
              });
          }
        else {
          if (
            (-1 === r &&
              (0 <= e
                ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, a))
                : this._setEndings(0 === this.repetitions, !0, a)),
            t >= i || 0 > t)
          ) {
            (n = Math.floor(t / i)), (t -= i * n), (r += Math.abs(n));
            var o = this.repetitions - r;
            0 >= o
              ? (this.clampWhenFinished
                  ? (this.paused = !0)
                  : (this.enabled = !1),
                (this.time = t = 0 < e ? i : 0),
                this._mixer.dispatchEvent({
                  type: "finished",
                  action: this,
                  direction: 0 < e ? 1 : -1,
                }))
              : (1 === o
                  ? ((e = 0 > e), this._setEndings(e, !e, a))
                  : this._setEndings(!1, !1, a),
                (this._loopCount = r),
                (this.time = t),
                this._mixer.dispatchEvent({
                  type: "loop",
                  action: this,
                  loopDelta: n,
                }));
          } else this.time = t;
          if (a && 1 == (1 & r)) return i - t;
        }
        return t;
      },
      _setEndings: function (e, t, i) {
        var n = this._interpolantSettings;
        i
          ? ((n.endingStart = 2401), (n.endingEnd = 2401))
          : ((n.endingStart = e ? (this.zeroSlopeAtStart ? 2401 : 2400) : 2402),
            (n.endingEnd = t ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
      },
      _scheduleFading: function (e, t, i) {
        var n = this._mixer,
          r = n.time,
          a = this._weightInterpolant;
        return (
          null === a &&
            (this._weightInterpolant = a = n._lendControlInterpolant()),
          (n = a.parameterPositions),
          (a = a.sampleValues),
          (n[0] = r),
          (a[0] = t),
          (n[1] = r + e),
          (a[1] = i),
          this
        );
      },
    }),
    (rn.prototype = Object.assign(Object.create(t.prototype), {
      constructor: rn,
      _bindAction: function (e, t) {
        var i = e._localRoot || this._root,
          n = e._clip.tracks,
          r = n.length,
          a = e._propertyBindings;
        e = e._interpolants;
        var o = i.uuid,
          s = this._bindingsByRootAndName,
          c = s[o];
        for (void 0 === c && ((c = {}), (s[o] = c)), s = 0; s !== r; ++s) {
          var l = n[s],
            h = l.name,
            u = c[h];
          if (void 0 === u) {
            if (void 0 !== (u = a[s])) {
              null === u._cacheIndex &&
                (++u.referenceCount, this._addInactiveBinding(u, o, h));
              continue;
            }
            (u = new nK(
              re.create(i, h, t && t._propertyBindings[s].binding.parsedPath),
              l.ValueTypeName,
              l.getValueSize()
            )),
              ++u.referenceCount,
              this._addInactiveBinding(u, o, h);
          }
          (a[s] = u), (e[s].resultBuffer = u.buffer);
        }
      },
      _activateAction: function (e) {
        if (!this._isActiveAction(e)) {
          if (null === e._cacheIndex) {
            var t = (e._localRoot || this._root).uuid,
              i = e._clip.uuid,
              n = this._actionsByClip[i];
            this._bindAction(e, n && n.knownActions[0]),
              this._addInactiveAction(e, i, t);
          }
          for (t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
            var r = t[i];
            0 == r.useCount++ && (this._lendBinding(r), r.saveOriginalState());
          }
          this._lendAction(e);
        }
      },
      _deactivateAction: function (e) {
        if (this._isActiveAction(e)) {
          for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
            var r = t[i];
            0 == --r.useCount &&
              (r.restoreOriginalState(), this._takeBackBinding(r));
          }
          this._takeBackAction(e);
        }
      },
      _initMemoryManager: function () {
        (this._actions = []),
          (this._nActiveActions = 0),
          (this._actionsByClip = {}),
          (this._bindings = []),
          (this._nActiveBindings = 0),
          (this._bindingsByRootAndName = {}),
          (this._controlInterpolants = []),
          (this._nActiveControlInterpolants = 0),
          (this.stats = {
            actions: {
              get total() {
                return this._actions.length;
              },
              get inUse() {
                return this._nActiveActions;
              },
            },
            bindings: {
              get total() {
                return this._bindings.length;
              },
              get inUse() {
                return this._nActiveBindings;
              },
            },
            controlInterpolants: {
              get total() {
                return this._controlInterpolants.length;
              },
              get inUse() {
                return this._nActiveControlInterpolants;
              },
            },
          });
      },
      _isActiveAction: function (e) {
        return null !== (e = e._cacheIndex) && e < this._nActiveActions;
      },
      _addInactiveAction: function (e, t, i) {
        var n = this._actions,
          r = this._actionsByClip,
          a = r[t];
        void 0 === a
          ? ((a = { knownActions: [e], actionByRoot: {} }),
            (e._byClipCacheIndex = 0),
            (r[t] = a))
          : ((t = a.knownActions), (e._byClipCacheIndex = t.length), t.push(e)),
          (e._cacheIndex = n.length),
          n.push(e),
          (a.actionByRoot[i] = e);
      },
      _removeInactiveAction: function (e) {
        var t = this._actions,
          i = t[t.length - 1],
          n = e._cacheIndex;
        (i._cacheIndex = n),
          (t[n] = i),
          t.pop(),
          (e._cacheIndex = null),
          (t = e._clip.uuid);
        var r = (n = (i = this._actionsByClip)[t]).knownActions,
          a = r[r.length - 1],
          o = e._byClipCacheIndex;
        (a._byClipCacheIndex = o),
          (r[o] = a),
          r.pop(),
          (e._byClipCacheIndex = null),
          delete n.actionByRoot[(e._localRoot || this._root).uuid],
          0 === r.length && delete i[t],
          this._removeInactiveBindingsForAction(e);
      },
      _removeInactiveBindingsForAction: function (e) {
        e = e._propertyBindings;
        for (var t = 0, i = e.length; t !== i; ++t) {
          var n = e[t];
          0 == --n.referenceCount && this._removeInactiveBinding(n);
        }
      },
      _lendAction: function (e) {
        var t = this._actions,
          i = e._cacheIndex,
          n = this._nActiveActions++,
          r = t[n];
        (e._cacheIndex = n), (t[n] = e), (r._cacheIndex = i), (t[i] = r);
      },
      _takeBackAction: function (e) {
        var t = this._actions,
          i = e._cacheIndex,
          n = --this._nActiveActions,
          r = t[n];
        (e._cacheIndex = n), (t[n] = e), (r._cacheIndex = i), (t[i] = r);
      },
      _addInactiveBinding: function (e, t, i) {
        var n = this._bindingsByRootAndName,
          r = n[t],
          a = this._bindings;
        void 0 === r && ((r = {}), (n[t] = r)),
          (r[i] = e),
          (e._cacheIndex = a.length),
          a.push(e);
      },
      _removeInactiveBinding: function (e) {
        var t = this._bindings,
          i = e.binding,
          n = i.rootNode.uuid;
        i = i.path;
        var r = this._bindingsByRootAndName,
          a = r[n],
          o = t[t.length - 1];
        (e = e._cacheIndex),
          (o._cacheIndex = e),
          (t[e] = o),
          t.pop(),
          delete a[i],
          0 === Object.keys(a).length && delete r[n];
      },
      _lendBinding: function (e) {
        var t = this._bindings,
          i = e._cacheIndex,
          n = this._nActiveBindings++,
          r = t[n];
        (e._cacheIndex = n), (t[n] = e), (r._cacheIndex = i), (t[i] = r);
      },
      _takeBackBinding: function (e) {
        var t = this._bindings,
          i = e._cacheIndex,
          n = --this._nActiveBindings,
          r = t[n];
        (e._cacheIndex = n), (t[n] = e), (r._cacheIndex = i), (t[i] = r);
      },
      _lendControlInterpolant: function () {
        var e = this._controlInterpolants,
          t = this._nActiveControlInterpolants++,
          i = e[t];
        return (
          void 0 === i &&
            (((i = new ij(
              new Float32Array(2),
              new Float32Array(2),
              1,
              this._controlInterpolantsResultBuffer
            )).__cacheIndex = t),
            (e[t] = i)),
          i
        );
      },
      _takeBackControlInterpolant: function (e) {
        var t = this._controlInterpolants,
          i = e.__cacheIndex,
          n = --this._nActiveControlInterpolants,
          r = t[n];
        (e.__cacheIndex = n), (t[n] = e), (r.__cacheIndex = i), (t[i] = r);
      },
      _controlInterpolantsResultBuffer: new Float32Array(1),
      clipAction: function (e, t) {
        var i = t || this._root,
          n = i.uuid;
        e =
          null !== (i = "string" == typeof e ? nt.findByName(i, e) : e)
            ? i.uuid
            : e;
        var r = this._actionsByClip[e],
          a = null;
        if (void 0 !== r) {
          if (void 0 !== (a = r.actionByRoot[n])) return a;
          (a = r.knownActions[0]), null === i && (i = a._clip);
        }
        return null === i
          ? null
          : ((t = new ri(this, i, t)),
            this._bindAction(t, a),
            this._addInactiveAction(t, e, n),
            t);
      },
      existingAction: function (e, t) {
        var i = t || this._root;
        return (
          (t = i.uuid),
          (i = "string" == typeof e ? nt.findByName(i, e) : e),
          (void 0 !== (e = this._actionsByClip[i ? i.uuid : e]) &&
            e.actionByRoot[t]) ||
            null
        );
      },
      stopAllAction: function () {
        for (
          var e = this._actions,
            t = this._nActiveActions,
            i = this._bindings,
            n = this._nActiveBindings,
            r = (this._nActiveBindings = this._nActiveActions = 0);
          r !== t;
          ++r
        )
          e[r].reset();
        for (r = 0; r !== n; ++r) i[r].useCount = 0;
        return this;
      },
      update: function (e) {
        e *= this.timeScale;
        for (
          var t = this._actions,
            i = this._nActiveActions,
            n = (this.time += e),
            r = Math.sign(e),
            a = (this._accuIndex ^= 1),
            o = 0;
          o !== i;
          ++o
        )
          t[o]._update(n, e, r, a);
        for (o = 0, e = this._bindings, t = this._nActiveBindings; o !== t; ++o)
          e[o].apply(a);
        return this;
      },
      setTime: function (e) {
        for (var t = (this.time = 0); t < this._actions.length; t++)
          this._actions[t].time = 0;
        return this.update(e);
      },
      getRoot: function () {
        return this._root;
      },
      uncacheClip: function (e) {
        var t = this._actions;
        e = e.uuid;
        var i = this._actionsByClip,
          n = i[e];
        if (void 0 !== n) {
          n = n.knownActions;
          for (var r = 0, a = n.length; r !== a; ++r) {
            var o = n[r];
            this._deactivateAction(o);
            var s = o._cacheIndex,
              c = t[t.length - 1];
            (o._cacheIndex = null),
              (o._byClipCacheIndex = null),
              (c._cacheIndex = s),
              (t[s] = c),
              t.pop(),
              this._removeInactiveBindingsForAction(o);
          }
          delete i[e];
        }
      },
      uncacheRoot: function (e) {
        e = e.uuid;
        var t = this._actionsByClip;
        for (n in t) {
          var i = t[n].actionByRoot[e];
          void 0 !== i &&
            (this._deactivateAction(i), this._removeInactiveAction(i));
        }
        var n = this._bindingsByRootAndName[e];
        if (void 0 !== n)
          for (var r in n)
            (e = n[r]).restoreOriginalState(), this._removeInactiveBinding(e);
      },
      uncacheAction: function (e, t) {
        null !== (e = this.existingAction(e, t)) &&
          (this._deactivateAction(e), this._removeInactiveAction(e));
      },
    })),
    (rr.prototype.clone = function () {
      return new rr(
        void 0 === this.value.clone ? this.value : this.value.clone()
      );
    }),
    (ra.prototype = Object.assign(Object.create(tS.prototype), {
      constructor: ra,
      isInstancedInterleavedBuffer: !0,
      copy: function (e) {
        return (
          tS.prototype.copy.call(this, e),
          (this.meshPerAttribute = e.meshPerAttribute),
          this
        );
      },
    })),
    Object.assign(ro.prototype, {
      linePrecision: 1,
      set: function (e, t) {
        this.ray.set(e, t);
      },
      setFromCamera: function (e, t) {
        t && t.isPerspectiveCamera
          ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
            this.ray.direction
              .set(e.x, e.y, 0.5)
              .unproject(t)
              .sub(this.ray.origin)
              .normalize(),
            (this.camera = t))
          : t && t.isOrthographicCamera
          ? (this.ray.origin
              .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
              .unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
            (this.camera = t))
          : console.error("THREE.Raycaster: Unsupported camera type.");
      },
      intersectObject: function (e, t, i) {
        return rc(e, this, (i = i || []), t), i.sort(rs), i;
      },
      intersectObjects: function (e, t, i) {
        if (((i = i || []), !1 === Array.isArray(e)))
          return (
            console.warn(
              "THREE.Raycaster.intersectObjects: objects is not an Array."
            ),
            i
          );
        for (var n = 0, r = e.length; n < r; n++) rc(e[n], this, i, t);
        return i.sort(rs), i;
      },
    }),
    Object.assign(rl.prototype, {
      set: function (e, t, i) {
        return (this.radius = e), (this.phi = t), (this.theta = i), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          (this.radius = e.radius),
          (this.phi = e.phi),
          (this.theta = e.theta),
          this
        );
      },
      makeSafe: function () {
        return (
          (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
        );
      },
      setFromVector3: function (e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
      },
      setFromCartesianCoords: function (e, t, i) {
        return (
          (this.radius = Math.sqrt(e * e + t * t + i * i)),
          0 === this.radius
            ? (this.phi = this.theta = 0)
            : ((this.theta = Math.atan2(e, i)),
              (this.phi = Math.acos(rH.clamp(t / this.radius, -1, 1)))),
          this
        );
      },
    }),
    Object.assign(rh.prototype, {
      set: function (e, t, i) {
        return (this.radius = e), (this.theta = t), (this.y = i), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          (this.radius = e.radius), (this.theta = e.theta), (this.y = e.y), this
        );
      },
      setFromVector3: function (e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
      },
      setFromCartesianCoords: function (e, t, i) {
        return (
          (this.radius = Math.sqrt(e * e + i * i)),
          (this.theta = Math.atan2(e, i)),
          (this.y = t),
          this
        );
      },
    });
  var sU = new i();
  Object.assign(ru.prototype, {
    set: function (e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    },
    setFromPoints: function (e) {
      this.makeEmpty();
      for (var t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
      return this;
    },
    setFromCenterAndSize: function (e, t) {
      return (
        (t = sU.copy(t).multiplyScalar(0.5)),
        this.min.copy(e).sub(t),
        this.max.copy(e).add(t),
        this
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    },
    makeEmpty: function () {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    },
    isEmpty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    getCenter: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box2: .getCenter() target is now required"),
          (e = new i())),
        this.isEmpty()
          ? e.set(0, 0)
          : e.addVectors(this.min, this.max).multiplyScalar(0.5)
      );
    },
    getSize: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box2: .getSize() target is now required"),
          (e = new i())),
        this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
      );
    },
    expandByPoint: function (e) {
      return this.min.min(e), this.max.max(e), this;
    },
    expandByVector: function (e) {
      return this.min.sub(e), this.max.add(e), this;
    },
    expandByScalar: function (e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    },
    containsPoint: function (e) {
      return (
        !(e.x < this.min.x) &&
        !(e.x > this.max.x) &&
        !(e.y < this.min.y) &&
        !(e.y > this.max.y)
      );
    },
    containsBox: function (e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y
      );
    },
    getParameter: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box2: .getParameter() target is now required"),
          (t = new i())),
        t.set(
          (e.x - this.min.x) / (this.max.x - this.min.x),
          (e.y - this.min.y) / (this.max.y - this.min.y)
        )
      );
    },
    intersectsBox: function (e) {
      return (
        !(e.max.x < this.min.x) &&
        !(e.min.x > this.max.x) &&
        !(e.max.y < this.min.y) &&
        !(e.min.y > this.max.y)
      );
    },
    clampPoint: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box2: .clampPoint() target is now required"),
          (t = new i())),
        t.copy(e).clamp(this.min, this.max)
      );
    },
    distanceToPoint: function (e) {
      return sU.copy(e).clamp(this.min, this.max).sub(e).length();
    },
    intersect: function (e) {
      return this.min.max(e.min), this.max.min(e.max), this;
    },
    union: function (e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    },
    translate: function (e) {
      return this.min.add(e), this.max.add(e), this;
    },
    equals: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    },
  });
  var sF = new r(),
    sG = new r();
  Object.assign(rp.prototype, {
    set: function (e, t) {
      return this.start.copy(e), this.end.copy(t), this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (e) {
      return this.start.copy(e.start), this.end.copy(e.end), this;
    },
    getCenter: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Line3: .getCenter() target is now required"),
          (e = new r())),
        e.addVectors(this.start, this.end).multiplyScalar(0.5)
      );
    },
    delta: function (e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Line3: .delta() target is now required"),
          (e = new r())),
        e.subVectors(this.end, this.start)
      );
    },
    distanceSq: function () {
      return this.start.distanceToSquared(this.end);
    },
    distance: function () {
      return this.start.distanceTo(this.end);
    },
    at: function (e, t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Line3: .at() target is now required"),
          (t = new r())),
        this.delta(t).multiplyScalar(e).add(this.start)
      );
    },
    closestPointToPointParameter: function (e, t) {
      return (
        sF.subVectors(e, this.start),
        sG.subVectors(this.end, this.start),
        (e = sG.dot(sG)),
        (e = sG.dot(sF) / e),
        t && (e = rH.clamp(e, 0, 1)),
        e
      );
    },
    closestPointToPoint: function (e, t, i) {
      return (
        (e = this.closestPointToPointParameter(e, t)),
        void 0 === i &&
          (console.warn(
            "THREE.Line3: .closestPointToPoint() target is now required"
          ),
          (i = new r())),
        this.delta(i).multiplyScalar(e).add(this.start)
      );
    },
    applyMatrix4: function (e) {
      return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
    },
    equals: function (e) {
      return e.start.equals(this.start) && e.end.equals(this.end);
    },
  }),
    (rd.prototype = Object.create(d.prototype)),
    (rd.prototype.constructor = rd),
    (rd.prototype.isImmediateRenderObject = !0);
  var s3 = new r();
  (rf.prototype = Object.create(d.prototype)),
    (rf.prototype.constructor = rf),
    (rf.prototype.dispose = function () {
      this.cone.geometry.dispose(), this.cone.material.dispose();
    }),
    (rf.prototype.update = function () {
      this.light.updateMatrixWorld();
      var e = this.light.distance ? this.light.distance : 1e3,
        t = e * Math.tan(this.light.angle);
      this.cone.scale.set(t, t, e),
        s3.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(s3),
        void 0 !== this.color
          ? this.cone.material.color.set(this.color)
          : this.cone.material.color.copy(this.light.color);
    });
  var sH = new r(),
    sO = new h(),
    sV = new h();
  (rm.prototype = Object.create(tN.prototype)),
    (rm.prototype.constructor = rm),
    (rm.prototype.updateMatrixWorld = function (e) {
      var t = this.bones,
        i = this.geometry,
        n = i.getAttribute("position");
      sV.getInverse(this.root.matrixWorld);
      for (var r = 0, a = 0; r < t.length; r++) {
        var o = t[r];
        o.parent &&
          o.parent.isBone &&
          (sO.multiplyMatrices(sV, o.matrixWorld),
          sH.setFromMatrixPosition(sO),
          n.setXYZ(a, sH.x, sH.y, sH.z),
          sO.multiplyMatrices(sV, o.parent.matrixWorld),
          sH.setFromMatrixPosition(sO),
          n.setXYZ(a + 1, sH.x, sH.y, sH.z),
          (a += 2));
      }
      (i.getAttribute("position").needsUpdate = !0),
        d.prototype.updateMatrixWorld.call(this, e);
    }),
    (rg.prototype = Object.create(H.prototype)),
    (rg.prototype.constructor = rg),
    (rg.prototype.dispose = function () {
      this.geometry.dispose(), this.material.dispose();
    }),
    (rg.prototype.update = function () {
      void 0 !== this.color
        ? this.material.color.set(this.color)
        : this.material.color.copy(this.light.color);
    });
  var s4 = new r(),
    sk = new _(),
    sW = new _();
  (rv.prototype = Object.create(d.prototype)),
    (rv.prototype.constructor = rv),
    (rv.prototype.dispose = function () {
      this.children[0].geometry.dispose(), this.children[0].material.dispose();
    }),
    (rv.prototype.update = function () {
      var e = this.children[0];
      if (void 0 !== this.color) this.material.color.set(this.color);
      else {
        var t = e.geometry.getAttribute("color");
        sk.copy(this.light.color), sW.copy(this.light.groundColor);
        for (var i = 0, n = t.count; i < n; i++) {
          var r = i < n / 2 ? sk : sW;
          t.setXYZ(i, r.r, r.g, r.b);
        }
        t.needsUpdate = !0;
      }
      e.lookAt(s4.setFromMatrixPosition(this.light.matrixWorld).negate());
    }),
    (r$.prototype = Object.assign(Object.create(tN.prototype), {
      constructor: r$,
      copy: function (e) {
        return (
          tN.prototype.copy.call(this, e),
          this.geometry.copy(e.geometry),
          this.material.copy(e.material),
          this
        );
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
    })),
    (ry.prototype = Object.create(tN.prototype)),
    (ry.prototype.constructor = ry);
  var s5 = new r(),
    s6 = new r(),
    s7 = new r();
  (rx.prototype = Object.create(d.prototype)),
    (rx.prototype.constructor = rx),
    (rx.prototype.dispose = function () {
      this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose();
    }),
    (rx.prototype.update = function () {
      s5.setFromMatrixPosition(this.light.matrixWorld),
        s6.setFromMatrixPosition(this.light.target.matrixWorld),
        s7.subVectors(s6, s5),
        this.lightPlane.lookAt(s6),
        void 0 !== this.color
          ? (this.lightPlane.material.color.set(this.color),
            this.targetLine.material.color.set(this.color))
          : (this.lightPlane.material.color.copy(this.light.color),
            this.targetLine.material.color.copy(this.light.color)),
        this.targetLine.lookAt(s6),
        (this.targetLine.scale.z = s7.length());
    });
  var sj = new r(),
    sq = new X();
  (r_.prototype = Object.create(tN.prototype)),
    (r_.prototype.constructor = r_),
    (r_.prototype.update = function () {
      var e = this.geometry,
        t = this.pointMap;
      sq.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
        r8("c", t, e, sq, 0, 0, -1),
        r8("t", t, e, sq, 0, 0, 1),
        r8("n1", t, e, sq, -1, -1, -1),
        r8("n2", t, e, sq, 1, -1, -1),
        r8("n3", t, e, sq, -1, 1, -1),
        r8("n4", t, e, sq, 1, 1, -1),
        r8("f1", t, e, sq, -1, -1, 1),
        r8("f2", t, e, sq, 1, -1, 1),
        r8("f3", t, e, sq, -1, 1, 1),
        r8("f4", t, e, sq, 1, 1, 1),
        r8("u1", t, e, sq, 0.7, 1.1, -1),
        r8("u2", t, e, sq, -0.7, 1.1, -1),
        r8("u3", t, e, sq, 0, 2, -1),
        r8("cf1", t, e, sq, -1, 0, 1),
        r8("cf2", t, e, sq, 1, 0, 1),
        r8("cf3", t, e, sq, 0, -1, 1),
        r8("cf4", t, e, sq, 0, 1, 1),
        r8("cn1", t, e, sq, -1, 0, -1),
        r8("cn2", t, e, sq, 1, 0, -1),
        r8("cn3", t, e, sq, 0, -1, -1),
        r8("cn4", t, e, sq, 0, 1, -1),
        (e.getAttribute("position").needsUpdate = !0);
    });
  var sX = new m();
  (rw.prototype = Object.create(tN.prototype)),
    (rw.prototype.constructor = rw),
    (rw.prototype.update = function (e) {
      if (
        (void 0 !== e &&
          console.warn("THREE.BoxHelper: .update() has no longer arguments."),
        void 0 !== this.object && sX.setFromObject(this.object),
        !sX.isEmpty())
      ) {
        e = sX.min;
        var t = sX.max,
          i = this.geometry.attributes.position,
          n = i.array;
        (n[0] = t.x),
          (n[1] = t.y),
          (n[2] = t.z),
          (n[3] = e.x),
          (n[4] = t.y),
          (n[5] = t.z),
          (n[6] = e.x),
          (n[7] = e.y),
          (n[8] = t.z),
          (n[9] = t.x),
          (n[10] = e.y),
          (n[11] = t.z),
          (n[12] = t.x),
          (n[13] = t.y),
          (n[14] = e.z),
          (n[15] = e.x),
          (n[16] = t.y),
          (n[17] = e.z),
          (n[18] = e.x),
          (n[19] = e.y),
          (n[20] = e.z),
          (n[21] = t.x),
          (n[22] = e.y),
          (n[23] = e.z),
          (i.needsUpdate = !0),
          this.geometry.computeBoundingSphere();
      }
    }),
    (rw.prototype.setFromObject = function (e) {
      return (this.object = e), this.update(), this;
    }),
    (rw.prototype.copy = function (e) {
      return tN.prototype.copy.call(this, e), (this.object = e.object), this;
    }),
    (rw.prototype.clone = function () {
      return new this.constructor().copy(this);
    }),
    (rb.prototype = Object.create(tN.prototype)),
    (rb.prototype.constructor = rb),
    (rb.prototype.updateMatrixWorld = function (e) {
      var t = this.box;
      t.isEmpty() ||
        (t.getCenter(this.position),
        t.getSize(this.scale),
        this.scale.multiplyScalar(0.5),
        d.prototype.updateMatrixWorld.call(this, e));
    }),
    (rM.prototype = Object.create(tI.prototype)),
    (rM.prototype.constructor = rM),
    (rM.prototype.updateMatrixWorld = function (e) {
      var t = -this.plane.constant;
      1e-8 > Math.abs(t) && (t = 1e-8),
        this.scale.set(0.5 * this.size, 0.5 * this.size, t),
        (this.children[0].material.side = 0 > t ? 1 : 0),
        this.lookAt(this.plane.normal),
        d.prototype.updateMatrixWorld.call(this, e);
    });
  var sY,
    sZ,
    sJ = new r();
  (rS.prototype = Object.create(d.prototype)),
    (rS.prototype.constructor = rS),
    (rS.prototype.setDirection = function (e) {
      0.99999 < e.y
        ? this.quaternion.set(0, 0, 0, 1)
        : -0.99999 > e.y
        ? this.quaternion.set(1, 0, 0, 0)
        : (sJ.set(e.z, 0, -e.x).normalize(),
          this.quaternion.setFromAxisAngle(sJ, Math.acos(e.y)));
    }),
    (rS.prototype.setLength = function (e, t, i) {
      void 0 === t && (t = 0.2 * e),
        void 0 === i && (i = 0.2 * t),
        this.line.scale.set(1, Math.max(1e-4, e - t), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(i, t, i),
        (this.cone.position.y = e),
        this.cone.updateMatrix();
    }),
    (rS.prototype.setColor = function (e) {
      this.line.material.color.set(e), this.cone.material.color.set(e);
    }),
    (rS.prototype.copy = function (e) {
      return (
        d.prototype.copy.call(this, e, !1),
        this.line.copy(e.line),
        this.cone.copy(e.cone),
        this
      );
    }),
    (rS.prototype.clone = function () {
      return new this.constructor().copy(this);
    }),
    (rT.prototype = Object.create(tN.prototype)),
    (rT.prototype.constructor = rT);
  var sQ,
    sK,
    s9 = 20,
    ce = 256,
    ct = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    ci = 5 + ct.length,
    cn = { 3e3: 0, 3001: 1, 3002: 2, 3004: 3, 3005: 4, 3006: 5, 3007: 6 },
    cr = new nI(),
    ca =
      ((sQ = new Float32Array(s9)),
      (sK = new r(0, 1, 0)),
      ((s9 = new iG({
        defines: { n: s9 },
        uniforms: {
          envMap: { value: null },
          samples: { value: 1 },
          weights: { value: sQ },
          latitudinal: { value: !1 },
          dTheta: { value: 0 },
          mipInt: { value: 0 },
          poleAxis: { value: sK },
          inputEncoding: { value: cn[3e3] },
          outputEncoding: { value: cn[3e3] },
        },
        vertexShader: rz(),
        fragmentShader:
          "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n" +
          rB() +
          "\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n	gl_FragColor = vec4(0.0);\n	for (int i = 0; i < n; i++) {\n		if (i >= samples)\n			break;\n		for (int dir = -1; dir < 2; dir += 2) {\n			if (i == 0 && dir == 1)\n				continue;\n			vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n			if (all(equal(axis, vec3(0.0))))\n				axis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n			axis = normalize(axis);\n			float theta = dTheta * float(dir * i);\n			float cosTheta = cos(theta);\n			// Rodrigues' axis-angle rotation\n			vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross(axis, vOutputDirection) * sin(theta)\n					+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n			gl_FragColor.rgb +=\n					weights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n		}\n	}\n	gl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n		",
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      })).type = "SphericalGaussianBlur"),
      s9),
    co = null,
    cs = null,
    cc = (function () {
      for (var e = [], t = [], i = [], n = 8, r = 0; r < ci; r++) {
        var a = Math.pow(2, n);
        t.push(a);
        var o = 1 / a;
        4 < r ? (o = ct[r - 8 + 4 - 1]) : 0 == r && (o = 0), i.push(o);
        var s = [
          (a = -(o = 1 / (a - 1)) / 2),
          a,
          (o = 1 + o / 2),
          a,
          o,
          o,
          a,
          a,
          o,
          o,
          a,
          o,
        ];
        (a = new Float32Array(108)), (o = new Float32Array(72));
        for (var c = new Float32Array(36), l = 0; 6 > l; l++) {
          var h = ((l % 3) * 2) / 3 - 1,
            u = 2 < l ? 0 : -1;
          a.set(
            [
              h,
              u,
              0,
              h + 2 / 3,
              u,
              0,
              h + 2 / 3,
              u + 1,
              0,
              h,
              u,
              0,
              h + 2 / 3,
              u + 1,
              0,
              h,
              u + 1,
              0,
            ],
            18 * l
          ),
            o.set(s, 12 * l),
            c.set([l, l, l, l, l, l], 6 * l);
        }
        (s = new G()).setAttribute("position", new L(a, 3)),
          s.setAttribute("uv", new L(o, 2)),
          s.setAttribute("faceIndex", new L(c, 1)),
          e.push(s),
          4 < n && n--;
      }
      return { _lodPlanes: e, _sizeLods: t, _sigmas: i };
    })(),
    cl = cc._lodPlanes,
    ch = cc._sizeLods,
    cu = cc._sigmas,
    cp = null,
    cd = null,
    cf = (1 + Math.sqrt(5)) / 2,
    cm = 1 / cf,
    cg = [
      new r(1, 1, 1),
      new r(-1, 1, 1),
      new r(1, 1, -1),
      new r(-1, 1, -1),
      new r(0, cf, cm),
      new r(0, cf, -cm),
      new r(cm, 0, cf),
      new r(-cm, 0, cf),
      new r(cf, cm, 0),
      new r(-cf, cm, 0),
    ];
  (rE.prototype = {
    constructor: rE,
    fromScene: function (e, t, i, n) {
      void 0 === t && (t = 0),
        void 0 === i && (i = 0.1),
        void 0 === n && (n = 100);
      var r = r1();
      (i = new Y(90, 1, i, n)), (n = [1, 1, 1, 1, -1, 1]);
      var a = [1, 1, -1, -1, -1, 1],
        o = cd.outputEncoding,
        s = cd.toneMapping,
        c = cd.toneMappingExposure,
        l = cd.getClearColor(),
        h = cd.getClearAlpha();
      (cd.toneMapping = 1),
        (cd.toneMappingExposure = 1),
        (cd.outputEncoding = 3e3),
        (e.scale.z *= -1);
      var u = e.background;
      if (u && u.isColor) {
        u.convertSRGBToLinear();
        var p = Math.min(
          Math.max(Math.ceil(Math.log2(Math.max(u.r, u.g, u.b))), -128),
          127
        );
        (u = u.multiplyScalar(Math.pow(2, -p))),
          cd.setClearColor(u, (p + 128) / 255),
          (e.background = null);
      }
      for (cd.setRenderTarget(r), u = 0; 6 > u; u++)
        0 == (p = u % 3)
          ? (i.up.set(0, n[u], 0), i.lookAt(a[u], 0, 0))
          : 1 == p
          ? (i.up.set(0, 0, n[u]), i.lookAt(0, a[u], 0))
          : (i.up.set(0, n[u], 0), i.lookAt(0, 0, a[u])),
          rR(p * ce, 2 < u ? ce : 0, ce, ce),
          cd.render(e, i);
      return (
        (cd.toneMapping = s),
        (cd.toneMappingExposure = c),
        (cd.outputEncoding = o),
        cd.setClearColor(l, h),
        (e.scale.z *= -1),
        0 < t && rC(r, 0, 0, t),
        rP(r),
        r0(),
        (r.scissorTest = !1),
        r
      );
    },
    fromEquirectangular: function (e) {
      return (
        (e.magFilter = 1003),
        (e.minFilter = 1003),
        (e.generateMipmaps = !1),
        this.fromCubemap(e)
      );
    },
    fromCubemap: function (e) {
      var t = r1(e),
        i = new f();
      e.isCubeTexture ? null == cs && (cs = rN()) : null == co && (co = rI());
      var n = e.isCubeTexture ? cs : co;
      return (
        i.add(new H(cl[0], n)),
        ((n = n.uniforms).envMap.value = e),
        e.isCubeTexture ||
          n.texelSize.value.set(1 / e.image.width, 1 / e.image.height),
        (n.inputEncoding.value = cn[e.encoding]),
        (n.outputEncoding.value = cn[e.encoding]),
        cd.setRenderTarget(t),
        rR(0, 0, 3 * ce, 2 * ce),
        cd.render(i, cr),
        rP(t),
        r0(),
        (t.scissorTest = !1),
        t
      );
    },
    compileCubemapShader: function () {
      null == cs && ((cs = rN()), rL(cs));
    },
    compileEquirectangularShader: function () {
      null == co && ((co = rI()), rL(co));
    },
    dispose: function () {
      ca.dispose(), null != cs && cs.dispose(), null != co && co.dispose();
      for (var e = 0; e < cl.length; e++) cl[e].dispose();
    },
  }),
    (np.create = function (e, t) {
      return (
        console.log("THREE.Curve.create() has been deprecated"),
        (e.prototype = Object.create(np.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.getPoint = t),
        e
      );
    }),
    Object.assign(nT.prototype, {
      createPointsGeometry: function (e) {
        return (
          console.warn(
            "THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
          ),
          (e = this.getPoints(e)),
          this.createGeometry(e)
        );
      },
      createSpacedPointsGeometry: function (e) {
        return (
          console.warn(
            "THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
          ),
          (e = this.getSpacedPoints(e)),
          this.createGeometry(e)
        );
      },
      createGeometry: function (e) {
        console.warn(
          "THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
        );
        for (var t = new k(), i = 0, n = e.length; i < n; i++) {
          var a = e[i];
          t.vertices.push(new r(a.x, a.y, a.z || 0));
        }
        return t;
      },
    }),
    Object.assign(nE.prototype, {
      fromPoints: function (e) {
        return (
          console.warn(
            "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
          ),
          this.setFromPoints(e)
        );
      },
    }),
    (r2.prototype = Object.create(ng.prototype)),
    (rU.prototype = Object.create(ng.prototype)),
    (rF.prototype = Object.create(ng.prototype)),
    Object.assign(rF.prototype, {
      initFromArray: function () {
        console.error("THREE.Spline: .initFromArray() has been removed.");
      },
      getControlPointsArray: function () {
        console.error(
          "THREE.Spline: .getControlPointsArray() has been removed."
        );
      },
      reparametrizeByArcLength: function () {
        console.error(
          "THREE.Spline: .reparametrizeByArcLength() has been removed."
        );
      },
    }),
    (r$.prototype.setColors = function () {
      console.error(
        "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
      );
    }),
    (rm.prototype.update = function () {
      console.error(
        "THREE.SkeletonHelper: update() no longer needs to be called."
      );
    }),
    Object.assign(nr.prototype, {
      extractUrlBase: function (e) {
        return (
          console.warn(
            "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
          ),
          s$.extractUrlBase(e)
        );
      },
    }),
    (nr.Handlers = {
      add: function () {
        console.error(
          "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
        );
      },
      get: function () {
        console.error(
          "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
        );
      },
    }),
    Object.assign(nH.prototype, {
      setTexturePath: function (e) {
        return (
          console.warn(
            "THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
          ),
          this.setResourcePath(e)
        );
      },
    }),
    Object.assign(ru.prototype, {
      center: function (e) {
        return (
          console.warn(
            "THREE.Box2: .center() has been renamed to .getCenter()."
          ),
          this.getCenter(e)
        );
      },
      empty: function () {
        return (
          console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
          this.isEmpty()
        );
      },
      isIntersectionBox: function (e) {
        return (
          console.warn(
            "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
          ),
          this.intersectsBox(e)
        );
      },
      size: function (e) {
        return (
          console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
          this.getSize(e)
        );
      },
    }),
    Object.assign(m.prototype, {
      center: function (e) {
        return (
          console.warn(
            "THREE.Box3: .center() has been renamed to .getCenter()."
          ),
          this.getCenter(e)
        );
      },
      empty: function () {
        return (
          console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
          this.isEmpty()
        );
      },
      isIntersectionBox: function (e) {
        return (
          console.warn(
            "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
          ),
          this.intersectsBox(e)
        );
      },
      isIntersectionSphere: function (e) {
        return (
          console.warn(
            "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
          ),
          this.intersectsSphere(e)
        );
      },
      size: function (e) {
        return (
          console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
          this.getSize(e)
        );
      },
    }),
    (rp.prototype.center = function (e) {
      return (
        console.warn(
          "THREE.Line3: .center() has been renamed to .getCenter()."
        ),
        this.getCenter(e)
      );
    }),
    Object.assign(rH, {
      random16: function () {
        return (
          console.warn(
            "THREE.Math: .random16() has been deprecated. Use Math.random() instead."
          ),
          Math.random()
        );
      },
      nearestPowerOfTwo: function (e) {
        return (
          console.warn(
            "THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."
          ),
          rH.floorPowerOfTwo(e)
        );
      },
      nextPowerOfTwo: function (e) {
        return (
          console.warn(
            "THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."
          ),
          rH.ceilPowerOfTwo(e)
        );
      },
    }),
    Object.assign(a.prototype, {
      flattenToArrayOffset: function (e, t) {
        return (
          console.warn(
            "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
          ),
          this.toArray(e, t)
        );
      },
      multiplyVector3: function (e) {
        return (
          console.warn(
            "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
          ),
          e.applyMatrix3(this)
        );
      },
      multiplyVector3Array: function () {
        console.error(
          "THREE.Matrix3: .multiplyVector3Array() has been removed."
        );
      },
      applyToBuffer: function (e) {
        return (
          console.warn(
            "THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
          ),
          this.applyToBufferAttribute(e)
        );
      },
      applyToVector3Array: function () {
        console.error(
          "THREE.Matrix3: .applyToVector3Array() has been removed."
        );
      },
    }),
    Object.assign(h.prototype, {
      extractPosition: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
          ),
          this.copyPosition(e)
        );
      },
      flattenToArrayOffset: function (e, t) {
        return (
          console.warn(
            "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
          ),
          this.toArray(e, t)
        );
      },
      getPosition: function () {
        return (
          console.warn(
            "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
          ),
          new r().setFromMatrixColumn(this, 3)
        );
      },
      setRotationFromQuaternion: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
          ),
          this.makeRotationFromQuaternion(e)
        );
      },
      multiplyToArray: function () {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
      },
      multiplyVector3: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
          ),
          e.applyMatrix4(this)
        );
      },
      multiplyVector4: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
          ),
          e.applyMatrix4(this)
        );
      },
      multiplyVector3Array: function () {
        console.error(
          "THREE.Matrix4: .multiplyVector3Array() has been removed."
        );
      },
      rotateAxis: function (e) {
        console.warn(
          "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
        ),
          e.transformDirection(this);
      },
      crossVector: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
          ),
          e.applyMatrix4(this)
        );
      },
      translate: function () {
        console.error("THREE.Matrix4: .translate() has been removed.");
      },
      rotateX: function () {
        console.error("THREE.Matrix4: .rotateX() has been removed.");
      },
      rotateY: function () {
        console.error("THREE.Matrix4: .rotateY() has been removed.");
      },
      rotateZ: function () {
        console.error("THREE.Matrix4: .rotateZ() has been removed.");
      },
      rotateByAxis: function () {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
      },
      applyToBuffer: function (e) {
        return (
          console.warn(
            "THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
          ),
          this.applyToBufferAttribute(e)
        );
      },
      applyToVector3Array: function () {
        console.error(
          "THREE.Matrix4: .applyToVector3Array() has been removed."
        );
      },
      makeFrustum: function (e, t, i, n, r, a) {
        return (
          console.warn(
            "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
          ),
          this.makePerspective(e, t, n, i, r, a)
        );
      },
    }),
    (y.prototype.isIntersectionLine = function (e) {
      return (
        console.warn(
          "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
        ),
        this.intersectsLine(e)
      );
    }),
    (n.prototype.multiplyVector3 = function (e) {
      return (
        console.warn(
          "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
        ),
        e.applyQuaternion(this)
      );
    }),
    Object.assign($.prototype, {
      isIntersectionBox: function (e) {
        return (
          console.warn(
            "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
          ),
          this.intersectsBox(e)
        );
      },
      isIntersectionPlane: function (e) {
        return (
          console.warn(
            "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
          ),
          this.intersectsPlane(e)
        );
      },
      isIntersectionSphere: function (e) {
        return (
          console.warn(
            "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
          ),
          this.intersectsSphere(e)
        );
      },
    }),
    Object.assign(x.prototype, {
      area: function () {
        return (
          console.warn(
            "THREE.Triangle: .area() has been renamed to .getArea()."
          ),
          this.getArea()
        );
      },
      barycoordFromPoint: function (e, t) {
        return (
          console.warn(
            "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
          ),
          this.getBarycoord(e, t)
        );
      },
      midpoint: function (e) {
        return (
          console.warn(
            "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
          ),
          this.getMidpoint(e)
        );
      },
      normal: function (e) {
        return (
          console.warn(
            "THREE.Triangle: .normal() has been renamed to .getNormal()."
          ),
          this.getNormal(e)
        );
      },
      plane: function (e) {
        return (
          console.warn(
            "THREE.Triangle: .plane() has been renamed to .getPlane()."
          ),
          this.getPlane(e)
        );
      },
    }),
    Object.assign(x, {
      barycoordFromPoint: function (e, t, i, n, r) {
        return (
          console.warn(
            "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
          ),
          x.getBarycoord(e, t, i, n, r)
        );
      },
      normal: function (e, t, i, n) {
        return (
          console.warn(
            "THREE.Triangle: .normal() has been renamed to .getNormal()."
          ),
          x.getNormal(e, t, i, n)
        );
      },
    }),
    Object.assign(n1.prototype, {
      extractAllPoints: function (e) {
        return (
          console.warn(
            "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
          ),
          this.extractPoints(e)
        );
      },
      extrude: function (e) {
        return (
          console.warn(
            "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
          ),
          new i8(this, e)
        );
      },
      makeGeometry: function (e) {
        return (
          console.warn(
            "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
          ),
          new iR(this, e)
        );
      },
    }),
    Object.assign(i.prototype, {
      fromAttribute: function (e, t, i) {
        return (
          console.warn(
            "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
          ),
          this.fromBufferAttribute(e, t, i)
        );
      },
      distanceToManhattan: function (e) {
        return (
          console.warn(
            "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
          ),
          this.manhattanDistanceTo(e)
        );
      },
      lengthManhattan: function () {
        return (
          console.warn(
            "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
          ),
          this.manhattanLength()
        );
      },
    }),
    Object.assign(r.prototype, {
      setEulerFromRotationMatrix: function () {
        console.error(
          "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
        );
      },
      setEulerFromQuaternion: function () {
        console.error(
          "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
        );
      },
      getPositionFromMatrix: function (e) {
        return (
          console.warn(
            "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
          ),
          this.setFromMatrixPosition(e)
        );
      },
      getScaleFromMatrix: function (e) {
        return (
          console.warn(
            "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
          ),
          this.setFromMatrixScale(e)
        );
      },
      getColumnFromMatrix: function (e, t) {
        return (
          console.warn(
            "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
          ),
          this.setFromMatrixColumn(t, e)
        );
      },
      applyProjection: function (e) {
        return (
          console.warn(
            "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
          ),
          this.applyMatrix4(e)
        );
      },
      fromAttribute: function (e, t, i) {
        return (
          console.warn(
            "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
          ),
          this.fromBufferAttribute(e, t, i)
        );
      },
      distanceToManhattan: function (e) {
        return (
          console.warn(
            "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
          ),
          this.manhattanDistanceTo(e)
        );
      },
      lengthManhattan: function () {
        return (
          console.warn(
            "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
          ),
          this.manhattanLength()
        );
      },
    }),
    Object.assign(s.prototype, {
      fromAttribute: function (e, t, i) {
        return (
          console.warn(
            "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
          ),
          this.fromBufferAttribute(e, t, i)
        );
      },
      lengthManhattan: function () {
        return (
          console.warn(
            "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
          ),
          this.manhattanLength()
        );
      },
    }),
    Object.assign(k.prototype, {
      computeTangents: function () {
        console.error("THREE.Geometry: .computeTangents() has been removed.");
      },
      computeLineDistances: function () {
        console.error(
          "THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead."
        );
      },
    }),
    Object.assign(d.prototype, {
      getChildByName: function (e) {
        return (
          console.warn(
            "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
          ),
          this.getObjectByName(e)
        );
      },
      renderDepth: function () {
        console.warn(
          "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
        );
      },
      translate: function (e, t) {
        return (
          console.warn(
            "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
          ),
          this.translateOnAxis(t, e)
        );
      },
      getWorldRotation: function () {
        console.error(
          "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
        );
      },
    }),
    Object.defineProperties(d.prototype, {
      eulerOrder: {
        get: function () {
          return (
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
          );
        },
        set: function (e) {
          console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            (this.rotation.order = e);
        },
      },
      useQuaternion: {
        get: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
        set: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
      },
    }),
    Object.assign(H.prototype, {
      setDrawMode: function () {
        console.error(
          "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
        );
      },
    }),
    Object.defineProperties(H.prototype, {
      drawMode: {
        get: function () {
          return (
            console.error(
              "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
            ),
            0
          );
        },
        set: function () {
          console.error(
            "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
          );
        },
      },
    }),
    Object.defineProperties(tL.prototype, {
      objects: {
        get: function () {
          return (
            console.warn("THREE.LOD: .objects has been renamed to .levels."),
            this.levels
          );
        },
      },
    }),
    Object.defineProperty(tR.prototype, "useVertexTexture", {
      get: function () {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.");
      },
      set: function () {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.");
      },
    }),
    (tA.prototype.initBones = function () {
      console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }),
    Object.defineProperty(np.prototype, "__arcLengthDivisions", {
      get: function () {
        return (
          console.warn(
            "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
          ),
          this.arcLengthDivisions
        );
      },
      set: function (e) {
        console.warn(
          "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
        ),
          (this.arcLengthDivisions = e);
      },
    }),
    (Y.prototype.setLens = function (e, t) {
      console.warn(
        "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
      ),
        void 0 !== t && (this.filmGauge = t),
        this.setFocalLength(e);
    }),
    Object.defineProperties(n0.prototype, {
      onlyShadow: {
        set: function () {
          console.warn("THREE.Light: .onlyShadow has been removed.");
        },
      },
      shadowCameraFov: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
          ),
            (this.shadow.camera.fov = e);
        },
      },
      shadowCameraLeft: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
          ),
            (this.shadow.camera.left = e);
        },
      },
      shadowCameraRight: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
          ),
            (this.shadow.camera.right = e);
        },
      },
      shadowCameraTop: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
          ),
            (this.shadow.camera.top = e);
        },
      },
      shadowCameraBottom: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
          ),
            (this.shadow.camera.bottom = e);
        },
      },
      shadowCameraNear: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
          ),
            (this.shadow.camera.near = e);
        },
      },
      shadowCameraFar: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
          ),
            (this.shadow.camera.far = e);
        },
      },
      shadowCameraVisible: {
        set: function () {
          console.warn(
            "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
          );
        },
      },
      shadowBias: {
        set: function (e) {
          console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            (this.shadow.bias = e);
        },
      },
      shadowDarkness: {
        set: function () {
          console.warn("THREE.Light: .shadowDarkness has been removed.");
        },
      },
      shadowMapWidth: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
          ),
            (this.shadow.mapSize.width = e);
        },
      },
      shadowMapHeight: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
          ),
            (this.shadow.mapSize.height = e);
        },
      },
    }),
    Object.defineProperties(L.prototype, {
      length: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
            ),
            this.array.length
          );
        },
      },
      dynamic: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
            ),
            35048 === this.usage
          );
        },
        set: function () {
          console.warn(
            "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
          ),
            this.setUsage(35048);
        },
      },
    }),
    Object.assign(L.prototype, {
      setDynamic: function (e) {
        return (
          console.warn(
            "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
          ),
          this.setUsage(!0 === e ? 35048 : 35044),
          this
        );
      },
      copyIndicesArray: function () {
        console.error(
          "THREE.BufferAttribute: .copyIndicesArray() has been removed."
        );
      },
      setArray: function () {
        console.error(
          "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
        );
      },
    }),
    Object.assign(G.prototype, {
      addIndex: function (e) {
        console.warn(
          "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
        ),
          this.setIndex(e);
      },
      addAttribute: function (e, t, i) {
        return (
          console.warn(
            "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
          ),
          (t && t.isBufferAttribute) || (t && t.isInterleavedBufferAttribute)
            ? "index" === e
              ? (console.warn(
                  "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
                ),
                this.setIndex(t),
                this)
              : this.setAttribute(e, t)
            : (console.warn(
                "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
              ),
              this.setAttribute(e, new L(t, i)))
        );
      },
      addDrawCall: function (e, t, i) {
        void 0 !== i &&
          console.warn(
            "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
          ),
          console.warn(
            "THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
          ),
          this.addGroup(e, t);
      },
      clearDrawCalls: function () {
        console.warn(
          "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
        ),
          this.clearGroups();
      },
      computeTangents: function () {
        console.warn(
          "THREE.BufferGeometry: .computeTangents() has been removed."
        );
      },
      computeOffsets: function () {
        console.warn(
          "THREE.BufferGeometry: .computeOffsets() has been removed."
        );
      },
      removeAttribute: function (e) {
        return (
          console.warn(
            "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
          ),
          this.deleteAttribute(e)
        );
      },
    }),
    Object.defineProperties(G.prototype, {
      drawcalls: {
        get: function () {
          return (
            console.error(
              "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
      offsets: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferGeometry: .offsets has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
    }),
    Object.defineProperties(tS.prototype, {
      dynamic: {
        get: function () {
          return (
            console.warn(
              "THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
            ),
            35048 === this.usage
          );
        },
        set: function (e) {
          console.warn(
            "THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
          ),
            this.setUsage(e);
        },
      },
    }),
    Object.assign(tS.prototype, {
      setDynamic: function (e) {
        return (
          console.warn(
            "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
          ),
          this.setUsage(!0 === e ? 35048 : 35044),
          this
        );
      },
      setArray: function () {
        console.error(
          "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
        );
      },
    }),
    Object.assign(iw.prototype, {
      getArrays: function () {
        console.error(
          "THREE.ExtrudeBufferGeometry: .getArrays() has been removed."
        );
      },
      addShapeList: function () {
        console.error(
          "THREE.ExtrudeBufferGeometry: .addShapeList() has been removed."
        );
      },
      addShape: function () {
        console.error(
          "THREE.ExtrudeBufferGeometry: .addShape() has been removed."
        );
      },
    }),
    Object.defineProperties(rr.prototype, {
      dynamic: {
        set: function () {
          console.warn(
            "THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."
          );
        },
      },
      onUpdate: {
        value: function () {
          return (
            console.warn(
              "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
            ),
            this
          );
        },
      },
    }),
    Object.defineProperties(T.prototype, {
      wrapAround: {
        get: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
      },
      overdraw: {
        get: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
      },
      wrapRGB: {
        get: function () {
          return (
            console.warn("THREE.Material: .wrapRGB has been removed."), new _()
          );
        },
      },
      shading: {
        get: function () {
          console.error(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          );
        },
        set: function (e) {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = 1 === e);
        },
      },
      stencilMask: {
        get: function () {
          return (
            console.warn(
              "THREE." +
                this.type +
                ": .stencilMask has been removed. Use .stencilFuncMask instead."
            ),
            this.stencilFuncMask
          );
        },
        set: function (e) {
          console.warn(
            "THREE." +
              this.type +
              ": .stencilMask has been removed. Use .stencilFuncMask instead."
          ),
            (this.stencilFuncMask = e);
        },
      },
    }),
    Object.defineProperties(iO.prototype, {
      metal: {
        get: function () {
          return (
            console.warn(
              "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."
            ),
            !1
          );
        },
        set: function () {
          console.warn(
            "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"
          );
        },
      },
    }),
    Object.defineProperties(q.prototype, {
      derivatives: {
        get: function () {
          return (
            console.warn(
              "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
            ),
            this.extensions.derivatives
          );
        },
        set: function (e) {
          console.warn(
            "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
          ),
            (this.extensions.derivatives = e);
        },
      },
    }),
    Object.assign(tw.prototype, {
      clearTarget: function (e, t, i, n) {
        console.warn(
          "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
        ),
          this.setRenderTarget(e),
          this.clear(t, i, n);
      },
      animate: function (e) {
        console.warn(
          "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
        ),
          this.setAnimationLoop(e);
      },
      getCurrentRenderTarget: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
          ),
          this.getRenderTarget()
        );
      },
      getMaxAnisotropy: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
          ),
          this.capabilities.getMaxAnisotropy()
        );
      },
      getPrecision: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
          ),
          this.capabilities.precision
        );
      },
      resetGLState: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
          ),
          this.state.reset()
        );
      },
      supportsFloatTextures: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
          ),
          this.extensions.get("OES_texture_float")
        );
      },
      supportsHalfFloatTextures: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
          ),
          this.extensions.get("OES_texture_half_float")
        );
      },
      supportsStandardDerivatives: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
          ),
          this.extensions.get("OES_standard_derivatives")
        );
      },
      supportsCompressedTextureS3TC: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
          ),
          this.extensions.get("WEBGL_compressed_texture_s3tc")
        );
      },
      supportsCompressedTexturePVRTC: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
          ),
          this.extensions.get("WEBGL_compressed_texture_pvrtc")
        );
      },
      supportsBlendMinMax: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
          ),
          this.extensions.get("EXT_blend_minmax")
        );
      },
      supportsVertexTextures: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
          ),
          this.capabilities.vertexTextures
        );
      },
      supportsInstancedArrays: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
          ),
          this.extensions.get("ANGLE_instanced_arrays")
        );
      },
      enableScissorTest: function (e) {
        console.warn(
          "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
        ),
          this.setScissorTest(e);
      },
      initMaterial: function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
      },
      addPrePlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
      },
      addPostPlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
      },
      updateShadowMap: function () {
        console.warn(
          "THREE.WebGLRenderer: .updateShadowMap() has been removed."
        );
      },
      setFaceCulling: function () {
        console.warn(
          "THREE.WebGLRenderer: .setFaceCulling() has been removed."
        );
      },
      allocTextureUnit: function () {
        console.warn(
          "THREE.WebGLRenderer: .allocTextureUnit() has been removed."
        );
      },
      setTexture: function () {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
      },
      setTexture2D: function () {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
      },
      setTextureCube: function () {
        console.warn(
          "THREE.WebGLRenderer: .setTextureCube() has been removed."
        );
      },
      getActiveMipMapLevel: function () {
        return (
          console.warn(
            "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
          ),
          this.getActiveMipmapLevel()
        );
      },
    }),
    Object.defineProperties(tw.prototype, {
      shadowMapEnabled: {
        get: function () {
          return this.shadowMap.enabled;
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
          ),
            (this.shadowMap.enabled = e);
        },
      },
      shadowMapType: {
        get: function () {
          return this.shadowMap.type;
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
          ),
            (this.shadowMap.type = e);
        },
      },
      shadowMapCullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      context: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
            ),
            this.getContext()
          );
        },
      },
      vr: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
            this.xr
          );
        },
      },
      gammaInput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
            ),
            !1
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
          );
        },
      },
      gammaOutput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
            ),
            !1
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
          ),
            (this.outputEncoding = !0 === e ? 3001 : 3e3);
        },
      },
    }),
    Object.defineProperties(tf.prototype, {
      cullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderReverseSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderSingleSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
    }),
    Object.defineProperties(J.prototype, {
      activeCubeFace: {
        set: function () {
          console.warn(
            "THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget()."
          );
        },
      },
      activeMipMapLevel: {
        set: function () {
          console.warn(
            "THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget()."
          );
        },
      },
    }),
    Object.defineProperties(c.prototype, {
      wrapS: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
            ),
            this.texture.wrapS
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
          ),
            (this.texture.wrapS = e);
        },
      },
      wrapT: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
            ),
            this.texture.wrapT
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
          ),
            (this.texture.wrapT = e);
        },
      },
      magFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
            ),
            this.texture.magFilter
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
          ),
            (this.texture.magFilter = e);
        },
      },
      minFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
            ),
            this.texture.minFilter
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
          ),
            (this.texture.minFilter = e);
        },
      },
      anisotropy: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
            ),
            this.texture.anisotropy
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
          ),
            (this.texture.anisotropy = e);
        },
      },
      offset: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .offset is now .texture.offset."
            ),
            this.texture.offset
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .offset is now .texture.offset."
          ),
            (this.texture.offset = e);
        },
      },
      repeat: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
            ),
            this.texture.repeat
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
          ),
            (this.texture.repeat = e);
        },
      },
      format: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .format is now .texture.format."
            ),
            this.texture.format
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .format is now .texture.format."
          ),
            (this.texture.format = e);
        },
      },
      type: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .type is now .texture.type."
            ),
            this.texture.type
          );
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            (this.texture.type = e);
        },
      },
      generateMipmaps: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
            ),
            this.texture.generateMipmaps
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
          ),
            (this.texture.generateMipmaps = e);
        },
      },
    }),
    Object.defineProperties(nZ.prototype, {
      load: {
        value: function (e) {
          console.warn(
            "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
          );
          var t = this;
          return (
            new nW().load(e, function (e) {
              t.setBuffer(e);
            }),
            this
          );
        },
      },
      startTime: {
        set: function () {
          console.warn("THREE.Audio: .startTime is now .play( delay ).");
        },
      },
    }),
    (nQ.prototype.getData = function () {
      return (
        console.warn(
          "THREE.AudioAnalyser: .getData() is now .getFrequencyData()."
        ),
        this.getFrequencyData()
      );
    }),
    (Z.prototype.updateCubeMap = function (e, t) {
      return (
        console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(e, t)
      );
    }),
    (rW.crossOrigin = void 0),
    (rW.loadTexture = function (e, t, i, n) {
      console.warn(
        "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
      );
      var r = new nu();
      return (
        r.setCrossOrigin(this.crossOrigin),
        (e = r.load(e, i, void 0, n)),
        t && (e.mapping = t),
        e
      );
    }),
    (rW.loadTextureCube = function (e, t, i, n) {
      console.warn(
        "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
      );
      var r = new nh();
      return (
        r.setCrossOrigin(this.crossOrigin),
        (e = r.load(e, i, void 0, n)),
        t && (e.mapping = t),
        e
      );
    }),
    (rW.loadCompressedTexture = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
      );
    }),
    (rW.loadCompressedTextureCube = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
      );
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("register", { detail: { revision: "112" } })
      ),
    (e.ACESFilmicToneMapping = 5),
    (e.AddEquation = 100),
    (e.AddOperation = 2),
    (e.AdditiveBlending = 2),
    (e.AlphaFormat = 1021),
    (e.AlwaysDepth = 1),
    (e.AlwaysStencilFunc = 519),
    (e.AmbientLight = nB),
    (e.AmbientLightProbe = nj),
    (e.AnimationClip = nt),
    (e.AnimationLoader = no),
    (e.AnimationMixer = rn),
    (e.AnimationObjectGroup = rt),
    (e.AnimationUtils = sl),
    (e.ArcCurve = nf),
    (e.ArrayCamera = tx),
    (e.ArrowHelper = rS),
    (e.Audio = nZ),
    (e.AudioAnalyser = nQ),
    (e.AudioContext = sb),
    (e.AudioListener = nY),
    (e.AudioLoader = nW),
    (e.AxesHelper = rT),
    (e.AxisHelper = function (e) {
      return (
        console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),
        new rT(e)
      );
    }),
    (e.BackSide = 1),
    (e.BasicDepthPacking = 3200),
    (e.BasicShadowMap = 0),
    (e.BinaryTextureLoader = function (e) {
      return (
        console.warn(
          "THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."
        ),
        new nc(e)
      );
    }),
    (e.Bone = tP),
    (e.BooleanKeyframeTrack = iY),
    (e.BoundingBoxHelper = function (e, t) {
      return (
        console.warn(
          "THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."
        ),
        new rw(e, t)
      );
    }),
    (e.Box2 = ru),
    (e.Box3 = m),
    (e.Box3Helper = rb),
    (e.BoxBufferGeometry = om),
    (e.BoxGeometry = of),
    (e.BoxHelper = rw),
    (e.BufferAttribute = L),
    (e.BufferGeometry = G),
    (e.BufferGeometryLoader = n3),
    (e.ByteType = 1010),
    (e.Cache = sh),
    (e.Camera = X),
    (e.CameraHelper = r_),
    (e.CanvasRenderer = function () {
      console.error("THREE.CanvasRenderer has been removed");
    }),
    (e.CanvasTexture = t3),
    (e.CatmullRomCurve3 = ng),
    (e.CineonToneMapping = 4),
    (e.CircleBufferGeometry = iU),
    (e.CircleGeometry = i2),
    (e.ClampToEdgeWrapping = 1001),
    (e.Clock = nX),
    (e.ClosedSplineCurve3 = r2),
    (e.Color = _),
    (e.ColorKeyframeTrack = iZ),
    (e.CompressedTexture = tG),
    (e.CompressedTextureLoader = ns),
    (e.ConeBufferGeometry = iB),
    (e.ConeGeometry = iz),
    (e.CubeCamera = Z),
    (e.CubeGeometry = of),
    (e.CubeReflectionMapping = 301),
    (e.CubeRefractionMapping = 302),
    (e.CubeTexture = em),
    (e.CubeTextureLoader = nh),
    (e.CubeUVReflectionMapping = 306),
    (e.CubeUVRefractionMapping = 307),
    (e.CubicBezierCurve = nx),
    (e.CubicBezierCurve3 = n_),
    (e.CubicInterpolant = i7),
    (e.CullFaceBack = 1),
    (e.CullFaceFront = 2),
    (e.CullFaceFrontBack = 3),
    (e.CullFaceNone = 0),
    (e.Curve = np),
    (e.CurvePath = nT),
    (e.CustomBlending = 5),
    (e.CylinderBufferGeometry = iN),
    (e.CylinderGeometry = iI),
    (e.Cylindrical = rh),
    (e.DataTexture = Q),
    (e.DataTexture2DArray = eg),
    (e.DataTexture3D = ev),
    (e.DataTextureLoader = nc),
    (e.DecrementStencilOp = 7683),
    (e.DecrementWrapStencilOp = 34056),
    (e.DefaultLoadingManager = su),
    (e.DepthFormat = 1026),
    (e.DepthStencilFormat = 1027),
    (e.DepthTexture = tH),
    (e.DirectionalLight = nz),
    (e.DirectionalLightHelper = rx),
    (e.DirectionalLightShadow = nN),
    (e.DiscreteInterpolant = iq),
    (e.DodecahedronBufferGeometry = tZ),
    (e.DodecahedronGeometry = tY),
    (e.DoubleSide = 2),
    (e.DstAlphaFactor = 206),
    (e.DstColorFactor = 208),
    (e.DynamicBufferAttribute = function (e, t) {
      return (
        console.warn(
          "THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."
        ),
        new L(e, t).setDynamic(!0)
      );
    }),
    (e.DynamicCopyUsage = 35050),
    (e.DynamicDrawUsage = 35048),
    (e.DynamicReadUsage = 35049),
    (e.EdgesGeometry = iD),
    (e.EdgesHelper = function (e, t) {
      return (
        console.warn(
          "THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."
        ),
        new tN(
          new iD(e.geometry),
          new tD({ color: void 0 !== t ? t : 16777215 })
        )
      );
    }),
    (e.EllipseCurve = nd),
    (e.EqualDepth = 4),
    (e.EqualStencilFunc = 514),
    (e.EquirectangularReflectionMapping = 303),
    (e.EquirectangularRefractionMapping = 304),
    (e.Euler = u),
    (e.EventDispatcher = t),
    (e.ExtrudeBufferGeometry = iw),
    (e.ExtrudeGeometry = i8),
    (e.Face3 = S),
    (e.Face4 = function (e, t, i, n, r, a, o) {
      return (
        console.warn(
          "THREE.Face4 has been removed. A THREE.Face3 will be created instead."
        ),
        new S(e, t, i, r, a, o)
      );
    }),
    (e.FaceColors = 1),
    (e.FileLoader = na),
    (e.FlatShading = 1),
    (e.Float32Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."
        ),
        new z(e, t)
      );
    }),
    (e.Float32BufferAttribute = z),
    (e.Float64Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."
        ),
        new B(e, t)
      );
    }),
    (e.Float64BufferAttribute = B),
    (e.FloatType = 1015),
    (e.Fog = tM),
    (e.FogExp2 = tb),
    (e.Font = n4),
    (e.FontLoader = nk),
    (e.FrontFaceDirectionCCW = 1),
    (e.FrontFaceDirectionCW = 0),
    (e.FrontSide = 0),
    (e.Frustum = K),
    (e.GammaEncoding = 3007),
    (e.Geometry = k),
    (e.GeometryUtils = {
      merge: function (e, t, i) {
        if (
          (console.warn(
            "THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."
          ),
          t.isMesh)
        ) {
          t.matrixAutoUpdate && t.updateMatrix();
          var n = t.matrix;
          t = t.geometry;
        }
        e.merge(t, n, i);
      },
      center: function (e) {
        return (
          console.warn(
            "THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."
          ),
          e.center()
        );
      },
    }),
    (e.GreaterDepth = 6),
    (e.GreaterEqualDepth = 5),
    (e.GreaterEqualStencilFunc = 518),
    (e.GreaterStencilFunc = 516),
    (e.GridHelper = r$),
    (e.Group = t_),
    (e.HalfFloatType = 1016),
    (e.HemisphereLight = nL),
    (e.HemisphereLightHelper = rv),
    (e.HemisphereLightProbe = n7),
    (e.IcosahedronBufferGeometry = tX),
    (e.IcosahedronGeometry = tq),
    (e.ImageBitmapLoader = nO),
    (e.ImageLoader = nl),
    (e.ImageUtils = rW),
    (e.ImmediateRenderObject = rd),
    (e.IncrementStencilOp = 7682),
    (e.IncrementWrapStencilOp = 34055),
    (e.InstancedBufferAttribute = nG),
    (e.InstancedBufferGeometry = nF),
    (e.InstancedInterleavedBuffer = ra),
    (e.InstancedMesh = tC),
    (e.Int16Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."
        ),
        new C(e, t)
      );
    }),
    (e.Int16BufferAttribute = C),
    (e.Int32Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."
        ),
        new I(e, t)
      );
    }),
    (e.Int32BufferAttribute = I),
    (e.Int8Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."
        ),
        new A(e, t)
      );
    }),
    (e.Int8BufferAttribute = A),
    (e.IntType = 1013),
    (e.InterleavedBuffer = tS),
    (e.InterleavedBufferAttribute = tT),
    (e.Interpolant = i6),
    (e.InterpolateDiscrete = 2300),
    (e.InterpolateLinear = 2301),
    (e.InterpolateSmooth = 2302),
    (e.InvertStencilOp = 5386),
    (e.JSONLoader = function () {
      console.error("THREE.JSONLoader has been removed.");
    }),
    (e.KeepStencilOp = 7680),
    (e.KeyframeTrack = iX),
    (e.LOD = tL),
    (e.LatheBufferGeometry = iA),
    (e.LatheGeometry = iL),
    (e.Layers = p),
    (e.LensFlare = function () {
      console.error(
        "THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js"
      );
    }),
    (e.LessDepth = 2),
    (e.LessEqualDepth = 3),
    (e.LessEqualStencilFunc = 515),
    (e.LessStencilFunc = 513),
    (e.Light = n0),
    (e.LightProbe = n6),
    (e.LightShadow = nA),
    (e.Line = tI),
    (e.Line3 = rp),
    (e.LineBasicMaterial = tD),
    (e.LineCurve = n8),
    (e.LineCurve3 = nw),
    (e.LineDashedMaterial = i5),
    (e.LineLoop = tz),
    (e.LinePieces = 1),
    (e.LineSegments = tN),
    (e.LineStrip = 0),
    (e.LinearEncoding = 3e3),
    (e.LinearFilter = 1006),
    (e.LinearInterpolant = ij),
    (e.LinearMipMapLinearFilter = 1008),
    (e.LinearMipMapNearestFilter = 1007),
    (e.LinearMipmapLinearFilter = 1008),
    (e.LinearMipmapNearestFilter = 1007),
    (e.LinearToneMapping = 1),
    (e.Loader = nr),
    (e.LoaderUtils = s$),
    (e.LoadingManager = nn),
    (e.LogLuvEncoding = 3003),
    (e.LoopOnce = 2200),
    (e.LoopPingPong = 2202),
    (e.LoopRepeat = 2201),
    (e.LuminanceAlphaFormat = 1025),
    (e.LuminanceFormat = 1024),
    (e.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }),
    (e.Material = T),
    (e.MaterialLoader = nU),
    (e.Math = rH),
    (e.Matrix3 = a),
    (e.Matrix4 = h),
    (e.MaxEquation = 104),
    (e.Mesh = H),
    (e.MeshBasicMaterial = E),
    (e.MeshDepthMaterial = tp),
    (e.MeshDistanceMaterial = td),
    (e.MeshFaceMaterial = function (e) {
      return (
        console.warn(
          "THREE.MeshFaceMaterial has been removed. Use an Array instead."
        ),
        e
      );
    }),
    (e.MeshLambertMaterial = ik),
    (e.MeshMatcapMaterial = iW),
    (e.MeshNormalMaterial = i4),
    (e.MeshPhongMaterial = iO),
    (e.MeshPhysicalMaterial = iH),
    (e.MeshStandardMaterial = i3),
    (e.MeshToonMaterial = iV),
    (e.MinEquation = 103),
    (e.MirroredRepeatWrapping = 1002),
    (e.MixOperation = 1),
    (e.MultiMaterial = function (e) {
      return (
        void 0 === e && (e = []),
        console.warn(
          "THREE.MultiMaterial has been removed. Use an Array instead."
        ),
        (e.isMultiMaterial = !0),
        (e.materials = e),
        (e.clone = function () {
          return e.slice();
        }),
        e
      );
    }),
    (e.MultiplyBlending = 4),
    (e.MultiplyOperation = 0),
    (e.NearestFilter = 1003),
    (e.NearestMipMapLinearFilter = 1005),
    (e.NearestMipMapNearestFilter = 1004),
    (e.NearestMipmapLinearFilter = 1005),
    (e.NearestMipmapNearestFilter = 1004),
    (e.NeverDepth = 0),
    (e.NeverStencilFunc = 512),
    (e.NoBlending = 0),
    (e.NoColors = 0),
    (e.NoToneMapping = 0),
    (e.NormalBlending = 1),
    (e.NotEqualDepth = 7),
    (e.NotEqualStencilFunc = 517),
    (e.NumberKeyframeTrack = iJ),
    (e.Object3D = d),
    (e.ObjectLoader = nH),
    (e.ObjectSpaceNormalMap = 1),
    (e.OctahedronBufferGeometry = tj),
    (e.OctahedronGeometry = t7),
    (e.OneFactor = 201),
    (e.OneMinusDstAlphaFactor = 207),
    (e.OneMinusDstColorFactor = 209),
    (e.OneMinusSrcAlphaFactor = 205),
    (e.OneMinusSrcColorFactor = 203),
    (e.OrthographicCamera = nI),
    (e.PCFShadowMap = 1),
    (e.PCFSoftShadowMap = 2),
    (e.PMREMGenerator = rE),
    (e.ParametricBufferGeometry = t4),
    (e.ParametricGeometry = tV),
    (e.Particle = function (e) {
      return (
        console.warn("THREE.Particle has been renamed to THREE.Sprite."),
        new t1(e)
      );
    }),
    (e.ParticleBasicMaterial = function (e) {
      return (
        console.warn(
          "THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."
        ),
        new tB(e)
      );
    }),
    (e.ParticleSystem = function (e, t) {
      return (
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new t2(e, t)
      );
    }),
    (e.ParticleSystemMaterial = function (e) {
      return (
        console.warn(
          "THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."
        ),
        new tB(e)
      );
    }),
    (e.Path = nE),
    (e.PerspectiveCamera = Y),
    (e.Plane = y),
    (e.PlaneBufferGeometry = en),
    (e.PlaneGeometry = ei),
    (e.PlaneHelper = rM),
    (e.PointCloud = function (e, t) {
      return (
        console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new t2(e, t)
      );
    }),
    (e.PointCloudMaterial = function (e) {
      return (
        console.warn(
          "THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."
        ),
        new tB(e)
      );
    }),
    (e.PointLight = nD),
    (e.PointLightHelper = rg),
    (e.Points = t2),
    (e.PointsMaterial = tB),
    (e.PolarGridHelper = ry),
    (e.PolyhedronBufferGeometry = tW),
    (e.PolyhedronGeometry = tk),
    (e.PositionalAudio = nJ),
    (e.PropertyBinding = re),
    (e.PropertyMixer = nK),
    (e.QuadraticBezierCurve = nb),
    (e.QuadraticBezierCurve3 = nM),
    (e.Quaternion = n),
    (e.QuaternionKeyframeTrack = iK),
    (e.QuaternionLinearInterpolant = iQ),
    (e.REVISION = "112"),
    (e.RGBADepthPacking = 3201),
    (e.RGBAFormat = 1023),
    (e.RGBAIntegerFormat = 1033),
    (e.RGBA_ASTC_10x10_Format = 37819),
    (e.RGBA_ASTC_10x5_Format = 37816),
    (e.RGBA_ASTC_10x6_Format = 37817),
    (e.RGBA_ASTC_10x8_Format = 37818),
    (e.RGBA_ASTC_12x10_Format = 37820),
    (e.RGBA_ASTC_12x12_Format = 37821),
    (e.RGBA_ASTC_4x4_Format = 37808),
    (e.RGBA_ASTC_5x4_Format = 37809),
    (e.RGBA_ASTC_5x5_Format = 37810),
    (e.RGBA_ASTC_6x5_Format = 37811),
    (e.RGBA_ASTC_6x6_Format = 37812),
    (e.RGBA_ASTC_8x5_Format = 37813),
    (e.RGBA_ASTC_8x6_Format = 37814),
    (e.RGBA_ASTC_8x8_Format = 37815),
    (e.RGBA_PVRTC_2BPPV1_Format = 35843),
    (e.RGBA_PVRTC_4BPPV1_Format = 35842),
    (e.RGBA_S3TC_DXT1_Format = 33777),
    (e.RGBA_S3TC_DXT3_Format = 33778),
    (e.RGBA_S3TC_DXT5_Format = 33779),
    (e.RGBDEncoding = 3006),
    (e.RGBEEncoding = 3002),
    (e.RGBEFormat = 1023),
    (e.RGBFormat = 1022),
    (e.RGBIntegerFormat = 1032),
    (e.RGBM16Encoding = 3005),
    (e.RGBM7Encoding = 3004),
    (e.RGB_ETC1_Format = 36196),
    (e.RGB_PVRTC_2BPPV1_Format = 35841),
    (e.RGB_PVRTC_4BPPV1_Format = 35840),
    (e.RGB_S3TC_DXT1_Format = 33776),
    (e.RGFormat = 1030),
    (e.RGIntegerFormat = 1031),
    (e.RawShaderMaterial = iG),
    (e.Ray = $),
    (e.Raycaster = ro),
    (e.RectAreaLight = n2),
    (e.RedFormat = 1028),
    (e.RedIntegerFormat = 1029),
    (e.ReinhardToneMapping = 2),
    (e.RepeatWrapping = 1e3),
    (e.ReplaceStencilOp = 7681),
    (e.ReverseSubtractEquation = 102),
    (e.RingBufferGeometry = i0),
    (e.RingGeometry = i1),
    (e.Scene = f),
    (e.SceneUtils = {
      createMultiMaterialObject: function () {
        console.error(
          "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
        );
      },
      detach: function () {
        console.error(
          "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
        );
      },
      attach: function () {
        console.error(
          "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
        );
      },
    }),
    (e.ShaderChunk = o$),
    (e.ShaderLib = ox),
    (e.ShaderMaterial = q),
    (e.ShadowMaterial = iF),
    (e.Shape = n1),
    (e.ShapeBufferGeometry = iP),
    (e.ShapeGeometry = iR),
    (e.ShapePath = nV),
    (e.ShapeUtils = sa),
    (e.ShortType = 1011),
    (e.Skeleton = tR),
    (e.SkeletonHelper = rm),
    (e.SkinnedMesh = tA),
    (e.SmoothShading = 2),
    (e.Sphere = v),
    (e.SphereBufferGeometry = iE),
    (e.SphereGeometry = iT),
    (e.Spherical = rl),
    (e.SphericalHarmonics3 = n5),
    (e.SphericalReflectionMapping = 305),
    (e.Spline = rF),
    (e.SplineCurve = nS),
    (e.SplineCurve3 = rU),
    (e.SpotLight = nP),
    (e.SpotLightHelper = rf),
    (e.SpotLightShadow = nR),
    (e.Sprite = t1),
    (e.SpriteMaterial = tE),
    (e.SrcAlphaFactor = 204),
    (e.SrcAlphaSaturateFactor = 210),
    (e.SrcColorFactor = 202),
    (e.StaticCopyUsage = 35046),
    (e.StaticDrawUsage = 35044),
    (e.StaticReadUsage = 35045),
    (e.StereoCamera = nq),
    (e.StreamCopyUsage = 35042),
    (e.StreamDrawUsage = 35040),
    (e.StreamReadUsage = 35041),
    (e.StringKeyframeTrack = i9),
    (e.SubtractEquation = 101),
    (e.SubtractiveBlending = 3),
    (e.TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }),
    (e.TangentSpaceNormalMap = 0),
    (e.TetrahedronBufferGeometry = t6),
    (e.TetrahedronGeometry = t5),
    (e.TextBufferGeometry = iS),
    (e.TextGeometry = iM),
    (e.Texture = o),
    (e.TextureLoader = nu),
    (e.TorusBufferGeometry = it),
    (e.TorusGeometry = ie),
    (e.TorusKnotBufferGeometry = t9),
    (e.TorusKnotGeometry = tK),
    (e.Triangle = x),
    (e.TriangleFanDrawMode = 2),
    (e.TriangleStripDrawMode = 1),
    (e.TrianglesDrawMode = 0),
    (e.TubeBufferGeometry = tQ),
    (e.TubeGeometry = tJ),
    (e.UVMapping = 300),
    (e.Uint16Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."
        ),
        new D(e, t)
      );
    }),
    (e.Uint16BufferAttribute = D),
    (e.Uint32Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."
        ),
        new N(e, t)
      );
    }),
    (e.Uint32BufferAttribute = N),
    (e.Uint8Attribute = function (e, t) {
      return (
        console.warn(
          "THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."
        ),
        new R(e, t)
      );
    }),
    (e.Uint8BufferAttribute = R),
    (e.Uint8ClampedAttribute = function (e, t) {
      return (
        console.warn(
          "THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."
        ),
        new P(e, t)
      );
    }),
    (e.Uint8ClampedBufferAttribute = P),
    (e.Uncharted2ToneMapping = 3),
    (e.Uniform = rr),
    (e.UniformsLib = oy),
    (e.UniformsUtils = { clone: W, merge: j }),
    (e.UnsignedByteType = 1009),
    (e.UnsignedInt248Type = 1020),
    (e.UnsignedIntType = 1014),
    (e.UnsignedShort4444Type = 1017),
    (e.UnsignedShort5551Type = 1018),
    (e.UnsignedShort565Type = 1019),
    (e.UnsignedShortType = 1012),
    (e.VSMShadowMap = 3),
    (e.Vector2 = i),
    (e.Vector3 = r),
    (e.Vector4 = s),
    (e.VectorKeyframeTrack = ne),
    (e.Vertex = function (e, t, i) {
      return (
        console.warn(
          "THREE.Vertex has been removed. Use THREE.Vector3 instead."
        ),
        new r(e, t, i)
      );
    }),
    (e.VertexColors = 2),
    (e.VideoTexture = tF),
    (e.WebGLMultisampleRenderTarget = l),
    (e.WebGLRenderTarget = c),
    (e.WebGLRenderTargetCube = J),
    (e.WebGLRenderer = tw),
    (e.WebGLUtils = tv),
    (e.WireframeGeometry = tO),
    (e.WireframeHelper = function (e, t) {
      return (
        console.warn(
          "THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."
        ),
        new tN(
          new tO(e.geometry),
          new tD({ color: void 0 !== t ? t : 16777215 })
        )
      );
    }),
    (e.WrapAroundEnding = 2402),
    (e.XHRLoader = function (e) {
      return (
        console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
        new na(e)
      );
    }),
    (e.ZeroCurvatureEnding = 2400),
    (e.ZeroFactor = 200),
    (e.ZeroSlopeEnding = 2401),
    (e.ZeroStencilOp = 0),
    (e.sRGBEncoding = 3001),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
