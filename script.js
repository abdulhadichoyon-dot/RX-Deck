// RX DECK: replace this one value when your real website is ready.
const REAL_WEBSITE_URL = "YOUR_REAL_WEBSITE_URL";

const realWebsiteLink = document.querySelector("#realWebsiteLink");
if (realWebsiteLink) {
  realWebsiteLink.href = REAL_WEBSITE_URL;
  realWebsiteLink.addEventListener("click", (event) => {
    if (REAL_WEBSITE_URL === "YOUR_REAL_WEBSITE_URL") {
      event.preventDefault();
      alert("আপনার আসল ওয়েবসাইটের URL এখনো সেট করা হয়নি। script.js ফাইলে REAL_WEBSITE_URL বদলে দিন।");
    }
  });
}

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(h?scrollY/h*100:0)+'%';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('pointermove',e=>{
    const r=btn.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*.12}px,${y*.12}px)`;
  });
  btn.addEventListener('pointerleave',()=>btn.style.transform='');
});

document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.querySelector('.editor-window')?.style.setProperty('transform',`rotateY(${x*4}deg) rotateX(${-y*3}deg)`);
  });
  card.addEventListener('pointerleave',()=>card.querySelector('.editor-window')?.style.setProperty('transform',''));
});
