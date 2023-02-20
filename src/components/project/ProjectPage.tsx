import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { PROJECT_QUERY } from "../gql/ProjectPageQuery";
import { Projects } from "../../__generated__/graphql";
import { ReactNode } from "react";
//@ts-ignore

function ProjectPage() {
  const { projectName } = useParams();
  const { loading, data } = useQuery(PROJECT_QUERY, {
    variables: { slug: projectName },
  });

  if (loading) {
    return <div>Loading</div>;
  } else if (!data || !data.projectsCollection.items) {
    return <div>Error</div>;
  }

  const project = data.projectsCollection.items[0] as Projects;
  const gallery: string[] = [];
  project.galleryCollection?.items.forEach((item) => {
    if (item?.url) {
      gallery.push(item.url);
    }
  });

  return (
    <div>
      <Masonry columns={3}>
        {gallery &&
          gallery.map((url, index): ReactNode => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return (
              <div key={index}>
                <img
                  src={`${url}`}
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            );
          })}
      </Masonry>
    </div>
  );
}

export default ProjectPage;
