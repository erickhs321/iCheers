import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Body, Header, Title } from 'native-base';

export default class Configuration extends React.Component {
  state = {
    partners: [
      {
        image:
          'http://www.racacel.com.br/wp-content/uploads/2015/09/drogaria-araujo.jpg',
        title: 'Drogaria Araújo',
        street: 'Maria Elizabet Pessoa',
        number: '200',
        city: 'Belo Horizonte',
        phone: '2555-5555',
      },
      {
        image:
          'https://www.symmetry.com.br/wp-content/uploads/2013/11/case-drogaraia-e1478204901643.jpg',
        title: 'Drogaria raia',
        street: 'Maria Elizabet Pessoa',
        number: '100',
        city: 'Belo Horizonte',
        phone: '2555-5522',
      },
    ],
  };
  static navigationOptions = {
    tabBarLabel: 'Parceiros',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faHandshake} color={tintColor} />
    ),
  };

  render() {
    return (
      <>
        <Header
          androidStatusBarColor="#d13d46"
          style={{ backgroundColor: '#E64D57' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Parceiros</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            {this.state.partners.map((item, index) => {
              return (
                <View style={styles.card} key={index}>
                  <View style={styles.header}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.image,
                      }}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View style={{ marginBottom: 14 }}>
                    <Text style={styles.subtitle}>Endereço</Text>
                    <View>
                      <View style={styles.field}>
                        <Text style={styles.fieldName}>Rua:</Text>
                        <Text style={styles.fieldValue}>{item.street}</Text>
                      </View>
                      <View style={styles.field}>
                        <Text style={styles.fieldName}>Número:</Text>
                        <Text style={styles.fieldValue}>{item.number}</Text>
                      </View>
                      <View style={styles.field}>
                        <Text style={styles.fieldName}>Cidade:</Text>
                        <Text style={styles.fieldValue}>{item.city}</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.subtitle}>Contato</Text>
                  <View style={styles.field}>
                    <Text style={styles.fieldName}>Telefone:</Text>
                    <Text style={styles.fieldValue}>{item.phone}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#363740',
    marginTop: 15,
    borderRadius: 5,
    paddingTop: 12,
    paddingLeft: 15,
    paddingBottom: 15,
    width: '90%',
  },
  image: {
    width: 81,
    height: 52,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 0.2,
    color: '#fff',
    marginLeft: 20,
  },
  subtitle: {
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 0.2,
    color: '#9FA2B4',
    marginBottom: 3,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#9FA2B4',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  fieldValue: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#fff',
    marginLeft: 3,
  },
});
