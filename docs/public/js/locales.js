$.lang = {};
let nav_lang = undefined;
if (navigator.language === "ko-KR" || navigator.language === "ko") {
  nav_lang = "ko";
} else {
  nav_lang = "en";
}
let lang = nav_lang;
// console.log("navigator language =" , lang)
// class name _ number
// - error => _ under bar
$.lang.en = {
  button_lang: "ko",

  tabs_1: "Events",
  tabs_2: "Overview",
  tabs_3: "Roadmap",
  tabs_4: "Free Minting",
  tabs_5: "FAQ",
  tabs_6: "Architecture",
  tabs_7: "LEEDO Plan",
  tabs_8: "Check-in Counter",
  tabs_9: "Leedorian Metaverse",

  tabs_1_content_1: `<strong >Round Winners !!</strong>`,
  tabs_1_content_2: `Winners can claim 100,000 SQUID ERC20 tokens after the SQUID Token issuance event.`,
  tabs_1_content_3: `In addition, the winners of rounds 2, 7, 9, 10, 12 and 17 were awarded 1 ETH.`,
  tabs_1_content_4: `Squid Game Card AMA(Ask Me Anything) Session`,
  tabs_1_content_5: `<Strong>1. Date</Strong>`,
  tabs_1_content_6: `October 27, 11:00 PM Seoul`,
  tabs_1_content_7: `October 27, 10:00 AM New York`,
  tabs_1_content_8: `October 27, 2:00 PM GMT`,
  tabs_1_content_9: `<Strong >2. Who to attend</Strong>`,
  tabs_1_content_10: `Everyone`,
  tabs_1_content_11: `<Strong >3. Main question content (Discord)</Strong>`,
  tabs_1_content_12: `How much is the ERC20 token issuance?`,
  tabs_1_content_13: `Where can ERC20 tokens be used?`,
  tabs_1_content_14: `What is the initial price of Uniswap?`,
  tabs_1_content_15: `Is NFT Card Staking Ranked? Is there a difference in the amount of ERC20 tokens awarded according to rarity?`,
  tabs_1_content_16: `Are there any games currently in development? If yes, when will it be announced?`,
  tabs_1_content_17: `What are your next plans for the project?`,
  tabs_1_content_18: `What is the ERC20 launch event?`,
  tabs_1_content_19: `What kind of NFT is given when minting more than 100 pieces?`,
  tabs_1_content_20: `Do you have any plans to activate the facebook community to attract overseas users (Philippines, Vietnam, etc.)?`,
  tabs_1_content_21: `<strong><span style='color: rosybrown;'>[Event is over]</span> Who is the Last Survivor?</strong>`,
  tabs_1_content_22: `One out of 456 cards will be randomly selected in each round <strong >(using a random seed provided by Chainlink Oracle)</strong>. There will be a total of 20 winners.`,
  tabs_1_content_23: `All winners receive <strong>100,000 SQUID (ERC20)</strong> tokens per winning card.`,
  tabs_1_content_24: `<strong>Ojingeo Bonus: </strong>`,
  tabs_1_content_25: `If the winning card in each round is <span class='hangul'>‘&#12615; &#12671; &#12609;’</span>, additional <strong>1 ETH</strong>  will be paid. (Applied after round 5)`,
  tabs_1_content_26: `<strong >Grand winner Bonus: </strong>`,
  tabs_1_content_27: `If the winning card consists of 3 identical consonants, such as <span class='hangul'>‘ &#12609;  &#12609;  &#12609;’</span>, <Strong>5 ETH</Strong> will be rewarded to the first winner after 5 rounds. <br>The 5 ETH prize is one time only. Once it is claimed first time, only 1 ETH will be paid to the next winners who qualify the grand prize. `,
  tabs_1_content_28: `ETH winnings are automatically paid by the contract.`,
  tabs_1_content_29: ` SQUID winnings are individually claimed after SQUID Token issuance (the claim method will be announced later).`,
  tabs_1_content_30: `<strong><span style='color: rosybrown;'>[Event is over]</span> Squid Game Card NFT Free Minting</strong> `,
  tabs_1_content_31: `<Strong>Participation Eligibility:</Strong> Anyone`,
  tabs_1_content_32: `<Strong>Price:</Strong> Free (Gas fee paid by users)`,
  tabs_1_content_33: `<Strong>Total amount that can be minted:</Strong> 9,576 cards`,
  tabs_1_content_34: `<Strong>Distribution method:</Strong> Individual participants directly mint 456 Squid Game Cards per round`,
  tabs_1_content_35: `<Strong>Round composition:</Strong> 20 participant rounds (#11~#9120) and one developer round (#9121~#9,576)`,
  tabs_1_content_36: `<Strong>Developer Setup Card:</Strong> Issue a total of 10 cards (#1~#10) when deploying the contract`,
  tabs_1_content_37: `<Strong>Round process method: </Strong>When one round ends, the next round starts after a round break of 6 hours.`,
  tabs_1_content_38: `<Strong>Card verification method:</Strong> After confirming the issuance transaction, connect the Ethereum wallet used for the issuance transaction to the OpenSea site and check in the [Profile] menu`,
  tabs_1_content_39: `For details on how to participate in the event, refer to the video in the <span class='minting-method-link' onclick='routeToFreeMinting()'>[Free Minting]</span> menu on the homepage`,
  tabs_1_content_40: `Squid Game Card NFT form: 3 ‘Hangul’ initials + 8 numbers`,
  tabs_1_content_41: `<span class='minting-method-link' onclick='routeToFreeMinting()'>Go Free Minting now! </span>`,

  tabs_2_content_1: `<strong>Project Concept and Vision</strong> `,
  tabs_2_content_2: `The Squid Game Card NFT project aims to build a decentralized blockchain based Squid Game Metaverse by fairly distributing NFT and ERC20 token, LEEDO, around the community.`,
  tabs_2_content_3: `We want to provide a suitable technical environment and community fund for development teams that want to provide applications such as games, Gamified DeFi, Community, and Commerce, which are components of the Squid Game Metaverse.`,
  tabs_2_content_4: `New projects are discovered and financially supported based on the community to create a decentralized game ecosystem`,
  tabs_2_content_5: `It not only distributes all economic resources fairly, but also ensures long-term dispersion and balance.`,
  tabs_2_content_6: `The consonants of ‘Hangul’, invented to express all sounds, are used as the symbol system for the building blocks of the metaverse.`,
  tabs_2_content_7: `It provides various modular building blocks for developing secure and flexible decentralized games and services, and Metaverse UX.`,
  tabs_2_content_8: `<strong>Squid Game Metaverse Economy Design</strong>`,
  tabs_2_content_9: `<strong>NFT Minting</strong> `,
  tabs_2_content_10: `<b>Participation Eligibility:</b> Anyone`,
  tabs_2_content_11: `<b>Price:</b> Free (Gas fee paid by users)`,
  tabs_2_content_12: `<b>Total amount that can be minted:</b> 9,576 cards`,
  tabs_2_content_13: `<b>Distribution method:</b> Individual participants directly mint 456 Squid Game Cards per round`,
  tabs_2_content_14: `<b>Round composition:</b> 20 participant rounds (#11~#9120) and one developer round (#9121~#9,576)`,
  tabs_2_content_15: `<b>Developer Setup Card:</b> Issue a total of 10 cards (#1~#10) when deploying the contract`,
  tabs_2_content_16: `<b>Round process method:</b> When one round ends, the next round starts after a round break of 6 hours.`,
  tabs_2_content_17: `<b>Squid Game Card NFT form:</b> 3 ‘Hangul’ initials + 8 numbers`,
  tabs_2_content_18: `<b>Card verification method:</b> After confirming the issuance transaction, connect the Ethereum wallet used for the issuance transaction to the OpenSea site and check in the [Profile] menu`,
  tabs_2_content_19: `For details on how to participate in the event, refer to the video in the [Minting Method] menu on the homepage`,
  tabs_2_content_20: `<strong>LEEDO(ERC20) Distribution</strong>`,
  tabs_2_content_21: `LEEDO is the currency used in the Squid Game Card Metaverse and supports the ERC20 standard. 700,000,000 of this currency will be issued for Season 0, and 300,000,000 for Season 1 will be issued. Additional issuance may be issued by the decision of the DAO to be formed in the future.`,
  tabs_2_content_22: `<b>1. LEEDO Token Main Usage</b>`,
  tabs_2_content_23: `The main usages of LEEDO issued in Season 0 are,`,
  tabs_2_content_24: `‘Migration Settlement Aid’ and ‘Basic Income’, which are provided free of charge for use in Metaverse`,
  tabs_2_content_25: `'Community fund' to be used by the decision of the DAO within the Metaverse`,
  tabs_2_content_26: `Play-to-Earn subsidy to support gamers who engage in game activities that are valuable to existing residents to bring new migrants into the Metaverse`,
  tabs_2_content_27: `‘Liquidity supply fund’ used for liquidity pools of LEEDO tokens through DEX (Uniswap, etc.)`,
  tabs_2_content_28: `‘Metaverse development reserve’ to cover various expenses necessary before DAO is formed`,
  tabs_2_content_29: `Game developer Grant`,
  tabs_2_content_30: `<b>2. LEEDO Token Allocation</b>`,
  tabs_2_content_31: `Distribution of LEEDO to be issued is as follows: Some of these will become claimable according to the payment schedule once individual cards are checked into the Metaverse, and will be issued at the time of the user's claim. However, DAO-controlled funds exist in the DAO’s ‘budget’ status with ‘issuable’ status and will not be issued unless the DAO executes them. Therefore, the final issuance of Season 0 may be less than 700,000,000.`,
  tabs_2_content_32: `One of the important features of the Squid Game Card project's ERC20 distribution plan is that development team rewards are not allocated separately. The way the development team can acquire LEEDO is to check in at the 'check-in counter' like other holders, using the minted NFT among the NFTs allocated in the 21st round, and receive 'Migration Settlement Aid’ and 'Basic Income' `,
  tabs_2_content_33: `However, the LEEDO token, which will be used as expenses for the project for the next 2-3 months, which will be required for the development of the DAO contract and the composition of the DAO, is temporarily controlled by the development team, and the expenditure record will be completely on the blockchain. The remaining budget goes to the fund controlled by the DAO once the DAO is formed.`,
  tabs_2_content_34: `<strong>DAO Fund Allocation</strong>`,
  tabs_2_content_35: `To be announced`,

  tabs_4_content_1: `<b>Connect your wallet to make a claim (minting)</b>`,
  tabs_4_content_2: `Connect wallet`,
  tabs_4_content_3: `<b>Squid Game Card contract address : </b><span class='nft-address'></span>`,
  tabs_4_content_4: `<b>My address : </b><span class='account-address'></span>`,
  tabs_4_content_5: `Minting Now`,
  tabs_4_content_6: `If you do not want to connect your wallet to the Squid Game Card homepage, you can make a claim (minting) by directly connecting to Etherscan.`,
  tabs_4_content_7: `<b> Free minting is over! </b>`,
  tabs_4_content_8: `<b>Making a claim(minting) on Etherscan</b>`,
  tabs_4_content_9: `<b>Minting Contract :</b> <a style='color: blue; text-decoration:underline;' target='_blank' href='https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract'>https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract</a>`,
  tabs_4_content_10: `Make sure you are in ETH Mainnet chain.`,
  tabs_4_content_11: `Select a wallet you want (Metamask or any Dapp wallet).`,
  tabs_4_content_12: `Get to the contract <b>[Read]</b> page, <a target='_blank' href='https://etherscan.io/address/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f#readContrac'>https://etherscan.io/address/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f#readContrac</a>`,
  tabs_4_content_13: `You can check if you can claim by clicking the <b>[isMintable](13)</b> button first. If it says, “True”, you can claim. If it says ‘False’, wait until the next round starts. The next round  starting time will be posted on Twitter(https://twitter.com/GoSquidGame)`,
  tabs_4_content_14: `Get to the claim page,   <a target='_blank' href='https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract'>https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract</a>`,
  tabs_4_content_15: `Click “Connect to Web3”`,
  tabs_4_content_16: `Click the <b>[claim]</b>`,
  tabs_4_content_17: `Click the <b>[Write]</b> button.`,
  tabs_4_content_18: `See the confirmation dialog from the wallet. if the gas is not too high it means you can have it, just do the claim by confirming any dialog it says.`,
  tabs_4_content_19: `The fee of Squid Game Card NFT is 0 (zero) ETH. it is really giveaway project to see how it possible to go wide`,
  tabs_4_content_20: `Check out the OpenSea link, <a target='_blank' href='https://opensea.io/collection/squid-game-card-nft'>https://opensea.io/collection/squid-game-card-nft</a>`,
  tabs_4_content_21: `Every 456 cards are claimed, there will be a 6 hour round break. During the break, nobody can claim. The time lock is automatically handled by the contract.`,
  tabs_4_content_22: `There will be 21 rounds of 456 cards, totaling maximum 9,576 cards.`,
  tabs_4_content_23: `The contract owner claims the first 10 cards when deploying the contract, and can claim the last 456 cards with tokens id 9121 to 9576.`,

  tabs_5_content_1: `What is the Squid game card NFT ?`,
  tabs_5_content_2: `‘Squid Game Card’ is an NFT for infrastructure elements of Metaverse using blockchain.`,
  tabs_5_content_3: `The ‘Squid Game Card’ has 3 Hangul consonant properties and 8 numeric properties.`,
  tabs_5_content_4: `When you mint or purchase this card, it means that you are invited to the Squid Game Metaverse ecosystem.`,
  tabs_5_content_5: `What do the 'Korean consonants' and 8 number attributes on the squid game card mean?`,
  tabs_5_content_6: `It has no predefined meaning. It can be used in various meanings depending on the creative interpretation of the game's developers and users.`,
  tabs_5_content_7: `It is intentionally designed not to give any meaning to the attributes in order to promote endless creative imagination.`,
  tabs_5_content_8: `How can I get the ‘Squid Game Card’?`,
  tabs_5_content_9: `You can participate in the 20 rounds of Free Minting Round and pay the gas fee and mint it on [Free Minting] menu or the web3 page of the squid game card smart contract for free.`,
  tabs_5_content_10: `Users who are willing to buy the ‘Squid Game Card’ can obtain it by purchasing a card in OpenSea(https://opensea.io/collection/squid-game-card-nft).`,
  tabs_5_content_11: `Can I still issue squid game cards for free?`,
  tabs_5_content_12: `Yes! Since Free minting rounds of the Squid Game card are not over yet, anyone can mint it for free.`,
  tabs_5_content_13: `For detailed minting method, refer to [Free Minting] page.`,
  tabs_5_content_14: `Can I mint several at once?`,
  tabs_5_content_15: `No! Only one squid game card can be minted at a time on [Free Minting] menu or Etherscan's squid game smart contract web3 page. There is no limit to the number of cards that one person can mint.`,
  tabs_5_content_16: `After minting or purchasing a Squid Game card, where can I view it?`,
  tabs_5_content_17: `Since the Squid Game Card NFT is registered on the OpenSea Marketplace, you can check the minted or purchased Squid Game card in the [Profile] menu of your account by connecting the wallet such as the metamask used for issuing it to the OpenSea site.`,
  tabs_5_content_18: `Where is the 'Squid Game Card' used?`,
  tabs_5_content_19: `In the Squid Metaverse, use with an 'invitation ticket' for dApps that require 'specific card possession' as a condition of participation, or`,
  tabs_5_content_20: `It can be combined with other smart contracts to transform or transform it into an 'item for a specific purpose', or`,
  tabs_5_content_21: `It will be used to exchange tokens owned by other users within the Squid Metaverse.`,
  tabs_5_content_22: `Can I create a game or community with the 'Squid Game Card'?`,
  tabs_5_content_23: `Of course. For users who have 'Squid Game Card', you can create your own game or community application by independently assigning qualitative characteristics to the attributes assigned to 'Korean consonants' and 'numbers' of the 'Squid Game Card'.`,
  tabs_5_content_24: `If only 9,576 are minted, isn't it difficult for most people to have a squid game card?`,
  tabs_5_content_25: `The squid game expansion cards can be issued as an independent smart contract according to the needs of games or communities.`,
  tabs_5_content_26: `The 0th generation squid game card minted in step 1 is designed to issue a new squid game card of the next generation in the way of 'Breeding' from this.`,
  tabs_5_content_27: `Are the 11 attributes given to the squid game card enough?`,
  tabs_5_content_28: `11 attributes are enough to form a variety of combinations, but if more attributes are needed, new attributes can be added using the base seed (gene information) included in each NFT card.`,
  tabs_5_content_29: `How is the value of the Squid Game Card determined?`,
  tabs_5_content_30: `The value of the Squid Game card is not inherent in itself, but is given by the game or community created using this card.`,
  tabs_5_content_31: `However, since some attributes given to the squid game card are issued with their ‘rarity’ adjusted during the issuance stage, the frequency of attribute expression can be a factor that fundamentally affects value formation.`,
  tabs_5_content_32: `Oops. It's a surprise! I’m really frustrated at the huge gas fee to claim a card`,
  tabs_5_content_33: `One of the reasons why Etherscan shows abnormally high gas fees is that new cards cannot be claimed at that time (we call it ‘round break’).`,
  tabs_5_content_34: `20 rounds of 456 card claims are being executed successively but there are 6 hours of round break between two rounds. Check the ‘Countdown’ at the top of the home page to see when the next round starts.`,
  tabs_5_content_35: `If I draw a ‘○△□’ card, can I win 1 ETH prize?`,
  tabs_5_content_36: `No. A card is randomly selected out of 456 cards in each round and if the card is ‘○△□’ then 1 ETH prize is awarded to the card’s hodler.`,
  tabs_5_content_37: `If I draw a ‘○○○’ or a ‘ㄱㄱㄱ’ card, can I win 5 ETH prize?`,
  tabs_5_content_38: `No. A card is randomly selected out of 456 cards in each round and if the card has same three consonants, such as ‘○○○’ and also there has been no 5 ETH prize winner by this time then its hodler can receive 5 ETH prize.`,
  tabs_5_content_39: `If 5 ETH prize awarded before, the hodler receives 1 ETH prize.`,
  tabs_5_content_add_matic_network:
    "How to add Matic Polygon Mainnet to Metamask wallet.",
  tabs_5_content_add_matic_network_1:
    "To add Polygon’s Mainnet, click on the Network selection dropdown and then click on Custom RPC.",
  tabs_5_content_add_matic_network_2:
    "Matic Polygon Mainnet Network Information",
  tabs_5_content_add_matic_network_3:
    "<b>Network Name : Matic Polygon Mainnet<br>New RPC URL : https://polygon-rpc.com/<br>Chain ID : 137<br>Currency Symbol : MATIC<br>Block Explorer URL : https://polygonscan.com/<b>",
  tabs_5_content_add_matic_network_4:
    "Once you’ve added the information click on Save. You will be directly switched to Polygon’s Mainnet now in the network dropdown list. ",

  tabs_6_content_1: `<strong>Technical Structure of Squid Game Metaverse</strong>`,
  tabs_6_content_2: `Squid Game Metaverse effectively and flexibly combines various technical resources developed in the blockchain ecosystem with the technical framework for existing web and mobile development environments.<br>Starting with the Ethereum mainnet, it will later expand to scaling chains including Polygon and Layer-2 chains.`,
  tabs_6_content_3: `<b>Platform :</b> Ethereum Mainnet, Ethereum Layer-2 chain, NFT/FT Bridge, Metaverse Oracle`,
  tabs_6_content_4: `<b>Application Environment :</b> Ethereum Smart Contract, Off-chain verifiable computation`,
  tabs_6_content_5: `<b>Key management Infrastructure :</b> Easy Tools for Metaverse Game wallet`,

  tabs_7_content_1: `LEEDO Token Payment Plan for Metaverse Check-in Squid Game Card`,
  tabs_7_content_2: `<b>1. Basic Principles of LEEDO Token Allocation and Payment for Check-in Cards</b>`,
  tabs_7_content_3: `‘Migrant Settlement Aid (NFT Holder One Time Bonus)’ and ‘Basic Income (Staking Rewards)’ are paid only for the checked-in card`,
  tabs_7_content_4: `The amount of 'Migration Settlement Aid' allocated to the checked-in card depends on calculation using the card's 'characteristic' (a combination of 3 Hangul consonants + 8 numbers), the issued order (within 10, within 100, within 1,000), and the order of claims.`,
  tabs_7_content_5: `The amount of 'Basic Income' will be paid about 34 LEEDO tokens daily for all cards (which may change according to the change in the Ethereum block cycle. To be precise, 0.00511409803 LEEDO per block per card), regardless of card attributes, issuance order, or check-in order. The same amount will be paid during the check-in period. If you check-in first, you will receive more rewards than others who haven't checked in yet.`,
  tabs_7_content_6: `Allocated LEEDO tokens will be paid by the claim of the card holder. (Gas fee is paid by oneself)`,
  tabs_7_content_7: `If you check out cards or check in a new card, the LEEDO allocated up to that time will be paid`,
  tabs_7_content_8: `<b>2. Allocation and payment of migrant settlement aid</b>`,
  tabs_7_content_9: `The formula for determining the amount of the resettlement aid is as follows.`,
  tabs_7_content_10: `geneSSum * tokenIdFactor * consFactor * timeFactor) / 2000`,
  tabs_7_content_11: `<b>geneSSum</b>`,
  tabs_7_content_12: `geneSSum is according to the 8-digit trait assigned to each card, and is calculated by the ‘sum of squares of each number’. For example, if the 8-digit is 1234 5678, (1)^2 + (2)^2 + (3)^2 + (4)^2 + (5)^2 + (6)^2 + (7)^2 + ( 8)^2 = 204. However, if geneSSum is less than 100, 100 is applied.`,
  tabs_7_content_13: `<b>tokenIdFactor</b>`,
  tabs_7_content_14: `The tokenIdFactor provides an incentive to the card issued earlier since tokenId reflects the issuance order. If the tokenId is less than 100, apply 200, if it is more than 1,000, use 100, and if it is greater than 100 and less than 1,000, 150 is applied.`,
  tabs_7_content_15: `<b>consFactor</b>`,
  tabs_7_content_16: `consFactor is based on the combination of 3 Hangul consonants of each token. 'ㅇ△ㅁ' card is 2. All the same consonants of 'ㅇ', '△', 'ㅁ' card is 5, Cards containing two of the same 'ㅇ', '△', and 'ㅁ' are applied as 3, and 1 is applied for other cards.`,
  tabs_7_content_17: `<b>timeFactor</b>`,
  tabs_7_content_18: `timeFactor is according to the check-in order, and 250 is given to the 1st place, 100 is given to the 9,576th. In between, a linear function is applied to reduce it linearly.`,
  tabs_7_content_19: `<b>The payment of the resettlement aid is paid by claim 31 days after the check-in cards remain unchanged. If you add a card midway or check out, you will have to wait another 31 days from that.</b>`,
  tabs_7_content_20: `<b>3. Allocation and payment of ‘basic income’</b>`,
  tabs_7_content_21: `Basic income is allocated approximately 34 per card per day during the check-in period. (Exactly 0.00511409803 LEEDO per block per card)`,
  tabs_7_content_22: `The payment of basic income will be paid to the holder's wallet address upon claim of the LEEDO token by the holder or a change in the number of checked-in cards (check-in or check-out of some or all cards)`,
  tabs_7_content_23: `The ‘basic income’ payment period for Season 0 is set to a maximum of 365 days, but may be extended by the DAO’s decision taking into account the remaining amount of allocated tokens.`,

  tabs_8_content_1: `<b>Connect your wallet</b>`,
  tabs_8_content_2: `Connect wallet`,
  tabs_8_content_3: `The check-in counter is open.<br> Please check in by presenting your squid game card at the check-in counter. Check-in is at your own risk and no one is forcing you to check-in.<br><br> All checked-in cards will receive basic income currency that will be used in Metaverse world. Please check out the <span class='minting-method-link' onclick='routeToOverview()'>About LEEDO</span> tab for how much basic income will be provided per card. You can return at any time after the Metaverse migration at your own discretion. There is no penalty for mid-return.<br><br>                                 Also, migration settlement support is provided once per squid game card. The quota for the grant is very different from card to card and will be paid out in blocks of 200,000, or approximately 31 days after check-in. However, please note that if the number of cards you checked in changes, you will have to wait another 31 days.<br><br>                                 For more details, please refer to the <span class='minting-method-link' onclick='routeToLeedo()'>LEEDO Token Payment Plan for Squid Game Card Metaverse Check-in Card</span> tab and we will see you inside.`,
  tabs_8_content_4: `<b>Squid Game Card Check-in status</b>`,
  tabs_8_content_5: `<b>Squid Game Card contract address : </b>`,
  tabs_8_content_6: `<b>Squid Game Card Staking contract address : </b>`,
  tabs_8_content_7: `<b>LEEDO ERC20 token contract address : </b>`,
  tabs_8_content_8: `<b>Add LEEDO to wallet</b>`,
  tabs_8_content_9: `<b>My address : </b>`,
  tabs_8_content_10: `<b>LEEDO</b>`,
  tabs_8_content_11: `<b>Rewards</b>`,
  tabs_8_content_12: `<b><span class='erc20-rewards'></span></b>`,
  tabs_8_content_13: `Claimed rewards`,
  tabs_8_content_14: `<b>Unstaked Cards</b>`,
  tabs_8_content_15: `cards`,
  tabs_8_content_16: `<b>Staked Cards</b>`,
  tabs_8_content_17: `cards`,
  tabs_8_content_18: `Available for staking`,
  tabs_8_content_19: `Staked`,
  tabs_8_content_network_info:
    "Check your wallet is connected to the Ethereum Mainnet.<br>To Use Check-in counter, please switch to Ethereum Mainnet.",
  tabs_8_one_time_bonus: "<b>Migrant Settlement Aid</b>",
  tabs_8_one_time_bonus_claim: "<b>Claiming Migrant Settlement Aid</b>",
  tabs_8_one_time_bonus_info:
    "Migration Settlement Aid for staking cards can be claimed once per card.",

  tabs_9_content_1: "<b>Leedorian Metaverse contract address : </b>",
  tabs_9_content_2: `<b>LEEDO ERC20 token contract address : </b>`,
  tabs_9_content_welcome: "<b>Welcome to the Leedorian metaverse!</b>",
  tabs_9_content_info:
    "Built on a planet that can use gas hundreds of times a day, away from the Ethereum mainnet polluted by high gas bills, the Leedorian metaverse will give you unlimited freedom.<br>It's free, but it can still be boring. Because there is no game yet.<br> A game center for numerous games is under construction. Once the game center is complete, anyone can easily create games, earn money from their games, and earn money by participating in games.<br>For the day when everyone can enjoy the real freedom of not using up the LEEDO that keeps accumulating in the wallet!<br><br><b>Long live Leedorian!</b>",
  tabs_9_content_network_info:
    "Check your wallet is connected to the Matic Polygon Mainnet.<br>To Use Leedorian Metaverse, please switch to Matic Polygon Mainnet.<br>Please refer to the FAQ on how to add a network to your Metamask wallet.",

  tabs_10_title: "Leedo DAO",
  tabs_10_content_1: "<strong>Leedo DAO takes over the project now!</strong>",
  tabs_10_content_2:
    "We have successfully launched Leedo DAO on December 30, 2021 (UTC) with 82% of participation rate based on the LEEDO token circulation. ",
  tabs_10_content_3: "View Snapshot Voting Results",
  tabs_10_content_4:
    "(1) The Leedo DAO manages all protocol owned assets and is responsible execution of managerial contract transactions to update protocol and contract parameters. ",
  tabs_10_content_5:
    "(2) The DAO system consists of two main parts, (a) DAO multisig contract and (b) Snapshot off-chain LEEDO token voting system. ",
  tabs_10_content_6:
    "(3) All important matters of Leedo Projects will be decided by the Snapshot votes. ",
  tabs_10_content_7:
    "(4) The multisig contract will execute the vote result on all LEEDO project smart contracts. ",
  tabs_10_content_8:
    "(5) The multisig contract has initial 9 signers who have been selected by internal communications among the most active community members and the largest NFT and LEEDO token holders. ",
  tabs_10_content_9:
    "(6) The multisig contract needs 5 of 9 signers’ confirmations to execute any transactions. ",
  tabs_10_content_10: "(7) Initial DAO multisig contract signers:",

  tabs_10_content_11:
    "(8) The initial signers can be replaced by Snapshot vote or signers’ own decision.",
  tabs_10_content_12: "Ethereum Multisig",
  tabs_10_content_13:
    "https://gnosis-safe.io/app/eth:0xD159e1FFE53d18Aa149696c97185057CC13BD129",
  tabs_10_content_14: "Polygon Multisig",
  tabs_10_content_15:
    "https://gnosis-safe.io/app/matic:0xa7201253179eDDdf7C42A76b22eae4A8654073bc",
};

