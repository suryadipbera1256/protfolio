import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { profile } from '../../../data/profile';


export default function About(){
return (
<main className="min-h-screen bg-gray-900 text-white p-8">
<Navbar />
<div className="max-w-3xl mx-auto">
<h1 className="text-3xl font-bold">About Me</h1>
<p className="mt-4 text-gray-300">{profile.headline}</p>


<section className="mt-6">
<h2 className="text-2xl font-semibold">Contact</h2>
<p className="text-gray-300">Email: {profile.email} · Phone: {profile.phone}</p>
<p className="mt-2">Links: <a href={profile.links.linkedin} className="underline">LinkedIn</a> · <a href={profile.links.github} className="underline">GitHub</a> · <a href={profile.links.leetcode} className="underline">LeetCode</a></p>
</section>


<section className="mt-6">
<h2 className="text-2xl font-semibold">Education</h2>
{(profile.education ?? []).map((e,i)=>( 
<div key={i} className="mt-2 text-gray-300">{e.degree ? `${e.degree} — ${e.institution} (CGPA: ${e.cgpa})` : `${e.level} — ${e.marks}`}</div>
))}
</section>


<section className="mt-6">
<h2 className="text-2xl font-semibold">Skills</h2>
<div className="mt-2 flex flex-wrap gap-2">
{(profile.skills ?? []).map((s,i)=>(<span key={i} className="px-3 py-1 bg-gray-800 rounded">{s}</span>))} 
</div>
</section>


<section className="mt-6">
<h2 className="text-2xl font-semibold">Roles & Achievements</h2>
<ul className="list-disc list-inside text-gray-300 mt-2">
{(profile.roles ?? []).map((r,i)=>(<li key={i}>{r}</li>))} 
{(profile.achievements ?? []).map((a,i)=>(<li key={`ach-${i}`}>{a}</li>))} 
</ul>
</section>
</div>
<Footer />
</main>
)
}