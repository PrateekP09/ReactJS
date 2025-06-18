import React from "react";

function page7() {
    return(
        <div className="container">
            <div className="title">
            <h3>useLayoutEffect</h3>
        </div>

        <div className="blk">
            <button className={show  ? "btn danger" :"btn success"} onClick={() => setShow(!show)}>
                {show? "Remove" : "show"}
            </button>
        </div>
        <div className="blk">
            {show && <Welcome/>}
        </div>
    </div>
    )
}

export default  page7