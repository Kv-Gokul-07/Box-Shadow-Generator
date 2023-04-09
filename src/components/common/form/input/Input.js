import React from "react"

// material-ui
import TextField from "@mui/material/TextField";

//css
import { InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import "./Input.scss";


const Input = ({field, type,...props}) => {
 const { name, onChange, onBlur, value } = field;
 const {autoFocus, multiline, placeholder, label, validate, touchedError, disabled, row, maxLength, min, max, adorment, textTransform, required, frontadorment, medium, small} = props;

 const Icon = {
  search: <SearchIcon />,
  arn: "ARN-",
  euin: "EUIN-",
}

// eslint-disable-next-line no-shadow
const adormentIcon = value =>  Icon[value] || ""

    return ( 
        <div className={`input_form ${small && "Input_small"}`}>
            <TextField
                className="InputField"
                // id={numberformatter && "number_formatter"}
                fullWidth
                spellCheck="false"
                name={name}
                // id={id}
                autoComplete={type === "password" ? "new-password" : "off"}
                label={label !== "" && <div>{label}</div>}
                type={type}
                placeholder={placeholder}
                autoFocus={autoFocus}
                multiline={multiline}
                disabled={disabled}
                rows={row}
                value={value}
                onChange={onChange}
                // onKeyUp={onKeyUp}
                onWheel={(e) => e.target.blur()}
                onBlur={onBlur}
                validate={validate}
                max={10}
                InputLabelProps={{
                    shrink: true,
                    classes: {
                        root: `label-root ${touchedError ? "error" : ""}`,
                        focused: "label-focused"
                    }
                }}
                inputProps={{
                    maxLength,
                    min:{min},
                    max:{max}
                }}

                onInput={(e) => {
                    if (type === "number" && maxLength) {
                        e.target.value = e.target.value.slice(0, maxLength);
                    }
                }}
                InputProps={{
                    // inputComponent: numberformatter && React.forwardRef((props, ref) => NumberFormatCustom(props, ref)),
                    classes: {
                        root: `input-root ${required ? "required" : ""} ${touchedError ? "error" : ""} ${medium && "input-md"} ${small && "input-sm"}`,
                        input: `input-field ${textTransform && "textCapitalize"}`,
                        focused: "input-focused",
                        disabled: "input-disabled"
                    },
                    startAdornment: frontadorment && 
                        <InputAdornment position="start" className={`startadorment ${frontadorment && "adorement"}`} id="edit_icon">
                             <span className="start-ador"  role="presentation">{adormentIcon(frontadorment)}</span>  
                        </InputAdornment>,
                    endAdornment: adorment && <InputAdornment className="endAdornment" id="edit_icon" position="end">{adormentIcon(adorment)}</InputAdornment>,
                    style: {
                        backgroundColor: "#FFFFFF",
                        borderRadius: "4px",
                        border: "1px solid #CED4DC",
                        fontSize: ".81em",
                    }
                }}
                {...field}
                {...props}
            />
              <span className="field-errors">
                {/* {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} */}
            </span>
        </div>
    );
};

export default Input;

