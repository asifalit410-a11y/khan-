/* ===== 1. YOUR BUSINESS DETAILS: edit only this block ===== */
const CONFIG = {
  whatsapp: "923447540058",            // e.g. "923001234567" (country code, no + or spaces)
  phone: "+92 344 7540058",
  payNumber: "+92 344 7540058",   // number customers send online payment to
  payName: "",             // account name shown to customers (optional)
  qrCaption: "Scan this QR code",  // replace images/payment-qr.png with your JazzCash/Easypaisa/bank QR               // shown on site, e.g. "+92 300 1234567"
  email: "",               // e.g. "info@yourmail.com"
  address: "",             // your shop address
  mapEmbedUrl: "",         // paste the src="..." link from Google Maps > Share > Embed a map
  currency: "Rs ",
  social: { Facebook: "", Instagram: "", YouTube: "" }  // paste your page links
};

/* ===== 2. SERVICES: change text/images here ===== */
const SERVICES = [
  ["Electrical Installation","New electrical setups for homes and shops.","service-installation.jpg"],
  ["Wiring & Rewiring","Safe wiring for new or old buildings.","service-wiring.jpg"],
  ["Lighting Installation","Indoor and outdoor lighting fitted properly.","service-lighting.jpg"],
  ["Switchboards & Circuit Protection","Switchboards, breakers and protection.","service-switchboard.jpg"],
];

/* ===== 3. GALLERY ===== */
const WORK = [["Electrical installation","project-1.jpg"],["Completed building","after-wiring.jpg"],["Interior lighting","after-interior.jpg"],["Garden & event lighting","service-lighting.jpg"],["Distribution panel","after-panel.jpg"]];  // add more like: ["Wiring","project-2.jpg"]

