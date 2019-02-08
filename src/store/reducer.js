const defaultState = {
    inputValue:'default',
    list:[]
}

export default (state=defaultState,action) => {
    if(action.type === 'change_input_value'){
        console.log('a');
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}

