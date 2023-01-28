import { useTranslation } from 'react-i18next'
import Select, { GetOptionLabel, GetOptionValue } from 'react-select'

import {
  SelectField,
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from '@redwoodjs/forms'

// const LOVSelectField = ({
//   name,
//   options = [],
//   defaultValue = [],
//   isMulti = false,
//   getOptionValue = (option) => option?.value,
//   getOptionLabel = (option) => option?.label,
//   className: additionalClassName,
//   validation,
//   control,
//   isSearchable,
//   ...rest
// }) => {
//   const { t, i18n } = useTranslation()
//   console.table(options)
//   console.log(name)
//   return (
//     <Select
//       options={options}
//       isSearchable={isSearchable}
//       defaultValue={defaultValue}
//       validation={{
//         required: true,
//         valueAsNumber: true,
//         validate: {
//           matchesInitialValue: (value) => {
//             return (
//               value !== t('Please select an option') || t('Select an Option')
//             )
//           },
//         },
//       }}
//     />
//   )
// }

const LOVSelectField = ({ name, data, defaultValue, required }) => {
  const { t } = useTranslation()
  return (
    <SelectField
      name={name}
      className="rw-input"
      defaultValue={defaultValue || 0}
      errorClassName="rw-input rw-input-error"
      placeholder="Select Company"
      validation={{
        required: required,
        valueAsNumber: true,
        validate: {
          matchesInitialValue: (value) => {
            return (
              value !== t('Please select an option') || t('Select an Option')
            )
          },
        },
      }}
    >
      <option>{t('Please select an option')}</option>
      {data.map((item) => {
        return (
          <option key={item?.id} value={item?.id}>
            {t(item.name)}
          </option>
        )
      })}
    </SelectField>
  )
}

export default LOVSelectField
