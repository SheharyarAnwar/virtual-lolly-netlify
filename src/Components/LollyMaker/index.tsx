import React, { useState } from "react"
import Lolly from "../../Assets/lolly"
import SketchExample from "../ColorPicker"
import classes from "./index.module.css"
const defaultTop = "#D2E73B"
const defaultMiddle = "#105962"
const defaultBottom = "#65B507"
const Index = () => {
  const [fillTop, setFillTop] = useState<string>(defaultTop)
  const [fillMiddle, setFillMiddle] = useState<string>(defaultMiddle)
  const [fillBottom, setFillBottom] = useState<string>(defaultBottom)
  return (
    <div className={classes.root}>
      <Lolly top={fillTop} middle={fillMiddle} bottom={fillBottom} />
      <div className={classes.colorPickers}>
        <SketchExample
          color={defaultTop}
          onColorPicked={color => setFillTop(color)}
        />
        <SketchExample
          color={defaultMiddle}
          onColorPicked={color => setFillMiddle(color)}
        />
        <SketchExample
          color={defaultBottom}
          onColorPicked={color => setFillBottom(color)}
        />
      </div>
    </div>
  )
}

export default Index
