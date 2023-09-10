import CheckList from './components/Item/check.js';
import TextList from './components/Item/text.js';
import Section from './components/section.js';

class App {
	constructor() {
		this.addSectionBtn = document.querySelector('.section__btn--add');
		this.addItemBtn = document.querySelector('.addBtn');
		this.input = document.querySelector('#item__input');

		this.addSectionBtn.addEventListener('click', () => {
			this.createSection();
		});
		this.addItemBtn.addEventListener('click', () => {
			this.createItem();
			this.input.value = '';
		});
	}

	createSection = () => {
		const main = document.querySelector('#section');
		const sectionCategory = prompt('추가할 카테고리 이름을 입력해주세요.');
		if (sectionCategory.length < 2) {
			return alert('2글자 이상 입력해주세요.');
		}
		const title = prompt('카테고리를 나타낼 제목을 입력해주세요.');
		if (!title) {
			return alert('2글자 이상 입력해주세요.');
		}
		this.section = new Section(sectionCategory, title);
		main.append(this.section.section);
	};

	createItem = () => {
		const itemCategory = document.querySelector('#category').value;
		const value = this.input.value;
		if (!value) {
			return alert('내용을 입력해주세요.');
		}
		if (itemCategory === 'none') {
			return alert('카테고리를 선택해주세요.');
		}

		if (parseInt(itemCategory) === 0) {
			this.item = new TextList(value);
		} else {
			this.item = new CheckList(value);
		}
		const list = document.querySelectorAll('.section__list');
		list.forEach((ul) => {
			if (ul.classList.contains(`list${itemCategory}`)) {
				ul.append(this.item.item);
				ul.classList.remove('disabled');
				ul.previousElementSibling.classList.add('active');
				return;
			}
		});
	};
}

new App();
