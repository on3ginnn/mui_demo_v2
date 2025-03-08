import { Box, Stack, Typography, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from "@mui/material"
import { useState } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const [accept, setAccept] = new useState(false);
    const [skills, setSkills] = new useState([]);
    console.log({accept});
    console.log({skills});
    const handleChange = (event) => {
        setAccept(event.target.checked);
    }
    const handleSkillsChange = (event) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1){
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    }
    return (
        <Stack spacing={2}>
            <Typography variant="h3">Checkbox</Typography>
            <Box>
                <Box>
                    <FormControlLabel onChange={handleChange} label="I accept term and conditions" control={<Checkbox size="small" color="secondary" checked={accept} />}/>
                </Box>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={accept} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl error={!skills.length} color="secondary">
                    <FormLabel>Skills</FormLabel>
                    <FormGroup onChange={handleSkillsChange} row>
                        <FormControlLabel 
                            // onChange={handleChange} 
                            label="HTML"
                            value='html'
                            control={<Checkbox size="small" checked={skills.includes('html')} />}
                        />
                        <FormControlLabel 
                            // onChange={handleChange} 
                            label="CSS" 
                            value='css'
                            control={<Checkbox checked={skills.includes('css')} />}
                        />
                        <FormControlLabel 
                            // onChange={handleChange} 
                            label="JS"
                            value='js' 
                            control={<Checkbox checked={skills.includes('js')} />}
                        />

                    </FormGroup>
                    <FormHelperText>Required any selection</FormHelperText>
                </FormControl>
            </Box>
        </Stack>
    )
}