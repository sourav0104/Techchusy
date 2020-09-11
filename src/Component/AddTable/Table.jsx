import React, { Component, Fragment } from 'react';
import './Table.css';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            age:'',
            salary:'',
            result:[]
         }
    }

    componentDidMount=()=>{
        this.setState({name:'',age:'',salary:''});
        let myData={
            name:this.state.name,
            age:this.state.age,
            salary:this.state.salary,
        };

        window.fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(data=>{
            data.json().then((res)=>{
                console.log(res);
                this.setState({result : res.data[0]})
            }).catch(err=> console.log(err));
        }).catch(err=>console.log(err));


    }


    render() { 
        return ( 
            <Fragment>
            <section id="main">

            <div className="container">
            <a href="" className="btn btn-primary btn">Add employee</a>     
            <input type="text" className="form-control" placeholder="Search Employee" aria-label="Username" aria-describedby="addon-wrapping" />   
            </div>   

            <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tiger Nixon</td>
            <td>61</td>
            <td>320800</td>
            <td>
                <button className="btn btn-primary btn1">view</button>
                <button className="btn btn-success btn1">Edit</button>
            </td>
         </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Garrett Winters</td>
            <td>63</td>
            <td>170750</td>
            <td>
                <button className="btn btn-primary btn1">view</button>
                <button className="btn btn-success btn1">Edit</button>
            </td>
         </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row">3</th>
            <td>Ashton Cox</td>
            <td>66</td>
            <td>86000</td>
            <td>
                <button className="btn btn-primary btn1">view</button>
                <button className="btn btn-success btn1">Edit</button>
            </td>
         </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row">4</th>
            <td>Cendric Kelly</td>
            <td>22</td>
            <td>433060</td>
            <td>
                <button className="btn btn-primary btn1">view</button>
                <button className="btn btn-success btn1">Edit</button>
            </td>
         </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row">5</th>
            <td>Airi Satou</td>
            <td>33</td>
            <td>162600</td>
            <td>
                <button className="btn btn-primary btn1">view</button>
                <button className="btn btn-success btn1">Edit</button>
            </td>
         </tr>
        </tbody>
     </table>

     <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>    
           
           
            </Fragment>
         );
    }
}
 
export default Table;