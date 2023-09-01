import { useState } from "react";
import { sliceArray } from "../../utility/sliceArray";
import ReactPlayer from "react-player";
import { getVideo } from "../../redux_App/VideoPlay";
import { AiFillYoutube } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import "./videoplayer.scss";
import Loader from "../Loader/Loader";

const Player = ({ keyVideo, setVid }) => {
  console.log(keyVideo);
  return (
    <div className="player">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${keyVideo}`}
        controls
        playing={true}
        width="650px"
        height="450px"
      />
      <div
        onClick={() => {
          setVid(false);
        }}
        className="close"
      >
        <IoCloseSharp className="cl-icon" />
      </div>
    </div>
  );
};

const VideoPlayer = ({ id }) => {
  let sortArray;
  const [vid, setVid] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.VideoPlay);

  const handleClick = () => {
    dispatch(getVideo(id));
    setVid(true);
  };
  if (!loading) {
    sortArray = sliceArray(data.results, 2, 3);
    console.log(sortArray);
  }

  return (
    <>
      <div onClick={handleClick} className="video-tab" role="button">
        <AiFillYoutube />
        <span>Watch Trailer</span>
      </div>
      {loading ? null : vid && sortArray.length > 0 ? (
        <Player keyVideo={sortArray[0].key} setVid={setVid} />
      ) : null}
    </>
  );
};

export default VideoPlayer;
