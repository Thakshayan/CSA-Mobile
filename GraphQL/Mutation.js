import {gql} from "@apollo/client";

const SIGNIN = gql`
    mutation Mutation(
        $username: String!, 
        $password: String!) {
        signINWorker(
            username: $username, 
            password: $password
        )
    }
`;

const CONFIRM_FINISH = gql`
mutation FinishAppointmentMutation($workId: String!) {
    finishAppointment(appointment_id: $workId)
  }
`


export  {
    SIGNIN,
    CONFIRM_FINISH
}
