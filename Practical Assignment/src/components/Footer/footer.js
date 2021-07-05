import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-40px",
                }}>
		
	</h1>
	<Container>
		<Row>
		    <Column>
                <Heading>Phone</Heading>
                <div>
                    <b>+91 7712347871</b><br></br><br></br>
                    <b>+91 7712347871</b><br></br><br></br>
                    <b>+91 756934574</b>
                </div> 
            </Column> 
            <Column>
                <Heading>Addresses</Heading>
                <div>
                    <b>Agnikul Cosmos Private Limited.</b>
                    <Heading>National Center for Combustion R&D,<br></br><br></br>
                    3rd floor, IIT Madras,<br></br><br></br>
                    Chennai 600036</Heading>
                </div>
            </Column>  
            <Column>
                <Heading>Curious to know more about us ? Reach out to</Heading><br></br><br></br>
                <div><FooterLink href="#"><u>curious@agnikul.in</u></FooterLink></div>
            </Column>
        </Row>
        <Row>
            <Column>
                <Heading>Email</Heading>
                <div>
                    <b>Careers - <FooterLink href="#"><u>humancapital@agnikul.in</u></FooterLink></b><br></br><br></br>
                    <b>Customers - <FooterLink href="#"><u>payloadpeople@agnikul.in</u></FooterLink></b>
                </div>
            </Column>
            <Column>
                <div>
                    <b>Agnikul Cosmos Launch Vehicles Private Limited</b>
                    <Heading>Kerala Startup Mission, Technopark, Thejaswini,<br></br><br></br>
                    G3B, Technopark Rd, Karyavattom,<br></br><br></br>
                    Thiruvananthapuram, Kerala 695581</Heading>
                </div>
            </Column>
            <Column>
                {/* <Row>
                    <Column>
                        <FooterLink href="#"><b><u>Blog</u></b></FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#"><b><u>News</u></b></FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#"><b><u>Videos</u></b></FooterLink>
                    </Column>
                </Row> */}
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
                
        </Row>
	</Container>
	</Box>
);
};
export default Footer;
