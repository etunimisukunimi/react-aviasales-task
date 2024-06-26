import { useState } from 'react';
import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

function FrameEmailComponent() {

  const dispatch = useDispatch();

  const [isFrameHover, setIsFrameHover] = useState(false);

  const emailCompletion = useSelector(state => state.user_email_reducer);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailButtonHovered, setIsEmailButtonHovered] = useState(false);

  const emailButton = cn('button__component', {
    'button__component--disabled': isEmailValid,
    'button__component--hover': isEmailButtonHovered,
  });

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const inputSpan = cn('input-span', {
    'input-span--incorrect': isEmailInvalid,
  });

  const [inputEmail, setInputEmail] = useState('')

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
    if (inputEmail.includes('@')) {
      setIsEmailValid(false);
      setIsEmailInvalid(false);
    } else {
      setIsEmailValid(true);
      setIsEmailInvalid(true);
    }
  }

  const [isEmailPressed, setIsEmailPressed] = useState(false);
  const handleClick = () => {
    setIsEmailPressed(true);
    dispatch({ type: 'USER_CONFIRM_EMAIL' });
  }

  const emailFrame = cn('frame', {
    'frame--display': emailCompletion.frameDisplay,
    'frame-disabled': isEmailPressed,
    'frame-disabled-final': isEmailPressed,
    'frame-hover': isFrameHover
  });

  const emailInput = cn('email-input', {
    'email-input--focus': isFrameHover,
    'email-input--invalid': isEmailInvalid,
    'email-input--disabled': isEmailPressed
  });

  return (
    <div className={emailFrame}
      onMouseEnter={() => setIsFrameHover(true)}
      onMouseLeave={() => setIsFrameHover(false)}>
      <div className='frame__title'>
        <div className="title--span">1</div>
        <span>Оставь актуальный email</span>
      </div>
      <div className='frame__input'>
        <div className='input-content'>
          <input className={emailInput} type='text' placeholder='Ввести email'
            onChange={handleEmailChange} />
          <span className={inputSpan}>Неверный формат почты</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className={emailButton} type='button'
          onMouseEnter={() => setIsEmailButtonHovered(true)}
          onMouseLeave={() => setIsEmailButtonHovered(false)}
          onClick={handleClick}>
          Я оставил
        </button>
      </div>
    </div >
  );
}

export default FrameEmailComponent;

