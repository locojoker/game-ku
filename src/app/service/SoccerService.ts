import { templateSourceUrl } from "@angular/compiler"
import { Injectable } from "@angular/core";
import { SEASON_TOURNAMENT, LEADERBOARD } from "./TournamenData";

@Injectable(
    {providedIn:'root'}
)
export class SoccerService {

    getTournamentAsync(){
        return Promise.resolve(SEASON_TOURNAMENT)
    }
    getTournament(){
        return SEASON_TOURNAMENT;
    }

    getAllLeaderboardAsync(){
        return Promise.resolve(LEADERBOARD)
    }
    getAllLeaderboard(){
        return templateSourceUrl;
    }
}