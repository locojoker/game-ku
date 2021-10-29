export interface Tournament{
    id : number,
    PlayingDate : Date,
    HomeTeam : string,
    AwayTeam : string,
    HomeScore : number,
    AwayScore : number,
    RefName : string,
    notes? : string
}