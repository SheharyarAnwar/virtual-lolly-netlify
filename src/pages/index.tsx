import React from "react"
import Form from "../Components/Form"
import LollyMaker from "../Components/LollyMaker"
import classes from "./index.module.css"
const Index = () => {
  return (
    <>
      <div className={classes.header}>
        <h4>Lolly Maker</h4>
      </div>
      <div className={classes.root}>
        <div className={classes.container}>
          <LollyMaker />
          <div className={classes.formContainer}>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
