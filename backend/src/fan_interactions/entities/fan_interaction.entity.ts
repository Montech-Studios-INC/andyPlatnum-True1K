import { Offer } from "src/offers/entities/offers.entity";
import { User } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('fan_interactions')
export class FanInteraction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, fan => fan.interactions)
  fan: User;

  @Column({
    type: 'enum',
    enum: ['offer_participation', 'payment', 'social_media_engagement'],
    default: 'offer_participation'
  })
  interaction_type: string;

  @ManyToOne(() => Offer, { nullable: true })
  offer: Offer;

  @Column()
  points: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

