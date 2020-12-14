import { inputFields } from './inputFields';

export const scrollTop = () => {

    inputFields('.scroll-top','').addEventListener('click', () => {
        inputFields('body','').scrollIntoView({ behavior: 'smooth'});
    })
 
}