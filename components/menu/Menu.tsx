import { Menu, TextField, styled } from '@mui/material'

const CssMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: '0px',
        width: '15em',
    },
    '& .MuiButtonBase-root': {
        fontFamily: `"Space Grotesk", sans-serif`,
        textWrap: 'wrap !important',
        color: '#0087F3',
    },
    '& .MuiInputBase-root': {
        borderRadius: '0',
    },
    '& .MuiInputBase-input, .MuiFormLabel-root': {
        color: 'white',
        fontFamily: `"Space Grotesk", sans-serif`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
})

export default CssMenu
