import Navbar from '../../../components/Navbar';
import { profile } from '../../../data/profile';
import Image from 'next/image';

export default function Projects(){
return (
<main className="min-h-screen  text-white py-20">
<section className="max-w-4xl mx-auto py-10 px-4">
<h1 className="text-3xl font-bold text-cyan-300">Publication</h1>

<div className="grid md:grid-cols-2 gap-6 mt-6 ">

{profile.publication.map((P,l)=>(
<div key={l} className="p-6 rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{P.title_1}</h3>
<p className="text-gray-500 mt-2">{P.description_1}</p>
<div className="flex items-center gap-1">
<a href={P.link_1} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View Publication</a>
<svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>
))}

{profile.publication.map((P,l)=>(
<div key={l} className="p-6 rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{P.title_2}</h3>
<p className="mt-2 text-gray-500">{P.description_2}</p>
<div className="flex items-center gap-1">
<a href={P.link_2} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View Publication</a>
<svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>
))}
</div>
</section>

<div className="w-full overflow-x-auto pb-6 pt-1">
  <ul className="flex animate-carousel gap-4">
    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[900px] flex-none md:w-1/5 ">
      <div className="relative h-full w-full" href="https://drive.google.com/drive/folders/1Fj6_huXZ4KI5SkF_wHcXdwqxXMSMS1b2">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/MAAM.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">JIS INNOVATION AWARD DAY 😊</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/GROUP_1.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-7 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">TIME TO CHERISH MEMORIES 😎</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/MOM.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">ALWAYS HEART❤️ TO HEART❤️</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/GROUP_4.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">But First, Let Me Take A Selfie 😁</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="https://www.coursera.org/account/accomplishments/certificate/87N37SR84V39">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/DUKE.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full p-2 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">DATA SCIENCE MATH SKILLS</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification</p>
            </div>
          </div>
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="https://www.coursera.org/account/accomplishments/certificate/59K404BAQQO8">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/WORDPRESS.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-2 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">PROJECT CERTIFICATION</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification</p>
            </div>
          </div>
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/CER_3.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">PUBLICATION CERTIFICATE</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>


    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="https://drive.google.com/file/d/1ZUkRz_gbMPOf6j5MF9nxUx9_xs258ZZi/view">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/CER_1.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">PROJECT COMPETITION</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="https://drive.google.com/drive/folders/1Fj6_huXZ4KI5SkF_wHcXdwqxXMSMS1b2">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/CER_2.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">INNOVATION AWARD DAY</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification
            
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full" href="https://drive.google.com/drive/folders/1Fj6_huXZ4KI5SkF_wHcXdwqxXMSMS1b2">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/AWARD.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">INNOVATION AWARD 2025</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">View certification
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/GROUP_3.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">LIFE IS BETTER WITH FRIENDS</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="Acme Rainbow Sticker" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/GROUP_2.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-2 pb-1 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">BEST FRIENDS ARE THE BEST THERAPY</h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

</main>
)
}