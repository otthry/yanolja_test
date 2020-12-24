
import * as React from 'react';
import { Title } from "@components/atoms"
import { makeStyles } from '@material-ui/core';

type AboutProps = {
  children?: any;
};

const useStyles = makeStyles((theme) => ({
  about: {
    display: 'block'
  }
}));


const About = (props: AboutProps) => {
  const classes = useStyles();
  return (<section className={classes.about}>
    <Title headtitle={2}>About</Title>

    <article>
    <Title headtitle={3}>Lee in young</Title>
    <q>i likes to learn from experience. </q>
    </article>

    <article>
    <Title headtitle={3}>Assignment</Title>
    <q>보여주고 싶은것은 많은데, 시간과 커뮤니케이션이 부족하네</q>
    <div>
    <Title headtitle={4}>더 작업 하고 싶은 것 (=과제에서 아쉬운점)</Title>
    <ol>
      <li>스타일 체계를 바로잡는다. (하지만 이는 material ui를 사용하기 때문에, 쉬운 스타일 작업의 프로젝트를 지향하는것으로 보여 방향성을 위하여 작업하지 않음)</li>
      <li>svg 에셋을 svg-sprite 로 작업한다. ( 이미지가 많지않기때문에 1번과같은 이유로 작업을 하지않음)</li>
      <li>swiper 과제에 있는 expanded 변수를 활용하여 과제의 완성도를 높인다. (기획의 의도를 물어보고싶으나, 물어볼수없어서 작업을 못함 ㅠ^ㅠ)</li>
    </ol>
    </div>
    </article>

    <article>
    소중한 연말에 부족한 코딩 과제를 봐주셔서 감사합니다! 
    </article>
  </section>)

}

About.defaultProps = {};

export default React.memo(About);