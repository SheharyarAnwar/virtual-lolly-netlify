import React from "react"
import { Formik, Form } from "formik"
import { yupValidationSchema } from "./../../Validation/schema"
import TextField from "../TextField"
import classes from "./index.module.css"
const Index = () => {
  return (
    <>
      <Formik
        initialValues={{ recipientName: "", message: "", senderName: "" }}
        initialErrors={{ message: "Required" }}
        validationSchema={yupValidationSchema}
        onSubmit={values => console.log(values)}
      >
        <Form className={classes.form}>
          <TextField name="recipientName" placeholder="Recipient Name" />
          <TextField name="message" />
          <TextField name="senderName" placeholder={"Sender Name"} />
          <button type="submit">Create Lolly</button>
        </Form>
      </Formik>
    </>
  )
}

export default Index
