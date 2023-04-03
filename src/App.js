import React,{ useState } from 'react';
import Items from './Items';


function App() {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID='090a322a';
  const YOUR_APP_KEY='0cd3b75c4e975a6f6fa52722b87b66ea';
  const submitHandler= e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response=> response.json()
    ).then(
      data=>setData(data.hits)
    )
  }
  return (
   <div style={{"background-color":"black"}}>
    <center>
      <h4  style={{'color':'darkseagreen'}}>Food Recipe</h4><br/>
      <form onSubmit={submitHandler}>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} /> <br/><br/>
        <input type='submit' className='btn btn-primary' value='Search'/>
      </form><br/>
      {data.length>=10 ? <Items data={data} />:null}
    </center>
   </div>
  );
}

export default App;
