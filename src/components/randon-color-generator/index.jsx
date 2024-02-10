import "./styles.css"

export default function RandomColorGenerator() {
  return (
    <div className="RandomColorGenerator">
        <div className="topBtnsBar">
        <button>Create HEX color</button>       
             <button>Create RGB color</button>
             <button>Generate Random color</button>
        </div>

        <div className="colorsContainer">
          <h3>HEX Color</h3>
          <h1>#9F77B8</h1>
        </div>
    </div>
  )
}
