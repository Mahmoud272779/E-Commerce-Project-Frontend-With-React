import NavBar from "./comps/NavBar"
import CardDetails from "./comps/CardDetails"
import img1 from './imgs/ff.jpg'
import img2 from './imgs/grad.jpg'
import img3 from './imgs/abas.jpg'
const App=()=>{

  const data=[{title: "tit1", des:"des1",img:img1},
              {title: "tit222", des:"des22",img:img2},
              {title: "tit33", des:"des33",img:img3}];

              const ff=(msg)=>{
                console.log("u in "+msg);
              }

  return(<div>
<NavBar/>
{
  data.map((item) =>{
    return <CardDetails title={item.title} des={item.des} img={item.img }  />

})
}


  </div>)
    
  
  }

  export default App