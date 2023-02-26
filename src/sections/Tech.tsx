import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

type cardProps = {
customClass:object
// 'small': 'px-16 py-12';
mobile:number;
}

export default function Tech({ mobile }:cardProps) {
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
            <Card customClass={'small'}  mobile={true} >1</Card>
          </div>
          <div className="flex flex-col justify-center">
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
          </div>
          <div className="flex flex-col justify-center">
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
          </div>
          <div className="flex flex-col justify-center">
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 mb-10 bg-red-800">1</p>
            </motion.button>
          </div>
          <div className="flex flex-col justify-center">
            <motion.button whileHover={{ scale: 1.1 }}>
              <p className="px-16 py-8 bg-red-800">1</p>
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}
