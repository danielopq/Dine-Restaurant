import './slideNavBarButton.css';

interface SlideNavBarButtonProps{
    text:string;
    disabled:boolean;
    setSlide: (slideEvent:number) => void;
    slideEvent:number;
}

const SlideNavBarButton: React.FC<SlideNavBarButtonProps> = ({text,disabled,setSlide,slideEvent}) => {
    return (
        <div className='slideNavBarButton'>
            <div className="snb-line" style={{backgroundColor: disabled ? 'var(--Beaver)' : 'white'}}></div>
            <div className={disabled ? 'snb-disabled' : 'snb-enabled'} onClick={()=>setSlide(slideEvent)}>{text.toUpperCase()}</div>
        </div>
    )
}
export default SlideNavBarButton;