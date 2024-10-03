// utils/sanitizer.js
import DOMPurify from 'dompurify';

export const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    return DOMPurify.sanitize(input);
  }
  return input;
};