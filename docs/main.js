!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DisclosureMenu=t():e.DisclosureMenu=t()}(self,(function(){return function(){var e={566:function(e){self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>i});const n=(e,t,n)=>{e.preventDefault();const o=n+1>t.length-1?0:n+1;return t[o].focus(),o},o=(e,t,n)=>{e.preventDefault();const o=0>n-1?t.length-1:n-1;return t[o].focus(),o},r={ArrowUp:o,ArrowRight:n,ArrowDown:n,ArrowLeft:o,Home:(e,t)=>(e.preventDefault(),t[0].focus(),0),End:(e,t)=>(e.preventDefault(),t[t.length-1].focus(),t.length-1),default:()=>!1},i=(e,t=[],n=0)=>(r[e.key||e.code]||r.default)(e,t,n);return t})()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.r(o);var e=n(566),t=n.n(e);const r=(e,t)=>t?e.style.removeProperty("display"):e.style.setProperty("display","none");o.default=class{constructor(e){this.children=[],this.index=null,this.useArrowKeys=!0,this.onButtonClick=e=>{const{target:t}=e,n=this.buttons.indexOf(t),o=!0===JSON.parse(t.getAttribute("aria-expanded")||"false");this.toggle(n,!o)},this.onButtonKeydown=e=>{var n,o;const{key:r}=e,i=this.buttons.indexOf(document.activeElement);return"Escape"===r?this.toggle(this.index,!1):this.useArrowKeys&&this.index===i&&"ArrowDown"===r?(e.preventDefault(),null===(o=null===(n=this.children[this.index])||void 0===n?void 0:n.querySelector("a"))||void 0===o?void 0:o.focus()):this.useArrowKeys&&t()(e,this.buttons,i)},this.onMenuKeydown=e=>{var n,o;if(null===this.index)return!0;const{key:r}=e,i=[...null===(n=this.children[this.index])||void 0===n?void 0:n.querySelectorAll("a")],s=null==i?void 0:i.indexOf(document.activeElement);return"Escape"===r?(null===(o=this.buttons[this.index])||void 0===o||o.focus(),this.toggle(this.index,!1)):this.useArrowKeys&&t()(e,i,s)},this.el=e,this.buttons=[...this.el.querySelectorAll("button[aria-expanded][aria-controls]")]}init(){this.buttons.forEach((e=>{const t=e.getAttribute("aria-controls"),n=this.el.querySelector(`#${t}`);n&&(this.children.push(n),e.setAttribute("aria-expanded","false"),r(n,!1),n.addEventListener("keydown",this.onMenuKeydown),e.addEventListener("click",this.onButtonClick),e.addEventListener("keydown",this.onButtonKeydown))})),this.el.addEventListener("focusout",(e=>this.onBlur(e)))}onBlur(e){const{relatedTarget:t}=e;this.el.contains(t)||this.toggle(this.index,!1)}toggle(e,t){this.index!==e&&this.toggle(this.index,!1),null!==e&&this.buttons[e]&&(this.index=t?e:null,this.buttons[e].setAttribute("aria-expanded",t.toString()),r(this.children[e],t))}}}(),o}()}));