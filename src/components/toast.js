export const toast = () => {
        let toastDiv = document.createElement("DIV"); 
        toastDiv.classList.add('toast');
        toastDiv.innerText = "Track name is copied to clipboard";   
        setTimeout(()=> {
            toastDiv.style.top = "-50px";
        },3000);
        setTimeout(()=> {
            toastDiv.remove();
        },3500);
        return(
            document.body.appendChild(toastDiv)  
        )
}