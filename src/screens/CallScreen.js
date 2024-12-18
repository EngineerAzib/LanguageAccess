import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CallHeader from '../components/CallHeader';
import CallInfo from '../components/CallInfo';
import CallControls from '../components/CallControls';

const CallScreen = ({ route, navigation }) => {
  const { interpreterName, interpreterImage } = route.params;
  const [callDuration, setCallDuration] = useState(0);

  // Timer for call duration
  useEffect(() => {
    const timer = setInterval(() => setCallDuration((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <CallHeader title="Messages / Call" onBackPress={() => navigation.goBack()} />

      {/* Call Info */}
      <CallInfo
        interpreterName={interpreterName}
        interpreterImage={interpreterImage}
        callDuration={callDuration}
        formatDuration={formatDuration}
      />

      {/* Call Controls */}
      <CallControls onEndCall={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the screen
  },
});

export default CallScreen;
