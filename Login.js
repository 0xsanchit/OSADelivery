import React, { useState } from "react";
import { Text } from "react-native";
import {
  SafeAreaViewBase,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

// import { ErrorMessage, Form, FormField, SubmitButton } from "./forms";
import ErrorMessage from "./ErrorMessage";
import Form from "./Form";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

// const phoneNumbervalidationSchema = Yup.object().shape({
//   phoneNumber: Yup.string()
//     .required("Please enter your mobile number")
//     .length(10)
//     .label("Phone Number"),
// });

// const otpValidationSchema = Yup.object().shape({
//   otp: Yup.string().length(6).required("Please enter OTP").label("OTP"),
// });

function Login() {
  const [OTPSend, setOTPSend] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmitPhoneNumber = async ({ phoneNumber }) => {
    // console.log("handle submit phone Number clicked !!!");
    // const result = await sendOTP_Api.sendOTP(phoneNumber);
    // console.log(result);
    // if (!result.ok) return setLoginFailed(true);

    setOTPSend(true);
  };

  const handleSubmit = async ({ phoneNumber, otp }) => {
    try {
      console.log("handle submit clicked !!!");
      const result = await authApi.login({ phoneNumber, otp });
      //console.log(result.data);
      if (!result.ok) return setLoginFailed(true);

      setLoginFailed(false);
      auth.logIn(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.formField}>
        <Form
          initialValues={{ phoneNumber: "", otp: "" }}
          onSubmit={(OTPSend && handleSubmit) || handleSubmitPhoneNumber}
          validationSchema={OTPSend}
        >
          <ErrorMessage error="Something went wrong" visible={loginFailed} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="number-pad"
            name="phoneNumber"
            label="Phone Number"
            style={{ width: "90%", backgroundColor: "#fff" }}
            placeholder="Your Phone Number"
          />
          {!OTPSend && (
            <SubmitButton
              style={styles.submitPhoneNumberButton}
              title="Send OTP"
            />
          )}
          {OTPSend && (
            <>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="phone-message"
                keyboardType="number-pad"
                name="otp"
                label="OTP"
                width="50%"
                style={{ width: "95%", backgroundColor: "#fff" }}
                placeholder="Enter 6 digit OTP"
              />
              <TouchableOpacity style={styles.resendOTP}>
                <Text style={styles.resendOTPText}>Resend OTP</Text>
              </TouchableOpacity>
              <SubmitButton style={styles.submitOTPButton} title="Login" />
            </>
          )}
        </Form>
      </View>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  phoneImg: {
    height: "40%",
    width: "80%",
    alignSelf: "center",
  },
  formField: {
    marginTop: 50,
    marginHorizontal: 12,
  },
  submitPhoneNumberButton: {
    width: "50%",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  resendOTP: {
    position: "absolute",
    right: "10%",
    bottom: "45%",
  },
  resendOTPText: {
    fontSize: 16,
    color: "blue",
  },
});

export default Login;
