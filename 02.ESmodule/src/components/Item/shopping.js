export const createShoppingItem = (value) => {
	const item = document.createElement('li');
	item.className = 'item__container';
	item.innerHTML = `
    <div class="item" >
		<div>
			<span>${value}</span>
		</div>
        <div>
			<button type="button" class="item__button--edit">수정</button>
			<button type="button" class="item__button--delete">삭제</button>
        </div>
    </div>
    `;

	item.addEventListener('click', (e) => {
		if (e.target.className === 'item__button--edit') {
			editItem(item);
		} else if (e.target.className === 'item__button--delete') {
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
		newData.classList.add('disabled');
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
