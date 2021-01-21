import { gql } from "@apollo/client"

export const GET_LOLLIES = gql`
  query {
    lollies {
      recipientName
      message
      senderName
      flavourTop
      flavourMiddle
      flavourBottom
      lollyPath
    }
  }
`
export const CREATE_LOLLY = gql`
  mutation(
    $recipientName: String!,
    $message: String!,
    $senderName: String!,
    $flavourTop: String!,
    $flavourMiddle: String!,
    $flavourBottom: String!
  ) {
    createLolly(
      recipientName: $recipientName,
      message: $message,
      senderName: $senderName,
      flavourTop: $flavourTop,
      flavourMiddle: $flavourMiddle,
      flavourBottom: $flavourBottom
    ) {
      recipientName
      message
      senderName
      flavourTop
      flavourMiddle
      flavourBottom
      lollyPath
    }
  }
`
