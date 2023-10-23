import React from 'react';
import { Card, Button, ButtonGroup, Typography, Box, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import LanguageCard from '../../components/LanguageCard';
import {useState, useEffect } from 'react';
import {auth} from '../../apis';
import Routes from '../../shared/routes';
import Autocomplete from '@mui/material/Autocomplete';


const AdminPage = () => {
    const [cardDetails,setCardDetails] = useState([]);
    const [allLangs,setAllLangs] = useState([]);
    useEffect(() => {
        const url = Routes.getUserLanguages;
        const allurl = Routes.getAllLangs;
        auth({ method: "post", url: url })
            .then(data => {
                setCardDetails(data.data.languages);
            })
            .catch(error => {
                console.log("EEError:", error);
            });

        auth({ method: "post", url: allurl })
            .then(data => {
                setAllLangs(data.data.languages);
            })
            .catch(error => {
                console.log("EEError:", error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Typography variant="h6" align="center">
                My languages
            </Typography>
            <LanguageGrid cardDetails={cardDetails} allLanguages={allLangs}/>
        </div>

    );
};


function LanguageGrid({ cardDetails, allLanguages }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (event, newValue) => {
    setSelectedLanguage(newValue);
  };

  const onAddLanguage = () => {
        const unlockLangurl = Routes.unlockLang;
        auth({ method: "post", url: unlockLangurl, data: {language: selectedLanguage} })
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(error => {
                console.log("EEError:", error);
            });
  }

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',width:'100%'}}>
      {/* Display message if the list is empty */}
      {cardDetails.length === 0 ? (
        <Typography variant="h6" align="center">
          No languages selected
        </Typography>
      ) : (
          <Grid container spacing={3} style={{justifyContent:'center'}}>
            {cardDetails.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                <LanguageCard languageName={card.language} level={card.level} />
              </Grid>
            ))}
          </Grid>
      )}

    
        <Autocomplete
            id="language-selector"
            options={allLanguages}
            value={selectedLanguage}
            onChange={handleLanguageChange}
            renderInput={(params) => <TextField {...params} label="Select Language" />}
            style={{width:'30%'}}
        />

        <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={() => {
                onAddLanguage()
            }}
        >
        Add Language
        </Button>



    </div>
  );
}



export default AdminPage;
