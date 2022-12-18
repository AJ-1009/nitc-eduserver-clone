import Link from "next/link";
import {
  FaTachometerAlt,
  FaUser,
  FaTh,
  FaComment,
  FaWrench,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./my-id.module.css";
export default function MyId({ check }) {
  return (
    <div>
      {check && (
        <div className={styles["my-id"]}>
          <Link href="/dashboard">
            {" "}
            <div className={styles["dashboard"]}>
              {" "}
              <FaTachometerAlt /> Dashboard{" "}
            </div>{" "}
          </Link>
          <Link href="/profile">
            <div>
              <FaUser /> Profile{" "}
            </div>
          </Link>
          <div>
            <FaTh /> Grades
          </div>
          <div>
            {" "}
            <FaComment /> Message
          </div>
          <div>
            <FaWrench /> Preferences
          </div>
          <div className={styles["signout"]}>
            <FaSignOutAlt /> Log out{" "}
          </div>
        </div>
      )}
    </div>
  );
}
