import { Offer } from "@/types/offer";
import { Stat } from "@/types/stat";
import { NFT } from "@/types/nft";
import { Socials } from "@/types/socials";

const socials: Socials = {
    youtube: "",
    twitter: ""
} 

export const mockTrendingOffers: Offer[] = [
    {
        id: 1,
        tier: "Diamond", 
        paid: true,
        price: 50,
        artist_name: "artist",
        artist_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title1",
        description: "description",
        location: "location",
        location_url: "https://www.google.com/maps",
        time: Date.now(),
        headcount: 100,
        social_links: socials,
        image: "https://www.tickpick.com/blog/wp-content/uploads/2022/06/tijs-van-leur-So6YckShOVA-unsplash.jpg"
    },
    {
        id: 2,
        tier: "Diamond", 
        paid: true,
        price: 50,
        artist_name: "artist",
        artist_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title2",
        description: "description",
        location: "location",
        location_url: "https://www.google.com/maps",
        time: Date.now(),
        headcount: 100,
        social_links: socials,
        image: "https://www.tickpick.com/blog/wp-content/uploads/2022/06/tijs-van-leur-So6YckShOVA-unsplash.jpg"
    }
];

export const mockOffers: Offer[] = [
    {
        id: 1,
        tier: "Diamond", 
        paid: true,
        price: 50,
        artist_name: "artist",
        artist_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title1",
        description: "description",
        location: "location",
        location_url: "https://www.google.com/maps",
        time: Date.now(),
        headcount: 100,
        social_links: socials,
        image: "https://www.tickpick.com/blog/wp-content/uploads/2022/06/tijs-van-leur-So6YckShOVA-unsplash.jpg"
    },
    {
        id: 2,
        tier: "Diamond", 
        paid: true,
        price: 50,
        artist_name: "artist",
        artist_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title2",
        description: "description",
        location: "location",
        location_url: "https://www.google.com/maps",
        time: Date.now(),
        headcount: 100,
        social_links: socials,
        image: "https://www.tickpick.com/blog/wp-content/uploads/2022/06/tijs-van-leur-So6YckShOVA-unsplash.jpg"
    },
    {
        id: 3,
        tier: "Diamond", 
        paid: true,
        price: 50,
        artist_name: "artist",
        artist_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title3",
        description: "description",
        location: "location",
        location_url: "https://www.google.com/maps",
        time: Date.now(),
        headcount: 100,
        social_links: socials,
        image: "https://www.tickpick.com/blog/wp-content/uploads/2022/06/tijs-van-leur-So6YckShOVA-unsplash.jpg"
    }
];

export const mockStats: Stat[] = [
    {
        id: 1,
        title: "Points",
        value: "37"
    },
    {
        id: 2,
        title: "NFTs",
        value: "12"
    },
    {
        id: 3,
        title: "Leaderboard #",
        value: "1,289"
    },
    {
        id: 4,
        title: "Badge",
        value: "Starter"
    }
];

export const mockNFTs: NFT[] = [
    {
        id: 1,
        name: "name",
        blockchain: "Solana",
        minted: true,
        url: "https://opensea.io",
        image: "https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg"
    },
    {
        id: 2,
        name: "name",
        blockchain: "Solana",
        minted: true,
        url: "https://opensea.io",
        image: "https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg"
    },
    {
        id: 3,
        name: "name",
        blockchain: "Solana",
        minted: true,
        url: "https://opensea.io",
        image: "https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg"
    }
];
