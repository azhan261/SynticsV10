import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function TeacherDashboard() {
   

    const location = useLocation();
    useEffect(() => {
      const fetchItems = async function() {
       console.log('yo')
       
      }
      fetchItems()
      
    }, []);
    return (
        <div>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className='text-center display-2 my-3' style={{ color:'#33334d', fontWeight:'900' }}></h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
      <h6 className="m-0 font-weight-bold text-center text-white"> Welcome {location.state.name}!</h6>
    </div>
  </div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
        </div>
    )
}

export default TeacherDashboard
