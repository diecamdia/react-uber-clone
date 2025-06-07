import { icons } from "@/constants";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const OAuth = () => {
  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log("Google Sign-In pressed");
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButton
        title="Log In in with Google"
        onPress={handleGoogleSignIn}
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image source={icons.google} className="w-5 h-5 mx-2" />
        )}
        bgVariant="outline"
        textVariant="primary"
      />
    </View>
  );
};
export default OAuth;
