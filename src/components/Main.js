import './Main.css';
import logo from "../images/main_logo.svg"

function Main() {
  return (
    <>
      <div className="avia-sales-main">
        <div className='avia-sales-logo'>
          <img src={logo} />
        </div>
      </div>
      <div className="title-block">
        <div className='title-block-word'>
          <span className='bold-text'> white span </span>
          <br></br>
          <span className='bold-text'><span className='title-gradient-span'> gradient span </span></span>
        </div>
      </div>
      <div className="participation-block">
        <div className="participation-block-rules">
          <span className='bold-text'>span span span</span>
        </div>
      </div>
    </>
  );
}

export default Main;
