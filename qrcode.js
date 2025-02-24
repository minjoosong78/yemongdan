<!DOCTYPE html>
<html>
<head>
<title>QR 코드 생성</title>
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js"></script>
</head>
<body>
<div id="qrcode"></div>
<script>
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://127.0.0.1:5500/index.html", // QR 코드에 담을 URL
    width: 200,
    height: 200,
  });
</script>
</body>
</html>