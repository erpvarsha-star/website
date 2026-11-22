(function(){
/* VF Corrections Layer 2 (slim): DOM-only rules Velo cannot do. Text rules live in Velo (corrections-rules.js). */
var SK={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1};
function nz(s){return String(s).replace(/[\s\u00a0\u2009\u202f\u200b]+/g,' ').replace(/[\u2010-\u2015\u2212]/g,'-').toLowerCase().trim()}
function pairs(P){[[/^Year Established:?$/i,/^\s*2013\s*$/,'2007','pune']].forEach(function(r){
if(!new RegExp(r[3]).test(P))return;
var w=document.createTreeWalker(document.body,4,null),n,L=[];
while((n=w.nextNode())){if(!SK[n.parentNode.nodeName]&&r[0].test(n.data.replace(/\u00a0/g,' ').trim()))L.push(n)}
L.forEach(function(n){var el=n.parentNode.closest('td,th,dt,li,p,div'),s=el&&el.nextElementSibling;
if(!s)return;var w2=document.createTreeWalker(s,4,null),m;
while((m=w2.nextNode())){if(r[1].test(m.data))m.data=m.data.replace(/2013/,r[2])}})})}
function rows(){var LB=['cnc turning centers','vertical machining centers','horizontal machining centers','gear hobbing machines','broaching units'];
document.querySelectorAll('tr').forEach(function(tr){var c=tr.querySelector('td,th');if(!c||tr.cells.length<2)return;
var k=nz(c.textContent).replace(/\s*\(.*?\)\s*$/,'');if(LB.indexOf(k)>-1)tr.style.setProperty('display','none','important')});
document.querySelectorAll('li').forEach(function(li){var k=nz(li.textContent);if(k!=='broaching'&&k!=='broaching (vendor partners)')return;
var a=li.parentElement,i=0;for(;a&&i<3;i++,a=a.parentElement){var q=nz(a.textContent);if(q.length<900&&/in-house|in house/.test(q)){li.style.setProperty('display','none','important');return}}})}
function run(){var P=location.pathname;
if(!document.body)return;
pairs(P);rows()}
var DH=['7edffdcc5c', '71d1f1bfef', 'd992c508cc', '67e78ccdca', 'cf35346801', '42c4a400cf', '6e0a302f0b'],DC=['comp-mscxleug','comp-mscxlevk'];
function dnp(){var q=document.querySelectorAll('iframe,wix-iframe,[data-src],[src]'),i,e,u,k,a;
for(i=0;i<q.length;i++){e=q[i];u=(e.getAttribute('src')||'')+(e.getAttribute('data-src')||'');
if(u.indexOf('72f2bf_')<0)continue;for(k=0;k<DH.length;k++){if(u.indexOf('72f2bf_'+DH[k])>-1){
a=e;while(a&&!(a.id&&a.id.indexOf('comp-')===0))a=a.parentElement;
if(a)a.style.setProperty('display','none','important');break}}}
if(/forging-manufacturer-pune/.test(location.pathname))DC.forEach(function(c){var x=document.getElementById(c);if(x)x.style.setProperty('display','none','important')})}
var t;function go(){try{dnp()}catch(e){}try{run()}catch(e){}}
function later(){clearTimeout(t);t=setTimeout(go,200)}
go();[1000,3000,8000,15000,25000].forEach(function(d){setTimeout(go,d)});
if(document.body)new MutationObserver(later).observe(document.body,{childList:true,subtree:true});
})();
