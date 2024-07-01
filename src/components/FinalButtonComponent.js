import React, { useState } from 'react';
import './FrameComponent.css';
import { useSelector } from 'react-redux';
import cn from 'classnames';

function FinalButtonComponent() {

  const buttonDisplay = useSelector(state => state.user_email_reducer)

  const handleClick = () => {
    alert('click!');
  }

  const finalButton = cn('final__button', {
    'final__button--disabled': buttonDisplay.userGetFinalScreen
  })

  return (
    <div className={finalButton}>
      <button className='final__button--button' type='button' onClick={handleClick}>Пройти игру заново</button>
    </div>
  );
}

export default FinalButtonComponent;