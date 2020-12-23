import React, { useEffect, useState } from "react";

export default function List() {
  // fixme: error를 수정해 주세요
  // https://material-ui.com/components/tables/ 을 사용해서 comments를 테이블에 보여주세요

  const [list, setList] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setList(json);
      });
  }, []);

  return <>{JSON.stringify(list)}</>;
}
