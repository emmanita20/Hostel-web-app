import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Line, ReactTable, Text } from "components";

const DashboardAddStudentsSetupPaymentEmibreaker = (props) => {
  const table3Data = React.useRef([
    {
      weburl: "1",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 11 / 2022",
    },
    {
      weburl: "2",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 05 / 2023",
    },
    {
      weburl: "3",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2023",
    },
    {
      weburl: "4",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2024",
    },
    {
      weburl: "5",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2024",
    },
    {
      weburl: "6",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2025",
    },
    {
      weburl: "7",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2025",
    },
    {
      weburl: "8",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2026",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("weburl", {
        cell: (info) => (
          <Text
            className="pb-[9px] pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[82px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.snotext}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("remarks", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[238px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.remarkstext}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-2 pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[143px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.amounttext}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("duedateOne", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[89px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.duedatetext}
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[82px] md:ml-[0] ml-[483px] mr-[49px] rounded-[10px] text-center text-xl"
          color="cyan_800"
          size="2xl"
          variant="fill"
        >
          {props?.ok}
        </Button>
        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
          <Text
            className="text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {props?.paymentscheduletext}
          </Text>
          <div className="bg-gray-900_01 md:h-[371px] h-[372px] relative w-full">
            <div className="overflow-auto m-auto w-[90%]">
              <ReactTable
                columns={table3Columns}
                data={table3Data.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <div className="absolute h-[371px] inset-[0] justify-center m-auto w-full">
              <div className="h-[371px] m-auto w-full">
                <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-y-[0] left-[12%] my-auto w-px" />
                <Line className="absolute bg-blue_gray-900_02 h-px inset-x-[0] mx-auto top-[15%] w-full" />
              </div>
              <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-[0] justify-center m-auto w-px" />
              <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-y-[0] my-auto right-[24%] w-px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardAddStudentsSetupPaymentEmibreaker.defaultProps = {
  ok: "OK",
  paymentscheduletext: "Payment Schedule",
  snotext: "S.No",
  remarkstext: "Remarks",
  amounttext: "Amount",
  duedatetext: "Due Date",
  rowonetext: "1",
  hostelfeestext: "Hostel Fees",
  pricetext: "₹ 49,965",
  dateonetext: "12 / 11 / 2022",
  rowtwotext: "2",
  hostelfeesonetext: "Hostel Fees",
  priceonetext: "₹ 49,965",
  datetwotext: "12 / 05 / 2023",
  rowthreetext: "3",
  hostelfeestwotext: "Hostel Fees",
  pricetwotext: "₹ 49,965",
  datethreetext: "12 / 09 / 2023",
  rowfourtext: "4",
  hostelfeesthreetext: "Hostel Fees",
  pricethreetext: "₹ 49,965",
  datefourtext: "12 / 03 / 2024",
  rowfivetext: "5",
  hostelfeesfourtext: "Hostel Fees",
  pricefourtext: "₹ 49,965",
  datefivetext: "12 / 09 / 2024",
  rowsixtext: "6",
  hostelfeesfivetext: "Hostel Fees",
  pricefivetext: "₹ 49,965",
  datesixtext: "12 / 03 / 2025",
  rowseventext: "7",
  hostelfeessixtext: "Hostel Fees",
  pricesixtext: "₹ 49,965",
  dateseventext: "12 / 09 / 2025",
  roweighttext: "8",
  hostelfeesseventext: "Hostel Fees",
  priceseventext: "₹ 49,965",
  dateeighttext: "12 / 03 / 2026",
};

export default DashboardAddStudentsSetupPaymentEmibreaker;
