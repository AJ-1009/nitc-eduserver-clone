import Link from "next/link";
import styles from "./my-courses.module.css";
export default function MyCourses({ check }) {
  return (
    <div>
      {check && (
        <div className={styles["my-courses"]}>
          <Link href="/dashboard">
            {" "}
            <div> Dashboard </div>
          </Link>
          <div> EE2091D Basic Electrical Engineering Lab (A Batch) </div>
          <div> EE2007D Basic Electronic Circuits (A Batch) </div>
          <div> EE2009D Applied Electromagnetics (A Batch) </div>
          <div> EE2001D Circuits And Networks (A Batch) </div>
        </div>
      )}
    </div>
  );
}
