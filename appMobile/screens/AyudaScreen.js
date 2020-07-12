import React, {useRef, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import YoutubePlayer from 'react-native-youtube-iframe';

const AyudaScreen = ({navigation}) => {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

    
    return (
      <Card>
      <YoutubePlayer
        ref={playerRef}
        height={200}
        width={300}
        videoId={"GNdN_MpFgOw"}
        play={playing}
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
      </Card>
    );
};

export default AyudaScreen;

