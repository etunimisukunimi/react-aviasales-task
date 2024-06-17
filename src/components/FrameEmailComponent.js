import './FrameComponent.css';

function frameInputBorderColor() {
  document.getElementsByClassName('frame-input').style = 'border: 1px solid rgba(255, 255, 255, 30%';

}

function FrameComponent() {
  return (
    <div className='frame-block'>
      <div className='frame-start-span'>
        <div className="frame-span-box">1</div>
        <span>Оставь актуальный email</span>
      </div>
      <div className='frame-middle-content'>
        <div className='frame-input-content'>
          <input className="frame-input" id='frame-email-input' type='text' placeholder='Ввести email' onchange={frameInputBorderColor()}></input>
          <span>Неверный формат почты</span>
        </div>
      </div>
      <div className='frame-end-button'>
        <button type='button' id='frame-req-button'>Я оставил</button>
      </div>
    </div>
  );
}

export default FrameComponent;
