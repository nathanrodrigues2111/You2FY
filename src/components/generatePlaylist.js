import { inputFields } from './inputFields';
import { token , getPlaylist} from './spotifyApi';


export const generatePlaylist = async () => {
    
    const playlistLink =  inputFields('[data-searchinput]').value;
    console.log(playlistLink);

    const t = await token();

    console.log(getPlaylist(t,''));
}

