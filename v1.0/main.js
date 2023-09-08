'use strict';

const $itemInput = document.querySelector('#item__input');
const $addBtn = document.querySelector('.addBtn');

const titleToggle = document.querySelectorAll('.section__title');
titleToggle.forEach((menu) => {
	menu.addEventListener('click', () => {
		const ul = menu.nextElementSibling;
		if (ul.children.length === 0) {
			return;
		}
		menu.classList.toggle('active');
		ul.classList.toggle('disabled');
	});
});

$addBtn.addEventListener('click', () => {
	const category = document.querySelector('#category').value;
	const value = $itemInput.value;
	if (!value) {
		return alert('내용을 입력해주세요.');
	}
	addItem(category, value);
	$itemInput.value = '';
});

const addItem = (category, value) => {
	const item = createItem(value);
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

const createItem = (value) => {
	const item = document.createElement('li');
	item.className = 'item__container';
	item.innerHTML = `
    <div class="item" >
        <label>
            <input type="checkbox"/>
            <span>${value}</span>
        </label>
        <div>
            <button type="button" class="item__button--edit">수정</button>
            <button type="button" class="item__button--delete">삭제</button>
        </div>
    </div>
    `;

	const input = item.querySelector('input');
	const span = item.querySelector('span');

	input.addEventListener('click', (e) => {
		if (e.target.checked) {
			span.classList.add('complete');
		} else {
			span.classList.remove('complete');
		}
	});

	const editBtn = item.querySelector('.item__button--edit');
	editBtn.addEventListener('click', () => {
		editItem(item);
	});

	item.addEventListener('click', (e) => {
		if (e.target.className === 'item__button--delete') {
			const title = item.parentNode.previousElementSibling;
			item.previousElementSibling ? '' : title.classList.remove('active');
			item.remove();
		}
	});

	return item;
};

const editItem = (item) => {
	item.firstElementChild.classList.add('disabled');
	const newData = document.createElement('div');
	newData.className = 'item__form--edit';
	newData.innerHTML = `
                        <div>
                            <input type="text" class="item__input--edit" />
                        </div>
                        <div>
                            <button type="button" class="item__button--submit">수정완료</button>
                        </div>
                        `;
	item.append(newData);
	const prev = item.querySelector('span');

	const editInput = newData.querySelector('.item__input--edit');
	editInput.value = prev.textContent;
	editInput.focus();

	const handleUpdate = () => {
		prev.textContent = editInput.value;
		newData.remove();
		item.firstElementChild.classList.remove('disabled');
	};

	editInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			handleUpdate();
		}
	});

	const editBtn = newData.querySelector('.item__button--submit');
	editBtn.addEventListener('click', () => {
		handleUpdate();
	});
};

// const newData = prompt('변경할 내용을 입력해주세요.');
// span.textContent = newData;
