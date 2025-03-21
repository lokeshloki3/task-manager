import React from 'react';

const FilterButtons = () => {
    return (
        <div>
            <button onClick={() => onFilterChange('all')}>All</button>
            <button onClick={() => onFilterChange('completed')}>Completed</button>
            <button onClick={() => onFilterChange('pending')}>Pending</button>
        </div>
    );
};

export default FilterButtons;