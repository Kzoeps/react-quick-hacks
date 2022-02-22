import './hacket-input.module.scss';
import { Form, Input, InputProps } from 'antd';
import { useField } from 'formik';

/* eslint-disable-next-line */
export interface HacketInputProps extends InputProps{
  label?: string
  name: string,
}

export function HacketInput({ type = 'text', name, disabled=false, label,  ...props}: HacketInputProps) {
  const [field, meta] = useField(name);
  return (
    <Form layout='vertical'>
      <Form.Item label={label}>
        <Input type={type} {...field} {...props} disabled={disabled} />
        {meta.error && meta.touched && <div>
          {meta.error}
        </div>}
      </Form.Item>
    </Form>
  );
}

export default HacketInput;
