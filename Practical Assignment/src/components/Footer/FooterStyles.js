import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 60px;
background: #2B9351;
position: absolute;
// bottom: 1;
width: 90.5%;
height: 40%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 800px;
    max-height: 300px;
	margin: 0 auto;
	/* background: red; */
	
`;

export const Column = styled.div`
color: white;
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
// margin-right: 40px;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 30px;

@media (max-width: 100px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
font-size: 14px;
// font-weight: bold;
`;


export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 13px;
color: #fff;
margin-bottom: 40px;

`;
