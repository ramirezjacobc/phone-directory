import { useState, useEffect } from "react";

export function useForm(callback, validate, initValues, update = false) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  useEffect(() => {
    setValues(initValues);
  }, [initValues]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors(validate(values, update));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    e.persist();
    const {
      target: { name, value },
    } = e;

    if (Object.keys(errors.length > 0) && [name] in errors) {
      delete errors[name];
    }

    setValues((values) => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}