$.lang.ko = {
  button_lang: "en",

  tabs_1: "현재 진행 중인 이벤트",
  tabs_2: "개요",
  tabs_3: "로드맵",
  tabs_4: "Free Minting",
  tabs_5: "FAQ",
  tabs_6: "구조",
  tabs_7: "LEEDO Plan",
  tabs_8: "체크인 카운터",
  tabs_9: "Leedorian 메타버스",

  tabs_1_content_1: `<strong>Round Winners !!</strong>`,
  tabs_1_content_2: `승자는 SQUID 토큰 발행 이벤트 후 100,000 SQUID ERC20 토큰을 받을 수 있습니다.`,
  tabs_1_content_3: `또한 2, 7, 9, 10, 12, 17 라운드의 승자에게는 1 ETH가 수여되었습니다.`,
  tabs_1_content_4: `<strong>Squid Game Card AMA(Ask Me Anything) Session</strong>`,
  tabs_1_content_5: `<Strong>1. 일시</Strong>`,
  tabs_1_content_6: `October 27, 11:00 PM Seoul`,
  tabs_1_content_7: `October 27, 10:00 AM New York`,
  tabs_1_content_8: `October 27, 2:00 PM GMT`,
  tabs_1_content_9: `<Strong>2. 참석 대상</Strong>`,
  tabs_1_content_10: `누구나`,
  tabs_1_content_11: `<Strong>3. 주요 질의 내용(Discord)</Strong>`,
  tabs_1_content_12: `ERC20토큰 발행량은 얼마인가요?`,
  tabs_1_content_13: `ERC20토큰을 어디다 사용할수있나요?`,
  tabs_1_content_14: `유니스왑에서 초기가격을 얼마로 책정하나요?`,
  tabs_1_content_15: `NFT카드 스테이킹은 랭킹? 희귀성에 따라 지급되는 ERC20토큰이 차이가 있나요?`,
  tabs_1_content_16: `현재 개발중인 게임이 있나요? 있다면 언제쯤 발표되나요?`,
  tabs_1_content_17: `프로젝트에 다음 계획은 뭔가요?`,
  tabs_1_content_18: `ERC20 런칭 이벤트는 뭔가요?`,
  tabs_1_content_19: `100개 이상 민팅시 주어지는 NFT는 어떤건가요?`,
  tabs_1_content_20: `해외사용자(필리핀, 베트남 등) 유치를 위해서 facebook 커뮤니티를 활성화할 계획이 있나요?`,
  tabs_1_content_21: `<strong><span style='color: rosybrown;'>[이벤트 종료]</span> Who is the Last Survivor?</strong> `,
  tabs_1_content_22: `>각 라운드별 456개의 카드 중 1개 무작위 추출<strong>(체인링크 오라클이 제공하는 랜덤 시드를 이용해 무작위 추출)</strong>, 총 20명의 winner.`,
  tabs_1_content_23: `모든 winner 상품 : winner card 당 <strong>100,000개 SQUID(ERC20)</strong> Token 지급.`,
  tabs_1_content_24: `<strong>Ojingeo Bonus: </strong> `,
  tabs_1_content_25: `각 라운드별 Winner card가 <span class='hangul'>‘&#12615; &#12671; &#12609;’</span>인 경우, <strong>1 ETH</strong> 추가 지급. ( 5라운드 이후 적용 )`,
  tabs_1_content_26: `<strong>Grand winner Bonus: </strong>`,
  tabs_1_content_27: `Winner card가 <span class='hangul'>‘ &#12609;  &#12609;  &#12609;’</span>와 같이 3개의 같은 자음으로 이루어진 경우,   5라운드 이후 최초 winner에게 <Strong>5 ETH</Strong> 추가 지급.<br>  1회에 한하여 지급하므로, 앞선 라운드에서 당첨자가 나와 상금이 지급되고 나면, 후속 라운드에서 해당 조건을 충족하면 1 ETH만 지급.`,
  tabs_1_content_28: `ETH 당첨금은 컨트랙에 의해 자동 지급.`,
  tabs_1_content_29: `SQUID 당첨금은 SQUID Token 발행 후 개별적으로 클레임(클레임 방법은 추후 공지).`,
  tabs_1_content_30: `<strong><span style='color: rosybrown;'>[이벤트 종료]</span> Squid Game Card NFT Free Minting</strong> `,
  tabs_1_content_31: `<Strong>참여 자격:</Strong> 누구나`,
  tabs_1_content_32: `<Strong>가격:</Strong> 무료(Gas fee 본인 부담)`,
  tabs_1_content_33: `<Strong>발행 가능한 총량:</Strong> 9,576개`,
  tabs_1_content_34: `<Strong>분배 방식:</Strong> 1 라운드 당 456개의 Squid Game Card를 개별 참여자가 직접 발행`,
  tabs_1_content_35: `<Strong>라운드 구성:</Strong> 20개의 참여자 라운드(#11~#9120)와 1회의 개발자 라운드(#9121~#9576)로 구성`,
  tabs_1_content_36: `<Strong>개발자 설정 카드 :</Strong> 계약 전개 시 총 10장(#1~#10) 발급`,
  tabs_1_content_37: `<Strong>라운드 진행 방식:</Strong> 1개 라운드가 종료되면 6시간의 Round Break 후 다음 라운드 시작`,
  tabs_1_content_38: `<Strong>카드 확인 방법:</Strong> 발행 트랜잭션 컨펌 후, OpenSea 사이트에 발행 트랜잭션 때 이용한 이더리움 지갑을 연결하여 [Profile] Menu에서 확인`,
  tabs_1_content_39: `자세한 이벤트 참여 방법은 홈페이지의 <span class='minting-method-link' onclick='routeToFreeMinting()'>[Free Minting]</span> 메뉴의 동영상 참조`,
  tabs_1_content_40: `Squid Game Card NFT의 형태 : ‘한글’ 초성 3개 + 8개의 숫자`,
  tabs_1_content_41: `<span class='minting-method-link' onclick='routeToFreeMinting()'>Go Free Minting now! </span>`,

  tabs_2_content_1: `<strong>프로젝트 개념과 비전</strong>`,
  tabs_2_content_2: `Squid Game Card NFT 프로젝트는 Community를 중심으로 NFT와 ERC20 Token인 LEEDO를 분배하여 탈중앙화된 Squid Game Metaverse의 구축을 목표로 합니다.`,
  tabs_2_content_3: `Squid Game Metaverse의 구성요소인 Game과 Gamified DeFi, Community, Commerce 등의 Application을 제공하려는 개발팀에 대해 적합한 기술적 환경과 Community Fund를 공급하고자 합니다.`,
  tabs_2_content_4: `커뮤니티를 기반으로 새로운 프로젝트가 발굴되고 재정적으로 뒷받침 되어 탈중앙화된 게임 생태계를 만듭니다.`,
  tabs_2_content_5: `모든 경제적 자원을 공정하게 분배할 뿐 아니라 장기적으로 분산과 균형이 지속될 수 있도록 합니다.`,
  tabs_2_content_6: `모든 소리를 표현할 수 있도록 발명된 ‘한글’의 자음을 메타버스의 빌딩블록을 위한 기호 체계로 사용합니다.`,
  tabs_2_content_7: `안전하고 편리한 탈중앙화된 게임과 서비스, Metaverse UX를 개발하기 위한 각종의 모듈화된 빌딩블록을 제공합니다.`,
  tabs_2_content_8: `<strong>Squid Game Metaverse Economy Design</strong>`,
  tabs_2_content_9: `<strong>NFT Minting</strong>`,
  tabs_2_content_10: `<b>참여자격:</b> 누구나`,
  tabs_2_content_11: `<b>가격:</b> 무료(Gas fee 본인 부담)`,
  tabs_2_content_12: `<b>발행 가능한 총량:</b> 9,576개`,
  tabs_2_content_13: `<b>분배 방식:</b> 1 라운드 당 456개의 Squid Game Card를 개별 참여자가 직접 발행`,
  tabs_2_content_14: `<b>라운드 구성:</b> 20개의 참여자 라운드(#11~#9120)와 1회의 개발자 라운드(#9121~#9576)로 구성`,
  tabs_2_content_15: `<b>개발자 셋업 카드:</b> 1번에서 10번까지의 열 장의 카드가 컨트랙트의 출시와 함께 발행되었습니다.`,
  tabs_2_content_16: `<b>라운드 진행 방식:</b> 1개 라운드가 종료되면 6시간의 Round Break 후 다음 라운드 시작`,
  tabs_2_content_17: `<b>Squid Game Card NFT의 형태:</b> ‘한글’ 초성 3개 + 8개의 숫자`,
  tabs_2_content_18: `<b>카드 확인 방법:</b> 발행 트랜잭션 컨펌 후, OpenSea 사이트에 발행 트랜잭션 때 이용한 이더리움 지갑을 연결하여 [Profile] 메뉴에서 확인`,
  tabs_2_content_19: `자세한 이벤트 참여 방법은 홈페이지의 [Minting Method] 메뉴의 동영상 참조`,
  tabs_2_content_20: `<strong>LEEDO(ERC20) Distribution</strong>`,
  tabs_2_content_21: `LEEDO는 Squid Game Card 메타버스에서 사용되는 화폐로 ERC20 규격을 지원합니다. 이 화폐는 Season 0 700,000,000개가  발행되며, Season 1 300,000,000개가   발행될 예정입니다. 향후 구성될 DAO의 결정에 의해 추가 발행될 수 있습니다.`,
  tabs_2_content_22: `<b>1. LEEDO 토큰의 주요 용도</b>`,
  tabs_2_content_23: `Season 0에서 발행되는 LEEDO의 주요 용도는,`,
  tabs_2_content_24: `메타버스로 체크인하는 이주자들에게 메타버스 내에서 필요한 요소들을 획득하는 지불 수단으로 무상으로 지급되는 ‘이주정착 지원금’과 ‘기본 소득’ 용도와`,
  tabs_2_content_25: `메타버스 내의 인프라와 도구, 콘텐츠 등이 원활하게 공급되게 하기 위해 DAO의 결정에 의해 사용하게 되는 ‘커뮤니티 펀드’`,
  tabs_2_content_26: `메타버스 내로 새로운 이주민을 유입시키고 훈련과 소득을 지원하기 위해, 기존 주민들에게 가치있는 게임 활동을 하는 게이머들에게 지원하는 Play-to-Earn 지원금`,
  tabs_2_content_27: `LEEDO 토큰의 DEX(Uniswap 등)를 통한 유통을 위해 사용되는 ‘유동성 공급 펀드’`,
  tabs_2_content_28: `DAO 구성 전까지 필요한 각종 비용을 충당하기 위한 ‘메타버스 개발 준비금’`,
  tabs_2_content_29: `게임개발자 지원금`,
  tabs_2_content_30: `<b>2. LEEDO의 용도에 따른 할당</b>`,
  tabs_2_content_31: `발행 예정된 LEEDO의 양적 분배는 다음과 같습니다. 이 중 일부는 개별 카드가 메타버스로 체크인되면 지급 스케쥴에 따라 클레임하여 찾아갈 수 있는 상태가 되며, 사용자의 클레임 시점에 발행됩니다. 그러나 DAO가 통제하는 펀드는 ‘발행 가능’ 상태로 DAO의 ‘예산’ 상태로 존재하며, DAO가 이를 집행하지 않으면 발행되지 않습니다. 따라서 Season 0 최종 발행량은 700,000,000개  보다 작을 수 있습니다.`,
  tabs_2_content_32: `Squid Game Card 프로젝트의 ERC20 분배 계획의 중요한 특징 중 하나는, 개발팀 리워드가 따로 할당되지 않는다는 점입니다. 개발팀이 LEEDO를 획득할 수 있는 방법은, 21 라운드에 배정받은 NFT 중 민팅한 NFT를 이용하여, 다른 홀더들과 마찬가지로 ‘체크인 카운터’에 체크인하여 ‘이주 정착지원금’과 ‘기본 소득’을 받는 것 외에는 허용되지 않습니다.`,
  tabs_2_content_33: `다만, DAO 컨트랙의 개발과 DAO의 구성 등에 소요될 약 2~3개월의 시간 동안 프로젝트를 위해 사용될 비용으로 쓰기 위한 LEEDO 토큰은 일시적으로 개발팀이 통제하여 지출되며 그 지출 기록은 완전하게 블록체인 상에 공개됩니다. 남은 예산은 DAO가 구성되면 DAO가 통제하는 펀드로 귀속됩니다.`,
  tabs_2_content_34: `<strong>DAO Fund Allocation</strong>`,
  tabs_2_content_35: `곧 발표 예정입니다.`,

  tabs_4_content_1: `<b>지갑 연결하여 Claim(Minting) 하기</b>`,
  tabs_4_content_2: `지갑 연결하기`,
  tabs_4_content_3: `<b>Squid Game Card 컨트랙 주소 : </b><span class='nft-address'></span>`,
  tabs_4_content_4: `<b>내 주소 : </b><span class='account-address'></span>`,
  tabs_4_content_5: `Minting Now`,
  tabs_4_content_6: `Squid Game Card 홈페이지에 지갑 연결을 원하지 않는 경우 Etherscan에 직접 연결하여 Claim (Minting) 할 수 있습니다.`,
  tabs_4_content_7: `<b> Free minting 종료! </b>`,
  tabs_4_content_8: `<b>Etherscan 에서 claim(minting) 하기</b>`,
  tabs_4_content_9: `<b>Minting Contract :</b> <a style='color: blue; text-decoration:underline;' target='_blank' href='https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract'>https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract</a>`,
  tabs_4_content_10: `지갑이 ETH 메인넷 체인에 연결되어 있는지 확인하십시오.`,
  tabs_4_content_11: `원하는 지갑(Metamask 또는 Dapp 지갑)을 선택합니다.`,
  tabs_4_content_12: `contract <b>[Read]</b>페이지로 이동합니다. <a target='_blank' href='https://etherscan.io/address/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f#readContrac'>https://etherscan.io/address/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f#readContrac</a>`,
  tabs_4_content_13: `먼저 <b>[isMintable](13)</b> 버튼을 클릭하면 청구 가능 여부를 확인할 수 있습니다. 'True' 라고 표시되면 주장할 수 있습니다. 'False'이면 다음 라운드가 시작될 때까지 기다리세요. 다음 라운드 시작 시간은 Twitter(https://twitter.com/GoSquidGame)에 게시됩니다.`,
  tabs_4_content_14: `[claim] 페이지로 이동합니다.<a target='_blank' href='https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract'>https://etherscan.io/token/0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f#writeContract</a>`,
  tabs_4_content_15: `"Connect to Web3"을 클릭합니다.`,
  tabs_4_content_16: `<b>[claim]</b> 클릭`,
  tabs_4_content_17: `<b>[Write]</b> 버튼을 클릭하세요.`,
  tabs_4_content_18: `지갑에서 [확인] 팝어의 내용을 참조하십시오. 가스가 너무 높지 않다면 발행할 수 있음을 의미합니다. 표시된 대화를 확인하여 ‘claim’을 수행하십시오.`,
  tabs_4_content_19: `오징어 게임 카드 NFT의 수수료는 0 ETH입니다. 널리 퍼지는 것을 목적으로 하는 무료 발행 프로젝트입니다.`,
  tabs_4_content_20: `OpenSea 링크를 확인하십시오.<a target="_blank" href="https://opensea.io/collection/squid-game-card-nft">https://opensea.io/collection/squid-game-card-nft</a>`,
  tabs_4_content_21: `456장의 카드가 청구될 때마다 6시간의 라운드 휴식 시간이 있습니다. 휴식 시간에는 아무도 청구할 수 없습니다. 시간 잠금은 Smart Contract에 의해 자동으로 처리됩니다.`,
  tabs_4_content_22: `총 발행량은 456장 21라운드, 9,576장입니다.`,
  tabs_4_content_23: `스마트컨트랙 소유자는 컨트랙을 배포할 때 처음 10개의 카드를 발행하고, 토큰 ID가 9121에서 9576인 마지막 456개의 카드를 발행할 수 있습니다.`,

  tabs_5_content_1: `도대체 ‘오징어게임 카드’는 무엇인가요?`,
  tabs_5_content_2: `‘오징어게임 카드’는 블록체인을 이용한 메타버스 구성하기 위한 재료가 되는 NFT 토큰입니다.`,
  tabs_5_content_3: `‘오징어게임 카드’는 3개의 한글 자음으로 된 속성과 8개의 숫자로 된 속성을 가지고 있습니다.`,
  tabs_5_content_4: `여러분이 이 카드를 발행하여 수령하거나 구매하는 것은 여러분이 오징어게임 메타버스 생태계에 초대받는 것을 의미합니다.`,
  tabs_5_content_5: `오징어 게임 카드의 ‘한글 자음’과 8개 숫자 속성은 무엇을 의미하나요?`,
  tabs_5_content_6: `사전에 정의된 아무런 의미도 없습니다. 게임의 개발자와 사용자의 창의적 해석에 따라 다양한 의미로 사용될 수 있습니다.`,
  tabs_5_content_7: `상상력을 제한하지 않기 위해 의도적으로 사전에 의미를 부여하지 않도록 고안되었습니다.`,
  tabs_5_content_8: `오징어게임 카드’를 얻을 수 있는 방법은 무엇인가요?`,
  tabs_5_content_9: `여러분이 ‘오징어게임 카드’를 얻을 수 있는 방법은 Genesis Era 동안 20 라운드로 진행되는 Minting Round에 참여하여 gas fee를 부담하여 스스로 무료로 오징어게임 카드 홈페이지의 [Free Minting] 메뉴 또는 Etherscan web3 페이지에서 발행하거나`,
  tabs_5_content_10: `‘오징어게임 카드’를 팔 의향이 있는 사용자가 OpenSea 등의 마켓플레이스 등에 등록한 카드를 구매하여 얻을 수 있습니다.`,
  tabs_5_content_11: `지금도 오징어게임 카드를 무료로 발행할 수 있나요?`,
  tabs_5_content_12: `네! 아직 오징어게임 카드의 Genesis Era가 끝나지 않았으므로 누구나 무료로 발행할 수 있습니다.`,
  tabs_5_content_13: `자세한 발행 방법은 ‘NFT 발행 방법’을 참고하세요.`,
  tabs_5_content_14: `한번에 여러개씩 발행할 수도 있나요?`,
  tabs_5_content_15: `아니오! 오징어게임 카드는 홈페이지의 [Free Minting] 메뉴 또는 Etherscan의 오징어게임 스마트컨트랙 web3 페이지에서 한번에 1개씩만 발행할 수 있습니다. 한사람이 발행할 수 있는 갯수는 제한이 없습니다.`,
  tabs_5_content_16: `오징어게임 카드를 발행하거나 구매하고 나면 어디서 그 카드를 볼 수 있나요?`,
  tabs_5_content_17: `오징어게임 카드 NFT는 OpenSea Marketplace에 등록되어 있으므로, 발행할 때 사용한 메타마스크 등의 지갑을 OpenSea 사이트에 연결하면, 계정의 [Profile] 메뉴에서 발행 받거나 구매한 오징어게임 카드를 확인할 수 있습니다.`,
  tabs_5_content_18: `'오징어게임 카드'는 어디에 쓰는 건가요?`,
  tabs_5_content_19: `오징어 메타버스 내에서 '특정한 카드 소지'를 참여 조건으로 하는 서비스에 '초대권'과 같이 사용하거나`,
  tabs_5_content_20: `오징어 메타버스 내에서 다른 스마트 컨트랙과 결합하여 '특정 용도의 아이템'으로 변형 또는 변환하여 사용되거나`,
  tabs_5_content_21: `오징어 메타버스 내에서 다른 사용자가 가진 토큰과 교환하는 용도로 사용될 예정입니다.`,
  tabs_5_content_22: `'오징어게임 카드'로 게임이나 커뮤니티를 만들 수 있나요?`,
  tabs_5_content_23: `당연합니다. 여러분은 '오징어게임 카드'를 보유한 사용자들을 대상으로 '오징어게임 카드'의 '한글 자음'과 '숫자'로 부여된 속성에 독자적으로 질적 특성을 부여하여 각자의 게임이나 커뮤니티 등의 애플리케이션을 만들 수 있습니다.`,
  tabs_5_content_24: `9,576개만 발행된다면 대부분의 사람은 오징어게임 카드를 갖기 어렵지 않나요?`,
  tabs_5_content_25: `오징어게임 카드는 게임이나 커뮤니티를 만들면서 얼마든지 각자의 필요에 따라 독자적인 스마트컨트랙으로 확장 카드를 발행할 수 있습니다.`,
  tabs_5_content_26: `1단계에서 발행된 0세대 오징어게임 카드는 이로부터 'Breeding'의 방식으로 다음 세대의 새로운 오징어게임 카드를 발행할 수 있도록 설계되었습니다.`,
  tabs_5_content_27: `오징어 게임 카드에 부여된 11개 속성은 부족하지 않나요?`,
  tabs_5_content_28: `11개의 속성만으로도 충분히 다양한 조합을 구성할 수 있으나, 더많은 속성이 필요할 경우 각 NFT 카드에 포함된 Base seed(유전자 정보)를 이용해 새로운 속성을 추가할 수 있습니다`,
  tabs_5_content_29: `오징어 게임 카드의 가치는 어떻게 결정되나요?`,
  tabs_5_content_30: `오징어게임 카드의 가치는 그 자체에 내재된 것이 아니라, 이 카드를 이용하여 만들어지는 게임이나 커뮤니티에서 부여되는 것입니다.`,
  tabs_5_content_31: `다만 오징어게임 카드에 부여되는 일부 속성은 발행 단계에서 그 ‘희소성’이 조절되어 발행되므로 속성의 발현 빈도는 원천적으로 가치 형성에 영향을 주는 요소가 될 수 있습니다.`,
  tabs_5_content_32: `깜짝이야! 무료발행을 하려고 이더스캔에서 [claim]을 눌렀더니, 가스비가 어마어마해요 ㅠ`,
  tabs_5_content_33: `그렇게 높은 가스비가 트랜잭션 컨펌창에 나타난 이유는, 그 시점에 무료발행이 안된다는 뜻입니다.`,
  tabs_5_content_34: `무료 발행은 456개씩 20 라운드에 걸쳐 진행되는데, 한 라운드가 끝나면 6시간 동안 ‘라운드 브레이크’가 시작됩니다. 다음 라운드가 시작되는 시간을 확인하시려면 홈페이지 상단의 ‘카운트 다운’을 확인하세요.`,
  tabs_5_content_35: `‘○△□’ 카드를 뽑으면 1 이더 주는 건가요?`,
  tabs_5_content_36: `아닙니다. 1 이더를 받는 당첨자는 매 라운드 456개의 카드 중 한개씩 뽑는 당첨 카드로 뽑힌 상태에서, 그 당첨 카드가 ‘○△□’ 카드여야 합니다. `,
  tabs_5_content_37: `‘○○○’ 카드나 ‘ㄱㄱㄱ’ 같은 카드를 뽑으면 5 이더 주는 건가요?`,
  tabs_5_content_38: `아닙니다. 5 이더를 받는 당첨자는 아직 5 이더 당첨자가 나오지 않은 상태에서, 매 라운드 456개의 카드 중 한개씩 뽑는 당첨 카드로 뽑힌 당첨 카드가 ‘○○○’ 같은 세 자음이 동일한 카드여야 합니다.`,
  tabs_5_content_39: `이미 5 이더 당첨자가 나와서 5 이더를 받아갔다면, 라운드 당첨자가 된 ‘○○○’ 같이 세 자음이 동일한 카드는 1 이더의 당첨금을 받게 됩니다.`,
  tabs_5_content_add_matic_network:
    "메타마스크 지갑에 Matic Polygon Mainnet 추가하는 방법.",
  tabs_5_content_add_matic_network_1:
    "Polygon의 메인넷을 추가하려면 네트워크 선택 드롭다운을 클릭한 다음 사용자 지정 RPC를 클릭합니다.",
  tabs_5_content_add_matic_network_2: "Matic Polygon Mainnet 네트워크 정보",
  tabs_5_content_add_matic_network_3:
    "<b>Network Name : Matic Polygon Mainnet<br>New RPC URL : https://polygon-rpc.com/<br>Chain ID : 137<br>Currency Symbol : MATIC<br>Block Explorer URL : https://polygonscan.com/</b>",
  tabs_5_content_add_matic_network_4:
    "정보를 추가했으면 저장을 클릭합니다. 이제 네트워크 드롭다운 목록에서 Polygon의 메인넷으로 직접 전환됩니다.",

  tabs_6_content_1: `<strong>Technical Structure of Squid Game Metaverse</strong>`,
  tabs_6_content_2: `오징어게임 메타버스는 블록체인 생태계에서 개발된 다양한 기술 자원을 기존 웹 및 모바일 개발 환경을 위한 기술 프레임워크와 효과적이고 유연하게 결합합니다.<br>
                        이더리움 메인넷을 시작으로 추후 Polygon, Layer-2 체인 등 스케일링 체인으로 확장될 예정입니다.`,
  tabs_6_content_3: `<b>Platform :</b> Ethereum Mainnet, Ethereum Layer-2 chain, NFT/FT Bridge, Metaverse Oracle`,
  tabs_6_content_4: `<b>Application Environment :</b> Ethereum Smart Contract, Off-chain verifiable computation`,
  tabs_6_content_5: `<b>Key management Infrastructure :</b> Easy Tools for Metaverse Game wallet`,

  tabs_7_content_1: `Squid Game Card 메타버스 체크인 카드에 대한 LEEDO 토큰 지급 계획`,
  tabs_7_content_2: `<b>1. 체크인 카드에 대한 LEEDO 토큰 할당과 지급의 기본 원칙</b>`,
  tabs_7_content_3: `체크인한 카드에 대해서만 ‘이주정착 지원금(NFT Holder Season Bonus)’과 ‘기본소득(Staking Rewards)’을 지급한다. 체크인한 카드는 체크인 기간 동안 소유권이 이전되지 않는다(DAO에 의해 변경 가능)`,
  tabs_7_content_4: `체크인한 카드에 할당되는 ‘이주정착 지원금’의 양은 카드의 ‘형질’(3개 한글자음 조합 + 8개 숫자)과 발행된 순서(10번 이내, 100번 이내, 1,000번 내), 클레임 순서를 이용하여 계산된다.`,
  tabs_7_content_5: `‘기본 소득’의 양은 모든 카드에 대해 매일 34개(이더리움 블록주기 변화에 따라 변동될 수 있음. 정확히는 0.00511409803 LEEDO per block per card)가 지급되며, 카드의 속성이나 발행 순서, 체크인 순서에 상관없이 동일한 양이 체크인 기간 동안 지급된다. 체크인을 먼저 하면 먼저 한 기간만큼 보상을 더 받게 된다.`,
  tabs_7_content_6: `할당된 LEEDO 토큰은 카드 홀더의 클레임에 의해 지급된다.(가스비 본인 부담)`,
  tabs_7_content_7: `체크인된 카드를 체크아웃하거나 새로운 카드를 체크인하면, 그와 동시에 그때까지 할당된 LEEDO를 동시 지급한다.`,
  tabs_7_content_8: `<b>2. 이주정착 지원금의 할당과 지급</b>`,
  tabs_7_content_9: `이주정착 지원금 양의 결정식은 다음과 같다`,
  tabs_7_content_10: `geneSSum * tokenIdFactor * consFactor * timeFactor) / 2000`,
  tabs_7_content_11: `<b>geneSSum</b>`,
  tabs_7_content_12: `geneSSum은 각 카드에 할당된 8자리 숫자 형질에 따른 것으로, ‘각 숫자의 제곱합’에 의해 계산된다. 즉, 1234 5678 인 경우, (1)^2 + (2)^2 + (3)^2 + (4)^2 + (5)^2 + (6)^2 + (7)^2 + (8)^2 = 204. 다만 geneSSum이 100 보다 작으면 100을 적용한다.`,
  tabs_7_content_13: `<b>tokenIdFactor</b>`,
  tabs_7_content_14: `tokenIdFactor는 각 토큰의 Id가 발행된 순서를 반영하고 있다는 점에서, 선 발행된 카드에 인센티브를 제공한다. tokenId가 100번 이하인 경우는 200을, 1,000번 이상인 경우는 100을, 100 보다 크고 1,000 보다 작을 경우 150을 적용한다.`,
  tabs_7_content_15: `<b>consFactor</b>`,
  tabs_7_content_16: `consFactor는 각 토큰의 한글 자음 3개의 조합에 따른 것으로, ‘ㅇ△ㅁ’ 카드는 2, ‘ㅇ’, ‘△’, ‘ㅁ’이 ‘ㅇ△ㅁ’과 다른 순서로 조합된 카드는 5, ‘ㅇ’, ‘△’, ‘ㅁ’ 중 같은 것이 2개 포함된 카드는 3으로 적용하고, 그 외의 카드는 1을 적용한다.`,
  tabs_7_content_17: `<b>timeFactor</b>`,
  tabs_7_content_18: `timeFactor는 체크인 순서에 의한 것으로 1등에게 250을 부여하고, 9,576등에게 100을 부여하며, 그 사이에는 1차함수를 적용하여 linear하게 감소시켜 적용한다.`,
  tabs_7_content_19: `<b>이주정착 지원금의 지급은 최종 체크인된 카드의 수가 변경이 없는 상태에서  31일 후에 클레임에 의해 지급된다. 중간에 카드를 추가하거나 체크아웃하면 그로부터 다시 31일을 기다려야 한다.</b>`,
  tabs_7_content_20: `<b>3. ‘기본 소득’의 할당과 지급</b>`,
  tabs_7_content_21: `기본 소득은 체크인 기간 동안 1일 카드당 약 34개씩 할당된다. (정확히는 0.00511409803 LEEDO per block per card)`,
  tabs_7_content_22: `기본 소득의 지급은 홀더에 의한 LEEDO 토큰 클레임이나 체크인된 카드 숫자의 변경(일부 또는 전체 카드의 체크인이나 체크아웃) 시에 홀더의 지갑 주소로 지급된다.`,
  tabs_7_content_23: `Season 0의 ‘기본 소득’ 지급 기간은 365일을 최대로 하지만, 기본 소득에 할당된 토큰의 잔여액 상황을 고려한 DAO의 결정에 의해 연장될 수 있다.`,

  tabs_8_content_1: `<b>Connect your wallet</b>`,
  tabs_8_content_2: `Connect wallet`,
  tabs_8_content_3: `체크인 카운터가 오픈되었습니다.<br>
                        여러분이 가진 오징어 게임 카드를 체크인 카운터에 제시하여 체크인하십시오.
                        체크인을 여러분 스스로의 결정에 따른 것으로 누구도 강요하지 않습니다.<br><br> 
                        체크인한 모든 카드에는 메타버스로 이주하여 쓰실 기본소득 화폐가 지급됩니다.
                        카드 당 얼마큼씩의 기본 소득이 제공될 것인지는 <span class="minting-method-link" onclick="routeToOverview()">LEEDO 소개</span>  탭을 참조하십시오.
                        여러분은 메타버스 이주 이후에 언제든지 본인의 결정에 따라 돌아오실 수 있습니다.
                        중도 귀환에 따른 어떤 불이익도 없습니다. <br><br>
                        또한 오징어 게임 카드당 1회로 이주 정착 지원금이 지급됩니다.
                        지원금의 할당량은 카드마다 매우 다르며 체크인을 한 이후 200,000블록, 약 31일 후 지급됩니다.
                        다만, 체크인을 한 카드의 숫자가 변하는 경우 다시 31일을 기다려야 하는 점은 주의하십시오.<br><br>
                        더 자세한 내용은 <span class="minting-method-link" onclick="routeToLeedo()">Squid Game Card 메타버스 체크인 카드에 대한 LEEDO 토큰 지급 계획</span> 탭을 참조하시면 되며 그럼 안에서 뵙겠습니다.`,
  tabs_8_content_4: `<b>Squid Game Card 체크인 현황</b>`,
  tabs_8_content_5: `<b>Squid Game Card contract address : </b>`,
  tabs_8_content_6: `<b>Squid Game Card Staking contract address : </b>`,
  tabs_8_content_7: `<b>LEEDO ERC20 token contract address : </b>`,
  tabs_8_content_8: `<b>지갑에 LEEDO 추가</b>`,
  tabs_8_content_9: `<b>My address : </b>`,
  tabs_8_content_10: `<b>LEEDO</b>`,
  tabs_8_content_11: `<b>리워드</b>`,
  tabs_8_content_12: `<b><span class="erc20-rewards"></span></b>`,
  tabs_8_content_13: `지급받은 리워드`,
  tabs_8_content_14: `<b>보유중인 카드</b>`,
  tabs_8_content_15: `cards`,
  tabs_8_content_16: `<b>체크인한 카드</b>`,
  tabs_8_content_17: `cards`,
  tabs_8_content_18: `Available for staking`,
  tabs_8_content_19: `Staked`,
  tabs_8_content_network_info:
    "지갑이 이더리움 메인넷에 연결되어 있는지 확인하세요.<br>체크인 카운터를 이용하시려면 이더리움 메인넷으로 전환하시기 바랍니다.",

  tabs_8_one_time_bonus: "<b>이주 정착 지원금</b>",
  tabs_8_one_time_bonus_claim: "<b>이주 정착 지원금 청구</b>",
  tabs_8_one_time_bonus_info:
    "Staking한 카드에 대한 이주 정착 지원금은 카드당 1회 청구 가능합니다..",

  tabs_9_content_1: "<b>Leedorian Metaverse contract address : </b>",
  tabs_9_content_2: `<b>LEEDO ERC20 token contract address : </b>`,
  tabs_9_content_welcome: "<b>Leedorian 메타버스에 오신 것을 환영합니다!</b>",
  tabs_9_content_info:
    "높은 가스비로 오염된 이더리움 메인넷을 떠나, 매일 수백번씩 가스를 써도 되는 행성에 구축된 Leedorian 메타버스는 여러분에게 무한한 자유를 선사할 것입니다.<br>자유롭긴 하지만 아직은 심심하실 수 있습니다. 아직 게임이 없기 때문이죠.<br> 수많은 게임들이 입주할 게임센터가 건설 중입니다. 게임 센터가 완공되면, 누구나 쉽게 게임을 만들고, 자신이 만든 게임으로 돈을 벌 수 있고, 게임에 참여해서 돈을 벌 수 있습니다.<br>계속 지갑에 쌓이는 LEEDO를 다 쓰지 못하는 진짜 자유를 모두가 누리는 그날을 위해!<br><br><b>Leedorian 만세!</b>",
  tabs_9_content_network_info:
    "지갑이 Matic Polygon 메인넷에 연결되어 있는지 확인하세요.<br>Leedorian 메타버스를 이용하시려면 Matic Polygon 메인넷으로 전환하시기 바랍니다.<br>메타마스크 지갑에 네트워크를 추가하는 방법은 FAQ를 참조하세요.",

  tabs_10_title: "Leedo DAO",
  tabs_10_content_1: "<strong>이제 Leedo DAO가 프로젝트를 인수합니다!</strong>",
  tabs_10_content_2:
    "2021년 12월 30일(UTC)에 LEEDO 토큰 순환 기준 82%의 참여율로 Leedo DAO를 성공적으로 런칭했습니다.",
  tabs_10_content_3: "Snapshot 투표 결과 보기",
  tabs_10_content_4:
    "(1) Leedo DAO는 모든 프로토콜 소유 자산을 관리하고 프로토콜 및 계약 매개변수를 업데이트하기 위한 관리 계약 트랜잭션의 책임 있는 실행을 담당합니다.",
  tabs_10_content_5:
    "(2) DAO 시스템은 (a) DAO 다중 서명 계약과 (b) Snapshot 오프체인 LEEDO 토큰 투표 시스템의 두 가지 주요 부분으로 구성됩니다.",
  tabs_10_content_6:
    "(3) Leedo 프로젝트의 모든 중요한 사항은 Snapshot 투표로 결정합니다.",
  tabs_10_content_7:
    "(4) Multisig contract은 모든 LEEDO 프로젝트 스마트 계약에 대한 투표 결과를 실행합니다.",
  tabs_10_content_8:
    "(5) Multisig contract에는 가장 활동적인 커뮤니티 구성원과 가장 많은 NFT 및 LEEDO 토큰 보유자 중 내부 커뮤니케이션을 통해 선택된 초기 9명의 서명자가 있습니다.",
  tabs_10_content_9:
    "(6) Multisig contract은 모든 거래를 실행하기 위해 9명의 서명자 중 5명의 확인이 필요합니다.",
  tabs_10_content_10: "(7) 초기 DAO Multisig contract 서명자:",
  tabs_10_content_11:
    "(8) 초기 서명자는 Snapshot 투표 또는 서명자의 자체 결정으로 대체될 수 있습니다.",
  tabs_10_content_12: "Ethereum Multisig",
  tabs_10_content_13:
    "https://gnosis-safe.io/app/eth:0xD159e1FFE53d18Aa149696c97185057CC13BD129",
  tabs_10_content_14: "Polygon Multisig",
  tabs_10_content_15:
    "https://gnosis-safe.io/app/matic:0xa7201253179eDDdf7C42A76b22eae4A8654073bc",
};
//start en
setLanguage(lang);

function setLanguage(currentLanguage) {
  // console.log("setLanguage", arguments);
  // console.log(arguments[0])
  //button hide show
  $("button[class='ko button-small lang-switch-btn']").hide();
  $("button[class='en button-small lang-switch-btn']").hide();
  if (arguments[0] === "en") {
    $("button[class='ko button-small lang-switch-btn']").show();
  } else if (arguments[0] === "ko") {
    $("button[class='en button-small lang-switch-btn']").show();
  }

  $("[data-langNum]").each(function () {
    var $this = $(this);
    $this.html($.lang[currentLanguage][$this.data("langnum")]);
  });
}
// var lang = $('en').data('lang');
// setLanguage(lang);
$("button[name='btn-lang']").click(function () {
  var lang = $(this).data("lang");
  // console.log(lang)
  setLanguage(lang);
});
