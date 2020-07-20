import React, {useRef, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import YoutubePlayer from 'react-native-youtube-iframe';
import { ScrollView } from 'react-native-gesture-handler';

const AyudaScreen = ({navigation}) => {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

    
    return (
      <ScrollView>
        <Card>
        <YoutubePlayer
          ref={playerRef}
          height={200}
          width={300}
          videoId={"ooc6f1w6Mzg"}
          play={false}
          onChangeState={event => console.log(event)}
          onReady={() => console.log("ready")}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          initialPlayerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true
          }}
        />
        <Divider/>
        <Text style={styles.cardText}>¿Comó recupero mi contraseña?</Text>
        </Card>
        <Card>
        <YoutubePlayer
          ref={playerRef}
          height={200}
          width={300}
          videoId={"ooc6f1w6Mzg"}
          play={false}
          onChangeState={event => console.log(event)}
          onReady={() => console.log("ready")}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          initialPlayerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true
          }}
        />
        <Divider/>
        <Text style={styles.cardText}>Olvide mi usuario</Text>
        </Card>
      </ScrollView>
    );
};

export default AyudaScreen;

const styles = StyleSheet.create({
  cardText: {
    color:"#777777",
    textAlign: 'center',
    fontSize: 20,
    marginTop:10
  }
});
