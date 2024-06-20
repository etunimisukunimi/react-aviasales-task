import './FrameComponent.css';
import FrameEmailComponent from './FrameEmailComponent.js';
import FrameShareComponent from './FrameShareComponent.js';

function FrameStorage() {
    return (
        <div className='frame__storage'>
            <FrameEmailComponent />
            <FrameShareComponent />
        </div>
    );
}

export default FrameStorage;
