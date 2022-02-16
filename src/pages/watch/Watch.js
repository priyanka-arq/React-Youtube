import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoRightbar from "../../components/videoRightbar/VideoRightbar";
import {
  getRelatedVieos,
  getVideoById,
} from "../../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./watch.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Watch() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVieos(id));
  }, [id, dispatch]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  const { videos, loading: relatedVideoLoading } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <div>
      <Row>
        <Col lg={8}>
          <div className="watchSreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title={video?.snippet?.title}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>

          {!loading ? (
            <VideoMetaData video={video} videoId={id} />
          ) : (
            <h5>Loading....</h5>
          )}

          <Comments
            videoId={id}
            totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          {!relatedVideoLoading ? (
            videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoRightbar video={video} key={video.id.videoId} />
              ))
          ) : (
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
              <Skeleton width="100%" height="130px" count={15} />
            </SkeletonTheme>
          )}
        </Col>
      </Row>
    </div>
  );
}
