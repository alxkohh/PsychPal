import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements'
import AppointmentCard from '../../Components/Cards/AppointmentCard'


// Attn CJ: Data required here is all the appointment objects for that specific user (can be patient or psych)
// Here we assume the specific user is a patient, Karim Benzema
const test_appointments = [
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Harry Kane',
        'appointment_date_time': '2019-08-21 21:30:00',
        'has_appointment_passed': 0,
        'doctor_accept': 0,
        'doctor_reason_for_not_accepting': null,
        'cancel': 0,
        'cancel_reason': null
    },
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Andy Robertson',
        'appointment_date_time': '2019-07-21 19:00:00',
        'has_appointment_passed': 1,
        'doctor_accept': 1,
        'doctor_reason_for_not_accepting': null,
        'cancel': 0,
        'cancel_reason': null
    },
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Robert Green',
        'appointment_date_time': '2019-06-21 21:30:00',
        'has_appointment_passed': 1,
        'doctor_accept': 0,
        'doctor_reason_for_not_accepting': 'Hi Karim, sorry but I am already on break till next year. Please cancel this appointment request. Thank you.',
        'cancel': 1,
        'cancel_reason': 'Doctor is on break so he told me to cancel.'
    },
]

export default class Planner extends Component {
    constructor(props) { //receive type and account completion as props
        super(props);
        this.state = {
            appointments: test_appointments
        }
    }

    componentDidMount() {
        // for CJ
    }


    render() {
        return (
            <ScrollView>
                <Text h4>Pending Appointments</Text>
                <Text h4>Upcoming Appointments</Text>
                <Text h4>Past Appointments</Text>
                <Text h4>Cancelled Appointments</Text>
                {
                    this.state.appointments.map((u) => (
                        <AppointmentCard other_party_name = "name here" appointment_date_time = "date and time here"/>
                    ))
                }
               

            </ScrollView>
        );
    }
}