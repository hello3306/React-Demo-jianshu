
import axios from "axios";
import * as actionType from "./actionType";

const changeHomeData=(result)=>(
    {
        type: actionType.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
    });

const changeMoreList=(result,nextPage)=>(
    {
    type: actionType.CHANGE_MORE_LIST,
    moreList: result,
    nextPage

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

export const getMorList = (page) => {
    return (dispatch) => {
        let pages=page.get("articlePage");
        axios.get('/api/homeList.json?page='+pages).then((res) => {
            const result = res.data.data;
            const action = changeMoreList(result,pages+1);
            dispatch(action); 
        }).catch((err) => {
            console.log(err)
        })
    }

}

export const toggleTopShow=(show)=>({
    type:actionType.TOGGLE_TOP_SHOW,
    show
})