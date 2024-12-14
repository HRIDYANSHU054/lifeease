"use client";

import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";

function LeftBox() {
  const [strikerBat, setStrikerBat] = useState("Tanzim Hasan Sakib");
  const [nonStrikerBat, setNonStrikerBat] = useState("Towhid Hridoy");
  const [bowler, setBowler] = useState("Nitish Kumar Reddy");

  return (
    <>
      {/* select boxes row */}
      <div className="flex gap-4">
        {/* on strike Batsman select */}
        <div className="flex-1">
          <label
            htmlFor="batsman-striker__select"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Batsman (Striker)
          </label>
          <select
            id="batsman-striker__select"
            value={strikerBat}
            onChange={(e) => setStrikerBat(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="Towhid Hridoy">Towhid Hridoy</option>
            <option value="Tanzim Hasan Sakib">Tanzim Hasan Sakib</option>
          </select>
        </div>

        <button className="text-red-600 ">
          <ArrowRightLeft size={20} />
        </button>

        {/* on strike Batsman select */}
        <div className="flex-1">
          <label
            htmlFor="batsman-nonstriker__select"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Batsman (Non Striker)
          </label>
          <select
            id="batsman-nonstriker__select"
            value={nonStrikerBat}
            onChange={(e) => setNonStrikerBat(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="Towhid Hridoy">Towhid Hridoy</option>
            <option value="Tanzim Hasan Sakib">Tanzim Hasan Sakib</option>
          </select>
        </div>

        {/* on strike Batsman select */}
        <div className="flex-1">
          <label
            htmlFor="bowler__select"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Bowler
          </label>
          <select
            id="bowler__select"
            value={bowler}
            onChange={(e) => setBowler(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="Nitish Kumar Reddy" selected>
              Nitish Kumar Reddy
            </option>
            <option value="Mayank Yadav">Mayank Yadav</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <p className="font-semibold text-sm">
            Score: <span></span>
          </p>
          <p className="font-semibold text-sm">
            Extraas: <span></span>
          </p>
        </div>
        <div className="px-2 border border-slate-300 flex items-center py-1 rounded-md">
          <label className="inline-flex flex-col gap-1 items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer " />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span class="ms-3 block text-sm text-center font-medium text-gray-900 ">
              Mute & Text Off
            </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default LeftBox;
