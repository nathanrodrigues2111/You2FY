
export const token = async () => {
    const clientId = '1020f7120f9941208b9563735957a5c8';
    const clientSecret = '89cd9336aa1949fca177caa8b1c4507a';

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}
export const getPlaylist = async (token,playlistId) => {
        
    const result = await fetch(`https://api.spotify.com/v1/playlists/7nMxqhaWgsjVKbJu6EqsPm`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();

    
    return data.tracks.items;
}