"use client";

import React, { useEffect, useState } from "react";
import setsJson from "../../../public/sets.json";
import paldeanFatesJson from "../../../public/paldeanFatesCards.json";

const paldeanFates = () => {
  const paldeanFatesData = setsJson["data"].find(
    (set) => set.name === "Paldean Fates"
  );

  console.log(paldeanFatesData);

  return (
    <>
      <div className="text-3xl">Paldean Fates Set</div>
      <div className="border italic rounded-md p-2">
        <p>Series: {paldeanFatesData?.series}</p>
        <p>Total number of Cards: {paldeanFatesData?.total}</p>
      </div>
      <br></br>
      <div className="text-2xl">Cards:</div>
      <div className="grid grid-cols-3">
        {paldeanFatesJson["data"].map((card) => {
          return (
            <div className="border" key={card["id"]}>
              <div className="flex justify-between p-2">
                <img src={card["images"]["large"]} width="200" />
                <p>{card["cardmarket"]["prices"]["averageSellPrice"]} USD</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default paldeanFates;
