import Logo from "./logo.svg";
import Cart from "./cart.svg";
import Menu from "./menu.svg";
import X from "./x.svg";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";
import styled from "styled-components";

export const LogoIcon = styled(Logo)`
	fill: #4f7cac;
	width: 55px;
	height: 55px;
	cursor: pointer;
`;

export const MenuIcon = styled(Menu)`
	width: 30px;
	height: 30px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;

export const XIcon = styled(X)`
	width: 40px;
	height: 40px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;

export const CartIcon = styled(Cart)`
	width: 30px;
	height: 30px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;

export const FacebookIcon = styled(Facebook)`
	width: 30px;
	height: 30px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;

export const InstagramIcon = styled(Instagram)`
	width: 30px;
	height: 30px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;

export const TwitterIcon = styled(Twitter)`
	width: 30px;
	height: 30px;
	color: ${(props) => props.color || "black"};
	cursor: pointer;
`;
