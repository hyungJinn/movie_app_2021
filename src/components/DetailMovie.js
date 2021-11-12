import PropTypes from "prop-types";

function DetailMovie({ props }) {
  return (
    <div>
      <img src={props.medium_cover_image} />
      <h2>{props.title}</h2>
      <p>
        {props.year} / {props.rating} / {props.runtime}
      </p>
      <ul>
        {props.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{props.description_full}</p>
    </div>
  );
}
export default DetailMovie;
