import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import { SearchBar, ListItem } from 'react-native-elements'


const test_list = [
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Andy Robertson',
    'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    'professional_credentials': 'MD (Liverpool)'
  },
  {
    'name': 'Dr. Andy Robertson',
    'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    'professional_credentials': 'MD (Liverpool)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Gary Cahill',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    'professional_credentials': 'MD (London)'
  }
]

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: test_list,
        }
    }

    componentDidMount() {
        // for cj
    }

    render(props) {
        return (
            <ScrollView>
                {/* Attn CJ: Search query for name */}
                <SearchBar />
                {
                    this.state.doctors.map((u) => (
                        <ListItem
                            leftAvatar={{ source: { uri: u.profile_pic_url } }}
                            title={u.name}
                            subtitle={u.professional_credentials}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}