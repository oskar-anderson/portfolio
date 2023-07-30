import Link from "next/link";
import Image from "next/image";
import { PostMetadataModel } from "./PostMetadataModel";

const PostPreview = (props: { postMetadata: PostMetadataModel, index: number} ) => {
    const { postMetadata, index } = props;
    let imageBlock = (
        <div className="col-12 col-md-6 overflow-hidden d-flex justify-content-center">
            <img src={postMetadata.image.src} alt={postMetadata.image.alt} style={{ maxWidth: "100%" }} />
        </div>
      );
      let descriptionBlock = (
        <div className="col-12 col-md-6">
            <div className="w-100 d-flex justify-content-center">
                <h2 className="mb-5 mt-4 text-center">{postMetadata.title}</h2>
            </div>
            <p>
                {postMetadata.description}
            </p>
            <div className="my-3">
                <span className="fw-semibold">Tech stack:</span>
                <ul className="taglist">
                    {postMetadata.techStack.map(tech => (
                      <li key={tech}>
                          <span className="badge rounded-pill text-bg-light">{ tech }</span>
                      </li>
                    ))}
                </ul>
            </div>
            <a className="btn btn-primary" href={postMetadata.readMoreLink}>Read More</a>
        </div>
      );
      let drawOrder = [ index % 2 == 1 ? imageBlock : null, descriptionBlock, index % 2 == 0 ? imageBlock : null].filter(x => x !== null);
      
      let columnClass = index % 2 == 0 ? "flex-column" : "flex-column-reverse";
      return (
        <div className={"d-flex flex-md-row " + columnClass + " gap-3 mb-5"}>
            { ...drawOrder }
        </div>
      )
}

export default PostPreview;