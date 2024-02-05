import React from "react";

import { Text } from "components";

const DashboardAddStudentsAllocationMealselection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-900_01 border-[10px] border-cyan-A200 border-solid h-[38px] rounded-[50%] w-[38px]"></div>
        <Text
          className="ml-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtMontserratMedium24"
        >
          {props?.yes}
        </Text>
        <div className="bg-blue_gray-900_01 border-[3px] border-solid border-white-A700 h-[38px] ml-[55px] rounded-[50%] w-[38px]"></div>
        <Text
          className="ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtMontserratMedium24"
        >
          {props?.no}
        </Text>
      </div>
    </>
  );
};

DashboardAddStudentsAllocationMealselection.defaultProps = {
  yes: "Yes",
  no: "No",
};

export default DashboardAddStudentsAllocationMealselection;
