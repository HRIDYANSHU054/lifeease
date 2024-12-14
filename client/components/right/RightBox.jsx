"use client";

import {
  ChevronDown,
  ChevronUp,
  Cross,
  MoreVertical,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { generateLast24BallsRandomly } from "@/utils/generateLast24BallsRandomly";

const last24RandomBalls = generateLast24BallsRandomly();

function RightBox() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchText, setSearchText] = useState("");

  const extraas = [
    {
      type: "b",
      count: 0,
    },
    {
      type: "lb",
      count: 4,
    },
    {
      type: "wd",
      count: 6,
    },
    {
      type: "nb",
      count: 1,
    },
    {
      type: "P",
      count: 0,
    },
  ];

  const totalExtraas = extraas.reduce((accm, curr) => accm + curr.count, 0);

  const handleBoxCollapse = function () {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  const handleChangeSearchText = function (e) {
    setSearchText(e.target.value);
  };

  const handleClearSearchText = function () {
    setSearchText("");
  };

  return (
    <>
      <div className="flex">
        <button onClick={handleBoxCollapse}>
          {isCollapsed ? <ChevronUp /> : <ChevronDown />}
        </button>
        <p>Scoreboard</p>
      </div>

      {!isCollapsed && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col rounded-t-md border border-slate-200 bg-white overflow-hidden gap-2">
            <div className="flex justify-end bg-slate-100  text-sm py-[2px] px-[7px]">
              <Link href="#" className="text-blue-600 font-semibold">
                View Full Score Board
              </Link>
            </div>

            <div className="flex gap-2 items-center justify-evenly">
              {/* INDIA */}
              <div className="flex flex-col gap-1 items-center ">
                <p>IND</p>
                <div className="relative overflow-hidden w-9 h-7 mb-1 rounded-sm">
                  <Image
                    src="https://flagcdn.com/in.svg"
                    fill
                    alt="Indian Flag"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col items-center border py-[2px]  px-3 rounded-md border-slate-300">
                  <p>
                    <span>296</span>/<span>6</span>
                  </p>
                  <p>
                    Over <span>20.0</span>
                  </p>
                </div>
              </div>

              {/* vs */}
              <p className="text-red-00 font-semibold">vs</p>

              {/* KNG */}
              <div className="flex flex-col gap-1 items-center ">
                <p>KNG</p>
                <div className="relative overflow-hidden w-9 h-7 mb-1 rounded-sm">
                  <Image
                    src="https://flagcdn.com/bd.svg"
                    fill
                    alt="Kngladeshi Flag"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col items-center border py-[2px]  px-3 rounded-md border-slate-300">
                  <p>
                    <span>164</span>/<span>7</span>
                    <span className="text-red-800">*</span>
                  </p>
                  <p>
                    Over <span>20.0</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="font-semibold text-center bg-gray-100  text-sm py-[2px] px-[3px]">
              India won by 133 runs
            </div>
          </div>

          {/* Batsmen Table */}
          <div className="relative overflow-x-auto border border-slate-200">
            <table className="w-full text-sm text-left rtl:text-right text-slate-500   ">
              <thead className="text-xs text-slate-600 bg-gray-100  ">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Batsman
                  </th>
                  <th scope="col" className="px-6 py-2">
                    R
                  </th>
                  <th scope="col" className="px-6 py-2">
                    B
                  </th>
                  <th scope="col" className="px-6 py-2">
                    4s
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-xs">
                  <th
                    scope="row"
                    className="px-6 py-2 font- whitespace-nowrap  "
                  >
                    Tanzim Hasan Sakib
                  </th>
                  <td className="px-6 py-2">8</td>
                  <td className="px-6 py-2">8</td>
                  <td className="px-6 py-2">1</td>
                </tr>
                <tr className="bg-white border-b  text-xs">
                  <th scope="row" className="px-6 py-2   whitespace-nowrap  ">
                    Towhid Hridoy
                  </th>
                  <td className="px-6 py-2">63</td>
                  <td className="px-6 py-2">42</td>
                  <td className="px-6 py-2">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bowlers Table */}
          <div className="relative overflow-x-auto border border-slate-200">
            <table className="w-full text-sm text-left rtl:text-right text-slate-500  ">
              <thead className="text-xs text-slate-600 bg-gray-100  ">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Bowler
                  </th>
                  <th scope="col" className="px-6 py-2">
                    O
                  </th>
                  <th scope="col" className="px-6 py-2">
                    M
                  </th>
                  <th scope="col" className="px-6 py-2">
                    R
                  </th>
                  <th scope="col" className="px-6 py-2">
                    W
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-xs">
                  <th
                    scope="row"
                    className="px-6 py-2 font- whitespace-nowrap  "
                  >
                    Nitish Kumar Reddy<span>*</span>
                  </th>
                  <td className="px-6 py-2">3.0</td>
                  <td className="px-6 py-2">0</td>
                  <td className="px-6 py-2">31</td>
                  <td className="px-6 py-2">1</td>
                </tr>
                <tr className="bg-white border-b  text-xs">
                  <th scope="row" className="px-6 py-2   whitespace-nowrap  ">
                    Mayank Yadav
                  </th>
                  <td className="px-6 py-2">4.0</td>
                  <td className="px-6 py-2">0</td>
                  <td className="px-6 py-2">32</td>
                  <td className="px-6 py-2">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* last 24 balls */}
          <div className="py-1.5 px-2 flex text-sm justify-between rounded-md items-center bg-gray-100">
            <p className="mr-4 font-semibold">24 Balls</p>

            <ul className="scroll-hidden overflow-x-auto scroll-smooth  select-none flex flex-nowrap gap-1 max-w-[18rem]  ">
              {last24RandomBalls.map((ball, index) => (
                <li
                  key={index}
                  className=" bg-gray-200 px-2  text-center rounded-md border border-gray-200"
                >
                  {ball}
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          <div className="py-1.5 px-2 flex text-sm justify-between rounded-md items-center bg-gray-100">
            <p className="mr-4 font-semibold">Extraas</p>
            <p>
              {totalExtraas} (
              {extraas.map((extra, index) => {
                if (index + 1 === extraas.length)
                  return (
                    <span key={index} className="font-semibold italic">
                      {extra.type}{" "}
                      <span className="font-normal not-italic">
                        {extra.count}
                      </span>
                    </span>
                  );
                return (
                  <span key={index} className="font-semibold italic">
                    {extra.type}{" "}
                    <span className="font-normal not-italic">
                      {extra.count},{" "}
                    </span>
                  </span>
                );
              })}
              )
            </p>
          </div>

          {/* country, match selector and search box */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between">
              {/* country select */}
              <select
                id="country__select"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="IND">India</option>
                <option value="BAN" selected>
                  Bangladesh
                </option>
              </select>

              {/* match select */}
              <select
                id="match__select"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* searchbar */}
            <form className="flex items-center   ">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full ">
                <div className="absolute text-gray-600  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchText}
                  onChange={handleChangeSearchText}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  "
                  placeholder="Search by name..."
                />
              </div>
              {/* clear button */}
              <button
                onClick={handleClearSearchText}
                className="p-1 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  "
              >
                <X />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>

          {/* divide */}
          <hr className="bg-gray-400 my-1"></hr>

          {/* commentary list */}
          <ul className="flex  max-h-[120px] flex-col gap-2 overflow-y-scroll scroll-smooth scroll-hidden ">
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.6</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.5</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.4</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.4</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.4</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
            <li className="flex justify-between items-center text-sm gap-4">
              <p className="bg-green-300 rounded-full size-8 flex items-center justify-center">
                1
              </p>
              <div className="flex gap-2  items-center">
                <p>19.4</p>
                <p>
                  Nitish Kumar Reddy to Tanzim Hasan Sakib:{" "}
                  <span className="font-semibold">1 run</span>
                </p>
              </div>
              <button className="transition  hover:bg-gray-100 rounded-full p-2">
                <MoreVertical size={20} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default RightBox;
