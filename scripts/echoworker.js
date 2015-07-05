addEventListener('message', function(e) {
    console.log('%cMessage from parent: ', 'color: blue', e);
    postMessage(e.data);
}, false);
