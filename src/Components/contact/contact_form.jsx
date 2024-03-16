import React, {useState} from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { RotatingLines } from  'react-loader-spinner'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    return (
        <section className="deneb_contact cantact_v2 section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title">
                            <h2>Let's achieve together</h2>
                            <p>
                              Your'e ready to begin making an impact, just say hello!
                            </p>
                        </div>
                        <div className="contact_form">
                            <Formik
                                initialValues={{ 
                                    first_name: '', 
                                    last_name: '', 
                                    email_address: '',
                                    phone_number: '',
                                    project_title: '',
                                    selected_option: '',
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
                                    //     console.log(JSON.stringify(values, null, 2));
                                    //     actions.setSubmitting(false);
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
                                                      placeholder="First name"
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
                                                      placeholder="Last name"
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
                                                      placeholder="Email"
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
                                                      placeholder="Phone"
                                                      required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <Field 
                                                      type="text"
                                                      name="project_title"
                                                      className="form_control"
                                                      placeholder="Project Title"
                                                      required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <Field name="selected_option" as="select">
                                                        <option value="">Choose Service</option>
                                                        <option value="design">Web & Graphic Design</option>
                                                        <option value="development">Apps And Web Development</option>
                                                        <option value="marketing">SEO and marketing</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <Field
                                                      as="textarea"
                                                      name="user_message"
                                                      className="form_control"
                                                      placeholder="Your Message"
                                                      required
                                                    />
                                                </div>
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
