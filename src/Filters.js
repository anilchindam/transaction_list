import React from 'react';
import { Checkbox } from 'react-bootstrap';

const Filters = ({ filters, title, handleFilter, section }) => (
    <div style={{background: '#ddd', padding: '8px', marginBottom: '8px'}}>
        <label><b>{title}</b></label>
        {
            filters.map((filter) => (
                <Checkbox section={section} name={filter} key={filter} onChange={handleFilter} readOnly>
                    {filter}
                </Checkbox>
            ))
        }
    </div>
);

export default Filters;