import { useState } from "react";
import { FaBars, FaBell, FaCaretDown, FaUser } from "react-icons/fa";
import MyCourses from "./MyCourses";
import MyId from "./MyId";
import styles from "./navbar.module.css";
import Notification from "./Notification";

export default function Navbar() {
  const [notification, setnotification] = useState(false);
  const [id, setid] = useState(false);
  const [courses,setcourses] = useState(false)
  return (
    <div>
      <div className={styles["nav-bar"]}>
        <div className={styles["ul-1"]}>
          <div className={styles["bars"]}>
            {" "}
            <FaBars />{" "}
          </div>
          <div className={styles["name"]}>Eduserver</div>
          <div className={styles["course"]} onClick={()=>{
            setcourses(!courses)
            setnotification(false)
            setid(false)
          }} >
            {" "}
            My Courses{" "}
            <div className={styles["caretdown-1"]}>
              {" "}
              <FaCaretDown />{" "}
            </div>
          </div>
        </div>
        <div className={styles["ul-2"]}>
          <div
            className={styles["bell"]}
            onClick={() => {
              setnotification(!notification);
              setid(false);
            }}
          >
            {" "}
            <FaBell />{" "}
          </div>
          <div
            className={styles["users"]}
            onClick={() => {
              setcourses(false)
              setid(!id);
              setnotification(false);
            }}
          >
            ASHWIN GARG
            <div className={styles["user-icon"]}>
              <FaUser />
            </div>
          </div>
          <div
            className={styles["caretdown-2"]}
            onClick={() => {
              setid(!id);
              setnotification(false);
              setcourses(false)
            }}
          >
            <FaCaretDown />
          </div>
        </div>
      </div>
      <Notification check={notification} />
      <MyId check={id} />
      <MyCourses check={courses} />
    </div>
  );
}
