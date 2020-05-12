import React,  {useState, useEffect, useCallback, useMemo} from 'react';


const App = () => {
    const [value, setvalue] = useState(1);
    const [visible, setVisible] = useState(true);

    if(visible){
        return(
            <div>
                <button  onClick={() => setvalue((v) => v + 1)}>+</button>
                <button  onClick={() => setVisible(false)}>hide</button>
                <PlanetInfo  id={value} />
            </div>
        );
    }else{
        return <button onClick={() => setVisible(true)}>show</button>
    }

};


 const getPlanet = (id) => {
   return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then(res => res.json())
    .then(data => data);
 };







 const useRequest = (request) => {
     const initalState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
     }), []);

    const [ dataState, setDateState ] = useState({initalState});

    useEffect(() => {
        setDateState(initalState)
        let cancelled = false;
        request()
        .then(data => !cancelled && setDateState({
            data,
            loading: false,
            error: null
        }))
        .catch(error => !cancelled && setDateState({
            data: null,
            loading: false,
            error
        }))
        return () => cancelled = true;
    }, [request, initalState]);

    return dataState;

 }






 
const usePlanetInfo = (id) => {
    const request = useCallback(
        () => getPlanet(id), [id] );
   
    return useRequest(request);
  
};






const PlanetInfo = ({id}) => {

  const {data, loading, error} = usePlanetInfo(id);

  if(error){
      return <div>Something is wrong</div>
  }
  if(loading){
      return<div>...Loadging</div>
  }

  return(
    <div>{id} - {data && data.name}</div>
  )

}




export default App;