import { List, Item } from "./styled";
import { LargeText } from "ui/typography";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "ui/icons";

export function SocialFooter({ text }: any) {
	return (
		<List>
			<Item>
				<LargeText color={text}>Social Media</LargeText>
			</Item>
			<Item>
				<InstagramIcon color={text} />
			</Item>
			<Item>
				<FacebookIcon color={text} />
			</Item>
			<Item>
				<TwitterIcon color={text} />
			</Item>
		</List>
	);
}
