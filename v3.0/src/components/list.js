class List {
	constructor(categoryId) {
		this.ul = document.createElement('ul');
		this.ul.className = `section__list list${categoryId} disabled`;
	}
}

export default List;
