"use client";

import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/button";
import ChainIcon from "@/components/icon/chainIcon";
import UploadIcon from "@/components/icon/uploadIcon";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Upload Image</div>
          <div className={styles.urlContainer}>
            <div className={styles.urlTitle}>Enter Image URL</div>
            <div className={styles.urlLinkContainer}>
              <input placeholder="Enter Link Here" style={{ flex: 1 }}></input>

              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                onClick={() => {
                  console.log("submit button clicked");
                }}
                Icon={<ChainIcon width={"16"} height={"16"} color={"gray"} />}
                text={"Submit"}
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div>OR</div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.urlTitle}>Upload from Computer</div>

            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid gray",
              }}
              onClick={() => {
                console.log("Upload image button clicked");
              }}
              text="Choose Image File"
              Icon={<UploadIcon width="16" height="16" color="black" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
