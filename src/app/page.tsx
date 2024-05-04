import Link from 'next/link';

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-medium tracking-tighter">
				hey, I'm alberto 👋
			</h1>
			<p className="prose prose-neutral dark:prose-invert">
				{`I'm a frontend developer, optimist, and community builder. I currently `}
				<Link href="/work">work</Link>
				{` as the VP of Product at `}
				{`, where I help teach the `}
				{` community, an open-source web framework built with `}
			</p>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I've worked with and advised companies on{' '}
					<Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
					<Link href="/blog/devrel">developer relations</Link>, building
					open-source communities, product-led growth, and more.
				</p>
			</div>
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/leeerob"
					>
						<p className="ml-2 h-7">follow me</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://leerob.substack.com"
					>
						<p className="ml-2 h-7">get email updates</p>
					</a>
				</li>
			</ul>
		</section>
	);
}

