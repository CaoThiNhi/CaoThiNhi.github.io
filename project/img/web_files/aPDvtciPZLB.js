if (self.CavalryLogger) { CavalryLogger.start_js(["USTE5"]); }

__d('P2PChatThreadBanner.react',['cx','ix','Image.react','Layout.react','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','React','Set'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('Layout.react').FillColumn,m=c('Layout.react').Column,n=new (c('Set'))(),o=c('React').PropTypes;j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=k.constructor).call.apply(q,[this].concat(t)),this.$P2PChatThreadBanner1=false,this.log=function(v,w){c('P2PLogger').log(v,babelHelpers['extends']({www_event_flow:this.props.loggerEventFlow},w));}.bind(this),this.handleClick=function(v){v.stopPropagation();if(this.props.onClick)this.props.onClick();this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CHAT_THREAD_BANNER_CLICKED,{});c('P2PAPI').incrementBannerDismissals(this.props.bannerType);}.bind(this),this.handleClose=function(v){v.stopPropagation();this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CHAT_THREAD_BANNER_DISMISSED,{});c('P2PAPI').incrementBannerDismissals(this.props.bannerType);}.bind(this),this.hasRenderedSameBanner=function(){return !this.$P2PChatThreadBanner1&&n.has(this.props.bannerType);}.bind(this),r;}p.prototype.componentDidMount=function(){var q=this.props.bannerType;if(!n.has(q)){n.add(q);this.$P2PChatThreadBanner1=true;this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CHAT_THREAD_BANNER_VIEWED,{});c('P2PAPI').incrementBannerViews(this.props.bannerType);}};p.prototype.render=function(){var q=void 0,r=void 0;if(this.hasRenderedSameBanner())return null;if(this.props.bodyText)q=c('React').createElement('div',{className:"_1w2e"},this.props.bodyText);if(this.props.buttonText)r=c('React').createElement('a',{className:"_2hrk"},this.props.buttonText);return (c('React').createElement('div',{className:"_1w2f",onClick:this.handleClick},c('React').createElement('div',{className:"_3jht",onClick:this.handleClose},c('React').createElement(c('Image.react'),{className:"_47dg",height:9,src:i('/images/p2p/chat-thread-banner-close.png'),width:9})),c('React').createElement(c('Layout.react'),null,c('React').createElement(m,{className:"_1w2g"},c('React').createElement(c('Image.react'),{className:"_1w2h",height:15,src:i('/images/p2p/thread-banner-dollar.png'),width:15})),c('React').createElement(l,{className:"_1w2i"},c('React').createElement('div',{className:"_1w2j"+(!!q?' '+"_1w2k":'')},this.props.titleText),q,r))));};p.propTypes={bannerType:o.string.isRequired,bodyText:o.string,buttonText:o.string,loggerEventFlow:o.string.isRequired,onClick:o.func,titleText:o.string.isRequired};f.exports=p;}),null);
__d('P2PMessageSellerConfirmationDialog.react',['cx','fbt','ix','Image.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PListRow.react','P2PText.react','React','XUICloseButton.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;n.prototype.render=function(){return (c('React').createElement(c('P2PDialog.react'),{width:480},c('React').createElement(c('P2PDialogBody.react'),{className:"_4-ft"},c('React').createElement(c('XUICloseButton.react'),{className:"_4-fu",onClick:this.props.onCancel}),c('React').createElement(c('P2PListRow.react'),{offsetRight:16,offsetBottom:0},c('React').createElement(c('Image.react'),{height:100,src:j('/images/p2p/owl.png'),width:105}),c('React').createElement('div',null,c('React').createElement(c('P2PText.react'),{className:"_3-94",size:'large',type:'primary',weight:'bold'},i._("K\u1ebft n\u1ed1i v\u1edbi ng\u01b0\u1eddi b\u00e1n tr\u01b0\u1edbc khi b\u1ea1n thanh to\u00e1n")),c('React').createElement(c('P2PText.react'),{size:'medium',type:'primary'},i._("\u0110\u1ea3m b\u1ea3o th\u1ea3o lu\u1eadn gi\u00e1 v\u00e0 giao nh\u1eadn v\u1edbi ng\u01b0\u1eddi b\u00e1n tr\u01b0\u1edbc khi b\u1ea1n thanh to\u00e1n cho m\u1eb7t h\u00e0ng n\u00e0y."))))),c('React').createElement(c('P2PDialogFooter.react'),null,c('React').createElement(c('P2PButton.react'),{label:i._("B\u1eaft \u0111\u1ea7u cu\u1ed9c tr\u00f2 chuy\u1ec7n"),onClick:this.props.onCancel}),c('React').createElement(c('P2PButton.react'),{label:i._("Ti\u1ebfp t\u1ee5c thanh to\u00e1n"),onClick:this.props.onPay,use:'confirm'}))));};function n(){k.apply(this,arguments);}n.propTypes={onCancel:m.func.isRequired,onPay:m.func.isRequired};f.exports=n;}),null);
__d('P2PUserEligibilityStore',['P2PActionConstants','EventEmitter','MercuryIDs','P2PAPI','P2PDispatcher','P2PGKValues'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=void 0,k=void 0;h=babelHelpers.inherits(l,c('EventEmitter'));i=h&&h.prototype;function l(){i.constructor.call(this);k={};j=c('P2PDispatcher').register(this.onEventDispatched.bind(this));}l.prototype.onEventDispatched=function(m){var n=m.data,o=m.type;switch(o){case c('P2PActionConstants').USER_ELIGIBILITY_UDPATED:this.handleEligibilityUpdated(n);this.emit('change');break;}};l.prototype.getEligibilityByUserIDs=function(m){var n=[],o=void 0,p=void 0,q={};for(var r=0;r<m.length;r++){p=m[r];o=k[p];if(o===undefined){k[p]=null;n.push(p);}q[p]=k[p];}if(c('P2PGKValues').P2PEnabled&&n.length)c('P2PAPI').getUserEligibility({userIDs:n});return q;};l.prototype.getEligibilityByUserID=function(m){var n=this.getEligibilityByUserIDs([m]);return n[m];};l.prototype.getEligibilityByThreadID=function(m){return (this.getEligibilityByUserID(c('MercuryIDs').getUserIDFromThreadID(m)));};l.prototype.handleEligibilityUpdated=function(m){for(var n=0;n<m.length;n++)k[m[n].user_id]=m[n].p2p_eligible;};f.exports=new l();}),null);
__d("XC2CPayNUXBannerImpressionsUpdateController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/c2c\/pay_nux_banner_impressions\/_update\/",{});}),null);
__d('P2PProductItemChatThreadBanner.react',['cx','fbt','ix','AsyncRequest','ContextualLayerAutoFlip','BackgroundImage.react','Image.react','Layout.react','LineClamp.react','Link.react','MercuryIDs','MercuryMessages','P2PActions','P2PAPI','P2PGKValues','P2PLogger','P2PLinkConstants','P2PMessageSellerConfirmationDialog.react','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPlatformContextShape','P2PPlatformContextStore','P2PUserEligibilityStore','PopoverMenu.react','ReactComponentWithPureRenderMixin','React','ReactLayeredComponentMixin_DEPRECATED','ReactXUIMenu','Set','StoreAndPropBasedStateMixin','Tooltip.react','URI','XC2CPayNUXBannerImpressionsUpdateController','XUIAmbientNUX.react','XUIButton.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('Layout.react').Column,l=c('Layout.react').FillColumn,m=c('ReactXUIMenu').Item,n=false,o=new (c('Set'))(),p=c('React').createClass({displayName:'P2PProductItemChatThreadBanner',mixins:[c('ReactLayeredComponentMixin_DEPRECATED'),c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('P2PUserEligibilityStore'))],propTypes:{platformContext:c('P2PPlatformContextShape').isRequired},getInitialState:function q(){return {requestEnabled:c('P2PGKValues').P2PGroupCommerceRequestEnabled,showConfirmationDialog:false,showNUX:false};},statics:{calculateState:function q(r){return {canSendToRecipient:c('P2PUserEligibilityStore').getEligibilityByThreadID(c('P2PPlatformContextStore').getThreadIDFromPlatformContext(r.platformContext))};}},componentDidMount:function q(){var r=this.props.platformContext,s=c('P2PPlatformContextStore').getThreadIDFromPlatformContext(r);this.handleShouldShowPayNUX();if(!o.has(s)){o.add(s);if(c('P2PPlatformContextStore').isViewerSellerForPlatformContext(r)){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_SELLER_VIEWED);}else this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_BUYER_VIEWED);}},componentDidUpdate:function q(r,s){if(!s.canSendToRecipient&&this.state.canSendToRecipient)this.handleShouldShowPayNUX();},log:function q(r,s){var t={platform_logging_data:this.props.platformContext.product.loggingData};c('P2PLogger').log(r,babelHelpers['extends']({www_event_flow:c('P2PPaymentLoggerEventFlow').UI_FLOW_PLATFORM_BANNER},t,s));},handleShouldShowPayNUX:function q(){var r=this.props.platformContext,s=!n&&this.shouldRenderPayButton()&&r.banner.shouldShowPayNux;if(s){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_PAY_NUX_SHOWN);n=true;this.setState({showNUX:true});new (c('AsyncRequest'))().setURI(c('XC2CPayNUXBannerImpressionsUpdateController').getURIBuilder().getURI()).setMethod('POST').send();}},handleDismissClick:function q(r){r.preventDefault();var s=this.props.platformContext;c('P2PAPI').dismissPlatformContextBanner(s.id);if(c('P2PPlatformContextStore').isViewerSellerForPlatformContext(s)){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_SELLER_HIDE_CLICKED);}else this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_BUYER_HIDE_CLICKED);},handleSoldClick:function q(r){r.preventDefault();c('P2PAPI').markSoldPlatformContextProductItem(this.props.platformContext.id);this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_SOLD_CLICKED);},handleRequestClick:function q(r){r.preventDefault();this.openSendMoneyFlyoutRequestTab();this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_REQUEST_CLICKED);},hasNoMessagesFromSeller:function q(){var r=this.props.platformContext,s=c('P2PPlatformContextStore').getThreadIDFromPlatformContext(r),t=c('MercuryMessages').get().getCurrentlyLoadedMessages(s);if(!t)return true;var u=c('MercuryIDs').getParticipantIDFromUserID(r.sellerID),v=t.some(function(w){return w.author===u;});return !v;},handlePayClick:function q(r){r.preventDefault();if(this.hasNoMessagesFromSeller()){this.setState({showConfirmationDialog:true});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN);}else this.openSendMoneyFlyout();},openSendMoneyFlyoutRequestTab:function q(){var r=this.props.platformContext,s=r.product,t=c('P2PPlatformContextStore').getThreadIDFromPlatformContext(r);c('P2PActions').chatSendViewOpened({amount:s.formattedAmount,memoText:s.name,openRequestTab:true,platformData:{platformContextID:r.id,loggingData:s.loggingData},threadID:t});},openSendMoneyFlyout:function q(){var r=this.props.platformContext,s=r.product,t=c('P2PPlatformContextStore').getThreadIDFromPlatformContext(r);c('P2PActions').chatSendViewOpened({threadID:t,amount:s.formattedAmount,platformData:{platformContextID:r.id,loggingData:s.loggingData}});this.setState({showNUX:false});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_PAY_CLICKED);},handleImageClicked:function q(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_IMAGE_CLICKED);},handleTitleClicked:function q(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_PLATFORM_BANNER_TITLE_CLICKED);},renderMarkSold:function q(){var r=this.props.platformContext,s=void 0;if(!r.product.isAvailable)return null;if(c('P2PPlatformContextStore').isViewerSellerForPlatformContext(r))s=c('React').createElement(c('Link.react'),{href:'#',onClick:this.handleSoldClick},i._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0111\u00e3 b\u00e1n"));return s;},renderPayButton:function q(){if(!this.shouldRenderPayButton())return null;var r=c('React').createElement(c('XUIButton.react'),{label:i._("Thanh to\u00e1n"),onClick:this.handlePayClick,ref:'pay_button',use:'confirm'});if(!this.state.showNUX)r=c('React').createElement(c('Tooltip.react'),{alignH:'right',display:'block',tooltip:i._("Ti\u1ebfp theo, b\u1ea1n c\u00f3 th\u1ec3 x\u00e1c nh\u1eadn s\u1ed1 ti\u1ec1n.")},r);return (c('React').createElement('div',{className:!this.isCompactMode()?"_3-8x":''},r));},renderRequestButton:function q(){if(!this.shouldRenderRequestButton())return null;return (c('React').createElement(c('Link.react'),{className:"_f-n",href:'#',onClick:this.handleRequestClick},i._("Y\u00eau c\u1ea7u thanh to\u00e1n")));},shouldRenderPayButton:function q(){var r=this.props.platformContext,s=c('P2PPlatformContextStore').isViewerBuyerForPlatformContext(this.props.platformContext);return !!(this.state.canSendToRecipient&&r.product.isAvailable&&s&&r.product.rawAmount.amount>0);},shouldRenderSellerActionsRow:function q(){var r=this.props.platformContext,s=c('P2PPlatformContextStore').isViewerSellerForPlatformContext(r);return s&&r.product.isAvailable;},shouldRenderRequestButton:function q(){return !!(this.state.requestEnabled&&this.state.canSendToRecipient&&this.props.platformContext.product.rawAmount.amount>0);},getAmountText:function q(){var r=this.props.platformContext,s=r.product;return (s.rawAmount.amount>0?s.formattedAmount:i._("MI\u1ec4N PH\u00cd"));},renderAskingPriceRow:function q(){var r=this.props.platformContext,s=r.product;if(s.isAvailable)return (c('React').createElement(c('LineClamp.react'),{lines:1,lineHeight:16},c('React').createElement(c('XUIGrayText.react'),{shade:'light'},i._("Gi\u00e1: {price of the item}",[i.param('price of the item',this.getAmountText())]))));},renderNameLine:function q(){var r=this.props.platformContext,s=r.product,t='dark',u=void 0;if(!s.isAvailable){t='light';u=i._("\u0110\u00c3 B\u00c1N");}return (c('React').createElement(c('Link.react'),{href:s.refURL||'#',onClick:this.handleTitleClicked},c('React').createElement(c('XUIGrayText.react'),{shade:t},u?'('+u+') ':null,s.name)));},renderSellerActionsRow:function q(){if(!this.shouldRenderSellerActionsRow())return null;return (c('React').createElement('div',{className:"_f-o"},this.renderMarkSold(),this.renderRequestButton()));},renderImageColumn:function q(){var r=this.props.platformContext,s=r.product;if(this.isCompactMode())return null;return (c('React').createElement(k,{className:"_3-90"},c('React').createElement('div',{className:"_5qnr"},c('React').createElement('div',{className:"_5qn-"},c('React').createElement(c('Link.react'),{href:s.refURL||'#',onClick:this.handleImageClicked},c('React').createElement(c('BackgroundImage.react'),{backgroundPosition:'50% 50%',backgroundSize:'cover',height:45,src:s.image,width:45}))))));},renderPopoverMenu:function q(){var r=this.props.platformContext,s=r.product,t=c('React').createElement(c('ReactXUIMenu'),{className:"_1z1u"},c('React').createElement(m,{className:"_1z1_"},c('React').createElement('div',{onClick:this.handleDismissClick},i._("\u1ea8n kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n"))),c('React').createElement(m,{ajaxify:new (c('URI'))('/ajax/groups/mall/report_to_admin').addQueryData({message_id:s.loggingData.post_id}),rel:'async-post'},i._("B\u00e1o c\u00e1o cho qu\u1ea3n tr\u1ecb vi\u00ean")),c('React').createElement(m,{href:c('P2PLinkConstants').helpCenterURI,target:'_blank'},i._("T\u00ecm hi\u1ec3u th\u00eam")));return (c('React').createElement(c('PopoverMenu.react'),{alignh:'right',layerBehaviors:[c('ContextualLayerAutoFlip')],menu:t,className:"_3fqa"},c('React').createElement('div',{className:"_1z20"},c('React').createElement(c('Link.react'),{className:"_1z21",href:'#'}))));},isCompactMode:function q(){var r=this.props.platformContext,s=r.product;return !s.image||!s.isAvailable;},onNUXCloseButtonClick:function q(){this.setState({showNUX:false});},renderLayers:function q(){var r={};if(this.state.showNUX){r.ambientNUX=c('React').createElement(c('XUIAmbientNUX.react'),{alignment:'left',contextRef:function(){return this.refs.pay_button;}.bind(this),customwidth:234,onCloseButtonClick:this.onNUXCloseButtonClick,position:'above',shown:true,width:'custom'},c('React').createElement('div',{className:"_3-95"},i._("B\u1ea1n c\u00f3 th\u1ec3 thanh to\u00e1n m\u1eb7t h\u00e0ng n\u00e0y ngay t\u1eeb tin nh\u1eafn c\u1ee7a m\u00ecnh.")),c('React').createElement('div',null,c('React').createElement(c('Image.react'),{className:"_3fqb",height:14,src:j('/images/p2p/white-privacy-lock.png'),width:10}),c('React').createElement('span',{className:"_3fqc"},i._("\u0110\u00e2y l\u00e0 d\u1ecbch v\u1ee5 mi\u1ec5n ph\u00ed v\u00e0 an to\u00e0n."))));}else if(this.state.showConfirmationDialog)r.confirmationDialog=c('React').createElement(c('P2PMessageSellerConfirmationDialog.react'),{onCancel:function(){this.setState({showConfirmationDialog:false});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK);}.bind(this),onPay:function(){this.setState({showConfirmationDialog:false});this.openSendMoneyFlyout();this.log(c('P2PPaymentLoggerEvent').UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK);}.bind(this)});return r;},render:function q(){return (c('React').createElement('div',{className:"_319c"+(this.isCompactMode()?' '+"_5qn_":'')},c('React').createElement(c('Layout.react'),null,this.renderImageColumn(),c('React').createElement(l,null,c('React').createElement('div',{className:"_5qo0"},c('React').createElement('div',{className:"_5qo1"},c('React').createElement(c('LineClamp.react'),{lines:1,lineHeight:16},this.renderNameLine()),this.renderAskingPriceRow(),this.renderSellerActionsRow()))),c('React').createElement(k,null,c('React').createElement('div',{className:"_1_68"},this.renderPopoverMenu(),this.renderPayButton())))));}});f.exports=p;}),null);
__d('P2PSendMoneyNUXChatThreadBanner.react',['MercuryIDs','P2PActions','P2PChatThreadBanner.react','P2PUserEligibilityStore','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'P2PSendMoneyNUXChatThreadBanner',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PUserEligibilityStore'))],propTypes:{bannerType:h.string.isRequired,bodyText:h.string,buttonText:h.string,loggerEventFlow:h.string.isRequired,openRequestTab:h.bool,threadID:h.string.isRequired,titleText:h.string.isRequired},getDefaultProps:function j(){return {openRequestTab:false};},statics:{calculateState:function j(k){var l=c('MercuryIDs').isGroupChat(k.threadID)||c('P2PUserEligibilityStore').getEligibilityByThreadID(k.threadID);return {isThreadEligible:l};}},handleClick:function j(){c('P2PActions').chatSendViewOpened({openRequestTab:this.props.openRequestTab,threadID:this.props.threadID});},render:function j(){if(!this.state.isThreadEligible)return null;return (c('React').createElement(c('P2PChatThreadBanner.react'),babelHelpers['extends']({},this.props,{onClick:this.handleClick})));}});f.exports=i;}),null);
__d('P2PRequestSenderNUXChatThreadBanner.react',['fbt','P2PBannerType','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXChatThreadBanner.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return (c('React').createElement(c('P2PSendMoneyNUXChatThreadBanner.react'),{bannerType:c('P2PBannerType').REQUEST_SENDER_NUX,bodyText:h._("Nh\u1eadn l\u1ea1i ti\u1ec1n cho b\u1eefa t\u1ed1i, ti\u1ec1n thu\u00ea ho\u1eb7c b\u1ea5t k\u1ef3 \u0111i\u1ec1u g\u00ec kh\u00e1c."),buttonText:h._("B\u1eaft \u0111\u1ea7u"),openRequestTab:true,loggerEventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_REQUEST_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:h._("B\u1ea1n hi\u1ec7n c\u00f3 th\u1ec3 y\u00eau c\u1ea7u g\u1eedi ti\u1ec1n!")}));};function l(){i.apply(this,arguments);}l.propTypes={threadID:k.string.isRequired};f.exports=l;}),null);
__d('P2PSenderNUXChatThreadBanner.react',['fbt','P2PBannerType','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXChatThreadBanner.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return (c('React').createElement(c('P2PSendMoneyNUXChatThreadBanner.react'),{bannerType:c('P2PBannerType').SENDER_NUX,bodyText:h._("\u0110\u00e2y l\u00e0 d\u1ecbch v\u1ee5 mi\u1ec5n ph\u00ed v\u00e0 an to\u00e0n."),buttonText:h._("B\u1eaft \u0111\u1ea7u"),loggerEventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:h._("Hi\u1ec7n b\u1ea1n c\u00f3 th\u1ec3 g\u1eedi ti\u1ec1n!")}));};function l(){i.apply(this,arguments);}l.propTypes={threadID:k.string.isRequired};f.exports=l;}),null);
__d('P2PChatThreadBannerContainer.react',['P2PBannerStore','P2PBannerType','P2PProductItemChatThreadBanner.react','P2PPlatformContextStore','P2PRequestSenderNUXChatThreadBanner.react','P2PSenderNUXChatThreadBanner.react','StoreAndPropBasedStateMixin','React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'P2PChatThreadBannerContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PBannerStore'),c('P2PPlatformContextStore'))],propTypes:{isVisible:h.bool,otherUserID:h.string,threadID:h.string},statics:{calculateState:function j(k){return {productItemBannerShown:c('P2PPlatformContextStore').shouldShowBanner(k.otherUserID),requestSenderNUXBannerShown:c('P2PBannerStore').shouldShowBanner(c('P2PBannerType').REQUEST_SENDER_NUX),senderNUXBannerShown:c('P2PBannerStore').shouldShowBanner(c('P2PBannerType').SENDER_NUX)};}},renderRequestSenderNUXBanner:function j(){if(!this.props.threadID||!this.props.isVisible)return null;return (c('React').createElement(c('P2PRequestSenderNUXChatThreadBanner.react'),{threadID:this.props.threadID}));},renderSenderNUXBanner:function j(){if(!this.props.threadID||!this.props.isVisible)return null;return (c('React').createElement(c('P2PSenderNUXChatThreadBanner.react'),{threadID:this.props.threadID}));},renderProductItemBanner:function j(){var k=this.props.otherUserID,l=void 0;if(k)l=c('P2PPlatformContextStore').getPlatformContextByOtherUserID(k);if(!l)return null;return (c('React').createElement(c('P2PProductItemChatThreadBanner.react'),{platformContext:l}));},render:function j(){var k=void 0;if(this.state.senderNUXBannerShown){k=this.renderSenderNUXBanner();}else if(this.state.requestSenderNUXBannerShown){k=this.renderRequestSenderNUXBanner();}else if(this.state.productItemBannerShown)k=this.renderProductItemBanner();return (c('React').createElement('div',null,k));}});f.exports=i;}),null);