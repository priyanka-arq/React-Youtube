import React from "react";
import "./_categories.scss";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videosAction";
export default function Categories() {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const keywords = [
    "All",
    "Javascript",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Poor Coder",
    "Algorithm Art ",
    "Meditation music",
    "Music",
    "Thrillers",
    "Courses",
    "Indian soap operas",
    "ios",
    "Conversation",
    "Comedy",
    "Live",
    "Nature",
    "T-Series",
    "Music",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
  ];

  const handleClick = (value) => {
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
      // getVideosByCategory(value, dispatch);
    }

    setActiveElement(value);
  };
  return (
    <div className="categories" data-test="categoriesComponent">
      <HiChevronLeft />
      {keywords.map((keyword, i) => (
        <span
          data-test="buttonComponent"
          className={activeElement === keyword ? "active" : ""}
          key={i}
          onClick={() => handleClick(keyword)}
        >
          {keyword}
        </span>
      ))}
      <HiChevronRight />
    </div>
  );
}
