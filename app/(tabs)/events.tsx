import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon, Modal, Portal, Text, useTheme } from 'react-native-paper';

import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import { HeaderText } from '@/assets/reusable-components/headerText';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';

import eventData from '@/assets/data/events.json';
import { ModalDisplayEvent } from '@/assets/reusable-components/modalDisplay';
import _ from 'lodash';
import moment from 'moment';

const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD HH:MM')
}

const today = formatDate(moment());

const ButtonLabels = ['Upcoming', 'Past', 'All'];

export default function EventScreen () {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [iEvent, setIndexEvent] = React.useState(1000);
  const [filter, setFilter] = React.useState('All');
  const [events, setEvents] = React.useState(eventData);

  React.useEffect(() => {
    if(iEvent !== 1000) {
      setVisible(true);
    }

    if(filter === 'Upcoming') {
      setEvents(eventData.filter((event) => moment(formatDate(event.event.start_date)).isSameOrAfter(moment(today))));
    }  else if(filter === 'Past') {
      setEvents(eventData.filter((event) => moment(formatDate(event.event.start_date)).isSameOrBefore(moment(today))));
    } else {
      setEvents(eventData)
    }

  }, [iEvent, filter]);

  const hideModal = () => {
    setIndexEvent(1000);
    setVisible(false);
  }

  return (
    <ScrollScreen>
      <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
        <ModalDisplayEvent data={events[iEvent]} />
          <TouchableOpacity
            onPress={() => hideModal()}
            style={{position: 'absolute', top: 10, left: 20, justifyContent: 'center'}}
          >
            <Icon
              source="keyboard-backspace"
              color={colors.outline}
              size={30}
            />
          </TouchableOpacity>
        </Modal>
      </Portal>
        <HeaderText style={{marginTop: 10, marginBottom: 10}}>Events</HeaderText>
        <View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ButtonLabels.map(value => {
              console.log(value, filter)
              return (
              <TouchableOpacity
                key={value}
                onPress={() => setFilter(value)}
                style={[styles.button, filter === value && styles.selected]}>
                <Text style={[filter === value && styles.selected, { fontWeight: 'bold', textAlign: 'center'}]}>{value} Events</Text>
              </TouchableOpacity>)}
            )}
          </View>
        </View>
        <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                Array.isArray(events) && events.map((event, i) => {
                  return (
                    <View style={{width: '100%', margin: 10}} key={i}>
                      <TouchableOpacity onPress={() => setIndexEvent(i)} key={i}>
                      <View style={{position: 'relative'}}>
                        <BodyText>{_.get(event, 'event.name', '')}</BodyText>
                        <BodyTextReadMore style={{marginTop: -30}}>{_.get(event, 'event.start_date', '')}</BodyTextReadMore>
                      </View>
                </TouchableOpacity>
                    </View>
                  )
                })
              }
            </View>
        </ScrollView>
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 15,
    minWidth: '30%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'rgb(172, 53, 0)',
    color: 'white',
    borderWidth: 0,
  },
  buttonLabel: {
    width: '30%',
    textAlign: 'center'
  },
  selectedLabel: {
    color: 'white',
  },
});