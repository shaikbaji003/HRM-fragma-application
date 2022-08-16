import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Fragma Data Systems</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">21</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://tse2.mm.bing.net/th?id=OIP.JKXEQ7JpEb3DaeCuedPudwHaHa&pid=Api&P=0" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
