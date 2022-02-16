import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

export const store = mockStore({
  auth: {
    accessToken:
      "ya29.A0ARrdaM9KG5nxzuU4bOhVbHKu2EDj2lKG36NY7wtm8IVsKLEbo3_O699EDk8IxvhccuIHPUyhQTT5pXxmCAavDL4iTI7iblxFuIXDONABwlhi8LQHbhvxGfMn27FnCksi2qJhg4hn7-IzIcHxildJ0RIn2ragrw",
    user: {
      name: "Priyanka Patel",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
    },
    error: null,
    loading: false,
  },
  commentList: [
    {
      kind: "youtube#commentThread",
      etag: "9SadOUrGkPQSt0sorsFijKTBL80",
      id: "Ugwybolefx_P4E6phah4AaABAg",
      snippet: {},
    },
    {
      kind: "youtube#commentThread",
      etag: "9SadOUrGkPQSt0sorsFijKTBL80",
      id: "Ugwybolefx_P4E6phah4AaABAg",
      snippet: {},
    },
  ],
  homeVideos: {
    videos: [
      {
        kind: "youtube#video",
        etag: "8XDUSTuq-9vHEgBH-g3R1QOmD30",
        id: "ATElufr0OiE",
        snippet: {
          publishedAt: "2022-01-31T16:27:42Z",
          channelId: "UCTNtRdBAiZtHP9w7JinzfUg",
          title:
            "Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai",
          description:
            "A lilting melody from the famed #DarbukaSiva , #SidSriram and #Thamarai trio! Presenting the loop-worthy #MudhalNeeMudivumNee title track from the composer's directorial debut!\n\nHit play and enjoy the official Tamil song video of #MNMN now!\n\nStream now - https://SMI.lnk.to/MNMNTitleTrackDC\n\nComposer's Note:\n\nThe song Mudhal Nee Mudivum Nee for me is a collage of sounds from various musical soundscapes that relate to nostalgia and the wonderful memories associated with it. \n\nThe Sarod’s classical texture converses with the voice to create that feeling, coupled with strings that form a sonic movement which often plays around with trancy layers of interesting shapes and patterns of sounds.\n\nDarbuka Siva\n\nMovie - Mudhal Nee Mudivum Nee\nSong - Mudhal Nee Mudivum Nee\nSinger - Sid Sriram, Darbuka Siva\nComposer - Darbuka Siva\nLyrics - Thamarai\nWritten and Directed by Darbuka Siva\nDOP - Sujith Saarang\nEditing - Sreejith Saarang\nProduced by Super Talkies - Sameer Bharat Ram\n\nMusicians:\nSarod: Debasmita Bhattacharya\nElectric Guitar, Acoustic guitar, Banjo, Ukulele: Keba Jeremiah\nKeyboard: Shyam Benjamin \nMusic arranged and programmed by Darbuka Siva\nMixed and Mastered by Balu Thankachan at 20dB Soundstudios, Chennai.\nAssisted by Elwin Joseph, Hariharan\n \nRecorded at \nSeed Studios, Chennai\n20 dB Soundstudios, Chennai\nRJ Studio, Kolkata\nRecording Engineers: Dheeleben, Hafeez, Avinash Sathish, Rana Mondal\n \nLyric Video Credits: \nArtwork Hand drawn by Purva Raghunath\nVideo Effects: Pradeep\nVideo Editing: Darbuka Siva\n\nMusic Label - Sony Music Entertainment India Pvt. Ltd.\n\n© 2022 Sony Music Entertainment India Pvt. Ltd.\n\nSubscribe Now: http://bit.ly/SonyMusicSouthVevo\nSubscribe Now: http://bit.ly/SonyMusicSouthYT\nFollow us: https://www.instagram.com/sonymusic_south/\nFollow us: Twitter: https://twitter.com/SonyMusicSouth\nLike us: Facebook: https://www.facebook.com/SonyMusicSouth\n\nhttp://vevo.ly/TSdD3a",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ATElufr0OiE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ATElufr0OiE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/ATElufr0OiE/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/ATElufr0OiE/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "SonyMusicSouthVEVO",
          tags: [
            "Sony Music South",
            "Sony Music",
            "Latest Song",
            "Tamil song",
            "Tamil Latest Song",
            "Tamil Latest Songs 2018",
            "Tamil Latest Songs 2019",
            "Latest songs in Tamil",
            "Songs in Tamil",
            "Latest Tamil Movies",
            "Tamil Movie Songs",
            "Latest Video Songs Tamil",
            "latest Tamil Love Songs",
            "Latest Tamil Hit Songs",
            "darbuka siva songs",
            "sid sriram songs",
            "sid sriram tamil hits",
            "darbuka siva tamil songs",
            "mudhalum nee mudivum nee trailer",
            "Darbuka Siva",
            "Mudhal Nee Mudivum Nee",
            "Sony",
            "Pvt.",
          ],
          categoryId: "10",
          liveBroadcastContent: "none",
          localized: {
            title:
              "Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai",
            description:
              "A lilting melody from the famed #DarbukaSiva , #SidSriram and #Thamarai trio! Presenting the loop-worthy #MudhalNeeMudivumNee title track from the composer's directorial debut!\n\nHit play and enjoy the official Tamil song video of #MNMN now!\n\nStream now - https://SMI.lnk.to/MNMNTitleTrackDC\n\nComposer's Note:\n\nThe song Mudhal Nee Mudivum Nee for me is a collage of sounds from various musical soundscapes that relate to nostalgia and the wonderful memories associated with it. \n\nThe Sarod’s classical texture converses with the voice to create that feeling, coupled with strings that form a sonic movement which often plays around with trancy layers of interesting shapes and patterns of sounds.\n\nDarbuka Siva\n\nMovie - Mudhal Nee Mudivum Nee\nSong - Mudhal Nee Mudivum Nee\nSinger - Sid Sriram, Darbuka Siva\nComposer - Darbuka Siva\nLyrics - Thamarai\nWritten and Directed by Darbuka Siva\nDOP - Sujith Saarang\nEditing - Sreejith Saarang\nProduced by Super Talkies - Sameer Bharat Ram\n\nMusicians:\nSarod: Debasmita Bhattacharya\nElectric Guitar, Acoustic guitar, Banjo, Ukulele: Keba Jeremiah\nKeyboard: Shyam Benjamin \nMusic arranged and programmed by Darbuka Siva\nMixed and Mastered by Balu Thankachan at 20dB Soundstudios, Chennai.\nAssisted by Elwin Joseph, Hariharan\n \nRecorded at \nSeed Studios, Chennai\n20 dB Soundstudios, Chennai\nRJ Studio, Kolkata\nRecording Engineers: Dheeleben, Hafeez, Avinash Sathish, Rana Mondal\n \nLyric Video Credits: \nArtwork Hand drawn by Purva Raghunath\nVideo Effects: Pradeep\nVideo Editing: Darbuka Siva\n\nMusic Label - Sony Music Entertainment India Pvt. Ltd.\n\n© 2022 Sony Music Entertainment India Pvt. Ltd.\n\nSubscribe Now: http://bit.ly/SonyMusicSouthVevo\nSubscribe Now: http://bit.ly/SonyMusicSouthYT\nFollow us: https://www.instagram.com/sonymusic_south/\nFollow us: Twitter: https://twitter.com/SonyMusicSouth\nLike us: Facebook: https://www.facebook.com/SonyMusicSouth\n\nhttp://vevo.ly/TSdD3a",
          },
          defaultAudioLanguage: "en",
        },
        contentDetails: {
          duration: "PT5M36S",
          dimension: "2d",
          definition: "hd",
          caption: "false",
          licensedContent: true,
          regionRestriction: {
            blocked: ["US"],
          },
          contentRating: {},
          projection: "rectangular",
        },
        statistics: {
          viewCount: "2088681",
          likeCount: "133120",
          favoriteCount: "0",
          commentCount: "2850",
        },
      },
      {
        kind: "youtube#video",
        etag: "PK0np5HEbZ3Cz6FX3hZ7aSXu4As",
        id: "67Fuq_oRPMw",
        snippet: {
          publishedAt: "2022-01-31T03:42:51Z",
          channelId: "UC1J-EgBVeo-TUaC5m0t6bKg",
          title: "balloon and syringe experiment 🤩 gone wrong 🤯 #shorts",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/67Fuq_oRPMw/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/67Fuq_oRPMw/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/67Fuq_oRPMw/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Mr. Easy Tamil",
          tags: [
            "craft tamil channel",
            "craft tamil",
            "experiment in tamil",
            "experiment tamil",
            "easy experiment",
            "science experiment",
            "magic tricks",
            "balloon experiment gone wrong",
            "Mr easy tamil",
            "laminar flow experiment",
            "satisfying experiment",
          ],
          categoryId: "24",
          liveBroadcastContent: "none",
          defaultLanguage: "en-IN",
          localized: {
            title: "balloon and syringe experiment 🤩 gone wrong 🤯 #shorts",
            description: "",
          },
          defaultAudioLanguage: "ta",
        },
        contentDetails: {
          duration: "PT1M",
          dimension: "2d",
          definition: "hd",
          caption: "false",
          licensedContent: true,
          contentRating: {},
          projection: "rectangular",
        },
        statistics: {
          viewCount: "2531259",
          likeCount: "158897",
          favoriteCount: "0",
          commentCount: "66",
        },
      },
    ],
    activeCategory: "react",
    loading: false,
  },
  selectedVideos: { loading: false, videos: {}, error: null },
  channelDetails: { loading: false, channel: {}, error: null },
  subscriptionStatus: { subscriptionStatus: false },
  relatedVideos: { loading: false, videos: [], error: null },
  searchVideos: { loading: false, videos: [], error: null },
  subscriptionChannelVideos: { loading: false, videos: [], error: null },
  channelVideos: { loading: false, videos: [], error: null },
  likedVideos: { loading: false, videos: [], error: null },
});
