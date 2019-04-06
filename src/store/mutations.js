import axios from 'axios'

export const mutationsInfoList = (state) => {
    axios.get("http://127.0.0.1:7001/")
        .then(res => {
            state.infoList = res.data.results;
        }, res => {
            console.log(err);
        })
}