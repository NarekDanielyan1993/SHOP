import TextField from '@mui/material/TextField';

export const Input = ({id="", style, name, label, helperText, error, variant, onChange, ...props}) => {
    return (
        <TextField
            {...(error && {error: true, helperText: error})}
            name={name} 
            style={style} 
            id={id} 
            label={label} 
            variant={variant} 
            onChange={onChange} 
            {...props} 
        />
    )
}