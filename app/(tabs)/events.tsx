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
import { useSelector } from 'react-redux';

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
  const city = useSelector((state) => state.city.value)

  React.useEffect(() => {
    if(iEvent !== 1000) {
      setVisible(true);
    }

    if(filter === 'Upcoming') {
      const dateFilter = eventData.filter((event) => moment(formatDate(event.event.start_date)).isSameOrAfter(moment(today)))
      setEvents(dateFilter.filter((event) => event.location === city));
    }  else if(filter === 'Past') {
      const dateFilter = eventData.filter((event) => moment(formatDate(event.event.start_date)).isSameOrBefore(moment(today)))
      setEvents(dateFilter.filter((event) => event.location === city));
    } else {
      setEvents(eventData.filter((event) => event.location === city));
    }

  }, [iEvent, filter, city]);

  const hideModal = () => {
    setIndexEvent(1000);
    setVisible(false);
  }

  return (
    <ScrollScreen>
      <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
      <TouchableOpacity
            onPress={() => hideModal()}
            style={{marginTop: 40, marginLeft: 30}}
          >
            <Icon
              source="keyboard-backspace"
              color={colors.outline}
              size={50}
            />
          </TouchableOpacity>
        <ModalDisplayEvent data={events[iEvent]} />
        </Modal>
      </Portal>
        <HeaderText style={{marginTop: 10, marginBottom: 10}}>Events</HeaderText>
        <View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ButtonLabels.map(value => {
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
                        <BodyTextReadMore>{_.get(event, 'event.start_date', '')}</BodyTextReadMore>
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
  containerStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'white'
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