
import PageLayout from "@/components/Layout";
import Link from "next/link";
import { getAllPosts, Post } from "@/lib/blog";

export async function getStaticProps(){
  const posts = (await getAllPosts()).map(p=>({ ...p, content: p.content.slice(0,180)}));
  return { props: { posts } };
}

export default function BlogIndex({ posts }:{ posts: Post[] }){
  return (
    <PageLayout title="Patient Resources & Blog" description="Tips, news, and answers from our team.">
      <section className="section py-12 md:py-16 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 grid gap-4">
          {posts.map(p => (
            <article key={p.slug} className="glass rounded-3xl p-6">
              <Link href={`/for-patients/blog/${p.slug}`} className="font-serif text-2xl">{p.title}</Link>
              <div className="text-white/60 text-sm mt-1">{p.tag} • {p.date}</div>
              <p className="text-white/80 mt-2">{p.content}...</p>
              <Link href={`/for-patients/blog/${p.slug}`} className="text-white/80 underline mt-2 inline-block">Read more</Link>
            </article>
          ))}
        </div>
        <aside className="glass rounded-3xl p-6 h-max">
          <div className="font-serif text-xl">Categories</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>Preventive Care</li><li>Cosmetic</li><li>Implants</li><li>Technology</li><li>Orthodontics</li><li>Emergency</li>
          </ul>
        </aside>
      </section>
    </PageLayout>
  );
}
