import React, { useContext } from "react";
import InputContext from "../contexts/inputContext";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const { dispatch } = useContext(InputContext);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          onChange={(event) =>
            dispatch({ type: "SET_SEARCH_TEXT", payload: event.target.value })
          }
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md border border-gray-400 p-2.5 pe-10 shadow-sm sm:text-sm outline-0"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="submit" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </form>
  );
};

export default InputSearch;
