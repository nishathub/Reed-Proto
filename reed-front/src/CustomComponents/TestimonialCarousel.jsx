import { useState, useEffect } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    const styles = {
        carousel: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            minHeight: '300px',
            margin: '0 auto',
            position: 'relative',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '8px',
            // backgroundColor: '#53717d',
        },
        testimonial: {
            textAlign: 'center',
            flex: 1,
        },
        button: {
            background: 'none',
            border: 'none',
            fontSize: '2em',
            cursor: 'pointer',
            color: '#EAB308',
            outline: 'none',
        },
        buttonHover: {
            color: '#eee',
        },
    };

    return (
        <div className='bg-cyan-800' style={styles.carousel}>
            <button
                onClick={prevTestimonial}
                style={styles.button}
                onMouseOver={(e) => (e.currentTarget.style.color = styles.buttonHover.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = styles.button.color)}
            >
                &#10094;
            </button>
            <div style={styles.testimonial}>
                <p className='text-lg text-gray-300'>{testimonials[currentIndex].text}</p>
                <h4 className='text-xl text-yellow-500 mt-8'>{testimonials[currentIndex].designation}</h4>
                <p className='font-mono font-bold text-yellow-500'>{testimonials[currentIndex].author}</p>
            </div>
            <button
                onClick={nextTestimonial}
                style={styles.button}
                onMouseOver={(e) => (e.currentTarget.style.color = styles.buttonHover.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = styles.button.color)}
            >
                &#10095;
            </button>
        </div>
    );
};

export default TestimonialCarousel;
