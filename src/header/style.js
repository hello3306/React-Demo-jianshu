import styled from 'styled-components';
import logoPic from "../statics/logo.png"

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
    placeholder:'搜索'
})`
    width:160px;
    margin-top:9px;
    padding:0 20px;
    box-sizing:border-box;
    height:36px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
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
`;


