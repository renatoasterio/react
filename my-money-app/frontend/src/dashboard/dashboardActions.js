import Axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){
    const request = Axios.get(`${BASE_URL}/billingCycles/sumary`)
    return{
        type: 'BILLING_SUMARY_FETCHED',
        payload: request
    }
}