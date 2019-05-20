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
    for(let i=0; i<n; i++){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        array.push(rgb);
    }
    const pickColor = array[Math.floor(Math.random() * n)];
    const arrayShadow = Array(n).fill('0 4px 8px 0 rgba(0, 0, 0, 0.2)');
    
    return {
        type: '@ACT/SETCOLORS',
        colors: array,
        pickColor: pickColor,
        shadows: arrayShadow
    };
}

export function pickCorrect(){
    return {
        type: '@ACT/PICKCORRECT'
    };
    
}

export function setReset(){
    return {
        type: '@ACT/SETRESET'
    };
}