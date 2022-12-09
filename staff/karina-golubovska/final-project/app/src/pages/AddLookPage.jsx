
// import { Permissions, ImagePicker } from "expo";
// import { StyleSheet, Text, View, Button, Image } from "react-native";
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
// export default class App extends React.Component {
//     constructor() {
//       super();
  
//       this.state = {
//         userId: "user73538",
//         image: ""
//       };
//     }
  
//     uploadImage = uri => {
//       return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.onerror = reject;
//         xhr.onreadystatechange = () => {
//           if (xhr.readyState === 4) {
//             resolve(xhr.response);
//           }
//         };
  
//         xhr.open("GET", 'http://localhost:8080/api/image');
//         xhr.responseType = "blob";
//         xhr.send();
//       });
//     };
  
//     openGallery = async () => {
//       const resultPermission = await Permissions.askAsync(
//         Permissions.CAMERA_ROLL
//       );
  
//       if (resultPermission) {
//         const resultImagePicker = await ImagePicker.launchImageLibraryAsync({
//           allowsEditing: true,
//           aspect: [4, 3]
//         });
  
//         if (resultImagePicker.cancelled === false) {
//           const imageUri = resultImagePicker.uri;
//           const { userId } = this.state;
  
//           this.uploadImage(imageUri)
//             .then(resolve => {
//               let ref = firebase
//                 .storage()
//                 .ref()
//                 .child(`images/${userId}`);
//               ref
//                 .put(resolve)
//                 .then(resolve => {
//                   console.log("correct");
//                 })
//                 .catch(error => {
//                   console.log("Error ");
//                 });
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         }
//       }
//     };
  
//     loadImage = async () => {
//       const { userId } = this.state;
  
//       firebase
//         .storage()
//         .ref(`images/${userId}`)
//         .getDownloadURL()
//         .then(resolve => {
//           this.setState({
//             image: resolve
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     };
  
//     checkImage = () => {
//       const { imageFirebase } = this.state;
  
//       if (imageFirebase) {
//         return (
//           <Image
//             style={{ width: 300, height: 300 }}
//             source={{ uri: imageFirebase }}
//           />
//         );
//       }
//       return null;
//     };
  
//     render() {
//       return (
//         <View style={styles.container}>
//           {this.checkImage()}
//           <Button
//             onPress={() => this.openGallery()}
//             title="Selecionar una imagen"
//             color="#841584"
//           />
//           <Button
//             onPress={() => this.loadImage()}
//             title="Cargar Imagen"
//             color="#841584"
//           />
//         </View>
// //         <footer className="footer">
// //           {location.pathname === '/new-look' && <IconButton text='Account_Circle' className="transparent-account-buttom" onClick={handleAccountClick} />}   
// // </footer>
//       );
      
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center"
//     }
//   });