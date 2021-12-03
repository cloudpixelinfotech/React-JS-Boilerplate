import _ from 'lodash';

export const QUESTION = 'QUESTION';
export const UPDATEQUESTION = 'UPDATEQUESTION';

const initialState = {
    questionData: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case QUESTION:
            const data = state.questionData;
            data.push(action.payload);
            return {...state,questionData:_.cloneDeep(data)};
        case UPDATEQUESTION:
            const update = state.questionData;
            const findId = action.payload;
            const indexFind = _.findIndex(update, {'question': findId.question});
            update[indexFind] = action.payload;
            return { ...state,questionData:_.cloneDeep(update)};
        default:
            return state;
    }
};