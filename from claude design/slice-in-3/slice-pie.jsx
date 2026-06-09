// slice in 3 — the signature "pie" mark, recreated as an animatable SVG.
// Exports window.SlicePie. Three 120° wedges (pink / purple / blue) on a grain
// fill. Drive `split` 0→1 to explode the wedges apart; `spin` for slow idle.
(function () {
  const TAU = Math.PI * 2;

  // angle in degrees, clockwise from 12 o'clock
  function pt(cx, cy, r, deg) {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
  }

  function wedgePath(cx, cy, r, a0, a1) {
    const [x0, y0] = pt(cx, cy, r, a0);
    const [x1, y1] = pt(cx, cy, r, a1);
    const large = a1 - a0 > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
  }

  function SlicePie({ size = 200, split = 0, spin = false, gap = 4, idPrefix = "sp" }) {
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.46;
    // explosion distance per wedge
    const dist = split * size * 0.11;

    // pink (top-right), purple (bottom), blue (left)
    const wedges = [
      { a0: 6, a1: 120, grad: "g1" },
      { a0: 126, a1: 240, grad: "g2" },
      { a0: 246, a1: 360, grad: "g3" },
    ];

    return React.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        style: {
          overflow: "visible",
          animation: spin ? "sp-spin 26s linear infinite" : "none",
        },
      },
      React.createElement(
        "defs",
        null,
        React.createElement(
          "radialGradient",
          { id: idPrefix + "g1", cx: "70%", cy: "20%", r: "90%" },
          React.createElement("stop", { offset: "0%", stopColor: "#F6A8F2" }),
          React.createElement("stop", { offset: "55%", stopColor: "#E362E5" }),
          React.createElement("stop", { offset: "100%", stopColor: "#D30AD7" })
        ),
        React.createElement(
          "linearGradient",
          { id: idPrefix + "g2", x1: "20%", y1: "0%", x2: "80%", y2: "100%" },
          React.createElement("stop", { offset: "0%", stopColor: "#C21DB6" }),
          React.createElement("stop", { offset: "60%", stopColor: "#7C2BD6" }),
          React.createElement("stop", { offset: "100%", stopColor: "#4F46E5" })
        ),
        React.createElement(
          "linearGradient",
          { id: idPrefix + "g3", x1: "100%", y1: "30%", x2: "0%", y2: "90%" },
          React.createElement("stop", { offset: "0%", stopColor: "#7C5BE0" }),
          React.createElement("stop", { offset: "55%", stopColor: "#3F7BE0" }),
          React.createElement("stop", { offset: "100%", stopColor: "#2B6ACF" })
        ),
        React.createElement(
          "filter",
          { id: idPrefix + "grain" },
          React.createElement("feTurbulence", {
            type: "fractalNoise",
            baseFrequency: "0.9",
            numOctaves: "2",
            result: "noise",
          }),
          React.createElement("feColorMatrix", { in: "noise", type: "saturate", values: "0" }),
          React.createElement("feComponentTransfer", null,
            React.createElement("feFuncA", { type: "linear", slope: "0.16" })),
          React.createElement("feComposite", { operator: "in", in2: "SourceGraphic" }),
          React.createElement("feBlend", { in: "SourceGraphic", mode: "overlay" })
        )
      ),
      React.createElement(
        "g",
        { filter: `url(#${idPrefix}grain)` },
        wedges.map((w, i) => {
          const bis = ((w.a0 + w.a1) / 2) * (Math.PI / 180);
          const dx = Math.sin(bis) * dist;
          const dy = -Math.cos(bis) * dist;
          return React.createElement("path", {
            key: i,
            d: wedgePath(cx, cy, r, w.a0 + gap / 2, w.a1 - gap / 2),
            fill: `url(#${idPrefix}${w.grad})`,
            style: {
              transform: `translate(${dx}px, ${dy}px)`,
              transition: "transform 700ms cubic-bezier(.22,1,.36,1)",
            },
          });
        })
      )
    );
  }

  window.SlicePie = SlicePie;
})();
