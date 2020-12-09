import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from './AppBar'
import BasicTable from './components/MainPageTable';
import Reviews from './components/Reviews';
import FeedbackForm from './components/FeedbackForm';
import './App.css';


function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [rowData, setRowData] = useState([]);
    const [currentPage, setCurrentPage] = useState('MainPage');

    useEffect(() => {
        console.log("Fetching Data");
        setTimeout(() => {
            setRowData([
                { name: 'Paul Pennel', points: 50 },
                { name: 'Alex Lindemann', points: 50 },
                { name: 'Sushmita Maganty', points: 49 },
                { name: 'Katie Zemon', points: 47 },
                { name: 'Kyle Thompson', points: 47 },
            ]);
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className="App">
            <AppBar />

            <Container maxWidth="md">
                <div style={{ display: 'flex', marginTop: 30 }}>
                    <Typography style={{ flex: 1 }} variant="h4">
                        {currentPage === "MainPage" && "Leaders"}
                        {currentPage === "Reviews" && "Reviews Text"}
                        {currentPage === "FeedbackForm" && "Show your Appreciation"}
                    </Typography>

                    <Button style={{ flexShrink: 1 }} variant="contained" color="primary" onClick={() => {setCurrentPage('FeedbackForm')}}>
                        Create Review
                    </Button>
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
