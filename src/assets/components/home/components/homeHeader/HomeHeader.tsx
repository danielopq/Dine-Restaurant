import './homeHeader.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';

const HomeHeader: React.FC = () => {
    return (
        <header id="homeHeader">
            <div>
                <h1>Exquisite dining since 1989</h1>
                <p className='mediumText'>
                    Experience our seasonal menu in beautiful country surroundings.
                    Eat the freshest produce from the comfort of our farmhouse.
                </p>
                <DefaultButton text='BOOK A TABLE' buttonType='lightBt'/>
            </div>
        </header>
    )
}
export default HomeHeader;