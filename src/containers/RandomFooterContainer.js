import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RandomFooter from '../components/RandomFooter';
import {shuffle, change, fetch} from '../modules/random-launch';

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

    const onFetch = useCallback(
        employees => dispatch(fetch(employees)),
        []
    );

    const convertTxtToEmployees = async (e) => {
        const result = await readFile(e.target.files[0]);
        return onFetch(result.split('\n').map(it => it.trim()));
    };

    const readFile = (file) => {
        return new Promise((resolve) => {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsText(file);
        })
    }

    return (
        <RandomFooter
            colCount={colCount}
            employeeCount={employees.length}
            onShuffle={onShuffle}
            onChange={onChange}
            onFetch={convertTxtToEmployees}
        />
    );
};

export default RandomFooterContainer;