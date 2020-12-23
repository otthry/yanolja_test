import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
const List = React.lazy(() => import("./List"));

const goToLogin = () => (window.location.href = "/login");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Assignment
          </Typography>
          <Button color="inherit" onClick={() => goToLogin()}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <Menu />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>
          <Route path="/swiper">
            <Swiper />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1nGgpXS1_2muKL_4--Zq73VCeV-PK97dDshZO9JQ-uy0/edit"
        >
          과제설명
        </a>
      </h2>

      <ul>
        <li>관리가 되지 않는 레거시 프로젝트라고 가정 합니다.</li>
        <li>레거시 프로젝트 분석 및 신규 기능 추가 능력을 측정 합니다.</li>
        <li>
          전체 코드 베이스를 협업을 위한 리팩토링 , 가독성 높은 코드로 변경해
          주세요.
        </li>
        <li>프로젝트 안의 fixme: 주석을 참고해 주세요.</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        과제 제출
      </Typography>
      <ul>
        <li>assignment.zip 파일을 github repository 로 이전해 주세요.</li>
        <li>아래 과제를 진행해 주세요.</li>
        <li>
          7일 이내로 Github Repository URL을 dabin.kim@yanolja.com 로 제출해
          주시면 됩니다.
        </li>
      </ul>

      <Typography variant="h6" gutterBottom>
        과제 내용
      </Typography>
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
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Menu() {
  // fixme: 과제3 햄버거 메뉴 클릭시 아래 메뉴를 mini-variant-drawer 구현
  // https://material-ui.com/components/drawers/#mini-variant-drawer
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
      <li>
        <Link to="/photo">Photo</Link>
      </li>
      <li>
        <Link to="/swiper">swiper</Link>
      </li>
    </ul>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId }: any = useParams();

  return <h3>Requested topic ID: {topicId}</h3>;
}

function Photo() {
  // fixme: grid-list 를 구현해주세요.
  // https://material-ui.com/components/grid-list/

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos");
  }, []);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos");
  }, []);
  return <>Photo</>;
}

function Swiper() {
  // fixme: Swiper 를 구현해 주세요.
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        maxWidth: 800,
      },
      media: {
        height: 600,
        padding: 10,
      },

      expandOpen: {
        transform: "rotate(180deg)",
      },
    })
  );
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
      </Card>
      {/*여기서부터 구현하시면 됩니다*/}
    </>
  );
}
