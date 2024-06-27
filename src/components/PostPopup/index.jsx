import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPostPopup } from "../../store/calendarSlice";
import PostPopupHeader from "./PostPopupHeader";
import { formatDatetime } from "../../utils/DateUtils";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position: "absolute", right: "8px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "8px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const PostPopup = () => {
  const { postPopupPosition, selectedPost } = useSelector(
    (state) => state.calendar
  );
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(setShowPostPopup(false));
  };

  const style = {
    top: `${postPopupPosition.top}px`,
    left: `${postPopupPosition.left}px`,
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <div
      className="post-popup-container"
      style={style}
      onMouseLeave={handleClosePopup}
    >
      <PostPopupHeader />
      {selectedPost.medias.length !== 0 && (
        <Slider {...settings}>
          {selectedPost.medias.map((media, index) => {
            if (media.includes("youtube.com/embed")) {
              return (
                <iframe
                  key={index}
                  src={media}
                  title="embedded-video"
                  frameBorder="0"
                ></iframe>
              );
            } else if (
              media.endsWith(".mp4") ||
              media.endsWith(".webm") ||
              media.endsWith(".ogg")
            ) {
              return (
                <video key={index} controls style={{ height: "100%" }}>
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            } else {
              return <img key={index} src={media} alt="" />;
            }
          })}
        </Slider>
      )}
      <span className="content">{selectedPost.content}</span>
      <div className="section">
        <span className="name">Planlanan</span>
        <span className="value">
          {formatDatetime(selectedPost.scheduledTime)}
        </span>
      </div>
      <div className="section">
        <span className="name">Oluşturan</span>
        <span className="value">{selectedPost.creator}</span>
      </div>
      <div className="actions">
        <button className="btn">Düzenle</button>
        <button className="btn">Kaldır</button>
      </div>
    </div>
  );
};

export default PostPopup;
