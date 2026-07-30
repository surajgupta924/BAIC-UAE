"use client";

import { FormEvent, useState } from "react";
import nationalities from "@/data/nationalities.json";
import {
  SITE_NAME,
  SUPPORT_EMAIL,
  SUPPORT_LOCATION,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
} from "@/lib/site";

const BANNER = "/images/pages/contact-us/contact-banner-v1.png?v=20260730f";
const FACE_PHONE = "/images/pages/contact-us/ng-face-phone.jpg";
const FACE_EMAIL = "/images/pages/contact-us/ng-face-email.jpg";
const FACE_LOCATION = "/images/pages/contact-us/ng-face-location.jpg";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng";

type FormState = {
  gender: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nationality: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,3})?$/;
const PHONE_RE =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

const INITIAL: FormState = {
  gender: "Male",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  nationality: "Nigerian",
  email: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  const first = values.firstName.trim();
  const last = values.lastName.trim();
  const email = values.email.trim();
  const phone = values.phoneNumber.trim();
  const message = values.message.trim();

  if (!values.gender.trim()) errors.gender = "Title is required";
  if (!first) errors.firstName = "First name is required";
  else if (first.length < 2) errors.firstName = "Enter at least 2 characters";
  if (!last) errors.lastName = "Last name is required";
  else if (last.length < 2) errors.lastName = "Enter at least 2 characters";
  if (!phone) errors.phoneNumber = "Phone number is required";
  else if (!PHONE_RE.test(phone)) errors.phoneNumber = "Phone number is not valid";
  if (!email) errors.email = "Email is required";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email";
  if (!message) errors.message = "Please tell us how we can help";

  return errors;
}

export default function ContactUsPageView() {
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
    <div className="contact-us-page omni-contact-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="Contact Us" loading="eager" />
        {/* Title is baked into the banner image — keep overlay for a11y only */}
        <div className="page-heading-info visually-hidden">
          <div>
            <h1 className="text-uppercase">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <a href={`tel:${SUPPORT_PHONE_TEL}`} className="omni-contact-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FACE_PHONE} alt="Customer support" loading="lazy" />
                <div className="omni-contact-card-body">
                  <span className="omni-contact-label">Call us</span>
                  <strong>{SUPPORT_PHONE_DISPLAY}</strong>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="omni-contact-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FACE_EMAIL} alt="Sales consultant" loading="lazy" />
                <div className="omni-contact-card-body">
                  <span className="omni-contact-label">Email</span>
                  <strong>{SUPPORT_EMAIL}</strong>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://maps.google.com/?q=Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="omni-contact-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FACE_LOCATION} alt="Visit Omni Auto" loading="lazy" />
                <div className="omni-contact-card-body">
                  <span className="omni-contact-label">Visit</span>
                  <strong>{SUPPORT_LOCATION}</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="omni-contact-panel">
                <div className="omni-contact-panel-intro">
                  <h2>Talk to {SITE_NAME}</h2>
                  <p>
                    Share your details and we will connect you with our Nigeria
                    team for sales, service, or test-drive support.
                  </p>
                </div>

                {submitted ? (
                  <div className="alert alert-success text-center" role="status">
                    Thank you — your message has been received. Our team will
                    contact you shortly.
                  </div>
                ) : null}

                <form className="omni-contact-form" onSubmit={onSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="cu-gender">
                        Title
                      </label>
                      <select
                        id="cu-gender"
                        name="gender"
                        className={`form-select${errors.gender ? " is-invalid" : ""}`}
                        value={values.gender}
                        onChange={onChange}
                      >
                        <option value="Male">Mr</option>
                        <option value="Female">Ms</option>
                      </select>
                      {errors.gender ? (
                        <div className="invalid-feedback d-block">{errors.gender}</div>
                      ) : null}
                    </div>
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="cu-firstName">
                        First name
                      </label>
                      <input
                        id="cu-firstName"
                        type="text"
                        name="firstName"
                        className={`form-control${errors.firstName ? " is-invalid" : ""}`}
                        placeholder="Ada"
                        value={values.firstName}
                        onChange={onChange}
                      />
                      {errors.firstName ? (
                        <div className="invalid-feedback d-block">
                          {errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="cu-lastName">
                        Last name
                      </label>
                      <input
                        id="cu-lastName"
                        type="text"
                        name="lastName"
                        className={`form-control${errors.lastName ? " is-invalid" : ""}`}
                        placeholder="Okafor"
                        value={values.lastName}
                        onChange={onChange}
                      />
                      {errors.lastName ? (
                        <div className="invalid-feedback d-block">
                          {errors.lastName}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="cu-phone">
                        Phone number
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">+234</span>
                        <input
                          id="cu-phone"
                          type="text"
                          name="phoneNumber"
                          className={`form-control${errors.phoneNumber ? " is-invalid" : ""}`}
                          placeholder="801 234 5678"
                          value={values.phoneNumber}
                          onChange={onChange}
                        />
                      </div>
                      {errors.phoneNumber ? (
                        <div className="invalid-feedback d-block">
                          {errors.phoneNumber}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="cu-nationality">
                        Nationality
                      </label>
                      <select
                        id="cu-nationality"
                        name="nationality"
                        className="form-select"
                        value={values.nationality}
                        onChange={onChange}
                      >
                        {(nationalities as string[]).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="cu-email">
                        Email
                      </label>
                      <input
                        id="cu-email"
                        type="email"
                        name="email"
                        className={`form-control${errors.email ? " is-invalid" : ""}`}
                        placeholder="you@email.com"
                        value={values.email}
                        onChange={onChange}
                      />
                      {errors.email ? (
                        <div className="invalid-feedback d-block">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="cu-message">
                        How can we help?
                      </label>
                      <textarea
                        id="cu-message"
                        rows={5}
                        name="message"
                        className={`form-control${errors.message ? " is-invalid" : ""}`}
                        placeholder="Tell us about the model you are interested in, or any service question."
                        value={values.message}
                        onChange={onChange}
                      />
                      {errors.message ? (
                        <div className="invalid-feedback d-block">
                          {errors.message}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-12 text-end">
                      <button type="submit" className="btn omni-contact-submit">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content contact-map-section">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <iframe
              src={MAP_SRC}
              title={`${SITE_NAME} — ${SUPPORT_LOCATION}`}
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
