"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/button";
import ChainIcon from "@/components/icon/chainIcon";
import UploadIcon from "@/components/icon/uploadIcon";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [urlContent, setUrlContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitUrl = () => {
    localStorage.setItem("image", JSON.stringify({ property: urlContent }));
    router.push("/dashboard/newimage");
  };

  const handleUploadImage = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e) => {
    setImage(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setUrlContent(objectUrl);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Upload Image</div>
          <div className={styles.urlContainer}>
            <div className={styles.urlTitle}>Enter Image URL</div>
            <div className={styles.urlLinkContainer}>
              <input
                placeholder="Enter Link Here"
                style={{ flex: 1 }}
                value={urlContent}
                onChange={(e) => {
                  setUrlContent(e.target.value);
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
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div>OR</div>
            <div className={styles.line}></div>
          </div>
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
                onClick={handleSubmitUrl}
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
