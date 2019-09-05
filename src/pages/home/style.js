import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;


`;

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:300px;
    }

`;

export const HomeRight = styled.div`
    width:240px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left :-10px;
    border-bottom:1px solid #dcdcdc;

`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    margin-left:18px;
    line-height:32px;
    padding-right:10px;
    margin-bottom:18px;
    font-size:14px;
    color:#000;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;    
    .TopicImg{
        display:block;
        float:left;
        height:32px;
        width:32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .itemImg{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }

`;

export const ListInfo = styled.div`

    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;

export const RecommendWrpper = styled.div`
    margin:30px 0;
    width:280px;

`;
export const RecommendItem = styled.div`
    width:100%;
    height:50px;
    margin-bottom: 6px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;

`;
export const WriterWrpper = styled.div`
    margin:30px 0;
    width:280px;
    border-bottom:1px solid #dcdcdc;
`;
export const WriterItem = styled.div`
    overflow:hidden;
    padding:10px 0;
    

    .writerImg{
        border-radius:50px;
        width:48px;
        height:48px;
        display:block;
        float:left;
    }

`;
export const WriterInfo = styled.div`

    margin-left:58px;
    .title{
        line-height:27px;
        font-size:15px;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;

