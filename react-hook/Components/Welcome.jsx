import React, {useLayoutEffect, useRef} from "react";
import { FadeAnimation } from "./animate";

function Welcome(props){
    const ref = useRef(null)

    useLayoutEffect(() => {
        const anim= new FadeAnimation(ref.current)
        anim.start(2000)
        return () => {
            anim.stop()
        }
    },[])
    return(
        <div ref={ref} style={{opacity: 0,
                             color: '#ffff',
                             padding: 50,
                             textAlign: 'center',
                             fontSize: 50,
                             backgroundImage: `radial-gradient(circle,slateblue 0%,orange,green)`}}>
           <h1>welcome to Animation</h1>
        </div>
    )
}

export default Welcome 