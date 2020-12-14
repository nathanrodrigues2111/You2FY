import { inputFields } from './inputFields';

export const loaderIcon = (location, option) => {

    if(option != 'remove'){ 
        inputFields(location,'').style.display="block";  
    } else {
        console.log('removed inn ')
        inputFields(location,'').style.display="none"; 
    }

    setTimeout(()=> {
        inputFields('.message','').style.display="none"; 
    },1000)
    
}