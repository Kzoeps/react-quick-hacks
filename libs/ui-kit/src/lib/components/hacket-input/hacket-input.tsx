import './hacket-input.module.scss';
import { Input, InputProps } from 'antd';
import { useField } from 'formik';

/* eslint-disable-next-line */
export interface HacketInputProps extends InputProps{
  name: string,
}

export function HacketInput({ type = 'text', name, ...props}: HacketInputProps) {
  const [field, meta] = useField(name);
  return (
    <>
      <Input {...field} {...props} />
      {meta.error && meta.touched && <div>
        {meta.error}
      </div>}
    </>
  );
}

export default HacketInput;
