import { Button, Typography } from "@mui/material";

function AppBar() {
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10
    }}
    >
        <div>

            <Typography variant="h6"> Coursera </Typography>
        </div>

        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div style={{
                marginRight: 10
            }}>
                <Button variant="contained"
                    onClick={() => {
                        window.location = "/login"
                    }}
                >Sign in</Button>

            </div>
            <div>
                <Button variant="contained"
                    onClick={() => {
                        window.location = "/signup"
                    }}
                >Sign up</Button>

            </div>
        </div>


    </div>
}

export default AppBar;