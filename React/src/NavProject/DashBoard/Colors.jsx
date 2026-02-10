import { useParams } from "react-router-dom";

function Colors() {
  // const colors = ["red", "green", "blue"];

  const params = useParams();
  console.log(params);

  return (
    <div style={{ backgroundColor: params.color_id }}>
      <h1 className=" text-4xl font-extrabold">Colors comming soon</h1>
    </div>
  );
}

export default Colors;
