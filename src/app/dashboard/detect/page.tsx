"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button/button";
import LeftArrow from "@/components/icon/leftarrow";
import SearchIcon from "@/components/icon/SearchIcon";

import styles from "./page.module.css";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [imageBytes, setImageBytes] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [boundingBox, setBoundingBox] = useState({
    leftCol: 0,
    topRow: 0,
    rightCol: 0,
    bottomRow: 0,
  });
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("image");
    // parse the stored JSON string to get the image data
    const imageUrl = storedUser ? JSON.parse(storedUser).data : null;
    const imageData = storedUser ? JSON.parse(storedUser).imageBytes : null;

    if (imageUrl) {
      setImage(imageUrl);
    }
    if (imageData) {
      setImageBytes(imageData);
    }
  }, []);

  const handleBack = () => {
    router.push("/dashboard/upload");
  };

  const handleDetect = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/image/detect",
      { imageUrl: image, imageData: imageBytes }
    );
    setBoundingBox(getBoundingBox(response.data));
    setFaceDetected(true);
  };

  const getBoundingBox = (box) => {
    const height = 400;
    const width = 400;
    const boundingBox = {
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - box.right_col * width,
      bottomRow: height - box.bottom_row * height,
    };
    return boundingBox;
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
              <>
                <img
                  src={image as string}
                  alt="Image"
                  width={400}
                  height={400}
                />
                {faceDetected && (
                  <div
                    className={styles.boundingBox}
                    style={{
                      top: boundingBox.topRow,
                      left: boundingBox.leftCol,
                      right: boundingBox.rightCol,
                      bottom: boundingBox.bottomRow,
                    }}
                  ></div>
                )}
              </>
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
