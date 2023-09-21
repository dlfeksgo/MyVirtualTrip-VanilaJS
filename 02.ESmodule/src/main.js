import { createPackingItem } from './components/Item/packing.js';
import { createShoppingItem } from './components/Item/shopping.js';
import { createSection } from './components/section.js';

const $itemInput = document.querySelector('#item__input');
const $wrapper = document.querySelector('#wrapper');
const $addBtn = document.querySelector('.addBtn');

const init = () => {
	const shopping = createSection('shopping', '탐욕 바구니 ✨');
	const packing = createSection('packing', '꼭 챙기기 🧳');
	$wrapper.append(shopping, packing);
};

$addBtn.addEventListener('click', () => {
	const category = document.querySelector('#category').value;
	const value = $itemInput.value;
	if (!value) {
		$itemInput.focus();
		return alert('내용을 입력해주세요.');
	}
	addItem(category, value);
	$itemInput.value = '';
});

const addItem = (category, value) => {
	let item = null;
	if (category === 'shopping') {
		item = createShoppingItem(value);
	} else if (category === 'packing') {
		item = createPackingItem(value);
	}
	const list = setActiveState(category);
	list.append(item);
};

const setActiveState = (category) => {
	const list = document.querySelector(`#${category}__list`);
	const title = document.querySelector(`#${category}__title`);
	list.classList.remove('disabled');
	title.classList.add('active');
	return list;
};

init();
