System.register("chunks:///_virtual/Level80.ts",["cc","./Game.ts"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.cclegacy,r=e._decorator},function(e){n=e.Game1}],execute:function(){var c;function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t._RF.push({},"6d2cba90mtHsqZHCutwMtjM","Level80",void 0);var i=r.ccclass;r.property,e("Level80",i("Level80")(c=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return a(o(t=e.call.apply(e,[this].concat(n))||this),"row",4),a(o(t),"column",4),a(o(t),"stackArr",[1,2,1,3,0,3,-1,2,2,2,3,3,3,-1,1,1,1,0,0,0,-1,2,1,2,0,3,0,-1]),a(o(t),"flatArr",[]),a(o(t),"fixedArr",[3,2,3,1,0,2,0,1]),t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(n))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/Level80",["./Level80.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Level80', 'chunks:///_virtual/Level80'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});