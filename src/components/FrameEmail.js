import { useState } from 'react';
import './Frame.css';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

function FrameEmail() {

  const dispatch = useDispatch();

  const emailCompletion = useSelector(state => state.user_email_reducer);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailPressed, setIsEmailPressed] = useState(false);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [inputEmail, setInputEmail] = useState('')

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
    if (inputEmail.includes('@')) {
      setIsEmailValid(false);
      setIsEmailCorrect(false);

    } else {
      setIsEmailValid(true);
      setIsEmailCorrect(true);
    }
  }

  const handleClick = () => {
    setIsEmailPressed(true);
    dispatch({ type: 'USER_CONFIRM_EMAIL' });
  }

  const emailFrame = cn('frame', {
    'frame--display': emailCompletion.frameDisplay,
    'frame-disabled': isEmailPressed,
    'frame-disabled-final': isEmailPressed,
  });

  const emailInput = cn('email-input', 'email-input:hover', {
    'email-input--invalid': isEmailValid,
    'email-input--disabled': isEmailPressed
  });

  const emailButton = cn('button__component', {
    'button__component--disabled': isEmailCorrect

  });

  const inputSpan = cn('input-span', {
    'input-span--incorrect': isEmailValid,
  });

  return (
    <div className={emailFrame}>
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
          onClick={handleClick}>
          Я оставил
        </button>
      </div>
    </div >
  );
}

export default FrameEmail;

