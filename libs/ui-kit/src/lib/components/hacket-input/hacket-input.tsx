import './hacket-input.module.scss';
import { Input, InputProps } from 'antd';
import { useField } from 'formik';

/* eslint-disable-next-line */
export interface HacketInputProps extends InputProps{
  name: string,
}

export function HacketInput({ type = 'text', name, disabled=false,  ...props}: HacketInputProps) {
  const [field, meta] = useField(name);
  return (
    <>
      <Input type={type} {...field} {...props} disabled={disabled}/>
      {meta.error && meta.touched && <div>
        {meta.error}
      </div>}
    </>
  );
}

export default HacketInput;
