import React, { useEffect, useState } from 'react';
import axios from 'axios';
const SubHeader: React.FC = () => {

const [hoveredSportsOption, setHoveredSportsOption] = useState(false);
const [sportsOptions, setSportsOptions] = useState<any[]>([]);

useEffect(()=>{
    const fetchData = async()=>{
        await axios.get('https://684991a345f4c0f5ee7207c7.mockapi.io/viagogo/concerts')
        .then((res) => {
          console.log("res2",res);
          setSportsOptions(res.data)
        })
        .catch((err) => {   
          console.error(err);
        });
    }
    fetchData();

},[])
console.log("res1",sportsOptions);


    return (
        <div>
<div className='flex justify-center'>
<div className="m-2 flex-1">Sports</div>
        <div className="m-2 flex-1" onClick={()=>setHoveredSportsOption(!hoveredSportsOption)}>Concerts</div>
        <div className="m-2 flex-1">Theater</div>
        <div className="m-2 flex-1">Cities</div>
</div>

{hoveredSportsOption && sportsOptions.map((item)=>{
    return(
          <div className="" style={{top:"110px", right:"240px"}} key={item.id}>
                {item.concertName}
          </div>
    )
})}
</div>
    );
};

export default SubHeader;