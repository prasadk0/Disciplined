import { useEffect } from "react"

export default function Snackbar(props) {
    useEffect(() => {
      const timer =   setTimeout(() => {
            props.snackbarHandler(false);
        }, 1000)

        return ()=> clearTimeout(timer)
    }, [])
    return (
        <>
            <div id="snackbar" className="fixed top-8 right-8 bg-gray-500 text-white text-center py-2 px-4 rounded opacity-100 visible transition-all duration-500">
                {props.message}
            </div>
        </>
    )
}