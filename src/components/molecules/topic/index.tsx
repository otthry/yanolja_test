import React from "react";
import { useParams } from "react-router-dom";


export const Topic = () => {
  let { topicId }: any = useParams();
  if(!topicId)
    return (<h3>Please select a topic.</h3>)
  return <h3>Requested topic ID: {topicId}</h3>;
}
Topic.defaultProps = {};

export default (Topic);