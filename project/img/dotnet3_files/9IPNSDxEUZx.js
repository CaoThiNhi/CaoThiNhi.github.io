if (self.CavalryLogger) { CavalryLogger.start_js(["Bus0l"]); }

__d('Facepile.react',['cx','fbt','ix','intlSummarizeNumber','joinClasses','HovercardLink','Image.react','Link.react','List.react','React'],(function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={small:24,medium:32,large:50},m=c('React').createClass({displayName:'Facepile',defaultProps:{moreColor:'blue',moreCount:0,showHovercard:false},propTypes:{className:k.string,moreColor:k.oneOf(['blue','gray']),moreCount:k.number,moreDialogLink:k.string,morePageLink:k.string,numFaces:k.number,onFaceClick:k.func,onComponentDidMount:k.func,profiles:k.arrayOf(k.shape({URL:k.any,name:k.node.isRequired,uniqueID:k.any.isRequired,profilePicURI:k.any.isRequired})).isRequired,showHovercard:k.bool,size:k.oneOf([28,'small','medium','large']).isRequired},_onFaceClick:function n(o,p){if(this.props.onFaceClick)this.props.onFaceClick(o,p);},componentDidMount:function n(){if(this.props.onComponentDidMount)this.props.onComponentDidMount();},getPicSize:function n(){return l[this.props.size]||this.props.size;},renderFace:function n(o,p){var q=this.getPicSize(),r=c('HovercardLink').constructEndpoint({id:o.uniqueID}).toString();return (c('React').createElement('li',{className:"_43q7",key:o.uniqueID,onClick:this._onFaceClick.bind(this,o,p)},c('React').createElement(c('Link.react'),{href:o.URL,'aria-label':o.name,'data-hover':!this.props.showHovercard?'tooltip':null,'data-hovercard':this.props.showHovercard?r:null,'data-tooltip-content':o.name,className:"_2rt_ link",'data-ignoreclass':"_2rt_",'data-tooltip-alignh':'left'},c('React').createElement(c('Image.react'),{src:o.profilePicURI,width:q,height:q,className:'img'}))));},renderMore:function n(){if(!this.props.moreCount)return null;var o=this.props.numFaces!=null&&this.props.numFaces<=this.props.profiles.length?this.props.moreCount+1:this.props.moreCount,p=c('intlSummarizeNumber')(o,0),q=p.length,r;if(o===0||this.props.size==='small'&&q>2||this.props.size===28&&q>3||this.props.size==='medium'&&q>3||this.props.size==='large'&&q>6){r=c('React').createElement(c('Image.react'),{src:j('/images/questions/ellipsis.png')});}else r='+'+p;var s;if(o===1){s=i._("1 ng\u01b0\u1eddi kh\u00e1c");}else s=i._("{num} ng\u01b0\u1eddi kh\u00e1c",[i.param('num',o)]);var t=c('joinClasses')("_43q8"+(' '+"_43q7")+(q<2?' '+"_43qa":'')+(q===2?' '+"_43qb":'')+(q===3?' '+"_43qd":'')+(q>3?' '+"_43qe":'')+(this.props.moreColor==='blue'?' '+"_49c8":'')+(this.props.moreColor==='gray'?' '+"_49cb":''));return (c('React').createElement('li',{className:t},c('React').createElement('a',{'data-hover':'tooltip','data-tooltip-position':'right','data-tooltip-content':s,ajaxify:this.props.moreDialogLink,href:this.props.morePageLink,role:'button',rel:'dialog'},r)));},render:function n(){var o=c('joinClasses')(this.props.className,"_43qm"+(this.props.size==28?' '+"_3cxu":'')+(this.props.size=='small'?' '+"_43q9":'')+(this.props.size=='medium'?' '+"_43qc":'')+(this.props.size=='large'?' '+"_43qf":'')),p=this.props.numFaces==undefined?this.props.profiles:this.props.profiles.slice(0,this.props.moreCount?this.props.numFaces-1:this.props.numFaces);return (c('React').createElement('div',{className:o,style:this.props.style},c('React').createElement(c('List.react'),{className:"_4cg3",direction:'horizontal',spacing:'none',border:'none'},p.map(this.renderFace),this.renderMore())));}});f.exports=m;}),null);
__d('FBMorePager.react',['cx','OnVisible.react','React','getViewportDimensions','throttle'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(m,n){j.constructor.call(this,m,n);this.state={isMounted:false,throttledCallback:c('throttle')(function(){return this.$FBMorePager1();}.bind(this),m.throttle),visible:false};}k.prototype.componentWillReceiveProps=function(m){this.$FBMorePager2(m);if(this.props.throttle!==m.throttle)this.setState({throttledCallback:c('throttle')(function(){return this.$FBMorePager1();}.bind(this),m.throttle)});};k.prototype.componentWillMount=function(){this.setState({isMounted:true});};k.prototype.componentWillUnmount=function(){this.setState({isMounted:false});};k.prototype.render=function(){return (c('React').createElement('div',{className:"_3fv0"+(this.state.visible?' '+"_3fv1":'')},c('React').createElement(c('OnVisible.react'),{buffer:this.props.buffer,onVisible:function(){return this.$FBMorePager3();}.bind(this),ref:'onVisible'},this.props.children)));};k.prototype.$FBMorePager2=function(){this.setState({visible:false});this.refs.onVisible&&this.refs.onVisible.reset();};k.prototype.$FBMorePager3=function(){this.setState({visible:true});this.state.throttledCallback();};k.prototype.$FBMorePager1=function(){this.state.isMounted&&this.props.onMore&&this.props.onMore();};var l=Math.min(c('getViewportDimensions')().height,c('getViewportDimensions')().width)*2;k.defaultProps={buffer:l,throttle:1000};f.exports=k;}),null);
__d("XFriendJewelNotifsController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/friendjewel\/friendconfirmednotifications\/",{alert_ids:{type:"IntVector",required:true},action:{type:"String",required:true}});}),null);
__d('FriendConfirmedNotifs',['Event','shield','CSS','DOM','ge','Arbiter','AsyncRequest','Parent','XFriendJewelNotifsController','RequestsJewelController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$FriendConfirmedNotifs4=function(){if(!this.$FriendConfirmedNotifs2.length)return;this.$FriendConfirmedNotifs9(this.$FriendConfirmedNotifs2,'mark_read');this.$FriendConfirmedNotifs2=[];}.bind(this);this.$FriendConfirmedNotifs6=function(){c('CSS').removeClass(this.$FriendConfirmedNotifs3.childNodes[0],'friendConfirmedNotifsUnread');this.$FriendConfirmedNotifs5.remove();}.bind(this);c('Event').listen(i.close,'click',this.$FriendConfirmedNotifs1.bind(this));this.$FriendConfirmedNotifs2=i.unread_notifs;this.$FriendConfirmedNotifs3=i.unit;if(this.$FriendConfirmedNotifs2.length)if(c('RequestsJewelController').isOpen()){this.$FriendConfirmedNotifs4();}else{c('Arbiter').subscribeOnce('requestsJewel/opened',c('shield')(this.$FriendConfirmedNotifs4,this));c('Arbiter').subscribeOnce('requestsJewel/closed',c('shield')(this.$FriendConfirmedNotifs4,this));}this.$FriendConfirmedNotifs5=c('Event').listen(this.$FriendConfirmedNotifs3,'click',this.$FriendConfirmedNotifs6.bind(this));c('Arbiter').subscribeOnce('requestsJewel/closed',c('shield')(this.$FriendConfirmedNotifs6,this));this.$FriendConfirmedNotifs7=i.notifids;}h.prototype.$FriendConfirmedNotifs8=function(i){'use strict';var j=false,k=c('ge')('fbRequestsFlyout'),l=c('DOM').find(k,'.requestsUnitTitle'),m=c('DOM').scry(i,'.friendConfirmedNotifsUnitTitle')[0];if(!m){j=true;m=c('DOM').find(k,'.friendConfirmedNotifsUnitTitle');}if(j){c('CSS').show(c('DOM').find(l,'.requestsJewelLinks'));c('DOM').replace(m,l);}else c('CSS').hide(m);};h.prototype.$FriendConfirmedNotifs1=function(event){'use strict';var i=event.getTarget(),j=c('Parent').byClass(i,'friendConfirmedNotifsUnitAggregated'),k=j.parentElement;c('CSS').hide(j);this.$FriendConfirmedNotifs8(k);this.$FriendConfirmedNotifs9(this.$FriendConfirmedNotifs7,'xout');};h.prototype.$FriendConfirmedNotifs9=function(i,j){'use strict';var k=c('XFriendJewelNotifsController').getURIBuilder().setIntVector('alert_ids',i).setString('action',j).getURI();new (c('AsyncRequest'))().setURI(k).send();};f.exports=h;}),null);
__d('FriendConfirmedNotifsClickLogging',['Event','AsyncSignal'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={addClickLoggingListener:function i(j,k){c('Event').listen(j,'click',function(){new (c('AsyncSignal'))(k).send();});}};f.exports=h;}),null);
__d('StaticSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','TokenizeUtil'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$StaticSearchSource1=k;this.$StaticSearchSource2=new (c('SearchSourceCallbackManager'))({parseFn:c('TokenizeUtil').parse,matchFn:c('TokenizeUtil').isQueryMatch,indexFn:l});this.$StaticSearchSource2.addLocalEntries(this.$StaticSearchSource1);}j.prototype.searchImpl=function(k,l,m){'use strict';if(!k){l(this.$StaticSearchSource1,k);}else this.$StaticSearchSource2.search(k,l,m);};f.exports=j;}),null);
__d('JewelFollowupUnit',['csx','DOM','Arbiter','CSS'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l,m){this._followup=k;this._parentContainer=this._followup.parentNode;this._friendRequest=this._parentContainer.firstChild;l&&c('Arbiter').subscribe(l,function(o,p){p.uid==j&&this._showFollowup();}.bind(this));var n=c('DOM').scry(this._parentContainer,"._e7")[0];n&&(n.onclick=this._hideFollowup.bind(this));m&&c('Arbiter').subscribe(m,function(o,p){p.uid==j&&this._hideFollowup();}.bind(this));}Object.assign(i.prototype,{_showFollowup:function j(){this._updateRequestAnimClass();c('CSS').addClass(this._followup,'active');c('CSS').addClass(this._parentContainer,'followupActivated');},_hideFollowup:function j(){this._updateRequestAnimClass();c('CSS').removeClass(this._followup,'active');c('CSS').removeClass(this._parentContainer,'followupActivated');},_updateRequestAnimClass:function j(){c('CSS').conditionClass(this._friendRequest,'animated',c('CSS').hasClass(this._followup,'animated'));}});f.exports=i;}),null);
__d('InnerStickyArea',['cx','ContextualLayer','CSS','DataStore','DOM','Event','LayerHideOnTransition','Locale','Parent','Scroll','Style','Vector','removeFromArray'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(l){var m=c('Parent').byClass(l,'scrollable')||c('Style').getScrollParent(l.parentNode);return m;}function j(l){'use strict';var m=i(l);this.node=l;this._extracted=false;this._placeholder=c('DOM').create('div',{className:"_ptr"});k.getInstance(m).register(this);}j.prototype.update=function(){'use strict';if(this._extracted){c('Vector').getElementDimensions(this._placeholder).setElementWidth(this.node);c('Vector').getElementDimensions(this.node).setElementHeight(this._placeholder);}else c('Vector').getElementDimensions(this.node).setElementWidth(this.node).setElementHeight(this._placeholder);return this;};j.prototype.setExtracted=function(l){'use strict';if(l===this._extracted)return this;if(l){this.update();c('DOM').replace(this.node,this._placeholder);}else{c('Style').set(this.node,'height',null);c('Style').set(this.node,'width',null);if(this._placeholder.parentNode){c('DOM').replace(this._placeholder,this.node);}else c('DOM').remove(this.node);}this._extracted=l;return this;};j.prototype.getInlineNode=function(){'use strict';return this._extracted?this._placeholder:this.node;};j.prototype.isDisplayed=function(){'use strict';var l=this.getInlineNode();return l.offsetWidth>0&&l.offsetHeight>0;};j.prototype.getStickyContainer=function(){'use strict';return this._stickyContainer;};j.prototype.updateContainer=function(){'use strict';var l=i(this.node);k.getInstance(l).register(this);};j.prototype.destroy=function(){'use strict';this.getStickyContainer().unregister(this);};j.getStickyContainer=function(l){'use strict';return k.getInstance(i(l));};function k(l){'use strict';this.node=l;this._areas=[];this._fixTarget=null;this._fixedArea=null;this._initialized=false;this._layer=new (c('ContextualLayer'))({permanent:true},c('DOM').create('div')).setInsertParent(this.node.parentNode).disableBehavior(c('LayerHideOnTransition'));this._listener=c('Event').listen(l,'scroll',this.update.bind(this));c('CSS').addClass(l,"_pts");c('DataStore').set(l,'StickyContainer',this);}k.prototype.isDisplayed=function(){'use strict';return this.node.offsetWidth>0&&this.node.offsetHeight>0;};k.prototype.register=function(l){'use strict';if(l.getStickyContainer())l.getStickyContainer().unregister(l);l._stickyContainer=this;this._areas.push(l);this.update();return this;};k.prototype.unregister=function(l){'use strict';c('removeFromArray')(this._areas,l);this.update();};k.prototype.update=function(){'use strict';if(!this.isDisplayed())return this;var l=null,m=this,n=c('Scroll').getTop(this.node),o;for(var p=0;p<this._areas.length;p++){var q=this._areas[p],r=q.getInlineNode();if(!q.isDisplayed())continue;if(!c('DOM').contains(this.node.parentNode,r))continue;var s=r.offsetTop;if(s<=n){if(o===undefined||s>o){l=q;o=s;}}else if(l){var t=c('Vector').getElementDimensions(l.node).y;if(s-t<n)m=q;break;}}if(this._fixedArea===l&&this._fixTarget===m){this._fixedArea&&this._fixedArea.update();}else{if(this._fixedArea&&this._fixedArea!==l)this._unfixArea(this._fixedArea);if(l)this._fixAreaTo(l,m);this._fixedArea=l;this._fixTarget=m;}return this;};k.prototype.destroy=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};k.prototype._fixAreaTo=function(l,m){'use strict';this._layer.hide();l.setExtracted(true);if(m instanceof k){this._layer.setInsertParent(this.node.parentNode).setAlignment(c('Locale').isRTL()?'right':'left').setContext(this.node);}else this._layer.setInsertParent(this.node).setContext(m.node);this._layer.setContent(l.node).show();c('CSS').addClass(l.node,"_57kj");};k.prototype._unfixArea=function(l){'use strict';this._layer.hide();l.setExtracted(false);c('CSS').removeClass(l.node,"_57kj");};k.getInstance=function(l){'use strict';var m=c('DataStore').get(l,'StickyContainer');return m||new k(l);};f.exports=j;}),null);
__d("XBrowseQueryController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/search\/{*bqf}\/",{q:{type:"String"},bqf:{type:"String"},searchtype:{type:"Enum",enumType:1},urlslug:{type:"String"},page:{type:"Int"},ref:{type:"String"},query:{type:"String"},name:{type:"String"},cursor:{type:"String"},source:{type:"String"}});}),null);
__d("XSaveController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/save\/story\/",{story_id:{type:"String"},object_id:{type:"Int"},action:{type:"Enum",enumType:1},surface:{type:"Enum",enumType:1},mechanism:{type:"Enum",enumType:1},message_id:{type:"String"},tracking_message:{type:"String"}});}),null);