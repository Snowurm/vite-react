import React from "react";
import photo1 from "../assets/img/photo1.jpg";
import photo2 from "../assets/img/photo2.jpg";
import photo3 from "../assets/img/photo3.jpg";
import photo4 from "../assets/img/photo4.jpg";
const Section3 = () => {
    return (
        <div>
            {/* Section: Features v.1 */}
            <section className="text-center my-5">
                {/* Section heading */}
                <h2 className="h1-responsive font-weight-bold my-5">
                    Why is it so great?
                </h2>
                {/* Section description */}
                <p className="lead grey-text w-responsive mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>

                {/* Grid row */}
                <div className="row">
                    {/* Grid column */}
                    <div className="col-md-4">
                        <i className="fas fa-chart-area fa-3x red-text"></i>
                        <h5 className="font-weight-bold my-4">Analytics</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reprehenderit maiores aperiam minima assumenda
                            deleniti hic.
                        </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-4">
                        <i className="fas fa-book fa-3x cyan-text"></i>
                        <h5 className="font-weight-bold my-4">Tutorials</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reprehenderit maiores aperiam minima assumenda
                            deleniti hic.
                        </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-4">
                        <i className="far fa-comments fa-3x orange-text"></i>
                        <h5 className="font-weight-bold my-4">Support</h5>
                        <p className="grey-text mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reprehenderit maiores aperiam minima assumenda
                            deleniti hic.
                        </p>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </section>
            {/* Section: Features v.1 */}
        </div>
    );
};
const Section2 = () => {
    return (
        <>
            {/* Header */}
            <header className="text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-dark">Meet the Team</h1>
                </div>
            </header>

            {/* Page Content */}
            <div className="container">
                <div className="row">
                    {/* Team Member 1 */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img
                                src={photo1}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 2 */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img
                                src={photo2}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 3 */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img
                                src={photo3}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 4 */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img
                                src={photo4}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}
        </>
    );
};

export { Section3, Section2 };
