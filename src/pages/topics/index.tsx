// import { Topic } from '@src/components/molecules';
import * as React from 'react';
import {Topic} from "@src/components/molecules/topic"
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

type TopicsProps = {
  children?:any;
};

const Topics = (props: TopicsProps) =>{
     let match = useRouteMatch();
     console.log(match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={'/topics/components'}>Components</Link>
        </li>
        <li>
          <Link to={'/topics/props-v-state'}>Props v. State</Link>
        </li>
      </ul>
      <div>
      <Switch>/
        <Route path={`${match.path}`}>
          <Topic />
        </Route>
      </Switch>
      </div>
      </div>
  )
}
Topics.defaultProps = {};
export default Topics;



