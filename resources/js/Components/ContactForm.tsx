"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success" role="status">
        Thank you for contacting Omni Auto Limited. We will get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="row g-3">
      <div className="col-md-6">
        <label className="form-label" htmlFor="c-name">
          Full Name *
        </label>
        <input id="c-name" name="name" className="form-control" required />
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="c-email">
          Email *
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="c-phone">
          Phone *
        </label>
        <input id="c-phone" name="phone" type="tel" className="form-control" required />
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="c-subject">
          Subject
        </label>
        <input id="c-subject" name="subject" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label" htmlFor="c-message">
          Message *
        </label>
        <textarea id="c-message" name="message" className="form-control" rows={5} required />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-dark px-5">
          Send Message
        </button>
      </div>
    </form>
  );
}
