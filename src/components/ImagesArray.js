const ImagesArray=[
    {
        imageUri:require("../assets/download.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },
    {
        imageUri:require("../assets/recharge.png"),
        title:"recharge",
    },

];
export  default ImagesArray;

// return (
//     <View style={styles.container}>
//         <View style={styles.component}>
//             <View>
//                 <Text style={styles.shortcutTxt}>SHORTCUTS</Text>
//             </View>
//             <FlatList
//                 horizontal={false}
//                 data={DATA}
//                 numColumns={4}
//                 keyExtriactor={(index) => index.toString()}
//                 renderItem={({ item }) => {
//                     return (
//                         <View style={styles.flatView}>

//                             {item.img && (
//                                 <View style={styles.flatCircleIcon}>
//                                     <Image
//                                         source={{ uri: item.img }}
//                                         style={styles.flatImgIcons}
//                                     />
//                                 </View>
//                             )}

//                             {!!item.title && (
//                                 <View style={styles.flatTxtView}>
//                                     <Text
//                                         style={styles.flatTxt}>
//                                         {item.title}
//                                     </Text>
//                                 </View>
//                             )}

//                         </View>
//                     );
//                 }}
//             />
//         </View>
//     </View>
// );