import React,  {useState, useEffect} from 'react';


const App = () => {
    const [value, setvalue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible){
        return(
            <div>
                <button  onClick={() => setvalue((v) => v + 1)}>+</button>
                <button  onClick={() => setVisible(false)}>hide</button>
                <Notification  />
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
    return () => console.log('unmount');
}, []);


return <p>{value}</p>

}




// solution to the problem The state update reaction on a disabled componentconst 
Notification = () => {

   const [visible, setVisible] = useState(true);

   
   useEffect(() => {
   const timeout = setTimeout(
       () => setVisible(false), 2500);
   }, []);

    return(
         <div>
             {visible &&
                 <p>Hello</p> }
         </div>
    )
}



export default App;