import React from 'react';

const EmployeeItem = React.memo(({employee, onRemove}) => {
    return (
        <li onClick={() => onRemove(employee)}>
            {employee}
        </li>
    )
});

const EmployeeItems = React.memo(({employees, onRemove}) =>
    employees.map(employee => (
        <EmployeeItem
            key={employee}
            employee={employee}
            onRemove={onRemove}
        />
    ))
);

const EmployeeList = ({employees, onRemove}) => {
    return (
        <ul className="sidebar-nav">
            <EmployeeItems employees={employees} onRemove={onRemove}/>
        </ul>
    )
};

export default EmployeeList;