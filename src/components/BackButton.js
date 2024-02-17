import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    let previous = useNavigate();
    return (
        <>
            <button className='back-button' onClick={() => previous(-1)}>Back</button>
            <br/>
        </>
    );
};

export default BackButton;