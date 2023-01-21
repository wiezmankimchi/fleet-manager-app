import { useTranslation } from 'react-i18next'

import { SelectField } from '@redwoodjs/forms'

const LOVSelectField = ({ name, data, defaultValue }) => {
  const { t } = useTranslation()
  return (
    <SelectField
      name="name"
      className="rw-input"
      defaultValue={defaultValue || 0}
      errorClassName="rw-input rw-input-error"
      placeholder="Select Company"
      validation={{
        required: true,
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


