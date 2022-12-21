import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { staffLogin } from '../../redux/slices/loginSlice';

export default function Login() {
    const { register, getValues, handleSubmit } = useForm();
    let navigate = useNavigate();
    // const check = true;
    // const [loading, setLoading] = useState(false);
    // const authr = useSelector(state => state.auth, shallowEqual);
    // const {message} = useSelector(state => state.message, shallowEqual);

    const dispatch = useDispatch();

    const showdata = () => { 
        const data = getValues();
        dispatch(staffLogin(data));
        // if(check) {
        //     dispatch(login(data))
        //     .then(() => {
        //         navigate('/');
        //         window.location.reload();
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         alert(err.message);
        //     });
        // } else {
        //     setLoading(false);
        // }
    };

    const staff_data = useSelector(state => state.staff.staff.id);
    const stateLoading = useSelector(state => state.staff.loading);

    return (
        <>
        <form onSubmit={handleSubmit(showdata)}>
            <input {...register('email')} />
            <input {...register('password')} />
            <input type='submit' value='login' />
        </form>
        <div><h1>{staff_data ? staff_data.role : 'hello'}</h1></div>
        </>

    );
}
