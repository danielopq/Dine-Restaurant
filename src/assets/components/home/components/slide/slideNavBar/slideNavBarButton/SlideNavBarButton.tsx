import './slideNavBarButton.css';

interface SlideNavBarButtonProps{
    text:string;
    disabled:boolean;
}

const SlideNavBarButton: React.FC<SlideNavBarButtonProps> = ({text,disabled}) => {
    return (
        <div className='slideNavBarButton'>
            <div className="snb-line" style={{backgroundColor: disabled ? 'var(--Beaver)' : 'white'}}></div>
            <div className={disabled ? 'snb-disabled' : 'snb-enabled'}>{text.toUpperCase()}</div>
        </div>
    )
}
export default SlideNavBarButton;