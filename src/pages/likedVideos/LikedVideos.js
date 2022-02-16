import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoRightbar from "../../components/videoRightbar/VideoRightbar";
import { getLikedVideos } from "../../redux/actions/videosAction";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "react-bootstrap";

export default function LikedVideos() {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.likedVideos);
  console.log("video rightbar", videos);
  useEffect(() => {
    dispatch(getLikedVideos());
  }, [dispatch]);
  return (
    <Container>
      {!loading ? (
        videos
          ?.filter((video) => video.snippet)
          .map((video) => (
            <VideoRightbar
              video={video}
              key={video.id.videoId}
              likedVideoScreen
            />
          ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}
