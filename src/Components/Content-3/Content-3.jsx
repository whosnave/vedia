import "../Content-3/Content-3.css";
import Watch1 from "../Content-3/watch1.png";
import Watch2 from "../Content-3/watch2.png";
import Watch3 from "../Content-3/watch3.png";
import Watch4 from "../Content-3/watch4.png";

function Content3() {
  return (
    <>
      <div id="models">
        <h1 className="headc2">Our Best Sellers</h1>
      </div>
      <div className="types">
        <ul>
          <li>
            <h2>Nautilus</h2>
            <img className="pors1" src={Watch1} alt="Nautilus watch" />
            <button className="buy-btn">Buy</button>
          </li>
          <li>
            <h2>GrandC</h2>
            <img className="pors2" src={Watch2} alt="GrandC watch" />
            <button className="buy-btn">Buy</button>
          </li>
          <li>
            <h2>Complications</h2>
            <img className="pors3" src={Watch3} alt="Complications watch" />
            <button className="buy-btn">Buy</button>
          </li>
          <li>
            <h2>Calatrava</h2>
            <img className="pors3" src={Watch4} alt="Calatrava watch" />
            <button className="buy-btn">Buy</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Content3;
