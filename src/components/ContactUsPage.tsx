"use client";

import { FormEvent, useState } from "react";
import nationalities from "@/data/nationalities.json";

const BANNER = "/images/pages/contact-us/contact-page-heading.1HoxVuc6.png";
const SERVICE1 = "/images/pages/contact-us/service1.BWT-JQx-.jpg";
const SERVICE2 = "/images/pages/contact-us/service2.DyiINR3S.jpg";
const SERVICE3 = "/images/pages/contact-us/service3.Ckl0XMg5.jpg";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2551.364194846969!2d55.33616474337947!3d25.264736681463617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67f6fa01ae2b%3A0x6042bb8281802003!2sBAIC%20UAE%20-%20Al%20Shaali%20Moto!5e0!3m2!1sen!2sae!4v1723101227194!5m2!1sen!2sae";

type FormState = {
  gender: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nationality: string;
  email: string;
  mediaIntroduction: string;
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
  nationality: "Emirian",
  email: "",
  mediaIntroduction: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  const first = values.firstName.trim();
  const last = values.lastName.trim();
  const email = values.email.trim();
  const phone = values.phoneNumber.trim();
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

  if (!phone) errors.phoneNumber = "Phone Number is Required";
  else if (!PHONE_RE.test(phone)) errors.phoneNumber = "Phone number is not valid";

  if (!email) errors.email = "Email is Required";
  else if (!EMAIL_RE.test(email)) errors.email = "Email not allowed";

  if (!intro) errors.mediaIntroduction = "Media Introduction is Required";

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
    <div className="contact-us-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="" loading="eager" />
        <div className="page-heading-info">
          <div>
            <h1 className="text-uppercase">Contact US</h1>
          </div>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <a href="tel:+9718002242823" className="qabox">
                <div className="qabox-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SERVICE1} className="img-fluid" alt="" loading="lazy" />
                </div>
                <h4>+971 800 2242 823</h4>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="mailto:Info@alshaalimoto.com" className="qabox">
                <div className="qabox-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SERVICE2} className="img-fluid" alt="" loading="lazy" />
                </div>
                <h4>Info@alshaalimoto.com</h4>
              </a>
            </div>
            <div className="col-sm-4">
              <a
                href="https://maps.google.com/?q=BAIC+UAE+Al+Shaali+Moto"
                target="_blank"
                rel="noopener noreferrer"
                className="qabox"
              >
                <div className="qabox-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SERVICE3} className="img-fluid" alt="" loading="lazy" />
                </div>
                <h4>Dubai, United Arab Emirates</h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              <div className="mb-5 text-center contact-us-intro">
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
                        <label htmlFor="cu-gender">Title</label>
                      </div>
                      <div className="col-sm-9">
                        <select
                          id="cu-gender"
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
                        <label htmlFor="cu-firstName">First Name</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="cu-firstName"
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
                        <label htmlFor="cu-lastName">Last Name</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="cu-lastName"
                          type="text"
                          name="lastName"
                          className="input-box"
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
                        <label htmlFor="cu-phone">Phone Number</label>
                      </div>
                      <div className="col-sm-9">
                        <div className="input-group field-phonenumber">
                          <div className="input-group-prepend">
                            <span className="form-select country-code-static">
                              +971
                            </span>
                          </div>
                          <input
                            id="cu-phone"
                            type="text"
                            name="phoneNumber"
                            className={`input-box w-auto${
                              errors.phoneNumber ? " is-invalid" : ""
                            }`}
                            placeholder="Please enter your Phone Number"
                            value={values.phoneNumber}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    {errors.phoneNumber ? (
                      <div className="errorAll">{errors.phoneNumber}</div>
                    ) : null}
                  </div>

                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="cu-nationality">Nationality</label>
                      </div>
                      <div className="col-sm-9">
                        <select
                          id="cu-nationality"
                          name="nationality"
                          className="form-select bg-transparent border-0"
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
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <label htmlFor="cu-email">Email</label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          id="cu-email"
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
                        <label htmlFor="cu-intro">Media Name</label>
                        <textarea
                          id="cu-intro"
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

      <section className="section-content contact-map-section">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <iframe
              src={MAP_SRC}
              title="BAIC UAE - Al Shaali Moto"
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
