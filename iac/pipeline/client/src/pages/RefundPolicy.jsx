import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function RefundPolicy() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="container py-5 policy_page">
          <h2 className="mt-2">Refund Policy</h2>

          <p>
            At Balanced, we are committed to providing high-quality products. If
            you are not fully satisfied with your purchase, we’re here to help.
          </p>

          <h3 className="mt-5">Eligibility for Refunds and Exchanges:</h3>
          <ul>
            <li>
              You can request a refund or exchange within 14 days of receiving
              your item.
            </li>
            <li>
              To be eligible, the item must be unused and in the same condition
              as received.
            </li>
            <li>
              Proof of purchase (receipt or order number) must be provided.
            </li>
          </ul>

          <h3 className="mt-5">Non-Refundable Items:</h3>
          <ul>
            <li>Custom or personalized products</li>
            <li>Items on sale</li>
          </ul>

          <h3 className="mt-5">Refund Process:</h3>
          <ul>
            <li>
              Once your return is received and inspected, we will notify you of
              the approval or rejection of your refund.
            </li>
            <li>
              If approved, your refund will be processed, and a credit will be
              applied to your original method of payment within 7-10 business
              days.
            </li>
          </ul>

          <h3 className="mt-5">Shipping Costs:</h3>
          <ul>
            <li>Shipping costs are non-refundable.</li>
            <li>
              If you are returning an item, you will be responsible for covering
              the shipping cost.
            </li>
          </ul>

          <p className="mt-5">
            If you have any questions regarding our refund policy, please
            contact us at{" "}
            <a href="mailto:support@balanced.com.au">
              {" "}
              support@balanced.com.au
            </a>
            .
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default RefundPolicy;
