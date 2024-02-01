const Image = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank">
      <img
        className="restapi-project-image"
        src={data.urls}
        alt={data.description}
      />
    </a>
  );
};
export default Image;
