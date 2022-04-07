import React from "react";
import { OptionsType } from "../../../pages/Posts";

type MySelectType = {
    options: OptionsType[]
    defaultValue: string
    value: string
    onChange: (event: string) => void
}

export const MySelect = ({options, defaultValue, value, onChange}: MySelectType) => {

    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    )
}