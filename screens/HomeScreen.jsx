import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Carousel from "react-native-snap-carousel";

import { themeColors } from "../theme/index";
import { categories, coffeeItems } from "../constants/index";
import CoffeeCard from "../components/CoffeeCard";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={tw`flex-1 relative `}>
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        style={tw`w-full absolute -top-5 opacity-10 h-50`}
      />
      <SafeAreaView style={ios ? { marginBottom: 8 } : null}>
        {/* avatar and bell icons */}
        <View style={tw`px-4 flex-row items-center justify-between`}>
          <Image
            className="profile"
            style={tw`h-10 w-10 rounded-full ml-2`}
            source={require("../assets/images/avatar.png")}
          />

          <View style={tw`flex-row items-center gap-x-2`}>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text style={tw`text-base font-semibold`}>New York, NYC</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        {/* Search bar */}
        <View style={tw`mx-5 mt-14`}>
          <View
            style={tw`flex-row justify-center rounded-full p-1 bg-[#e6e6e6] items-center `}
          >
            <TextInput
              placeholder="Search"
              style={tw`p-4 flex-1 font-semibold text-gray-700`}
            />
            <TouchableOpacity
              style={tw`rounded-full p-2 bg-[${themeColors.bgLight}]`}
            >
              <MagnifyingGlassIcon color="white" size="25" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View style={tw`px-5 mt-6`}>
          <FlatList
            style={tw`overflow-visible`}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            x
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  style={{
                    marginHorizontal: 4,
                    padding: 10,
                    borderRadius: "50%",
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  onPress={() => setActiveCategory(item.id)}
                >
                  <Text style={tw`font-semibold  ${activeTextClass}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* coffee cards */}
        <View style={tw`mt-16 py-2`}>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            loop={true}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.75}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
