!function e(t,r,n){function a(l,c){if(!r[l]){if(!t[l]){var i="function"==typeof require&&require;if(!c&&i)return i(l,!0);if(o)return o(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var u=r[l]={exports:{}};t[l][0].call(u.exports,function(e){var r=t[l][1][e];return a(r?r:e)},u,u.exports,e,t,r,n)}return r[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)a(n[l]);return a}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=e("./project_list"),o=n(a),l=e("./menu"),c=n(l),i=e("./general"),s=n(i),u=e("./cases"),f=n(u),d=e("react"),p=n(d),m=e("react-dom"),h=n(m);window.project_list_comp=h["default"].render(p["default"].createElement(o["default"],null),document.getElementById("project-list")),(0,s["default"])(),(0,c["default"])(),(0,f["default"])()},{"./cases":2,"./general":3,"./menu":4,"./project_list":5,react:"react","react-dom":"react-dom"}],2:[function(e,t,r){"use strict";function n(){$(document).ready(function(){$(".cases-btn").click(function(){$(this).toggleClass("less"),$(".cases-cont").toggle(250)})})}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n},{}],3:[function(e,t,r){"use strict";function n(){$(document).ready(function(){function e(){var e=$(this).scrollTop(),r=$(this).height();$(".scroll-anim").not(".animated").each(function(t){var n=$(this).offset().top;e+r>n+100&&($(this).addClass("animated slideInUp"),$(this).removeClass("scroll-anim"))}),clearTimeout(t)}var t=void 0;$(window).scroll(function(){var r=$(window).width();r>768&&(t&&clearTimeout(t),t=setTimeout(e,50))}),$(window).trigger("scroll")})}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n},{}],4:[function(e,t,r){"use strict";function n(){$(document).ready(function(){function e(){var e=$(this).scrollTop(),t=$(".top-header").height(),r=void 0;$("section").each(function(n){var a=$(this).offset().top;e>=a-t&&(r="color"+n)}),$(".menu--top").removeClass("color0 color1 color2 color3 color4"),$(".menu--top").addClass(r)}$(".top-header").attr("data-offset-top",$("header").height()-$(".top-header").height()-10),$(".menu a").click(function(e){e.preventDefault();var t=$(this).attr("href");console.log("click"),console.log(t),$(".top-header").addClass("affix");var r=$(".top-header").height();$("html, body").animate({scrollTop:$(t).offset().top-r+5},500)});var t=void 0;$(window).scroll(function(){t&&clearTimeout(t),t=setTimeout(e,150)});var r=$(".go-top");$(window).scroll(function(){$(this).scrollTop()>400?r.addClass("visible"):r.removeClass("visible")}),$(".go-top").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)})})}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n},{}],5:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("react"),s=n(i),u=e("react-dom"),f=(n(u),function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={projects:[],mode:"list",project_detail:null},e}return l(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.state.mode;if("list"==t){var r=this.state.projects.map(function(t,r){return s["default"].createElement(d,{key:r,idx:r,entry:t,change_class:e.change_class.bind(e),show_project_cback:e.show_project.bind(e)})});return s["default"].createElement("div",null,r)}var n=this.state.project_detail;return s["default"].createElement("div",null,s["default"].createElement(p,{entry:n,close:this.close.bind(this)}))}},{key:"change_class",value:function(e,t){var r=this.state.projects;r[e].className=t,this.setState(r)}},{key:"show_project",value:function(e){var t=this.state.projects[e],r=this.state;r.mode="detail",r.project_detail=t,this.setState(r)}},{key:"close",value:function(){var e=this.state;e.mode="list",e.project_detail=null;var t=!0,r=!1,n=void 0;try{for(var a,o=e.projects[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var l=a.value;l.className=null}}catch(c){r=!0,n=c}finally{try{!t&&o["return"]&&o["return"]()}finally{if(r)throw n}}this.setState(e)}}]),t}(s["default"].Component));r["default"]=f;var d=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"animate",value:function(e){console.log(e);var t="mouseenter"==e.type?"zoomIn":"fadeOut";this.props.change_class(this.props.idx,"animated "+t)}},{key:"show_project",value:function(e){e.preventDefault(),this.props.show_project_cback(this.props.idx)}},{key:"render",value:function(){var e=this.props.entry;return s["default"].createElement("div",{className:"project-entry col-md-4 col-xs-12 col-sm-6 scroll-anim"},s["default"].createElement("a",{href:"#",onMouseEnter:this.animate.bind(this),onMouseLeave:this.animate.bind(this),onClick:this.show_project.bind(this)},s["default"].createElement("div",null,s["default"].createElement("img",{src:e.image})),s["default"].createElement("div",{className:e.className?e.className:"hidden"},s["default"].createElement("h3",null,e.title),s["default"].createElement("p",null,e.short_desc))))}}]),t}(s["default"].Component),p=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=$(".top-header").height();$("html, body").animate({scrollTop:$("#sample-projects").offset().top-e},500)}},{key:"render",value:function(){var e=this.props.entry,t=e.skills.map(function(e,t){return s["default"].createElement("li",{key:t},e.name)}),r=e.images.map(function(e,t){return s["default"].createElement("img",{src:e.url})}),n=e.description.split("\n").map(function(e){return s["default"].createElement("span",null,e,s["default"].createElement("br",null))});return s["default"].createElement("div",{className:"project-detail animated fadeIn"},s["default"].createElement("a",{href:"#sample-projects",onClick:this.props.close},s["default"].createElement("i",{className:"fa fa-times-circle-o fa-3x"})),s["default"].createElement("div",{className:"project-detail__cont"},s["default"].createElement("h3",null,e.title),e.demo_url?s["default"].createElement("a",{target:"_blank",href:e.demo_url,className:"btn btn-default"},"Demo"):"",e.source_url?s["default"].createElement("a",{target:"_blank",href:e.source_url,className:"btn btn-default"},"Source code"):"",s["default"].createElement("br",null),s["default"].createElement("h4",null,"Description:"),n,s["default"].createElement("br",null),s["default"].createElement("h4",null,"Skills used:"),s["default"].createElement("ul",{className:"project-detail__skills skill-list"},t),s["default"].createElement("div",{className:"project-detail__imgs"},r)))}}]),t}(s["default"].Component)},{react:"react","react-dom":"react-dom"}]},{},[1]);