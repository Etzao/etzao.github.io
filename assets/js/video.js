  var canvas = document.getElementById("jeeFaceFilterCanvas");  
  var streamRecorder = canvas.stream.record();
  function stopRecording() {
    streamRecorder.getRecordedData(gotData);
  }
  function gotData(blob) {
    var x = new XMLHttpRequest();
    x.open('POST', 'uploadMessage');
    x.send(blob);
  }
  var frame = 0;
  function updateCanvas() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 480);
    ctx.fillText("Frame " + frame, 0, 200);
    ++frame;
  }
  setInterval(updateCanvas, 30);