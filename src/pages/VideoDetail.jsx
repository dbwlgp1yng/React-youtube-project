import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  console.log(videoId);
  return (
    <h1 className="absolute mt-28 px-24 w-full">
      비디오 상세내용 페이지 
      { videoId && `검색목록 : ${videoId}`}
    </h1>
  );
}
