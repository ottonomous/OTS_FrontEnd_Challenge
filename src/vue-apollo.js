import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

// This is the string you can modify with the endpoint of your choosing.
const httpEndpoint = 'https://movies.grandstack.io/'

// Install the vue plugin
Vue.use(VueApollo)

const httpLink = createHttpLink({
  uri: httpEndpoint
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
