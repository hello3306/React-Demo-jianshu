import styled from 'styled-components';
import logoPic from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a`
    height:56px;
    position:absolute;
    top:0px;
    left:0px;
    width:100px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
    
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;

    color:#333;
    &.left{
        float:left;
    }
    &.action{
        color:#ea6f5a;
    }   
     &.right{
        float:right;
        color:#969696;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    height:36px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    color:#666;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }

`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    border-radius:19px;
    line-height:38px;
    margin-top:9px;
    border:1px solid #ec6149;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
        margin-left:20px;
        margin-right:20px;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative; 
    .iconfont{
        position:absolute;
        right:5px;
        bottom:3px;
        width:30px;
        text-align:center;
        line-height:30px;
        border-radius:15px;
    }
    .focused2{
        background:#777;
        color:#FFF;
    }
`;

export const SearcInfo = styled.div`
        position:absolute;
        width:240px;
        left:0;
        top:56px;
        padding:0 20px;
        background:#fff;

        box-shadow:0 0 8px rgba(0,0,0,.2);
`;
export const SearcInfoTitle = styled.div`
        margin-top:20px;
        margin-bottom:15px;
        line-height:20px;
        font-size:14px;
        color:#969696;
`;
export const SearcInfoSwitch = styled.span`
        float:right;
        font-size:12px;
        color:#969696;
`;
export const SearcInfoItem = styled.a`
        display:block;
        float:left;
        font-size:12px;
        color:#787878;
        padding: 0 5px;
        line-height:20px;
        border:1px solid #ddd;
        border-radius:3px;
        margin-right:10px;
        margin-bottom:15px;
`;
export const SearcInfoList = styled.div`
        overflow:hidden;
`;


