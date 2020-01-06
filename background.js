function openSend() {
  console.log("Creating Tab For Send");
   browser.tabs.create({
     "url": "https://send.firefox.com/"
   });
}

browser.browserAction.onClicked.addListener(openSend);