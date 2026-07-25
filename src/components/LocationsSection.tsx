"use client";

import Image from "next/image";
import { useState } from "react";

const UAE_FLAG =
  "https://www.baicglobal.com/file/common/image/2022/07/14/Flag_of_the_United_Arab_Emirates.svg_20220714151626A055.png";

const ICON_MAP =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD5SURBVChTdZPRFcFAEEXlx5cPn/5EBdKBpAI6kA7ogA5QgagAFUgH6CAlUAHv7dlxxhNzzjvZmc2dmZ1sks63lXCn0CyGGzwraAc97NUkLvp4HqFckphLoIBuDBhUYz35A/yAhNjSXoBnbGcocSYvCJ3iOWz/EBPRZ7sXAXuEXi7ICjyfty2chQsMFGqwORJoDX+lECcydkFOib3TWPUKpW6/y0pLaNPSEsdcCnCHn9nI2ZZOSvIEN3RhUA5Hp6TQGYFwUwziWqfkIbbFxOEqeYh+Bc2lBD9DBvEIwRTitGrIpkmAFcKd+wcxbmDaBrRV8gkJf34Hv/EGJ2wuT8bLoGQAAAAASUVORK5CYII=";

const ICON_PHONE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADqSURBVChTjZMBEcIwDEU3BeAAHIADhgNwwBTAFDAUcDiYA0ABSAAHk4AD+G+kd7neoMtdbk2Tl6Rpl2df2UiP0ou0tL3kJ1fESnp2kc3QBMCtdBKVOcnepUoDv3uCrtbRXx74IZ25qKfWhfQ1pDLtMawgSy3uKRA/lcd27pEBgCRICjBSS/cu+mB7fxMEmCAqLlw0991EdGFx3baHp7IZXmgfP3BlCW76zm2ve0gexsZJBz5BK5vJ4wtC0jKGQwKeafxwHNstqz4YBzdQS7cx4ez1LzjEFJbEDxJfN8wUHJJwXn4ghKFyrOwDGbki0NC9gAEAAAAASUVORK5CYII=";

const ICON_FACEBOOK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADLSURBVChTY2RAA8bGxgGMjIz5QGEHkNT///8f/P79W4cRWZ2RkVEBExNTP7pmoGIBFIVA0z4ATeOHKQQq+AjkX/j165c3XKEBELCwsJyHKfr371/huXPnJsD4cIUmJiYgN+2HSfz580fxwoULDwgqPHPmDIqzGIEmNUA8918B6J4EJI+AxMEAqKkRpPA/ui/R+SDTiVF4EKjQAaTwADRgBYBW6yOZdhAqfuHs2bMFOH2N4RmYCejBMzIUAn3PAkxAPLBQACaID8gxBAAtq2jlxox38wAAAABJRU5ErkJggg==";

const ICON_INSTAGRAM =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVDhPjZPdVcJAEIVdwGegArGDCLwTKoAOwAqMFYgViBWYVIBWoLwDxgqkBB58DMRv1p2cPRh+9pycZCezd+7euWMu3Op2u2Ge53fGmKHGjrxTcqfL5TLRHCMf7XZ7XKlUXlxwTlIK4OYAkBQM+F/nHQN2K3lGmPB+J/i13W6HaZquTzEKgqBRrVangI3IfVwsFhPT6XReCQyyLLs+B4TCE4qOKHoDWApQHVZNYZSzmYMqzIrlqg4o0pIghRIpJIXZhgAFtVptzPcD//6AWM+gRooCSEC1mYJofLfb3a9Wq6nuAR2SMyuA9J6S4Jh88tmkagiLdE+TPuw/JFf1LQXSKuQVBzwGaxisVYajQCKm3Jtkaw1/OX16Iu5JRuqpsi4CZP11FiP0aElbOfANWB+JrDEpEGHaJ1/wo1dzh6zT6abVhFhD+sD+jWsVI1QGVOYjsUCkFoBJTOtjXzPV03ZN7s3PK1otzj40X/u62z1AYoMeml0aFdcfwNJTe0HvXMJ1x7bFsIplAJ0mQv/g9JMT8t8+btDFtJvCK24YRZP6OYwASZAjUjn+mU7G4RQQh3/Iyfy8X+JSRsYbpYeKAAAAAElFTkSuQmCC";

const MAP_LINK =
  "https://www.google.com/maps/dir/25.2293563,55.2811886/Al+Ittihad+RD+-Al+Khabaisi,+Dubai/@25.2460883,55.2684283,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5d4260acab71:0x746ed94c17eba4fd!2m2!1d55.3319015!2d25.2588882?entry=ttu";

function ContactIcons() {
  return (
    <>
      <li>
        <a className="dropdown-item" href={MAP_LINK}>
          <img src={ICON_MAP} alt="Map" loading="lazy" />
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="tel:009718002242823">
          <img src={ICON_PHONE} alt="Phone" loading="lazy" />
        </a>
      </li>
      <li>
        <a
          className="dropdown-item"
          href="https://www.facebook.com/BAICUAE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ICON_FACEBOOK} alt="Facebook" loading="lazy" />
        </a>
      </li>
      <li>
        <a
          className="dropdown-item"
          href="https://www.instagram.com/baicuae/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ICON_INSTAGRAM} alt="Instagram" loading="lazy" />
        </a>
      </li>
    </>
  );
}

export default function LocationsSection() {
  const [pinOpen, setPinOpen] = useState(false);

  return (
    <section className="section-locations pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title text-center mb-5">
              <h4 className="text-uppercase">FIND YOUR BAIC IN YOUR COUNTRY</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="map-box mb-5">
              <Image
                src="/images/map.DjrxZOqy.png"
                alt="BAIC worldwide locations"
                width={1200}
                height={600}
                className="img-fluid"
              />
              <div
                className={`point mkr4 dropdown-toggle${pinOpen ? " show" : ""}`}
              >
                <button
                  type="button"
                  className="marker-wrap"
                  aria-expanded={pinOpen}
                  aria-label="Toggle UAE location details"
                  onClick={() => setPinOpen((open) => !open)}
                >
                  <span className="marker" />
                </button>
                <ul
                  className={`dropdown-menu mappin-box${pinOpen ? " show" : ""}`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      UAE
                    </a>
                  </li>
                  <ContactIcons />
                </ul>
              </div>
            </div>
            <div className="location-lists">
              <div className="row align-items-center mb-3">
                <div className="col col-4">
                  <div className="location-title">
                    <Image
                      src={UAE_FLAG}
                      className="img-fluid"
                      alt="UAE flag"
                      width={30}
                      height={20}
                      unoptimized
                      referrerPolicy="no-referrer"
                    />
                    UAE
                  </div>
                </div>
                <div className="col col-8">
                  <ul className="location-info">
                    <ContactIcons />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
