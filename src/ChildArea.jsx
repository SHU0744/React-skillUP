import { memo } from "react";

const style = {
  width: "100%",
  height: "100px",
  backgroundColor: "orange"
};

// useMemoを使用して 親のコンポーネントが更新されても自身のprposが更新されない限りレンダリングさせない
export const ChildArea = memo((prpos) => {
  const { opne, onClickClose } = prpos;

  console.log("ChildAreaがレンダリングされました");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("aaa");
  });
  return (
    <>
      {opne ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
