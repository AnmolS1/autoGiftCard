function createObject(object, variable) {
	let execString = variable + ' = object';
	console.log('Running \'' + execString + '\'...');
	eval(execString);
}

let preview = document.getElementById('generated-email-content');
let idInput = document.getElementById('id-input');
let outputText = document.getElementById('gift-card-id');

document.getElementById('generate-id-btn')?.addEventListener('click', () => {
	let generatedID = '';
	for (let i = 0; i < 8; i++) {
		generatedID += Math.floor(Math.random() * 10).toString();
	}
	idInput.value = generatedID;
	outputText.textContent = generatedID;
});

document.getElementById('preview-email-btn')?.addEventListener('click', () => {
	if (preview.style.display == 'none') {
		preview.style.display = 'block';
	} else {
		preview.style.display = 'none';
	}
});