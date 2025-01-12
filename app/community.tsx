import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';

const { width } = Dimensions.get('window');

export default function CommunityMessage() {
  return (
    <ScrollScreenBack>
      <HeaderTextUnderline>Community Services</HeaderTextUnderline>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BodyText style={styles.paragraph}>
          Telangana American Telugu Association has been in the forefront to serve the community in need. TTA Community Services Committee is created under the leadership of TTA Advisory Council and Executive Committee with the main objective of delivering services to the community. TTA has a dedicated team of enthusiastic volunteers across the USA to serve the Telugu Community.
        </BodyText>

        <BodyText style={styles.paragraph}>
          Community Services work within the core principles of the organization and aim to provide assistance to the Telugu Community in areas such as Emergency Services, Immigration Services, Legal, and Consular Services by facilitating connections with the respective authorities.
        </BodyText>

        <BodyText style={styles.paragraph}>
          The helpline is reachable 24/7 during emergencies such as accidents or sudden deaths. TTA offers assistance in consultation with local authorities and consular offices, strictly adhering to local laws and jurisdictions while operating within the limits of a non-profit organization.
        </BodyText>

        <BodyText style={styles.sectionHeader}>Key Areas of Assistance:</BodyText>
        {renderSection('Emergency Helpline', '24/7 helpline number to reach for assistance.')}
        {renderSection('Community Services', 'Helping the Telugu community within the USA and in India during emergencies, natural disasters, and pandemics.')}
        {renderSection('Immigration & Visa, Legal Assistance Services', 'Providing FREE initial consultation for any community member with TTA panel attorneys for legal, immigration, and emergency assistance.')}
        {renderSection('TTA Immigration Help', 'TTA has partnered with Somireddy Law Group (SLG) to provide immigration and legal advice to TTA member communities.')}
        {renderSection('Students Assistance', 'Helping Telugu students studying in various universities in the USA with emergency situations, career guidance, and training programs.')}
        {renderSection('Indian Consular Services', 'Coordinating help with Indian Embassies in the USA for emergencies. Organizing webinars with Consul General offices to bring awareness of policy changes.')}
      </ScrollView>
    </ScrollScreenBack>
  );
}

function renderSection(title, description) {
  return (
    <View style={styles.sectionContainer}>
      <BodyTextReadMore style={styles.sectionTitle}>{title}:</BodyTextReadMore>
      <BodyText style={styles.sectionDescription}>{description}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 15,
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
});
