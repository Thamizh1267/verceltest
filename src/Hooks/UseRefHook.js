import React, {useRef} from 'react';

function UseRefHook(){
    const inputRef = useRef(null);
    const handleFocus = () => {
        if(inputRef.current){   // Mutable
            inputRef.current.focus();
        }
    };
    
    return(
       <div>
            <h1>Hello</h1>
            <input ref={inputRef} type='text' placeholder='Click Me'/>
            <button onClick={handleFocus}>Focus the Input</button>
        </div>
    )
};
export default UseRefHook;