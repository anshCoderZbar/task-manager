import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { Controller } from "react-hook-form";

export const MultiSelectDropDown = (props) => {
  const data = [
    {
      assigneeName: "Group 1",
      key: "Option 1",
    },
    {
      assigneeName: "Group 1",
      key: "Option 2",
    },
    {
      assigneeName: "Group 1",
      key: "Option 3",
    },
    {
      assigneeName: "Group 2",
      key: "Option 4",
    },
    {
      assigneeName: "Group 2",
      key: "Option 5",
    },
    {
      assigneeName: "Group 2",
      key: "Option 6",
    },
    {
      assigneeName: "Group 2",
      key: "Option 7",
    },
  ];
  return (
    <Controller
      control={props?.control}
      name={props?.name}
      render={({ field: { onChange } }) => {
        return (
          <Multiselect
            style={{
              searchBox: {
                border: `1px solid ${
                  props?.errors ? "#f56565" : "rgb(233 236 239)"
                }`,
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                height: "3rem",
                width: "100%",
                borderRadius: "0.125rem",
                backgroundColor: "rgba(255, 255, 255, 0)",
                padding: "0.75rem",
                fontSize: "0.875rem",
                outline: "none",
              },
            }}
            displayValue="key"
            hidePlaceholder={true}
            closeOnSelect={false}
            onSelect={onChange}
            onRemove={onChange}
            options={data}
            renderOption={data}
          />
        );
      }}
    />
  );
};
