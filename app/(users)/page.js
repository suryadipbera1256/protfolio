
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { profile } from '../../data/profile';


export default function Home() {
return (
<main className="min-h-screen ">
<Navbar />
<section className="flex flex-col items-center justify-center h-[50vh] text-center p-4 mt-11">
<h1 className="text-5xl text-cyan-500 font-bold mb-4">Hi, I’m {profile.name} 👋</h1>
<p className="text-lg text-gray-300 max-w-2xl">{profile.headline}</p>
<div className="mt-6 flex gap-6">
<a href="/about" className="bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800 text-cyan-300  px-4 py-2  rounded-full shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 ">About - Suryadip </a>
<a href={profile.resumeUrl} target="_blank" rel="noreferrer" 
className="flex flex-wrap gap-1 items-center bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800 text-cyan-300 px-4 py-2  rounded-full shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 ">
  <span>Download Resume</span>
   <svg className="w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400 size-6 animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
</svg>
  </a>

</div>
</section>


{/* <hr className="border-gray-700 mx-4" /> */}

<section className="max-w-7xl mx-auto ">
{/* <h1 className="text-3xl font-bold">Certifications</h1> */}

<div className="grid md:grid-cols-4 gap-6 mt-6 mb-15 p-4">

{profile.certifications.map((X,Y)=>(
<div key={Y} className="p-6 rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl text-gray-400 font-semibold mb-4">{X.title_1}</h3>
<p className="mt-2 text-gray-500 mb-2">{X.description_1}</p>
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Cisco Networking Academy</h3>
              <a href={X.link_1} className="flex-none rounded-full bg-blue-600 bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
            </div>
</div>
))}

{profile.certifications.map((P,l)=>(
<div key={l} className="p-6  rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800 transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{P.title_2}</h3>
<p className="mt-2 text-gray-500 mb-2">{P.description_2}</p>
            <div className="flex items-center gap-6 rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Coursera</h3>
              <a href={P.link_2} className="flex-none rounded-full bg-blue-600 bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
            </div>
</div>
))}



{profile.certifications.map((R,M)=>(
<div key={M} className="p-6  rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800 transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{R.title_3}</h3>
<p className="mt-2 text-gray-500 mb-6">{R.description_3}</p>
            <div className="flex items-center gap-6 rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Coursera</h3>
              <a  href={R.link_3} className="flex-none rounded-full bg-blue-600 bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
            </div>
</div>
))}


{profile.awards.map((R,M)=>(
<div key={M} className="p-6  rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{R.title_1}</h3>
<p className="mt-2 text-gray-500 mb-2">{R.description_1}</p>
            <div className="flex items-center gap-6 rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">jis Uinversity</h3>
              <a  href={R.link_1} className="flex-none rounded-full bg-blue-600 bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
            </div>
</div>
))}

{profile.achievements.map((R,M)=>(
<div key={M} className="p-6  rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400">{R.title_1}</h3>
<p className="mt-2 text-gray-500 mb-2">{R.description_1}</p>
    
            <div className="flex items-center gap-4 rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Jis University</h3>
              <a  href={R.link_1} className="flex-none rounded-full bg-blue-600 bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
            </div>
      
</div>
))}

{profile.achievements.map((R,M)=>(
<div key={M} className="p-6  rounded-lg bg-black border hover:border-white  relative border-neutral-200 dark:border-neutral-800  transition  duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
<h3 className="text-2xl font-semibold text-gray-400 mb-8">{R.title_2}</h3>
<p className="mt-2 text-gray-500 mb-4">{R.description_2}</p>
            <div className="flex items-center gap-4 rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-cyan-300 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Jis University</h3>
              <a  href={R.link_2} className="flex-none rounded-full bg-cyan-300 hover:bg-cyan-600 p-2 text-black">View certification</a>
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
          <div className="absolute bottom-0 left-0 flex w-full px-8 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">JIS INNOVATION AWARD DAY 😊</h3>
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
            src="/PIC/GROUP_1.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-7 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">TIME TO CHERISH MEMORIES 😎</h3>
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
          <div className="absolute bottom-0 left-0 flex w-full px-8 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">ALWAYS HEART❤️ TO HEART❤️</h3>
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
            src="/PIC/GROUP_4.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-8 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 text-white flex-grow pl-2 leading-none tracking-tight">But First, Let Me Take A Selfie 😁</h3>
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
            src="/PIC/me.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full pl-20 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">      ME  😎     </h3>
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
        </div>
      </a>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <a className="relative h-full w-full">
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
        </div>
      </a>
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
            src="/PIC/GROUP_3.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-9 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-black p-1 text-xs font-semibold backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">LIFE IS BETTER WITH FRIENDS</h3>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
      <div className="relative h-full w-full" href="/acme-rainbow-sticker">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
          <Image 
            alt="clg time" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
            src="/PIC/GROUP_2.jpg"
            width={50}
            height={50}/>
          <div className="absolute bottom-0 left-0 flex w-full px-2 p-3 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-cyan-300 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">BEST FRIENDS ARE THE BEST THERAPY</h3>
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

