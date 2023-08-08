import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
  // function MyTabBar({ state, descriptors, navigation }) {
  //   let isFocusedTabName;

  //   return (
  //     <>
  //       {state.routes.map((route, index) => {
  //         const isFocused = state.index === index;
  //         if (isFocused) {
  //           switch (route.name) {
  //             case 'Posts':
  //               isFocusedTabName = 'Posts';
  //               break;

  //             case 'CreatePost':
  //               isFocusedTabName = 'CreatePost';
  //               break;

  //             case 'Profile':
  //               isFocusedTabName = 'Profile';
  //               break;
  //           }
  //         }
  //       })}
  //       {console.log('isFocusedTabName:', isFocusedTabName)}
  //     </>
  //     // <View
  //     //   style={{
  //     //     backgroundColor: '#ffffff',
  //     //     borderTopColor: '#212121',
  //     //     borderTopWidth: 0.5,
  //     //     paddingTop: 9,
  //     //     paddingBottom: 35,
  //     //     flexDirection: 'row',
  //     //   }}
  //     // >
  //     //   {state.routes.map((route, index) => {
  //     //     console.log('route:', route);
  //     //     const isFocused = state.index === index;
  //     //     console.log('isFocused:', isFocused);
  //     //     const iconsProps = {
  //     //       iconName: '',
  //     //       color: '#212121',
  //     //     };
  //     //     switch (route.name) {
  //     //       case 'Posts':
  //     //         iconsProps.iconName = 'grid';
  //     //         break;

  //     //       case 'CreatePost':
  //     //         iconsProps.iconName = 'plus';
  //     //         break;

  //     //       case 'Profile':
  //     //         iconsProps.iconName = 'user';
  //     //         break;
  //     //     }

  //     //     const onPress = () => {
  //     //       const event = navigation.emit({
  //     //         type: 'tabPress',
  //     //         target: route.key,
  //     //         canPreventDefault: true,
  //     //       });

  //     //       if (!isFocused && !event.defaultPrevented) {
  //     //         // The `merge: true` option makes sure that the params inside the tab screen are preserved
  //     //         navigation.navigate({ name: route.name, merge: true });
  //     //       }
  //     //     };

  //     //     return (
  //     //       <TouchableOpacity
  //     //         key={route.key}
  //     //         accessibilityState={isFocused ? { selected: true } : {}}
  //     //         onPress={onPress}
  //     //         style={{
  //     //           flex: 1,
  //     //           justifyContent: 'center',
  //     //           alignItems: 'center',
  //     //         }}
  //     //       >
  //     //         <Feather
  //     //           name={iconsProps.iconName}
  //     //           size={24}
  //     //           color={iconsProps.color}
  //     //         />
  //     //       </TouchableOpacity>
  //     //     );
  //     //   })}
  //     // </View>
  //   );
  // }

  return <Text>Home</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    marginLeft: 16,
  },
});
