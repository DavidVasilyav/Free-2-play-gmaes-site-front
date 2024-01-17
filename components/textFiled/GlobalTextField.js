import { GlobalTextFieldStyled } from "./GlobalTextFieldStyle";

// --backgroundColor: #16161a;
//   --paragraph: #94a1b2;
//   --btn_text: #fffffe;
//   --headline: #fffffe;
//   --btn: ##7f5af0
//   --stroke: #010101
export default function GlobalTextField({
  type,
  name,
  value,
  label,
  required,
  error,
  onChange,
  select,
  option,
  inputProps,
})
{
  return (
      <GlobalTextFieldStyled
      InputLabelProps={{style : {color : '#ff8906'} }}
      sx={{
        "& .MuiInputBase-input":{ backgroundColor: '#16161a', color: '#fffffe', border: 'none', borderRadius: 1 },
        "& .MuiInputLabel-root": {color: '#ff8906'},
        "& .MuiOutlinedInput-root": {
          color: 'black',
          '&.Mui-focused input': {
            color: '#fffffe',
          },
          '&.Mui-focused fieldset': {
            color: '#fffffe',
            borderColor: '#ff8906',
          },
        },
        "& .label.Mui-focused": {
          color:'#fff'
        },
        "&MuiSvgIcon-root":{
          color:'#fff'
        }
        
      }}
        select={select || false}
        type={type}
        name={name}
        value={value}
        label={label}
        required={required}
        error={error}
        inputProps={inputProps}
        onChange={onChange}
        IconComponent={{color: 'white'}}

      >
        {option}
      </GlobalTextFieldStyled>
  );
}
