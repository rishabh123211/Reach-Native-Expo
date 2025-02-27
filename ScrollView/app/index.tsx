import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <ScrollView >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          dataList.map((item) => {
            return (
              <View style={styles.container} >
                <View style={styles.headingView} >
                  <Text style={styles.textHeading}> {item.company} </Text>
                </View>
                <View style={styles.imageView} >
                  <Image source={{ uri: item?.imageUrl }} style={styles.imageUrl} />
                </View>
                <View style={styles.textWraper}>
                  <Text style={styles.textContainer}>🎫 : {item.name} </Text>
                  <Text style={styles.textContainer}>🆔 : {item.id} </Text>
                  <Text style={styles.textContainer}>📞 : {item.contact} </Text>
                </View>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 250,
    height: 350,
    marginBottom:40,
    padding: 10,
    borderColor:'red',
    borderWidth:4,
    borderRadius:10

  },
  headingView: {
    width:'100%',
    height:60,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    borderTopRightRadius:40,
    borderBottomLeftRadius:40,
    marginBottom:20
    
  },
  textHeading: {
    color:'white',
    fontSize:18,
    fontWeight:400,

  },
  imageView: {
    borderColor:'black',
    width:150,
    height:150,
    borderWidth:5,
    borderRadius:75,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15

  },
  imageUrl: {
    width:150,
    height:150,
    borderRadius:75,
    borderWidth:3,
    borderColor:'black',
    
  },
  textWraper: {
    marginBottom:20,

  },
  textContainer: {
    fontSize:20,
    fontWeight:700

  }
})

export default Index






const dataList = [
  { id: "E101", name: "John Doe", company: "Tech Solutions Inc.", contact: "+1 555-1234", imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "E102", name: "Jane Smith", company: "Innovatech Ltd.", contact: "+1 555-5678", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: "E103", name: "Michael Johnson", company: "NextGen Enterprises", contact: "+1 555-9876", imageUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: "E104", name: "Emily Brown", company: "Future Corp.", contact: "+1 555-4321", imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: "E105", name: "David Wilson", company: "AI Innovations", contact: "+1 555-8765", imageUrl: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: "E106", name: "Sarah Miller", company: "Cyber Dynamics", contact: "+1 555-6543", imageUrl: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: "E107", name: "James Anderson", company: "Quantum Tech", contact: "+1 555-2109", imageUrl: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: "E108", name: "Olivia Taylor", company: "CloudWorks", contact: "+1 555-3287", imageUrl: "https://randomuser.me/api/portraits/women/8.jpg" },
  { id: "E109", name: "William Martinez", company: "ByteCrafters", contact: "+1 555-7765", imageUrl: "https://randomuser.me/api/portraits/men/9.jpg" },
  { id: "E110", name: "Sophia Rodriguez", company: "NeuralNet AI", contact: "+1 555-5543", imageUrl: "https://randomuser.me/api/portraits/women/10.jpg" },
  { id: "E111", name: "Daniel Harris", company: "Virtual Visions", contact: "+1 555-9012", imageUrl: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: "E112", name: "Isabella Lewis", company: "SoftCloud Ltd.", contact: "+1 555-7890", imageUrl: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: "E113", name: "Ethan Walker", company: "DeepMind Analytics", contact: "+1 555-6542", imageUrl: "https://randomuser.me/api/portraits/men/13.jpg" },
  { id: "E114", name: "Mia Hall", company: "SecureTech", contact: "+1 555-4329", imageUrl: "https://randomuser.me/api/portraits/women/14.jpg" },
  { id: "E115", name: "Alexander Scott", company: "CloudSync", contact: "+1 555-2345", imageUrl: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: "E116", name: "Charlotte Green", company: "DataBridge", contact: "+1 555-6789", imageUrl: "https://randomuser.me/api/portraits/women/16.jpg" },
  { id: "E117", name: "Benjamin Adams", company: "AI Visionaries", contact: "+1 555-8764", imageUrl: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: "E118", name: "Ella Nelson", company: "Blockchain Experts", contact: "+1 555-4320", imageUrl: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: "E119", name: "Lucas Carter", company: "CyberX Security", contact: "+1 555-9873", imageUrl: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: "E120", name: "Avery Mitchell", company: "Quantum AI", contact: "+1 555-3210", imageUrl: "https://randomuser.me/api/portraits/women/20.jpg" },
  { id: "E121", name: "Mason Thomas", company: "NextGen Robotics", contact: "+1 555-7654", imageUrl: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: "E122", name: "Harper White", company: "Neural Intelligence Inc.", contact: "+1 555-2103", imageUrl: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: "E123", name: "Henry Perez", company: "BioTech Future", contact: "+1 555-5432", imageUrl: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: "E124", name: "Scarlett Turner", company: "MetaVerse Systems", contact: "+1 555-8761", imageUrl: "https://randomuser.me/api/portraits/women/24.jpg" },
  { id: "E125", name: "Logan Brooks", company: "CloudSphere", contact: "+1 555-3212", imageUrl: "https://randomuser.me/api/portraits/men/25.jpg" },
  { id: "E126", name: "Aria Rivera", company: "AI Innovators", contact: "+1 555-6781", imageUrl: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: "E127", name: "Jayden Cook", company: "TechSynergy", contact: "+1 555-9011", imageUrl: "https://randomuser.me/api/portraits/men/27.jpg" },
  { id: "E128", name: "Lillian Ramirez", company: "DataSphere", contact: "+1 555-3456", imageUrl: "https://randomuser.me/api/portraits/women/28.jpg" },
  { id: "E129", name: "Gabriel Morgan", company: "Quantum Computing Ltd.", contact: "+1 555-7894", imageUrl: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: "E130", name: "Nova Cooper", company: "Future Innovations", contact: "+1 555-4325", imageUrl: "https://randomuser.me/api/portraits/women/30.jpg" },
  { id: "E131", name: "Nathan King", company: "SoftLink Inc.", contact: "+1 555-5674", imageUrl: "https://randomuser.me/api/portraits/men/31.jpg" },
  { id: "E132", name: "Zoey Barnes", company: "Virtual AI", contact: "+1 555-2104", imageUrl: "https://randomuser.me/api/portraits/women/32.jpg" },
  { id: "E133", name: "Owen Foster", company: "NeuralCore Labs", contact: "+1 555-8769", imageUrl: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: "E134", name: "Madeline Reed", company: "SmartGrid Technologies", contact: "+1 555-4326", imageUrl: "https://randomuser.me/api/portraits/women/34.jpg" },
  { id: "E135", name: "Caleb Parker", company: "Deep Learning Inc.", contact: "+1 555-7895", imageUrl: "https://randomuser.me/api/portraits/men/35.jpg" },
  { id: "E136", name: "Hannah Diaz", company: "Robotics World", contact: "+1 555-6540", imageUrl: "https://randomuser.me/api/portraits/women/36.jpg" }
];

