function About(props)
{
    
    return (
        <div className="row bg-white p-4 my-2" >
            <div className="col-4 d-flex align-content-center justify-content-center">
                <h1>About Me</h1>
            </div>
            <div className="col-8 ">
                <p>I'm {props.data.userName} ,I'm {props.data.age} years old , I'm graduation from {props.data.department} of {props.data.faculty+" "}
                from {props.data.university} in {props.data.graduationYear} .<br />
                My Grade is {props.data.grade} , My Graduation project grade is {props.data.graduationProjectGrade}
                </p>
                <a className="btn btn-dark text-white" href={process.env.PUBLIC_URL + '/resume.pdf'} download>Download Resume</a>
            </div>
        </div>
    );
}
export default About;