import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import star1 from '../../images/star.svg';
import star2 from '../../images/star2.svg';
import leftbackgroundimg from '../../images/leftimagesbackground.svg';
import rightbackgroundimg from '../../images/rightimagesbackground.svg';
import middlebackgroundimg from '../../images/middleimagesbackground.svg';

function Home () {
    const backgroundColor = {
        backgroundColor: "#0E1620",
        height: "7432px",
        width: "100%",
        zIndex: -2
      };

    return (
        <div className="page-background" style={backgroundColor}>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent header">
                <a className="navbar-brand codelord" href="/">
                    <span className="code code">Code</span> <span className="lord lord">Lord</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav select">
                        <li className="nav-item 1">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item 2">
                            <a className="nav-link" href="/">Categories</a>
                        </li>
                        <li className="nav-item 3">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item 4">
                            <a className="nav-link" href="/">Forum</a>
                        </li>
                        <li className="nav-item 5">
                            <a className="nav-link" href="/">Contact us</a>
                        </li>
                        <li className="nav-item 6">
                            <a className="nav-link" href="/">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="button button-distance">
                    <button className="btn btn-login button-text poppins-font button-container">Log in</button>
                    <button className="btn btn-signup button-text poppins-font button-container">Sign up</button>
                </div>
            </nav>


            <Row className="HomeStart">
                <Col className='Limit'>
                    <h2 className="Title title">
                        Code <span style={{ color: "#21B573" }}>Lord</span>
                        <br />
                        Code your dreams
                    </h2>
                    
                    <div className="background-img1 background-img1">
                        <Image className="backroundimg1" src={leftbackgroundimg} alt="lung" />
                    </div> 

                    <div className="left-img left-img">
                        <Image className="img1" src={img1} alt="a-man-using-laptop" />
                    </div> 

                    <div className="background-img2 background-img2">
                        <Image className="backroundimg2" src={rightbackgroundimg} alt="linh" />
                    </div> 

                    <div className="right-img right-img">
                        <Image className="img2" src={img2} alt="a-man-using-laptop-2" />
                    </div> 

                    <div className="middlebackground background-img3">
                        <Image className="backgroundimg3" src={middlebackgroundimg} alt="qua" />
                    </div> 
                </Col>

                <Col class="position-relative">
                    <div class="col-md-8 justify-content-center">
                        <div class="search ">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="What do you want to learn"/>
                            <button class="btn btn-primary">Learn</button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Container className="Categories">
                <div className="box">
                    <Row>
                    <Col className="group-number-banner">
                        <Row className="group-student">
                            <div className="overlap-group">
                                <div className="rectangle" />
                                <div className="text-wrapper">100M+</div>
                                <div className="div">Students</div>
                            </div>
                        </Row>
                        <Row className="group-professional">
                            <div className="group">
                                <div className="text-wrapper-2">10K+</div>
                                <div className="text-wrapper-3">Professionals</div>
                            </div>
                        </Row>
                        <Row className="group-trustpilot">
                            <div className="overlap-2">
                                <Row className="overlap-3">
                                    <div className="text-wrapper-4">5.0</div>
                                    <div className="group-2">
                                        <div className="text-wrapper-5">View our 1,602 reviews</div>
                                        <div className="overlap-group-2">
                                        <Image className="artboard" src={star1} alt="Artboard" />
                                        </div>
                                    </div>
                                    <h4 className="texttrust">
                                            Trustpilot
                                    </h4> 
                                </Row>
                                <Image className="star" src={star2} alt="Star" />
                            </div>
                        </Row>
                        <Row className="group-category">
                            <div className="overlap-4">
                                <div className="text-wrapper-6">15+</div>
                                <div className="text-wrapper-7">Category</div>
                            </div>
                        </Row>
                        <Row className="group-livecourses">
                            <div className="overlap-5">
                                <div className="text-wrapper-8">60K+</div>
                                <div className="text-wrapper-9">Live Courses</div>
                            </div>
                        </Row>
                    </Col>
                    </Row>
                </div>
            </Container>


        </div>
      );
}

export default Home;