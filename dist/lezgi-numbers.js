var LezgiNumbers;(()=>{"use strict";var e={601:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.numerals=i.MINUS=i.atomic=i.nonillion=i.octillion=i.septillion=i.sextillion=i.quintillion=i.quadrillion=i.trillion=i.billion=i.million=void 0,i.million=1e6,i.billion=1e9,i.trillion=1e12,i.quadrillion=1e15,i.quintillion=1e18,i.sextillion=1e21,i.septillion=1e24,i.octillion=1e27,i.nonillion=1e30,i.atomic={0:"нул",1:"сад",2:"кьвед",3:"пуд",4:"кьуд",5:"вад",6:"ругуд",7:"ирид",8:"муьжуьд",9:"кIуьд",10:"цIуд",20:"къад",40:"яхцIур",100:"виш",1e3:"агъзур",[i.million]:"миллион",[i.billion]:"миллиард",[i.trillion]:"триллион",[i.quadrillion]:"квадриллион",[i.quintillion]:"квинтиллион",[i.sextillion]:"секстиллион",[i.septillion]:"септиллион",[i.octillion]:"октиллион",[i.nonillion]:"нониллион"},i.MINUS="минус";const l={minStr:"виш",min:100,max:1/0},t={minStr:"агъзур",min:1e3,max:1/0};i.numerals={нул:{value:0,requiresNext:!1},сад:{value:1,requiresNext:!1},кьвед:{value:2,requiresNext:!1},кьве:{value:2,requiresNext:!0,allowedNext:l},пуд:{value:3,requiresNext:!1,allowedNext:l},кьуд:{value:4,requiresNext:!1,allowedNext:l},вад:{value:5,requiresNext:!1,allowedNext:l},ругуд:{value:6,requiresNext:!1,allowedNext:l},ирид:{value:7,requiresNext:!1,allowedNext:l},муьжуьд:{value:8,requiresNext:!1,allowedNext:l},кIуьд:{value:9,requiresNext:!1,allowedNext:l},цIуд:{value:10,requiresNext:!1,allowedNext:t},цIусад:{value:11,requiresNext:!1,allowedNext:t},цIикьвед:{value:12,requiresNext:!1,allowedNext:t},цIипуд:{value:13,requiresNext:!1,allowedNext:t},цIикьуд:{value:14,requiresNext:!1,allowedNext:t},цIувад:{value:15,requiresNext:!1,allowedNext:t},цIуругуд:{value:16,requiresNext:!1,allowedNext:t},цIерид:{value:17,requiresNext:!1,allowedNext:t},цIемуьжуьд:{value:18,requiresNext:!1,allowedNext:t},цIекIуьд:{value:19,requiresNext:!1,allowedNext:t},къад:{value:20,requiresNext:!1,allowedNext:t},къанни:{value:20,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:19}},яхцIур:{value:40,requiresNext:!1,allowedNext:t},яхцIурни:{value:40,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:19}},пудкъад:{value:60,requiresNext:!1,allowedNext:t},пудкъанни:{value:60,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:19}},кьудкъад:{value:80,requiresNext:!1,allowedNext:t},кьудкъанни:{value:80,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:19}},виш:{value:100,requiresNext:!1,allowedNext:t},вишни:{value:100,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:99}},агъзур:{value:1e3,requiresNext:!1},агъзурни:{value:1e3,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:1e3}},миллион:{value:i.million,requiresNext:!1},миллионни:{value:i.million,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.million}},миллиард:{value:i.billion,requiresNext:!1},миллиардни:{value:i.billion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.billion}},триллион:{value:i.trillion,requiresNext:!1},триллионни:{value:i.trillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.trillion}},квадриллион:{value:i.quadrillion,requiresNext:!1},квадриллионни:{value:i.quadrillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.quadrillion}},квинтиллион:{value:i.quintillion,requiresNext:!1},квинтиллионни:{value:i.quintillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.quintillion}},секстиллион:{value:i.sextillion,requiresNext:!1},секстиллионни:{value:i.sextillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.sextillion}},септиллион:{value:i.septillion,requiresNext:!1},септиллионни:{value:i.septillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.septillion}},октиллион:{value:i.octillion,requiresNext:!1},октиллионни:{value:i.octillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.octillion}},нониллион:{value:i.nonillion,requiresNext:!1},нониллионни:{value:i.nonillion,requiresNext:!0,allowedNext:{minStr:"сад",min:1,max:i.nonillion}}}},831:(e,i,l)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.lezgiToNum=void 0;const t=l(601);i.lezgiToNum=function(e){if("string"!=typeof e)throw new TypeError("Provided value is not a string");const i=e.startsWith(t.MINUS);i&&(e=e.replace(t.MINUS,""));const l=e.trim().split(" ");if(1===l.length){if(t.numerals[e]){if(t.numerals[e].requiresNext)throw new Error(`Provided value '${e}' requires a next value e.g. '${t.numerals[e].allowedNext?t.numerals[e].allowedNext.minStr:"сад"}'`);return i?-1*t.numerals[e].value:t.numerals[e].value}throw new Error(`Provided value is not a valid Lezgi numeral: '${e}'`)}{const n=l.map((e=>{if(t.numerals[e])return t.numerals[e];throw new Error(`Provided value is not a valid Lezgi numeral: '${e}'`)})),o=[n[0].value];if(n.length>1)for(let i=1;i<n.length;i++){const t=n[i-1],r=n[i];if(t.allowedNext&&(r.value<t.allowedNext.min||r.value>t.allowedNext.max))throw new Error(`In the provided value '${e}' should be a number between '${t.allowedNext.min}' and '${t.allowedNext.max}' after '${l[i-1]}',but '${l[i]}' was provided which equals to '${r.value}'`);if(r.requiresNext&&i===n.length-1)throw new Error(`Provided value '${e}' requires a next value, but none was provided`);t.value>r.value?o.at(-1)<1e3?o.push(o.pop()+r.value):o.push(r.value):t.value<r.value&&o.push(o.pop()*r.value)}const r=o.reduce(((e,i)=>e+i),0);return i?-1*r:r}}},177:(e,i,l)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.numToLezgi=i.numToLezgiArray=void 0;const t=l(601);const n=[{start:t.nonillion,end:t.octillion},{start:t.octillion,end:t.septillion},{start:t.septillion,end:t.sextillion},{start:t.sextillion,end:t.quintillion},{start:t.quadrillion,end:t.quintillion},{start:t.trillion,end:t.quadrillion},{start:t.billion,end:t.trillion},{start:t.million,end:t.billion},{start:1e3,end:t.million}];function o(e){if(e<10||e>=20)throw new Error("Invalid number");if(10===e)return[t.atomic[10]];const i=t.atomic[10].slice(0,-2);return 11===e||15===e||16===e?[i+"у"]:e<15?[i+"и"]:[i+"е"]}function r(e){return 20===e?[t.atomic[20]]:["къанни"]}function u(e){return 40===e?[t.atomic[40]]:[t.atomic[40],"ни"]}function a(e){return 60===e?[t.atomic[3],t.atomic[20]]:[t.atomic[3],...r(e)]}function s(e){return 80===e?[t.atomic[4],t.atomic[20]]:[t.atomic[4],...r(e)]}function m(e){return e%100==0?[t.atomic[100]]:[t.atomic[100],"ни"]}function c(e){if(void 0!==t.atomic[e])return 2===e?[t.atomic[e].slice(0,-1)]:[t.atomic[e]]}function x(e){return e%1e3==0?[t.atomic[1e3]]:[t.atomic[1e3],"ни"]}function d(e){return e%t.million==0?[t.atomic[t.million]]:[t.atomic[t.million],"ни"]}function N(e){return e%t.billion==0?[t.atomic[t.billion]]:[t.atomic[t.billion],"ни"]}function v(e){return e%t.trillion==0?[t.atomic[t.trillion]]:[t.atomic[t.trillion],"ни"]}function f(e){return e%t.quadrillion==0?[t.atomic[t.quadrillion]]:[t.atomic[t.quadrillion],"ни"]}function q(e){return e%t.quintillion==0?[t.atomic[t.quintillion]]:[t.atomic[t.quintillion],"ни"]}function w(e){return e%t.sextillion==0?[t.atomic[t.sextillion]]:[t.atomic[t.sextillion],"ни"]}function p(e){return e%t.septillion==0?[t.atomic[t.septillion]]:[t.atomic[t.septillion],"ни"]}function b(e){return e%t.octillion==0?[t.atomic[t.octillion]]:[t.atomic[t.octillion],"ни"]}function g(e){const i=function(e){if(0==e)return[0];const i=[];let l=1;for(;e>0;)i.unshift(e%10*l),e=Math.floor(e/10),l*=10;const t=function(e){let i=[];for(let l of n){let t=e.reduce(((e,i)=>i>=l.start&&i<l.end?e+i:e),0);0!==t&&i.push(t),e=e.filter((e=>e<l.start||e>=l.end))}return i=i.concat(e),i}(i);return t}(e),l=i.map(((e,l)=>{if(l>0&&7===e&&(10===i[l-1]||30===i[l-1]||50===i[l-1]||70===i[l-1]||90===i[l-1]))return[t.atomic[7].slice(1)];const n=i.slice(l+1).reduce(((e,i)=>e+i),0);return 10===e?o(e+n):20===e?r(e+n):30===e?function(e){return[...r(e),...o(e-20)]}(e+n):40===e?u(e+n):50===e?function(e){return[...u(e),...o(e-40)]}(e+n):60===e?a(e+n):70===e?function(e){return[...a(61),...o(e-60)]}(e+n):80===e?s(e+n):90===e?function(e){return[...s(81),...o(e-80)]}(e+n):100===e?m(e+n):e>100&&e<1e3?function(e,i){return[...c(e%100!=0?e-e%100:e/100)," ",...m(e+i)]}(e,n):1e3===e?x(e+n):e>1e3&&e<t.million?function(e,i){const l=e%1e3!=0?e-e%1e3:e/1e3;return[...c(l)??g(l)," ",...x(e+i)]}(e,n):e===t.million?d(e+n):e>t.million&&e<t.billion?function(e,i){const l=e%t.million!=0?e-e%t.million:e/t.million;return[...c(l)??g(l)," ",...d(e+i)]}(e,n):e===t.billion?N(e+n):e>t.billion&&e<t.trillion?function(e,i){const l=e%t.billion!=0?e-e%t.billion:e/t.billion;return[...c(l)??g(l)," ",...N(e+i)]}(e,n):e===t.trillion?v(e+n):e>t.trillion&&e<t.quadrillion?function(e,i){const l=e%t.trillion!=0?e-e%t.trillion:e/t.trillion;return[...c(l)??g(l)," ",...v(e+i)]}(e,n):e===t.quadrillion?f(e+n):e>t.quadrillion&&e<t.quintillion?function(e,i){const l=e%t.quadrillion!=0?e-e%t.quadrillion:e/t.quadrillion;return[...c(l)??g(l)," ",...f(e+i)]}(e,n):e===t.quintillion?q(e+n):e>t.quintillion&&e<t.sextillion?function(e,i){const l=e%t.quintillion!=0?e-e%t.quintillion:e/t.quintillion;return[...c(l)??g(l)," ",...q(e+i)]}(e,n):e===t.sextillion?w(e+n):e>t.sextillion&&e<t.septillion?function(e,i){const l=e%t.sextillion!=0?e-e%t.sextillion:e/t.sextillion;return[...c(l)??g(l)," ",...w(e+i)]}(e,n):e===t.septillion?p(e+n):e>t.septillion&&e<t.octillion?function(e,i){const l=e%t.septillion!=0?e-e%t.septillion:e/t.septillion;return[...c(l)??g(l)," ",...p(e+i)]}(e,n):e===t.octillion?b(e+n):e>t.octillion&&e<t.nonillion?function(e,i){const l=e%t.octillion!=0?e-e%t.octillion:e/t.octillion;return[...c(l)??g(l)," ",...b(e+i)]}(e,n):e===t.nonillion?function(e){return e%t.nonillion==0?[t.atomic[t.nonillion]]:[t.atomic[t.nonillion],"ни"]}(e+n):i.length>1&&0===e?[""]:[t.atomic[e]||e.toString()]}));return l.flat()}function h(e){if(isNaN(e))throw new Error("Provided value is not a number");if(!Number.isInteger(e))throw new Error("Provided number is not an integer. Currently only integers are supported!");const i=e<0,l=function(e){return t.atomic[e]?[t.atomic[e]]:g(e)}(e=Math.abs(e)).filter((e=>""!==e)).map((e=>e.endsWith("ни")?[e," "]:e)).flat();return i?[t.MINUS," ",...l]:l}i.numToLezgiArray=h,i.numToLezgi=function(e){return h(e).join("").replaceAll("  "," ").trim()}},779:(e,i,l)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.playLezgiNumberTts=void 0;const t=l(177);i.playLezgiNumberTts=function(e,i){const l=function(e,i){return(0,t.numToLezgiArray)(e).map((e=>" "!==e?e.trim():" ")).filter((e=>""!==e)).map((e=>`${i}/${e}.mp3`))}(e,i);console.log(l),console.log("Playing audio..."),function(e){const i=new(window.AudioContext||window.webkitAudioContext);Promise.all(e.map((e=>async function(e){const l=await fetch(e),t=await l.arrayBuffer();return i.decodeAudioData(t)}(e)))).then((e=>{let l=e.reduce(((e,i)=>e+i.length),0),t=i.createBuffer(1,l,i.sampleRate),n=0;return e.forEach((e=>{t.getChannelData(0).set(e.getChannelData(0),n),n+=e.length})),t})).then((e=>{let l=i.createBufferSource();l.buffer=e,l.connect(i.destination),l.start(0)}))}(l)}}},i={};function l(t){var n=i[t];if(void 0!==n)return n.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,l),o.exports}var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.playLezgiNumberTts=e.lezgiToNum=e.numToLezgi=void 0;var i=l(177);Object.defineProperty(e,"numToLezgi",{enumerable:!0,get:function(){return i.numToLezgi}});var n=l(831);Object.defineProperty(e,"lezgiToNum",{enumerable:!0,get:function(){return n.lezgiToNum}});var o=l(779);Object.defineProperty(e,"playLezgiNumberTts",{enumerable:!0,get:function(){return o.playLezgiNumberTts}})})(),LezgiNumbers=t})();