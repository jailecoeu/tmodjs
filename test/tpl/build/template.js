/*! <TmodJS> <build:1382165155251> */
!function(t){var e=function(t,i){return e[/string|function/.test(typeof i)?"compile":"render"].apply(e,arguments)},i=e.cache={},r=e.helpers={$string:function(t){var e=typeof t;return/string|number/.test(e)||(t="function"===e?r.$string(t()):""),t+""},$escape:function(t){var e={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};return r.$string(t).replace(/&(?![\w#]+;)|[<>"']/g,function(t){return e[t]})},$each:function(t,e){var i=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)};if(i(t))for(var r=0,n=t.length;n>r;r++)e.call(t,t[r],r,t);else for(r in t)e.call(t,t[r],r)},$resolve:function(t,e){var i=/(\/)[^/]+\1\.\.\1/,r=t.replace(/[^/]+$/,""),n=r+e;for(n=n.replace(/\/\.\//g,"/");n.match(i);)n=n.replace(i,"/");return n},$include:function(t,i,n){var o=r.$resolve(n,t);return e.render(o,i)}},n=function(e){var i="";for(var r in e)i+="<"+r+">\n"+e[r]+"\n\n";return i&&t.console&&console.error("Template Error\n\n"+i),function(){return"{Template Error}"}};e.render=function(t,i){var r=e.get(t)||n({id:t,name:"Render Error",message:"No Template"});return i?r(i):r},e.compile=function(t,e){var o="function"==typeof e,a=i[t]=function(i){try{return o?new e(i,t)+"":e}catch(r){return n(r)()}};return a.prototype=e.prototype=r,a.toString=function(){return e+""},a},e.get=function(t){return i[t.replace(/^([^.])/,"./$1")]},e.helper=function(t,e){r[t]=e},/**/
e("./copyright","(c) 2013 tangbin"),/**/
e("./index",function(t,e){var i=this,include=function(r,n){n=n||t;var o=i.$include(r,n,e);return void 0!==o?(l+=o,o):void 0},r=i.$escape,n=t.title,o=i.$each,a=t.list,l=(t.$value,t.$index,"");return include("./public/header"),l+=' <div id="main"> <h3>',l+=r(n),l+="</h3> <ul> ",o(a,function(t){l+=' <li><a href="',l+=r(t.url),l+='">',l+=r(t.title),l+="</a></li> "}),l+=" </ul> </div> ",include("./public/footer"),new String(l)}),/**/
e("./public/footer",function(t,e){var i=this,r=t.time,n=i.$escape,include=function(r,n){n=n||t;var a=i.$include(r,n,e);return void 0!==a?(o+=a,a):void 0},o="";return o+='<div id="footer"> ',r&&(o+=" <p class='time'>",o+=n(r),o+="</p> "),o+=" ",include("../copyright"),o+=" </div>",new String(o)}),/**/
e("./public/header",function(t,e){var i=this,include=function(n,o){o=o||t;var a=i.$include(n,o,e);return void 0!==a?(r+=a,a):void 0},r="";return r+=' <div id="header"> ',include("./logo"),r+=' <ul id="nav"> <li><a href="http://www.qq.com">\u9996\u9875</a></li> <li><a href="http://news.qq.com/">\u65b0\u95fb</a></li> <li><a href="http://pp.qq.com/">\u56fe\u7247</a></li> <li><a href="http://mil.qq.com/">\u519b\u4e8b</a></li> </ul> </div>  ',new String(r)}),/**/
e("./public/logo",' <h1 id="logo"> <a href="http://www.qq.com"> <img width=\'134\' height=\'44\' src="http://mat1.gtimg.com/www/images/qq2012/qqlogo_1x.png" alt="\u817e\u8baf\u7f51" /> </a> </h1> '),"function"==typeof define?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:t.template=e}(this);