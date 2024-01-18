import Image from "next/image";
import Link from "next/link";

interface ISocialMediaProps {
	icon: string;
	url: string;
}

const SocialMedia = ({ url, icon }: ISocialMediaProps) => {
	return (
		<Link href={url} target="_blank">
			<div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
				<Image alt="Github icon" src={icon} />
			</div>
		</Link>
	);
};
export default SocialMedia;
