const REMOVE = 'randomLaunch/REMOVE';
const SHUFFLE = 'randomLaunch/SHUFFLE';
const CHANGE = 'randomLaunch/CHANGE';

export const remove = name => ({type: REMOVE, payload: name});
export const change = count => ({type: CHANGE, payload: count});
export const shuffle = colCount => ({type: SHUFFLE, payload: colCount});


const initialState = {
    employees: [

    ].sort(),
    colCount: 5,
    randomTable: []
};

const onShuffle = (list, colCount) => {
    const shuffledList = list.slice(0).sort(() => 0.5-Math.random());
    return toTableList(shuffledList, colCount);
};

const toTableList = (list, colCount) => {
    const result = [];
    let target = [];

    for (let i = 1; i <= list.length; i++) {
        target.push(list[i-1]);

        if (i % colCount === 0) {
            result.push(target);
            target = [];
        }

        if (i === list.length && target.length !== 0) {

            if (target.length < colCount) {
                const remain = colCount - target.length;
                for (let j = 0; j < remain; j++) {
                    target.push('');
                }
            }

            result.push(target);
            target = [];

        }
    }

    return result;
};

const randomLaunch = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE:
            const {employees} = state;
            return {
                ...state,
                employees: employees.filter(it => it !== action.payload)
            };
        case SHUFFLE:
            return {
                ...state,
                randomTable: onShuffle(state.employees, state.colCount)
            };
        case CHANGE:
            return {
                ...state,
                colCount: action.payload
            };
        default:
            return state;
    }
};

export default randomLaunch;