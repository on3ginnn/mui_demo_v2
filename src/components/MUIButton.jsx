import { Button, Stack, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text" href='https://ya.ru'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color='primary'>Contained</Button>
                <Button variant="contained" color='secondary'>Contained</Button>
                <Button variant="contained" color='error'>Contained</Button>
                <Button variant="contained" color='warning'>Contained</Button>
                <Button variant="contained" color='info'>Contained</Button>
                <Button variant="contained" color='success'>Contained</Button>
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
        </Stack>
    )
}