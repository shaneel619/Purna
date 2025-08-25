
import PageLayout from "@/components/Layout";
import { getPostSlugs, getPostBySlug, mdToHtml, Post } from "../_bloglib";

export async function getStaticPaths(){
  const slugs = getPostSlugs();
  return { paths: slugs.map(s=>({ params: { slug: s } })), fallback: false };
}
export async function getStaticProps({ params }:{ params:{ slug:string } }){
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }:{ post:Post }){
  return (
    <PageLayout title={post.title} description={`${post.tag} | ${post.date}`}>
      <section className="section py-12 md:py-16">
        <article className="glass rounded-3xl p-8 md:p-12">
          <h1 className="h2">{post.title}</h1>
          <div className="text-white/60 text-sm mt-2">{post.tag} • {post.date}</div>
          <div className="prose prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }} />
        </article>
      </section>
    </PageLayout>
  );
}
