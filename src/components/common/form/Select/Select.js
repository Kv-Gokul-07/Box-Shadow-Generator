/* eslint-disable no-undef */

import React from "react"

import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, Select } from "@mui/material";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { CalendarMonth } from "@mui/icons-material";

//css
import "./FormSelect.scss";

const FormSelect = ({field, ...props}) => {

    const { name, onChange, value} = field;
    const { optionData, optionLabelKey, optionValueKey, required, touched, dropDownIon  } = props;
    
    const dropDownIcons = (iconName, {props}) => {
        switch (iconName) {
            case "calendar":
            return <CalendarMonth {...props}/>
            case "keyboardArrow":
            return <KeyboardArrowDownRounded {...props}/>
            default:
            return  <ArrowDropDownRoundedIcon {...props}/>
        }
    }
    
    return (
        <div className={`Select`}>
            <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Age
            </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    className={`FormSelect`}
                    value={value}
                    name={name}
                    // label="Age"
                    onChange={onChange}
                    IconComponent={(props) =>  dropDownIcons(dropDownIon, {props})}

                    selectprops={{
                        // IconComponent: (props) =>  dropDownIcons(dropDownIon, {props}),
                        classes: {
                            root: `select-root ${value === "select" ? "label-color" : ""} ${required ? "required" : ""} ${touched && error ? "error" : ""} `,
                            select: "selected",
                            disabled: "select-disabled"
                            
                        },
    
                            MenuProps: {
                                className: `select-menu-item`,
                                getcontentanchorel: null,
                            
                                anchorOrigin: { vertical: "top", horizontal: "left" },
                                transformOrigin: { vertical: "top", horizontal: "left" }
                            }
                    }}
                    // {...field}
                    // {...props}
                >
                    {/* <MenuItem >{"select Otions"}</MenuItem> */}
                {optionData && optionData.length > 0 && optionData.map((item, i) => {
                    
                    return (
                        <MenuItem key={i} value={item[optionValueKey]}>{item[optionLabelKey]}</MenuItem>
                    );
                })}
                </Select>
                </FormControl>
        </div>
    )
}


export default FormSelect;
