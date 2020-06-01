
let spotify_tab_id;

function store_tab_id(tab) {
  console.log("storing id "+tab.id)
  spotify_tab_id = tab.id;
}

chrome.contextMenus.create({
  title: "Play '%s' on Spotify", 
  contexts:["selection"], 
  onclick: function(info, tab) {
    console.log(info.selectionText);
    const url = "https://open.spotify.com/search/"+info.selectionText;
    if (typeof spotify_tab_id !== 'undefined') {
      chrome.tabs.update(spotify_tab_id, {url, active:true});
      
    } else {
      chrome.tabs.create({url}, store_tab_id);
    }
  }   

});