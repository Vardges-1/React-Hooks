import React, { useState } from 'react';



const HookSwitcher = () => {


const [ color, setColor ] = useState('gray');
const [ fontSize, setFontSize ] = useState(12);




    return(
        <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
            Hello Eshnoc
           <button  onClick={() => setColor('gray')}>Dark</button>
           <button  onClick={() => setColor('white')}>Light</button>
           <button  onClick={() => setFontSize((s) => s + 2 )}>+</button>

        </div>
    )
}


function  App() {
    return (
        <div>
            <HookSwitcher/>
        </div>
    );
}



export default App;
