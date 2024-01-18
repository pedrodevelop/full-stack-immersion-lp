import Link from "next/link";

interface IMenuItemProps {
	children: any;
	url?: string;
	className?: string;
}

const MenuItem = ({ children, url, className }: IMenuItemProps) => {
	return (
		<Link
			href={url ?? ""}
			className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 rounded-md h-9
                ${className ?? ""}
            `}
		>
			{children}
		</Link>
	);
};

export default MenuItem;
