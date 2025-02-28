import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from 'react'

export const MuiButton = () => {
    const [formats, setFormats] = useState(null);
    console.log(formats);
    const handleFormatChange = (_event, updatedFormats) => {
        setFormats(updatedFormats);
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text" href='https://ya.ru'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color='primary'>Primary</Button>
                <Button variant="contained" color='secondary'>secondary</Button>
                <Button variant="contained" color='error'>error</Button>
                <Button variant="contained" color='warning'>warning</Button>
                <Button variant="contained" color='info'>info</Button>
                <Button variant="contained" color='success'>success</Button>
            </Stack>
            <Stack spacing={2} direction='row' display='block'>
                <Button variant="contained" size='small'>Small</Button>
                <Button variant="contained" size='medium'>Medium</Button>
                <Button variant="contained" disableElevation disableRipple size='large' onClick={() => alert('Click')}>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="text" startIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="outlined" startIcon={<SendIcon />}>Send</Button>
                <Button variant="text" endIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" disableElevation endIcon={<SendIcon />}>Send</Button>
                <Button variant="outlined" endIcon={<SendIcon />}>Send</Button>
                <IconButton aria-label="send" color="secondary" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack spacing={2} direction='row' display='block'>
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="warning" aria-label="aligment button group">
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="primary" exclusive>
                    <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}