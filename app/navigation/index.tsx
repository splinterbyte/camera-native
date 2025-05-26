import CameraPage from "@/pages/camera/ui";
import HomePage from "@/pages/home/ui";
import SettingsPage from "@/pages/settings/ui";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

type IconProps = {
  name: string | undefined;
  size?: number;
  color?: string;
};

const AppIcon: React.FC<IconProps> = ({ name, size = 24, color = "black" }) => {
  return <Ionicons name={name as any} size={size} color={color} />;
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: string | undefined;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Camera") {
            iconName = focused ? "camera" : "camera-outline";
          }

          // Возвращаем иконку
          return <AppIcon name={iconName} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Camera" component={CameraPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
}
