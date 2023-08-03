import React from "react";


export default function VideoCard({ video }) {
  const title = video.snippet.title.length > 60 ? `${video.snippet.title.slice(0, 60)}...` : video.snippet.title;
  const publishedDate = new Date(video.snippet.publishedAt);
  const currentDate = new Date();
  const timeDiffInMilliseconds = currentDate - publishedDate;
  const hoursAgo = Math.floor(timeDiffInMilliseconds / (60 * 60 * 1000));
  const daysAgo = Math.floor(timeDiffInMilliseconds / (24 * 60 * 60 * 1000));
  const monthsAgo = Math.floor(timeDiffInMilliseconds / (30 * 24 * 60 * 60 * 1000));

  let timeAgoText = '';
  if (monthsAgo > 0) {
    timeAgoText = `${monthsAgo} month ago`;
  } else if (daysAgo > 0) {
    timeAgoText = `${daysAgo} day ago`;
  } else if (hoursAgo > 0) {
    timeAgoText = `${hoursAgo} hour ago`;
  } else {
    timeAgoText = "right now";
  }

  return (
    <li className="w-1/5 p-2">
      <img src={video.snippet.thumbnails.medium.url} alt="썸네일이미지" />
      <h2 className="w-full font-bold">{title}</h2>
      <p>{video.snippet.channelTitle}</p>
      <p>{timeAgoText}</p>
    </li>
  );
}
