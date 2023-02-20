import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { PROJECT_QUERY } from "../gql/ProjectPageQuery";
import { Projects } from "../../__generated__/graphql";
import { ReactNode } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  LazyLoadImage,
  trackWindowScroll,
  //@ts-ignore
} from "react-lazy-load-image-component";
import "./ProjectPage.less";

interface ProjectPageProps {
  scrollPosition: Object;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  scrollPosition,
}) =>  {
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
    <div className="project-page__container">
      <h1>{project.title}</h1>
      <div>{documentToReactComponents(project.description?.json)}</div>
      <Masonry columns={3} className="project-page__masonry">
        {gallery &&
          gallery.map((url, index): ReactNode => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return (
              <div key={index} className="project-page__image-container">
                <LazyLoadImage
                  key={index}
                  alt={"TODO"}
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src={url}
                  width={"100%"}
                />
              </div>
            );
          })}
      </Masonry>
    </div>
  );
}

export default trackWindowScroll(ProjectPage);
