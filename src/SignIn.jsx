import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';


function SignIn() {
    return (

        <div >
            
                <div style={{

                    paddingTop: 150,
                    marginBottom: 10,
                    display: "flex",
                    justifyContent : "center"
                }}>
                    <Typography variant="h6">

                    Welcome back. Sign In below
                    </Typography>
                </div>
            
            <div style={{
                display : "flex",
                justifyContent : "center"
            }}>
                <Card variant="outlined"
                    style={{
                        padding: 20,
                        width: 400
                    }}>


                    <TextField fullWidth={true} id="outlined-basic" label="Username" variant="outlined" />
                    <br></br>
                    <br></br>
                    <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" type="password" />
                    <br></br>
                    <br></br>
                    <Button size="large" variant="contained">Sign In</Button>

                </Card>


            </div>
        </div>
    )

}

export default SignIn;