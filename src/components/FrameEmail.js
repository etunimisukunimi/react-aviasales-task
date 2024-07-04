import { useState } from 'react';
import './Frame.css';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import axios from 'axios';

function FrameEmail() {

  const dispatch = useDispatch();

  const emailCompletion = useSelector(state => state.user_email_reducer);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailPressed, setIsEmailPressed] = useState(false);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [inputEmail, setInputEmail] = useState('')

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value)
    if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(inputEmail)) {
      setIsEmailValid(false);
      setIsEmailCorrect(false);
      dispatch({ type: 'USER_VALID_EMAIL' })
    } else {
      setIsEmailValid(true);
      setIsEmailCorrect(true);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/';
    const data = { email: inputEmail };


    axios.get(url + 'get_emails')
      .then(function (response) {
        const validEmail = response.data
        if (validEmail.find(validEmail => validEmail.email === inputEmail)) {
          setIsEmailValid(true)
          setIsEmailCorrect(true)
          dispatch({ type: 'USER_INVALID_EMAIL' });
        } else {
          postEmail();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    const postEmail = () => {
      axios.post(url + 'create_email', data)
        .then(function (response) {
          console.log(response);
          localStorage.setItem('user_id', response.data.rows[0].id);
          setIsEmailPressed(true);
          dispatch({ type: 'USER_CONFIRM_EMAIL' });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

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
          <span className={inputSpan}>{emailCompletion.emailInfo}</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className={emailButton} type='button'
          onClick={handleClick}
        >
          Я оставил
        </button>
      </div>
    </div >
  );
}

export default FrameEmail;

