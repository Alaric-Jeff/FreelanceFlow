

// !todo - Add an actual logo, correct urls for the links, and style the navbar

function Navbar(){
    return(
        <nav>
             <div className="left-side">
                <a className="logo" ></a>
                <a className="logo-text" href="/">FreelanceFlow</a>
             </div>

             <div className="right-side">
                <a href="/login" className="nav-link">login</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contacts" className="nav-link">Contacts</a>
                <a href="https://github.com/Alaric-Jeff/FreelanceFlow" className="nav-link">Contribute</a>
             </div>
        </nav>
    )
};

export default Navbar;