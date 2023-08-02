import React from "react";
// import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/videos/watch/${video.id}`, {
  //     state: { video },
  //   });
  // }
  return (

    <div>
      {video.snippet.title}
      {/* <li>  
      <img src={`${video.snippets.thumbnails.medium.url}`} alt="video" />
      <h3>{video.snippets.title.length > 40 ? `${video.snippets.title.substring(0, 40)}...` : video.snippets.title}</h3>
      <div>
        <p>{video.snippets.channelTitle}</p>
        <p>{video.snippets.publishedAt}</p>
      </div>
    </li> */}
    </div>
  );
}
