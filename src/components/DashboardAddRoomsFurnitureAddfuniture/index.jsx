import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const furnitureselectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardAddRoomsFurnitureAddfuniture = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="!text-white-A700 font-montserrat leading-[normal] text-base text-left w-3/5 sm:w-full"
          placeholderClassName="!text-white-A700"
          indicator={
            <Img
              className="h-6 mr-[0] w-6"
              src="images/img_arrowdown_gray_100.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="furnitureselect"
          options={furnitureselectOptionsList}
          isSearchable={false}
          placeholder="Select Furniture"
          shape="round"
          color="gray_900_01"
          size="sm"
          variant="fill"
        />
        <Text
          className="bg-gray-900_01 h-[38px] justify-center pl-[21px] pr-[35px] sm:px-5 py-2 rounded-[5px] text-base text-white-A700 w-[105px]"
          size="txtMontserratRegular16"
        >
          {props?.group741text}
        </Text>
        <Button
          className="cursor-pointer font-montserrat leading-[normal] min-w-[40px] text-center text-xl"
          shape="round"
          color="cyan_800"
          size="xs"
          variant="fill"
        >
          {props?.buttonone}
        </Button>
      </div>
    </>
  );
};

DashboardAddRoomsFurnitureAddfuniture.defaultProps = {
  group741text: "114",
  buttonone: "+",
};

export default DashboardAddRoomsFurnitureAddfuniture;