/* ===== 4. PRODUCTS: [name, category, price, description, image]. Prices are PLACEHOLDERS ===== */
const CATS = ["Electrical Wires & Cables","Switches & Sockets","Circuit Breakers & MCBs","LED Lights & Bulbs","Fans & Accessories","Electrical Tools","Plugs, Holders & Connectors","Other Electrical Accessories"];
const IMG = ["product-wire.jpg","product-switch.jpg","product-breaker.jpg","product-led-light.jpg","product-fan.jpg","product-tools.jpg","product-plug.jpg","product-other.jpg"];
const NAMES = [["House Wire (sample)","Cable Roll (sample)"],["Wall Switch (sample)","Socket (sample)"],["MCB (sample)","Breaker (sample)"],["LED Bulb (sample)","LED Tube (sample)"],["Ceiling Fan (sample)","Fan Regulator (sample)"],["Screwdriver Set (sample)","Tester (sample)"],["Plug (sample)","Bulb Holder (sample)"],["Tape (sample)","Accessory (sample)"]];
const PRODUCTS = [
  {id:"wire1",name:"Red & Black Cable Roll",cat:CATS[0],price:1500,desc:"Cable rolls for wiring and connections.",img:"product-wire.jpg"},
  {id:"wire-black",name:"Black Multi-Core Cable Roll",cat:CATS[0],price:1800,desc:"Black cable roll with three colour-coded cores.",img:"product-wire-black.jpg"},
  {id:"wire-colour",name:"Coloured House Wires",cat:CATS[0],price:1200,desc:"Single-core wires in different colours.",img:"product-wire-colour.jpg"},
  {id:"sw1",name:"Switches & Sockets Set",cat:CATS[1],price:800,desc:"Wall switches and sockets, some with USB ports.",img:"product-switch.jpg"},
  {id:"sw-gold4",name:"Champagne 4-Switch Plate",cat:CATS[1],price:800,desc:"Four-switch wall plate in champagne finish.",img:"product-switch-gold4.jpg"},
  {id:"sw-mix",name:"Switch Plates - Black, White & Grey",cat:CATS[1],price:800,desc:"Wall switch plates in black, white and grey.",img:"product-switch-mix.jpg"},
  {id:"sw-blackusb",name:"Black Socket with USB Ports",cat:CATS[1],price:800,desc:"Black wall socket plate with USB ports.",img:"product-switch-blackusb.jpg"},
  {id:"sw-dimmer",name:"Dimmer & Switch Plate - Dark Finish",cat:CATS[1],price:800,desc:"Dimmer and switches on one dark plate.",img:"product-switch-dimmer.jpg"},
  {id:"sw-bronze4",name:"Bronze 4-Button Switch Plate",cat:CATS[1],price:800,desc:"Four-button switch plate in bronze finish.",img:"product-switch-bronze4.jpg"},
  {id:"sw-options",name:"Switch Plates - Colour Options",cat:CATS[1],price:800,desc:"Switch plates in different colours and finishes.",img:"product-switch-options.jpg"},
  {id:"sw-champ4",name:"Champagne 4-Button Switch Plate",cat:CATS[1],price:800,desc:"Four-button switch plate with indicator lights.",img:"product-switch-champ4.jpg"},
  {id:"sw-blackgold",name:"Black & Gold Switches and Sockets",cat:CATS[1],price:800,desc:"Black plates with gold-colour switches.",img:"product-switch-blackgold.jpg"},
  {id:"sw-goldusb",name:"Gold Universal Socket with USB",cat:CATS[1],price:800,desc:"Gold plate with universal sockets and USB ports.",img:"product-switch-goldusb.jpg"},
  {id:"sw-uk",name:"Double Sockets with USB - 4 Colours",cat:CATS[1],price:800,desc:"Double socket plates with USB in four colours.",img:"product-switch-uk.jpg"},
  {id:"sw-brown",name:"Switch Plates - Brown & White",cat:CATS[1],price:800,desc:"Switch plates in brown, white and other colours.",img:"product-switch-brown.jpg"},
  {id:"led1",name:"COB LED Downlight",cat:CATS[3],price:700,desc:"Recessed ceiling spotlight for rooms and shops.",img:"product-led-light.jpg"},
  {id:"led2",name:"LED Strip Light",cat:CATS[3],price:2000,desc:"Flexible strip light with plug, for decorative lighting.",img:"product-led-strip.jpg"},
  {id:"fan1",name:"Ceiling Fan",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan.",img:"product-fan.jpg"},
  {id:"fan-black",name:"Ceiling Fan - Black",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, black finish.",img:"product-fan-black.jpg"},
  {id:"fan-ivory",name:"Ceiling Fan - Ivory",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, ivory finish.",img:"product-fan-ivory.jpg"},
  {id:"fan-copper",name:"Ceiling Fan - Copper",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, copper finish.",img:"product-fan-copper.jpg"},
  {id:"fan-maroon",name:"Ceiling Fan - Maroon",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, maroon finish.",img:"product-fan-maroon.jpg"},
  {id:"fan-red",name:"Ceiling Fan - Red",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, red finish.",img:"product-fan-red.jpg"},
  {id:"fan-bronze",name:"Ceiling Fan - Bronze",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, bronze finish.",img:"product-fan-bronze.jpg"},
  {id:"fan-white",name:"Ceiling Fan - White",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, white finish.",img:"product-fan-white.jpg"},
  {id:"fan-beige",name:"Ceiling Fan - Beige",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, beige finish.",img:"product-fan-beige.jpg"},
  {id:"fan-curved",name:"Ceiling Fan - White Curved Blade",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, white curved blade finish.",img:"product-fan-curved.jpg"},
  {id:"fan-champagne",name:"Ceiling Fan - Champagne",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, champagne finish.",img:"product-fan-champagne.jpg"},
  {id:"fan-bw",name:"Ceiling Fan - Black & White",cat:CATS[4],price:9000,desc:"Three-blade ceiling fan, black & white finish.",img:"product-fan-bw.jpg"},
  {id:"tool-screwdriver-set",name:"Precision Screwdriver Set",cat:CATS[5],price:1000,desc:"Small screwdriver set with bits in a round case.",img:"product-tool-screwdriver-set.jpg"},
  {id:"tool-hammer",name:"Claw Hammer",cat:CATS[5],price:1000,desc:"Claw hammer with fibre handle.",img:"product-tool-hammer.jpg"},
  {id:"tool-tape",name:"Measuring Tape",cat:CATS[5],price:1000,desc:"Measuring tape for jobs and site work.",img:"product-tool-tape.jpg"},
  {id:"tool-cutter",name:"Side Cutter Pliers",cat:CATS[5],price:1000,desc:"Side cutting pliers with insulated-style grips.",img:"product-tool-cutter.jpg"},
  {id:"tool-pliers",name:"Combination Pliers",cat:CATS[5],price:1000,desc:"Combination pliers for cutting and gripping.",img:"product-tool-pliers.jpg"},
  {id:"tool-screwdrivers",name:"Slotted & Phillips Screwdrivers",cat:CATS[5],price:1000,desc:"Screwdrivers with slotted and Phillips tips.",img:"product-tool-screwdrivers.jpg"},
  {id:"tool-tester",name:"Voltage Tester Screwdrivers",cat:CATS[5],price:1000,desc:"Colour-coded tester screwdrivers.",img:"product-tool-tester.jpg"},
  {id:"tool-wrench-set",name:"Wrench & Pliers Set",cat:CATS[5],price:1000,desc:"Pipe wrench, adjustable wrench and locking pliers.",img:"product-tool-wrench-set.jpg"},
  {id:"tool-pliers-set",name:"Pliers & Adjustable Wrench Set",cat:CATS[5],price:1000,desc:"Slip-joint, long-nose pliers and adjustable wrench.",img:"product-tool-pliers-set.jpg"},
  {id:"tool-ratchet",name:"Ratchet Spanner Set",cat:CATS[5],price:1000,desc:"Ratcheting spanners in different sizes.",img:"product-tool-ratchet.jpg"},
  {id:"tool-ballpeen",name:"Ball-Peen Hammer",cat:CATS[5],price:1000,desc:"Ball-peen hammer with yellow handle.",img:"product-tool-ballpeen.jpg"},
  {id:"tool-mallet",name:"Rubber Mallet",cat:CATS[5],price:1000,desc:"Rubber mallet with wooden handle.",img:"product-tool-mallet.jpg"},,
  {id:"x-spd1",name:"Surge Protector - Yellow & Grey",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd1.jpg"},
  {id:"x-spd2",name:"Surge Protector - Grey & Green",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd2.jpg"},
  {id:"x-spd3",name:"Surge Protector - Grey & Blue",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd3.jpg"},
  {id:"x-spd4",name:"Surge Protector - Grey with Indicator",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd4.jpg"},
  {id:"x-spd5",name:"Surge Protector - Orange",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd5.jpg"},
  {id:"x-spd6",name:"Surge Protector - White Single",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd6.jpg"},
  {id:"x-spd7",name:"Surge Protector - Red Single",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd7.jpg"},
  {id:"x-spd8",name:"Surge Protector - Orange (Wide)",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd8.jpg"},
  {id:"x-spd9",name:"Surge Protector - Slim Green",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd9.jpg"},
  {id:"x-spd10",name:"Surge Protector - White Compact",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd10.jpg"},
  {id:"x-spd11",name:"Surge Protector - Grey (4 Modules)",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd11.jpg"},
  {id:"x-spd12",name:"Surge Protector - Yellow (4 Modules)",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd12.jpg"},
  {id:"x-spd13",name:"Surge Protector - Yellow (2 Modules)",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd13.jpg"},
  {id:"x-spd14",name:"Surge Protector - Yellow Wide",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd14.jpg"},
  {id:"x-spd15",name:"Surge Protector - Red (4 Modules)",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd15.jpg"},
  {id:"x-spd16",name:"Surge Protector - Grey Wide",cat:CATS[2],price:600,desc:"Surge protection device for electrical panels.",img:"product-spd16.jpg"},
  {id:"x-mcb1",name:"Circuit Breaker - White & Green",cat:CATS[2],price:600,desc:"White circuit breaker with green accent.",img:"product-mcb1.jpg"},
  {id:"x-mcb2",name:"Double-Pole MCB - White",cat:CATS[2],price:600,desc:"Two-module white MCB.",img:"product-mcb2.jpg"},
  {id:"x-mcb3",name:"3-Pole MCB - Blue & White",cat:CATS[2],price:600,desc:"Three-module MCB with blue toggles.",img:"product-mcb3.jpg"},
  {id:"x-mcb4",name:"4-Pole MCB - Orange & White",cat:CATS[2],price:600,desc:"Four-module MCB with orange base.",img:"product-mcb4.jpg"},
  {id:"x-rcbo",name:"Residual Current Breakers Set",cat:CATS[2],price:600,desc:"Residual current breakers in different styles.",img:"product-rcbo.jpg"},
  {id:"x-sock2",name:"2 Pin Socket",cat:CATS[6],price:500,desc:"Two-pin wall socket.",img:"product-sock2.jpg"},
  {id:"x-top2",name:"2 Pin Top",cat:CATS[6],price:500,desc:"Two-pin plug top.",img:"product-top2.jpg"},
  {id:"x-top3",name:"3 Pin Top",cat:CATS[6],price:500,desc:"Three-pin plug top.",img:"product-top3.jpg"},
  {id:"x-multi",name:"Multipin Plug Socket",cat:CATS[6],price:500,desc:"Multi-pin socket adaptor.",img:"product-multi.jpg"},
  {id:"x-sock5",name:"5 Pin Socket",cat:CATS[6],price:500,desc:"Five-pin wall socket.",img:"product-sock5.jpg"},
  {id:"x-mf",name:"Male Female Plug",cat:CATS[6],price:500,desc:"Male and female plug pair.",img:"product-mf.jpg"},
  {id:"x-sw1",name:"1 Way Switch",cat:CATS[6],price:500,desc:"One-way wall switch.",img:"product-sw1.jpg"},
  {id:"x-sw2",name:"2 Way Switch",cat:CATS[6],price:500,desc:"Two-way wall switch.",img:"product-sw2.jpg"},
  {id:"x-bell",name:"Bell Switch",cat:CATS[6],price:500,desc:"Push switch for door bells.",img:"product-bell.jpg"},
  {id:"x-bed",name:"Bed Switch",cat:CATS[6],price:500,desc:"Small switch for bedside use.",img:"product-bed.jpg"},
  {id:"x-fanreg",name:"Fan Regulator",cat:CATS[6],price:500,desc:"Fan speed regulator.",img:"product-fanreg.jpg"},
  {id:"x-fuse",name:"Fuse",cat:CATS[6],price:500,desc:"Fuse holder unit.",img:"product-fuse.jpg"},
  {id:"x-blackplugs",name:"Black Plug Tops (Assorted)",cat:CATS[6],price:500,desc:"Black plug tops in different shapes.",img:"product-blackplugs.jpg"},
  {id:"x-boardbox",name:"Switch Board Box",cat:CATS[6],price:500,desc:"Plastic board box with openings for switches and sockets.",img:"product-boardbox.jpg"},
  {id:"x-ext1",name:"4-Socket Extension Board - Red & White",cat:CATS[6],price:500,desc:"Extension board with four universal sockets.",img:"product-ext1.jpg"},
  {id:"x-ext2",name:"8-Socket Extension Board with USB",cat:CATS[6],price:500,desc:"Extension board with many sockets and USB ports.",img:"product-ext2.jpg"},
  {id:"x-ext3",name:"Extension Board with USB Ports",cat:CATS[6],price:500,desc:"Extension board with sockets and USB ports.",img:"product-ext3.jpg"},
  {id:"x-ext4",name:"Small Extension Board - White",cat:CATS[6],price:500,desc:"Small white extension board with switches.",img:"product-ext4.jpg"},
  {id:"x-ext5",name:"5-Socket Extension Board with Switch",cat:CATS[6],price:500,desc:"Extension board with five sockets and a switch.",img:"product-ext5.jpg"},
  {id:"x-ext6",name:"Extension Board with 3-Pin Plug",cat:CATS[6],price:500,desc:"Extension board with sockets and 3-pin plug.",img:"product-ext6.jpg"}
];

/* ===== Code below: you do not need to edit ===== */
const $ = s => document.querySelector(s);
const money = n => CONFIG.currency + n.toLocaleString();
let cart = (()=>{try{return JSON.parse(localStorage.getItem("khanCart")||"{}")}catch(e){return {}}})();
let cat = "All";

$("#serviceGrid").innerHTML = SERVICES.map(s=>`<article class="card"><img src="images/${s[2]}" alt="${s[0]}" loading="lazy" width="400" height="300"><div class="body"><h3>${s[0]}</h3><p>${s[1]}</p><a class="more" href="#contact">Learn More</a></div></article>`).join("");
$("#gallery").innerHTML = WORK.map(w=>`<figure><img src="images/${w[1]}" alt="${w[0]}" loading="lazy" width="400" height="300"><figcaption>${w[0]}</figcaption></figure>`).join("");
$("#chips").innerHTML = ["All",...CATS].map(c=>`<button aria-pressed="${c==="All"}" data-c="${c}">${c}</button>`).join("");
$("#footCats").innerHTML = CATS.map(c=>`<a href="#shop" data-cat="${c}">${c}</a>`).join("");
$("#footCats").onclick = e => { const c=e.target.dataset.cat; if(!c) return; cat=c; $("#search").value=""; document.querySelectorAll("#chips button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cat)); renderProducts(); };
$("#chips").onclick = e => { if(!e.target.dataset.c) return; cat=e.target.dataset.c; document.querySelectorAll("#chips button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cat)); renderProducts(); };
$("#search").oninput = renderProducts;

function renderProducts(){
  const q = $("#search").value.toLowerCase();
  const list = PRODUCTS.filter(p=>(cat==="All"||p.cat===cat)&&(p.name+p.cat).toLowerCase().includes(q));
  $("#productGrid").innerHTML = list.length ? list.map(p=>`<article class="card"><img data-open="${p.id}" src="images/${p.img}" alt="${p.name}" loading="lazy" width="400" height="300"><div class="body"><h3>${p.name}</h3><p>${p.desc}</p><span class="price">${money(p.price)} <small>(placeholder)</small></span><button class="link" data-open="${p.id}">View Details</button><button class="btn" data-add="${p.id}">Add to Cart</button></div></article>`).join("") : "<p>No products in this category yet.</p>";
}
function addToCart(id){ cart[id]=(cart[id]||0)+1; saveCart(); $("#modal").hidden=true; $("#drawer").hidden=false; }
function openModal(id){ const p=PRODUCTS.find(x=>x.id===id); if(!p) return;
  $("#mImg").src=`images/${p.img}`; $("#mImg").alt=p.name; $("#mName").textContent=p.name; $("#mCat").textContent=p.cat;
  $("#mDesc").textContent=p.desc; $("#mPrice").textContent=money(p.price)+" (placeholder price)"; $("#mAdd").dataset.add=id;
  $("#modal").hidden=false; $("#mClose").focus(); }
$("#productGrid").onclick = e => { const a=e.target.dataset.add, o=e.target.dataset.open; if(a) addToCart(a); else if(o) openModal(o); };
$("#modal").onclick = e => { if(e.target.id==="modal"||e.target.id==="mClose") $("#modal").hidden=true; else if(e.target.dataset.add) addToCart(e.target.dataset.add); };
document.addEventListener("keydown", e => { if(e.key==="Escape"){ $("#modal").hidden=true; $("#drawer").hidden=true; } });

function saveCart(){ try{localStorage.setItem("khanCart",JSON.stringify(cart))}catch(e){} renderCart(); }
function renderCart(){
  const ids = Object.keys(cart).filter(id=>PRODUCTS.some(p=>p.id===id));
  let total = 0, count = 0;
  $("#cartItems").innerHTML = ids.length ? ids.map(id=>{ const p=PRODUCTS.find(x=>x.id===id), q=cart[id]; total+=p.price*q; count+=q;
    return `<div class="item"><img src="images/${p.img}" alt=""><div><b>${p.name}</b><div class="qty"><button data-d="${id}" aria-label="Decrease quantity">−</button>${q}<button data-i="${id}" aria-label="Increase quantity">+</button></div></div><div>${money(p.price*q)}<br><button class="rm" data-r="${id}" aria-label="Remove ${p.name}">✕</button></div></div>`; }).join("") : "<p>Your cart is empty.</p>";
  $("#cartTotal").textContent = money(total); $("#cartCount").textContent = count;
}
$("#cartItems").onclick = e => { const d=e.target.dataset;
  if(d.i) cart[d.i]++; if(d.d) cart[d.d]=Math.max(1,cart[d.d]-1); if(d.r) delete cart[d.r];
  if(d.i||d.d||d.r) saveCart(); };
$("#cartBtn").onclick = () => { resetOrder(); $("#drawer").hidden = false; };
$("#closeCart").onclick = () => $("#drawer").hidden = true;

function openWhatsApp(text){
  if(!CONFIG.whatsapp){ alert("Add your WhatsApp number in script.js (CONFIG.whatsapp) to enable this."); return; }
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`,"_blank");
}
const waLink = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
$("#payNum").textContent = CONFIG.payNumber; $("#qrCap").textContent = CONFIG.qrCaption;
$("#payName").textContent = CONFIG.payName ? "Account name: " + CONFIG.payName : "";
$("#orderForm").onchange = e => { if(e.target.name==="pay") $("#payBox").hidden = e.target.value==="Cash on Delivery"; };
function resetOrder(){ $("#done").hidden=true; $("#orderForm").hidden=false; }
$("#doneBtn").onclick = () => { resetOrder(); $("#drawer").hidden=true; };
$("#orderForm").onsubmit = e => { e.preventDefault();
  const ids = Object.keys(cart).filter(id=>PRODUCTS.some(p=>p.id===id));
  if(!ids.length){ alert("Your cart is empty."); return; }
  const f = new FormData(e.target); let t=0;
  const lines = ids.map(id=>{const p=PRODUCTS.find(x=>x.id===id); t+=p.price*cart[id]; return `- ${p.name} x${cart[id]}`;});
  const pay = f.get("pay"), online = pay !== "Cash on Delivery";
  const text = `Order request\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nAddress: ${f.get("address")}\n${lines.join("\n")}\nTotal (estimate): ${money(t)}\nPayment: ${pay}${online?" (to be sent to "+CONFIG.payNumber+")":""}\nNotes: ${f.get("notes")}`;
  if(!CONFIG.whatsapp){ openWhatsApp(text); return; }
  window.open(waLink(text),"_blank");
  $("#doneText").innerHTML = online ? `Your order request is ready. Please send your payment to <b>${CONFIG.payNumber}</b> and share the payment screenshot on WhatsApp. We will confirm your order after we receive it.` : `Your order request is ready with Cash on Delivery. We will contact you on <b>WhatsApp</b> to confirm your order and delivery.`;
  $("#doneLink").href = waLink(text);
  $("#orderForm").hidden = true; $("#done").hidden = false; cart = {}; saveCart(); e.target.reset(); $("#payBox").hidden = true; };
$("#contactForm").onsubmit = e => { e.preventDefault(); const f=new FormData(e.target);
  openWhatsApp(`Message from ${f.get("name")} (${f.get("phone")}): ${f.get("message")}`); };
$("#waBtn").onclick = () => openWhatsApp("Hello Khan Electrical Store, I need help.");

$("#cPhone").textContent = CONFIG.phone || "Add your phone number";
$("#cEmail").textContent = CONFIG.email || "Add your email";
$("#cAddress").textContent = CONFIG.address || "Add your business address";
$("#bizInfo").textContent = "Business details: edit them in script.js (CONFIG).";
if(CONFIG.mapEmbedUrl) $("#map").innerHTML = `<iframe src="${CONFIG.mapEmbedUrl}" title="Map" loading="lazy"></iframe>`;
$("#social").innerHTML = Object.entries(CONFIG.social).map(([n,u])=> u ? `<a href="${u}" target="_blank" rel="noopener">${n}</a>` : `<span>${n} (add link)</span>`).join("");
["#heroWa","#waFloat"].forEach(s=>{const a=$(s);a.href=CONFIG.whatsapp?`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hello Khan Electrical Store, I want to place an order.")}`:"#contact";if(CONFIG.whatsapp){a.target="_blank";a.rel="noopener"}});
const BA = [  // [title, before photo, after photo, shape]
  ["Wiring Project","before-wiring.jpg","after-wiring.jpg","4/3"],
  ["Distribution Panel","before-panel.jpg","after-panel.jpg","4/3"],
  ["Ceiling Lighting","before-ceiling.jpg","after-ceiling.jpg","4/3"],
  ["Interior Wiring & Lighting","before-interior.jpg","after-interior.jpg","4/3"]
];
$("#baGrid").innerHTML = BA.map(b=>`<article class="ba"><h3>${b[0]}</h3><button class="ba-btn" style="aspect-ratio:${b[3]}" aria-pressed="false" aria-label="${b[0]}: show before or after photo"><img src="images/${b[1]}" alt="${b[0]} before" loading="lazy"><img class="after" src="images/${b[2]}" alt="${b[0]} after" loading="lazy"><span class="ba-tag">Before</span><span class="ba-hint"></span></button></article>`).join("");
(()=>{ const touch=matchMedia("(hover: none)").matches;
  document.querySelectorAll(".ba-btn").forEach(b=>{
    const set=on=>{ b.classList.toggle("on",on); b.setAttribute("aria-pressed",on); b.querySelector(".ba-tag").textContent=on?"After":"Before"; b.querySelector(".ba-hint").textContent=on?(touch?"Tap to see Before":"After"):(touch?"Tap to see After":"Move mouse here to see After"); };
    set(false);
    b.onmouseenter=()=>{ if(!touch) set(true); }; b.onmouseleave=()=>{ if(!touch) set(false); };
    b.onfocus=()=>{ if(!touch) set(true); }; b.onblur=()=>{ if(!touch) set(false); };
    b.onclick=()=>{ if(touch) set(!b.classList.contains("on")); };
  }); })();
$("#year").textContent = new Date().getFullYear();
$("#menuBtn").onclick = () => { const o=$("#menu").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded",o); };
$("#menu").onclick = () => $("#menu").classList.remove("open");
renderProducts(); renderCart();
