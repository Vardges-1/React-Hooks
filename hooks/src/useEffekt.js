import React,  {useState, useEffect} from 'react';


const App = () => {
    const [value, setvalue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible){
        return(
            <div>
                <button  onClick={() => setvalue((v) => v + 1)}>+</button>
                <button  onClick={() => setVisible(false)}>hide</button>
                <HookCounter value={value} />
            </div>
        );
    }else{
        return <button onClick={() => setVisible(true)}>show</button>
    }

};



//clear past effect when next effect is called

const HookCounter = ({ value }) => {

useEffect(() => {
    console.log('Esh');

    return () => console.log('clear')
}, [value]);


return <p>{value}</p>

}


export default App;