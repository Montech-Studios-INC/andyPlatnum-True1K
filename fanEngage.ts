import { randomInt } from 'crypto';
import { v4 as uuidv4 } from 'uuid'; // To generate custom URLs for offers

// Define the engagement types for fans
enum EngagementType {
  SocialMediaLike,
  SocialMediaShare,
  SocialMediaComment,
}

// Define the offer types for fans
enum OfferType {
 VIPConcertExperience = "VIPConcertNFT",
  PersonalizedVideoMessage = "PersonalizedVideoNFT",
  ExclusiveMerchandise = "ExclusiveMerchNFT",
  PrivateVirtualConcert = "PrivateConcertNFT",
  LunchOrDinnerWithArtist = "LunchDinnerNFT",
  CollaborativeMusicExperience = "CollaborativeMusicNFT",
  SignedInstrument = "SignedInstrumentNFT",
  TourBusHangout = "TourBusNFT",
  ExclusiveListeningParty = "ListeningPartyNFT",
  CustomPlaylistCreation = "CustomPlaylistNFT",
  FeaturedInMusicVideo = "MusicVideoNFT",
  LimitedEditionNFTs = "LimitedEditionNFT",
  HandwrittenLyrics = "HandwrittenLyricsNFT",
  ExclusiveAlbumBoxSet = "AlbumBoxSetNFT",
  FanZoomHangout = "FanZoomNFT",
}

// Define the entrant limits
enum EntrantLimit {
  OneThousand = 1000,
  TenThousand = 10000,
  Unlimited = Infinity, // Represents as many as possible
}

// Mock function to simulate Instagram/Twitter authentication via OAuth
function authenticateWithSocialMedia(platform: string, username: string): boolean {
  // In a real app, this would redirect to Instagram/Twitter OAuth API
  console.log(`${username} authenticated with ${platform} successfully!`);
  return true;
}

// Mock function to simulate 3rd party payment
function processPayment(username: string, amount: number): boolean {
  // Simulating success for payments with a 3rd party provider (Stripe, PayPal, etc.)
  console.log(`${username} successfully paid $${amount} via 3rd party payment provider.`);
  return true;
}

// Mock function to simulate social media engagement
function performSocialMediaEngagement(username: string, engagement: EngagementType): boolean {
  // Simulate a social media engagement like sharing, liking, or commenting
  console.log(`${username} performed social media engagement: ${EngagementType[engagement]}.`);
  return true;
}

// Define an Offer created by an artist
class Offer {
  id: number;
  name: string;
  offerType: OfferType;
  availableSlots: number;
  price?: number; // Optional price for the offer (between $1 and $5)
  isRaffle: boolean;
  entrantLimit: EntrantLimit;
  customUrl: string; // Custom URL for sharing with fans

  constructor(
    id: number,
    name: string,
    offerType: OfferType,
    availableSlots: number,
    entrantLimit: EntrantLimit,
    price: number | undefined,
    isRaffle: boolean,
    artistName: string
  ) {
    if (price !== undefined && (price < 1.0 || price > 5.0)) {
      throw new Error(`Price for offer ${name} must be between $1 and $5.`);
    }
    this.id = id;
    this.name = name;
    this.offerType = offerType;
    this.availableSlots = availableSlots;
    this.price = price;
    this.isRaffle = isRaffle;
    this.entrantLimit = entrantLimit;
    this.customUrl = this.generateCustomUrl(artistName, name);
  }

  // Generate custom URL for the offer
  private generateCustomUrl(artistName: string, offerName: string): string {
    const uniqueId = uuidv4();
    return `https://platform.com/${artistName}/${offerName}-${uniqueId}`;
  }
}

// Define an Artist
class Artist {
  name: string;
  offers: Map<number, Offer>;

  constructor(name: string, platform: string) {
    if (!authenticateWithSocialMedia(platform, name)) {
      throw new Error('Authentication failed');
    }
    this.name = name;
    this.offers = new Map();
  }

  // Create an offer
  createOffer(id: number, name: string, offerType: OfferType, availableSlots: number, entrantLimit: EntrantLimit, price: number | undefined, isRaffle: boolean) {
    try {
      const offer = new Offer(id, name, offerType, availableSlots, entrantLimit, price, isRaffle, this.name);
      this.offers.set(id, offer);
    } catch (e) {
      console.error(e);
    }
  }

  // Display all available offers
  displayOffers() {
    this.offers.forEach((offer, id) => {
      console.log(
        `Offer ID: ${id}, Name: ${offer.name}, Type: ${OfferType[offer.offerType]}, Available Slots: ${offer.availableSlots}, Entrant Limit: ${offer.entrantLimit}, Price: ${offer.price}, Raffle: ${offer.isRaffle}, URL: ${offer.customUrl}`
      );
    });
  }

