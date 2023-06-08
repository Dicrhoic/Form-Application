import React from 'react';
import { useAuthentication } from '../firebase/AuthenticationHook';
import AccountPage from './AccountPage';
import SignInScreen from './SignInPage';

export default function LoginIndex()
{
    const { user } = useAuthentication();

    return (
        user ? <AccountPage></AccountPage> : <SignInScreen></SignInScreen>
    );
}