import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Datepicker, Img, Input, SelectBox, Text } from "components";
import HostelFurnitureReportDamageOneRowellipseeightynine from "components/HostelFurnitureReportDamageOneRowellipseeightynine";

const componentSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const damagelevelOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectproductOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const damagedbyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HostelfurniturereportdamageOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[39px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-start mb-[37px] mt-4 w-[90%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
              <Text
                className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Report Damage
              </Text>
              <SelectBox
                className="leading-[normal] mt-[66px] text-base text-left w-[83%] sm:w-full"
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
              <SelectBox
                className="leading-[normal] mt-[30px] text-base text-left w-[83%] sm:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="damagelevel"
                options={damagelevelOptionsList}
                isSearchable={false}
                placeholder="Select Damage Level"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              />
              <SelectBox
                className="leading-[normal] mt-[30px] text-base text-left w-[83%] sm:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="selectproduct"
                options={selectproductOptionsList}
                isSearchable={false}
                placeholder="Select Product"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              />
              <SelectBox
                className="leading-[normal] mt-[30px] text-base text-left w-[83%] sm:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="damagedby"
                options={damagedbyOptionsList}
                isSearchable={false}
                placeholder="Damaged By"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              />
              <Input
                name="language"
                placeholder="Name of Defaulter "
                className="!placeholder:text-gray-400_02 !text-gray-400_02 leading-[normal] p-0 text-base text-left w-full"
                wrapClassName="mt-[30px] rounded-[5px] w-4/5"
                type="text"
                color="gray_900_01"
                size="lg"
                variant="fill"
              ></Input>
              <div className="flex flex-row gap-[27px] items-start justify-start mt-[74px] w-[55%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  Repairable{" "}
                </Text>
                <HostelFurnitureReportDamageOneRowellipseeightynine className="flex flex-row items-center justify-start w-[54%]" />
              </div>
              <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-between mt-[54px] w-full">
                <div className="bg-gray-900_01 flex flex-col gap-4 items-start justify-start p-[15px] rounded-[5px]">
                  <Text
                    className="md:ml-[0] ml-[9px] text-base text-gray-400_02"
                    size="txtMontserratRegular16Gray40002"
                  >
                    Fine
                  </Text>
                  <Text
                    className="mb-[7px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratRegular24WhiteA700"
                  >
                    ₹ 15,000
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[48%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-gray-400"
                    size="txtMontserratRegular16Gray400"
                  >
                    Due Date
                  </Text>
                  <Datepicker
                    className="group822"
                    placeholder="12 Sep 2023"
                  ></Datepicker>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[664px] md:min-w-full text-center text-xl"
              onClick={() => navigate("/hostelfurniturereportdamage")}
              shape="round"
              color="cyan_800"
              size="3xl"
              variant="fill"
            >
              Report Damage
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelfurniturereportdamageOnePage;
