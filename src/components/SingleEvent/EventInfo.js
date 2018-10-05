import React, { Component } from 'react'
import styled from 'react-emotion'
import ReverseResolution from '../ReverseResolution'
import EtherScanLink from '../ExternalLinks/EtherScanLink'
import { H2 } from '../Typography/Basic'
import Avatar from '../User/Avatar'

import { ReactComponent as Eth } from '../svg/Ethereum.svg'

const Date = styled('div')``
const EventName = styled(H2)``
const ContractAddress = styled('h3')`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const OrganiserImage = styled('img')`
  border-radius: 4px;
`
const OrganiserName = styled('div')``
const Location = styled('div')``
const TotalPot = styled('div')``
const Tags = styled('section')``
const Tag = styled('div')``
const EventDescription = styled('p')``
const EventWarning = styled('div')``
const Photos = styled('section')``
const PhotoContainer = styled('div')``
const Photo = styled('img')``
const Comments = styled('section')``
const Comment = styled('div')``

class EventInfo extends Component {
  render() {
    const { party, address, className } = this.props
    return (
      <EventInfoContainer className={className}>
        <Date>{party.date}</Date>
        <EventName>{party.name}</EventName>
        <ContractAddress>
          <EtherScanLink address={address}>{address}</EtherScanLink>
        </ContractAddress>
        <OrganiserImage src="https://placeimg.com/640/480/tech" />
        <OrganiserName>
          <Avatar
            src={'https://api.adorable.io/avatars/57/abott@adorable.png'}
          />{' '}
          Hosted by{' '}
          <EtherScanLink address={address}>
            <ReverseResolution address={party.owner} />
          </EtherScanLink>
        </OrganiserName>
        <Location>
          {party.location || '11 Macclesfield St, London W1D 5BW'}
        </Location>
        <TotalPot>
          <Eth />
          Total pot{' '}
          {(parseFloat(party.deposit) * parseInt(party.attendees, 10)).toFixed(
            2
          )}
        </TotalPot>
        <Tags>
          <Tag>Ethereum</Tag>
          <Tag>Fintech</Tag>
        </Tags>
        <EventDescription>{party.description}</EventDescription>
        <EventWarning />
        <Photos>
          <PhotoContainer>
            <Photo />
          </PhotoContainer>
        </Photos>
        <Comments>
          <Comment />
        </Comments>
      </EventInfoContainer>
    )
  }
}

const EventInfoContainer = styled('div')``

export default EventInfo