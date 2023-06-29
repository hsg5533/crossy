THREE.GLTFLoader = (function () {
  function e(e) {
    THREE.Loader.call(this, e),
      (this.dracoLoader = null),
      (this.ddsLoader = null);
  }
  function t() {
    var e = {};
    return {
      get: function (t) {
        return e[t];
      },
      add: function (t, a) {
        e[t] = a;
      },
      remove: function (t) {
        delete e[t];
      },
      removeAll: function () {
        e = {};
      },
    };
  }
  e.prototype = Object.assign(Object.create(THREE.Loader.prototype), {
    constructor: e,
    load: function (e, t, a, r) {
      var s,
        n = this;
      function i(t) {
        r ? r(t) : console.error(t),
          n.manager.itemError(e),
          n.manager.itemEnd(e);
      }
      (s =
        "" !== this.resourcePath
          ? this.resourcePath
          : "" !== this.path
          ? this.path
          : THREE.LoaderUtils.extractUrlBase(e)),
        n.manager.itemStart(e);
      var o = new THREE.FileLoader(n.manager);
      o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        "use-credentials" === n.crossOrigin && o.setWithCredentials(!0),
        o.load(
          e,
          function (a) {
            try {
              n.parse(
                a,
                s,
                function (a) {
                  t(a), n.manager.itemEnd(e);
                },
                i
              );
            } catch (r) {
              i(r);
            }
          },
          a,
          i
        );
    },
    setDRACOLoader: function (e) {
      return (this.dracoLoader = e), this;
    },
    setDDSLoader: function (e) {
      return (this.ddsLoader = e), this;
    },
    parse: function (e, t, o, h) {
      var f,
        m = {};
      if ("string" == typeof e) f = e;
      else if (THREE.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === i) {
        try {
          m[a.KHR_BINARY_GLTF] = new l(e);
        } catch (v) {
          return void (h && h(v));
        }
        f = m[a.KHR_BINARY_GLTF].content;
      } else f = THREE.LoaderUtils.decodeText(new Uint8Array(e));
      var g = JSON.parse(f);
      if (void 0 === g.asset || g.asset.version[0] < 2)
        h &&
          h(
            Error(
              "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
            )
          );
      else {
        if (g.extensionsUsed)
          for (var M = 0; M < g.extensionsUsed.length; ++M) {
            var T = g.extensionsUsed[M],
              S = g.extensionsRequired || [];
            switch (T) {
              case a.KHR_LIGHTS_PUNCTUAL:
                m[T] = new s(g);
                break;
              case a.KHR_MATERIALS_UNLIT:
                m[T] = new n();
                break;
              case a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                m[T] = new c();
                break;
              case a.KHR_DRACO_MESH_COMPRESSION:
                m[T] = new p(g, this.dracoLoader);
                break;
              case a.MSFT_TEXTURE_DDS:
                m[T] = new r(this.ddsLoader);
                break;
              case a.KHR_TEXTURE_TRANSFORM:
                m[T] = new u();
                break;
              case a.KHR_MESH_QUANTIZATION:
                m[T] = new d();
                break;
              default:
                0 <= S.indexOf(T) &&
                  console.warn(
                    'THREE.GLTFLoader: Unknown extension "' + T + '".'
                  );
            }
          }
        new b(g, m, {
          path: t || this.resourcePath || "",
          crossOrigin: this.crossOrigin,
          manager: this.manager,
        }).parse(o, h);
      }
    },
  });
  var a = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
      "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    MSFT_TEXTURE_DDS: "MSFT_texture_dds",
  };
  function r(e) {
    if (!e)
      throw Error(
        "THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader"
      );
    (this.name = a.MSFT_TEXTURE_DDS), (this.ddsLoader = e);
  }
  function s(e) {
    this.name = a.KHR_LIGHTS_PUNCTUAL;
    var t = (e.extensions && e.extensions[a.KHR_LIGHTS_PUNCTUAL]) || {};
    this.lightDefs = t.lights || [];
  }
  function n() {
    this.name = a.KHR_MATERIALS_UNLIT;
  }
  (s.prototype.loadLight = function (e) {
    var t,
      a = this.lightDefs[e],
      r = new THREE.Color(16777215);
    void 0 !== a.color && r.fromArray(a.color);
    var s = void 0 !== a.range ? a.range : 0;
    switch (a.type) {
      case "directional":
        (t = new THREE.DirectionalLight(r)).target.position.set(0, 0, -1),
          t.add(t.target);
        break;
      case "point":
        (t = new THREE.PointLight(r)).distance = s;
        break;
      case "spot":
        ((t = new THREE.SpotLight(r)).distance = s),
          (a.spot = a.spot || {}),
          (a.spot.innerConeAngle =
            void 0 !== a.spot.innerConeAngle ? a.spot.innerConeAngle : 0),
          (a.spot.outerConeAngle =
            void 0 !== a.spot.outerConeAngle
              ? a.spot.outerConeAngle
              : Math.PI / 4),
          (t.angle = a.spot.outerConeAngle),
          (t.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
          t.target.position.set(0, 0, -1),
          t.add(t.target);
        break;
      default:
        throw Error(
          'THREE.GLTFLoader: Unexpected light type, "' + a.type + '".'
        );
    }
    return (
      t.position.set(0, 0, 0),
      (t.decay = 2),
      void 0 !== a.intensity && (t.intensity = a.intensity),
      (t.name = a.name || "light_" + e),
      Promise.resolve(t)
    );
  }),
    (n.prototype.getMaterialType = function () {
      return THREE.MeshBasicMaterial;
    }),
    (n.prototype.extendParams = function (e, t, a) {
      var r = [];
      (e.color = new THREE.Color(1, 1, 1)), (e.opacity = 1);
      var s = t.pbrMetallicRoughness;
      if (s) {
        if (Array.isArray(s.baseColorFactor)) {
          var n = s.baseColorFactor;
          e.color.fromArray(n), (e.opacity = n[3]);
        }
        void 0 !== s.baseColorTexture &&
          r.push(a.assignTexture(e, "map", s.baseColorTexture));
      }
      return Promise.all(r);
    });
  var i = "glTF",
    o = { JSON: 1313821514, BIN: 5130562 };
  function l(e) {
    (this.name = a.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    var t = new DataView(e, 0, 12);
    if (
      ((this.header = {
        magic: THREE.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== i)
    )
      throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw Error("THREE.GLTFLoader: Legacy binary file detected.");
    for (var r = new DataView(e, 12), s = 0; s < r.byteLength; ) {
      var n = r.getUint32(s, !0);
      s += 4;
      var l = r.getUint32(s, !0);
      if (((s += 4), l === o.JSON)) {
        var p = new Uint8Array(e, 12 + s, n);
        this.content = THREE.LoaderUtils.decodeText(p);
      } else if (l === o.BIN) {
        var u = 12 + s;
        this.body = e.slice(u, u + n);
      }
      s += n;
    }
    if (null === this.content)
      throw Error("THREE.GLTFLoader: JSON content not found.");
  }
  function p(e, t) {
    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = a.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  function u() {
    this.name = a.KHR_TEXTURE_TRANSFORM;
  }
  function c() {
    return {
      name: a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
      specularGlossinessParams: [
        "color",
        "map",
        "lightMap",
        "lightMapIntensity",
        "aoMap",
        "aoMapIntensity",
        "emissive",
        "emissiveIntensity",
        "emissiveMap",
        "bumpMap",
        "bumpScale",
        "normalMap",
        "displacementMap",
        "displacementScale",
        "displacementBias",
        "specularMap",
        "specular",
        "glossinessMap",
        "glossiness",
        "alphaMap",
        "envMap",
        "envMapIntensity",
        "refractionRatio",
      ],
      getMaterialType: function () {
        return THREE.ShaderMaterial;
      },
      extendParams: function (e, t, a) {
        var r = t.extensions[this.name],
          s = THREE.ShaderLib.standard,
          n = THREE.UniformsUtils.clone(s.uniforms),
          i = s.fragmentShader
            .replace("uniform float roughness;", "uniform vec3 specular;")
            .replace("uniform float metalness;", "uniform float glossiness;")
            .replace(
              "#include <roughnessmap_pars_fragment>",
              "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif"
            )
            .replace(
              "#include <metalnessmap_pars_fragment>",
              "#ifdef USE_GLOSSINESSMAP\n	uniform sampler2D glossinessMap;\n#endif"
            )
            .replace(
              "#include <roughnessmap_fragment>",
              "vec3 specularFactor = specular;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	texelSpecular = sRGBToLinear( texelSpecular );\n	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture\n	specularFactor *= texelSpecular.rgb;\n#endif"
            )
            .replace(
              "#include <metalnessmap_fragment>",
              "float glossinessFactor = glossiness;\n#ifdef USE_GLOSSINESSMAP\n	vec4 texelGlossiness = texture2D( glossinessMap, vUv );\n	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture\n	glossinessFactor *= texelGlossiness.a;\n#endif"
            )
            .replace(
              "#include <lights_physical_fragment>",
              "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );\nmaterial.specularColor = specularFactor.rgb;"
            );
        delete n.roughness,
          delete n.metalness,
          delete n.roughnessMap,
          delete n.metalnessMap,
          (n.specular = { value: new THREE.Color().setHex(1118481) }),
          (n.glossiness = { value: 0.5 }),
          (n.specularMap = { value: null }),
          (n.glossinessMap = { value: null }),
          (e.vertexShader = s.vertexShader),
          (e.fragmentShader = i),
          (e.uniforms = n),
          (e.defines = { STANDARD: "" }),
          (e.color = new THREE.Color(1, 1, 1)),
          (e.opacity = 1);
        var o = [];
        if (Array.isArray(r.diffuseFactor)) {
          var l = r.diffuseFactor;
          e.color.fromArray(l), (e.opacity = l[3]);
        }
        if (
          (void 0 !== r.diffuseTexture &&
            o.push(a.assignTexture(e, "map", r.diffuseTexture)),
          (e.emissive = new THREE.Color(0, 0, 0)),
          (e.glossiness =
            void 0 !== r.glossinessFactor ? r.glossinessFactor : 1),
          (e.specular = new THREE.Color(1, 1, 1)),
          Array.isArray(r.specularFactor) &&
            e.specular.fromArray(r.specularFactor),
          void 0 !== r.specularGlossinessTexture)
        ) {
          var p = r.specularGlossinessTexture;
          o.push(a.assignTexture(e, "glossinessMap", p)),
            o.push(a.assignTexture(e, "specularMap", p));
        }
        return Promise.all(o);
      },
      createMaterial: function (e) {
        var t = new THREE.ShaderMaterial({
          defines: e.defines,
          vertexShader: e.vertexShader,
          fragmentShader: e.fragmentShader,
          uniforms: e.uniforms,
          fog: !0,
          lights: !0,
          opacity: e.opacity,
          transparent: e.transparent,
        });
        return (
          (t.isGLTFSpecularGlossinessMaterial = !0),
          (t.color = e.color),
          (t.map = void 0 === e.map ? null : e.map),
          (t.lightMap = null),
          (t.lightMapIntensity = 1),
          (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
          (t.aoMapIntensity = 1),
          (t.emissive = e.emissive),
          (t.emissiveIntensity = 1),
          (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
          (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
          (t.bumpScale = 1),
          (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
          e.normalScale && (t.normalScale = e.normalScale),
          (t.displacementMap = null),
          (t.displacementScale = 1),
          (t.displacementBias = 0),
          (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
          (t.specular = e.specular),
          (t.glossinessMap =
            void 0 === e.glossinessMap ? null : e.glossinessMap),
          (t.glossiness = e.glossiness),
          (t.alphaMap = null),
          (t.envMap = void 0 === e.envMap ? null : e.envMap),
          (t.envMapIntensity = 1),
          (t.refractionRatio = 0.98),
          (t.extensions.derivatives = !0),
          t
        );
      },
      cloneMaterial: function (e) {
        var t = e.clone();
        t.isGLTFSpecularGlossinessMaterial = !0;
        for (
          var a = this.specularGlossinessParams, r = 0, s = a.length;
          r < s;
          r++
        ) {
          var n = e[a[r]];
          t[a[r]] = n && n.isColor ? n.clone() : n;
        }
        return t;
      },
      refreshUniforms: function (e, t, a, r, s) {
        if (!0 === s.isGLTFSpecularGlossinessMaterial) {
          var n,
            i = s.uniforms,
            o = s.defines;
          (i.opacity.value = s.opacity),
            i.diffuse.value.copy(s.color),
            i.emissive.value
              .copy(s.emissive)
              .multiplyScalar(s.emissiveIntensity),
            (i.map.value = s.map),
            (i.specularMap.value = s.specularMap),
            (i.alphaMap.value = s.alphaMap),
            (i.lightMap.value = s.lightMap),
            (i.lightMapIntensity.value = s.lightMapIntensity),
            (i.aoMap.value = s.aoMap),
            (i.aoMapIntensity.value = s.aoMapIntensity),
            s.map
              ? (n = s.map)
              : s.specularMap
              ? (n = s.specularMap)
              : s.displacementMap
              ? (n = s.displacementMap)
              : s.normalMap
              ? (n = s.normalMap)
              : s.bumpMap
              ? (n = s.bumpMap)
              : s.glossinessMap
              ? (n = s.glossinessMap)
              : s.alphaMap
              ? (n = s.alphaMap)
              : s.emissiveMap && (n = s.emissiveMap),
            void 0 !== n &&
              (n.isWebGLRenderTarget && (n = n.texture),
              !0 === n.matrixAutoUpdate && n.updateMatrix(),
              i.uvTransform.value.copy(n.matrix)),
            s.envMap &&
              ((i.envMap.value = s.envMap),
              (i.envMapIntensity.value = s.envMapIntensity),
              (i.flipEnvMap.value = s.envMap.isCubeTexture ? -1 : 1),
              (i.reflectivity.value = s.reflectivity),
              (i.refractionRatio.value = s.refractionRatio),
              (i.maxMipLevel.value = e.properties.get(s.envMap).__maxMipLevel)),
            i.specular.value.copy(s.specular),
            (i.glossiness.value = s.glossiness),
            (i.glossinessMap.value = s.glossinessMap),
            (i.emissiveMap.value = s.emissiveMap),
            (i.bumpMap.value = s.bumpMap),
            (i.normalMap.value = s.normalMap),
            (i.displacementMap.value = s.displacementMap),
            (i.displacementScale.value = s.displacementScale),
            (i.displacementBias.value = s.displacementBias),
            null !== i.glossinessMap.value &&
              void 0 === o.USE_GLOSSINESSMAP &&
              ((o.USE_GLOSSINESSMAP = ""), (o.USE_ROUGHNESSMAP = "")),
            null === i.glossinessMap.value &&
              void 0 !== o.USE_GLOSSINESSMAP &&
              (delete o.USE_GLOSSINESSMAP, delete o.USE_ROUGHNESSMAP);
        }
      },
    };
  }
  function d() {
    this.name = a.KHR_MESH_QUANTIZATION;
  }
  function h(e, t, a, r) {
    THREE.Interpolant.call(this, e, t, a, r);
  }
  (p.prototype.decodePrimitive = function (e, t) {
    var a = this.json,
      r = this.dracoLoader,
      s = e.extensions[this.name].bufferView,
      n = e.extensions[this.name].attributes,
      i = {},
      o = {},
      l = {};
    for (var p in n) {
      var u = M[p] || p.toLowerCase();
      i[u] = n[p];
    }
    for (p in e.attributes)
      if (((u = M[p] || p.toLowerCase()), void 0 !== n[p])) {
        var c = a.accessors[e.attributes[p]],
          d = f[c.componentType];
        (l[u] = d), (o[u] = !0 === c.normalized);
      }
    return t.getDependency("bufferView", s).then(function (e) {
      return new Promise(function (t) {
        r.decodeDracoFile(
          e,
          function (e) {
            for (var a in e.attributes) {
              var r = e.attributes[a],
                s = o[a];
              void 0 !== s && (r.normalized = s);
            }
            t(e);
          },
          i,
          l
        );
      });
    });
  }),
    (u.prototype.extendTexture = function (e, t) {
      return (
        (e = e.clone()),
        void 0 !== t.offset && e.offset.fromArray(t.offset),
        void 0 !== t.rotation && (e.rotation = t.rotation),
        void 0 !== t.scale && e.repeat.fromArray(t.scale),
        void 0 !== t.texCoord &&
          console.warn(
            'THREE.GLTFLoader: Custom UV sets in "' +
              this.name +
              '" extension not yet supported.'
          ),
        (e.needsUpdate = !0),
        e
      );
    }),
    (((h.prototype = Object.create(THREE.Interpolant.prototype)).constructor =
      h).prototype.beforeStart_ = h.prototype.copySampleValue_ =
      function (e) {
        for (
          var t = this.resultBuffer,
            a = this.sampleValues,
            r = this.valueSize,
            s = e * r * 3 + r,
            n = 0;
          n !== r;
          n++
        )
          t[n] = a[s + n];
        return t;
      }),
    (h.prototype.afterEnd_ = h.prototype.copySampleValue_),
    (h.prototype.interpolate_ = function (e, t, a, r) {
      for (
        var s = this.resultBuffer,
          n = this.sampleValues,
          i = this.valueSize,
          o = 2 * i,
          l = 3 * i,
          p = r - t,
          u = (a - t) / p,
          c = u * u,
          d = c * u,
          h = e * l,
          f = h - l,
          m = -2 * d + 3 * c,
          v = d - c,
          g = 1 - m,
          M = v - c + u,
          T = 0;
        T !== i;
        T++
      ) {
        var S = n[f + T + i],
          $ = n[f + T + o] * p,
          y = n[h + T + i],
          R = n[h + T] * p;
        s[T] = g * S + M * $ + m * y + v * R;
      }
      return s;
    });
  var f = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array,
    },
    m = {
      9728: THREE.NearestFilter,
      9729: THREE.LinearFilter,
      9984: THREE.NearestMipmapNearestFilter,
      9985: THREE.LinearMipmapNearestFilter,
      9986: THREE.NearestMipmapLinearFilter,
      9987: THREE.LinearMipmapLinearFilter,
    },
    v = {
      33071: THREE.ClampToEdgeWrapping,
      33648: THREE.MirroredRepeatWrapping,
      10497: THREE.RepeatWrapping,
    },
    g = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
    M = {
      POSITION: "position",
      NORMAL: "normal",
      TANGENT: "tangent",
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      WEIGHTS_0: "skinWeight",
      JOINTS_0: "skinIndex",
    },
    T = {
      scale: "scale",
      translation: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences",
    },
    S = {
      CUBICSPLINE: void 0,
      LINEAR: THREE.InterpolateLinear,
      STEP: THREE.InterpolateDiscrete,
    },
    $ = { "image/png": THREE.RGBAFormat, "image/jpeg": THREE.RGBFormat };
  function y(e, t) {
    return "string" != typeof e || "" === e
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e)
          ? e
          : /^data:.*,.*$/i.test(e)
          ? e
          : /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
  function R(e, t, a) {
    for (var r in a.extensions)
      void 0 === e[r] &&
        ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
        (t.userData.gltfExtensions[r] = a.extensions[r]));
  }
  function L(e, t) {
    void 0 !== t.extras &&
      ("object" == typeof t.extras
        ? Object.assign(e.userData, t.extras)
        : console.warn(
            "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
          ));
  }
  function x(e, t) {
    if ((e.updateMorphTargets(), void 0 !== t.weights))
      for (var a = 0, r = t.weights.length; a < r; a++)
        e.morphTargetInfluences[a] = t.weights[a];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
      var s = t.extras.targetNames;
      if (e.morphTargetInfluences.length === s.length)
        for (a = 0, e.morphTargetDictionary = {}, r = s.length; a < r; a++)
          e.morphTargetDictionary[s[a]] = a;
      else
        console.warn(
          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
        );
    }
  }
  function E(e) {
    for (var t = "", a = Object.keys(e).sort(), r = 0, s = a.length; r < s; r++)
      t += a[r] + ":" + e[a[r]] + ";";
    return t;
  }
  function b(e, a, r) {
    (this.json = e || {}),
      (this.extensions = a || {}),
      (this.options = r || {}),
      (this.cache = new t()),
      (this.primitiveCache = {}),
      (this.textureLoader = new THREE.TextureLoader(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      (this.fileLoader = new THREE.FileLoader(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      "use-credentials" === this.options.crossOrigin &&
        this.fileLoader.setWithCredentials(!0);
  }
  function A(e, t, a) {
    var r = t.attributes,
      s = [];
    function n(t, r) {
      return a.getDependency("accessor", t).then(function (t) {
        e.setAttribute(r, t);
      });
    }
    for (var i in r) {
      var o = M[i] || i.toLowerCase();
      o in e.attributes || s.push(n(r[i], o));
    }
    if (void 0 !== t.indices && !e.index) {
      var l = a.getDependency("accessor", t.indices).then(function (t) {
        e.setIndex(t);
      });
      s.push(l);
    }
    return (
      L(e, t),
      (function (e, t, a) {
        var r = t.attributes,
          s = new THREE.Box3();
        if (void 0 !== r.POSITION) {
          var n = (c = a.json.accessors[r.POSITION]).min,
            i = c.max;
          if (void 0 !== n && void 0 !== i) {
            s.set(
              new THREE.Vector3(n[0], n[1], n[2]),
              new THREE.Vector3(i[0], i[1], i[2])
            );
            var o = t.targets;
            if (void 0 !== o)
              for (
                var l = new THREE.Vector3(), p = 0, u = o.length;
                p < u;
                p++
              ) {
                var c,
                  d = o[p];
                void 0 !== d.POSITION &&
                  ((n = (c = a.json.accessors[d.POSITION]).min),
                  (i = c.max),
                  void 0 !== n && void 0 !== i
                    ? (l.setX(Math.max(Math.abs(n[0]), Math.abs(i[0]))),
                      l.setY(Math.max(Math.abs(n[1]), Math.abs(i[1]))),
                      l.setZ(Math.max(Math.abs(n[2]), Math.abs(i[2]))),
                      s.expandByVector(l))
                    : console.warn(
                        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                      ));
              }
            e.boundingBox = s;
            var h = new THREE.Sphere();
            s.getCenter(h.center),
              (h.radius = s.min.distanceTo(s.max) / 2),
              (e.boundingSphere = h);
          } else
            console.warn(
              "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
            );
        }
      })(e, t, a),
      Promise.all(s).then(function () {
        return void 0 !== t.targets
          ? (function (e, t, a) {
              for (
                var r = !1, s = !1, n = 0, i = t.length;
                n < i &&
                (void 0 !== (p = t[n]).POSITION && (r = !0),
                void 0 !== p.NORMAL && (s = !0),
                !r || !s);
                n++
              );
              if (!r && !s) return Promise.resolve(e);
              var o = [],
                l = [];
              for (n = 0, i = t.length; n < i; n++) {
                var p = t[n];
                if (r) {
                  var u =
                    void 0 !== p.POSITION
                      ? a.getDependency("accessor", p.POSITION)
                      : e.attributes.position;
                  o.push(u);
                }
                s &&
                  ((u =
                    void 0 !== p.NORMAL
                      ? a.getDependency("accessor", p.NORMAL)
                      : e.attributes.normal),
                  l.push(u));
              }
              return Promise.all([Promise.all(o), Promise.all(l)]).then(
                function (t) {
                  var a = t[0],
                    n = t[1];
                  return (
                    r && (e.morphAttributes.position = a),
                    s && (e.morphAttributes.normal = n),
                    (e.morphTargetsRelative = !0),
                    e
                  );
                }
              );
            })(e, t.targets, a)
          : e;
      })
    );
  }
  function w(e, t) {
    var a = e.getIndex();
    if (null === a) {
      var r = [],
        s = e.getAttribute("position");
      if (void 0 === s)
        return (
          console.error(
            "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          e
        );
      for (var n = 0; n < s.count; n++) r.push(n);
      e.setIndex(r), (a = e.getIndex());
    }
    var i = a.count - 2,
      o = [];
    if (t === THREE.TriangleFanDrawMode)
      for (n = 1; n <= i; n++)
        o.push(a.getX(0)), o.push(a.getX(n)), o.push(a.getX(n + 1));
    else
      for (n = 0; n < i; n++)
        n % 2 == 0
          ? (o.push(a.getX(n)), o.push(a.getX(n + 1)), o.push(a.getX(n + 2)))
          : (o.push(a.getX(n + 2)), o.push(a.getX(n + 1)), o.push(a.getX(n)));
    o.length / 3 != i &&
      console.error(
        "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    var l = e.clone();
    return l.setIndex(o), l;
  }
  function I(e, t, a, r) {
    var s = a.nodes[e];
    return r
      .getDependency("node", e)
      .then(function (e) {
        var t;
        return void 0 === s.skin
          ? e
          : r
              .getDependency("skin", s.skin)
              .then(function (e) {
                for (var a = [], s = 0, n = (t = e).joints.length; s < n; s++)
                  a.push(r.getDependency("node", t.joints[s]));
                return Promise.all(a);
              })
              .then(function (a) {
                return (
                  e.traverse(function (e) {
                    if (e.isMesh) {
                      for (
                        var r = [], s = [], n = 0, i = a.length;
                        n < i;
                        n++
                      ) {
                        var o = a[n];
                        if (o) {
                          r.push(o);
                          var l = new THREE.Matrix4();
                          void 0 !== t.inverseBindMatrices &&
                            l.fromArray(t.inverseBindMatrices.array, 16 * n),
                            s.push(l);
                        } else
                          console.warn(
                            'THREE.GLTFLoader: Joint "%s" could not be found.',
                            t.joints[n]
                          );
                      }
                      e.bind(new THREE.Skeleton(r, s), e.matrixWorld);
                    }
                  }),
                  e
                );
              });
      })
      .then(function (e) {
        t.add(e);
        var n = [];
        if (s.children)
          for (var i = s.children, o = 0, l = i.length; o < l; o++) {
            var p = i[o];
            n.push(I(p, e, a, r));
          }
        return Promise.all(n);
      });
  }
  return (
    (b.prototype.parse = function (e, t) {
      var a = this,
        r = this.json,
        s = this.extensions;
      this.cache.removeAll(),
        this.markDefs(),
        Promise.all([
          this.getDependencies("scene"),
          this.getDependencies("animation"),
          this.getDependencies("camera"),
        ])
          .then(function (t) {
            var n = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: a,
              userData: {},
            };
            R(s, n, r), L(n, r), e(n);
          })
          .catch(t);
    }),
    (b.prototype.markDefs = function () {
      for (
        var e = this.json.nodes || [],
          t = this.json.skins || [],
          a = this.json.meshes || [],
          r = {},
          s = {},
          n = 0,
          i = t.length;
        n < i;
        n++
      )
        for (var o = t[n].joints, l = 0, p = o.length; l < p; l++)
          e[o[l]].isBone = !0;
      for (var u = 0, c = e.length; u < c; u++) {
        var d = e[u];
        void 0 !== d.mesh &&
          (void 0 === r[d.mesh] && (r[d.mesh] = s[d.mesh] = 0),
          r[d.mesh]++,
          void 0 !== d.skin && (a[d.mesh].isSkinnedMesh = !0));
      }
      (this.json.meshReferences = r), (this.json.meshUses = s);
    }),
    (b.prototype.getDependency = function (e, t) {
      var r = e + ":" + t,
        s = this.cache.get(r);
      if (!s) {
        switch (e) {
          case "scene":
            s = this.loadScene(t);
            break;
          case "node":
            s = this.loadNode(t);
            break;
          case "mesh":
            s = this.loadMesh(t);
            break;
          case "accessor":
            s = this.loadAccessor(t);
            break;
          case "bufferView":
            s = this.loadBufferView(t);
            break;
          case "buffer":
            s = this.loadBuffer(t);
            break;
          case "material":
            s = this.loadMaterial(t);
            break;
          case "texture":
            s = this.loadTexture(t);
            break;
          case "skin":
            s = this.loadSkin(t);
            break;
          case "animation":
            s = this.loadAnimation(t);
            break;
          case "camera":
            s = this.loadCamera(t);
            break;
          case "light":
            s = this.extensions[a.KHR_LIGHTS_PUNCTUAL].loadLight(t);
            break;
          default:
            throw Error("Unknown type: " + e);
        }
        this.cache.add(r, s);
      }
      return s;
    }),
    (b.prototype.getDependencies = function (e) {
      var t = this.cache.get(e);
      if (!t) {
        var a = this;
        (t = Promise.all(
          (this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function (
            t,
            r
          ) {
            return a.getDependency(e, r);
          })
        )),
          this.cache.add(e, t);
      }
      return t;
    }),
    (b.prototype.loadBuffer = function (e) {
      var t = this.json.buffers[e],
        r = this.fileLoader;
      if (t.type && "arraybuffer" !== t.type)
        throw Error(
          "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
        );
      if (void 0 === t.uri && 0 === e)
        return Promise.resolve(this.extensions[a.KHR_BINARY_GLTF].body);
      var s = this.options;
      return new Promise(function (e, a) {
        r.load(y(t.uri, s.path), e, void 0, function () {
          a(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }),
    (b.prototype.loadBufferView = function (e) {
      var t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function (e) {
        var a = t.byteLength || 0,
          r = t.byteOffset || 0;
        return e.slice(r, r + a);
      });
    }),
    (b.prototype.loadAccessor = function (e) {
      var t = this,
        a = this.json,
        r = this.json.accessors[e];
      if (void 0 === r.bufferView && void 0 === r.sparse)
        return Promise.resolve(null);
      var s = [];
      return (
        void 0 !== r.bufferView
          ? s.push(this.getDependency("bufferView", r.bufferView))
          : s.push(null),
        void 0 !== r.sparse &&
          (s.push(
            this.getDependency("bufferView", r.sparse.indices.bufferView)
          ),
          s.push(this.getDependency("bufferView", r.sparse.values.bufferView))),
        Promise.all(s).then(function (e) {
          var s,
            n,
            i = e[0],
            o = g[r.type],
            l = f[r.componentType],
            p = l.BYTES_PER_ELEMENT,
            u = r.byteOffset || 0,
            c =
              void 0 !== r.bufferView
                ? a.bufferViews[r.bufferView].byteStride
                : void 0,
            d = !0 === r.normalized;
          if (c && c !== p * o) {
            var h = Math.floor(u / c),
              m =
                "InterleavedBuffer:" +
                r.bufferView +
                ":" +
                r.componentType +
                ":" +
                h +
                ":" +
                r.count,
              v = t.cache.get(m);
            v ||
              ((s = new l(i, h * c, (r.count * c) / p)),
              (v = new THREE.InterleavedBuffer(s, c / p)),
              t.cache.add(m, v)),
              (n = new THREE.InterleavedBufferAttribute(v, o, (u % c) / p, d));
          } else (s = null === i ? new l(r.count * o) : new l(i, u, r.count * o)), (n = new THREE.BufferAttribute(s, o, d));
          if (void 0 !== r.sparse) {
            var M = g.SCALAR,
              T = f[r.sparse.indices.componentType],
              S = r.sparse.indices.byteOffset || 0,
              $ = r.sparse.values.byteOffset || 0,
              y = new T(e[1], S, r.sparse.count * M),
              R = new l(e[2], $, r.sparse.count * o);
            null !== i &&
              (n = new THREE.BufferAttribute(
                n.array.slice(),
                n.itemSize,
                n.normalized
              ));
            for (var L = 0, x = y.length; L < x; L++) {
              var E = y[L];
              if (
                (n.setX(E, R[L * o]),
                2 <= o && n.setY(E, R[L * o + 1]),
                3 <= o && n.setZ(E, R[L * o + 2]),
                4 <= o && n.setW(E, R[L * o + 3]),
                5 <= o)
              )
                throw Error(
                  "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                );
            }
          }
          return n;
        })
      );
    }),
    (b.prototype.loadTexture = function (e) {
      var t,
        r = this,
        s = this.json,
        n = this.options,
        i = this.textureLoader,
        o = window.URL || window.webkitURL,
        l = s.textures[e],
        p = l.extensions || {},
        u = (t = p[a.MSFT_TEXTURE_DDS]
          ? s.images[p[a.MSFT_TEXTURE_DDS].source]
          : s.images[l.source]).uri,
        c = !1;
      return (
        void 0 !== t.bufferView &&
          (u = r.getDependency("bufferView", t.bufferView).then(function (e) {
            c = !0;
            var a = new Blob([e], { type: t.mimeType });
            return (u = o.createObjectURL(a));
          })),
        Promise.resolve(u)
          .then(function (e) {
            var t = n.manager.getHandler(e);
            return (
              (t =
                t ||
                (p[a.MSFT_TEXTURE_DDS]
                  ? r.extensions[a.MSFT_TEXTURE_DDS].ddsLoader
                  : i)),
              new Promise(function (a, r) {
                t.load(y(e, n.path), a, void 0, r);
              })
            );
          })
          .then(function (e) {
            !0 === c && o.revokeObjectURL(u),
              (e.flipY = !1),
              void 0 !== l.name && (e.name = l.name),
              t.mimeType in $ && (e.format = $[t.mimeType]);
            var a = (s.samplers || {})[l.sampler] || {};
            return (
              (e.magFilter = m[a.magFilter] || THREE.LinearFilter),
              (e.minFilter = m[a.minFilter] || THREE.LinearMipmapLinearFilter),
              (e.wrapS = v[a.wrapS] || THREE.RepeatWrapping),
              (e.wrapT = v[a.wrapT] || THREE.RepeatWrapping),
              e
            );
          })
      );
    }),
    (b.prototype.assignTexture = function (e, t, r) {
      var s = this;
      return this.getDependency("texture", r.index).then(function (n) {
        if (!n.isCompressedTexture)
          switch (t) {
            case "aoMap":
            case "emissiveMap":
            case "metalnessMap":
            case "normalMap":
            case "roughnessMap":
              n.format = THREE.RGBFormat;
          }
        if (
          (void 0 === r.texCoord ||
            0 == r.texCoord ||
            ("aoMap" === t && 1 == r.texCoord) ||
            console.warn(
              "THREE.GLTFLoader: Custom UV set " +
                r.texCoord +
                " for texture " +
                t +
                " not yet supported."
            ),
          s.extensions[a.KHR_TEXTURE_TRANSFORM])
        ) {
          var i =
            void 0 !== r.extensions
              ? r.extensions[a.KHR_TEXTURE_TRANSFORM]
              : void 0;
          i && (n = s.extensions[a.KHR_TEXTURE_TRANSFORM].extendTexture(n, i));
        }
        e[t] = n;
      });
    }),
    (b.prototype.assignFinalMaterial = function (e) {
      var t = e.geometry,
        r = e.material,
        s = this.extensions,
        n = void 0 !== t.attributes.tangent,
        i = void 0 !== t.attributes.color,
        o = void 0 === t.attributes.normal,
        l = !0 === e.isSkinnedMesh,
        p = 0 < Object.keys(t.morphAttributes).length,
        u = p && void 0 !== t.morphAttributes.normal;
      if (e.isPoints) {
        var c = "PointsMaterial:" + r.uuid,
          d = this.cache.get(c);
        d ||
          ((d = new THREE.PointsMaterial()),
          THREE.Material.prototype.copy.call(d, r),
          d.color.copy(r.color),
          (d.map = r.map),
          (d.sizeAttenuation = !1),
          this.cache.add(c, d)),
          (r = d);
      } else if (e.isLine) {
        c = "LineBasicMaterial:" + r.uuid;
        var h = this.cache.get(c);
        h ||
          ((h = new THREE.LineBasicMaterial()),
          THREE.Material.prototype.copy.call(h, r),
          h.color.copy(r.color),
          this.cache.add(c, h)),
          (r = h);
      }
      if (n || i || o || l || p) {
        (c = "ClonedMaterial:" + r.uuid + ":"),
          r.isGLTFSpecularGlossinessMaterial && (c += "specular-glossiness:"),
          l && (c += "skinning:"),
          n && (c += "vertex-tangents:"),
          i && (c += "vertex-colors:"),
          o && (c += "flat-shading:"),
          p && (c += "morph-targets:"),
          u && (c += "morph-normals:");
        var f = this.cache.get(c);
        f ||
          ((f = r.isGLTFSpecularGlossinessMaterial
            ? s[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(r)
            : r.clone()),
          l && (f.skinning = !0),
          n && (f.vertexTangents = !0),
          i && (f.vertexColors = THREE.VertexColors),
          o && (f.flatShading = !0),
          p && (f.morphTargets = !0),
          u && (f.morphNormals = !0),
          this.cache.add(c, f)),
          (r = f);
      }
      r.aoMap &&
        void 0 === t.attributes.uv2 &&
        void 0 !== t.attributes.uv &&
        t.setAttribute(
          "uv2",
          new THREE.BufferAttribute(t.attributes.uv.array, 2)
        ),
        r.isGLTFSpecularGlossinessMaterial &&
          (e.onBeforeRender =
            s[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms),
        r.normalScale && !n && (r.normalScale.y = -r.normalScale.y),
        (e.material = r);
    }),
    (b.prototype.loadMaterial = function (e) {
      var t,
        r = this.json,
        s = this.extensions,
        n = r.materials[e],
        i = {},
        o = n.extensions || {},
        l = [];
      if (o[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
        var p = s[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
        (t = p.getMaterialType()), l.push(p.extendParams(i, n, this));
      } else if (o[a.KHR_MATERIALS_UNLIT]) {
        var u = s[a.KHR_MATERIALS_UNLIT];
        (t = u.getMaterialType()), l.push(u.extendParams(i, n, this));
      } else {
        t = THREE.MeshStandardMaterial;
        var c = n.pbrMetallicRoughness || {};
        if (
          ((i.color = new THREE.Color(1, 1, 1)),
          (i.opacity = 1),
          Array.isArray(c.baseColorFactor))
        ) {
          var d = c.baseColorFactor;
          i.color.fromArray(d), (i.opacity = d[3]);
        }
        void 0 !== c.baseColorTexture &&
          l.push(this.assignTexture(i, "map", c.baseColorTexture)),
          (i.metalness = void 0 !== c.metallicFactor ? c.metallicFactor : 1),
          (i.roughness = void 0 !== c.roughnessFactor ? c.roughnessFactor : 1),
          void 0 !== c.metallicRoughnessTexture &&
            (l.push(
              this.assignTexture(i, "metalnessMap", c.metallicRoughnessTexture)
            ),
            l.push(
              this.assignTexture(i, "roughnessMap", c.metallicRoughnessTexture)
            ));
      }
      !0 === n.doubleSided && (i.side = THREE.DoubleSide);
      var h = n.alphaMode || "OPAQUE";
      return (
        "BLEND" === h
          ? (i.transparent = !0)
          : ((i.transparent = !1),
            "MASK" === h &&
              (i.alphaTest = void 0 !== n.alphaCutoff ? n.alphaCutoff : 0.5)),
        void 0 !== n.normalTexture &&
          t !== THREE.MeshBasicMaterial &&
          (l.push(this.assignTexture(i, "normalMap", n.normalTexture)),
          (i.normalScale = new THREE.Vector2(1, 1)),
          void 0 !== n.normalTexture.scale &&
            i.normalScale.set(n.normalTexture.scale, n.normalTexture.scale)),
        void 0 !== n.occlusionTexture &&
          t !== THREE.MeshBasicMaterial &&
          (l.push(this.assignTexture(i, "aoMap", n.occlusionTexture)),
          void 0 !== n.occlusionTexture.strength &&
            (i.aoMapIntensity = n.occlusionTexture.strength)),
        void 0 !== n.emissiveFactor &&
          t !== THREE.MeshBasicMaterial &&
          (i.emissive = new THREE.Color().fromArray(n.emissiveFactor)),
        void 0 !== n.emissiveTexture &&
          t !== THREE.MeshBasicMaterial &&
          l.push(this.assignTexture(i, "emissiveMap", n.emissiveTexture)),
        Promise.all(l).then(function () {
          var e;
          return (
            (e =
              t === THREE.ShaderMaterial
                ? s[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(i)
                : new t(i)),
            void 0 !== n.name && (e.name = n.name),
            e.map && (e.map.encoding = THREE.sRGBEncoding),
            e.emissiveMap && (e.emissiveMap.encoding = THREE.sRGBEncoding),
            e.specularMap && (e.specularMap.encoding = THREE.sRGBEncoding),
            L(e, n),
            n.extensions && R(s, e, n),
            e
          );
        })
      );
    }),
    (b.prototype.loadGeometries = function (e) {
      var t = this,
        r = this.extensions,
        s = this.primitiveCache;
      function n(e) {
        return r[a.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(e, t)
          .then(function (a) {
            return A(a, e, t);
          });
      }
      for (var i, o, l = [], p = 0, u = e.length; p < u; p++) {
        var c,
          d = e[p],
          h = (o =
            (i = d).extensions && i.extensions[a.KHR_DRACO_MESH_COMPRESSION])
            ? "draco:" + o.bufferView + ":" + o.indices + ":" + E(o.attributes)
            : i.indices + ":" + E(i.attributes) + ":" + i.mode,
          f = s[h];
        f
          ? l.push(f.promise)
          : ((c =
              d.extensions && d.extensions[a.KHR_DRACO_MESH_COMPRESSION]
                ? n(d)
                : A(new THREE.BufferGeometry(), d, t)),
            (s[h] = { primitive: d, promise: c }),
            l.push(c));
      }
      return Promise.all(l);
    }),
    (b.prototype.loadMesh = function (e) {
      for (
        var t,
          a = this,
          r = this.json.meshes[e],
          s = r.primitives,
          n = [],
          i = 0,
          o = s.length;
        i < o;
        i++
      ) {
        var l =
          void 0 === s[i].material
            ? (void 0 === (t = this.cache).DefaultMaterial &&
                (t.DefaultMaterial = new THREE.MeshStandardMaterial({
                  color: 16777215,
                  emissive: 0,
                  metalness: 1,
                  roughness: 1,
                  transparent: !1,
                  depthTest: !0,
                  side: THREE.FrontSide,
                })),
              t.DefaultMaterial)
            : this.getDependency("material", s[i].material);
        n.push(l);
      }
      return (
        n.push(a.loadGeometries(s)),
        Promise.all(n).then(function (t) {
          for (
            var n = t.slice(0, t.length - 1),
              i = t[t.length - 1],
              o = [],
              l = 0,
              p = i.length;
            l < p;
            l++
          ) {
            var u,
              c = i[l],
              d = s[l],
              h = n[l];
            if (
              4 === d.mode ||
              5 === d.mode ||
              6 === d.mode ||
              void 0 === d.mode
            )
              !0 !==
                (u =
                  !0 === r.isSkinnedMesh
                    ? new THREE.SkinnedMesh(c, h)
                    : new THREE.Mesh(c, h)).isSkinnedMesh ||
                u.geometry.attributes.skinWeight.normalized ||
                u.normalizeSkinWeights(),
                5 === d.mode
                  ? (u.geometry = w(u.geometry, THREE.TriangleStripDrawMode))
                  : 6 === d.mode &&
                    (u.geometry = w(u.geometry, THREE.TriangleFanDrawMode));
            else if (1 === d.mode) u = new THREE.LineSegments(c, h);
            else if (3 === d.mode) u = new THREE.Line(c, h);
            else if (2 === d.mode) u = new THREE.LineLoop(c, h);
            else {
              if (0 !== d.mode)
                throw Error(
                  "THREE.GLTFLoader: Primitive mode unsupported: " + d.mode
                );
              u = new THREE.Points(c, h);
            }
            0 < Object.keys(u.geometry.morphAttributes).length && x(u, r),
              (u.name = r.name || "mesh_" + e),
              1 < i.length && (u.name += "_" + l),
              L(u, r),
              a.assignFinalMaterial(u),
              o.push(u);
          }
          if (1 === o.length) return o[0];
          var f = new THREE.Group();
          for (l = 0, p = o.length; l < p; l++) f.add(o[l]);
          return f;
        })
      );
    }),
    (b.prototype.loadCamera = function (e) {
      var t,
        a = this.json.cameras[e],
        r = a[a.type];
      if (r)
        return (
          "perspective" === a.type
            ? (t = new THREE.PerspectiveCamera(
                THREE.Math.radToDeg(r.yfov),
                r.aspectRatio || 1,
                r.znear || 1,
                r.zfar || 2e6
              ))
            : "orthographic" === a.type &&
              (t = new THREE.OrthographicCamera(
                -(r.xmag / 2),
                r.xmag / 2,
                r.ymag / 2,
                -(r.ymag / 2),
                r.znear,
                r.zfar
              )),
          void 0 !== a.name && (t.name = a.name),
          L(t, a),
          Promise.resolve(t)
        );
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }),
    (b.prototype.loadSkin = function (e) {
      var t = this.json.skins[e],
        a = { joints: t.joints };
      return void 0 === t.inverseBindMatrices
        ? Promise.resolve(a)
        : this.getDependency("accessor", t.inverseBindMatrices).then(function (
            e
          ) {
            return (a.inverseBindMatrices = e), a;
          });
    }),
    (b.prototype.loadAnimation = function (e) {
      for (
        var t = this.json.animations[e],
          a = [],
          r = [],
          s = [],
          n = [],
          i = [],
          o = 0,
          l = t.channels.length;
        o < l;
        o++
      ) {
        var p = t.channels[o],
          u = t.samplers[p.sampler],
          c = p.target,
          d = void 0 !== c.node ? c.node : c.id,
          f = void 0 !== t.parameters ? t.parameters[u.input] : u.input,
          m = void 0 !== t.parameters ? t.parameters[u.output] : u.output;
        a.push(this.getDependency("node", d)),
          r.push(this.getDependency("accessor", f)),
          s.push(this.getDependency("accessor", m)),
          n.push(u),
          i.push(c);
      }
      return Promise.all([
        Promise.all(a),
        Promise.all(r),
        Promise.all(s),
        Promise.all(n),
        Promise.all(i),
      ]).then(function (a) {
        for (
          var r = a[0],
            s = a[1],
            n = a[2],
            i = a[3],
            o = a[4],
            l = [],
            p = 0,
            u = r.length;
          p < u;
          p++
        ) {
          var c = r[p],
            d = s[p],
            f = n[p],
            m = i[p],
            v = o[p];
          if (void 0 !== c) {
            switch ((c.updateMatrix(), (c.matrixAutoUpdate = !0), T[v.path])) {
              case T.weights:
                g = THREE.NumberKeyframeTrack;
                break;
              case T.rotation:
                g = THREE.QuaternionKeyframeTrack;
                break;
              case T.position:
              case T.scale:
              default:
                g = THREE.VectorKeyframeTrack;
            }
            var g,
              M,
              $ = c.name ? c.name : c.uuid,
              y =
                void 0 !== m.interpolation
                  ? S[m.interpolation]
                  : THREE.InterpolateLinear,
              R = [];
            T[v.path] === T.weights
              ? c.traverse(function (e) {
                  !0 === e.isMesh &&
                    e.morphTargetInfluences &&
                    R.push(e.name ? e.name : e.uuid);
                })
              : R.push($);
            var L = f.array;
            if (f.normalized) {
              if (L.constructor === Int8Array) M = 1 / 127;
              else if (L.constructor === Uint8Array) M = 1 / 255;
              else if (L.constructor == Int16Array) M = 1 / 32767;
              else {
                if (L.constructor !== Uint16Array)
                  throw Error(
                    "THREE.GLTFLoader: Unsupported output accessor component type."
                  );
                M = 1 / 65535;
              }
              for (
                var x = new Float32Array(L.length), E = 0, b = L.length;
                E < b;
                E++
              )
                x[E] = L[E] * M;
              L = x;
            }
            for (E = 0, b = R.length; E < b; E++) {
              var A = new g(R[E] + "." + T[v.path], d.array, L, y);
              "CUBICSPLINE" === m.interpolation &&
                ((A.createInterpolant = function (e) {
                  return new h(
                    this.times,
                    this.values,
                    this.getValueSize() / 3,
                    e
                  );
                }),
                (A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                  !0)),
                l.push(A);
            }
          }
        }
        var w = void 0 !== t.name ? t.name : "animation_" + e;
        return new THREE.AnimationClip(w, void 0, l);
      });
    }),
    (b.prototype.loadNode = function (e) {
      var t,
        r = this.json,
        s = this.extensions,
        n = r.meshReferences,
        i = r.meshUses,
        o = r.nodes[e];
      return ((t = []),
      void 0 !== o.mesh &&
        t.push(
          this.getDependency("mesh", o.mesh).then(function (e) {
            var t;
            if (1 < n[o.mesh]) {
              var a = i[o.mesh]++;
              ((t = e.clone()).name += "_instance_" + a),
                (t.onBeforeRender = e.onBeforeRender);
              for (var r = 0, s = t.children.length; r < s; r++)
                (t.children[r].name += "_instance_" + a),
                  (t.children[r].onBeforeRender = e.children[r].onBeforeRender);
            } else t = e;
            return (
              void 0 !== o.weights &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (var t = 0, a = o.weights.length; t < a; t++)
                      e.morphTargetInfluences[t] = o.weights[t];
                }),
              t
            );
          })
        ),
      void 0 !== o.camera && t.push(this.getDependency("camera", o.camera)),
      o.extensions &&
        o.extensions[a.KHR_LIGHTS_PUNCTUAL] &&
        void 0 !== o.extensions[a.KHR_LIGHTS_PUNCTUAL].light &&
        t.push(
          this.getDependency("light", o.extensions[a.KHR_LIGHTS_PUNCTUAL].light)
        ),
      Promise.all(t)).then(function (e) {
        var t;
        if (
          (t =
            !0 === o.isBone
              ? new THREE.Bone()
              : 1 < e.length
              ? new THREE.Group()
              : 1 === e.length
              ? e[0]
              : new THREE.Object3D()) !== e[0]
        )
          for (var a = 0, r = e.length; a < r; a++) t.add(e[a]);
        if (
          (void 0 !== o.name &&
            ((t.userData.name = o.name),
            (t.name = THREE.PropertyBinding.sanitizeNodeName(o.name))),
          L(t, o),
          o.extensions && R(s, t, o),
          void 0 !== o.matrix)
        ) {
          var n = new THREE.Matrix4();
          n.fromArray(o.matrix), t.applyMatrix(n);
        } else void 0 !== o.translation && t.position.fromArray(o.translation), void 0 !== o.rotation && t.quaternion.fromArray(o.rotation), void 0 !== o.scale && t.scale.fromArray(o.scale);
        return t;
      });
    }),
    (b.prototype.loadScene = function (e) {
      var t = this.json,
        a = this.extensions,
        r = this.json.scenes[e],
        s = new THREE.Scene();
      void 0 !== r.name && (s.name = r.name),
        L(s, r),
        r.extensions && R(a, s, r);
      for (var n = r.nodes || [], i = [], o = 0, l = n.length; o < l; o++)
        i.push(I(n[o], s, t, this));
      return Promise.all(i).then(function () {
        return s;
      });
    }),
    e
  );
})();
