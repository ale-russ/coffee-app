import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import { themeColors } from "../theme/index";
import { StarIcon } from "react-native-heroicons/solid";
import { PlusIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`rounded-10 bg-[${themeColors.bgDark}] h-95 w-70 `}>
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: -50,
        }}
      >
        <Image source={item.image} style={tw`h-40 w-40`} />
      </View>
      <View style={tw`px-5 mt-5 gap-y-3`}>
        <Text style={tw`text-3xl text-white font-semibold z-10`}>
          {item.name}
        </Text>
        <View
          style={tw`mt-6 bg-white opacity-30 flex flex-row items-center p-1 px-2 w-16 rounded-3xl gap-x-1`}
        >
          <StarIcon size="15" color="black" />
          <Text style={tw`text-base font-semibold text-black`}>
            {item.stars}
          </Text>
        </View>
      </View>
      <View style={tw`flex-row gap-x-1 z-10 mb-6 px-5 mt-6`}>
        <Text style={tw`text-base text-white font-semibold opacity-60`}>
          Volume
        </Text>
        <Text style={tw`text-base text-white font-semibold `}>
          {item.volume}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 4,
          backgroundColor: themeColors.bgDark,
          shadowColor: themeColors.bgDark,
          shadowRadius: 25,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          borderRadius: 20,
        }}
      >
        <Text style={tw`text-white font-bold text-lg px-5`}>
          $ {item.price}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Product", { ...item })}
          style={{
            padding: 4,
            backgroundColor: "white",
            borderRadius: "50%",
            shadowColor: "black",
            shadowRadius: 40,
            shadowOffset: { width: -20, height: -10 },
            shadowOpacity: 1,
            marginRight: 4,
          }}
        >
          <PlusIcon size="40" strokeWidth={2} color={themeColors.bgColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;
