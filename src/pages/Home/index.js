import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'

function Home () {
    const backgroundColor = {
        backgroundColor: "#0E1620",
        height: "7432px"
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


            <div className="Home">
                <h2 className="Title title">
                    Code <span style={{ color: "#21B573" }}>Lord</span>
                    <br />
                    Code your dream
                </h2>
            </div>


        </div>
      );
}

export default Home;