import axios from "axios";

export default class dataApi {
    static getData(url) {
        return axios.get(url);
    }
}