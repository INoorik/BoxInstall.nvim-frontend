console.log("test")

function collect_code()
{
	let result = {};
	result.url = window.location.href;
	result.code = {};
	for(let language in SOURCE_CLASSES)
	{
		result.code[language] = "";
		let checkboxes = document.getElementsByClassName(`github_copypaste_nvim_${language}`);
		console.log(checkboxes);
		for(let checkbox_idx = 0; checkbox_idx < checkboxes.length; checkbox_idx++)
		{
			let checkbox = checkboxes[checkbox_idx];
			console.log(checkbox);
			if(checkbox.checked)
				result.code[language] += checkbox.parentNode.textContent + " ";
		}
	}
	return result;
}

console.log("ok loaded");

console.log(collect_code());
