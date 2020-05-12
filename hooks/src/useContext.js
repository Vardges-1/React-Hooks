import React, { useContext } from 'react';

const MyContext = React.createContext();


const App = () => {

    return(
        <MyContext.Provider  value="Hello World 123">
            <Child />
        </MyContext.Provider>
    );
};


const Child = () => {
    const value = useContext(MyContext)

       return(
       <p>{value}</p>
       );

    // return(
    //     // <MyContext.Consumer>
    //     //     {(value) => {
    //     //         return(
    //     //             <p>{value}</p>
    //     //         )
    //     //     }}
    //     // </MyContext.Consumer>
    // )
}


export default App