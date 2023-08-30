import "./avatar.scss";
const Avatar = ({ img_avatar, cast_name }) => {
  return (
    <>
      <div className="avatar-container">
        <div className="img-avatar">
          <img
            src={`https://image.tmdb.org/t/p/w500/${img_avatar}`}
            alt="avatar"
          />
        </div>
        <p>{cast_name}</p>
      </div>
    </>
  );
};
export default Avatar;
