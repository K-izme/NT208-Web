import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import star1 from '../../images/star.svg';
import star2 from '../../images/star2.svg';
import ibm from '../../images/ibm.png';
import google from '../../images/google.svg';
import cisco from '../../images/cisco.svg';
import meta from '../../images/meta.svg';
import work from '../../images/work.svg';
import line from '../../images/line.svg';
import polygon from '../../images/polygon.svg';
import leftbackgroundimg from '../../images/leftimagesbackground.svg';
import rightbackgroundimg from '../../images/rightimagesbackground.svg';
import middlebackgroundimg from '../../images/middleimagesbackground.svg';
import Background from '../../images/background2.svg';

function Home () {
    const backgroundColor = {
        backgroundColor: "#0E1620",
        height: 3597,
        width: "100%",
        zIndex: -2
      };

    return (
        <div>
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
                    <Row className="box">
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
                    <Col className='instruction'>
                        <h3 className='explore'>
                            Explore Top Categories
                        </h3>
                        <h5 className='click'>
                            Click on the categories and explore all courses
                        </h5>
                    </Col>
                </Container>
                <Container className='popular'>
                    <Row className='popularcontain'>
                        <h2 className='populartitle'>
                            Popular Courses
                        </h2>
                    </Row>
                    <Row className='popularline1' style={{ gap: "30px" }}>
                        <Col className="cybersec">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Introduction to Cybersecurity Essentials</div>
                                <div className="div">25x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">Cyber Security</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={ibm} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                    Security Engineering, Network Security, Cyber Attacks, Cryptography ...
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
            
                        <Col className="datascience">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Data Science Fundamentals with Python and SQL</div>
                                <div className="div">16x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">Data Science</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={ibm} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                    Python Programming, SQL, Data Structures, Databases, Data Analysis, Data Management
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="aiml">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Machine Learning on Google Cloud</div>
                                <div className="div">10x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">AI & ML</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={google} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                         Machine Learning, Deep Learning, Python Programming, Cloud Computing
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='popularline2' style={{ gap: "30px" }}>
                        <Col className="cybersec">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Introduction to Front-End Development</div>
                                <div className="div">25x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">Front-End</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={meta} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                    HTML and CSS, Web Development
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
            
                        <Col className="datascience">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Networking</div>
                                <div className="div">16x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">Networking</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={cisco} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                    Windows Networking, Networking knowledge
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="aiml">
                            <div className="group-introduce">
                                <div className="overlap">
                                <div className="text-wrapper">Developing Back-End Apps with Node.js and Express</div>
                                <div className="div">38x Lesson</div>
                                <div className="group">
                                    <div className="overlap-group">
                                    <div className="text-wrapper-2">Back-end</div>
                                    </div>
                                </div>
                                <Image className="rectangle" alt="Rectangle" src={meta} />
                                <p className="text">
                                    <span className="span">Skills you&#39;ll gain:</span>
                                    <span className="text-wrapper-3">
                                    {" "}
                                    Computer Programming, Web Development
                                    </span>
                                </p>
                                <Button className="button-base">
                                    <div className="text-2">Join</div>
                                </Button>
                                <Image className="line" alt="Line" src={line} />
                                <div className="polygon-wrapper">
                                    <Image className="polygon" alt="Polygon" src={polygon} />
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='popularbutton'>
                        <Button className="explore">
                            <div className='buttontext'>Explore all courses</div>
                        </Button>
                    </Row>
                </Container>
            </div>
            <Container className='how' >
                <Image className='background2' src={Background} alt='Background2' />

                <Row className='howcodelordworks'>
                    <p>
                        <span className='How'>How </span>
                        <span className="code code">Code</span> 
                        <span className="lord lord">Lord</span>
                        <span className='works'> works</span>
                    </p>
                </Row>    

                <Col className='instruction'> 
                    <Row className="boxsignup">
                        <div className="group-signup">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-business" alt="Element business" src = {work}/>
                                </div>
                                <div className="text-wrapper">Sign Up</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Sign up for a </span>
                                    <span className="text-wrapper-2">free account</span>
                                    <span className="span"> on </span>
                                    <span className="text-wrapper-2">Code</span>
                                    <span className="text-wrapper-3">Lord</span>
                                    <span className="text-wrapper-2">&nbsp;</span>
                                    <span className="span">to advance in IT and boost your career.</span>
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-signup">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-business" alt="Element business" src = {work}/>
                                </div>
                                <div className="text-wrapper">Sign Up</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Sign up for a </span>
                                    <span className="text-wrapper-2">free account</span>
                                    <span className="span"> on </span>
                                    <span className="text-wrapper-2">Code</span>
                                    <span className="text-wrapper-3">Lord</span>
                                    <span className="text-wrapper-2">&nbsp;</span>
                                    <span className="span">to advance in IT and boost your career.</span>
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-signup">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-business" alt="Element business" src = {work}/>
                                </div>
                                <div className="text-wrapper">Sign Up</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Sign up for a </span>
                                    <span className="text-wrapper-2">free account</span>
                                    <span className="span"> on </span>
                                    <span className="text-wrapper-2">Code</span>
                                    <span className="text-wrapper-3">Lord</span>
                                    <span className="text-wrapper-2">&nbsp;</span>
                                    <span className="span">to advance in IT and boost your career.</span>
                                </p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
      );
}

export default Home;