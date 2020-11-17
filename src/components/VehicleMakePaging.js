import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {observer, inject} from 'mobx-react';
import '../App.css'

class VehicleMakePaging extends Component {


     render() {
         const changePage = (num) => {
            const pageNum = this.props.VehicleMakeStore.page + num;
            this.props.VehicleMakeStore.setPage(pageNum);
            this.props.VehicleMakeStore.getMakesAsync();
         }
         return(
             <div className="container">
                 <Button className="page-button-prev"
                 onClick={() => changePage(-1)}
                 disabled={this.props.VehicleMakeStore.page === 1}
                 >&laquo;</Button>

                 <p className="page-text">PAGE: {this.props.VehicleMakeStore.page}</p>

                 <Button className="page-button-next" onClick={() => changePage(1)}>&raquo;</Button>
             </div>
         )
     }

}

export default inject("VehicleMakeStore")(observer(VehicleMakePaging));