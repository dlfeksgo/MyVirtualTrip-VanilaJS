import { init, removeItem, updateItem } from '../../app.js';

export class ItemComponent {
	constructor(id, value, state) {
		this.id = id;
		this.value = value;
		this.state = state;
		this.item = document.createElement('li');
		this.item.className = 'item__container';
		this.item.innerHTML = this.render(this.value, this.state);
	}

	render() {}
	editItem(editModeString) {
		this.item.firstElementChild.classList.add('disabled');
		const newData = document.createElement('div');
		newData.className = 'item__form--edit';
		newData.innerHTML = editModeString;
		this.item.append(newData);

		const prev = this.item.querySelector('span');

		const editInput = newData.querySelector('.item__input--edit');
		editInput.value = prev.textContent;
		editInput.focus();
		editInput.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				handleUpdate();
			}
		});

		const editBtn = newData.querySelector('.item__button--submit');
		editBtn.addEventListener('click', () => {
			handleUpdate();
		});

		const handleUpdate = () => {
			updateItem(this.id, editInput.value);
			newData.classList.add('disabled');
			this.item.firstElementChild.classList.remove('disabled');
			init();
		};
	}

	deleteItem() {
		const title = this.item.parentNode.previousElementSibling;
		this.item.previousElementSibling || this.item.nextElementSibling
			? ''
			: title.classList.remove('active');
		// this.item.remove();
		removeItem(this.id);
		init();
	}
}
