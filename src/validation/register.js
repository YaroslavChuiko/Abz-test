/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */

const emailPattern =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;

const minLength = 2;
const maxLength = 60;

export const nameValidationOptions = {
  required: {
    value: true,
    message: 'Required field',
  },
  minLength: {
    value: minLength,
    message: `The name must be at least ${minLength} characters.`,
  },
  maxLength: {
    value: maxLength,
    message: `The name must be less then ${maxLength} characters.`,
  },
};

export const emailValidationOptions = {
  required: {
    value: true,
    message: 'Required field',
  },
  minLength: {
    value: minLength,
    message: `The email must be at least ${minLength} characters.`,
  },
  maxLength: {
    value: maxLength,
    message: `The email must be less then ${maxLength} characters.`,
  },
  pattern: {
    value: emailPattern,
    message: 'The email must be a valid email address.',
  },
};

export const phoneValidationOptions = {
  required: {
    value: true,
    message: 'Required field',
  },
  pattern: {
    value: phonePattern,
    message: 'The phone must be a valid phone number.',
  },
};

export const photoValidationOptions = {
  required: {
    value: true,
    message: 'Required field',
  },
  validate: {
    lessThan5MB: (files) => files[0]?.size < 5000000 || 'Max 5Mb',
    acceptedFormats: (files) => ['image/jpeg'].includes(files[0]?.type) || 'Only JPEG/JPG ',
  },
};
