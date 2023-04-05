import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

function Yoga() {
  return (
    <div>
      <div className={styles.bg}></div>
      <div className={styles.cover}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p>Logo</p>
          </div>
          <div className={styles.grid_2}>
            <ul className={styles.header_list}>
              <Link href="/#about">
                <li>About</li>
              </Link>
              <Link href="/#schedule">
                <li>Schedule</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.hero}>
          <h1
            style={{ fontWeight: 400, fontSize: "40px", marginBottom: "10px" }}
          >
            Premium Yoga and Breathing Exercises For Any Health Issues
          </h1>
          <p style={{ fontSize: "17px" }}>
            {" "}
            Personalized sessions from a well certified and experienced
            Practitioner Available online and In-person classes. depression,
            stress release, anxiety, loneliness, mood swing healing with vocal
            therapeutic talk.
          </p>
        </div>
      </div>
      <div className={styles.about_section} id="about">
        <div className={styles.padding}>
          <span>Hi,</span>
          <br />
          <p>
            My name is Himali Shah. I moved to the great nation of USA a few
            months ago, from India(भारत). I reside in Iselin with a Green card
            status.
          </p>
          <p>
            Myself being a yoga teacher, with many official certificates and
            experiences of instructing yoga classes and helping people in their
            personal problems with vocal therapeutic talk has been a big part of
            my life. I also have experience of acupressure and face diagnosis
            and treatment.
          </p>
          <p>
            The aim is to give these gifts and joy to everyone in need and help
            them guide a good way to move forward in life.
          </p>
          <br />
          <p>
            The sessions are customized based on the individual issues and
            interests. A combination of any method namely yoga asana, pranayama
            or breathing exercises, therapeutic talking can be combined as
            required. Guidance will be provided for that. These sessions will
            give you benefits in physical, mental, spiritual and emotional
            health.
          </p>
          <br />
          <ul style={{ fontWeight: 600, listStyleType: "decimal" }}>
            <li>
              Any activity done extremely or in a non recommended way may lead
              to serious injury or damage to health. In such cases, the
              instructor is not responsible in any way.
            </li>
            <li>
              The languages used in the session will be Hindi, Gujarati and
              basic English.
            </li>
          </ul>
        </div>
        <div className={styles.img_wrapper}>
          <img src="/bg.png" className={styles.img} />
        </div>
      </div>
      <div className={styles.schedule_container}>
        <h1 style={{ fontWeight: 400, fontSize: "40px", marginBottom: "10px" }}>
          Schedule
        </h1>
        <p className={styles.text}>
          Where: online or in-person (pick up service is required if it is at
          your home)
        </p>
        <p className={styles.text}>
          Session Type: Personal (1 to 1) or a group of 4 (if ready by your
          side)
        </p>
        <p className={styles.text}>
          Timing of Sessions: 30 ($30 for 1-to-1) or 45 ($45 for 1-to-1 and $60
          for a group) minutes per session
        </p>
        <p className={styles.text}>Payment Method: Card or PayPal</p>
        <p className={styles.text}>
          Phone #: +1 (848) 318-7302 <br /> Email: himss444@gmail.com{" "}
        </p>
      </div>
    </div>
  );
}

export default Yoga;
