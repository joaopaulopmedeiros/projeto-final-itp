var St = Object.create;
var w = Object.defineProperty,
    wt = Object.defineProperties,
    Rt = Object.getOwnPropertyDescriptor,
    It = Object.getOwnPropertyDescriptors,
    Tt = Object.getOwnPropertyNames,
    K = Object.getOwnPropertySymbols,
    Ot = Object.getPrototypeOf,
    Q = Object.prototype.hasOwnProperty,
    Gt = Object.prototype.propertyIsEnumerable;
var q = (r, t, e) => (t in r ? w(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e)),
    P = (r, t) => {
        for (var e in t || (t = {})) Q.call(t, e) && q(r, e, t[e]);
        if (K) for (var e of K(t)) Gt.call(t, e) && q(r, e, t[e]);
        return r;
    },
    Z = (r, t) => wt(r, It(t)),
    Mt = (r) => w(r, "__esModule", { value: !0 });
var Lt = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var qt = (r, t, e) => {
        if ((t && typeof t == "object") || typeof t == "function") for (let s of Tt(t)) !Q.call(r, s) && s !== "default" && w(r, s, { get: () => t[s], enumerable: !(e = Rt(t, s)) || e.enumerable });
        return r;
    },
    g = (r) => qt(Mt(w(r != null ? St(Ot(r)) : {}, "default", r && r.__esModule && "default" in r ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var i = (r, t, e) => (q(r, typeof t != "symbol" ? t + "" : t, e), e);
var nt = Lt((_) => {
    "use strict";
    Object.defineProperty(_, "__esModule", { value: !0 });
    var F = function (r, t) {
        return (
            (F =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, s) {
                        e.__proto__ = s;
                    }) ||
                function (e, s) {
                    for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
                }),
            F(r, t)
        );
    };
    function U(r, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function e() {
            this.constructor = r;
        }
        F(r, t), (r.prototype = t === null ? Object.create(t) : ((e.prototype = t.prototype), new e()));
    }
    var C,
        D = (function () {
            function r() {}
            return (
                (r._xfnv1a = function (t) {
                    for (var e = 2166136261, s = 0; s < t.length; s++) e = Math.imul(e ^ t.charCodeAt(s), 16777619);
                    return function () {
                        return (e += e << 13), (e ^= e >>> 7), (e += e << 3), (e ^= e >>> 17), (e += e << 5) >>> 0;
                    };
                }),
                r
            );
        })(),
        Ut = (function (r) {
            function t(e) {
                var s = r.call(this) || this;
                return (s.a = t._xfnv1a(e)()), s;
            }
            return (
                U(t, r),
                (t.prototype.next = function () {
                    var e = (this.a += 1831565813);
                    return (e = Math.imul(e ^ (e >>> 15), 1 | e)), (((e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ (e >>> 14)) >>> 0) / 4294967296;
                }),
                t
            );
        })(D),
        Ct = (function (r) {
            function t(e) {
                var s = r.call(this) || this,
                    o = t._xfnv1a(e);
                return (s.a = o()), (s.b = o()), (s.c = o()), (s.d = o()), s;
            }
            return (
                U(t, r),
                (t.prototype.next = function () {
                    (this.a >>>= 0), (this.b >>>= 0), (this.c >>>= 0), (this.d >>>= 0);
                    var e = (this.a + this.b) | 0;
                    return (
                        (this.a = this.b ^ (this.b >>> 9)),
                        (this.b = (this.c + (this.c << 3)) | 0),
                        (this.c = (this.c << 21) | (this.c >>> 11)),
                        (this.d = (this.d + 1) | 0),
                        (e = (e + this.d) | 0),
                        (this.c = (this.c + e) | 0),
                        (e >>> 0) / 4294967296
                    );
                }),
                t
            );
        })(D),
        Dt = (function (r) {
            function t(e) {
                var s = r.call(this) || this,
                    o = t._xfnv1a(e);
                return (s.a = o()), (s.b = o()), (s.c = o()), (s.d = o()), s;
            }
            return (
                U(t, r),
                (t.prototype.next = function () {
                    var e = this.b << 9,
                        s = 5 * this.a;
                    return (s = (s << 7) | (9 * (s >>> 25))), (this.c ^= this.a), (this.d ^= this.b), (this.b ^= this.c), (this.a ^= this.d), (this.c ^= e), (this.d = (this.d << 11) | (this.d >>> 21)), (s >>> 0) / 4294967296;
                }),
                t
            );
        })(D);
    (_.PRNG = void 0), ((C = _.PRNG || (_.PRNG = {})).sfc32 = "sfc32"), (C.mulberry32 = "mulberry32"), (C.xoshiro128ss = "xoshiro128ss");
    var jt = (function () {
        function r(t, e) {
            e === void 0 && (e = _.PRNG.sfc32), (this.str = t), (this.prng = e), (this.generator = this._initializeGenerator());
        }
        return (
            (r.prototype.next = function () {
                return this.generator.next();
            }),
            (r.prototype._initializeGenerator = function () {
                if (
                    (function (e) {
                        return e === null;
                    })((t = this.str)) ||
                    (function (e) {
                        return e === void 0;
                    })(t)
                )
                    return this.wrap();
                var t;
                switch (this.prng) {
                    case "sfc32":
                        return new Ct(this.str);
                    case "mulberry32":
                        return new Ut(this.str);
                    case "xoshiro128ss":
                        return new Dt(this.str);
                    default:
                        return this.wrap();
                }
            }),
            (r.prototype.wrap = function () {
                return {
                    next: function () {
                        return Math.random();
                    },
                };
            }),
            r
        );
    })();
    _.default = jt;
});
var ut = g(require("path")),
    ht = g(require("fs"));
var B = g(require("path")),
    tt = [
        { flag: "-d", desc: "Indica que as sa\xEDdas de debug devem ser impressas.", process: (r) => (r.debug = !0), num: 0 },
        {
            flag: "-q",
            desc: 'Entra no modo "quiet": roda todo o jogo e s\xF3 imprime o resultado final (sobrescreve o par\xE2metro de debug).',
            process: (r) => {
                (r.quiet = !0), (r.debug = !1);
            },
            num: 0,
        },
        { flag: "-i", desc: "Entra no modo iterativo. A cada rodada, o jogo espera o usu\xE1rio digitar <enter> para continuar.", process: (r) => (r.interactive = !0), num: 0 },
        { flag: "-m", desc: "Salva as mensagens enviadas para os bots, \xFAtil para debugar. Cada bot ter\xE1 seu arquivo com a extens\xE3o .in", process: (r) => (r.messages = !0), num: 0 },
        { flag: "-r", desc: "L\xEA o estado do jogo especificado em um arquivo, sobrescrevendo argumentos passados. Exemplo: -r game.state", process: (r, t, e) => (r.readfile = t[e + 1]), num: 1 },
        { flag: "-s", desc: "Indica uma semente para o gerador de n\xFAmero aleat\xF3rios. A semente deve ser um valor inteiro. Exemplo: -s 24652", process: (r, t, e) => (r.seed = parseInt(t[e + 1])), num: 1 },
        { flag: "-t", desc: "Indica o tempo (em milisegundos) que um bot tem para responder com uma a\xE7\xE3o antes de dar timeout (default: 3000). Exemplo: -t 2000", process: (r, t, e) => (r.timeout = parseInt(t[e + 1])), num: 1 },
    ];
function Bt(r, t = []) {
    let e = B.basename(process.argv[0]),
        s = B.basename(process.argv[1]);
    r
        .split(
            `
`
        )
        .forEach((o) => console.log(o.trim())),
        console.log(`Uso: ${e} ${s} [op\xE7\xF5es] [bot1 bot2 ...]
`),
        console.log("As op\xE7\xF5es s\xE3o:"),
        tt.concat(t).forEach((o) => console.log(o.flag, o.desc)),
        console.log(`
`);
}
function et(r = "", t = []) {
    let e = process.argv,
        s = { debug: !1, quiet: !1, interactive: !1, messages: !1, timeout: 3e3 };
    return (
        tt.concat(t).forEach((o) => {
            let a = e.indexOf(o.flag);
            a > 1 && a < e.length - o.num && (o.process(s, e, a), e.splice(a, o.num + 1));
        }),
        e.includes("-h") && (Bt(r, t), process.exit(0)),
        (s.bots = e.slice(2).filter((o) => !o.startsWith("-"))),
        s
    );
}
var I = g(require("path")),
    ot = g(require("fs")),
    N = g(require("child_process"));
var Nt = g(require("child_process")),
    $t = g(require("stream")),
    rt = g(require("readline"));
function st(r) {
    let t = (0, rt.createInterface)({ input: r }),
        e = (async function* () {
            for await (let s of t) yield s;
        })();
    return async () => (await e.next()).value;
}
var l = (r) => `[${r}m`,
    R = {
        bold: l("1"),
        black: l("30"),
        red: l("31"),
        green: l("32"),
        yellow: l("33"),
        blue: l("34"),
        magenta: l("35"),
        cyan: l("36"),
        white: l("37"),
        gray: l("90"),
        bgBlack: l("40"),
        bgRed: l("41"),
        bgGreen: l("42"),
        bgYellow: l("43"),
        bgBlue: l("44"),
        bgMagenta: l("45"),
        bgCyan: l("46"),
        bgWhite: l("47"),
        bgGray: l("100"),
        reset: l("0"),
    };
function Ft(r) {
    return r.endsWith(R.reset) ? r : `${r}${R.reset}`;
}
var n = Object.keys(R).reduce((r, t) => Z(P({}, r), { [t]: (e) => Ft(`${R[t]}${e}`) }), {});
var d = console.log,
    it = n.bgGreen(n.black("DEBUG:")),
    $ = class {
        constructor(t, e, s) {
            this.game = t;
            this.id = e;
            this.execName = s;
            i(this, "_proc");
            i(this, "_read");
            i(this, "_errorPromise");
            i(this, "_msgStream", null);
            i(this, "_active");
            I.dirname(s) === "." ? (this._proc = (0, N.spawn)(I.join(process.cwd(), s))) : (this._proc = (0, N.spawn)(s)),
                this.game.config.messages && (this._msgStream = (0, ot.createWriteStream)(s + ".in")),
                this.game.config.quiet && (d = () => {}),
                this._proc.on("error", (o) => {
                    d(n.red(`Erro na execu\xE7\xE3o do programa ${s}.`)), d(n.red(o)), this.game.quit(e, o);
                }),
                this._proc.stderr.on("data", (o) => {
                    if (this.game.config.quiet === !1) {
                        let a = o.toString().replace(
                            /\n/g,
                            `
	`
                        );
                        d(n.red(`Bot ${e}:`)), d(n.red(`	${a}`));
                    }
                }),
                (this._errorPromise = new Promise((o) => {
                    this._proc.on("close", (a, u) => {
                        u !== "SIGINT" ? (d(n.red(`Programa ${this.execName} terminou com signal ${u}.`)), o("EXEC_ERROR")) : o("FINISHED");
                    });
                })),
                (this._read = st(this._proc.stdout)),
                (this._active = !0);
        }
        async write(t) {
            if (this._active) {
                this.game.config.debug && console.debug(`${it} Enviando para ${this.id}: ${t}`);
                let e = `${t}
`;
                this._msgStream && this._msgStream.write(e);
                try {
                    return this._proc.stdin.write(e), Promise.resolve("OK");
                } catch (s) {
                    return Promise.resolve("ERROR");
                }
            }
        }
        async read() {
            if (this._active) {
                let t,
                    e = new Promise((u) => {
                        t = setTimeout(() => u("TIMEOUT"), this.game.config.timeout);
                    }),
                    s = this._read(),
                    o = this._errorPromise,
                    a = await Promise.race([e, s, o]).then((u) => (u === void 0 || u === "EXEC_ERROR" ? "ERROR" : u));
                return a === "TIMEOUT"
                    ? (d(`Jogador ${this.id} n\xE3o enviou dados no tempo de ${this.game.config.timeout}ms e foi eliminado.`), Promise.resolve("PLAYER_ERROR"))
                    : a === "ERROR"
                    ? (d(`Jogador ${this.id} teve problemas t\xE9cnicos e foi eliminado.`), Promise.resolve("PLAYER_ERROR"))
                    : (clearTimeout(t), this.game.config.debug && console.debug(`${it} Recebido de ${this.id}: ${a}`), Promise.resolve(a));
            }
        }
        halt() {
            console.log(n.red("HALT")), this._msgStream && this._msgStream.close(), this._proc.kill("SIGINT"), (this._active = !1);
        }
        get isActive() {
            return this._active;
        }
    };
var at = g(nt()),
    j,
    ct;
function lt(r, t, e = 0) {
    return Math.floor(r * (t - e) + e);
}
function v(r) {
    return typeof r == "number" && ((j = new at.default(r.toString())), (ct = r)), ct;
}
function y() {
    let seed = 0.93704; //é dividido por 100.000
    return j || v(lt(seed, 1e5)), j.next(); //colocar o mesmo mapa é só repetir a seed
}
function h(r, t = 0) {
    return lt(y(), r, t);
}
var c = class {
    constructor(t, ...e) {
        this.content = t;
        i(this, "params");
        this.params = e.map((s) => s.toString());
    }
    toString() {
        let t = this.params.join(" "),
            e = this.content.length > 0 && t.length > 0;
        return this.content + (e ? " " : "") + t;
    }
    static parse(t) {
        let [e, ...s] = t.split(" ").filter((o) => o.length > 0);
        return new c(e, ...s);
    }
};
var T = console.log,
    Vt = [n.cyan, n.yellow, n.magenta, n.cyan],
    O = class {
        constructor(t) {
            this.config = t;
            i(this, "players");
            i(this, "currPlayerIndex");
            let e = et(this.config.description, this.config.params);
            (this.config = P(P({}, t), e)),
                this.config.quiet && (T = () => {}),
                this.config.readfile && this.loadFile(this.config.readfile),
                this.config.seed || (y(), (this.config.seed = v())),
                T(`Seed da partida ${v()}`),
                (!this.currPlayerIndex || this.currPlayerIndex < 0 || this.currPlayerIndex > this.config.bots.length - 1) && (this.currPlayerIndex = h(this.config.bots.length)),
                (this.players = this.config.bots.map((s) => new $(this, ut.basename(s), s))),
                this.players.forEach((s, o) => (s.color = Vt[o]));
        }
        async run() {
            try {
                for (await this.config.init(), await this.config.start(); ; ) await this.config.turn(), (this.currPlayerIndex = (this.currPlayerIndex + 1) % this.players.length);
            } catch (t) {
                console.error(t), this.players.forEach((e) => e.halt());
            }
        }
        over(t) {
            T(t), this.config.finish(), this.closeGame();
        }
        quit(t, e) {}
        closeGame() {
            console.log(n.red("closeGame")), this.players.forEach((t) => t.halt()), process.exit();
        }
        loadFile(t) {
            try {
                let e = ht.readFileSync(t, "utf8"),
                    [s, o] = e.split(`---
`),
                    a = s.match(/seed\s*:\s*(\d+)\s*\n/);
                a && (this.config.seed = parseInt(a[1]));
                let u = s.match(/bots\s*:\s*([ \w]+)\n/);
                u && (this.config.bots = u[1].split(" ").filter((J) => J && J.length > 0));
                let S = s.match(/curr\s*:\s*(\d+)\n/);
                S && (this.currPlayerIndex = parseInt(S[1])), this.config.loadState(o);
            } catch (e) {
                console.error(e);
            }
        }
        async forEachPlayer(t) {
            await Promise.all(
                this.players.map(async (e) => {
                    await t(e);
                })
            );
        }
        get numPlayers() {
            return this.players.length;
        }
        async send(t, e) {
            let s = this.players.find((o) => o.id === t);
            if (s) {
                let o = await s.write(e.toString());
                return o !== "OK" ? (this.failPlayer("CONFIG ERROR", `Algo estranho ocorreu com o jogador ${s.id}`, s), "ERROR") : o;
            }
            return "PLAYER ID not found.";
        }
        async broadcast(t, e = this.players) {
            await Promise.all(
                e.map(async (s) => {
                    await this.send(s.id, t);
                })
            );
        }
        async broadcastNonCurrent(t) {
            await this.broadcast(
                t,
                this.players.filter((e) => e != this.currentPlayer)
            );
        }
        async receiveMessage() {
            let t = await this.currentPlayer.read();
            return c.parse(t);
        }
        failPlayer(t, e, s) {
            T(`${s.id}: ${n.red(t)} ${e}`);
        }
        get currentPlayer() {
            return this.players[this.currPlayerIndex];
        }
    };
var mt = 10,
    pt = 30,
    ft = 20,
    gt = 50,
    dt = 500,
    yt = 5e4,
    bt = 500;
var V = 10,
    X = 20,
    Pt = 200,
    _t = 150,
    At = 100,
    G = 10,
    H = 20,
    M = 30;
var L = class {
        constructor(t = 0, e = 0) {
            this.lin = t;
            this.col = e;
        }
    },
    E = class {
        constructor() {
            i(this, "width");
            i(this, "height");
            i(this, "harbors");
            i(this, "_cell");
            (this.height = h(X, V)), (this.width = h(X, V));
            let t = () => (y() < 0.5 ? G + h(10, 1) : y() < 0.7 ? H + h(10, 1) : M + h(10, 1));
            this._cell = [];
            for (let e = 0; e < this.height; e++) {
                this._cell.push([]);
                for (let s = 0; s < this.width; s++) this._cell[e].push(y() <= 0.3 ? t() : 0);
            }
            this.harbors = [];
            for (let e = h(5, 1); e > 0; e--) {
                let s = new L(h(this.height), h(this.width));
                this.harbors.push(s), (this._cell[s.lin][s.col] = 1);
            }
        }
        static get instance() {
            return E._instance === void 0 && (E._instance = new E()), E._instance;
        }
        isInside({ lin: t, col: e }) {
            return t >= 0 && t < this.height && e >= 0 && e < this.width;
        }
        cell(t) {
            return this.isInside(t) ? this._cell[t.lin][t.col] : 0;
        }
        isFishingPoint(t) {
            if (this.isInside(t)) {
                let e = this.cell(t);
                return e >= G && e < M + 10;
            }
            return !1;
        }
        isPort(t) {
            return this.cell(t) === 1;
        }
        getFishInfo(t) {
            if (this.isFishingPoint(t)) {
                let e = this.cell(t),
                    s = e % 10;
                switch (e - s) {
                    case G:
                        return { fish: "MULLET", quantity: s };
                    case H:
                        return { fish: "SNAPPER", quantity: s };
                    case M:
                        return { fish: "SEABASS", quantity: s };
                }
            }
            return null;
        }
        isAllowedToFish(t) {
            let e = this.getFishInfo(t);
            return e ? e.quantity > 0 : !0;
        }
        fish(t) {
            let e = this.getFishInfo(t);
            e && e.quantity > 0 && this._cell[t.lin][t.col]--;
        }
        update() {
            let t = h(this.height),
                e = h(this.width),
                s = this.getFishInfo({ lin: t, col: e });
            s && s.quantity > 0 && s.quantity < 9 && this._cell[t][e]++;
        }
        get strData() {
            return this._cell.map((t) => t.join(" ")).join(`
`);
        }
    },
    p = E;
i(p, "_instance");
var W = class {
    constructor(t = new L(0, 0)) {
        i(this, "_type");
        i(this, "_pos");
        i(this, "_moves");
        i(this, "_charge");
        (this._type = "BOAT"),
            (this._pos = t),
            (this._moves = 0),
            (this._charge = [
                { fish: "MULLET", quantity: 0 },
                { fish: "SNAPPER", quantity: 0 },
                { fish: "SEABASS", quantity: 0 },
            ]);
    }
    get type() {
        return this._type;
    }
    get moveLimit() {
        return this.type === "BOAT" ? pt : gt;
    }
    get chargeLimit() {
        return this.type === "BOAT" ? mt : ft;
    }
    get pos() {
        return this._pos;
    }
    get moves() {
        return this._moves;
    }
    get overload() {
        let t = this._charge.reduce((e, s) => e + s.quantity, 0);
        return t > this.chargeLimit ? t - this.chargeLimit : 0;
    }
    moveTo(t) {
        this._pos = t;
    }
    load(t) {
        this._charge.find((e) => e.fish === t).quantity++;
    }
    quantity(t) {
        return this._charge.find((e) => e.fish === t).quantity;
    }
    unload() {
        let t = this.quantity("MULLET") * At + this.quantity("SNAPPER") * _t + this.quantity("SEABASS") * Pt;
        return (this._moves = 0), this._charge.forEach((e) => (e.quantity = 0)), t;
    }
};
var b = class {
        constructor(t) {
            this.id = t;
            i(this, "_boat");
            i(this, "_money");
            let e = p.instance,
                s = e.harbors[h(e.harbors.length)];
            (this._boat = new W(s)), (this._money = 0), b._bots.set(t, this);
        }
        valid(t) {
            switch (t.content) {
                case "LEFT":
                case "RIGHT":
                case "UP":
                case "DOWN":
                    return this.move(t.content);
                case "FISH":
                    return this.fish();
                case "SELL":
                    return this.sell();
                default:
                    return new c("INVALID");
            }
        }
        get pos() {
            return this._boat.pos;
        }
        get money() {
            return this._money;
        }
        static get ids() {
            return [...b._bots.keys()];
        }
        static get bots() {
            return [...b._bots.values()];
        }
        static bot(t) {
            return b._bots.get(t);
        }
        static isBusy({ lin: t, col: e }) {
            return b.bots.some((s) => s.pos.lin === t && s.pos.col === e);
        }
        quantity(t) {
            return this._boat.quantity(t);
        }
        move(t) {
            let e = p.instance,
                s = P({}, this.pos);
            return (
                t === "LEFT" && s.col--, t === "RIGHT" && s.col++, t === "UP" && s.lin--, t === "DOWN" && s.lin++, e.isInside(s) ? (b.isBusy(s) ? new c("BUSY") : (this._boat.moveTo(s), new c("DONE"))) : ((this._money -= dt), new c("OUT"))
            );
        }
        fish() {
            let t = p.instance,
                e = t.getFishInfo(this.pos);
            return e ? (t.isAllowedToFish(this.pos) ? (t.fish(this.pos), this._boat.load(e.fish), new c(e.fish)) : ((this._money -= yt), new c("IMPACT"))) : new c("NONE");
        }
        sell() {
            if (p.instance.isPort(this.pos)) {
                let e = this._boat.overload * bt,
                    s = this._boat.unload();
                this._money += s - e;
            }
            return new c(this.money.toString());
        }
    },
    f = b;
i(f, "_bots", new Map());
function A(r) {
    switch (r.fish) {
        case "MULLET":
            return n.bgGray(r.quantity);
        case "SNAPPER":
            return n.bgGreen(n.gray(r.quantity));
        case "SEABASS":
            return n.bgMagenta(r.quantity);
    }
}
function k(r) {
    return n.bgRed(n.white(String.fromCharCode(65 + r)));
}
function Xt() {
    return n.bgBlack("P");
}
function Et() {
    return n.bgBlue(" ");
}
function vt() {
    console.log("Bots");
    let t = f.bots.reduce(
        (e, s, o) => `${e}${k(o)}: ${s.id}
`,
        ""
    );
    console.log(t),
        console.log("Pontos de pesca (o digito \xE9 a quantidade)"),
        console.log(A({ fish: "MULLET", quantity: 0 }) + ": Tainha"),
        console.log(A({ fish: "SNAPPER", quantity: 0 }) + ": Cioba"),
        console.log(A({ fish: "SEABASS", quantity: 0 }) + ": Robalo"),
        console.log(),
        console.log("P: Porto");
}
function Y() {
    let r = p.instance,
        t = f.bots,
        e = "";
    for (let s = 0; s < r.height; s++) {
        for (let o = 0; o < r.width; o++) {
            let a = t.findIndex((u) => u.pos.lin === s && u.pos.col === o);
            if (a >= 0) e += k(a);
            else {
                let u = r.getFishInfo({ lin: s, col: o });
                u ? (e += A(u)) : r.isPort({ lin: s, col: o }) ? (e += Xt()) : (e += Et());
            }
            e += Et();
        }
        if (s < t.length) {
            let o = t[s],
                a = A({ fish: "MULLET", quantity: o.quantity("MULLET") }),
                u = A({ fish: "SNAPPER", quantity: o.quantity("SNAPPER") }),
                S = A({ fish: "SEABASS", quantity: o.quantity("SEABASS") });
            e += `    ${k(s)}: ${a} ${u} ${S} - R$ ${o.money}`;
        }
        e += `
`;
    }
    console.log(e);
}
var x = 500,
    z = 1e4,
    xt,
    Ht = [
        {
            flag: "-mr",
            desc: "Indica o n\xFAmero m\xE1ximo de rodadas que o jogo ter\xE1 (Max Rounds). Deve ser seguido de um valor inteiro (por padr\xE3o, 500).",
            process: (r, t, e) => {
                (x = parseInt(t[e + 1])), console.log("M\xE1ximo de rodadas alterado para: ", x);
            },
            num: 1,
        },
        {
            flag: "-mm",
            desc: "Indica o saldo para um jogador ganhar a partida (Max Money). Deve ser seguido de um valor inteiro (por padr\xE3o, 10000).",
            process: (r, t, e) => {
                (z = parseInt(t[e + 1])), console.log("Saldo vencedor alterado para: ", z);
            },
            num: 1,
        },
    ],
    m = new O({ description: "Neste jogo, voc\xEA controla um barco-pesqueiro, que compete com outros barcos pelos recursos naturais de uma \xE1rea de pesca.", loadState: Wt, init: kt, start: Yt, turn: zt, finish: Jt, params: Ht });
m.run();
function Wt(r) {}
async function kt() {
    m.numPlayers === 0 && (console.log("N\xE3o h\xE1 bot-jogadores."), m.closeGame()), (xt = 0), m.forEachPlayer((r) => new f(r.id));
}
async function Yt() {
    let r = p.instance;
    await m.broadcast(new c("AREA", r.height, r.width));
    for (let t of f.bots) await m.send(t.id, new c("ID", t.id));
    vt(), Y();
}
async function zt() {
    let r = p.instance;
    try {
        if ((++xt % m.numPlayers == 0 && (console.log(`Faltam ${x} rodadas.`), x--), x >= 0)) {
            let t = m.currentPlayer.id;
            await m.send(t, new c(r.strData)), await m.send(t, new c("BOTS", f.bots.length));
            for (let a of f.bots) await m.send(t, new c(a.id, a.pos.lin, a.pos.col));
            let e = await m.receiveMessage(),
                s = f.bot(t),
                o = s.valid(e);
            await m.send(t, o), s.money >= z && m.over("Um jogador alcan\xE7ou o valor m\xE1ximo!"), r.update(), Y();
        } else m.over("timeout");
    } catch (t) {
        console.log(t);
    }
}
function Jt() {
    console.log("COLOCA\xC7\xC3O"), f.bots.sort((r, t) => t.money - r.money).forEach((r, t) => console.log(`${t + 1}\xBA: ${r.id} - R$ ${r.money},00`));
}
