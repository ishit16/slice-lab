/* @ds-bundle: {"format":3,"namespace":"SliceDLS20Real_1c8c5c","components":[],"sourceHashes":{"ui_kits/mobile-app/components.jsx":"67bde445b738","ui_kits/mobile-app/screens.jsx":"49963c91d8d8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SliceDLS20Real_1c8c5c = window.SliceDLS20Real_1c8c5c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/mobile-app/components.jsx
try { (() => {
// Slice components — shared primitives
// Rubik 400/500 only; semantic tokens; subtractive.

const C = {
  bg1: '#FFFFFF',
  bg2: '#F6F9FC',
  bg3: '#F0F4F7',
  t1: 'rgba(0,0,0,0.9)',
  t2: 'rgba(0,0,0,0.7)',
  t3: 'rgba(0,0,0,0.5)',
  td: 'rgba(0,0,0,0.3)',
  brand: '#D30AD7',
  brandPressed: '#A008A3',
  brandSubtle: 'rgba(211,10,215,0.08)',
  positive: '#00A63E',
  negative: '#CE1D26',
  warning: '#FF8100',
  info: '#2B6ACF',
  border: 'rgba(0,0,0,0.05)',
  borderStrong: 'rgba(0,0,0,0.1)',
  shadowCard: '0 2px 32px rgba(0,0,0,0.05)',
  shadowPod: '0 4px 16px rgba(0,0,0,0.06)',
  font: 'Rubik, system-ui, sans-serif'
};

// ───────── PrimaryButton — pill, magenta
function PrimaryButton({
  children,
  onClick,
  fullWidth,
  disabled,
  width
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      background: disabled ? C.bg3 : pressed ? C.brandPressed : C.brand,
      color: disabled ? C.td : '#fff',
      font: '500 14px/20px ' + C.font,
      border: 0,
      borderRadius: 999,
      padding: '14px 24px',
      width: fullWidth ? '100%' : width,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 120ms'
    }
  }, children);
}

// ───────── TextButton — tertiary
function TextButton({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: 'transparent',
      color: C.brand,
      border: 0,
      font: '500 14px/20px ' + C.font,
      padding: '14px 12px',
      cursor: 'pointer'
    }
  }, children);
}

// ───────── Avatar — 6 decorative pairs
const AV_PAIRS = [{
  bg: '#FAE2FA',
  fg: '#D30AD7'
}, {
  bg: '#E0F4E8',
  fg: '#00A63E'
}, {
  bg: '#FFF0E0',
  fg: '#FF8100'
}, {
  bg: '#E6EDF9',
  fg: '#2B6ACF'
}, {
  bg: '#F9E4E5',
  fg: '#CE1D26'
}, {
  bg: '#EAEBED',
  fg: '#323841'
}];
function Avatar({
  name = '',
  size = 40,
  seed = 0
}) {
  const p = AV_PAIRS[seed % AV_PAIRS.length];
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '·';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: p.bg,
      color: p.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `500 ${Math.max(11, size * 0.36)}px/1 ` + C.font,
      flex: 'none'
    }
  }, initials);
}

// ───────── Icon — from /assets/icons
function Icon({
  name,
  size = 22,
  color
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${name}.svg`,
    width: size,
    height: size,
    style: color ? {
      filter: color === 'white' ? 'brightness(0) invert(1)' : undefined
    } : undefined
  });
}

// ───────── ListRow
function ListRow({
  leading,
  title,
  sub,
  trailing,
  trailingSub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      cursor: onClick ? 'pointer' : undefined
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/20px ' + C.font,
      color: C.t1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px ' + C.font,
      color: C.t3,
      marginTop: 2
    }
  }, sub)), trailing !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/20px ' + C.font,
      color: C.t1
    }
  }, trailing), trailingSub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px ' + C.font,
      color: C.t3,
      marginTop: 2
    }
  }, trailingSub)));
}

// ───────── Card
function Card({
  children,
  padding = 16,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg1,
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      boxShadow: C.shadowCard,
      padding,
      ...style
    }
  }, children);
}

// ───────── Chip
function Chip({
  children,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '500 13px/16px ' + C.font,
      padding: '8px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      background: selected ? C.brandSubtle : '#EAEBED',
      color: selected ? C.brand : C.t1,
      border: `1px solid ${selected ? C.brand : 'transparent'}`
    }
  }, children);
}

// ───────── Tag
function Tag({
  children,
  intent = 'neutral'
}) {
  const map = {
    brand: {
      bg: C.brandSubtle,
      fg: C.brand
    },
    positive: {
      bg: 'rgba(0,166,62,0.1)',
      fg: C.positive
    },
    negative: {
      bg: 'rgba(206,29,38,0.08)',
      fg: C.negative
    },
    warning: {
      bg: 'rgba(255,129,0,0.1)',
      fg: '#A35300'
    },
    info: {
      bg: 'rgba(43,106,207,0.08)',
      fg: C.info
    },
    neutral: {
      bg: '#F0F4F7',
      fg: '#323841'
    }
  };
  const s = map[intent];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/14px ' + C.font,
      padding: '4px 10px',
      borderRadius: 999,
      background: s.bg,
      color: s.fg,
      display: 'inline-block'
    }
  }, children);
}

// ───────── AppBar — back + title
function AppBar({
  title,
  onBack,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      height: 56
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4l-6 6 6 6",
    stroke: "rgba(0,0,0,0.9)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '500 16px/24px ' + C.font,
      color: C.t1,
      textAlign: 'center'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, trailing));
}

// ───────── BottomNav — 5 pods; active = 64px white circle
function BottomNav({
  tab,
  onChange,
  brand
}) {
  const pods = [{
    k: 'profile',
    icon: 'profile'
  }, {
    k: 'stash',
    icon: 'fire-line'
  }, {
    k: 'spark',
    icon: 'spark-fill'
  }, {
    k: 'pay',
    icon: 'upi'
  }, {
    k: 'bank',
    icon: 'bank-transfer'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: brand ? C.brand : C.bg1,
      borderRadius: 32,
      boxShadow: C.shadowCard,
      padding: '10px 12px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 4
    }
  }, pods.map(p => {
    const active = tab === p.k;
    return /*#__PURE__*/React.createElement("button", {
      key: p.k,
      onClick: () => onChange?.(p.k),
      style: {
        width: active ? 56 : 40,
        height: active ? 56 : 40,
        borderRadius: 999,
        border: 0,
        background: active ? '#fff' : brand ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.04)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: active ? C.shadowPod : 'none',
        transition: 'all 200ms'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `../../assets/icons/${p.icon}.svg`,
      width: active ? 24 : 20,
      height: active ? 24 : 20,
      style: {
        opacity: active ? 1 : brand ? 0.9 : 0.55,
        filter: !active && brand ? 'brightness(0) invert(1)' : 'none'
      }
    }));
  }));
}
Object.assign(window, {
  SliceC: C,
  PrimaryButton,
  TextButton,
  Avatar,
  Icon,
  ListRow,
  Card,
  Chip,
  Tag,
  AppBar,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/screens.jsx
try { (() => {
// Slice screens — Banking L0, Transactions, Send flow

// ───────── Banking L0 (home)
function BankingL0({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0F4F7',
      minHeight: '100%',
      paddingBottom: 120,
      fontFamily: SliceC.font
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 20px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sayan M",
    size: 40,
    seed: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px ' + SliceC.font,
      color: SliceC.t3
    }
  }, "hey, sayan"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px/22px ' + SliceC.font,
      color: SliceC.t1
    }
  }, "your monies")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: '#fff',
      border: 0,
      boxShadow: SliceC.shadowCard,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/message.svg",
    width: "20",
    height: "20"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 10px/14px ' + SliceC.font,
      color: SliceC.t3,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "REMAINING MONIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 48px/56px ' + SliceC.font,
      color: SliceC.t1,
      letterSpacing: '-0.02em',
      margin: '8px 0 6px'
    }
  }, "\u20B912,450"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/18px ' + SliceC.font,
      color: SliceC.positive,
      marginBottom: 20
    }
  }, "\u2191 \u20B9500 earned this week"), /*#__PURE__*/React.createElement(PrimaryButton, {
    width: 240,
    onClick: () => go('send')
  }, "Send money"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/14px ' + SliceC.font,
      color: SliceC.t3,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      margin: '4px 0 12px'
    }
  }, "QUICK ACTIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, [{
    i: 'upi',
    l: 'UPI'
  }, {
    i: 'bank-transfer',
    l: 'To bank'
  }, {
    i: 'self-transfer-line',
    l: 'To self'
  }, {
    i: 'mobile-prepaid',
    l: 'Mobile'
  }].map(a => /*#__PURE__*/React.createElement("button", {
    key: a.l,
    style: {
      background: '#fff',
      border: `1px solid ${SliceC.border}`,
      borderRadius: 16,
      padding: '16px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${a.i}.svg`,
    width: "24",
    height: "24"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/16px ' + SliceC.font,
      color: SliceC.t1
    }
  }, a.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '500 11px/14px ' + SliceC.font,
      color: SliceC.t3,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "RECENT ACTIVITY"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('txns'),
    style: {
      background: 'transparent',
      border: 0,
      font: '500 12px/16px ' + SliceC.font,
      color: SliceC.brand,
      cursor: 'pointer'
    }
  }, "See all")), /*#__PURE__*/React.createElement(Card, {
    padding: 4
  }, [{
    n: 'Nykaa',
    t: 'Today · 2:14 PM',
    a: '−₹1,299',
    seed: 0
  }, {
    n: 'Zomato',
    t: 'Today · 1:02 PM',
    a: '−₹485',
    seed: 1
  }, {
    n: 'Salary · Acme Corp',
    t: 'Yesterday',
    a: '+₹72,000',
    seed: 2
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: i < 2 ? `1px solid ${SliceC.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: x.n,
      seed: x.seed
    }),
    title: x.n,
    sub: x.t,
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        color: x.a.startsWith('+') ? SliceC.positive : SliceC.t1
      }
    }, x.a)
  }))))));
}

// ───────── Transactions
function Transactions({
  go
}) {
  const txns = [{
    n: 'Nykaa',
    t: 'Today · 2:14 PM',
    a: '−₹1,299',
    seed: 0,
    tag: 'slice CC'
  }, {
    n: 'Zomato',
    t: 'Today · 1:02 PM',
    a: '−₹485',
    seed: 1,
    tag: 'UPI'
  }, {
    n: 'Salary · Acme Corp',
    t: 'Yesterday',
    a: '+₹72,000',
    seed: 2,
    tag: 'Credit'
  }, {
    n: 'Swiggy Instamart',
    t: 'Yesterday',
    a: '−₹612',
    seed: 1,
    tag: 'UPI'
  }, {
    n: 'BluSmart',
    t: '17 Apr',
    a: '−₹340',
    seed: 3,
    tag: 'UPI'
  }, {
    n: 'Amazon.in',
    t: '16 Apr',
    a: '−₹2,199',
    seed: 0,
    tag: 'slice CC'
  }, {
    n: 'IRCTC',
    t: '14 Apr',
    a: '−₹865',
    seed: 4,
    tag: 'UPI'
  }, {
    n: 'Refund · Myntra',
    t: '13 Apr',
    a: '+₹1,150',
    seed: 2,
    tag: 'Credit'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0F4F7',
      minHeight: '100%',
      paddingBottom: 120,
      fontFamily: SliceC.font
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 52
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Activity",
    onBack: () => go('home')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: true
  }, "All"), /*#__PURE__*/React.createElement(Chip, null, "Spend"), /*#__PURE__*/React.createElement(Chip, null, "Credit"), /*#__PURE__*/React.createElement(Chip, null, "UPI"), /*#__PURE__*/React.createElement(Chip, null, "Slice CC")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, txns.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: i < txns.length - 1 ? `1px solid ${SliceC.border}` : 'none',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: x.n,
      seed: x.seed
    }),
    title: x.n,
    sub: /*#__PURE__*/React.createElement("span", null, x.t, " \xB7 ", /*#__PURE__*/React.createElement(Tag, {
      intent: x.tag === 'slice CC' ? 'brand' : x.tag === 'Credit' ? 'positive' : 'neutral'
    }, x.tag)),
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        color: x.a.startsWith('+') ? SliceC.positive : SliceC.t1
      }
    }, x.a)
  }))))));
}

// ───────── Send money — creation flow
function SendMoney({
  go
}) {
  const [amt, setAmt] = React.useState('1000');
  const [who, setWho] = React.useState(null);
  const people = [{
    n: 'Aarav J',
    h: '@aaravj',
    seed: 1
  }, {
    n: 'Riya K',
    h: '@riyak',
    seed: 2
  }, {
    n: 'Dev M',
    h: '@devm',
    seed: 0
  }, {
    n: 'Naina L',
    h: '@naina',
    seed: 3
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%',
      paddingBottom: 120,
      fontFamily: SliceC.font,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 52
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Send money",
    onBack: () => go('home')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      height: 128,
      borderRadius: 24,
      background: 'url(../../assets/illustrations/general-1.png) center/cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 24px/32px ' + SliceC.font,
      color: SliceC.t1
    }
  }, "how much?"), /*#__PURE__*/React.createElement("input", {
    value: '₹' + amt,
    onChange: e => setAmt(e.target.value.replace(/[^0-9]/g, '')),
    style: {
      border: 0,
      borderBottom: `2px solid ${SliceC.brand}`,
      background: 'transparent',
      font: '500 40px/48px ' + SliceC.font,
      color: SliceC.t1,
      textAlign: 'center',
      padding: '16px 0 8px',
      width: 240,
      outline: 'none',
      letterSpacing: '-0.02em'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      padding: '8px 20px',
      flexWrap: 'wrap'
    }
  }, ['500', '1000', '2000', '5000'].map(v => /*#__PURE__*/React.createElement(Chip, {
    key: v,
    selected: amt === v,
    onClick: () => setAmt(v)
  }, "\u20B9", v))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/14px ' + SliceC.font,
      color: SliceC.t3,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginBottom: 12
    }
  }, "TO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto'
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setWho(i),
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      minWidth: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2,
      borderRadius: 999,
      border: `2px solid ${who === i ? SliceC.brand : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.n,
    size: 48,
    seed: p.seed
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/16px ' + SliceC.font,
      color: SliceC.t1
    }
  }, p.n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/14px ' + SliceC.font,
      color: SliceC.t3
    }
  }, p.h))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 20px',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => who !== null && go('confirm', {
      amt,
      who: people[who]
    }),
    disabled: who === null,
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      border: 0,
      background: who === null ? '#F0F4F7' : SliceC.brand,
      boxShadow: who === null ? 'none' : '0 8px 24px rgba(211,10,215,0.3)',
      cursor: who === null ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    stroke: who === null ? 'rgba(0,0,0,0.3)' : '#fff',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}

