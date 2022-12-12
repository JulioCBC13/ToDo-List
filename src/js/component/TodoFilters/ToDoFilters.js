import React from "react";
import { FiltersContainer, ItemsLeft , FilterButtomContainer, FilterButtom } from "/workspace/react-hello/src/js/component/TodoFilters/ToDoFilters.components.js";

const ToDoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft/>
            <FilterButtomContainer>
                <FilterButtom action={() => {}}  active="All" filter='All'/>
                <FilterButtom action={() => {}} active="All" filter='Active'/>
                <FilterButtom action={() => {}} active="All" filter='Completed'/>
            </FilterButtomContainer>

            <button className="text-gray-400 hover:text-withe cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}






export default ToDoFilters
