(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments"],{

/***/ "./src/scripts/comments.js":
/*!*********************************!*\
  !*** ./src/scripts/comments.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar commentList = document.querySelector('.comment-list');\nvar respondBlock = document.querySelector('#respond');\nvar commentForm = respondBlock.querySelector('form');\nvar cancelReplyLink = respondBlock.querySelector('#cancel-comment-reply-link');\nvar parentIdInput = respondBlock.querySelector('[name=\"fields[parent_id]\"]');\n\nvar moveRespondBlock = function moveRespondBlock(commentId) {\n  if (!commentId) return;\n\n  var comment = commentList.querySelector('#comment-' + commentId + ' article');\n\n  parentIdInput.value = commentId;\n  comment.parentNode.insertBefore(respondBlock, comment.nextSibling);\n  cancelReplyLink.style.display = '';\n\n  commentForm.querySelector('textarea').focus();\n\n  return false;\n};\n\nvar initComments = exports.initComments = function initComments() {\n  cancelReplyLink.style.display = 'none';\n\n  cancelReplyLink.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    parentIdInput.value = '';\n    commentList.parentNode.appendChild(respondBlock);\n    cancelReplyLink.style.display = 'none';\n  });\n\n  window.moveRespondBlock = moveRespondBlock;\n};\n\n//# sourceURL=webpack:///./src/scripts/comments.js?");

/***/ })

}]);