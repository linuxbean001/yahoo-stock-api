import axios from 'axios';
export default class AllService {

    getStockInfo(){
        console.log('adminService...xx..x');
        return axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "67c88f363emsh42f38807e92f9bbp100370jsn6d52acac201b"
            }
        }).then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }
}    



