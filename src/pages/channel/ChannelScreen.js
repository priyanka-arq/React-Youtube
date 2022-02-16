import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannelVideos } from "../../redux/actions/videosAction";
import "./channelScreen.scss";
import { Container, Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Video from "../../components/video/Video";
import numeral from "numeral";
import { getChannelDetails } from "../../redux/actions/channelAction";
export default function ChannelScreen() {
  const dispatch = useDispatch();
  const { channelId } = useParams();

  const { videos, loading } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );

  useEffect(() => {
    dispatch(getChannelVideos(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img src={snippet?.thumbnails?.default?.url} alt="" />

          <div className="ml-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>
      <Container>
        <Row className="mt-3">
          {!loading
            ? videos?.map((video) => (
                <Col md={3} lg={3}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => (
                <Col>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="140px" />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
}
