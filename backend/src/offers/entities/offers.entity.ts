import { User } from 'src/users/users.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'offers' })
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.offers)
  artist: User;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
