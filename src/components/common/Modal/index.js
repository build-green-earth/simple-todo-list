import "./style.css";

export default function Modal(props) {

  return props.visible? <div className="modal-container">
    <div className="modal-bg"></div>
    <div className="modal-content">
      {props.children}
    </div>
  </div> : ""

}