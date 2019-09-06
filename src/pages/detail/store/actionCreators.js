
import axios from "axios";
import * as actionType from "./actionType";


const getContent = (result) => (
    {
        type: actionType.GET_CONTENT,
        content: result
    });

export const getDetailContent = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data.content;
            const action = getContent(result);
            dispatch(action);
        }).catch((err) => {
            console.log(err)
        })
    }

}