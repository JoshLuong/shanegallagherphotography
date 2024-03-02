import { aboutContentQuery } from "@/gql/about-page-query";
import client from "@/gql/apollo-client";
import { subsectionQuery } from "@/gql/landing-page-query";
import { projectPageQuery } from "@/gql/project-page-query";
import { About, Asset, Project } from "@/types/graphql";

//pages/sitemap.xml.js
const DATA_URL = 'https://shanegallagher.com';

interface ProjectAndAssets {
  project: Project
  assets: Asset[]
  publishDate: Date
}

interface AboutPage {
  aboutImages: string[]
  publishDate: Date
}

function generateSiteMap({aboutImages, publishDate: aboutPublishDate}: AboutPage, projectsAndAssets: ProjectAndAssets[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     <url>
       <loc>${DATA_URL}</loc>
       <lastmod>${projectsAndAssets.reduce((a, b) => {
    return new Date(a.publishDate) > new Date(b.publishDate) ? a : b
  }).publishDate}</lastmod>
       ${projectsAndAssets.map(({ project }) => {
    if (project.previewImage == null) {
      return
    }
    return `
        <image:image>
          <image:loc>${project.previewImage?.url}</image:loc>
        </image:image>`})}
     </url>
     <url>
       <loc>${DATA_URL}/about</loc>
       <loc>${aboutPublishDate}</loc>
       ${aboutImages.map(
      (image) => `
        <image:image>
          <image:loc>${image}</image:loc>
        </image:image>`
    )}
     </url>
     <url>
       <loc>${DATA_URL}/contact</loc>
     </url>
     <url>
       <loc>${DATA_URL}/works</loc>
     </url>
     ${projectsAndAssets.map(({ project, assets, publishDate }) => (`
     <url>
       <loc>${DATA_URL}/${project.url?.id}</loc>
       <lastmod>${publishDate}
       </lastmod>
       ${assets.map((asset) => `
        <image:image>
          <image:loc>${asset.url}</image:loc>
        </image:image>`)
      }
     </url>
     `))}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const { data: aboutData } = await client.query({
    query: aboutContentQuery,
  })
  const { data: projects } = await client.query({
    query: subsectionQuery,
  })

  const projectsAndAssets: ProjectAndAssets[] = [];
  await Promise.all((projects.projectCollection.items as Array<Project>).map(async (item: Project) => {
    const projectData = await client.query({
      query: projectPageQuery,
      variables: { slug: item.url?.id },
    })

    let gallery: Array<Asset> = []

    for (const item of projectData.data.projectsCollection.items[0]?.galleryCollection
      ?.items) {
      if (item.contentType != 'text/plain' && item.url != null) {
        gallery.push(item)
      }
    }

    projectsAndAssets.push({
      project: item,
      assets: gallery,
      publishDate: new Date(item.sys.publishedAt) > new Date(projectData.data.projectsCollection.items[0].sys.publishedAt) ? item.sys.publishedAt : projectData.data.projectsCollection.items[0].sys.publishedAt
    })

  }))


  const aboutPage = {
    aboutImages: (aboutData.about as About).portraitsCollection!!.items.map(item => item!!.url || ""),
    publishDate: (aboutData.about as About).sys.publishedAt
  }
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(aboutPage,
    projectsAndAssets);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;