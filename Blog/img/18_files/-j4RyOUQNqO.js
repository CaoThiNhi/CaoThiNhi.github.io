if (self.CavalryLogger) { CavalryLogger.start_js(["asyQb"]); }

__d('AccessibleLayer',['fbt','DOM','Event','Focus'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._afterShowSubscription=this._layer.subscribe('aftershow',this._onAfterShow.bind(this));};i.prototype.disable=function(){'use strict';this._listener&&this._listener.remove();this._afterShowSubscription.unsubscribe();this._listener=this._afterShowSubscription=null;};i.prototype._closeListener=function(event){'use strict';var j=this._layer.getCausalElement();if(j)if(j.tabIndex==-1){j.tabIndex=0;c('Focus').setWithoutOutline(j);}else c('Focus').set(j);this._layer.hide();};i.prototype._onAfterShow=function(){'use strict';var j=this._layer.getContentRoot();if(c('DOM').scry(j,'.layer_close_elem')[0])return;var k=c('DOM').create('a',{className:'accessible_elem layer_close_elem',href:'#',role:'button'},[h._("\u0110\u00f3ng c\u1eeda s\u1ed5 b\u1eadt m\u1edf v\u00e0 quay tr\u1edf l\u1ea1i")]);c('DOM').appendContent(j,k);this._listener=c('Event').listen(k,'click',this._closeListener.bind(this));};f.exports=i;}),null);
__d('ContextualDialogARIA',['DOM','getOrCreateDOMID'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('beforeshow',this._addAriaAttribute.bind(this));};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};h.prototype._addAriaAttribute=function(){'use strict';var i=this._layer.getCausalElement();if(!i)return;var j=c('DOM').scry(this._layer.getRoot(),'.accessible_elem');if(j.length)i.setAttribute('aria-describedby',c('getOrCreateDOMID')(j[0]));};f.exports=h;}),null);
__d('ContextualDialogArrow',['cx','CSS','DOM','JSXDOM','Locale','Style','Vector'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={bottom:"_53ik",top:"_53il",right:"_53im",left:"_53in"},j={above:'bottom',below:'top',left:'right',right:'left'};function k(l){'use strict';this._layer=l;}k.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['adjust','reposition'],this._handle.bind(this));c('CSS').addClass(this._layer.getContentRoot(),"_5v-0");};k.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;c('CSS').removeClass(this._layer.getContentRoot(),"_5v-0");};k.prototype._handle=function(l,m){'use strict';if(l==='adjust'){this._repositionArrow(m);}else this._repositionRoot(m);};k.prototype._repositionRoot=function(l){'use strict';var m=l.getAlignment();if(m=='center')return;var n=this._layer.getRoot(),o=this._layer.getContext(),p=l.isVertical(),q=this._layer.getArrowDimensions(),r=q.offset,s=q.length,t=c('Vector').getElementDimensions(o),u=p?t.x:t.y;if(u>=s+r*2)return;var v=s/2+r,w=u/2,x=parseInt(v-w,10);if(p){var y=null;if(m=='left'){y=c('Locale').isRTL()?'right':'left';}else y=c('Locale').isRTL()?'left':'right';var z=parseInt(c('Style').get(n,y),10);c('Style').set(n,y,z-x+'px');}else{var aa=parseInt(c('Style').get(n,'top'),10);c('Style').set(n,'top',aa-x+'px');}};k.prototype._repositionArrow=function(l){'use strict';var m=this._layer.getContentRoot(),n=l.getPosition(),o=j[n];for(var p in i)c('CSS').conditionClass(m,i[p],o===p);if(n=='none')return;if(!this._arrow)this._arrow=c('JSXDOM').i({className:"_53io"});if(!c('DOM').contains(m,this._arrow))c('DOM').appendContent(m,this._arrow);c('Style').set(this._arrow,'top','');c('Style').set(this._arrow,'left','');c('Style').set(this._arrow,'right','');c('Style').set(this._arrow,'margin','');var q=k.getOffsetPercent(l),r=k.getOffset(l,q,this._layer),s=k.getOffsetSide(l);c('Style').set(this._arrow,s,q+'%');c('Style').set(this._arrow,'margin-'+s,r+'px');};k.getOffsetPercent=function(l){'use strict';var m=l.getAlignment(),n=l.getPosition();if(n=='above'||n=='below')if(m=='center'){return 50;}else if(m=='right')return 100;return 0;};k.getOffsetSide=function(l){'use strict';var m=l.isVertical();return m?c('Locale').isRTL()?'right':'left':'top';};k.getOffset=function(l,m,n){'use strict';var o=n.getArrowDimensions(),p=o.offset,q=o.length,r=l.getAlignment(),s=r=='center'?0:p;s+=q*m/100;if(r!='left')s*=-1;return s;};Object.assign(k.prototype,{_subscription:null,_arrow:null});f.exports=k;}),null);
__d('ContextualDialogDefaultTheme',['cx'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_53ip",arrowDimensions:{offset:15,length:16}};f.exports=i;}),null);
__d('ContextualDialogFitInViewport_PUSHSAFE',['Style','Vector'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=50,i=10;function j(k){'use strict';this._layer=k;this._contentHeight=null;this._contextY=null;}j.prototype.enable=function(){'use strict';var k=this._layer.getArrowDimensions();this._arrowOffset=k.offset;var l=k.length;this._arrowBuffer=this._arrowOffset+l;this._subscription=this._layer.subscribe(['reposition'],function(m,n){if(!this._layer.isFixed()||n.isVertical())return;this._adjustPosition();}.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype._getContentHeight=function(){'use strict';return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};j.prototype._getContextY=function(){'use strict';return c('Vector').getElementPosition(this._layer.getContext(),'viewport').y;};j.prototype._adjustPosition=function(){'use strict';var k=this._getContextY(),l=this._getContentHeight();if(k===this._contextY&&l===this._contentHeight)return;this._contextY=k;this._contentHeight=l;var m=c('Vector').getViewportDimensions().y,n=Math.min(Math.max(0,k+l+i-m),Math.max(0,k-h),l-this._arrowOffset-this._arrowBuffer);c('Style').set(this._layer.getContent(),'top',-n+'px');};f.exports=j;}),null);
__d('ContextualDialogKeepInViewport',['ContextualLayerDimensions','Event','Style','Vector','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;this._listeners=[];this._subscription=null;this._minimumTop=null;}h.prototype.enable=function(){'use strict';var i=this._layer.getArrowDimensions();this._arrowOffset=i.offset;var j=i.length;this._arrowBuffer=this._arrowOffset+j;this._subscription=this._layer.subscribe(['show','hide','reposition'],function(k,l){if(this._layer.isFixed())return;if(k=='reposition'){this._calculateMinimumTop(l);this._adjustForScroll();}else if(k=='show'){this._attachScroll();this._adjustForScroll();}else this._detachScroll();}.bind(this));if(this._layer.isShown())this._attachScroll();};h.prototype.disable=function(){'use strict';if(this._layer.isShown())this._detachScroll();this._subscription.unsubscribe();this._subscription=null;};h.prototype._attachScroll=function(){'use strict';var i=c('throttle')(this._adjustForScroll.bind(this)),j=this._layer.getContextScrollParent()||window;this._listeners=[c('Event').listen(j,'scroll',i),c('Event').listen(window,'resize',i)];};h.prototype._detachScroll=function(){'use strict';while(this._listeners.length)this._listeners.pop().remove();this._listeners=[];};h.prototype._getContentHeight=function(){'use strict';if(!this._layer._contentWrapper)return 0;return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};h.prototype._getContextY=function(){'use strict';return c('Vector').getElementPosition(this._layer.getContext()).y;};h.prototype._calculateMinimumTop=function(i){'use strict';if(i.isVertical())return;this._minimumTop=this._getContextY()-(this._getContentHeight()-this._arrowBuffer)+i.getOffsetY();};h.prototype._adjustForScroll=function(){'use strict';var i=this._layer.getOrientation(),j=this._layer.getContent();if(i.isVertical()||!j)return;var k=c('ContextualLayerDimensions').getViewportRect(this._layer),l=k.b-this._minimumTop;if(l<0)return;var m=this._getContentHeight(),n=m-(this._arrowBuffer+this._arrowOffset),o=Math.max(0,Math.min(n,n-(l-m)));c('Style').set(j,'top',-o+'px');};f.exports=h;}),null);
__d('LayerMouseHooks',['Arbiter','ContextualThing','Event','Layer'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new (c('Arbiter'))();function i(j){'use strict';this._layer=j;this._subscriptions=[];this._currentlyActive=false;}i.prototype.enable=function(){'use strict';this._subscriptions=[h.subscribe('mouseenter',this._handleActive.bind(this)),h.subscribe('mouseleave',this._handleInactive.bind(this)),this._layer.subscribe('hide',function(){this._currentlyActive=false;}.bind(this))];};i.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=[];this._currentlyActive=false;};i.prototype._handleActive=function(j,k){'use strict';if(!this._currentlyActive&&this._isNodeWithinStack(k)){this._layer.inform('mouseenter');this._currentlyActive=true;}};i.prototype._handleInactive=function(j,k){'use strict';if(this._currentlyActive)if(!k||!this._isNodeWithinStack(k)){this._layer.inform('mouseleave');this._currentlyActive=false;}};i.prototype._isNodeWithinStack=function(j){'use strict';return c('ContextualThing').containsIncludingLayers(this._layer.getContentRoot(),j);};c('Layer').subscribe('show',function(j,k){var l=k.getContentRoot(),m=[c('Event').listen(l,'mouseenter',function(){h.inform('mouseenter',l);}),c('Event').listen(l,'mouseleave',function(o){h.inform('mouseleave',o.getRelatedTarget());})],n=k.subscribe('hide',function(){while(m.length)m.pop().remove();n.unsubscribe();m=n=null;});});f.exports=i;}),null);
__d('ContextualDialog',['csx','cx','invariant','ContextualDialogARIA','AccessibleLayer','ContextualDialogArrow','ContextualDialogDefaultTheme','ContextualDialogKeepInViewport','ContextualDialogFitInViewport_PUSHSAFE','ContextualLayer','CSS','DOM','Event','JSXDOM','LayerButtons','LayerFormHooks','LayerRefocusOnHide','LayerHideOnTransition','LayerMouseHooks','Style','removeFromArray','shield'],(function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=0,n=300;k=babelHelpers.inherits(o,c('ContextualLayer'));l=k&&k.prototype;function o(p,q){'use strict';l.constructor.call(this,p,q);this._footer=null;}o.prototype._configure=function(p,q){'use strict';Object.assign(p,p.theme||c('ContextualDialogDefaultTheme'));var r=p.arrowBehavior||c('ContextualDialogArrow');p.addedBehaviors=p.addedBehaviors||[];p.addedBehaviors.push(r);l._configure.call(this,p,q);this._footer=c('DOM').scry(q,"div._572u")[0];if(this._footer)if(this._footer.children.length===1&&this._footer.children[0].nodeName==='DIV'&&this._footer.children[0].children.length===0){this._footer.parentNode.removeChild(this._footer);}else c('CSS').addClass(this.getContentRoot(),"_kc");if(p.hoverContext)this._registerHoverHandlers(p.hoverContext,p.hoverShowDelay,p.hoverHideDelay);};o.prototype._registerHoverHandlers=function(p,q,r){'use strict';if(q==null)q=m;if(r==null)r=n;var s,t,u=function(event){clearTimeout(t);s=setTimeout(c('shield')(this.show,this),q);}.bind(this),v=function(event){if(this._isHoverLocked())return;clearTimeout(s);t=setTimeout(this.hide.bind(this),r);}.bind(this),w=c('Event').listen(p,'mouseenter',u),x=c('Event').listen(p,'mouseleave',v),y=this.subscribe('mouseenter',u),z=this.subscribe('mouseleave',v);this.subscribe('destroy',function(){clearTimeout(t);w.remove();x.remove();y.unsubscribe();z.unsubscribe();});};o.prototype._getDefaultBehaviors=function(){'use strict';var p=l._getDefaultBehaviors.call(this);c('removeFromArray')(p,c('LayerHideOnTransition'));return p.concat([c('AccessibleLayer'),c('LayerRefocusOnHide'),c('ContextualDialogKeepInViewport'),c('ContextualDialogFitInViewport_PUSHSAFE'),c('LayerButtons'),c('LayerFormHooks'),c('LayerMouseHooks'),c('ContextualDialogARIA')]);};o.prototype._buildWrapper=function(p,q){'use strict';this._innerWrapper=c('JSXDOM').div(null,q);var r=l._buildWrapper.call(this,p,this._innerWrapper);c('CSS').addClass(r,p.wrapperClassName);this.replaceEntireLayerContents(q);!(this.getContent()===q)?j(0):void 0;this.setWidth(p.width);return r;};o.prototype.getContentRoot=function(){'use strict';!!!this._innerWrapper?j(0):void 0;return this._innerWrapper;};o.prototype.setContent=function(p){'use strict';j(0);};o.prototype.replaceEntireLayerContents=function(p){'use strict';this._content=null;c('DOM').empty(this.getContentRoot());this.setInnerContent(p);};o.prototype.setInnerContent=function(p){'use strict';c('CSS').addClass(p,"_53ij");if(this.getContent()){c('DOM').replace(this.getContent(),p);}else c('DOM').appendContent(this.getContentRoot(),p);this._content=p;this.isShown()&&this.updatePosition();};o.prototype.setWidth=function(p){'use strict';c('Style').set(this.getContentRoot(),'width',p?Math.floor(p)+'px':'');return this;};o.prototype.getFooter=function(){'use strict';return this._footer;};o.prototype.lockHover=function(){'use strict';this._hoverLocked=true;return this;};o.prototype.unlockHover=function(){'use strict';this._hoverLocked=false;return this;};o.prototype._isHoverLocked=function(){'use strict';return !!this._hoverLocked;};o.setContext=function(p,q){'use strict';p.setContext(q);};f.exports=o;}),null);
__d('ReactAbstractContextualDialog',['ContextualDialog','ContextualDialogArrow','LayerAutoFocus','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','ReactDOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={createSpec:function j(k){return {displayName:k.displayName,propTypes:{position:h.oneOf(['above','below','left','right']),alignment:h.oneOf(['left','center','right']),offsetX:h.number,offsetY:h.number,width:h.number,autoFocus:h.bool,focusContextOnHide:h.bool,arrowBehavior:h.func,behaviors:h.object,shown:h.bool,context:h.object,contextRef:h.func,hoverContext:h.object,hoverContextRef:h.func,hoverShowDelay:h.number,hoverHideDelay:h.number,hideOnBlur:h.bool,hideOnEscape:h.bool,insertParent:h.object,onBeforeHide:h.func,onToggle:h.func,hasActionableContext:h.bool},immutableProps:{modal:null},createLayer:function l(m){var n=this.props.context||c('ReactDOM').findDOMNode(this.props.contextRef()),o=this.props.hoverContext||this.props.hoverContextRef&&c('ReactDOM').findDOMNode(this.props.hoverContextRef()),p=babelHelpers['extends']({context:n,hoverContext:o,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||c('ContextualDialogArrow'),addedBehaviors:this.enumerateBehaviors(this.props.behaviors)},k||{}),q=new (c('ContextualDialog'))(p,m);if(this.props.contextBounds)q.setContextWithBounds(n,this.props.contextBounds);if(this.props.autoFocus!==false)q.enableBehavior(c('LayerAutoFocus'));if(this.props.hideOnBlur===true)q.enableBehavior(c('LayerHideOnBlur'));if(this.props.hideOnEscape===true)q.enableBehavior(c('LayerHideOnEscape'));if(this.props.focusContextOnHide===false)q.disableBehavior(c('LayerRefocusOnHide'));if(this.props.onBeforeHide)q.subscribe('beforehide',this.props.onBeforeHide);if(this.props.insertParent)q.setInsertParent(this.props.insertParent);q.conditionShow(this.props.shown);return q;},receiveProps:function l(m,n){this.updateBehaviors(n.behaviors,m.behaviors);var o=m.context||m.contextRef&&c('ReactDOM').findDOMNode(m.contextRef());if(o)if(m.contextBounds){this.layer.setContextWithBounds(o,m.contextBounds);}else this.layer.setContext(o);this.layer.setPosition(m.position).setAlignment(m.alignment).setOffsetX(m.offsetX).setOffsetY(m.offsetY).setWidth(m.width).conditionShow(m.shown);}};}};f.exports=i;}),null);
__d('XUIAmbientNUXBody.react',['cx','React','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=c('joinClasses')("_21es",this.props.className);return (c('React').createElement('div',{className:m},c('React').createElement(c('XUICloseButton.react'),{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),c('React').createElement('div',{className:"_36gn"},this.props.children)));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={onCloseButtonClick:k.func};f.exports=l;}),null);
__d('XUIAmbientNUXTheme',['cx'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i;}),null);
__d('XUIAmbientNUX.react',['React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=300,l=380,m=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'XUIAmbientNUX',theme:c('XUIAmbientNUXTheme')}));h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=i.constructor).call.apply(o,[this].concat(r)),this.$XUIAmbientNUX1=function(){switch(this.props.width){case 'wide':return l;case 'custom':return this.props.customwidth;case 'auto':return null;default:return k;}}.bind(this),p;}n.prototype.render=function(){'use strict';return (c('React').createElement(m,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.props.context,contextRef:this.props.contextRef,focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,insertParent:this.props.insertParent,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onBeforeHide:this.props.onBeforeHide,position:this.props.position,shown:this.props.shown,width:this.$XUIAmbientNUX1(this.props)},c('React').createElement(c('XUIAmbientNUXBody.react'),{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));};n.propTypes={alignment:j.oneOf(['left','center','right']),behaviors:j.object,context:j.object,contextRef:j.func,customwidth:j.number,hasActionableContext:j.bool,insertParent:j.object,offsetX:j.number,offsetY:j.number,onBeforeHide:j.func,onCloseButtonClick:j.func,position:j.oneOf(['above','below','left','right']),shown:j.bool,width:j.oneOf(['wide','normal','auto','custom'])};f.exports=n;}),null);
__d('ContextualDialogXUITheme',['cx'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};f.exports=i;}),null);
__d('XUIContextualDialogBody.react',['React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:this.props.className},this.props.children));};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('XUIContextualDialogFooter.react',['cx','React','XUIOverlayFooter.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIOverlayFooter.react'),{className:"_572u"},this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUIContextualDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.use,n=c('joinClasses')("_47lu"+(m==='primary'?' '+"_47lv":'')+(m==='secondary'?' '+"_47mc":''),this.props.className);return (c('React').createElement('h3',{className:n},this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={use:k.oneOf(['primary','secondary'])};l.defaultProps={use:'primary'};f.exports=l;}),null);
__d('XUIContextualDialog.react',['cx','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'ReactXUIContextualDialog',theme:c('ContextualDialogXUITheme')}));i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.$XUIContextualDialog1=function(){return this.$XUIContextualDialog2(c('XUIContextualDialogBody.react'));}.bind(this),this.$XUIContextualDialog3=function(){return this.$XUIContextualDialog2(c('XUIContextualDialogTitle.react'));}.bind(this),this.$XUIContextualDialog4=function(){return this.$XUIContextualDialog2(c('XUIContextualDialogFooter.react'));}.bind(this),this.$XUIContextualDialog2=function(s){var t=null;c('React').Children.forEach(this.props.children,function(u){if(!t&&u.type===s)t=u;});return t;}.bind(this),this.updatePosition=function(){var s=this.refs.dialog;if(s)s.layer.updatePosition();}.bind(this),o;}m.prototype.render=function(){'use strict';var n=this.props.children,o=this.$XUIContextualDialog1();if(o)n=c('React').createElement('div',{className:"_53iv"},this.$XUIContextualDialog3(),o);return (c('React').createElement(l,babelHelpers['extends']({},this.props,{ref:'dialog'}),n,o?this.$XUIContextualDialog4():null));};m.propTypes={position:k.oneOf(['above','below','left','right']),alignment:k.oneOf(['left','center','right']),offsetX:k.number,offsetY:k.number,width:k.number,autoFocus:k.bool,arrowBehavior:k.func,behaviors:k.object,shown:k.bool,context:k.object,contextRef:k.func,hoverContext:k.object,hoverContextRef:k.func,hoverShowDelay:k.number,hoverHideDelay:k.number,hideOnBlur:k.bool,hideOnEscape:k.bool,onToggle:k.func,hasActionableContext:k.bool};m.defaultProps={hasActionableContext:false,hideOnEscape:true};m.WIDTH={NORMAL:312,WIDE:400};f.exports=m;}),null);
__d('DialogHideOnSuccess',['csx','cx','CSS'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this._layer=k;}j.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('success',this._handle.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype._handle=function(k,event){'use strict';if(c('CSS').matchesSelector(event.getTarget(),"._s"))this._layer.hide();};Object.assign(j.prototype,{_subscription:null});f.exports=j;}),null);
__d('ServerRedirect',['ReloadPage','goURI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={redirectPageTo:c('goURI'),reloadPage:c('ReloadPage').now};f.exports=h;}),null);
__d('ContextualLayerAsyncRelative',['Event','Parent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};h.prototype.disable=function(){'use strict';this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};h.prototype._attachListener=function(){'use strict';this._listener=c('Event').listen(this._layer.getRoot(),'click',this._onclick.bind(this));};h.prototype._onclick=function(i){'use strict';var j=c('Parent').byTag(i.getTarget(),'A');if(!j)return;var k=j.getAttribute('ajaxify'),l=j.href,m=k||l;if(j.rel==='async'||j.rel==='async-post'){e(['AsyncRequest'],function(n){n.bootstrap(m,this._layer.getContext(),j.rel==='async-post');}.bind(this));return false;}};Object.assign(h.prototype,{_layerSubscription:null,_listener:null});f.exports=h;}),null);
__d('LayerRemoveOnHide',['DOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('hide',c('DOM').remove.bind(null,this._layer.getRoot()));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('padNumber',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=i.toString();if(k.length>=j)return k;return '0'.repeat(j-k.length)+k;}f.exports=h;}),null);
__d('DateStrings',['fbt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j,k,l,m,n,o,p,q={getWeekdayName:function r(s){if(!n)n=[h._("Ch\u1ee7 Nh\u1eadt"),h._("Th\u1ee9 Hai"),h._("Th\u1ee9 Ba"),h._("Th\u1ee9 T\u01b0"),h._("Th\u1ee9 N\u0103m"),h._("Th\u1ee9 S\u00e1u"),h._("Th\u1ee9 b\u1ea3y")];return n[s];},getUppercaseWeekdayName:function r(s){if(!p)p=[h._("CH\u1ee6 NH\u1eacT"),h._("TH\u1ee8 HAI"),h._("TH\u1ee8 BA"),h._("TH\u1ee8 T\u01af"),h._("TH\u1ee8 N\u0102M"),h._("TH\u1ee8 S\u00c1U"),h._("TH\u1ee8 B\u1ea2Y")];return p[s];},getWeekdayNameShort:function r(s){if(!o)o=[h._("CN"),h._("T2"),h._("T3"),h._("T4"),h._("T5"),h._("T6"),h._("T7")];return o[s];},getMonthName:function r(s){if(!i)i=[h._("Th\u00e1ng 1"),h._("th\u00e1ng 2"),h._("Th\u00e1ng 3"),h._("Th\u00e1ng 4"),h._("Th\u00e1ng 5"),h._("Th\u00e1ng 6"),h._("Th\u00e1ng 7"),h._("Th\u00e1ng 8"),h._("Th\u00e1ng 9"),h._("Th\u00e1ng 10"),h._("Th\u00e1ng 11"),h._("Th\u00e1ng 12")];return i[s-1];},getUppercaseMonthName:function r(s){if(!l)l=[h._("TH\u00c1NG 1"),h._("TH\u00c1NG 2"),h._("TH\u00c1NG 3"),h._("TH\u00c1NG 4"),h._("TH\u00c1NG 5"),h._("TH\u00c1NG 6"),h._("TH\u00c1NG 7"),h._("TH\u00c1NG 8"),h._("TH\u00c1NG 9"),h._("TH\u00c1NG 10"),h._("TH\u00c1NG 11"),h._("TH\u00c1NG 12")];return l[s-1];},getMonthNameShort:function r(s){if(!j)j=[h._("Th\u00e1ng 1"),h._("Th\u00e1ng 2"),h._("Th\u00e1ng 3"),h._("Th\u00e1ng 4"),h._("Th\u00e1ng 5"),h._("Th\u00e1ng 6"),h._("Th\u00e1ng 7"),h._("Th\u00e1ng 8"),h._("Th\u00e1ng 9"),h._("Th\u00e1ng 10"),h._("Th\u00e1ng 11"),h._("Th\u00e1ng 12")];return j[s-1];},getUppercaseMonthNameShort:function r(s){if(!k)k=[h._("TH1"),h._("TH2"),h._("TH3"),h._("TH4"),h._("TH5"),h._("TH6"),h._("TH7"),h._("TH8"),h._("TH9"),h._("TH10"),h._("TH11"),h._("TH12")];return k[s-1];},getOrdinalSuffix:function r(s){if(!m)m=['',h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st")];return m[s];},getDayLabel:function r(){return h._("Ng\u00e0y:");},getMonthLabel:function r(){return h._("Th\u00e1ng:");},getYearLabel:function r(){return h._("N\u0103m:");},getDayPlaceholder:function r(){return h._("dd");},getMonthPlaceholder:function r(){return h._("mm");},getYearPlaceholder:function r(){return h._("yyyy");},getHourPlaceholder:function r(){return h._("gi\u1edd");},getMinutePlaceholder:function r(){return h._("m");},get12HourClockSuffix:function r(s){if(s<12)return h._("s\u00e1ng");return h._("chi\u1ec1u");},getUppercase12HourClockSuffix:function r(s){if(s<12)return h._("SA");return h._("CH");}};f.exports=q;}),null);
__d('formatDate',['invariant','DateStrings','DateFormatConfig','padNumber'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(l,m,n){n=n||{};if(!m||!l)return '';if(typeof l==='string')l=parseInt(l,10);if(typeof l==='number')l=new Date(l*1000);!(l instanceof Date)?h(0):void 0;!!isNaN(l.getTime())?h(0):void 0;if(typeof m!=='string'){var o=j();for(var p in o){var q=o[p];if(q.start<=l.getTime()&&m[q.name]){m=m[q.name];break;}}}var r;if(n.skipPatternLocalization||!n.formatInternal&&k()||m.length===1){r=m;}else{!c('DateFormatConfig').formats[m]?h(0):void 0;r=c('DateFormatConfig').formats[m];}var s=n.utc?'getUTC':'get',t=l[s+'Date'](),u=l[s+'Day'](),v=l[s+'Month'](),w=l[s+'FullYear'](),x=l[s+'Hours'](),y=l[s+'Minutes'](),z=l[s+'Seconds'](),aa=l[s+'Milliseconds'](),ba='';for(var ca=0;ca<r.length;ca++){var da=r.charAt(ca);switch(da){case '\\':ca++;ba+=r.charAt(ca);break;case 'd':ba+=c('padNumber')(t,2);break;case 'j':ba+=t;break;case 'S':ba+=c('DateStrings').getOrdinalSuffix(t);break;case 'D':ba+=c('DateStrings').getWeekdayNameShort(u);break;case 'l':ba+=c('DateStrings').getWeekdayName(u);break;case 'F':case 'f':ba+=c('DateStrings').getMonthName(v+1);break;case 'M':ba+=c('DateStrings').getMonthNameShort(v+1);break;case 'm':ba+=c('padNumber')(v+1,2);break;case 'n':ba+=v+1;break;case 'Y':ba+=w;break;case 'y':ba+=(''+w).slice(2);break;case 'a':if(n.skipSuffixLocalization){ba+=x<12?'am':'pm';}else ba+=c('DateStrings').get12HourClockSuffix(x);break;case 'A':if(n.skipSuffixLocalization){ba+=x<12?'AM':'PM';}else ba+=c('DateStrings').getUppercase12HourClockSuffix(x);break;case 'g':ba+=x===0||x===12?12:x%12;break;case 'G':ba+=x;break;case 'h':if(x===0||x===12){ba+=12;}else ba+=c('padNumber')(x%12,2);break;case 'H':ba+=c('padNumber')(x,2);break;case 'i':ba+=c('padNumber')(y,2);break;case 's':ba+=c('padNumber')(z,2);break;case 'X':ba+=c('padNumber')(aa,3);break;default:ba+=da;}}return ba;}function j(){var l=new Date(),m=l.getTime(),n=l.getFullYear(),o=l.getDate()-(l.getDay()-c('DateFormatConfig').weekStart+6)%7,p=new Date(n,l.getMonth()+1,0).getDate(),q=new Date(n,1,29).getMonth()===1?366:365,r=1000*60*60*24;return [{name:'today',start:l.setHours(0,0,0,0)},{name:'withinDay',start:m-r},{name:'thisWeek',start:new Date(l.getTime()).setDate(o)},{name:'withinWeek',start:m-r*7},{name:'thisMonth',start:l.setDate(1)},{name:'withinMonth',start:m-r*p},{name:'thisYear',start:l.setMonth(0)},{name:'withinYear',start:m-r*q},{name:'older',start:-Infinity}];}i.periodNames=['today','thisWeek','thisMonth','thisYear','withinDay','withinWeek','withinMonth','withinYear','older'];function k(){if(typeof window==='undefined'||!window||!window.location||!window.location.pathname)return false;var l=window.location.pathname,m='/intern';return l.substr(0,m.length)===m;}f.exports=i;}),null);
__d("XBasicFBNuxDismissController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/megaphone\/dismiss_fbnux\/",{nux_id:{type:"Int",required:true}});}),null);