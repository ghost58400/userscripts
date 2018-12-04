//include favico.js
(function(){var Favico=function(opt){"use strict";opt=opt?opt:{};var _def={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontStyle:"bold",type:"circle",position:"down",animation:"slide",elementId:false,dataUrl:false,win:window};var _opt,_orig,_h,_w,_canvas,_context,_img,_ready,_lastBadge,_running,_readyCb,_stop,_browser,_animTimeout,_drawTimeout,_doc;_browser={};_browser.ff=typeof InstallTrigger!="undefined";_browser.chrome=!!window.chrome;_browser.opera=!!window.opera||navigator.userAgent.indexOf("Opera")>=0;_browser.ie=false;_browser.safari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0;_browser.supported=_browser.chrome||_browser.ff||_browser.opera;var _queue=[];_readyCb=function(){};_ready=_stop=false;var init=function(){_opt=merge(_def,opt);_opt.bgColor=hexToRgb(_opt.bgColor);_opt.textColor=hexToRgb(_opt.textColor);_opt.position=_opt.position.toLowerCase();_opt.animation=animation.types[""+_opt.animation]?_opt.animation:_def.animation;_doc=_opt.win.document;var isUp=_opt.position.indexOf("up")>-1;var isLeft=_opt.position.indexOf("left")>-1;if(isUp||isLeft){for(var i=0;i<animation.types[""+_opt.animation].length;i++){var step=animation.types[""+_opt.animation][i];if(isUp){if(step.y<.6){step.y=step.y-.4}else{step.y=step.y-2*step.y+(1-step.w)}}if(isLeft){if(step.x<.6){step.x=step.x-.4}else{step.x=step.x-2*step.x+(1-step.h)}}animation.types[""+_opt.animation][i]=step}}_opt.type=type[""+_opt.type]?_opt.type:_def.type;_orig=link.getIcon();_canvas=document.createElement("canvas");_img=document.createElement("img");if(_orig.hasAttribute("href")){_img.setAttribute("crossOrigin","anonymous");_img.onload=function(){_h=_img.height>0?_img.height:32;_w=_img.width>0?_img.width:32;_canvas.height=_h;_canvas.width=_w;_context=_canvas.getContext("2d");icon.ready()};_img.setAttribute("src",_orig.getAttribute("href"))}else{_img.onload=function(){_h=32;_w=32;_img.height=_h;_img.width=_w;_canvas.height=_h;_canvas.width=_w;_context=_canvas.getContext("2d");icon.ready()};_img.setAttribute("src","")}};var icon={};icon.ready=function(){_ready=true;icon.reset();_readyCb()};icon.reset=function(){if(!_ready){return}_queue=[];_lastBadge=false;_running=false;_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);link.setIcon(_canvas);window.clearTimeout(_animTimeout);window.clearTimeout(_drawTimeout)};icon.start=function(){if(!_ready||_running){return}var finished=function(){_lastBadge=_queue[0];_running=false;if(_queue.length>0){_queue.shift();icon.start()}else{}};if(_queue.length>0){_running=true;var run=function(){["type","animation","bgColor","textColor","fontFamily","fontStyle"].forEach(function(a){if(a in _queue[0].options){_opt[a]=_queue[0].options[a]}});animation.run(_queue[0].options,function(){finished()},false)};if(_lastBadge){animation.run(_lastBadge.options,function(){run()},true)}else{run()}}};var type={};var options=function(opt){opt.n=typeof opt.n==="number"?Math.abs(opt.n|0):opt.n;opt.x=_w*opt.x;opt.y=_h*opt.y;opt.w=_w*opt.w;opt.h=_h*opt.h;opt.len=(""+opt.n).length;return opt};type.circle=function(opt){opt=options(opt);var more=false;if(opt.len===2){opt.x=opt.x-opt.w*.4;opt.w=opt.w*1.4;more=true}else if(opt.len>=3){opt.x=opt.x-opt.w*.65;opt.w=opt.w*1.65;more=true}_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);_context.beginPath();_context.font=_opt.fontStyle+" "+Math.floor(opt.h*(opt.n>99?.85:1))+"px "+_opt.fontFamily;_context.textAlign="center";if(more){_context.moveTo(opt.x+opt.w/2,opt.y);_context.lineTo(opt.x+opt.w-opt.h/2,opt.y);_context.quadraticCurveTo(opt.x+opt.w,opt.y,opt.x+opt.w,opt.y+opt.h/2);_context.lineTo(opt.x+opt.w,opt.y+opt.h-opt.h/2);_context.quadraticCurveTo(opt.x+opt.w,opt.y+opt.h,opt.x+opt.w-opt.h/2,opt.y+opt.h);_context.lineTo(opt.x+opt.h/2,opt.y+opt.h);_context.quadraticCurveTo(opt.x,opt.y+opt.h,opt.x,opt.y+opt.h-opt.h/2);_context.lineTo(opt.x,opt.y+opt.h/2);_context.quadraticCurveTo(opt.x,opt.y,opt.x+opt.h/2,opt.y)}else{_context.arc(opt.x+opt.w/2,opt.y+opt.h/2,opt.h/2,0,2*Math.PI)}_context.fillStyle="rgba("+_opt.bgColor.r+","+_opt.bgColor.g+","+_opt.bgColor.b+","+opt.o+")";_context.fill();_context.closePath();_context.beginPath();_context.stroke();_context.fillStyle="rgba("+_opt.textColor.r+","+_opt.textColor.g+","+_opt.textColor.b+","+opt.o+")";if(typeof opt.n==="number"&&opt.n>999){_context.fillText((opt.n>9999?9:Math.floor(opt.n/1e3))+"k+",Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*.2))}else{_context.fillText(opt.n,Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*.15))}_context.closePath()};type.rectangle=function(opt){opt=options(opt);var more=false;if(opt.len===2){opt.x=opt.x-opt.w*.4;opt.w=opt.w*1.4;more=true}else if(opt.len>=3){opt.x=opt.x-opt.w*.65;opt.w=opt.w*1.65;more=true}_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);_context.beginPath();_context.font=_opt.fontStyle+" "+Math.floor(opt.h*(opt.n>99?.9:1))+"px "+_opt.fontFamily;_context.textAlign="center";_context.fillStyle="rgba("+_opt.bgColor.r+","+_opt.bgColor.g+","+_opt.bgColor.b+","+opt.o+")";_context.fillRect(opt.x,opt.y,opt.w,opt.h);_context.fillStyle="rgba("+_opt.textColor.r+","+_opt.textColor.g+","+_opt.textColor.b+","+opt.o+")";if(typeof opt.n==="number"&&opt.n>999){_context.fillText((opt.n>9999?9:Math.floor(opt.n/1e3))+"k+",Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*.2))}else{_context.fillText(opt.n,Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*.15))}_context.closePath()};var badge=function(number,opts){opts=(typeof opts==="string"?{animation:opts}:opts)||{};_readyCb=function(){try{if(typeof number==="number"?number>0:number!==""){var q={type:"badge",options:{n:number}};if("animation"in opts&&animation.types[""+opts.animation]){q.options.animation=""+opts.animation}if("type"in opts&&type[""+opts.type]){q.options.type=""+opts.type}["bgColor","textColor"].forEach(function(o){if(o in opts){q.options[o]=hexToRgb(opts[o])}});["fontStyle","fontFamily"].forEach(function(o){if(o in opts){q.options[o]=opts[o]}});_queue.push(q);if(_queue.length>100){throw new Error("Too many badges requests in queue.")}icon.start()}else{icon.reset()}}catch(e){throw new Error("Error setting badge. Message: "+e.message)}};if(_ready){_readyCb()}};var image=function(imageElement){_readyCb=function(){try{var w=imageElement.width;var h=imageElement.height;var newImg=document.createElement("img");var ratio=w/_w<h/_h?w/_w:h/_h;newImg.setAttribute("crossOrigin","anonymous");newImg.onload=function(){_context.clearRect(0,0,_w,_h);_context.drawImage(newImg,0,0,_w,_h);link.setIcon(_canvas)};newImg.setAttribute("src",imageElement.getAttribute("src"));newImg.height=h/ratio;newImg.width=w/ratio}catch(e){throw new Error("Error setting image. Message: "+e.message)}};if(_ready){_readyCb()}};var video=function(videoElement){_readyCb=function(){try{if(videoElement==="stop"){_stop=true;icon.reset();_stop=false;return}videoElement.addEventListener("play",function(){drawVideo(this)},false)}catch(e){throw new Error("Error setting video. Message: "+e.message)}};if(_ready){_readyCb()}};var webcam=function(action){if(!window.URL||!window.URL.createObjectURL){window.URL=window.URL||{};window.URL.createObjectURL=function(obj){return obj}}if(_browser.supported){var newVideo=false;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia;_readyCb=function(){try{if(action==="stop"){_stop=true;icon.reset();_stop=false;return}newVideo=document.createElement("video");newVideo.width=_w;newVideo.height=_h;navigator.getUserMedia({video:true,audio:false},function(stream){newVideo.src=URL.createObjectURL(stream);newVideo.play();drawVideo(newVideo)},function(){})}catch(e){throw new Error("Error setting webcam. Message: "+e.message)}};if(_ready){_readyCb()}}};function drawVideo(video){if(video.paused||video.ended||_stop){return false}try{_context.clearRect(0,0,_w,_h);_context.drawImage(video,0,0,_w,_h)}catch(e){}_drawTimeout=setTimeout(function(){drawVideo(video)},animation.duration);link.setIcon(_canvas)}var link={};link.getIcon=function(){var elm=false;var getLink=function(){var link=_doc.getElementsByTagName("head")[0].getElementsByTagName("link");for(var l=link.length,i=l-1;i>=0;i--){if(/(^|\s)icon(\s|$)/i.test(link[i].getAttribute("rel"))){return link[i]}}return false};if(_opt.element){elm=_opt.element}else if(_opt.elementId){elm=_doc.getElementById(_opt.elementId);elm.setAttribute("href",elm.getAttribute("src"))}else{elm=getLink();if(elm===false){elm=_doc.createElement("link");elm.setAttribute("rel","icon");_doc.getElementsByTagName("head")[0].appendChild(elm)}}elm.setAttribute("type","image/png");return elm};link.setIcon=function(canvas){var url=canvas.toDataURL("image/png");if(_opt.dataUrl){_opt.dataUrl(url)}if(_opt.element){_opt.element.setAttribute("href",url);_opt.element.setAttribute("src",url)}else if(_opt.elementId){var elm=_doc.getElementById(_opt.elementId);elm.setAttribute("href",url);elm.setAttribute("src",url)}else{if(_browser.ff||_browser.opera){var old=_orig;_orig=_doc.createElement("link");if(_browser.opera){_orig.setAttribute("rel","icon")}_orig.setAttribute("rel","icon");_orig.setAttribute("type","image/png");_doc.getElementsByTagName("head")[0].appendChild(_orig);_orig.setAttribute("href",url);if(old.parentNode){old.parentNode.removeChild(old)}}else{_orig.setAttribute("href",url)}}};function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:false}function merge(def,opt){var mergedOpt={};var attrname;for(attrname in def){mergedOpt[attrname]=def[attrname]}for(attrname in opt){mergedOpt[attrname]=opt[attrname]}return mergedOpt}function isPageHidden(){return _doc.hidden||_doc.msHidden||_doc.webkitHidden||_doc.mozHidden}var animation={};animation.duration=40;animation.types={};animation.types.fade=[{x:.4,y:.4,w:.6,h:.6,o:0},{x:.4,y:.4,w:.6,h:.6,o:.1},{x:.4,y:.4,w:.6,h:.6,o:.2},{x:.4,y:.4,w:.6,h:.6,o:.3},{x:.4,y:.4,w:.6,h:.6,o:.4},{x:.4,y:.4,w:.6,h:.6,o:.5},{x:.4,y:.4,w:.6,h:.6,o:.6},{x:.4,y:.4,w:.6,h:.6,o:.7},{x:.4,y:.4,w:.6,h:.6,o:.8},{x:.4,y:.4,w:.6,h:.6,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}];animation.types.none=[{x:.4,y:.4,w:.6,h:.6,o:1}];animation.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:.9,y:.9,w:.1,h:.1,o:1},{x:.8,y:.8,w:.2,h:.2,o:1},{x:.7,y:.7,w:.3,h:.3,o:1},{x:.6,y:.6,w:.4,h:.4,o:1},{x:.5,y:.5,w:.5,h:.5,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}];animation.types.popFade=[{x:.75,y:.75,w:0,h:0,o:0},{x:.65,y:.65,w:.1,h:.1,o:.2},{x:.6,y:.6,w:.2,h:.2,o:.4},{x:.55,y:.55,w:.3,h:.3,o:.6},{x:.5,y:.5,w:.4,h:.4,o:.8},{x:.45,y:.45,w:.5,h:.5,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}];animation.types.slide=[{x:.4,y:1,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.8,w:.6,h:.6,o:1},{x:.4,y:.7,w:.6,h:.6,o:1},{x:.4,y:.6,w:.6,h:.6,o:1},{x:.4,y:.5,w:.6,h:.6,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}];animation.run=function(opt,cb,revert,step){var animationType=animation.types[isPageHidden()?"none":_opt.animation];if(revert===true){step=typeof step!=="undefined"?step:animationType.length-1}else{step=typeof step!=="undefined"?step:0}cb=cb?cb:function(){};if(step<animationType.length&&step>=0){type[_opt.type](merge(opt,animationType[step]));_animTimeout=setTimeout(function(){if(revert){step=step-1}else{step=step+1}animation.run(opt,cb,revert,step)},animation.duration);link.setIcon(_canvas)}else{cb();return}};init();return{badge:badge,video:video,image:image,webcam:webcam,reset:icon.reset,browser:{supported:_browser.supported}}};if(typeof define!=="undefined"&&define.amd){define([],function(){return Favico})}else if(typeof module!=="undefined"&&module.exports){module.exports=Favico}else{this.Favico=Favico}})();

(function () {

    window.JojoBadge = {
        favicon: new Favico({animation: 'none'}),
        actualBadge: 0,
        numToUpdate: 5, //nombre d'updates consecutives
        numToUpdateFavico: 0,
        updatesSkipped: 0, //nombre d'updates sautées
        updateFavico: function () {
            this.favicon = new Favico({animation: 'none'});
            this.numToUpdateFavico = 10;
        },
        update: function (newNum) {
            this.numToUpdateFavico--;
            if (this.actualBadge !== newNum) {
                this.numToUpdate = 5;
            }
            if (this.updatesSkipped >= 4) {
                this.numToUpdate++;
            }
            if (this.numToUpdate > 0) {
                this.favicon.badge(newNum);
                console.log('real badge updated to ' + newNum);
                this.numToUpdate--;
                this.updatesSkipped = 0;
                this.actualBadge = newNum;
            } else {
                this.updatesSkipped++;
            }
            if (this.numToUpdateFavico === 0){
                this.updateFavico();
            }
        }
    };

    JojoBadge.updateFavico();

})();