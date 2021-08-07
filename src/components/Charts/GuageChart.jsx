import React, { Fragment } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const GuageChart = ({ titles = [] }) => {
  return (
    <Fragment>
      <div class="mt-2">
        <div className={" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-4"}>
          <div className={"sm:col-span-1"}>
            <div class="w-full h-56 overflow-hidden shadow bg-white">
              <div class="px-1 pt-4  ">
                <div className="flex flex-row items-center ">
                  <div class="font-600 text-gray-500 text-xs ">
                    Current Ratio
                  </div>
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 24 24"
                      width="13px"
                      height="13px"
                      fill="grey"
                    >
                      <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.813c-.184 0-.336-.004-.5.03a1.127 1.127 0 00-.438.22.98.98 0 00-.28.375c-.071.152-.095.332-.095.562 0 .227.024.406.094.563.07.156.16.28.281.375.122.093.274.148.438.187.164.04.316.063.5.063.18 0 .371-.024.531-.063.16-.04.285-.094.406-.188a.951.951 0 00.282-.375c.07-.152.125-.335.125-.562 0-.23-.055-.41-.125-.563a.98.98 0 00-.281-.375c-.122-.093-.247-.183-.407-.218-.16-.035-.351-.032-.531-.032zm-1.219 3.343v8.969h2.438V9.156z" />
                    </svg>
                  </div>
                </div>

                <div className={"px-4 pt-8 "}>
                  <ReactSpeedometer
                    segments={3}
                    value={470}
                    segmentColors={["blue", "#dedede"]}
                    needleColor="steelblue"
                    textColor={"grey"}
                    height={160}
                    width={150}
                    valueTextFontSize={10}
                    labelFontSize={10}
                    needleHeightRatio={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"sm:col-span-1"}>
            <div class="w-full h-56  overflow-hidden shadow bg-white">
              <div class="px-1 pt-4  ">
                <div className="items-center ">
                  <div class="font-600  text-gray-500 text-xs ">DSI</div>
                  <div class="font-600  text-gray-400 text-xs ">
                    [Days, Sales, Inventory]
                  </div>
                </div>

                <div className={"px-4 py-4 "}>
                  <ReactSpeedometer
                    segments={3}
                    value={200}
                    segmentColors={["orange", "#dedede"]}
                    needleColor="steelblue"
                    textColor={"grey"}
                    height={160}
                    width={150}
                    valueTextFontSize={10}
                    labelFontSize={10}
                    needleHeightRatio={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"sm:col-span-1"}>
            <div class="w-full h-56  overflow-hidden shadow bg-white">
              <div class="px-1 pt-4  ">
                <div className="items-center ">
                  <div class="font-600  text-gray-500 text-xs ">DSI</div>
                  <div class="font-600  text-gray-400 text-xs ">
                    [Days, Sales, Inventory]
                  </div>
                </div>

                <div className={"px-4 py-4 "}>
                  <ReactSpeedometer
                    segments={3}
                    value={900}
                    segmentColors={["tomato", "#dedede"]}
                    needleColor="steelblue"
                    textColor={"grey"}
                    height={160}
                    width={150}
                    valueTextFontSize={10}
                    labelFontSize={10}
                    needleHeightRatio={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"sm:col-span-1"}>
            <div class="w-full h-56 overflow-hidden shadow bg-white">
              <div class="px-2 pt-4  ">
                <div className="items-center ">
                  <div class="font-600  text-gray-500 text-xs ">DSI</div>
                  <div class="font-600  text-gray-400 text-xs ">
                    [Days, Payable, Outstanding]
                  </div>
                </div>

                <div className={"px-4 py-4 "}>
                  <ReactSpeedometer
                    segments={3}
                    value={900}
                    segmentColors={["green", "#dedede"]}
                    needleColor="steelblue"
                    textColor={"grey"}
                    height={160}
                    width={150}
                    valueTextFontSize={10}
                    labelFontSize={10}
                    needleHeightRatio={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuageChart;
