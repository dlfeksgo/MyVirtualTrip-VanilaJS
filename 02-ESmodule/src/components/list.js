export const createList = (category) => {
	const ul = document.createElement('ul');
	ul.className = `section__list disabled`;
	ul.setAttribute('id', `${category}__list`);
	return ul;
};
