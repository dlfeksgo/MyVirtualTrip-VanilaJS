import { checkedState, init } from '../../app.js';
import { ItemComponent } from './itemComponent.js';

class CheckItem extends ItemComponent {
	constructor(id, value, state) {
		super(id, value, state);
		const input = this.item.querySelector('input');

		input.addEventListener('click', (e) => {
			// if (e.target.checked) {
			// 	span.classList.add('complete');
			// } else {
			// 	span.classList.remove('complete');
			// }
			console.log(e.target.checked);
			checkedState(this.id, e.target.checked);
			init();
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

	render(value, state) {
		return `
		<div class="item">
			<label>
				<input type="checkbox" name="check-state" ${state && 'checked'}/>
				<span class="${state && 'complete'}">${value}</span>
			</label>
			<div>
				<button type="button" class="item__button--edit">수정</button>
				<button type="button" class="item__button--delete">삭제</button>
			</div>
		</div>
		`;
	}
}

export default CheckItem;
