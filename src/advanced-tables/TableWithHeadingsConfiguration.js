import { buildTableWithHeadings } from '../table-builders'
const configuration = {
  mappings: {
    city: 'City',
    state: 'State',
    country: 'Country',
    company: 'Company',
    price: 'Price',
    phone_number: 'Phone Number',
  },
  hiddenHeadings: ['last_update'],
  customRenderCell: {
    price: (data) => {
      const dollars = data.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      return dollars
    },
  },
}

export const TableWithHeadingsConfiguration = buildTableWithHeadings(
  configuration,
)
