import axios from "axios";


export class connects {

    static serverUrl = `http://localhost:2409`;

    static getAllLocations() {
        let dataURL = `${this.serverUrl}/mapVn`;
        return axios.get(dataURL);

    }
    static getOnePoint(markerId) {
        let dataURL = `${this.serverUrl}/mapVn/${markerId}`;
        console.log(dataURL);
        return axios.get(dataURL, markerId);
    }

}