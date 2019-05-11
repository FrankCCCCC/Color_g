
export function setColor(){
    return {
        type: '@ACT/SETCOLOR',
        color: Math.floor(Math.random() * 255)
    };
}

export function setReset(){
    return {
        type: '@ACT/SETRESET'
    };
}