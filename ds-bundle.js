/* @ds-bundle: {"format":3,"namespace":"NaviaDesignSystem_aaaf32","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2151822c760c","components/core/Button.jsx":"3fdb22407e78","components/core/Card.jsx":"08862f9b6d94","components/core/IconButton.jsx":"9f75a1747619","components/data/Meter.jsx":"9be8e38a707b","components/data/Metric.jsx":"dcbd4e212e9e","components/forms/Checkbox.jsx":"94355a8345f2","components/forms/Input.jsx":"c9709b132791","components/forms/Select.jsx":"5a714111ae9e","components/forms/Switch.jsx":"ac508bd6bb4e","components/navigation/Tabs.jsx":"fc990b0d84e7","ui_kits/website/Approach.jsx":"9cb3ec914655","ui_kits/website/BlobVideo.jsx":"cdcd4772cd24","ui_kits/website/Capabilities.jsx":"698bf1453cbc","ui_kits/website/Company.jsx":"1c89480b89e1","ui_kits/website/Expertise.jsx":"179f6fee05a9","ui_kits/website/Footer.jsx":"9555a311cc4a","ui_kits/website/Header.jsx":"6cb0a29acd6e","ui_kits/website/Hero.jsx":"672062aeb4c6","ui_kits/website/HeroGallery.jsx":"fcbb986b71be","ui_kits/website/Intro.jsx":"3f06a0571b38","ui_kits/website/SimPanel.jsx":"6b58c321507e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NaviaDesignSystem_aaaf32 = window.NaviaDesignSystem_aaaf32 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia Badge — compact status / category label.
 * Tones: neutral, brand, ok, warn, fault, accent. Optional leading dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-body)',
      dotc: 'var(--steel-400)',
      bd: 'var(--border-default)'
    },
    brand: {
      bg: 'var(--brand-subtle-bg)',
      fg: 'var(--text-brand)',
      dotc: 'var(--brand)',
      bd: 'transparent'
    },
    ok: {
      bg: 'var(--status-ok-bg)',
      fg: 'var(--status-ok)',
      dotc: 'var(--status-ok)',
      bd: 'transparent'
    },
    warn: {
      bg: 'var(--status-warn-bg)',
      fg: 'var(--status-warn)',
      dotc: 'var(--status-warn)',
      bd: 'transparent'
    },
    fault: {
      bg: 'var(--status-fault-bg)',
      fg: 'var(--status-fault)',
      dotc: 'var(--status-fault)',
      bd: 'transparent'
    },
    accent: {
      bg: 'var(--accent-subtle-bg)',
      fg: 'var(--accent)',
      dotc: 'var(--accent)',
      bd: 'transparent'
    }
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.03em',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dotc,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia Button — primary action control.
 * Variants: primary (brand fill), secondary (steel outline),
 * ghost (text), danger. Sizes: sm, md, lg. Optional leading/trailing icon.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 12px',
      height: 32,
      fontSize: 'var(--text-xs)',
      gap: 6,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 18px',
      height: 40,
      fontSize: 'var(--text-sm)',
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 24px',
      height: 48,
      fontSize: 'var(--text-base)',
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      background: 'var(--status-fault)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: 'var(--brand-hover)',
    secondary: 'var(--surface-hover)',
    ghost: 'var(--brand-subtle-bg)',
    danger: '#c23434'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? 'translateY(0.5px) scale(0.99)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast)',
      background: hover && !disabled ? hoverBg : v.background,
      color: v.color,
      border: v.border,
      boxShadow: v.boxShadow,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1em',
      height: '1em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1em',
      height: '1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia Card — base surface container.
 * Optional accent edge (top thermal/brand line) and hover lift for
 * interactive cards.
 */
