import { useState } from 'react';
import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';


export function FrameShareComponent() {

  const dispatch = useDispatch();

  const emailCompletion = useSelector(state => state.user_email_reducer);

  const [frameDisplay, setFrameDisplay] = useState(false);
  const [isEmailButtonHovered, setIsEmailButtonHovered] = useState(false);
  const shareButton = cn('button__component', {
    'button__component--hover': isEmailButtonHovered,
  });

  const [isFrameHover, setIsFrameHover] = useState(false);
  const shareFrame = cn('frame', {
    'frame--display': emailCompletion.frameDisplay,
    'frame-disabled': emailCompletion.userConfirmEmail,
    'frame-hover': isFrameHover,
  });

  const [isSharePressed, setIsSharePressed] = useState(false);
  const shareConfirm = cn('share-span', {
    'share-span--incorrect': isSharePressed,
  })

  const [isShareConfirm, setIsShareConfirm] = useState(false);
  const handleClick = () => {
    if (isShareConfirm == true) {
      setIsShareConfirm(false);
      setIsSharePressed(false);
      dispatch({ type: 'USER_CLICK_SHARE' });
    } else {
      setIsSharePressed(true);
    }
  }


  return (
    <div className={shareFrame}
      onMouseEnter={() => setIsFrameHover(true)}
      onMouseLeave={() => setIsFrameHover(false)}>
      <div className='frame__title'>
        <div className="title--span">2</div>
        <span>Поделись с друзьями</span>
      </div>
      <div className='frame__share'>
        <div className='share-content'>
          <div className='share-icons'>
            <a className="share-content--circle share-content--facebook" href="#" onClick={() => setIsShareConfirm(true)} />
            <a className="share-content--circle share-content--vk" href="#" onClick={() => setIsShareConfirm(true)} />
            <a className="share-content--circle share-content--twitter" href="#" onClick={() => setIsShareConfirm(true)} />
            <a className="share-content--circle share-content--instagram" href="#" onClick={() => setIsShareConfirm(true)} />
          </div>
          <span className={shareConfirm}>Надо все же поделиться</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className={shareButton} type='button'
          onMouseEnter={() => setIsEmailButtonHovered(true)}
          onMouseLeave={() => setIsEmailButtonHovered(false)}
          onClick={handleClick}>
          Я поделился</button>
      </div>
    </div>
  );
}

export default FrameShareComponent;