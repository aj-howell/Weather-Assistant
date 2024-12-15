import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#f26523' }}>
            <Tabs.Screen
                name="home"
                options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="scan"
                options={{
                title: 'Scan',
                tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="expand" color={color} />,
                }}
            />
        </Tabs>
    );
};