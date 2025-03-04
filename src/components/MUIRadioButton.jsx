import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography, Stack, FormHelperText } from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
    const [value, setValue] = new useState('');
    console.log(value);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Stack spacing={2}>
            <Typography variant="h3">Radio buttons</Typography>
            <Box>
                <FormControl error={!value}>
                    <FormLabel id="job-experience-group">
                        Years of experience
                    </FormLabel>
                    <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group" onChange={handleChange} row>
                        <FormControlLabel control={<Radio size="small" color="error" />} label="0-2" value="0-2"></FormControlLabel>
                        <FormControlLabel control={<Radio color="info" />} label="3-5" value="3-5"></FormControlLabel>
                        <FormControlLabel control={<Radio size="large" color="success" />} label="6-10" value="6-10"></FormControlLabel>
                    </RadioGroup>
                    <FormHelperText>Required selection</FormHelperText>
                </FormControl>
            </Box>
        </Stack>
    )
}
