import React from 'react'
import { Card, Button, Text } from 'react-native-elements'


const TreatmentPlanCard = (props) => {
    return (
        <Card title={props.treatment_title}>
            <Text>{props.treatment_details}</Text>
            <Text>{'\n'}</Text>
            {/* Attn CJ: Delete treatment plan from db on click of button */}
            <Button
                backgroundColor='#03A9F4'
                //buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Remove' />
        </Card>
    )
}

export default TreatmentPlanCard