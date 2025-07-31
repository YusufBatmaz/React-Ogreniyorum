import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchema } from '../schemas/RegisterFormSchemas';

function RegisterForm() {
    const{values,errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
          terms: false
        },
        validationSchema: registerFormSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Email giriniz.</label>
                <input type="text" id="email" name="email" placeholder='Email giriniz.'
                value={values.email}
                onChange={handleChange}/>
                {errors.email && <p className='input-error'>{errors.email}</p>}
            </div>
            <div className='form-group'>
                <label htmlFor="age">Yaşınızı giriniz.</label>
                <input type="number" id="age" name="age" placeholder='Yaşınızı giriniz'
                value={values.age}
                onChange={handleChange}/>
                {errors.age && <p className='input-error'>{errors.age}</p>}
            </div>
            <div className='form-group'>
                <label htmlFor="password">Şifrenizi giriniz.</label>
                <input type="password" id="password" name="password" placeholder='Şifrenizi giriniz'
                value={values.password}
                onChange={handleChange}/>
                {errors.password && <p className='input-error'>{errors.password}</p>}
            </div>
            <div className='form-group'>
                <label htmlFor="confirmPassword">Şifrenizi tekrar giriniz.</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Şifrenizi tekrar giriniz'
                value={values.confirmPassword}
                onChange={handleChange}/>
                {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
            </div>
            <div className='form-group'>
                <input type="checkbox" id="terms" name="terms" style={{width: '20px', height: '12px'}}
                value={values.terms}
                onChange={handleChange}/>
                <label htmlFor="terms">Kullanıcı sözleşmesini kabul ediyorum.</label>
                {errors.terms && <p className='input-error'>{errors.terms}</p>}
            </div>
            <div className='form-group'>
                <button type='submit'>Kayıt ol</button>
            </div>

        </form>
    </div>
  )
}

export default RegisterForm