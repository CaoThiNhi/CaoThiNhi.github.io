if (self.CavalryLogger) { CavalryLogger.start_js(["o19hO"]); }

__d('OGLitestandEllipsis',['csx','CSS','DOM','LitestandEllipsis','Vector','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=18,j=16,k=4,l=10,m={init:function n(o){var p,q,r,s;c('queryThenMutateDOM')(function(){p=c('DOM').find(o,"._6mt");q=c('DOM').scry(o,"._6mu")[0];var t=c('Vector').getElementDimensions(p).y;if(c('DOM').scry(o,"._47au").length){r=l;}else r=k;s=Math.round(t/i);},function(){if(s>=r){c('CSS').hide(q);c('LitestandEllipsis').add(p,r*i);}else if(q){c('CSS').show(q);var t=r-s;c('LitestandEllipsis').add(q,t*j);}});}};f.exports=m;}),null);
__d('EntstreamSubstoryAttachmentListSeeMore',['csx','CSS','DOM','Event','OGLitestandEllipsis'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){this.seeMoreLink=j;this.moreContent=k;c('Event').listen(this.seeMoreLink,'click',this.handleClick.bind(this));}Object.assign(i.prototype,{handleClick:function j(event){c('CSS').hide(this.seeMoreLink);c('CSS').show(this.moreContent);var k=c('DOM').scry(this.moreContent,"._gxb");k.forEach(function(l){c('OGLitestandEllipsis').init(l);});}});f.exports=i;}),null);
__d('GamesImageSlideshow.react',['cx','Animation','Image.react','React','ReactDOM','TimeSlice'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=1500,m=250;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.state={previous:0,active:0},this.$GamesImageSlideshow1=function(){if(this.running)return;this.running=true;var t=function(){var u=(this.state.active+1)%this.props.image_urls.length,v=this.props.image_urls[u],w=new Image(),x=function(){if(!this.running)return;this.$GamesImageSlideshow3(u);this.interval=setTimeout(t,l);}.bind(this);w.onload=c('TimeSlice').guard(x,'GamesImageSlideshow image.onload',{isContinuation:true});w.src=v;}.bind(this);t();}.bind(this),this.$GamesImageSlideshow3=function(t){this.setState({previous:this.state.active,active:t},this.$GamesImageSlideshow4);}.bind(this),this.$GamesImageSlideshow4=function(){if(this.state.active!==this.state.previous){var t=c('ReactDOM').findDOMNode(this.refs[this.state.previous]),u=c('ReactDOM').findDOMNode(this.refs[this.state.active]);this.anims=[new (c('Animation'))(t).from('opacity',1).to('opacity',0).duration(m).go(),new (c('Animation'))(u).from('opacity',0).to('opacity',1).duration(m).go()];}}.bind(this),this.$GamesImageSlideshow2=function(){if(this.interval){clearTimeout(this.interval);this.interval=null;}}.bind(this),this.$GamesImageSlideshow5=function(){this.running=false;this.$GamesImageSlideshow2();if(this.anims)this.anims.map(function(t){t.stop();});this.$GamesImageSlideshow3(0);}.bind(this),this.$GamesImageSlideshow6=function(t){return c('React').createElement(c('Image.react'),{ref:t,key:t,src:this.props.image_urls[t]});}.bind(this),this.$GamesImageSlideshow7=function(){var t=this.state.previous,u=this.state.active;if(t===u){return [this.$GamesImageSlideshow6(t)];}else return [this.$GamesImageSlideshow6(t),this.$GamesImageSlideshow6(u)];}.bind(this),p;}n.prototype.componentDidMount=function(){'use strict';if(this.props.autoplay)this.timeout=setTimeout(this.$GamesImageSlideshow1,l);};n.prototype.componentWillUnmount=function(){'use strict';this.$GamesImageSlideshow2();};n.prototype.render=function(){'use strict';return (c('React').createElement('div',{style:{height:this.props.height+'px',width:this.props.width+'px'},onMouseEnter:!this.props.autoplay?this.$GamesImageSlideshow1:null,onMouseLeave:!this.props.autoplay?this.$GamesImageSlideshow5:null,className:"_4x1w"},this.$GamesImageSlideshow7()));};n.propTypes={image_urls:k.array.isRequired,height:k.number.isRequired,width:k.number.isRequired,autoplay:k.bool};n.defaultProps={autoplay:false};f.exports=n;}),null);
__d('OGInlineFeedback',['csx','cx','AsyncRequest','CSS','DOMQuery','Event','Parent'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){this.element=k;c('Event').listen(this.element,'click',this.handleClick.bind(this));}Object.assign(j.prototype,{handleClick:function k(event){var l=event.getTarget();if(c('Parent').bySelector(l,"._52ga")||c('Parent').bySelector(l,"._52gb"))this.handleLike(event);},handleLike:function k(event){c('CSS').toggleClass(this.element,"_52gc");new (c('AsyncRequest'))().setURI('/ajax/open_graph/inline_feedback').setData({fbid:this.element.getAttribute('data-fbid')}).setRelativeTo(this.element).setHandler(function(l){var m=l.getPayload().likes,n=l.getPayload().comments,o=c('DOMQuery').find(this.element,"._52gd");c('CSS').conditionShow(o,!n&&!m);}.bind(this)).setErrorHandler(function(){c('CSS').toggleClass(this.element,"_52gc");}.bind(this)).send();event.kill();}});f.exports=j;}),null);