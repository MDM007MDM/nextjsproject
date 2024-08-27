"use client";
import React from "react";
import styles from "./AboutMe.module.css"; 


const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>เกี่ยวกับฉัน</h1>
      <div className={styles.info}>
        <img src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/448885886_1514216502526832_2623288067124073313_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGyZ0odgFa-hhRbhW5vBsFGOFIRFNo3UNk4UhEU2jdQ2VwlZkC2rlPBu5io3qWK3jUaMYgfmH5LKW5mUnuYvVOv&_nc_ohc=7BoSYhIqHAIQ7kNvgErj0Ov&_nc_ht=scontent.futh1-1.fna&oh=00_AYBazK9gxkNItgcf3NeFtF_T97R4hWRLuOB9a9V_AIlHFA&oe=66D3E53C" width={300} height="auto"/>
        <p><strong>ชื่อ:</strong> นางสาว ชฎาพร พินิจสัย</p>
        <p><strong>รหัสนักศึกษา:</strong> 653450281-9</p>
        <p><strong>สาขา:</strong> CIS</p>
        <p><strong>วิชาเอก:</strong> CS</p>
      </div>
    </div>
  );
};

export default AboutMe;
