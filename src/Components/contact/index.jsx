import React, {useState} from 'react';
import axios from 'axios'
import contactImg from "../../images/contact.png";
import { Field, Form, Formik } from 'formik';
import { RotatingLines } from  'react-loader-spinner'

import "./contact.scss";
export default function Index() {
    const [loading, setLoading] = useState(false)

    return (
        <section className="deneb_contact contact_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deneb_img_box">
                            <img src={contactImg} className="img-fluid" alt="contact" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_title">
                            <h2>Let's achieve together</h2>
                            <p>
                              Your'e ready to begin making an impact, just say hello!
                            </p>
                        </div>
                        {/* <form>
                        <iframe src="https://cdn.forms-content.sg-form.com/10c8eb0f-ccc8-11ed-8717-4ef22155a0bd"/>
                        </form> */}
                        <div className="contact_form">
                            <Formik
                                initialValues={{ 
                                  first_name: '', 
                                  last_name: '', 
                                  email_address: '', 
                                  phone_number: '',
                                  user_message: ''
                                 }}
                                onSubmit={ async (values, actions) => {
                                    try{
                                        setLoading(true)
                                        const response = await axios.post('http://localhost:5000/user/saveUserContactInfo', values)
                                        if(response.data?.status === 'success'){
                                            setLoading(false)
                                        }
                                    } catch(err){
                                        console.error("sendgridresponse====err",err)
                                        setLoading(false)
                                    }
                                    actions.resetForm()

                                    // actions.setSubmitting(false);
                                    // actions.resetForm()
                                    // setTimeout(() => {
                                    //     // alert(JSON.stringify(values, null, 2));
                                        
                                    // }, 1000);
                                }}
                            >
                                {() => (
                                    <Form>
                                       <div className="row">
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="first_name"
                                                     className="form_control"
                                                     placeholder="First Name"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="last_name"
                                                     className="form_control"
                                                     placeholder="Last Name"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="email"
                                                     name="email_address"
                                                     className="form_control"
                                                     placeholder="Email Address"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="number"
                                                     name="phone_number"
                                                     className="form_control"
                                                     placeholder="Phone No"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-12">
                                               <div className="form_group">
                                                   <Field
                                                     as="textarea"
                                                     name="user_message"
                                                     className="form_control"
                                                     placeholder="Message"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                            <div className="col-lg-12">
                                                <div className="button_box">
                                                <button className="deneb_btn" disabled={loading}>
                                                    <RotatingLines
                                                    style={{paddingRight: '10px'}}
                                                    strokeColor="white"
                                                    strokeWidth="5"
                                                    animationDuration="0.75"
                                                    width="30"
                                                    visible={loading}
                                                    />&nbsp;
                                                    Submit Now &nbsp;
                                                </button>
                                                </div>
                                            </div>
                                       </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
