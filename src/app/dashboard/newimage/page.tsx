"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/button";
import LeftArrow from "@/components/icon/leftarrow";
import { useRouter } from "next/navigation";

const Page = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("image");
    if (storedUser) {
      setImage(JSON.parse(storedUser).property);
    }
  }, []);
  const handleClick = () => {
    router.push("/dashboard/upload");
  };
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.back}>
          <Button
            style={{ color: "black", width: "50px", gap: "10px" }}
            onClick={handleClick}
          >
            <LeftArrow width="16px" height="16px" color="black" />
            <div>Back</div>
          </Button>
        </div>
        <div className={styles.container}>
          {/* <div className={styles.imageBox}></div> */}
          <img
            src={image as any}
            alt="Image"
            style={{ height: 400, width: 400 }}
          />
          <Button
            style={{
              color: "rgb(195, 190, 185)",
              backgroundColor: "rgb(1, 1, 50)",
            }}
            onClick={handleClick}
          >
            <div>Detect</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
