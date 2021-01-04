(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    getCart: function getCart() {
      return this.$store.state.cart;
    },
    totalProduct: function totalProduct() {
      return this.$store.state.cart.reduce(function (acc, current) {
        return acc + current.qty;
      }, 0);
    },
    totalPrice: function totalPrice() {
      return this.$store.state.cart.reduce(function (acc, current) {
        return acc + current.price * current.qty;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mx-auto" }, [
    _c("div", { staticClass: "flex shadow-md" }, [
      _c(
        "div",
        { staticClass: "w-3/4 bg-white px-10 py-10" },
        [
          _c("div", { staticClass: "flex justify-between border-b pb-8" }, [
            _c("h1", { staticClass: "font-semibold text-2xl" }, [
              _vm._v("Shopping Cart")
            ]),
            _vm._v(" "),
            _c("h2", { staticClass: "font-semibold text-2xl" }, [
              _vm._v(_vm._s(_vm.totalProduct) + " produits dans votre panier")
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.getCart, function(product, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              },
              [
                _c("div", { staticClass: "flex w-2/5" }, [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col justify-between ml-4 flex-grow"
                    },
                    [
                      _c("span", { staticClass: "font-bold text-sm" }, [
                        _vm._v(_vm._s(product.name))
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-500 text-xs" }, [
                        _vm._v(_vm._s(product.description))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "font-semibold hover:text-red-500 text-gray-500 text-xs",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.$store.commit(
                                "removeProductToCart",
                                index
                              )
                            }
                          }
                        },
                        [_vm._v("Supprimer du panier")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex justify-center w-1/5" }, [
                  _c("span", {
                    staticClass: "mx-2 border text-center w-8",
                    domProps: { textContent: _vm._s(product.qty) }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "text-center w-1/5 font-semibold text-sm" },
                  [_vm._v(_vm._s(product.price / 100))]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "text-center w-1/5 font-semibold text-sm" },
                  [_vm._v(_vm._s((product.price * product.qty) / 100))]
                )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "flex font-semibold text-indigo-600 text-sm mt-10",
              attrs: { to: { name: "products.index" } }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current mr-2 text-indigo-600 w-4",
                  attrs: { viewBox: "0 0 448 512" }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                    }
                  })
                ]
              ),
              _vm._v("\n        Revenir faire les courses")
            ]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/4 px-8 py-10", attrs: { id: "summary" } }, [
        _c("h1", { staticClass: "font-semibold text-2xl border-b pb-8" }, [
          _vm._v("Informations")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "border-t mt-8" }, [
          _c(
            "div",
            {
              staticClass:
                "flex font-semibold justify-between py-6 text-sm uppercase"
            },
            [
              _c("span", [_vm._v("Prix total")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.totalPrice / 100) + " €")])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            },
            [_vm._v("Passer à la caisse")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mt-10 mb-5" }, [
      _c(
        "h3",
        { staticClass: "font-semibold text-gray-600 text-xs uppercase w-2/5" },
        [_vm._v("Détails du produit")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
        },
        [_vm._v("Quantité")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
        },
        [_vm._v("Prix")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
        },
        [_vm._v("Total")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-20" }, [
      _c("img", {
        staticClass: "h-24",
        attrs: {
          src:
            "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          alt: ""
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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


/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=template&id=066dc0b8& */ "./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&");
/* harmony import */ var _ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ShoppingCart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingCart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingCart.vue?vue&type=template&id=066dc0b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);