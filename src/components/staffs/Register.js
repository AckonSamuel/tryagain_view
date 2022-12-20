import React, { useState, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "./../../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

let passholder = '';

const vpasswordconfirmation = (value) => {
    if(value !== passholder ) {
        return (
            <div className="alert alert-danger" role='alert' >
                Passwords do not match!
            </div>
        );
    }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

//   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [role, setRole] = useState('');
  const [staff_name, setSaffName] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message, shallowEqual );
  const dispatch = useDispatch();

//   const onChangeUsername = (e) => {
//     const username = e.target.value;
//     setUsername(username);
//   };

  const onChangeStaffName = e => {
    const staff_name = e.target.value;
    setSaffName(staff_name);
  };

  const onChangeRole = e => {
    const role = e.target.value;
    setRole(role);
  };

  const onChangePasswordConfirmation = e => {
    const password_confirmation = e.target.value;
    setPasswordConfirmation(password_confirmation);
  };

  const onChangePhoneNumber = e => {
    const phone_number = e.target.value;
    setPhoneNumber(phone_number);
  }

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    passholder = password;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(staff_name, email, phone_number, password, role, password_confirmation))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="staff-name">Staff Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="staff-name"
                  value={staff_name}
                  onChange={onChangeStaffName}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password-confirmation">Password Confirmation</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password-confirmation"
                  value={password_confirmation}
                  onChange={onChangePasswordConfirmation}
                  validations={[required, vpasswordconfirmation]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <Input
                  type="number"
                  className="form-control"
                  name="phone-number"
                  value={phone_number}
                  onChange={onChangePhoneNumber}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <Input
                  type="text"
                  className="form-control"
                  name="role"
                  value={role}
                  onChange={onChangeRole}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
