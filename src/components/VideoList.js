import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
//props.videos;
const renderedList = videos.map((video) => {
   return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />;
});

return <div className="videoList">{renderedList}</div>

}

export default VideoList;