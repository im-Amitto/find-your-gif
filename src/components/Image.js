import React from "react";

const Image = ({ url, width, height, id }) => (
  <li style={{backgroundImage: `url(${url})`, width: `${width}px`, height:`${height}px`}}>
  </li>
);

export default Image;
