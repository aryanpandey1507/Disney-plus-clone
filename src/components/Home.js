import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import {useEffect} from'react';
import {useDispatch , useSelector} from 'react-redux';
import { selectusername } from "./features/user/userSlice";
import {getDocs,collection, getFirestore} from "firebase/firestore";
import { setMovies } from "./features/movie/movieSlice";



function Home() {

    
    const username =  useSelector(selectusername);
    const dispatch = useDispatch();


    useEffect(()=>{

    let recommends = [];
    let newdisney = [];
    let originals = [];
    let trending = [];

    const db=getFirestore();
    const colRef=  collection(db , 'movies')

        getDocs(colRef)
        .then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                switch(doc.data().type)
                {
                    
                    case'recommend':
                        recommends = [...recommends,{id:doc.id ,...doc.data()}];
                        break;

                    case'new':
                        newdisney= [...newdisney,{id:doc.id ,...doc.data()}];
                        break;

                    case'original':
                        originals= [...originals,{id:doc.id ,...doc.data()}];
                        break;

                    case'trending':
                        trending= [...trending,{id:doc.id ,...doc.data()}];
                        break;

                    default: console.log('disney+');
                
                }

                console.log(recommends);

                dispatch(
                    setMovies({
                    recommend:recommends,
                    newdisney:newdisney,
                    original: originals,
                    trending: trending,
                })
             );
             
            });
        }).catch(err=>{
            console.log(err.message);
        });

    

            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[username])
    
    return (  
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
}


const Container = styled.main`
position:relative;
min-height: calc(40vh);
overflow-x:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);

&:after
{
    background: url("./images/home-background.png") center center/cover no-repeat fixed;
    content:'';
    position: absolute;
    inset:0px;
    opacity:1;
    z-index:-1;

}

`;



export default Home;