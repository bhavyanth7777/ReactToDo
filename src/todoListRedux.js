// ACTIONS, REDUCERS, STATE 
// Step 2. create actions
export const actionTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

export const actionCreators = {
    add: (item) => {
        return {type: actionTypes.ADD, payload: item}
    },

    remove: (item) => {
        return { type: actionTypes.REMOVE, payload: index}
    },
}
// Step 3. Reducer
export const reducer = (state=initialState, action) => {
    const {todos} = state
    const {type, payload} = action

    switch(type){
        case actionTypes.ADD: {
            return {
                ...state,
                todos: [payload, ...todos],
            }
        }

        case actionTypes.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo,i)=> i!== payload),
            }
        }
    }
    return state

}

// Step 4. State
const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}
