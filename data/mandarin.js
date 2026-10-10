/*
  Mandarin language pill: phrase data.

  Pinyin is written with tone NUMBERS, the page turns them into tone marks:
    ma1 = mā   ma2 = má   ma3 = mǎ   ma4 = mà   ma5 = ma (neutral)
    v or u: = ü           lv4 = lǜ
    erhua: r before the digit      nar3 = nǎr
    tone change in speech: >N      wo3>2 = written wǒ, spoken wó
    syllables written together form one word: gang1cai2 = gāngcái
    ___ = a slot you fill in
  Inside notes and grammar lines, put Pinyin in {braces} to get tone colours.
  Optional per phrase: hanzi: "…" (characters, shown above the Pinyin).
*/
window.PILL = {
  language: "Mandarin",
  variety: "Standard Mainland Mandarin",
  updated: "October 2026",
  status: "Draft for native-speaker review",
  sections: [
    {
      id: "bids",
      title: "Bids & contact",
      grammar: "Yes/no question: add {ma5} to a statement (1, 3). {xiang3} + verb = want to (2). {yi1>2xia4} after a verb softens it (6).",
      phrases: [
        { n: 1, en: "Hey, got a minute?", py: "Hei1, you3 kong4 ma5?" },
        { n: 2, en: "I want to ask you something.", py: "Wo3>2 xiang3 wen4 ni3 yi1>2 jian4 shi4." },
        { n: 3, en: "Can I tell you something?", py: "Wo3 neng2 gen1 ni3 shuo1 jian4 shi4 ma5?" },
        { n: 4, en: "Guess what?", py: "Ni3 cai1 zen3me5zhe5?", note: "Colloquial and northern." },
        { n: 5, en: "Look at this.", py: "Ni3 kan4 zhe4ge5." },
        { n: 6, en: "Sorry to bother you.", py: "Bu4 hao3yi4si5, da3>2rao3 yi1>2xia4." },
        { n: 7, en: "Nice to meet you.", py: "Hen3 gao1xing4 ren4shi5 ni3." },
        { n: 8, en: "See you tomorrow.", py: "Ming2tian1 jian4." }
      ]
    },
    {
      id: "info",
      title: "Getting information",
      grammar: "Question words sit where the answer goes: {Ni3 zai4 nar3?} is literally 'you are where?' (9, 19). Verb + {guo5} = have ever (20).",
      phrases: [
        { n: 9, en: "Where were you?", py: "Ni3 gang1cai2 zai4 nar3?", note: "No past tense: {gang1cai2} 'just now' carries it. {nar3} is northern; the south and Taiwan say {na3li5}." },
        { n: 10, en: "What are you doing?", py: "Ni3 zai4 gan4 shen2me5?" },
        { n: 11, en: "What happened?", py: "Fa1sheng1 shen2me5 shi4 le5?" },
        { n: 12, en: "What time is it?", py: "Xian4zai4 ji3>2 dian3 le5?" },
        { n: 13, en: "When does it start?", py: "Shen2me5 shi2hou5 kai1shi3?" },
        { n: 14, en: "How long will it take?", py: "Yao4 duo1jiu3?" },
        { n: 15, en: "How much is it?", py: "Duo1shao5 qian2?" },
        { n: 16, en: "Who was that?", py: "Gang1cai2 na4 shi4 shei2?" },
        { n: 17, en: "Why not?", py: "Wei4shen2me5 bu4 ne5?" },
        { n: 18, en: "Whose is this?", py: "Zhe4 shi4 shei2 de5?" },
        { n: 19, en: "Do you know where ___ is?", py: "Ni3 zhi1dao4 ___ zai4 nar3 ma5?", note: "The question word stays where the answer would go." },
        { n: 20, en: "Have you ever been to ___?", py: "Ni3 qu4guo5 ___ ma5?", note: "Verb + {guo5} = have ever." }
      ]
    },
    {
      id: "states",
      title: "Asking about states",
      grammar: "{le5} marks a change or completion (26, 29). Verb + result: {zuo4 wan2} = do-finish (27). {ba5} asks for agreement (24).",
      phrases: [
        { n: 21, en: "How's it going?", py: "Zui4jin4 zen3me5yang4?" },
        { n: 22, en: "How was your day?", py: "Ni3 jin1tian1 guo4 de5 zen3me5yang4?" },
        { n: 23, en: "How did it go?", py: "Zen3me5yang4? Shun4li4 ma5?" },
        { n: 24, en: "Are you okay?", py: "Ni3 mei2 shi4 ba5?" },
        { n: 25, en: "What's wrong?", py: "Zen3me5 le5?" },
        { n: 26, en: "Is it ready yet?", py: "Zhun3bei4 hao3 le5 ma5?" },
        { n: 27, en: "Have you finished?", py: "Ni3 zuo4 wan2 le5 ma5?" },
        { n: 28, en: "Are you still at work?", py: "Ni3 hai2 zai4 gong1si1 ma5?" },
        { n: 29, en: "Did it work?", py: "Cheng2gong1 le5 ma5?" },
        { n: 30, en: "Is it far?", py: "Li2 zher4 yuan3 ma5?" }
      ]
    },
    {
      id: "sharing",
      title: "Sharing info and your own state",
      grammar: "No tense: time words carry it ({gang1cai2}, {yi3qian2}). {zai4} + verb = in the middle of (42). {mei2} + verb + {guo5} = have never (41).",
      phrases: [
        { n: 31, en: "I'm on my way.", py: "Wo3 zai4 lu4 shang5 le5." },
        { n: 32, en: "I'll be there in ten minutes.", py: "Wo3 shi2 fen1zhong1 hou4 dao4." },
        { n: 33, en: "I was just about to call you.", py: "Wo3 zheng4 yao4 gei3>2 ni3 da3 dian4hua4.", note: "Three 3rd tones in a row: let your teacher model the grouping." },
        { n: 34, en: "I've already done it.", py: "Wo3>2 yi3jing1 zuo4 wan2 le5." },
        { n: 35, en: "I didn't know that.", py: "Wo3 bu4 zhi1dao4." },
        { n: 36, en: "I forgot.", py: "Wo3 wang4 le5." },
        { n: 37, en: "It's not working.", py: "Zhe4ge5 yong4 bu5 liao3." },
        { n: 38, en: "I'm running late.", py: "Wo3 yao4 chi2dao4 le5." },
        { n: 39, en: "It's over there.", py: "Zai4 nar4." },
        { n: 40, en: "I used to live there.", py: "Wo3>2 yi3qian2 zhu4 zai4 nar4.", note: "{yi3qian2} 'before' does the job of 'used to'." },
        { n: 41, en: "I've never tried it.", py: "Wo3 cong2lai2 mei2 shi4guo5." },
        { n: 42, en: "I was sleeping when you called.", py: "Ni3>2 da3 dian4hua4 de5 shi2hou5, wo3 zai4 shui4jiao4." }
      ]
    },
    {
      id: "needs",
      title: "Needs & feelings",
      grammar: "Final {le5} = a new situation (43). {you3>2dian3} = a bit, for unwelcome things (43). Verb + {bu5} + result = can't (52).",
      phrases: [
        { n: 43, en: "I'm getting hungry.", py: "Wo3 you3>2dian3 e4 le5.", note: "Final {le5} marks the new situation: that's the 'getting'." },
        { n: 44, en: "I'm exhausted.", py: "Wo3 lei4 si3 le5.", note: "Literally 'tired to death'. Everyday, not dramatic." },
        { n: 45, en: "I need a break.", py: "Wo3 xu1yao4 xiu1xi5 yi1>2xia4." },
        { n: 46, en: "I want to go home.", py: "Wo3>2 xiang3 hui2 jia1." },
        { n: 47, en: "I feel like going out.", py: "Wo3>2 xiang3 chu1qu5 wanr2." },
        { n: 48, en: "It's too hot in here.", py: "Zher4 tai4 re4 le5.", note: "{Tai4} … {le5}: 'too …' or just 'so …'." },
        { n: 49, en: "I'm worried about ___.", py: "Wo3>2 hen3 dan1xin1 ___." },
        { n: 50, en: "I miss you.", py: "Wo3 xiang3>2 ni3.", note: "Three 3rd tones in a row: let your teacher model the grouping." },
        { n: 51, en: "I don't feel well.", py: "Wo3 bu4>2 tai4 shu1fu5." },
        { n: 52, en: "I can't wait!", py: "Wo3>2 deng3 bu5 ji2 le5!" }
      ]
    },
    {
      id: "requests",
      title: "Requests",
      grammar: "Politeness comes from softeners, not 'would': {ma2fan5 ni3} (53), {yi1>2xia4} (53, 56, 58). {ba3} moves the object before the verb (55). {Bie2} = don't (62).",
      phrases: [
        { n: 53, en: "Would you mind closing the window?", py: "Ma2fan5 ni3 guan1 yi1>2xia4 chuang1hu5.", note: "{Ma2fan5 ni3} = 'trouble you'. That's where the politeness lives." },
        { n: 54, en: "Can you help me?", py: "Ni3 neng2 bang1 wo3 ma5?" },
        { n: 55, en: "Could you pass me the ___?", py: "Neng2 ba3 ___ di4 gei3>2 wo3 ma5?", note: "{ba3} moves the object in front of the verb." },
        { n: 56, en: "Can I borrow your ___?", py: "Wo3 neng2 jie4 yi1>2xia4 ni3 de5 ___ ma5?" },
        { n: 57, en: "Can I have ___, please?", py: "Qing3 gei3>2 wo3 ___.", note: "Three 3rd tones in a row: let your teacher model the grouping." },
        { n: 58, en: "Wait for me.", py: "Deng3>2 wo3 yi1>2xia4." },
        { n: 59, en: "Let me know.", py: "Gao4su5 wo3 yi1>4 sheng1." },
        { n: 60, en: "Give me a second.", py: "Shao1 deng3." },
        { n: 61, en: "Show me how.", py: "Ni3 zuo4 gei3>2 wo3 kan4 kan5." },
        { n: 62, en: "Don't do that.", py: "Bie2 zhe4yang4." }
      ]
    },
    {
      id: "answers",
      title: "Answering bids & offers",
      grammar: "{Bu4>2 ke4qi5}, {Mei2 guan1xi5} and {Mei2 wen4ti2} are fixed replies: learn them whole. {ba5} softens a suggestion (67).",
      phrases: [
        { n: 63, en: "Sure, no problem.", py: "Hao3 de5, mei2 wen4ti2." },
        { n: 64, en: "Thanks a lot.", py: "Tai4 xie4xie5 ni3 le5!" },
        { n: 65, en: "You're welcome.", py: "Bu4>2 ke4qi5." },
        { n: 66, en: "Sorry, I can't.", py: "Bu4 hao3yi4si5, wo3 qu4 bu5 liao3." },
        { n: 67, en: "Maybe next time.", py: "Xia4 ci4 ba5." },
        { n: 68, en: "Would you like something to drink?", py: "Ni3>2 xiang3 he1 dian3 shen2me5?" },
        { n: 69, en: "Sorry, my mistake.", py: "Dui4bu5qi3, shi4 wo3 de5 cuo4." },
        { n: 70, en: "Don't worry about it.", py: "Mei2 guan1xi5." }
      ]
    },
    {
      id: "planning",
      title: "Planning",
      grammar: "Verb–not–verb makes a yes/no question (76). {Ru2guo3} …, {jiu4} … = if …, then … (78). {dei3} = have to (80).",
      phrases: [
        { n: 71, en: "What are we doing tonight?", py: "Wo3men5 jin1tian1 wan3shang5 zuo4 shen2me5?" },
        { n: 72, en: "Are you free on Saturday?", py: "Ni3 xing1qi1liu4 you3 kong4 ma5?" },
        { n: 73, en: "Let's meet at ___.", py: "Wo3men5 zai4 ___ jian4mian4 ba5." },
        { n: 74, en: "What time works for you?", py: "Ni3 shen2me5 shi2hou5 fang1bian4?", note: "Literally 'you when convenient?': question word in place." },
        { n: 75, en: "I'm going to ___ tomorrow.", py: "Wo3 ming2tian1 yao4 qu4 ___." },
        { n: 76, en: "Shall we go?", py: "Zou3 bu5 zou3?", note: "Verb–not–verb question." },
        { n: 77, en: "Who's coming?", py: "Dou1 you3 shei2 lai2?" },
        { n: 78, en: "If it rains, we'll stay in.", py: "Ru2guo3 xia4 yu3, wo3men5 jiu4 dai1 zai4 jia1." },
        { n: 79, en: "Don't forget to ___.", py: "Bie2 wang4 le5 ___." },
        { n: 80, en: "We have to leave soon.", py: "Wo3men5 dei3>2 zou3 le5." },
        { n: 81, en: "Call me when you get there.", py: "Dao4 le5 gei3>2 wo3 da3 dian4hua4.", note: "Three 3rd tones in a row: let your teacher model the grouping." },
        { n: 82, en: "Let's do it another day.", py: "Gai3tian1 ba5." }
      ]
    },
    {
      id: "opinions",
      title: "Opinions & decisions",
      grammar: "Negate the thought, not the thinking (85). {Bi3} X {hao3} = better than X (89).",
      phrases: [
        { n: 83, en: "What do you think?", py: "Ni3 jue2de5 zen3me5yang4?" },
        { n: 84, en: "I think so.", py: "Wo3 jue2de5 shi4." },
        { n: 85, en: "I don't think so.", py: "Wo3 jue2de5 bu4>2 shi4.", note: "Literally 'I think it isn't'." },
        { n: 86, en: "You're right.", py: "Ni3 shuo1 de5 dui4." },
        { n: 87, en: "It depends.", py: "Kan4 qing2kuang4." },
        { n: 88, en: "I'd rather stay in.", py: "Wo3 hai2shi5 dai1 zai4 jia1 ba5." },
        { n: 89, en: "It's better than ___.", py: "Bi3 ___ hao3." },
        { n: 90, en: "It's up to you.", py: "Ni3 ding4 ba5." }
      ]
    },
    {
      id: "repair",
      title: "Repair",
      grammar: "Verb + {bu5} + result for (not) getting it: {ting1 bu5 dong3} = listen-not-understand (92). {de5} links a verb to how well it went (98).",
      phrases: [
        { n: 91, en: "Sorry, what did you say?", py: "Bu4 hao3yi4si5, ni3 shuo1 shen2me5?" },
        { n: 92, en: "I don't understand.", py: "Wo3 ting1 bu5 dong3." },
        { n: 93, en: "Could you say that more slowly?", py: "Ni3 neng2 shuo1 man4 yi1>4dian3 ma5?" },
        { n: 94, en: "What does ___ mean?", py: "___ shi4 shen2me5 yi4si5?" },
        { n: 95, en: "How do you say ___ in Chinese?", py: "___ yong4 Zhong1wen2 zen3me5 shuo1?" },
        { n: 96, en: "Can you write it down?", py: "Ni3 neng2 xie3 xia4lai5 ma5?" },
        { n: 97, en: "I'm learning Chinese.", py: "Wo3 zai4 xue2 Zhong1wen2." },
        { n: 98, en: "Did I say that right?", py: "Wo3 shuo1 de5 dui4 ma5?" },
        { n: 99, en: "What I mean is ___.", py: "Wo3 de5 yi4si5 shi4 ___." },
        { n: 100, en: "Do you speak English?", py: "Ni3 hui4 shuo1 Ying1yu3 ma5?" }
      ]
    }
  ]
};
