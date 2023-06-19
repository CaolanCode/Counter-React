import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <>
      <div className="number">{count}</div>
      <button onClick={handleClick} className="plus-btn">
        <AddIcon/>
     </button>
    </>
  )
  }

  export default Counter