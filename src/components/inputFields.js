export const inputFields = (target, selectorType) => {
    let result;
    
    if(selectorType == 'all'){
        result = document.querySelectorAll(target);
    } else {
        result = document.querySelector(target);
    }

    if(result !== null){
        return result;
    }else{
        return {};
    } 
}
