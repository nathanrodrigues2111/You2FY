import { inputFields } from './inputFields';
import { token , getPlaylist} from './spotifyApi';
import { toast } from './toast';

 
function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


export const generatePlaylist = async () => {
    const playlistLink =  inputFields('.input','').value;

    const tokenAwait = await token();
    const data = await getPlaylist(tokenAwait,playlistLink);

   // inputFields('.body-color').style.overflow="auto";

    let trackIndex = 1;

    const singleTrackList = document.querySelectorAll('.table-container tbody tr.single-track-info');
        
    singleTrackList.forEach(ele => {
        ele.remove();
    })

    data.forEach(element => {
        const trackInfo = element.track;
        const albumInfo = element.track.album;
        const ArtistInfo = element.track.artists;  
      
    
        inputFields('.table-container tbody','').innerHTML += `
        <tr class="single-track-info">
        <td>${trackIndex}</td>
        <td><div class="album">
            <img src="${albumInfo.images[2].url}" class="img-fluid" alt="album art">
            <div>
            <h5>${trackInfo.name}</h5>
            <p>${ArtistInfo.map(function (key) {
                return key.name           
            }).join(", ")}</p>
            </div>
        </td>
            <td>${albumInfo.name}</td>
            <td>${albumInfo.release_date}</td>
            <td>${millisToMinutesAndSeconds(trackInfo.duration_ms)}</td>
            <td>
                <div class="actions">
                    <i class="material-icons" title="Copy track title">content_copy</i>
                    <i class="material-icons" title="Get YouTube link">
                        <svg height="682pt" viewBox="-21 -117 682.66672 682" width="682pt" xmlns="http://www.w3.org/2000/svg"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/></svg>
                    </i>
                    <i class="material-icons" title="Copy Spotify link">
                        <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.872-6.344v.001c-.807 0-3.356-2.828-10.52-1.36-.189.049-.436.126-.576.126-.915 0-1.09-1.369-.106-1.578 3.963-.875 8.013-.798 11.467 1.268.824.526.474 1.543-.265 1.543zm1.303-3.173c-.113-.03-.08.069-.597-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-1.071 0-1.355-1.611-.188-1.94 4.716-1.325 9.775-.552 13.297 1.543.392.232.547.533.547.953-.005.522-.411.944-.938.944zm-13.627-7.485c4.523-1.324 11.368-.906 15.624 1.578 1.091.629.662 2.22-.498 2.22l-.001-.001c-.252 0-.407-.063-.625-.189-3.443-2.056-9.604-2.549-13.59-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z"/></svg>
                    </i>
                </div>
            </td>
        </tr>`;
        trackIndex++; 
    });

    const singleTrack = inputFields('.table-container table tbody tr td:nth-child(2)','all');

    singleTrack.forEach(element => {
        element.addEventListener('click', () => { 
            let jointTrackTitle = `${element.querySelector('p').textContent} - ${element.querySelector('h5').textContent}`;
            navigator.clipboard.writeText(jointTrackTitle)
            toast();
        });
    })

}

