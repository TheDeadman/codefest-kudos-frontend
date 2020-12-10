import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import AppBar from './AppBar'
import BasicTable from './components/MainPageTable';
import Reviews from './components/Reviews';
import FeedbackForm from './components/FeedbackForm';
import './App.css';
import FeedbackFormDialog from "./components/FeedbackForm";


function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [rowData, setRowData] = useState([]);
    const [currentPage, setCurrentPage] = useState('MainPage');

    useEffect(() => {
        console.log("Fetching Data");
        axios.get('http://23.100.225.116:3040/associates').then(res => {
            setRowData(res.data.sort((a,b) => b.points - a.points));
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="App">
            <AppBar />

            <Container maxWidth="md">
                <div style={{ display: 'flex', marginTop: 30 }}>
                    <Typography style={{ flex: 1 }} variant="h4">
                        {currentPage === "MainPage" && "Leaders"}
                        {currentPage === "Reviews" && "Feedback Received"}
                        {currentPage === "FeedbackForm" && "Show your Appreciation"}
                    </Typography>
                    
                    {currentPage !== "Reviews" && <div><Button variant="contained" color="primary" onClick={() => {setCurrentPage('Reviews')}}>
                        Feedback I Received
                    </Button></div>}
                    {currentPage === "Reviews" && <div><Button variant="contained" color="primary" onClick={() => {setCurrentPage('MainPage')}}>
                        Back
                    </Button></div>}
                    &nbsp;&nbsp;
                    <FeedbackFormDialog/>

                </div>
                {isLoading && <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </div>}


                {!isLoading && currentPage === "MainPage" && <>
                    <BasicTable rows={rowData} />
                </>
                }

                {currentPage === "Reviews" && <Reviews />}
                {currentPage === "FeedbackForm" && <FeedbackForm />}
            </Container>

        </div>
    );
}

export default App;
