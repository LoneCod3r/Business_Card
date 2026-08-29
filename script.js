  new QRCode(document.getElementById("qr"), {
    text: "https://dreamerol.github.io/MIHAELA-KOSEVA/",
    width: 184,
    height: 184,
    colorDark: "#5B9CFF",
    colorLight: "#0C1220",
    correctLevel: QRCode.CorrectLevel.Q
  });

  function toggleCard(){
    document.getElementById('card').classList.toggle('flipped');
  }

  document.querySelectorAll('.flip-btn').forEach(function(btn){
    btn.addEventListener('click', toggleCard);
  });
