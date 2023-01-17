import { Form, SelectField } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'

export const PageLimitSelector = ({ limit, routeTo }) => {
  return (
    <Form>
      <SelectField
        className="absolute z-10 flex-col justify-start rounded-md  border py-1.5 px-3 align-middle  text-gray-600"
        name="perPage"
        multiple={false}
        value={limit}
        onChange={(e) =>
          navigate(
            routeTo({
              page: 1,
              limit: parseInt(e.target.value),
            })
          )
        }
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </SelectField>
    </Form>
  )
}
