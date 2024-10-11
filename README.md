# TrueOneK

The Fan Engagement App is a backend system that powers a platform where artists can create exclusive offers, and fans can participate by either making payments or engaging with the artist on social media. The platform integrates with the Solana blockchain to ensure transparency and reward participation by minting NFTs for fans when they join different offers.

The app also features a leaderboard system called TrueOneK, which ranks fans based on their interactions and displays the top 1000 die-hard fans. Fans can climb the ranks by engaging in offers, making payments, or interacting with artists on social media, and top-ranked fans can earn exclusive rewards, such as NFTs, badges, and other perks.

## Key Features

### Artist & Fan Authentication

Artists and fans can sign in using OAuth with Instagram or Twitter, ensuring secure and seamless authentication via third-party social platforms.

### Offer Creation

Artists can create exclusive offers such as raffles, VIP concert experiences, personalized video messages, and more.
Each offer has custom entrant limits (1000, 10,000, or unlimited), pricing, and shareable URLs that can be distributed to fans.

### Fan Participation

#### Fans can join offers by either:

* Making a payment through a third-party provider like Stripe or PayPal.
* Engaging with the artist on social media (e.g., liking, sharing, commenting).
* Each participation action rewards fans with points that count toward the leaderboard.

#### NFT Issuance on Solana:

The app integrates with the Solana blockchain to mint and issue NFTs to fans based on the specific offer they participate in. Each OfferType corresponds to a unique NFT.
Fans receive their NFTs in custodial accounts, ensuring transparency and digital ownership.

#### TrueOneK Leaderboard:

The TrueOneK leaderboard tracks and ranks fans based on their cumulative interactions (offer participation, payments, social media engagement).
The top 1000 fans are displayed on a real-time leaderboard, rewarding fans who engage the most with exclusive NFTs, badges, and other perks.
Fans can track their ranking and points via a personal dashboard that shows their interaction history and rank on the leaderboard.

### Raffle System

Some offers are structured as raffles, where fans are entered into a random draw upon participation. The backend manages raffle entries and randomly selects winners for these offers.

## Technical Stack
* Language: TypeScript (Node.js)
* Database: PostgreSQL or MongoDB for storing users, offers, NFTs, and leaderboard data.
* Blockchain: Solana (using Anchor or Solana-web3.js) for minting and issuing NFTs.
* Authentication: OAuth 2.0 integration with Instagram and Twitter (via Auth0 or Firebase Authentication).
* Payment Integration: Stripe or PayPal for handling fan payments.
* Infrastructure: Dockerized services for scalability, along with a CI/CD pipeline.

## Key API Endpoints
* /auth/artist: Artist authentication via Instagram/Twitter.
* /auth/fan: Fan authentication via Instagram/Twitter.
* /offer/create: API for artists to create offers.
* /fan/join/{offerId}: API for fans to join an offer via payment or social media engagement.
* /nft/mint: API to mint and issue NFTs to fans upon participation.
* /leaderboard/trueonek: API to retrieve the top 1000 fans on the leaderboard (TrueOneK).
* /fan/dashboard/{fanId}: API to view a fan’s interaction history and rank.

## Contributing

Contributions are welcome! Please follow the guidelines in CONTRIBUTING.md to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the LICENSE.md file for more details.





