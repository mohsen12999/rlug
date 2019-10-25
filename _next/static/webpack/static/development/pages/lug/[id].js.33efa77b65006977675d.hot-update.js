webpackHotUpdate("static\\development\\pages\\lug\\[id].js",{

/***/ "./pages/lug/[id].js":
/*!***************************!*\
  !*** ./pages/lug/[id].js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_websiteLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/websiteLayout */ "./components/websiteLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Project\\my Project\\rlug\\pages\\lug\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Lug = function Lug(props) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query;

  return __jsx(_components_websiteLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    id: "single-lug",
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: props.lug.pic,
    className: "rounded",
    alt: "لاگ " + props.lug.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u0644\u0627\u06AF ", query.id), __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.lug.date)), props.sections.map(function (section, index) {
    return __jsx("div", {
      key: index,
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-3 col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      className: "full-img",
      src: section.pic,
      alt: section.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx("div", {
      className: "col-md-8 col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, section.name), __jsx("small", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, props.type), __jsx("small", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "توسط " + props.author), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, props.body), section.file !== "" && __jsx("a", {
      href: section.file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\u0641\u0627\u06CC\u0644 \u0627\u0631\u0627\u0626\u0647")));
  })));
};

Lug.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://apdr.ir/api/lug/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              lug: data.lug,
              sections: data.sections
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Lug);

/***/ })

})
//# sourceMappingURL=[id].js.33efa77b65006977675d.hot-update.js.map