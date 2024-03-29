import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'

function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Name must be at least 3 characters')
          .max(50, 'Name must not exceed 50 characters')
          .required("Name is required"),
        number: Yup.string()
          .min(3, 'Number must be at least 3 characters')
          .max(50, 'Number must not exceed 50 characters')
          .required("Number is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: Math.random().toString() });
        resetForm();
      }}
    >
      <div className={styles.formContainer}>
  <Form>
    <div className={styles.formField}>
      <label htmlFor="name" className={styles.labelForm}>Name</label>
      <Field type="text" id="name" name="name" className={styles.inputForm} />
      <ErrorMessage name="name" component="div" className={styles.errorForm} />
    </div>
    <div className={styles.formField}>
      <label htmlFor="number" className={styles.labelForm}>Number</label>
      <Field type="text" id="number" name="number" className={styles.inputForm} />
      <ErrorMessage name="number" component="div" className={styles.errorForm} />
    </div>
    <button type="submit" className={styles.btnForm}>Add contact</button>
  </Form>
</div>

    </Formik>
  );
}

export default ContactForm;
