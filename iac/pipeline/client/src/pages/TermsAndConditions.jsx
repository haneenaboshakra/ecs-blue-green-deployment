import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function TermsAndConditions() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="container py-5 policy_page">
          <h2 className="mt-2">Terms & Conditions</h2>

          <p>
            Welcome to Balanced! By accessing and using our website, you agree
            to the following terms and conditions.
          </p>

          <h3 className="mt-5">Use of Website:</h3>
          <ul>
            <li>
              By using our website, you confirm that you are at least 18 years
              of age or have parental permission to use the site.
            </li>
            <li>
              You agree to provide accurate and current information when placing
              an order.
            </li>
          </ul>

          <h3 className="mt-5">Intellectual Property:</h3>
          <p>
            All content on the website, including images, text, logos, and
            designs, are owned by Balanced. You may not copy, reproduce, or
            distribute this content without our permission.
          </p>

          <h3 className="mt-5">Product Availability:</h3>
          <ul>
            <li>
              We strive to keep our inventory up to date. However, there may be
              instances where products are out of stock or discontinued.
            </li>
            <li>Prices are subject to change without notice.</li>
          </ul>

          <h3 className="mt-5">Limitation of Liability:</h3>
          <ul>
            <li>
              Balanced will not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              products.
            </li>
            <li>
              We do not guarantee that the website will be uninterrupted or
              error-free.
            </li>
          </ul>

          <h3 className="mt-5">Governing Law:</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Australia.
          </p>

          <p>
            If you have any questions regarding these terms, please contact us
            at{" "}
            <a href="mailto:support@balanced.com.au">support@balanced.com.au</a>
            .
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default TermsAndConditions;
