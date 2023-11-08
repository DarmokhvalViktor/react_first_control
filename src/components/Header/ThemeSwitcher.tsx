import * as React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel} from "@mui/material";

export default function ControlledSwitches() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (!checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return (
        <FormControlLabel
            control={<Switch
                checked={checked}
                onChange={handleChange}
                color="primary"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Dark Mode"
            labelPlacement="top"
        />
    );
}
