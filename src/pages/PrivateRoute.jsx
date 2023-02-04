import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// will remove later
// import { useUserContext } from '../context/user_context';
import { useUserContext } from '../context/user_context';
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useUserContext()
    return <Route {...rest} render={() => {
        return user ? children : <Redirect to='/' />
    }}></Route>
};
export default PrivateRoute;