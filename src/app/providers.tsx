'use client'
import {SessionProvider} from 'next-auth/react'


interface Props{

    children : React.ReactNode
}

function Providers( {children} : Props ) {

    return(
    <SessionProvider>
        {/*Código que renderiza los componentes que necesitan acceso a la sesión*/}
         {children}
    </SessionProvider>)

}
export default Providers