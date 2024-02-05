import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { ErrorMessage } from "../ErrorMessage";

const variants = {
  fill: {
    blue_gray_900_03: "bg-blue_gray-900_03 text-red-A700_01",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    gray_900_01: "bg-gray-900_01 text-gray-400",
  },
};
const shapes = { round: "rounded-[5px]" };
const sizes = {
  xs: "pb-[5px] pt-1 px-1",
  sm: "p-[7px]",
  md: "p-[11px]",
  lg: "pl-3.5 pr-3 py-3.5",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
  "3xl": "pl-[19px] pr-[9px] py-[19px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className = "",
      options = [],
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value = "",
      errors = [],
      indicator,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#111111",
              "&:hover": { backgroundColor: "#111111", color: "#b0b0b0" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            placeholder: (base) => ({
              ...base,
              margin: 0,
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900_03", "blue_gray_900", "gray_900_01"]),
};

SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "",
  variant: "",
  color: "",
  size: "",
  options: [],
  onChange: () => {},
};
export { SelectBox };
