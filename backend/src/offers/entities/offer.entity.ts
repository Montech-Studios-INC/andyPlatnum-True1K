import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'offers' })
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: [
      'VIPConcertNFT',
      'PersonalizedVideoNFT',
      'ExclusiveMerchNFT',
      'PrivateConcertNFT',
      'LunchDinnerNFT',
      'CollaborativeMusicNFT',
      'SignedInstrumentNFT',
      'TourBusNFT',
      'ListeningPartyNFT',
      'CustomPlaylistNFT',
      'MusicVideoNFT',
      'LimitedEditionNFT',
      'HandwrittenLyricsNFT',
      'AlbumBoxSetNFT',
      'FanZoomNFT'
    ],
    default: 'FanZoomNFT',
  })
  offerType: string;

  @Column()
  availableSlots: number;

  @Column({ nullable: true })
  price: number;

  @Column({ default: false })
  isRaffle: boolean;

  @Column({
    type: 'bigint',
    enum: [1000, 10000, 9223372036854775807],
    default: 1000,
  })
  entrantLimit: number;

  @Column()
  customUrl: string;

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date
}
