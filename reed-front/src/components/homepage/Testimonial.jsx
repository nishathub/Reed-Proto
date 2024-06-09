import TestimonialCarousel from "../../CustomComponents/TestimonialCarousel";

const Testimonial = () => {
    const testimonials = [
        { text: "This is the best service I have ever used.", author: "John Doe", designation: "Project Manager" },
        { text: "Amazing experience, highly recommend!", author: "Jane Smith", designation: "Software Engineer" },
        { text: "Fantastic! Will use again.", author: "Bob Johnson", designation: "Product Designer" },
        // Add more testimonials here
    ];
    return (
        <div className="py-8 md:py-20 bg-cyan-950">
            <div className="mb-8">
                <h2 className="text-2xl md:text-4xl text-yellow-500 text-center">Testimonials</h2>
            </div>
            <div>
            <TestimonialCarousel testimonials={testimonials}></TestimonialCarousel>
            </div>
        </div>
    );
};

export default Testimonial;