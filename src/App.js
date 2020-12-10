import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import AppBar from './AppBar'
import BasicTable from './components/MainPageTable';
import CustomPaginationActionsTable from './components/PaginationTable';
import Reviews from './components/Reviews';
import HonorAssociateForm from './components/HonorAssociateForm';
import './App.css';
import HonorAssociateFormDialog from "./components/HonorAssociateForm";
import MainPageScoreTables from "./components/MainPageScoreTables"

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Hardcoding the current user
const currentUserId = getParameterByName("userId") || "P123456";



function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [rowData, setRowData] = useState([]);
    const [userData, setUserData] = useState({kudos:[]});
    const [currentPage, setCurrentPage] = useState('MainPage');

    useEffect(() => {
        console.log("Fetching Data");
        axios.get('http://23.100.225.116:3040/associates').then(res => {
            setRowData(res.data.sort((a,b) => b.points - a.points));
            setIsLoading(false);
        });
        axios.get(`http://23.100.225.116:3040/associates/${currentUserId}`).then(res => {
            setUserData(res.data)
        })
    }, []);

    return (
        <div className="App">
            <AppBar />

            <Container maxWidth="lg">
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 30 }}>
                    <Typography style={{ flex: 1 }} variant="h4">
                        {currentPage === "MainPage" && ""}
                        {currentPage === "Reviews" && "My Recognition"}
                    </Typography>

                    <div><Button variant="contained" color="primary" onClick={() => {setCurrentPage('MainPage')}}>
                        Home
                    </Button></div>&nbsp;&nbsp;

                    <div><Button variant="contained" color="primary" onClick={() => {setCurrentPage('Reviews')}}>
                        My Recognition
                    </Button></div>&nbsp;&nbsp;

                    <HonorAssociateFormDialog rowData={rowData} setRowData={setRowData} currentUser={userData}/>
                </div>
            

                    {/*{isLoading && <div style={{ display: 'flex', justifyContent: 'center' }}>*/}
                    {/*    <CircularProgress />*/}
                    {/*</div>}*/}
                    {/*{!isLoading &&  <>*/}

                    {/*</>*/}
                    {/*}*/}

                    {currentPage === "Reviews" && <Reviews feedbackData={userData.kudos} />}
                    {currentPage === "MainPage" && <MainPageScoreTables allScores={rowData} />}
            </Container>


        </div>

    );
}

export default App;
