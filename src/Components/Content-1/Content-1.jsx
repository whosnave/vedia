import "../Content-1/Content-1.css";
import Vedia from '../Content-1/vedia.png'

function Content1() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="title-container">
            <h1>Discover Your Style</h1>
            <img className="vLogo" src={Vedia} alt="" />
          </div>
          <p>Exclusive collections, only for you.</p>
          <button className="btnSn">Shop Now</button>
        </section>
      </div>
    </>
  );
}

export default Content1;
