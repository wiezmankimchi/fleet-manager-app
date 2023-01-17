import { useTranslation } from 'react-i18next'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const { currentUser } = useAuth()
  const { t, i18n } = useTranslation()
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('User Name')}
        </Label>

        <TextField
          name="username"
          defaultValue={props.user?.username}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Email')}
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('First Name')}
        </Label>

        <TextField
          name="firstname"
          defaultValue={props.user?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Last Name')}
        </Label>

        <TextField
          name="lastname"
          defaultValue={props.user?.lastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Role')}
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-0"
            name="role"
            defaultValue="USER"
            defaultChecked={props.user?.role?.includes('USER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div className="mx-2">User</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-1"
            name="role"
            defaultValue="ADMIN"
            defaultChecked={props.user?.role?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div className="mx-2">Admin</div>
        </div>

        <FieldError name="role" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
