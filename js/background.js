function handle_button_click()
{
	browser.tabs.executeScript({
		file: "js/code_collector.js"
	});
}

browser.browserAction.onClicked.addListener(handle_button_click);
