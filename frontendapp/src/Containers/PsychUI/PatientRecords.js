import { ScrollView } from 'react-native'
import { ListItem } from './node_modules/react-native-elements'
import React, { Component } from './node_modules/react';

// avatar image must be 128 px * 128 px
const testlist = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Andy Robertson',
    avatar_url: 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    languages_spoken: ['English', 'Spanish']
  },
  {
    name: 'Andy Robertson',
    avatar_url: 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    languages_spoken: ['English', 'Spanish']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']  
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    languages_spoken: ['Chinese', 'Italian', 'French', 'English']
  }
  
]

export default class PatientRecords extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: testlist
        }
    }

    componentDidMount() {
        // for cj
    }

    render(props) {
        return (
            <ScrollView>
                {
                    this.state.doctors.map((u) => (
                        <ListItem
                            leftAvatar={{ source: { uri: u.avatar_url } }}
                            title={u.name}
                            subtitle={u.languages_spoken.toString()}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}