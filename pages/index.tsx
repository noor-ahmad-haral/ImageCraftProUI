import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { title, subtitle } from "@/components/primitives";
import Layout from "../layouts/default";

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
      <Layout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 text-center min-h-[50vh]">
          {/* <div className="inline-block max-w-lg">
            <h1 className={title()}>Your&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>Journey&nbsp;</h1>
            <br />
            <h1 className={title()}>To stunning images</h1>
            <br />
            <h1 className={title({ color: "violet" })}>Begins&nbsp;</h1>
            <h1 className={title()}>Here.</h1>
            <h4 className={subtitle({ class: "mt-4" })}>
              Create professional images for free with the most capable AI photo editor.
            </h4>
            
          </div> */}
          <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
            Your Journey to{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative"> Stunning Images</span>
            </span>{' '}
            Begins Here.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700">
            Create professional images for free with the most capable AI photo editor.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias optio explicabo dolorem? Eaque quisquam nesciunt deleniti magnam dolorem quae hic sit incidunt veniam atque?
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link href="/tools">Get Started</Link>
          </button>
        </section>

        <section className="space-y-8 p-8">
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="md:w-1/2 p-4">
              <div className="flex justify-center">
                <Image src="/tools-images/background-remover.jpg" alt="Erase any background" width={500} height={500} className="rounded shadow-md object-cover w-full h-64" />
              </div>
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-900">Erase any background</h3>
              <p className="mt-4 text-gray-600">
                Edit photos quickly and accurately without any effort. Photoaura simplifies your images, maintaining focus on the foreground and is twice as accurate as other apps.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
                Explore Background Removal
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="md:w-1/2 p-4">
              <div className="flex justify-center">
                <Image src="/tools-images/Image-Upscaler.png" alt="Create backgrounds instantly with AI" width={500} height={500} className="rounded shadow-md object-cover w-full h-64" />
              </div>
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-900">Upscale Images with AI</h3>
              <p className="mt-4 text-gray-600">
                ImageCraftPro uses the power of AI to create realistic, studio-quality backgrounds for your product images in seconds.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
                Image Upscaler
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="md:w-1/2 p-4">
              <div className="flex justify-center">
                <Image src="/tools-images/image-denoise.jpg" alt="Expand images beyond their borders with AI" width={500} height={500} className="rounded shadow-md object-cover w-full h-64" />
              </div>
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-900">Good Bye Blurry Noisy Images</h3>
              <p className="mt-4 text-gray-600">
                Revive Your Photos with Effortless Clarity.
                Transform Noisy Images into Stunning Masterpieces.
                Experience the Magic of Seamless Denoising Today.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
                Image Denoiser
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
