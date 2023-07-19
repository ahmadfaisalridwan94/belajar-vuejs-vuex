export function addCounter(state, numberInput){
    state.counter += parseInt(numberInput)
    state.history.push(state.counter)
}

export function subtractCounter(state, numberInput){
    state.counter -= parseInt(numberInput)
    state.history.push(state.counter)
}