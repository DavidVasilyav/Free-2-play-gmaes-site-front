import { GlobalTextFieldStyled } from "./GlobalTextFieldStyle";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
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
  sx
})
{
console.log(sx);

  return (
      <GlobalTextFieldStyled
      InputLabelProps={{style : {color : '#ff8906'} }}
      sx={{
        "& .MuiInputBase-input":{ backgroundColor: () => ChangeDarkLightColors("", ""), color: () => ChangeDarkLightColors("#fffffe", '#0f0e17'), border: 'none', borderRadius: 1 },
        "& .MuiInputLabel-root": {color: '#ff8906'},
        "& .MuiOutlinedInput-root": {
          color: () => ChangeDarkLightColors(),
          '&.Mui-focused input': {
            color: () => ChangeDarkLightColors("#fffffe", "#0f0e17"),
          },
          '&.Mui-focused fieldset': {
            color: () => ChangeDarkLightColors("#fffffe", '#0f0e17'),
            borderColor: '#ff8906',
          },
        },
        "& .label.Mui-focused": {
          color: () => ChangeDarkLightColors("#fffffe", '#0f0e17')
        },
        "&MuiSvgIcon-root":{
          color:() => ChangeDarkLightColors("#fffffe", '#0f0e17')
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
