import PostMetadata from "./components/PostMetadata";
import PostPreview from "./components/PostPreview"


const HomePage = () => {
  const postMetadata = new PostMetadata().getPostsMetadata();
  const postsToShowMetadata = ["Charon", "Raster Modeler", "Tempsens", "Maanteeamet Timescanner"]
    .map(title => postMetadata.find(metadata => metadata.title === title)!);

  return (
    <div>
      <section className="banner" style={{
        backgroundImage: "url('static/img/banner.jpg')",
        backgroundPosition: "0 20%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "66vw",
        maxHeight: "500px"
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h2 style={{ color: "#fff" }}>
            Portfolio
          </h2>
        </div>
      </section>


      <div className="content-container-lg">
        <div className="py-5">
          <div>
            {postsToShowMetadata.map((project, i) =>
              <PostPreview key={project.title} index={i} postMetadata={project} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
