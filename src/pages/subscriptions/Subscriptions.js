import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/subscriptionAction";
import "./subscription.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoRightbar from "../../components/videoRightbar/VideoRightbar";
import { Container } from "react-bootstrap";

export default function Subscriptions() {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector(
    (state) => state.subscriptionChannelVideos
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);
  return (
    <div>
      <Container fluid>
        {!loading ? (
          videos?.map((video) => (
            <VideoRightbar video={video} key={video.id} subScreen />
          ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="160px" count={20} />
          </SkeletonTheme>
        )}
      </Container>
    </div>
  );
}
