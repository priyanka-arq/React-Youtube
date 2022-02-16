import React from "react";
import "./_videoMataData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { getChannelDetails } from "../../redux/actions/channelAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  checkSubscriptionStatus,
  subascribeChannel,
} from "../../redux/actions/subscriptionAction";
import { getCommentsDetails } from "../../redux/actions/commentListAction";
import HelmetCustom from "../helmetCustom/HelmetCustom";
import { likeVideo } from "../../redux/actions/videosAction";

export default function VideoMetaData({
  video: { snippet, statistics },
  videoId,
}) {
  const { channelId, title, publishedAt, description, channelTitle } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);
  const { subscriptionStatus } = useSelector(
    (state) => state.subscriptionStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  const handleSubscriptionStatus = async () => {
    await dispatch(subascribeChannel(channelId));
    await dispatch(checkSubscriptionStatus(channelId));
  };

  const handleLikeVideo = async () => {
    await dispatch(likeVideo(channelId));
  };
  return (
    <div>
      <HelmetCustom title={title} description={description} />
      {/* #py-2 is  padding top and bottom 2 unit */}
      <div className="videoMetaData py-2">
        <div className="videoMetaData__top">
          <h5>{title}</h5>
          <div className="d-flex justify-content-between align-items-center py-1">
            <span>
              {numeral(viewCount).format("0.a")} Views •
              {moment(publishedAt).fromNow()}
            </span>

            <div>
              <span className="mr-3" style={{ marginRight: "10px" }}>
                <MdThumbUp size={26} onClick={handleLikeVideo} />
                {numeral(likeCount).format("0.a")}
              </span>
              <span className="mr-3" style={{ marginRight: "10px" }}>
                <MdThumbDown size={26} />
                {numeral(dislikeCount).format("0.a")}
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img
              src={channelSnippet?.thumbnails?.default?.url}
              alt=""
              className="mr-3 rounded-circle "
              style={{ marginRight: "10px" }}
            />
            <div className="d-flex flex-column">
              <span>{channelTitle}</span>
              <span>
                {" "}
                {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
                Subscribers
              </span>
            </div>
          </div>
          <button
            className={`p-2 m-2 border-0 btn ${
              subscriptionStatus && "btn-gray"
            }`}
            onClick={handleSubscriptionStatus}
          >
            {subscriptionStatus ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <div className="videoMetaData__description">
          <ShowMoreText
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
          >
            {description}
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
}
