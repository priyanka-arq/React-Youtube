import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideosBySearch } from "../../redux/actions/videosAction";
import { useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoRightbar from "../../components/videoRightbar/VideoRightbar";
import { Container } from "react-bootstrap";

export default function Search() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchedVideos);

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  return (
    <Container>
      {!loading ? (
        videos
          ?.filter((video) => video.snippet)
          .map((video) => (
            <VideoRightbar video={video} key={video.id.videoId} searchScreen />
          ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}
