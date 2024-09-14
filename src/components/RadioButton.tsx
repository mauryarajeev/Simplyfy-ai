import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from "react";

// Props interface for the RadioButton component
interface Props {
  name?: string; // Name attribute for the RadioGroup
  items: any; // Array of items to render as radio buttons
  onChange: any; // Handler function for onChange event
  size?: any; // Optional size prop (not used in this component)
  checked?: boolean; // Default checked state (not used in this component)
  row?: boolean; // Determines if radio buttons should be displayed in a row
  defaultValue?: string; // Default selected value
}

// Props interface for the styled FormControlLabel
interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean; // Checked state for custom styling
}

// Styled FormControlLabel with custom styling based on checked state
const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  ".MuiFormControlLabel-label": checked
    ? { color: "#323232" } // Color when checked
    : { color: "#323232" }, // Color when not checked (can be adjusted)
}));

// Custom FormControlLabel that uses useRadioGroup for checking state
const MyFormControlLabel = (props: FormControlLabelProps) => {
  const radioGroup = useRadioGroup(); // Access the radio group context

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value; // Determine if the item is checked
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
};

// RadioButton component
const RadioButton: React.FC<Props> = ({
  items,
  name,
  onChange,
  checked,
  defaultValue,
  row,
}) => (
  <div className="w-full">
    {/* RadioGroup component to manage the radio buttons */}
    <RadioGroup name={name} defaultValue={defaultValue}>
      <div className={`${row ? "flex" : ""}`}>
        {/* Render FormControlLabel components for each item */}
        {React.Children.toArray(
          items.map((e: any) => (
            <MyFormControlLabel
              key={e.value} // Unique key for each FormControlLabel
              value={e?.value} // Value of the radio button
              label={e?.label} // Label of the radio button
              control={
                <Radio
                  checked={checked} // Default checked state (can be customized)
                  onChange={onChange} // Event handler for changes
                  sx={{
                    "&.Mui-checked": {
                      color: "#00c7ff", // Color when checked
                    },
                    "&.Mui-unchecked": {
                      color: "#323232", // Color when not checked
                    },
                  }}
                />
              }
            />
          ))
        )}
      </div>
    </RadioGroup>
  </div>
);

export default RadioButton;
