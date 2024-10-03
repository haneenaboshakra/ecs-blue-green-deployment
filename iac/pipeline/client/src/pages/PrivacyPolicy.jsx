import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function PrivacyPolicy() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="container py-5 policy_page">
          <h2 className="mt-2">Privacy Policy</h2>
          
          <p>
            Balanced values your privacy. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>

          <h3 className="mt-5">Information We Collect:</h3>
          <ul>
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number,
              shipping address, and payment information.
            </li>
            <li>
              <strong>Browsing Data:</strong> Cookies, IP address, and browsing
              behavior on our website.
            </li>
          </ul>

          <h3 className="mt-5">How We Use Your Information:</h3>
          <ul>
            <li>To process orders and provide customer support.</li>
            <li>
              To send you updates about your order and promotional materials, if
              you’ve opted in.
            </li>
            <li>To improve our website and services through analytics.</li>
          </ul>

          <h3 className="mt-5">Data Security:</h3>
          <p>
            We implement security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Third-Party Disclosure:</h2>
          <p>
            We do not sell, trade, or transfer your personal data to outside
            parties except for trusted partners who assist in operating our
            website and conducting business, as long as these parties agree to
            keep this information confidential.
          </p>

          <h3 className="mt-5">Your Rights:</h3>
          <ul>
            <li>
              You have the right to access, update, or delete your personal
              data.
            </li>
            <li>
              You can opt out of receiving promotional emails at any time by
              following the unsubscribe link.
            </li>
          </ul>

          <p>
            If you have any questions regarding our privacy practices, please
            contact us at <a href="mailto:support@balanced.com.au">support@balanced.com.au</a>.
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default PrivacyPolicy;
