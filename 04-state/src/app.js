import Section from './components/section.js';
import SelectOption from './components/select.js';

let sectionId = 1;
let itemId = 0;
let sectionList = [];
let optionList = ['선택'];
export let allItems = [];

const main = document.querySelector('#section');
const select = document.querySelector('#category');

class App {
	constructor() {
		init();
		this.addSectionBtn = document.querySelector('.section__btn');
		this.addItemBtn = document.querySelector('.addBtn');
		this.input = document.querySelector('#item__input');

		this.addSectionBtn.addEventListener('click', (e) => {
			if (e.target.className === 'section__btn--text') {
				this.createSection('text');
			} else if (e.target.className === 'section__btn--check') {
				this.createSection('check');
			}
		});
		this.addItemBtn.addEventListener('click', () => {
			this.createItem();
			this.input.value = '';
		});
	}

	createSection = (type) => {
		const sectionName = prompt('추가할 카테고리 이름을 입력해주세요.');
		if (sectionName.length < 2) {
			return alert('2글자 이상 입력해주세요.');
		}
		const title = prompt('카테고리를 나타낼 제목을 입력해주세요.');
		if (!title) {
			return alert('2글자 이상 입력해주세요.');
		}
		addSection(type, sectionName, title);
		addOption(sectionName);
		init();
	};

	createItem = () => {
		const value = this.input.value;
		if (!value) {
			return alert('내용을 입력해주세요.');
		}
		if (select.selectedIndex === 0) {
			return alert('카테고리를 선택해주세요.');
		}
		sectionList.forEach((section) => {
			if (section.name === select.value) {
				addItem(section.id, section.type, value);
			}
		});
		init();
	};
}

const addSection = (type, name, title) => {
	const newData = [...sectionList, { id: sectionId, type, name, title }];
	sectionList = newData;
	sectionId++;
};

const addOption = (option) => {
	const newData = [...optionList, option];
	optionList = newData;
};

const addItem = (sectionId, type, value) => {
	let newData;
	if (type === 'text') {
		newData = [...allItems, { sectionId, id: itemId, type, content: value }];
	} else if (type === 'check') {
		newData = [
			...allItems,
			{ sectionId, id: itemId, type, content: value, state: false },
		];
	}
	allItems = newData;
	itemId++;
};

export const updateItem = (targetId, value) => {
	const newData = allItems.map((item) => {
		return item.id === targetId ? { ...item, content: value } : item;
	});
	allItems = newData;
};

export const checkedState = (targetId, state) => {
	const newData = allItems.map((item) => {
		return item.id === targetId ? { ...item, state } : item;
	});
	allItems = newData;
};

export const removeItem = (targetId) => {
	allItems = allItems.filter((item) => {
		return item.id !== targetId;
	});
};

export const init = () => {
	main.innerHTML = '';
	sectionList.forEach((section) => {
		const newSection = new Section(section);
		main.append(newSection.section);
		allItems.forEach((item) => {
			item.sectionId === section.id &&
				newSection.section.children[0].classList.add('active');
		});
	});

	select.innerHTML = '';
	optionList.forEach((option) => {
		new SelectOption(option);
	});
};

new App();
