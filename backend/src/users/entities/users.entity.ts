import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Offer } from 'src/offers/entities/offers.entity';
import { FanInteraction } from 'src/fan_interactions/entities/fan_interaction.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    instagramId: string;

    @Column({ nullable: true })
    twitterId: string;

    @Column()
    role: 'artist' | 'fan';

    @OneToMany(() => Offer, (offer: Offer) => offer.artist)
    offers: Offer[];

    @OneToMany(() => FanInteraction, (interaction: FanInteraction) => interaction.fan)
    interactions: FanInteraction[];


    @Column({ default: 0 })
    points: number;

    @Column({ default: 0 })
    rank: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
