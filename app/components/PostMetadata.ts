import fs from "fs";
import Link from "next/link";
import Image from 'next/image'
import matter from "gray-matter";
import { PostMetadataModel } from "./PostMetadataModel";

class PostMetadata {

  getPostMetadata(): PostMetadataModel[] {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"))
    
    const posts = markdownPosts.map(fileName => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8")
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        description: matterResult.data.description,
        techStack: matterResult.data.techStack,
        links: matterResult.data.links.map((x: { display: any; src: any; }) => {
          return {
            display: x.display,
            src: x.src
          }
        }),
        image: {
            src: matterResult.data.image.src,
            alt: matterResult.data.image.alt
        },
        readMoreLink: matterResult.data.readMoreLink,
        slug: fileName.replace(".md", "")
      }
    })
    return posts;
  }
}

export default PostMetadata;