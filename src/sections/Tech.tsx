import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

type cardProps = {
  customClass?: string;
  // 'small': 'px-16 py-12';
  mobile: number;
};

export default function Tech({ mobile }: cardProps) {
  return (
    <div
      className={
        mobile <= 996
          ? "flex container mx-auto flex-col justify-center  h-full sm:flex-row"
          : " flex container mx-auto flex-col justify-between sm:justify-between md:justify-between  h-full sm:flex-row "
      }
    >
      {mobile <= 966 ? (
        <div className="flex flex-col sm:mb-0 mb-5  justify-center">
          <h1>Mobile</h1>
        </div>
      ) : (
        <>
          {/* cek window if width == mobile maka berikan 5 card */}

          <div className="flex flex-col sm:mb-0 mb-5  justify-center">
            <Card>1</Card>
            {/* <Card customClass='small'  mobile={true} >1</Card> */}
            {/* contoh untuk yang mobile */}
          </div>
          <div className="flex flex-col justify-center">
            <Card>1</Card>
            <Card>2</Card>
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <img
                width="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
            </Card>
            <Card>
              <img
                width="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              />
            </Card>
            <Card>
              <img
                width="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              />
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <Card>1</Card>
            <Card>2</Card>
          </div>
          <div className="flex flex-col justify-center">
            <Card>1</Card>
          </div>
        </>
      )}
    </div>
  );
}
