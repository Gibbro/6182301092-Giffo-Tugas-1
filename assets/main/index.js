System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,s,a,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,d,l,h,f;o._RF.push({},"2118490rK5CWLZRfDdxXZFO","Background",void 0);var y=s.ccclass,g=s.property;e("Background",(u=y("Background"),d=g({type:a}),u((f=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speed=void 0,r(t,"speedX",f,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.speed=new c(this.speedX,0,0)},o.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<-288&&this.node.translate(new c(288,0,0))},t}(p)).prototype,"speedX",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-288}}),l=h))||l));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,n,r,s,a;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,n=t.input,r=t.Input,s=t.Vec3,a=t.Component}],execute:function(){var c;e._RF.push({},"2a092d8g/lCVZImBQ1NgaFl","Bird",void 0);var u=o.ccclass;o.property,t("Bird",u("Bird")(c=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).nodeImage=void 0,i.curRotation=0,i.isFalling=!0,i.birdSpeed=50,i.defaultSpeed=150,i.gravity=150,i}i(e,t);var o=e.prototype;return o.start=function(){this.nodeImage=this.node.getChildByPath("Image-bird"),n.on(r.EventType.TOUCH_START,this.onTouchStart,this)},o.onTouchStart=function(t){this.isFalling=!1,this.birdSpeed=this.defaultSpeed},o.update=function(t){this.birdSpeed-=this.gravity*t,this.birdSpeed<0?(this.node.translate(new s(0,this.birdSpeed*t,0)),this.curRotation>-60&&(this.curRotation-=60*t),this.nodeImage.setRotationFromEuler(new s(0,0,this.curRotation)),console.log("rotasi: "+this.curRotation)):(this.node.translate(new s(0,this.birdSpeed*t,0)),this.curRotation<60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new s(0,0,this.curRotation)),console.log("rotasi: "+this.curRotation))},e}(a))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background.ts","./Bird.ts","./Pipe.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,i,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.Vec3,r=t.Component}],execute:function(){var s;n._RF.push({},"e44f3qrEbpMhIguCpJWMFvG","Pipe",void 0);var c=o.ccclass;o.property,t("Pipe",c("Pipe")(s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){this.node.translate(new i(-100*t,0,0)),this.node.position.x<-252&&this.node.setPosition(new i(367,0,0))},n}(r))||s);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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