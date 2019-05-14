import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RandomFooter from '../components/RandomFooter';
import {shuffle, change} from '../modules/random-launch';

const RandomFooterContainer = () => {
    const {colCount, employees} = useSelector(state => state.randomLaunch, []);
    const dispatch = useDispatch();
    const onShuffle = useCallback(
        () => dispatch(shuffle()),
        []
    );
    const onChange = useCallback(
        e => dispatch(change(e.target.value)),
        []
    );

    return (
        <RandomFooter
            colCount={colCount}
            employeeCount={employees.length}
            onShuffle={onShuffle}
            onChange={onChange}
        />
    );
};

export default RandomFooterContainer;