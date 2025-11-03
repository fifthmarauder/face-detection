"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button/button";
import LeftArrow from "@/components/icon/leftarrow";
import SearchIcon from "@/components/icon/SearchIcon";

import styles from "./page.module.css";

const Page = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("image");
    // parse the stored JSON string to get the image data
    const imageData = storedUser ? JSON.parse(storedUser).data : null;
    if (imageData) {
      setImage(imageData);
    }
  }, []);

  const handleBack = () => {
    router.push("/dashboard/upload");
  };

  const handleDetect = () => {
    console.log("Detect button clicked");
  };

  return (
    <>
      <div className={styles.parent}>
        <Button
          style={{
            color: "black",
            width: "50px",
            gap: "10px",
            fontSize: "18px",
          }}
          onClick={handleBack}
        >
          <LeftArrow width="16px" height="16px" color="black" />
          <div>Back</div>
        </Button>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image as string} alt="Image" width={400} height={400} />
            )}
            {!image && (
              <div style={{ padding: "8px" }}>No image to display</div>
            )}
          </div>
          <Button
            style={{
              color: "rgb(195, 190, 185)",
              backgroundColor: "rgb(1, 1, 50)",
              gap: "10px",
            }}
            onClick={handleDetect}
          >
            <SearchIcon height="16px" width="16px" color="rgb(195, 190, 185)" />
            <div>Detect</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
