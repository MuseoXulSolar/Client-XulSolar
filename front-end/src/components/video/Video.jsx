import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const Video = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/Visits')
    }
    const URL = 'https://res.cloudinary.com/dtsmy1ksn/video/upload/v1694796968/video/Museo_Xul_Solar_-_Fundaci%C3%B3n_Pan_Klub_ri6mee.mp4'
    return (
        <div className="relative h-auto overflow-hidden">
            <div className="w-full h-auto inset-0 bg-black/40">
            </div>
                
            <video className="w-full h-auto " src={URL} autoPlay loop muted ></video>
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    onClick={handleClick}
                    type="button"
                    className="inline-block  md:h-10 text-orange-200 bg-gray-200 rounded bg-primary-100  px-4 md:px-10 pb-2 pt-2.5 text-xs md:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-orange-200 hover:text-gray-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                    <FormattedMessage
                        id='video.visita'
                        defaultMessage='Planeá tu Visita'
                    />

                </button>

            </div>

        </div>
    );
}

export default Video;