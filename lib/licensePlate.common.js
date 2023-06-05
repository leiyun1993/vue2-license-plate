module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6961":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "890f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_license_plate_vue_vue_type_style_index_0_id_650f7a5e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebf3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_license_plate_vue_vue_type_style_index_0_id_650f7a5e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_license_plate_vue_vue_type_style_index_0_id_650f7a5e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ebf3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"062711ef-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/license-plate/license-plate.vue?vue&type=template&id=650f7a5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"license-plate_container"},[_c('div',{on:{"click":_vm.onSlotClick}},[_vm._t("default",[_c('div',{staticClass:"input_container"},_vm._l((_vm.licensePlateLength),function(item,index){return _c('div',{key:(item + "_" + (_vm.inputValue[index])),staticClass:"input_box",class:_vm.activeIndex == index?'active':'',style:({borderWidth:(_vm.borderWidth + "px"),borderRadius:(_vm.borderRadius + "px"),borderColor:("" + (_vm.activeIndex == index?_vm.borderActiveColor:_vm.borderColor))}),on:{"click":function($event){$event.stopPropagation();return _vm.inputClick(index)}}},[(_vm.inputValue[index])?_c('div',{staticClass:"button",style:({borderRadius:(_vm.borderRadius + "px"),fontSize: (_vm.fontSize + "px"), color: _vm.fontColor})},[_vm._v(_vm._s(_vm.inputValue[index]))]):_vm._e()])}),0)])],2),_c('transition',{attrs:{"name":"keyboard"}},[(_vm.visible)?_c('div',{staticClass:"keyboard_container"},[_c('div',{staticClass:"keyboard_header",on:{"click":function($event){$event.stopPropagation();return _vm.visibleClick($event)}}},[_c('i',{staticClass:"iconfont icon-jianpan"})]),_c('div',{staticClass:"keyboard_body"},[(_vm.activeIndex==0)?_c('div',{staticClass:"province_list"},_vm._l((_vm.provinceList),function(item){return _c('div',{key:item,staticClass:"key_wrapper",on:{"click":function($event){return _vm.btnClick(item)}}},[_c('div',{staticClass:"button"},[_vm._v(" "+_vm._s(item)+" ")])])}),0):_vm._e(),(_vm.activeIndex!=0)?_c('div',{staticClass:"number_list"},_vm._l((_vm.numberList),function(item,index){return _c('div',{key:item,staticClass:"numer_wapper",on:{"click":function($event){return _vm.btnClick(item,_vm.activeIndex==1)}}},[_c('div',{staticClass:"button",class:_vm.activeIndex==1 && index<10?'disabled':''},[_vm._v(" "+_vm._s(item)+" ")])])}),0):_vm._e(),(_vm.activeIndex!=0)?_c('div',{staticClass:"number_list"},[_vm._l((_vm.letterList),function(item){return _c('div',{key:item,staticClass:"numer_wapper",on:{"click":function($event){return _vm.btnClick(item,item=='O'&&_vm.activeIndex>1)}}},[_c('div',{staticClass:"button",class:item=='O'&&_vm.activeIndex>1?'disabled':''},[_vm._v(" "+_vm._s(item)+" ")])])}),_c('div',{staticClass:"numer_wapper delete",on:{"click":_vm.delClick}},[_c('div',{staticClass:"button img"},[_c('i',{staticClass:"iconfont icon-backspace"})])])],2):_vm._e()])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue?vue&type=template&id=650f7a5e&scoped=true&

// EXTERNAL MODULE: ./packages/assets/icon/iconfont.css
var iconfont = __webpack_require__("6961");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/license-plate/license-plate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const LICENSE_PLATE_RULE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳使领]$/;

