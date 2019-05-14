import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import EmployeeList from '../components/EmployeesList';
import {remove, fetch} from '../modules/random-launch';
import axios from 'axios';

const EmployeeListContainer = () => {
    const {employees} = useSelector(state => state.randomLaunch, []);

    const dispatch = useDispatch();
    const onRemove = useCallback((name) => dispatch(remove(name)), []);

    return (
        <EmployeeList employees={employees} onRemove={onRemove} />
    );
};

export default EmployeeListContainer;