$(function(){;(function(window,$,undefined){function DetectZoom(){this.body=$('body');this.screen=window.screen;this.outerWidth=window.outerWidth;this.deviceXDPI=screen.deviceXDPI;this.ua=navigator.userAgent.toLowerCase();this.isIE=~this.ua.indexOf('msie')&&this.deviceXDPI;this.type=this.checkType();this.methods={devicePixelRatio:function(){return window.devicePixelRatio},logicalXDPI:function(){return this.deviceXDPI/this.screen.logicalXDP},innerWidth:function(){return this.outerWidth/window.innerWidth},};this.timer=null;this.mousewheel();this.keydown();this.setRatio()}DetectZoom.prototype.checkType=function(){if(window.devicePixelRatio){return'devicePixelRatio'}if(this.isIE&&this.screen.logicalXDPI){return'logicalXDPI'}if(this.outerWidth&&window.innerWidth){return'innerWidth'}};DetectZoom.prototype.getRatio=function(){return this.methods[this.type]()};DetectZoom.prototype.setRatio=function(){var that=this;setTimeout(function(){that.body.attr('zoom',that.getRatio()===1?'':'scale')},0)};DetectZoom.prototype.debounce=function(time,func){var that=this,args=arguments;clearTimeout(that.timer);that.timer=setTimeout(function(){func.call(that)},time)};DetectZoom.prototype.mousewheel=function(){var that=this;$(document).on('mousewheel DOMMouseScroll',function(e){if(e.ctrlKey){that.debounce(200,that.setRatio)}})};DetectZoom.prototype.keydown=function(){var that=this;$(document).on('keydown',function(e){if(e.ctrlKey){switch(e.which){case 48:case 96:case 187:case 189:that.debounce(200,that.setRatio);break}}})};new DetectZoom()}(window,window.jQuery));});