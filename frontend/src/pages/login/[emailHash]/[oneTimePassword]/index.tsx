import { useAccessTokenFromOtpMutation } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

export default function OneTimePasswordLogin() {
  const router = useRouter();
  const { emailHash, oneTimePassword } = router.query;
  const [_status, getAccessToken] = useAccessTokenFromOtpMutation();

  useEffect(() => {
    console.log(emailHash, oneTimePassword);
    console.log(router);
    if (typeof emailHash !== "string" || typeof oneTimePassword !== "string") {
      // throw new Error("email has and password should be strings");
      console.log("not defined");
      return;
    }
    getAccessToken({
      emailHash,
      oneTimePassword,
    }).then((res) => {
      if (res.error) {
        throw new Error("Error logging in: " + res.error.message);
      }

      if (res.data?.access_token_from_otp?.token === undefined) {
        throw new Error("the token was undefined");
      }

      localStorage.setItem("host-token", res.data.access_token_from_otp.token);
      router.push("/host/setup");
    });
  }, [emailHash, oneTimePassword]);

  return <h1>Logging in...</h1>;
}
