(function(){
var T=[[/(?:over )?60 CNC turning centers, 17 Vertical Machining Centers \(VMCs\), Horizontal Machining Centers \(HMCs\), gear hobbing machines, and broaching units/,"CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors, including broaching"],
[/(?:over )?60 CNC turning centers, 17 Vertical Machining Centers \(VMCs\), Horizontal Machining Centers \(HMCs\), gear hobbing machines/,"CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors"],
[/houses (?:over )?60 CNC turning centers, 17 VMCs, 2 HMCs, and 5 gear hobbing machines/,"offers CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors"],
[/operates 60 CNC machines, 17 VMCs, 2 HMCs, and gear hobbing facilities at its Pune plant/,"offers CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors, at its Pune plant"],
[/60 CNC Turning Centers/,"CNC Turning","^/suspension-components"],
[/17 VMCs \(4\/5-Axis\)/,"VMC Machining (4/5-Axis)","^/suspension-components"],
[/^2 HMCs/,"HMC machining through vendor partners","^/suspension-components"],
[/5 Gear Hobbing Machines/,"Gear Hobbing","^/suspension-components"],
[/60 CNCs, 17 VMCs, 2 HMCs/,"CNC, VMC; HMC via vendor partners","^/suspension-components"],
[/^5 Machines$/,"In-house gear hobbing","^/suspension-components"],
[/Multi-axis VMCs and HMCs machine/,"Multi-axis VMCs (HMC work via vendor partners) machine"],
[/\b(?:over )?\d+ (CNC(?: Turning)?(?: Centers| machines|s)?|VMCs?|HMCs?)\b/i,"$1"],
[/\b(?:0\.5|2)\s*(?:kg\s*)?(?:up\s+to|to|[-\u2010-\u2015\u2212])\s*(?:50(?:\.0)?|20)\s*kg/i,"1\u201325 kg"],
[/0\.5 kg precision parts (?:to|up to heavy-duty) 50 kg/,"1 kg precision parts to 25 kg"],
[/1\.1 lbs to 110 lbs/,"2.2 lbs to 55 lbs"],
[/Forgings exceeding 50 kg may require open-die forging or casting depending on geometry\./,"Forgings heavier than 25 kg are outside our current component range."],
[/\u00b1\s?0\.01 mm(?: \(\u00b110 microns\))?/,"\u00b10.02 mm"],
[/Holding tolerances down to \u00b10\.2 mm/,"Forging tolerance \u00b10.5 mm; machining tolerance \u00b10.02 mm"],
[/Strict compliance with EN 10243-1 Grade F dimensional limits to minimize finish-machining cycle times\./,"Forging tolerance \u00b10.5 mm; machining tolerance \u00b10.02 mm."],
[/ASTM, ASME, EN 10243-1 Quality Standards/,"ASTM Quality Standards"],
[/1,000 Tons to 5,000 Tons/,"800 T to 2,500 T (including 1,000 T)"],
[/\(\.PDF, \.DXF, \.STEP\)/,"(2D or 3D drawings)"],
[/supporting STEP, IGES, and Parasolid files/,"accepting 2D and 3D drawings"],
[/BricksCAD V13/,"BricsCAD"],
[/operational since 2013/,"operational since 2007"],
[/Pune, established in 2013/,"Pune, established in 2007"],
[/Division Founded/,"Division Milestone","history"],
[/The company established its Suspension & Machining Division in Pune, India, marking a significant expansion/,"Milestone at the Suspension & Machining Division in Pune, India, operating since 2007","history"],
[/The company is acquired by Munot Enterprises, leading to expansion and diversification/,"The company achieves TS-16949 Quality Certification, demonstrating its commitment to excellence","history"],
[/PPAP \(Level 1 through 5 as required, standardizing on Level 3\)/,"PPAP (Levels 1\u20135 as required)"],
[/PPAP Level 3/,"PPAP Levels 1\u20135"],
[/35 Years of Forging Excellence/i,"Forging Excellence Since 1989"],
[/Varsha Forgings (?:Pvt\.?\s?Ltd\.?|Ltd\.?|Limited)/,"Varsha Forgings Private Limited"],
[/joining as Managing Director/,"joining as Director"],
[/(IATF[-\s]+16949 Quality Certification \()2024\)/,"$12017)","certifications"],
[/Best Leadership Award/,"Brand Leadership Award","certifications"],
[/Best Employer Award/,"Best Employer Brand Award","certifications"],
[/Productivity Improvement Bronze Trophy from ACMA 2016/,"Productivity Improvement Bronze Trophy from ACMA 2018","copy-of-articles"],
[/Excellence in Manufacturing Gold Trophy 2016/,"Excellence in Manufacturing Gold Trophy 2015","copy-of-articles"],
[/Varsha Forgings manufactures the forged metal components, machines the housings, executes precision rubber vulcanization bonding, and conducts 100% functional validation under one supplier framework\./,"Varsha Forgings manufactures the forged metal components and machines the housings, with rubber bonding carried out through a dedicated rubber-bonding partner under Varsha's quality control, all under one supplier framework."],
[/In-house CNC Turning, VMC Milling, Broaching/,"In-house CNC Turning, VMC Milling; broaching through vendor partners"],
[/^Broaching$/,"Broaching (vendor partners)"],
[/^(?:55|60|65|70|75)(?:\u2013\d\d)? Shore A$/,"Application-tuned","rubber-bonded"],
[/55 Shore A to 75 Shore A \(Application-Tuned\)/,"Application-tuned","rubber-bonded"],
[/Durometer values typically range from 55 Shore A to 75 Shore A, optimized/,"Hardness is tuned to the application, optimized","rubber-bonded"],
[/What elastomeric durometer hardness \(Shore A\) ranges are typical for truck suspension bushes\?/,"How is elastomer hardness selected for truck suspension bushes?","rubber-bonded"],
[/Higher stiffness \(70\u201375 Shore A\) improves/,"Higher stiffness improves","rubber-bonded"],
[/Lower stiffness \(55\u201360 Shore A\) maximizes/,"Lower stiffness maximizes","rubber-bonded"],
[/^NR \/ NR-SBR Blend$/,"NR","rubber-bonded"],
[/, or NR\/SBR blends engineered for oil, ozone, and thermal resistance/,"","rubber-bonded"],
[/aerospace, /,""],
[/, subsea extraction operations/,""],
[/subsea extraction operations, /,""],
[/closed-die and open-die press capabilities/,"closed-die press capabilities"],
[/Stainless Steel \(304L, 316L\), /,""],
[/hot forging, warm forging, cold forging, closed-die forging, and precision forging solutions/,"hot closed-die forging solutions"],
[/hot forging, warm forging, and precision cold forging/,"hot closed-die forging"],
[/Near-Net-Shape Forging: Hot, Warm, and Precision Cold Processes/,"Near-Net-Shape Hot Closed-Die Forging"],
[/ Warm Forging works at an intermediate temperature.*?components\./,""],
[/closed-die hot and warm forging/,"closed-die hot forging"],
[/zero-liquid discharge \(ZLD\) effluent treatment, /,""],
[/(?:\s?Our commitment to quality is encapsulated in our motto:)?\s?["\u201c\u201d]?UNDER PROMISE, OVER DELIVER(?:Y)?\.?["\u201c\u201d]?/i,""],
[/^["\u201c\u201d]?\s*DELIVER\.?\s*["\u201c\u201d]?$/,""],
[/^["\u201c\u201d]?\s*UNDER PROMISE, OVER\s*$/,""],
[/Indian Railways \(RDSO\), European \(EN\), and international \(UIC\/AAR\) standards/,"Indian Railways (RDSO) standards"],
[/Indian Railways \(RDSO\) specifications, EN 10204 3\.1\/3\.2 material certification, and international UIC\/AAR rail safety standards/,"Indian Railways (RDSO) specifications"],
[/additional compliance to RDSO, EN, UIC, and AAR standards as required/,"RDSO approval for Indian Railways"],
[/additionally comply with RDSO, EN, UIC, and AAR standards/,"are RDSO approved for Indian Railways"],
[/multi-decade service lives/,"long service lives"],
[/How are low-temperature impact properties validated for cold-climate railway applications\?/,"What impact and hardness testing supports railway forgings?"],
[/Charpy V-notch impact testing is conducted at temperatures down to -40\u00b0C to verify that alloy steel forgings maintain ductile fracture resistance in sub-zero operational environments\./,"Railway forgings are verified through Brinell and Rockwell hardness testing and ASTM E112 grain size checks, with 100% Magnetic Particle Inspection (MPI) on safety-critical parts."],
[/100% Volumetric Ultrasonic Testing \(UT\) for internal flaw detection and 100% Magnetic Particle Inspection \(MPI\) for surface linear indications/,"ultrasonic testing (UT) for internal flaw detection and 100% Magnetic Particle Inspection (MPI) on safety-critical parts for surface linear indications"],
[/Can Varsha Forgings manufacture custom forgings for heavy haul industrial and mining rail lines\?/,"Can Varsha Forgings manufacture custom railway forgings to customer drawings?"],
[/Yes\. Heavy-duty press infrastructure supports high-tonnage forgings engineered to withstand axle loads exceeding 32 metric tons typical in heavy-haul freight and mining rail corridors\./,"Yes. Press capacity from 800 T to 2,500 T supports forgings from 1 kg to 25 kg made to customer drawings and specifications."],
[/include 100% Magnetic Particle Inspection \(MPI\) for surface crack detection/,"include Magnetic Particle Inspection (MPI), 100% on safety-critical parts, for surface crack detection"],
[/undergo 100% chemical verification/,"undergo chemical verification"],
[/100% functional validation/,"functional validation"],
[/\b100% UT\b/,"UT"]],H=[["topical authority hub",null,0],
["EV suspension linkages integrate specially formulated low-durometer","forged-components-ev",1],
["Shore A: 55\u201375 (Tuned)","rubber-bonded",0],
["Dual-Phase Stainless Steel","about-1$",0],
["In-House Material Stainless Steel Grades","about-1$",0],
["Corrosion-resistant valve bodies, flanges","about-1$",0],
["ASME Class 150","oil-and-gas",0],
["Pressure Class Compliance","oil-and-gas",0],
["Engineered for high-stress pipeline environments","oil-and-gas",0],
["Sub-zero operational environments","railways",0],
["Low-Temperature Impact Validation","railways",0]],A=[["alt",/corvtte[^]*/i,""],
["alt",/Secotr/,"Sector"],
["alt",/Steering Level\b/,"Steering Lever"],
["alt",/Swingram Mount/,"Swing Arm Mount"]];
var SK={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1},BL='p,h1,h2,h3,h4,h5,h6,li,td,th,dt,dd,figcaption,blockquote,div';
function rx(x,g){var s=x instanceof RegExp?x:new RegExp(String(x).replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
return new RegExp(s.source.replace(/ /g,'[\\s\\u00a0]+'),(g?'g':'')+s.flags.replace('g',''))}
function nz(s){return String(s).replace(/[\s\u00a0\u2009\u202f\u200b]+/g,' ').replace(/[\u2010-\u2015\u2212]/g,'-').toLowerCase().trim()}
T=T.map(function(r){return{a:rx(r[0],1),b:rx(r[0]),to:r[1],p:r[2]&&new RegExp(r[2])}});
H=H.map(function(r){return{k:nz(r[0]),p:r[1]&&new RegExp(r[1]),f:r[2]}});
A=A.map(function(r){return{n:r[0],b:rx(r[1]),to:r[2]}});
function fix(ns,rs){rs.forEach(function(r){
var s=ns.map(function(n){return n.data}).join('').replace(/[\u00a0\u2009\u202f\u2007]/g,' '),ms=[],m;r.a.lastIndex=0;
while((m=r.a.exec(s))){if(!m[0]){r.a.lastIndex++;continue}ms.push(m)}
if(!ms.length)return;
var st=[],L=[],o=0;ns.forEach(function(n){st.push(o);L.push(n.data.length);o+=n.data.length});
for(var k=ms.length-1;k>=0;k--){m=ms[k];var a=m.index,b=a+m[0].length,rep=m[0].replace(r.b,r.to),first=1;
if(rep===m[0])continue;
for(var i=0;i<ns.length;i++){var x=Math.max(a,st[i])-st[i],y=Math.min(b,st[i]+L[i])-st[i];
if(y<=x)continue;var d=ns[i].data;ns[i].data=d.slice(0,x)+(first?rep:'')+d.slice(y);first=0}}
})}
function hide(hr){hr.forEach(function(r){
if(nz(document.body.textContent).indexOf(r.k)<0)return;
var c=new Map();function has(e){var v=c.get(e);if(v===undefined){v=nz(e.textContent).indexOf(r.k)>-1;c.set(e,v)}return v}
var all=document.body.querySelectorAll('*'),seen=[],j=0;
for(var i=0;i<all.length;i++){var e=all[i];if(SK[e.nodeName]||!has(e))continue;
var leaf=1;for(var q=e.firstElementChild;q;q=q.nextElementSibling){if(has(q)){leaf=0;break}}
if(!leaf)continue;
var t=e.closest('tr,li');if(t&&nz(t.textContent).length>r.k.length*4+100)t=null;
t=t||e.closest('p,h1,h2,h3,h4,h5,h6')||e;
for(var n=0;n<3&&t.parentElement&&t.parentElement!==document.body&&nz(t.parentElement.textContent)===nz(t.textContent);n++)t=t.parentElement;
if(seen.indexOf(t)>-1)continue;seen.push(t);
if(r.f&&j++===0)continue;
t.style.setProperty('display','none','important')}})}
function pairs(P){[[/^Year Established:?$/i,/^\s*2013\s*$/,'2007','pune']].forEach(function(r){
if(!new RegExp(r[3]).test(P))return;
var w=document.createTreeWalker(document.body,4,null),n,L=[];
while((n=w.nextNode())){if(!SK[n.parentNode.nodeName]&&r[0].test(n.data.replace(/\u00a0/g,' ').trim()))L.push(n)}
L.forEach(function(n){var el=n.parentNode.closest('td,th,dt,li,p,div'),s=el&&el.nextElementSibling;
if(!s)return;var w2=document.createTreeWalker(s,4,null),m;
while((m=w2.nextNode())){if(r[1].test(m.data))m.data=m.data.replace(/2013/,r[2])}})})}
function run(){var P=location.pathname;
var tr=T.filter(function(r){return!r.p||r.p.test(P)}),hr=H.filter(function(r){return!r.p||r.p.test(P)});
if(!document.body)return;
var w=document.createTreeWalker(document.body,4,null),g=new Map(),n;
while((n=w.nextNode())){if(SK[n.parentNode.nodeName]||!n.data.trim())continue;
var b=n.parentNode.closest(BL)||document.body,l=g.get(b);if(!l)g.set(b,l=[]);l.push(n)}
g.forEach(function(ns){fix(ns,tr)});
if(hr.length)hide(hr);
document.querySelectorAll('img[alt]').forEach(function(e){var v=e.getAttribute('alt');
A.forEach(function(r){v=v.replace(r.b,r.to)});
if(v!==e.getAttribute('alt'))e.setAttribute('alt',v)});
document.querySelectorAll('a[href]').forEach(function(a){var h=a.getAttribute('href'),q=h.replace(/mailto:marketing@varshaforging\.com/gi,'mailto:marketing@varshaforgings.com');if(q!==h)a.setAttribute('href',q)});
}
var t;function go(){try{run()}catch(e){}}
function later(){clearTimeout(t);t=setTimeout(go,200)}
go();[1000,3000,8000].forEach(function(d){setTimeout(go,d)});
new MutationObserver(later).observe(document.body,{childList:true,subtree:true});
})();