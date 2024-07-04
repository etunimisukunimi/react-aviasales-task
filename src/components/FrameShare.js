import { useState } from 'react';
import './Frame.css';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';


export function FrameShare() {

  const dispatch = useDispatch();

  const emailCompletion = useSelector(state => state.user_email_reducer);

  const shareFrame = cn('frame', {
    'frame--display': emailCompletion.frameDisplay,
    'frame-disabled': emailCompletion.userConfirmEmail,
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
    <div className={shareFrame}>
      <div className='frame__title'>
        <div className="title--span">2</div>
        <span>Поделись с друзьями</span>
      </div>
      <div className='frame__share'>
        <div className='share-content'>
          <div className='share-icons'>
            <button className="share-content--circle share-content--facebook" href="#" onClick={() => setIsShareConfirm(true)} disabled={emailCompletion.userConfirmEmail} />
            <button className="share-content--circle share-content--vk" href="#" onClick={() => setIsShareConfirm(true)} disabled={emailCompletion.userConfirmEmail} />
            <button className="share-content--circle share-content--twitter" href="#" onClick={() => setIsShareConfirm(true)} disabled={emailCompletion.userConfirmEmail} />
            <button className="share-content--circle share-content--instagram" href="#" onClick={() => setIsShareConfirm(true)} disabled={emailCompletion.userConfirmEmail} />
          </div>
          <span className={shareConfirm}>Надо все же поделиться</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className='button__component' type='button'
          onClick={handleClick}
          disabled={emailCompletion.userConfirmEmail}>
          Я поделился</button>
      </div>
    </div>
  );
}

export default FrameShare;