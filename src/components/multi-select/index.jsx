import React from "react";
import Multiselect from "multiselect-react-dropdown";

export const MultiSelectDropDown = () => {
  return (
    <Multiselect
      className="my-3"
      style={{
        chips: {
          background: "#422AFB",
        },
        multiselectContainer: {
          color: "black",
        },
      }}
      displayValue="key"
      onKeyPressFn={function noRefCheck() {}}
      onRemove={function noRefCheck() {}}
      onSearch={function noRefCheck() {}}
      onSelect={function noRefCheck() {}}
      options={[
        {
          cat: "Group 1",
          key: "Option 1",
        },
        {
          cat: "Group 1",
          key: "Option 2",
        },
        {
          cat: "Group 1",
          key: "Option 3",
        },
        {
          cat: "Group 2",
          key: "Option 4",
        },
        {
          cat: "Group 2",
          key: "Option 5",
        },
        {
          cat: "Group 2",
          key: "Option 6",
        },
        {
          cat: "Group 2",
          key: "Option 7",
        },
      ]}
    />
  );
};
