System.register(["./ammo-instantiated-f12eaa61.js"],(function(t){"use strict";var e;return{setters:[function(r){e=r.as,t("default",r.fP)}],execute:function(){e._global.atob=function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="",a=0,n=0,i=0,f=0,o=0,c=0,d=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{a=e.indexOf(t.charAt(d++))<<2|(f=e.indexOf(t.charAt(d++)))>>4,n=(15&f)<<4|(o=e.indexOf(t.charAt(d++)))>>2,i=(3&o)<<6|(c=e.indexOf(t.charAt(d++))),r+=String.fromCharCode(a),64!==o&&(r+=String.fromCharCode(n)),64!==c&&(r+=String.fromCharCode(i))}while(d<t.length);return r}}}}));
