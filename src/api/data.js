import axios from "axios";
import { delay } from '../utils/delay';

export default class dataApi {
    static async getData(url) {
        const resp = await delay(3000).then(()=>axios.get(url))
        return resp
    }
}