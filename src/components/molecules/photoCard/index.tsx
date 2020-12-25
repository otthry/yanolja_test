
import * as React from 'react';
import { Image } from '@components/atoms'

type PhotoCardProps = {
  src: string;
  children?: any;
};

const PhotoCard = ({ src = '' }: PhotoCardProps) => {
  return (
    <div>
      <Image url={src} alt='대체텍스트'></Image>
    </div>
  );
}
PhotoCard.defaultProps = {};
export default React.memo(PhotoCard);