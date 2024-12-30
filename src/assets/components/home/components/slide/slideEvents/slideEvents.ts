interface SlideEvent{
    title:string;
    text:string;
    desktopPic:string;
    tabletPic:string;
    mobilePic:string;
}

/**
 * SlideEvents
 * 
 * Contains an array of event details offered by the restaurant. 
 * Each event includes a title, descriptive text, and image URLs for different device types 
 * (desktop, tablet, and mobile).
 */

const SlideEvents:SlideEvent[] = [
    {
        title:'Family Gathering',
        text:'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        desktopPic:'img/slide/family-gathering-desktop.jpg',
        tabletPic:'img/slide/family-gathering-tablet.jpg',
        mobilePic:'img/slide/family-gathering-mobile.jpg',
    },
    {
        title:'Special Events',
        text:'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        desktopPic:'img/slide/special-events-desktop.jpg',
        tabletPic:'img/slide/special-events-tablet.jpg',
        mobilePic:'img/slide/special-events-mobile.jpg',
    },
    {
        title:'Social Events',
        text:'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        desktopPic:'img/slide/social-events-desktop.jpg',
        tabletPic:'img/slide/social-events-tablet.jpg',
        mobilePic:'img/slide/social-events-mobile.jpg',
    },
]
export default SlideEvents;