import { allItems } from '../app.js';
import CheckList from './Item/check.js';
import TextList from './Item/text.js';

class List {
	constructor(sectionId) {
		this.ul = document.createElement('ul');
		this.ul.className = `section__list list${sectionId} disabled`;
		let newItem;

		allItems.forEach((item) => {
			if (item.type === 'text') {
				newItem = new TextList(item.id, item.content);
			} else {
				newItem = new CheckList(item.id, item.content, item.state);
			}
			sectionId === item.sectionId && this.ul.append(newItem.item);
		});
		this.ul.classList.remove('disabled');
	}
}

export default List;
