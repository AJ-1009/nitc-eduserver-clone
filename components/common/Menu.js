import Link from "next/link";
import { useState } from "react";
import {
  FaArrowCircleDown,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaQrcode,
} from "react-icons/fa";
import styles from "./menu.module.css";
function Menu() {
    const [showhelpdesk,setshowhelpdesk] = useState(false)
  return (
    <div>
      <div className={styles["main-wrapper"]}>
        <div className={styles["input-wrapper"]}>
          <div className={styles["qr-code"]}>
            <FaQrcode />
          </div>
          <input
            type="text"
            className={styles["input"]}
            placeholder="Enrollment Code"
          />
          <div className={styles["enroll"]}>Enroll</div>
        </div>
        <div className={styles["link-wrapper"]}>
          <Link href="/dashboard">
            <div className={styles["link"]}>
              <div className={styles["icon"]}>
                <FaHome />{" "}
              </div>
              Dashboard
            </div>
          </Link>
          <div className={styles["link"]}>
            <div className={styles["icon"]}>
              <FaCalendarAlt />
            </div>
            Calender
          </div>
          <Link href="/course">
            <div className={styles["link"]}>
              <div className={styles["icon"]}>
                {" "}
                <FaBook />
              </div>
              All Courses
            </div>
          </Link>
          <div className={styles["link"]} onClick={()=>setshowhelpdesk(!showhelpdesk)} >
            <div className={styles["icon"]}>
              {" "}
              <FaArrowCircleDown />
            </div>
            Help Desk
          </div>
        </div>
      </div>
      <div className={styles["help-desk"]} style={{height:showhelpdesk?'auto':0,padding:showhelpdesk?'20px 0':0,borderWidth:showhelpdesk?'1px':0}} >
       <div className={styles['bold']}> NITC Eduserver Help Desk </div>
        <br />
        Email: help.eduserver@nitc.ac.in
        <br />
        <br />
         Telephone:
        0495-2286061
      </div>
    </div>
  );
}

function Text(){
    return(
        <div className={styles['text']} >
            <div className={styles['bold']}>Welcome to your homepage at the NITC Eduserver</div>
            <br />
            <br />
            <div>
                If you are a student and your teacher has provided you a six digit Enrolment Code (different from the course code), you can enter it in the box above (not visible in the mobile app) to enrol to that course. Each course has a different key, and you will have to come back to this page (click Home from the left panel) to enrol to a another course. 
                <br />
                <br />
                You can see all your courses from the link 'My Courses' at the top. Then the gear icon will show you the edit options for that course.
                <br />
                <br />
                You can visit dashboard and customise this page
            </div>
        </div>
    )
}

export {Menu,Text}