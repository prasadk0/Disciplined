import { useEffect } from "react"

export default function Snackbar(props) {
    useEffect(()=>{
    setTimeout(()=>{
        props.snackbarHandler(false);
    },1000)
    },[])
    return (
        <>
          <div id="snackbar" className="fixed top-8 right-8 bg-green-600 text-white text-center py-2 px-4 rounded opacity-100 visible transition-all duration-500">
  {props.message}
</div>

        </>
    )
}