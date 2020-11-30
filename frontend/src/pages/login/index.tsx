import { useHostLoginMutation } from "generated/graphql";
import React from "react";

export default function HostLogin() {
  const [status, sendLoginEmail] = useHostLoginMutation();

  if (status.data?.send_auth_link?.status) {
    return <h1>Email sent</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");

        if (typeof email !== "string") {
          throw new Error("not sure how this happened");
        }
        sendLoginEmail({ email }).then((res) => {
          if (res.error) {
            console.error(res.error);
            throw new Error("something weird happened: " + res.error.message);
          }
          if (res.data?.send_auth_link?.status === undefined) {
            throw new Error("status was undefined for some reason");
          }
        });
      }}
    >
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <p>A link to use to login will be emailed to you</p>
      <button type="submit">Send Login Email</button>
    </form>
  );
}
