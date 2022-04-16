// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid,regular,brands} from "@fortawesome/fontawesome-svg-core/import.macro";
function Footer(props)
{
    
    return (
        <div className="row">
            <div className="col-12 bg-dark text-light p-4">
                <div className="row">
                    <div className="col-4">
                        <p>GET IN TOUCH</p>
                        <p><i className="fa-solid fa-envelope mx-3"></i>abdeladlshaheen@gmail.com</p>
                        <p><i class="fa-solid fa-square-phone mx-3"></i>+20 01069418938</p>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <button className="btn btn-dark px-5 border border-white">Contact Me</button>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center">
                        <div className="fs-4 d-flex justify-content-center">
                        <i class="fa-brands fa-linkedin m-2"></i>
                        <i class="fa-brands fa-facebook-square m-2"></i>
                        <i class="fa-brands fa-twitter-square m-2"></i>
                        </div>
                        <div className="text-center">
                            <p>Copyright &copy; 2022 ITI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;