// import * as actionType from "./actionType";

import { fromJS } from 'immutable';
import * as actionType from "./actionType";

const defaultState = fromJS({
    showScroll: false,
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    writerList: [
        {
            id: 1,
            img: 'http://upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '王小麦',
            info: '写了137.4k字 · 40.1k喜欢'

        },
        {
            id: 2,
            img: 'http://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '卢璐说',
            info: '写了1205k字 · 26k喜欢'

        },
        {
            id: 3,
            img: 'http://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '阿栈',
            info: '写了470.4k字 · 1.5k喜欢'

        },
        {
            id: 4,
            img: 'http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: ' 梅拾璎',
            info: '写了276.2k字 · 27.1k喜欢'

        },

    ],
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

const changeMoreList=(state, action)=>{
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.moreList)),
        articlePage: action.nextPage
    });
}


export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.CHANGE_HOME_DATA:
            return changeHomeData(state, action);

        case actionType.CHANGE_MORE_LIST:
            return changeMoreList(state,action);
           
        case actionType.TOGGLE_TOP_SHOW:
            return state.merge({
                showScroll: action.show
            })
        default:
            return state;
    }
}