import React from "react";

// inside your css class nsertion through custom hooks
let isInserted = new Set();

// custom hook
function useCss(rule){
    useInsertionEffect(() => {
        // as explained earlier, we dont recommend runtime injection of style tags,
        // but if you have to do  it, it's important  to do in useInsertionEffect hook
        if(!isInserted.has(rule)){
            isInserted.add(rule)
           // document.head.appendChild(getstyleForRule(rule))
        }
    })
    return rule;
}

function page8(){

    const cls = useCss(`container success`)

    return(
        <div className={cls}>
            <h1>useInsertionEffect</h1>

            <p>fires before react makes changes to the DOM.
                eg: libraries can insert dynamic css here
            </p>

        </div>
    )
}

export default page8;