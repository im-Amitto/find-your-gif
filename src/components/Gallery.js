import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const data = props.data;
  let images;
  let noImages;
  // const data = results.data;
  // map variables to each item in fetched image array and return image component
  if (data && data.length > 0) {
    images = data.map(image => {
      let title = image.title;
      let img = image.images["fixed_width_downsampled"];
      let url = img.url;
      let wid = img.width;
      let hei = img.height;
      return <Image width={wid} height={hei} url={url} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul id="list">{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
