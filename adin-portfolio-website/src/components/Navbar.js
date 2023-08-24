import '../index.css';

function Navbar() {
    return(
    <div className='full-wrapper'>
        <div className = "nav-bar">
             <ul className = "nav-list">
                <li>
                    About Me
                </li>
                <li>    
                    Projects
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </div>
    </div>);
}

export default Navbar;