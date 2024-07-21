import { title } from '@/components/primitives';
import Layout from "../layouts/default";

export default function DocsPage() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center">
          <h1 className={title()}>Blog</h1>
        </div>
        <div>
          <h4>This is a blog page. You can write your blog posts here.</h4>
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 pd-4">
            <p>
              <strong>Introduction:</strong>
              <br />
              Welcome to a world where your images transcend ordinary into extraordinary with just a touch of magic! Introducing ImageCraft Pro, your go-to solution for transforming bland visuals into captivating masterpieces. Let&apos;s dive into the enchanting realm of image enhancement and discover how ImageCraft Pro revolutionizes the way you experience your photos.
            </p>
            <br />
            <p>
              <strong>Unleash the Power of Image Enhancement:</strong>
              <br />
              With ImageCraft Pro, unleashing the full potential of your images has never been easier. Whether you&apos;re a seasoned photographer or an amateur enthusiast, this intuitive tool empowers you to effortlessly enhance your photos with stunning effects and unparalleled precision. Say goodbye to dull, lifeless images and hello to vibrant, captivating visuals that tell your story in vivid detail.
            </p>
            <br />
            <p>
              <strong>Easy to Use, Instant Results:</strong>
              <br />
              One of the standout features of ImageCraft Pro is its user-friendly interface, designed to streamline your editing process and deliver instant results. Gone are the days of complex editing software that requires hours of tutorials to master. With ImageCraft Pro, simply upload your image, select your desired enhancements, and watch as your photo transforms before your eyes. It&apos;s that easy!
            </p>
            <br />
            <p>
              <strong>Enhance Every Detail:</strong>
              <br />
              From removing unwanted blemishes to adjusting lighting and color balance, ImageCraft Pro offers a comprehensive suite of editing tools to enhance every aspect of your images. Whether you&apos;re aiming for a subtle touch-up or a dramatic overhaul, the possibilities are endless with ImageCraft Pro at your fingertips.
            </p>
            <br />
            <p>
              <strong>Say Goodbye to Imperfections:</strong>
              <br />
              We all have those photos plagued by pesky imperfections - whether it&apos;s distracting background noise or unsightly blemishes. With ImageCraft Pro&apos;s advanced denoising and retouching capabilities, you can bid farewell to these flaws and revel in picture-perfect perfection. Transform ordinary snapshots into magazine-worthy shots with just a few clicks!
            </p>
            <br />
            <p>
              <strong>Take Your Creativity to New Heights:</strong>
              <br />
              With ImageCraft Pro, the only limit is your imagination. Experiment with a wide range of artistic filters, overlays, and effects to infuse your images with personality and style. Whether you&apos;re aiming for a vintage-inspired aesthetic or a modern, futuristic vibe, ImageCraft Pro provides the tools you need to bring your creative vision to life.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
