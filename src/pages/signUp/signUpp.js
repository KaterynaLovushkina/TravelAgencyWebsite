import React, {useState} from 'react';
import { Form,Formik, useFormik} from "formik";
import * as Yup from 'yup'
import {Link, useNavigate} from "react-router-dom";
import TextField from "../../components/form/TextField";
import {DownPart} from "../home/homeElements";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import {toast} from "react-toastify";
import {Button, Card, Col, Container,  Row} from "react-bootstrap";


const SignUp = () => {


    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(2,'The name is too short')
            .required("Required"),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                'Email is invalid'
            )
            .required("Email is required"),
        password: Yup.string()
            .min(6,'Password must be at least 6 characters')
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm password is required")
    })

    const navigate = useNavigate();
    const handleSubmit = (val) =>{
        // console.log(val)
        localStorage.setItem("user", JSON.stringify(val))
        toast.success(`Account successfully created`, {
            position: 'top-left'
        })
        navigate("/signIn")
    }

    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={5} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h3 className="fw-bold pb-3">Create your account</h3>
                                    <div className="mb-3">
                                        <Formik initialValues={{
                                            username: '',
                                            email: '',
                                            password: '',
                                            confirmPassword: '',
                                        }}
                                                validationSchema={validate}
                                                onSubmit={values => {

                                                    handleSubmit(values)
                                                    // navigate("/success")
                                                }}

                                        >
                                            {formik => (

                                                <div>
                                                    <Form className={"d-grid gap-3"}>
                                                        <TextField label={"User Name"} name={'username'} type={'text'}></TextField>
                                                        <TextField label={"Email"} name={'email'} type={'email'}></TextField>
                                                        <div className="d-flex flex-row justify-content-sm-between">
                                                            <TextField label={"Password"} name={'password'} type={'password'}></TextField>
                                                            <TextField label={"Confirm Password"} name={'confirmPassword'} type={'password'}></TextField>
                                                        </div>
                                                        <div style={{margin: "auto"}}>
                                                            <Button   variant="primary" type="submit"
                                                                      style={{margin: "1.4rem 8rem 0.6rem 8rem ", width: '150px'}}
                                                            >Register
                                                            </Button>
                                                        </div>
                                                        <div className={"text-center fs-5"}>
                                                            <p className={"d-inline p-xl-4"}>Already have an account?</p>
                                                            <Link className={" d-inline text-decoration-none"} to ="/signIn">Sign in</Link>
                                                        </div>
                                                    </Form>
                                                </div>)}
                                        </Formik>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
        </>
    );

};

export default SignUp;