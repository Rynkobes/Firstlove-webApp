import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { withFormik, Form, Field} from 'formik'

import Yup from 'yup'
import '../components/login.css'

const FormikLogin =({
    errors,
    touched,
    isSubmitting
}) => {
    return(
     
        <div className= "loginBody">
        <Form className="form">
        <fieldset className='fieldset'>
        <img  alt='UD_logo' height="55"/>
        <h4 className="h4">Need an Account? Click here.</h4>
        <div>{touched.email && errors.email && <p>{errors.email}</p>}
        <Field className="input"
            name='email'
            type='text' 
            placeholder="Email Address"
            /><br/></div>
            <div>
            {touched.password && errors.password && <p>{errors.password}</p> }
        <Field className="input"
            name='password'
            type='password' 
            placeholder="Password"
            /><br/>
            </div>
        <br/>
        <button disabled={isSubmitting}
            className="button" 
            >
        LOGIN 
            <FontAwesomeIcon  icon={ faSignInAlt} />
        </button>
            <p >Forgot your password ? Click here</p> 
        </fieldset>
        </Form>
        </div>
    )  
}

const Login = withFormik({
    mapPropsToValues({email, password}){
        return{
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(6, 'Password should be a min of 6 characters').required('Password is required')
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}){
        setTimeout(()=> {
            if(values.email  === ''){
                setErrors({email: 'This email is already taken'})
            } else{
                resetForm()
            }
            setSubmitting(false)
        }, 2000)
    }
}) (FormikLogin)

export default Login