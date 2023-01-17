import { useTranslation } from 'react-i18next'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const DriverForm = (props) => {
  const { t, i18n } = useTranslation()
  const onSubmit = (data) => {
    props.onSave(data, props?.driver?.id)
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
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('First Name')}
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.driver?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />
        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Last Name')}
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.driver?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="registration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Registration')}
        </Label>

        <TextField
          name="registration"
          defaultValue={props.driver?.registration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="registration" className="rw-field-error" />

        <Label
          name="registrationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Registration Date')}
        </Label>

        <DatetimeLocalField
          name="registrationDate"
          defaultValue={formatDatetime(props.driver?.registrationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="registrationDate" className="rw-field-error" />

        <Label
          name="registratonImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Registraton Image')}
        </Label>

        <TextField
          name="registratonImage"
          defaultValue={props.driver?.registratonImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="registratonImage" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.driver?.companyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="companyId" className="rw-field-error" />

        <Label
          name="carId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Car id
        </Label>

        <NumberField
          name="carId"
          defaultValue={props.driver?.carId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="carId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DriverForm
