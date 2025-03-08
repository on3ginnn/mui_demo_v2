import { Stack, Typography, Box, FormControlLabel, Switch, FormControl, FormLabel, FormGroup, FormHelperText } from "@mui/material"
import { useState } from "react"

export const MuiSwitch = () => {
    const [active, setActive] = useState(false);
    const [switchActives, setSwitchActives] = useState([]);
    console.log(active);
    console.log(switchActives);
    const handleSwitchChange = (event) => {
        const index = switchActives.indexOf(event.target.value);
        if (index === -1){
            setSwitchActives([...switchActives, event.target.value]);
        } else {
            setSwitchActives(switchActives.filter((active) => active !== event.target.value));
        }
    }
    return (
        <Stack spacing={2}>
            <Typography variant="h3">Switch</Typography>
            <Box>
                <FormControlLabel value={active} onChange={() => setActive(!active)} label="Dark mode" control={<Switch color="error" />} />
            </Box>
            <Box>
                <FormControl error={!switchActives.length} color="secondary">
                    <FormLabel>Switch Group</FormLabel>
                    <FormGroup onChange={handleSwitchChange} row>
                        <FormControlLabel 
                            label="HTML"
                            value='html'
                            control={<Switch size="small" color="warning" checked={switchActives.includes('html')} />}
                        />
                        <FormControlLabel 
                            label="CSS" 
                            value='css'
                            control={<Switch checked={switchActives.includes('css')} />}
                        />
                        <FormControlLabel 
                            label="JS"
                            value='js' 
                            control={<Switch checked={switchActives.includes('js')} />}
                        />

                    </FormGroup>
                    <FormHelperText>Required any selection</FormHelperText>
                </FormControl>
            </Box>
        </Stack>
    )
}