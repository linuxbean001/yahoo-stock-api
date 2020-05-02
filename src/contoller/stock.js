import React, { Component } from 'react';
import { Table,Tabs,Tab } from 'react-bootstrap';

import AllService from '../service/service'
const yahooAPI = new AllService();

class StockClass extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          AllData:'',
          YearlyData:[],
          QuarterlyData:[]
         } 
        this.getStock = this.getStock.bind(this);
    }


    componentDidMount(){
        this.getStock();
      }
      
      getStock() {
        yahooAPI.getStockInfo()
              .then(res => {
                console.log('yessss:',res.data.earnings.financialsChart);
                console.log('Data yearly:',res.data.earnings.financialsChart.yearly);
                console.log('Data quarterly:',res.data.earnings.financialsChart.quarterly);
                this.setState({
                    AllData:res,
                    YearlyData:res.data.earnings.financialsChart.yearly,
                    QuarterlyData:res.data.earnings.financialsChart.quarterly
                  })
              }).catch(err => {
                  console.log('xxxxxxx xxxx ', err);
              });
   
      }



   
  

  render() {
    return (
         <div className="Stock-section">
             <h2 style={{'textAlign':'center'}}>AMRN Yahoo Finance</h2>
          
              <div className="container">

              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Yearly">
                <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Earnings</th>
                              <th>Revenue</th>
                            </tr>
                          </thead>
                          <tbody>

                          {
                            this.state.YearlyData.map(function (yearlylog) {
                              return (
                              <tr>
                                <td>{yearlylog.date}</td>
                                <td>{yearlylog.earnings.longFmt}</td>
                                <td>{yearlylog.revenue.longFmt}</td>
                              </tr>
                            )
                          })
                        }
                          </tbody>
                        </Table>
                </Tab>
                <Tab eventKey="profile" title="Quarterly">
                <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Earnings</th>
                              <th>Revenue</th>
                            </tr>
                          </thead>
                          <tbody>

                          {
                            this.state.QuarterlyData.map(function (quarterlylog) {
                              return (
                              <tr>
                                <td>{quarterlylog.date}</td>
                                <td>{quarterlylog.earnings.longFmt}</td>
                                <td>{quarterlylog.revenue.longFmt}</td>
                              </tr>
                            )
                          })
                        }
                          </tbody>
                        </Table>
                </Tab>
                <Tab eventKey="contact" title="ALL DATA IN JSON">
                 <div className="yourData">  
                     <pre>{JSON.stringify(this.state.AllData, null, 2) } </pre>
                 </div>
                </Tab>
              </Tabs>
                    
              </div>
 </div>
    );
  }
}

export default StockClass;