import store from './store';
export function setColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return {
        type: '@ACT/SETCOLOR',
        color: rgb
    };
}

export function setColors(n){
    var array = [];
    for(var i=0; i<n; i++){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        array.push(rgb);
    }
    
    return {
        type: '@ACT/SETCOLORS',
        color: array
    };
}

export function setReset(){
    return {
        type: '@ACT/SETRESET'
    };
}