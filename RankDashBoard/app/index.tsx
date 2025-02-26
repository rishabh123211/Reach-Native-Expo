import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container} >
      <View style={styles.topContainer} >
        <Text style={styles.headerTitle} >Leader Board</Text>
        <View style={styles.mainCardContainer}>
            {topRankerList.map((item, index) => {
                return(
                    <View key={index} style={[styles.mainCard, item?.rank !==1 && {marginTop:20, marginBottom:-20} ]}>
                        <Image 
                        source={{uri: item?.imageUrl }}
                        style={styles.mainCardImage}
                        resizeMode='cover'
                        />
                        <Text style={styles.mainCardTitle}> {item.name} </Text>
                        <View style={styles.mainCardRankContainer}>
                            <Text style={styles.mainCardRankContainerText}> {item?.rank} </Text>
                        </View>
                    </View>
                )
            })}
        </View>
      </View>
      <FlatList 
        data={listData}
        renderItem={({item, index}) => {
            return(
                <View style={styles.card}>
                    <View style={styles.cardDataContainer}>
                        <Text style={styles.cardIndex}> {index + 1 } </Text>
                        <Image
                            source={{uri: item?.imageUrl }}
                            style={styles.cardImage}
                            resizeMode='cover'
                        />
                        <Text style={styles.cardTitle}> {item?.name} </Text>
                    </View>
                    <View style={styles.cardRankContainer}>
                        <Text style={styles.cardRankTitle}> {item?.score} </Text>
                    </View>
                </View>
            )
        }}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#272C35"
     },
    topContainer:{
        backgroundColor:'#1A1F25',
        padding:20,
        paddingTop:30,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        gap:20,
        paddingBottom:50

     },
    headerTitle:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:21
     },
     mainCardContainer:{ 
        flexDirection: 'row',
        gap:10,
        justifyContent:'center'
     },
    mainCard:{
        backgroundColor:'#272C35',
        padding:10,
        alignItems:'center',
        borderRadius:10,
        gap:15
     },
    mainCardImage:{
        width:70,
        height:90,
        borderRadius:20
     },
    mainCardTitle:{ 
        color:'white',
        fontSize:17,
        fontWeight:600
    },
    mainCardRankContainer:{
        backgroundColor:'orange',
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        position:'absolute',
        bottom:-20
     },
    mainCardRankContainerText:{
        color:'white'
     },
    card:{
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'
     },
    cardDataContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
     },
    cardIndex:{
        color:'white'
     },
    cardImage:{
        width:50,
        height:50,
        borderRadius:50,
        marginLeft:15
    },
    cardTitle:{
        color:'white',
        fontSize:17
    },
    cardRankContainer:{ },
    cardRankTitle:{
        color:'orange'
    }

})

export default Index


const listData = [
    {
      id: "1",
      name: "John Doe",
      score: 95,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      score: 88,
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "3",
      name: "Michael Johnson",
      score: 76,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "4",
      name: "Emily Brown",
      score: 92,
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: "5",
      name: "David Wilson",
      score: 85,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: "6",
      name: "Olivia Martinez",
      score: 90,
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: "7",
      name: "Daniel Anderson",
      score: 72,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: "8",
      name: "Sophia Thomas",
      score: 80,
      imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: "9",
      name: "James Garcia",
      score: 77,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: "10",
      name: "Isabella Hernandez",
      score: 93,
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: "11",
      name: "William Lee",
      score: 86,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: "12",
      name: "Ava Gonzalez",
      score: 89,
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: "13",
      name: "Alexander Young",
      score: 75,
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: "14",
      name: "Mia Scott",
      score: 91,
      imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: "15",
      name: "Benjamin Allen",
      score: 87,
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: "16",
      name: "Charlotte King",
      score: 79,
      imageUrl: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      id: "17",
      name: "Henry Wright",
      score: 84,
      imageUrl: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      id: "18",
      name: "Amelia Lopez",
      score: 82,
      imageUrl: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      id: "19",
      name: "Lucas Hill",
      score: 78,
      imageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: "20",
      name: "Harper Adams",
      score: 96,
      imageUrl: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      id: "21",
      name: "Ethan Nelson",
      score: 73,
      imageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: "22",
      name: "Grace Baker",
      score: 88,
      imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: "23",
      name: "Mason Carter",
      score: 94,
      imageUrl: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: "24",
      name: "Ella Mitchell",
      score: 76,
      imageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      id: "25",
      name: "Logan Perez",
      score: 83,
      imageUrl: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: "26",
      name: "Scarlett Roberts",
      score: 81,
      imageUrl: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: "27",
      name: "Elijah Green",
      score: 85,
      imageUrl: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: "28",
      name: "Victoria Hall",
      score: 90,
      imageUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: "29",
      name: "Aiden Rivera",
      score: 74,
      imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: "30",
      name: "Lily Campbell",
      score: 95,
      imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      id: "31",
      name: "Sebastian Morris",
      score: 92,
      imageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      id: "32",
      name: "Hannah Cooper",
      score: 79,
      imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: "33",
      name: "Matthew Bailey",
      score: 97,
      imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: "34",
      name: "Aria Reed",
      score: 70,
      imageUrl: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      id: "35",
      name: "Jackson Murphy",
      score: 89,
      imageUrl: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: "36",
      name: "Zoe Rogers",
      score: 82,
      imageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: "37",
      name: "Samuel Bell",
      score: 78,
      imageUrl: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      id: "38",
      name: "Chloe Morgan",
      score: 93,
      imageUrl: "https://randomuser.me/api/portraits/women/38.jpg",
    },
    {
      id: "39",
      name: "Dylan Martinez",
      score: 86,
      imageUrl: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
      id: "40",
      name: "Layla Scott",
      score: 84,
      imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];



  const topRankerList = [
    {
      id: "1",
      rank: 3,
      name: "John Doe",
      score: 95,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      rank: 1,
      name: "Matthew Bailey",
      score: 97,
      imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: "3",
      rank: 2,
      name: "Harper Adams",
      score: 96,
      imageUrl: "https://randomuser.me/api/portraits/women/20.jpg",
    },
  ];
  
  