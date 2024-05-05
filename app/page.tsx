import Image from "next/image";
import monkey from "public/images/monkey.jpg"
import Badge from "./components/badge";
import Link from "next/link";

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default function Page() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">
				hi i'm alberto 👋
			</h1>
			<p className="prose prose-neutral dark:prose-invert">
				i am a software engineer working at blackstone
			</p>
			<br />
			<p className="prose prose-neutral dark:prose-invert">
				{"at night i am a bodybuilder training to compete in men's physique at "}
				<Link href="https://ocbonline.com"> OCB</Link>
				{", a drug tested bodybuilding federation."}
			</p>
			<br />
			<Image
				alt="me with a nice monkey"
				src={monkey}
				width={300}
				height={100}
				priority
				className="rounded-lg object-cover"
			>
			</Image>
			<p className="prose prose-neutral dark:prose-invert">
				my main passion is discovering new ways to challenge myself and dive deep into topics
			</p>
			<br />
			<p className="prose prose-neutral dark:prose-invert">
				creating this portofolio + blog is an example of this passion. i had an itch of not knowing how to develop and deploy frontend applications. so i decided to scratch it
			</p>
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/AlbertoDSM99"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">follow me on twitter/x</p>
					</a>
				</li>
			</ul>
		</section>
	);
}
