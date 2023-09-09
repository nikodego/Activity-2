import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground} from 'react-native';


const Posts = () => {
  return (
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />   
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />         
      </View>
  )
};

const Posts1 = () => {
  return (
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />   
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />         
      </View>
  )
};

const Posts2 = () => {
  return (
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />   
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />         
      </View>
  )
};

const Posts4 = () => {
  return (
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />   
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />         
      </View>
  )
};

const Posts5 = () => {
  return (
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />   
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />  
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.posts}  />         
      </View>
  )
};

const BtnBelow = () => {
  return (

      <View  style={styles.box1}>
      <Image
       source={{
        uri: 'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_home-512.png'}} 
        style={styles.logoStyle1} 
        />
      <Image
       source={{
        uri: 'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_search-512.png'}} 
        style={styles.logoStyle1} 
        />  
      <Image
       source={{
        uri: 'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_post-512.png'}} 
        style={styles.logoStyle1} 
        />   
      <Image
       source={{
        uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2482/24/instagram_reel-512.png'}} 
        style={styles.logoStyle1} 
        />     
      <Image
       source={{
        uri: 'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_account-512.png'}} 
        style={styles.logoStyle1} 
        />    
      </View>
         
  )
};

export default function ProfileScreen()  {
  return (
    <View style={styles.container}>
     
     <View style={styles.header}>
     <View style={styles.statsContainer}>
         <View style={styles.statItem}>
           <Text style={styles.statNumber}>4</Text>
           <Text style={styles.statLabel}>Posts</Text>
         </View>
         
         <View style={styles.statItem}>
           <Text style={styles.statNumber}>2000</Text>
           <Text style={styles.statLabel}>Followers</Text>
         </View>
         <View style={styles.statItem}>
           <Text style={styles.statNumber}>500</Text>
           <Text style={styles.statLabel}>Following</Text>
         </View>
       </View>
        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1648942288188456962/L3iexxXC_400x400.jpg'}}
          style={styles.profilePicture}  />
        <Text style={styles.username}>Pepe</Text>
        

      </View>
      
      <View style={styles.box}>
        <Posts/>
      </View>
      
      <View style={styles.box}>
        <Posts1/>
      </View>
      
      <View style={styles.box}>
        <Posts2/>
      </View>

      <View style={styles.box}>
        <Posts4/>
      </View>
      
      <View style={styles.box}>
        <Posts5/>
      </View>

      <View>
        <BtnBelow/>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginVertical: 50,
    paddingHorizontal: 15,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderColor: '#ccc',
    marginBottom: 2
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  postItem: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postCaption: {
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  posts: {
    width: 97, 
    height: 97,
    flexDirection: 'row',
    margin: 0.5,
    borderRadius: 0,
    borderWidth: 3,
  },  
  logoStyle1: {
    marginLeft: 30,
    margin: 10,
    width: 30,
    height: 30,
    padding: 10
  },
  box1: {
    flexDirection: 'row',
  }
  
});
