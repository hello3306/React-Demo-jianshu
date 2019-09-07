
import axios from "axios";
import * as actionType from "./actionType";


const getContent = (title, content) => (
    {
        type: actionType.GET_CONTENT,
        content,
        title
    });

export const getDetailContent = (id) => {
    return (dispatch) => {
        console.log(id)
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data;
            console.log(result)
			dispatch(getContent(result.title, result.content));
        }).catch((err) => {
            console.log(err)
        })
    }

}