// -------------------------------------------
// STEP 1
// -------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cardContainer}/>
//             </View>
//         );
//     }
// }
//
// const profileCardColor = 'dodgerblue';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cardContainer: {
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400
//     }
// });

// -------------------------------------------
// STEP 2
// -------------------------------------------
// import React, { Component } from 'react';
// import { Image, StyleSheet, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cardContainer}>
//                     <View style={styles.cardImageContainer}>
//                         <Image style={styles.cardImage} source={require('./user.png')}/>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const profileCardColor = 'dodgerblue';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cardContainer: {
//         borderColor: 'black',
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400
//     },
//     cardImageContainer: {
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: 'black',
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//     },
//     cardImage: {
//         width: 80,
//         height: 80
//     }
// });

// ----------------------------------------------------
// Border Radius Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Example style={{borderRadius: 20}}>
//                     <CenteredText>
//                         Example 1:{"\n"}4 Rounded Corners
//                     </CenteredText>
//                 </Example>
//                 <Example style={{borderTopRightRadius: 60,
//                                  borderBottomRightRadius: 60}}>
//                     <CenteredText>
//                         Example 2:{"\n"}D Shape
//                     </CenteredText>
//                 </Example>
//                 <Example style={{borderTopLeftRadius: 30,
//                                  borderBottomRightRadius: 30}}>
//                     <CenteredText>
//                         Example 3:{"\n"}Leaf Shape
//                     </CenteredText>
//                 </Example>
//                 <Example style={{borderRadius: 60}}>
//                     <CenteredText>
//                         Example 4:{"\n"}Circle
//                     </CenteredText>
//                 </Example>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         {props.children}
//     </View>
// );
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 75
//     },
//     example: {
//         width: 120,
//         height: 120,
//         marginLeft: 20,
//         marginBottom: 20,
//         backgroundColor: 'grey',
//         borderWidth: 2,
//         justifyContent: 'center'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10
//     }
// });

// ----------------------------------------------------
// Margin/Padding Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.exampleContainer}>
//                     <Example style={{}}>
//                         <CenteredText>A</CenteredText>
//                     </Example>
//                 </View>
//                 <View style={styles.exampleContainer}>
//                     <Example style={{paddingTop: 50}}>
//                         <CenteredText>B</CenteredText>
//                     </Example>
//                 </View>
//                 <View style={styles.exampleContainer}>
//                     <Example style={{paddingTop: 50, paddingLeft: 10}}>
//                         <CenteredText>C</CenteredText>
//                     </Example>
//                 </View>
//                 <View style={styles.exampleContainer}>
//                     <Example style={{paddingLeft: -10, paddingTop: -10}}>
//                         <CenteredText>D</CenteredText>
//                     </Example>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         {props.children}
//     </View>
// );
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         marginTop: 75
//     },
//     exampleContainer: {
//         borderWidth: 1,
//         width: 120,
//         height: 120,
//         marginLeft: 20,
//         marginBottom: 20,
//     },
//     example: {
//         width: 50,
//         height: 50,
//         backgroundColor: 'grey',
//         borderWidth: 1,
//         justifyContent: 'center'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10,
//         borderWidth: 1,
//         backgroundColor: 'lightgrey'
//     }
// });

// ----------------------------------------------------
// Position Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.row}>
//                     <Example>
//                         <CenteredText>A</CenteredText>
//                     </Example>
//                     <Example>
//                         <CenteredText>B</CenteredText>
//                         <View style={[styles.tinyExample,
//                                      {position: 'absolute',
//                                       right: 0,
//                                       bottom: 0}]}>
//                             <CenteredText>E</CenteredText>
//                         </View>
//                     </Example>
//                     <Example>
//                         <CenteredText>C</CenteredText>
//                     </Example>
//                 </View>
//                 <Example style={{position: 'absolute',right: 0, bottom: 0}}>
//                     <CenteredText>D</CenteredText>
//                 </Example>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         {props.children}
//     </View>
// );
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         height: 300,
//         margin: 40,
//         marginTop: 100,
//         borderWidth: 1
//     },
//     row: {
//         flex: 1,
//         flexDirection: 'row'
//     },
//     example: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'grey',
//         borderWidth: 1,
//         justifyContent: 'center'
//     },
//     tinyExample: {
//         width: 30,
//         height: 30,
//         borderWidth: 1,
//         justifyContent: 'center',
//         backgroundColor: 'lightgrey'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10
//     }
// });

