import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const ProtectedRoute = ({children}) => {
    const [authState, setAuthState] = useState('checking')

    useEffect(() => {
        console.log('1. got here')
        axios.get('http://localhost:3001/api/check_auth', 
            {withCredentials: true}).then(() =>  {
                console.log('2 1/2. got to Authed section')
                setAuthState('authed')})
            .catch(() => 'unauthed')
    }, [])

    if(authState == 'checking') return <p>loading...</p>
    if(authState == 'unauthed') return <Navigate to='/login' replace/>

    return children
}

export default ProtectedRoute