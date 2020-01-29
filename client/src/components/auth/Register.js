import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'user already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    pass: '',
    pass2: ''
  });
  const { name, email, pass, pass2 } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || pass === '') {
      setAlert(' not enough info', 'danger');
    } else if (pass !== pass2) {
      setAlert(" passwords don't match", 'danger');
    } else {
      register({ name, email, pass });
    }
  };
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            name='pass'
            value={pass}
            onChange={onChange}
            required
            minLength='6'
          />
          <label htmlFor='pass2'>Confirm Pass</label>
          <input
            type='password'
            name='pass2'
            value={pass2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};
export default Register;
