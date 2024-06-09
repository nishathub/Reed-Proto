import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Service 1</a>
                    <a className="link link-hover">Service 2</a>
                    <a className="link link-hover">Service 3</a>
                    <a className="link link-hover">Service 4</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'https://www.facebook.com/reedconsultancy'} className="text-2xl hover:text-blue-600 duration-300"><FaFacebookF /></Link>
                        <Link to={'https://www.linkedin.com/company/reed-consultancy'} className="text-2xl hover:text-blue-400 duration-300"><FaLinkedinIn /></Link>
                        <Link className="text-2xl hover:text-red-400 duration-300"><FaInstagram /></Link>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p >Designed by <span className="text-yellow-400 tracking-widest uppercase ">Nishat</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;