System.register("chunks:///_virtual/Level12.ts",["cc","./Game.ts"],(function(e){"use strict";var r,t,n;return{setters:[function(e){r=e.cclegacy,t=e._decorator},function(e){n=e.Game1}],execute:function(){var c;function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r._RF.push({},"a2ffaFdeYFJr7cZpaISih5q","Level12",void 0);var i=t.ccclass;t.property,e("Level12",i("Level12")(c=function(e){var r,t;function n(){for(var r,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return a(o(r=e.call.apply(e,[this].concat(n))||this),"row",4),a(o(r),"column",4),a(o(r),"stackArr",[1,3,2,3,3,3,-1,3,2,3,1,3,0,-1,2,0,1,0,0,0,-1,0,1,0,2,0,3,-1]),a(o(r),"flatArr",[]),a(o(r),"fixedArr",[1,2,1,1,2,1,2,2]),r}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n}(n))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/Level12",["./Level12.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Level12', 'chunks:///_virtual/Level12'); 
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