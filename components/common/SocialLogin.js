import Api from "@/api/api";
import { MainContext } from "@/context";
import { signInWithFacebook, signInWithGoogle } from "@/firebase/firebase";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { onLogin } = useContext(MainContext);
  const router = useRouter();

  const handleSocialLogin = async (type) => {
    try {
      const signIn = type === "google" ? signInWithGoogle : signInWithFacebook;
      const user = await signIn();

      if (user?.email) {
        // handleSocialStore(user, type);
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSocialStore = (user, type) => {
    const { email, displayName, photoUrl } = user;
    const [firstName, lastName] = displayName.split(" ");
    const data = {
      email,
      firstName,
      lastName,
      avatar: photoUrl,
      socialConnected: {
        isGoogleConnected: type === "google" ? true : false,
        isFacebookConnected: type === "facebook" ? true : false,
      },
    };

    Api.post("/auth/social-login", data)
      .then((response) => {
        if (response?.data?.statusCode === 200) {
          const token = response.data?.data?.token;
          Cookies.set("token", token, { expires: 1 });
          onLogin();
          router.push("/questionnaire");
          toast.success(response?.data?.message);
        }
      })
      .catch((error) => {
        toast.warn(error?.response?.data?.message);
      });
  };

  return (
    <div>
      <span className="_icon">
        <a onClick={() => handleSocialLogin("google")}>
          <img src="./Stock/register/google.svg" alt="" />
        </a>
        <a onClick={() => handleSocialLogin("facebook")}>
          <img src="./Stock/register/facebook.svg" alt="" />
        </a>
      </span>
    </div>
  );
};

export default SocialLogin;
