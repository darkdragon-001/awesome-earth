import React from "react";

// components
import Fork from "./fork";
import SEO from "./seo";

import CountryContext from "../context/country-context";
import { Link } from "gatsby";
import countries from "../countries";

export default ({ title, seoTitle, image, description, children }) => {
  return (
    <>
      <SEO
        title={seoTitle}
        description={description}
        keywords={[]}
        meta={[]}
        image={image}
      />
      <div className="content">
        <header>
          <Fork />
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </header>
        {children}
      </div>
      <footer className="padding">
        <CountryContext.Consumer>
          {({ country }) => (
            <div className="change-country">
              {country.name ? <><div className="current">{countries.fromAlpha2Code(country.code).emoji} {country.name}</div> <span>&middot;</span></> : null}
              <Link to="/select-your-country" className="link">{country.name ? 'Change' : 'Select'} country</Link>
            </div>
          )}
        </CountryContext.Consumer>
      </footer>
    </>
  );
};
