export default function Home() {
  return (
    <>
      <div>
        <div className="name">Solar System Animation </div>
        <p className="name">
          Creates <span style={{ color: "GrayText" }}>by Abdul Rehman </span>
        </p>
      </div>
      <div className="container">
        <div className="sun"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
      </div>
    </>
  );
}
