addEventListener('load', function(){
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        keyboard: true,
        overview: true,
        center: true,
        transition: 'fade',
        dependencies: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.1.0/plugin/highlight/highlight.min.js',
                async: true,
                callback: function() {
                    hljs.initHighlighting();
                }
            }
        ]
    });

    // Autoplay videos.
    Reveal.addEventListener( 'slidechanged', function( event ) {
        var video = event.currentSlide.querySelector('video');
        if(video){
            video.play();
        }
        console.clear();
        console.log('%cSlide "'+(event.currentSlide.querySelector('h2').innerText)+'"', 'font-weight:bold;font-size:2em;');
        if(event.currentSlide.dataset.msg){
            console.log(event.currentSlide.dataset.msg);
        }
    });

    var echoWorker = new Worker('/scripts/echoworker.js');
    echoWorker.onmessage = function(message){
        console.log('%cMessage from worker: ', 'color: darkred', message);
        window.echoWorkerMessage = message;
    };
    window.echoWorker = echoWorker;

    window.proxyWorker = createWorkerProxy(new Worker('scripts/proxyworker.js'),{
        timeCalls: false
    });

    // File selector demo
    var inputOnChange = function(e){
        console.group();
        console.log('%cLoading file into ArrayBuffer','font-weight:bold;color:green;');
        var selectedFile = e.srcElement.files[0];
        var reader = new FileReader();
        reader.onload = function(e){
            window.arrayBuffer = e.target.result;
            console.log('Loaded file, byteLength: ', arrayBuffer.byteLength);
            console.groupEnd();
        };
        reader.readAsArrayBuffer(selectedFile);
    };
    document.getElementById('arraybuffer-demo').onchange = inputOnChange;
    document.getElementById('workerproxy-demo').onchange = inputOnChange;
});
