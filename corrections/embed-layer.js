(function(){
/* VF Corrections Layer (slim): DOM-only rules Velo cannot do. Text rules live in Velo (corrections-rules.js). */
var A=[["alt",/corvtte[^]*/i,""],
["alt",/Secotr/,"Sector"],
["alt",/Steering Level\b/,"Steering Lever"],
["alt",/Swingram Mount/,"Swing Arm Mount"]];
function run(){
if(!document.body)return;
document.querySelectorAll('img[alt]').forEach(function(e){var v=e.getAttribute('alt');
A.forEach(function(r){v=v.replace(r[1],r[2])});
if(v!==e.getAttribute('alt'))e.setAttribute('alt',v)});
document.querySelectorAll('a[href]').forEach(function(a){var h=a.getAttribute('href'),q=h.replace(/mailto:marketing@varshaforging\.com/gi,'mailto:marketing@varshaforgings.com');if(q!==h)a.setAttribute('href',q)});
}
var t;function go(){try{run()}catch(e){}}
function later(){clearTimeout(t);t=setTimeout(go,200)}
go();[1000,3000,8000].forEach(function(d){setTimeout(go,d)});
if(document.body)new MutationObserver(later).observe(document.body,{childList:true,subtree:true});
})();
