import React from "react";
import "./video.scss";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import networkRequest, { getVideoDetails } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

export default function Video({ video, channelScreen }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const dispatch = useDispatch();
  const videoDetails = useSelector((state) => state.homeVideos.videoDetails);
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  const { homeVideosStatus } = useSelector((state) => state.homeVideos);

  useEffect(() => {
    const getVideoDetails = async () => {
      //networkRequest is axios instant, destructure items from response we getting from network request
      const {
        data: { items },
      } = await networkRequest("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });

      setDuration(items[0].contentDetails?.duration);
      setViews(items[0].statistics?.viewCount);
    };
    setChannelIcon(video?.snippet.thumbnails.default);

    !homeVideosStatus && getVideoDetails();

    setDuration(video?.contentDetails?.duration);
    setViews(video?.statistics?.viewCount);
  }, [_videoId, video, homeVideosStatus]);

  const handleVideoClick = () => {
    navigate(`/watch/${_videoId}`);
  };
  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video__top">
        {/* <img src={medium.url} alt="" /> */}
        <LazyLoadImage src={medium?.url} effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>

        <span> {moment(publishedAt).fromNow()}</span>
      </div>
      {!channelScreen && (
        <div className="video__channel">
          <LazyLoadImage src={channelIcon?.url} effect="blur" />
          <p>{channelTitle}</p>
        </div>
      )}
    </div>
  );
}
