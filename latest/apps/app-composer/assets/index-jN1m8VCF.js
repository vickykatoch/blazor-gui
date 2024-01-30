import{R as yt,r as o,u as S,a as C,j as t,c as f}from"./index-ZtTNwF-m.js";const j=n=>(...a)=>[n,...a].join("-"),U=yt.useId;let wt=BigInt(0);function kt(n){const[a,e]=o.useState(n),l=n||a;return o.useEffect(()=>{a==null&&e(`salt-${++wt}`)},[a]),l}function Ft(n){if(U!==void 0){const a=U();return n??a}return kt(n)}function Tt(n,a){return o.createContext(a)}function It({controlled:n,default:a,name:e,state:l="value"}){const{current:r}=o.useRef(n!==void 0),[u,s]=o.useState(a),d=n!==void 0?n:u;o.useRef(a),o.useEffect(()=>{},[l,e,n]),o.useEffect(()=>{},[JSON.stringify(a,Bt)]);const v=o.useCallback(c=>{r||s(c)},[r]);return[d,v,r]}function Bt(n,a){return o.isValidElement(a)?null:a}var St=`/* Styles applied to the root element if variant="cta" */
.saltButton-cta {
  --button-background: var(--salt-actionable-cta-background);
  --button-background-active: var(--salt-actionable-cta-background-active);
  --button-background-disabled: var(--salt-actionable-cta-background-disabled);
  --button-background-hover: var(--salt-actionable-cta-background-hover);
  --button-text-color: var(--salt-actionable-cta-foreground);
  --button-text-color-active: var(--salt-actionable-cta-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-cta-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-cta-foreground-hover);
}

/* Styles applied to the root element if variant="primary" (or no variant specified) */
.saltButton-primary {
  --button-background: var(--salt-actionable-primary-background);
  --button-background-active: var(--salt-actionable-primary-background-active);
  --button-background-disabled: var(--salt-actionable-primary-background-disabled);
  --button-background-hover: var(--salt-actionable-primary-background-hover);
  --button-text-color: var(--salt-actionable-primary-foreground);
  --button-text-color-active: var(--salt-actionable-primary-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-primary-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-primary-foreground-hover);
}

/* Styles applied to the root element if variant="secondary" */
.saltButton-secondary {
  --button-background: var(--salt-actionable-secondary-background);
  --button-background-active: var(--salt-actionable-secondary-background-active);
  --button-background-disabled: var(--salt-actionable-secondary-background-disabled);
  --button-background-hover: var(--salt-actionable-secondary-background-hover);
  --button-text-color: var(--salt-actionable-secondary-foreground);
  --button-text-color-active: var(--salt-actionable-secondary-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-secondary-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-secondary-foreground-hover);
}

.saltButton {
  align-items: var(--saltButton-alignItems, center);
  appearance: none;
  background: var(--saltButton-background, var(--button-background));
  border-color: var(--saltButton-borderColor, transparent);
  border-style: var(--saltButton-borderStyle, solid);
  border-width: var(--saltButton-borderWidth, 0);
  border-radius: var(--saltButton-borderRadius, 0);
  color: var(--saltButton-text-color, var(--button-text-color));
  cursor: var(--saltButton-cursor, pointer);
  display: inline-flex;
  gap: var(--salt-spacing-50);
  justify-content: var(--saltButton-justifyContent, center);
  font-size: var(--saltButton-fontSize, var(--salt-text-fontSize));
  font-family: var(--saltButton-fontFamily, var(--salt-text-fontFamily));
  line-height: var(--saltButton-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--saltButton-letterSpacing, var(--salt-text-action-letterSpacing));
  text-transform: var(--saltButton-textTransform, var(--salt-text-action-textTransform));
  padding: 0 var(--saltButton-padding, var(--salt-size-unit));
  margin: var(--saltButton-margin, 0);
  height: var(--saltButton-height, var(--salt-size-base));
  min-width: var(--saltButton-minWidth, unset);
  position: relative;
  text-align: var(--saltButton-textAlign, var(--salt-text-action-textAlign));
  text-decoration: none;
  transition: none;
  width: var(--saltButton-width, auto);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  /* Styles applied to align children*/
  font-weight: var(--saltButton-fontWeight, var(--salt-text-action-fontWeight));
}

/* Pseudo-class applied to the root element on focus */
.saltButton:focus-visible {
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-color: var(--salt-focused-outlineColor);
  outline-offset: var(--salt-focused-outlineOffset);
  background: var(--saltButton-background-hover, var(--button-background-hover));
  color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
}

/* Pseudo-class applied to the root element on focus when Button is active */
.saltButton.saltButton-active:focus-visible,
.saltButton:focus-visible(:active) {
  background: var(--saltButton-background-active-hover, var(--button-background));
  color: var(--saltButton-text-color-active-hover, var(--button-text-color));
}

/* Pseudo-class applied to the root element on hover when Button is not active or disabled */
.saltButton:hover {
  background: var(--saltButton-background-hover, var(--button-background-hover));
  color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
}

/* Pseudo-class applied to the root element when Button is active and not disabled */
.saltButton:active,
.saltButton.saltButton-active {
  background: var(--saltButton-background-active, var(--button-background-active));
  color: var(--saltButton-text-color-active, var(--button-text-color-active));
}

/* Pseudo-class applied to the root element if disabled={true} */
.saltButton:disabled,
.saltButton-disabled,
  /* Overrides to apply the disabled style when the button is focusable while also disabled */
.saltButton-disabled:active,
.saltButton-disabled:focus-visible,
.saltButton-disabled:hover {
  background: var(--saltButton-background-disabled, var(--button-background-disabled));
  color: var(--saltButton-text-color-disabled, var(--button-text-color-disabled));
  cursor: var(--saltButton-cursor-disabled, var(--salt-actionable-cursor-disabled));
}

.saltButton[href] {
  display: inline-flex;
}
`;const Ct=({disabled:n,focusableWhenDisabled:a,onKeyUp:e,onKeyDown:l,onClick:r,onBlur:u})=>{const[s,d]=o.useState(""),[v,c]=o.useState(!1),b="Enter",h=" ";return o.useEffect(()=>{const i=setTimeout(()=>{s!==b&&s!==h&&c(!1)},0);return()=>{clearTimeout(i)}},[v,s]),{active:v,buttonProps:{"aria-disabled":n&&a?!0:void 0,disabled:n&&!a,tabIndex:n&&!a?-1:0,onBlur:i=>{c(!1),u==null||u(i)},onClick:n?void 0:i=>{c(!0),r==null||r(i)},onKeyDown:i=>{(i.key===b||i.key===h)&&(d(i.key),c(!0)),l==null||l(i)},onKeyUp:i=>{d(""),c(!1),e==null||e(i)}}}},N=j("saltButton"),L=o.forwardRef(function({children:a,className:e,disabled:l,focusableWhenDisabled:r,onKeyUp:u,onKeyDown:s,onBlur:d,onClick:v,type:c="button",variant:b="primary",...h},x){const{active:p,buttonProps:y}=Ct({disabled:l,focusableWhenDisabled:r,onKeyUp:u,onKeyDown:s,onBlur:d,onClick:v}),T=S();C({testId:"salt-button",css:St,window:T});const{tabIndex:R,...i}=y;return t.jsx("button",{...i,className:f(N(),N(b),{[N("disabled")]:l,[N("active")]:p},e),...h,ref:x,type:c,children:a})});function K(n){return n.length>0?n[0].toUpperCase()+n.slice(1):n}const Q=Tt("FormFieldContext",{});function Z(){return o.useContext(Q)||{}}var jt=`.saltFormField {
  display: inline-grid;
  position: relative;
  gap: var(--salt-spacing-100);
  text-align: left;
  width: var(--saltFormField-width, 100%);

  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
}

.saltFormField-labelTop {
  grid-template-areas:
    "label"
    "controls";
}

.saltFormField-labelTop .saltFormFieldHelperText {
  grid-area: 3 / 1;
}

.saltFormField-labelLeft {
  align-self: center;
  grid-template-columns: var(--formField-label-width, 40%) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelRight {
  align-self: center;
  grid-template-columns: var(--formField-label-width, 40%) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelLeft .saltFormFieldHelperText,
.saltFormField-labelRight .saltFormFieldHelperText {
  grid-area: 2 / 2;
}

.saltFormField-labelRight .saltFormFieldLabel,
.saltFormField-labelLeft .saltFormFieldLabel {
  padding-top: var(--salt-spacing-100);
}

.saltFormField-labelRight .saltFormFieldLabel {
  text-align: right;
}

.saltFormField-controls {
  align-items: center;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-column-gap: var(--salt-spacing-100);
}

.saltFormFieldLabel {
  grid-area: label;
}

.saltFormFieldHelperText {
  grid-area: helperText;
}

.saltFormField-disabled {
  --saltInput-outline: none;
  --saltCheckbox-outline: none;
  --saltRadioButton-outline: none;
}
`;const H=j("saltFormField"),w=o.forwardRef(({children:n,className:a,disabled:e=!1,id:l,labelPlacement:r="top",necessity:u,onBlur:s,onFocus:d,readOnly:v=!1,validationStatus:c,...b},h)=>{const x=S();C({testId:"salt-form-field",css:jt,window:x});const p=Ft(l),y=p?`label-${p}`:void 0,T=p?`helperText-${p}`:void 0;return t.jsx("div",{ref:h,className:f(H(),{[H("disabled")]:e,[H(`label${K(r)}`)]:r},a),...b,children:t.jsx(Q.Provider,{value:{a11yProps:{"aria-labelledby":y,"aria-describedby":T},disabled:e,necessity:u,readOnly:v,validationStatus:c},children:n})})});var zt=`/* Main css class. Style for body text */
.saltText {
  color: var(--saltText-color, var(--text-color));
  font-family: var(--saltText-fontFamily, var(--salt-text-fontFamily));
  font-size: var(--saltText-fontSize, var(--salt-text-fontSize));
  line-height: var(--saltText-lineHeight, var(--salt-text-lineHeight));
  font-weight: var(--saltText-fontWeight, var(--salt-text-fontWeight));
}

.saltText::selection {
  background: var(--saltText-highlight, var(--salt-content-foreground-highlight));
}

/* Allows truncation */
.saltText-lineClamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--text-max-rows, 0);
  overflow: hidden;
  word-break: break-word;
}

/* Primary variant */
.saltText-primary {
  --text-color: var(--salt-content-primary-foreground);
}

/* Disabled primary variant */
.saltText-primary.saltText-disabled {
  --text-color: var(--salt-content-primary-foreground-disabled);
}

/* Secondary variant */
.saltText-secondary {
  --text-color: var(--salt-content-secondary-foreground);
}

/* Disabled secondary variant */
.saltText-secondary.saltText-disabled {
  --text-color: var(--salt-content-secondary-foreground-disabled);
}

/* Body emphasis strong */
.saltText strong {
  font-weight: var(--salt-text-fontWeight-strong);
}

/* Body emphasis small */
.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-fontWeight-small);
}

/* Notation */
.saltText-notation.saltText {
  font-family: var(--salt-text-notation-fontFamily);
  font-size: var(--salt-text-notation-fontSize);
  line-height: var(--salt-text-notation-lineHeight);
  font-weight: var(--salt-text-fontWeight);
}

/* Notation emphasis strong */
.saltText-notation.saltText strong {
  font-weight: var(--salt-text-notation-fontWeight-strong);
}

/* Notation emphasis small */
.saltText-notation.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-notation-fontWeight-small);
}

/* Action */
.saltText-action.saltText {
  letter-spacing: var(--salt-text-action-letterSpacing);
  text-transform: var(--salt-text-action-textTransform);
  text-align: var(--salt-text-action-textAlign);
  font-weight: var(--salt-text-action-fontWeight);
}

/* Display 1 */
.saltText-display1.saltText {
  font-family: var(--salt-text-display1-fontFamily);
  font-size: var(--salt-text-display1-fontSize);
  font-weight: var(--salt-text-display1-fontWeight);
  line-height: var(--salt-text-display1-lineHeight);
}

/* Display 2 */
.saltText-display2.saltText {
  font-family: var(--salt-text-display2-fontFamily);
  font-size: var(--salt-text-display2-fontSize);
  font-weight: var(--salt-text-display2-fontWeight);
  line-height: var(--salt-text-display2-lineHeight);
}

/* Display 3 */
.saltText-display3.saltText {
  font-family: var(--salt-text-display3-fontFamily);
  font-size: var(--salt-text-display3-fontSize);
  font-weight: var(--salt-text-display3-fontWeight);
  line-height: var(--salt-text-display3-lineHeight);
}

/* Heading 1 */
h1.saltText,
.saltText-h1.saltText {
  font-family: var(--salt-text-h1-fontFamily);
  font-size: var(--salt-text-h1-fontSize);
  font-weight: var(--salt-text-h1-fontWeight);
  line-height: var(--salt-text-h1-lineHeight);
}

/* H1 emphasis strong */
h1.saltText strong,
.saltText-h1.saltText strong {
  font-weight: var(--salt-text-h1-fontWeight-strong);
}

/* H1 emphasis small */
h1.saltText small,
.saltText-h1.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h1-fontWeight-small);
}

/* Heading 2 */
h2.saltText,
.saltText-h2.saltText {
  font-family: var(--salt-text-h2-fontFamily);
  font-size: var(--salt-text-h2-fontSize);
  font-weight: var(--salt-text-h2-fontWeight);
  line-height: var(--salt-text-h2-lineHeight);
}

/* H2 emphasis strong */
h2.saltText strong,
.saltText-h2.saltText strong {
  font-weight: var(--salt-text-h2-fontWeight-strong);
}

/* H2 emphasis small */
h2.saltText small,
.saltText-h2.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h2-fontWeight-small);
}

/* Heading 3 */
h3.saltText,
.saltText-h3.saltText {
  font-family: var(--salt-text-h3-fontFamily);
  font-size: var(--salt-text-h3-fontSize);
  font-weight: var(--salt-text-h3-fontWeight);
  line-height: var(--salt-text-h3-lineHeight);
}

/* H3 emphasis strong */
h3.saltText strong,
.saltText-h3.saltText strong {
  font-weight: var(--salt-text-h3-fontWeight-strong);
}

/* H3 emphasis small */
h3.saltText small,
.saltText-h3.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h3-fontWeight-small);
}

/* Heading 4 */
h4.saltText,
.saltText-h4.saltText {
  font-family: var(--salt-text-h4-fontFamily);
  font-size: var(--salt-text-h4-fontSize);
  font-weight: var(--salt-text-h4-fontWeight);
  line-height: var(--salt-text-h4-lineHeight);
}

/* H4 emphasis strong */
h4.saltText strong,
.saltText-h4.saltText strong {
  font-weight: var(--salt-text-h4-fontWeight-strong);
}

/* H4 emphasis small */
h4.saltText small,
.saltText-h4.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h4-fontWeight-small);
}

/* Label */
label.saltText,
.saltText-label.saltText {
  font-family: var(--salt-text-label-fontFamily);
  font-size: var(--salt-text-label-fontSize);
  line-height: var(--salt-text-label-lineHeight);
  font-weight: var(--salt-text-fontWeight);
}

/* Label emphasis strong */
label.saltText strong,
.saltText-label.saltText strong {
  font-weight: var(--salt-text-label-fontWeight-strong);
}

/* Label emphasis small */
label.saltText small,
.saltText-label.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-fontWeight-small);
}
`;const z=j("saltText"),Wt=o.forwardRef(({as:n,children:a,className:e,disabled:l=!1,maxRows:r,style:u,styleAs:s,variant:d="primary",...v},c)=>{const b=S();C({testId:"salt-text",css:zt,window:b});const h=n||"div",x={"--text-max-rows":r,...u};return t.jsx(h,{className:f(z(),{[z("disabled")]:l,[z("lineClamp")]:r,[z(s||"")]:s,[z(d)]:d},e),...v,ref:c,style:x,children:a})}),At=o.forwardRef(function({children:a,...e},l){return t.jsx(Wt,{as:"label",ref:l,...e,children:a})});var Nt=`.saltFormFieldLabel.saltText {
  font-weight: var(--saltFormField-label-fontWeight, var(--salt-text-fontWeight-strong));
  width: 100%;
}

.saltFormFieldLabel:hover + .saltFormField-controls * {
  --input-borderColor: var(--input-borderColor-hover);
}

.saltFormField-labelLeft .saltFormFieldLabel.saltText {
  align-self: baseline;
  padding-top: var(--salt-spacing-100);
}

.saltFormFieldLabel-necessityLabel {
  font-weight: var(--salt-text-fontWeight);
  font-style: var(--salt-editable-help-fontStyle);
}

.saltFormFieldLabel-sentence.saltText {
  color: var(--salt-content-primary-foreground);
  font-size: var(--salt-text-fontSize);
}
`;const E=j("saltFormFieldLabel"),k=({className:n,children:a,intent:e="label",...l})=>{const{a11yProps:r,disabled:u,necessity:s}=Z(),d=S();C({testId:"salt-form-field-label",css:Nt,window:d});const v=s?s==="asterisk"?" *":` (${K(s)})`:void 0;return t.jsxs(At,{as:"label",className:f(E(),E(e),n),id:r==null?void 0:r["aria-labelledby"],disabled:u,variant:"secondary",...l,children:[a,v&&t.jsx("span",{className:E("necessityLabel"),children:v})]})},Lt=o.forwardRef(function({children:a,className:e,...l},r){return t.jsx("svg",{className:e,...l,role:"img",ref:r,viewBox:"0 0 8 8",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"})})}),Rt=o.forwardRef(function({children:a,className:e,...l},r){return t.jsx("svg",{className:e,...l,role:"img",viewBox:"0 0 10 8",ref:r,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.92089 5.95735L8.96399 0L10 1.02133L2.92088 8L0 5.1205L1.03602 4.09918L2.92089 5.95735Z"})})}),Ht=o.forwardRef(function({children:a,className:e,...l},r){return t.jsx("svg",{className:e,...l,role:"img",viewBox:"0 0 9 8",ref:r,children:t.jsx("path",{d:"M0 8L4.5 0L9 8H0Z"})})});var Et=`.saltStatusAdornment {
  align-self: center;
  display: inline-block;
  fill: var(--saltStatusAdornment-color, var(--statusAdornment-color));
  height: var(--salt-size-adornment);
  min-height: var(--salt-size-adornment);
  padding-left: var(--salt-spacing-100);
  position: relative;
}

.saltStatusAdornment-error {
  --statusAdornment-color: var(--salt-status-error-foreground);
}

.saltStatusAdornment-warning {
  --statusAdornment-color: var(--salt-status-warning-foreground);
}

.saltStatusAdornment-success {
  --statusAdornment-color: var(--salt-status-success-foreground);
}
`;const _t={error:Lt,warning:Ht,success:Rt},Dt={error:"error",warning:"warning",success:"success"},V=j("saltStatusAdornment"),Ot=o.forwardRef(function({className:a,status:e,...l},r){const u=_t[e],s=Dt[e],d=S();return C({testId:"salt-status-adornment",css:Et,window:d}),t.jsx(u,{className:f(V(),V(e),a),"aria-label":s,...l,ref:r})});var $t=`/* Style applied to the root element */
.saltInput {
  --input-borderColor: var(--salt-editable-borderColor);
  --input-borderStyle: var(--salt-editable-borderStyle);
  --input-outlineColor: var(--salt-focused-outlineColor);
  --input-borderWidth: var(--salt-size-border);

  align-items: center;
  background: var(--saltInput-background, var(--input-background));
  color: var(--saltInput-color, var(--salt-content-primary-foreground));
  display: inline-flex;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltInput-fontSize, var(--salt-text-fontSize));
  height: var(--saltInput-height, var(--salt-size-base));
  line-height: var(--saltInput-lineHeight, var(--salt-text-lineHeight));
  min-height: var(--saltInput-minHeight, var(--salt-size-base));
  min-width: var(--saltInput-minWidth, 4em);
  padding-left: var(--saltInput-paddingLeft, var(--salt-spacing-100));
  padding-right: var(--saltInput-paddingRight, var(--salt-spacing-100));
  position: relative;
  width: 100%;
}

.saltInput:hover {
  --input-borderStyle: var(--salt-editable-borderStyle-hover);
  --input-borderColor: var(--salt-editable-borderColor-hover);

  background: var(--saltInput-background-hover, var(--input-background-hover));
  cursor: var(--salt-editable-cursor-hover);
}

.saltInput:active {
  --input-borderColor: var(--salt-editable-borderColor-active);
  --input-borderStyle: var(--salt-editable-borderStyle-active);
  --input-borderWidth: var(--salt-editable-borderWidth-active);

  background: var(--saltInput-background-active, var(--input-background-active));
  cursor: var(--salt-editable-cursor-active);
}

/* Class applied if \`variant="primary"\` */
.saltInput-primary {
  --input-background: var(--salt-editable-primary-background);
  --input-background-active: var(--salt-editable-primary-background-active);
  --input-background-hover: var(--salt-editable-primary-background-hover);
  --input-background-disabled: var(--salt-editable-primary-background-disabled);
  --input-background-readonly: var(--salt-editable-primary-background-readonly);
}

/* Class applied if \`variant="secondary"\` */
.saltInput-secondary {
  --input-background: var(--salt-editable-secondary-background);
  --input-background-active: var(--salt-editable-secondary-background-active);
  --input-background-hover: var(--salt-editable-secondary-background-active);
  --input-background-disabled: var(--salt-editable-secondary-background-disabled);
  --input-background-readonly: var(--salt-editable-secondary-background-readonly);
}

/* Style applied to input if \`validationState="error"\` */
.saltInput-error,
.saltInput-error:hover {
  --input-background: var(--salt-status-error-background);
  --input-background-active: var(--salt-status-error-background);
  --input-background-hover: var(--salt-status-error-background);
  --input-borderColor: var(--salt-status-error-borderColor);
  --input-outlineColor: var(--salt-status-error-borderColor);
}

/* Style applied to input if \`validationState="warning"\` */
.saltInput-warning,
.saltInput-warning:hover {
  --input-background: var(--salt-status-warning-background);
  --input-background-active: var(--salt-status-warning-background);
  --input-background-hover: var(--salt-status-warning-background);
  --input-borderColor: var(--salt-status-warning-borderColor);
  --input-outlineColor: var(--salt-status-warning-borderColor);
}

/* Style applied to input if \`validationState="success"\` */
.saltInput-success,
.saltInput-success:hover {
  --input-background: var(--salt-status-success-background);
  --input-background-active: var(--salt-status-success-background);
  --input-background-hover: var(--salt-status-success-background);
  --input-borderColor: var(--salt-status-success-borderColor);
  --input-outlineColor: var(--salt-status-success-borderColor);
}

/* Style applied to inner input component */
.saltInput-input {
  background: none;
  border: none;
  box-sizing: content-box;
  color: inherit;
  cursor: inherit;
  display: block;
  flex: 1;
  font: inherit;
  height: 100%;
  letter-spacing: var(--saltInput-letterSpacing, 0);
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-align: var(--input-textAlign);
  width: 100%;
}

/* Reset in the  class */
.saltInput-input:focus {
  outline: none;
}

/* Style applied to selected input */
.saltInput-input::selection {
  background: var(--salt-content-foreground-highlight);
}

/* Style applied to placeholder text */
.saltInput-input::placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-small);
}

/* Styling when focused */
.saltInput-focused {
  --input-borderColor: var(--input-outlineColor);
  --input-borderWidth: var(--salt-editable-borderWidth-active);

  outline: var(--saltInput-outline, var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--input-outlineColor));
}

/* Style applied if \`readOnly={true}\` */
.saltInput.saltInput-readOnly {
  --input-borderColor: var(--salt-editable-borderColor-readonly);
  --input-borderStyle: var(--salt-editable-borderStyle-readonly);
  --input-borderWidth: var(--salt-size-border);

  background: var(--input-background-readonly);
  cursor: var(--salt-editable-cursor-readonly);
}

/* Styling when focused if \`disabled={true}\` */
.saltInput-focused.saltInput-disabled {
  --input-borderWidth: var(--salt-size-border);
  outline: none;
}

/* Styling when focused if \`readOnly={true}\` */
.saltInput-focused.saltInput-readOnly {
  --input-borderWidth: var(--salt-size-border);
}

/* Style applied to selected input if \`disabled={true}\` */
.saltInput-disabled .saltInput-input::selection {
  background: none;
}

/* Style applied to input if \`disabled={true}\` */
.saltInput.saltInput-disabled,
.saltInput.saltInput-disabled:hover,
.saltInput.saltInput-disabled:active {
  --input-borderColor: var(--salt-editable-borderColor-disabled);
  --input-borderStyle: var(--salt-editable-borderStyle-disabled);
  --input-borderWidth: var(--salt-size-border);

  background: var(--input-background-disabled);
  cursor: var(--salt-editable-cursor-disabled);
  color: var(--saltInput-color-disabled, var(--salt-content-primary-foreground-disabled));
}

.saltInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--input-borderWidth) var(--input-borderStyle) var(--input-borderColor);
}

/* Style applied to start adornments */
.saltInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-right: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to end adornments */
.saltInput-endAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-left: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

.saltInput-readOnly .saltInput-startAdornmentContainer {
  margin-left: var(--salt-spacing-50);
}

.saltInput-startAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}
.saltInput-endAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltInput-startAdornmentContainer .saltButton:first-child {
  margin-left: calc(var(--salt-spacing-50) * -1);
}
.saltInput-endAdornmentContainer .saltButton:last-child {
  margin-right: calc(var(--salt-spacing-50) * -1);
}

.saltInput-startAdornmentContainer > .saltButton,
.saltInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: var(--salt-spacing-50);
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
}
`;const g=j("saltInput"),F=o.forwardRef(function({"aria-activedescendant":a,"aria-expanded":e,"aria-owns":l,className:r,disabled:u,emptyReadOnlyMarker:s="—",endAdornment:d,id:v,inputProps:c={},inputRef:b,placeholder:h,readOnly:x,role:p,startAdornment:y,style:T,textAlign:R="left",value:i,defaultValue:_=i===void 0?"":void 0,validationStatus:J,variant:Y="primary",...G},X){const tt=S();C({testId:"salt-input",css:$t,window:tt});const{a11yProps:{"aria-describedby":nt,"aria-labelledby":at}={},disabled:et,readOnly:lt,necessity:D,validationStatus:O}=Z(),rt={"aria-activedescendant":a,"aria-expanded":e,"aria-owns":l},I=u||et,W=x||lt,A=O??J,[ot,$]=o.useState(!1),st=W&&!_&&!i?s:_,{"aria-describedby":it,"aria-labelledby":dt,onBlur:P,onChange:q,onFocus:M,required:ct,...ut}=c,vt=D?["required","asterisk"].includes(D):ct,[bt,ht]=It({controlled:i,default:st,name:"Input",state:"value"}),gt=B=>{const mt=B.target.value;ht(mt),q==null||q(B)},pt=B=>{P==null||P(B),$(!1)},ft=B=>{M==null||M(B),$(!0)},xt={"--input-textAlign":R,...T};return t.jsxs("div",{className:f(g(),g(Y),{[g("focused")]:!I&&ot,[g("disabled")]:I,[g("readOnly")]:W,[g(A||"")]:A},r),ref:X,style:xt,...G,children:[y&&t.jsx("div",{className:g("startAdornmentContainer"),children:y}),t.jsx("input",{"aria-describedby":f(nt,it),"aria-labelledby":f(at,dt),className:f(g("input"),c==null?void 0:c.className),disabled:I,id:v,readOnly:W,ref:b,role:p,tabIndex:I?-1:0,onBlur:pt,onChange:gt,onFocus:I?void 0:ft,placeholder:h,value:bt,...rt,...ut,required:vt}),!I&&!W&&A&&t.jsx(Ot,{status:A}),d&&t.jsx("div",{className:g("endAdornmentContainer"),children:d}),t.jsx("div",{className:g("activationIndicator")})]})});function Pt(n,a){switch(a.type){case"update":default:return n}}const qt=()=>({busy:!0,ampsConfigs:[]}),Mt=o.createContext({}),Ut=({children:n})=>{const[a,e]=o.useReducer(Pt,qt());return t.jsx(Mt.Provider,{value:{...a,dispatch:e},children:n})};function Vt(n){return a=>t.jsx(Ut,{children:t.jsx(n,{...a})})}const Kt=[{key:"sow",value:"Query"},{key:"subscribe",value:"Subscribe"},{key:"sow_and_subscribe",value:"Sow and Subscribe"},{key:"sow_and_delta_subscribe",value:"Sow and Delta Subscribe"}],m=60,Qt=({queryConfig:n,onExec:a,onReset:e})=>t.jsxs("div",{className:"d-flex flex-column",children:[t.jsxs("div",{className:"d-flex flex-shrink-0 p-2 panel",children:[t.jsx("div",{className:"flex-grow-1",children:"Query Builder"}),t.jsx("div",{className:"flex-shrink-0",children:"Toggle"})]}),t.jsxs("div",{className:"d-flex flex-shrink-0 flex-column m-2 p-2 bdr panel-2",children:[t.jsxs("div",{className:"d-flex flex-shrink-0 mb-2",children:[t.jsx("div",{className:"d-flex flex-grow-1 align-items-center me-4",children:t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Amps"}),t.jsx("select",{style:{width:200},children:Kt.map(l=>t.jsx("option",{value:l.key,children:l.value},l.key))}),t.jsx(F,{endAdornment:t.jsx(L,{children:"..."})})]})}),t.jsx("div",{className:"d-flex flex-shrink-0 align-items-center",children:t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:30},children:"Limit"}),t.jsx(F,{style:{width:m}})]})})]}),t.jsx("div",{className:"d-flex flex-shrink-0 mb-2",children:t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Topic"}),t.jsx("select",{style:{width:m,marginRight:1}}),t.jsx(F,{})]})}),t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Filter"}),t.jsx(F,{})]}),t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Options"}),t.jsx(F,{})]}),t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Order By"}),t.jsx(F,{})]}),t.jsxs("div",{className:"flex-shrink-0 d-flex justify-content-end mt-3 bdr-t pt-2",children:[t.jsx("div",{className:"flex-grow-1",children:t.jsxs(w,{children:[t.jsx(k,{className:"form-field-label-horiz",style:{width:m},children:"Name"}),t.jsx(F,{style:{width:300},endAdornment:t.jsx(L,{children:"Save"})})]})}),t.jsx(L,{onClick:a,className:"mx-2",children:"Execute"}),t.jsx(L,{onClick:e,children:"Reset"})]})]})]}),Zt={name:"test",connection:{name:"test",url:"ws://localhost:9007/amps/json"},method:"sow_and_subscribe",topic:{type:"json",name:"/test/unit-test"}},Jt=n=>t.jsxs("div",{className:"d-flex flex-grow-1 flex-column",children:[t.jsx(Qt,{onExec:()=>{},onReset:()=>{},queryConfig:Zt}),t.jsx("div",{className:"d-flex flex-grow-1 flex-column"})]}),Xt=Vt(Jt);export{Xt as default};
