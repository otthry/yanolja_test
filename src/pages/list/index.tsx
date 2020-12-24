import React, { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {Title} from "@components/atoms"

export default function List() {
  // fixme: error를 수정해 주세요
  // https://material-ui.com/components/tables/ 을 사용해서 comments를 테이블에 보여주세요
  
    const [columns, setColumns] = useState([]);
    const [list, setList] = useState([]);
    const columnWidth = [90,90,120,240,560]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setList(json);
        let tempColumns : any = [] ;
        let cnt : number = 0;
        for(var column in json[0]){
          tempColumns.push({field:column,headerName:column.toLocaleUpperCase(),width:columnWidth[cnt]})
          cnt ++
        }
        setColumns(tempColumns)
      });
  }, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
    <Title headtitle={2}>List</Title>
      <DataGrid rows={list} columns={columns} pageSize={5}  />
    </div>
  );
  return <>{JSON.stringify(list)}</>;
}
