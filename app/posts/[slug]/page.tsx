import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeRaw from "rehype-raw";
import PostMetadata from "@/app/components/PostMetadata";
import remarkGfm from "remark-gfm";
import { PostMetadataModel } from "@/app/components/PostMetadataModel";
import RelevantLinks from "./RelevantLinks"


const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = new PostMetadata().getPostsMetadata();
    return posts.map(post => {
        return {
            slug: post.slug
        }
    });
};


const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const metadata = post.data as PostMetadataModel
    return (
        <>
            <a style={{ position: "fixed", top: "40px", left: "50px", textDecoration: "none" }} href="/">
                <span style={{ fontSize: "1.2rem", fontFamily: "Consolas" }}>←</span> Back
            </a>
            <div className="content-container px-4">
                <div className="mt-5 mb-3">
                    <h2>{post.data.title}</h2>
                    <RelevantLinks links={metadata.links}></RelevantLinks>
                </div>
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]} remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                <RelevantLinks links={metadata.links}></RelevantLinks>
            </div>
        </>
    )
}

export default PostPage;