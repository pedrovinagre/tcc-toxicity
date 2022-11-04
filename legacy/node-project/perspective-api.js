import { google } from 'googleapis'

const API_KEY = 'AIzaSyBD55Brj7z6BOCCYCk2H1niyLHQdZOZEI0'
const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1'


export const postPerspectiveApi = (tweet) => {
  google.discoverAPI(DISCOVERY_URL)
    .then(client => {
      const analyzeRequest = {
        comment: {
          text: tweet
        },
        requestedAttributes: {
          TOXICITY: {},
          INSULT: {},
          INFLAMMATORY: {},
          LIKELY_TO_REJECT: {}
        }
      }

      client.comments.analyze(
        {
          key: API_KEY,
          resource: analyzeRequest
        },
        (err, response) => {
          if (err) throw err
          console.log(JSON.stringify(response.data, null, 2))
        }
      )
    })
    .catch(err => {
      throw err
    })
}
