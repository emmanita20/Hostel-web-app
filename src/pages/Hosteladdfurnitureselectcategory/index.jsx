import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";

const componentSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HosteladdfurnitureselectcategoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[29px] md:px-5 w-full">
          <Img
            className="h-6 mt-[25px] w-6"
            src="images/img_radixiconscross1.svg"
            alt="radixiconscross"
          />
          <Text
            className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
            size="txtMontserratMedium32"
          >
            Add Furniture
          </Text>
          <div className="bg-gray-900_01 flex flex-col items-start justify-end mb-[326px] md:ml-[0] ml-[92px] mt-[183px] p-[19px] rounded-[5px] w-[76%] md:w-full">
            <Text
              className="ml-2.5 md:ml-[0] mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Select Category
            </Text>
            <SelectBox
              className="leading-[normal] ml-2.5 md:ml-[0] mt-7 text-base text-left w-[97%] sm:w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="componentSeven"
              options={componentSevenOptionsList}
              isSearchable={false}
              placeholder="Select Furniture Category"
              shape="round"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            />
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[488px] sm:min-w-full md:ml-[0] ml-[27px] mt-[227px] text-center text-xl"
              onClick={() => navigate("/hosteladdfurniture")}
              shape="round"
              color="cyan_800"
              size="md"
              variant="fill"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HosteladdfurnitureselectcategoryPage;
