"use strict";
let scene,
  camera,
  renderer,
  orbitControl,
  stats,
  clock = new THREE.Clock(),
  deltaTime;
const cellWidth = 2,
  columns = 21;
let laneTypes = [
    "car",
    "car",
    "car",
    "forest",
    "forest",
    "forest",
    "truck",
    "truck",
    "river",
    "river",
    "rail",
  ],
  laneSpeeds,
  logSpeeds,
  cameraOffsetX,
  cameraOffsetZ,
  chicken,
  lanes,
  gameSounds,
  themeSong,
  gameOver;
const firstRun = () => {
    (document.getElementById("instructions").innerText =
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Swipe in the direction you wanna move."
        : "Use the arrow keys to move around.") +
      "\nCross as many roads as possible"),
      (stats = new Stats()).showPanel(0),
      (camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.1,
        1e3
      )).position.set(5, 15, 18),
      camera.lookAt(new THREE.Vector3(0, 0, 0)),
      (cameraOffsetX = camera.position.x),
      (cameraOffsetZ = camera.position.z),
      ((renderer = new THREE.WebGLRenderer({
        alpha: !0,
        antialias: !0,
      })).shadowMap.enabled = !1),
      (renderer.shadowMap.type = THREE.PCFSoftShadowMap),
      renderer.setPixelRatio(window.devicePixelRatio),
      renderer.setSize(window.innerWidth, window.innerHeight),
      document.body.appendChild(renderer.domElement),
      update(),
      (gameSounds = new Sound(camera));
  },
  init = () => {
    (document.getElementById("score").innerText = "SCORE:0"),
      (document.getElementById("restart").style.visibility = "hidden"),
      document.getElementById("splash") &&
        document.body.removeChild(document.getElementById("splash")),
      (scene = new THREE.Scene()),
      (gameOver = !1),
      (laneSpeeds = [3, 4, 5]),
      (logSpeeds = [2, 2.5, 3]),
      camera.position.set(5, 15, 18),
      camera.lookAt(new THREE.Vector3(0, 0, 0)),
      (cameraOffsetX = camera.position.x),
      (cameraOffsetZ = camera.position.z),
      addLight(),
      (chicken = new Chicken()),
      scene.add(chicken.model),
      (lanes = [
        -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]
        .map((e) => {
          let t = new Lane(e);
          return (t.mesh.position.z = -(2 * e)), scene.add(t.mesh), t;
        })
        .filter((e) => e.index >= 0)),
      gameSounds.themeSong.setVolume(0.7);
  },
  addLight = () => {
    let e = new THREE.AmbientLight(16777215, 0.3);
    scene.add(e);
    let t = new THREE.HemisphereLight(16777215, 0, 0.4);
    scene.add(t);
    let a = new THREE.DirectionalLight(16777215, 0.6);
    a.position.set(0, 100, 0),
      (a.castShadow = !0),
      (a.shadow.camera.near = 50),
      (a.shadow.camera.far = 120),
      (a.shadow.camera.top = 400),
      (a.shadow.camera.bottom = -21),
      (a.shadow.camera.left = -21),
      (a.shadow.camera.right = 21),
      scene.add(a);
  };
class Chicken {
  constructor(e = { x: 0.63, y: 0.6, z: 0.63 }) {
    (this.model = new THREE.Group()),
      (this.currentLane = 0),
      (this.maxLane = 0),
      (this.currentColumn = Math.floor(10.5)),
      (this.isMoving = !1),
      (this.feathers = new Feathers()),
      (this.splashes = new Splash());
    let t = new THREE.MeshLambertMaterial({ color: 14441050 }),
      a = new THREE.MeshLambertMaterial({ color: 16777215 }),
      i = new THREE.MeshLambertMaterial({ color: 14312448 }),
      r = new THREE.MeshLambertMaterial({ color: 0 }),
      o = new THREE.BoxBufferGeometry(0.1, 0.1, 0.6),
      n = new THREE.BoxBufferGeometry(0.1, 0.1, 0.3),
      s = new THREE.BoxBufferGeometry(0.1, 0.1, 0.6),
      h = new THREE.BoxBufferGeometry(0.1, 0.5, 0.1),
      l = new THREE.BoxBufferGeometry(0.2, 0.2, 0.3);
    o.applyMatrix(
      new THREE.Matrix4().makeTranslation(0.1, o.parameters.height / 2, 0.15)
    ),
      n.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, n.parameters.height / 2, 0)
      ),
      s.applyMatrix(
        new THREE.Matrix4().makeTranslation(-0.1, s.parameters.height / 2, 0.15)
      ),
      h.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, h.parameters.height / 2, 0)
      ),
      l.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          1.5,
          l.parameters.depth / 2 + 0.6
        )
      );
    let m = THREE.BufferGeometryUtils.mergeBufferGeometries([o, n, s, h]),
      p = m.clone();
    m.applyMatrix(new THREE.Matrix4().makeTranslation(0.2, 0, 0)),
      p.applyMatrix(new THREE.Matrix4().makeTranslation(-0.2, 0, 0));
    let d = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([m, p, l]),
      i
    );
    (d.castShadow = !0), (d.receiveShadow = !0), this.model.add(d);
    let $ = new THREE.BoxBufferGeometry(0.69, 0.6, 1.2),
      c = new THREE.BoxBufferGeometry(0.69, 0.675, 0.8),
      x = new THREE.BoxBufferGeometry(0.15, 0.4, 0.8),
      f = new THREE.BoxBufferGeometry(0.15, 0.4, 0.8),
      w = new THREE.BoxBufferGeometry(0.5, 0.4, 0.1);
    $.applyMatrix(
      new THREE.Matrix4().makeTranslation(0, $.parameters.height / 2 + 0.5, 0)
    ),
      c.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          c.parameters.height / 2 + 1.1,
          0.2
        )
      ),
      x.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          x.parameters.width / 2 + $.parameters.width / 2,
          x.parameters.height / 2 + 0.6,
          0
        )
      ),
      f.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          -f.parameters.width / 2 - $.parameters.width / 2,
          f.parameters.height / 2 + 0.6,
          0
        )
      ),
      w.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          $.parameters.height / 2 + 0.5,
          -w.parameters.depth / 2 - 0.6
        )
      );
    let u = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([$, c, x, f, w]),
      a
    );
    (u.castShadow = !0), (u.receiveShadow = !0), this.model.add(u);
    let y = new THREE.BoxBufferGeometry(0.72, 0.12, 0.12);
    y.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1.55, 0.32));
    let M = new THREE.Mesh(y, r);
    (M.castShadow = !0), (M.receiveShadow = !0), this.model.add(M);
    let g = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2),
      _ = new THREE.BoxBufferGeometry(0.2, 0.15, 0.5);
    g.applyMatrix(
      new THREE.Matrix4().makeTranslation(0, 1.3, g.parameters.depth / 2 + 0.6)
    ),
      _.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          _.parameters.height / 2 + 1.775,
          0.2
        )
      );
    let B = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([g, _]),
      t
    );
    (B.castShadow = !0),
      (B.receiveShadow = !0),
      this.model.add(B),
      this.model.scale.set(e.x, e.y, e.z),
      (this.model.rotation.y += Math.PI);
    let k = 1.2,
      G = 0.8,
      T = 1.2,
      v = new THREE.VectorKeyframeTrack(
        ".scale",
        [0, T / 4, T / 2, (3 * T) / 4, T],
        [
          this.model.scale.x,
          (this.model.scale.y * (k + G)) / 2,
          this.model.scale.z,
          this.model.scale.x,
          this.model.scale.y * k,
          this.model.scale.z,
          this.model.scale.x,
          (this.model.scale.y * (k + G)) / 2,
          this.model.scale.z,
          this.model.scale.x,
          this.model.scale.y * G,
          this.model.scale.z,
          this.model.scale.x,
          (this.model.scale.y * (k + G)) / 2,
          this.model.scale.z,
        ]
      ),
      S = new THREE.AnimationClip("idle", T, [v]);
    this.sizeAnimation = {
      mixer: new THREE.AnimationMixer(this.model),
      clock: new THREE.Clock(),
    };
    let L = this.sizeAnimation.mixer.clipAction(S);
    L.setLoop(THREE.LoopRepeat), L.play();
  }
  getLane() {
    return -Math.round(chicken.model.position.z / 2);
  }
  jump(e) {
    if (!this.isMoving && !gameOver) {
      let t = 0,
        a = 0,
        i = -20 + 2 * this.currentColumn,
        r = -(2 * this.currentLane);
      switch (e) {
        case "left":
          if (
            this.currentColumn <= 0 ||
            ("forest" == lanes[this.currentLane].type &&
              lanes[this.currentLane].occupiedPositions.has(
                this.currentColumn - 1
              ))
          )
            return;
          this.currentColumn--,
            (t = -2),
            (this.model.rotation.y = THREE.Math.degToRad(-90));
          break;
        case "up":
          if (
            "forest" == lanes[this.currentLane + 1].type &&
            lanes[this.currentLane + 1].occupiedPositions.has(
              this.currentColumn
            )
          )
            return;
          this.currentLane++,
            (a = -2),
            (this.model.rotation.y = THREE.Math.degToRad(180));
          break;
        case "right":
          if (
            this.currentColumn >= 20 ||
            ("forest" == lanes[this.currentLane].type &&
              lanes[this.currentLane].occupiedPositions.has(
                this.currentColumn + 1
              ))
          )
            return;
          this.currentColumn++,
            (t = 2),
            (this.model.rotation.y = THREE.Math.degToRad(90));
          break;
        case "down":
          if (
            this.currentLane <= 0 ||
            ("forest" == lanes[this.currentLane - 1].type &&
              lanes[this.currentLane - 1].occupiedPositions.has(
                this.currentColumn
              ))
          )
            return;
          this.currentLane--,
            (a = 2),
            (this.model.rotation.y = THREE.Math.degToRad(0));
      }
      if (this.currentLane > this.maxLane) {
        (this.maxLane = this.currentLane),
          (laneSpeeds[0] += 0.015),
          (laneSpeeds[1] += 0.02),
          (laneSpeeds[2] += 0.025);
        let o = new Lane(lanes.length);
        (o.mesh.position.z = -(2 * o.index)),
          lanes.push(o),
          scene.add(o.mesh),
          (document.getElementById("score").innerText =
            "SCORE:" + this.maxLane);
      }
      let n = i + t,
        s = r + a,
        h = (this.model.position.x + n) / 2,
        l = (this.model.position.z + s) / 2,
        m = new THREE.VectorKeyframeTrack(
          ".position",
          [0, 0.2, 0.4],
          [
            this.model.position.x,
            this.model.position.y,
            this.model.position.z,
            h,
            this.model.position.y + 1,
            l,
            n,
            this.model.position.y,
            s,
          ]
        ),
        p = new THREE.AnimationClip("jump", 0.4, [m]);
      this.jumpAnimation = {
        mixer: new THREE.AnimationMixer(this.model),
        clock: new THREE.Clock(),
      };
      let d = this;
      this.jumpAnimation.mixer.addEventListener("finished", () => {
        d.isMoving = !1;
      });
      let $ = this.jumpAnimation.mixer.clipAction(p);
      $.setLoop(THREE.LoopOnce),
        ($.clampWhenFinished = !0),
        (this.isMoving = !0),
        $.play(),
        gameSounds.buck.play();
    }
  }
  squish() {
    let e = new THREE.VectorKeyframeTrack(
        ".scale",
        [0, 0.4],
        [
          this.model.scale.x,
          this.model.scale.y,
          this.model.scale.z,
          this.model.scale.x,
          0.15 * this.model.scale.y,
          this.model.scale.z,
        ]
      ),
      t = new THREE.AnimationClip("squish", 0.4, [e]);
    this.heightAnimation = {
      mixer: new THREE.AnimationMixer(this.model),
      clock: new THREE.Clock(),
    };
    let a = this.heightAnimation.mixer.clipAction(t);
    a.setLoop(THREE.LoopOnce), (a.clampWhenFinished = !0), a.play();
  }
  shred() {
    this.feathers.animate(this.model.position);
  }
  fall() {
    let e = new THREE.VectorKeyframeTrack(
        ".position",
        [0, 0.2],
        [
          this.model.position.x,
          this.model.position.y,
          this.model.position.z,
          this.model.position.x,
          this.model.position.y - 1.5,
          this.model.position.z,
        ]
      ),
      t = new THREE.AnimationClip("fall", 0.2, [e]);
    (this.fallAnimation = {
      mixer: new THREE.AnimationMixer(this.model),
      clock: new THREE.Clock(),
    }),
      this.fallAnimation.mixer.addEventListener("finished", () => {
        (chicken.model.visible = !1),
          this.splashes.animate(this.model.position),
          gameSounds.themeSong.setVolume(0),
          gameSounds.splash.play();
      });
    let a = this.fallAnimation.mixer.clipAction(t);
    a.setLoop(THREE.LoopOnce), (a.clampWhenFinished = !0), a.play();
  }
}
class Road {
  constructor() {
    this.model = new THREE.Group();
    let e = new THREE.BoxBufferGeometry(42, 2, 2),
      t = new THREE.BoxBufferGeometry(42, 2, 2),
      a = new THREE.BoxBufferGeometry(42, 2, 2);
    e.applyMatrix(
      new THREE.Matrix4().makeTranslation(-42, -e.parameters.height / 2, 0)
    ),
      a.applyMatrix(
        new THREE.Matrix4().makeTranslation(42, -a.parameters.height / 2, 0)
      ),
      t.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, -t.parameters.height / 2, 0)
      );
    let i = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([e, a]),
      new THREE.MeshPhongMaterial({ color: 1842724 })
    );
    this.model.add(i);
    let r = new THREE.Mesh(t, new THREE.MeshPhongMaterial({ color: 3619396 }));
    (r.receiveShadow = !0), this.model.add(r);
    let o = [],
      n = 0;
    for (let s = 0; s < 21; s += 2) {
      let h = new THREE.BoxBufferGeometry(2, 0.1, 0.1),
        l = new THREE.BoxBufferGeometry(2, 0.1, 0.1);
      h.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          2 * s,
          0,
          1 - h.parameters.depth / 2
        )
      ),
        l.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            2 * s,
            0,
            -1 + l.parameters.depth / 2
          )
        ),
        o.push(h),
        o.push(l);
    }
    let m = THREE.BufferGeometryUtils.mergeBufferGeometries(o);
    m.applyMatrix(new THREE.Matrix4().makeTranslation(-20 + n, 0, 0));
    let p = new THREE.Mesh(m, new THREE.MeshPhongMaterial({ color: 16777215 }));
    return this.model.add(p), this.model;
  }
}
class Lawn {
  constructor(e = !1) {
    if (e) {
      let t = new THREE.BoxBufferGeometry(126, 2, 2);
      t.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, -t.parameters.height / 2, 0)
      ),
        (this.model = new THREE.Mesh(
          t,
          new THREE.MeshPhongMaterial({ color: 5867520 })
        ));
    } else {
      this.model = new THREE.Group();
      let a = new THREE.BoxBufferGeometry(42, 2, 2),
        i = new THREE.BoxBufferGeometry(42, 2, 2),
        r = new THREE.BoxBufferGeometry(42, 2, 2);
      a.applyMatrix(
        new THREE.Matrix4().makeTranslation(-42, -a.parameters.height / 2, 0)
      ),
        r.applyMatrix(
          new THREE.Matrix4().makeTranslation(42, -r.parameters.height / 2, 0)
        ),
        i.applyMatrix(
          new THREE.Matrix4().makeTranslation(0, -i.parameters.height / 2, 0)
        );
      let o = new THREE.Mesh(
        THREE.BufferGeometryUtils.mergeBufferGeometries([a, r]),
        new THREE.MeshPhongMaterial({ color: 5867520 })
      );
      this.model.add(o);
      let n = new THREE.Mesh(
        i,
        new THREE.MeshPhongMaterial({ color: 7908864 })
      );
      (n.receiveShadow = !0), this.model.add(n);
    }
    return this.model;
  }
}
class River {
  constructor() {
    this.model = new THREE.Group();
    let e = new THREE.BoxBufferGeometry(42, 1.5, 2),
      t = new THREE.BoxBufferGeometry(42, 1.5, 2),
      a = new THREE.BoxBufferGeometry(42, 1.5, 2);
    e.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        -42,
        -e.parameters.height / 2 - 0.5,
        0
      )
    ),
      a.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          42,
          -a.parameters.height / 2 - 0.5,
          0
        )
      ),
      t.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          -t.parameters.height / 2 - 0.5,
          0
        )
      );
    let i = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([e, a]),
      new THREE.MeshPhongMaterial({ color: 1550283 })
    );
    this.model.add(i);
    let r = new THREE.Mesh(t, new THREE.MeshPhongMaterial({ color: 4640737 }));
    this.model.add(r);
    let o = [];
    for (let n = 0; n < 4; ++n) {
      let s = new THREE.BoxBufferGeometry(2 / 3, 2 / 60, 2 / 3);
      s.applyMatrix(new THREE.Matrix4().makeRotationY(6.28 * Math.random())),
        s.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            n % 2 ? -0.25 : 2 / 8,
            0,
            ((n - 1.5) * 2) / 4
          )
        ),
        o.push(s);
    }
    let h = new THREE.Mesh(
        THREE.BufferGeometryUtils.mergeBufferGeometries(o),
        new THREE.MeshBasicMaterial({ color: 15658734 })
      ),
      l = h.clone();
    return (
      h.position.set(-21, -0.5, 0),
      this.model.add(h),
      l.position.set(21, -0.5, 0),
      this.model.add(l),
      this.model
    );
  }
}
class Rail {
  constructor() {
    this.model = new THREE.Group();
    let e = new THREE.BoxBufferGeometry(42, 2, 2),
      t = new THREE.BoxBufferGeometry(42, 2, 2),
      a = new THREE.BoxBufferGeometry(42, 2, 2);
    e.applyMatrix(
      new THREE.Matrix4().makeTranslation(-42, -e.parameters.height / 2, 0)
    ),
      a.applyMatrix(
        new THREE.Matrix4().makeTranslation(42, -a.parameters.height / 2, 0)
      ),
      t.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, -t.parameters.height / 2, 0)
      );
    let i = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([e, a]),
      new THREE.MeshPhongMaterial({ color: 1842724 })
    );
    this.model.add(i);
    let r = new THREE.Mesh(t, new THREE.MeshPhongMaterial({ color: 3619396 }));
    (r.receiveShadow = !0), this.model.add(r);
    let o = new THREE.BoxBufferGeometry(42, 0.1, 0.2),
      n = new THREE.BoxBufferGeometry(42, 0.1, 0.2),
      s = new THREE.BoxBufferGeometry(42, 0.1, 0.2),
      h = new THREE.BoxBufferGeometry(42, 0.1, 0.2),
      l = new THREE.BoxBufferGeometry(42, 0.1, 0.2),
      m = new THREE.BoxBufferGeometry(42, 0.1, 0.2);
    o.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        -42,
        o.parameters.height / 2 + o.parameters.height,
        -o.parameters.depth / 2 + 1 - o.parameters.depth
      )
    ),
      n.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          -42,
          n.parameters.height / 2 + n.parameters.height,
          n.parameters.depth / 2 - 1 + n.parameters.depth
        )
      ),
      s.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          s.parameters.height / 2 + s.parameters.height,
          -s.parameters.depth / 2 + 1 - s.parameters.depth
        )
      ),
      h.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          h.parameters.height / 2 + h.parameters.height,
          h.parameters.depth / 2 - 1 + h.parameters.depth
        )
      ),
      l.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          42,
          l.parameters.height / 2 + l.parameters.height,
          -l.parameters.depth / 2 + 1 - l.parameters.depth
        )
      ),
      m.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          42,
          m.parameters.height / 2 + m.parameters.height,
          m.parameters.depth / 2 - 1 + m.parameters.depth
        )
      );
    let p = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([o, n, l, m]),
      new THREE.MeshPhongMaterial({ color: 6251373 })
    );
    this.model.add(p);
    let d = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([s, h]),
      new THREE.MeshPhongMaterial({ color: 8883608 })
    );
    (d.castShadow = !0), (d.receiveShadow = !0), this.model.add(d);
    let $ = 0,
      c = [],
      x = [];
    for (let f = 0; f < 21; ++f) {
      let w = new THREE.BoxBufferGeometry(0.2, 0.1, 2),
        u = new THREE.BoxBufferGeometry(0.2, 0.1, 2),
        y = new THREE.BoxBufferGeometry(0.2, 0.1, 2);
      w.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          2 * f - 42 - 2 * Math.floor(10.5) + $,
          w.parameters.height / 2,
          0
        )
      ),
        u.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            2 * f - 2 * Math.floor(10.5) + $,
            u.parameters.height / 2,
            0
          )
        ),
        y.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            2 * f + 42 - 2 * Math.floor(10.5) + $,
            y.parameters.height / 2,
            0
          )
        ),
        c.push(w),
        x.push(u),
        c.push(y);
    }
    let M = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries(c),
      new THREE.MeshPhongMaterial({ color: 8076330 })
    );
    this.model.add(M);
    let g = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries(x),
      new THREE.MeshPhongMaterial({ color: 10313292 })
    );
    return this.model.add(g), this.model;
  }
}
class Car {
  constructor(e, t = { x: 0.95, y: 0.9, z: 0.8 }) {
    this.model = new THREE.Group();
    let a = ["blue", "green", "yellow", "orange", "purple"],
      i = [
        { light: 310522, dark: 100807 },
        { light: 12186128, dark: 9492224 },
        { light: 16759552, dark: 13404160 },
        { light: 16412176, dark: 15554560 },
        { light: 10705407, dark: 8928236 },
      ],
      r = i[a.indexOf(e)].light,
      o = i[a.indexOf(e)].dark,
      n = new THREE.Mesh(
        new THREE.BoxBufferGeometry(4, 0.75, 1.8),
        new THREE.MeshLambertMaterial({ color: r })
      );
    n.position.set(
      n.geometry.parameters.width / 4,
      (3 * n.geometry.parameters.height) / 4,
      0
    ),
      (n.castShadow = !0),
      (n.receiveShadow = !0),
      this.model.add(n);
    let s = new THREE.BoxBufferGeometry(
        (2 * n.geometry.parameters.height) / 3,
        (2 * n.geometry.parameters.height) / 3,
        1.85
      ),
      h = new THREE.BoxBufferGeometry(
        (2 * n.geometry.parameters.height) / 3,
        (2 * n.geometry.parameters.height) / 3,
        1.85
      ),
      l = new THREE.BoxBufferGeometry(1, 0.65, 1.45),
      m = new THREE.BoxBufferGeometry(0.4, 0.65, 1.45),
      p = new THREE.BoxBufferGeometry(2.05, 0.65, 1.2);
    s.applyMatrix(
      new THREE.Matrix4().makeTranslation(-0.2, s.parameters.height / 2, 0)
    ),
      h.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          n.geometry.parameters.width / 2 + 0.2,
          h.parameters.height / 2,
          0
        )
      ),
      l.applyMatrix(new THREE.Matrix4().makeTranslation(1.2, 1.2125, 0)),
      m.applyMatrix(new THREE.Matrix4().makeTranslation(2.1, 1.2125, 0)),
      p.applyMatrix(new THREE.Matrix4().makeTranslation(1.5, 1.2125, 0));
    let d = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([s, h, l, m, p]),
      new THREE.MeshLambertMaterial({ color: 0 })
    );
    (d.castShadow = !0), (d.receiveShadow = !0), this.model.add(d);
    let $ = new THREE.BoxBufferGeometry(2, 0.75, 1.4),
      c = new THREE.BoxBufferGeometry(
        0.5 * s.parameters.width,
        0.5 * s.parameters.height,
        s.parameters.depth + 0.01
      ),
      x = new THREE.BoxBufferGeometry(
        0.5 * h.parameters.width,
        0.5 * h.parameters.height,
        h.parameters.depth + 0.01
      );
    $.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        (3 * $.parameters.width) / 4,
        n.position.y +
          n.geometry.parameters.height / 2 +
          $.parameters.height / 2,
        0
      )
    ),
      c.applyMatrix(
        new THREE.Matrix4().makeTranslation(-0.2, s.parameters.height / 2, 0)
      ),
      x.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          n.geometry.parameters.width / 2 + 0.2,
          h.parameters.height / 2,
          0
        )
      );
    let f = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([$, c, x]),
      new THREE.MeshLambertMaterial({ color: 16777215 })
    );
    (f.castShadow = !0), (f.receiveShadow = !0), this.model.add(f);
    let w = new THREE.BoxBufferGeometry(4.005, 0.8, 1),
      u = new THREE.BoxBufferGeometry(0.5, 0.25, 2.2),
      y = new THREE.BoxBufferGeometry(4.01, 0.25, 1.81),
      M = new THREE.BoxBufferGeometry(0.4, 0.2, 1);
    w.applyMatrix(
      new THREE.Matrix4().makeTranslation(n.position.x, n.position.y + 0.025, 0)
    ),
      u.applyMatrix(
        new THREE.Matrix4().makeTranslation(1, n.position.y + 0.15, 0)
      ),
      y.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          n.position.x,
          n.position.y,
          n.position.z
        )
      ),
      M.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          (3 * $.parameters.width) / 4 - 0.2,
          "yellow" == e ? 1.75 : 1,
          0
        )
      );
    let g = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([w, u, y, M]),
      new THREE.MeshLambertMaterial({ color: o })
    );
    (g.castShadow = !0), (g.receiveShadow = !0), this.model.add(g);
    let _ = new THREE.Mesh(
      new THREE.BoxBufferGeometry(4.01, 0.25, 1.81),
      new THREE.MeshLambertMaterial({ color: 6576529 })
    );
    return (
      _.position.set(
        n.position.x,
        n.position.y - _.geometry.parameters.height,
        n.position.z
      ),
      (_.castShadow = !0),
      (_.receiveShadow = !0),
      this.model.add(_),
      this.model.scale.set(t.x, t.y, t.z),
      this.model
    );
  }
}
class Truck {
  constructor(e, t = { x: 0.95, y: 1, z: 1 }) {
    this.model = new THREE.Group();
    let a = ["brown", "teal", "burgundy", "cyan", "magenta", "beige"],
      i = [
        { light: 7353600, dark: 5576704 },
        { light: 32896, dark: 20560 },
        { light: 9241119, dark: 6620434 },
        { light: 39321, dark: 26214 },
        { light: 13382485, dark: 11149875 },
        { light: 12225119, dark: 9988157 },
      ],
      r = i[a.indexOf(e)].light,
      o = i[a.indexOf(e)].dark,
      n = new THREE.BoxBufferGeometry(1.6, 1.5, 1.4),
      s = new THREE.BoxBufferGeometry(0.2, 0.3, 1.8);
    n.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        -0.2,
        0.1875 + n.parameters.height / 2,
        0
      )
    ),
      s.applyMatrix(new THREE.Matrix4().makeTranslation(-0.6, 0.8, 0));
    let h = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([n, s]),
      new THREE.MeshLambertMaterial({ color: r })
    );
    (h.castShadow = !0), (h.receiveShadow = !0), this.model.add(h);
    let l = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1.61, 0.5, 1.41),
      new THREE.MeshLambertMaterial({ color: o })
    );
    l.position.set(-0.21, l.geometry.parameters.height / 2 + 0.5, 0),
      (l.castShadow = !0),
      (l.receiveShadow = !0),
      this.model.add(l);
    let m = new THREE.BoxBufferGeometry(0.85, 0.5, 1.45),
      p = new THREE.BoxBufferGeometry(0.5, 0.5, 1.45),
      d = new THREE.BoxBufferGeometry(0.5, 0.5, 1.45),
      $ = new THREE.BoxBufferGeometry(0.5, 0.5, 1.45);
    m.applyMatrix(
      new THREE.Matrix4().makeTranslation(-0.6, m.parameters.height / 2 + 1, 0)
    ),
      p.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, p.parameters.height / 2, 0)
      ),
      d.applyMatrix(
        new THREE.Matrix4().makeTranslation(1.8, d.parameters.height / 2, 0)
      ),
      $.applyMatrix(
        new THREE.Matrix4().makeTranslation(4.2, $.parameters.height / 2, 0)
      );
    let c = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([m, p, d, $]),
      new THREE.MeshLambertMaterial({ color: 0 })
    );
    (c.castShadow = !0), (c.receiveShadow = !0), this.model.add(c);
    let x = new THREE.BoxBufferGeometry(0.6, 0.15, 1),
      f = new THREE.BoxBufferGeometry(0.3, 0.15, 1),
      w = new THREE.BoxBufferGeometry(4, 2, 1.8);
    x.applyMatrix(new THREE.Matrix4().makeTranslation(0.3, 1.75, 0)),
      f.applyMatrix(new THREE.Matrix4().makeTranslation(0.45, 1.9, 0)),
      w.applyMatrix(
        new THREE.Matrix4().makeTranslation(3, w.parameters.height / 2 + 0.5, 0)
      );
    let u = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([x, f, w]),
      new THREE.MeshLambertMaterial({ color: 14072574 })
    );
    (u.castShadow = !0), (u.receiveShadow = !0), this.model.add(u);
    let y = new THREE.BoxBufferGeometry(0.4, 0.2, 1.2),
      M = new THREE.BoxBufferGeometry(4, 0.3125, 1.4),
      g = new THREE.BoxBufferGeometry(1.61, 0.3125, 1.41);
    y.applyMatrix(new THREE.Matrix4().makeTranslation(0.8, 0.4, 0)),
      M.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          3,
          0.1875 + M.parameters.height / 2,
          0
        )
      ),
      g.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          -0.21,
          0.1875 + g.parameters.height / 2,
          0
        )
      );
    let _ = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([y, M, g]),
      new THREE.MeshLambertMaterial({ color: 6576529 })
    );
    (_.castShadow = !0), (_.receiveShadow = !0), this.model.add(_);
    let B = new THREE.BoxBufferGeometry(0.25, 0.25, 1.46),
      k = new THREE.BoxBufferGeometry(0.25, 0.25, 1.46),
      G = new THREE.BoxBufferGeometry(0.25, 0.25, 1.46);
    B.applyMatrix(
      new THREE.Matrix4().makeTranslation(0, B.parameters.height, 0)
    ),
      k.applyMatrix(
        new THREE.Matrix4().makeTranslation(1.8, k.parameters.height, 0)
      ),
      G.applyMatrix(
        new THREE.Matrix4().makeTranslation(4.2, G.parameters.height, 0)
      );
    let T = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([B, k, G]),
      new THREE.MeshLambertMaterial({ color: 16777215 })
    );
    return (
      (T.castShadow = !0),
      (T.receiveShadow = !0),
      this.model.add(T),
      this.model.scale.set(t.x, t.y, t.z),
      this.model
    );
  }
}
class ChewChewTrain {
  constructor(e, t = { x: 1, y: 1, z: 0.95 }) {
    this.length = e;
    let a = [
        { geometries: [], color: 16776960 },
        { geometries: [], color: 1271254 },
        { geometries: [], color: 1582520 },
        { geometries: [], color: 918 },
        { geometries: [], color: 16777215 },
        { geometries: [], color: 0 },
      ],
      i = 3,
      r = 8,
      o = 0.2;
    this.model = new THREE.Group();
    for (let n = 0; n < e; ++n) {
      let s = new THREE.BoxBufferGeometry(7.2, 2.5, 1.8);
      s.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          r * n + i,
          s.parameters.height / 2 + o,
          0
        )
      ),
        a[2].geometries.push(s);
      let h = new THREE.BoxBufferGeometry(4.8, 2.1, 1.85);
      h.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          r * n + i,
          h.parameters.height / 2 + o + 0.2,
          0
        )
      ),
        a[1].geometries.push(h);
      let l = new THREE.BoxBufferGeometry(2.4, 2.1, 1.9);
      l.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          r * n + i,
          l.parameters.height / 2 + o + 0.2,
          0
        )
      ),
        a[4].geometries.push(l);
      let m = new THREE.BoxBufferGeometry(6, o, 1.2);
      if (
        (m.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            r * n + i,
            m.parameters.height / 2 + o + s.parameters.height,
            0
          )
        ),
        a[3].geometries.push(m),
        0 == n || n == e - 1)
      ) {
        let p = new THREE.BoxBufferGeometry(0.6, s.parameters.height + o, 2);
        if (
          (p.applyMatrix(
            new THREE.Matrix4().makeTranslation(
              r * n + i + s.parameters.width / 2,
              s.parameters.height / 2 + o,
              0
            )
          ),
          0 == n)
        ) {
          p.applyMatrix(
            new THREE.Matrix4().makeTranslation(-s.parameters.width, 0, 0)
          );
          let d = new THREE.BoxBufferGeometry(0.8, 0.8, 1.6);
          d.applyMatrix(
            new THREE.Matrix4().makeTranslation(
              r * n + i - s.parameters.width / 2,
              d.parameters.height / 2 + 1.5,
              0
            )
          ),
            a[5].geometries.push(d);
          let $ = new THREE.BoxBufferGeometry(0.8, 0.2, 0.4);
          $.applyMatrix(
            new THREE.Matrix4().makeTranslation(
              r * n + i - s.parameters.width / 2,
              $.parameters.height / 2 + 0.8,
              -d.parameters.depth / 2 + $.parameters.depth / 2
            )
          ),
            a[4].geometries.push($);
          let c = new THREE.BoxBufferGeometry(0.8, 0.2, 0.4);
          c.applyMatrix(
            new THREE.Matrix4().makeTranslation(
              r * n + i - s.parameters.width / 2,
              c.parameters.height / 2 + 0.8,
              d.parameters.depth / 2 - c.parameters.depth / 2
            )
          ),
            a[4].geometries.push(c);
        }
        a[0].geometries.push(p);
      }
      if (n > 0) {
        let x = new THREE.BoxBufferGeometry(
          0.8,
          s.parameters.height - 0.4,
          s.parameters.depth - 0.4
        );
        x.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            r * n + i - 4,
            x.parameters.height / 2 +
              o +
              (s.parameters.height - x.parameters.height) / 2,
            0
          )
        ),
          a[0].geometries.push(x);
      }
      for (let f = -2.5; f <= 2.5; ++f) {
        let w = new THREE.BoxBufferGeometry(0.5, 1, 1.95);
        w.applyMatrix(
          new THREE.Matrix4().makeTranslation(
            r * n + i + 1.2 * f,
            w.parameters.height / 2 + 1.2,
            0
          )
        ),
          a[5].geometries.push(w);
      }
    }
    a.forEach((e) => {
      if (e.geometries.length) {
        let t = new THREE.Mesh(
          THREE.BufferGeometryUtils.mergeBufferGeometries(e.geometries),
          new THREE.MeshLambertMaterial({ color: e.color })
        );
        (t.castShadow = !0), (t.receiveShadow = !0), this.model.add(t);
      }
    }),
      this.model.scale.set(t.x, t.y, t.z);
  }
}
class Tree {
  constructor(e, t = { x: 0.95, y: 1, z: 0.95 }) {
    let a = 1.5,
      i = 0.45,
      r = 0.15;
    this.model = new THREE.Group();
    let o = new THREE.Mesh(
      new THREE.BoxBufferGeometry(a / 2, i, a / 2),
      new THREE.MeshLambertMaterial({ color: 9528651 })
    );
    (o.position.y += o.geometry.parameters.height / 2), this.model.add(o);
    let n = new THREE.BoxBufferGeometry(a / 6, i, a / 2 + 0.05),
      s = new THREE.BoxBufferGeometry(a / 2 + 0.05, i, a / 6);
    n.applyMatrix(
      new THREE.Matrix4().makeTranslation(0, n.parameters.height / 2, 0)
    ),
      s.applyMatrix(
        new THREE.Matrix4().makeTranslation(0, s.parameters.height / 2, 0)
      );
    let h = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries([n, s]),
      new THREE.MeshLambertMaterial({ color: 13943983 })
    );
    this.model.add(h);
    let l = [],
      m = [],
      p = new THREE.BoxBufferGeometry(a, r, a);
    p.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        0,
        p.parameters.height / 2 + o.geometry.parameters.height,
        0
      )
    ),
      l.push(p);
    let d = p.parameters.height + o.geometry.parameters.height,
      $ = d;
    for (let c = 0; c < e; ++c) {
      let x = new THREE.BoxBufferGeometry(a, i, a);
      x.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          x.parameters.height / 2 + d + c * $,
          0
        )
      ),
        m.push(x);
      let f = new THREE.BoxBufferGeometry(a, r, a);
      f.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          0,
          f.parameters.height / 2 + d + x.parameters.height + c * $,
          0
        )
      ),
        l.push(f);
    }
    let w = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries(l),
      new THREE.MeshLambertMaterial({ color: 631872 })
    );
    (w.castShadow = !0), (w.receiveShadow = !0), this.model.add(w);
    let u = new THREE.Mesh(
      THREE.BufferGeometryUtils.mergeBufferGeometries(m),
      new THREE.MeshLambertMaterial({ color: 11263744 })
    );
    return (
      (u.castShadow = !0),
      (u.receiveShadow = !0),
      this.model.add(u),
      this.model.scale.set(t.x, t.y, t.z),
      this.model
    );
  }
}
class Log {
  constructor(e = { x: 0.95, y: 1, z: 0.8 }) {
    this.model = new THREE.Group();
    let t = [],
      a = [],
      i = [],
      r = 1,
      o = new THREE.BoxBufferGeometry(3.6, 0.25, 1.2),
      n = new THREE.BoxBufferGeometry(3.6, 0.5, 0.2),
      s = new THREE.BoxBufferGeometry(3.6, 0.5, 0.2);
    o.applyMatrix(
      new THREE.Matrix4().makeTranslation(r, -o.parameters.height / 2, 0)
    ),
      n.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          r,
          -n.parameters.height / 2,
          n.parameters.depth / 2 - o.parameters.depth / 2
        )
      ),
      s.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          r,
          -s.parameters.height / 2,
          -s.parameters.depth / 2 + o.parameters.depth / 2
        )
      ),
      a.push(o),
      a.push(n),
      a.push(s),
      this.model.add(
        new THREE.Mesh(
          THREE.BufferGeometryUtils.mergeBufferGeometries(a),
          new THREE.MeshLambertMaterial({ color: 9261912 })
        )
      );
    let h = new THREE.BoxBufferGeometry(0.2, 0.25, 1.2),
      l = new THREE.BoxBufferGeometry(0.2, 0.5, 0.2),
      m = new THREE.BoxBufferGeometry(0.2, 0.5, 0.2),
      p = new THREE.BoxBufferGeometry(0.2, 0.25, 1.2),
      d = new THREE.BoxBufferGeometry(0.2, 0.5, 0.2),
      $ = new THREE.BoxBufferGeometry(0.2, 0.5, 0.2);
    h.applyMatrix(
      new THREE.Matrix4().makeTranslation(
        -h.parameters.width / 2 - o.parameters.width / 2 + r,
        -h.parameters.height / 2,
        0
      )
    ),
      l.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          -l.parameters.width / 2 - o.parameters.width / 2 + r,
          -l.parameters.height / 2,
          l.parameters.depth / 2 - h.parameters.depth / 2
        )
      ),
      m.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          -m.parameters.width / 2 - o.parameters.width / 2 + r,
          -m.parameters.height / 2,
          -m.parameters.depth / 2 + h.parameters.depth / 2
        )
      ),
      p.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          p.parameters.width / 2 + o.parameters.width / 2 + r,
          -p.parameters.height / 2,
          0
        )
      ),
      d.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          d.parameters.width / 2 + o.parameters.width / 2 + r,
          -d.parameters.height / 2,
          d.parameters.depth / 2 - p.parameters.depth / 2
        )
      ),
      $.applyMatrix(
        new THREE.Matrix4().makeTranslation(
          $.parameters.width / 2 + o.parameters.width / 2 + r,
          -$.parameters.height / 2,
          -$.parameters.depth / 2 + p.parameters.depth / 2
        )
      ),
      t.push(h),
      t.push(l),
      t.push(m),
      t.push(p),
      t.push(d),
      t.push($),
      this.model.add(
        new THREE.Mesh(
          THREE.BufferGeometryUtils.mergeBufferGeometries(t),
          new THREE.MeshLambertMaterial({ color: 15710654 })
        )
      );
    let c = [
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    ];
    for (let x = 0; x < c.length; ++x) {
      let f = 0.3 * x - 0.45;
      for (let w = 0; w < c[x].length; ++w) {
        let u = 0.4 * w - 1.8;
        if (c[x][w]) {
          let y = new THREE.BoxBufferGeometry(0.4, 0.02, 0.3);
          y.applyMatrix(new THREE.Matrix4().makeTranslation(u + r, 0, f)),
            i.push(y);
        }
      }
    }
    return (
      this.model.add(
        new THREE.Mesh(
          THREE.BufferGeometryUtils.mergeBufferGeometries(i),
          new THREE.MeshLambertMaterial({ color: 4788261 })
        )
      ),
      this.model.scale.set(e.x, e.y, e.z),
      this.model
    );
  }
}
class Feathers {
  constructor(e = 2, t = 6.3) {
    (this.coordinates = [
      { x: 0, y: t, z: 0 },
      { x: e / 2, y: (3 * t) / 4, z: e / 2 },
      { x: e / 2, y: (3 * t) / 4, z: -e / 2 },
      { x: -e / 2, y: (3 * t) / 4, z: e / 2 },
      { x: -e / 2, y: (3 * t) / 4, z: -e / 2 },
      { x: e, y: t / 2, z: 0 },
      { x: 0, y: t / 2, z: e },
      { x: -e, y: t / 2, z: 0 },
      { x: 0, y: t / 2, z: -e },
    ]),
      (this.feathers = []),
      (this.animations = []),
      this.coordinates.forEach(() => {
        let e = 0.25 + 0.25 * Math.random(),
          t = new THREE.PlaneBufferGeometry(e, e),
          a = new THREE.MeshLambertMaterial({
            color: 16777215,
            side: THREE.DoubleSide,
          }),
          i = new THREE.Mesh(t, a);
        i.rotation.set(
          2 * Math.random() * Math.PI,
          2 * Math.random() * Math.PI,
          2 * Math.random() * Math.PI
        ),
          (i.visible = !1),
          scene.add(i),
          this.feathers.push(i),
          this.animations.push(void 0);
      });
  }
  animate(e, t = 5) {
    this.feathers.forEach((a, i) => {
      (a.visible = !0),
        a.position.set(e.x, e.y, e.z),
        (this.firstInterval = t / 20);
      let r = new THREE.Vector3(
          e.x + this.coordinates[i].x,
          e.y + this.coordinates[i].y,
          e.z + this.coordinates[i].z
        ),
        o = new THREE.VectorKeyframeTrack(
          ".position",
          [0, this.firstInterval, t],
          [a.position.x, a.position.y, a.position.z, r.x, r.y, r.z, r.x, 0, r.z]
        ),
        n = new THREE.AnimationClip("feathers", t, [o]);
      this.animations[i] = {
        mixer: new THREE.AnimationMixer(a),
        clock: new THREE.Clock(),
        rotationSpeed: THREE.Math.degToRad(360 * Math.random()),
        firstInterval: this.firstInterval,
      };
      let s = this.animations[i].mixer.clipAction(n);
      s.setLoop(THREE.LoopOnce),
        this.animations[i].mixer.addEventListener("finished", () => {
          a.visible = !1;
        }),
        s.play();
    });
  }
}
class Splash {
  constructor(e = 2, t = 5) {
    let a = 7 / 8,
      i = 6 / 8;
    (this.coordinates = [
      { x: 0, y: t, z: 0 },
      { x: e / 2, y: a * t, z: e / 2 },
      { x: e / 2, y: a * t, z: -e / 2 },
      { x: -e / 2, y: a * t, z: e / 2 },
      { x: -e / 2, y: a * t, z: -e / 2 },
      { x: e, y: i * t, z: 0 },
      { x: 0, y: i * t, z: e },
      { x: -e, y: i * t, z: 0 },
      { x: 0, y: i * t, z: -e },
    ]),
      (this.splashes = []),
      (this.animations = []),
      this.coordinates.forEach(() => {
        let e = 0.25 + 0.25 * Math.random(),
          t = new THREE.BoxBufferGeometry(e, e, e),
          a = new THREE.MeshLambertMaterial({ color: 4640737 }),
          i = new THREE.Mesh(t, a);
        (i.visible = !1),
          scene.add(i),
          this.splashes.push(i),
          this.animations.push(void 0);
      });
  }
  animate(e, t = 1) {
    this.splashes.forEach((a, i) => {
      (a.visible = !0),
        a.position.set(e.x, e.y, e.z),
        (this.firstInterval = t / 4);
      let r = new THREE.Vector3(
          e.x + this.coordinates[i].x,
          e.y + this.coordinates[i].y,
          e.z + this.coordinates[i].z,
          THREE.InterpolateSmooth
        ),
        o = new THREE.VectorKeyframeTrack(
          ".position",
          [0, this.firstInterval, t],
          [a.position.x, a.position.y, a.position.z, r.x, r.y, r.z, r.x, 0, r.z]
        ),
        n = new THREE.AnimationClip("water splash", t, [o]);
      this.animations[i] = {
        mixer: new THREE.AnimationMixer(a),
        clock: new THREE.Clock(),
      };
      let s = this.animations[i].mixer.clipAction(n);
      s.setLoop(THREE.LoopOnce),
        this.animations[i].mixer.addEventListener("finished", () => {
          a.visible = !1;
        }),
        s.play();
    });
  }
}
class Lane {
  constructor(e) {
    (this.index = e),
      (this.type =
        e <= 0
          ? "field"
          : laneTypes[Math.floor(Math.random() * laneTypes.length)]);
    let t = 20;
    switch (this.type) {
      case "field":
        this.mesh = new Lawn(e < 0);
        break;
      case "forest":
        (this.mesh = new Lawn()),
          (this.occupiedPositions = new Set()),
          (this.trees = [1, 2, 3, 4, 5, 6].map(() => {
            let e = new Tree(1 + Math.floor(5 * Math.random())),
              a;
            do a = Math.floor(21 * Math.random());
            while (this.occupiedPositions.has(a));
            return (
              this.occupiedPositions.add(a),
              (e.position.x = 2 * a - t),
              this.mesh.add(e),
              e
            );
          }));
        break;
      case "car": {
        (this.mesh = new Road()), (this.direction = Math.random() >= 0.5);
        let a = new Set();
        (this.vehicles = [1, 2, 3].map(() => {
          let e = ["blue", "purple", "yellow", "green", "orange"],
            i = new Car(e[Math.floor(Math.random() * e.length)]),
            r;
          do r = Math.floor(21 * Math.random());
          while (a.has(r) || a.has(this.direction ? r - 1 : r + 1));
          return (
            a.add(r),
            a.add(this.direction ? r - 1 : r + 1),
            (i.position.x = 2 * r - t),
            this.direction && (i.rotation.y += Math.PI),
            this.mesh.add(i),
            i
          );
        })),
          (this.speed =
            laneSpeeds[Math.floor(Math.random() * laneSpeeds.length)]);
        break;
      }
      case "truck": {
        (this.mesh = new Road()), (this.direction = Math.random() >= 0.5);
        let i = new Set();
        (this.vehicles = [1, 2].map(() => {
          let e = ["cyan", "magenta", "beige"],
            a = new Truck(e[Math.floor(Math.random() * e.length)]),
            r;
          do r = Math.floor(21 * Math.random());
          while (
            i.has(r) ||
            i.has(this.direction ? r - 1 : r + 1) ||
            i.has(this.direction ? r - 2 : r + 2)
          );
          return (
            i.add(r),
            i.add(this.direction ? r - 1 : r + 1),
            i.add(this.direction ? r - 2 : r + 2),
            (a.position.x = 2 * r - t),
            this.direction && (a.rotation.y += Math.PI),
            this.mesh.add(a),
            a
          );
        })),
          (this.speed =
            laneSpeeds[Math.floor(Math.random() * laneSpeeds.length)]);
        break;
      }
      case "river": {
        (this.mesh = new River()),
          (this.direction = Math.random() >= 0.5),
          lanes &&
            "river" == lanes[this.index - 1].type &&
            (this.direction = !lanes[this.index - 1].direction);
        let r = new Set();
        (this.logs = [1, 2, 3].map(() => {
          let e = new Log(),
            a;
          do a = Math.floor(21 * Math.random());
          while (r.has(a) || r.has(this.direction ? a - 1 : a + 1));
          return (
            r.add(a),
            r.add(this.direction ? a - 1 : a + 1),
            (e.position.x = 2 * a - t),
            this.direction && (e.rotation.y += Math.PI),
            this.mesh.add(e),
            e
          );
        })),
          (this.speed =
            logSpeeds[Math.floor(Math.random() * logSpeeds.length)]);
        break;
      }
      case "rail": {
        (this.mesh = new Rail()),
          (this.direction = Math.random() >= 0.5),
          (this.speed = 20 + 10 * Math.random());
        let o = 8 + 7 * Math.random(),
          n = this.speed * o,
          s = (Math.random() * n) / 2,
          h = new ChewChewTrain(2 + Math.floor(7 * Math.random()));
        (this.train = h.model),
          (this.trainLength = h.length),
          this.direction
            ? ((this.train.rotation.y += Math.PI),
              (this.train.position.x = -t - 2 - s),
              (this.initialPosition = this.train.position.x),
              (this.finalPosition = this.initialPosition + n))
            : ((this.train.position.x = t + 2 + s),
              (this.initialPosition = this.train.position.x),
              (this.finalPosition = this.initialPosition - n)),
          this.mesh.add(this.train);
      }
    }
  }
}
class Sound {
  constructor(e) {
    let t = new THREE.LoadingManager(() => {
        (document.getElementById("loading").style.opacity = "0"),
          (document.getElementById("play").style.opacity = "1"),
          (document.getElementById("pressPlay").disabled = !1);
      }),
      a = new THREE.AudioListener();
    e.add(a);
    let i = new THREE.AudioLoader(t);
    (this.buck = new THREE.Audio(a)),
      i.load("./audio/buck.wav", (e) => {
        this.buck.setBuffer(e), this.buck.setLoop(!1), this.buck.setVolume(0.5);
      }),
      (this.themeSong = new THREE.Audio(a)),
      i.load("./audio/katamari.mp3", (e) => {
        this.themeSong.setBuffer(e),
          this.themeSong.setLoop(!0),
          this.themeSong.setVolume(0.7),
          this.themeSong.play();
      }),
      (this.death = new THREE.Audio(a)),
      i.load("./audio/death.wav", (e) => {
        this.death.setBuffer(e),
          this.death.setLoop(!1),
          this.death.setVolume(0.5);
      }),
      (this.death2 = new THREE.Audio(a)),
      i.load("./audio/death2.wav", (e) => {
        this.death2.setBuffer(e),
          this.death2.setLoop(!1),
          this.death2.setVolume(0.5);
      }),
      (this.hit = new THREE.Audio(a)),
      i.load("./audio/hit.mp3", (e) => {
        this.hit.setBuffer(e),
          this.hit.setLoop(!1),
          this.hit.setVolume(0.5),
          (this.hit.onEnded = () => {
            (this.hit.isPlaying = !1), this.death.play();
          });
      }),
      (this.shred = new THREE.Audio(a)),
      i.load("./audio/shred.mp3", (e) => {
        this.shred.setBuffer(e),
          this.shred.setLoop(!1),
          this.shred.setVolume(0.25);
      }),
      (this.splash = new THREE.Audio(a)),
      i.load("./audio/splash.mp3", (e) => {
        this.splash.setBuffer(e),
          this.splash.setLoop(!1),
          this.splash.setVolume(0.5);
      });
  }
}
const update = () => {
    stats.begin(),
      (deltaTime = clock.getDelta()),
      chicken &&
        (chicken.jumpAnimation &&
          chicken.jumpAnimation.mixer &&
          chicken.jumpAnimation.mixer.update(
            chicken.jumpAnimation.clock.getDelta()
          ),
        chicken.sizeAnimation &&
          chicken.sizeAnimation.mixer &&
          !gameOver &&
          chicken.sizeAnimation.mixer.update(
            chicken.sizeAnimation.clock.getDelta()
          ),
        chicken.heightAnimation &&
          chicken.heightAnimation.mixer &&
          chicken.heightAnimation.mixer.update(
            chicken.heightAnimation.clock.getDelta()
          ),
        chicken.fallAnimation &&
          chicken.fallAnimation.mixer &&
          chicken.fallAnimation.mixer.update(
            chicken.fallAnimation.clock.getDelta()
          ),
        chicken.feathers.animations.forEach((e, t) => {
          e &&
            e.mixer &&
            (e.mixer.update(e.clock.getDelta()),
            e.mixer.time > e.firstInterval &&
              (chicken.feathers.feathers[t].rotation.x +=
                e.rotationSpeed * deltaTime));
        }),
        chicken.splashes.animations.forEach((e) => {
          e && e.mixer && e.mixer.update(e.clock.getDelta());
        }),
        (camera.position.x = chicken.model.position.x + cameraOffsetX),
        (camera.position.z = chicken.model.position.z + cameraOffsetZ)),
      lanes &&
        lanes
          .filter(
            (e) =>
              e.index >= chicken.getLane() - 9 &&
              e.index <= chicken.getLane() + 9
          )
          .forEach((e) => {
            if ("car" == e.type) {
              let t = -24,
                a = 24;
              e.vehicles.forEach((t) => {
                e.direction
                  ? (t.position.x =
                      t.position.x > a
                        ? -24
                        : t.position.x + e.speed * deltaTime)
                  : (t.position.x =
                      t.position.x < -24
                        ? a
                        : t.position.x - e.speed * deltaTime);
                let i = t.position.x + (e.direction ? -3 : -1),
                  r = t.position.x + (e.direction ? 1 : 3),
                  o = chicken.model.position.x - 0.2,
                  n = chicken.model.position.x + 0.2;
                n > i &&
                  o < r &&
                  chicken.getLane() == e.index &&
                  !gameOver &&
                  (chicken.squish(),
                  gameSounds.themeSong.setVolume(0),
                  gameSounds.hit.play(),
                  (gameOver = !0),
                  setTimeout(() => {
                    document.getElementById("restart").style.visibility =
                      "visible";
                  }, 2e3));
              });
            } else if ("truck" == e.type) {
              let i = -26,
                r = 26;
              e.vehicles.forEach((t) => {
                e.direction
                  ? (t.position.x =
                      t.position.x > r
                        ? -26
                        : t.position.x + e.speed * deltaTime)
                  : (t.position.x =
                      t.position.x < -26
                        ? r
                        : t.position.x - e.speed * deltaTime);
                let a = t.position.x + (e.direction ? -5 : -1),
                  i = t.position.x + (e.direction ? 1 : 5),
                  o = chicken.model.position.x - 0.2,
                  n = chicken.model.position.x + 0.2;
                n > a &&
                  o < i &&
                  chicken.getLane() == e.index &&
                  !gameOver &&
                  (chicken.squish(),
                  gameSounds.themeSong.setVolume(0),
                  gameSounds.hit.play(),
                  (gameOver = !0),
                  setTimeout(() => {
                    document.getElementById("restart").style.visibility =
                      "visible";
                  }, 3e3));
              });
            } else if ("river" == e.type) {
              let o = -24,
                n = 24,
                s = 0;
              e.logs.forEach((t) => {
                e.direction
                  ? (t.position.x =
                      t.position.x > n
                        ? -24
                        : t.position.x + e.speed * deltaTime)
                  : (t.position.x =
                      t.position.x < -24
                        ? n
                        : t.position.x - e.speed * deltaTime);
                let a = t.position.x + (e.direction ? -3 : -1),
                  i = t.position.x + (e.direction ? 1 : 3),
                  r = chicken.model.position.x - 0.2,
                  o = chicken.model.position.x + 0.2,
                  h = -21,
                  l = 21;
                o > a &&
                  r < i &&
                  chicken.getLane() == e.index &&
                  !1 == chicken.isMoving &&
                  !gameOver &&
                  (s++,
                  (chicken.currentColumn = Math.floor(
                    (chicken.model.position.x + 21) / 2
                  )),
                  chicken.currentColumn >= 21 && (chicken.currentColumn = 20),
                  chicken.currentColumn < 0 && (chicken.currentColumn = 0),
                  o < 21 &&
                    r > -21 &&
                    (chicken.model.position.x += e.direction
                      ? e.speed * deltaTime
                      : -e.speed * deltaTime));
              }),
                0 != s ||
                  chicken.getLane() != e.index ||
                  !1 != chicken.isMoving ||
                  gameOver ||
                  (chicken.fall(),
                  (gameOver = !0),
                  setTimeout(() => {
                    document.getElementById("restart").style.visibility =
                      "visible";
                  }, 2e3));
            } else if ("rail" == e.type) {
              e.direction
                ? (e.train.position.x =
                    e.train.position.x > e.finalPosition
                      ? e.initialPosition
                      : e.train.position.x + e.speed * deltaTime)
                : (e.train.position.x =
                    e.train.position.x < e.finalPosition
                      ? e.initialPosition
                      : e.train.position.x - e.speed * deltaTime);
              let h = 8 * e.trainLength,
                l = e.train.position.x + (e.direction ? -(h - 1) : -1),
                m = e.train.position.x + (e.direction ? 1 : h - 1),
                p = chicken.model.position.x - 0.2,
                d = chicken.model.position.x + 0.2;
              d > l &&
                p < m &&
                chicken.getLane() == e.index &&
                !gameOver &&
                (chicken.shred(),
                (chicken.model.visible = !1),
                gameSounds.themeSong.setVolume(0),
                gameSounds.shred.play(),
                gameSounds.death2.play(),
                (gameOver = !0),
                setTimeout(() => {
                  document.getElementById("restart").style.visibility =
                    "visible";
                }, 5e3));
            }
          }),
      render(),
      stats.end(),
      requestAnimationFrame(update);
  },
  onPageResize = () => {
    (camera.aspect = window.innerWidth / window.innerHeight),
      camera.updateProjectionMatrix(),
      renderer.setSize(window.innerWidth, window.innerHeight);
  };
window.addEventListener("resize", onPageResize, !1);
const render = () => {
    scene && renderer.render(scene, camera);
  },
  onKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        chicken && chicken.jump("left");
        break;
      case 38:
        chicken && chicken.jump("up");
        break;
      case 39:
        chicken && chicken.jump("right");
        break;
      case 40:
        chicken && chicken.jump("down");
        break;
      case 32:
        document.body.removeChild(document.getElementById("splash"));
    }
  };
document.onkeydown = onKeyDown;
let xDown = null,
  yDown = null;
const getTouches = (e) => e.touches || e.originalEvent.touches,
  handleTouchStart = (e) => {
    let t = getTouches(e)[0];
    (xDown = t.clientX), (yDown = t.clientY);
  },
  handleTouchMove = (e) => {
    if (!xDown || !yDown) return;
    let t = e.touches[0].clientX,
      a = e.touches[0].clientY,
      i = xDown - t,
      r = yDown - a;
    Math.abs(i) > Math.abs(r)
      ? i > 0
        ? chicken && chicken.jump("left")
        : chicken && chicken.jump("right")
      : r > 0
      ? chicken && chicken.jump("up")
      : chicken && chicken.jump("down"),
      (xDown = null),
      (yDown = null);
  };
document.addEventListener("touchstart", handleTouchStart, !1),
  document.addEventListener("touchmove", handleTouchMove, !1);
