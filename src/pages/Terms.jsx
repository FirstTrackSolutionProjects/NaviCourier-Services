import React from 'react';

const Terms = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-4xl text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to our logistics website. We are committed to protecting your privacy and ensuring that your personal
          information is handled in a safe and responsible manner.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-2">
            We collect information to provide better services to our users. This includes personal information such as
            your name, email address, and phone number, as well as non-personal information like your browser type and IP
            address.
          </p>

          <h3 className="font-semibold mb-1">1.1 Personal Information:</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>Contact Information: Name, email address, phone number, mailing address.</li>
            <li>Account Information: Username, password, and other information related to your account.</li>
            <li>Payment Information: Credit card details, billing address, and transaction history.</li>
          </ul>

          <h3 className="font-semibold mb-1">1.2 Non-Personal Information:</h3>
          <ul className="list-disc pl-6">
            <li>
              Usage Data: Information about how you use our Site and Services, such as IP address, browser type, operating
              system, pages viewed, and the dates/times of your visits.
            </li>
            <li>
              Cookies and Tracking Technologies: Data collected through cookies, web beacons, and similar technologies to
              enhance your user experience and for analytics purposes.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to improve our services, communicate with you, and enhance your experience
            on our website. We may also use your information for marketing purposes, but only if you have given us
            permission to do so.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties without your consent, except as required by law
            or to protect our rights. We may share non-personal information with our partners to improve our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Security of Your Information</h2>
          <p>
            We take the security of your personal information seriously. We implement appropriate technical and
            organizational measures to protect your data from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, update, and delete your personal information. If you wish to exercise these
            rights, please contact us using the contact details provided on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
          <p>
            Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal
            information from children under 13. If we become aware that we have inadvertently collected such information,
            we will take steps to delete it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage
            you to review our Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email: <a href="mailto:info@navicourier.com" className="text-blue-600 underline">info@navicourier.com</a></li>
            <li>Address: 123 Logistics Street, Cityname, Country-PIN</li>
          </ul>
        </section>
      </div>
    </div>

    </div>
  );
};

export default Terms;