// ───────── Confirm sheet
function Confirm({
  go,
  data
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (sent) {
      const t = setTimeout(() => go('home'), 1800);
      return () => clearTimeout(t);
    }
  }, [sent]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'rgba(0,0,0,0.4)',
      minHeight: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      fontFamily: SliceC.font
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      width: '100%',
      borderRadius: '24px 24px 0 0',
      padding: '28px 20px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: '#CDD0D4',
      margin: '0 auto 20px'
    }
  }), !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/20px ' + SliceC.font,
      color: SliceC.t3
    }
  }, "Sending"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 48px/56px ' + SliceC.font,
      letterSpacing: '-0.02em',
      color: SliceC.t1,
      margin: '6px 0 12px'
    }
  }, "\u20B9", data?.amt || '1000'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/20px ' + SliceC.font,
      color: SliceC.t2
    }
  }, "to"), /*#__PURE__*/React.createElement(Avatar, {
    name: data?.who?.n || 'Aarav J',
    size: 28,
    seed: data?.who?.seed ?? 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/20px ' + SliceC.font,
      color: SliceC.t1
    }
  }, data?.who?.n || 'Aarav J')), /*#__PURE__*/React.createElement(PrimaryButton, {
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Confirm & send"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(TextButton, {
    onClick: () => go('send')
  }, "Edit")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 999,
      background: 'rgba(0,166,62,0.1)',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6 6 12-12",
    stroke: "#00A63E",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 24px/32px ' + SliceC.font,
      color: SliceC.t1
    }
  }, "\u20B9", data?.amt || '1000', " sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/20px ' + SliceC.font,
      color: SliceC.t3,
      marginTop: 6
    }
  }, "to ", data?.who?.n || 'Aarav J'))));
}
Object.assign(window, {
  BankingL0,
  Transactions,
  SendMoney,
  Confirm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/screens.jsx", error: String((e && e.message) || e) }); }

})();
