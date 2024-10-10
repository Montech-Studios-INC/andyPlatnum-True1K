import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackButton from "@/app/globals/buttons/back";
import { ArrowLeft, MoreVertical, Home, Search, Grid, User, Users, Twitter, Youtube, Calendar, MapPin } from "lucide-react";
import { Offer } from "@/types/offer";

interface OfferModalProps {
    offer: Offer;
};

const OfferModal: React.FC<OfferModalProps> = ({ offer }) => {

    const date = new Date(offer.time);

    return (
        <div className="flex flex-col text-white">
            <header className="flex justify-between items-center p-4">
                <Button variant="ghost" size="icon">
                    <BackButton>
                        <ArrowLeft className="h-8 w-8 p-1.5 rounded-full bg-[#212121]" />
                    </BackButton>
                </Button>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="h-8 w-8 p-1.5 rounded-full bg-[#212121]" />
                </Button>
            </header>
            <main className="flex-grow overflow-y-auto px-4 pb-20">
                <Card className="text-white overflow-hidden border-none">
                    <div className="relative">
                        <img
                            src={offer.image}
                            alt="Performer on stage"
                            className="w-full h-64 object-cover"
                            style={{ viewTransitionName: `offer-image-${offer.id}` }}
                        />
                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full px-2 py-1 flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">{offer.headcount}</span>
                        </div>
                    </div>
                    <CardContent className="p-4">
                        <div className="flex items-center mb-4">
                            <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={offer.artist_image} alt="Rodger Struck" />
                                <AvatarFallback>{offer.artist_name}</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold">{offer.artist_name}</span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2">{offer.title}</h1>
                        <p className="text-lg text-gray-200 mb-4">${offer.price} | {offer.tier} Tier</p>
                        <p className="text-gray-400 mb-4">{offer.description}</p>
                        <div className="flex items-center text-sm text-gray-400 mb-2">
                            <Calendar className="mr-2" />
                            <span>{date.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 mb-4">
                            <MapPin className="mr-2" />
                            <span><a href={offer.location_url} target="_blank">{offer.location}</a></span>
                        </div>
                        {offer.requirements && (
                            <div className="mb-4">
                                <h2 className="font-semibold mb-2">Requirements:</h2>
                                <p className="text-sm text-gray-400">{offer.requirements}</p>
                            </div>
                        )}
                        {offer.social_links && (
                            <div className="flex gap-4 mb-4">
                                {offer.social_links.twitter && (
                                    <Button className="flex-1 bg-gray-700 hover:bg-gray-600">
                                        <Twitter className="mr-2" />
                                        Twitter
                                    </Button>
                                )}
                                {offer.social_links.youtube && (
                                    <Button className="flex-1 bg-red-600 hover:bg-red-500">
                                        <Youtube className="mr-2" />
                                        YouTube
                                    </Button>
                                )}
                            </div>
                        )}
                    </CardContent>
                    {offer.special_offer && ( // special offer
                        <CardFooter>
                            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                Claim the offer
                            </Button>
                        </CardFooter>
                    )}
                </Card>
            </main>
            <nav className="fixed bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center max-w-screen-sm mx-auto">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Home className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Search className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-orange-500 hover:text-orange-400">
                        <Grid className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <User className="h-6 w-6" />
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default OfferModal;
