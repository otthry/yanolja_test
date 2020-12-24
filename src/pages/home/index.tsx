
import { makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Title } from "@components/atoms"


type HomeProps = {
  children?: any;
};

const useStyles = makeStyles((theme) => ({
  home: {
    justifyContent: 'start'
  }
}));

const Home = (props: HomeProps) => {

  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Title headtitle={2}> <a
        target="_blank"
        href="https://docs.google.com/document/d/1nGgpXS1_2muKL_4--Zq73VCeV-PK97dDshZO9JQ-uy0/edit"
      > 과제설명  </a></Title>

      <ul>
        <li>관리가 되지 않는 레거시 프로젝트라고 가정 합니다.</li>
        <li>레거시 프로젝트 분석 및 신규 기능 추가 능력을 측정 합니다.</li>
        <li>
          전체 코드 베이스를 협업을 위한 리팩토링 , 가독성 높은 코드로 변경해
          주세요.
          </li>
        <li>프로젝트 안의 fixme: 주석을 참고해 주세요.</li>
      </ul>
      <Title headtitle={6}>과제 제출</Title>
      <ul>
        <li>assignment.zip 파일을 github repository 로 이전해 주세요.</li>
        <li>아래 과제를 진행해 주세요.</li>
        <li>
          7일 이내로 Github Repository URL을 dabin.kim@yanolja.com 로 제출해
          주시면 됩니다.
          </li>
      </ul>

      <Title headtitle={6}>과제 내용</Title>
      <ol>
        <li>
          <Typography variant="subtitle1" gutterBottom>
            Toolbar 의 login 버튼 클릭시 /login 으로 이동하며 로그인 페이지를
            개발해 주세요.
            </Typography>
          <Typography variant="body1" gutterBottom>
            Email , Password를 입력 받을 수 있고 validation 이 되어야 합니다.
              <br />
              참고: https://thefront.maccarianagency.com/signin-simple
            </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" gutterBottom>
            Toolbar 왼쪽 햄버거 메뉴 클릭 시 Menu 컴포넌트가 나오게 구현해
            주세요.
            </Typography>
          <Typography variant="body1" gutterBottom>
            mini-variant-drawer 구현
              <br />
              참고:
              https://material-ui.com/components/drawers/#mini-variant-drawer
            </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" gutterBottom>
            src/List.tsx 컴포넌트를 수정해 주세요
            </Typography>
          <Typography variant="body1" gutterBottom>
            error를 수정해 주세요 <br />
              https://material-ui.com/components/tables/ 를 사용해서 comments를
              테이블에 보여주세요
            </Typography>
        </li>
        <li>
          <Link to="/swiper">
            Swiper 과제 설명은 링크를 클릭해서 확인해 주세요
            </Link>
        </li>
      </ol>
    </div>
  );
}
Home.defaultProps = {};
export default Home;