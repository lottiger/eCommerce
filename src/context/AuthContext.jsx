import { createContext, useContext ,useEffect ,useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    useEffect(() => {
        if(token) localStorage.setItem('token', token)
        
        }, [token])



    const register = async (firstName, lastName, email, password, confirmPassword) => {
        
        try{ 
            const response = await fetch('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName, email, password, confirmPassword})
            })
            console.log(response)
        if(response.status !== 201) {
            throw new Error('Cannot register user, please try again.')
        }
    
        const data = await response.json()
        setToken(data.token)
        return {success: 'User registered'}

     } catch (error){
            return {error: error.message}
        }
        }
       
      
    const login = async (email, password) => {
        try{ 
            const response = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
            })

            console.log(response)
            const data = await response.json()
            console.log(data)

        if(response.status !== 200) {
            throw new Error('Cannot login user')
        }
    
        setToken(data.token)
       
      
       
        return {success: 'User logged in'}

     } catch (error){
            return {error: error.message}
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)

    }
        const value = {
            token,
            register,
            login,
            logout
        }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthContextProvider')
    }
    return context
}