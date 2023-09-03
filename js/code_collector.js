function collect_code()
{
	let result = {};
	result.url = window.location.href;
	result.code = {};
	for(let language in SOURCE_CLASSES)
	{
		result.code[language] = "";
		let checkboxes = document.getElementsByClassName(`github_copypaste_nvim_${language}`);
		for(let checkbox_idx = 0; checkbox_idx < checkboxes.length; checkbox_idx++)
		{
			let checkbox = checkboxes[checkbox_idx];
			if(checkbox.checked)
				result.code[language] += checkbox.parentNode.textContent + " ";
		}
	}
	return result;
}

function send_obj(obj)
{
	let xhr = new XMLHttpRequest();
	let json = JSON.stringify(obj);
	xhr.open("POST", "http://localhost:31123");
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhr.send(json);
	console.log(json);
}

send_obj(collect_code());
