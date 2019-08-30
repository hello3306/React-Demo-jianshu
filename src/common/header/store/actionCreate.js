import * as actionType from "./actionType";
import axios from "axios";
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: actionType.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: actionType.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionType.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: actionType.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionType.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionType.CHANGE_PAGE,
    page
});

export const getList = () => {
    return (dishpatch) => {
        axios.get('api/header.json').then((res) => {
            const data = res.data.data;
            dishpatch(changeList(data));

        }).catch((err) => {
            console.log(err)
        })
    }
};

