function Portofolio(props)
{
    return (
        <div className="row">
            <div className="col-12">
                <h1>Portoflio</h1>
            </div>
            <div className="col-12 text-white">
                <div className="row my-3 text-center">
                    <div className="col-3 mx-auto bg-dark p-4 rounded">
                        <h4>Web Design</h4>
                        <hr />
                    </div>
                    <div className="col-3 mx-auto bg-secondary p-4 rounded shadow">
                        <h4>Backend Design</h4>
                        <hr />
                    </div>
                    <div className="col-3 mx-auto bg-dark p-4 rounded shadow">
                        <h4>Api Design</h4>
                        <hr />
                    </div>
                </div>
                <div className="row my-5 text-center ">
                    <div className="col-3 mx-auto bg-secondary p-4 rounded shadow">
                        <h4>Project Analysis</h4>
                        
                    </div>
                    <div className="col-3 mx-auto bg-dark p-4 rounded shadow">
                        <h4>DataBase Design</h4>
                        
                    </div>
                    <div className="col-3 mx-auto bg-secondary p-4 rounded shadow">
                        <h4>Deployment Design</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portofolio;