import { useParams } from "react-router-dom";
const aboutData = [
  {
    slug: "about-app",
    title: "About the app",
    description:
      "This application lets us add to-dos, edit, and delete items. Log in to see the edit feature. It also persist to-dos in the browsers local storage for a subsequent visit.",
  },
  {
    slug: "about-developer",
    title: "About the developer",
    description:
      "Pooja Ponnam developed a todos-app to experiment with new web features. Follow Pooja on LinkedIn @poojaponnam for more updates",
  },
];
const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
