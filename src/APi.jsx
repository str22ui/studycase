import { useState,useEffect } from "react";
const URL = `http://api.weatherapi.com/v1/current.json?key=188dc82421fc44d
195d34719242502&q=Tokyo&aqi=no`;
function Api() {
    const [temp, setTemp] = useState(0)
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await fetch(URL)
            result.json().then(json =>{
                setTemp(json.current.temp_c)
                console.log(json);
            })
        }
        fetchData();
        }, []);

return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md"> 
        <h1 className="text-3xl font-bold mb-4">Weather in Tokyo</h1>
        <div className="flex items-center">
          <span className="text-5xl font-bold mr-2">{temp}</span>
          <span className="text-2xl">°F</span>
        </div>
      </div>
    </div>
  );
}
export default Api;






















// return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-md">
//         <h1 className="text-3xl font-bold mb-4">Weather in London</h1>
//         <div className="flex items-center">
//           <span className="text-5xl font-bold mr-2">{temp}</span>
//           <span className="text-2xl">°F</span>
//         </div>
//       </div>
//     </div>
//   );