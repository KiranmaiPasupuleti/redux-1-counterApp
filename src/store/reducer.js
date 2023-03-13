const initialState = {
    count : 0
}

const reducer = (state = initialState ,action) =>{
    const newState = {...state} 
    if (action.type === "INCREMENT") {
        newState.count += action.value
    }
    if (action.type === "DECREMENT") {
        newState.count -= action.value
    }
    return newState
}

export default reducer