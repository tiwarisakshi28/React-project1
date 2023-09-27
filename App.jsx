import { useState,  } from "react"


function App() {
  const [color, setColor] = useState("olive")
  const [text, setText] =useState("BGcolor change website")
  function setP(){
    if (color="red"){
        return "kya mtlb bacho wala website h"
    }
    else if (color="green"){
      return "kya mtlb newbie banate h ye sab "
    }
    else if (color="blue"){
      return "kya mtlb company samne se approch karegi ye project dekh kr"
    }
  }
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <p className="fixed flex flex-center justify-center px-50% py-50% ">hiii</p>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App