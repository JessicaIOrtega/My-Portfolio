import React from 'react';
import Project1 from '../../assets/images/project1.png'
import Project2 from '../../assets/images/project2.png'
import Project3 from '../../assets/images/project3.png'

function Portfolio() {
    return (
        <div className="row m-3">
            <h1 className="col-4" id="work">Work</h1>
            <div className="col-6">
                <div id="carousel" className="carousel slide">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Project1} className=" img-fluid card-img-top"
                                alt="Drink of the day app" style={{ opacity: '.8', height: '500px' }} />
                            <div className="card-body">
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://mzernick.github.io/Drink-of-the-Day/">
                                        <h3 id="projectLink" className="card-title text-center p-3">
                                            <strong>Drink of the
                                                Day</strong>
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Project2} className="img-fluid card-img-top"
                                alt="Budget Buddy app" style={{ opacity: '.8', height: '500px' }} />
                            <div className="card-body">
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://financial-planner-uta-bc.herokuapp.com/">
                                        <h3 id="projectLink" className="card-title text-center p-3">
                                            <strong>Budget Buddy</strong>
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Project3} className="img-fluid card-img-top"
                                alt="Git your life together app" style={{ opacity: '.8', height: '500px' }} />
                            <div className="card-body">
                                <div className="carousel-caption d-none d-md-block">
                                    <a href="https://git-your-life-together.herokuapp.com/">
                                        <h3 id="projectLink" className="card-title text-center p-3">
                                            <strong>Git your life together!</strong>
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" style={{ color: 'purple', fontSize: '2rem' }} aria-hidden="true">+</span>
                            <span className="visually-hidden">Previous</span>
                        </button> */}
                        {/* <button className="carousel-control-next" type="button" data-bs-target="#carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" style={{ color: 'purple', fontSize: '2rem' }}
                                aria-hidden="true">+</span>
                            <span className="">Next</span>
                        </button> */}

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Portfolio;
