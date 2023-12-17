import "./button.css"

const Button = ( { text, handleSubmit} ) => {

  return (
  <>
    <button type="button" className="button" onClick={handleSubmit} > {text} </button>
  </>
  )
}

export default Button