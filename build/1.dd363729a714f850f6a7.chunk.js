webpackJsonp([1],{"./app/components/H2/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  font-size: 1.5em;\n"],["\n  font-size: 1.5em;\n"]);r.a.h2(i)},"./app/components/IssueIcon/index.js":function(e,n,t){"use strict";function o(e){return i("svg",{height:"1em",width:"0.875em",className:e.className},void 0,s)}var r=t("./node_modules/react/react.js"),i=(t.n(r),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}()),s=i("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});n.a=o},"./app/components/List/Ul.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"],["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"]),s=r.a.ul(i);n.a=s},"./app/components/List/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"],["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"]),s=r.a.div(i);n.a=s},"./app/components/List/index.js":function(e,n,t){"use strict";function o(e){var n=e.component,t=c;return t=e.items?e.items.map(function(e,t){return a(n,{item:e},"item-"+t)}):a(n,{}),a(s.a,{},void 0,a(i.a,{},void 0,t))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/List/Ul.js")),s=t("./app/components/List/Wrapper.js"),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),c=a("div",{});n.a=o},"./app/components/ListItem/Item.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"],["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"]),s=r.a.div(i);n.a=s},"./app/components/ListItem/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"],["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"]),s=r.a.li(i);n.a=s},"./app/components/ListItem/index.js":function(e,n,t){"use strict";function o(e){return a(s.a,{},void 0,a(i.a,{},void 0,e.item))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/ListItem/Item.js")),s=t("./app/components/ListItem/Wrapper.js"),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}();n.a=o},"./app/components/LoadingIndicator/Circle.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),a=o(["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"],["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"]),c=o(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ","\n\n    &:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: "," 1.2s infinite ease-in-out both;\n      ","\n    }\n  "],["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ","\n\n    &:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: "," 1.2s infinite ease-in-out both;\n      ","\n    }\n  "]),p=t.i(i.b)(a),l=function(e){var n=i.a.div(c,e.rotate&&"\n      -webkit-transform: rotate("+e.rotate+"deg);\n      -ms-transform: rotate("+e.rotate+"deg);\n      transform: rotate("+e.rotate+"deg);\n    ",p,e.delay&&"\n        -webkit-animation-delay: "+e.delay+"s;\n        animation-delay: "+e.delay+"s;\n      ");return s(n,{})};n.a=l},"./app/components/LoadingIndicator/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n"],["\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n"]),s=r.a.div(i);n.a=s},"./app/components/LoadingIndicator/index.js":function(e,n,t){"use strict";var o=t("./node_modules/react/react.js"),r=(t.n(o),t("./app/components/LoadingIndicator/Circle.js")),i=t("./app/components/LoadingIndicator/Wrapper.js"),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),a=s(r.a,{}),c=function(){return s(i.a,{},void 0,a,s(r.a,{rotate:30,delay:-1.1}),s(r.a,{rotate:60,delay:-1}),s(r.a,{rotate:90,delay:-.9}),s(r.a,{rotate:120,delay:-.8}),s(r.a,{rotate:150,delay:-.7}),s(r.a,{rotate:180,delay:-.6}),s(r.a,{rotate:210,delay:-.5}),s(r.a,{rotate:240,delay:-.4}),s(r.a,{rotate:270,delay:-.3}),s(r.a,{rotate:300,delay:-.2}),s(r.a,{rotate:330,delay:-.1}))};n.a=c},"./app/components/ReposList/index.js":function(e,n,t){"use strict";var o=t("./node_modules/react/react.js"),r=(t.n(o),t("./app/components/List/index.js")),i=t("./app/components/ListItem/index.js"),s=t("./app/components/LoadingIndicator/index.js"),a=(t("./app/containers/RepoListItem/index.js"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}());a(r.a,{component:s.a}),a(i.a,{item:"Something went wrong, please try again!"})},"./app/containers/App/actions.js":function(e,n,t){"use strict";function o(){return{type:s.b}}function r(e,n){return{type:s.c,repos:e,username:n}}function i(e){return{type:s.d,error:e}}var s=t("./app/containers/App/constants.js");n.a=o,n.b=r,n.c=i},"./app/containers/HomePage/AtPrefix.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  color: black;\n  margin-left: 0.4em;\n"],["\n  color: black;\n  margin-left: 0.4em;\n"]);r.a.span(i)},"./app/containers/HomePage/CenteredSection.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/containers/HomePage/Section.js"),s=o(["\n  text-align: center;\n"],["\n  text-align: center;\n"]);t.i(r.a)(i.a)(s)},"./app/containers/HomePage/Form.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]);r.a.form(i)},"./app/containers/HomePage/Input.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"],["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"]);r.a.input(i)},"./app/containers/HomePage/Section.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"],["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"]),s=r.a.section(i);n.a=s},"./app/containers/HomePage/actions.js":function(e,n,t){"use strict";function o(e){return{type:r.a,name:e}}var r=t("./app/containers/HomePage/constants.js");n.a=o},"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/HomePage/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e){return{onChangeUsername:function(n){return e(t.i(m.a)(n.target.value))},onSubmitForm:function(n){void 0!==n&&n.preventDefault&&n.preventDefault(),e(t.i(f.a)())}}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/react/react.js"),c=t.n(a),p=t("./node_modules/react-helmet/lib/Helmet.js"),l=(t.n(p),t("./node_modules/react-intl/lib/index.es.js"),t("./node_modules/react-redux/lib/index.js")),u=(t.n(l),t("./node_modules/reselect/es/index.js")),d=t("./app/containers/App/selectors.js"),f=(t("./app/components/H2/index.js"),t("./app/components/ReposList/index.js"),t("./app/containers/HomePage/AtPrefix.js"),t("./app/containers/HomePage/CenteredSection.js"),t("./app/containers/HomePage/Form.js"),t("./app/containers/HomePage/Input.js"),t("./app/containers/HomePage/Section.js"),t("./app/containers/HomePage/messages.js"),t("./app/containers/App/actions.js")),m=t("./app/containers/HomePage/actions.js"),y=t("./app/containers/HomePage/selectors.js");t.d(n,"HomePage",function(){return v}),n.mapDispatchToProps=s;var b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),j=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),h=b("article",{},void 0),v=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),j(n,[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){var e=this.props;e.loading,e.error,e.repos;return h}}]),n}(c.a.PureComponent),g=t.i(u.b)({repos:t.i(d.b)(),username:t.i(y.a)(),loading:t.i(d.c)(),error:t.i(d.d)()});n.default=t.i(l.connect)(g,s)(v)},"./app/containers/HomePage/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");t.i(o.d)({startProjectHeader:{id:"boilerplate.containers.HomePage.start_project.header",defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"boilerplate.containers.HomePage.start_project.message",defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"boilerplate.containers.HomePage.tryme.header",defaultMessage:"Try me!"},trymeMessage:{id:"boilerplate.containers.HomePage.tryme.message",defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"boilerplate.containers.HomePage.tryme.atPrefix",defaultMessage:"@"}})},"./app/containers/HomePage/selectors.js":function(e,n,t){"use strict";var o=t("./node_modules/reselect/es/index.js");t.d(n,"a",function(){return i});var r=function(e){return e.get("home")},i=function(){return t.i(o.a)(r,function(e){return e.get("username")})}},"./app/containers/RepoListItem/IssueIcon.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/IssueIcon/index.js"),s=o(["\n  fill: #ccc;\n  margin-right: 0.25em;\n"],["\n  fill: #ccc;\n  margin-right: 0.25em;\n"]),a=t.i(r.a)(i.a)(s);n.a=a},"./app/containers/RepoListItem/IssueLink.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/A/index.js"),s=o(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]),a=t.i(r.a)(i.a)(s);n.a=a},"./app/containers/RepoListItem/RepoLink.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/A/index.js"),s=o(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]),a=t.i(r.a)(i.a)(s);n.a=a},"./app/containers/RepoListItem/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"]),s=r.a.div(i);n.a=s},"./app/containers/RepoListItem/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=t("./node_modules/react/react.js"),a=t.n(s),c=t("./node_modules/react-redux/lib/index.js"),p=(t.n(c),t("./node_modules/reselect/es/index.js")),l=t("./node_modules/react-intl/lib/index.es.js"),u=t("./app/containers/App/selectors.js"),d=t("./app/components/ListItem/index.js"),f=t("./app/containers/RepoListItem/IssueIcon.js"),m=t("./app/containers/RepoListItem/IssueLink.js"),y=t("./app/containers/RepoListItem/RepoLink.js"),b=t("./app/containers/RepoListItem/Wrapper.js"),j=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),v=j(f.a,{}),g=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),h(n,[{key:"render",value:function(){var e=this.props.item,n="";e.owner.login!==this.props.currentUser&&(n=e.owner.login+"/");var t=j(b.a,{},void 0,j(y.a,{href:e.html_url,target:"_blank"},void 0,n+e.name),j(m.a,{href:e.html_url+"/issues",target:"_blank"},void 0,v,j(l.e,{value:e.open_issues_count})));return j(d.a,{item:t},"repo-list-item-"+e.full_name)}}]),n}(a.a.PureComponent);n.a=t.i(c.connect)(t.i(p.b)({currentUser:t.i(u.e)()}))(g)}});