import { useState } from 'react';
import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';


export function FrameShareComponent() {

  const dispatch = useDispatch()

  const emailStyle = useSelector(state => state.user_email_reducer)


  const handleClick = () => {
    dispatch({ type: 'USER_CLICK_SHARE' })
  }

  const handleShare = () => {
    if (emailStyle.userShared == true) {
      dispatch({ type: 'USER_CONFIRM_SHARE' })
    } else {
      dispatch({ type: 'USER_UNCONFIRMED_SHARE' })
    }
  }

  return (
    <div className={emailStyle.shareFrame}>
      <div className='frame__title'>
        <div className="title--span">2</div>
        <span>Поделись с друзьями</span>
      </div>
      <div className='frame__share'>
        <div className='share-content'>
          <div className='share--icons'>
            <a className="share-content--circle share-content--facebook" href="#" onClick={handleClick} />
            <a className="share-content--circle share-content--vk" href="#" onClick={handleClick} />
            <a className="share-content--circle share-content--twitter" href="#" onClick={handleClick} />
            <a className="share-content--circle share-content--instagram" href="#" onClick={handleClick} />
          </div>
          <span className={emailStyle.shareSpan}>Надо все же поделиться</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className="frame__button--button" type='button' onClick={handleShare}>Я поделился</button>
      </div>
    </div>
  );
}

export default FrameShareComponent;
