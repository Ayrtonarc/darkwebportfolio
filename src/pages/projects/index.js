import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function ProjectsPage({ projects }) {
  return (
    <section>
      <PageDescription
        title="Projects"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}

export async function getServerSideProps() {
  let projects = [
    {
      _id: 1,
      name: "Anonymus chat Graphql endpoint",
      description:
        "is an innovative anonymous messaging application designed to protect your privacy and allow you to communicate securely without revealing your identity. You can send text messages, images, and attachments without worrying about being tracked or identified. Each user is identified with a unique pseudonym, ensuring complete anonymity.",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg",
    },
    // {
    //   _id: 2,
    //   name: "Wilsonport",
    //   description:
    //     "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
    //   imageUrl:
    //     "https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg",
    // },
  ];

  return {
    props: {
      projects,
    },
  };
}