const Button = ({color, text}) => {
    return (
  
             <button className="btn" 
             style={{background:color}}>
                {text}
            </button>

    )
}


export default Button