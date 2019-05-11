const initColor = 'rgb(0, 0, 0)';

export function color(state = initColor, action){
    switch(action.type){
        case '@ACT/SETCOLOR':
            return action.color;
        default:
            return state;
    }
}

export function reset(state, action){
    switch(action.type){
        case '@ACT/SETRESET':
            return;
            
    }
}