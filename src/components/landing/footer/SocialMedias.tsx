import GithubIcon from "../../../../public/githubIcon.svg";
import SocialMedia from "./SocialMedia";

const SocialMedias = () => {
	return (
		<div className="flex">
			<SocialMedia icon={GithubIcon} url="https://github.com/pedrodevelop" />
		</div>
	);
};

export default SocialMedias;
