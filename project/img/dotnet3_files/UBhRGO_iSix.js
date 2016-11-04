if (self.CavalryLogger) { CavalryLogger.start_js(["ktGqX"]); }

__d('MessengerVideoAutoplayStore',['FluxReduceStore','immutable','MessengerVideoAutoplayActions','MessengerFluxReduceDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j,k;if(c.__markCompiled)c.__markCompiled();var l=c('MessengerVideoAutoplayActions').Types;h=babelHelpers.inherits(m,c('immutable').Record({currentVideoMessageID:null,lastVideoMessageID:null,messageIDs:null,videoVisibilityMap:null}));i=h&&h.prototype;function m(){h.apply(this,arguments);}j=babelHelpers.inherits(n,c('FluxReduceStore'));k=j&&j.prototype;n.prototype.getInitialState=function(){return c('immutable').Map();};n.prototype.reduce=function(o,p){if(p.namespace!==c('MessengerVideoAutoplayActions').Namespace)return o;switch(p.type){case l.SCROLL:if(p.messageIDs)o=this.$MessengerVideoAutoplayStore1(o,p.threadID,p.messageIDs);return this.$MessengerVideoAutoplayStore2(o,p.threadID,p.messageRectMap,p.viewportRect);case l.UPDATE:return this.$MessengerVideoAutoplayStore1(o,p.threadID,p.messageIDs);case l.DESTROY:return this.$MessengerVideoAutoplayStore3(o,p.threadID);}return o;};n.prototype.$MessengerVideoAutoplayStore1=function(o,p,q){if(!q)return o['delete'](p);return o.set(p,new m({currentVideoMessageID:null,lastVideoMessageID:q.first(),messageIDs:q,videoVisibilityMap:null}));};n.prototype.$MessengerVideoAutoplayStore3=function(o,p){return o['delete'](p);};n.prototype.$MessengerVideoAutoplayStore4=function(o,p,q,r,s){var t=null,u=q.map(function(v){if(t){return [v,false];}else{var w=this.$MessengerVideoAutoplayStore5(v,r,s);if(w)t=v;return [v,w];}}.bind(this)).fromEntrySeq().toOrderedMap();return o.mergeIn([p],{currentVideoMessageID:t,videoVisibilityMap:u});};n.prototype.$MessengerVideoAutoplayStore2=function(o,p,q,r){var s=o.getIn([p,'messageIDs']);if(!s||!q||!r)return o;if(!o.getIn([p,'currentVideoMessageID'])){return this.$MessengerVideoAutoplayStore4(o,p,s,q,r);}else{var t=o.getIn([p,'videoVisibilityMap']),u=o.getIn([p,'lastVideoMessageID']),v=o.getIn([p,'currentVideoMessageID']);if(this.$MessengerVideoAutoplayStore5(u,q,r)){if(t&&t.first())return o;}else if(this.$MessengerVideoAutoplayStore5(v,q,r))return o;o=o.setIn([p,'currentVideoMessageID'],null);return this.$MessengerVideoAutoplayStore4(o,p,s,q,r);}};n.prototype.$MessengerVideoAutoplayStore6=function(o,p){if(!o)return false;return o.top>p.top&&o.bottom<p.bottom;};n.prototype.$MessengerVideoAutoplayStore5=function(o,p,q){var r=p.get(o);return this.$MessengerVideoAutoplayStore6(r,q);};n.prototype.getVideoVisibilityMap=function(o){return this.getState().getIn([o,'videoVisibilityMap']);};n.prototype.getMessageIDs=function(o){return this.getState().getIn([o,'messageIDs']);};n.prototype.isVisible=function(o,p){return !!this.getState().getIn([o,'videoVisibilityMap',p]);};function n(){j.apply(this,arguments);}f.exports=new n(c('MessengerFluxReduceDispatcher'));}),null);