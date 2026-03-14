import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1 className="text-4xl font-bold text-center mt-10">
				Welcome to Zirus Developer page!
			</h1>
			<Link
				href="https://github.com/JeffreyJYZ/zirus-dev"
				className="mt-7 text-sm block w-max mx-auto hover:underline"
			>
				More to come! Watch and star this repo
			</Link>
			<Link
				href="https://zirus.io"
				className="mt-7 text-xl border-2 p-5 rounded-2xl bg-blue-300 text-black font-semibold hover:bg-blue-400 transition-colors duration-300 block w-max mx-auto"
			>
				Game
			</Link>
		</main>
	);
}
