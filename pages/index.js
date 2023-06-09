import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

function Yoga() {
  return (
    <div>
      <Head>
        <title>Premium Yoga and Breathing Exercises</title>
        <link rel="icon" type="image/png" href="logo.png"></link>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <img src="logo.JPG" className={styles.logo} />
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
          <h1
            style={{ fontWeight: 400, fontSize: "40px", marginBottom: "10px" }}
          >
            About Me
          </h1>

          <span>Hi,</span>
          <br />
          <p>
            My name is Himali Shah. I moved to the great nation of USA a few
            months ago, from India&#40;भारत&#41;. I reside in Iselin with a
            Green card status.
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
              instructor is not responsible in any way. (AGES 5+)
            </li>
            <li>
              The languages used in the session will be Hindi, Gujarati and
              basic English.
            </li>
          </ul>
        </div>
        <div className={styles.img_wrapper}>
          <img src="/bg-2.png" className={styles.img} />
        </div>
      </div>
      <div className={styles.schedule_container} id="schedule">
        <h1 style={{ fontWeight: 400, fontSize: "40px", marginBottom: "10px" }}>
          Schedule
        </h1>
        <p className={styles.text}>
          Where: online or in-person &#40;pick up service is required if it is
          at your home&#41;
        </p>
        <p className={styles.text}>
          Session Type: Personal &#40;1-to-1&#41; or a group of 4 &#40;if ready
          by your side&#41;
        </p>
        <p className={styles.text}>
          Timing of Sessions: 30 or 45 minutes per session
        </p>
        <p className={styles.text}>
          Phone #: +1 &#40;848&#41; 318-7302 <br /> Email: himss444@gmail.com{" "}
        </p>
      </div>
      <div className={styles.payment_section}>
        <h1 style={{ fontWeight: 400, fontSize: "40px", marginBottom: "10px" }}>
          Payment Information
        </h1>
        <p className={styles.text}>
          Personal session - $45 for 45 minutes / $30 for 30 minutes
        </p>
        <p className={styles.text}>
          Group session - $60 &#40;total&#41; for 45 minutes{" "}
        </p>
        <p className={styles.text} style={{ fontWeight: 600 }}>
          All Payments Must Be Made Using Card or PayPal!
        </p>
      </div>
    </div>
  );
}

export default Yoga;
