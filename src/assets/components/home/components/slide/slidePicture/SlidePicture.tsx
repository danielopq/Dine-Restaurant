import { useEffect, useState } from 'react';
import './slidePicture.css';

interface SlidePictureProps {
    visible: boolean;
    desktopPic: string;
    tabletPic: string;
    mobilePic: string;
}

/**
 * SlidePicture Component
 * 
 * Renders an image as the background for an event type offered by the restaurant.
 * The displayed image changes dynamically based on the current window size 
 * (desktop, tablet, or mobile) and the `visible` prop controls the visibility of the component.
 * 
 * @component
 * @param {SlidePictureProps} props - Component properties.
 * @param {boolean} props.visible - Determines if the component is visible.
 * @param {string} props.desktopPic - Image URL for desktop devices.
 * @param {string} props.tabletPic - Image URL for tablet devices.
 * @param {string} props.mobilePic - Image URL for mobile devices.
 * @returns {JSX.Element} A styled `div` with a dynamic background image.
 */
const SlidePicture: React.FC<SlidePictureProps> = ({ visible, desktopPic, tabletPic, mobilePic }: SlidePictureProps): JSX.Element => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');


    /**
     * Updates the background image based on the current window size.
     * Determines the screen size category (desktop, tablet, or mobile)
     * and sets the appropriate image URL.
     */
    const updateBackgroundImage = () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        setBackgroundImage(isDesktop ? desktopPic : isTablet ? tabletPic : mobilePic);
    };

    useEffect(() => {
        updateBackgroundImage();
        window.addEventListener('resize', updateBackgroundImage);
        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, [desktopPic, tabletPic, mobilePic]);


    return (
        <div className='slidePicture' style={{ opacity: visible ? '1' : '0', backgroundImage: `url(${backgroundImage})`}}>
            <div></div>
        </div>
    )
}
export default SlidePicture;