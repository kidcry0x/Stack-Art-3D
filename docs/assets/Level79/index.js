System.register("chunks:///_virtual/Level79.ts",["cc","./Game.ts"],(function(e){"use strict";var r,t,n;return{setters:[function(e){r=e.cclegacy,t=e._decorator},function(e){n=e.Game1}],execute:function(){var o;function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r._RF.push({},"4de81EaV6FLpootImlKftos","Level79",void 0);var i=t.ccclass;t.property,e("Level79",i("Level79")(o=function(e){var r,t;function n(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return a(c(r=e.call.apply(e,[this].concat(n))||this),"row",5),a(c(r),"column",4),a(c(r),"stackArr",[0,4,1,4,2,4,-1,3,3,2,3,1,3,-1,0,2,1,2,2,2,-1,3,1,2,1,1,1,-1,0,0,1,0,2,0,-1]),a(c(r),"flatArr",[]),a(c(r),"fixedArr",[3,4,0,3,3,2,0,1,3,0]),r}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n}(n))||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/Level79",["./Level79.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Level79', 'chunks:///_virtual/Level79'); 
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