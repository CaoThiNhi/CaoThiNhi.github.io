if (self.CavalryLogger) { CavalryLogger.start_js(["NCKUx"]); }

__d('EventReminderStateStore',['EventReminderActions','EventReminderDispatcher','FluxStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('EventReminderDispatcher'));this.$EventReminderStateStore1={};}j.prototype.getEvent=function(k){return this.$EventReminderStateStore1[k];};j.prototype.__onDispatch=function(k){var l=c('EventReminderActions').Types,m=k.event.threadID;switch(k.type){case l.UPDATE_EVENT_REMINDER:if(!m)break;this.$EventReminderStateStore1[m]={eventDate:k.event.eventDate,eventName:k.event.eventName,eventID:k.event.eventID,exists:true};break;case l.DELETE_EVENT_REMINDER:this.$EventReminderStateStore1[m].exists=false;break;}this.__emitChange();};f.exports=new j();}),null);