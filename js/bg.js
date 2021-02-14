console.log("background open")
const sleep = (milliseconds) => {
	 return new Promise(resolve => setTimeout(resolve, milliseconds))
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if(changeInfo.url){
		console.log("out onUpdated") 
  	console.log("in onUpdated")
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		console.log("Running message")
  		chrome.tabs.sendMessage(tabs[0].id, {reRun: true, tabID: tabId});
  		
	});
	}
  
});