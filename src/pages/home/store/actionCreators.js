
import axios from "axios";
import * as actionType from "./actionType";

const changeHomeData=(result)=>(
    {
        type: actionType.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
    });


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action); 
        }).catch((err) => {
            console.log(err)
        })
    }

}