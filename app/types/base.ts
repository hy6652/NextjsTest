export const colors: Array<string> = ["#1f64f7", "#ffbf3f", "#52b963", "#4287f5", "#b069d1"]

export interface BotUser{
  date: string;
  botA: number;
  botB: number;
  botC: number;
}

export const botUserData: BotUser[] = [
    {date: "4/1", botA: 11, botB: 25, botC: 19}, 
    {date: "4/2", botA: 16, botB: 23, botC: 32},
    {date: "4/3", botA: 18, botB: 22, botC: 33},
    {date: "4/4", botA: 18, botB: 29, botC: 25},
    {date: "4/5", botA: 22, botB: 15, botC: 43},
] 

export const botTokenData = [
    {date: "4/1", botA: "125", botB: "35", botC: "321"}, 
    {date: "4/2", botA: "150", botB: "120", botC: "356"},
    {date: "4/3", botA: "218", botB: "128", botC: "459"},
    {date: "4/4", botA: "368", botB: "523", botC: "480"},
    {date: "4/5", botA: "568", botB: "688", botC: "520"},
]

export const feedbackData = [
    {
        bot: "botA",
        mixedAnswer: 12,
        wrongAnswer: 5,
        failedAnswer: 8
    },
    {
        bot: "botB",
        mixedAnswer: 7,
        wrongAnswer: 10,
        failedAnswer: 3
    },
    {
        bot: "botC",
        mixedAnswer: 4,
        wrongAnswer: 6,
        failedAnswer: 11
    }
  ];

  export const changedFeedbackName = {
    mixedAnswer : "혼합된 답변",
    wrongAnswer : "잘못된 답변",
    failedAnswer : "답변 제공 불가"
  }
  
  export const actionRatioData = [
    {name: "Category 1", value: 30},
    {name: "Category 2", value: 15},
    {name: "Category 3", value: 27},
    {name: "Category 4", value: 11},
    {name: "Category 5", value: 17},
  ]

  export const botUserTokenData = [
    {
        date: "4/1",
        botA_userCount: 10,
        botA_tokenUsed: 32,
        botB_userCount: 9,
        botB_tokenUsed: 55,
        botC_userCount: 22,
        botC_tokenUsed: 6,
      },
      {
        date: "4/2",
        botA_userCount: 12,
        botA_tokenUsed: 25,
        botB_userCount: 11,
        botB_tokenUsed: 52,
        botC_userCount: 35,
        botC_tokenUsed: 23,
      },
      {
        date: "4/3",
        botA_userCount: 8,
        botA_tokenUsed: 66,
        botB_userCount: 10,
        botB_tokenUsed: 43,
        botC_userCount: 29,
        botC_tokenUsed: 26,
      },
      {
        date: "4/4",
        botA_userCount: 15,
        botA_tokenUsed: 50,
        botB_userCount: 39,
        botB_tokenUsed: 41,
        botC_userCount: 27,
        botC_tokenUsed: 34,
      },
      {
        date: "4/5",
        botA_userCount: 11,
        botA_tokenUsed: 55,
        botB_userCount: 48,
        botB_tokenUsed: 22,
        botC_userCount: 36,
        botC_tokenUsed: 53,
      }
  ]