import React from 'react';
import {ApiurlB} from '../services/apirest';
import axios from 'axios';


class List extends React.Component{
    state={
bookings:[],


    }
    componentDidMount(){
        let url= ApiurlB ;
        const config = { headers: {'Content-Type': 'application/json','app': 'APP_BCK','adminemail':localStorage.getItem('adminemail'),'token':localStorage.getItem('token')	} };
        axios.get(url ,config).then(response => {
            console.log(response);
            this.setState({
                bookings:response.data
            })
     	
			});
			
    }
    render(){
        return(
            <React.Fragment>
<div className="container">

<table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">BookingId </th>
      <th scope="col">Cliente</th>
      <th scope="col">Fecha de Creación</th>
      <th scope="col">Dirección</th>
      <th scope="col">Precio</th>
  
    </tr>
  </thead>
  <tbody>
      {this.state.bookings.map((value,i)=>{
            return(
                <tr key={i}>
                <td>{value.bookingId}</td>
                <td>{value.tutenUserClient.firstName} {value.tutenUserClient.lastName}</td>  
                <td>{value.bookingTime}</td>
                <td>{value.locationId.streetAddress}</td>
                <td>{value.bookingPrice}</td>
           
                </tr>
            )
      })
    }
 
  
  </tbody>
</table>


</div>
            </React.Fragment>
        );
    }
}
export default List