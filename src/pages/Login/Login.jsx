import React, {useState, useRef} from 'react';
import { FormInput, Button } from 'components'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const submitHandler = event => {
        event.preventDefault();
        console.log(email, password);
    }

    
  return (
    <form className='form' onSubmit={submitHandler} style={{ marginTop: '100px' }}>
       
        <FormInput 
            label='Email:'
            id="email"
            change={setEmail} 
            cont={email}
            type='email'
        />
        <br />
        <FormInput 
            label='Pasword:'
            id="password"
            change={setPassword} 
            cont={password}
            type='password'
        /><br />
        {/* <div className="form-gruop">
            <label htmlFor="email">email login</label>
            <input type="text" id='email' onChange={ e => setEmail(e.target.value)} />
            
        </div> */}

        <Button type='submit' text='Submit' variant='primary' />

        
    </form>
  )
}

export default Login