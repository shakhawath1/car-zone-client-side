import React from 'react';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    let errorElement;

    if (googleLoading) {
        return <Loading></Loading>
    }

    if (googleError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message}</p>
    }

    if (googleUser) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>

                {/* google signin button  */}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 min-vw-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;