import { ItemComponent } from './itemComponent.js';

class TextList extends ItemComponent {
	constructor(value) {
		super(value);

		const editBtn = this.item.querySelector('.item__button--edit');
		const deleteBtn = this.item.querySelector('.item__button--delete');

		editBtn.addEventListener('click', () => {
			this.editItem(`
			<div>
				<input type="text" class="item__input--edit" />
			</div>
			<div>
				<button type="button" class="item__button--submit">수정완료</button>
			</div>
			`);
		});

		deleteBtn.addEventListener('click', () => {
			this.deleteItem();
		});
	}

	render(value) {
		return `
		<div class="item">
			<label>
				<span>${value}</span>
			</label>
			<div>
				<button type="button" class="item__button--edit">수정</button>
				<button type="button" class="item__button--delete">삭제</button>
			</div>
		</div>
		`;
	}
}

export default TextList;
