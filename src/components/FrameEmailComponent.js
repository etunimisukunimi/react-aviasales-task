import { useState } from 'react';
import './FrameComponent.css';
import { useDispatch, useSelector } from 'react-redux';

function FrameEmailComponent() {

  const dispatch = useDispatch()

  const [inputEmail, setInputEmail] = useState('')
  const emailStyle = useSelector(state => state.user_email_reducer)

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);

    if (inputEmail.includes('@')) {
      dispatch({ type: 'USER_INJECTED_EMAIL' })
    } else {
      dispatch({ type: 'USER_UNINJECTED_EMAIL' })
    }
  }

  const handleClick = () => {
    dispatch({ type: 'USER_CONFIRM_EMAIL' })
  }

  return (

    <div className='frame' style={{ opacity: emailStyle.emailOpacity, pointerEvents: emailStyle.emailEvents, display: emailStyle.display }}>
      <div className='frame__title'>
        <div className="title--span">1</div>
        <span>Оставь актуальный email</span>
      </div>
      <div className='frame__input'>
        <div className='input-content'>
          <input className="email-input" id='email-input' type='text' placeholder='Ввести email' onChange={handleEmailChange} />
          <span className='input--span' style={{ color: emailStyle.incorrectColor }}>Неверный формат почты</span>
        </div>
      </div>
      <div className='frame__button'>
        <button className="frame__button--button" type='button' onClick={handleClick} disabled={emailStyle.disabled}>Я оставил</button>
      </div>
    </div >
  );
}

export default FrameEmailComponent;

