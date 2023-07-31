import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeRaw from "rehype-raw";
import PostMetadata from "@/app/components/PostMetadata";
import remarkGfm from "remark-gfm";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = new PostMetadata().getPostMetadata();
    return posts.map(post => {
        return {
            slug: post.slug
        }
    });
};


const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <>
            <a style={{ position: "fixed", top: "40px", left: "50px", textDecoration: "none", fontSize: "1.2rem", fontFamily: "Consolas" }} href="/">
                ← Back
            </a>
            <div className="content-container px-4">
                <div className="mt-5 mb-3">
                    <h2>{ post.data.title }</h2>
                </div>
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]} remarkPlugins={[ remarkGfm ]}>{ post.content }</ReactMarkdown>
            </div>
        </>
    )
}

export default PostPage;