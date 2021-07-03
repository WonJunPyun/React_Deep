import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";
import {Grid, Image, Text} from "../elements";


const Post = (props) =>{
    
    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_ctn}개</Text>
                </Grid >
            </Grid>
        </React.Fragment>
    );
}

Post.defaultProps={
    user_info:{
        user_name:"onejun",
        user_porfile:"https://dszw1qtcnsa5e.cloudfront.net/community/20201027/32e29b2d-7be4-46a9-9de3-ed707d8598f5/c67537a607e37016cd65de01fb4bf437.jpg",
    },
    image_url: "https://dszw1qtcnsa5e.cloudfront.net/community/20201027/32e29b2d-7be4-46a9-9de3-ed707d8598f5/c67537a607e37016cd65de01fb4bf437.jpg",
    contents : "돈을 받은 루피 입니다!",
    comment_ctn: 10,
    insert_dt: "2021-07-02 10:00:00",
};


export default Post ;