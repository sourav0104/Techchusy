import React, { Component, Fragment } from 'react';
import Table from './Component/AddTable/Table';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Table />
            </Fragment>
         );
    }
}
 
export default App;