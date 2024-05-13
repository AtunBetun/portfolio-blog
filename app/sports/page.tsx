import type { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
	title: 'Sports',
	description: 'A summary of my sports hobby career.',
};

export default function WorkPage() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">my sports</h1>
			<p>
				my drive for sports started on my college freshman year at florida state university where
				i joined the university's cayuco team.
			</p>
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Cayuco FSU</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						2018
					</p>
					<p>
						after dropping 30lbs and 15% body fat to make the tryouts, i joined cayuco fsu as team captain and steersman.
					</p>
					<p>
						my team, composed of only rookies, finished 4th overall by putting in hard work in the sea, kitchen, and gym.
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Cayuco Chava</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						2019
					</p>
					<p>
						i joined cayuco chava after a 3 month try out of 20+ participants fighting for 3 sports.
						my team broke the (link) cinta costera record during spring 2020. sadly the season came to a halting stop due to covid-19.
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">FSU Gymnastics</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						2020
					</p>
					<p>
						with covid-19 pushing all indoor activity indoor, i started practicing gymnastics by learning handstands and bodyweight exercises at home.
					</p>
					<p>
						after transferring to the fsu main campus in tallahassee i joined the gymnastics club where i competed in an amateur competition in parallel bars and rings.
					</p>
				</div>
			</div>
			<hr className="my-6 border-neutral-100 dark:border-neutral-400" />
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">FSU Weightlifting</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						2022
					</p>
					<p>
						i realized getting strong at the gym captured my attention more than bodyweight movements so i joined the fsu weightlifting club.
					</p>
					<p>
						my main achievement was participating in strong like nicole deadlifting competition where i pulled 455lbs at 190lbs bodyweight.
					</p>
				</div>
			</div>
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Bodybuilding</h2>
				<div className='work-item'>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm">
						2023 - current
					</p>
					<p>
						since 2023 i have been hitting the gym and i decided to prep for a bodybuilding show on july 13 in orlando fl.
					</p>
					<p>
						this show will be a culmination of years of hard work. my goal is to diet down to 7% bodyfat.
					</p>
				</div>
			</div>
		</section>
	);
}
