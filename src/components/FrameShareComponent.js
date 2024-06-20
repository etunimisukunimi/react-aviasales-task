import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';


export function FrameShareComponent() {

  const dispatch = useDispatch()

  const emailStyle = useSelector(state => state.user_email_reducer)

  const handleClick = () => {
    dispatch({ type: 'USER_CONFIRM_SHARE' })
  }

  return (
    <div className='frame' style={{ opacity: emailStyle.shareOpacity, pointerEvents: emailStyle.shareEvents, display: emailStyle.display }}>
      <div className='frame__title'>
        <div className="title--span">2</div>
        <span>Поделись с друзьями</span>
      </div>
      <div className='frame__share'>
        <div className='share-content'>
          <div className='share--icons'>
            <a className="share-content--circle share-content--facebook" href="#" />
            <a className="share-content--circle share-content--vk" href="#" />
            <a className="share-content--circle share-content--twitter" href="#" />
            <a className="share-content--circle share-content--instagram" href="#" />
          </div>
          <span className='share--span' style={{opacity: emailStyle.incorrectOpacity}}>Надо все же поделиться</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className="frame__button--button" type='button' onClick={handleClick}>Я поделился</button>
      </div>
    </div>
  );
}

export default FrameShareComponent;
