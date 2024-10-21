'use client'

import {useEffect, useState} from "react";
import {ThemeProvider} from "next-themes";

const Provider = ({children}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);
    if (!mounted){
        return <>{children}</>
    }
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}
export default Provider