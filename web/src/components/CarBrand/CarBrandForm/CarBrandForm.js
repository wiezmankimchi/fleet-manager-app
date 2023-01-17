import { useTranslation } from 'react-i18next'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const CarBrandForm = (props) => {
  const { t, i18n } = useTranslation()
  const onSubmit = (data) => {
    props.onSave(data, props?.carBrand?.id)
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
          defaultValue={props.carBrand?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />
        <Label
          name="heName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Hebrew Name')}
        </Label>

        <TextField
          name="heName"
          defaultValue={props.carBrand?.heName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="heName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarBrandForm
