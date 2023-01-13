import "./styles.scss";

export default function Polaroid({polaroidImg, altImg, pos}) {
  return (
    <div className={(pos==="l") ? "polaroid l" : "polaroid r"}>
      <img src={polaroidImg} alt={altImg} />
    </div>
  );
};

