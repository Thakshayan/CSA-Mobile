import {gql} from '@apollo/client';

const GET_PROFILE = gql`
    query Query {
        worker_me {
        username
        name
        nic
        no_of_vote
        rating
        email
        contact_no
        address
        }
    }
`

const GET_USERNAME = gql`
    query Query {
        worker_me {
        username
        }
    }
`

const GET_FININISHEDWORKS = gql`
    query Query(
        $offset: Int!, 
        $page: Int!) {

        worker_getMyFinishedWorks(
            offset: $offset, 
            page: $page) {
        _id
        duration
        paid
        booking {
            description
        }
        appointment_id
        }
        getCountAssignedAppointments {
          _id
          Count
        }
    }
`

const GET_ONGOINGWORKS = gql`
query Query($offset: Int!, $page: Int!) {
    worker_getMyOngoingWorks(offset: $offset, page: $page) {
      _id
      appointment_id
      booking {
        description
      }
      duration
    }
    getCountAssignedAppointments {
      _id
      Count
    }
  }
`

const GET_ONGOINGWORK = gql`
query Query(
    $workerId: String!) {
    worker_SearchMyOngoingWorks(id: $workerId) {
      _id
      booking {
        description
      }
      appointment_id
      starting_date
      duration
    }
  }
`

const GET_FININISHEDWORK = gql`
query Query(
  $workerId: String!) {

    worker_SearchMyFinishedWorks(id: $workerId) {
      _id
      appointment_id
      starting_date
      booking {
        description
      }
      paid
    }
  }
`

const GET_NOTIFICATIONS = gql`
query Query($offset: Int!, $page: Int!) {
    worker_getMyNotification(offset: $offset, page: $page) {
        _id
      message
      date
      state
    }
    
    getCountNotification {
      Count
      _id
    }
 
    
  }
`

const GET_WORKSTAT = gql`
  query Query {
    worker_workStats {
      _id
      Count
    }
    worker_me {
      rating
      }
  }
`

const GET_WORK = gql`
query Query($workId: String!) {
  worker_SearchMyWorks(id: $workId) {
      _id
      state
      booking {
        description
       
        workStationAddress
        date
        by {
          username
          contact_no
          name
          email
        }
      }
    }
  }
`

export{
    GET_PROFILE,
    GET_FININISHEDWORK,
    GET_ONGOINGWORK,
    GET_FININISHEDWORKS,
    GET_ONGOINGWORKS,
    GET_NOTIFICATIONS,
    GET_WORKSTAT,
    GET_USERNAME,
    GET_WORK
}