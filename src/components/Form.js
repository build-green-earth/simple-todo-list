import { useState } from "react";

const Form = (props) => {
  const { addTitle } = props;
  const { addContent } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onChangeTitle = (evt) => {
    setTitle(evt.target.value);
  };
  const onChangeDescription = (evt) => {
    setContent(evt.target.value);
  };
  const onAdd = (evt) => {
    evt.preventDefault();
    addTitle(title);
    addContent(content);
  };

  return (
    <form
      style={{ marginLeft: "7rem", marginTop: "2rem", marginBottom: "1rem" }}
      method="POST"
      action="http://github.com"
      onSubmit={onAdd}
    >
      <p style={{ marginLeft: "5rem" }}>My Title</p>
      <label style={{ marginLeft: "1.3rem" }} for="title">
        Title :{" "}
      </label>
      <input id="title" type="text" name="title" onChange={onChangeTitle} />
      <br />
      <br />
      <label for="description">Content : </label>
      <input
        id="description"
        type="text"
        name="description"
        onChange={onChangeDescription}
      />
      <br />
      <br />
      <button style={{ marginLeft: "11rem" }} type="submit">
        addTitle
      </button>
    </form>
  );
};
export default Form;
