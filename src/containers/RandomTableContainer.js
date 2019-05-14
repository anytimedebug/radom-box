import React from 'react';
import {useSelector} from "react-redux";
import RandomTable from '../components/RandomTable';

const RandomTableContainer = () => {
    const {randomTable} = useSelector(state => state.randomLaunch, []);

    return (
        <RandomTable randomTable={randomTable}/>
    );
};

export default RandomTableContainer;