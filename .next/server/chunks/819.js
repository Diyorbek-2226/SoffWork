"use strict";exports.id=819,exports.ids=[819],exports.modules={8819:(s,e,t)=>{t.a(s,async(s,c)=>{try{t.d(e,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var d=t(997),i=t(6555),l=t(6689),n=s([i]);i=(n.then?(await n)():n)[0];let __WEBPACK_DEFAULT_EXPORT__=s=>{let[e,t]=(0,l.useState)(""),[c,n]=(0,l.useState)(!1),a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{t(s.options[0])},[s.options]),(0,d.jsxs)("div",{className:"downpdown_selector",children:[(0,d.jsxs)("div",{className:`dds_selected ${s.selected_design}`,onClick:function(){try{c?n(!1):n(!0)}catch(s){}},children:[d.jsx("span",{children:e}),d.jsx("div",{className:"dds_selected_icon"})]}),d.jsx("div",{className:`dds_select_lists ${c?"show":""}`,style:{height:c?40*s.options.length:0},children:s.options.map(s=>(0,d.jsxs)("div",{className:"dds_select_item",ref:a,onClick:e=>(function(s){try{t(s),n(!1)}catch(s){}})(s),children:[d.jsx("span",{children:s}),d.jsx("div",{className:"dds_list_icon"})]},(0,i.v4)()))})]})};c()}catch(s){c(s)}})}};