import React from 'react';
import './videoItem.css';

const VideoItem  = ({video, onVideoSelect}) => {

   return(
      
           <div className="videoItemInfo" onClick={() => onVideoSelect(video)}>
            <div className="videoImg">
           <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
           </div>
           <div className="videoTitle">
             {video.snippet.title}
           </div>
           </div>
           
   ) 


};





export default VideoItem;