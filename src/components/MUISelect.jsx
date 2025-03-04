import { Box, TextField, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from 'react';

export const MuiSelect = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries);
    const handleChange = (event) => {
        const value = event.target.value;
        setCountries(typeof value === "string" ? value.split(',') : value);
    }
    return (
        <Stack spacing={2}>
            <Typography variant="h3">Select area</Typography>
            <Box width="250px">
                <TextField 
                    label="Select country"
                    select
                    fullWidth
                    value={countries}
                    onChange={handleChange}
                    SelectProps={{
                        multiple:true
                    }}
                    size='small'
                    color="warning"
                    helperText="Please select your country"
                    error={countries.length == 0}
                >
                    <MenuItem value="RU">Russia</MenuItem>
                    <MenuItem value="US">USA</MenuItem>
                    <MenuItem value="EU">Europe</MenuItem>
                </TextField>
            </Box>
        </Stack>

    )
}