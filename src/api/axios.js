import axios from "axios"
export const getProduct = () => axios({
    url: "http://106.12.79.128:8848/index.json"
})