// -------------------------------------------
// STEP 3
// -------------------------------------------
// import React, { Component } from 'react';
// import { Image, StyleSheet, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cardContainer}>
//                     <View style={styles.cardImageContainer}>
//                         <Image style={styles.cardImage} source={require('./user.png')}/>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const profileCardColor = 'dodgerblue';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cardContainer: {
//         alignItems: 'center',  // New
//         borderColor: 'black',
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400
//     },
//     cardImageContainer: {
//         alignItems: 'center', // New
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: 'black',
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginTop: 30,   // New
//         paddingTop: 15   // New
//     },
//     cardImage: {
//         width: 80,
//         height: 80
//     }
// });

// ----------------------------------------------------
// Font Family Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.row}>
//                     <CenteredText>
//                         I am a monospaced font on both platforms
//                     </CenteredText>
//                     <BottomText>
//                         {Platform.OS}
//                     </BottomText>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const BottomText = (props) => (
//     <CenteredText style={[{position: 'absolute', bottom: 0},
//                           props.style]}>
//         {props.children}
//     </CenteredText>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         height: 300,
//         margin: 40,
//         marginTop: 100,
//         borderWidth: 1
//     },
//     row: {
//         alignItems: 'center',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10,
//         fontSize: 24,
//         ...Platform.select({
//             ios: {
//                 fontFamily: 'American Typewriter'
//             },
//             android: {
//                 fontFamily: 'monospace'
//             }
//         })
//     }
// });

// ----------------------------------------------------
// Line Height Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TextContainer>
//                     <LeftText>Text A</LeftText>
//                 </TextContainer>
//                 <TextContainer>
//                     <LeftText style={{lineHeight: 100}}>Text B</LeftText>
//                 </TextContainer>
//                 <TextContainer>
//                     <LeftText>Text C</LeftText>
//                 </TextContainer>
//                 <TextContainer>
//                     <LeftText>{Platform.OS}</LeftText>
//                 </TextContainer>
//             </View>
//         );
//     }
// }
//
// const LeftText = (props) => (
//     <Text style={[styles.leftText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const TextContainer = (props) => (
//     <View style={[styles.textContainer, props.style]}>
//         {props.children}
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         height: 300,
//         margin: 40,
//         marginTop: 100
//     },
//     textContainer: {
//         borderWidth: 1
//     },
//     leftText: {
//         fontSize: 20,
//     }
// });

// ----------------------------------------------------
// Text Decoration Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <LeftText style={{fontStyle: 'italic'}}>
//                     A) Italic
//                 </LeftText>
//                 <LeftText style={{textDecorationLine: 'underline line-through'}}>
//                     B) Underline and Line Through
//                 </LeftText>
//                 <LeftText style={{textDecorationLine: 'underline line-through',
//                                   textDecorationColor: 'red',
//                                   textDecorationStyle: 'dotted'}}>
//                     C) Underline and Line Through
//                 </LeftText>
//                 <LeftText style={{textShadowColor: 'red',
//                                   textShadowOffset: {width: -2, height: -2},
//                                   textShadowRadius: 4}}>
//                     D) Text Shadow
//                 </LeftText>
//                 <LeftText style={{letterSpacing: 5}}>
//                     E) Letter Spacing
//                 </LeftText>
//                 <LeftText style={{textAlign: 'center', fontWeight: 'bold'}}>
//                     {Platform.OS}
//                 </LeftText>
//             </View>
//         );
//     }
// }
//
// const LeftText = (props) => (
//     <Text style={[styles.leftText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         height: 300,
//         margin: 40,
//         marginTop: 100
//     },
//     leftText: {
//         fontSize: 20,
//         paddingBottom: 10
//     }
// });

