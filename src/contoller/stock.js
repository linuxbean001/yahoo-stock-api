import React, { Component } from 'react';
import AllService from '../service/service'
const yahooAPI = new AllService();

class StockClass extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          AllData:''

         } 
        this.getStock = this.getStock.bind(this);
    }


    componentDidMount(){
        this.getStock();
      }
      
      getStock() {
        yahooAPI.getStockInfo()
              .then(res => {
                console.log('yessss:',res);
                this.setState({
                    AllData:res
                  })
              }).catch(err => {
                  console.log('xxxxxxx xxxx ', err);
              });
   
      }



   
  

  render() {
    return (
         <div className="Stock-section">
             <h2 style={{'textAlign':'center'}}>Here is stock...</h2>
            <div className="yourData">  
            <pre>{JSON.stringify(this.state.AllData, null, 2) } </pre>
            </div>
         </div>
    );
  }
}

export default StockClass;