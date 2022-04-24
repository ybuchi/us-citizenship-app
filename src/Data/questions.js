import React from "react";

const questionsData = [
    {
        "id": 1,
        "question": "What is the form of government of the United States?",
        "answers": [
                        "Republic",
                        "Constitution-based federal republic",
                        "Representative Democracy"
                    ]
    },
    {
        "id": 2,
        "question": "What is the supreme law of the land?",
        "answers": ["The U.S. Constitution"]
    },
    {
        "id": 3,
        "question": "Name one thing the U.S. Constitution does.",
        "answers": [
                        "Forms the government.",
                        "Defines the parts of the government",
                        "Protects the rights of the people"
                    ]
    },
    {
        "id": 4,
        "question": "The U.S. Constitution starts with the the words 'We the People'. What does 'We the People' mean?",
        "answers": [
                        "Self government",
                        "Popular sovereignty",
                        "Consent of the governed",
                        "People should govern themselves",
                        "Example of social contract"
                    ]
    },
    {
        "id": 5,
        "question": "How are changes made the U.S. Constitution?",
        "answers": ["The amendment process"]
    },
    {
        "id": 6,
        "question": "What does the Bill of Rights protect?",
        "answers": [
                        "(The basic) rights of all Americans",
                        "(The basic) rights of people living in the United States"
        ]
    },
    {
        "id": 7,
        "question": "How many amendments does the U.S. Consitution have?",
        "answers": [27]
    },
    {
        "id": 8,
        "question": "Why is the Declaration of Independence important?",
        "answers": [
                        "It says America is free from British control.",
                        "It says all people are created equal.",
                        "It identifies inherent rights.",
                        "It identifies individual freedoms."
        ]
    },
    {
        "id": 9,
        "question": "What founding document said the American colonies were free from Britain?",
        "answers": ["Declaration of Independence"]
    },
    {
        "id": 10,
        "question": "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
        "answers": [
                        "Equality",
                        "Liberity",
                        "Social contract",
                        "Natural rights",
                        "Limited government"
                    ]
    },
    {
        "id": 11,
        "question": "The words 'Life, Liberty, and the pursuit of Happiness' are in what founding document?",
        "answers": ["Declaration of Independence"]
    },
    {
        "id": 12,
        "question": "What is the economic system of the United States?",
        "answers": ["Capitalism", "Free market economy"]
    },
    {
        "id": 13,
        "question": "What is the rule of law?",
        "answers": [
                        "Everyone must follow the law.",
                        "Leaders must obey the law.",
                        "Government must obey the law.",
                        "No one is above the law"
                    ]
    },
    {
        "id": 14,
        "question": "Many documents influenced the U.S. Constitution. Name one.",
        "answers": [
                        "Declaration of Independence",
                        "Articles of Confederation",
                        "Federalist Papers",
                        "Anti-Federalist Papers",
                        "Virginia Declaration of Rights",
                        "Fundamental Orders of Connecticut",
                        "Mayflower Compact",
                        "Iroquois Great Law of Peace"
        ]
    },
    {
        "id": 15,
        "question": "There are three branches of government. Why?",
        "answers": [
                        "So one part does not become too powerful.",
                        "Checks and balances.",
                        "Separation of power."
                    ]
    },
    {
        "id": 16,
        "question": "Name the three branches of government.",
        "answers": [
                        "Legislative, executive, judicial.",
                        "Congress, the president, and the courts"
                    ]
    },
    {
        "id": 17,
        "question": "The President of the United States is in charge of which branch of government?",
        "answers": ["Executive branch"]
    },
    {
        "id": 18,
        "question": "What part of the federal government writes laws?",
        "answers": [
                        "(U.S.) Congress",
                        "(U.S. or national) legislature",
                        "Legislative branch"
        ]
    },
    {
        "id": 19,
        "question": "What are the two parts of the U.S. Congress?",
        "answers": ["Senate and the House (of Representatives)"]
    },
    {
        "id": 20,
        "question": "Name one power of the U.S. Congress",
        "answers": [
                        "Writes laws.",
                        "Declares war.",
                        "Makes the federal budget."
        ]
    },
    {
        "id": 21,
        "question": "How many U.S. Senators are there?",
        "answers": [ "One hundred (100)"]
    },
    {
        "id": 22,
        "question": "How long is a term for a U.S. Senator?",
        "answers": ["Six (6) years"]
    },
    {
        "id": 23,
        "question": "What is one of your state's U.S. Senator now? Answers depend on your state.",
        "answers": ["[NY] Kirsten Gillibrand", "[NY] Charles E. Schumer"]
    },
    {
        "id": 24,
        "question": "How many voting members are in the House of Representatives?",
        "answers": ["Four hundred thirty-five (435"]
    },
    {
        "id": 25,
        "question": "How long is a term for a member of the House of Representatives?",
        "answers": ["Two (2) years."]
    },
    {
        "id": 26,
        "question": "Why do U.S. representatives serve shorter terms than U.S. senators?",
        "answers": ["To more closely follow public opinion."]
    },
    {
        "id": 27,
        "question": "How many senators does each state have?",
        "answers": ["Two (2)."]
    },
    {
        "id": 28,
        "question": "Why does each state have two senators?",
        "answers": ["Equal representation (for small states)", "The Great Compromise (Connecticut Compromise)"]
    },
    {
        "id": 29,
        "question": "Name your U.S. representative.",
        "answers": ["[Queens, NY] Grace Meng"]
    },
    {
        "id": 30,
        "question": "What is the name of the Speaker of the House of Representatives now?",
        "answers": ["Nancy Pelosi"]
    },
    {
        "id": 31,
        "question": "Who does a U.S. senator represent?",
        "answers": ["Citizens of their state", "People of their state"]
    },
    {
        "id": 32,
        "question": "Who elects U.S. Senators?",
        "answers": ["Citizens from their state"]
    },
    {
        "id": 33,
        "question": "Who does a member of the House of Representatives represent?",
        "answers": [
                        "Citizens from their (congressional) district.",
                        "Citizens in their district.", 
                        "People from their (congressional) district.", 
                        "People in their district."
                    ]
    },
    {
        "id": 34,
        "question": "Who elects members of the House of Representatives?",
        "answers": ["Citizens from their congressional district."]
    },
    {
        "id": 35,
        "question": "Some states have more representatives than other states. Why?",
        "answers": [
                        "Because of the state's population.",
                        "Because they have more people.",
                        "Because some states have more people."
                    ]
    },
    {
        "id": 36,
        "question": "The President of the United States is elected for how many years?",
        "answers": ["Four (4) years"]
    },
    {
        "id": 37,
        "question": "The President of the United States can serve only two terms. Why?",
        "answers": ["(Because of the) 22nd Amendment.", "To keep the president from becoming too powerful."]
    },
    {
        "id": 38,
        "question": "What is the name of the President of the United States now?",
        "answers": ["Joe Biden"]
    },
    {
        "id": 39,
        "question": "What is the name of the Vice President of the United States now?",
        "answers": ["Kamala Harris"]
    },
    {
        "id": 40,
        "question": "If the president can no longer serve, who becomes president? ",
        "answers": ["The vice-president"]
    },
    {
        "id": 41,
        "question": "Name one power of the president.",
        "answers": [
                        "Signs bills into law.",
                        "Vetoes bills.",
                        "Enforces laws.",
                        "Commander in Chief (of the military).",
                        "Chief diplomat."
        ]
    },
    {
        "id": 42,
        "question": "Who is Commander-in-Chief of the U.S. military?",
        "answers": ["The President (of the United States.)"]
    },
    {
        "id": 43,
        "question": "Who signs bills to become laws?",
        "answers": ["The President (of the United States.)"]
    },
    {
        "id": 44,
        "question": "Who vetoes bills?",
        "answers": ["The President (of the United States.)"]
    },
    {
        "id": 45,
        "question": "Who appoints federal judges?",
        "answers": ["The President (of the United States.)"]
    },
    {
        "id": 46,
        "question": "The executive branch has many parts. Name one.",
        "answers": ["The President (of the United States)" ,"Cabinet", "Federal departments and agencies"]
    },
    {
        "id": 47,
        "question": "What does the President�s Cabinet do?",
        "answers": ["Advises the president (of the United States)."]
    },
    {
        "id": 48,
        "question": "What are two Cabinet-level positions?",
        "answers": [
                        "Attorney General",
                        "Secretary of Agriculture",
                        "Secretary of Commerce",
                        "Secretary of Defense",
                        "Secretary of Education",
                        "Secretary of Energy",
                        "Secretary of Health and Human Services",
                        "Secretary of Homeland Security",
                        "Secretary of Housing and Urban Development",
                        "Secretary of the Interior",
                        "Secretary of Labor",
                        "Secretary of State",
                        "Secretary of Transportation",
                        "Secretary of the Treasury",
                        "Secretary of Veteran Affairs",
                        "Vice President (of the United States)"
                    ]
    },
    {
        "id": 49,
        "question": "Why is the Electoral College Important?",
        "answers": [
                        "It decides who is elected president.",
                        "It provides a compromise between the popular election of the president and congressional selection."
                    ]
    },
    {
        "id": 50,
        "question": "What is one part of the judicial branch?",
        "answers": ["Supreme Court", "Federal Courts"]
    },
    {
        "id": 51,
        "question": "What does the judicial branch do?",
        "answers": [
                        "Reviews laws.", 
                        "Explains laws.", 
                        "Resolves disputes (disagreements) about the law.",
                        "Decides if a law goes against the (U.S.) Constitution."
                    ]
    },
    {
        "id": 52,
        "question": "What is the highest court in the United States?",
        "answers": ["The Supreme Court"]
    },
    {
        "id": 53,
        "question": "How many seats are on the Supreme Court?",
        "answers": ["Nine (9)"]
    },
    {
        "id": 54,
        "question": "How many Supreme Court justices are usually needed to decide a case?",
        "answers": ["Five (5)"]
    },
    {
        "id": 55,
        "question": "How long do Supreme Court justices serve?",
        "answers": [
                        "(For) Life.",
                        "Lifetime appointment.",
                        "(Until) retirement."
                    
                    ]
    },
    {
        "id": 56,
        "question": "Supreme Court justices serve for life. Why?",
        "answers": [
                        "To be independent (of politics).",
                        "To limit outside (political) influence."
                    ]
            
    },
    {
        "id": 57,
        "question": "Who is the Chief Justice of the United States now?",
        "answers": ["John Roberts"]
    },
    {
        "id": 58,
        "question": "Name one power that is only for the federal government.",
        "answers": [
                        "Print paper money",
                        "Mint coins",
                        "Declare war",
                        "Create an army",
                        "Make treaties",
                        "Set foreign policy"
                    ]
    },
    {
        "id": 59,
        "question": "Name one power that is only for the states.",
        "answers": [
                        "Provide schooling and education",
                        "Provide protection (police)",
                        "Provide safety (fire departments)",
                        "Give a driver�s license",
                        "Approve zoning and land use"
                    ]
    },
    {
        "id": 60,
        "question": "What is the purpose of the 10th Amendment?",
        "answers": ["(It states that the) powers not given to the federal government belong to the states or to the people."]
    },
    {
        "id": 61,
        "question": "Who is the governor of your state now?",
        "answers": ["[NY] Kathy Hochul"]
    },
    {
        "id": 62,
        "question": "What is the capital of your state?",
        "answers": ["[NY] Albany"]
    },
    {
        "id": 63,
        "question": "There are four amendments to the U.S. Constitution about who can vote. Describe one of them. ",
        "answers": [
            "Citizens eighteen (18) and older (can vote).",
            "You don�t have to pay (a poll tax) to vote.",
            "Any citizen can vote. (Women and men can vote.)",
            "A male citizen of any race (can vote)."
            
        ]
    },
    {
        "id": 64,
        "question": "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
        "answers": [
                        "Citizens",
                        "Citizens of the United States",
                        "U.S. citizens"
                    ]
    },
    {
        "id": 65,
        "question": "What are three rights of everyone living in the United States? ",
        "answers": [
                        "Freedom of expression",
                        "Freedom of speech",
                        "Freedom of assembly",
                        "Freedom to petition the government",
                        "Freedom of religion",
                        "The right to bear arms"
        ]
    },
    {
        "id": 66,
        "question": "What do we show loyalty to when we say the Pledge of Allegiance?",
        "answers": ["The United States", "The flag"]
    },
    {
        "id": 67,
        "question": "Name two promises that new citizens make in the Oath of Allegiance. ",
        "answers": [
                        "Give up loyalty to other countries",
                        "Defend the (U.S.) Constitution",
                        "Obey the laws of the United States ",
                        "Serve in the military (if needed)",
                        "Serve (help, do important work for) the nation (if needed)",
                        "Be loyal to the United States"
                    ]
    },
    {
        "id": 68,
        "question": "How can people become United States citizens?",
        "answers": [
                        "Naturalize",
                        "Derive citizenship",
                        "Be born in the United States"
                    ]
    },
    {
        "id": 69,
        "question": "What are two examples of civic participation in the United States?",
        "answers": [
                        "Vote",                                                                             
                        "Run for office",
                        "Join a political party",
                        "Help with a campaign",
                        "Join a civic group",
                        "Join a community group",
                        "Give an elected official your opinion (on an issue)",
                        "Contact elected officials",
                        "Support or oppose an issue or policy",
                        "Write to a newspaper"
        ]
    },
    {
        "id": 70,
        "question": "What is one way Americans can serve their country?",
        "answers": [
                        "Vote",                                                                                                 
                        "Pay taxes",                                                               
                        "Obey the law",                                                         
                        "Serve in the military",
                        "Run for office",
                        "Work for local, state, or federal government"
                    ]
    },
    {
        "id": 71,
        "question": "Why is it important to pay federal taxes?",
        "answers": [
                        "Required by law",
                        "All people pay to fund the federal government",
                        "Required by the (U.S.) Constitution (16th Amendment)",
                        "Civic duty"
                    ]
    },
    {
        "id": 72,
        "question": "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
        "answers": [
                        "Required by law",
                        "Civic duty",
                        "Makes the draft fair, if needed"
                    ]
    },
    {
        "id": 73,
        "question": "The colonists came to America for many reasons. Name one.",
        "answers": [
                        "Freedom",
                        "Political liberty",
                        "Religious freedom",
                        "Economic opportunity",
                        "Escape persecution"
        ]
    },
    {
        "id": 74,
        "question": "Who lived in America before the Europeans arrived?",
        "answers": [
                        "American Indians",
                        "Native Americans"
        ]
    },
    {
        "id": 75,
        "question": "What group of people was taken and sold as slaves?",
        "answers": ["Africans", "People from Africa"]
    },
    {
        "id": 76,
        "question": "What war did the Americans fight to win independence from Britain?",
        "answers": [

                        " American Revolution",
                        "The (American) Revolutionary War",
                        "War for (American) Independence"
        ]
    },
    {
        "id": 77,
        "question": "Name one reason why the Americans declared independence from Britain.",
        "answers": [
                        " High taxes" ,
                        "Taxation without representation",
                        "British soldiers stayed in Americans' houses (boarding, quartering)",
                        "They did not have self-government",
                        "Boston Massacre",
                        "Boston Tea Party (Tea Act)",
                        "Stamp Act",
                        "Sugar Act",
                        "Townshend Acts",
                        "Intolerable (Coercive) Acts"
        ]
    },
    {
        "id": 78,
        "question": "Who wrote the Declaration of Independence?",
        "answers": ["(Thomas) Jefferson"]
    },
    {
        "id": 79,
        "question": "When was the Declaration of Independence adopted?",
        "answers": ["July 4th, 1776"]
    },
    {
        "id": 80,
        "question": "The American Revolution had many important events. Name one.",
        "answers": [
                        "(Battle of) Bunker Hill",
                        "Declaration of Independence ",
                        "Washington Crossing the Delaware (Battle of Trenton)",
                        "(Battle of) Saratoga",
                        "Valley Forge (Encampment)",
                        "(Battle of) Yorktown (British surrender at Yorktown)"
                    ]
    },
    {
        "id": 81,
        "question": "There were 13 original states. Name five.",
        "answers": [
                        "New Hampshire",
                        "Massachusetts",
                    " Rhode Island",
                        "Connecticut",
                        "New York",
                        "New Jersey",
                        "Pennsylvania",
                        "Delaware",
                        "Maryland",
                        "Virginia",
                        "North Carolina",
                        "South Carolina",
                        "Georgia"
                    ]
    },
    {
        "id": 82,
        "question": "What founding document was written in 1787?",
        "answers": ["(U.S.)Consitution"]
    },
    {
        "id": 83,
        "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        "answers": [
                        "(James) Madison",
                        "(Alexander) Hamilton",
                        "(John) Jay",
                        "Publius"
                    ]
    },
    {
        "id": 84,
        "question": "Why were the Federalist Papers important?",
        "answers": [
                        "They helped people understand the (U.S.) Constitution.",
                        "They supported passing the (U.S.) Constitution."
                    ]
    },
    {
        "id": 85,
        "question": "Benjamin Franklin is famous for many things. Name one.",
        "answers": [
                        "Founded the first free public libraries",
                        "First Postmaster General of the United States",
                        "Helped write the Declaration of Independence",
                        "Inventor",
                        "U.S. diplomat"
                    ]
    },
    {
        "id": 86,
        "question": "George Washington is famous for many things. Name one. ",
        "answers": [
                        "'Father of Our Country'",
                        "First president of the United States",                                
                        "General of the Continental Army",
                        "President of the Constitutional Convention",
                    ]
    },
    {
        "id": 87,
        "question": "Thomas Jefferson is famous for many things. Name one.",
        "answers": [
                        "Writer of the Declaration of Independence  ",                 
                        "Third president of the United States",
                        "Doubled the size of the United States (Louisiana Purchase)",                                   
                        "First Secretary of State",
                        "Founded the University of Virginia",
                        "Writer of the Virginia Statute on Religious Freedom"
                    ]
    },
    {
        "id": 88,
        "question": "James Madison is famous for many things. Name one.",
        "answers": [
                        "'Father of the Constitution'",                     
                        "Fourth president of the United States",
                        "President during the War of 1812",
                        "One of the writers of the Federalist Papers"
                    ]
    },
    {
        "id": 89,
        "question": "Alexander Hamilton is famous for many things. Name one.",
        "answers": [

                        "First Secretary of the Treasury",
                        "One of the writers of the Federalist Papers",
                        "Helped establish the First Bank of the United States",
                        "Aide to General George Washington",
                        "Member of the Continental Congress"
                    ]
    },
    {
        "id": 90,
        "question": "What territory did the United States buy from France in 1803?",
        "answers": [
                        "Louisiana Territory",                      
                        "Louisiana"
                    ]
    },
    {
        "id": 91,
        "question": "Name one war fought by the United States in the 1800s.",
        "answers": [
                        "War of 1812",
                        "Mexican-American War",
                        "Civil War",
                        "Spanish-American War"
                    ]
    },
    {
        "id": 92,
        "question": "Name the U.S. war between the North and the South.",
        "answers": ["The Civil War"]
    },
    {
        "id": 93,
        "question": "The Civil War had many important events. Name one.",
        "answers": [
                        "(Battle of) Fort Sumter",
                        "Emancipation Proclamation",
                        "(Battle of) Vicksburg",
                        "(Battle of) Gettysburg",
                        "Sherman's March",
                        "(Surrender at) Appomattox",
                        "(Battle of) Antietam/Sharpsburg",
                        "Lincoln was assassinated."
                    ]
    },
    {
        "id": 94,
        "question": "Abraham Lincoln is famous for many things. Name one.",
        "answers": [
                        "Freed the slaves (Emancipation Proclamation)",
                        "Saved (or preserved) the Union",
                        "Led the United States during the Civil War",
                        "16th president of the United States",
                        "Delivered the Gettysburg Address"
                    ]
    },
    {
        "id": 95,
        "question": "What did the Emancipation Proclamation do?",
        "answers": [
                        "Freed the slaves",
                        "Freed slaves in the Confederacy",
                        "Freed slaves in the Confederate states",
                        "Freed slaves in most Southern states"
                    ]
    },
    {
        "id": 96,
        "question": "What U.S. war ended slavery?",
        "answers": ["The Civil War"]
    },
    {
        "id": 97,
        "question": "What amendment gives citizenship to all persons born in the United States?",
        "answers": ["14th Amendment"]
    },
    {
        "id": 98,
        "question": "When did all men get the right to vote?",
        "answers": [
                        "After the Civil War",
                        "During Reconstruction ",
                        "(With the) 15th Amendment",
                        "1870"
                    ]
    },
    {
        "id": 99,
        "question": "Name one leader of the women�s rights movement in the 1800s.",
        "answers": [
                        "Susan B. Anthony",
                        "Elizabeth Cady Stanton",
                        "Sojourner Truth",
                        "Harriet Tubman",
                        "Lucretia Mott",
                        "Lucy Stone"
                    ]
    },
    {
        "id": 100,
        "question": "Name one war fought by the United States in the 1900s.",
        "answers": [
                        "World War I",
                        "World War II",
                        "Korean War",
                        "Vietnam War", 
                        "(Persian) Gulf War"
                    ]
    },
    {
        "id": 101,
        "question": "Why did the United States enter World War I?",
        "answers": [
                        "Because Germany attacked U.S. (civilian) ships.",
                        "To support the Allied Powers (England, France, Italy, and Russia).",
                        "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)."
                    ]
    },
    {
        "id": 102,
        "question": "When did all women get the right to vote?",
        "answers": [
                        "1920",
                        "After World War I",
                        "(With the) 19th Amendment"
                    ]
    },
    {
        "id": 103,
        "question": "What was the Great Depression?",
        "answers": ["Longest economic recession in modern history"]
    },
    {
        "id": 104,
        "question": "When did the Great Depression start?",
        "answers": [
                        "The Great Crash (1929)",
                        "Stock market crash of 1929"
                    ]
    },
    {
        "id": 105,
        "question": "Who was president during the Great Depression and World War II?",
        "answers": ["(Franklin D.) Roosevelt"]
    },
    {
        "id": 106,
        "question": "Why did the United States enter World War II?",
        "answers": [
                        "(Bombing of) Pearl Harbor",
                        "Japanese attacked Pearl Harbor",
                        "To support the Allied Powers (England, France, and Russia)",
                        "To oppose the Axis Powers (Germany, Italy, and Japan)"
                    ]
    },
    {
        "id": 107,
        "question": "Dwight Eisenhower is famous for many things. Name one. ",
        "answers": [
                        "General during World War II",
                        "President at the end of (during) the Korean War",
                        "34th president of the United States",
                        "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
                    ]
    },
    {
        "id": 108,
        "question": "Who was the United States' main rival during the Cold War?",
        "answers": [
                        "Soviet Union",
                        "USSR",
                        "Russia"
                    ]
    },
    {
        "id": 109,
        "question": "During the Cold War, what was one main concern of the United States?",
        "answers": [
                        "Communism",
                        "Nuclear war"
                    ]
    },
    {
        "id": 110,
        "question": "Why did the United States enter the Korean War?",
        "answers": ["To stop the spread of communism."]
    },
    {
        "id": 111,
        "question": "Why did the United States enter the Vietnam War?",
        "answers": ["To stop the spread of communism."]
    },
    {
        "id": 112,
        "question": "What did the civil rights movement do?",
        "answers": ["Fought to end racial discrimination."]
    },
    {
        "id": 113,
        "question": "Martin Luther King, Jr. is famous for many things. Name one.",
        "answers": [
                        "Fought for civil rights",
                        "Worked for equality for all Americans",
                        "Worked to ensure that people would 'not be judged by the color of their skin, but by the content of their character'"
                    ]
    },
    {
        "id": 114,
        "question": "Why did the United States enter the Persian Gulf War?",
        "answers": ["To force the Iraqi military from Kuwait."]
    },
    {
        "id": 115,
        "question": "What major event happened on September 11, 2001 in the United States?",
        "answers": [
                        "Terrorists attacked the United States ",
                        "Terrorists took over two planes and crashed them into the World Trade Center in New York City.",
                        "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia.",
                        "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania."
                    ]
    },
    {
        "id": 116,
        "question": "Name one U.S. military conflict after the September 11, 2001 attacks.",
        "answers": [
                        "(Global) War on Terror",
                        "War in Afghanistan",
                        "War in Iraq"
                    ]
    },
    {
        "id": 117,
        "question": "Name one Native American tribe in the United States.",
        "answers": [
                        "Apache",
                        "Blackfeet",
                        "Cayuga",
                        "Cherokee",
                        "Cheyenne",
                        "Chippewa",
                        "Choctaw",
                        "Creek",
                        "Crow",
                        "Hopi",
                        "Huron",
                        "Inupiat",
                        "Lakota",
                        "Mohawk" ,
                        "Mohegan",
                        "Navajo",
                        "Oneida",
                        "Onondaga",
                        "Pueblo",
                        "Seminole",
                        "Seneca",
                        "Shawnee",
                        "Sioux" ,
                        "Teton",
                        "Tuscarora",
                        "For a complete list of tribes, please visit bia.gov."
                    ]
    },
    {
        "id": 118,
        "question": "Name one example of an American innovation.",
        "answers": [
                        "Light bulb",
                        "Automobile (cars, internal combustion engine)",
                        "Skyscrapers",
                        "Airplane",
                        "Assembly line",
                        "Landing on the moon",
                        "Integrated circuit (IC)"
                    ]
    },
    {
        "id": 119,
        "question": "What is the capital of the United States?",
        "answers": ["Washington, D.C."]
    },
    {
        "id": 120,
        "question": "Where is the Statue of Liberty?",
        "answers": [
                        "New York (Harbor)",
                        "Liberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River)"
                    ]
    },
    {
        "id": 121,
        "question": "",
        "answers": [
                        "(Because there were) 13 original colonies",
                        "(Because the stripes) represent the original colonies"
                    ]
    },
    {
        "id": 122,
        "question": "",
        "answers": [
                        "(Because there is) one star for each state",
                        "(Because) each star represents a state",
                        "(Because there are) 50 states"
                    ]
    },
    {
        "id": 123,
        "question": "What is the name of the national anthem?",
        "answers": ["The Star-Spangled Banner"]
    },
    {
        "id": 124,
        "question": "The Nation's first motto was 'E Pluribus Unum'. What does that mean?",
        "answers": ["Out of many, one", "We all become one."]
    },
    {
        "id": 125,
        "question": "What is Independence Day?",
        "answers": [
                        "A holiday to celebrate U.S. independence (from Britain)",
                        "The country's birthday"
                    ]
    },
    {
        "id": 126,
        "question": "Name three National U.S. Holidays.",
        "answers": [
                        "New Year's Day",
                        "Martin Luther King, Jr. Day ",
                        "Presidents Day (Washington�s Birthday)",
                        "Memorial Day ",
                        "Independence Day",
                        "Labor Day",
                        "Columbus Day" ,
                        "Veterans Day",
                        "Thanksgiving Day",
                        "Christmas Day"
                    ]
    },
    {
        "id": 127,
        "question": "What is Memorial Day?",
        "answers": ["A holiday to honor soldiers who died in military service."]
    },
    {
        "id": 128,
        "question": "What is Veterans Day?",
        "answers": [
                        "A holiday to honor people in the (U.S.) military",
                        "A holiday to honor people who have served (in the U.S. military)"
                    ]
    }
]

export default questionsData;