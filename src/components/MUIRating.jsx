import { Stack, Typography, Box, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const [value, setValue] = useState(null);
    console.log(value);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Stack spacing={2}>
            <Typography variant="h3">Rating</Typography>
            <Box>
                <Stack spacing={2}>
                    <Rating value={value} onChange={handleChange} precision={0.5} size="large" />
                    <Rating value={3} precision={0.5} size="large" readOnly />
                    <Rating value={value} onChange={handleChange} precision={0.5} icon={<FavoriteIcon fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                    <Rating value={value} onChange={handleChange} highlightSelectedOnly icon={<FavoriteIcon fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                </Stack>
            </Box>
        </Stack>
    )
}