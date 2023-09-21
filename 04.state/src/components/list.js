import { allItems } from '../app.js';
import CheckItem from './Item/check.js';
import TextItem from './Item/text.js';

class List {
	constructor(sectionId) {
		this.ul = document.createElement('ul');
		this.ul.className = `section__list list${sectionId} disabled`;
		let newItem;

		allItems.forEach((item) => {
			if (item.type === 'text') {
				newItem = new TextItem(item.id, item.content);
			} else {
				newItem = new CheckItem(item.id, item.content, item.state);
			}
			sectionId === item.sectionId && this.ul.append(newItem.item);
		});
		this.ul.classList.remove('disabled');
	}
}

export default List;
