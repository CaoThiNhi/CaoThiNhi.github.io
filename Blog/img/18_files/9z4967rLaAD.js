if (self.CavalryLogger) { CavalryLogger.start_js(["OUmlD"]); }

__d('PopoverMenu.react',['cx','CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','SubscriptionsHandler','joinClasses','areEqual','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReactPopoverMenu1=null,this.$ReactPopoverMenu5=function(){if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu6();this.$ReactPopoverMenu3.setMenu(this.$ReactPopoverMenu4(this.props.menu));}.bind(this),this.$ReactPopoverMenu4=function(r){var s=r.props,t=new r.type(s);this.$ReactPopoverMenu1=new (c('SubscriptionsHandler'))();if(s.onItemClick)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('itemclick',s.onItemClick));if(s.onItemFocus)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('focus',s.onItemFocus));if(s.onItemBlur)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('blur',s.onItemBlur));if(s.onChange)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('change',s.onChange));if(this.props.onShow)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('hide',this.props.onHide));return t;}.bind(this),this.getMenu=function(){return this.$ReactPopoverMenu3.getMenu();}.bind(this),this.isShown=function(){return !!(this.$ReactPopoverMenu2&&this.$ReactPopoverMenu2.isShown());}.bind(this),this.showPopover=function(r){this.$ReactPopoverMenu2.showLayer();if(r){var s=this.$ReactPopoverMenu3.getMenu();s.blur();s.focusAnItem(r);}}.bind(this),this.hidePopover=function(){var r=this.$ReactPopoverMenu2;if(r&&r.isShown())r.hideLayer();}.bind(this),this.getFocusedItem=function(){var r=this.$ReactPopoverMenu3.getMenu();return r.getFocusedItem();}.bind(this),this.$ReactPopoverMenu6=function(){var r=this.getMenu();r&&r.forEachItem(function(s){var t=s.getRoot().firstElementChild;t&&c('ReactDOM').unmountComponentAtNode(t);});}.bind(this),n;}l.getFirstChild=function(m){'use strict';var n=m.children;return Array.isArray(n)?n[0]:n;};l.getButtonSize=function(m){'use strict';var n=l.getFirstChild(m);return n&&n.type.getButtonSize(n.props);};l.prototype.componentDidMount=function(){'use strict';var m=c('ReactDOM').findDOMNode(this.refs.root),n=m.firstChild;c('CSS').addClass(n,"_p");this.$ReactPopoverMenu2=new (c('Popover'))(m,n,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter});this.$ReactPopoverMenu3=new (c('PopoverMenu'))(this.$ReactPopoverMenu2,n,this.$ReactPopoverMenu4(this.props.menu),this.props.behaviors);};l.prototype.componentDidUpdate=function(m){'use strict';if(!c('areEqual')(m.menu,this.props.menu))c('setImmediate')(this.$ReactPopoverMenu5);if(this.props.alignh!==m.alignh)this.$ReactPopoverMenu3.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==m.disabled)if(this.props.disabled){this.$ReactPopoverMenu3.disable();}else this.$ReactPopoverMenu3.enable();};l.prototype.render=function(){'use strict';var m=c('React').Children.map(this.props.children,function(o,p){if(p===0){return c('React').cloneElement(o,{className:c('joinClasses')(o.props.className,"_p")});}else return o;}),n=Object.assign({},this.props);delete n.onShow;delete n.onHide;delete n.alignh;delete n.position;delete n.layerBehaviors;delete n.behaviors;delete n.menu;delete n.disabled;delete n.disableArrowKeyActivation;delete n.enableActivationOnEnter;return c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,"uiPopover"),ref:'root',disabled:null}),m);};l.prototype.componentWillUnmount=function(){'use strict';this.hidePopover();if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu3&&this.$ReactPopoverMenu3.destroy();};l.propTypes={alignh:k.oneOf(['left','center','right']),alignv:k.oneOf(['baseline','bottom','middle','top']),position:k.oneOf(['above','below','left','right']),layerBehaviors:k.array,menu:k.object.isRequired,disabled:k.bool,disableArrowKeyActivation:k.bool,enableActivationOnEnter:k.bool};l.defaultProps={alignv:'middle'};f.exports=l;}),null);
__d('MenuItemNoAction',['MenuItem'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('MenuItem'));i=h&&h.prototype;j.prototype.hasAction=function(){'use strict';return false;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('ReactMenu',['cx','Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','React','SelectableMenu','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;if(c.__markCompiled)c.__markCompiled();function m(q){var r=[];c('React').Children.forEach(q,function(s){if(s)r.push(s);});return r;}function n(q){q.isReactLegacyFactory={};q.type=q;}i=babelHelpers.inherits(o,c('Menu'));j=i&&i.prototype;function o(q,r){'use strict';var s=babelHelpers['extends']({theme:c('MenuTheme'),maxheight:q?q.maxheight:null,className:q?q.className:null},r);j.constructor.call(this,m(q.children),s);}n(o);k=babelHelpers.inherits(p,c('SelectableMenu'));l=k&&k.prototype;function p(q,r){'use strict';var s=babelHelpers['extends']({className:c('joinClasses')("_57di",q?q.className:null),theme:c('MenuTheme'),multiple:q&&q.multiple,maxheight:q?q.maxheight:null},r);l.constructor.call(this,m(q.children),s);}n(p);o.SelectableMenu=p;n(c('MenuItem'));o.Item=c('MenuItem');o.ItemNoAction=c('MenuItemNoAction');n(c('MenuSelectableItem'));o.SelectableItem=c('MenuSelectableItem');f.exports=o;}),null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],(function a(b,c,d,e,f,g){var h,i,j,k;if(c.__markCompiled)c.__markCompiled();function l(o){o.isReactLegacyFactory={};o.type=o;}h=babelHelpers.inherits(m,c('ReactMenu'));i=h&&h.prototype;function m(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];i.constructor.call(this,o,p);}l(m);j=babelHelpers.inherits(n,c('ReactMenu').SelectableMenu);k=j&&j.prototype;function n(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];k.constructor.call(this,o,p);}l(n);m.SelectableMenu=n;m.Item=c('ReactMenu').Item;m.SelectableItem=c('ReactMenu').SelectableItem;f.exports=m;}),null);
__d('UFIOrderingModeSelector.react',['cx','invariant','ix','Image.react','InlineBlock.react','Link.react','PopoverMenu.react','React','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes,n=c('ReactXUIMenu').SelectableMenu,o=c('ReactXUIMenu').SelectableItem;k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.onMenuItemClick=function(v,w){this.props.onOrderChanged(w.item.getValue());}.bind(this),r;}p.prototype.render=function(){'use strict';if(this.props.orderingModes.length===0)return null;var q=this.props.orderingModes.filter(function(s){return s.value==this.props.selectedMode;}.bind(this)).map(function(s){return s.name;}).pop();!q?i(0):void 0;var r=c('React').createElement(n,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.orderingModes.map(function(s){return (c('React').createElement(o,{key:s.value,value:s.value,label:s.name,selected:s.value===this.props.selectedMode},c('React').createElement('div',{className:"_3scm"},c('React').createElement('div',{className:"_3scn"},s.name),c('React').createElement('div',{className:"_3sco"},s.description))));}.bind(this)));return (c('React').createElement('div',{className:"_3scp"},c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('PopoverMenu.react'),{className:"_3scs",menu:r,alignh:'right'},c('React').createElement(c('Link.react'),null,q,c('React').createElement(c('Image.react'),{className:"_3sct",src:j('/images/ui/xhp/link/more/down_caret.gif')}))))));};p.propTypes={onOrderChanged:m.func.isRequired,orderingModes:m.arrayOf(m.shape({name:m.string.isRequired,description:m.string,value:m.string.isRequired})).isRequired,selectedMode:m.string.isRequired};f.exports=p;}),null);
__d('UFIOrderingModeSelectorContainer.react',['BanzaiLogger','Random','React','SubscriptionsHandler','UFIConfig','UFIInstanceAction','UFIOrderingModeSelector.react','UFIOrderingModeStore','UFISharedDispatcher'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={selectedMode:c('UFIOrderingModeStore').getOrderingMode(c('UFIOrderingModeStore').getState(),this.props.ufiInstanceID,this.props.feedback.orderingmodes,this.props.feedback.defaultcommentorderingmode)},this.$UFIOrderingModeSelectorContainer1=null,this.onOrderChanged=function(q){var r=this.props.feedback;if(r.orderingmodes&&c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random())c('BanzaiLogger').log('CommentsOrderingModeSelectorUsageLoggerConfig',{start_order:this.props.selectedMode,end_order:q,post_fbid:r.commentstargetfbid,post_owner_fbid:r.ownerid,available_orders:r.orderingmodes.map(function(s){return s.value;})});c('UFISharedDispatcher').dispatch(c('UFIInstanceAction').changeOrderingMode(this.props.ufiInstanceID,q));}.bind(this),m;}k.prototype.componentDidMount=function(){'use strict';this.$UFIOrderingModeSelectorContainer1=new (c('SubscriptionsHandler'))();this.$UFIOrderingModeSelectorContainer1.addSubscriptions(c('UFIOrderingModeStore').addListener(function(){if(!this.$UFIOrderingModeSelectorContainer1)return;this.setState({selectedMode:c('UFIOrderingModeStore').getOrderingMode(c('UFIOrderingModeStore').getState(),this.props.ufiInstanceID,this.props.feedback.orderingmodes,this.props.feedback.defaultcommentorderingmode)});}.bind(this)));};k.prototype.componentWillUnmount=function(){'use strict';if(this.$UFIOrderingModeSelectorContainer1){this.$UFIOrderingModeSelectorContainer1.release();this.$UFIOrderingModeSelectorContainer1=null;}};k.prototype.shouldComponentUpdate=function(l,m){'use strict';return this.state.selectedMode!==m.selectedMode;};k.prototype.render=function(){'use strict';return (c('React').createElement(c('UFIOrderingModeSelector.react'),{onOrderChanged:this.onOrderChanged,orderingModes:this.props.feedback.orderingmodes,selectedMode:this.state.selectedMode}));};k.propTypes={feedback:j.shape({defaultcommentorderingmode:j.string.isRequired,orderingmodes:j.arrayOf(j.shape({name:j.string.isRequired,description:j.string.isRequired,selected:j.bool.isRequired,value:j.string.isRequired})).isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired,ufiInstanceID:j.string.isRequired};f.exports=k;}),null);
__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={createSpec:function j(k){return {displayName:k.displayName,propTypes:{behaviors:h.object,className:h.string,modal:h.bool,autohide:h.number,width:h.number,titleID:h.string,causalElement:h.object,causalElementRef:h.func,shown:h.bool,layerHideOnBlur:h.bool,hideOnEscape:h.bool,onToggle:h.func,fixedTopPosition:h.number},createLayer:function l(m){var n=this.props.className,o=babelHelpers['extends']({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:n?n.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},k||{}),p=babelHelpers['extends']({},k.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)p.LayerHideOnBlur=c('LayerHideOnBlur');if(this.props.hideOnEscape===true)p.LayerHideOnEscape=c('LayerHideOnEscape');o.addedBehaviors=this.enumerateBehaviors(p);var q=new (c('DialogX'))(o,m);q.conditionShow(this.props.shown);return q;},receiveProps:function l(m,n){this.updateBehaviors(n.behaviors,m.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(m.shown);this.layer.setWidth(m.width);m.shown&&this.layer.updatePosition();}},_getCausalElement:function l(){var m;if(this.props.causalElementRef){m=c('ReactDOM').findDOMNode(this.props.causalElementRef());}else m=this.props.causalElement;return m;}};}};f.exports=i;}),null);
__d('PopoverMenuContextMinWidth',['cx','CSS','Style','shield'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};i.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateWidth,this));var j=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateWidth();};i.prototype._updateWidth=function(){'use strict';var j=this._menu.getRoot(),k=this._popoverMenu.getTriggerElem(),l=k.offsetWidth;c('Style').set(j,'min-width',l+'px');c('CSS').conditionClass(j,"_575s",l>=j.offsetWidth);};Object.assign(i.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();this._triggerElem=j.getTriggerElem();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};i.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateBorder,this));var j=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateBorder();};i.prototype._updateBorder=function(){'use strict';var j=this._menu.getRoot(),k=this._triggerElem.offsetWidth,l=Math.max(j.offsetWidth-k,0);c('Style').set(this._shortBorder,'width',l+'px');};i.prototype._renderShortBorder=function(j){'use strict';this._shortBorder=c('DOM').create('div',{className:"_54hx"});c('DOM').appendContent(j,this._shortBorder);c('CSS').addClass(j,"_54hy");};i.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){c('DOM').remove(this._shortBorder);this._shortBorder=null;c('CSS').removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};i.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(i.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('ReactSelectorUtils',['React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={processMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=void 0,n=c('React').Children.map(j,function(o){if(o){var p=o.props.value===k;o=c('React').cloneElement(o,{selected:p});if(p)m=o;return o;}});return {items:n,selectedItem:m};},processMultiMenuItems:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],m=[],n=j;if(k)n=c('React').Children.map(j,function(o){if(o){var p=k.some(function(q){return q===o.props.value;});o=c('React').cloneElement(o,{selected:p});if(p)m.push(o);return o;}});return {items:n,selectedItems:m};}};f.exports=h;}),null);
__d('AbstractSelector.react',['cx','invariant','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','React','ReactSelectorUtils','intlList','joinClasses'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;function k(m,n,o){if(m[n]==null)return;var p=Array.isArray(m[n]);if(m.multiple){if(!p)return new Error('You are trying to set a single value for `'+n+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(p)return new Error('You are trying to set an array of values for `'+n+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var l=c('React').createClass({displayName:'AbstractSelector',propTypes:{config:j.object.isRequired,alignh:j.oneOf(['left','center','right']),name:j.string,overlappingborder:j.bool,onChange:j.func,disabled:j.bool,maxheight:j.number,multiple:j.bool,defaultLabel:j.string,defaultValue:k,value:k,initialValue:k},getInitialState:function m(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function m(n){!(this.refs&&this.refs.popover)?i(0):void 0;this._internalChange=true;this.refs.popover.getMenu().setValue(n);this._internalChange=false;},onChange:function m(n,o){if(this._internalChange)return;if(this.props.value==null){var p=null;if(this.props.multiple){p=o.map(function(q){return q.value;});}else p=o.value;this.setState({value:p});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(o);},componentWillReceiveProps:function m(n){if(n.value!=null){this.setState({value:n.value});}else if(this.props.multiple!==n.multiple)this.setState({value:n.multiple?[this.state.value]:this.state.value[0]});},render:function m(){var n=this.props.config,o=!this.props.multiple?c('ReactSelectorUtils').processMenuItems(this.props.children,this.state.value):c('ReactSelectorUtils').processMultiMenuItems(this.props.children,this.state.value),p=c('React').cloneElement(n.menu,{children:o.items,className:c('joinClasses')("_575t",n.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),q='',r=null;if(!this.props.multiple){var s=o.selectedItem;q=s.props.label||s.props.children;if(s.props.icon)r=c('React').cloneElement(s.props.icon,{});}else{var t=o.selectedItems;if(!t.length){q=this.props.defaultLabel;}else q=c('intlList')(t.map(function(ba){return ba.props.children;}),c('intlList').CONJUNCTIONS.NONE);}var u={label:q,disabled:this.props.disabled};if(r)u.image=r;var v=c('React').cloneElement(n.button,u),w=[c('ContextualLayerAutoFlip')];if(n.layerBehaviors)w=w.concat(n.layerBehaviors);var x=[c('PopoverMenuContextMinWidth')];if(this.props.overlappingborder)x.push(c('PopoverMenuOverlappingBorder'));var y=null;if(this.props.multiple){var z=this.props.name+'[]',aa;if(this.state.value)aa=this.state.value.map(function(ba){return (c('React').createElement('input',{key:ba,type:'hidden',name:z,value:ba}));});y=c('React').createElement('div',null,aa);}else y=c('React').createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle',name:null}),c('React').createElement(c('PopoverMenu.react'),{ref:'popover',menu:p,alignh:this.props.alignh,layerBehaviors:w,behaviors:x,disabled:this.props.disabled},v),y));},showMenu:function m(){!this.isMounted()?i(0):void 0;this.refs.popover.showPopover();},hideMenu:function m(){!this.isMounted()?i(0):void 0;this.refs.popover.hidePopover();}});f.exports=l;}),null);
__d('XUIDialogCancelButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("H\u1ee7y")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("OK")})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};f.exports=m;}),null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('ReactLayer').createClass(c('AbstractDialog.react').createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:c('LayerFadeOnShow')}}));f.exports=h;}),null);
__d('XUIDialogBody.react',['cx','React','joinClasses','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_4-i2"+(!this.props.useCustomPadding?' '+"_pig":'');return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m),display:'block',size:this.props.fontSize}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),useCustomPadding:k.bool};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_5a8u"+(this.props.fullBleedBorder?' '+"_27qq":'');return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m)}),c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,this.props.leftContent),c('React').createElement('div',null,this.props.children)))));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),fullBleedBorder:k.bool,leftContent:k.object};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUISelectorButton.react',['invariant','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';!!this.props.theme?h(0):void 0;return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{theme:'dark'})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUISelector.react',['invariant','AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactXUIMenu','XUISelectorButton.react'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('ReactXUIMenu').SelectableMenu,j=c('ReactXUIMenu').SelectableItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:k.array,maxheight:k.number,multiple:k.bool,disabled:k.bool,haschevron:k.bool,maxwidth:k.number,size:k.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:k.bool,use:k.oneOf(['default','special','confirm'])},statics:{getButtonSize:function m(n){return n.size||'medium';}},getDefaultProps:function m(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function m(){var n,o=[];c('React').Children.forEach(this.props.children,function(q){if(q)o.push(q);});if(o[0]&&o[0].type===c('XUISelectorButton.react')){n=o[0];o=o.slice(1);}else n=c('React').createElement(c('XUISelectorButton.react'),{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var p={button:n,menu:c('React').createElement(i,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([c('ContextualLayerPositionClassOnContext')])};return (c('React').createElement(c('AbstractSelector.react'),babelHelpers['extends']({},this.props,{ref:'abstractSelector',config:p}),o));},showMenu:function m(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.showMenu();},hideMenu:function m(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.hideMenu();}});l.Option=j;f.exports=l;}),null);
__d('getInlineBoundingRect',['Rect'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c('Rect').getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new (c('Rect'))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),'viewport').convertTo('document'),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x;}if(o.contains(j))m=true;}if(!l)l=c('Rect').getElementBounds(i);return l;}f.exports=h;}),null);
__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c('DOM').create('div',{className:'tooltipContent','data-testid':'tooltip_testid'});n=c('getOrCreateDOMID')(m);var u=c('DOM').create('i',{className:'arrow'}),v=c('DOM').create('div',{className:'uiTooltipX'},[m,u]);l=new (c('ContextualLayer'))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c('ContextualLayerAutoFlip'));}}function r(u,v){t._show(u,h._("\u0110ang t\u1ea3i..."));new (c('AsyncRequest'))(v).setHandler(function(w){t._show(u,w.getPayload());}).setErrorHandler(c('emptyFunction')).send();}var s;c('Event').listen(document.documentElement,'mouseover',function(event){s=event;c('setImmediate')(function(){s=null;});});var t=babelHelpers['extends']({},c('TooltipData'),{isActive:function u(v){return v===i;},process:function u(v,w){if(!c('DOM').contains(v,w))return;if(v!==i){t.fetchIfNecessary(v);var x=t._get(v);if(x.suppress)return;if(x.delay){t._showWithDelay(v,x.delay);}else t.show(v);}},fetchIfNecessary:function u(v){var w=v.getAttribute('data-tooltip-uri');if(w){v.removeAttribute('data-tooltip-uri');r(v,w);}},hide:function u(){if(i){l.hide();i=null;while(o.length)o.pop().remove();}},_show:function u(v,w){t._store({context:v,content:w});t.isActive(v)&&t.show(v);},show:function u(v){var w=function ha(){v.setAttribute('aria-describedby',n);l.show();},x=function ha(){v.removeAttribute('aria-describedby');t.hide();},y=function ha(ia){if(!c('DOM').contains(i,ia.getTarget()))x();};q();x();var z=t._get(v);if(z.suppress||t.allSuppressed)return;var aa=z.content;if(z.overflowDisplay){if(v.offsetWidth>=v.scrollWidth)return;if(!aa)aa=c('getElementText')(v);}if(!aa)return;var ba=0,ca=0;if(z.position==='left'||z.position==='right'){ca=(v.offsetHeight-28)/2;}else if(z.alignH!=='center'){var da=v.offsetWidth;if(da<32)ba=(da-32)/2*(z.alignH==='right'?-1:1);}l.setContextWithBounds(v,c('getInlineBoundingRect')(v,s&&c('Vector').getEventPosition(s))).setOffsetX(ba).setOffsetY(ca).setPosition(z.position).setAlignment(z.alignH);if(typeof aa==='string'){c('CSS').addClass(l.getRoot(),'invisible_elem');var ea=c('DOM').create('span',{},c('nl2br')(aa));if(z.textDirection)ea=c('DOM').create('bdo',{dir:z.textDirection},ea);var fa=c('DOM').create('div',{className:'tooltipText'},ea);c('DOM').setContent(m,fa);w();c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{c('DOM').setContent(m,aa);w();}o.push(c('Event').listen(document.documentElement,'mouseover',y),c('Event').listen(document.documentElement,'focusin',y));var ga=c('Style').getScrollParent(v);if(ga!==window)o.push(c('Event').listen(ga,'scroll',x));if(!z.persistOnClick)o.push(c('Event').listen(v,'click',x));i=v;},_showWithDelay:function u(v,w){if(v!==j)t._clearDelay();if(!k){var x=function y(z){if(!c('DOM').contains(j,z.getTarget()))t._clearDelay();};p.push(c('Event').listen(document.documentElement,'mouseover',x),c('Event').listen(document.documentElement,'focusin',x));j=v;k=setTimeout(function(){t._clearDelay();t.show(v);},w);}},_clearDelay:function u(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove();}});c('Event').listen(window,'scroll',t.hide);f.exports=t;}),null);
__d("VideoData",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$VideoData1=i;}h.prototype.hasHD=function(){"use strict";return !!this.$VideoData1.hd_src;};h.prototype.getEncodingTag=function(){"use strict";return this.$VideoData1.encoding_tag;};h.prototype.getVideoID=function(){"use strict";return this.$VideoData1.video_id;};h.prototype.getRotation=function(){"use strict";return this.$VideoData1.rotation;};h.prototype.hasSubtitles=function(){"use strict";return !!this.$VideoData1.subtitles_src;};h.prototype.hasDashManifest=function(){"use strict";return !!this.$VideoData1.dash_manifest;};h.prototype.getDashManifest=function(){"use strict";return this.$VideoData1.dash_manifest;};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$VideoData1.dash_prefetched_representation_ids;};h.prototype.getSubtitlesSrc=function(){"use strict";return this.$VideoData1.subtitles_src;};h.prototype.getPlayableSrcSD=function(){"use strict";if(this.$VideoData1.sd_src_no_ratelimit)return this.$VideoData1.sd_src_no_ratelimit;return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcHD=function(){"use strict";if(this.$VideoData1.hd_src_no_ratelimit)return this.$VideoData1.hd_src_no_ratelimit;return this.$VideoData1.hd_src;};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$VideoData1.hd_src;};h.prototype.getLiveManifestUrl=function(){"use strict";return this.isLiveStream()&&this.$VideoData1.sd_src;};h.prototype.hasRateLimit=function(){"use strict";return !!this.$VideoData1.sd_src_no_ratelimit;};h.prototype.getStreamType=function(){"use strict";return this.$VideoData1.stream_type;};h.prototype.isLiveStream=function(){"use strict";return this.$VideoData1.is_live_stream;};h.prototype.liveRoutingToken=function(){"use strict";return this.$VideoData1.live_routing_token;};h.prototype.getHDTag=function(){"use strict";return this.$VideoData1.hd_tag;};h.prototype.getSDTag=function(){"use strict";return this.$VideoData1.sd_tag;};h.prototype.getProjection=function(){"use strict";return this.$VideoData1.projection;};h.prototype.getPlayerVersionOverwrite=function(){"use strict";return this.$VideoData1.player_version_overwrite;};h.prototype.getSilvercityUrl=function(){"use strict";return this.$VideoData1.silvercity_url;};h.prototype.getRawData=function(){"use strict";return this.$VideoData1;};f.exports=h;}),null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props);this.component=c('ReactDOM').render(k,this.container,j);};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;}),null);