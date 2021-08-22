import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [opne, setOpne] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpne(!opne);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>非表示</button>
      <ChildArea opne={opne} />
    </div>
  );
}
