import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { Controller } from "react-hook-form";
import axios from "axios";
import { bearerToken } from "components/utils";
import { useQuery } from "@tanstack/react-query";

export const MultiSelectDropDown = (props) => {
  const allEmployees = () => {
    return axios?.get(
      `${process.env.REACT_APP_API_BASE_URL}/users`,
      bearerToken()
    );
  };

  const allEmployeeQuery = useQuery(["all-existing-employee"], allEmployees);

  const filteredUser =
    allEmployeeQuery?.data?.data &&
    allEmployeeQuery?.data?.data?.user?.map(({ username, id }) => ({
      assigneeName: username,
      assigneeId: id,
    }));

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
            displayValue="assigneeName"
            hidePlaceholder={true}
            closeOnSelect={false}
            onSelect={onChange}
            onRemove={onChange}
            options={filteredUser}
            renderOption={filteredUser}
          />
        );
      }}
    />
  );
};
