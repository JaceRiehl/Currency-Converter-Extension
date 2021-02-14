const sleep = (milliseconds) => {
	 return new Promise(resolve => setTimeout(resolve, milliseconds))
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if(changeInfo.url){
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {reRun: true, tabID: tabId});
		});
	}
});