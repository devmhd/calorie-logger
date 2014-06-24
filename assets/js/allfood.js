var allActivities = {
   's_walk' : {

      main_name: "slow walk",
      name_ing: "walking slowly",
      calorie: 0.06

   },

   'm_walk' : {

      main_name: "walk",
      name_ing: "walking",
      calorie: 0.07

   },

   'f_walk' : {
      
      main_name: "fast walk",
      name_ing: "walking fast",
      calorie: 0.08

   },

   'jog' : {
      
      main_name: "jog",
      name_ing: "jogging",
      calorie: 0.15

   },

   'swim' : {
      
      main_name: "swim",
      name_ing: "swimming",
      calorie: 0.12

   },

   'run' : {
      
      main_name: "run",
      name_ing: "running",
      calorie: 0.22

   },

   'cycle' : {
      
      main_name: "cycle",
      name_ing: "cycling",
      calorie: 0.14

   }

};




var allfood = [
   [
      {
         "food_name":"সবজি সিদ্ধ",
         "food_calorie":"50.0",
         "food_id":"1",
         "food_unit":"কাপ"
      },
      {
         "food_name":"সবজি ভাজি",
         "food_calorie":"110.0",
         "food_id":"2",
         "food_unit":"কাপ"
      },
      {
         "food_name":"লাল শাক ভাজি",
         "food_calorie":"100.0",
         "food_id":"3",
         "food_unit":"কাপ"
      },
      {
         "food_name":"পালং শাক সিদ্ধ",
         "food_calorie":"41.0",
         "food_id":"4",
         "food_unit":"কাপ"
      },
      {
         "food_name":"বেগুন ভর্তা",
         "food_calorie":"140.0",
         "food_id":"5",
         "food_unit":"কাপ"
      },
      {
         "food_name":"আলু ভর্তা",
         "food_calorie":"300.0",
         "food_id":"6",
         "food_unit":"কাপ"
      },
      {
         "food_name":"ঢেড়শ ভাজি",
         "food_calorie":"130.0",
         "food_id":"7",
         "food_unit":"কাপ"
      },
      {
         "food_name":"বেগুন ভাজি",
         "food_calorie":"100.0",
         "food_id":"8",
         "food_unit":"পিস"
      }
   ],
   [
      {
         "food_name":"গরুর মাংস(ভুনা/কোর্মা)",
         "food_calorie":"35.0",
         "food_id":"9",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"মুরগির মাংস(ভুনা/কোর্মা)",
         "food_calorie":"33.0",
         "food_id":"10",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"খাসির মাংস(ভুনা/কোর্মা)",
         "food_calorie":"37.0",
         "food_id":"11",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"গরুর কলিজা",
         "food_calorie":"60.0",
         "food_id":"12",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"খাসির কলিজা",
         "food_calorie":"30.0",
         "food_id":"13",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"চিকেন ফ্রাই",
         "food_calorie":"260.0",
         "food_id":"14",
         "food_unit":"পিস"
      },
      {
         "food_name":"ইলিশ",
         "food_calorie":"273.0",
         "food_id":"15",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"রুই",
         "food_calorie":"97.0",
         "food_id":"16",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"কৈ",
         "food_calorie":"70.0",
         "food_id":"17",
         "food_unit":"টি"
      },
      {
         "food_name":"টেংরা",
         "food_calorie":"72.0",
         "food_id":"18",
         "food_unit":"টি"
      },
      {
         "food_name":"পুটি",
         "food_calorie":"5.0",
         "food_id":"19",
         "food_unit":"টি"
      },
      {
         "food_name":"শিং",
         "food_calorie":"100.0",
         "food_id":"20",
         "food_unit":"টি"
      },
      {
         "food_name":"মাগুর",
         "food_calorie":"86.0",
         "food_id":"21",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"চিংড়ী",
         "food_calorie":"50.0",
         "food_id":"22",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"সাদা চালের ভাত",
         "food_calorie":"230.0",
         "food_id":"23",
         "food_unit":"কাপ"
      },
      {
         "food_name":"লাল চালের ভাত",
         "food_calorie":"218.0",
         "food_id":"24",
         "food_unit":"কাপ"
      },
      {
         "food_name":"সাদা আটার রুটি",
         "food_calorie":"72.0",
         "food_id":"25",
         "food_unit":"টি"
      },
      {
         "food_name":"লাল আটার রুটি",
         "food_calorie":"60.0",
         "food_id":"26",
         "food_unit":"টি"
      },
      {
         "food_name":"বান রুটি",
         "food_calorie":"150.0",
         "food_id":"27",
         "food_unit":"টি"
      },
      {
         "food_name":"সাদা পাউরুটি",
         "food_calorie":"80.0",
         "food_id":"28",
         "food_unit":"স্লাইস"
      },
      {
         "food_name":"লাল পাউরুটি",
         "food_calorie":"70.0",
         "food_id":"29",
         "food_unit":"স্লাইস"
      },
      {
         "food_name":"পরোটা",
         "food_calorie":"260.0",
         "food_id":"30",
         "food_unit":"টি"
      },
      {
         "food_name":"আলু পরোটা",
         "food_calorie":"300.0",
         "food_id":"31",
         "food_unit":"টি"
      },
      {
         "food_name":"নান রুটি",
         "food_calorie":"312.0",
         "food_id":"32",
         "food_unit":"টি"
      },
      {
         "food_name":"লুচি",
         "food_calorie":"140.0",
         "food_id":"33",
         "food_unit":"টি"
      },
      {
         "food_name":"চালের রুটি",
         "food_calorie":"105.0",
         "food_id":"34",
         "food_unit":"টি"
      },
      {
         "food_name":"তন্দুরি রুটি",
         "food_calorie":"110.0",
         "food_id":"35",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"ডিম সিদ্ধ",
         "food_calorie":"75.0",
         "food_id":"36",
         "food_unit":"টি"
      },
      {
         "food_name":"ডিম ভাজি",
         "food_calorie":"140.0",
         "food_id":"37",
         "food_unit":"টি"
      },
      {
         "food_name":"ডিম পোচ তেল ছাড়া",
         "food_calorie":"80.0",
         "food_id":"38",
         "food_unit":"টি"
      },
      {
         "food_name":"ডিম পোচ তেল দিয়ে",
         "food_calorie":"202.0",
         "food_id":"39",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"পোলাউ",
         "food_calorie":"258.0",
         "food_id":"40",
         "food_unit":"কাপ"
      },
      {
         "food_name":"চিকেন বিরিয়ানি",
         "food_calorie":"418.0",
         "food_id":"41",
         "food_unit":"কাপ"
      },
      {
         "food_name":"সবজি বিরিয়ানি",
         "food_calorie":"220.0",
         "food_id":"42",
         "food_unit":"কাপ"
      },
      {
         "food_name":"খাসির বিরিয়ানি",
         "food_calorie":"470.0",
         "food_id":"43",
         "food_unit":"কাপ"
      },
      {
         "food_name":"ফ্রাইড রাইস",
         "food_calorie":"280.0",
         "food_id":"44",
         "food_unit":"কাপ"
      }
   ],
   [
      {
         "food_name":"মসুর ডাল রান্না করা",
         "food_calorie":"226.0",
         "food_id":"45",
         "food_unit":"কাপ"
      },
      {
         "food_name":"মুগ ডাল রান্না করা",
         "food_calorie":"150.0",
         "food_id":"46",
         "food_unit":"কাপ"
      },
      {
         "food_name":"বুটের ডাল রান্না করা",
         "food_calorie":"135.0",
         "food_id":"47",
         "food_unit":"কাপ"
      }
   ],
   [
      {
         "food_name":"ফ্রেঞ্চ ফ্রাই",
         "food_calorie":"294.0",
         "food_id":"48",
         "food_unit":"কাপ"
      },
      {
         "food_name":"বিফ বার্গার",
         "food_calorie":"250.0",
         "food_id":"49",
         "food_unit":"টি"
      },
      {
         "food_name":"চিকেন বার্গার",
         "food_calorie":"300.0",
         "food_id":"50",
         "food_unit":"টি"
      },
      {
         "food_name":"চিকেন স্যান্ডউইচ",
         "food_calorie":"275.0",
         "food_id":"51",
         "food_unit":"টি"
      },
      {
         "food_name":"পিজ্জা ছোট আকারের",
         "food_calorie":"1850.0",
         "food_id":"52",
         "food_unit":"টি"
      },
      {
         "food_name":"হট ডগ",
         "food_calorie":"250.0",
         "food_id":"53",
         "food_unit":"টি"
      },
      {
         "food_name":"চিকেন রোল",
         "food_calorie":"235.0",
         "food_id":"54",
         "food_unit":"টি"
      },
      {
         "food_name":"চিকেন শর্মা",
         "food_calorie":"475.0",
         "food_id":"55",
         "food_unit":"টি"
      },
      {
         "food_name":"টমেটো সস",
         "food_calorie":"25.0",
         "food_id":"56",
         "food_unit":"টেবিল চামচ"
      },
      {
         "food_name":"মেয়োনেইস",
         "food_calorie":"110.0",
         "food_id":"57",
         "food_unit":"টেবিল চামচ"
      }
   ],
   [
      {
         "food_name":"চা (১চা চামচ চিনি ও দুধ সহ)",
         "food_calorie":"26.0",
         "food_id":"58",
         "food_unit":"কাপ"
      },
      {
         "food_name":"চা (চিনি ও দুধ ছাড়া)",
         "food_calorie":"22.0",
         "food_id":"59",
         "food_unit":"কাপ"
      },
      {
         "food_name":"কফি (১ চা চামচ চিনি ও দুধ সহ)",
         "food_calorie":"37.0",
         "food_id":"60",
         "food_unit":"কাপ"
      },
      {
         "food_name":"কফি (চিনি ও দুধ ছাড়া)",
         "food_calorie":"22.0",
         "food_id":"61",
         "food_unit":"কাপ"
      }
   ],
   [
      {
         "food_name":"নুডুলস সিদ্ধ",
         "food_calorie":"220.0",
         "food_id":"62",
         "food_unit":"কাপ"
      },
      {
         "food_name":"ফুসকা",
         "food_calorie":"50.0",
         "food_id":"63",
         "food_unit":"টি"
      },
      {
         "food_name":"চটপটি",
         "food_calorie":"22.0",
         "food_id":"64",
         "food_unit":"কাপ"
      },
      {
         "food_name":"পেয়াজু/পাকোড়া",
         "food_calorie":"100.0",
         "food_id":"65",
         "food_unit":"টি"
      },
      {
         "food_name":"ডালপুরি",
         "food_calorie":"124.0",
         "food_id":"66",
         "food_unit":"টি"
      },
      {
         "food_name":"সিঙ্গারা",
         "food_calorie":"200.0",
         "food_id":"67",
         "food_unit":"টি"
      },
      {
         "food_name":"সমুচা",
         "food_calorie":"150.0",
         "food_id":"68",
         "food_unit":"টি"
      },
      {
         "food_name":"আলুর চপ",
         "food_calorie":"150.0",
         "food_id":"69",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"কাঠ বাদাম",
         "food_calorie":"168.0",
         "food_id":"70",
         "food_unit":"মুঠো"
      },
      {
         "food_name":"পেস্তা বাদাম",
         "food_calorie":"188.0",
         "food_id":"71",
         "food_unit":"মুঠো"
      },
      {
         "food_name":"কাজু বাদাম",
         "food_calorie":"178.0",
         "food_id":"72",
         "food_unit":"মুঠো"
      },
      {
         "food_name":"চিনা বাদাম",
         "food_calorie":"170.0",
         "food_id":"73",
         "food_unit":"মুঠো"
      }
   ],
   [
      {
         "food_name":"পাটীসাপটা",
         "food_calorie":"300.0",
         "food_id":"74",
         "food_unit":"টি"
      },
      {
         "food_name":"ভাপা পিঠা",
         "food_calorie":"600.0",
         "food_id":"75",
         "food_unit":"টি"
      },
      {
         "food_name":"তেলের পিঠা",
         "food_calorie":"325.0",
         "food_id":"76",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"কোমল পানীয়",
         "food_calorie":"150.0",
         "food_id":"77",
         "food_unit":"বোতল"
      },
      {
         "food_name":"আপেলের জুস",
         "food_calorie":"117.0",
         "food_id":"78",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"আঙ্গুরের জুস",
         "food_calorie":"154.0",
         "food_id":"79",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"কমলার জুস",
         "food_calorie":"95.0",
         "food_id":"80",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"পেপের জুস",
         "food_calorie":"141.0",
         "food_id":"81",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"মিক্সড সবজি ও ফলের জুস",
         "food_calorie":"72.0",
         "food_id":"82",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"লাচ্ছি",
         "food_calorie":"120.0",
         "food_id":"83",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"চকোলেট মিল্ক সেক",
         "food_calorie":"900.0",
         "food_id":"84",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"ডাবের পানি",
         "food_calorie":"50.0",
         "food_id":"85",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"বোরহানি",
         "food_calorie":"100.0",
         "food_id":"86",
         "food_unit":"গ্লাস"
      }
   ],
   [
      {
         "food_name":"লাড্ডু",
         "food_calorie":"220.0",
         "food_id":"87",
         "food_unit":"টি"
      },
      {
         "food_name":"রসগোল্লা",
         "food_calorie":"150.0",
         "food_id":"88",
         "food_unit":"টি"
      },
      {
         "food_name":"চমচম",
         "food_calorie":"175.0",
         "food_id":"89",
         "food_unit":"টি"
      },
      {
         "food_name":"লালমোহন",
         "food_calorie":"288.0",
         "food_id":"90",
         "food_unit":"টি"
      },
      {
         "food_name":"ছানার সন্দেশ",
         "food_calorie":"120.0",
         "food_id":"91",
         "food_unit":"টি"
      },
      {
         "food_name":"রসমালাই",
         "food_calorie":"250.0",
         "food_id":"92",
         "food_unit":"টি"
      },
      {
         "food_name":"জিলাপী",
         "food_calorie":"200.0",
         "food_id":"93",
         "food_unit":"টি"
      },
      {
         "food_name":"গাজরের হালুয়া",
         "food_calorie":"260.0",
         "food_id":"94",
         "food_unit":"বাটি"
      },
      {
         "food_name":"সুজির হালুয়া",
         "food_calorie":"100.0",
         "food_id":"95",
         "food_unit":"টি"
      },
      {
         "food_name":"বুটের হালুয়া",
         "food_calorie":"150.0",
         "food_id":"96",
         "food_unit":"টি"
      },
      {
         "food_name":"পায়েশ",
         "food_calorie":"200.0",
         "food_id":"97",
         "food_unit":"কাপ"
      },
      {
         "food_name":"জর্দা",
         "food_calorie":"300.0",
         "food_id":"98",
         "food_unit":"কাপ"
      },
      {
         "food_name":"নারকেলের বারফি",
         "food_calorie":"192.0",
         "food_id":"99",
         "food_unit":"টি"
      },
      {
         "food_name":"দুধ",
         "food_calorie":"146.0",
         "food_id":"100",
         "food_unit":"কাপ"
      },
      {
         "food_name":"জেলি",
         "food_calorie":"110.0",
         "food_id":"101",
         "food_unit":"টেবিল চামচ"
      },
      {
         "food_name":"জ্যাম",
         "food_calorie":"100.0",
         "food_id":"102",
         "food_unit":"টেবিল চামচ"
      },
      {
         "food_name":"হরলিক্স",
         "food_calorie":"20.0",
         "food_id":"103",
         "food_unit":"টেবিল চামচ"
      },
      {
         "food_name":"ওভালটিন",
         "food_calorie":"20.0",
         "food_id":"104",
         "food_unit":"টেবিল চামচ"
      },
      {
         "food_name":"পুডিং",
         "food_calorie":"200.0",
         "food_id":"105",
         "food_unit":"কাপ"
      },
      {
         "food_name":"ফালুদা",
         "food_calorie":"300.0",
         "food_id":"106",
         "food_unit":"গ্লাস"
      },
      {
         "food_name":"টক দই",
         "food_calorie":"120.0",
         "food_id":"107",
         "food_unit":"কাপ"
      },
      {
         "food_name":"মিষ্টি দই",
         "food_calorie":"400.0",
         "food_id":"108",
         "food_unit":"কাপ"
      },
      {
         "food_name":"ফলের কাস্টার্ড",
         "food_calorie":"172.0",
         "food_id":"109",
         "food_unit":"কাপ"
      }
   ],
   [
      {
         "food_name":"খেজুর",
         "food_calorie":"23.0",
         "food_id":"110",
         "food_unit":"টি"
      },
      {
         "food_name":"আপেল",
         "food_calorie":"90.0",
         "food_id":"111",
         "food_unit":"টি"
      },
      {
         "food_name":"সাগর কলা",
         "food_calorie":"110.0",
         "food_id":"112",
         "food_unit":"টি"
      },
      {
         "food_name":"পেয়ারা",
         "food_calorie":"50.0",
         "food_id":"113",
         "food_unit":"টি"
      },
      {
         "food_name":"আম",
         "food_calorie":"200.0",
         "food_id":"114",
         "food_unit":"টি"
      },
      {
         "food_name":"আঙ্গুর",
         "food_calorie":"2.0",
         "food_id":"115",
         "food_unit":"টি"
      },
      {
         "food_name":"কালো জাম",
         "food_calorie":"4.0",
         "food_id":"116",
         "food_unit":"টি"
      },
      {
         "food_name":"আনারস",
         "food_calorie":"0.5",
         "food_id":"117",
         "food_unit":"গ্রাম"
      },
      {
         "food_name":"নাশপাতি",
         "food_calorie":"81.0",
         "food_id":"118",
         "food_unit":"টি"
      },
      {
         "food_name":"কাঁঠাল",
         "food_calorie":"0.95",
         "food_id":"119",
         "food_unit":"গ্রাম"
      },
      {
         "food_name":"তরমুজ",
         "food_calorie":"0.3",
         "food_id":"120",
         "food_unit":"গ্রাম"
      },
      {
         "food_name":"পেঁপে",
         "food_calorie":"0.43",
         "food_id":"121",
         "food_unit":"গ্রাম"
      },
      {
         "food_name":"লিচু",
         "food_calorie":"6.0",
         "food_id":"122",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"শশা",
         "food_calorie":"12.0",
         "food_id":"123",
         "food_unit":"টি"
      },
      {
         "food_name":"গাজর",
         "food_calorie":"52.0",
         "food_id":"124",
         "food_unit":"টি"
      },
      {
         "food_name":"টমেটো",
         "food_calorie":"30.0",
         "food_id":"125",
         "food_unit":"টি"
      },
      {
         "food_name":"লেবু",
         "food_calorie":"20.0",
         "food_id":"126",
         "food_unit":"টি"
      },
      {
         "food_name":"লেটুস",
         "food_calorie":"2.0",
         "food_id":"127",
         "food_unit":"টি"
      },
      {
         "food_name":"ক্যাপসিকাম",
         "food_calorie":"15.0",
         "food_id":"128",
         "food_unit":"টি"
      }
   ],
   [
      {
         "food_name":"ক্রিম বিস্কুট",
         "food_calorie":"80.0",
         "food_id":"129",
         "food_unit":"টি"
      },
      {
         "food_name":"গ্লুকোজ বিস্কুট",
         "food_calorie":"30.0",
         "food_id":"130",
         "food_unit":"টি"
      },
      {
         "food_name":"টোস্ট বিস্কুট",
         "food_calorie":"88.0",
         "food_id":"131",
         "food_unit":"টি"
      },
      {
         "food_name":"চানাচুর",
         "food_calorie":"5.5",
         "food_id":"132",
         "food_unit":"গ্রাম"
      },
      {
         "food_name":"প্লেইন কেক",
         "food_calorie":"218.0",
         "food_id":"133",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"ফ্রুট কেক",
         "food_calorie":"320.0",
         "food_id":"134",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"চকোলেট কেক",
         "food_calorie":"235.0",
         "food_id":"135",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"পেস্ট্রি",
         "food_calorie":"330.0",
         "food_id":"136",
         "food_unit":"টুকরা"
      },
      {
         "food_name":"আইসক্রিম",
         "food_calorie":"300.0",
         "food_id":"137",
         "food_unit":"কাপ"
      }
   ]
];