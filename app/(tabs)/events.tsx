import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
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
  return moment(date).format('YYYY-MM-DD HH:MM');
};

const today = formatDate(moment());

const ButtonLabels = ['Upcoming', 'Past', 'All'];

export default function EventScreen() {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [iEvent, setIndexEvent] = React.useState(1000);
  const [filter, setFilter] = React.useState('All');
  const [events, setEvents] = React.useState(eventData);
  const city = useSelector((state) => state.city.value);

  React.useEffect(() => {
    if (iEvent !== 1000) {
      setVisible(true);
    }

    if (filter === 'Upcoming') {
      const dateFilter = eventData.filter(
        (event) => moment(formatDate(event.event.start_date)).isSameOrAfter(moment(today))
      );
      setEvents(dateFilter.filter((event) => event.location === city));
    } else if (filter === 'Past') {
      const dateFilter = eventData.filter(
        (event) => moment(formatDate(event.event.start_date)).isSameOrBefore(moment(today))
      );
      setEvents(dateFilter.filter((event) => event.location === city));
    } else {
      setEvents(eventData.filter((event) => event.location === city));
    }
  }, [iEvent, filter, city]);

  const hideModal = () => {
    setIndexEvent(1000);
    setVisible(false);
  };

  return (
    <ScrollScreen>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
          <TouchableOpacity onPress={hideModal} style={styles.backButton}>
            <Icon source="keyboard-backspace" color={colors.outline} size={50} />
          </TouchableOpacity>
          <ModalDisplayEvent data={events[iEvent]} />
        </Modal>
      </Portal>

      <HeaderText style={styles.headerText}>Events</HeaderText>

      <View style={styles.buttonContainer}>
        {ButtonLabels.map((value) => {
          return (
            <TouchableOpacity
              key={value}
              onPress={() => setFilter(value)}
              style={[styles.button, filter === value && styles.selected]}
            >
              <Text style={[filter === value && styles.selectedText, styles.buttonText]}>
                {value} Events
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.eventGrid}
        showsHorizontalScrollIndicator={false}
      >
        {Array.isArray(events) &&
          events.map((event, i) => {
            return (
              <View style={styles.eventCard} key={i}>
                <TouchableOpacity onPress={() => setIndexEvent(i)}>
                  <View style={styles.cardContent}>
                    {/* Use event.image to fetch the event image */}
                    <Image
                      source={{
                        uri: _.get(event, 'event.image', 'https://via.placeholder.com/150'), // Fetch image from event.image or use a placeholder
                      }}
                      style={styles.eventImage}
                    />
                    <BodyText style={styles.eventTitle}>{_.get(event, 'event.name', '')}</BodyText>
                    <BodyTextReadMore style={styles.eventDate}>
                      {_.get(event, 'event.start_date', '')}
                    </BodyTextReadMore>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 5,
    minWidth: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(172, 53, 0)'
  },
  selected: {
    backgroundColor: 'rgb(172, 53, 0)',
  },
  selectedText: {
    color: 'white',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  eventGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  eventCard: {
    width: 250, // Fixed width for horizontal scrolling
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardContent: {
    position: 'relative',
    padding: 10,
  },
  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 12,
    color: '#555',
  },
});
