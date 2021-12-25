import React from 'react';

const Categories = ({ allCategories, filterItems }) => {
	return (
		<div className="btn-container">
			{allCategories.map((category, idx) => {
				return (
					<button
						type="button"
						className="filter-btn"
						key={idx}
						onClick={() => {
							filterItems(category);
						}}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
