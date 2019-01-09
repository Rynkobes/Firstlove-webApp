import React from 'react'
import {withFormik, Form, Field} from 'formik'
import './member.css'

const FormwikAddMember =({
    errors,
    touched
}) => {
        return(
    <div>
           <Form className='form'>
           <fieldset className='fieldset'>
            <h3>Add New Member</h3>
           <div>
           {touched.name && errors.name && <h6>{errors.name}</h6>}
           <label className='label'>Name:
           <Field name="name" text='text' className="field" /></label>
           </div>
           
           <div>
           {touched.phoneNumber && errors.phoneNumber && <h6>{errors.phoneNumber}</h6>}
           <label>PhoneNumber:
           <Field name="phoneNumber" text='tel' className="field" /></label></div>

           <div>
           {touched.profession && errors.profession && <h6>{errors.profession}</h6>}
           <label className='label'>Profession:
           <Field name="profession" text='text' className="field" /></label></div>
           

           {touched.dob && errors.dob && <h6>{errors.dob}</h6>}
           <label>Date of Birth:
           <Field name="dob" text='date' type='date' className="field" /><br/></label>

           <label>Gender:
           <Field component='select' className='select' name='gender'>
                   <option value="Male">Male</option>
                   <option value="Female">Female></option>  
           </Field>
           </label>
           <label>Marital Status:</label>
           <Field component='select' name='maritalStatus'>
                   <option value="Single">Single</option>
                   <option value="Married">Married</option>
           </Field>
           </fieldset>
            </Form>
     </div>
)}

const AddMember = withFormik({
    mapPropsToValues({ name, phoneNumber, profession, dob, maritalStatus, gender}){
        return {
        name: name || '',
        phoneNumber: phoneNumber || '',
        profession : profession || '',
        dob: dob || '',
        gender: gender || 'Male',
        maritalStatus: maritalStatus || 'Single',
        };
    }, 
    

    handleSubmit(values){
        console.log(values)
    }
 })(FormwikAddMember)
export default AddMember