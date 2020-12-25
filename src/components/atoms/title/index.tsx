import React from 'react';

export interface TitleProps {
  /**
   *  <h1><h2><h3>...
   */
  headtitle?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
const Title = ({
  headtitle = 1,
  children }: TitleProps) => {
  switch (headtitle) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    default:
      return <h6>{children}</h6>;
  }
};

Title.defaultProps = {};

export default React.memo(Title);