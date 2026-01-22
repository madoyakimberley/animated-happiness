import kagamepic from "./../../assets/kageme.jpg";

function ImageSection() {
  return (
    <div className=" self-center">
      <img
        style={{
          width: "2000px",
        }}
        src={kagamepic}
      />
    </div>
  );
}

export default ImageSection;
