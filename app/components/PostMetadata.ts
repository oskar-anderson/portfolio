import fs from "fs";
import Link from "next/link";
import Image from 'next/image'
import matter from "gray-matter";
import { PostMetadataModel } from "./PostMetadataModel";

class PostMetadata {

  getPostsMetadata(): PostMetadataModel[] {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"))
    
    const posts = markdownPosts.map(fileName => {
        return this.getPostMetadata(fileName);
    })
    return posts;
  }

  getPostMetadata(fileName: string): PostMetadataModel {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8")
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      techStack: matterResult.data.techStack,
      links: matterResult.data.links.map((x: { display: any; href: any; }) => {
        return {
          display: x.display,
          href: x.href
        }
      }),
      image: {
          src: matterResult.data.image.src,
          alt: matterResult.data.image.alt
      },
      readMoreLink: matterResult.data.readMoreLink,
      slug: fileName.replace(".md", "")
    }
  }
}

export default PostMetadata;