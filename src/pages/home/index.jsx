import React from "react";
import Navbar from "../../components/navbar";
import {
  MdHistory,
  MdHome,
  MdPlayCircleOutline,
  MdSubscriptions,
  MdThumbUp,
  MdTrendingUp,
  MdVideoLibrary,
  MdWatchLater,
} from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const { data } = useQuery({
    queryKey: ["VIDEO"],
    queryFn: () =>
      axios.get("http://localhost:5000/videos").then((value) => value.data),
  });

  console.log(data);

  return (
    <>
      <Navbar />
      {/* <Link className="dashbord__style" to={"/dashboard"}>
        <FontAwesomeIcon icon={faHouse} className="icon" />
        <h3>Home</h3>
      </Link> */}
      <section className="m-auto flex  items-start ">
        <div className="  flex flex-col gap-9 pt-4 p-7 w-[20%] fixed left-0 bottom-0 z-19  h-[90vh] bg-[#FFF] shadow-[2px_0_3px_rgba(0,0,0,0.1)]">
          <Link to={"/"}>
            <h3 className="flex items-center gap-8  text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdHome className="text-[24px] text-[rgb(96,96,96)]" />
              Home
            </h3>
          </Link>
          <Link to={"/tranding"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdTrendingUp className="text-[24px] text-[rgb(96,96,96)]" />
              Trending
            </h3>
          </Link>
          <Link to={"/obunalar"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdSubscriptions className="text-[24px] text-[rgb(96,96,96)]" />
              Subscriptions
            </h3>
          </Link>
          <div className="border"></div>
          <Link to={"/kutubxona"}>
            <h3 className="flex items-center gap-8 text-[rgb(96,96,96)] text-[19px] font-medium">
              <MdVideoLibrary className="text-[24px]" />
              Library
            </h3>
          </Link>
          <Link to={"/history"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdHistory className="text-[24px]" />
              History
            </h3>
          </Link>
          <Link to={"/videos"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdPlayCircleOutline className="text-[24px]" />
              Your videos
            </h3>
          </Link>
          <Link to={"/watch"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdWatchLater className="text-[24px]" />
              Watch later
            </h3>
          </Link>
          <Link to={"like"}>
            <h3 className="flex items-center gap-8 text-[19px] text-[rgb(96,96,96)] font-medium">
              <MdThumbUp className="text-[24px]" />
              Liked videos
            </h3>
          </Link>
        </div>

        <div className=" w-[80%] absolute right-0 p-4">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Home;
