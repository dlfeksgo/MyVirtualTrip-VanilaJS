import List from './list.js';

export let categoryId = 0;

class Section {
	constructor(category, title) {
		const select = document.querySelector('#category');
		const option = document.createElement('option');
		this.section = document.createElement('section');
		this.section.className = `section section${categoryId}`;
		this.section.innerHTML = `
		<div class="section__title">
		<h3>${title}</h3>
		</div>
        `;

		option.value = categoryId;
		option.textContent = category;
		select.append(option);

		const list = new List(categoryId);
		this.section.append(list.ul);

		const titleToggle = this.section.querySelector('.section__title');
		titleToggle.addEventListener('click', () => {
			if (list.ul.children.length === 0) {
				return;
			}
			titleToggle.classList.toggle('active');
			list.ul.classList.toggle('disabled');
		});

		categoryId++;
	}
}

export default Section;
