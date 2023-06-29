THREE.BufferGeometryUtils = {
  computeTangents: function (r) {
    var e = r.index,
      t = r.attributes;
    if (
      null !== e &&
      void 0 !== t.position &&
      void 0 !== t.normal &&
      void 0 !== t.uv
    ) {
      var n,
        a,
        o = e.array,
        i = t.position.array,
        u = t.normal.array,
        s = t.uv.array,
        f = i.length / 3;
      void 0 === t.tangent &&
        r.setAttribute(
          "tangent",
          new THREE.BufferAttribute(new Float32Array(4 * f), 4)
        );
      for (var l = t.tangent.array, g = [], d = [], c = 0; c < f; c++)
        (g[c] = new THREE.Vector3()), (d[c] = new THREE.Vector3());
      var m = new THREE.Vector3(),
        v = new THREE.Vector3(),
        h = new THREE.Vector3(),
        p = new THREE.Vector2(),
        $ = new THREE.Vector2(),
        y = new THREE.Vector2(),
        b = new THREE.Vector3(),
        w = new THREE.Vector3(),
        A = r.groups;
      0 === A.length && (A = [{ start: 0, count: o.length }]), (c = 0);
      for (var B = A.length; c < B; ++c)
        for (var T = (a = (n = A[c]).start), E = a + n.count; T < E; T += 3)
          G(o[T + 0], o[T + 1], o[T + 2]);
      var S,
        x,
        V,
        z = new THREE.Vector3(),
        D = new THREE.Vector3(),
        X = new THREE.Vector3(),
        _ = new THREE.Vector3();
      for (c = 0, B = A.length; c < B; ++c)
        for (T = a = (n = A[c]).start, E = a + n.count; T < E; T += 3)
          I(o[T + 0]), I(o[T + 1]), I(o[T + 2]);
    } else
      console.warn(
        "THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()"
      );
    function G(r, e, t) {
      m.fromArray(i, 3 * r),
        v.fromArray(i, 3 * e),
        h.fromArray(i, 3 * t),
        p.fromArray(s, 2 * r),
        $.fromArray(s, 2 * e),
        y.fromArray(s, 2 * t),
        v.sub(m),
        h.sub(m),
        $.sub(p),
        y.sub(p);
      var n = 1 / ($.x * y.y - y.x * $.y);
      isFinite(n) &&
        (b
          .copy(v)
          .multiplyScalar(y.y)
          .addScaledVector(h, -$.y)
          .multiplyScalar(n),
        w
          .copy(h)
          .multiplyScalar($.x)
          .addScaledVector(v, -y.x)
          .multiplyScalar(n),
        g[r].add(b),
        g[e].add(b),
        g[t].add(b),
        d[r].add(w),
        d[e].add(w),
        d[t].add(w));
    }
    function I(r) {
      X.fromArray(u, 3 * r),
        _.copy(X),
        (x = g[r]),
        z.copy(x),
        z.sub(X.multiplyScalar(X.dot(x))).normalize(),
        D.crossVectors(_, x),
        (S = (V = D.dot(d[r])) < 0 ? -1 : 1),
        (l[4 * r] = z.x),
        (l[4 * r + 1] = z.y),
        (l[4 * r + 2] = z.z),
        (l[4 * r + 3] = S);
    }
  },
  mergeBufferGeometries: function (r, e) {
    for (
      var t = null !== r[0].index,
        n = new Set(Object.keys(r[0].attributes)),
        a = new Set(Object.keys(r[0].morphAttributes)),
        o = {},
        i = {},
        u = r[0].morphTargetsRelative,
        s = new THREE.BufferGeometry(),
        f = 0,
        l = 0;
      l < r.length;
      ++l
    ) {
      var g,
        d = r[l];
      if (t !== (null !== d.index)) return null;
      for (var c in d.attributes) {
        if (!n.has(c)) return null;
        void 0 === o[c] && (o[c] = []), o[c].push(d.attributes[c]);
      }
      if (u !== d.morphTargetsRelative) return null;
      for (var c in d.morphAttributes) {
        if (!a.has(c)) return null;
        void 0 === i[c] && (i[c] = []), i[c].push(d.morphAttributes[c]);
      }
      if (
        ((s.userData.mergedUserData = s.userData.mergedUserData || []),
        s.userData.mergedUserData.push(d.userData),
        e)
      ) {
        if (t) g = d.index.count;
        else {
          if (void 0 === d.attributes.position) return null;
          g = d.attributes.position.count;
        }
        s.addGroup(f, g, l), (f += g);
      }
    }
    if (t) {
      var m = 0,
        v = [];
      for (l = 0; l < r.length; ++l) {
        for (var h = r[l].index, p = 0; p < h.count; ++p) v.push(h.getX(p) + m);
        m += r[l].attributes.position.count;
      }
      s.setIndex(v);
    }
    for (var c in o) {
      var $ = this.mergeBufferAttributes(o[c]);
      if (!$) return null;
      s.setAttribute(c, $);
    }
    for (var c in i) {
      var y = i[c][0].length;
      if (0 === y) break;
      for (
        s.morphAttributes = s.morphAttributes || {},
          s.morphAttributes[c] = [],
          l = 0;
        l < y;
        ++l
      ) {
        var b = [];
        for (p = 0; p < i[c].length; ++p) b.push(i[c][p][l]);
        var w = this.mergeBufferAttributes(b);
        if (!w) return null;
        s.morphAttributes[c].push(w);
      }
    }
    return s;
  },
  mergeBufferAttributes: function (r) {
    for (var e, t, n, a = 0, o = 0; o < r.length; ++o) {
      var i = r[o];
      if (
        i.isInterleavedBufferAttribute ||
        (void 0 === e && (e = i.array.constructor),
        e !== i.array.constructor) ||
        (void 0 === t && (t = i.itemSize), t !== i.itemSize) ||
        (void 0 === n && (n = i.normalized), n !== i.normalized)
      )
        return null;
      a += i.array.length;
    }
    var u = new e(a),
      s = 0;
    for (o = 0; o < r.length; ++o)
      u.set(r[o].array, s), (s += r[o].array.length);
    return new THREE.BufferAttribute(u, t, n);
  },
  interleaveAttributes: function (r) {
    for (var e, t = 0, n = 0, a = 0, o = r.length; a < o; ++a) {
      var i = r[a];
      if (
        (void 0 === e && (e = i.array.constructor), e !== i.array.constructor)
      )
        return (
          console.warn(
            "AttributeBuffers of different types cannot be interleaved"
          ),
          null
        );
      (t += i.array.length), (n += i.itemSize);
    }
    var u = new THREE.InterleavedBuffer(new e(t), n),
      s = 0,
      f = [],
      l = ["getX", "getY", "getZ", "getW"],
      g = ["setX", "setY", "setZ", "setW"],
      d = 0;
    for (o = r.length; d < o; d++) {
      var c = (i = r[d]).itemSize,
        m = i.count,
        v = new THREE.InterleavedBufferAttribute(u, c, s, i.normalized);
      f.push(v), (s += c);
      for (var h = 0; h < m; h++)
        for (var p = 0; p < c; p++) v[g[p]](h, i[l[p]](h));
    }
    return f;
  },
  estimateBytesUsed: function (r) {
    var e = 0;
    for (var t in r.attributes) {
      var n = r.getAttribute(t);
      e += n.count * n.itemSize * n.array.BYTES_PER_ELEMENT;
    }
    var a = r.getIndex();
    return e + (a ? a.count * a.itemSize * a.array.BYTES_PER_ELEMENT : 0);
  },
  mergeVertices: function (r, e = 1e-4) {
    e = Math.max(e, Number.EPSILON);
    for (
      var t = {},
        n = r.getIndex(),
        a = r.getAttribute("position"),
        o = n ? n.count : a.count,
        i = 0,
        u = Object.keys(r.attributes),
        s = {},
        f = {},
        l = [],
        g = ["getX", "getY", "getZ", "getW"],
        d = 0,
        c = u.length;
      d < c;
      d++
    )
      (s[($ = u[d])] = []),
        (A = r.morphAttributes[$]) &&
          (f[$] = Array(A.length)
            .fill()
            .map(() => []));
    var m = Math.pow(10, Math.log10(1 / e));
    for (d = 0; d < o; d++) {
      var v = n ? n.getX(d) : d,
        h = "",
        p = 0;
      for (c = u.length; p < c; p++)
        for (
          var $ = u[p], y = (w = r.getAttribute($)).itemSize, b = 0;
          b < y;
          b++
        )
          h += `${~~(w[g[b]](v) * m)},`;
      if (h in t) l.push(t[h]);
      else {
        for (p = 0, c = u.length; p < c; p++) {
          $ = u[p];
          var w = r.getAttribute($),
            A = r.morphAttributes[$],
            B = ((y = w.itemSize), s[$]),
            T = f[$];
          for (b = 0; b < y; b++) {
            var E = g[b];
            if ((B.push(w[E](v)), A))
              for (var S = 0, x = A.length; S < x; S++) T[S].push(A[S][E](v));
          }
        }
        (t[h] = i), l.push(i), i++;
      }
    }
    let V = r.clone();
    for (d = 0, c = u.length; d < c; d++) {
      $ = u[d];
      var z = r.getAttribute($),
        D = new z.array.constructor(s[$]);
      if (
        ((w = new THREE.BufferAttribute(D, z.itemSize, z.normalized)),
        V.setAttribute($, w),
        $ in f)
      )
        for (p = 0; p < f[$].length; p++) {
          var X = r.morphAttributes[$][p],
            _ =
              ((D = new X.array.constructor(f[$][p])),
              new THREE.BufferAttribute(D, X.itemSize, X.normalized));
          V.morphAttributes[$][p] = _;
        }
    }
    return V.setIndex(l), V;
  },
  toTrianglesDrawMode: function (r, e) {
    if (e === THREE.TrianglesDrawMode)
      return (
        console.warn(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
        ),
        r
      );
    if (e === THREE.TriangleFanDrawMode || e === THREE.TriangleStripDrawMode) {
      var t = r.getIndex();
      if (null === t) {
        var n = [],
          a = r.getAttribute("position");
        if (void 0 === a)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
            ),
            r
          );
        for (var o = 0; o < a.count; o++) n.push(o);
        r.setIndex(n), (t = r.getIndex());
      }
      var i = t.count - 2,
        u = [];
      if (e === THREE.TriangleFanDrawMode)
        for (o = 1; o <= i; o++)
          u.push(t.getX(0)), u.push(t.getX(o)), u.push(t.getX(o + 1));
      else
        for (o = 0; o < i; o++)
          o % 2 == 0
            ? (u.push(t.getX(o)), u.push(t.getX(o + 1)), u.push(t.getX(o + 2)))
            : (u.push(t.getX(o + 2)), u.push(t.getX(o + 1)), u.push(t.getX(o)));
      u.length / 3 !== i &&
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
        );
      var s = r.clone();
      return s.setIndex(u), s.clearGroups(), s;
    }
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      r
    );
  },
};
