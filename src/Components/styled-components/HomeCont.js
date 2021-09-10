import styled from "styled-components";

export const Home = styled.div`
margin-top:40px;
width:100%;
z-index:1;


@media screen and(max-width:1080px){
 display:block;
 flex-direction:column;
}



`
export const Homelg = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:'row';
flex-wrap:wrap;
float:center;


@media screen and(max-width:760px){

 display:block;
 flex-direction:column;
}
`
export const Card1 = styled.div`
margin:100px;
justify-content: 'center';
align-items: 'cemter'; 
display: 'flex'; 
flex-direction: 'row';

@media screen and(max-width:960px){
    display:block;
    flex-direction:column;
}
`