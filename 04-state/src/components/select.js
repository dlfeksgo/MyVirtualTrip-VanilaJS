class SelectOption {
	constructor(sectionName) {
		this.select = document.querySelector('#category');
		this.option = document.createElement('option');

		this.option.value = sectionName;
		this.option.textContent = sectionName;
		this.select.append(this.option);
	}
}

export default SelectOption;
