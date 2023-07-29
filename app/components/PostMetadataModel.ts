export interface PostMetadataModel {
    title: string,
    description: string,
    techStack: string[],
    links: {
        display: string,
        src: string
    }[],
    image: {
        src: string,
        alt: string
    },
    readMoreLink: string,
    slug: string
}