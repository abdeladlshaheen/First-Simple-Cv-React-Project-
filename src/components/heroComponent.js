
function Hero(props)
{
    return (
            <div className="row bg-dark">
                <div className="col-4 text-white d-flex flex-column justify-content-center align-items-center">
                    <h2>{props.data.userName}</h2>
                    <p className="fs-4">Full Stack Web Developer</p>
                    <a className="btn btn-dark border border-light w-50">Show my LinkedIn</a>
                </div>
                <div className="col-8">
                    <img className="opacity-25 w-100" src={process.env.PUBLIC_URL + '/picture.jpg'} />
                </div>
            </div>
    );
}
export default Hero;