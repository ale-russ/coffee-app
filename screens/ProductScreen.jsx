import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftCircleIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { HeartIcon, MinusIcon, StarIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";

const ProductScreen = (props) => {
  const navigation = useNavigation();
  const [size, setSize] = useState("small");

  const item = props.route.params;

  return (
    <View style={tw`flex-1`}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          width: "100%",
          position: "absolute",
        }}
      />
      <SafeAreaView style={tw`gap-y-4 flex-1`}>
        <View style={tw`mx-4 flex-row justify-between items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`rounded-full border-2 border-white p-2`}>
            <HeartIcon size="24" color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={item.image} style={tw`h-60 w-60`} />
        </View>
        <View
          style={tw`bg-[${themeColors.bgLight}] flex flex-row items-center rounded-3xl mx-4 p-1 px-2 gap-x-1 w-16 opacity-90`}
        >
          <StarIcon size="15" color="white" />
          <Text style={tw`text-base font-semibold text-white`}>
            {item.stars}
          </Text>
        </View>
        <View style={tw`mx-4 flex-row justify-between items-center`}>
          <Text style={tw`text-3xl font-semibold text-[${themeColors.text}]`}>
            {item.name}{" "}
          </Text>
          <Text style={tw`text-xl font-semibold text-[${themeColors.text}]`}>
            $ {item.price}{" "}
          </Text>
        </View>
        <View style={tw`mx-4 gap-y-2`}>
          <Text style={tw`text-[${themeColors.text}] text-lg font-bold`}>
            Coffee Size
          </Text>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              onPress={() => setSize("small")}
              //   style={tw`bg-[${
              //     size === "small" ? themeColors.bgLight : rgba(0, 0, 0, 0.07)
              //   }] px-8 p-3 rounded-full`}
              style={{
                backgroundColor:
                  size === "small"
                    ? themeColors.bgLight
                    : "rgba(0, 0, 0, 0.03)",
                paddingHorizontal: 8,
                padding: 3,
                borderRadius: "50%",
              }}
            >
              <Text style={{ color: size === "small" ? "white" : "gray" }}>
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              //   style={tw`bg-[${
              //     size === "medium" ? themeColors.bgLight : rgba(0, 0, 0, 0.07)
              //   }] px-8 p-3 rounded-full`}
              style={{
                backgroundColor:
                  size === "medium"
                    ? themeColors.bgLight
                    : "rgba(0, 0, 0, 0.07)",
                paddingHorizontal: 8,
                padding: 3,
                borderRadius: "50%",
              }}
            >
              <Text style={{ color: size === "medium" ? "white" : "gray" }}>
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              //   style={tw`bg-[${
              //     size === "large" ? themeColors.bgLight : rgba(0, 0, 0, 0.07)
              //   }] px-8 p-3 rounded-full`}
              style={{
                backgroundColor:
                  size === "large"
                    ? themeColors.bgLight
                    : "rgba(0, 0, 0, 0.07)",

                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: "50%",
              }}
            >
              <Text style={{ color: size === "large" ? "white" : "gray" }}>
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`mx-4 gap-y-2 h-28`}>
          <Text style={tw`text-[${themeColors.text}] text-lg font-bold`}>
            About
          </Text>
          <Text style={tw`text-gray-600`}>{item.desc}</Text>
        </View>
        <View style={tw`flex-row justify-between items-center mx-4 mb-2`}>
          <View style={tw`flex-row items-center gap-x-1`}>
            <Text style={tw`text-base text-gray-700 font-semibold opacity-50`}>
              Volume
            </Text>
            <Text style={tw`text-base text-black font-semibold `}>
              {item.volume}
            </Text>
          </View>

          <View
            style={tw`flex-row items-center gap-x-4 border-gray-500 border rounded-full p-1 px-4`}
          >
            <TouchableOpacity>
              <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text style={tw`font-extrabold text-lg text-[${themeColors.text}]`}>
              2
            </Text>
            <TouchableOpacity>
              <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Buy now button */}
        <View style={tw`flex-row justify-between items-center mx-4`}>
          <TouchableOpacity
            style={tw`p-4 rounded-full border border-gray-400 `}
          >
            <ShoppingBagIcon size="30" color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-5 rounded-full flex-1 ml-3 bg-[${themeColors.bgLight}]`}
          >
            <Text style={tw`text-center text-base font-semibold text-white`}>
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
