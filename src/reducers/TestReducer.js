const INITIAL_STATE = {
    test: ''
};

const TestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "EMAIL_CHANGED":
            return {...state, test: action.payload};
        default:
            return state
    }
};


export default TestReducer;
