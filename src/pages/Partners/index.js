import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHandshake,
  faStreetView,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getPartnersData } from '../../services/api';

export default class Configuration extends React.Component {
  constructor() {
    super();
  }

  state = {
    isLoading: false,
  };

  static navigationOptions = {
    tabBarLabel: 'Parceiros',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faHandshake} color={tintColor} />
    ),
  };

  async componentDidMount() {
    const partnersData = await getPartnersData();
    this.setState({
      partnersData,
      isLoading: false,
    });
  }

  render() {
    const latitudeDelta = 0.0922;
    const longitudeDelta = 0;
    Geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      this.setState({
        initialRegion: {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        },
      });
    });
    return (
      <>
        {!this.state.isLoading && this.state.partnersData && (
          <>
            <MapView
              initialRegion={this.state.initialRegion}
              style={styles.mapView}>
              <Marker
                pinColor={'green'}
                coordinate={this.state.initialRegion}
                title={'Localização atual'}>
                <FontAwesomeIcon
                  size={30}
                  icon={faStreetView}
                  color={'#34d058'}
                />
              </Marker>
              {this.state.partnersData.map(partner => {
                const { Nome } = partner;
                const { latitude, longitude } = partner.Coordenadas;
                return (
                  <Marker
                    coordinate={{ latitude, longitude }}
                    style={{ alignItems: 'center' }}>
                    <FontAwesomeIcon
                      size={30}
                      icon={faMapMarkerAlt}
                      color={'#E64D57'}
                    />
                    <Text
                      style={{
                        color: '#E64D57',
                        marginLeft: 5,
                        fontWeight: 'bold',
                      }}>
                      {Nome}
                    </Text>
                  </Marker>
                );
              })}
            </MapView>
          </>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
