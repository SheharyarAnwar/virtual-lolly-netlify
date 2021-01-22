import React, { useEffect, useState } from "react"
import Form from "../Components/Form"
import LollyMaker from "../Components/LollyMaker"
import classes from "./index.module.css"

export interface LollyData {
  fillTop: string
  fillMiddle: string
  fillBottom: string
  recipientName: string
  message: string
  senderName: string
}
const Index = () => {
  const [lollyData, setLollyData] = useState<LollyData>()
  const [onFormSubmitted, setOnFormSubmitted] = useState<boolean>(false)
  const onColorChangedHandler = (
    fillTop: string,
    fillMiddle: string,
    fillBottom: string
  ) => {
    setLollyData(prev => {
      return { ...prev, fillTop, fillMiddle, fillBottom }
    })
  }
  const onFormSubmittedHandler = (
    recipientName: string,
    message: string,
    senderName: string
  ) => {
    setLollyData(prev => {
      return { ...prev, recipientName, message, senderName }
    })
    setOnFormSubmitted(true)
  }
  useEffect(() => {
    if (onFormSubmitted) {
      console.log(lollyData)
    } else return
  }, [onFormSubmitted])
  return (
    <>
      <div className={classes.header}>
        <h4>Lolly Maker</h4>
      </div>
      <div className={classes.root}>
        <div className={classes.container}>
          <LollyMaker onColorChanged={onColorChangedHandler} />
          <div className={classes.formContainer}>
            <Form onFormSubmit={onFormSubmittedHandler} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
