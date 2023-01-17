import { useTranslation } from 'react-i18next'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  SelectField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const CompanyForm = (props) => {
  const { t, i18n } = useTranslation()
  const onSubmit = (data) => {
    props.onSave(data, props?.company?.id)
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Name')}
        </Label>

        <TextField
          name="name"
          defaultValue={props.company?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="address1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Address')}1
        </Label>

        <TextField
          name="address1"
          defaultValue={props.company?.address1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address1" className="rw-field-error" />

        <Label
          name="address2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Address')}2
        </Label>

        <TextField
          name="address2"
          defaultValue={props.company?.address2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address2" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('City')}
        </Label>

        <TextField
          name="city"
          defaultValue={props.company?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="zipcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Zipcode')}
        </Label>

        <TextField
          name="zipcode"
          defaultValue={props.company?.zipcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="zipcode" className="rw-field-error" />

        <Label
          name="country"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Country')}
        </Label>

        <SelectField
          name="country"
          defaultValue={props.company?.country || 'Please select an option'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            valueAsString: true,
            validate: {
              matchesInitialValue: (value) => {
                return (
                  value !== t('Please select an option') ||
                  t('Select an Option')
                )
              },
            },
          }}
        >
          <option>{t('Please select an option')}</option>
          <option value={'Israel'}>{t('Israel')}</option>
          <option value={'USA'}>{t('USA')}</option>
        </SelectField>

        <FieldError name="country" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
