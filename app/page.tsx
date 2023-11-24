'use client'
/* eslint-disable react/jsx-no-comment-textnodes */
import NavMenu from '@/components/NavMenu'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
// import {
//   // products,
//   stations,
//   // uk_stations,
//   // us_stations,
// } from '@/constants/constants.js'
import { useState } from 'react'
import SelectGenre from '@/components/SelectGenre'
import { Radio } from '@/types.js'
import { Input } from '@/components/ui/input'

const stations = [
  {
    radio_id: 1,
    radio_name: 'Extreme Deep House',
    radio_image: 'https://static.mytuner.mobi/media/tvos_radios/zAgGRsC42e.jpg',
    radio_url: 'https://whsh4u-panel.com/proxy/yfryujzw?mp=/stream',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 2,
    radio_name: 'Vanilla Radio Deep Flavors',
    radio_image:
      'https://www.vanillaradio.com/wp-content/uploads/2020/04/Logo-deepflash-player-1000x1000-1.jpg',
    radio_url: 'https://stream.vanillaradio.com:8012/live',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 3,
    radio_name: 'Vanilla Radio Smooth Flavors',
    radio_image:
      'https://www.vanillaradio.com/wp-content/uploads/2020/04/Logo-smoothflash-player-1000x1000-1.jpg',
    radio_url: 'https://smooth.vanillaradio.com:8032/live',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 4,
    radio_name: 'Vanilla Radio Fresh Flavors',
    radio_image:
      'https://www.vanillaradio.com/wp-content/uploads/2020/04/Logo-freshflash-player-1000x1000-1.jpg',
    radio_url: 'https://fresh.vanillaradio.com:8028/live',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 118634,
    radio_name: 'Radio ENERGY - 00s Only',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/42570520-2023-02-23.png',
    radio_url: 'http://play.global.audio/energy-00shi.aac',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 118633,
    radio_name: 'Radio NOVA NEWS',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/76857618-2023-02-23.png',
    radio_url: 'http://23553.live.streamtheworld.com:80/RADIO_NOVANEWSAAC_H_SC',
    genre: 'Talk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 117003,
    radio_name: 'Radio Euronews Bulgaria',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/97926246-2022-12-08.png',
    radio_url: 'http://freeuk25.listen2myradio.com:8560/stream',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 116698,
    radio_name: 'БГ Радио - Естрада',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/91597560-2022-11-23.png',
    radio_url: 'http://stream.metacast.eu/bgestrada',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 114768,
    radio_name: 'Metrocast - Metro Urban Hits',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/30581150-2022-11-07.png',
    radio_url: 'http://eu1.reliastream.com/proxy/metroxmas?mp=/MCR',
    genre: 'Hip Hop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 114767,
    radio_name: 'Metrocast - Love 90s',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/31764238-2022-11-07.png',
    radio_url: 'http://eu1.reliastream.com/proxy/love80?mp=/MLR90S',
    genre: 'Decades',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 114766,
    radio_name: 'Metrocast - Love 80s',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/39502838-2022-11-07.png',
    radio_url: 'http://eu1.reliastream.com/proxy/love80?mp=/MLR80S',
    genre: 'Decades',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 114765,
    radio_name: 'Metrocast - Top Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/99704513-2022-11-07.png',
    radio_url: 'http://eu1.reliastream.com/proxy/mgr?mp=/MGR',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 113205,
    radio_name: 'BadRock Radio - BadRock Hard & Heavy',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/94540317-2022-11-05.png',
    radio_url: 'http://meg.novahost.bg:8049/live',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 113204,
    radio_name: 'BadRock Radio - BadRock National HD',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/96698373-2022-11-05.png',
    radio_url: 'http://meg.novahost.bg:8028/live',
    genre: 'Decades',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 113182,
    radio_name: 'Deep Radio Europe',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/29236754-2022-11-05.png',
    radio_url: 'http://79.98.108.174:8000/stream',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 107138,
    radio_name: 'Радио Пияница',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/90111532-2022-03-21.png',
    radio_url: 'http://mpc1.mediacp.eu:8024/;',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 106666,
    radio_name: 'Easy Radio.Bg',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/77006920-2022-03-21.png',
    radio_url: 'http://live.easyradio.bg/192',
    genre: 'Decades',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 106363,
    radio_name: 'SWEET RADIO',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/99863498-2022-03-21.png',
    radio_url: 'http://cdn.tvoetoradio.net:8000/HD',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105908,
    radio_name: 'Metrocast - Metro Love',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/89721003-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com/proxy/service?mp=/service',
    genre: 'Talk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105907,
    radio_name: 'Metrocast - Metro Solid Rock',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/71016249-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com/proxy/msrr?mp=/MSRR',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105906,
    radio_name: 'Metrocast - Metro Hits',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/02983703-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com/proxy/mhr?mp=/MHR',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105905,
    radio_name: 'Metrocast - Metro Virtuoso',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/26026314-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com/proxy/mvr?mp=/MVR',
    genre: 'Classical',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105904,
    radio_name: 'Metrocast - Metro Groove',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/05637978-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com:7000/MGR',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105903,
    radio_name: 'Metrocast - Metro Dance',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/94548819-2022-03-21.png',
    radio_url: 'http://eu1.reliastream.com:7017/MDR',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 105496,
    radio_name: 'Old Skull Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/12816245-2022-03-20.png',
    radio_url: 'http://stream.zeno.fm/r8s98br2ud0uv',
    genre: 'Alternative',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 99852,
    radio_name: 'Радио NET',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/56061817-2022-03-20.png',
    radio_url: 'http://195.24.89.6:8000/',
    genre: 'Jazz',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 96463,
    radio_name: 'FM+ - Radio ZRock Online',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/00215628-2022-03-20.png',
    radio_url: 'http://193.108.24.6:8000/zrock',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 94682,
    radio_name: 'Eilo Radio - Earth & Beat Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/24023190-2022-03-20.png',
    radio_url: 'http://stream.eilo.org:8000/earthbeat',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 93863,
    radio_name: 'Radio Z-Rock',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/78034831-2022-03-20.png',
    radio_url: 'http://46.10.150.243:80/z-rock.mp3',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 93819,
    radio_name: 'Radio 999',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/56247110-2022-03-20.png',
    radio_url: 'http://62.204.158.5:8081/live',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 93818,
    radio_name: 'Radio ENERGY - Hits 90s',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/90654216-2022-03-20.png',
    radio_url: 'http://play.global.audio/energy-90s',
    genre: 'Decades',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 88844,
    radio_name: 'Балканско Радио',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/19614725-2022-03-19.png',
    radio_url: 'http://176.56.236.86:8001/live.mp3',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 88292,
    radio_name: 'Eilo Radio - Jazz, Funk & Soul Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/13405445-2022-03-19.png',
    radio_url: 'http://stream.eilo.org:8000/jazzfunksoul',
    genre: 'RnB',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 88216,
    radio_name: 'XRaydio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/22798285-2022-03-19.png',
    radio_url: 'http://xraydio.ddns.net:8000/live',
    genre: 'Jazz',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 87609,
    radio_name: 'Jazz FM Lounge',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/32554943-2022-03-19.png',
    radio_url: 'http://live.btvradio.bg/jazz-fm-lounge.mp3',
    genre: 'Jazz',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 86577,
    radio_name: 'Sound 9 Studio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/40850568-2022-03-19.png',
    radio_url: 'http://streaming.sound9studio.com:80/musicstation',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 85955,
    radio_name: 'Радио Вис Виталис',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/85945915-2022-03-19.png',
    radio_url: 'http://freeuk24.listen2myradio.com:39679/;',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 85355,
    radio_name: 'Radio Z-Rock',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/78034831-2022-03-20.png',
    radio_url: 'http://193.108.24.6:8000/zrock',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 84451,
    radio_name: 'Радио 1 Пловдив',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/02917025-2022-03-19.png',
    radio_url: 'http://23613.live.streamtheworld.com:80/RADIO_1AAC_L_SC',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 83357,
    radio_name: 'N-JOY',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/99997437-2022-03-19.png',
    radio_url: 'http://46.10.150.243/njoy.mp3',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 82884,
    radio_name: 'Classic FM',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/43900818-2022-03-19.png',
    radio_url: 'http://live.btvradio.bg/classic-fm.mp3',
    genre: 'Classical',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 81895,
    radio_name: 'Radio Energy 89.5',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/92028192-2022-03-19.png',
    radio_url: 'http://stream.metacast.eu/nrj.aac',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 79040,
    radio_name: 'Радио Леле Мале',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/69259798-2022-03-18.png',
    radio_url: 'http://79.98.108.170:8332/stream',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 78898,
    radio_name: 'Radio Hot Dance',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/26518603-2022-03-18.png',
    radio_url: 'http://listen.hotget.net:800/;',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 78814,
    radio_name: 'Radio Folk',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/37796150-2022-03-18.png',
    radio_url: 'http://83.97.65.98:8000/;',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 78466,
    radio_name: 'Power FM',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/58642747-2022-03-18.png',
    radio_url: 'http://a1.virtualradio.eu:8000/powerfm.mp3',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 75027,
    radio_name: 'VM ARMedia',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/99662535-2022-03-18.png',
    radio_url: 'http://stream.zenolive.com/na6nbx6qqwzuv',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 72251,
    radio_name: 'Vibee Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/57679043-2022-03-17.png',
    radio_url: 'http://de1se01.v2beat.live/icecast.audio?t=file.mp3',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 71721,
    radio_name: 'Radioxaschove.com',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/10467908-2022-03-17.png',
    radio_url: 'http://79.98.108.173:8006/stream',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 68984,
    radio_name: 'Eilo Radio - Drum & Bass Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/92847298-2022-03-17.png',
    radio_url: 'http://eilo.org:8000/drum',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 68424,
    radio_name: 'Radio Sevlievo',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/24654171-2022-03-17.png',
    radio_url: 'http://195.68.214.130:8000/;',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 68091,
    radio_name: 'Radio Dance With Me',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/03379061-2022-03-17.png',
    radio_url: 'http://g5.turbohost.eu:8002/stream128_live',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 67782,
    radio_name: 'Eilo Radio - Trance Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/08684932-2022-03-17.png',
    radio_url: 'http://stream.eilo.org:8000/trance',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 67733,
    radio_name: 'Eilo Radio - House Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/39284385-2022-03-17.png',
    radio_url: 'http://stream.eilo.org:8000/house',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 67629,
    radio_name: 'Eilo Radio - Psychedelic Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/28509250-2022-03-17.png',
    radio_url: 'http://eilo.org:8000/psychedelic',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 67599,
    radio_name: 'Eilo Radio - Ambient & Chill Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/65740239-2022-03-17.png',
    radio_url: 'http://stream.eilo.org:8000/ambient',
    genre: 'Easy Listening',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 67332,
    radio_name: 'Radio N-Joy',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/45784756-2022-03-17.png',
    radio_url: 'http://46.10.150.243/njoy.mp3',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66992,
    radio_name: 'Eilo Radio - Hard Techno Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/95073990-2022-03-17.png',
    radio_url: 'http://stream.eilo.org:8000/hard',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66843,
    radio_name: 'Радио Ultra',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/79261362-2022-03-17.png',
    radio_url: 'http://88.80.96.25:40070/ultra.mp3',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66740,
    radio_name: 'Eilo Radio - Happy Hardcore Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/88977715-2022-03-17.png',
    radio_url: 'http://stream.eilo.org:8000/happycore',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66714,
    radio_name: 'Eilo Radio - Progressive Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/68750591-2022-03-17.png',
    radio_url: 'http://eilo.org:8000/progressive',
    genre: 'Easy Listening',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66697,
    radio_name: 'Фолк радио Наздраве',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/07344004-2022-03-17.png',
    radio_url: 'http://powerdj.sf.ddns.bulsat.com:8066/;',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66638,
    radio_name: 'Eilo Radio - Gabbafreakz Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/26721945-2022-03-17.png',
    radio_url: 'http://eilo.org:8000/gabbafreakz',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 66131,
    radio_name: 'РАДИО 1 РОК',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/25887024-2022-03-17.png',
    radio_url: 'http://stream.metacast.eu/radio1rock64',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 65517,
    radio_name: 'Radio Melody',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/83584898-2022-03-17.png',
    radio_url: 'http://193.108.24.6:8000/melody',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 64658,
    radio_name: 'Radio FM +',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/13795925-2022-03-17.png',
    radio_url: 'http://193.108.24.21:8000/fmplus',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 64322,
    radio_name: 'Радио 1',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/09138543-2022-03-17.png',
    radio_url: 'http://stream.metacast.eu/radio1128',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 64089,
    radio_name: 'Радио Вероника',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/60257464-2022-03-17.png',
    radio_url: 'http://149.13.0.80/veronika.aac',
    genre: 'Folk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 63406,
    radio_name: 'Радио Fresh!',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/42048236-2022-03-17.png',
    radio_url: 'http://193.108.24.21:8000/fresh?file=.mp3',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 62539,
    radio_name: 'Radio Nova',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/77131547-2022-03-17.png',
    radio_url: 'http://stream.metacast.eu/nova128',
    genre: 'Dance',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 60868,
    radio_name: 'bTV Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/52943812-2022-03-16.png',
    radio_url: 'http://46.10.150.123/btv-radio.mp3',
    genre: 'Language',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 60365,
    radio_name: 'Jazz FM',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/51618870-2022-03-16.png',
    radio_url: 'http://live.btvradio.bg/jazz-fm.mp3',
    genre: 'Jazz',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 59713,
    radio_name: 'BNR 2 Horizont',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/10042706-2022-03-16.png',
    radio_url: 'http://stream.bnr.bg:8011/horizont.aac',
    genre: 'Talk',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 59613,
    radio_name: 'Радио Мая',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/72532724-2022-03-17.png',
    radio_url: 'http://87.119.111.12:9000/;',
    genre: 'Electronic',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 58131,
    radio_name: 'Tangra Mega Rock',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/64946104-2022-03-16.png',
    radio_url: 'http://stream-BG-02.radiotangra.com:8000/Tangra-high',
    genre: 'Rock',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 56350,
    radio_name: 'City Radio',
    radio_image:
      'https://visitdpstudio.net/radio_world/upload/39020887-2022-03-16.png',
    radio_url: 'http://stream.metacast.eu/city128',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
  {
    radio_id: 11112,
    radio_name: 'Авторадио',
    radio_image: 'https://www.predavatel.com/bg/images/avto.gif',
    radio_url: 'http://stream.radioreklama.bg/avtoradio.mp3',
    genre: 'Pop',
    country_name: 'Bulgaria',
    country_id: 201,
  },
]

export default function Home() {
  const [filteredGenre, setFilteredGenre] = useState('')
  // const [items, setItems] = useState(stations)
  const [search, setSearch] = useState('')
  const [url, setUrl] = useState('')

  // console.log(stations)
  // const renderedStations = us_stations.slice(0, 100)
  // const renderedStations = uk_stations.slice(0, 100)
  const renderedStations = stations

  let filteredData: Radio[] = []

  if (filteredGenre !== '') {
    filteredData = renderedStations
      .filter(
        (item: { genre: string }) =>
          item.genre.toLowerCase() === filteredGenre.toLowerCase()
      )
      .filter((item: { radio_name: string }) =>
        item.radio_name.toLowerCase().includes(search.toLowerCase())
      )
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <NavMenu />
      <div className='flex justify-center gap-4'>
        <SelectGenre setFilteredGenre={setFilteredGenre} />
        <Input
          type='text'
          placeholder='Search for a radio station...'
          onChange={handleSearch}
        />
      </div>
      {/* <audio controls src={url} autoplay /> */}
      {filteredGenre === '' || filteredGenre === 'all' ? (
        <ProductList
          // setUrl={setUrl}
          items={renderedStations.filter((item: { radio_name: string }) =>
            item.radio_name.toLowerCase().includes(search.toLowerCase())
          )}
        />
      ) : (
        <ProductList items={filteredData} />
      )}
      {/* {<ProductList items={filteredData} />} */}
    </Container>
  )
}
