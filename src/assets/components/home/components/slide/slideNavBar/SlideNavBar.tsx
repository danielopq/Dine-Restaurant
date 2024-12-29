import './slideNavBar.css';

import SlideNavBarButton from './slideNavBarButton/slideNavBarButton';

const SlideNavBar = () => {
    return (
        <nav id="slideNavBar">
            <SlideNavBarButton text={'FAMILY GATHERING'} disabled={true}/>
            <SlideNavBarButton text={'SPECIAL EVENTS'} disabled={false}/>
            <SlideNavBarButton text={'SOCIAL EVENTS'} disabled={false}/>
        </nav>
    )
}
export default SlideNavBar;