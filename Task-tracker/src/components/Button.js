import PropTypes from 'prop-types'

const Button = ({color, text}) => {

    const onClick = () => {

    }


    return (
  
             <button className="btn" 

             onClick={onClick}

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