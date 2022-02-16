import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_videoRightbar.scss";
import { Col, Row } from "react-bootstrap";
import networkRequest from "../../api";
import { useNavigate } from "react-router-dom";

//VideoRightbar rendered by Subscription, Search, Watch
export default function VideoRightbar({
  video,
  searchScreen,
  subScreen,
  likedVideoScreen,
}) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;
  //check if its channel or video
  //subScreen came from Subscription.js
  const isVideo = !(id.kind === "youtube#channel" || subScreen);
  const { snippet, contentDetails, statistics } = useSelector(
    (state) => state.likedVideos.videos
  );

  const videoId = id.videoId ? id.videoId : id;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const navigate = useNavigate();

  const _channelId = resourceId?.channelId || channelId;
  //momment library
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  //set className for channel
  const thumbnail = !isVideo && "videoRightBar__thumbnail-channel";

  useEffect(() => {
    const getVideoDetails = async () => {
      //networkRequest is axios instant, destructure items from response we getting from network request
      const {
        data: { items },
      } = await networkRequest("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId || id,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) getVideoDetails();
    //dispatch(getVideoDetails(id.videoId));
  }, [id, isVideo]);

  useEffect(() => {
    const getChannelIcon = async () => {
      try {
        //request is axios instant, destructure items from response we getting from network request
        const {
          data: { items },
        } = await networkRequest("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        });
        setChannelIcon(items[0].snippet.thumbnails.default);
      } catch (error) {
        console.log(error.message);
      }
    };
    getChannelIcon();
    //dispatch(getVideoDetails(id.videoId));
  }, [channelId]);

  useEffect(() => {
    setDuration(contentDetails?.duration);
    setViews(statistics?.viewCount);
  }, [likedVideoScreen]);

  const handleClick = () => {
    isVideo
      ? navigate(`/watch/${videoId}`)
      : navigate(`/channel/${_channelId}`);
  };

  return (
    <Row
      className="py-2 m-1 videoRightBar align-items-center "
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={searchScreen || subScreen || likedVideoScreen ? 4 : 6}
        className="videoRightBar__left"
      >
        <LazyLoadImage
          src={medium?.url}
          effect="blur"
          className={`videoRightBar__thumbnail ${thumbnail}`}
          wrapperClassName="videoRightBar__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoRightBar__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen || subScreen || likedVideoScreen ? 8 : 6}
        className="videoRightBar__right p-0"
      >
        <p className="videoRightBar__title mb-1 ">{title}</p>

        {isVideo && (
          <div className="videoRightBar__details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {(searchScreen || subScreen) && (
          <p className="mt-1 videoRightBar__desc">{description}</p>
        )}
        <div className="videoRightBar__channel d-flex align-items-center my-1">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}

          <p className="mb-0">{channelTitle}</p>
        </div>
        {subScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} videos</p>
        )}
      </Col>
    </Row>
  );
}
