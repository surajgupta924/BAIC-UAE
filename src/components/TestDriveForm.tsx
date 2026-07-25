"use client";

import { FormEvent, useState } from "react";

const MODELS = [
  "BJ80",
  "BJ60",
  "BJ40 C",
  "BJ40 PRO",
  "BJ30",
  "BJ40 SE",
  "F40",
  "X7",
  "X55 II",
  "X35",
  "U5 PLUS",
];

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success" role="status">
        Thank you. Your test drive request has been received. Our team will
        contact you shortly.
      </div>
    );
  }

  return (
    <form className="section-questionnaire" onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="td-name">
            Full Name *
          </label>
          <input
            id="td-name"
            name="name"
            className="form-control"
            required
            autoComplete="name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="td-phone">
            Phone *
          </label>
          <input
            id="td-phone"
            name="phone"
            type="tel"
            className="form-control"
            required
            autoComplete="tel"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="td-email">
            Email *
          </label>
          <input
            id="td-email"
            name="email"
            type="email"
            className="form-control"
            required
            autoComplete="email"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="td-model">
            Preferred Model *
          </label>
          <select id="td-model" name="model" className="form-select" required defaultValue="">
            <option value="" disabled>
              Select a model
            </option>
            {MODELS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="td-city">
            City
          </label>
          <input id="td-city" name="city" className="form-control" />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="td-notes">
            Message
          </label>
          <textarea id="td-notes" name="notes" className="form-control" rows={4} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-testdrive btn-dark px-5">
            Book Test Drive
          </button>
        </div>
      </div>
    </form>
  );
}
