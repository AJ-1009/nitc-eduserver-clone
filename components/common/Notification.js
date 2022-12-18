import React from "react";
import { FaCheck, FaCog } from "react-icons/fa";
import styles from "./notification.module.css";
export default function Notification({ check }) {
  return (
    <div>
      {check && (
        <div className={styles["notifications"]}>
          <nav className={styles["notification-nav"]}>
            <div>Notifications</div>
            <ul>
              <li>
                <FaCheck />
              </li>
              <li>
                <FaCog />
              </li>
            </ul>
          </nav>
          <div className={styles["noti"]}>You have no notifications</div>
          <div className={styles["see"]}>See all</div>
        </div>
      )}
    </div>
  );
}
