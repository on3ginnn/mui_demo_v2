import { Stack, Box, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from 'react';

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))

export const MuiAutocomplete = () => {
    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log(value);
    console.log(skill);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleChangeSkillsOptions = (event, newValue) => {
        setSkill(newValue);
    }

    return(
        <Stack spacing={2}>
            <Typography variant="h3">Autocomplete</Typography>
            <Box>
                <Stack spacing={2} width='250px'>
                    <Autocomplete freeSolo value={value} onChange={handleChange} size='small' options={skills} renderInput={(params) => <TextField {...params} label='Skills' />} />
                    <Autocomplete value={skill} onChange={handleChangeSkillsOptions} size='small' options={skillsOptions} renderInput={(params) => <TextField {...params} label='Skills' />} />
                </Stack>
            </Box>
            
        </Stack>
    )
}