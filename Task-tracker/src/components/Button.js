import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
  
             <button className="btn" 
             style={{background:color}}>
                {text}
            </button>

    )
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string

}


export default Button