import React from 'react';
import SearchComponent from '../components/SearchCompoment';
import youtube, { baseParams } from '../api/youtube';
import VideoList from '../components/VideoList'
import VideoItemDetails from '../components/VideoItemDetails';
import '../css/common.css';

class App extends React.Component {
  
    state = {videos: [], selectedVideo:null };

    onSearchSubmit = async  (term) => {
     //console.log(term + " hello");

     const response = await  youtube.get('/search', {
         params: {
           ...baseParams,
            q: term
         }
        });

        console.log(response.data.items[0].kind)
        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        });
    };
   
   componentDidMount(){
     this.onSearchSubmit('building');  
   } 

    onVideoSelect  = (video) => {
    //console.log('from the app ', video);
    this.setState({selectedVideo:video});
    };

    render(){
    return(
        <div className="mainWrapper">
        <SearchComponent onFormSubmit={this.onSearchSubmit}/>
        <div className="videoDisplayWrap">
        <VideoItemDetails video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        </div>
    );
}
}

export default App;
