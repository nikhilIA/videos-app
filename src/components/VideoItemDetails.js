import React from 'react';

const  VideoItemDetails = ({video}) => {
        if(!video){
        return <div>Loading...</div>
        }
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`  
      return (
      <div className="videoPlayerMainWrap">
          <div className="videoPlayer">
              <iframe title="Video Player " src={videoSrc}></iframe>
          </div>
          <div className="videoDetailsDescription">
         <h4>{video.snippet.title}</h4> 
         <p>{video.snippet.description}</p>
          </div>
          
          </div>
      )

}

export default VideoItemDetails;