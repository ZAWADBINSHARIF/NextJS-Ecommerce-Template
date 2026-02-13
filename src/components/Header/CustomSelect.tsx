import { Category } from "@/types/category";
import React, { useState, useEffect, useCallback } from "react";

const CustomSelect = ({ options }: { options: Category[]; }) => {
  const [isOpen, setIsOpen] = useState(false);

  const FirstCategoryOption = {
    id: 0,
    name: 'All Categories',
    image: null,
    slug: 'all_categories'
  };

  const [selectedOption, setSelectedOption] = useState<Category>(FirstCategoryOption);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-content")) {
        toggleDropdown();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className="dropdown-content custom-select relative" style={{ width: "200px" }}>
      <div
        className={`select-selected whitespace-nowrap ${isOpen ? "select-arrow-active" : ""
          }`}
        onClick={toggleDropdown}
      >
        {selectedOption.name}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        <div
          key={FirstCategoryOption.id}
          onClick={() => handleOptionClick(FirstCategoryOption)}
          className={`select-item ${selectedOption === FirstCategoryOption ? "same-as-selected" : ""
            }`}
        >
          {FirstCategoryOption.name}
        </div>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item ${selectedOption === option ? "same-as-selected" : ""
              }`}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
