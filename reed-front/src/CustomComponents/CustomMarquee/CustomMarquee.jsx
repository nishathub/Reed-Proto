import './CustomMarqueeStyle.css';

const CustomMarquee = ({children}) => {
    return (
        <div className='marquee bg-cyan-800'>
            <div className='marquee-content'>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CustomMarquee;