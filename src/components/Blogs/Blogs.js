import React from "react";

const Blogs = () => {
  return (
    <div className="md:container mx-auto p-5 min-h-screen">
      <h1 className="my-3 text-xl font-bold">
        Question: Difference between authorization and authentication
      </h1>
      <p>
        Answer: Authentication means how much resource user can access.
        Authentication identify who is user. Authorization implementation by the
        organization what type of or how much resource can use or access an
        user. Authentication works with passwords, one time pins or other way
        entered by the user. Authentication is first step for identification a
        user and then Authorization take place.
      </p>
      <h1 className="my-3 text-xl font-bold">
        Question: Why are you using firebase? What other options do you have to
        implement authentication?
      </h1>
      <p>
        Answer: Firebase helps to authenticate user in a website. We can
        implement sing in with firebase authentication service. By Firebase
        authentication service we can create account with email password,
        google, facebook, github, microsoft, apple account. We dont have to
        manage user authentication because by firebase we can authenticate user
        easily. The alternative way to implementation authentication we can use
        Auth0, Okta, Amazon Cognito, Keycloak, JSON Web Token etc.
      </p>
      <h1 className="my-3 text-xl font-bold">
        Question: What other services does firebase provide other than
        authentication
      </h1>
      <p>
        Answer: The other services does firebase provide other than
        authentication are Cloud Firestore, Hosting, Cloud Storage,Google
        Analytics, Predictions, Cloud Messaging, Realtime Database etc.
      </p>
    </div>
  );
};

export default Blogs;
