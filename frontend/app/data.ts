import { NFT } from "@/types/nft";
import { Offer } from "@/types/offer";
import { Stat } from "@/types/stat";

export const mockTrendingOffers: Offer[] = [
    {
        id: 1,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title1",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
    {
        id: 2,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title2",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
];

export const mockOffers: Offer[] = [
    {
        id: 1,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title1",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
    {
        id: 2,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title2",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
    {
        id: 3,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title3",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
];

export const mockStats: Stat[] = [
    {
        id: 1,
        title: "title",
        value: "value"
    },
    {
        id: 2,
        title: "title",
        value: "value"
    },
    {
        id: 3,
        title: "title",
        value: "value"
    },
];

export const mockNFTs: NFT[] = [
    {
        id: 1,
        name: "name",
        url: "url",
        thumbnail: "img"
    },
    {
        id: 2,
        name: "name",
        url: "url",
        thumbnail: "img"
    },
    {
        id: 3,
        name: "name",
        url: "url",
        thumbnail: "img"
    },
];

export const mockHistory: Offer[] = [
    {
        id: 1,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
    {
        id: 2,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
    {
        id: 3,
        author: "author",
        author_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uupsLO6v8Kzuby3vL/g4+Td4OHM0NLCxsnQ09W9wsTJzc/Y29zb3d9DmY3CAAAEC0lEQVR4nO2caQ+bMAxAiUMOcsD//7cLtOvoRXOYOEx5k6ZJ+/JkGTuH02HodDqdTqfT6XQ6nc4xQC2QCAAMWi/hj9r+fQUAtPVulFIIIcfR+Vm1bw7KS/aKmIamzZUdOX+zZoxzaVWj4qAm8cn5bt6qeIj0V+lNfLTNeYMaD51vyNZS3B5H+hFxSy26R5k46+DtqV3/oVyk9Ortmvky3yv1kffYRtdXIsU6MCpq5YBOivUt3vTeKXn98DbU1hBdQ568PW16w5xjHbxnUm+VZx0WhZpSOyOx7xCmN9hsa8ZmMm2VXPt2jGTaU25mr3CqZawqkA4IGm0oCjZZuKEs2CG7KbRzO80Oip4DMbuwQ7gh0Nap69V3ZP1WCVOxNUWW5C39niHYWOri1GYEnRJmBGvGam9zIPJg5Bi+VNYePIp29dMehC+SonJjfJH1+3vRUntHbe3yHrnCa2ujWHftSG2MQtK1/3Pti1YSHO3adfuiXfKqaxKcFeBU2fqi6+2L7m4uupdE+SYJdu4XPSe56KkUyhlgfWuMEkhywF18vi0JpIN2YaOkurwp3JjVXrQ+KAo3n6i0i2qgIJIubDmUw175Z1OUIyUFt2XVj4ifvDN7DtnN9V/vvOkdiqu9J3KOXjnddMODJbkKckk/mRaqd2qaCE2dIiswJFq3Mi2aMsEYMqQR6+DtohPFtGMd6knkSEz185wfgD54l/CQZi2F+o7/Ic4F8YjoZ0Cbo5cgwjdR996BYfHsozjnYiKdDv0BDLPjry+GODd0I5axAOjJrA/KBFv/km5aWnu28gUAUHpe0eoqL/hW6ReojX6wKc6z9ca4ccMZ462ddbv2arZG8o3XL3JFrA8nqR13bHk83YwPu836/87bIE8e91A2Zu8EOzZ+kmejsQtpysBgg/LnDnOkzoQMLZNoDhrmMdl45y4JHsWB+tbHE8S5q/tgFZR1pdL3kE/Vjnlg8BJFehMXZqkRcUC5Invi/H1aqB1ogf4HN6euaoO0xJdevZk/L+KwmBNCfRcfzzrvLnqKFYE7o+mDOic/dvAT9kAnh/rmbXB3yTCYCtZr+8EcHoCCO5pU8K4ZkCZ14kB7Jnx2BXn1xrlDw2/mv7wxKmHlWCN5E1hv3he0LvauWkOevEsuLkETWZfVQajXZd7J7peQ/5sBCOTeXlYv2M9wl3f2hjCfWOadNZVEmyIbOeEufw9ejEsPd/FwIgLpwzKls4k4JM9lYj1QKSQx3G0EO/mnnNJ/LOocEh8Lo7zzQCBxKVhnox5Dyukg0vs8BFJWgqW/84JKgnYjH+QKj88SaCjYLHpBhfDzNIhEL0zAU6vuiR5PL39Rg4mIvUtr6Ytk8ZtK6m3NC7HLKarDkS98ajh/AD4FNnEeKU9qAAAAAElFTkSuQmCC",
        title: "title",
        description: "description",
        location: "location",
        location_url: "location url",
        time: Date.now(),
        headcount: 100,
        thumbnail: "/img",
    },
];
