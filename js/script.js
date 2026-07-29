
(function(){
  var layer = document.getElementById('heartLayer');
  var hearts = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1em" height="1em" style="display:inline-block;vertical-align:middle"><defs><radialGradient id="ph1" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#FFD6E8"/><stop offset="55%" stop-color="#FF9EB8"/><stop offset="100%" stop-color="#E86FA0"/></radialGradient><filter id="phf1"><feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/><feOffset dx="0" dy="1.5" result="offset"/><feComposite in="SourceGraphic" in2="offset"/></filter></defs><path d="M32 56 C32 56 8 40 8 22 C8 13 15 7 22 7 C26.5 7 30 9.5 32 13 C34 9.5 37.5 7 42 7 C49 7 56 13 56 22 C56 40 32 56 32 56Z" fill="url(#ph1)" filter="url(#phf1)"/><path d="M22 13 C18 13 14 17 14 22 C14 28 18 34 24 40" fill="none" stroke="#FFE8F0" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/></svg>'];
  if (layer) {
    for(var i=0;i<18;i++){
      var el = document.createElement('div');
      el.className='bg-heart';
      el.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
      el.style.left = Math.random()*100+'%';
      el.style.animationDuration = (10+Math.random()*12)+'s';
      el.style.animationDelay = (Math.random()*12)+'s';
      el.style.fontSize = (14+Math.random()*16)+'px';
      layer.appendChild(el);
    }
  }

  var targetDate = new Date('2027-06-28T22:16:00');
  function updateCounter(){
    var now = new Date();
    var diff = targetDate - now;
    if(diff <= 0){
      if(document.getElementById('c1d')) document.getElementById('c1d').textContent = '00';
      if(document.getElementById('c1h')) document.getElementById('c1h').textContent = '00';
      if(document.getElementById('c1m')) document.getElementById('c1m').textContent = '00';
      if(document.getElementById('c1s')) document.getElementById('c1s').textContent = '00';
      return;
    }
    var d = Math.floor(diff/(1000*60*60*24));
    var h = Math.floor((diff/(1000*60*60))%24);
    var m = Math.floor((diff/(1000*60))%60);
    var s = Math.floor((diff/1000)%60);
    if(document.getElementById('c1d')) document.getElementById('c1d').textContent = String(d).padStart(2,'0');
    if(document.getElementById('c1h')) document.getElementById('c1h').textContent = String(h).padStart(2,'0');
    if(document.getElementById('c1m')) document.getElementById('c1m').textContent = String(m).padStart(2,'0');
    if(document.getElementById('c1s')) document.getElementById('c1s').textContent = String(s).padStart(2,'0');
  }
  updateCounter();
  setInterval(updateCounter, 1000);

  var bar = document.getElementById('c1musicBar');
  var bgm = document.getElementById('c1bgm');
  var label = document.getElementById('c1musicLabel');
  var playing = false;
  if (bar && bgm) {
    bar.addEventListener('click', function(){
      if(!playing){ bgm.play().catch(function(){}); playing=true; bar.classList.add('playing'); label.textContent='Sedang diputar'; }
      else { bgm.pause(); playing=false; bar.classList.remove('playing'); label.textContent='Putar lagu'; }
    });
  }
})();
