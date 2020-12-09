import AppBar from './AppBar'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BasicTable from './MainPageTable'
import './App.css';

function App() {
    return (
        <div className="App">
            <AppBar/>
            <Button variant="contained" color="primary">
                Create Review
            </Button>
            <Container maxWidth="md">


                Leaders
                <BasicTable/>

                More
            </Container>

        </div>
    );
}

export default App;