/* harmony default export */ var license_platevue_type_script_lang_js_ = ({
  name: "LicensePlate",
  props: {
    value: String,
    //是否自动显示
    autoShow: {
      type: Boolean,
      default: false
    },
    // 输入框边框颜色
    borderColor: {
      type: String,
      default: '#79aef3'
    },
    // 输入框选中边框颜色
    borderActiveColor: {
      type: String,
      default: '#330aec'
    },
    // 边框圆角
    borderRadius: {
      type: Number,
      default: 6
    },
    // 边框宽度
    borderWidth: {
      type: Number,
      default: 1
    },
    // 文字颜色
    fontColor: {
      type: String,
      default: '#333333'
    },
    // 文字大小
    fontSize: {
      type: Number,
      default: 16
    },
  },
  components: {},
  model: {
    prop: "value",
    event: "update"
  },
  data () {
    return {
      licensePlateLength: 8,
      provinceList: ["京", "津", "渝", "沪", "冀", "晋", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "琼", "川", "贵", "云", "陕", "甘", "青", "蒙", "桂", "宁", "新", "藏", "临"],
      numberList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '警'],
      letterList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '港', '澳', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '挂', '学', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '领'],
      activeIndex: -1,
      inputValue: ["", "", "", "", "", "", "", ""],
      visible: false,
    }
  },
  computed: {
    licensePlate () {
      return this.value;
    }
  },
  watch: {
    value () {
      // console.log("watch-value")
      this.initLicensePlate();
    }
  },
  async created () { },
  async mounted () {
    this.initLicensePlate();
    if (this.autoShow) {
      this.activeIndex = 0;
      this.visible = true;
    }
  },
  methods: {
    initLicensePlate () {
      if (this.value && LICENSE_PLATE_RULE.test(this.value)) {
        this.inputValue = this.value.split("");
      }
    },
    onSlotClick () {
      let length = this.inputValue.filter(it => it).length;
      this.activeIndex = length == 0 ? 0 : length - 1;
      if (!this.visible) {
        this.visible = true;
      }
    },
    inputClick (index) {
      this.activeIndex = index;
      if (!this.visible) {
        this.visible = true;
      }
    },
    btnClick (val, disabled) {
      if (disabled) {
        return false;
      }
      this.$set(this.inputValue, this.activeIndex, `${val}`);
      this.activeIndex++;
      if (this.activeIndex > 7) {
        this.visible = false;
      }
      this.change();
    },
    delClick () {
      if (this.inputValue[this.activeIndex]) {
        this.$set(this.inputValue, this.activeIndex, ``);
      } else {
        this.$set(this.inputValue, this.activeIndex - 1, ``);
        this.activeIndex--;
      }
      this.change();
    },
    visibleClick () {
      this.visible = false;
    },
    change () {
      let value = this.inputValue.join("");
      let pass = LICENSE_PLATE_RULE.test(value);
      this.$emit("change", {
        array: this.inputValue.filter(it => it !== ""),
        value: value,
        pass: pass,
      })
      this.$emit("update", value);
    }
  },
  filters: {}
});

// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue?vue&type=script&lang=js&
 /* harmony default export */ var license_plate_license_platevue_type_script_lang_js_ = (license_platevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/license-plate/license-plate.vue?vue&type=style&index=0&id=650f7a5e&lang=less&scoped=true&
var license_platevue_type_style_index_0_id_650f7a5e_lang_less_scoped_true_ = __webpack_require__("890f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue






/* normalize component */

var component = normalizeComponent(
  license_plate_license_platevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "650f7a5e",
  null
  
)

/* harmony default export */ var license_plate = (component.exports);
// CONCATENATED MODULE: ./packages/license-plate/index.js


license_plate.install = function(Vue) {
  Vue.component(license_plate.name, license_plate)
}

/* harmony default export */ var packages_license_plate = (license_plate);
// CONCATENATED MODULE: ./packages/index.js
// 导入车牌号输入组件


// 组件列表
const components = [packages_license_plate]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  if(install.installed) return;

  // 注册全局组件
  components.map(component => Vue.component(component.name, component))
}

//判断是否直接引入组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LicensePlate: packages_license_plate
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });