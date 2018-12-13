(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar"],{

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar body = document.body;\n\nvar sidebar = body.querySelector(\"#sidebar\");\nvar expandButton = body.querySelector(\"#sidebar-toggler\");\nvar overlay = body.querySelector(\".sidebar-overlay\");\nvar sidebarMenu = body.querySelector(\"#sidebar-menu\");\n\nvar collapseButton = expandButton.cloneNode(true);\ncollapseButton.setAttribute(\"id\", \"#sidebar-collapse\");\n\nvar setAriaExpanded = function setAriaExpanded(items, value) {\n  items.forEach(function (item) {\n    return item.setAttribute(\"aria-expanded\", value);\n  });\n};\n\nvar hideSidebar = function hideSidebar() {\n  sidebar.classList.remove(\"toggled\");\n  setAriaExpanded([sidebar, expandButton, collapseButton], false);\n};\n\nvar showSidebar = function showSidebar() {\n  sidebar.classList.add(\"toggled\");\n  setAriaExpanded([sidebar, expandButton, collapseButton], true);\n  sidebar.focus();\n};\n\nvar windowWidth = void 0,\n    windowHeight = void 0,\n    bodyHeight = void 0,\n    sidebarHeight = void 0,\n    windowPos = void 0,\n    lastWindowPos = 0,\n    top = false,\n    bottom = false,\n    topOffset = 0,\n    sidebarOffsetTop = void 0,\n    resizeTimer = void 0;\n\nvar resizeHandler = function resizeHandler() {\n  windowWidth = window.innerWidth;\n  windowHeight = window.innerHeight;\n};\n\nvar scrollHandler = function scrollHandler() {\n  windowPos = window.scrollY;\n  bodyHeight = body.offsetHeight;\n  sidebarHeight = sidebar.offsetHeight;\n  sidebarOffsetTop = Math.round(windowPos + sidebar.getBoundingClientRect().top);\n\n  if (sidebarHeight > windowHeight) {\n    if (windowPos > lastWindowPos) {\n      if (top) {\n        top = false;\n        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0;\n        sidebar.setAttribute(\"style\", \"top: \" + topOffset + \"px;\");\n      } else if (!bottom && windowPos + windowHeight > sidebarHeight + sidebarOffsetTop && sidebarHeight < bodyHeight) {\n        bottom = true;\n        sidebar.setAttribute(\"style\", \"position: fixed; bottom: 0;\");\n      }\n    } else if (windowPos < lastWindowPos) {\n      if (bottom) {\n        bottom = false;\n        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0;\n        sidebar.setAttribute(\"style\", \"top: \" + topOffset + \"px;\");\n      } else if (!top && windowPos < sidebarOffsetTop) {\n        top = true;\n        sidebar.setAttribute(\"style\", \"position: fixed;\");\n      }\n    } else {\n      top = bottom = false;\n      topOffset = sidebarOffsetTop ? sidebarOffsetTop : 0;\n      sidebar.setAttribute(\"style\", \"top: \" + topOffset + \"px;\");\n    }\n  } else if (!top) {\n    top = true;\n    sidebar.setAttribute(\"style\", \"position: fixed;\");\n  }\n\n  lastWindowPos = windowPos;\n};\n\nvar resizeAndScrollHandler = function resizeAndScrollHandler() {\n  resizeHandler();\n  scrollHandler();\n};\n\n// const initSidebarMenu = () => {\n//   let itemsWithSubmenu = sidebarMenu.querySelectorAll('.item.has-children')\n//\n//   itemsWithSubmenu.forEach(item => {\n//     let toggler = item.querySelector('button')\n//     let submenu = item.querySelector('.sub-menu')\n//\n//     setAriaExpanded([submenu, toggler], false)\n//\n//     toggler.addEventListener('click', () => {\n//       let toggled = item.classList.contains('toggled')\n//\n//       item.classList[toggled ? 'remove' : 'add']('toggled')\n//       setAriaExpanded([submenu, toggler], !toggled)\n//     })\n//   })\n// }\n\nvar initSidebar = exports.initSidebar = function initSidebar() {\n  sidebar.setAttribute(\"tabindex\", \"-1\");\n  sidebar.insertBefore(collapseButton, sidebar.children[1]);\n\n  setAriaExpanded([sidebar, expandButton, collapseButton], false);\n\n  expandButton.addEventListener(\"click\", showSidebar);\n  collapseButton.addEventListener(\"click\", hideSidebar);\n  overlay.addEventListener(\"click\", hideSidebar);\n\n  window.addEventListener(\"scroll\", scrollHandler);\n  window.addEventListener(\"resize\", function () {\n    clearTimeout(resizeTimer);\n    resizeTimer = setTimeout(resizeAndScrollHandler, 500);\n  });\n\n  resizeAndScrollHandler();\n\n  // if (sidebarMenu) initSidebarMenu();\n};\n\n//# sourceURL=webpack:///./src/scripts/sidebar.js?");

/***/ })

}]);