import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { title, subtitle } from "@/components/primitives";


export default function Home() {
  return (
    <main className="flex flex-col w-[100v w]">
    <Header/>

    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Your&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>Journey&nbsp;</h1>
					<br />
					<h1 className={title()}>
						To stunning images 
					</h1>
					<br />
					<h1 className={title({ color: "violet" })}>Begins&nbsp;</h1>
					<h1 className={title()}>
						Here.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
					Create professional images for free with the most capable Al photo editor.
					</h4>
				</div>


				{/* <div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div> */}
			</section>

      <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        <Link href="/tools">Get Started</Link>
      </button>
      </div>
      <section>
        
      </section>
    </main>
  );
}