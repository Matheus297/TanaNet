import React from 'react';
import { View, ActivityIndicator } from 'react-native';


//Routes

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';



const Routes = () => {
    const signed = false;
    const loading = false;


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#36393f' }}>
                <ActivityIndicator size={30} color={'#E52246'} />
            </View>
        )
    }


    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}



export default Routes;