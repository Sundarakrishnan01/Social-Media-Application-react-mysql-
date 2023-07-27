import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../login/navbar';
import './home.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useState } from 'react';
import UserService from '../Api/UserService';
import { useNavigate } from 'react-router-dom';




export default function MediaCard() {
    const navigate = useNavigate('');

    React.useEffect(() => {
        fetchData();
    }, []);

    const [details, setDetails] = useState([]);

    const fetchData = async () => {
        try {
            const response = await UserService.getPosts();
            setDetails(response.data);
            console.log(response);
            console.log(details);
        }
        catch (error) {
            console.log(error);
        }
    }

    const [like, addLike] = useState(0);
    function increment() {
        addLike(like + 1);
    }
    

    return (
        <div style={{ maxWidth: '200vh' }}>
            <Navbar />
            <div className='box1'>
                {
                    details.map(ele => {
                        return (
                            <Card sx={{ maxWidth: 345 }} style={{marginBottom:'10%'}}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Avatar
                                        onClick={()=> navigate('/profile')}
                                        sx={{ bgcolor: 'blue' }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    />
                                        
                                    
                                    <div style={{ paddingLeft: '2%' }}>
                                        
                                        <Typography> {ele.email}</Typography>
                                        <Typography>  Location</Typography>
                                    </div>
                                </div>

                                <CardMedia className='box'
                                    sx={{ height: 140 }}
                                    image="https://th.bing.com/th/id/OIP.zp6MVgxThP_T02u2v6Wc_AHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                    title="Trump"
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="div">
                                        Donald Trump
                                    </Typography> */}
                                    <Typography variant="body2" color="text.secondary">
                                        {ele.message}
                                    </Typography>
                                </CardContent>
                                <CardActions className='actions'>
                                    <ThumbUpOffAltIcon onClick={increment} />{like}

                                    <InsertCommentIcon />
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        );
                    })
                }

            </div>
        </div>
    );
}