// -------------------------------------------
// STEP 4
// -------------------------------------------
// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cardContainer}>
//                     <View style={styles.cardImageContainer}>
//                         <Image style={styles.cardImage} source={require('./user.png')}/>
//                     </View>
//                     <View>
//                         <Text style={styles.cardTitle}>
//                             John Doe
//                         </Text>
//                     </View>
//                     <View style={styles.cardSubtitleContainer}>
//                         <Text style={styles.cardSubtitle}>
//                             React Native Developer
//                         </Text>
//                     </View>
//                     <View>
//                         <Text style={styles.cardDescription}>
//                             John is a really great JavaScript developer. He
//                             loves using JS to build React Native applications
//                             for iOS and Android.
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const profileCardColor = 'dodgerblue';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cardContainer: {
//         alignItems: 'center',
//         borderColor: 'black',
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400
//     },
//     cardImageContainer: {
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: 'black',
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginTop: 30,
//         paddingTop: 15
//     },
//     cardImage: {
//         width: 80,
//         height: 80
//     },
//     cardTitle: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 24,
//         marginTop: 30,
//         textShadowColor: 'black',
//         textShadowOffset: {
//             height: 2,
//             width: 2
//         },
//         textShadowRadius: 3
//     },
//     cardSubtitleContainer: {
//         borderColor: 'black',
//         borderWidth: 3,
//         borderTopWidth: 0,
//         borderRightWidth: 0,
//         borderLeftWidth: 0,
//     },
//     cardSubtitle: {
//         fontWeight: 'bold',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     cardDescription: {
//         fontStyle: 'italic',
//         marginTop: 10,
//         marginRight: 40,
//         marginLeft: 40,
//         marginBottom: 10
//     }
// });

// ----------------------------------------------------
// CHAPTER 5
// ----------------------------------------------------

// ----------------------------------------------------
// ShadowPropTypesIOS Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Example style={{shadowColor: 'black',
//                                  shadowOffset: {width: 10, height: 10}
//                 }}>
//                     <CenteredText>Example 1</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                                  shadowOffset: {width: 10, height: 10},
//                                  shadowOpacity: 1
//                 }}>
//                     <CenteredText>Example 2</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                                  shadowOffset: {width: 20, height: 20},
//                                  shadowOpacity: 1
//                 }}>
//                     <CenteredText>Example 3</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                                  shadowOffset: {width: 20, height: 20},
//                                  shadowOpacity: 1,
//                                  shadowRadius: 20
//                 }}>
//                     <CenteredText>Example 4</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                                  shadowOffset: {width: 20, height: 20},
//                                  shadowOpacity: 0.2
//                 }}>
//                     <CenteredText>Example 5</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'red',
//                                  shadowOffset: {width: 20, height: 20},
//                                  shadowOpacity: 1
//                 }}>
//                     <CenteredText>Example 6</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                     shadowOffset: {height: 20},
//                     shadowOpacity: 1
//                 }}>
//                     <CenteredText>Example 7</CenteredText>
//                 </Example>
//                 <Example style={{shadowColor: 'black',
//                     shadowOffset: {width: -5, height: -5},
//                     shadowOpacity: 1
//                 }}>
//                     <CenteredText>Example 8</CenteredText>
//                 </Example>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         {props.children}
//     </View>
// );
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 75
//     },
//     example: {
//         width: 120,
//         height: 120,
//         marginLeft: 20,
//         marginBottom: 20,
//         backgroundColor: 'grey',
//         borderRadius: 20,
//         borderWidth: 2,
//         justifyContent: 'center'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10
//     }
// });

// ----------------------------------------------------
// Elevation Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View>
//                     <Example style={[styles.exampleA,{elevation: 1}]}>A</Example>
//                     <Example style={[styles.exampleB,{elevation: 2}]}>B</Example>
//                     <Example style={[styles.exampleC,{elevation: 3}]}>C</Example>
//                 </View>
//                 <View style={styles.offsetContainer}>
//                     <Example style={[styles.exampleA,{elevation: 3}]}>A</Example>
//                     <Example style={[styles.exampleB,{elevation: 2}]}>B</Example>
//                     <Example style={[styles.exampleC,{elevation: 1}]}>C</Example>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         <Text style={styles.cornerText}>
//         {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 75,
//         marginLeft: 20,
//         flex: 1
//     },
//     offsetContainer: {
//         marginLeft: 175
//     },
//     example: {
//         width: 120,
//         height: 120,
//         borderWidth: 2,
//         position: 'absolute'
//     },
//     exampleA: {
//         backgroundColor: 'red',
//         top: 0,
//         left: 0
//     },
//     exampleB: {
//         backgroundColor: 'orange',
//         top: 20,
//         left: 20
//     },
//     exampleC: {
//         backgroundColor: 'blue',
//         top: 40,
//         left: 40
//     },
//     cornerText: {
//         position: 'absolute',
//         top: 0,
//         left: 0
//     }
// });

// -------------------------------------------
// STEP 5
// -------------------------------------------
// import React, { Component } from 'react';
// import { Image, Platform, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cardContainer}>
//                     <View style={styles.cardImageContainer}>
//                         <Image style={styles.cardImage} source={require('./user.png')}/>
//                     </View>
//                     <View>
//                         <Text style={styles.cardTitle}>
//                             John Doe
//                         </Text>
//                     </View>
//                     <View style={styles.cardSubtitleContainer}>
//                         <Text style={styles.cardSubtitle}>
//                             React Native Developer
//                         </Text>
//                     </View>
//                     <View>
//                         <Text style={styles.cardDescription}>
//                             John is a really great JavaScript developer. He
//                             loves using JS to build React Native applications
//                             for iOS and Android.
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const profileCardColor = 'dodgerblue';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cardContainer: {
//         alignItems: 'center',
//         borderColor: 'black',
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: {
//                     height: 10
//                 },
//                 shadowOpacity: 1
//             },
//             android: {
//                 elevation: 15
//             }
//         })
//     },
//     cardImageContainer: {
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: 'black',
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginTop: 30,
//         paddingTop: 15,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: {
//                     height: 10,
//                 },
//                 shadowOpacity: 1
//             },
//             android: {
//                 borderWidth: 3,
//                 borderColor: 'black',
//                 elevation: 15
//             }
//         })
//     },
//     cardImage: {
//         width: 80,
//         height: 80
//     },
//     cardTitle: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 24,
//         marginTop: 30,
//         textShadowColor: 'black',
//         textShadowOffset: {
//             height: 2,
//             width: 2
//         },
//         textShadowRadius: 3
//     },
//     cardSubtitleContainer: {
//         borderColor: 'black',
//         borderWidth: 3,
//         borderTopWidth: 0,
//         borderRightWidth: 0,
//         borderLeftWidth: 0,
//     },
//     cardSubtitle: {
//         fontWeight: 'bold',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     cardDescription: {
//         fontStyle: 'italic',
//         marginTop: 10,
//         marginRight: 40,
//         marginLeft: 40,
//         marginBottom: 10
//     }
// });

// ----------------------------------------------------
// Translate Example
// ----------------------------------------------------
// import React, { Component } from 'react';
// import { Dimensions, StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Point/>
//                 <Square>
//                     <Text>center</Text>
//                 </Square>
//                 <Square style={{transform: [{translateY: -1.5 * squareSize}]}}>
//                     <SquareText>&uarr; top</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX:  1.5 * squareSize},
//                                             {translateY: -1.5 * squareSize}]
//                 }}>
//                     <SquareText>upper right &#8599;</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX: 1.5 * squareSize}]}}>
//                     <SquareText>right &rarr;</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX:  1.5 * squareSize},
//                                             {translateY:  1.5 * squareSize}]
//                 }}>
//                     <SquareText>bottom right &#8600;</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateY: 1.5 * squareSize}]}}>
//                     <SquareText>bottom &darr;</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX: -1.5 * squareSize},
//                                             {translateY:  1.5 * squareSize}]
//                 }}>
//                     <SquareText>&#8601; bottom left</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX: -1.5 * squareSize}]}}>
//                     <SquareText>&larr; left</SquareText>
//                 </Square>
//                 <Square style={{transform: [{translateX: -1.5 * squareSize},
//                                             {translateY: -1.5 * squareSize}]
//                 }}>
//                     <SquareText>&#8598; upper left</SquareText>
//                 </Square>
//             </View>
//         );
//     }
// }
//
// const Point = (props) => (
//     <View style={[styles.point, props.style]}>
//         {props.children}
//     </View>
// );
//
// const Square = (props) => (
//     <View style={[styles.square, props.style]}>
//         {props.children}
//     </View>
// );
//
// const SquareText = (props) => (
//     <Text style={[{textAlign: 'center'}, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const centerY = (Dimensions.get('window').height / 2);
// const centerX = (Dimensions.get('window').width / 2);
// const squareSize = 80;
// const pointSize = 10;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     point: {
//         width: pointSize,
//         height: pointSize,
//         position: 'absolute',
//         top: centerY - (pointSize / 2),
//         left: centerX - (pointSize / 2),
//         borderWidth: 1,
//         borderRadius: pointSize / 2,
//         backgroundColor: 'black'
//     },
//     square: {
//         width: squareSize,
//         height: squareSize,
//         alignItems: 'center',
//         position: 'absolute',
//         top: centerY - (squareSize / 2),
//         left: centerX - (squareSize / 2),
//         borderWidth: 2,
//         backgroundColor: 'transparent'
//     }
// });

// ----------------------------------------------------
// Rotate Example
// ----------------------------------------------------
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Point/>
                <Square>
                    <Text>center</Text>
                </Square>
                <Square style={{transform: [{translateY: -1.5 * squareSize}]}}>
                    <SquareText>&uarr; top</SquareText>
                </Square>
                <Square style={{transform: [{translateX:  1.5 * squareSize},
                                            {translateY: -1.5 * squareSize}]
                }}>
                    <SquareText>upper right &#8599;</SquareText>
                </Square>
                <Square style={{transform: [{translateX: 1.5 * squareSize}]}}>
                    <SquareText>right &rarr;</SquareText>
                </Square>
                <Square style={{transform: [{translateX:  1.5 * squareSize},
                                            {translateY:  1.5 * squareSize}]
                }}>
                    <SquareText>bottom right &#8600;</SquareText>
                </Square>
                <Square style={{transform: [{translateY: 1.5 * squareSize}]}}>
                    <SquareText>bottom &darr;</SquareText>
                </Square>
                <Square style={{transform: [{translateX: -1.5 * squareSize},
                                            {translateY:  1.5 * squareSize}]
                }}>
                    <SquareText>&#8601; bottom left</SquareText>
                </Square>
                <Square style={{transform: [{translateX: -1.5 * squareSize}]}}>
                    <SquareText>&larr; left</SquareText>
                </Square>
                <Square style={{transform: [{translateX: -1.5 * squareSize},
                                            {translateY: -1.5 * squareSize}]
                }}>
                    <SquareText>&#8598; upper left</SquareText>
                </Square>
            </View>
        );
    }
}

const Point = (props) => (
    <View style={[styles.point, props.style]}>
        {props.children}
    </View>
);

const Square = (props) => (
    <View style={[styles.square, props.style]}>
        {props.children}
    </View>
);

const SquareText = (props) => (
    <Text style={[{textAlign: 'center'}, props.style]}>
        {props.children}
    </Text>
);

const centerY = (Dimensions.get('window').height / 2);
const centerX = (Dimensions.get('window').width / 2);
const squareSize = 80;
const pointSize = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    point: {
        width: pointSize,
        height: pointSize,
        position: 'absolute',
        top: centerY - (pointSize / 2),
        left: centerX - (pointSize / 2),
        borderWidth: 1,
        borderRadius: pointSize / 2,
        backgroundColor: 'black'
    },
    square: {
        width: squareSize,
        height: squareSize,
        alignItems: 'center',
        position: 'absolute',
        top: centerY - (squareSize / 2),
        left: centerX - (squareSize / 2),
        borderWidth: 2,
        backgroundColor: 'transparent'
    }
});