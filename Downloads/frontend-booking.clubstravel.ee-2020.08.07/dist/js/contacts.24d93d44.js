(function(t){function e(e){for(var a,n,l=e[0],c=e[1],o=e[2],p=0,f=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,l=1;l<s.length;l++){var c=s[l];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={contacts:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([10,"chunk-vendors","chunk-common"]),s()})({10:function(t,e,s){t.exports=s("6142")},6142:function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("ct-header"),t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"sidebar-layout"},[t._m(1),s("div",{staticClass:"sidebar has-margin-top-40"},[s("div",{staticClass:"box p-24 mt-32 mt-lg-0"},[s("form",{attrs:{action:""}},[s("b-field",{attrs:{label:"Имя (необязательно)"}},[s("b-input")],1),s("b-field",{attrs:{label:"Номер телефона"}},[s("b-input")],1),s("b-field",{attrs:{label:"E-mail"}},[s("b-input")],1),s("b-field",{attrs:{label:"Сообщение (необязательно)"}},[s("b-input",{attrs:{type:"textarea",rows:"2"}})],1),s("button",{staticClass:"btn is-full-width mt-32"},[t._v("Отправить")])],1)])])]),s("iframe",{staticClass:"map-frame mt-60",attrs:{src:"https://maps.google.com/maps?q=Clubs Travel&t=m&z=17&output=embed&iwloc=near","aria-label":"Clubs Travel"}})]),s("ct-footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"cover-slider"},[s("div",{staticClass:"cover-slider-items"},[s("img",{staticClass:"cover-slider-item",attrs:{src:"assets/cover.jpg",alt:""}})]),s("div",{staticClass:"cover-slider-bottom-decoration"},[s("img",{attrs:{src:"assets/cover-decoration-4.svg",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-7"},[s("h1",{staticClass:"mb-16 text-is-36 is-big mt-40 mt-lg-24"},[t._v("Контакты")]),s("h2",{staticClass:"mb-16 text-is-18"},[t._v("Напишите нам")]),s("p",{staticClass:"mb-32 text-is-888"},[t._v("Оставьте свой номер телефона или электронную почту и мы свяжемся с вами")]),s("p",[s("b",[t._v("Clubs Travel OÜ")])]),s("ul",[s("li",{staticClass:"d-flex align-items-center mt-24"},[s("span",{staticClass:"icon icon-mail is-green text-is-24 mr-12"}),s("a",{attrs:{href:""}},[t._v("info@clubstravel.ee")])]),s("li",{staticClass:"d-flex align-items-center mt-24"},[s("span",{staticClass:"icon icon-phone is-green text-is-24 mr-12"}),s("span",[s("a",{attrs:{href:""}},[t._v("+372 555 60 310")]),t._v(" | "),s("a",{attrs:{href:""}},[t._v("+372 61 30 633")])])]),s("li",{staticClass:"d-flex align-items-center mt-24"},[s("span",{staticClass:"icon icon-clock is-green text-is-24 mr-12"}),t._v(" Пн-Пт 9:30-18:00, Сб 11:00-15:00 ")]),s("li",{staticClass:"d-flex align-items-center mt-24"},[s("span",{staticClass:"icon icon-point is-green text-is-24 mr-12"}),t._v(" Narva mnt 7D, Tallinn (корпус B) 4 этаж ")])])])])])}],n=s("227e"),l=s("07a3"),c=s("4fc2"),o=s("1a82"),u=s("3433"),p=s("20c2"),f={name:"App",components:{ctHeader:n["a"],ctFooter:l["a"],ctSearch:c["a"],ctOfferCard:o["a"],ctSlider:u["a"],ctSlide:p["a"]},mounted:function(){},data:function(){return{seasonSliderOps:{breakpoints:{320:{slidesPerView:1,spaceBetween:15},680:{slidesPerView:3,spaceBetween:16},930:{slidesPerView:4,spaceBetween:20}}}}}},d=f,m=s("2877"),v=Object(m["a"])(d,r,i,!1,null,null,null),b=v.exports,h=(s("9955"),s("de31"),s("289d"));a["default"].config.productionTip=!1,a["default"].use(h["a"],{defaultIconPack:"icon",defaultMonthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],defaultDayNames:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}),new a["default"]({render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=contacts.24d93d44.js.map