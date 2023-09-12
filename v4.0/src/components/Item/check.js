import { ItemComponent } from './itemComponent.js';

class CheckList extends ItemComponent {
	constructor(id, value) {
		super(id, value);
		const input = this.item.querySelector('input');
		const span = this.item.querySelector('span');

		input.addEventListener('click', (e) => {
			if (e.target.checked) {
				span.classList.add('complete');
			} else {
				span.classList.remove('complete');
			}
		});

		this.item.addEventListener('click', (e) => {
			if (e.target.className === 'item__button--edit') {
				this.editItem(`
				<div>
					<input type="text" class="item__input--edit" />
				</div>
				<div>
					<button type="button" class="item__button--submit">수정완료</button>
				</div>
				`);
			} else if (e.target.className === 'item__button--delete') {
				this.deleteItem();
			}
		});
	}

	render(value) {
		return `
		<div class="item">
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
	}
}

export default CheckList;
