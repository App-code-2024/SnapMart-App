import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ProductList } from "./ProductList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <gridLayout rows="auto, *">
            <searchBar
                row={0}
                hint="Search products..."
                className="m-2"
                onTextChange={(args) => console.log("Searching:", args.value)}
            />
            <ProductList row={1} />
        </gridLayout>
    );
}