import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';


function Signup() {
    return (

        <div >

            <div style={{

                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant="h6">

                    Welcome to Coursera. Sign up below
                </Typography>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card variant="outlined"
                    style={{
                        padding: 20,
                        width: 400
                    }}>


                    <TextField
                        id={"username"}
                        fullWidth={true}
                        label="Username"
                        variant="outlined" />
                    <br></br>
                    <br></br>
                    <TextField id={"password"}
                        fullWidth={true}
                        label="Password"
                        variant="outlined" type="password" />
                    <br></br>
                    <br></br>
                    <Button size="large" variant="contained"
                        onClick={() => {
                            let username = document.getElementById("username").value;
                            let password = document.getElementById("password").value;

                            console.log(password + username)
                            fetch("http://localhost:3000/admin/signup", {
                                method : "POST",
                                body : JSON.stringify(
                                    {
                                        username,
                                        password
                                    }
                                ),
                                headers : {
                                    "Content-Type" : "application/json"
                                }
                            }).then((res)=> {
                                res.json();
                            })
                            .then((data) => {
                                console.log(data);
                            })
                        }}
                    >Sign Up</Button>

                </Card>


            </div>
        </div>
    )

}

export default Signup;