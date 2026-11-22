(function(){
const RULES=[{type:'href',find:'mailto:marketing@varshaforging.com',replace:'mailto:marketing@varshaforgings.com'}];
const esc=function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')};
const HANDLERS={
href:function(r){
const re=new RegExp(esc(r.find),'gi');
document.querySelectorAll('a[href]').forEach(function(a){
const h=a.getAttribute('href');
const n=h.replace(re,r.replace);
if(n!==h)a.setAttribute('href',n);
});
}
};
function run(){
RULES.forEach(function(r){
const f=HANDLERS[r.type];
if(f){try{f(r)}catch(e){}}
});
}
let t;
function later(){clearTimeout(t);t=setTimeout(run,200);}
run();
new MutationObserver(later).observe(document.body,{childList:true,subtree:true});
})();
