import { createList } from './list.js';

export const createSection = (category, title) => {
	const section = document.createElement('section');
	section.innerHTML = `
		<div class="section__title" id="${category}__title">
			<h3>${title}</h3>
		</div>
	`;

	const sectionTitle = section.querySelector('.section__title');
	const list = createList(category);

	sectionTitle.addEventListener('click', () => {
		if (list.children.length === 0) {
			return;
		}
		sectionTitle.classList.toggle('active');
		list.classList.toggle('disabled');
	});

	section.append(list);

	return section;
};
