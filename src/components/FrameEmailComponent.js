import { useState } from 'react';
import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';

function FrameEmailComponent() {

  const dispatch = useDispatch()
  const emailStyle = useSelector(state => state.user_email_reducer)

  const [inputEmail, setInputEmail] = useState('')

  const handleClick = () => {
    dispatch({ type: 'USER_CONFIRM_EMAIL' })
  }

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);

    if (inputEmail.includes('@')) {
      dispatch({ type: 'USER_INJECTED_EMAIL' })
    } else {
      dispatch({ type: 'USER_UNINJECTED_EMAIL' })
    }

  }



  return (

    <div className={emailStyle.emailFrame}>
      <div className='frame__title'>
        <div className="title--span">1</div>
        <span>Оставь актуальный email</span>
      </div>
      <div className='frame__input'>
        <div className='input-content'>
          <input className={emailStyle.inputBorder} type='text' placeholder='Ввести email' onChange={handleEmailChange} />
          <span className={emailStyle.emailSpan}>Неверный формат почты</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className="frame__button--button" type='button' onClick={handleClick} disabled={emailStyle.disabled}>Я оставил</button>
      </div>
    </div >
  );
}

export default FrameEmailComponent;

