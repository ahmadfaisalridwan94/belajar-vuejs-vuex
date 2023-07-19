export function addCounter(state, numberInput){
    state.counter += parseInt(numberInput)
}

export function subtractCounter(state, numberInput){
    state.counter -= parseInt(numberInput)
}