import {
	FaWindows,
	FaXbox,
	FaPlaystation,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import Platform from "../Hooks/useGames.ts";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		xbox: FaXbox,
		playstation: FaPlaystation,
		nintendo: SiNintendo,		
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe
	}

	return (
		<HStack marginY={1} >
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color='gray.500' />
			))}
		</HStack>
	);
};

export default PlatformIconList;