function Card({
  children,
  padding = 'var(--space-5)',
  accent = 'none',
  // 'none' | 'brand' | 'thermal'
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accentBar = accent === 'thermal' ? {
    background: 'var(--grad-thermal)'
  } : accent === 'brand' ? {
    background: 'var(--brand)'
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      ...accentBar
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia IconButton — square control for a single glyph.
 * Pass an icon node as children. Variants mirror Button.
 */
function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      bg: 'var(--brand)',
      fg: '#fff',
      bd: 'transparent',
      hbg: 'var(--brand-hover)'
    },
    secondary: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-body)',
      bd: 'var(--border-strong)',
      hbg: 'var(--surface-hover)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-muted)',
      bd: 'transparent',
      hbg: 'var(--surface-hover)'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${v.bd}`,
      background: hover && !disabled ? v.hbg : v.bg,
      color: v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size === 'sm' ? 16 : 18,
      height: size === 'sm' ? 16 : 18,
      display: 'inline-flex'
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
/**
 * Navia Meter — horizontal progress / gauge bar.
 * variant "brand" (solid) or "thermal" (heatmap gradient fill that
 * tracks magnitude). Value 0–100.
 */
function Meter({
  value = 0,
  max = 100,
  variant = 'brand',
  label,
  showValue = true,
  unit = '%',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = variant === 'thermal' ? 'var(--grad-thermal)' : variant === 'ok' ? 'var(--status-ok)' : variant === 'warn' ? 'var(--status-warn)' : variant === 'fault' ? 'var(--status-fault)' : 'var(--brand)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-strong)',
      fontWeight: 600
    }
  }, value, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-active)',
      overflow: 'hidden',
      boxShadow: 'var(--inset-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: pct + '%',
      background: variant === 'thermal' ? undefined : fill,
      backgroundImage: variant === 'thermal' ? 'var(--grad-thermal)' : undefined,
      backgroundSize: variant === 'thermal' ? `${10000 / Math.max(pct, 1)}% 100%` : undefined,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
/**
 * Navia Metric — large mono stat with label, optional unit and delta.
 * The signature data-display block for dashboards and case studies.
 */
function Metric({
  value,
  unit,
  label,
  delta,
  deltaTone = 'auto',
  align = 'left',
  style = {}
}) {
  let tone = deltaTone;
  if (tone === 'auto' && typeof delta === 'string') {
    tone = delta.trim().startsWith('-') ? 'down' : delta.trim().startsWith('+') ? 'up' : 'flat';
  }
  const deltaColor = {
    up: 'var(--status-ok)',
    down: 'var(--status-fault)',
    flat: 'var(--text-muted)'
  }[tone] || 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: deltaColor,
      fontWeight: 600
    }
  }, delta));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Navia Checkbox — square check control with optional label.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const on = checked || indeterminate;
  const toggle = () => !disabled && onChange && onChange(!checked);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : checked,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: on ? 'var(--brand)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia Input — single-line text field with optional label, hint,
 * error, and leading/trailing adornment.
 */
function Input({
  label,
  hint,
  error,
  id,
  leading = null,
  trailing = null,
  size = 'md',
  disabled = false,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === 'sm' ? 34 : 40;
  const borderColor = error ? 'var(--status-fault)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16,
      color: 'var(--text-subtle)'
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      minWidth: 0,
      ...inputStyle
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16,
      color: 'var(--text-subtle)'
    }
  }, trailing)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-fault)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navia Select — styled native dropdown with mono label.
 */
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  disabled = false,
  size = 'md',
  style = {},
  id,
  ...rest
}) {
  const uid = id || React.useId();
  const h = size === 'sm' ? 34 : 40;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 36px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Navia Switch — boolean toggle.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = 'md',
  style = {}
}) {
  const w = size === 'sm' ? 34 : 42;
  const h = size === 'sm' ? 20 : 24;
  const knob = h - 6;
  const toggle = () => !disabled && onChange && onChange(!checked);
  const control = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      position: 'relative',
      width: w,
      height: h,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand)' : 'var(--steel-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Navia Tabs — underline tab bar.
 * Controlled via `value` + `onChange`. Items: {value,label} or strings.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  const norm = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, norm.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: 'relative',
        appearance: 'none',
        border: 'none',
        background: 'transparent',
        padding: '10px 14px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--brand)' : 'transparent',
        transition: 'background var(--dur-fast)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Approach.jsx
try { (() => {
// Navia marketing site — approach (3 principles), dark band
function Approach() {
  const items = [{
    n: '01',
    title: 'Uncompromising precision',
    body: 'We do not rely on simplified models when critical safety is at stake. Every mesh, boundary condition, and evaluation is built to resolve the real physics.'
  }, {
    n: '02',
    title: 'Multiphysics mindset',
    body: 'Temperature, structure, and fluid flow do not exist in isolation. We analyze the complete coupled system, not a convenient slice of it.'
  }, {
    n: '03',
    title: 'Collaborative engineering',
    body: 'We don\u2019t just deliver colorful plots. We provide robust technical answers and actionable design recommendations you can build on.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    "data-screen-label": "Approach",
    style: {
      position: 'relative',
      background: 'var(--blue-950)',
      padding: 'var(--space-12) var(--space-7)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-mesh)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      fontWeight: 600
    }
  }, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 0',
      maxWidth: '20ch',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff',
      lineHeight: 1.1
    }
  }, "High-fidelity over standard solutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      borderTop: '2px solid var(--brand)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--blue-300)',
      fontWeight: 600
    }
  }, it.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-3) 0 var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: '#fff',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(226,232,245,0.72)'
    }
  }, it.body))))));
}
window.Approach = Approach;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlobVideo.jsx
try { (() => {
// Navia marketing site — video that loads via Blob URL (the serving env
// doesn't support HTTP range requests, which <video src> streaming needs).
// Falls back to a poster image / subtle panel if the fetch fails.
function BlobVideo({
  src,
  poster,
  style = {},
  height = 320,
  fit = 'cover'
}) {
  const [url, setUrl] = React.useState(null);
  const [failed, setFailed] = React.useState(false);
  const vref = React.useRef(null);
  React.useEffect(() => {
    let objUrl = null,
      alive = true;
    fetch(src).then(r => {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.blob();
    }).then(blob => {
      if (!alive) return;
      objUrl = URL.createObjectURL(blob);
      setUrl(objUrl);
    }).catch(() => alive && setFailed(true));
    return () => {
      alive = false;
      if (objUrl) URL.revokeObjectURL(objUrl);
    };
  }, [src]);
  React.useEffect(() => {
    if (url && vref.current) {
      vref.current.play().catch(() => {});
    }
  }, [url]);
  const base = {
    display: 'block',
    width: '100%',
    height,
    objectFit: fit,
    background: '#0d121a',
    ...style
  };
  if (failed) {
    return poster ? /*#__PURE__*/React.createElement("img", {
      src: poster,
      alt: "",
      style: {
        ...base,
        background: '#cfd6e4'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(226,232,245,0.5)'
      }
    }, "Simulation preview"));
  }
  return /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: url || undefined,
    poster: poster,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    style: base
  });
}
window.BlobVideo = BlobVideo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlobVideo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Capabilities.jsx
try { (() => {
// Navia marketing site — capabilities: numerical tools + featured CFD setup
const {
  Card: CapCard
} = window.NaviaDesignSystem_aaaf32;
function Capabilities() {
  const tools = [['Computational Fluid Dynamics', 'ANSYS Fluent & CFX', 'Transient calculations, sliding mesh, compressible and transonic flows.'], ['Finite Element Method', 'ANSYS Workbench & Nastran', 'Structural, thermomechanical, and stress analyses for safety-critical parts.'], ['CAD & geometry preparation', 'Siemens NX & SolidWorks', 'Professional design and simulation-ready model cleanup.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    "data-screen-label": "Capabilities",
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--space-12) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      fontWeight: 600
    }
  }, "Our mathematical & numerical tools"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 var(--space-8)',
      maxWidth: '24ch',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      lineHeight: 1.12
    }
  }, "Industry-standard solvers, expert hands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, tools.map(([t, stack, body], i) => /*#__PURE__*/React.createElement(CapCard, {
    key: i,
    accent: "brand",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      fontWeight: 600
    }
  }, stack), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-3) 0 var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(SimPanel, {
    src: "../../assets/sim/cfd-boundary-conditions.jpg",
    solver: "Setup",
    title: "Boundary conditions \xB7 inlet / outlet",
    height: 260,
    fit: "cover"
  }), /*#__PURE__*/React.createElement(SimPanel, {
    src: "../../assets/sim/cfd-velocity-volute.jpg",
    solver: "CFD",
    title: "Velocity magnitude \xB7 volute",
    height: 260,
    fit: "cover"
  }))));
}
window.Capabilities = Capabilities;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Capabilities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Company.jsx
try { (() => {
// Navia marketing site — company structure (direct access) on dark
function Company() {
  const rows = [['Calculation & Simulation (CFD/FEM)', 'All physical analyses — from mesh generation to transient evaluation — are executed exclusively by the lead calculation engineer. 30 years of cross-industry experience are embedded into every project.'], ['Design & CAD Modeling', 'For perfect geometric preparation and high-precision 3D design, the team is supported by specialized CAD designers — so every mesh is built on a flawless, simulation-ready foundation.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "company",
    "data-screen-label": "Company",
    style: {
      position: 'relative',
      background: 'var(--grad-deep)',
      padding: 'var(--space-12) var(--space-7)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-mesh)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      fontWeight: 600
    }
  }, "Direct access to maximum expertise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff',
      lineHeight: 1.1
    }
  }, "We do not delegate crucial calculations."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(226,232,245,0.78)'
    }
  }, "When it comes to critical product development, there is no room for compromise. The result: no loss of information, no administrative friction \u2014 just direct communication and robust results, from experts to experts.")), /*#__PURE__*/React.createElement("div", null, rows.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--blue-300)',
      fontWeight: 600,
      flex: 'none'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-semibold)',
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(226,232,245,0.68)'
    }
  }, b)))))));
}
window.Company = Company;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Company.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Expertise.jsx
try { (() => {
// Navia marketing site — Expertise (tabbed: FEM / CFD / Hydrogen / Turbomachinery)
const {
  Tabs,
  Badge: ExBadge
} = window.NaviaDesignSystem_aaaf32;
const EXPERTISE = {
  fem: {
    label: 'Structural Mechanics',
    eyebrow: 'FEM · ANSYS Workbench · Nastran',
    title: 'Precision under maximum load.',
    intro: 'Safety and durability begin long before manufacturing. Using state-of-the-art Finite Element Methods, we simulate the mechanical and thermal behavior of complex components — identifying weak points before they arise and optimizing designs for the most demanding operating conditions.',
    services: [['Static structural analysis', 'Total deformations and mechanical stresses under real load cases, with strength verification for safety-critical components.'], ['Thermal-mechanical analysis', 'Transient thermal stresses and material expansion under extreme temperature gradients to prevent fatigue and cracking.'], ['Modal analysis & vibration dynamics', 'Precise natural frequencies and mode shapes to strategically mitigate resonance and high-cycle fatigue.']],
    panels: [{
      src: '../../assets/sim/fea-modal-814hz.jpg',
      solver: 'Modal',
      title: 'Total deformation · 814.24 Hz'
    }, {
      src: '../../assets/sim/fea-elastic-strain.jpg',
      solver: 'Static',
      title: 'Elastic equivalent strain'
    }]
  },
  cfd: {
    label: 'Turbomachinery (CFD)',
    eyebrow: 'CFD · ANSYS Fluent / CFX',
    title: 'Detailed flow-field analysis for rotating machinery.',
    intro: 'Highly complex flow simulations for turbines, centrifugal compressors, and pumps — directly coupling tangential velocities at the impeller with the resulting absolute velocities in the volute casing to maximize overall efficiency.',
    services: [['Geometry preparation & CFD setup', 'Professional CAD cleanup and precise vector boundary conditions at inlets and outlets to replicate real-world flow.'], ['Transonic & high-speed compressors', 'High-fidelity simulation of flow velocities exceeding 1,800 m/s — mastering shock waves, expansion waves, and choking.'], ['Coupled flow-field analysis', 'Tangential velocity at the impeller and absolute velocity in the casing, evaluated together for targeted efficiency gains.']],
    panels: [{
      src: '../../assets/sim/cfd-tangential-velocity.jpg',
      solver: 'CFD',
      title: 'Tangential velocity · volute plane'
    }, {
      src: '../../assets/sim/cfd-velocity-meridional.jpg',
      solver: 'CFD',
      title: 'Velocity magnitude · meridional'
    }]
  },
  hydrogen: {
    label: 'Cryogenics & Hydrogen',
    eyebrow: 'CFD · Multiphysics · LH₂',
    title: 'Resolving the physics that drives H₂ safety.',
    intro: 'High-fidelity modeling of gaseous and liquid hydrogen releases into ambient environments — tracking species concentration alongside the underlying pressure field to evaluate safety margins and explosive boundary layers.',
    services: [['High-pressure H₂ dispersion', 'Gaseous and liquid hydrogen (LH₂) free jets and dispersion fields to determine explosive boundary layers and hazardous zones.'], ['Species mixing & mass fraction', 'Precise multi-component tracking (H₂ mole fraction in air) to predict dispersion during venting or accidental leaks.'], ['Gas dynamics & shock diamonds', 'Resolution of under-expanded jets, expansion zones, and pressure-wave propagation in high-velocity gas releases.']],
    // hydrogen uses a switchable view (mole fraction <-> pressure)
    toggle: [{
      key: 'species',
      tab: 'Species mixing',
      src: '../../assets/sim/h2-mole-fraction.mp4',
      solver: 'Fluent',
      title: 'H₂ mole fraction'
    }, {
      key: 'pressure',
      tab: 'Pressure field',
      src: '../../assets/sim/h2-absolute-pressure.mp4',
      solver: 'Fluent',
      title: 'Absolute pressure'
    }]
  }
};
function Expertise() {
  const [tab, setTab] = React.useState('fem');
  const [h2view, setH2view] = React.useState('species');
  const d = EXPERTISE[tab];
  return /*#__PURE__*/React.createElement("section", {
    id: "expertise",
    "data-screen-label": "Expertise",
    style: {
      background: 'var(--surface-card)',
      padding: 'var(--space-12) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      fontWeight: 600
    }
  }, "Technical expertise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      lineHeight: 1.12
    }
  }, "Quantifiable engineering, not abstract promises.")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: v => {
      setTab(v);
    },
    items: [{
      value: 'fem',
      label: 'Structural (FEM)'
    }, {
      value: 'cfd',
      label: 'Turbomachinery (CFD)'
    }, {
      value: 'hydrogen',
      label: 'Hydrogen & Cryogenics'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, d.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-3) 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      lineHeight: 1.18
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, d.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, d.services.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--brand)',
      fontWeight: 600,
      flex: 'none',
      width: 24,
      paddingTop: 2
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, tab === 'hydrogen' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      alignSelf: 'flex-start',
      border: '1px solid var(--border-default)'
    }
  }, d.toggle.map(o => {
    const on = h2view === o.key;
    return /*#__PURE__*/React.createElement("button", {
      key: o.key,
      onClick: () => setH2view(o.key),
      style: {
        appearance: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '7px 14px',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontWeight: 600,
        background: on ? 'var(--brand)' : 'transparent',
        color: on ? '#fff' : 'var(--text-muted)',
        transition: 'background var(--dur-fast), color var(--dur-fast)'
      }
    }, o.tab);
  })), (() => {
    const o = d.toggle.find(x => x.key === h2view);
    return /*#__PURE__*/React.createElement(SimPanel, {
      video: true,
      src: o.src,
      solver: o.solver,
      title: o.title,
      live: true,
      height: 340,
      fit: "cover"
    });
  })(), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      lineHeight: 1.6
    }
  }, "Same free jet, two physical layers \u2014 concentration and the pressure field that drives it.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, d.panels.map((p, i) => /*#__PURE__*/React.createElement(SimPanel, {
    key: i,
    src: p.src,
    solver: p.solver,
    title: p.title,
    height: 210,
    fit: "cover"
  })))))));
}
window.Expertise = Expertise;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Expertise.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Navia marketing site — contact CTA + footer
const {
  Button: FBtn,
  Input: FInput
} = window.NaviaDesignSystem_aaaf32;
function Footer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-screen-label": "Contact",
    style: {
      background: 'var(--surface-card)',
      padding: 'var(--space-12) var(--space-7)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      fontWeight: 600
    }
  }, "Calculated safety for your product development"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      lineHeight: 1.12
    }
  }, "Making complex physics reliably calculable."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, "Tell us about the system you need to understand. We respond with a scoped analysis plan \u2014 meshing strategy, solver, and the physics we will resolve.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Name",
    placeholder: "Jane Engineer"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Organization",
    placeholder: "Company GmbH"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Work email",
    type: "email",
    placeholder: "jane@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Project domain",
    placeholder: "e.g. LH\u2082 tank boil-off, transonic compressor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(FBtn, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit"
  }, "Inquire about your project"))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--blue-950)',
      padding: 'var(--space-8) var(--space-7) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-7)',
      flexWrap: 'wrap',
      paddingBottom: 'var(--space-7)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/navia-logo-ondark.svg",
    height: "26",
    alt: "Navia"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(226,232,245,0.6)'
    }
  }, "A highly specialized engineering firm for the most demanding thermal, fluid-dynamic, and structural challenges.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(FootCol, {
    title: "Expertise",
    links: ['Structural (FEM)', 'Turbomachinery (CFD)', 'Hydrogen & Cryogenics', 'Thermal management']
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Sectors",
    links: ['Aerospace', 'Hydrogen technology', 'Oil & gas', 'High-end industry']
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Company",
    links: ['Approach', 'Structure', 'Contact']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 'var(--space-5)',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.06em',
      color: 'rgba(226,232,245,0.45)'
    }
  }, "\xA9 2025 Navia GmbH \xB7 A homage to the Navier\u2013Stokes equations"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.06em',
      color: 'rgba(226,232,245,0.45)'
    }
  }, "CFD \xB7 FEM \xB7 Multiphysics")))));
}
function FootCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(226,232,245,0.5)',
      fontWeight: 600,
      marginBottom: 'var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#expertise",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(226,232,245,0.75)',
      textDecoration: 'none'
    }
  }, l)))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Navia marketing site — sticky header / primary nav
const {
  Button: HdrButton
} = window.NaviaDesignSystem_aaaf32;
function Header({
  onNav,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'expertise',
    label: 'Expertise'
  }, {
    id: 'approach',
    label: 'Approach'
  }, {
    id: 'capabilities',
    label: 'Capabilities'
  }, {
    id: 'company',
    label: 'Company'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-sticky)',
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-7)',
      background: scrolled ? 'rgba(10,21,56,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      transition: 'background var(--dur-base), border-color var(--dur-base), backdrop-filter var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/navia-logo-ondark.svg",
    height: "26",
    alt: "Navia"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    },
    style: {
      padding: '8px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      textDecoration: 'none',
      color: active === l.id ? '#fff' : 'rgba(226,232,245,0.72)',
      borderRadius: 'var(--radius-sm)',
      transition: 'color var(--dur-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = active === l.id ? '#fff' : 'rgba(226,232,245,0.72)'
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(HdrButton, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('contact')
  }, "Inquire about your project"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Navia marketing site — hero (split: copy + framed live simulation)
const {
  Button: HeroButton,
  Badge: HeroBadge
} = window.NaviaDesignSystem_aaaf32;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - var(--header-h))',
      marginTop: 'calc(-1 * var(--header-h))',
      paddingTop: 'var(--header-h)',
      background: 'var(--grad-deep)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-mesh)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      maskImage: 'radial-gradient(120% 90% at 30% 40%, #000 30%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)'
    }
  }, "CFD \xB7 FEM \xB7 Multiphysics")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 'clamp(2.4rem, 4vw, var(--text-4xl))',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tighter)',
      lineHeight: 1.04
    }
  }, "Pioneering engineering for the technologies of tomorrow."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: '52ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(226,232,245,0.82)'
    }
  }, "We take your technologies to the next level. From fluid dynamics to cryogenics, we solve the most complex multiphysics challenges for the aerospace, hydrogen technology, and high-end industrial sectors."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(HeroButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact'),
    iconRight: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    }))
  }, "Inquire about your project"), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('expertise'),
    style: {
      background: 'rgba(255,255,255,0.06)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.18)'
    }
  }, "Discover our expertise")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-7)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(226,232,245,0.5)',
      letterSpacing: '0.02em'
    }
  }, "No colorful marketing graphics \u2014 just physical depth.")), /*#__PURE__*/React.createElement(HeroGallery, null)));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroGallery.jsx
try { (() => {
// Navia marketing site — hero media gallery (flip through all simulation videos)
const HERO_MEDIA = [{
  type: 'video',
  src: '../../assets/sim/h2-mole-fraction.mp4',
  solver: 'ANSYS Fluent',
  title: 'H\u2082 mole fraction',
  tag: 'CFD · Hydrogen',
  specs: [['Field', 'Mole fraction'], ['Species', 'H\u2082 in air'], ['Regime', 'Free jet']]
}, {
  type: 'video',
  src: '../../assets/sim/h2-absolute-pressure.mp4',
  solver: 'ANSYS Fluent',
  title: 'Absolute pressure field',
  tag: 'CFD · Hydrogen',
  specs: [['Field', 'Abs. pressure'], ['Feature', 'Shock diamonds'], ['Regime', 'Under-expanded']]
}, {
  type: 'video',
  src: '../../assets/sim/fea-modal-deformation.mp4',
  solver: 'ANSYS Mechanical',
  title: 'Modal · total deformation',
  tag: 'FEM · Modal',
  specs: [['Mode', '9'], ['Freq.', '814 Hz'], ['Type', 'Total deformation']]
}];
function HeroGallery() {
  const [i, setI] = React.useState(0);
  const n = HERO_MEDIA.length;
  const m = HERO_MEDIA[i];
  const go = d => setI(p => (p + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.45)',
      background: '#0d121a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.03)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(226,232,245,0.78)'
    }
  }, m.solver, " \xB7 ", m.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(226,232,245,0.5)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 7px'
    }
  }, m.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      background: '#cfd6e4'
    }
  }, m.type === 'video' ? /*#__PURE__*/React.createElement(BlobVideo, {
    key: m.src,
    src: m.src,
    height: 360,
    fit: "cover"
  }) : /*#__PURE__*/React.createElement("img", {
    key: m.src,
    src: m.src,
    alt: m.title,
    style: {
      display: 'block',
      width: '100%',
      height: 360,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: '#fff',
      background: 'rgba(13,18,26,0.62)',
      backdropFilter: 'blur(6px)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: '14px 16px',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, m.specs.map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(226,232,245,0.5)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: '#fff'
    }
  }, val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      padding: '0 12px 12px',
      overflowX: 'auto'
    }
  }, HERO_MEDIA.map((x, idx) => {
    const on = idx === i;
    return /*#__PURE__*/React.createElement("button", {
      key: x.src,
      onClick: () => setI(idx),
      title: x.title,
      style: {
        position: 'relative',
        flex: 'none',
        width: 52,
        height: 36,
        padding: 0,
        cursor: 'pointer',
        borderRadius: 'var(--radius-xs)',
        overflow: 'hidden',
        border: on ? '1.5px solid var(--blue-300)' : '1px solid rgba(255,255,255,0.12)',
        opacity: on ? 1 : 0.55,
        transition: 'opacity var(--dur-fast), border-color var(--dur-fast)',
        background: '#cfd6e4'
      }
    }, x.type === 'video' ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--grad-deep)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "6 3 20 12 6 21 6 3"
    }))) : /*#__PURE__*/React.createElement("img", {
      src: x.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  })));
}
function Arrow({
  dir,
  onClick
}) {
  const left = dir === 'left';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": left ? 'Previous' : 'Next',
    style: {
      position: 'absolute',
      top: '50%',
      [left ? 'left' : 'right']: 12,
      transform: 'translateY(-50%)',
      width: 38,
      height: 38,
      borderRadius: '50%',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'rgba(13,18,26,0.55)',
      backdropFilter: 'blur(8px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'background var(--dur-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(42,85,224,0.85)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(13,18,26,0.55)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, left ? /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }) : /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })));
}
window.HeroGallery = HeroGallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Intro.jsx
try { (() => {
// Navia marketing site — intro band + credibility stats
const {
  Metric
} = window.NaviaDesignSystem_aaaf32;
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--space-12) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      fontWeight: 600
    }
  }, "Excellence in simulation & engineering"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      maxWidth: '34ch',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.16,
      color: 'var(--text-strong)'
    }
  }, "Our work begins where standard solutions reach their limits."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      maxWidth: '64ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, "We provide high-precision numerical analyses (CFD & FEM) and a profound physical understanding of systems operating under extreme conditions. Whether it involves high-performance rotating machinery, complex thermal management, or multiphase processes \u2014 we make innovations predictable, safe, and efficient."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-9)',
      paddingTop: 'var(--space-7)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Engineering experience",
    value: "30",
    unit: "+ yrs"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Physics, coupled",
    value: "CFD",
    unit: "\xD7 FEM"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Solver fidelity",
    value: "High",
    unit: "-fi"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Delegated analyses",
    value: "0",
    unit: "%"
  }))));
}
window.Intro = Intro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SimPanel.jsx
try { (() => {
// Navia marketing site — framed simulation panel (image or video + caption)
const {
  Badge: SimBadge
} = window.NaviaDesignSystem_aaaf32;
function SimPanel({
  src,
  video = false,
  solver,
  title,
  live = false,
  height = 280,
  fit = 'cover'
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 13px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, solver, " \xB7 ", title), video ? /*#__PURE__*/React.createElement(SimBadge, {
    tone: "brand",
    size: "sm"
  }, "Animated") : /*#__PURE__*/React.createElement(SimBadge, {
    tone: "neutral",
    size: "sm"
  }, "ANSYS")), video ? /*#__PURE__*/React.createElement(BlobVideo, {
    src: src,
    height: height,
    fit: fit
  }) : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      display: 'block',
      width: '100%',
      height,
      objectFit: fit,
      background: '#cfd6e4'
    }
  }));
}
window.SimPanel = SimPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SimPanel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
