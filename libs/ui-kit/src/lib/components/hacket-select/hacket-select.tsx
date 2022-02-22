import { Form, Select, SelectProps } from 'antd';
import { Field, FieldProps } from 'formik';

export interface HacketSelectProps<T = any> extends SelectProps<T> {
  name: string,
  validate: unknown,
  label?: string,
  onChange?: (value: T, option: unknown) => void
}

export const renderOptions = <T extends any>(options: { label: string, value: T }[]) => (
  options.map(({ label, value }) => (
    <Select.Option key={value as number} value={value}>{label}</Select.Option>
  ))
);
export const HacketSelect = ({
                               name,
                               validate,
                               children,
                               onChange,
                               onBlur,
                               options,
                               label,
                               ...restProps
                             }: HacketSelectProps) => {
  return (
    <Form layout='vertical'>
      <Form.Item label={label}>
        <Field name={name} validate={validate}>
          {({
              field: { value },
              form: { setFieldValue, setFieldTouched }
            }: FieldProps) => (
            <Select<any>
              onChange={(changedValue, option) => {
                setFieldValue(name, changedValue);
                if (onChange) onChange(changedValue, option);
              }}
              // setting undefined will show the placeholder
              value={value === '' || value === null ? undefined : value}
              {...restProps}
            >
              {options ? renderOptions(options as unknown as { label: string, value: unknown }[]) : children}
            </Select>
          )}
        </Field>
      </Form.Item>
    </Form>
  );
}

export default HacketSelect
