import { ETwitterStreamEvent, TwitterApi } from "twitter-api-v2"
import fs from 'fs'

const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN).readOnly

const rules = await twitterClient.v2.streamRules()

if (rules.data?.length) {
  await twitterClient.v2.updateStreamRules({
    delete: { ids: rules.data.map(rule => rule.id) }
  })
}

await twitterClient.v2.updateStreamRules({
  add: [
    { value: 'escola sem partido'}
  ]
})

const stream = await twitterClient.v2.searchStream({
  'tweet.fields': ['text']
})

stream.autoReconnect = true

fs.appendFile('escolaSemPartido.txt', '[', err => {
  if (err) {
    console.log(err)
  }
})

stream.on(ETwitterStreamEvent.Data, async tweet => {
  fs.appendFile('escolaSemPartido.txt', '{ "text": "' + tweet.data.text + '" },', err => {
    if (err) {
      console.log(err)
    }
  })
})
