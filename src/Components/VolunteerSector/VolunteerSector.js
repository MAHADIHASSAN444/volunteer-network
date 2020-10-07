import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import totalSector from '../fakeData/totalSector';


const VolunteerSector = () => {
    const {_id }= useParams();

const [sector, setSector] = useState([]);
useEffect(() => {
    fetch('https://protected-refuge-27148.herokuapp.com/sector')
    .then(res =>res.json())
    .then(data => setSector(totalSector)) 

} ,[])

        

    return (

        <Row>
        {
            sector.map(sector =>
                <Col md={4} sm={4} key={sector._id}>
                    <img src={sector.image} className="card-img w-100" alt="..." />
                    <Link to={`/registration/${sector._id}`}><h5 className="bg-primary text-white p-3 rounded " >{sector.name} </h5></Link>
                </Col>
            )
        }
    </Row>


        // <div className="row">
        //     {
        //         sector.map(sector => 
        //          <div className="col-md-3" key={sector._id}>
        //              <img src={sector.image} className="card-img" alt="..."/>

        //          </div>   
                    
                    
        //         )
        //     }

        // </div>


        // <div className="row">
        //     {
        //         sector.map(sector => 
        //             <div className="col-md-3" key ={sector._id}>
        //                 <img src={sector.image} className="card-img" alt="..."/>
        //                 <Link to = {"/registration"}><h3 className="bg-primary text-white p-3 rounded"> {sector.name}</h3></Link>

        //             </div>

        //         )
        //     }
            
        // </div>
    );
};

export default VolunteerSector;