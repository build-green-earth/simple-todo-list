// import { getOptions } from "loader-utils";
import Form from "./components/Form";
import List from "./components/List";
import AlertDialog from "./components/AlertDialog";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState([]);
  const deleteIndex = (index) => {
    const _list = [...list];
    _list.splice(index, 1);
    setList(_list);
  };
  const addTitle = (title) => {
    const newList = [
      ...list,
      {
        title,
        done: false
      }
    ];
    setList(newList);
  };
  const addContent = (cnt) => {
    const newContent = [...content, cnt];
    setContent(newContent);
  };
  const selectIndex = (index) => {
    let _list = [...list];
    _list[index].done = !_list[index].done;
    setList(_list);
  };
  return (
    <div className="App">
      <Form addTitle={addTitle} addContent={addContent} />
      <List
        list={list}
        content={content}
        selectIndex={selectIndex}
        deleteIndex={deleteIndex}
      />
      <AlertDialog/>
    </div>
  );
}
