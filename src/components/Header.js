import PropTypes from 'prop-types' 
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className="header">
           <h1>{title}</h1> 
           <Button color={showAdd?'red':'green'} text={showAdd?'close':'Add'} onClick={onAdd} />
        </header>
    ) 
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

// css in js
// const headingStyle = {color: 'white', backgroundColor:'blue', opacity:0.8}
export default Header

