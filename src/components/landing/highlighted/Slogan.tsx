import Link from "next/link";

const Slogan = () => {
	function renderPhrase() {
		return (
			<div
				className={`
                    flex flex-col items-center md:items-start text-4xl lg:text-6xl
                    text-white font-normal
                `}
			>
				<div className="flex gap-2.5 font-bold">Full Stack</div>
				<div>Immersion</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-center gap-5">
			{renderPhrase()}
			<div className="text-sm lg:text-lg font-normal text-zinc-500 text-center sm:text-left w-72">
				A imersão que promete destravar sua carreira como dev!
			</div>
			<div className="flex justify-center sm:justify-start items-center gap-2">
				<Link
					href="#form"
					className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-5 py-2.5 rounded-md"
				>
					Inscreva-se
				</Link>
			</div>
		</div>
	);
};

export default Slogan;
