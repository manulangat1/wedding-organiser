import React from 'react'
import '../../App.css'
import { Link} from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class  Footer extends React.Component{
    render(){
        return (
            <footer>
                <p>Wedding solutions  &copy;2019</p>
                <p><Link to="/about">About | contact US</Link> | <Link to ="/help">Help</Link></p>
            </footer>
        )
    }
}
export default Footer;