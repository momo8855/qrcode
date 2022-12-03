var qrcode = new QRCode("qrcode",   {
    width: 500,
    height: 500,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function makeCode () {    
  qrcode.makeCode("fj;eowif");
}

// makeCode();

