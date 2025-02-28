import { Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant="outlined" />
                <TextField label='Name' variant="filled" />
                <TextField label='Name' variant="standard" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size="small" color="secondary" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required />
                <TextField label='Password' type="password" disabled helperText="Do not share your password with anyone" />
                <TextField label='Read only' InputProps={{ readOnly: true }} />
            </Stack>
        </Stack>
    )
}