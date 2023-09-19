import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './Section.module.css';
import Item from './Item/Item';

const Section = ({ section, onChangeItem }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (section.itemList.length !== 0) {
			setActive(true);
		}
	}, [section.itemList.length]);

	const handleActive = () => {
		setActive(!active);
	};
	return (
		<section>
			<div className={styles.title}>
				<h3>{section.title}</h3>
				<button className={styles.title__btn} onClick={handleActive}>
					{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
				</button>
			</div>
			<ul className={active ? styles.active : styles.disabled}>
				{section.itemList.map((v) => (
					<Item
						key={v.id}
						item={v}
						section={section}
						onChangeItem={onChangeItem}
					/>
				))}
			</ul>
		</section>
	);
};

export default Section;
