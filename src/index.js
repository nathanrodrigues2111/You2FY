import { generatePlaylist } from './components/generatePlaylist';
import { inputFields } from './components/inputFields';
import { loaderIcon } from './components/loaderIcon'; 
import { scrollTop } from './components/scrollTop';

import './scss/main.scss';

inputFields('.search-btn','').addEventListener('click', async () => {
    const playlistLink =  inputFields('.input','').value;
    if(playlistLink){ 
        inputFields('.playlist-container','').scrollIntoView({ behavior: 'smooth'});
        loaderIcon('.playlist-container .container .table-container .loader',''); 
        setTimeout(async () =>{ 
            await generatePlaylist();
           inputFields('.playlist-container .container .table-container .loader','').style.display="none"; 
        }, 1000);
    } else {

    }
})

scrollTop();


