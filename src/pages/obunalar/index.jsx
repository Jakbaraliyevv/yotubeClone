import React from "react";
import srcVideo1 from "../../videos/video1.mp4";
import srcVideo2 from "../../videos/video1.mp4";
import srcVideo3 from "../../videos/video1.mp4";
import srcVideo4 from "../../videos/video1.mp4";
import srcVideo5 from "../../videos/video1.mp4";
import srcVideo6 from "../../videos/video1.mp4";

function Obunalar() {
  let srcs = [
    { title: "video1", src: srcVideo1 },
    { title: "video2", src: srcVideo2 },
    { title: "video3", src: srcVideo3 },
  ];
  return (
    <div>
      {srcs.map((src, index) => (
        <div>
          <h1>{src.title}</h1>
          <video src={src.src} controls></video>
        </div>
      ))}
    </div>
  );
}

export default Obunalar;
