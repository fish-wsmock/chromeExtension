const serverUrl = 'http://127.0.0.1:7749/';

function addScript(src) {
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = src;
    document.body.appendChild(temp);
} 

class Iframe {
    constructor(option) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = option.src;
        this.iframe.setAttribute('id', 'YSF-IFRAME-WSMOCK');
        this.iframe.setAttribute('style', 'display:none');
    }
    inject(target) {
        target.appendChild(this.iframe);
    }
    toggleVisible() {
        if (this.iframe.style.display == 'none') {
            this.iframe.style.display = 'inline-block';
        } else {
            this.iframe.style.display = 'none';
        }
    }
}

var iframeInst;

document.addEventListener('DOMContentLoaded', () => {
    addScript(serverUrl + 'sdk.js');
    iframeInst = new Iframe({
        src: serverUrl
    });
    iframeInst.inject(document.body)
})
// 快捷键
document.addEventListener('keydown', (ev) => {
    let ctrlOrMetaKey;
    if (/mac/ig.test(navigator.platform)) {
        ctrlOrMetaKey = ev.metaKey;
    } else {
        ctrlOrMetaKey = ev.ctrlKey;
    }
    if(ev.key.toLowerCase() === 'h' && ctrlOrMetaKey && ev.shiftKey) {
        iframeInst.toggleVisible();
    }
})
// 消息监听
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        
    }
);