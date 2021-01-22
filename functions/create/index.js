const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
const q = faunadb.query
const shortid = require("shortid")
const typeDefs = gql`
  type Query {
    lollies: [Lolly!]
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    fillTop: String!
    fillMiddle: String!
    fillBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      recipientName: String!
      message: String!
      senderName: String!
      fillTop: String!
      fillMiddle: String!
      fillBottom: String!
    ): Lolly
  }
`
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

const resolvers = {
  Query: {
    lollies: async (root, args, context) => {
      try {
        const results = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("lollies"))),
            q.Lambda(x => q.Get(x))
          )
        )
        const faunaResults = results.data.map(val => {
          return { ...val.data }
        })
        return faunaResults
      } catch (err) {
        console.log(err)
      }
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      const id = shortid.generate()
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lolly"), {
          data: args,
        })
      )
      return result.data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
