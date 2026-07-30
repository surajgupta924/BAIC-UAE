"use client";

import { FormEvent, useState } from "react";

const BANNER = "/images/pages/media-contact/media-banner-v1.png?v=20260730i";

type FormState = {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  mediaIntroduction: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,3})?$/;

const INITIAL: FormState = {
  gender: "Male",
  firstName: "",
  lastName: "",
  email: "",
  mediaIntroduction: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  const first = values.firstName.trim();
  const last = values.lastName.trim();
  const email = values.email.trim();
  const intro = values.mediaIntroduction.trim();

  if (!values.gender.trim()) errors.gender = "Title is Required";

  if (!first) errors.firstName = "First Name is Required";
  else if (first.length < 3)
    errors.firstName = "First Name must be at least 3 characters";
  else if (first.length > 20)
    errors.firstName = "First Name must be at most 20 characters";

  if (!last) errors.lastName = "Last Name is Required";
  else if (last.length < 3)
    errors.lastName = "Last Name must be at least 3 characters";
  else if (last.length > 20)
    errors.lastName = "Last Name must be at most 20 characters";

  if (!email) errors.email = "Email is Required";
  else if (!EMAIL_RE.test(email)) errors.email = "Email not allowed";

  if (!intro) errors.mediaIntroduction = "Media Introduction is Required";

  return errors;
}

export default function MediaContactPageView() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    setValues(INITIAL);
  };

  return (
    <div className="media-contact-page">
      <section className="page-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="Media Contact" loading="eager" />
        {/* Title is baked into the banner image — keep overlay for a11y only */}
        <div className="page-heading-info visually-hidden">
          <div>
            <h1 className="text-uppercase">
              MEDIA
              <br />
              CONTACT
            </h1>
          </div>
        </div>
      </section>

      <section className="section-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              <div className="mb-5 text-center media-contact-intro">
                <p>
                  Thank you for your support to BAIC,
                  <br /> Please leave your contact information and questions, we
                  will arrange professionals to contact you
                </p>
              </div>

              {submitted ? (
                <div className="alert alert-success text-center" role="status">
                  Form submitted successfully!
                </div>
              ) : null}

              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="form-box">
                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="mc-gender">Title</label>
                      </div>
                      <div className="col-sm-9">
                        <select
                          id="mc-gender"
                          name="gender"
                          className={`form-select bg-transparent border-0${
                            errors.gender ? " is-invalid" : ""
                          }`}
                          value={values.gender}
                          onChange={onChange}
                        >
                          <option value="Male">Mr</option>
                          <option value="Female">Ms</option>
                        </select>
                      </div>
                    </div>
                    {errors.gender ? (
                      <div className="errorAll">{errors.gender}</div>
                    ) : null}
                  </div>

                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="mc-firstName">First Name</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="mc-firstName"
                          type="text"
                          name="firstName"
                          className="input-box"
                          placeholder="Please enter your first name"
                          value={values.firstName}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    {errors.firstName ? (
                      <div className="errorAll">{errors.firstName}</div>
                    ) : null}
                  </div>

                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="mc-lastName">Last Name</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="mc-lastName"
                          type="text"
                          className="input-box"
                          name="lastName"
                          placeholder="Please enter your last name"
                          value={values.lastName}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    {errors.lastName ? (
                      <div className="errorAll">{errors.lastName}</div>
                    ) : null}
                  </div>

                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="mc-email">Email</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="mc-email"
                          type="text"
                          name="email"
                          className="input-box"
                          placeholder="Please enter your email address"
                          value={values.email}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    {errors.email ? (
                      <div className="errorAll">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="field-group field-group-textarea">
                    <div className="row">
                      <div className="col-sm-12">
                        <label htmlFor="mc-intro">Media Instroduction</label>
                        <textarea
                          id="mc-intro"
                          rows={5}
                          name="mediaIntroduction"
                          className="input-box"
                          placeholder="Please enter your description"
                          value={values.mediaIntroduction}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    {errors.mediaIntroduction ? (
                      <div className="errorAll">{errors.mediaIntroduction}</div>
                    ) : null}
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-outline-secondary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
