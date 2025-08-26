
export type Post = { title:string; date:string; tag:string; slug:string; content:string };

function parseFrontMatter(src: string){
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if(!m) return { data:{}, content: src };
  const [, head, body] = m;
  const data: Record<string,string> = {};
  head.split(/\n/).forEach(line => {
    const mm = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
    if(mm) data[mm[1]] = mm[2];
  });
  return { data, content: body.trim() };
}

export async function getAllPosts(): Promise<Post[]> {
  const fs = await import('fs');
  const path = await import('path');
  const POSTS_DIR = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(POSTS_DIR).filter((f:string)=>f.endsWith(".md"));
  const posts = files.map((f:string)=>{
    const raw = fs.readFileSync(path.join(POSTS_DIR,f), "utf8");
    const { data, content } = parseFrontMatter(raw);
    return { title:data.title||f, date:data.date||"", tag:data.tag||"", slug:data.slug||f.replace(/\.md$/,''), content };
  });
  return posts.sort((a,b)=> a.date < b.date ? 1 : -1);
}

export async function getPostSlugs(): Promise<string[]>{
  const fs = await import('fs');
  const path = await import('path');
  const POSTS_DIR = path.join(process.cwd(), "content", "posts");
  return fs.readdirSync(POSTS_DIR).filter((f:string)=>f.endsWith(".md")).map((f:string)=>f.replace(/\.md$/,''));
}

export async function getPostBySlug(slug:string): Promise<Post> {
  const fs = await import('fs');
  const path = await import('path');
  const POSTS_DIR = path.join(process.cwd(), "content", "posts");
  const raw = fs.readFileSync(path.join(POSTS_DIR, slug + ".md"), "utf8");
  const { data, content } = parseFrontMatter(raw);
  return { title:data.title||slug, date:data.date||"", tag:data.tag||"", slug, content };
}

export function mdToHtml(md:string){
  const lines = md.split(/\n/);
  const html:string[] = [];
  let inList=false;
  for(const line of lines){
    if(/^\s*-\s+/.test(line)){
      if(!inList){ html.push("<ul>"); inList=true; }
      html.push("<li>"+line.replace(/^\s*-\s+/,'').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+"</li>");
    } else {
      if(inList){ html.push("</ul>"); inList=false; }
      if(/^##\s+/.test(line)){ html.push("<h2>"+line.replace(/^##\s+/,'')+"</h2>"); }
      else if(/^#\s+/.test(line)){ html.push("<h1>"+line.replace(/^#\s+/,'')+"</h1>"); }
      else if(line.trim()===""){ html.push(""); }
      else { html.push("<p>"+line.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+"</p>"); }
    }
  }
  if(inList) html.push("</ul>");
  return html.join("\n");
}
