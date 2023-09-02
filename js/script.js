let SOURCE_CLASSES = {
	lua: "highlight-source-lua"
}

function add_checkboxes_to_sources(language)
{
	let source_boxes = document.getElementsByClassName(SOURCE_CLASSES[language]);
	for(let source_box_idx = 0; source_box_idx < source_boxes.length; source_box_idx++)
	{
		let source_box = source_boxes[source_box_idx];
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList = `position-absolute left-0 top-0 github_copypaste_nvim_${language}`;
		source_box.appendChild(checkbox);
	}
}

function collect_code()
{
	let result = {};
	result.url = document.URL;
	result.code = {};
	for(let language in SOURCE_CLASSES)
	{
		result.code[language] = "";
		let checkboxes = document.getElementsByClassName(`github_copypaste_nvim_${language}`);
		for(let checkbox_idx = 0; checkbox_idx < checkboxes.length; checkbox_idx++)
		{
			let checkbox = checkboxes[checkbox_idx];
			result.code[language] += checkbox.parentNode.textContent + " ";
		}
	}
	return result;
}

for(let language in SOURCE_CLASSES)
{
	add_checkboxes_to_sources(language);
}

