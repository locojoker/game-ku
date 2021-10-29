import { Tournament } from "../interface/tournament";
import { Leaderboard } from "../interface/leaderboard";

export const SEASON_TOURNAMENT:Tournament[] = [
    {id:1,PlayingDate:new Date(2021,08.10),HomeTeam:'CHELSEA FC',
    AwayTeam:'MANCESTER CITY',HomeScore:3,AwayScore:2,
    RefName:'Aji Setywan',notes:'Pertandingan Overtime'},
    {id:2,PlayingDate:new Date(2021,08.10),HomeTeam:'LIVERPOOL',
    AwayTeam:'WEST HAM',HomeScore:2,AwayScore:1,
    RefName:'Aji Setyawan',notes:'Pertandingan Terlalu Easy kirain keras'},
    {id:3,PlayingDate:new Date(2021,08.14),HomeTeam:'MANCESTER CITY',
    AwayTeam:'LIVERPOOL',HomeScore:3,AwayScore:2,
    RefName:'Aji Setyawan',notes:'Pertandingan Balas-Balasan'},
    {id:4,PlayingDate:new Date(2021,08.15),HomeTeam:'WEST HAM',
    AwayTeam:'BURNLEY',HomeScore:4,AwayScore:1,
    RefName:'Aji Setyawan',notes:'Pertandingan Membantai'},
    {id:5,PlayingDate:new Date(2021,08.17),HomeTeam:'BRIGHTON',
    AwayTeam:'CHELSEA FC',HomeScore:5,AwayScore:2,
    RefName:'Aji Setyawan',notes:'Pertandingan Kartu merah'},
]

export const LEADERBOARD:Leaderboard[] = [
    {id:1,name:'CHELSEA FC',type:'Over 30'},
    {id:2,name:'LIVERPOOL',type:'Over 30'},
    {id:3,name:'MANCESTER CITY',type:'Over 30'},
    {id:4,name:'WEST HAM',type:'Over 30'},
    {id:5,name:'BRIGHTON',type:'Over 30'},
    {id:6,name:'BURNLEY',type:'Over 30'}
]