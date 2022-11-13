import { defineMessages } from 'react-intl';

export const scope = 'Components.User.product';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name product',
    },
    price: {
      id: `${scope}.label.price`,
      defaultMessage: 'Price',
    },
    description: {
      id: `${scope}.label.description`,
      defaultMessage: 'Description',
    },
    images: {
      id: `${scope}.label.images`,
      defaultMessage: 'Images',
    },
    category: {
      id: `${scope}.label.category`,
      defaultMessage: 'Category',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Username',
    },
    price: {
      id: `${scope}.placeholder.price`,
      defaultMessage: 'Price',
    },
    description: {
      id: `${scope}.placeholder.description`,
      defaultMessage: 'Description....',
    },
    images: {
      id: `${scope}.placeholder.images`,
      defaultMessage: 'Images.....',
    },
    category: {
      id: `${scope}.placeholder.category`,
      defaultMessage: 'Category....',
    },
  },
  gender: {
    female: {
      id: `${scope}.gender.female`,
      defaultMessage: 'Female',
    },
    male: {
      id: `${scope}.gender.male`,
      defaultMessage: 'Male',
    },
  },
  message: {
    required: {
      id: `${scope}.message.error.required`,
      defaultMessage: 'This field is required',
    },
    length: {
      id: `${scope}.message.error.length`,
      defaultMessage: 'Length from 9 -15 characters',
    },
    is_number: {
      id: `${scope}.message.error.isNumber`,
      defaultMessage: 'This field must be a number',
    },
  },
  btn_submit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
});