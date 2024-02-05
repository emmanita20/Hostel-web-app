import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardstudentsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img className="h-7 w-7" src="images/img_settings.svg" alt="settings" />
      ),
      label: "Students",
      href: "/dashboardaddstudentssetuppaymentlinksuccess",
      active:
        window.location.pathname ===
        "/dashboardaddstudentssetuppaymentlinksuccess",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_feangry.svg" alt="feangry" />
      ),
      label: "Complaints",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_close.svg"
          alt="close"
        />
      ),
      label: "Stock",
      href: "/stock",
      active: window.location.pathname === "/stock",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_miusers.svg"
          alt="miusers"
        />
      ),
      label: "Users",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_bxdish.svg" alt="bxdish" />
      ),
      label: "Meals",
    },
  ];
  const [group289value, setGroup289value] = React.useState("");
  const [group288value, setGroup288value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-8 w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center mb-8 md:ml-[0] ml-[52px] md:mt-0 mt-[67px] w-[6%] md:w-full">
              <div className="bg-cyan-A200 h-6 my-0.5 rounded-[50%] w-6"></div>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratSemiBold24"
              >
                HMS
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[81px] items-center justify-start md:ml-[0] ml-[184px] md:mt-0 mt-[49px] w-[14%] md:w-full"
              style={{ backgroundImage: "url('images/img_group191.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[23px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group192.png')" }}
              >
                <div className="flex flex-row gap-2.5 items-center justify-center mb-[9px] w-[82%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_materialsymbol_cyan_a200.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtMontserratMedium20"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[106px] md:ml-[0] ml-[27px] md:mt-0 mt-[72px]"
              onClick={() => navigate("/rooms")}
              leftIcon={
                <Img
                  className="h-6 mr-2.5 my-px"
                  src="images/img_fluentdevicemeetingroom20regular.svg"
                  alt="fluent:device-meeting-room-20-regular"
                />
              }
            >
              <div className="font-medium leading-[normal] text-gray-400 text-left text-xl">
                Rooms
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[154px] md:ml-[0] ml-[66px] md:mt-0 mt-[72px]"
              onClick={() => navigate("/attendance")}
              leftIcon={
                <Img
                  className="h-6 mr-[9px] my-px"
                  src="images/img_materialsymbolscopresentoutlinesharp.svg"
                  alt="material-symbols:co-present-outline-sharp"
                />
              }
            >
              <div className="font-medium leading-[normal] text-gray-400 text-left text-xl">
                Attendance
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[130px] md:ml-[0] ml-[66px] md:mt-0 mt-[72px]"
              onClick={() => navigate("/accounts")}
              leftIcon={
                <Img
                  className="h-6 mr-[9px] my-px"
                  src="images/img_materialsymbolsaccountbalanceoutlinerounded.svg"
                  alt="material-symbols:account-balance-outline-rounded"
                />
              }
            >
              <div className="font-medium leading-[normal] text-gray-400 text-left text-xl">
                Accounts
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[33px] min-w-[168px] md:ml-[0] ml-[66px] md:mt-0 mt-[71px]"
              onClick={() => navigate("/maintenance")}
              leftIcon={
                <Img
                  className="h-6 mt-px mr-2.5"
                  src="images/img_materialsymbolsaccountbalanceoutlinerounded_gray_400.svg"
                  alt="material-symbols:account-balance-outline-rounded"
                />
              }
            >
              <div className="font-medium leading-[normal] text-gray-400 text-left text-xl">
                Maintenance
              </div>
            </Button>
            <Button
              className="flex h-[62px] items-center justify-center md:ml-[0] ml-[89px] md:mt-0 my-[34px] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="lg"
              variant="fill"
            >
              <Img src="images/img_calendar.svg" alt="calendar" />
            </Button>
            <Button
              className="flex h-[62px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[34px] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_vector.svg" alt="vector" />
            </Button>
            <Button
              className="flex h-[62px] items-center justify-center ml-10 md:ml-[0] mr-[51px] md:mt-0 my-[34px] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              <Img
                className="h-10"
                src="images/img_typcnuser.svg"
                alt="typcnuser"
              />
            </Button>
          </header>
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[127px] md:ml-[0] ml-[23px] mr-[148px] mt-6"
                onClick={() => navigate("/")}
                leftIcon={
                  <Img
                    className="h-6 mr-4"
                    src="images/img_uisanalytics_gray_400.svg"
                    alt="uis:analytics"
                  />
                }
              >
                <div className="font-semibold leading-[normal] text-gray-400 text-left text-lg">
                  Analytics
                </div>
              </Button>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "22px 22px 22px 23px",
                    gap: "13px",
                    color: "#b0b0b0",
                    fontWeight: 500,
                    fontSize: "18px",
                    borderRadius: "10px",
                    [`&:hover, &.ps-active`]: {
                      color: "#ffffff",
                      backgroundColor: "#2d2d2dff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-end mb-[555px] pt-6 w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="bg-blue_gray-900_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 p-[18px] rounded-[10px] w-[74%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mb-[9px] mt-1 w-[99%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                      <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div
                          className="common-pointer bg-gray-900_01 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] w-full"
                          onClick={() => navigate("/viewstudents")}
                        >
                          <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] ml-2.5 md:ml-[0] w-[70%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Total Students
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtMontserratMedium24"
                            >
                              3569
                            </Text>
                          </div>
                        </div>
                        <div
                          className="common-pointer bg-gray-900_01 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] w-full"
                          onClick={() => navigate("/viewstudentsinhostel")}
                        >
                          <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] ml-2.5 md:ml-[0] w-[48%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                In Hostel
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                              size="txtMontserratMedium24CyanA200"
                            >
                              1569
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                          <div className="flex flex-col items-start justify-start mb-[3px] w-[89%] md:w-full">
                            <div className="flex flex-row gap-[13px] items-start justify-between w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Students Assigned
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            </div>
                            <Text
                              className="mt-[3px] text-2xl md:text-[22px] text-purple-A400 sm:text-xl"
                              size="txtMontserratMedium24PurpleA400"
                            >
                              2569
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] w-[92%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Students Removed
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_link.svg"
                                alt="link"
                              />
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-red-A700_02 sm:text-xl"
                              size="txtMontserratMedium24RedA70002"
                            >
                              1000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="common-pointer bg-gray-900_01 flex flex-col items-start justify-start mb-[99px] p-2.5 rounded-[10px] w-[24%] md:w-full"
                      onClick={() => navigate("/viewstudentsouthostel")}
                    >
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] ml-2.5 md:ml-[0] w-[72%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Outside Hostel
                          </Text>
                          <Img
                            className="h-4 w-4"
                            src="images/img_link.svg"
                            alt="link"
                          />
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                          size="txtMontserratMedium24Gray400"
                        >
                          2500
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col gap-[17px] justify-end p-[9px] rounded-[10px] w-[24%] md:w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[11px] mr-[70px] mt-[11px]">
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Fees Defaulters
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-yellow-A400"
                          size="txtMontserratSemiBold32YellowA400"
                        >
                          150
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-1 min-w-[205px] rounded-[10px] text-center text-xl"
                        color="gray_900_02"
                        size="md"
                        variant="fill"
                      >
                        View List
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[22%] md:w-full">
                  <Button
                    className="common-pointer border-2 border-cyan-A200 border-solid cursor-pointer font-medium leading-[normal] min-w-[298px] rounded-[10px] text-center text-xl"
                    onClick={() => navigate("/dashboardaddstudents")}
                    color="black_900"
                    size="2xl"
                    variant="fill"
                  >
                    +Add Student
                  </Button>
                  <Button
                    className="!text-red-500_01 border-2 border-red-500_01 border-solid cursor-pointer leading-[normal] min-w-[298px] rounded-[10px] text-center text-xl"
                    color="black_900"
                    size="2xl"
                    variant="fill"
                  >
                    Remove Student
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-blue_gray-900_01 flex md:flex-1 flex-col items-center justify-end mb-0.5 p-1.5 rounded-[10px] w-[37%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start mt-[21px] w-full">
                    <div className="flex flex-col gap-[18px] justify-start w-[98%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[7px] w-[22%] md:w-full">
                        <Text
                          className="common-pointer text-base text-white-A700"
                          size="txtMontserratRegular16"
                          onClick={() => navigate("/viewstudents")}
                        >
                          Students
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_link.svg"
                          alt="link_One"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <Input
                          name="group289"
                          placeholder="Search ..."
                          value={group289value}
                          onChange={(e) => setGroup289value(e)}
                          className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                          wrapClassName="flex sm:flex-1 sm:w-full"
                          prefix={
                            <Img
                              className="cursor-pointer h-6 mr-[23px] my-auto"
                              src="images/img_search.svg"
                              alt="search"
                            />
                          }
                          suffix={
                            <CloseSVG
                              fillColor="#b0b0b0"
                              className="cursor-pointer h-6 my-auto"
                              onClick={() => setGroup289value("")}
                              style={{
                                visibility:
                                  group289value?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                              height={24}
                              width={24}
                              viewBox="0 0 24 24"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[124px] rounded-[10px]"
                          leftIcon={
                            <Img
                              className="h-8 mr-3.5"
                              src="images/img_phfunnelsimplebold.svg"
                              alt="ph:funnel-simple-bold"
                            />
                          }
                          color="gray_800_05"
                          size="sm"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-base text-left">
                            Filter
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-end pt-1 px-1 w-full">
                      <List
                        className="flex flex-col gap-2.5 items-center mt-2.5 w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[10px] w-full">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                      </List>
                      <div className="flex sm:h-[114px] h-[49px] md:h-[60px] justify-end relative w-full">
                        <div className="bg-gray-900_01 h-[60px] mt-auto mx-auto rounded-[10px] w-full"></div>
                        <div className="absolute bottom-[8%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto w-[91%]">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse31.png"
                            alt="ellipseThirtyOne"
                          />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Abhinav Srivastva
                          </Text>
                          <Img
                            className="h-6 sm:ml-[0] ml-[218px] w-6"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900_01 flex md:flex-1 flex-col items-center justify-end mb-0.5 rounded-[10px] w-[36%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start mb-1.5 mt-[26px] w-full">
                    <div className="flex flex-col gap-[18px] justify-start w-[94%] md:w-full">
                      <div className="flex flex-row gap-[23px] items-start justify-start md:ml-[0] ml-[7px] w-[44%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Defaulters Students
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_link.svg"
                          alt="link_Two"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                        <Input
                          name="group288"
                          placeholder="Search ..."
                          value={group288value}
                          onChange={(e) => setGroup288value(e)}
                          className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                          wrapClassName="flex sm:flex-1 sm:w-full"
                          prefix={
                            <Img
                              className="cursor-pointer h-6 mr-[23px] my-auto"
                              src="images/img_search.svg"
                              alt="search"
                            />
                          }
                          suffix={
                            <CloseSVG
                              fillColor="#b0b0b0"
                              className="cursor-pointer h-6 my-auto"
                              onClick={() => setGroup288value("")}
                              style={{
                                visibility:
                                  group288value?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                              height={24}
                              width={24}
                              viewBox="0 0 24 24"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[103px] rounded-[10px] text-base text-center"
                          onClick={() => navigate("/dashboardadddefaulter")}
                          color="cyan_A200"
                          size="lg"
                          variant="fill"
                        >
                          +Add
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-end pt-3.5 px-3.5 w-full">
                      <List
                        className="flex flex-col gap-2.5 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 p-3 rounded-[10px] w-full">
                          <div className="flex flex-col items-start justify-start my-[3px] w-[97%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] w-[99%] md:w-full">
                              <Img
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                src="images/img_ellipse31.png"
                                alt="ellipseThirtyOne"
                              />
                              <Text
                                className="ml-3 sm:ml-[0] text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Abhinav Srivastva
                              </Text>
                              <Img
                                className="h-6 sm:ml-[0] ml-[202px] w-6"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                            </div>
                            <Text
                              className="mt-[30px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Broke 4 Test Tubes in Hostel Mess
                            </Text>
                            <div className="flex flex-row gap-3.5 items-center justify-start mt-7 w-[68%] md:w-full">
                              <Button
                                className="!text-gray-400_01 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[125px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="xs"
                                variant="fill"
                              >
                                Fine : ₹ 1,500
                              </Button>
                              <Button
                                className="border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[141px] rounded-[10px]"
                                leftIcon={
                                  <div className="mt-0.5 mb-px mr-2.5 bg-gray-400_01">
                                    <Img
                                      src="images/img_calendar_gray_400_01.svg"
                                      alt="calendar"
                                    />
                                  </div>
                                }
                                color="gray_900_01"
                                size="xs"
                                variant="fill"
                              >
                                <div className="!text-gray-400_01 leading-[normal] text-base text-left">
                                  12 Nov 2022
                                </div>
                              </Button>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[15px] w-full">
                              <Button
                                className="!text-deep_orange-A700 border border-deep_orange-A700 border-solid cursor-pointer leading-[normal] min-w-[200px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="md"
                                variant="fill"
                              >
                                Remove Defaulter
                              </Button>
                              <Button
                                className="!text-cyan-A200 border border-cyan-A200 border-solid cursor-pointer leading-[normal] min-w-[200px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="md"
                                variant="fill"
                              >
                                Send Payment Link
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 p-3 rounded-[10px] w-full">
                          <div className="flex flex-col items-start justify-start my-[3px] w-[97%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] w-[99%] md:w-full">
                              <Img
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                src="images/img_ellipse31.png"
                                alt="ellipseThirtyTwo"
                              />
                              <Text
                                className="ml-3 sm:ml-[0] text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Abhinav Srivastva
                              </Text>
                              <Img
                                className="h-6 sm:ml-[0] ml-[202px] w-6"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                            </div>
                            <Text
                              className="mt-[30px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Broke 4 Test Tubes in Hostel Mess
                            </Text>
                            <div className="flex flex-row gap-3.5 items-center justify-start mt-7 w-[68%] md:w-full">
                              <Button
                                className="!text-gray-400_01 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[125px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="xs"
                                variant="fill"
                              >
                                Fine : ₹ 1,500
                              </Button>
                              <Button
                                className="border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[141px] rounded-[10px]"
                                leftIcon={
                                  <div className="mt-0.5 mb-px mr-2.5 bg-gray-400_01">
                                    <Img
                                      src="images/img_calendar_gray_400_01.svg"
                                      alt="calendar"
                                    />
                                  </div>
                                }
                                color="gray_900_01"
                                size="xs"
                                variant="fill"
                              >
                                <div className="!text-gray-400_01 leading-[normal] text-base text-left">
                                  12 Nov 2022
                                </div>
                              </Button>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[15px] w-full">
                              <Button
                                className="!text-deep_orange-A700 border border-deep_orange-A700 border-solid cursor-pointer leading-[normal] min-w-[200px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="md"
                                variant="fill"
                              >
                                Remove Defaulter
                              </Button>
                              <Button
                                className="!text-cyan-A200 border border-cyan-A200 border-solid cursor-pointer leading-[normal] min-w-[200px] rounded-[10px] text-base text-center"
                                color="gray_900_01"
                                size="md"
                                variant="fill"
                              >
                                Send Payment Link
                              </Button>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                        <Img
                          className="h-[30px] md:h-auto mb-[3px] ml-0.5 sm:ml-[0] rounded-[50%] w-[30px]"
                          src="images/img_ellipse31.png"
                          alt="ellipseThirtyThree"
                        />
                        <Text
                          className="ml-3 sm:ml-[0] sm:mt-0 mt-[5px] text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Abhinav Srivastva
                        </Text>
                        <Img
                          className="h-6 sm:ml-[0] ml-[202px] sm:mt-0 mt-[3px] w-6"
                          src="images/img_eye.svg"
                          alt="eye_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex md:flex-1 flex-col gap-[22px] justify-end p-1 rounded-[10px] w-[26%] md:w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[183px] ml-4 md:ml-[0] mr-[134px] mt-[26px]"
                    onClick={() => navigate("/attendance")}
                    rightIcon={
                      <div className="h-3 mt-[5px] mb-[7px] ml-[5px] w-3 bg-white-A700">
                        <Img
                          className="h-3"
                          src="images/img_link.svg"
                          alt="link"
                        />
                      </div>
                    }
                  >
                    <div className="font-semibold leading-[normal] text-left text-white-A700 text-xl">
                      Student Update
                    </div>
                  </Button>
                  <div className="flex flex-col gap-2.5 items-center justify-start mb-[13px] pt-[7px] px-[7px] w-full">
                    <List
                      className="flex flex-col gap-2.5 items-center w-[97%]"
                      orientation="vertical"
                    >
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseEleven"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin_yellow_a400.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseTwelve"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseThirteen"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin_yellow_a400.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseFourteen"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseFifteen"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin_yellow_a400.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                        <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                          <Img
                            className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseSixteen"
                          />
                          <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                            <Text
                              className="text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Ramakant Sharma
                            </Text>
                            <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_icoutlinelogin.svg"
                                alt="icoutlinelogin"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtMontserratLight14"
                              >
                                12:30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray-900_01 flex flex-col items-start justify-end pt-[15px] px-[15px] rounded-[9px] w-[97%] md:w-full">
                      <Img
                        className="h-1 md:h-auto object-cover rounded-[20px] w-[15%]"
                        src="images/img_ellipse10.png"
                        alt="ellipseSeventeen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardstudentsPage;
