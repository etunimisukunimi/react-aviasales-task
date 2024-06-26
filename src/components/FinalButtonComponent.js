import './FrameComponent.css';
import { useSelector } from 'react-redux';

function FinalButtonComponent() {

  const buttonStyle = useSelector(state => state.user_email_reducer)

  const handleClick = () => {
    alert('click!')
  }

  return (
    <div className='final__button'>
      <button className={buttonStyle.finalButton} type='button' onClick={handleClick}>Пройти игру заново</button>
    </div>
  );
}

export default FinalButtonComponent;

