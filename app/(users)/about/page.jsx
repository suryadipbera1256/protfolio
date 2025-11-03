// pages/about.jsx
import Image from 'next/image';
import { profile } from "../../../data/profile";



export default function About() {
  return (
    <main className="min-h-screen text-gray-900 px-8 pt-14 ">
  <section className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        
        {/* Left Side: Photo Section */}
  <div className="flex flex-col items-center md:sticky md:top-20 md:self-start">
          <a href="/" className="flex items-center pt-5 ">
          <Image
            src="/PIC/MY PHOTO.jpg" // Replace with your actual image path
            alt="SURYADIP BERA"
            width={150}
            height={150}
            className=" w-40 h-40 rounded-full ring-2 ring-black dark:ring-white"
          />
          </a>

          <div className="text-l mt-6 font-semibold flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <span className="text-gray-400 text-sm">Asia / Bangaluru</span>
          </div>

          <ul className="flex flex-wrap gap-2 mt-4 justify-center">
            
              <li className="border text-gray-400  relative border-neutral-200 dark:border-neutral-800  px-3 py-1 rounded-full">English</li>
              <li className="border text-gray-400  relative border-neutral-200 dark:border-neutral-800  px-3 py-1 rounded-full">Bengali</li>
              <li className="border text-gray-400  relative border-neutral-200 dark:border-neutral-800  px-3 py-1 rounded-full">Odia</li>
          </ul>
        </div>

        {/* Right Side: Scrollable Content */}
  <div className="flex flex-col justify-center">

          <section className="mb-20">
            <h2 className="text-5xl text-cyan-300 font-bold mb-4 pt-20">Suryadip Bera</h2>
            <h1 className="text-xl text-gray-400 font-bold mb-4">Data Scientist | AI Enthusiast</h1>
            <ul className="flex flex-wrap gap-2 mb-10">
              <a href={profile.links.github} className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">
                <svg className="w-6 h-6  dark:text-cyan-300" ariahidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
                <span>github</span>
              </a>
              <a href={profile.links.linkedin} className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 text-white-900 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">
                <svg className="w-6 h-6  dark:text-cyan-300" ariahidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:suryadip230@gmail.com" className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 adow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">
                <svg className="w-6 h-6  dark:text-cyan-300" ariahidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                </svg>
                <span>Email</span>
              </a>
            </ul>
              <p className=" text-gray-400 text-lg">{profile.aboutMe}</p>  
          </section>

          <section className="mb-20">
            <h2 className="text-3xl text-cyan-300 font-semibold mb-4">Education</h2>
            <ul className="mb-5">
              <li className="text-xl flex justify-between items-center w-ful">
                <h1 className="text-gray-400  text-semibold">JIS University - CGPA :<b> 8.25</b></h1>
                <div className="text-base text-cyan-300">2025</div>
              </li>
              <p className="text-base text-gray-500 text-bold">Completed <b>B.Tech</b> in Computer Science and Engineering from JIS University with a CGPA of 8.2, demonstrating strong academic performance and technical foundation.</p>
            </ul>

            <ul className="mb-5">
              <li className="text-xl text-gray-400  flex justify-between items-center w-ful">
                <h1 className=" text-semibold ">12 th from WBCHSE - <b > 77.2%</b></h1>
                <div className="text-base text-cyan-300">2021</div>
              </li>
            </ul>

            <ul className="mb-1">
              <li className="text-xl  text-gray-400  flex justify-between items-center w-ful">
                <h1 className=" text-semibold">10th from WBBSE - <b> 84.2%</b></h1>
                <div className="text-base text-cyan-300">2019</div>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl text-cyan-300 font-semibold mb-4">Technical Skills</h2>

            <div className="flex flex-wrap gap-1">
              <h1 className="text-xl text-gray-400 font-semibold mb-1">Wellknown Languages</h1>
              <svg className=" mt-1 w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </div>
            <p className=" text-gray-500 mb-2 text-base">Expert-level Python and Java skills applied in real-world engineering and design projects.</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Python</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Java</li>
            </ul>

            <div className="flex flex-wrap gap-1">
              <h1 className="text-xl text-gray-400 font-semibold mb-1">Data Science</h1>
              <svg className=" mt-1 w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </div>
            <p className=" text-gray-500 mb-2 text-base">Design Engineer with strong knowledge of data science, including data analysis, machine learning, and statistical modeling. Skilled in data preprocess and data visualization tools, with applying data-driven solutions to enhance digital products and user experiences.</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Numpy</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Pandas</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Matplotlib</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">PowerBI</li>
            </ul>

                        <div className="flex flex-wrap gap-1">
              <h1 className="text-xl text-gray-400 font-semibold mb-1">AI | ML</h1>
              <svg className=" mt-1 w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </div>
            <p className=" text-gray-500 mb-2 text-base">Design Engineer with strong knowledge of Artificial Intelligence and Machine Learning. Skilled in building predictive models, data preprocessing, and deploying ML solutions using Python, TensorFlow, and Scikit-learn , with a focus on AIML, Data Science, AIML in the Medical Field, and Computational Human Intelligence Education.</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">SKlearn</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Tensorflow</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Deep Learning</li>
            </ul>

            <div className="flex flex-wrap gap-1">
              <h1 className="text-xl text-gray-400 font-semibold mb-1">Devlovment</h1>
              <svg className=" mt-1 w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </div>
            <p className=" text-gray-500  mb-2 text-base">Experienced in crafting responsive, scalable interfaces with modern frameworks like React , Next.js and Proficient in developing scalable, secure APIs and server-side logic with Flask and Django. Experienced in integrating databases, authentication, and deployment workflows..</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">React</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Tailwindcss</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Next.js</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Flask</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">Django</li>
            </ul>

            <div className="flex flex-wrap gap-1">
              <h1 className="text-xl text-gray-400 font-semibold mb-1">Database Management</h1>
              <svg className=" mt-1 w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </div>
            <p className=" text-gray-500 mb-2 text-base">Strong command of DBMS principles MySQL, PostgreSQL, and MongoDB. Skilled in schema design, query optimization, and data modeling for both relational and NoSQL systems.</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">MySQL</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">PostgreSQL</li>
              <li className="bg-black text-cyan-300 flex flex-wrap gap-1 px-3 py-1 rounded-full border hover:border-white  relative border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/40">MongoDB</li>
            </ul>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
            <ul className="space-y-4">
              <li>
                <strong>Frasher (2025)</strong><br />
                Aspiring Data Scientist with a strong foundation in Python, machine learning, and statistical modeling. Passionate about solving real-world problems using data-driven approaches and eager to contribute to impactful AI projects.
              </li>
            </ul>
          </section>

        </div>
      </section>
    </main>
  );
}


