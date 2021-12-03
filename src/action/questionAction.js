import {QUESTION,UPDATEQUESTION} from '../reducers/questionReducers';

export const question = (questions) => {
    return (dispatch) => {
        dispatch({
            type: QUESTION,
            payload: questions
        })

    }
};

export const updateQuestion = (questions) => {
    return (dispatch) => {
        if(questions.radio!==""){
            dispatch({
                type: UPDATEQUESTION,
                payload: questions
            })
        }
    }
}