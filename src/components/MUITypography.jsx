import { Typography } from '@mui/material';
export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Header</Typography>
            <Typography variant='h2'>h2 Header</Typography>
            <Typography variant='h3'>h3 Header</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 Header</Typography>
            <Typography variant='h5'>h5 Header</Typography>
            <Typography variant='h6'>h6 Header</Typography>

            <Typography variant='subtitle1'>Subtitle 1</Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            <Typography variant->Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora in ullam odio veritatis quae qui, neque laboriosam quos quisquam maiores dicta eius libero. Pariatur possimus minus illum mollitia explicabo assumenda!</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nemo nobis a esse, eum corporis. Vero labore provident, et mollitia quibusdam similique eum voluptatibus assumenda, fugit sapiente dolorem rerum? Maiores.</Typography>
        </div>
    )
}