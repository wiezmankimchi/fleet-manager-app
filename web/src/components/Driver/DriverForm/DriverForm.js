import { useEffect, useState } from 'react'

import { useTranslation, Trans } from 'react-i18next'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DateField,
  NumberField,
  Submit,
  SelectField,
  useForm,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import CompanyLOVCell from 'src/components/CompanyLOVCell/CompanyLOVCell'
import { consoleLogger, formatDate } from 'src/lib/formatters'

const COMPANIES_QUERY = gql`
  query FindCompanies($page: Int, $limit: Int, $orderBy: CompaniesOrderBy) {
    companies(page: $page, limit: $limit, orderBy: $orderBy) {
      count
      companies {
        id
        name
      }
    }
  }
`

const DriverForm = (props) => {
  const { t, i18n } = useTranslation()
  const { setValue } = useForm()
  // const { lov, setLOV } = useState()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setValue('companyId', props?.driver?.companyId)
  //   }, 2000)
  // }, [setValue])

  const onSubmit = (data) => {
    consoleLogger('DriverForm onSubmit', data)
    props.onSave(data, props?.driver?.id)
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
          validation={{
            required: {
              value: true,
              message: t('First Name is required'),
            },
          }}
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
          validation={{
            required: {
              value: true,
              message: t('Last Name is required'),
            },
          }}
        />
        <FieldError name="lastName" className="rw-field-error" />
        <Label
          name="registration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Reg. Number')}
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
          {t('Reg. End Date')}
        </Label>
        <DateField
          name="registrationDate"
          defaultValue={formatDate(props.driver?.registrationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          min={formatDate(new Date().toISOString())}
        />
        <FieldError name="registrationDate" className="rw-field-error" />
        <Label
          name="registratonImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Reg. Image')}
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
          {t('Company')}
        </Label>
        ,<CompanyLOVCell defaultValue={props?.driver?.companyId} />
        <FieldError name="companyId" className="rw-field-error" />
        {/* <Label
          name="carId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {t('Car')}
        </Label>

        <NumberField
          name="carId"
          defaultValue={props.driver?.carId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="carId" className="rw-field-error" /> */}
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
