import type { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
	title: 'Work',
	description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Blackstone</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						software engineer - analyst
					</p>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						february 2023 - current
					</p>
					<p>
						I joined <a href="https://www.blackstone.com/">Blackstone</a> on February to a small team and led creating
						and shipping new software for our stakeholders.
					</p>
					<p>
						Tech Stack: AWS - Terraform - Python - C#
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Blackstone</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						software engineer - intern
					</p>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						summer 2022
					</p>
					<p>
						I joined <a href="https://www.blackstone.com/">Blackstone</a> on an 8 week internship
						in which I designed, developed, and shipped an application for the corporate finance team.
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Procter & Gamble</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						financial forecaster - intern
					</p>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						summer 2021
					</p>
					<p>
						Developed a financial reconciliation tool which saved 1000+ hrs /yr of manual work. The tool helped provide new granularity and improve future forecasts.
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Procter & Gamble</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						financial forecaster - intern
					</p>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						march 2020 - december 2020
					</p>
					<p>
						Redesigned the team's main financial reconcilation tool which allowed forecasters to adhere to time-saving forecasting techniques.
					</p>
				</div>
			</div>
		</section>
	);
}
