import{R as Ct,r,u as S,a as F,j as t,c as p}from"./index-tZpAwtD2.js";const C=n=>(...a)=>[n,...a].join("-"),dt=Ct.useId;let Rt=BigInt(0);function Tt(n){const[a,e]=r.useState(n),o=n||a;return r.useEffect(()=>{a==null&&e(`salt-${++Rt}`)},[a]),o}function vt(n){if(dt!==void 0){const a=dt();return n??a}return Tt(n)}function bt(n,a){return r.createContext(a)}function lt({controlled:n,default:a,name:e,state:o="value"}){const{current:l}=r.useRef(n!==void 0),[s,i]=r.useState(a),d=n!==void 0?n:s;r.useRef(a),r.useEffect(()=>{},[o,e,n]),r.useEffect(()=>{},[JSON.stringify(a,zt)]);const v=r.useCallback(u=>{l||i(u)},[l]);return[d,v,l]}function zt(n,a){return r.isValidElement(a)?null:a}var jt=`/* Styles applied to the root element if variant="cta" */
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
`;const Wt=({disabled:n,focusableWhenDisabled:a,onKeyUp:e,onKeyDown:o,onClick:l,onBlur:s})=>{const[i,d]=r.useState(""),[v,u]=r.useState(!1),h="Enter",g=" ";return r.useEffect(()=>{const c=setTimeout(()=>{i!==h&&i!==g&&u(!1)},0);return()=>{clearTimeout(c)}},[v,i]),{active:v,buttonProps:{"aria-disabled":n&&a?!0:void 0,disabled:n&&!a,tabIndex:n&&!a?-1:0,onBlur:c=>{u(!1),s==null||s(c)},onClick:n?void 0:c=>{u(!0),l==null||l(c)},onKeyDown:c=>{(c.key===h||c.key===g)&&(d(c.key),u(!0)),o==null||o(c)},onKeyUp:c=>{d(""),u(!1),e==null||e(c)}}}},Y=C("saltButton"),ct=r.forwardRef(function({children:a,className:e,disabled:o,focusableWhenDisabled:l,onKeyUp:s,onKeyDown:i,onBlur:d,onClick:v,type:u="button",variant:h="primary",...g},f){const{active:m,buttonProps:x}=Wt({disabled:o,focusableWhenDisabled:l,onKeyUp:s,onKeyDown:i,onBlur:d,onClick:v}),w=S();F({testId:"salt-button",css:jt,window:w});const{tabIndex:k,...c}=x;return t.jsx("button",{...c,className:p(Y(),Y(h),{[Y("disabled")]:o,[Y("active")]:m},e),...g,ref:f,type:u,children:a})});function pt(n){return n.length>0?n[0].toUpperCase()+n.slice(1):n}const gt=bt("FormFieldContext",{});function X(){return r.useContext(gt)||{}}var Nt=`.saltFormField {
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
`;const at=C("saltFormField"),W=r.forwardRef(({children:n,className:a,disabled:e=!1,id:o,labelPlacement:l="top",necessity:s,onBlur:i,onFocus:d,readOnly:v=!1,validationStatus:u,...h},g)=>{const f=S();F({testId:"salt-form-field",css:Nt,window:f});const m=vt(o),x=m?`label-${m}`:void 0,w=m?`helperText-${m}`:void 0;return t.jsx("div",{ref:g,className:p(at(),{[at("disabled")]:e,[at(`label${pt(l)}`)]:l},a),...h,children:t.jsx(gt.Provider,{value:{a11yProps:{"aria-labelledby":x,"aria-describedby":w},disabled:e,necessity:s,readOnly:v,validationStatus:u},children:n})})});var At=`/* Main css class. Style for body text */
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
`;const K=C("saltText"),Lt=r.forwardRef(({as:n,children:a,className:e,disabled:o=!1,maxRows:l,style:s,styleAs:i,variant:d="primary",...v},u)=>{const h=S();F({testId:"salt-text",css:At,window:h});const g=n||"div",f={"--text-max-rows":l,...s};return t.jsx(g,{className:p(K(),{[K("disabled")]:o,[K("lineClamp")]:l,[K(i||"")]:i,[K(d)]:d},e),...v,ref:u,style:f,children:a})}),Pt=r.forwardRef(function({children:a,...e},o){return t.jsx(Lt,{as:"label",ref:o,...e,children:a})});var Ht=`.saltFormFieldLabel.saltText {
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
`;const et=C("saltFormFieldLabel"),N=({className:n,children:a,intent:e="label",...o})=>{const{a11yProps:l,disabled:s,necessity:i}=X(),d=S();F({testId:"salt-form-field-label",css:Ht,window:d});const v=i?i==="asterisk"?" *":` (${pt(i)})`:void 0;return t.jsxs(Pt,{as:"label",className:p(et(),et(e),n),id:l==null?void 0:l["aria-labelledby"],disabled:s,variant:"secondary",...o,children:[a,v&&t.jsx("span",{className:et("necessityLabel"),children:v})]})},Ot=r.forwardRef(function({children:a,className:e,...o},l){return t.jsx("svg",{className:e,...o,role:"img",ref:l,viewBox:"0 0 8 8",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"})})}),$t=r.forwardRef(function({children:a,className:e,...o},l){return t.jsx("svg",{className:e,...o,role:"img",viewBox:"0 0 10 8",ref:l,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.92089 5.95735L8.96399 0L10 1.02133L2.92088 8L0 5.1205L1.03602 4.09918L2.92089 5.95735Z"})})}),_t=r.forwardRef(function({children:a,className:e,...o},l){return t.jsx("svg",{className:e,...o,role:"img",viewBox:"0 0 9 8",ref:l,children:t.jsx("path",{d:"M0 8L4.5 0L9 8H0Z"})})});var Dt=`.saltStatusAdornment {
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
`;const Et={error:Ot,warning:_t,success:$t},Gt={error:"error",warning:"warning",success:"success"},ut=C("saltStatusAdornment"),Mt=r.forwardRef(function({className:a,status:e,...o},l){const s=Et[e],i=Gt[e],d=S();return F({testId:"salt-status-adornment",css:Dt,window:d}),t.jsx(s,{className:p(ut(),ut(e),a),"aria-label":i,...o,ref:l})});var Vt=`/* Style applied to the root element */
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
`;const B=C("saltInput"),$=r.forwardRef(function({"aria-activedescendant":a,"aria-expanded":e,"aria-owns":o,className:l,disabled:s,emptyReadOnlyMarker:i="—",endAdornment:d,id:v,inputProps:u={},inputRef:h,placeholder:g,readOnly:f,role:m,startAdornment:x,style:w,textAlign:k="left",value:c,defaultValue:I=c===void 0?"":void 0,validationStatus:E,variant:R="primary",...A},G){const M=S();F({testId:"salt-input",css:Vt,window:M});const{a11yProps:{"aria-describedby":b,"aria-labelledby":V}={},disabled:q,readOnly:U,necessity:z,validationStatus:j}=X(),L={"aria-activedescendant":a,"aria-expanded":e,"aria-owns":o},y=s||q,T=f||U,P=j??E,[tt,Z]=r.useState(!1),nt=T&&!I&&!c?i:I,{"aria-describedby":H,"aria-labelledby":Q,onBlur:J,onChange:st,onFocus:it,required:ft,...mt}=u,xt=z?["required","asterisk"].includes(z):ft,[yt,wt]=lt({controlled:c,default:nt,name:"Input",state:"value"}),Bt=O=>{const Ft=O.target.value;wt(Ft),st==null||st(O)},kt=O=>{J==null||J(O),Z(!1)},It=O=>{it==null||it(O),Z(!0)},St={"--input-textAlign":k,...w};return t.jsxs("div",{className:p(B(),B(R),{[B("focused")]:!y&&tt,[B("disabled")]:y,[B("readOnly")]:T,[B(P||"")]:P},l),ref:G,style:St,...A,children:[x&&t.jsx("div",{className:B("startAdornmentContainer"),children:x}),t.jsx("input",{"aria-describedby":p(b,H),"aria-labelledby":p(V,Q),className:p(B("input"),u==null?void 0:u.className),disabled:y,id:v,readOnly:T,ref:h,role:m,tabIndex:y?-1:0,onBlur:kt,onChange:Bt,onFocus:y?void 0:It,placeholder:g,value:yt,...L,...mt,required:xt}),!y&&!T&&P&&t.jsx(Mt,{status:P}),d&&t.jsx("div",{className:B("endAdornmentContainer"),children:d}),t.jsx("div",{className:B("activationIndicator")})]})}),ht=bt("RadioGroupContext",void 0);function qt(){return r.useContext(ht)}var Ut=`/* Styles applied to radio button icon */
.saltRadioButtonIcon {
  --radioButton-size: var(--salt-size-selectable);
  width: var(--radioButton-size);
  height: var(--radioButton-size);
  min-width: var(--radioButton-size);
  min-height: var(--radioButton-size);
  border-radius: 50%;

  border: var(--salt-size-border) var(--salt-selectable-borderStyle) var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
  background: var(--salt-container-primary-background);
  --saltIcon-size: 100%;
  display: flex;
}

.saltRadioButton:hover .saltRadioButtonIcon {
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltRadioButtonIcon-checked,
.saltRadioButton:hover .saltRadioButtonIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltRadioButtonIcon-disabled,
.saltRadioButton:hover .saltRadioButtonIcon-disabled {
  border-color: var(--salt-selectable-borderColor-disabled);
  background: var(--salt-container-primary-background-disabled);
  color: var(--salt-selectable-foreground-disabled);
}

.saltRadioButtonIcon-checked.saltRadioButtonIcon-disabled,
.saltRadioButton:hover .saltRadioButtonIcon-checked.saltRadioButtonIcon-disabled {
  border-color: var(--salt-selectable-borderColor-selectedDisabled);
  color: var(--salt-selectable-foreground-selectedDisabled);
}

.saltRadioButtonIcon-error,
.saltRadioButton:hover .saltRadioButtonIcon-error {
  color: var(--salt-status-error-foreground);
  border-color: var(--salt-status-error-borderColor);
  outline-color: var(--salt-status-error-foreground);
}

.saltRadioButtonIcon-warning,
.saltRadioButton:hover .saltRadioButtonIcon-warning {
  color: var(--salt-status-warning-foreground);
  border-color: var(--salt-status-warning-borderColor);
  outline-color: var(--salt-status-warning-foreground);
}

.saltRadioButtonIcon-readOnly,
.saltRadioButton:hover .saltRadioButtonIcon-readOnly {
  border-color: var(--salt-selectable-borderColor-readonly);
  color: var(--salt-content-primary-foreground);
}
`;const _=C("saltRadioButtonIcon"),Zt=({checked:n,className:a,error:e,disabled:o,validationStatus:l,readOnly:s,...i})=>{const d=S();return F({testId:"salt-radio-button-icon",css:Ut,window:d}),t.jsxs("div",{"aria-hidden":"true",className:p(_(),{[_("checked")]:n,[_("error")]:e,[_("disabled")]:o,[_(l||"")]:l,[_("readOnly")]:s},a),...i,children:[n&&!s&&t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",clipRule:"evenodd"})}),n&&s&&t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 12 12",children:t.jsx("path",{fill:"#161616",d:"M9.5 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"})})]})};var Kt=`/* Styles applied to RadioButton container */
.saltRadioButton {
  display: flex;
  gap: var(--salt-spacing-100);
  cursor: var(--salt-selectable-cursor-hover);
  position: relative;

  font-size: var(--salt-text-fontSize);
  line-height: var(--salt-text-lineHeight);
  font-family: var(--salt-text-fontFamily);
  font-weight: var(--salt-text-fontWeight);

  --radioButton-icon-marginTop: calc((var(--salt-text-lineHeight) - var(--salt-size-selectable)) / 2);
}

/* Styles applied when RadioButton is disabled */
.saltRadioButton-disabled {
  color: var(--salt-content-primary-foreground-disabled);
  cursor: var(--salt-selectable-cursor-disabled);
}

/* Styles applied to root component if \`readOnly={true}\` */
.saltRadioButton-readOnly {
  color: var(--salt-content-primary-foreground);
  cursor: var(--salt-selectable-cursor-readonly);
}

/* Styles applied to input component */
.saltRadioButton-input {
  cursor: inherit;
  position: absolute;
  height: var(--salt-size-selectable);
  opacity: 0;
  margin: var(--radioButton-icon-marginTop) 0 0 0;
  padding: 0;
  width: var(--salt-size-selectable);
  z-index: var(--salt-zIndex-default);
}

.saltRadioButtonIcon {
  margin-top: var(--radioButton-icon-marginTop);
}

.saltRadioButtonIcon > svg {
  /* ensures svg is centered in all browsers */
  transform: translate(0px, 0px);
}

/* Styles applied to icon when :focus-visible */
.saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline: var(--saltRadioButton-outline, var(--salt-focused-outline));
  outline-offset: var(--salt-focused-outlineOffset);
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltRadioButton-input:focus-visible + .saltRadioButtonIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltRadioButton-error .saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline-color: var(--salt-status-error-foreground);
  border-color: var(--salt-status-error-foreground);
  color: var(--salt-status-error-foreground);
}

.saltRadioButton-warning .saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline-color: var(--salt-status-warning-foreground);
  border-color: var(--salt-status-warning-foreground);
  color: var(--salt-status-warning-foreground);
}
`;const D=C("saltRadioButton"),Qt=r.forwardRef(function(a,e){var o,l;const{checked:s,className:i,disabled:d,error:v,inputProps:u={},label:h,name:g,onFocus:f,onBlur:m,onChange:x,readOnly:w,value:k,validationStatus:c,...I}=a,E=S();F({testId:"salt-radio-button",css:Kt,window:E});const{a11yProps:R,disabled:A,readOnly:G,validationStatus:M}=X(),b=qt(),{"aria-describedby":V,"aria-labelledby":q,className:U,onChange:z,...j}=u,L=(b==null?void 0:b.disabled)||A||d,y=(b==null?void 0:b.readOnly)||G||w,T=L?void 0:(l=(o=b==null?void 0:b.validationStatus)!=null?o:M)!=null?l:c,P=(b==null?void 0:b.value)!=null&&k!=null?b.value===k:s,tt=g??(b==null?void 0:b.name),[Z,rt]=lt({controlled:P,default:!!s,name:"RadioBase",state:"checked"}),nt=H=>{var Q;if(y)return;const J=H.target.checked;rt(J),x==null||x(H),z==null||z(H),(Q=b==null?void 0:b.onChange)==null||Q.call(b,H)};return t.jsxs("label",{className:p(D(),{[D("disabled")]:L,[D("readOnly")]:y,[D("error")]:v,[D(T||"")]:T},i),ref:e,...I,children:[t.jsx("input",{"aria-describedby":p(b==null?R==null?void 0:R["aria-describedby"]:void 0,V)||void 0,"aria-labelledby":p(b==null?R==null?void 0:R["aria-labelledby"]:void 0,q)||void 0,className:p(D("input"),U),checked:Z,disabled:L,readOnly:y,name:tt,value:k,onBlur:m,onChange:nt,onFocus:f,type:"radio",...j}),t.jsx(Zt,{checked:Z,disabled:L,readOnly:y,validationStatus:T,error:v}),h]})});var Jt=`/* Styles applied to root element */
.saltRadioButtonGroup {
  border: none;
  margin: 0;
  padding: 0;
}

/* Styles applied when direction is vertical */
.saltRadioButtonGroup-vertical {
  display: flex;
  gap: var(--salt-spacing-100);
  flex-direction: column;
}

/* Styles applied when direction is horizontal */
.saltRadioButtonGroup-horizontal {
  display: flex;
  gap: var(--salt-spacing-200);
  flex-direction: row;
  flex-wrap: wrap;
}

.saltRadioButtonGroup-noWrap {
  flex-wrap: nowrap;
}
.saltRadioButtonGroup-noWrap .saltRadioButton {
  white-space: break-spaces;
}

/* Styles applied when radio button group is inside a form field with label left or right */
.saltFormField-labelLeft .saltRadioButtonGroup,
.saltFormField-labelRight .saltRadioButtonGroup {
  padding-top: var(--salt-spacing-100);
}
`;const ot=C("saltRadioButtonGroup"),Yt=r.forwardRef(function(a,e){const{"aria-labelledby":o,"aria-describedby":l,children:s,className:i,defaultValue:d,direction:v="vertical",disabled:u,wrap:h=!0,name:g,onChange:f,readOnly:m,value:x,validationStatus:w,...k}=a,c=S();F({testId:"salt-radio-button-group",css:Jt,window:c});const{a11yProps:I,disabled:E,readOnly:R,validationStatus:A}=X(),G=E||u,M=R||m,b=A??w,[V,q]=lt({controlled:x,default:d,state:"value",name:"RadioButtonGroup"}),U=j=>{q(j.target.value),f==null||f(j)},z=vt(g);return t.jsx("fieldset",{"aria-labelledby":p(I==null?void 0:I["aria-labelledby"],o)||void 0,"aria-describedby":p(I==null?void 0:I["aria-describedby"],l)||void 0,className:p(ot(),ot(v),{[ot("noWrap")]:!h},i),"data-testid":"radio-button-group",ref:e,...k,children:t.jsx(ht.Provider,{value:{disabled:G,name:z,onChange:U,readOnly:M,validationStatus:b,value:V},children:s})})});function Xt(n,a){switch(a.type){case"update":default:return n}}const tn=()=>({busy:!0,ampsConfigs:[]}),nn=r.createContext({}),an=({children:n})=>{const[a,e]=r.useReducer(Xt,tn());return t.jsx(nn.Provider,{value:{...a,dispatch:e},children:n})};function en(n){return a=>t.jsx(an,{children:t.jsx(n,{...a})})}const on=[{key:"sow",value:"Query"},{key:"subscribe",value:"Subscribe"},{key:"sow_and_subscribe",value:"Sow and Subscribe"},{key:"sow_and_delta_subscribe",value:"Sow and Delta Subscribe"}],ln=({queryConfig:n,onExec:a,onReset:e})=>t.jsxs("div",{className:"d-flex flex-column",children:[t.jsxs("div",{className:"d-flex flex-shrink-0 px-2 panel",children:[t.jsx("div",{className:"flex-grow-1",children:"Title"}),t.jsx("div",{className:"flex-shrink-0",children:"Toggle"})]}),t.jsxs("div",{className:"d-flex flex-shrink-0 flex-column m-2 p-2 border",children:[t.jsxs("div",{className:"d-flex flex-shrink-0",children:[t.jsx("div",{className:"d-flex flex-grow-1 align-items-center",children:t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Method"}),t.jsx(Yt,{direction:"horizontal",onChange:o=>console.log(o.target.value),value:n.method,children:on.map(o=>t.jsx(Qt,{value:o.key,label:o.value},o.key))})]})}),t.jsx("div",{className:"d-flex shrink-0 align-items-center",children:t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Limit"}),t.jsx($,{style:{width:100}})]})})]}),t.jsx("div",{className:"d-flex flex-shrink-0 align-items-center",children:t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Topic"}),t.jsx($,{startAdornment:t.jsx("select",{style:{width:100,marginRight:5},className:"form-control"})})]})}),t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Filter"}),t.jsx($,{})]}),t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Options"}),t.jsx($,{})]}),t.jsxs(W,{labelPlacement:"top",children:[t.jsx(N,{className:"form-field-label-horiz",children:"Order By"}),t.jsx($,{})]}),t.jsxs("div",{className:"flex-shrink-0 d-flex justify-content-end mt-3",children:[t.jsx("div",{className:"flex-grow-1",children:t.jsxs(W,{labelPlacement:"left",children:[t.jsx(N,{className:"form-field-label-horiz",style:{width:200},children:"Name"}),t.jsx($,{style:{width:300}})]})}),t.jsx(ct,{onClick:a,className:"mr-1",children:"OK"}),t.jsx(ct,{onClick:e,children:"Reset"})]})]})]}),rn={name:"test",connection:{name:"test",url:"ws://localhost:9007/amps/json"},method:"sow_and_subscribe",topic:{type:"json",name:"/test/unit-test"}},sn=n=>t.jsxs("div",{className:"d-flex flex-grow-1 flex-column",children:[t.jsx(ln,{onExec:()=>{},onReset:()=>{},queryConfig:rn}),t.jsx("div",{className:"d-flex flex-grow-1 flex-column"})]}),cn=en(sn);export{cn as default};
