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

const CarForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.car?.id)
  }

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
          name="registration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registration
        </Label>

        <TextField
          name="registration"
          defaultValue={props.car?.registration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registration" className="rw-field-error" />

        <Label
          name="registrationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registration date
        </Label>

        <DatetimeLocalField
          name="registrationDate"
          defaultValue={formatDatetime(props.car?.registrationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationDate" className="rw-field-error" />

        <Label
          name="carModelId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Car model id
        </Label>

        <NumberField
          name="carModelId"
          defaultValue={props.car?.carModelId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="carModelId" className="rw-field-error" />

        <Label
          name="updateAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Update at
        </Label>

        <DatetimeLocalField
          name="updateAt"
          defaultValue={formatDatetime(props.car?.updateAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="updateAt" className="rw-field-error" />

        <Label
          name="createdBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>

        <NumberField
          name="createdBy"
          defaultValue={props.car?.createdBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="createdBy" className="rw-field-error" />

        <Label
          name="updatedBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated by
        </Label>

        <NumberField
          name="updatedBy"
          defaultValue={props.car?.updatedBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="updatedBy" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarForm
