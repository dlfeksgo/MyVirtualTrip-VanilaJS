import List from './list.js';

class Section {
	constructor(sectionInfo) {
		const select = document.querySelector('#category');
		const option = document.createElement('option');
		this.section = document.createElement('section');
		this.section.className = `section section${sectionInfo.id}`;
		this.section.innerHTML = `
		<div class="section__title">
		<h3>${sectionInfo.title}</h3>
		</div>
        `;

		option.value = sectionInfo.name;
		option.textContent = sectionInfo.name;
		select.append(option);

		const list = new List(sectionInfo.id);
		this.section.append(list.ul);

		const titleToggle = this.section.querySelector('.section__title');
		titleToggle.addEventListener('click', () => {
			if (list.ul.children.length === 0) {
				return;
			}
			titleToggle.classList.toggle('active');
			list.ul.classList.toggle('disabled');
		});
	}
}

export default Section;
