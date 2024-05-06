import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
    return (
        <div style={{
            padding: '10px',
            border: '1px solid #ccc',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row', // Use column layout to stack the elements vertically
            gap: '10px' // This adds even space between each element
        }}>
            <input
                type="text"
                placeholder="Job Role"
                value={filters.jobRole}
                onChange={e => onFilterChange('jobRole', e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum Experience"
                value={filters.minExp}
                onChange={e => onFilterChange('minExp', e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum Salary"
                value={filters.minSalary}
                onChange={e => onFilterChange('minSalary', e.target.value)}
            />
            <input
                type="text"
                placeholder="Company Name"
                value={filters.companyName}
                onChange={e => onFilterChange('companyName', e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={filters.remote}
                    onChange={e => onFilterChange('remote', e.target.checked)}
                />
                Remote Only
            </label>
        </div>
        
    );
};

export default Filters;
