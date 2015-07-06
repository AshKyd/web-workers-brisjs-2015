importScripts("vendor/workerproxy.js");
importScripts("vendor/natural.js");
/**
 * Convert an arrayBuffer to string.
 * http://updates.html5rocks.com/2014/08/Easier-ArrayBuffer---String-conversion-with-the-Encoding-API
 */
function arrayBuffer2String(buf, callback) {
    if(typeof buf === 'string'){
        // nothing to do here.
        return buf;
    }

    var dataView = new DataView(buf);
    var decoder = new TextDecoder('utf-8');
    return decoder.decode(dataView);
}

/**
 * Tokenize some text.
 */
function tokenize(inputText){
    var text = arrayBuffer2String(inputText);

    var tokenizer = new natural.WordTokenizer();
    var tokenized = tokenizer.tokenize(text);

    return tokenized;
}

/**
 * Pluralize every word in a text.
 */
function pluralize(inputText){
    var tokens = tokenize(inputText);
    var nounInflector = new natural.NounInflector();
    return tokens.map(function(word){
        return nounInflector.pluralize(word);
    }).join(' ');
}

createWorkerProxy({
    greet: function(name) {
        return 'Hello, ' + name + '!';
    },
    tokenize: tokenize,
    pluralize: pluralize
}, {autoCallback: true, catchErrors:false});
