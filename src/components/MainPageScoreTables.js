import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BasicTable from './MainPageTable';
import CustomPaginationActionsTable from './PaginationTable';
import CircularProgress from "@material-ui/core/CircularProgress";


export default function MainPageScoreTables({allScores}) {

    const [topTenScoresThisTrimester, setTopTenScoresThisTrimester] = useState([]);
    const [allTimeHighScores, setAllTimeHighScores] = useState([]);


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: 50,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    useEffect(() => {
        console.log("Fetching Data");
        setTimeout(() => {
            setTopTenScoresThisTrimester([
                { name: 'Marylyn Stankiewicz', points: 42 },
                { name: 'Nelda Bland', points: 42 },
                { name: 'Karine Bjornson', points: 41 },
                { name: 'Wyatt Steinbeck', points: 38 },
                { name: 'Tawnya Snow', points: 35 },
                { name: 'Betsy Przybyla', points: 31 },
                { name: 'Carolina Robey', points: 28 },
                { name: 'Angelina Duhn', points: 26 },
                { name: 'Sharron Johannsen', points: 26 },
                { name: 'Salvatore Lenard', points: 25 },
            ]);
            setAllTimeHighScores([
                { name: 'Santa Claus', points: 568 },
                { name: 'Buddy Elf', points: 202 },
                { name: 'Rudolf Reindeer', points: 178 },
                { name: 'Nelda Bland', points: 114 },
                { name: 'Nakia Keener', points: 113 },
                { name: 'Suellen Ling', points: 102 },
                { name: 'Elouise Rolan', points: 94 },
                { name: 'Kirby Mean', points: 94 },
                { name: 'Cecily Aslinger', points: 89 },
                { name: 'Molly Atterbury', points: 87 },
            ]);
            
            // setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className="App">

            <div className={classes.root}>
                <Grid container spacing={3}>

                    {/*Row */}
                    <Grid item xs={1}>
                        <img src = "images/trophy1.png"
                             alt = "Picture of a trophy" />
                    </Grid>
                    <Grid item xs={4}>
                        <h2>The Elite: Top Ten Scores This Trimester </h2>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={1}>
                        <img src = "images/trophy2.png"
                             alt = "Picture of a trophy" />
                    </Grid>
                    <Grid item xs={4}>
                        <h2>All Stars:  Top Ten All Time High Scores</h2>
                    </Grid>

                    {/*Row */}
                    <Grid item xs={5}>
                        <BasicTable rows={topTenScoresThisTrimester} />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={5}>
                        <BasicTable rows={allTimeHighScores} />
                    </Grid>

                    {/*Row */}
                    <Grid item xs={12}>
                        <h2>All Scores</h2>
                        <CustomPaginationActionsTable rows={allScores}/>
                    </Grid>
                </Grid>
            </div>


        </div>
    );
}

