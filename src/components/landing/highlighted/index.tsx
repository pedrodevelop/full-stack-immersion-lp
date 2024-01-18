import main from "../../../../public/main-image.jpg";
import { Area, ResponsiveImage } from "../shared/";
import Slogan from "./Slogan";

const Highlighted = () => {
	return (
		<Area id="getting-started" className="pt-20">
			<div className="flex items-center h-[500px] justify-around">
				<Slogan />
				<ResponsiveImage image={main} className="rotate-3 hidden md:inline" />
			</div>
		</Area>
	);
};

export default Highlighted;
