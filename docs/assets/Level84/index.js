System.register("chunks:///_virtual/Level84.ts",["cc","./Game.ts"],(function(e){"use strict";var r,t,n;return{setters:[function(e){r=e.cclegacy,t=e._decorator},function(e){n=e.Game1}],execute:function(){var c;function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r._RF.push({},"9b2a1DLiidPrbvVsO08SDn+","Level84",void 0);var a=t.ccclass;t.property,e("Level84",a("Level84")(c=function(e){var r,t;function n(){for(var r,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return i(o(r=e.call.apply(e,[this].concat(n))||this),"row",4),i(o(r),"column",3),i(o(r),"stackArr",[0,1,1,1,1,2,0,2,-1,0,0,1,0,2,0,2,1,2,2,-1]),i(o(r),"flatArr",[]),i(o(r),"fixedArr",[0,3,1,3,2,3]),r}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n}(n))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/Level84",["./Level84.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Level84', 'chunks:///_virtual/Level84'); 
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