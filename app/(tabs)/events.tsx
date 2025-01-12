import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { Button, Icon, Modal, Portal, Text, useTheme } from 'react-native-paper';

import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import { HeaderText } from '@/assets/reusable-components/headerText';
import { BodyText } from '@/assets/reusable-components/bodyText';

import eventData from '@/assets/data/events.json';
import moment from 'moment';
import { useSelector } from 'react-redux';

const formatDate = (date) => moment(date).format('YYYY-MM-DD HH:mm');

const today = formatDate(moment());
const ButtonLabels = ['Upcoming', 'Past', 'All'];

export default function EventScreen() {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [iEvent, setIndexEvent] = React.useState(null);
  const [filter, setFilter] = React.useState('All');
  const [events, setEvents] = React.useState(eventData);
  const city = useSelector((state) => state.city.value);

  React.useEffect(() => {

    let filteredEvents = [];

    // Filter by date first (Upcoming or Past)
    const dateFilter = eventData.filter((event) => {
      const eventDate = moment(formatDate(event.event.start_date));
      if (filter === 'Upcoming') {
        return eventDate.isSameOrAfter(moment(today));
      } else if (filter === 'Past') {
        return eventDate.isSameOrBefore(moment(today));
      }
      return true;
    });

    // Filter based on location and event type (online/onsite)
    filteredEvents = dateFilter.filter((event) => {
      const isLocationMatch = event.location ? event.location === city : true;
      const isEventTypeMatch = event.event.event_type === 'online' || event.event.event_type === 'onsite';

      return isLocationMatch && (isEventTypeMatch || !event.event.event_type);
    });

      setEvents(filteredEvents);
    }, [iEvent, filter, city]);

  const hideModal = () => {
    setIndexEvent(null);
    setVisible(false);
  };

  const openEventLink = (link) => {
    if (link) {
      Linking.openURL(link).catch((err) => console.error('Error opening link:', err));
    }
  };

  return (
    <ScrollScreen>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
          <TouchableOpacity onPress={hideModal} style={styles.backButton}>
            <Icon source="keyboard-backspace" color={colors.outline} size={50} />
          </TouchableOpacity>
          {iEvent !== null && (
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Image
                source={{
                  uri: events[iEvent].event.image || 'https://via.placeholder.com/150',
                }}
                style={styles.modalImage}
              />
              <HeaderText style={styles.modalHeader}>{events[iEvent].event.name}</HeaderText>

              <View style={styles.table}>
                {[
                  ['Description', events[iEvent].event.description],
                  ['Start Date', formatDate(events[iEvent].event.start_date)],
                  ['End Date', formatDate(events[iEvent].event.end_date)],
                  ['Category', events[iEvent].cat],
                  ['Contact Email', events[iEvent].event.contact_email],
                  ['Speakers', events[iEvent].event.speakers],
                  ['Event Type', events[iEvent].event.event_type.toUpperCase()],
                  ['Event For', events[iEvent].event.event_for],
                  ['Chambers', events[iEvent].event.chambers],
                ].map(([label, value], index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableLabel}>{label}:</Text>
                    <Text style={styles.tableValue}>{value}</Text>
                  </View>
                ))}
              </View>

              {events[iEvent].event.link && (
                <TouchableOpacity onPress={() => openEventLink(events[iEvent].event.link)}>
                  <Text style={styles.linkText}>View More</Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          )}
        </Modal>
      </Portal>

      <HeaderText style={styles.headerText}>Events</HeaderText>

      <View style={styles.buttonContainer}>
        {ButtonLabels.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setFilter(value)}
            style={[styles.button, filter === value && styles.selected]}
          >
            <Text style={[filter === value && styles.selectedText, styles.buttonText]}>
              {value} Events
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.eventGrid}
        showsHorizontalScrollIndicator={false}
      >
        {Array.isArray(events) &&
          events.map((event, i) => {
            const eventType = event.event.event_type || 'Online';
            const isOnline = eventType.toLowerCase() === 'online';

            return (
              <View style={styles.eventCard} key={i}>
                <TouchableOpacity
                  onPress={() => {
                    setIndexEvent(i);
                    setVisible(true);
                  }}
                >
                  <View style={styles.cardContent}>
                    <Image
                      source={{
                        uri: event.event.image || 'https://via.placeholder.com/150',
                      }}
                      style={styles.eventImage}
                    />
                    <View
                      style={[
                        styles.eventTypeBadge,
                        isOnline ? styles.onlineBadge : styles.offlineBadge,
                      ]}
                    >
                      <Text style={styles.eventTypeText}>{eventType.toUpperCase()}</Text>
                    </View>
                    <BodyText style={styles.eventTitle}>{event.event.name}</BodyText>
                    <BodyText style={styles.eventDate}>
                      {formatDate(event.event.start_date)}
                    </BodyText>
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
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  backButton: {
    marginBottom: 20,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tableLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
    textAlign: 'right',
  },
  tableValue: {
    flex: 2,
    textAlign: 'left',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: 'rgb(172, 53, 0)',
  },
  selected: {
    backgroundColor: 'rgb(172, 53, 0)',
  },
  selectedText: {
    color: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventGrid: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  eventCard: {
    width: 250,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardContent: {
    padding: 12,
  },
  eventImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 12,
  },
  eventTypeBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  onlineBadge: {
    backgroundColor: '#4caf50',
  },
  offlineBadge: {
    backgroundColor: '#f44336',
  },
  eventTypeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  eventDate: {
    fontSize: 14,
    color: '#777',
  },
});
