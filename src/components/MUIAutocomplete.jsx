import { Stack, Box, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from 'react';

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

export const MuiAutocomplete = () => {
    const [value, setValue] = useState(null);
    console.log(value);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return(
        <Stack spacing={2}>
            <Typography variant="h3">Autocomplete</Typography>
            <Box>
                <Stack spacing={2} width='250px'>
                    <Autocomplete freeSolo value={value} onChange={handleChange} size='small' options={skills} renderInput={(params) => <TextField {...params} label='Skills' />} />
                </Stack>
            </Box>
        </Stack>
    )
}