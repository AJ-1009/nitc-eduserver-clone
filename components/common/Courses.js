import React, { useState } from "react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import styles from "./courses.module.css";
export default function Courses() {
  const [currentarrow, setcurrentarrow] = useState(<FaCaretDown />);
  const [upcommingarrow, setupcommingarrow] = useState(<FaCaretRight />);
  const [opencurrent, setopencurrent] = useState(true);
  const [openupcoming, setopenupcoming] = useState(false);
  const [text, settext] = useState("Expand");
  const [expandarrrow, setexpandarrow] = useState(<FaCaretRight />);
  const current = () => {
    if (opencurrent) {
      setopencurrent(false);
      setcurrentarrow(<FaCaretRight />);
    } else {
      setopencurrent(true);
      setcurrentarrow(<FaCaretDown />);
    }
  };
  const upcoming = () => {
    if (openupcoming) {
      setopenupcoming(false);
      setupcommingarrow(<FaCaretRight />);
    } else {
      setopenupcoming(true);
      setupcommingarrow(<FaCaretDown />);
    }
  };
  const expand = () => {
    if (text == "Collapse") {
      setupcommingarrow(<FaCaretRight />);
      setopenupcoming(false);
      setcurrentarrow(<FaCaretRight />);
      setopencurrent(false);
      settext("Expand");
      setexpandarrow(<FaCaretRight />);
    } else {
      settext("Collapse");
      setexpandarrow(<FaCaretDown />);
      setupcommingarrow(<FaCaretDown />);
      setopenupcoming(true);
      setcurrentarrow(<FaCaretDown />);
      setopencurrent(true);
    }
  };
  return (
    <div>
      <div className={styles["heading"]}>Course Categories</div>
      <div className={styles["main-wrapper"]}>
        <div>
          <div className={styles["sub-heading"]} onClick={current}>
            {" "}
            {currentarrow} Current Courses
          </div>
          <div
            className={styles["course"]}
            style={{ height: opencurrent ? "auto" : 0,marginTop:opencurrent?'20px':0 }}
          >
            <div>
              {" "}
              <FaCaretRight /> Architecture Planning{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Chemical Engineering{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Chemistry{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Civil Engineering{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Computer Science And Engineering
            </div>
            <div>
              {" "}
              <FaCaretRight /> Electrical Engineering
            </div>
            <div>
              {" "}
              <FaCaretRight /> Electronics and Communication Engineering
            </div>
            <div>
              {" "}
              <FaCaretRight /> Mathematics{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Mechanical Engineering{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> Physics{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> School of Biotechnology{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> School of Maganement studies{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> School of Material Science and Engineering{" "}
            </div>
            <div>
              {" "}
              <FaCaretRight /> School of Physical Education{" "}
            </div>
          </div>
          <div className={styles["sub-heading"]} onClick={upcoming}>
            {" "}
            {upcommingarrow} Upcoming Courses
          </div>
          <div className="course"></div>
        </div>{" "}
        <div className={styles["expand"]} onClick={expand}>
          {" "}
          {expandarrrow} {text} all{" "}
        </div>
      </div>
    </div>
  );
}
