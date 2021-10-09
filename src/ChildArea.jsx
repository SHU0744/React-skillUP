import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

export const ChildArea = memo((props) => {
  console.log("ChildAreaがレンダリングされました");
  const { open } = props;
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("不可");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
