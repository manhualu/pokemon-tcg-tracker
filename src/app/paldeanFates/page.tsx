"use client";

import React, { useEffect, useState } from "react";
import setsJson from "../../../public/sets.json";
import cardsJson from "../../../public/cards.json";

const paldeanFates = () => {
  const paldeanFatesData = setsJson["data"].find(
    (set) => set.name === "Paldean Fates"
  );

  console.log(paldeanFatesData);

  return (
    <>
      <div className="">Paldean Fates Set</div>
      <div className="border">
        <p>Info on Paldean Fates</p>
        <p>Series: {paldeanFatesData?.series}</p>
        <p>Total number of Cards: {paldeanFatesData?.total}</p>
      </div>

      <h1>Cards:</h1>
      {cardsJson["data"].map((card) => {
        return (
          <div key={card["id"]}>
            <div className="flex space-x-10">
              <p>{card["name"]}</p>
              <p>{card["set"]["name"]}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default paldeanFates;
