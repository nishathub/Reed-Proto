import './CustomMarqueeStyle.css';

const CustomMarquee = ({children}) => {
    return (
        <div className='marquee'>
            <div className='marquee-content'>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CustomMarquee;