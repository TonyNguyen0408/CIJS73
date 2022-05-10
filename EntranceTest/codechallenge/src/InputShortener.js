import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>Link <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Enter a link"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener