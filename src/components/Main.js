import './Main.css';
import logo from "../images/main_logo.svg"
import { useDispatch, useSelector } from 'react-redux';


function Main() {

  const data = useSelector(state => state.user_email_reducer)

  return (
    <>
      <div className="avia-sales-main">
        <div className='avia-sales-logo'>
          <img src={logo} />
        </div>
      </div>
      <div className="title-block">
        <div className='title-block-word'>
          <span className='bold-text'>{data.mainSpan}</span>
          <br></br>
          <div class="title-gradient">
            <span className='bold-text title-gradient--span'>
              {data.gradientSpan}
            </span>
          </div>
        </div>
      </div >
      <div className="participation-block">
        <div className="participation-block-rules">
          <span className='regular-text'>{data.infoSpan}</span>
        </div>
      </div>
    </>
  );
}

export default Main;
