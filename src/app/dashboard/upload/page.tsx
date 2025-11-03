"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button/button";
import ChainIcon from "@/components/icon/chainIcon";
import UploadIcon from "@/components/icon/uploadIcon";

import styles from "./page.module.css";

const Page = () => {
  const router = useRouter();

  const [userURL, setuserURL] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitUrl = () => {
    if (!userURL) {
      alert("Please enter a valid URL");
      return;
    };
    localStorage.setItem("image", JSON.stringify({ data: userURL }));
    router.push("/dashboard/detect");
  };

  const handleSubmitImage = () => {
    if (!imageURL) {
      alert("Please upload an image");
      return;
    };
    localStorage.setItem("image", JSON.stringify({ data: imageURL }));
    router.push("/dashboard/detect");
  };

  const handleUploadImage = () => {
    inputRef.current?.click();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const imageData = e.target.files[0];
    const objectUrl = URL.createObjectURL(imageData);
    setImage(imageData);
    setImageURL(objectUrl);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Upload Image</div>

          {/* Image URL */}
          <div className={styles.urlContainer}>
            <div className={styles.urlTitle}>Enter Image URL</div>
            <div className={styles.urlLinkContainer}>
              <input
                placeholder="Enter Link Here"
                style={{ flex: 1 }}
                value={userURL}
                onChange={(e) => {
                  setuserURL(e.target.value);
                }}
              />
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                onClick={handleSubmitUrl}
              >
                <ChainIcon width={"16"} height={"16"} color={"gray"} />
                <div>Submit</div>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div>OR</div>
            <div className={styles.line}></div>
          </div>

          {/* Upload Image */}
          <div className={styles.imageContainer}>
            <div className={styles.urlTitle}>Upload from Computer</div>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <div className={styles.urlLinkContainer}>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid gray",
                  flex: 1,
                }}
                onClick={handleUploadImage}
              >
                <UploadIcon width="16" height="16" color="black" />
                <div>Upload Image Icon</div>
              </Button>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                onClick={handleSubmitImage}
              >
                <ChainIcon width={"16"} height={"16"} color={"gray"} />
                <div>Submit</div>
              </Button>
            </div>
            {image && <div>{image.name}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
