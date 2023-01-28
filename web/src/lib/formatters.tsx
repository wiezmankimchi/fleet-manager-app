import React from 'react'

import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (value) => {
  let output = value?.toString() ?? ''

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }

  return output
}

export const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string, language?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toLocaleDateString(language)}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

export const numberCommaFormatter = (value: number) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const numberPercentFormatter = (value: number) => {
  if (value <= 1) {
    const percent = value * 100
    return percent.toString() + '%'
  }
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
}

export const consoleLogger = (_where, value?) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Debug message:', _where, value)
  }
}

export const formatDate = (value) => {
  if (value) {
    return value.replace(/T\d{2}:\d{2}:\d{2}\.\d{3}\w/, '')
  }
}
