
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';


type ImageProps = {
  children?: any;
  url?: string; 
  alt?: string;
  errsrc?: string;
};

const Image = ({ url ='', alt ='', errsrc ='' }: ImageProps) => {

  const [src, setSrc] = React.useState('/errImage');

  useEffect(() => {
    setSrc(url);
  }, [url]);

  return (
    <img
      width="700"
      height="300"
      src={src}
      alt={alt}
      onError={() => {
        setSrc(errsrc);
      }}
    ></img>
  );
}

Image.defaultProps = {};

export default React.memo(Image);