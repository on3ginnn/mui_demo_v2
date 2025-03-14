import { Box, Stack, Typography, Divider } from "@mui/material";

export const MuiLayout = () => {
    return(
        <Stack spacing={2} sx={{
            border: "1px solid black"
        }}>
            <Typography variant="h3">Box</Typography>
            <Stack spacing={4} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Box sx={{ 
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "100px",
                    width: "100px",
                    padding: "16px",
                    "&:hover": {
                        backgroundColor: "primary.light",
                    }
                }}>
                    text
                </Box>
                <Box height="100px" width="100px" bgcolor="success.light" display='flex'></Box>
            </Stack>

        </Stack>
    )
}