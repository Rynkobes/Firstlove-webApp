import React from 'react'
import {withFormik, Form, Field} from 'formik'
import  Yup from 'yup'

const FormikApp = ({
    errors,
    touched
}) => (
    <div>
        <Form>
            
            <h3>Church Details:</h3>
                <div>
                { touched.name && errors.name && <p>{errors.name}</p> }
                <Field name='name' type='name'
                 text='text' placeholder='Name'  /></div>
                <Field name="location" text='text' placeholder='Location'/><br/> 
               <button type='Submit'>Submit</button>
           
        </Form>
    </div>
)

const AddChurch = withFormik({
    mapPropsToValues({ name, location }){
        return {
            name: name || '',
            location: location || ''
        }
    },
    handleSubmit(values){
        console.log(values)
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required')
    })
})(FormikApp)

export default  AddChurch