  // Select a raffle winner
  pickRaffleWinner(offerId: number, fanEntries: Map<number, string[]>) {
    const offer = this.offers.get(offerId);
    if (offer && offer.isRaffle) {
      const entries = fanEntries.get(offerId);
      if (entries && entries.length > 0) {
        const winnerIndex = randomInt(entries.length);
        console.log(`The winner of the raffle '${offer.name}' is ${entries[winnerIndex]}!`);
      } else {
        console.log("No entries for this raffle.");
      }
    } else {
      console.log(`Offer ID ${offerId} is not a raffle or does not exist.`);
    }
  }
}

// Define a Fan
class Fan {
  name: string;
  wallet: number; // Fan's balance for payments

  constructor(name: string, platform: string, wallet: number) {
    if (!authenticateWithSocialMedia(platform, name)) {
      throw new Error('Authentication failed');
    }
    this.name = name;
    this.wallet = wallet;
  }

  // Fan joins an offer by paying or performing social media engagement
  joinOffer(artist: Artist, offerId: number, fanEntries: Map<number, string[]>, engagementType?: EngagementType) {
    const offer = artist.offers.get(offerId);
    if (!offer || offer.availableSlots <= 0) {
      console.log(`Offer ID ${offerId} not found or no more slots available.`);
      return;
    }

    if (engagementType !== undefined) {
      // If fan chooses to engage on social media
      if (performSocialMediaEngagement(this.name, engagementType)) {
        this.addToOffer(artist, offer, fanEntries);
      }
    } else if (offer.price !== undefined && this.wallet >= offer.price) {
      // If fan chooses to pay via a 3rd party payment provider
      if (processPayment(this.name, offer.price)) {
        this.wallet -= offer.price;
        this.addToOffer(artist, offer, fanEntries);
      }
    } else {
      console.log(`${this.name} does not have enough balance or engagement type not specified.`);
    }
  }

  // Add fan to the offer and simulate NFT issuance
  private addToOffer(artist: Artist, offer: Offer, fanEntries: Map<number, string[]>) {
    offer.availableSlots -= 1;
    console.log(`${this.name} successfully joined the offer: ${offer.name}. Remaining balance: $${this.wallet}`);

    // Add the fan to raffle entries if it's a raffle offer
    if (offer.isRaffle) {
      const entries = fanEntries.get(offer.id) || [];
      entries.push(this.name);
      fanEntries.set(offer.id, entries);
    }

    // Simulate issuing an NFT via Solana Blockchain
    this.issueNFT(offer.customUrl);
  }

  // Simulate NFT issuance on Solana blockchain
  private issueNFT(offerUrl: string) {
    // In a real application, here you'd interact with Solana's blockchain to mint and issue the NFT
    console.log(`NFT issued to ${this.name} for joining offer at URL: ${offerUrl}`);
  }
}

// Example usage:

// Create an artist
const artist = new Artist("AndyPlatnum", "Instagram");

// Artist creates offers (selecting a fixed number of entrants)
artist.createOffer(1, "VIP Concert Experience", OfferType.VIPConcertExperience, 5, EntrantLimit.OneThousand, 5.0, true); // Raffle offer
artist.createOffer(2, "Exclusive Merchandise", OfferType.ExclusiveMerchandise, 10, EntrantLimit.Unlimited, 3.0, false); // Non-raffle offer
artist.createOffer(3, "Fan Zoom Hangout", OfferType.FanZoomHangout, 8, EntrantLimit.TenThousand, 2.0, true); // Raffle offer

// Display artist's offers
console.log(`Offers from ${artist.name}:`);
artist.displayOffers();

// Create a fan with a wallet balance and authenticate via Twitter
const fan = new Fan("JohnDoe", "Twitter", 20.0);

// Fan entries for raffles
const fanEntries: Map<number, string[]> = new Map();

// Fan joins offers either by paying or engaging on social media
fan.joinOffer(artist, 1, fanEntries); // Joins VIP Concert Experience by paying
fan.joinOffer(artist, 2, fanEntries, EngagementType.SocialMediaLike); // Joins Exclusive Merchandise by engaging on social media
fan.joinOffer(artist, 3, fanEntries, EngagementType.SocialMediaShare); // Joins Fan Zoom Hangout by engaging on social media

// Artist picks raffle winners
artist.pickRaffleWinner(1, fanEntries); // Pick winner for VIP Concert Experience raffle
artist.pickRaffleWinner(3, fanEntries); // Pick winner for Fan Zoom Hangout raffle
