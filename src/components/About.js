function About(props) {
  return (
    <aside>
      <img
        src={
          props.image === undefined
            ? "https://via.placeholder.com/215"
            : props.image
        }
        alt="blog logo"
      />
      <p>{props.about}</p>
    </aside>
  );
}
export default About;
