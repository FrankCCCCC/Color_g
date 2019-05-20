import { pickCorrect } from "./action";

const initColor = 'rgb(0, 0, 0)';
const initColors = {colors: Array(9).fill('rgb(255, 255,255)'), pickColor: 'rgb(255, 255,255)'};

export function color(state = initColor, action){
    switch(action.type){
        case '@ACT/SETCOLOR':
            return action.color;
        default:
            return state;
    }
}

export function colors(state = initColors, action){
    switch(action.type){
        case '@ACT/SETCOLORS':
            return {
                colors: action.colors,
                pickColor: action.pickColor,
                shadows: action.shadows
            };
        case '@ACT/PICKCORRECT':
            const n = state.colors.length;
            var arrayShadows = state.shadows;
            var arrayColors = state.colors;
            for(let i=0; i<n; i++){
                if(arrayColors[i] === state.pickColor){
                }else{
                    arrayColors[i] =  'rgb(255, 255, 255)';
                    arrayShadows[i] =  '0 0 ';
                }
            }
            return{
                colors: arrayColors,
                pickColor: state.pickColor,
                shadows: arrayShadows
            };
        default: 
            return state;
    }

}

export function reset(state, action){
    switch(action.type){
        case '@ACT/SETRESET':
            return;
        default:
            return state;
            
    }
}