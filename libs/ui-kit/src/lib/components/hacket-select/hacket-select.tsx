import { Select} from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { SelectProps } from 'antd';

export type HacketSelectProps<T = any> = SelectProps<T> & {name: string, validate: unknown, onChange?: (value: T) => void}

export const renderOptions =  <T extends any>(options: {label: string, value: T}[]) => (
  options.map(({label, value}) => (
    <Select.Option key={value as number} value={value}>{label}</Select.Option>
  ))
)
// declare class Select<ValueType extends SelectValue = SelectValue> extends React.Component<SelectProps<ValueType>> {
export const HacketSelect = ({
                         name,
                         validate,
                         children,
                         onChange,
                         onBlur,
                         options,
                         ...restProps
                       }: HacketSelectProps) => {
  return (
    <Field name={name} validate={validate}>
      {({
          field: { value },
          form: { setFieldValue, setFieldTouched },
        }: FieldProps) => (
        <Select<any>
          onChange={(changedValue, option) => {
            setFieldValue(name, changedValue)
            if (onChange) onChange(changedValue, option)
          }}
          // setting undefined will show the placeholder
          value={value === '' || value === null ? undefined : value}
          {...restProps}
        >
          {options ? renderOptions(options as unknown as {label: string, value: unknown}[] ) : children}
        </Select>
      )}
    </Field>
  )
}

export default HacketSelect
