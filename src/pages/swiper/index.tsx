
import { makeStyles, createStyles, Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import * as React from 'react';
import { SwiperTemplate } from '@components/templates'
import { useEffect, useCallback } from 'react';

type SwiperProps = {
  children?: any;
};

type selectedDataProps = {
  title?: String;
  thmbnailUrl?: String;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 600,
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    swiperBottomInfo: {
      position: 'relative',
      width: '100%',
      height: 100,
    },
    info: {
      position: 'absolute',
      display: 'block',
      width: '90%',
      height: 100,
      padding: '0 4px 8px 0;',
      zIndex: 2,
      top: '-16px',
      left: '5%',
      backgroundColor: '#ffffff'
    }
  })
);
const Swiper = (props: SwiperProps) => {
  // fixme: Swiper 를 구현해 주세요.

  const classes = useStyles();

  //expanded 무엇에 쓰는 변수인지 나는 모름... 큰일..ㄹ.났..ㄷ..
  const [expanded, setExpanded] = React.useState(false);

  const [data, setData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [selectedData, setSelectedData] = React.useState<selectedDataProps>({ title: '' });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?&_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setSelectedData(json[0])
      });
  }, []);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleIndexChange = (activeIndex: any) => {
    setSelectedData(data[activeIndex]);
    setIndex(activeIndex);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="아래 이미지와 같은 스와이퍼를 구현해주세요" />
        <CardMedia className={classes.media} image="./swiper.png" />
        <CardContent>
          <Typography paragraph>- 임의의 3개의 이미지로 작업 </Typography>
          <Typography paragraph>- 왼쪽 이미지가 살짝 보여야함</Typography>
          <Typography paragraph>
            - 이미지 하단부에 이미지에 관한 설명이 있어야함{" "}
          </Typography>
          <Typography paragraph>- www.dailyhotel.com 페이지 참고</Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
        <CardHeader title="이제부터 제가 구현해보겠습니다" />
        <CardMedia>
          {data.length > 0 &&
            <SwiperTemplate data={data} handleIndexChange={handleIndexChange} />}
          {selectedData && (
            <div className={classes.swiperBottomInfo}>
              <div className={classes.info}>
                <span>오늘 초특가 호텔! Top {index + 1} </span>
                <p>{selectedData.title}</p>
              </div>
            </div>)}
        </CardMedia>
        <CardActions disableSpacing></CardActions>
      </Card>
    </>
  );
}

Swiper.defaultProps = {};

export default React.memo(Swiper);