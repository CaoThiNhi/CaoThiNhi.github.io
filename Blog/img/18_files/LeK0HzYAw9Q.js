if (self.CavalryLogger) { CavalryLogger.start_js(["aAFGu"]); }

__d("PublishingToolsSource",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",PAGES_MANAGER_BAR:"pages_manager_bar",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_INSIGHTS:"video_insights",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_UPLOAD_NOTIF:"video_upload_notif"};}),null);
__d("VideoEditSource",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_ASSET_INSIGHTS:"video_asset_insights",PERMALINK:"permalink",TIMELINE:"timeline",SNOWLIFT:"snowlift",LIBRARY:"library",REFERENCE_LIBRARY:"reference_library",CAROUSEL_PREVIEW:"carousel_preview",PAGE_VIDEO_LPP_PUBLISH:"page_video_lpp_publish",UNKNOWN:"unknown"};}),null);
__d("VideoLibrarySource",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_INSIGHTS:"video_insights",VIDEOS_HUB:"videos_hub"};}),null);
__d('OptimisticVideoPostUtils',['AsyncRequest'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shouldShowOptimisticPost:function i(j){if(j.isScheduledPost||j.isHiddenFromTimeline||j.isSecret||!j.isPageToPage&&!j.isToUserProfile||j.isDraft)return false;return true;},checkVideoStatus:function i(j,k,l,m){new (c('AsyncRequest'))().setURI('/ajax/video/encode/feedback/ping/').setData({video_id:j}).setHandler(function(n){var o=n.getPayload();if(n.error||o.error){l(j,n);}else if(o.is_ready){k(j);}else m(j);}).send();}};f.exports=h;}),null);
__d('ErrorDialog',['Dialog','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={showAsyncError:function i(j){try{return h.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function i(j,k,l,m){return new (c('Dialog'))().setTitle(j).setBody(k).setButtons([c('Dialog').OK]).setStackable(true).setModal(true).setHandler(l||c('emptyFunction')).setButtonsMessage(m||'').show();}};f.exports=h;}),null);
__d('PagesComposerActionsTypes',['keyMirror'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('keyMirror')({BACKDATE:null,SET_DRAFT:null,SCHEDULE:null,SET_ADS_POST:null,SET_BOOSTED_POST:null,SHOW_OFFER_UPSELL:null,INSTAGRAM_CROSS_POSTING:null});f.exports=h;}),null);
__d('PagesComposerUnpublishedPostsStore',['ReactComposerStoreBase','PagesComposerActionsTypes'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={isDraft:false,scheduledPublishTime:null,backdateConfig:null,isAdsPost:false,stopFeedDistributionDate:null,showOfferUpsell:false,offerConfig:null};h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return Object.assign({},j);},function(m){switch(m.type){case c('PagesComposerActionsTypes').BACKDATE:l&&l.$PagesComposerUnpublishedPostsStore1(m);break;case c('PagesComposerActionsTypes').SET_DRAFT:l&&l.$PagesComposerUnpublishedPostsStore2(m);break;case c('PagesComposerActionsTypes').SCHEDULE:l&&l.$PagesComposerUnpublishedPostsStore3(m);break;case c('PagesComposerActionsTypes').SET_ADS_POST:l&&l.$PagesComposerUnpublishedPostsStore4(m);break;case c('PagesComposerActionsTypes').SHOW_OFFER_UPSELL:l&&l.$PagesComposerUnpublishedPostsStore5(m);}});l=this;}k.prototype.getBackdateConfig=function(l){'use strict';return this.getComposerData(l).backdateConfig;};k.prototype.getIsDraft=function(l){'use strict';return this.getComposerData(l).isDraft;};k.prototype.getScheduledPublishTime=function(l){'use strict';return this.getComposerData(l).scheduledPublishTime;};k.prototype.getStopFeedDistributionTime=function(l){'use strict';return this.getComposerData(l).stopFeedDistributionDate;};k.prototype.getIsAdsPost=function(l){'use strict';return this.getComposerData(l).isAdsPost;};k.prototype.showOfferUpsell=function(l){'use strict';return this.getComposerData(l).showOfferUpsell;};k.prototype.getOfferConfig=function(l){'use strict';return this.getComposerData(l).offerConfig;};k.prototype.$PagesComposerUnpublishedPostsStore1=function(l){'use strict';var m=this.getComposerData(l.composerID);m.backdateConfig={year:l.year,month:l.month,day:l.day,hideFromNewsFeed:l.hideFromNewsFeed};};k.prototype.$PagesComposerUnpublishedPostsStore3=function(l){'use strict';var m=this.getComposerData(l.composerID);m.scheduledPublishTime=l.scheduleDate;m.stopFeedDistributionDate=l.stopFeedDistributionDate;};k.prototype.$PagesComposerUnpublishedPostsStore2=function(l){'use strict';var m=this.getComposerData(l.composerID);m.isDraft=true;};k.prototype.$PagesComposerUnpublishedPostsStore4=function(l){'use strict';var m=this.getComposerData(l.composerID);m.isAdsPost=true;};k.prototype.$PagesComposerUnpublishedPostsStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','config']),n=m[0],o=m[1],p=this.getComposerData(n);p.offerConfig=o;p.showOfferUpsell=true;this.emitChange(n);};f.exports=new k();}),null);
__d("XAfterPartyWWWController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/afterparty\/www\/",{page_id:{type:"Int",required:true}});}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/unpublished_posts\/post_success\/",{type:{type:"String",required:true}});}),null);
__d('PagesComposer',['csx','cx','ActorURI','Arbiter','AsyncRequest','Bootloader','ComposerXMarauderLogger','ComposerXStore','DOM','PagesComposerUnpublishedPostsStore','Parent','ReloadPage','Run','XUnpublishedPostSuccessController','XAfterPartyWWWController','$','getObjectValues','goURI'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;function l(){c('ComposerXMarauderLogger').logCompleted(j.id);}function m(o){if(o.hidePost){var p=c('ComposerXStore').getAllForComposer(j.id);if(!c('getObjectValues')(p).length){var q=null;if(c('PagesComposerUnpublishedPostsStore').getIsDraft(j.id))q='draft';if(c('PagesComposerUnpublishedPostsStore').getScheduledPublishTime(j.id))q='scheduled';if(q){var r=c('XUnpublishedPostSuccessController').getURIBuilder().setString('type',q).getURI();r=c('ActorURI').create(r,k);new (c('AsyncRequest'))().setURI(r).send();}}l();return;}if(o.redirect){var p=c('ComposerXStore').getAllForComposer(j.id);c('getObjectValues')(p).forEach(function(u){if(u.reset)u.reset(u);});c('goURI')(o.redirect);l();return;}if(!o.streamStory){c('ReloadPage').now();return;}if(o.backdatedTime){c('Bootloader').loadModules(["PagesStoryPublisher"],function(u){u.publish(o);},'PagesComposer');l();return;}var s=n.renderStory(j,o.streamStory);c('Arbiter').inform('TimelineComposer/on_after_publish',s,c('Arbiter').BEHAVIOR_PERSISTENT);if(k){var t=c('XAfterPartyWWWController').getURIBuilder().setInt('page_id',k).getURI();new (c('AsyncRequest'))().setURI(t).send();}l();}var n={init:function o(p,q){j=c('$')(p);k=q;var r=c('Arbiter').subscribe('composer/publish',function(event,s){if(s.composer_id===j.id)m(s);});c('Run').onLeave(r.unsubscribe.bind(r));},renderStory:function o(p,q){var r=c('Parent').bySelector(p,"._2gqw");if(!r)return;var s=c('DOM').scry(r,"._5sem")[0],t=c('DOM').prependContent(s,q)[0];c('Bootloader').loadModules(["Animation"],function(u){new u(t).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(u.ease.both).go();},'PagesComposer');return t;},replaceByID:function o(p,q){c('DOM').replace(c('$')(p),q);}};f.exports=b.PagesComposer||n;}),null);
__d('BlobFactory',['emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=void 0,i=void 0;function j(){try{new b.Blob();i=true;}catch(l){i=false;}}var k=b.BlobBuilder||b.WebKitBlobBuilder||b.MozBlobBuilder||b.MSBlobBuilder;if(b.Blob){h={getBlob:function l(m,n){m=m||[];n=n||{};if(i===undefined)j();if(i){return new b.Blob(m,n);}else{var o=new k();for(var p=0;p<m.length;p++)o.append(m[p]);return o.getBlob(n.type);}},isSupported:c('emptyFunction').thatReturnsTrue};}else h={getBlob:function l(){},isSupported:c('emptyFunction').thatReturnsFalse};f.exports=h;}),null);
__d('WebWorker',['invariant','BanzaiLogger','WebWorkerConfig','BlobFactory','EventListener','URI','areSameOrigin','destroyOnUnload','SubscriptionsHandler','XHRRequest','arrayContains','emptyFunction','getCrossOriginTransport','performanceNow','memoize','filterObject'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.URL||b.webkitURL;function j(p){'use strict';this.$WebWorker1=false;this.$WebWorker2=null;this.$WebWorker3=p;this.$WebWorker4=null;this.$WebWorker5=c('emptyFunction');this.$WebWorker6=c('emptyFunction');this.$WebWorker7=[];this.$WebWorker8=false;this.$WebWorker9=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){if(!this.$WebWorker8)this.terminate();}.bind(this));this.$WebWorker10('constructed');}j.prototype.setMessageHandler=function(p){'use strict';this.$WebWorker5=p||c('emptyFunction');return this;};j.prototype.setErrorHandler=function(p){'use strict';this.$WebWorker6=p||c('emptyFunction');return this;};j.prototype.postMessage=function(p,q){'use strict';!!this.isCurrentState('constructed')?h(0):void 0;!!this.isCurrentState('terminated')?h(0):void 0;if(this.isCurrentState('preparing')){this.$WebWorker7.push(this.postMessage.bind(this,p,q));return this;}var r={type:'message',message:p};if(q){this.$WebWorker4.postMessage(r,q);}else this.$WebWorker4.postMessage(r);return this;};j.prototype.terminate=function(){'use strict';if(this.isCurrentState('executing'))this.$WebWorker4.terminate();if(!this.isCurrentState('terminated')){this.$WebWorker10('terminated');this.$WebWorker4=null;this.$WebWorker11();this.$WebWorker7=[];}return this;};j.prototype.execute=function(){'use strict';!!this.isCurrentState('terminated')?h(0):void 0;if(['preparing','executing'].some(this.isCurrentState,this))return this;this.$WebWorker10('preparing');j.prepareResource(this.$WebWorker3,this.$WebWorker12.bind(this));return this;};j.prototype.setAllowCrossPageTransition=function(p){'use strict';this.$WebWorker8=p;return this;};j.prototype.isCurrentState=function(p){'use strict';!c('arrayContains')(j.states,p)?h(0):void 0;return p===this.$WebWorker2;};j.prototype.$WebWorker12=function(){'use strict';!!this.isCurrentState('executing')?h(0):void 0;if(this.isCurrentState('terminated'))return;!(this.$WebWorker3.sameOriginURL||this.$WebWorker3.source)?h(0):void 0;if(this.$WebWorker3.sameOriginURL){this.$WebWorker4=new b.Worker(this.$WebWorker3.sameOriginURL);}else{this.$WebWorker4=new b.Worker(j.evalWorkerURL);this.$WebWorker4.postMessage(this.$WebWorker3.source);}this.$WebWorker13('ping',Date.now());if(this.$WebWorker3.dynamicModules)try{this.$WebWorker13('defineModules',this.$WebWorker3.dynamicModules);}catch(p){this.terminate();this.$WebWorker14('define_error',{message:p.message});throw p;}this.$WebWorker15();this.$WebWorker10('executing');this.$WebWorker7.forEach(function(q){return q();});this.$WebWorker7=null;};j.prototype.$WebWorker11=function(){'use strict';this.$WebWorker9.release();};j.prototype.$WebWorker13=function(p){for(var q=arguments.length,r=Array(q>1?q-1:0),s=1;s<q;s++)r[s-1]=arguments[s];'use strict';this.$WebWorker4.postMessage({type:p,args:r});};j.prototype.$WebWorker14=function(event,p){'use strict';j.$WebWorker14(event,this.$WebWorker3.name,babelHelpers['extends']({},p,{cross_page_transition:!!this.$WebWorker8,state:this.$WebWorker2}));};j.$WebWorker16=function(){'use strict';return Object.keys(c('filterObject')({object_url:j.$WebWorker17(),eval_url:n(),data_url:j.$WebWorker18(),worker:j.isSupported(),transferables:j.areTransferablesSupported()},function(p){return !!p;}));};j.prototype.$WebWorker15=function(){'use strict';this.$WebWorker9.addSubscriptions(c('EventListener').listen(this.$WebWorker4,'message',this.$WebWorker19.bind(this)),c('EventListener').listen(this.$WebWorker4,'error',this.$WebWorker20.bind(this)));};j.prototype.$WebWorker20=function(p){'use strict';var q=this.$WebWorker6(p);if(!q&&!p.defaultPrevented)this.$WebWorker14('exception',{message:p.message});};j.prototype.$WebWorker19=function(event){'use strict';var p=event.data;switch(p.type){case 'message':this.$WebWorker5(p.message);break;case 'pong':this.$WebWorker1=true;this.$WebWorker14('executed',{dt:Math.floor(p.args[1]-p.args[0]),bytes:this.$WebWorker3.source?this.$WebWorker3.source.length:-1});break;case 'terminate':this.terminate();break;case 'haste-error':this.terminate();this.$WebWorker14('haste_error',{message:p.message});break;case 'console':var q=p.args.shift();!c('arrayContains')(['log','error','info','debug','warn'],q)?h(0):void 0;b.console[q].apply(b.console,p.args);break;}};j.prototype.$WebWorker10=function(p){'use strict';!c('arrayContains')(j.states,p)?h(0):void 0;this.$WebWorker14('transition',{next_state:p});this.$WebWorker2=p;};j.prepareResource=function(p,q){'use strict';q=q||c('emptyFunction');!(p.sameOriginURL||p.url||p.source)?h(0):void 0;!!!j.isSupported()?h(0):void 0;if(p.sameOriginURL){q();}else if(p.url&&c('areSameOrigin')(new (c('URI'))(p.url),new (c('URI'))(b.location.href))){p.sameOriginURL=p.url;q();}else if(p.source){if(j.$WebWorker21())p.sameOriginURL=j.$WebWorker22(p.source);q();}else if(!p.loading){var r=c('performanceNow')();p.loading=[q];j.$WebWorker23(p.url,function(s){if(s){p.source=s;if(j.$WebWorker21())p.sameOriginURL=j.$WebWorker22(s);}j.$WebWorker14('prepared',p.name,{dt:Math.floor(c('performanceNow')()-r),bytes:s.length});p.loading.forEach(function(t){return t();});p.loading=false;});}else p.loading.push(q);return p;};j.releaseResource=function(p){'use strict';if(p.sameOriginURL.indexOf('blob:')===0){if(i.revokeObjectURL)i.revokeObjectURL(p.sameOriginURL);p.sameOriginURL=null;}return p;};j.isSupported=function(){'use strict';return m&&(j.$WebWorker21()||n());};j.areTransferablesSupported=function(){'use strict';return j.isSupported()&&o();};j.$WebWorker23=function(p,q){'use strict';new (c('XHRRequest'))(p).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseHandler(function(r){q(r);}).setErrorHandler(q.bind(null,null)).send();};j.$WebWorker22=function(p){'use strict';!j.$WebWorker21()?h(0):void 0;if(j.$WebWorker17()){var q=c('BlobFactory').getBlob([p],{type:'application/javascript'});return i.createObjectURL(q);}if(j.$WebWorker18())return 'data:application/javascript,'+encodeURIComponent(p);};j.$WebWorker17=function(){'use strict';return c('BlobFactory').isSupported()&&k();};j.$WebWorker18=function(){'use strict';return l();};j.$WebWorker21=function(){'use strict';return j.$WebWorker17()||j.$WebWorker18();};j.$WebWorker14=function(event,p,q){'use strict';if(!c('WebWorkerConfig').logging.enabled)return;c('BanzaiLogger').log(c('WebWorkerConfig').logging.config,babelHelpers['extends']({},q,{features_array:j.$WebWorker16(),event:event,resource:p}));};var k=c('memoize')(function(){var p,q;if(!i||!i.createObjectURL)return false;try{p=i.createObjectURL(c('BlobFactory').getBlob([''],{type:'application/javascript'}));var s=new b.Worker(p);s.terminate();q=true;}catch(r){q=false;}finally{if(i.revokeObjectURL)i.revokeObjectURL(p);}return q;}),l=c('memoize')(function(){var p;try{var r=new b.Worker('data:application/javascript,');r.terminate();p=true;}catch(q){p=false;}return p;}),m=!!b.Worker,n=c('memoize')(function(){var p;try{var r=new b.Worker(j.evalWorkerURL);r.terminate();p=true;}catch(q){p=false;}return p;}),o=c('memoize')(function(){var p;try{var r=new b.Worker(j.evalWorkerURL),s=new ArrayBuffer(0);r.postMessage({buffer:s},[s]);r.terminate();p=true;}catch(q){p=false;}return p;});j.states=['constructed','preparing','executing','terminated'];j.evalWorkerURL=c('WebWorkerConfig').evalWorkerURL;f.exports=j;}),null);
__d("XPagesManagerPublishingToolsController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{page_token}\/publishing_tools\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},current_page:{type:"Int"},section:{type:"String"},source:{type:"Enum",enumType:1},refSource:{type:"Enum",enumType:1},initial_data:{type:"StringToStringMap"}});}),null);
__d("XVideoEditDialogController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}});}),null);