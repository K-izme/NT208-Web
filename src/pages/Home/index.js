import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../../images/img1.svg';
import backgroundimg from '../../images/leftimagesbackground.svg';
import { Container } from 'react-bootstrap';

function Home () {
    const backgroundColor = {
        backgroundColor: "#0E1620",
        height: "7432px",
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
                <div>
                    <h2 className="Title title">
                        Code <span style={{ color: "#21B573" }}>Lord</span>
                        <br />
                        Code your dreams
                    </h2>
                    
                    <div className="background-img1 background-img1">
                        <Image className="backroundimg1" src={backgroundimg} alt="lung" />
                    </div> 

                    <div className="left-img left-img">
                        <Image className="img1" src={img1} alt="a-man-using-laptop" />
                    </div> 
                </div>

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



        </div>
      );
}

export default Home;